import Image from 'next/image'
import Beko from "@/app/public/assets/beko.jpg"

export default function Vision() {
  return (
    <div className='flex flex-col justify-normal items-center gap-5 mt-5 mx-5
                    md:flex-row
                    lg:mx-10 lg:mt-16'>

        <div className='w-full md:w-2/5'>
            <Image 
                src={Beko}
                alt="Our Vision"
                
                className="rounded-lg" />
        </div>

        <div className='w-full space-y-4
                        md:w-2/4'>
            <h1 className='text-4xl font-bold'>
                Our Vision
            </h1>
            <h2 className='font-semibold text-lg lg:text-2xl'>
                We envision a future where our projects not only meet the
                aesthetic and functional needs of our clients but also promote environmental
                well-being and community development.
            </h2>
            <p className='text-sm
                          lg:text-base'>
                Looking forward, Putra Hatam Construction aims to redefine the skyline through sustainable
                and innovative architectural solutions. 
            </p>
        </div>
    </div>
  )
}
