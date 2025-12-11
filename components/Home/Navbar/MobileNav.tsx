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
      <div className={`fixed inset-0 bg-black transform transition-all duration-500 z-[1002] ${showNav ? 'opacity-70' : 'opacity-0 pointer-events-none'}`}></div>

      {/*navlinks*/}
      <div className={`text-white ${openNav} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
        {NavLinks.map((link)=>{
          return (
            <Link href={link.url} key={link.id}>
              <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] border-white sm:text-[30px]'>{link.label} </p>
            </Link>
          )
        })}

      {/*close button*/}
      <CgClose  onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer'/>
      </div>
    </div>

  )
}

export default MobileNav