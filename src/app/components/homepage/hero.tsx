import Image from "next/image";
import BlueButton from "@/app/public/assets/blue-button.svg";
import Link from "next/link";
import Grad from "@/app/public/assets/gradientyellow.png";
import ConstructionImage from "@/app/public/assets/construction-img.png";
import BUMN from "@/app/public/assets/bumn.png";
import Semen from "@/app/public/assets/semen.png";
import Summarecon from "@/app/public/assets/summarecon.png";
import Ancol from "@/app/public/assets/ancol.png"
import KCIC from "@/app/public/assets/kcic.png"

export default function Hero() {
  return (
    <div className="pt-4 font-poppins
                    lg:pt-10">

        <div className="px-[1.25rem]
                        lg:px-[17.5rem]">
            <h1 className="text-center text-[32px] leading-[2.5rem] font-bold text-[#172026]
                          lg:text-[64px] lg:leading-[4.5rem]">
                 Building Excellence Designing Dreams
            </h1>

            <p className="text-center pt-6 text-[#368485C]
                          lg:text-[18px] lg:leading-7">
                With a dedication to innovation and quality, we offer comprehensive construction
                and design solutions tailored to each client's unique needs.
                From groundbreaking architecture and robust constructions to exquisite interior and exterior designs.
            </p>

            <div className="flex w-full pt-8 justify-center gap-x-6">
              <Link legacyBehavior href="/our-services">
                <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px]
                                    lg:w-fit">
                    Build Now
                </button>
              </Link>
              <Link legacyBehavior href="/about-us">
                <button className="text-[#4328EB] w-1/2 flex justify-center gap-x-2 items-center
                                    lg:w-fit">
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
          src={Grad}
          alt="background image gradient"
          className="min-h-[450px] width-full object-cover h-[200px] w-full
                    lg:h-[920px] lg:w-full" />

          <div className="absolute flex w-full flex-col items-center">
            <Image 
            src={ConstructionImage}
            alt="hero section construction image"
            className="h-[300px] w-[300px] drop-shadow-lg -mb-4
                      sm:-mb20 sm:h-[100px]
                      lg:-mb-28 lg:h-auto
                      xl:w-[70%]" />

            <div className="flex w-full flex-col items-center
                            lg: container lg:flex-row lg:justify-between lg:px-20" >
              <p className="text-black text-lg  text-center
                            lg:text-[50px] lg:text-white lg:drop-shadow-md">
                Our Partners
              </p>

              <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[1.25rem] drop-shadow-lg align-middle
                              lg:grid-cols-5">
                  <Image
                    src={BUMN}
                    alt="BUMN"
                    className="h-[80px] w-[80px] -mb-7 lg:-mb-0
                              lg:h-[110px] lg:w-[110px]" />
                  <Image
                    src={Ancol} 
                    alt="Ancol"
                    className="h-[70px] w-[70px] -mb-7 lg:-mb-0
                              lg:h-[100px] lg:w-[100px]" />
                  <Image
                    src={Semen}
                    alt="Semen 3 Tiga Roda"
                    className="h-[40px] w-[40px] -mb-7 lg:-mb-0
                              lg:h-[50px] lg:w-[46.5px]" />
                  <Image
                    src={Summarecon}
                    alt="Summarecon"
                    className="h-[70px] w-[70px] lg:-mb-0
                              lg:w-[90px] lg:h-[90px]" />
                  <Image
                    src={KCIC}
                    alt="KCIC"
                    className="h-[30px] w-[40px] lg:-mb-0
                              lg:h-[40px] lg:w-[18.86px]" />
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}
