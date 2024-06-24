// src/components/CreateRequestModal.js
import React from 'react';
import Modal from '../Modal/Modal';

const CreateRequestModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=' text-black'>

        <h2 className=" text-2xl font-bold mb-4 ">Creación de solicitud</h2>
        <form className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Seleccione el tipo de visita que más se acomode a su solicitud</h3>
            <div className="space-y-2 flex justify-between">
              <label className="flex items-center">
                <input type="radio" name="requestType" value="maintenance" className="mr-2" />
                Mantenimiento
              </label>
              <label className="flex items-center">
                <input type="radio" name="requestType" value="repair" className="mr-2" />
                Reparación
              </label>
              <label className="flex items-center">
                <input type="radio" name="requestType" value="urgent" className="mr-2" />
                Urgencia
              </label>
            </div>
          </div>
          <textarea
            placeholder="Describa detalladamente su solicitud"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          <input
            type="text"
            placeholder="Dirección de visita"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateRequestModal;