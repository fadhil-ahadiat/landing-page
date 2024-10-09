import Link from "next/link";
import React from 'react';

export default function NavbarView() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4x-f">
          <li><Link href="/"><h1 className="text-white">Home</h1></Link></li>
          <li><Link href="/about"><h3 className="text-white">About Us</h3></Link></li>
          <li><Link href="/services"><h3 className="text-white">Services</h3></Link></li>
          <li><Link href="/teams"><h3 className="text-white">Teams</h3></Link></li>
        </ul>
      </div>
    </nav>
  );
};