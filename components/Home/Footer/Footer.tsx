import React from 'react';
import Link from 'next/link';
import { TbAirBalloon } from 'react-icons/tb';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Destination', href: '/destination' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const supportLinks = [
    { label: 'FAQ', href: '/contact' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
    { label: 'Support Center', href: '/contact' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-blue-950">
      {/* Main Footer */}
      <div className="w-[90%] xl:w-[80%] mx-auto pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center">
                <TbAirBalloon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Travelmate</h2>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted companion for extraordinary travel experiences. Discover the world with us and create unforgettable memories.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-rose-500 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Travel Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-gray-400">hello@travelmate.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-[90%] xl:w-[80%] mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Travelmate. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
