import React from 'react';

export default function About() {
  return (
    <section className="py-40 px-margin-mobile md:px-margin-desktop reveal" id="about">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight uppercase tracking-tighter">
          Crafting <span className="text-secondary italic">Digital Art</span> with Technical{' '}
          <span className="text-outline-variant">Precision.</span>
        </h2>
        <div className="space-y-12">
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            OLISRAB is a creative developer specialized in creating high-impact visual identities and technical
            solutions. We don't just build websites; we design digital legacies for brands that demand excellence.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center gap-6 group cursor-pointer">
              <span className="font-label-caps text-tertiary text-lg">01</span>
              <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-tertiary transition-all duration-700"></div>
              <span className="font-headline-lg-mobile text-2xl group-hover:text-tertiary transition-colors">
                Visionary Strategy
              </span>
            </li>
            <li className="flex items-center gap-6 group cursor-pointer">
              <span className="font-label-caps text-tertiary text-lg">02</span>
              <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-tertiary transition-all duration-700"></div>
              <span className="font-headline-lg-mobile text-2xl group-hover:text-tertiary transition-colors">
                Bespoke Design
              </span>
            </li>
            <li className="flex items-center gap-6 group cursor-pointer">
              <span className="font-label-caps text-tertiary text-lg">03</span>
              <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-tertiary transition-all duration-700"></div>
              <span className="font-headline-lg-mobile text-2xl group-hover:text-tertiary transition-colors">
                Future Tech
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
