import SearchBox from '@/components/Helper/SearchBox';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='relative w-full h-[120vh] sm:h-[100vh]'>
            <div className='absolute top-0 left-0 w-full h-full bg-grey-800 opacity-70'></div>
            <video
                src="/images/aa1.mp4"
                autoPlay
                loop
                muted
                preload="metadata"
                className='w-full h-full object-cover'
            />
            <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="flex items-center justify-center flex-col w-full h-full">

                    <div>
                        <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-rose-600 font-bold uppercase">
                            Enjoy Our Nature
                        </h1>
                        <p className='text-blue-900 font-normal [word-spacing:5px] text-center'>Get bestest price on 2,000,000+ properties, worldwide</p>
                    </div>
                    {/* searchbox*/}
                    <SearchBox />
                    <Link href="#" className='rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 
                    relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 
                    hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300'>
                        <span
                            className="absolute right-0 w-8 h-8 -mt-12 transition-all duration-1000 ease transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-40"
                        ></span>

                        <span className="relative font-bold">
                            Search
                        </span>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero