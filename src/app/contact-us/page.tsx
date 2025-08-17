'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaUser,
  FaPaperPlane,
  FaStar,
  FaCheckCircle,
} from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form data after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setIsSubmitting(false);

    // Show success toast message
    toast.success("Thank you for contacting us! We'll get back to you soon.", {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: 'Our Location',
      details: '23 Norman Dunlop Crescent',
      subtitle: 'Minto, NSW 2566',
      color: 'from-primary-500 to-secondary-500',
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: 'Phone Numbers',
      details: '0452 150 350',
      subtitle: '0482 026 019',
      color: 'from-secondary-500 to-accent-500',
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: 'Email Address',
      details: 'zestlifedisability@gmail.com',
      subtitle: "We'll respond within 24 hours",
      color: 'from-accent-500 to-primary-500',
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 8:00 AM - 6:00 PM',
      subtitle: '24/7 Emergency Support Available',
      color: 'from-primary-500 to-accent-500',
    },
  ];

  const benefits = [
    'NDIS Registered Provider',
    '24/7 Support Available',
    'Personalized Care Plans',
    'Local Community Focus',
  ];

  return (
    <>
      <ToastContainer />
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
                Get In Touch
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-bold text-neutral-800 mb-6 leading-tight">
                Let's Start{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Your Journey
                </span>
              </h1>

              <p className="font-body text-xl text-neutral-600 leading-relaxed max-w-4xl mx-auto">
                Ready to discuss your NDIS support needs? We're here to help you
                access the services and support you deserve. Contact us today to
                begin your journey towards independence and fulfillment.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Contact Form */}
              <div className="bg-white rounded-3xl p-8 shadow-large border border-white/50">
                <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as
                  possible. We're here to answer your questions and help you
                  access the support you need.
                </p>

                <form onSubmit={submitForm} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                        <input
                          type="email"
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                        <input
                          type="tel"
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your phone number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="What can we help you with?"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      rows={6}
                      placeholder="Tell us about your needs and how we can help..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                {/* Contact Information Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-soft border border-white/50 hover:shadow-medium transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <div className="text-white">{info.icon}</div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-800 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-neutral-700 font-medium">
                            {info.details}
                          </p>
                          <p className="text-neutral-500 text-sm">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">
                    Why Choose Zest Life Disability?
                  </h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <FaCheckCircle className="w-4 h-4 text-accent-300 flex-shrink-0" />
                        <span className="text-primary-100">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-white/50">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    For urgent matters or immediate support, please call us
                    directly.
                  </p>
                  <a
                    href="tel:0452150350"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <FaPhone className="w-4 h-4" />
                    <span>Call Now: 0452 150 350</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      re
      <Footer />
    </>
  );
};

export default Page;
