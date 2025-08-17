import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-40">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-secondary-800/80"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute -bottom-8 left-40 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main heading and logo side by side */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-10">
            {/* Main heading with animation */}
            <h1
              className="font-display text-5xl md:text-7xl font-bold text-white leading-tight animate-slide-up text-center lg:text-left"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="block">Empowering Lives</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-secondary-300">
                Beyond Barriers
              </span>
            </h1>

            {/* Logo - positioned beside heading */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <Image
                width={640}
                height={640}
                src="/assets/logo-removebg.png"
                alt="Zest Life Disability"
                sizes="(max-width: 430px) 70vw, 430px"
                className="h-32 md:h-40 w-auto drop-shadow-2xl filter brightness-110"
              />
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="font-body text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            At Zestlife Disability, we are spirited NDIS superheroes on a
            mission to sprinkle magic into everyday life. Our expert team
            transforms challenges into triumphs with personalized care and
            unwavering support.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Link href="/about-us">
              <button className="group relative px-8 py-4 bg-white text-primary-700 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-primary-50 hover:scale-105 shadow-soft">
                <span className="relative z-10">Discover Our Story</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>

            <Link href="/contact-us">
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-primary-700 hover:scale-105">
                Get Started Today
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
              <span className="text-sm font-medium">
                NDIS Registered Provider
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary-400 rounded-full"></div>
              <span className="text-sm font-medium">
                24/7 Support Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
              <span className="text-sm font-medium">
                Personalized Care Plans
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
