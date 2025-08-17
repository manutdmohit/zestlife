import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';
import {
  FaHeart,
  FaUsers,
  FaHandshake,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaLightbulb,
  FaHandHoldingHeart,
} from 'react-icons/fa';

const AboutUs = () => {
  const values = [
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: 'Compassion',
      description: 'We approach every individual with genuine care and empathy',
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'Community',
      description: 'Building meaningful connections and fostering inclusion',
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Delivering the highest quality of care and support',
    },
  ];

  const teamHighlights = [
    'NDIS Registered Service Provider',
    'Experienced & Qualified Team',
    'Personalized Care Plans',
    '24/7 Support Available',
    'Local Community Focus',
    'Continuous Professional Development',
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
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
                <FaStar className="w-4 h-4" />
                About Zest Life Disability
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-bold text-neutral-800 mb-6 leading-tight">
                Empowering Lives{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Beyond Barriers
                </span>
              </h1>

              <p className="font-body text-xl text-neutral-600 leading-relaxed max-w-4xl mx-auto">
                We are a dedicated team of NDIS service providers committed to
                enhancing the lives of individuals with disabilities through
                compassionate care, personalized support, and community
                inclusion.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-6 shadow-large border border-white/50">
                  <Image
                    src="/assets/1.jpg"
                    alt="Zest Life Disability Team"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  NDIS Registered
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                  Our Mission & Vision
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  At Zest Life Disability, we are passionate about empowering
                  individuals through our comprehensive NDIS services. With a
                  team of skilled professionals, we provide personalized care
                  and support to enhance the quality of life for every person we
                  serve.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We believe in transforming challenges into triumphs and
                  creating opportunities for independence, growth, and community
                  participation.
                </p>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  {values.map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <div className="text-white">{value.icon}</div>
                      </div>
                      <h4 className="font-semibold text-neutral-800 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                  Our Dedicated Team
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We are a young, energetic team of NDIS service providers who
                  bring enthusiasm, expertise, and genuine care to every
                  interaction. Our skilled professionals are committed to making
                  a positive impact through compassionate care and promoting
                  inclusivity.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Each team member is carefully selected for their
                  qualifications, experience, and most importantly, their
                  passion for helping others live their best lives.
                </p>

                {/* Team Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
                  {teamHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-neutral-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 shadow-large border border-white/50">
                  <Image
                    src="/assets/2.jpg"
                    alt="Our Team in Action"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-6 shadow-large border border-white/50">
                  <Image
                    src="/assets/3.jpg"
                    alt="Our Services"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                  Comprehensive NDIS Services
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We offer a wide range of NDIS services designed to meet the
                  unique needs of each individual. From personal care and
                  community access to supported independent living, our services
                  are tailored to promote independence and enhance quality of
                  life.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Our approach is person-centered, ensuring that every service
                  we provide aligns with your goals, preferences, and
                  aspirations.
                </p>

                {/* Service Categories */}
                <div className="grid grid-cols-1 gap-4 mt-8">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-soft border border-white/50">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaHandHoldingHeart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">
                        Personal Care
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        Compassionate assistance with daily living activities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-soft border border-white/50">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaUsers className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">
                        Community Access
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        Supporting participation in community activities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-soft border border-white/50">
                    <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaLightbulb className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-2">
                        Supported Independent Living
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        Empowering individuals to live independently
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let us help you access the support you need to live your best
              life. Our team is ready to work with you to create a personalized
              care plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="group bg-white text-primary-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3 justify-center"
              >
                <span>Contact Us Today</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/services"
                className="group bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-white/20 border border-white/20 flex items-center gap-3 justify-center"
              >
                <span>View Our Services</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
