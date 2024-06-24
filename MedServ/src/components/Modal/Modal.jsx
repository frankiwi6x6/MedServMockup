// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4">
        <button 
          onClick={onClose}
          className="float-right bg-red-600 hover:bg-red-900 text-white hover:text-gray-900"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;