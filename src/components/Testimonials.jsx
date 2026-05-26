import React, { useRef } from 'react';

export default function Testimonials() {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="py-40 reveal" id="testimonials">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
        <h2 className="font-headline-lg-mobile md:font-headline-lg">Trusted Voices</h2>
      </div>

      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-auto no-scrollbar gap-8 px-margin-mobile md:px-margin-desktop pb-12 cursor-grab active:cursor-grabbing select-none"
        id="testimonials-container"
      >
        {/* Testimonial 1 */}
        <div className="min-w-[290px] sm:min-w-[350px] md:min-w-[500px] glass-card p-12 rounded-3xl testimonial-item flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-tertiary mb-8 text-4xl block">format_quote</span>
            <p className="font-body-lg text-body-lg italic mb-12 text-on-surface">
              "OLISRAB transformed our digital presence from a standard corporate site to a cinematic experience."
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex-shrink-0"></div>
            <div>
              <p className="font-bold text-white">Marcus Thorne</p>
              <p className="text-on-surface-variant text-sm">CTO, Aether Systems</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="min-w-[290px] sm:min-w-[350px] md:min-w-[500px] glass-card p-12 rounded-3xl testimonial-item flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-secondary mb-8 text-4xl block">format_quote</span>
            <p className="font-body-lg text-body-lg italic mb-12 text-on-surface">
              "Working with him felt like designing for a high-budget film. The final product was art."
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-tertiary flex-shrink-0"></div>
            <div>
              <p className="font-bold text-white">Elena Vance</p>
              <p className="text-on-surface-variant text-sm">Design Director, Nexus</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="min-w-[290px] sm:min-w-[350px] md:min-w-[500px] glass-card p-12 rounded-3xl testimonial-item flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-white mb-8 text-4xl block">format_quote</span>
            <p className="font-body-lg text-body-lg italic mb-12 text-on-surface">
              "The technical mastery he brought to our platform doubled our conversion rates."
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-bright flex-shrink-0"></div>
            <div>
              <p className="font-bold text-white">Jordan Blake</p>
              <p className="text-on-surface-variant text-sm">Founder, Volt Fashion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
