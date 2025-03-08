import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react'; // Icons

const InfiniteSlider = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatTriggered, setIsChatTriggered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
      setIsChatTriggered(true); // Mark as triggered so it doesn't auto-show again
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCloseChat = (e) => {
    e.stopPropagation(); // Prevent triggering the parent's onClick
    setIsChatOpen(false);
  };

  return (
    <div id='home' className="flex items-center justify-center w-full h-[100vh] sm:h-[90vh] overflow-hidden relative">
      {/* Video Background */}
      <video 
        className="absolute sm:w-full sm:h-full object-contain sm:object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./rolling.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Chat Icon - Bottom Right */}
      <div
        className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-200 transition z-20"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle size={24} />
      </div>

      {/* Chat Popup (Shows after 5s & can be manually opened/closed) */}
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

      {/* Small rotating image in bottom left corner */}
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