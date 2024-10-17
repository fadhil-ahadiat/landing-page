import service1 from "../public/assets/service1.png"
import service2 from "../public/assets/service2.png"
import service3 from "../public/assets/service3.png"
import Image from "next/image"
import CheckMark from "../public/assets/check.svg"
import BlueButton from "../public/assets/blue-button.svg"
import Link from "next/link"

const services = [
  {
    id: 1,
    image: service1,
    title: "Construction and Architecture",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    listItems: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt"
    ],
    link: "/our-services",
    reverse: false
  },
  {
    id: 2,
    image: service2,
    title: "Interior Design",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    listItems: [
      "Duis aute irure dolor in reprehenderit",
      "In voluptate velit esse",
      "Cillum dolore eu fugiat nulla pariatur"
    ],
    link: "/our-services",
    reverse: true
  },
  {
    id: 3,
    image: service3,
    title: "Urban Planning",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    listItems: [
      "Excepteur sint occaecat cupidatat",
      "Sunt in culpa qui officia",
      "Deserunt mollit anim id est laborum"
    ],
    link: "/our-services",
    reverse: false
  }
];

export default function Features() {
  return (
    <div className="flex flex-col w-full mx-auto bg-gray-100">
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