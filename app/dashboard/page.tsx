import React from 'react';
import Image from 'next/image';
import { FaHeart, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaStar, FaCreditCard, FaCog, FaSignOutAlt, FaBell, FaEdit } from 'react-icons/fa';
import { TbAirBalloon } from 'react-icons/tb';

const DashboardPage = () => {
  const savedDestinations = [
    { id: 1, name: 'Bali, Indonesia', image: '/images/a1.jpg', rating: 4.9 },
    { id: 2, name: 'Paris, France', image: '/images/a2.jpg', rating: 4.8 },
    { id: 3, name: 'Tokyo, Japan', image: '/images/a3.jpg', rating: 4.9 },
  ];

  const bookingHistory = [
    {
      id: 1,
      title: 'Desert Safari with Camel Ride',
      location: 'Dubai, UAE',
      date: 'Jan 15, 2025',
      status: 'Upcoming',
      amount: '$148',
      image: '/images/a4.jpg',
    },
    {
      id: 2,
      title: 'Historic Wonders Tour',
      location: 'Wiltshire, England',
      date: 'Dec 20, 2024',
      status: 'Completed',
      amount: '$65',
      image: '/images/a5.jpg',
    },
    {
      id: 3,
      title: 'Sunset Cruise Experience',
      location: 'Phuket, Thailand',
      date: 'Nov 10, 2024',
      status: 'Completed',
      amount: '$108',
      image: '/images/a6.jpg',
    },
  ];

  const quickStats = [
    { label: 'Total Trips', value: '12', color: 'bg-rose-500' },
    { label: 'Countries Visited', value: '8', color: 'bg-blue-500' },
    { label: 'Saved Places', value: '24', color: 'bg-amber-500' },
    { label: 'Reviews Given', value: '15', color: 'bg-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Banner */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70 z-10" />
        <Image
          src="/images/a3.jpg"
          alt="Dashboard"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-rose-400">Dashboard</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Welcome back! Manage your trips and explore new adventures.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[90%] xl:w-[80%] mx-auto -mt-16 relative z-30 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 flex items-center justify-center">
                    <TbAirBalloon className="w-12 h-12 text-white" />
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-950 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300">
                    <FaEdit className="w-3 h-3" />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-blue-950">John Traveler</h2>
                <p className="text-gray-500 text-sm">john@travelmate.com</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    <FaStar className="w-3 h-3" />
                    Gold Member
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <nav className="space-y-2">
                {[
                  { icon: FaCalendarAlt, label: 'My Bookings', active: true },
                  { icon: FaHeart, label: 'Saved Places', active: false },
                  { icon: FaCreditCard, label: 'Payment Methods', active: false },
                  { icon: FaBell, label: 'Notifications', active: false },
                  { icon: FaCog, label: 'Settings', active: false },
                  { icon: FaSignOutAlt, label: 'Sign Out', active: false },
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${item.active
                      ? 'bg-rose-50 text-rose-500'
                      : 'text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="lg:col-span-3">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-5">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                    <span className="text-white text-xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Upcoming Bookings */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-blue-950">My Bookings</h3>
                <button className="text-rose-500 font-medium hover:text-rose-600 transition-colors duration-300">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {bookingHistory.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={booking.image}
                        alt={booking.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-950">{booking.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-rose-400" />
                          {booking.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-rose-400" />
                          {booking.date}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${booking.status === 'Upcoming'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-gray-200 text-gray-600'
                          }`}
                      >
                        {booking.status}
                      </span>
                      <p className="text-lg font-bold text-blue-950 mt-2">{booking.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Destinations */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-blue-950">Saved Destinations</h3>
                <button className="text-rose-500 font-medium hover:text-rose-600 transition-colors duration-300">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {savedDestinations.map((destination) => (
                  <div
                    key={destination.id}
                    className="group relative h-[180px] rounded-xl overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-rose-500 hover:bg-white transition-colors duration-300">
                        <FaHeart className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-white font-bold">{destination.name}</h4>
                      <div className="flex items-center gap-1 text-white/90 text-sm mt-1">
                        <FaStar className="text-amber-400 w-3 h-3" />
                        {destination.rating}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
