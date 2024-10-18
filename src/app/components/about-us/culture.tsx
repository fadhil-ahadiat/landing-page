import Image from "next/image"
import Worker from "@/app/public/assets/worker.jpg"

export default function Culture() {
  return (
    <div className="flex flex-col-reverse justify-center items-center gap-5 mt-14
                    md:flex-row">
        <div className='w-full space-y-4
                        md:w-2/4' >
            <h1 className='text-4xl font-bold'>
                Our Culture
            </h1>
            <h2 className='font-semibold text-lg lg:text-2xl'>
                At Putra Hatam Construction, we believe in a culture of openness and collaboration.
                We encourage our team to be innovative and proactive, fostering an environment
                where creative ideas and practical solutions flourish.
            </h2>
            <p className='text-sm
                          lg:text-base'>
                Our commitment to sustainability and ethical practices is at the heart of everything
                we do, ensuring that we not only deliver beautiful spaces but also contribute positively
                to our community.
            </p>
        </div>

        <div className='w-full
                        md:w-2/5'>
            <Image 
                src={Worker}
                alt="Our Culture"
                
                className="rounded-lg" />
        </div>
    </div>
  )
}
