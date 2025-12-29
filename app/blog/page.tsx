import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaArrowRight, FaSearch } from 'react-icons/fa';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Hidden Gems in Southeast Asia You Must Visit',
      excerpt: 'Discover the most breathtaking yet lesser-known destinations in Southeast Asia that will make your trip unforgettable.',
      image: '/images/a1.jpg',
      category: 'Adventure',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Ultimate Guide to Budget Travel in Europe',
      excerpt: 'Learn how to explore Europe without breaking the bank. Tips, tricks, and insider secrets for budget travelers.',
      image: '/images/a2.jpg',
      category: 'Tips & Guides',
      author: 'Michael Chen',
      date: 'Dec 12, 2024',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Best Time to Visit Bali: A Complete Seasonal Guide',
      excerpt: 'Planning a trip to Bali? Find out the perfect time to visit based on weather, crowds, and local festivals.',
      image: '/images/a3.jpg',
      category: 'Destinations',
      author: 'Emma Williams',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'How to Pack Light for a Month-Long Adventure',
      excerpt: 'Master the art of minimalist packing with our comprehensive guide to traveling light without sacrificing comfort.',
      image: '/images/a4.jpg',
      category: 'Tips & Guides',
      author: 'David Kumar',
      date: 'Dec 8, 2024',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Safari Dreams: Complete Guide to African Wildlife Tours',
      excerpt: 'Everything you need to know about planning the ultimate African safari experience.',
      image: '/images/a5.jpg',
      category: 'Adventure',
      author: 'Sarah Johnson',
      date: 'Dec 5, 2024',
      readTime: '10 min read',
    },
    {
      id: 6,
      title: 'Street Food Paradise: Best Food Markets Around the World',
      excerpt: 'A culinary journey through the most vibrant and delicious street food markets across the globe.',
      image: '/images/a6.jpg',
      category: 'Food & Culture',
      author: 'Michael Chen',
      date: 'Dec 3, 2024',
      readTime: '6 min read',
    },
  ];

  const categories = ['All', 'Adventure', 'Destinations', 'Tips & Guides', 'Food & Culture', 'Photography'];

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[45vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70 z-10" />
        <Image
          src="/images/a2.jpg"
          alt="Travel Blog"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Travel <span className="text-rose-400">Blog</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Stories, tips, and inspiration for your next adventure
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gray-50">
        <div className="w-[90%] xl:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 mb-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                      category === 'All'
                        ? 'bg-rose-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-rose-100 hover:text-rose-500 shadow-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-rose-400" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaUser className="text-rose-400" />
                          {post.author}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-rose-500 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <button className="flex items-center gap-2 text-rose-500 font-semibold hover:gap-3 transition-all duration-300">
                          Read More <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12 gap-2">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                      page === 1
                        ? 'bg-rose-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-rose-100 shadow-sm'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h3 className="text-lg font-bold text-blue-950 mb-4">Search</h3>
                <div className="flex items-center bg-gray-100 rounded-lg p-2">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="flex-1 bg-transparent px-3 py-2 outline-none text-gray-700"
                  />
                  <button className="p-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors duration-300">
                    <FaSearch />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h3 className="text-lg font-bold text-blue-950 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.slice(1).map((category) => (
                    <li key={category}>
                      <button className="flex items-center justify-between w-full text-gray-700 hover:text-rose-500 transition-colors duration-300">
                        <span>{category}</span>
                        <FaArrowRight className="w-3 h-3" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h3 className="text-lg font-bold text-blue-950 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-4 group cursor-pointer">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-950 group-hover:text-rose-500 transition-colors duration-300 line-clamp-2 text-sm">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-3">Subscribe to Newsletter</h3>
                <p className="text-gray-300 text-sm mb-4">Get the latest travel tips and stories delivered to your inbox.</p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg mb-3 outline-none"
                />
                <button className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
