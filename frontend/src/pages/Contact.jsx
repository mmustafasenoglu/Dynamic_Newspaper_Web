import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 md:p-16 text-center border-t-8 border-red-600">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 uppercase tracking-tight">İletişim</h1>
        <p className="text-xl text-gray-600 mb-12">
          Haber, iş birliği ve diğer konular için bana aşağıdaki iletişim kanallarından ulaşabilirsiniz.
        </p>
        
        <div className="flex flex-col gap-6 items-center">
          {/* Email */}
          <a href="mailto:ferittercanmedya@gmail.com" className="flex items-center gap-4 text-xl md:text-2xl font-semibold text-gray-800 hover:text-red-600 transition-colors bg-gray-50 px-8 py-4 rounded-xl w-full justify-center group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            ferittercanmedya@gmail.com
          </a>
          
          {/* Instagram */}
          <a href="https://instagram.com/ferittrcn" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl md:text-2xl font-semibold text-gray-800 hover:text-red-600 transition-colors bg-gray-50 px-8 py-4 rounded-xl w-full justify-center group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 6.5h.01" />
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
            @ferittrcn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
