"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/view/components/navbar';

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

export default function Team() {
  const [users, setUsers] = useState<ITeams[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=4')
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div>
      <Navbar />;

      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          
          {users.map((user, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img className="w-24 h-24 rounded-full mx-auto" src={user.picture.large} alt={user.name.first} />
              <h2 className="text-center mt-4 text-xl font-bold">{user.name.first} {user.name.last}</h2>
              <p className="text-center">{user.email}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};