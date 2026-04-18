import React from 'react';
import Image from 'next/image';
import { TbAirBalloon, TbMap2, TbUsers, TbAward, TbHeart, TbClock, TbGlobe } from 'react-icons/tb';
import { FaGlobe, FaStar } from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    { icon: TbGlobe, value: '50+', label: 'Destinations' },
    { icon: TbUsers, value: '100K+', label: 'Happy Travelers' },
    { icon: TbAward, value: '15+', label: 'Years Experience' },
    { icon: FaStar, value: '4.9', label: 'Average Rating' },
  ];

  const features = [
    {
      icon: TbMap2,
      title: 'Expert Guides',
      description: 'Our local experts know every hidden gem and secret spot to make your journey unforgettable.'
    },
    {
      icon: TbHeart,
      title: 'Personalized Trips',
      description: 'Every adventure is tailored to your preferences, ensuring a unique experience every time.'
    },
    {
      icon: TbClock,
      title: '24/7 Support',
      description: 'Our dedicated team is always available to assist you throughout your travel journey.'
    },
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'Founder & CEO', image: '/images/p1.jpg' },
    { name: 'Michael Chen', role: 'Head of Operations', image: '/images/p3.jpg' },
    { name: 'Emma Williams', role: 'Travel Director', image: '/images/p2.jpg' },
    { name: 'David Kumar', role: 'Customer Relations', image: '/images/p5.jpg' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70 z-10" />
        <Image
          src="/images/a5.jpg"
          alt="About Travelmate"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="flex items-center justify-center mb-6">
              {/* <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center">
                <TbAirBalloon className="w-10 h-10 text-white" />
              </div> */}

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                About <span className="text-rose-400">Travelmate</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Your trusted companion for extraordinary travel experiences around the world
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-950 py-12">
        <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-white">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <Image
              src="/images/a6.jpg"
              alt="Our Story"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
          </div>
          <div>
            <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3 mb-6">
              Making Travel Dreams Come True Since 2009
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Travelmate was born from a simple idea: everyone deserves to experience the magic of travel.
              What started as a small team of passionate travelers has grown into a global community
              dedicated to creating unforgettable journeys.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe that travel is more than just visiting new places – it&apos;s about connecting
              with different cultures, creating lasting memories, and discovering new perspectives.
              Our mission is to make these experiences accessible to everyone.
            </p>
            <button className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/30">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="w-[80%] mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-rose-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="w-[80%] mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
              Meet The Experts
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold text-blue-950 group-hover:text-rose-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="w-[80%] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who have discovered their dream destinations with Travelmate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/30">
              Explore Destinations
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-950 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
