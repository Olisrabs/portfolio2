import React, { useState } from 'react';

export default function Navbar({ mode = 'home' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-margin-mobile md:px-margin-desktop h-24 z-50 bg-surface/10 backdrop-blur-2xl border-b border-white/10">
        <a href="#home" className="font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tighter text-on-surface cursor-pointer">
          OLISRAB
        </a>
        <div className="hidden md:flex gap-12 items-center">
          <a 
            className={`font-label-caps transition-colors duration-300 ${mode === 'home' ? 'text-tertiary font-bold border-b-2 border-tertiary pb-1' : 'text-on-surface-variant hover:text-tertiary'}`} 
            href="#home"
          >
            Home
          </a>
          <a 
            className={`font-label-caps transition-colors duration-300 ${mode === 'portfolio' ? 'text-tertiary font-bold border-b-2 border-tertiary pb-1' : 'text-on-surface-variant hover:text-tertiary'}`} 
            href="#works"
          >
            Works
          </a>
          <a 
            className={`font-label-caps transition-colors duration-300 ${mode === 'services' ? 'text-tertiary font-bold border-b-2 border-tertiary pb-1' : 'text-on-surface-variant hover:text-tertiary'}`} 
            href="#services"
          >
            Services
          </a>
          <a 
            className={`font-label-caps transition-colors duration-300 ${mode === 'about' ? 'text-tertiary font-bold border-b-2 border-tertiary pb-1' : 'text-on-surface-variant hover:text-tertiary'}`} 
            href="#about"
          >
            About
          </a>
          <a 
            className={`font-label-caps transition-colors duration-300 ${mode === 'contact' ? 'text-tertiary font-bold border-b-2 border-tertiary pb-1' : 'text-on-surface-variant hover:text-tertiary'}`} 
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#start-project" className="bg-[#BF40FF] text-white px-4 py-2.5 md:px-8 md:py-3 text-[10px] md:text-[12px] rounded-full font-label-caps uppercase tracking-widest hover:shadow-[0_0_20px_rgba(191,64,255,0.6)] transition-all duration-300 active:scale-95 flex items-center justify-center shrink-0">
            Start Project
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-on-surface hover:text-tertiary transition-colors duration-300 focus:outline-none flex items-center"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <a 
          onClick={() => setIsMobileMenuOpen(false)}
          className={`font-label-caps text-2xl tracking-widest uppercase transition-colors duration-300 ${mode === 'home' ? 'text-tertiary font-bold' : 'text-on-surface-variant hover:text-tertiary'}`} 
          href="#home"
        >
          Home
        </a>
        <a 
          onClick={() => setIsMobileMenuOpen(false)}
          className={`font-label-caps text-2xl tracking-widest uppercase transition-colors duration-300 ${mode === 'portfolio' ? 'text-tertiary font-bold' : 'text-on-surface-variant hover:text-tertiary'}`} 
          href="#works"
        >
          Works
        </a>
        <a 
          onClick={() => setIsMobileMenuOpen(false)}
          className={`font-label-caps text-2xl tracking-widest uppercase transition-colors duration-300 ${mode === 'services' ? 'text-tertiary font-bold' : 'text-on-surface-variant hover:text-tertiary'}`} 
          href="#services"
        >
          Services
        </a>
        <a 
          onClick={() => setIsMobileMenuOpen(false)}
          className={`font-label-caps text-2xl tracking-widest uppercase transition-colors duration-300 ${mode === 'about' ? 'text-tertiary font-bold' : 'text-on-surface-variant hover:text-tertiary'}`} 
          href="#about"
        >
          About
        </a>
        <a 
          onClick={() => setIsMobileMenuOpen(false)}
          className={`font-label-caps text-2xl tracking-widest uppercase transition-colors duration-300 ${mode === 'contact' ? 'text-tertiary font-bold' : 'text-on-surface-variant hover:text-tertiary'}`} 
          href="#contact"
        >
          Contact
        </a>
      </div>
    </>
  );
}
