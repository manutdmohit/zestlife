import React from 'react';

import Header from '../../components/Header/Header';
import NDISProviderInfo from '@/components/NDISProviderInfo/NDISProviderInfo';

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NDISProviderInfo />
    </div>
  );
};

export default ServicePage;
