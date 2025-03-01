import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  // Array of image paths for different scribble designs
  const scribbleImages = [
    "s1.png", "s2.png", "s3.png", "s8.png", "s5.png", "s6.png"
  ]

  // Predefined positions for better scattering
  const positions = [
    { top: "20%", left: "10%" },
    { top: "5%", left: "50%" },
    { top: "27%", left: "75%" },
    { top: "55%", left: "85%" },
    { top: "80%", left: "45%" },
    { top: "65%", left: "15%" }
  ]
  
  return (
    <div className='relative bg-[url(./bg.png)] bg-cover h-[90vh] w-[100vw] bg-black overflow-hidden flex flex-col items-center justify-center'>
      {/* PNG Scribbles */}
      <div className="absolute inset-0 pointer-events-none">
        {scribbleImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="scribble"
            className="absolute"
            style={{
              top: positions[index].top,
              left: positions[index].left,
              width: "100px",
              height: "100px",
            }}
            animate={{ x: [0, Math.random() * 6 - 3], y: [0, Math.random() * 6 - 3] }} // Adjust movement intensity here
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} // Adjust duration here
          />
        ))}
      </div>
      
      {/* Main Content */}
      <motion.h1 
        className="text-white font-[avant] text-8xl sm:text-[11rem] font-bold mb-10 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        amigoz
      </motion.h1>
    </div>
  )
}

export default Hero
