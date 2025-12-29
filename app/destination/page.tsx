import React from 'react';
import Image from 'next/image';
import { FaStar, FaMapMarkerAlt, FaClock, FaSearch } from 'react-icons/fa';
import { destinationData, toursData } from '@/data/data';

const DestinationPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70 z-10" />
        <Image
          src="/images/a3.jpg"
          alt="Destinations"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore <span className="text-rose-400">Destinations</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Discover amazing places around the world and plan your next adventure
            </p>
            {/* Search Bar */}
            <div className="max-w-xl mx-auto bg-white rounded-full p-2 flex items-center shadow-xl">
              <FaSearch className="w-5 h-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="flex-1 px-4 py-2 outline-none text-gray-700"
              />
              <button className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b">
        <div className="w-[80%] mx-auto py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'].map((region) => (
              <button
                key={region}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${region === 'All'
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-500'
                  }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="py-20 bg-gray-50">
        <div className="w-[80%] mx-auto">
          <div className="text-center mb-12">
            <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Popular Places</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
              Top Destinations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinationData.map((destination) => (
              <div
                key={destination.id}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.country}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{destination.country}</h3>
                    <p className="text-sm text-gray-200">{destination.travelers} Travelers</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Tours Section */}
      <div className="py-20 bg-white">
        <div className="w-[80%] mx-auto">
          <div className="text-center mb-12">
            <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Experiences</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
              Featured Tours & Activities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toursData.slice(0, 6).map((tour) => (
              <div
                key={tour.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.type.split(' ')[0]}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-rose-600 transition-colors duration-300 line-clamp-2">
                    {tour.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-rose-500" />
                      {tour.location}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-rose-500" />
                      {tour.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-blue-800 text-white px-2 py-1 rounded text-sm font-bold">
                        <FaStar className="w-3 h-3" />
                        {tour.rating}
                      </div>
                      <span className="text-sm text-gray-500">({tour.reviews} reviews)</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">From</span>
                      <p className="text-lg font-bold text-rose-600">${tour.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-rose-600 to-rose-700">
        <div className="w-[80%] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can&apos;t Find Your Dream Destination?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let our travel experts help you plan the perfect trip tailored to your preferences.
          </p>
          <button className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;