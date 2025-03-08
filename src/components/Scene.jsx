import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const  InfiniteSlider = () => {
  return (
    <div id='home' className="flex items-center justify-center w-full h-[100vh] sm:h-[90vh] overflow-hidden relative">
      {/* Static background text */}
      <div className="absolute w-full text-center font-bold text-white ">
        <h1 className="font-['over'] text-[4rem] sm:text-[12rem]">AMIGOZ</h1>
      </div>


      {/* Subtext - positioned at the bottom right-center */}
      <div className="fixed bottom-8 right-8 text-white  z-20">
        <p className="text-sm sm:text-base"><a href="" className='font-[over]'>IG</a>|<a href="" className='font-[over]'>WA</a></p>
      </div>

      {/* Small rotating image in bottom left corner */}
      <motion.div 
        className="fixed bottom-8 left-8 z-20"
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
