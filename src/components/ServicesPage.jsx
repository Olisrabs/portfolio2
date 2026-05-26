import React from 'react';
import Footer from './Footer';

export default function ServicesPage() {
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
  };

  return (
    <div className="relative pt-24 pb-0 w-full min-h-screen flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40">
          <span className="font-label-caps text-secondary mt-6 block stagger-reveal tracking-widest">
            OUR CAPABILITIES
          </span>
          <h1 className="font-display-xl text-5xl md:text-8xl font-extrabold max-w-4xl stagger-reveal text-white tracking-tighter">
            CRAFTING <span className="text-secondary italic">DIGITAL</span> LEGACIES.
          </h1>
        </section>

        {/* Bento Grid Services */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Web Development (Large) */}
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="md:col-span-8 group glass-card p-10 md:p-16 relative overflow-hidden stagger-reveal rounded-3xl min-h-[450px] flex flex-col justify-between transition-all duration-300 cursor-pointer"
            >
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>
              <div>
                <span className="font-label-caps text-on-surface-variant/50 block mb-4">01</span>
                <h3 className="font-headline-lg text-4xl md:text-5xl font-bold mt-2 mb-6 text-white">
                  Web Development
                </h3>
                <p className="font-body-lg text-xl text-on-surface-variant max-w-md mb-20">
                  High-performance digital architectures built with technical precision and avant-garde motion.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 md:w-1/2 h-64 opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  alt="Technical Web Dev"
                  className="w-full h-full object-cover rounded-tl-3xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfK6mOvwMnQmsGVuFRjjo81rrqA_7tOJIFglaKJ5naDe7IdFJXVrcsnIjHg4vmSNtgyXoIePYhEgXwnFqo7h2lMtQCRjZloruzWqtXgot33tcGhJeoZ86Noj7WIoCCSJY9JB2TIvod12_YeQ0M-E6FRI375w-kbGLg6nMpAc6xCFM6AUMJZaTDxrI2MFJLMKOHD4p6AbQwwpcwnmjjodcnTsAbRWNJX1g6AQ1zZVAk9yciOdY9DVu94RUa02WCT_HsE7BKCdaU"
                />
              </div>
            </div>

            {/* Branding (Tall) */}
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="md:col-span-4 group glass-card p-10 md:p-16 relative overflow-hidden stagger-reveal rounded-3xl min-h-[450px] flex flex-col justify-between transition-all duration-300 cursor-pointer"
            >
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>
              <div>
                <span className="font-label-caps text-on-surface-variant/50 block mb-4">02</span>
                <h3 className="font-headline-lg text-4xl font-bold mt-2 mb-6 text-white">Branding</h3>
                <p className="font-body-lg text-xl text-on-surface-variant mb-12">
                  Defining visual identities for the next generation of industry leaders.
                </p>
              </div>
              <div className="mt-auto flex justify-end">
                <span className="material-symbols-outlined text-6xl text-secondary">flare</span>
              </div>
            </div>

            {/* Motion Design (Small) */}
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="md:col-span-4 group glass-card p-10 md:p-16 relative overflow-hidden stagger-reveal rounded-3xl min-h-[350px] flex flex-col justify-between transition-all duration-300 cursor-pointer"
            >
              <div>
                <span className="font-label-caps text-on-surface-variant/50 block mb-4">03</span>
                <h3 className="font-headline-lg text-4xl font-bold mt-2 mb-6 text-white">Motion</h3>
                <p className="font-body-lg text-xl text-on-surface-variant">
                  Cinematic animation that breathes life into static concepts.
                </p>
              </div>
              <div className="h-1 bg-secondary mt-12 w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>

            {/* Product Strategy (Large) */}
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="md:col-span-8 group glass-card p-10 md:p-16 relative overflow-hidden stagger-reveal rounded-3xl min-h-[350px] flex flex-col justify-between transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="flex flex-col md:flex-row justify-between h-full gap-8">
                <div className="max-w-sm flex flex-col justify-between">
                  <div>
                    <span className="font-label-caps text-on-surface-variant/50 block mb-4">04</span>
                    <h3 className="font-headline-lg text-4xl font-bold mt-2 mb-6 text-white">Strategy</h3>
                    <p className="font-body-lg text-xl text-on-surface-variant">
                      Data-driven product roadmaps designed for market disruption and scale.
                    </p>
                  </div>
                </div>
                <div className="flex items-end justify-center md:justify-end mt-10 md:mt-0">
                  <img
                    alt="Strategy obsidian sphere"
                    className="w-48 h-48 rounded-full border border-white/10 p-2 object-cover shadow-2xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRMRslSUEgQ9D0cskyW4T4IjoOnj0yFL_3DATcAdJXKBo8wilbhnLALAW-ihnGu17K2PEeH3j3Ov7tr0wocdLhy_gAOi7lHlswf6u5k-uVvU9gUrl-mxd84GxpwpQMtWGOBdtwD62OoB-IFbNgAl42RacJ7WPC57w2S9C38JtomwJtKthUoddj1SC_bxtfsPPq3KhvHS6ZLwaqzA8AgxXfSY5BeKWgsIY0-_V-VGpXmWBXcPv_P-wkWMdgUPn5XmWZctbOZQgp"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-60 relative overflow-hidden bg-surface/30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
            <h2 className="font-display-xl text-6xl md:text-9xl font-extrabold mb-12 stagger-reveal text-white tracking-tighter">
              LET'S BUILD
            </h2>
            <div className="flex justify-center stagger-reveal">
              <a
                className="group relative inline-flex items-center gap-6 text-white bg-transparent border-b-2 border-secondary pb-4 overflow-hidden cursor-pointer"
                href="#start-project"
              >
                <span className="font-headline-lg text-3xl md:text-5xl font-bold group-hover:translate-x-4 transition-transform duration-500">
                  THE FUTURE
                </span>
                <span className="material-symbols-outlined text-4xl md:text-5xl group-hover:translate-x-6 transition-transform duration-500">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
