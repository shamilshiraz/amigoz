import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

const InfiniteSlider = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatTriggered, setIsChatTriggered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
      setIsChatTriggered(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseChat = (e) => {
    e.stopPropagation();
    setIsChatOpen(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const pauseAt = 5; // Pause at 5 seconds
      const checkTime = () => {
        if (video.currentTime >= pauseAt) {
          video.pause();
        }
      };
      video.addEventListener('timeupdate', checkTime);
      return () => video.removeEventListener('timeupdate', checkTime);
    }
  }, []);

  return (
    <div id='home' className="flex items-center justify-center w-full h-[100vh] sm:h-[90vh] overflow-hidden relative">
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="relative sm:w-full sm:h-full object-contain sm:object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src="./rolling.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Chat Icon */}
      <div
        className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-200 transition z-20"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle size={24} />
      </div>

      {/* Chat Popup */}
      {isChatOpen && (
        <motion.a
          href='https://wa.me/971509772710'
          className="fixed bottom-20 right-8 bg-white p-4 w-64 rounded-lg shadow-xl z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-black">Chat with us</p>
            <X
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              onClick={handleCloseChat}
            />
          </div>
          <p className="text-gray-600 text-sm">How can we help you today?</p>
        </motion.a>
      )}

      {/* Rotating Image */}
      <motion.a
        href='https://portfolio.amigozme.com/'
        className="fixed bottom-8 left-8 z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      >
        <img src="./globe.png" alt="Rotating logo" className="w-12 h-12 sm:w-16 sm:h-16" />
      </motion.a>
    </div>
  );
};

export default InfiniteSlider;
