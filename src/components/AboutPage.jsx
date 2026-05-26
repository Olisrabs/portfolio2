import React from 'react';
import Footer from './Footer';

export default function AboutPage() {
  return (
    <div className="relative pt-24 pb-0 w-full min-h-screen flex flex-col justify-between">
      {/* Ambient Glows */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 neon-glow-purple rounded-full pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 neon-glow-lime rounded-full pointer-events-none"></div>

      <div>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl reveal max-w-6xl text-white">
            Digital <br /> Excellence <br /> Built on <span className="text-secondary italic">Precision.</span>
          </h1>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 reveal">
            <div className="md:col-span-5 md:col-start-8">
              <p className="font-body-lg text-xl text-on-surface-variant leading-relaxed">
                I am an architectural collective of digital artisans. Based at the intersection of aesthetic rigor and technical mastery, I build legacies for brands that demand nothing short of perfection.
              </p>
            </div>
          </div>
        </section>

        {/* Image Break Section */}
        <section className="py-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
          <div className="relative w-full aspect-[21/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group rounded-3xl">
            <img
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              alt="Ultra-modern architectural office interior at night"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQJtJyTP7PH1EJXymQJNnMc17QRQ2cP1c_4c45GPYsU_qmKlYWdu3Z-LkTC1yyUCNu5PebaVIlVwEIxAU3uY1722nUDNDhss_PMS93RUrhoAei9BwQV0SNaF1rB0aaSSI4X-ka1YsbLohRQM1y8sBWgUDyIJbXohad9Gkv3UuvUnpxlRaoNP6h2_ER36KtzZD4gdD292av16fM432xOiZSQ1R0Cr6hdm4aK6yvy8Zp_GKiuUUUhzUSK4olv1BihGgELYQFuy79"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
          </div>
        </section>

        {/* Studio Values Section */}
        <section className="py-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative overflow-visible">
          <div className="absolute -top-20 right-10 md:right-20">
            <div className="glass-panel p-6 rounded-xl w-64 rotate-6 shadow-2xl">
              <span className="font-label-caps text-tertiary">EST. 2026</span>
              <h3 className="font-headline-lg-mobile text-3xl font-bold mt-2 text-white">TheMind</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg reveal text-white">
                The Core <br /> Philosophy
              </h2>
              <div className="mt-12 space-y-20">
                {/* Value 01 */}
                <div className="reveal group">
                  <span className="font-label-caps text-secondary block mb-4">01 / CONCEPT</span>
                  <h4 className="font-headline-lg-mobile text-3xl font-bold mb-6 text-white">Invisible Complexity</h4>
                  <p className="font-body-md text-on-surface-variant max-w-md">
                    True sophistication lies in the removal of the unnecessary. I engineer intricate systems that present themselves with effortless simplicity.
                  </p>
                </div>
                {/* Value 02 */}
                <div className="reveal group">
                  <span className="font-label-caps text-secondary block mb-4">02 / CRAFT</span>
                  <h4 className="font-headline-lg-mobile text-3xl font-bold mb-6 text-white">Pixel-Perfect Rigor</h4>
                  <p className="font-body-md text-on-surface-variant max-w-md">
                    Every micro-interaction is a deliberate choice. I treat every line of code as a brushstroke in a larger digital masterpiece.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pt-20">
              <div className="glass-panel p-10 reveal rounded-3xl">
                <div className="mb-10 w-20 h-1 bg-tertiary"></div>
                <p className="font-body-lg text-xl italic leading-relaxed text-white">
                  "Digital design is no longer just about aesthetics; it's about the emotional response to precision. As a professional, I don't just build websites; I create digital gravity."
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                    <img
                      className="w-full h-full object-cover"
                      alt="OLISRAB - Creative"
                      src="/olis.png"
                    />
                  </div>
                  <div>
                    <p className="font-label-caps text-white font-bold">Abimbola Olajide Israel (OLISRAB)</p>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                      Creative
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative floating element */}
              <div className="absolute -bottom-10 -left-10 glass-panel p-6 rounded-full border-secondary/20 hidden md:block">
                <span className="material-symbols-outlined text-secondary text-4xl">verified_user</span>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Grid (Bento Style) */}
        <section className="py-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <h2 className="font-label-caps text-center mb-20 opacity-50 text-white tracking-widest">
            CURATED SPECIALTIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6">
            <div className="md:col-span-8 md:row-span-1 glass-panel p-12 hover:bg-white/5 transition-colors group reveal rounded-3xl flex flex-col justify-between min-h-[250px]">
              <div className="flex justify-between items-start">
                <h3 className="font-headline-lg-mobile text-4xl font-bold text-white">
                  Strategic <br /> Brand Identity
                </h3>
                <span className="material-symbols-outlined text-4xl text-white group-hover:rotate-45 transition-transform duration-500">
                  north_east
                </span>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 glass-panel p-12 hover:bg-white/5 transition-colors group reveal rounded-3xl flex flex-col justify-between min-h-[500px]">
              <h3 className="font-headline-lg-mobile text-4xl font-bold text-white mb-6">
                Technical <br /> Architecture
              </h3>
              <div className="space-y-6 mt-auto">
                <p className="font-body-md text-on-surface-variant">Scalable systems for the modern era.</p>
                <div className="w-full h-48 rounded-2xl bg-surface-container-highest overflow-hidden">
                  <img
                    className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                    alt="High-tech circuit board"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBezn7aP_yerN4pKfr3CrjPpRAH9b8T8AFaHlsmZwYxtT35tJvZM-jMdBPOp47Dmnf1KOgXhhkb6YlDmq03kw_YJOtx2zYhVjKMGhHPFqFIhHNjXHfSiflDlfaWnSev8Z1LpkocvixTlB9GMHgW5T3vxNpwgRQCZJ9itjVtk3HVf5lrhCbx8NiJG6UFOCh6AKfQw-HLzNaGoTGckUI0ZuPoEsbZEMNHHV04CY7zwRN1lVqNzYCnjkCn28np7VN5vz4BGU52lVeU"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-1 glass-panel p-12 hover:bg-white/5 transition-colors group reveal rounded-3xl flex items-center min-h-[220px]">
              <h3 className="font-headline-lg-mobile text-3xl font-bold text-white">
                Motion <br /> Systems
              </h3>
            </div>

            <div className="md:col-span-4 md:row-span-1 glass-panel p-12 hover:bg-white/5 transition-colors group reveal rounded-3xl flex items-center min-h-[220px]">
              <h3 className="font-headline-lg-mobile text-3xl font-bold text-white">
                XR / <br /> Spatial
              </h3>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-60 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center reveal">
          <h2 className="font-display-xl text-5xl md:text-8xl font-extrabold leading-none mb-12 text-white tracking-tighter">
            Ready to evolve?
          </h2>
          <a
            href="#contact"
            className="inline-block bg-secondary text-on-secondary px-12 py-6 font-label-caps text-lg font-bold hover:scale-105 transition-transform duration-300 rounded-full shadow-[0_0_40px_rgba(191,64,255,0.3)] cursor-pointer text-purple-950"
          >
            Inquire Now
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
