

import React from 'react'
import Image from 'next/image'

type Props = {
  image: string
  title: string
  description: string
}

const WhyChooseCard = ({ image, title, description }: Props) => {
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

      <p className="text-center text-xs font-medium text-gray-700 mt-2">
        {description}
      </p>
    </div>
  )
}

export default WhyChooseCard


