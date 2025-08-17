import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WebsiteSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
              Providing Support Where It's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Needed Most
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                      Compassionate Care
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      At Zest Life, our mission is to uplift and empower
                      individuals to lead fulfilling lives. We're dedicated to
                      offering personalized support that respects each person's
                      unique journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                      Expert Team
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      With years of expertise and a commitment to excellence,
                      our team is equipped to make a tangible impact in the
                      lives of those we serve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                      Community Focus
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      We've cultivated a robust network of resources and
                      partnerships to ensure that our participants receive the
                      highest quality of care and support.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/contact-us/">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:shadow-large hover:scale-105">
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/assets/specialist-behaviour.png"
                  alt="Zest Life participants"
                  className="rounded-2xl w-full h-auto shadow-large"
                  width={500}
                  height={375}
                />
              </div>

              {/* Floating image */}
              <div className="absolute -top-8 -right-8 w-32 h-32 z-20">
                <Image
                  src="/assets/high-intensity.png"
                  alt="Zest Life participants smiling at sunset"
                  className="rounded-full shadow-medium border-4 border-white"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="128px"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteSection;
