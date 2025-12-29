import React from 'react'
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChoose from './WhyChoose/WhyChoose';
import Review from './Reviews/Review';
import Tours from './Tours/Tours';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <Tours />
      <WhyChoose />
      <Review />

    </div>
  )
}

export default Home;