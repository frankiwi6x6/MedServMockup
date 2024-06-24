// src/pages/requests/RequestsPage.js
import React, { useState } from 'react';
import RequestsComponent from '../../components/RequestsComponent';
import CreateRequestModal from '../../components/CreateRequestModal';

const RequestsPage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">MedServ</h1>
      <RequestsComponent />
      <button 
        onClick={() => setIsCreateModalOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white w-12 h-12 rounded-full text-2xl"
      >
        +
      </button>
      <CreateRequestModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </div>
  );
};

export default RequestsPage;