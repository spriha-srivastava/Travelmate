import React from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'bg-rose-500',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['hello@travelmate.com', 'support@travelmate.com'],
      color: 'bg-blue-500',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['123 Travel Street', 'New York, NY 10001'],
      color: 'bg-amber-500',
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9AM - 6PM', 'Sat - Sun: 10AM - 4PM'],
      color: 'bg-emerald-500',
    },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[45vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70 z-10" />
        <Image
          src="/images/a4.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in <span className="text-rose-400">Touch</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Have questions or ready to plan your next adventure? We&apos;d love to hear from you!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 bg-white">
        <div className="w-[90%] xl:w-[80%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-30">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="py-20 bg-gray-50">
        <div className="w-[90%] xl:w-[80%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Send Message</span>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mt-2">
                  Let&apos;s Start a Conversation
                </h2>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 outline-none transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 outline-none transition-all duration-300 bg-white">
                    <option>General Inquiry</option>
                    <option>Booking Question</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your travel plans or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-rose-500/30"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              {/* Map Placeholder */}
              <div className="bg-blue-950 rounded-2xl h-[350px] flex items-center justify-center mb-8 overflow-hidden relative">
                <div className="absolute inset-0 opacity-30">
                  <Image
                    src="/images/a6.jpg"
                    alt="Map"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 text-center text-white p-8">
                  <FaMapMarkerAlt className="w-12 h-12 mx-auto mb-4 text-rose-400" />
                  <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                  <p className="text-gray-300">123 Travel Street, New York, NY 10001</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-blue-950 mb-4">Connect With Us</h3>
                <p className="text-gray-600 mb-6">
                  Follow us on social media for travel inspiration, tips, and exclusive offers.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-rose-500 hover:text-white transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="w-[90%] xl:w-[80%] mx-auto">
          <div className="text-center mb-12">
            <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'How do I book a trip with Travelmate?',
                answer: 'You can book directly through our website by selecting your desired destination and package. Our team will then contact you to finalize the details.',
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'We offer free cancellation up to 48 hours before your scheduled trip. For cancellations within 48 hours, a small fee may apply.',
              },
              {
                question: 'Do you offer group discounts?',
                answer: 'Yes! We offer special rates for groups of 6 or more travelers. Contact us for a custom quote.',
              },
              {
                question: 'Is travel insurance included?',
                answer: 'Basic travel insurance is included with all packages. We also offer comprehensive coverage options for an additional fee.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <h4 className="font-bold text-blue-950 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
