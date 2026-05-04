import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Route değiştiğinde mobil menüyü otomatik kapat
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="w-full bg-white text-red-600 px-6 md:px-8 py-5 flex justify-between items-center shadow-sm sticky top-0 z-40">
      <div className="flex items-center gap-2 relative z-50">
        <Link to="/" className="font-extrabold text-3xl md:text-4xl tracking-tighter hover:text-red-800 transition">FT</Link>
        <Link to="/" className="font-bold text-xl md:text-2xl ml-2 tracking-wide hidden sm:block hover:text-red-800 transition">Ferit Tercan</Link>
      </div>

      {/* Masaüstü Menü */}
      <div className="hidden md:flex gap-8 font-bold tracking-wide text-lg">
        <Link to="/" className="hover:text-red-800 transition-colors uppercase">Ana Sayfa</Link>
        <Link to="/haberler" className="hover:text-red-800 transition-colors uppercase">Haberler</Link>
        <Link to="/hakkimda" className="hover:text-red-800 transition-colors uppercase">Hakkımda</Link>
        <Link to="/iletisim" className="hover:text-red-800 transition-colors uppercase">İletişim</Link>
      </div>

      {/* Hamburger İkonu (Mobil ve Tablet) */}
      <button 
        className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 p-2 z-50 focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menüyü Aç/Kapat"
      >
        <div className={`w-6 h-0.5 bg-red-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-red-600 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-red-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* Mobil Açılır Menü */}
      <div className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col py-2 px-6 transition-all duration-300 overflow-hidden origin-top ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <Link to="/" className="py-3 font-bold text-lg uppercase border-b border-gray-100 hover:text-red-800 transition">Ana Sayfa</Link>
        <Link to="/haberler" className="py-3 font-bold text-lg uppercase border-b border-gray-100 hover:text-red-800 transition">Haberler</Link>
        <Link to="/hakkimda" className="py-3 font-bold text-lg uppercase border-b border-gray-100 hover:text-red-800 transition">Hakkımda</Link>
        <Link to="/iletisim" className="py-3 font-bold text-lg uppercase hover:text-red-800 transition">İletişim</Link>
      </div>
    </nav>
  );
};

export default Navbar;
