import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

function Card({title,description,image,color,i}) {
    const container=useRef(null)
    const {scrollYProgress}=useScroll({
        target:container,
        offset:['start end','start start']
    })

    const scale=useTransform(scrollYProgress,[0,1],[2,1])
  return (
    <div ref={container} className='h-[100vh]  flex items-center justify-center sticky top-0'>
        <div className="relative text-black h-[60vh] w-[90vw] sm:w-[60vw] border border-black rounded-full flex flex-col justify-center items-center" style={{backgroundColor:color,top:`calc(${i*25}px)`}}>
            <p>{title}</p>
            <p>{description}</p>
            <div className="w-[50vw] h-[50vw] rounded-full overflow-hidden">
                <motion.div style={{scale:scale}} className="">
                <img src={image} alt="" className='w-[50vw]' />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Card
