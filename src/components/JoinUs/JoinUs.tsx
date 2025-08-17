import React from 'react';
import Link from 'next/link';
import {
  FaArrowRight,
  FaHeart,
  FaUsers,
  FaHandshake,
  FaStar,
  FaCheckCircle,
} from 'react-icons/fa';

const JoinUsSection = () => {
  const valuePropositions = [
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: 'Compassionate Care',
      description: 'Personalized support with empathy and understanding',
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'Community Connection',
      description: 'Build meaningful relationships and friendships',
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: 'Professional Support',
      description: 'Expert guidance from NDIS registered providers',
    },
  ];

  const whyChooseUs = [
    'NDIS Registered Provider',
    '24/7 Support Available',
    'Personalized Care Plans',
    'Experienced Team',
    'Local Community Focus',
    'Flexible Service Options',
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-secondary-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('./assets/bg.jpg')`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <FaStar className="w-4 h-4 text-accent-400" />
              Get Started Today
            </div>

            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-secondary-300">
                Begin Your Journey?
              </span>
            </h2>

            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              Take the first step towards a brighter future. Our dedicated team
              is here to support you on your path to independence and
              fulfillment.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Value Propositions */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Zest Life Disability?
                </h3>

                <div className="space-y-4">
                  {valuePropositions.map((proposition, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-xl flex items-center justify-center">
                        <div className="text-white">{proposition.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">
                          {proposition.title}
                        </h4>
                        <p className="text-white/80 leading-relaxed">
                          {proposition.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  What We Offer
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {whyChooseUs.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="w-4 h-4 text-accent-400 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="space-y-8">
              {/* Main CTA Section */}
              <div className="bg-gradient-to-r from-accent-500 to-secondary-500 rounded-3xl p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Get Connected Today
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Ready to start your journey? Contact us today to discuss how
                  we can support you and your family with personalized care and
                  assistance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact-us">
                    <button className="group bg-white text-primary-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3">
                      <span>Contact Us Now</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="group bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white/20 border border-white/20 flex items-center gap-3">
                      <span>View Services</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Quick Contact
                </h4>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span>Phone: 0452 150 350</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                    <span>Email: zestlifedisability@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>Location: Minto, NSW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Your Journey Starts Here
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Every person deserves the opportunity to live their best life.
                Let us help you achieve your goals and dreams.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span>NDIS Registered Provider</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Personalized Care Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
