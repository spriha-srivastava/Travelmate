import { FaHeart, FaStar } from 'react-icons/fa'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

type Tour = {
    id: number
    image: string
    title: string
    location: string
    time: string
    type: string
    rating: number
    reviews: string
    price: string
}

type Props = {
    tour: Tour
}

const TourCard = ({ tour }: Props) => {
    return (
        <div className='bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300'>
            {/* Image Section */}
            <div className='relative h-[250px] w-full overflow-hidden'>
                <Image src={tour.image} alt={tour.title} width={500} height={500} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' />

                {/* favorite icon */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center">
                    <FaHeart className="w-3 h-3 text-red-500" />
                </div>
                {/* type badge */}
                <div className='absolute bottom-4 left-4 z-10 bg-blue-600 text-white text-xs px-3 py-1 rounded-md font-medium'>
                    {tour.type}
                </div>
            </div>

            {/* Content Section */}
            <div className='p-4'>
                <div className='flex items-center space-x-2'>
                    <FaStar className='text-yellow-500 w-4 h-4' />
                    <span className='font-bold text-gray-800'>{tour.rating}</span>
                    <span className='text-gray-500 text-sm'>({tour.reviews} Reviews)</span>
                </div>

                <h1 className='text-lg font-bold text-gray-900 mt-2 hover:text-blue-600 cursor-pointer transition-colors duration-200'>
                    {tour.title}
                </h1>

                <p className='text-gray-600 text-sm mt-1 flex items-center'>
                    {tour.location}
                </p>

                <div className='flex items-center text-gray-500 text-sm mt-3 space-x-4'>
                    <div className='flex items-center space-x-1'>
                        <span className='font-medium'>Duration:</span>
                        <span>{tour.time}</span>
                    </div>
                </div>


                <div className='mt-4 flex items-center justify-between border-t pt-4'>
                    <div>
                        <p className='text-sm text-gray-500'>From</p>
                        <p className='text-xl font-bold text-blue-600'>${tour.price}</p>
                    </div>
                    <Link href={`/tours/${tour.id}`} className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors'>
                        Details
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default TourCard
