import React from 'react';
import Image from 'next/image';
import {
  FaShieldAlt,
  FaHandHoldingHeart,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';

const NDISScheme = () => {
  const benefits = [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: 'Government Funded',
      description: 'Fully funded by the Australian Government since 2013',
    },
    {
      icon: <FaHandHoldingHeart className="w-6 h-6" />,
      title: 'Personalized Support',
      description: 'Tailored support plans for individual needs',
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'Community Focused',
      description: 'Promoting inclusion and community participation',
    },
  ];

  const keyFeatures = [
    'Funds costs associated with disability',
    'Administered by NDIA',
    'Supports people with disability',
    'Promotes independence and choice',
    'Enables community participation',
    'Provides lifelong support',
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-soft">
              <FaCheckCircle className="w-4 h-4" />
              Official NDIS Partner
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-bold text-neutral-800 mb-6 leading-tight">
              Supporting the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                National Disability Insurance Scheme
              </span>
            </h2>

            <p className="font-body text-xl text-neutral-600 leading-relaxed max-w-4xl mx-auto">
              We proudly support the NDIS, a revolutionary Australian Government
              scheme that empowers individuals with disabilities to live their
              best lives through personalized support and funding.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - NDIS Logo and Info */}
            <div className="space-y-8">
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-large border border-white/50">
                  <div className="text-center mb-6">
                    <Image
                      src="/assets/ndis-support.png"
                      alt="NDIS Logo"
                      width={200}
                      height={120}
                      className="mx-auto h-20 w-auto"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-neutral-800 text-center">
                      Government Funded Support
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-center">
                      The NDIS is a scheme of the Australian Government
                      legislated in 2013 that funds costs associated with
                      disability and is administered by the National Disability
                      Insurance Agency (NDIA).
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Since 2013
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 hover:shadow-medium border border-white/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{benefit.icon}</div>
                    </div>
                    <h4 className="font-semibold text-neutral-800 mb-2 text-sm">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Features and CTA */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-large border border-white/50">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                  How NDIS Supports You
                </h3>

                <div className="space-y-4">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mt-0.5">
                        <FaCheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-neutral-700 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-primary-100 mb-6 leading-relaxed">
                  Learn more about how NDIS can support you and your family
                </p>
                <a
                  href="https://beyondservices.com.au/i-support-ndis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-primary-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                >
                  <span>Learn More About NDIS</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-3xl p-8 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                NDIS Fully Supports People with Disability
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                We're committed to helping you navigate the NDIS system and
                access the support you need to live your best life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NDISScheme;
