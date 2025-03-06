import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const InfiniteSlider = () => {
  const textRef = useRef(null);

  return (
    <div className="flex items-center justify-center w-full h-[90vh] overflow-hidden relative bg-black">
      {/* Infinite scrolling text */}
      <div className="absolute w-full whitespace-nowrap overflow-hidden flex font-bold text-white">
        <motion.div
          ref={textRef}
          className="flex font-['over'] text-8xl sm:text-[12rem]"
          initial={{ x: '100vw' }}  // Start from the right edge of the viewport
          animate={{ x: '-100%' }}
          transition={{ 
            duration: 8, 
            ease: 'linear', 
            repeat: Infinity,
            repeatType: 'loop'
          }}
        >
          <span className="mx-10">AMIGOZ</span>
        </motion.div>
      </div>

      {/* Floating image in the center - without borders */}
      <motion.div 
        className="absolute z-10"
        animate={{
          y: [0, -15, 0, 15, 0],
          scale: [1, 1.05, 1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity
        }}
      >
        <img 
          src="./cam.png" 
          alt="Floating icon" 
          className="w-screen sm:w-[60vw]" 
        />
      </motion.div>

      {/* Subtext - positioned at the bottom right-center */}
      <div className="absolute bottom-16 right-8 text-white font-['over'] z-20">
        <p className="text-sm sm:text-base ">THE FILMMAKING COMPANY</p>
      </div>

      {/* Small rotating image in bottom left corner */}
      <motion.div 
        className="absolute bottom-8 left-8 z-20"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity
        }}
      >
        <img 
          src="./globe.png" 
          alt="Rotating logo" 
          className="w-12 h-12 sm:w-16 sm:h-16" 
        />
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;