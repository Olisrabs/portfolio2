import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-surface flex flex-col items-center py-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-white/5 reveal" id="contact">
      <div className="absolute inset-0 neon-glow-purple opacity-10 pointer-events-none"></div>
      <div className="text-center z-10 w-full">
        <p className="font-label-caps text-secondary mb-8 tracking-[0.5em] uppercase">Project Inquiry</p>
        <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl uppercase tracking-tighter mb-16 leading-[0.9]">
          Let's Build<br />Something<br /><span className="text-outline italic">Exceptional</span>
        </h2>
        <a className="group relative inline-block cursor-pointer" href="mailto:olisrab@gmail.com">
          <span className="font-headline-lg-mobile md:font-headline-lg text-white group-hover:text-tertiary transition-colors duration-500">
            olisrab@gmail.com
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white group-hover:bg-tertiary transition-all duration-500 scale-x-100 group-hover:scale-x-0 origin-left"></div>
        </a>
      </div>

      <div className="w-full mt-40 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-12 text-on-surface-variant font-label-caps z-10">
        <div className="font-extrabold text-white text-2xl tracking-tighter">OLISRAB</div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="hover:text-secondary transition-all duration-500 hover:tracking-widest cursor-pointer" href="https://instagram.com/olisrabs_">
            Instagram
          </a>
          <a className="hover:text-secondary transition-all duration-500 hover:tracking-widest cursor-pointer" href="https://linkedin.com/in/olajide-abimbola">
            LinkedIn
          </a>
          <a className="hover:text-secondary transition-all duration-500 hover:tracking-widest cursor-pointer" href="https://x.com/olisrabs">
            X
          </a>
          <a className="hover:text-secondary transition-all duration-500 hover:tracking-widest cursor-pointer" href="#">
            Vimeo
          </a>
        </div>
        <div className="text-xs text-center">&copy;{currentYear} OLISRAB. DIGITAL EXCELLENCE.</div>
      </div>
    </footer>
  );
}
