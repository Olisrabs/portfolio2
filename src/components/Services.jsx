import React from 'react';

export default function Services() {
  return (
    <section className="py-40 px-margin-mobile md:px-margin-desktop bg-surface-container-low relative reveal" id="services">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] neon-glow-purple opacity-10"></div>
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="mb-24">
          <p className="font-label-caps text-secondary mb-4 tracking-widest uppercase">Our Capabilities</p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg">Service Ecosystem</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Service 1 */}
          <div className="md:col-span-2 glass-card bento-card p-12 rounded-[2rem] relative group cursor-pointer">
            <div className="flex justify-between items-start mb-20">
              <span
                className="material-symbols-outlined text-4xl text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                architecture
              </span>
              <span className="font-label-caps text-on-surface-variant">01</span>
            </div>
            <h3 className="font-headline-lg-mobile mb-4 text-white">Web & App Development</h3>
            <p className="text-on-surface-variant">
              High-performance React, Next Js, and Flutter applications with GSAP animations and WebGL integrations.
            </p>
            <div className="mt-8 h-1 w-0 bg-tertiary group-hover:w-full transition-all duration-700"></div>
          </div>

          {/* Service 2 */}
          <div className="md:col-span-1 glass-card bento-card p-12 rounded-[2rem] group cursor-pointer">
            <div className="flex justify-between items-start mb-20">
              <span
                className="material-symbols-outlined text-4xl text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <span className="font-label-caps text-on-surface-variant">02</span>
            </div>
            <h3 className="font-headline-lg-mobile mb-4 text-white">Branding</h3>
            <p className="text-on-surface-variant">Creating technical visual identities.</p>
          </div>

          {/* Service 3 */}
          <div className="md:col-span-1 glass-card bento-card p-12 rounded-[2rem] group cursor-pointer">
            <div className="flex justify-between items-start mb-20">
              <span
                className="material-symbols-outlined text-4xl text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                videocam
              </span>
              <span className="font-label-caps text-on-surface-variant">03</span>
            </div>
            <h3 className="font-headline-lg-mobile mb-4 text-white">Motion</h3>
            <p className="text-on-surface-variant">Cinematic 3D narratives.</p>
          </div>

          {/* Service 4 */}
          <div className="md:col-span-1 glass-card bento-card p-12 rounded-[2rem] group cursor-pointer">
            <div className="flex justify-between items-start mb-20">
              <span
                className="material-symbols-outlined text-4xl text-outline"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                deployed_code
              </span>
              <span className="font-label-caps text-on-surface-variant">04</span>
            </div>
            <h3 className="font-headline-lg-mobile mb-4 text-white">Product</h3>
            <p className="text-on-surface-variant">SaaS architecture.</p>
          </div>

          {/* Service 5 */}
          <div className="md:col-span-3 glass-card bento-card p-12 rounded-[2rem] flex flex-col md:flex-row gap-12 items-center group cursor-pointer">
            <div className="md:w-1/2">
              <span
                className="material-symbols-outlined text-4xl text-secondary mb-8 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
              <h3 className="font-headline-lg-mobile mb-4 text-white">Consulting</h3>
              <p className="text-on-surface-variant">
                Digital transformation for legacy industries using AI-driven workflows.
              </p>
            </div>
            <div className="md:w-1/2 overflow-hidden rounded-2xl h-48 w-full">
              <img
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                alt="Global data networks visualization."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-V71kpQT1SysjrV5kkC2MVMjHjcdETgZKVBYGTOK-3lsT1-l73zW-dcpsvdFA-zRaFM8PzmtIpfHa240b6ZwmX-MlA-IG799sDdC8g4x06K9p0C6dqC29szZv_nvZzZiJ-ljaNfeqWC5Df0MXhw3NtlT65xZ_PqsYVGXyIhmXPLXGtrhDXrWB74ojleJg2dTVo9e0o8Rf_YL3Z0RsWj4MAp4mcZr17VqKgN6pRFaGIIFo5zAnEm73IVRwcnwGvHTGXVj4kdg5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
