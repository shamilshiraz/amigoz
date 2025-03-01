import React from 'react'

function Nav() {
  return (
    <div className='h-[10vh] bg-black sticky top-0 z-[100] flex items-center justify-evenly'>
      <p className='mix-blend-difference text-white'>Home</p>
      <p className='mix-blend-difference text-white'>About</p>
      {/* <div className="h-[10vh] overflow-hidden">
      <img src="./a.png" className='h-[50px]' alt="" />
      </div> */}
      <p className='mix-blend-difference text-white'>Services</p>
      <p className='mix-blend-difference text-white'>Contact</p>
    </div>
  )
}

export default Nav

