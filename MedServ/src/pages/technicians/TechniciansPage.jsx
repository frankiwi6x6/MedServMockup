// src/pages/technicians/TechniciansPage.js
import React from 'react';
import TechniciansComponent from '../../components/TechniciansComponent';

const TechniciansPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">MedServ</h1>
      <TechniciansComponent />
    </div>
  );
};

export default TechniciansPage;