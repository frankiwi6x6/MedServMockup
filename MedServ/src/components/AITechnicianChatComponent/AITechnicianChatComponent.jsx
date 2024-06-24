import React, { useState } from 'react';

const AITechnicianChatComponent = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed bottom-5 right-5 w-80 ${isOpen ? 'translate-y-0' : 'translate-y-24'} transition-transform duration-300`}>
      {isOpen && (
        <div className="bg-white text-black shadow-lg rounded-lg p-4 mt-2">
          <h1 className="text-xl font-bold mb-4">MedServ</h1>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full focus:outline-none"
          >
            X
          </button>

          <div className="mb-2">
            <div className="bg-gray-200 p-3 rounded mb-2">
              <p>Tenga en cuenta que ahora mismo está hablando con una inteligencia artificial debido a que actualmente no contamos con técnicos disponibles, si desea hablar con un técnico, por favor vuelva más tarde.</p>
            </div>
            <div className="bg-blue-500 text-white p-3 rounded mb-2 text-right">
              <p>hola necesito ayuda con la máquina 5008S cordiax</p>
            </div>
            <div className="bg-gray-200 p-3 rounded">
              <p>Ya veo, los fallos más comunes en la máquina "5008S CorDiax" son:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Fallos en las válvulas</li>
                <li>Fallos en los filtros</li>
                <li>Fallos en la electrónica</li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
              placeholder="Escriba su mensaje..."
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AITechnicianChatComponent;
