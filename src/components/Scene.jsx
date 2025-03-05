import { motion } from "framer-motion";

const TextEx = () => {
  return (
    <div className="grid bg-[url(./bg.png)] h-[90vh] place-content-center p-12 ">
      <FloatingLetters />
    </div>
  );
};

const FloatingLetters = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
    >
      <div className="relative font-['Over']">
        {/* Shadow text (stays in place) */}
        <div 
          className="absolute text-gray-600 text-8xl sm:text-[12rem] font-black"
          style={{
            transform: "translateZ(0px)",
          }}
        >
          amigoz
        </div>
        
        {/* Main floating text */}
        <motion.div
          className="text-white text-8xl sm:text-[12rem] font-black relative"
          initial={{
            transform: "translateZ(8px) translateY(0px) translateX(0px)",
          }}
          animate={{
            transform: "translateZ(48px) translateY(-16px) translateX(-8px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
        >
          amigoz
        </motion.div>
      </div>

    </div>
  );
};

export default TextEx;
