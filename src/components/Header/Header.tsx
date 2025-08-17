'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaTimes,
  FaBars,
} from 'react-icons/fa';

interface ServicesSubMenuProps {
  showServicesSubMenu: boolean;
  isMobile?: boolean;
}

const ServicesSubMenu: React.FC<ServicesSubMenuProps> = ({
  showServicesSubMenu,
  isMobile = false,
}) => {
  const services = [
    {
      title: 'Supported Independent Living',
      description: 'Personalized support for independent living',
      icon: '🏠',
      href: '/services/supported-independent-living',
    },
    {
      title: 'Short Term Accommodation',
      description: 'Respite and accommodation services',
      icon: '🏨',
      href: '/services/short-term-accommodation',
    },
    {
      title: 'NDIS Support Coordination',
      description: 'Professional coordination services',
      icon: '🤝',
      href: '/services/support-coordination',
    },
    {
      title: 'Camps & Getaways',
      description: 'Recreational and social activities',
      icon: '🏕️',
      href: '/services/camps-getaways',
    },
    {
      title: 'Individual Support',
      description: 'One-on-one personalized care',
      icon: '👤',
      href: '/services/individual-support',
    },
    {
      title: 'Group Programs & Activities',
      description: 'Community engagement programs',
      icon: '👥',
      href: '/services/group-programs',
    },
  ];

  if (isMobile) {
    return (
      <div
        className={`mt-2 ml-4 space-y-2 transition-all duration-300 ${
          showServicesSubMenu ? 'block' : 'hidden'
        }`}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="block p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-200 group cursor-default"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{service.icon}</span>
              <div>
                <div className="font-medium text-gray-800 group-hover:text-primary-600 transition-colors duration-200">
                  {service.title}
                </div>
                <div className="text-sm text-gray-600">
                  {service.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`absolute top-full left-0 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl py-6 min-w-[800px] z-50 transition-all duration-300 border border-white/20 ${
        showServicesSubMenu
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible -translate-y-2'
      }`}
    >
      <div className="grid grid-cols-2 gap-4 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-all duration-200 border border-transparent hover:border-primary-100 cursor-default"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-200 text-sm leading-tight">
                  {service.title}
                </div>
                <div className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {service.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100 px-6">
        <Link
          href="/services"
          className="block text-center py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 transform hover:scale-105 text-sm"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    console.log('Mobile menu toggled:', !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowServicesSubMenu(false);
  };

  const toggleServicesSubMenu = () => {
    setShowServicesSubMenu(!showServicesSubMenu);
  };

  return (
    <>
      {/* Top bar with contact info */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <FaPhone className="w-3 h-3 text-accent-400" />
                <span>0452 150 350</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-3 h-3 text-accent-400" />
                <span>zestlifedisability@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-3 h-3 text-accent-400" />
                <span>23 Norman Dunlop Crescent, Minto</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                <span className="text-accent-300 font-medium">
                  NDIS Registered Provider
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20'
            : 'lg:top-8 top-0 bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div
                className={`relative p-2 rounded-lg transition-all duration-300 ${
                  isScrolled ? 'bg-white/10' : 'bg-black/20'
                } group-hover:bg-white/20`}
              >
                <Image
                  width={180}
                  height={60}
                  src="/assets/logo-removebg.png"
                  alt="Zest Life Disability"
                  sizes="(max-width: 430px) 50vw, 430px"
                  className="h-12 w-auto transition-all duration-300 drop-shadow-lg group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-accent font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-primary-600'
                    : 'text-white hover:text-accent-300 drop-shadow-lg'
                }`}
              >
                Home
              </Link>

              <div className="relative">
                <button
                  className={`font-accent font-medium flex items-center gap-1 transition-all duration-200 hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-800 hover:text-primary-600'
                      : 'text-white hover:text-accent-300 drop-shadow-lg'
                  }`}
                  onClick={toggleServicesSubMenu}
                  onMouseEnter={() => setShowServicesSubMenu(true)}
                  onMouseLeave={() => setShowServicesSubMenu(false)}
                >
                  Services
                  <FaChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      showServicesSubMenu ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  onMouseEnter={() => setShowServicesSubMenu(true)}
                  onMouseLeave={() => setShowServicesSubMenu(false)}
                >
                  <ServicesSubMenu showServicesSubMenu={showServicesSubMenu} />
                </div>
              </div>

              <Link
                href="/about-us"
                className={`font-accent font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-primary-600'
                    : 'text-white hover:text-accent-300 drop-shadow-lg'
                }`}
              >
                About Us
              </Link>

              <Link
                href="/contact-us"
                className={`font-accent font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-primary-600'
                    : 'text-white hover:text-accent-300 drop-shadow-lg'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact-us">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-heading font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 transform hover:scale-105 drop-shadow-lg">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes
                  className={`w-6 h-6 drop-shadow-lg ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                />
              ) : (
                <FaBars
                  className={`w-6 h-6 drop-shadow-lg ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[65]"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[70] ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '320px' }}
          >
            <div className="flex flex-col h-full min-h-screen">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-100">
                <div className="flex items-center gap-3">
                  <Image
                    width={120}
                    height={40}
                    src="/assets/logo-removebg.png"
                    alt="Zest Life Disability"
                    className="h-8 w-auto"
                    priority
                  />
                </div>
                <button
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaTimes className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6 min-h-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
                <nav className="space-y-2 px-6">
                  <Link
                    href="/"
                    className="flex items-center py-4 px-4  hover:text-primary-600 hover:bg-gray-100 rounded-xl transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-lg">Home</span>
                  </Link>

                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full py-4 px-4 hover:text-primary-600 hover:bg-gray-100 rounded-xl transition-all duration-200 font-medium"
                      onClick={toggleServicesSubMenu}
                    >
                      <span className="text-lg">Services</span>
                      <FaChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          showServicesSubMenu ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <ServicesSubMenu
                      showServicesSubMenu={showServicesSubMenu}
                      isMobile={true}
                    />
                  </div>

                  <Link
                    href="/about-us"
                    className="flex items-center py-4 px-4 hover:text-primary-600 hover:bg-gray-100 rounded-xl transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-lg">About Us</span>
                  </Link>

                  <Link
                    href="/contact-us"
                    className="flex items-center py-4 px-4 hover:text-primary-600 hover:bg-gray-100 rounded-xl transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-lg">Contact</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
