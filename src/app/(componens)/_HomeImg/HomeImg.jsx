"use client"
import React from 'react'
import Image from 'next/image';

export default function Slider() {
  return (
    <>
      <div className='w-full'>
        <Image
          src="/slide.jpg"
          alt="Slide Image"
          width={1920}  
          height={400}  
          className='w-full md:h-[400px] h-[300px]' 
          priority 
        />
      </div>
    </>
  )
}
