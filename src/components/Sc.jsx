import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SemicircleDome = () => {
  const text = "We are the film production company, shaping unique stories that truly resonate.";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // Starts animation when entering the viewport
  const controls = useAnimation();

  // Start animation only when in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Glitchy Images
  const glitchyImages = [
    "s1.png", "s2.png", "s3.png", "s8.png", "s5.png", "s6.png", "s7.png", "s9.png"
  ];

  // Positions around the circle
  const positions = [
    { top: "80%", left: "80%", transform: "translate(-50%, -50%)" },
    { top: "20%", left: "75%", transform: "translate(-50%, -50%)" },
    { top: "10%", left: "15%", transform: "translate(-50%, -50%)" },
    { top: "10%", left: "70%", transform: "translate(-50%, -50%)" },
    { top: "80%", left: "30%", transform: "translate(-50%, -50%)" },
    { top: "75%", left: "15%", transform: "translate(-50%, -50%)" },
    { top: "15%", left: "5%", transform: "translate(-50%, -50%)" },
    { top: "20%", left: "20%", transform: "translate(-50%, -50%)" }
  ];

  return (
    <div className="h-[100vh] w-full flex justify-center items-center relative">
      <div 
        ref={ref} 
        className="relative w-[80vw] sm:w-[40vw] h-[100vw] sm:h-[40vw] bg-white flex flex-col justify-center items-center"
      >
        {/* Floating Image positioned above the text */}
        <motion.div
          className="mb-6"
          initial={{ y: -5 }}
          animate={{ y: 5 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease: "easeInOut" }}
        >
          <motion.img 
            src="/cam.png" 
            alt="Floating Camera"
            className="h-[15vh] sm:h-[40vh] object-contain"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                rotate: [0, 3, 0, -3, 0],
                transition: { 
                  opacity: { duration: 1 },
                  rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" }
                } 
              },
              hidden: { opacity: 0 }
            }}
          />
        </motion.div>

        {/* Text Content below the image */}
        <motion.p 
          className="text-center text-black text-2xl sm:text-3xl font-semibold max-w-[80%]"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
            hidden: { opacity: 0 }
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 10 }
              }}
              transition={{ delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
      
      {/* Glitchy Images Around the Circle */}
      {glitchyImages.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt="glitchy effect"
          className='absolute w-[50px] h-[50px] sm:w-[10vw] sm:h-[10vw] pointer-events-none'
          style={positions[index]}
          animate={{ x: [0, Math.random() * 10 - 5], y: [0, Math.random() * 10 - 5] }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default SemicircleDome;