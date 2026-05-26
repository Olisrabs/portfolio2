import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import StartProject from './components/StartProject';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';

const getPageFromHash = (hash) => {
  if (hash.includes('start-project')) return 'start';
  if (hash.includes('contact')) return 'contact';
  if (hash.includes('about')) return 'about';
  if (hash.includes('services')) return 'services';
  if (hash.includes('portfolio') || hash.includes('works')) return 'portfolio';
  if (hash.includes('home')) return 'home';
  return 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => getPageFromHash(window.location.hash));

  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const parallax1Ref = useRef(null);
  const parallax2Ref = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.body.classList.add('loaded');

    let mouseX = 0,
      mouseY = 0;
    let glowX = 0,
      glowY = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      if (glowRef.current && currentPage === 'home') {
        glowRef.current.style.left = `${glowX}px`;
        glowRef.current.style.top = `${glowY}px`;
      }

      animationFrameId = requestAnimationFrame(animateGlow);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateGlow();

    const handleScroll = () => {
      const scrolled = window.pageYOffset || window.scrollY;
      if (parallax1Ref.current) parallax1Ref.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      if (parallax2Ref.current) parallax2Ref.current.style.transform = `translateY(${scrolled * 0.15}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        'button, a, input, select, textarea, .group, .project-card, .bento-card, .glass-panel, [cursor-pointer]'
      );
      if (target && cursorRef.current) {
        if (currentPage === 'portfolio') {
          cursorRef.current.style.width = '160px';
          cursorRef.current.style.height = '160px';
          cursorRef.current.style.background = '#abd600';
        } else if (currentPage === 'start') {
          cursorRef.current.style.width = '450px';
          cursorRef.current.style.height = '450px';
          cursorRef.current.style.background =
            'radial-gradient(circle, rgba(191, 64, 255, 0.25) 0%, rgba(191, 64, 255, 0) 70%)';
        } else if (currentPage === 'contact') {
          cursorRef.current.style.width = '800px';
          cursorRef.current.style.height = '800px';
          cursorRef.current.style.background =
            'radial-gradient(circle, rgba(191, 64, 255, 0.25) 0%, rgba(191, 64, 255, 0) 70%)';
        } else if (currentPage === 'about' || currentPage === 'services') {
          cursorRef.current.style.width = '500px';
          cursorRef.current.style.height = '500px';
          cursorRef.current.style.background =
            'radial-gradient(circle, rgba(191, 64, 255, 0.20) 0%, transparent 70%)';
        } else {
          cursorRef.current.style.width = '60px';
          cursorRef.current.style.height = '60px';
          cursorRef.current.style.background = 'rgba(171, 214, 0, 0.4)';
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest(
        'button, a, input, select, textarea, .group, .project-card, .bento-card, .glass-panel, [cursor-pointer]'
      );
      if (target && cursorRef.current) {
        if (currentPage === 'portfolio') {
          cursorRef.current.style.width = '40px';
          cursorRef.current.style.height = '40px';
          cursorRef.current.style.background = '#BF40FF';
        } else if (currentPage === 'start') {
          cursorRef.current.style.width = '300px';
          cursorRef.current.style.height = '300px';
          cursorRef.current.style.background =
            'radial-gradient(circle, rgba(191, 64, 255, 0.15) 0%, rgba(191, 64, 255, 0) 70%)';
        } else if (currentPage === 'contact') {
          cursorRef.current.style.width = '600px';
          cursorRef.current.style.height = '600px';
          cursorRef.current.style.background =
            'radial-gradient(circle, rgba(191, 64, 255, 0.15) 0%, rgba(191, 64, 255, 0) 70%)';
        } else if (currentPage === 'about') {
          cursorRef.current.style.width = '400px';
          cursorRef.current.style.height = '400px';
          cursorRef.current.style.background =
            'radial-gradient(circle, rgba(191, 64, 255, 0.08) 0%, transparent 70%)';
        } else if (currentPage === 'services') {
          cursorRef.current.style.width = '300px';
          cursorRef.current.style.height = '300px';
          cursorRef.current.style.background =
            'radial-gradient(circle, rgba(191, 64, 255, 0.15) 0%, transparent 70%)';
        } else {
          cursorRef.current.style.width = '12px';
          cursorRef.current.style.height = '12px';
          cursorRef.current.style.background = '#e8b3ff';
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-on-scroll, .stagger-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      observer.disconnect();
    };
  }, [currentPage]);

  return (
    <>
      <div className="noise-overlay"></div>
      <CustomCursor cursorRef={cursorRef} glowRef={glowRef} mode={currentPage} />
      <Navbar mode={currentPage} />
      <main className="relative overflow-hidden">
        {currentPage === 'home' && <Home parallax1Ref={parallax1Ref} parallax2Ref={parallax2Ref} />}
        {currentPage === 'start' && <StartProject />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'portfolio' && <PortfolioPage />}
      </main>
    </>
  );
}
