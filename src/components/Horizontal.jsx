import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="" style={{marginTop:'10vh'}}>
      <div className="flex h-8  items-center justify-center">
        <span className="font-semibold uppercase ">Featured projects</span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500"></span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[180vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative border rounded-3xl h-[450px] w-[450px] overflow-hidden bg-black  "
    >
      {/* ✅ Fullscreen iframe video */}
      <iframe
        src={card.iframe}
        width="100%"
        height="100%"
        allow="autoplay"
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default Example;

const cards = [
    {
      title: "Title 1",
      id: 1,
      iframe: "https://drive.google.com/file/d/1tkUJ-4DVex8IrrARpUaS1pj2fLr8VDjR/preview",
    },
    {
      title: "Title 2",
      id: 2,
      iframe: "https://drive.google.com/file/d/11K99_m74yzKJPq1UXYuLCr9Cz6E5S_W0/preview",
    },
    {
      title: "Title 3",
      id: 3,
      iframe: "https://drive.google.com/file/d/1N08bEPONhczkULrHda5PsigwSCLVG6mz/preview",
    },
    {
      title: "Title 4",
      id: 4,
      iframe: "https://drive.google.com/file/d/1gnkWAuR88xBWfrt3GWmF1vgSueSCDU-_/preview",
    },
    {
      title: "Title 5",
      id: 5,
      iframe: "https://drive.google.com/file/d/1Z_NpVEWszPdX-hlWtREy1Q5bwbiydQdA/preview",
    },
  ];
  
