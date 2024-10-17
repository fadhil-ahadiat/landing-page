"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar/navbar';
import Person from "@/app/public/assets/2.jpg";

interface ITeams {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
};

export default function TeamAndTestimonials() {
  const [users, setUsers] = useState<ITeams[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=4')
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="font-poppins bg-gray-100 text-black">
      <Navbar />
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-12">
            Meet Our Team Members
        </h1>
        <div className="max-w-5xl mx-auto gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg m-4">
              <img className="w-24 h-24 rounded-full mx-auto" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
              <h2 className="text-center mt-4 text-xl font-bold">{user.name.first} {user.name.last}</h2>
              <p className="text-center">{user.email}</p>
            </div>
          ))}
        </div>
        <h5 className="text-4xl font-bold mb-12 mt-12">What is everyone saying?</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-8 rounded-xl shadow-lg">
            <Image src={Person} alt="person" className="h-20 mx-auto"/>
            <h4 className="uppercase text-xl font-bold py-2">Jill</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              The Cooking Pot is great for any type of cooking. Not oversized, but you can still make lots of soup and pasta without worry!
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-xl shadow-lg">
            <Image src={Person} alt="person" className="h-20 mx-auto"/>
            <h4 className="uppercase text-xl font-bold py-2">Morgan</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              My friend recently got this juicer for me as a gift and I love it so much! It actually works really well and it's super cute.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-xl shadow-lg">
            <Image src={Person} alt="person" className="h-20 mx-auto"/>
            <h4 className="uppercase text-xl font-bold py-2">Sam</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              I love the design of this dish set. It doesn't take up a lot of storage room, which is great when you don't have much storage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}