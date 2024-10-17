"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/app/public/assets/logo.jpg';

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  }

  return (
    <div>
      <nav className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link href="/" legacyBehavior>
                  <a>
                    <Image
                      src={logo}
                      alt='logo'
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link href="/" legacyBehavior>
                  <a className='px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-100'>
                    Home
                  </a>
                </Link>
                <Link href="/about-us" legacyBehavior>
                  <a className='px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-100'>
                    About Us
                  </a>
                </Link>
                <Link href="/our-services" legacyBehavior>
                  <a className='px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-100'>
                    Our Services
                  </a>
                </Link>
                <Link href="/teams" legacyBehavior>
                  <a className='px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-100'>
                    Teams
                  </a>
                </Link>
              </div>
            </div>       
            <div className='md:hidden flex items-center'>
              <button onClick={toggleNavbar} className='inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black'>
                {isClick ? (
                  <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                ) : (
                  <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link href="/" legacyBehavior>
                <a className='block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100'>
                  Home
                </a>
              </Link>
              <Link href="/about-us" legacyBehavior>
                <a className='block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100'>
                  About Us
                </a>
              </Link>
              <Link href="/our-services" legacyBehavior>
                <a className='block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100'>
                  Our Services
                </a>
              </Link>
              <Link href="/teams" legacyBehavior>
                <a className='block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100'>
                  Teams
                </a>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}