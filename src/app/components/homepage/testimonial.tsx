"use client";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

interface ITesimony {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  review: string;
  ratings: number; 
};

export default function Testimony() {
  const [review, setReview] = useState<ITesimony[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6&inc=name,picture,email')
      .then((response) => response.json())
      .then((data) => setReview(data.results.map((user: ITesimony, index: number) => {
        const reviews = [
            `"Outstanding service and quality work! Must try."`, 
            `"Transformed my home beautifully, I really like it."`,
            `"Creative designs and attentive to details. Great work."`,
            `"Reliable, trustworthy, and highly recommended!"`,
            `"Very professional and timely execution."`,
            `"Great value for exceptional quality, nice one!"`,
        ];
        const ratings = [
            4,
            5,
            3,
            5,
            4,
            5,
        ];

        return {
          ...user,
          review: reviews[index],
          ratings: ratings[index]
        };
      })));
  }, []);

  return (
    <div className="font-poppins max-w-6l mx-4 mt-4 mb-4 space-y-4 py-4 px-2 text-center
                    gap-x-6 bg-gray-100 shadow-md rounded-lg">

        <h2 className="text-2xl font-semibold text-black">
            Hear What Our Clients Say
        </h2>

        <p className="text-gray-800 text-lg">
            You Are Next!
        </p>

        <div>
            <Swiper
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
                slidesPerView={1.3}
                spaceBetween={15}
                centeredSlides={true}
                breakpoints={{
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                    centeredSlides: false,
                  },
                }}
            >
                {review.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-gray-50 drop-shadow-sm flex flex-col items-center py-4 px-2 space-y-4 cursor-pointer gap-x-6 shadow-md rounded-lg m-4 p-4">
                            <Image
                                src={review.picture.large}
                                alt={`${review.name.first} ${review.name.last}`}
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                            <p>
                                {review.review}
                            </p>
                            <h2 className="font-semibold">
                                {review.name.first} {review.name.last}
                            </h2>
                            <div className="flex">
                                {Array.from({ length: 5 }, (_, index) => (

                                    <svg key={index}
                                         className={`${index <= review.ratings-1 ? `fill-orange-400` : `fill-gray-200`} h-4 w-4`}
                                         viewBox="0 0 15 15"
                                         id="star"
                                         xmlns="https://www.w3.org/2000/svg"
                                    >
                                         <path 
                                            id="path4749-2-8-2"
                                            d="M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5&#xA;&#x9;l5,3.5l-2-6l4-3.5h-5L7.5,0z"
                                         />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  );
}