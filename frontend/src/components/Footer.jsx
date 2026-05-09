import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a2e] text-white pt-14 pb-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6">

        {/* Üst Bölüm */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-10 border-b border-white/10">

          {/* Logo + Açıklama */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <svg width="52" height="52" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="46" fill="#1a1a2e" stroke="white" strokeWidth="3"/>
                <text textAnchor="middle" x="28" y="66" fontFamily="Georgia, serif" fontSize="46" fontWeight="bold" fill="white">F</text>
                <text textAnchor="middle" x="50" y="66" fontFamily="Georgia, serif" fontSize="38" fontWeight="400" fill="#c0392b">/</text>
                <text textAnchor="middle" x="73" y="66" fontFamily="Georgia, serif" fontSize="46" fontWeight="bold" fill="white">T</text>
              </svg>
              <div className="flex items-center font-serif text-xl tracking-[0.1em] font-black uppercase">
                <span>FERIT</span>
                <span className="mx-1.5 text-red-500 font-light">/</span>
                <span>TERCAN</span>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Gazetecilik, röportaj ve yerel haberler üzerine yazılar. Güncel ve doğru haberciliği ilke edindim.
            </p>
          </div>

          {/* Navigasyon */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-4">Sayfalar</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { to: '/', label: 'Ana Sayfa' },
                { to: '/haberler', label: 'Haberler' },
                { to: '/hakkimda', label: 'Hakkımda' },
                { to: '/iletisim', label: 'İletişim' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white hover:text-red-400 transition-colors text-sm font-medium">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-4">Sosyal Medya</h4>
            <div className="flex flex-col gap-3">

              {/* E-posta */}
              <a href="mailto:ferittercanmedya@gmail.com" className="flex items-center gap-3 text-white hover:text-red-400 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">ferittercanmedya@gmail.com</span>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/ferittrcn" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-red-400 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 6.5h.01" />
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
                <span className="text-sm">@ferittrcn</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ferit-tercan-403119363/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-[#0077b5] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">Ferit Tercan</span>
              </a>

            </div>
          </div>
        </div>

        {/* Alt Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-8 text-white/70 text-xs">
          <p>© {year} Ferit Tercan. Tüm hakları saklıdır.</p>
          <p>Gazetecilik · Röportaj · Yerel Haberler</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
