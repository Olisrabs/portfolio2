import React, { useState } from 'react';
import Footer from './Footer';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilter = (filter) => {
    if (filter === activeFilter) return;
    setIsFiltering(true);
    setActiveFilter(filter);
    setTimeout(() => {
      setIsFiltering(false);
    }, 400);
  };

  const projects = [
    {
      id: 'synapse',
      title: 'BuildUp',
      category: 'WEB DEVELOPMENT',
      filter: ['web', 'experimental'],
      isFullWidth: true,
      image: '/buildup.webp',
      heightClass: 'h-[716px]',
    },
    {
      id: 'quantum',
      title: 'MEDBIT',
      category: 'R&D & WEB DEVELOPMENT',
      filter: ['web', 'experimental'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB7ClKPwqlGw9BqF0RcovvaTDiM7fpJr4jKRQGYP8MER4gjI6okbt8HDH5uCYi3DpHe6b9v-CrzfjZg5xnqTiSvxhVXrF_7Lx8bqSHZbqlkcoP3gCizS9rK_OU68dd_TR97gzqJe5zTAMDlodkJjTfhzPEE0pOuaV4EW3j8qwKr4sOgAALPnfQrKnQb6Mhr5XHiib7dZ1AGVtzPvLRcVVhHKm0iV_KqmeqJKya5bFst0zTl_bdPnpSkSgzPqFtejdB8Xh9Er7Wy',
      heightClass: 'h-[500px]',
    },
    {
      id: 'neondrift',
      title: 'NEON_DRIFT EXPERIMENTAL',
      category: 'FEATURED',
      filter: ['experimental'],
      isFeatured: true,
      desc: 'Exploring the intersection of physics-based animation and high-fidelity 3D brand systems.',
      heightClass: 'h-[400px]',
    },
    {
      id: 'fluxui',
      title: 'RENTALY',
      category: 'MOTION DESIGN',
      filter: ['brand', 'experimental'],
      image: '/rentaly.webp',
      heightClass: 'h-[400px]',
    },
    {
      id: 'orbita',
      title: 'WHALES VISUAL',
      category: 'WEB DESIGN',
      filter: ['web', 'experimental', 'brand'],
      image: '/whales.webp',
      heightClass: 'h-[500px]',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.filter.includes(activeFilter));

  return (
    <div className="relative pt-24 pb-0 w-full min-h-screen flex flex-col justify-between">
      {/* Ambient Background Glows */}
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[60%] -right-[10%] w-[600px] h-[600px] bg-lime-500/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div>
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40 relative z-10">
          <div className="reveal">
            <h1 className="font-display-xl text-5xl md:text-9xl font-extrabold text-white mb-8 tracking-tighter">
              THE ARCHIVE
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="font-body-lg text-xl text-on-surface-variant max-w-xl leading-relaxed">
                A definitive collection of digital artifacts, interfaces, and brand systems engineered for the avant-garde.
              </p>
              <div className="flex items-center gap-4 text-tertiary font-bold tracking-widest">
                <span className="font-label-caps uppercase">SCROLL TO EXPLORE</span>
                <span className="material-symbols-outlined animate-bounce">arrow_downward</span>
              </div>
            </div>
          </div>
        </section>

        <nav className="sticky top-24 z-40 py-4 md:py-8 mb-10 md:mb-20">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="glass-panel rounded-full p-1.5 md:p-2 flex gap-1 md:gap-2 w-full sm:w-fit overflow-x-auto no-scrollbar backdrop-blur-2xl bg-surface/40 border border-white/10 shadow-2xl shrink-0">
              <button
                onClick={() => handleFilter('all')}
                className={`px-4 py-2.5 md:px-8 md:py-3 rounded-full font-label-caps text-xs md:text-sm tracking-wider transition-all duration-300 cursor-pointer shrink-0 ${
                  activeFilter === 'all'
                    ? 'bg-white/20 text-white font-bold shadow-lg'
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => handleFilter('web')}
                className={`px-4 py-2.5 md:px-8 md:py-3 rounded-full font-label-caps text-xs md:text-sm tracking-wider transition-all duration-300 cursor-pointer shrink-0 ${
                  activeFilter === 'web'
                    ? 'bg-white/20 text-white font-bold shadow-lg'
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                WEB
              </button>
              <button
                onClick={() => handleFilter('brand')}
                className={`px-4 py-2.5 md:px-8 md:py-3 rounded-full font-label-caps text-xs md:text-sm tracking-wider transition-all duration-300 cursor-pointer shrink-0 ${
                  activeFilter === 'brand'
                    ? 'bg-white/20 text-white font-bold shadow-lg'
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                BRAND
              </button>
              <button
                onClick={() => handleFilter('experimental')}
                className={`px-4 py-2.5 md:px-8 md:py-3 rounded-full font-label-caps text-xs md:text-sm tracking-wider transition-all duration-300 cursor-pointer shrink-0 ${
                  activeFilter === 'experimental'
                    ? 'bg-white/20 text-white font-bold shadow-lg'
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                R&amp;D
              </button>
            </div>
          </div>
        </nav>

        {/* Project Grid */}
        <section
          className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-500 relative z-10 reveal ${
            isFiltering ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
          }`}
          id="project-grid"
        >
          {activeFilter === 'all' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Full Width Highlight */}
              <div className="md:col-span-12 group cursor-pointer overflow-hidden rounded-3xl relative h-[600px] md:h-[716px] mb-12 shadow-2xl">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  alt="BUILDUP"
                  src="/buildup.webp"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-16">
                  <span className="font-label-caps text-tertiary mb-4 tracking-widest uppercase font-bold">
                    WEB DEVELOPMENT
                  </span>
                  <h2 className="font-display-xl text-4xl md:text-6xl font-extrabold text-white group-hover:translate-x-4 transition-transform duration-500">
                    BuildUp
                  </h2>
                </div>
              </div>

              {/* Left Grid (7 cols) */}
              <div className="md:col-span-7 flex flex-col gap-gutter">
                <div className="group cursor-pointer overflow-hidden rounded-3xl relative h-[500px] shadow-2xl">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    alt="Quantum Labs"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ClKPwqlGw9BqF0RcovvaTDiM7fpJr4jKRQGYP8MER4gjI6okbt8HDH5uCYi3DpHe6b9v-CrzfjZg5xnqTiSvxhVXrF_7Lx8bqSHZbqlkcoP3gCizS9rK_OU68dd_TR97gzqJe5zTAMDlodkJjTfhzPEE0pOuaV4EW3j8qwKr4sOgAALPnfQrKnQb6Mhr5XHiib7dZ1AGVtzPvLRcVVhHKm0iV_KqmeqJKya5bFst0zTl_bdPnpSkSgzPqFtejdB8Xh9Er7Wy"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <span className="font-label-caps text-white border-2 border-white px-8 py-4 rounded-full font-bold tracking-widest">
                      <a target="_blank" href="https://medbit.com.ng">VIEW CASE STUDY</a>
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/90 to-transparent w-full">
                    <h3 className="font-headline-lg text-3xl font-bold text-white mb-2">MEDBIT</h3>
                    <p className="font-label-caps text-on-surface-variant uppercase tracking-widest">WEB DEVELOPMENT / R&D</p>
                  </div>
                </div>

                {/* Featured Break (Lime) */}
                <div className="bg-tertiary rounded-3xl p-12 flex flex-col justify-between h-[400px] group cursor-pointer shadow-2xl transition-transform hover:-translate-y-2 duration-300">
                  <div className="flex justify-between items-start">
                    <span className="font-label-caps text-black font-extrabold px-6 py-2 border-2 border-black rounded-full tracking-widest uppercase">
                      FEATURED
                    </span>
                    <span className="material-symbols-outlined text-black text-5xl group-hover:rotate-45 transition-transform duration-300 font-bold">
                      north_east
                    </span>
                  </div>
                  <div>
                    <h2 className="font-headline-lg text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4 tracking-tighter">
                      NEON_DRIFT
                      <br />
                      EXPERIMENTAL
                    </h2>
                    <p className="font-body-md text-black/80 max-w-md font-medium text-lg">
                      Exploring the intersection of physics-based animation and high-fidelity 3D brand systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Grid (5 cols) */}
              <div className="md:col-span-5 flex flex-col gap-gutter">
                <div className="group cursor-pointer overflow-hidden rounded-3xl relative h-[400px] shadow-2xl">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    alt="RENTALY"
                    src="/rentaly.webp"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <span className="font-label-caps text-white border-2 border-white px-8 py-4 rounded-full font-bold tracking-widest">
                      <a target="_blank" href="https://car-rental-demo1.vercel.app/">VIEW CASE STUDY</a>
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/90 to-transparent w-full">
                    <h3 className="font-headline-lg text-3xl font-bold text-white mb-2">RENTALY</h3>
                    <p className="font-label-caps text-on-surface-variant uppercase tracking-widest">MOTION DESIGN</p>
                  </div>
                </div>

                <div className="group cursor-pointer overflow-hidden rounded-3xl relative h-[500px] shadow-2xl">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    alt="WHALES VISUAL"
                    src="/whales.webp"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <span className="font-label-caps text-white border-2 border-white px-8 py-4 rounded-full font-bold tracking-widest">
                      <a target="_blank" href="https://whalevisual.com">VIEW CASE STUDY</a>
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/90 to-transparent w-full">
                    <h3 className="font-headline-lg text-3xl font-bold text-white mb-2">WHALES VISUAL</h3>
                    <p className="font-label-caps text-on-surface-variant uppercase tracking-widest">WEB DESIGN</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {filteredProjects.map((project) =>
                project.isFeatured ? (
                  <div
                    key={project.id}
                    className="bg-tertiary rounded-3xl p-12 flex flex-col justify-between h-[450px] group cursor-pointer shadow-2xl transition-transform hover:-translate-y-2 duration-300 col-span-1 md:col-span-2"
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-label-caps text-black font-extrabold px-6 py-2 border-2 border-black rounded-full tracking-widest uppercase">
                        FEATURED
                      </span>
                      <span className="material-symbols-outlined text-black text-5xl group-hover:rotate-45 transition-transform duration-300 font-bold">
                        north_east
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline-lg text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4 tracking-tighter">
                        NEON_DRIFT
                        <br />
                        EXPERIMENTAL
                      </h2>
                      <p className="font-body-md text-black/80 max-w-md font-medium text-lg">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    key={project.id}
                    className={`group cursor-pointer overflow-hidden rounded-3xl relative ${
                      project.isFullWidth ? 'col-span-1 md:col-span-2 h-[600px]' : 'h-[450px]'
                    } shadow-2xl`}
                  >
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      alt={project.title}
                      src={project.image}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                      <span className="font-label-caps text-white border-2 border-white px-8 py-4 rounded-full font-bold tracking-widest uppercase">
                        VIEW CASE STUDY
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent w-full">
                      <h3 className="font-headline-lg text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="font-label-caps text-on-surface-variant uppercase tracking-widest">
                        {project.category}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </section>

        {/* CTAs */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-40 text-center relative z-10 reveal">
          <h2 className="font-label-caps text-tertiary mb-12 tracking-widest uppercase font-bold">
            SEE MORE PROJECTS
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <button className="px-12 py-6 glass-panel rounded-full font-label-caps text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-500 cursor-pointer shadow-2xl">
              BEHANCE ARCHIVE
            </button>
            <button className="px-12 py-6 glass-panel rounded-full font-label-caps text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-500 cursor-pointer shadow-2xl">
              DRIBBBLE SHOWCASE
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
