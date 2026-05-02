import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [settings, setSettings] = useState({
    profilePhoto: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    name: 'Ferit Tercan',
    bio: 'Merhaba, ben Ferit Tercan. Yenilikçi ve çözüm odaklı ürünler geliştiren bir Full-Stack Geliştiriciyim.',
    bio2: 'Teknoloji dünyasındaki gelişmeleri yakından takip ederek, modern web mimarileri (React, Node.js) üzerinden ölçeklenebilir ve yüksek performanslı uygulamalar üretiyorum.',
    bio3: 'Yazılım geliştirme sürecini sadece kod yazmak olarak değil, kullanıcıya değer katan bir hizmet olarak görüyorum. Bu vizyonla, her projede sürdürülebilirlik, hız ve etkili hikaye anlatımını merkeze koyuyorum.',
    bio4: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5001/api/settings')
      .then(res => setSettings(res.data))
      .catch(err => console.error('Ayarlar yüklenemedi:', err));
  }, []);

  return (
    <section id="about" className="flex flex-col md:flex-row bg-white overflow-hidden pt-12 md:pt-20 pb-16 relative">
      {/* Hafif Arka Plan Efekti (Pencere şeffaflığını belli etmek için) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      {/* Sol Taraf: Metin */}
      <div className="w-full md:w-1/2 flex flex-col justify-start px-4 md:px-16 lg:px-24 z-10 relative">
        <div className="bg-white/50 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
          <h1 className="text-5xl md:text-6xl font-serif text-red-600 mb-8 tracking-tight uppercase">
            Hakkımda
          </h1>
          <div className="space-y-6 text-xl text-gray-900 font-semibold leading-relaxed font-sans">
            <p>{settings.bio}</p>
            {settings.bio2 && <p>{settings.bio2}</p>}
            {settings.bio3 && <p>{settings.bio3}</p>}
            {settings.bio4 && <p>{settings.bio4}</p>}
          </div>
        </div>
      </div>
      
      {/* Sağ Taraf: Profil Fotoğrafı */}
      <div className="w-full md:w-1/2 relative flex items-start justify-center p-8 mt-8 md:mt-0">
        <div className="w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-gray-100 flex-shrink-0">
          <img 
            src={settings.profilePhoto} 
            alt={settings.name} 
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
