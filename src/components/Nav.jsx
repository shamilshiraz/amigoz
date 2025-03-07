import React from 'react'

function Nav() {
  return (
    <div className='h-[10vh] bg-black sticky top-0 z-[100] flex items-center justify-evenly'>
      <a href="#home" className='mix-blend-difference text-white relative no-underline group'>
        Home
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a href="#about" className='mix-blend-difference text-white relative no-underline group'>
        About
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a href="#services" className='mix-blend-difference text-white relative no-underline group'>
        Services
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a href="#contact" className='mix-blend-difference text-white relative no-underline group'>
        Contact
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
    </div>
  )
}

export default Nav
