'use client';

import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import JoinUsSection from '@/components/JoinUs/JoinUs';
import NDISProviderInfo from '@/components/NDISProviderInfo/NDISProviderInfo';
import NDISScheme from '@/components/NDISSCheme/NDISScheme';
import WhyUs from '@/components/WhyUs/WhyUs';

export default function Website() {
  return (
    <div className="">
      {/* Header - Fixed at top level */}
      <Header />

      {/* Hero Section */}
      <Hero />

      <WhyUs />
      <NDISProviderInfo />
      <NDISScheme />
      <JoinUsSection />
    </div>
  );
}
