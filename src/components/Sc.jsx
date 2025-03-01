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
        className="relative w-[100vw] sm:w-[40vw] h-[100vw] sm:h-[40vw] bg-white rounded-full flex justify-center items-center"
      >
        <motion.p 
          className="text-center text-black text-2xl sm:text-5xl font-semibold"
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
  );
};

export default SemicircleDome;
