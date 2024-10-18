import React from 'react'
import Vision from './vision'
import Culture from './culture'

export default function AboutUs() {
  return (
    <div className="container mx-auto font-poppins">
        <div>
            <h1 className="font-bold text-2xl text-center py-5">
                About Us
            </h1>
            <h1 className='font-bold text-5xl text-center py-1'>
                Putra Hatam Construction
            </h1>
            
            <div className='pb-12'>
                <Vision />
            </div>

            <div className='bg-gray-200 px-5 pt-1 pb-10
                            lg:py-0.5 lg:pb-10'>
                <Culture />
            </div>

        </div>
    </div>
  )
}
