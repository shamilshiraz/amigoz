import React from 'react'
import { services } from './data'
import Card from './Card'

function Stack() {
  return (
    <div className='mt-[0vh]' id='services'>
        <p className='flex justify-center text-4xl sticky top-[10vh]'>OUR SERVICES</p>
      {
        services.map((service,index)=>{
            return <Card key={index} i={index} {...service}/>
        })
      }
    </div>
  )
}

export default Stack
