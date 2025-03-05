import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Exmmple = () => {
  return (
    <section className="grid h-[100vh] place-content-center p-12">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-[#1e1e1e] border"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-[60vh] w-[80vw] rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <Screen />
      </motion.div>
    </div>
  );
};

const Screen = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "We are the film production company, shaping unique stories that truly resonate.";

  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;

    const typeNextCharacter = () => {
      if (isMounted && currentIndex < fullText.length) {
        setDisplayText(prev => prev + fullText[currentIndex]);
        currentIndex++;
        setTimeout(typeNextCharacter, 50); // Adjust typing speed here
      }
    };

    typeNextCharacter();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white p-4">
      <motion.p 
        className="text-black text-center text-3xl sm:text-7xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="inline-block ml-1 w-2 bg-black"
        >
          |
        </motion.span>
      </motion.p>
    </div>
  );
};

export default Exmmple;