import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Page from './components/Sc';
import Intro from './components/Intro';
import SVGUnmaskingEffect from './components/Svg';
import VideoGrid from './components/Video';
import Stack from './components/Stack';
import Example from './components/Horizontal';
import Mos from './components/Mos';
import Footer from './components/Footer';
import LargeClientScroller from './components/Clients';
import BulgeTextEffect from './components/Bg';
import Exmmple from './components/Hero';
import TextSkewAnimation from './components/Try';
import TextEx from './components/Try';
import Scene from './components/Scene';
import './App.css'

function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Set up Lenis on component mount
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="relative">
      {/* Custom Cursor */}
      <motion.div
        className="fixed hidden sm:block top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999]"
        animate={{ x: mouseX - 6, y: mouseY - 6 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed hidden sm:block top-0 left-0 w-12 h-12 border border-white rounded-full pointer-events-none z-[9998]"
        animate={{ x: mouseX - 24, y: mouseY - 24 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      />

      {/* Page Content */}
      <Nav />
      <Scene />
      <Exmmple />
      <VideoGrid />
      <Intro />
      <Stack />
      <Example />
      <LargeClientScroller />
      <Mos />
    </div>
  );
}

export default App;
