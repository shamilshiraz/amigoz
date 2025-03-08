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
import Scene from './components/Scene';
import './App.css';

function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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

  // Simulate loading progress
  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          } else {
            clearInterval(interval);
            setLoading(false);  // Hide the loading screen after progress reaches 100
            return prevProgress;
          }
        });
      }, 60);  // Adjust the speed by changing the interval duration (milliseconds)
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="relative">
      {/* Loading Screen */}
      {loading && (
  <div 
    className="fixed top-0 left-0 w-full h-full bg-black grid place-content-center z-50"
    style={{
      animation: loading ? "none" : "fadeOutToTop 0.5s ease-in-out forwards"
    }}
  >
    <video
      className="w-[200px] h-[200px] object-cover"
      autoPlay
      muted
      playsInline
      onEnded={() => setLoading(false)}
    >
      <source src="/loading.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <style jsx>{`
      @keyframes fadeOutToTop {
        0% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-50px); }
      }
    `}</style>
  </div>
)}

      {/* Background Image Div */}
      {!loading && (
        <div
          className="fixed inset-0 w-[100vw] h-[100vh] bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: "url('/scratches.png')" }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/scratches.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Custom Cursor */}
      <motion.div
        className="fixed hidden sm:block top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999]"
        animate={{ x: mouseX - 6, y: mouseY - 6 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed hidden sm:block top-0 left-0 w-12 h-12 border border-white rounded-full pointer-events-none z-[9998]"
        animate={{ x: mouseX - 24, y: mouseY - 24 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      />

      {/* Page Content */}
      {!loading && (
        <div>
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
      )}
    </div>
  );
}

export default App;
