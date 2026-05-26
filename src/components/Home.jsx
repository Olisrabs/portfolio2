import React from 'react';
import Hero from './Hero';
import SelectedWork from './SelectedWork';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from './Footer';

export default function Home({ parallax1Ref, parallax2Ref }) {
  return (
    <div className="relative overflow-hidden">
      <Hero parallax1Ref={parallax1Ref} parallax2Ref={parallax2Ref} />
      <SelectedWork />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
