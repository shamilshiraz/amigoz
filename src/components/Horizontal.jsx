import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Example = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <div className="flex h-8 items-center justify-center">
        <span className="font-semibold uppercase sticky top-[10vh] left-0 text-4xl">Featured projects</span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  
  const cardsCount = cards.length;
  const cardWidth = 450; // Width of each card
  const gapWidth = 16; // Gap between cards (from gap-4)
  
  // Calculate total content width
  const totalWidth = cardsCount * (cardWidth + gapWidth);
  
  // Calculate how much to move based on viewport width
  const [movePercentage, setMovePercentage] = useState("-95%");
  
  useEffect(() => {
    const calculateMove = () => {
      const viewportWidth = window.innerWidth;
      // Calculate exact percentage needed
      const exactPercentage = -1 * ((totalWidth - viewportWidth) / totalWidth) * 100;
      setMovePercentage(`${exactPercentage}%`);
    };
    
    calculateMove();
    window.addEventListener("resize", calculateMove);
    return () => window.removeEventListener("resize", calculateMove);
  }, [totalWidth]);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", movePercentage]);

  return (
    <section ref={targetRef} className="relative h-[110vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 pr-8">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// const Card = ({ card }) => {
//   return (
//     <div className="h-[450px] w-[450px] rounded-lg bg-white p-4 shadow-md mr-2">
//       <h2 className="text-xl font-bold">{card.title}</h2>
//       <div className="mt-2 h-[380px] overflow-hidden rounded">
//         <img 
//           src={card.thumbnail} 
//           alt={card.title} 
//           className="h-full w-full object-cover"
//           onError={(e) => {
//             e.target.src = "./placeholder.jpg"; // Fallback image if thumbnail fails to load
//           }}
//         />
//       </div>
//     </div>
//   );
// };

export default Example;

const cards = [
  {
    title: "Honor",
    id: 1,
    iframe: "https://drive.google.com/file/d/1N08bEPONhczkULrHda5PsigwSCLVG6mz/preview",
    thumbnail: "./honor.jpg",
  },
  {
    title: "Dubai police",
    id: 2,
    iframe: "https://drive.google.com/file/d/1gnkWAuR88xBWfrt3GWmF1vgSueSCDU-_/preview",
    thumbnail: "./dbp.png",
  },
  {
    title: "F1",
    id: 3,
    iframe: "https://drive.google.com/file/d/1qXHsVyJctRkxOWbBvAjgA3M1nDVIK86e/preview",
    thumbnail: "./f1.png",
  },
  {
    title: "Squid games x Coke studio",
    id: 4,
    iframe: "https://drive.google.com/file/d/1qXHsVyJctRkxOWbBvAjgA3M1nDVIK86e/preview",
    thumbnail: "./sqg.png",
  },
  {
    title: "Not a space",
    id: 5,
    iframe: "https://drive.google.com/file/d/1tkUJ-4DVex8IrrARpUaS1pj2fLr8VDjR/preview",
    thumbnail: "nas.png",
  },
  {
    title: "",
    id: 6,
    iframe: "https://drive.google.com/file/d/1JmI-gtudVK4vk1t0shdS2eKt8A9bvfVs/preview",
    thumbnail: "./wafa.png",
  },
  {
    title: "Birthday",
    id: 7,
    iframe: "https://drive.google.com/file/d/1h1yf955V2o9yZHik0Soe7hCqcG55EFPk/preview",
    thumbnail: "./bday.png",
  }, 
  {
    title: "H2O F1",
    id: 8,
    iframe: "https://drive.google.com/file/d/1pw-ZJ3gi4TeY4dEekq6kkTTaMM2R6Bzk/preview",
    thumbnail: "./h2o.png",
  }, 
  {
    title: "Luck Protein",
    id: 9,
    iframe: "https://drive.google.com/file/d/1w9-47jN5CH9qi8F9km9Vr28E52k1oXs7/preview",
    thumbnail: "./protein.png",
  }, 
  {
    title: "Anilesh Kumar",
    id: 10,
    iframe: "https://drive.google.com/file/d/1fBPcYYEwQ2O7076VsveTL4HspSqj038h/preview",
    thumbnail: "./anilesh.png",
  }, 
  
];


const Card = ({ card }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const cardRef = useRef(null);
  const timeoutRef = useRef(null);


  // Handle mouse movement
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // When iframe is clicked, mark as active
  const handleIframeClick = () => {
    setIsActive(true);
    // Clear the timeout when user interacts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // When iframe loses focus, start the timeout
  const handleIframeBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      ref={cardRef}
      key={card.id}
      className="group relative rounded-[90px] h-[450px] w-[450px] overflow-hidden bg-black cursor-none"
      onClick={() => setIsPlaying(true)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      {/* Custom cursor - positioned relative to THIS card */}
      {showCursor && (
        <div 
          className="absolute pointer-events-none flex items-center justify-center rounded-full  mix-blend-difference text-white font-semibold z-50 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left: `${cursorPosition.x}px`, 
            top: `${cursorPosition.y}px` 
          }}
        >
          View
        </div>
      )}

      {isPlaying ? (
        <div className="w-full h-full">
          <iframe
            src={card.iframe}
            width="100%"
            height="100%"
            allow="autoplay"
            className="absolute inset-0 w-full h-full"
            onClick={handleIframeClick}
            onBlur={handleIframeBlur}
          ></iframe>
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-900">
          <img
            src={card.thumbnail}
            alt="Thumbnail"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center mb-2">
              <span className="text-white text-2xl">▶</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};