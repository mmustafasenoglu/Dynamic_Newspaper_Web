require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const newsRoutes = require('./routes/news');
const settingsRoutes = require('./routes/settings');

const app = express();
const PORT = process.env.PORT || 5001;
const SECRET_KEY = process.env.JWT_SECRET || 'ferit123supersecret';

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Yüklenen görselleri statik olarak sun
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer — Profil fotoğrafı yükleme
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, 'uploads')),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `profile-${Date.now()}${ext}`);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Sadece görsel dosyaları yüklenebilir.'));
  }
});

// Haber Görseli Yükleme
const newsStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, 'uploads')),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `news-${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`);
  }
});
const uploadNews = multer({
  storage: newsStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB per file
});

// JWT Middleware
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token bulunamadı.' });
  try {
    const decoded = jwt.verify(token.split(' ')[1], SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Geçersiz token.' });
  }
};

// Profil fotoğrafı yükleme endpoint
app.post('/api/upload/profile', verifyToken, upload.single('photo'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Dosya yüklenmedi.' });

  const photoUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;

  // settings.json'a kaydet
  const settingsPath = path.join(__dirname, 'data/settings.json');
  try {
    const settings = JSON.parse(fs.readFileSync(settingsPath));
    settings.profilePhoto = photoUrl;
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
    res.json({ message: 'Fotoğraf yüklendi.', photoUrl });
  } catch (e) {
    res.status(500).json({ message: 'Ayarlar güncellenemedi.' });
  }
});

// Haber tekli görsel yükleme (Ana Görsel)
app.post('/api/upload/news-image', verifyToken, uploadNews.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Dosya yüklenmedi.' });
  const photoUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
  res.json({ url: photoUrl });
});

// Haber çoklu görsel yükleme (Galeri, max 20)
app.post('/api/upload/news-gallery', verifyToken, uploadNews.array('images', 20), (req, res) => {
  if (!req.files || req.files.length === 0) return res.status(400).json({ message: 'Dosya yüklenmedi.' });
  const urls = req.files.map(file => `http://localhost:${PORT}/uploads/${file.filename}`);
  res.json({ urls });
});

// Basit Admin Girişi
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'Ferittercan' && password === 'ferit06.06') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1d' });
    return res.json({ token, message: 'Giriş başarılı' });
  }
  return res.status(401).json({ message: 'Geçersiz kullanıcı adı veya şifre' });
});

// Rotalar
app.use('/api/news', newsRoutes);
app.use('/api/settings', settingsRoutes);

app.listen(PORT, () => {
  console.log(`Backend sunucusu http://localhost:${PORT} üzerinde çalışıyor.`);
});
