import Image from "next/image"
import BlueButton from "../public/assets/blue-button.svg"
import Link from "next/link"
import Gradient from "../public//assets/gradient.webp"

export default function Hero() {
  return (
    <div className='pt-4'>

        <div className='px-[20px]'>
            <h1 className='text-center text-[32px] leading-[40px] font-medium text-[#172026]'>
                 Revolutionize Your Home Like A Boss
            </h1>

            <p className="text-center pt-6 text-[#368485C]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum ipsum nec dignissim sodales.
                Sed commodo malesuada vestibulum. Donec cursus nec lectus quis vestibulum.
            </p>

            <div className="flex w-full pt-8">
              <Link legacyBehavior href="/our-services">
                <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px]">
                    Build Now
                </button>
              </Link>
              <Link legacyBehavior href="/about-us">
                <button className="text-[#4328EB] w-1/2 flex justify-center gap-x-2 items-center">
                    About Us
                    <span>
                      <Image
                        src={BlueButton}
                        alt="learn more"
                      />
                    </span>
                </button>
              </Link>
            </div>
        </div>
        <div className="relative flex h-full w-full justify-center">
          <Image
          src={Gradient}
          alt="background image gradient"
          className="width-full object-cover pt-3"
          />
          <div className="absolute bottom-5 flex w-full flex-col items-center">

          </div>

        </div>
    </div>
  )
}
