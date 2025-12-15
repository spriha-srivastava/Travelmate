'use client'
import React from 'react'

import {Swiper,SwiperSlide} from 'swiper/react';
import  'Swiper/css';
import "swiper/css/effect-cards";

import{EffectCards} from "swiper/modules"
import { effectInit } from 'swiper/effect-utils';
import { reviewData } from '@/data/data';


const ReviewSlider = () => {
  return (
    <div>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='md:w-[450px] md:h-[350px] w-[90%] h-[300px]' >
        {reviewData.map((data) =>{
          return(
            <SwiperSlide key={data.id} className='bg-white rounded-3xl block'>
               <div className='w-[80%] mx-auto mt-16'>
                <p className='text-xs sm:text-sm md:text-base font-semibold'>{data.review}</p>
               </div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  )
}

export default ReviewSlider