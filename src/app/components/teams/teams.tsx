"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar/navbar';

interface ITeams {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  title: string;
  description: string; 
};

export default function TeamsView() {
  const [users, setUsers] = useState<ITeams[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=4&inc=name,picture,email')
      .then((response) => response.json())
      .then((data) => setUsers(data.results.map((user: ITeams, index: number) => {
        const titles = ["Software Engineer", "Project Manager", "UI/UX Designer", "Data Analyst"];
        const descriptions = [
          "Bertanggung jawab atas pengembangan dan pemeliharaan website.",
          "Mengelola timeline dan sumber daya proyek.",
          "Merancang antarmuka pengguna yang efektif dan menarik.",
          "Menganalisis data untuk keputusan bisnis yang lebih baik."
        ];

        return {
          ...user,
          title: titles[index],
          description: descriptions[index]
        };
      })));
  }, []);

  return (
    <div>
        
      <div className="container mx-auto py-12 font-poppins">
        
        <h1 className="text-3xl font-bold text-center">
          Meet Our Team
        </h1>
         
        <div className="grid grid-cols-1 mx-5
                        lg:grid-cols-4 gap-6 mt-8 group">

          {users.map((user, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg cursor-pointer
                                        group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-200">
              <img className="w-24 h-24 rounded-full mx-auto" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
              <h2 className="text-center mt-4 text-xl font-bold">{user.name.first} {user.name.last}</h2>
              <p className="text-center text-sm">{user.title}</p>
              <p className="text-center mt-1">{user.description}</p>
              <p className="text-center mt-2">{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}