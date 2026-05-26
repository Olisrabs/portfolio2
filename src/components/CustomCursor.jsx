import React from 'react';

export default function CustomCursor({ cursorRef, glowRef, mode = 'home' }) {
  if (mode === 'portfolio') {
    return (
      <div
        className="fixed pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hidden md:block"
        style={{
          width: '40px',
          height: '40px',
          background: '#BF40FF',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
        id="cursor"
        ref={cursorRef}
      ></div>
    );
  }

  if (mode === 'start' || mode === 'services') {
    return (
      <div
        className="fixed pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hidden md:block"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(191, 64, 255, 0.15) 0%, rgba(191, 64, 255, 0) 70%)',
        }}
        id="cursor"
        ref={cursorRef}
      ></div>
    );
  }

  if (mode === 'contact') {
    return (
      <div
        className="fixed pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hidden md:block"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(191, 64, 255, 0.15) 0%, rgba(191, 64, 255, 0) 70%)',
        }}
        id="cursor"
        ref={cursorRef}
      ></div>
    );
  }

  if (mode === 'about') {
    return (
      <div
        className="fixed pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hidden md:block"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(191, 64, 255, 0.08) 0%, transparent 70%)',
        }}
        id="cursor"
        ref={cursorRef}
      ></div>
    );
  }

  return (
    <>
      <div className="custom-cursor" id="cursor" ref={cursorRef}></div>
      <div className="cursor-glow" id="cursor-glow" ref={glowRef}></div>
    </>
  );
}
