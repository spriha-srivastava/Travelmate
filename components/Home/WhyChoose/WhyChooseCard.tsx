

import React from 'react'
import Image from 'next/image'

type Props = {
  image: string
  title: string
}

const WhyChooseCard = ({ image, title }: Props) => {
  return (
    <div className="text-center">
      {/* image */}
      <Image
        src={image}
        width={70}
        height={70}
        alt="image"
        className="mx-auto"
      />

      {/* content */}
      <h1 className="text-gray-900 text-center mt-6 font-medium ">
        {title}
      </h1>

      <p className="text-center text-gray-600 mt-2">
        vghghvgjhkhvjhh
      </p>
    </div>
  )
}

export default WhyChooseCard
