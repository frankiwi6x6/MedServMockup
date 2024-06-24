// src/components/AddTechnicianModal.js
import React from 'react';
import Modal from '../Modal/Modal';

const AddTechnicianModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='text-black'>
      <h2 className="text-2xl font-bold mb-4 text-center">Agregar a un nuevo técnico</h2>
      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Ingrese el RUT del técnico..." 
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input 
          type="text" 
          placeholder="Ingrese el nombre completo del técnico..." 
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input 
          type="tel" 
          placeholder="Ingrese el número telefónico del técnico..." 
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input 
          type="email" 
          placeholder="Ingrese el correo institucional del técnico..." 
          className="w-full p-2 border border-gray-300 rounded"
        />
        <div className="border-2 border-dashed border-gray-300 p-4 text-center rounded">
          <label htmlFor="technician-photo" className="cursor-pointer">
            Arrastre una imagen del técnico...
            <input type="file" id="technician-photo" accept="image/*" className="hidden" />
          </label>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Guardar técnico
        </button>
      </form>
      </div>
    </Modal>
  );
};

export default AddTechnicianModal;