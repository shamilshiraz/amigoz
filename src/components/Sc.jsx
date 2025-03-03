import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SemicircleDome = () => {
  const text = "Amigoz is a creative hub where innovation meets passion. A place to explore, create, and connect.";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // Starts animation when entering the viewport
  const controls = useAnimation();

  // Start animation only when in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div 
        ref={ref} 
        className="relative w-[100vw] sm:w-[40vw] h-[100vw] sm:h-[40vw] bg-white rounded-full flex flex-col justify-center items-center"
      >
        {/* Container div to position elements */}
        <div className="flex flex-col items-center justify-center w-full h-full px-4">
          {/* Floating Image positioned above the text */}
          <motion.div
            className="mb-6"
            initial={{ y: -5 }}
            animate={{ 
              y: 5,
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <motion.img 
              src="/cam.png" 
              alt="Floating Camera"
              className="h-[15vh] sm:h-[30vh] object-contain"
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
      </div>
    </div>
  );
};

export default SemicircleDome;