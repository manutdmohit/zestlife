import React from 'react';
import {
  FaHouseUser,
  FaWalking,
  FaCarSide,
  FaUserNurse,
  FaGraduationCap,
  FaUserFriends,
  FaBrain,
  FaHandHoldingHeart,
  FaHandSparkles,
  FaClipboardList,
  FaUserShield,
} from 'react-icons/fa';

const NDISProviderInfo = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg
                className="w-4 h-4"
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
              NDIS Registered Provider
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
              Proud to be a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                NDIS registered service provider!
              </span>
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Our friendly team takes several approaches, and even customizes
              when needed the support programs depending on the physical and
              mental state of the participant. We strive to make a positive
              impact by providing compassionate care and promoting inclusivity
              in everything we do.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaHouseUser size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  Household Tasks
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Comprehensive support with daily household activities and
                  maintenance.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaWalking size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-secondary-700 transition-colors duration-300">
                  Assist Personal Activities
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Support with personal care and daily activities to promote
                  independence.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaCarSide size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-accent-700 transition-colors duration-300">
                  Assist Travel/Transport
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Safe and reliable transportation support for appointments and
                  activities.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaUserNurse size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  Community Nursing Care
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Professional nursing care and health support in the community.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-secondary-700 transition-colors duration-300">
                  Development Life Skills
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Building essential life skills for greater independence and
                  confidence.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaUserFriends size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-accent-700 transition-colors duration-300">
                  Community Group/Centre Activities
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Engaging group activities and social programs in community
                  centers.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBrain size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  Innovation Community Participation
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Creative and innovative approaches to community engagement and
                  participation.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaHandHoldingHeart size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-secondary-700 transition-colors duration-300">
                  Assist Daily Living
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Comprehensive support for daily living activities and
                  routines.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaHandSparkles size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-accent-700 transition-colors duration-300">
                  Specialist Positive Behaviour Support
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Specialized support for positive behavior development and
                  management.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaClipboardList size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  Assist Co-ord Transition and Supports
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Coordinated support for smooth transitions and life changes.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-neutral-100">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaUserShield size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-secondary-700 transition-colors duration-300">
                  High Intensity Daily Personal Activities
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Specialized support for high-intensity personal care needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NDISProviderInfo;
