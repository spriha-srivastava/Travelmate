import { NavLinks } from '@/constant/constant'
import React from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type props ={
  showNav: boolean;
  closeNav:() => void;
};

const MobileNav = ({closeNav, showNav}:props) => {

  const openNav = showNav? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/*overlay*/}
      <div 
        className={`fixed inset-0 bg-black transform transition-all duration-500 z-[1002] ${showNav ? 'opacity-70' : 'opacity-0 pointer-events-none'}`}
        onClick={closeNav}
      ></div>

      {/*navlinks*/}
      <div className={`text-white ${openNav} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
        {NavLinks.map((link)=>{
          return (
            <Link href={link.url} key={link.id} onClick={closeNav}>
              <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] border-white sm:text-[30px] hover:text-yellow-300 transition-colors duration-300'>{link.label}</p>
            </Link>
          )
        })}

        {/* Book Now button in mobile menu */}
        <div className='ml-12 mt-6'>
          <button className='px-8 py-3 text-rose-900 text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg font-semibold'>
            Book Now
          </button>
        </div>

      {/*close button*/}
      <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer hover:text-yellow-300 transition-colors duration-300'/>
      </div>
    </div>

  )
}

export default MobileNav
