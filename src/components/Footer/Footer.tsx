import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaShieldAlt,
  FaHeart,
  FaUsers,
} from 'react-icons/fa';

const getYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const services = [
    {
      name: 'Supported Independent Living',
      href: '/services/supported-independent-living',
    },
    {
      name: 'Short Term Accommodation',
      href: '/services/short-term-accommodation',
    },
    {
      name: 'NDIS Support Coordination',
      href: '/services/support-coordination',
    },
    { name: 'Individual Support', href: '/services/individual-support' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-10 w-72 h-72 bg-primary-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-secondary-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 inline-block">
                  <Image
                    width={180}
                    height={60}
                    src="/assets/logo-removebg.png"
                    alt="Zest Life Disability"
                    sizes="(max-width: 430px) 50vw, 430px"
                    className="h-12 w-auto filter brightness-0 invert"
                  />
                </div>
              </Link>

              <p className="text-neutral-300 leading-relaxed mb-6">
                Empowering lives beyond barriers. We provide compassionate,
                personalized support to help individuals with disabilities live
                their best lives.
              </p>

              {/* Trust Badges */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-primary-500/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <FaShieldAlt className="w-4 h-4 text-primary-400" />
                  <span className="text-sm font-medium text-primary-300">
                    NDIS Registered
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-accent-500/20 backdrop-blur-sm px-3 py-2 rounded-full">
                  <FaHeart className="w-4 h-4 text-accent-400" />
                  <span className="text-sm font-medium text-accent-300">
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="group flex items-center gap-2 text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      23 Norman Dunlop Crescent
                      <br />
                      Minto, NSW 2566
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <FaPhone className="w-4 h-4 text-secondary-400" />
                  </div>
                  <div>
                    <p className="text-neutral-300 text-sm">
                      0452 150 350
                      <br />
                      0482 026 019
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 text-accent-400" />
                  </div>
                  <div>
                    <Link
                      href="mailto:zestlifedisability@gmail.com"
                      className="text-neutral-300 hover:text-accent-400 transition-colors duration-300 text-sm"
                    >
                      zestlifedisability@gmail.com
                    </Link>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <Link href="/contact-us">
                  <button className="group bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2">
                    <span>Get Started</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <span>
                © {getYear()} Zest Life Disability. All Rights Reserved.
              </span>
            </div>

            <div className="flex items-center gap-2 text-neutral-400">
              <span>Made with</span>
              <FaHeart className="w-3 h-3 text-red-400" />
              <span>for our community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
