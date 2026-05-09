import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Contact = () => {
  useDocumentTitle('İletişim');
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

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ferit-tercan-403119363/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl md:text-2xl font-semibold text-gray-800 hover:text-[#0077b5] transition-colors bg-gray-50 px-8 py-4 rounded-xl w-full justify-center group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0077b5] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Ferit Tercan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
