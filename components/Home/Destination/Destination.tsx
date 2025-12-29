import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
      {/* Section heading*/}
      <SectionHeading
        heading='Exploring Popular Destination'
        paragraph='Discover the most loved travel spots around the globe, handpicked for your next adventure.'
      />
      {/*Section content*/}
      <div className='mx-14 w-[80%] mx-auto'>
        {/* slider*/}
        <DestinationSlider />
      </div>
    </div>
  )
}

export default Destination