import React, { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="h-[10vh] sticky top-0 left-5 right-5 z-[49] hidden md:flex items-center justify-between bg-transparent" style={{marginInline:'15px'}}>
        <a href="#home" className="mix-blend-difference text-white relative no-underline group mx-5">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#about" className="mix-blend-difference text-white relative no-underline group mx-5">
          About
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <img src="./a.png" className="h-[5vh] mx-5" alt="Logo" />
        <a href="#services" className="mix-blend-difference text-white relative no-underline group mx-5">
          Services
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="mix-blend-difference text-white relative no-underline group mx-5">
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      {/* Mobile Navbar (Hamburger Menu) */}
      <div className="md:hidden flex items-center justify-between h-[10vh] fixed top-0 left-0 right-0 z-[49] mx-5" style={{marginInline:'15px'}}>
        <img src="./a.png" className="h-[5vh] mx-5" alt="Logo" />
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-xl mx-5">
          {isOpen ? "✕" : "Menu"}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-[101]`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-3xl mx-5">
          ✕
        </button>
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-6xl mx-5">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-6xl mx-5">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-6xl mx-5">Services</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-6xl mx-5">Contact</a>
        </nav>
      </div>

      {/* Background overlay when sidebar is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}

export default Nav;
