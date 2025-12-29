import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* Section Heading */}
      <SectionHeading
        heading="Why Choose"
        paragraph="We ensure you get the best experience with our top-notch services and guarantee."
      />

      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" description="Get the best deals at the lowest prices you can trust." />
        <WhyChooseCard image="/images/c2.svg" title="Easy & Quick Booking" description="Book your journey fast with an easy and smooth process." />
        <WhyChooseCard image="/images/c3.svg" title="Customer Care 24/7" description="Get 24/7 support for any issues or concerns." />
      </div>
    </div>
  )
}

export default WhyChoose
