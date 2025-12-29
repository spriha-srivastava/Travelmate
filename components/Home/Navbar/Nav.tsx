import { NavLinks } from '@/constant/constant'
import React, { useEffect, useState } from 'react'
import { TbAirBalloon } from 'react-icons/tb'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

type props = {
  openNav: () => void
}

const Nav = ({ openNav }: props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [])

  return (
    <div
      className={`${navBg ? 'bg-blue-950 shadow-md' : ''} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

        {/* Logo */}
        <Link href="/" className='flex items-center space-x-2 sm:space-x-3'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0'>
            <TbAirBalloon className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
          </div>
          <h1 className='text-lg sm:text-xl md:text-2xl text-white uppercase font-bold whitespace-nowrap'>
            Travelmate
          </h1>
        </Link>

        {/* NavLinks - hidden on mobile */}
        <div className='hidden lg:flex items-center space-x-10'>
          {NavLinks.map(link => (
            <Link href={link.url} key={link.id}>
              <p
                className="relative text-white text-base font-medium w-fit block
                           after:block after:content-[''] after:absolute after:h-[3px]
                           after:bg-yellow-300 after:w-full after:scale-x-0
                           after:origin-right after:transition-transform after:duration-300
                           hover:after:scale-x-100"
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Right side - Book Now button and burger menu */}
        <div className='flex items-center space-x-3 sm:space-x-4'>
          {/* Book Now - hidden on mobile, shown on larger screens */}
          <button className='hidden sm:block md:px-12 md:py-2.5 px-6 py-2 text-black text-sm md:text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg font-medium'>
            Book Now
          </button>
          {/* Burger menu - visible only on mobile */}
          <HiBars3BottomRight onClick={openNav} className='w-7 h-7 sm:w-8 sm:h-8 cursor-pointer text-white lg:hidden' />
        </div>

      </div>
    </div>
  )
}

export default Nav
