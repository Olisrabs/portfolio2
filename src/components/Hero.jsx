import React, { useEffect, useState, useRef } from 'react';

export default function Hero({ parallax1Ref, parallax2Ref }) {
  const [loaded, setLoaded] = useState(false);
  const heroContentRef = useRef(null);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      if (heroContentRef.current) {
        const scrolled = window.scrollY || window.pageYOffset;
        const heroHeight = window.innerHeight;
        const factor = Math.min(scrolled / (heroHeight * 0.8), 1);
        heroContentRef.current.style.opacity = 1 - factor;
        heroContentRef.current.style.transform = `translateY(${-factor * 120}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Ambient Glows */}
      <div
        ref={parallax1Ref}
        className="absolute top-[10%] -left-20 w-[600px] h-[600px] neon-glow-purple"
        id="parallax-bg-1"
      ></div>
      <div
        ref={parallax2Ref}
        className="absolute top-[40%] -right-20 w-[500px] h-[500px] neon-glow-lime"
        id="parallax-bg-2"
      ></div>

      {/* 1. Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center px-margin-mobile md:px-margin-desktop pt-24 pb-12 relative overflow-hidden"
        id="hero"
      >
        <div
          ref={heroContentRef}
          className="max-w-container-max mx-auto w-full text-center flex flex-col items-center justify-center relative gap-6 md:gap-8"
        >

          {/* Main Headline with portrait overlap */}
          <h1
            className="font-display-xl text-display-xl-mobile md:text-display-xl leading-[0.95] md:leading-[0.9] w-full max-w-[95vw] md:max-w-5xl uppercase font-extrabold tracking-tighter text-white relative select-none flex flex-col items-center"
          >
            {/* Subheadline — sits flush on top of headline */}
            <span
              className={`font-label-caps text-secondary tracking-widest text-xs md:text-label-caps normal-case transition-all duration-700 mb-0 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Based in Lagos
            </span>
            <span
              className={`hero-title-line relative z-10 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span>Creative Developer</span>
            </span>
            <span
              className={`hero-title-line relative z-10 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <span className="text-outline-variant italic">/ Developing</span>
            </span>

            {/* Portrait Image Layer */}
            <div
              className={`absolute left-1/2 top-[52%] pointer-events-none z-20 transition-all duration-1000 ease-out w-[180px] xs:w-[240px] sm:w-[300px] md:w-[420px] lg:w-[480px] h-auto ${
                loaded ? 'opacity-90' : 'opacity-0'
              }`}
              style={{
                transform: loaded
                  ? 'translate(-50%, -50%) scale(1)'
                  : 'translate(-50%, -40%) scale(0.95)',
                transitionDelay: '0.4s',
              }}
            >
              <img
                src="/olis.png"
                alt="Portrait"
                className="w-full h-auto object-contain"
              />
            </div>

            <span
              className={`hero-title-line relative z-30 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <span>the Future</span>
            </span>
          </h1>

          {/* Description Paragraph */}
          <p
            className={`font-body-lg text-sm sm:text-base md:text-body-lg text-on-surface-variant max-w-xs sm:max-w-sm md:max-w-xl leading-relaxed transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.65s' }}
          >
            I am an architectural collective of digital artisans crafting high-impact digital experiences at the intersection of aesthetic rigor and technical mastery.
          </p>
        </div>
      </section>
    </>
  );
}
