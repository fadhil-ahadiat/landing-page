import Link from "next/link";
import React from 'react';

export default function NavbarView() {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4x-f">
          <li><Link href="/"><p className="text-white">Home</p></Link></li>
          <li><Link href="/about-us"><p className="text-white">About Us</p></Link></li>
          <li><Link href="/services-and-products"><p className="text-white">Services</p></Link></li>
          <li><Link href="/teams"><p className="text-white">Teams</p></Link></li>
        </ul>
      </div>
    </nav>
  );
};