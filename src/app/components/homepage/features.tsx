import service1 from "@/app/public/assets/service1.png"
import service2 from "@/app/public/assets/service2.png"
import service3 from "@/app/public/assets/service3.png"
import CheckMark from "@/app/public/assets/check.svg"
import BlueButton from "@/app/public/assets/blue-button.svg"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    image: service1,
    title: "Construction and Architecture",
    description: "Transform your dreams into durable structures. Expert architectural planning and robust construction tailored to your needs.",
    listItems: [
      "Precision in execution",
      "Innovative design solutions",
      "Sustainable building practices"
    ],
    link: "/our-services",
    reverse: false
  },
  {
    id: 2,
    image: service2,
    title: "Interior Design",
    description: "Crafting beautiful, functional interiors that reflect your style and enhance your comfort. From modern to classic, we bring your vision to life.",
    listItems: [
      "Customized design themes",
      "Functional space optimization",
      "Luxurious and aesthetic interiors"
    ],
    link: "/our-services",
    reverse: true
  },
  {
    id: 3,
    image: service3,
    title: "Urban Planning",
    description: "Elevate your property’s curb appeal with our innovative exterior design solutions. Custom designs to create the perfect first impression.",
    listItems: [
      "Enhanced curb appeal",
      "Durable and quality materials",
      "Environmentally conscious designs"
    ],
    link: "/our-services",
    reverse: false
  }
];

export default function Features() {
  return (
    <div className="flex flex-col w-full mx-auto bg-gray-100 font-poppins">
      {services.map(service => (
        <div key={service.id} className={`flex flex-col ${service.reverse ? "sm:flex-row" : "sm:flex-row-reverse"} gap-x-6 bg-white shadow-md rounded-lg m-4 p-4`}>
          <Image 
            src={service.image}
            alt={service.title}
            className="w-full sm:w-1/2 rounded-lg"
          />

          <div className="sm:w-1/2 lg:py-[1rem] lg:pr-[2rem]">
            <h3 className="font-medium text-red-700 lg:text-[18px]">
              {service.title}
            </h3>

            <h1 className="pt-[0.75rem] text-2xl font-medium text-black lg:text-[42px]">
              {service.title}
            </h1>

            <p className="py-[1.5rem] text-blue-950 lg:text-[18px]">
              {service.description}
            </p>

            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
              {service.listItems.map(item => (
                <li key={item} className="flex items-center gap-x-2 text-red-700">
                  <span>
                    <Image src={CheckMark} alt="check mark"/>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link legacyBehavior href={service.link}>
              <button className="flex items-center gap-x-2 pt-[1.5rem] font-medium text-blue-500 lg:text-[18px]">
                Learn More
                <span>
                  <Image src={BlueButton} alt="Blue Button"/>
                </span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}