import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import { toursData } from '@/data/data'
import TourCard from './TourCard'

const Tours = () => {
    return (
        <div className='pt-20 pb-20 bg-gray-50'>
            {/* Section Heading */}
            <SectionHeading heading='Explore Top Tours' paragraph='Discover the best travel experiences, handpicked for you. Unforgettable journeys await.' />

            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>
                {toursData.map((data) => {
                    return (
                        <div key={data.id}>
                            <TourCard tour={data} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tours
