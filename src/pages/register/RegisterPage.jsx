// src/pages/register/RegisterPage.js
import React from 'react';
import RegisterComponent from '../../components/RegisterComponent/RegisterComponent';

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#]">
      <h1 className="text-4xl font-bold  text-white mb-8">MedServ</h1>
      <RegisterComponent />
      <div className="mt-4 text-center">
        
      </div>
    </div>
  );
};

export default RegisterPage;