import React from 'react';

export default function SelectedWork() {
  return (
    <section className="py-40 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest reveal" id="work">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-24">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg">
            Selected Work
          </h2>
          <p className="font-label-caps text-on-surface-variant mb-4 cursor-pointer hover:text-secondary transition-colors">
            View All Projects (5)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Project 1 */}
          <div className="md:col-span-7 group project-card cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl glass-card">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="A minimalist digital artwork featuring fluid, chrome-like liquid metal textures flowing across a deep obsidian background."
                src="/rentaly.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                <p className="font-label-caps text-secondary mb-2">01 / Automation</p>
                <h3 className="font-headline-lg-mobile text-white">Rentaly</h3>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="md:col-span-5 md:mt-20 group project-card cursor-pointer">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-tertiary flex items-center justify-center p-20">
              <img
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-90"
                alt="A macro shot of a sleek, futuristic tech device with clean lines and a vibrant neon lime finish."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC63dXWr3RlCrZ2qrMSfCwaLSk859733z_ParJI63EooBfVeHN7_sjUD5l_6dPsxzR0bofcDoAaqn8IPd3I4oRcXUKZT94TdXBXor-1eAtNyRafCpPCVSx4maTDMNOH4B6laHFnVGLtTZpk7j8lWd2i1iRikn2i9TCsxOY5EVnewHYcCGg6uJ5S_nUQTDvHAjj0HqpPKm_8yqoBlz7-yDVAhP3knUyowL-jNi0ELCIe_5rgV_mXud4J1yGozNkydhhC4rqLarw-"
              />
              <div className="absolute top-8 left-8">
                <span className="bg-black text-white px-4 py-1 rounded-full font-label-caps text-[10px]">
                  Featured
                </span>
              </div>
            </div>
            <div className="mt-8">
              <p className="font-label-caps text-secondary mb-2">02 / Identity & Web Platform</p>
              <h3 className="font-headline-lg-mobile text-white">MedBit</h3>
            </div>
          </div>

          {/* Project 3 */}
          <div className="md:col-span-5 group project-card cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass-card">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="A close-up of a high-end mechanical component with purple fiber optic lights glowing."
                src="/whales.png"
              />
            </div>
            <div className="mt-8">
              <p className="font-label-caps text-secondary mb-2">03 / Identity & Web Platform</p>
              <h3 className="font-headline-lg-mobile text-white">Whales Visual</h3>
            </div>
          </div>

          {/* Project 4 */}
          <div className="md:col-span-7 group project-card cursor-pointer">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl glass-card">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="An abstract 3D visualization of data streams flowing through a glass-like architecture."
                src="/buildup.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
