import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

function Word() {
  const element = useRef(null);
  
  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start center', 'end 90vh'], 
  });
  
  // Text about Amigoz video production studio
  const value = "Amigoz creates stunning visual content with cinematic storytelling innovative editing techniques and creative direction that transforms your vision into reality";
  
  // Split text into words
  const words = value.split(' ');
  
  // Calculate animation ranges
  const calculateRange = (index, total) => {
    const rangeSize = 0.8 / total;
    const start = index * rangeSize;
    const end = start + (rangeSize * 1.5);
    return [start, Math.min(end, 1)];
  };
  
  return (
    <div 
      id='about'
      ref={element}
      className="flex flex-col items-center justify-center min-h-screen py-20"
    >
      {/* Space before sticky section */}
      <div className="h-64"></div>
      
      <div className="sticky top-1/2 transform -translate-y-1/2 w-full max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-3xl md:text-4xl lg:text-5xl font-bold">
          {words.map((word, i) => {
            const range = calculateRange(i, words.length);
            return (
              <Nword 
                key={i} 
                range={range} 
                progress={scrollYProgress}
              >
                {word}
              </Nword>
            );
          })}
        </div>
      </div>
      
      {/* Space after sticky section */}
      <div className="h-screen"></div>
    </div>
  );
}

const Nword = ({ children, range, progress }) => {
  // Transform opacity from initial 0.2 to full opacity based on scroll
  const opacity = useTransform(
    progress, 
    range, 
    [0.2, 1] 
  );
  
  // Add blur effect that decreases as scroll progresses
  const blurAmount = useTransform(
    progress,
    range,
    [8, 0] // Start with 8px blur and reduce to 0
  );
  
  // Transform the blur amount directly into a CSS filter string
  const filterStyle = useTransform(
    blurAmount,
    (value) => `blur(${value}px)`
  );
  
  return (
    <motion.div 
      className="mx-1 my-1 md:mx-2"
      style={{ 
        opacity,
        filter: filterStyle
      }}
    >
      <motion.span className="block">
        {children}
      </motion.span>
    </motion.div>
  );
};

export default Word;