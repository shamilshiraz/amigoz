import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SVGUnmaskingEffect = () => {
  const ref = useRef(null);
  // Adjusted offset to ensure animation happens while the element is visible on screen
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"] // Changed from ["start end", "end start"]
  });

  // Start with a small size and expand to full screen
  const rectSize = useTransform(scrollYProgress, [0, 0.6], [0, 150]); // Make max size larger than viewport to ensure full coverage
  
  // Position transformations to keep the rectangle centered
  const rectPosition = useTransform(scrollYProgress, [0, 0.6], [50, -25]); // Center (50) to beyond edges (-25)

  return (
    <div className="h-[300vh]">
      <div ref={ref} className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">
        
        {/* Background Video/Image */}
        <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
          <video autoPlay muted loop className="absolute w-full h-full object-cover">
            <source src="./dubai.mp4" type="video/mp4" />
          </video>
          {/* If using an image instead of video */}
          {/* <img src="./dubai.webp" alt="Dubai" className="absolute w-full h-full object-cover" /> */}
        </div>

        {/* SVG Mask (Properly Centered) */}
        <svg className="absolute top-0 left-0 w-full h-full z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <clipPath id="rectReveal">
              <motion.rect
                width={rectSize} 
                height={rectSize}
                rx="15" ry="15" 
                fill="white"
                style={{ 
                  translateX: rectPosition,
                  translateY: rectPosition
                }}
              />
            </clipPath>
          </defs>

          {/* Apply Mask to Background */}
          <image
            href="./dubai.webp"
            x="0" y="0"
            width="100" height="100"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#rectReveal)"
          />
        </svg>

        {/* Optional Text Overlay */}
        <div className="relative z-40 text-white text-center">
          <h1 className="text-5xl font-bold">Dubai</h1>
          <p className="text-xl mt-4">Scroll to reveal</p>
        </div>
      </div>
    </div>
  );
};

export default SVGUnmaskingEffect;