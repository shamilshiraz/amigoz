import React from 'react'
import { services } from './data'
import Card from './Card'

function Stack() {
  return (
    <div className='mt-[50vh]'>
      {
        services.map((service,index)=>{
            return <Card key={index} i={index} {...service}/>
        })
      }
    </div>
  )
}

export default Stack
