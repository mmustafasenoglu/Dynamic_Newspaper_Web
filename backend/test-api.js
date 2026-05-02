const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:5001/api';

async function runTests() {
  console.log('=============================================');
  console.log('🚀 BACKEND API OTOMATİK TESTLERİ BAŞLIYOR...');
  console.log('=============================================\n');
  
  let token = '';
  let createdNewsId = null;

  try {
    // --- 1. LOGIN TESTİ ---
    console.log('[TEST 1/6] Login işlemi gerçekleştiriliyor...');
    const loginRes = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'Ferittercan', password: 'ferit06.06' })
    });
    const loginData = await loginRes.json();
    if (loginRes.ok && loginData.token) {
      token = loginData.token;
      console.log('  ✅ Başarılı: Token alındı.');
    } else {
      throw new Error('Login başarısız: ' + loginData.message);
    }

    // --- 2. GET SETTINGS TESTİ ---
    console.log('\n[TEST 2/6] Ayarlar (Settings) çekiliyor...');
    const getSettingsRes = await fetch(`${BASE_URL}/settings`);
    const settingsData = await getSettingsRes.json();
    if (getSettingsRes.ok && settingsData !== undefined) {
      console.log('  ✅ Başarılı: Ayarlar çekildi (Anahtarlar: ' + Object.keys(settingsData).join(', ') + ')');
    } else {
      throw new Error('Settings GET başarısız.');
    }

    // --- 3. PUT SETTINGS TESTİ (Token Gerekli) ---
    console.log('\n[TEST 3/6] Ayarlar güncelleniyor (PUT)...');
    const putSettingsRes = await fetch(`${BASE_URL}/settings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        ...settingsData,
        bio: settingsData.bio || 'Test Bio'
      })
    });
    if (putSettingsRes.ok) {
      console.log('  ✅ Başarılı: Ayarlar JWT kullanılarak güncellendi.');
    } else {
      throw new Error('Settings PUT başarısız.');
    }

    // --- 4. GET NEWS TESTİ ---
    console.log('\n[TEST 4/6] Haberler listeleniyor...');
    const getNewsRes = await fetch(`${BASE_URL}/news`);
    const newsData = await getNewsRes.json();
    if (getNewsRes.ok && Array.isArray(newsData)) {
      console.log(`  ✅ Başarılı: Toplam ${newsData.length} adet haber var.`);
    } else {
      throw new Error('Haberler GET başarısız.');
    }

    // --- 5. POST NEWS TESTİ (Token Gerekli) ---
    console.log('\n[TEST 5/6] Yeni bir haber ekleniyor (POST)...');
    const newArticle = {
      title: 'Otomatik Test Haberi',
      content: 'Bu haber test scripti tarafından oluşturuldu. Silinecektir.',
      imageUrl: 'https://via.placeholder.com/150',
      category: 'Yazılım',
      additionalImages: ['https://via.placeholder.com/100', 'https://via.placeholder.com/101']
    };
    const postNewsRes = await fetch(`${BASE_URL}/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newArticle)
    });
    const postNewsData = await postNewsRes.json();
    if (postNewsRes.ok && postNewsData.id) {
      createdNewsId = postNewsData.id;
      console.log(`  ✅ Başarılı: Haber başarıyla eklendi! (Oluşturulan ID: ${createdNewsId})`);
    } else {
      throw new Error('Haber POST başarısız.');
    }

    // --- 6. DELETE NEWS TESTİ (Token Gerekli) ---
    console.log('\n[TEST 6/6] Oluşturulan test haberi siliniyor (DELETE)...');
    if (createdNewsId) {
      const deleteRes = await fetch(`${BASE_URL}/news/${createdNewsId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (deleteRes.ok) {
        console.log(`  ✅ Başarılı: Haber (${createdNewsId}) veritabanından silindi.`);
      } else {
        throw new Error('Haber DELETE başarısız.');
      }
    }

    console.log('\n=============================================');
    console.log('🎉🎉🎉 TÜM TESTLER BAŞARIYLA GEÇİLDİ! 🎉🎉🎉');
    console.log('Sistem yetkilendirme (JWT), CRUD işlemleri ve API\'lar sorunsuz.');
    console.log('=============================================\n');

  } catch (err) {
    console.log('\n=============================================');
    console.error('❌ HATA: Testler sırasında bir sorun oluştu!');
    console.error(err.message);
    console.log('Backend sunucusunun (http://localhost:5001) açık olduğundan emin olun.');
    console.log('=============================================\n');
  }
}

runTests();
