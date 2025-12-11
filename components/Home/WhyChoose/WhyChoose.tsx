import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* Section Heading */}
      <SectionHeading heading="Why Choose" />

      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        <WhyChooseCard image="/images/a2.jpg" title="Best Price Guarantee" />
        <WhyChooseCard image="/images/a2.jpg" title="Easy & Quick Booking" />
        <WhyChooseCard image="/images/a2.jpg" title="Customer Care 24/7" />
      </div>
    </div>
  )
}

export default WhyChoose
