// RespondRequestComponent.js
import React, { useEffect, useState } from 'react';
import './RespondRequestComponent.css';
import Modal from '../Modal/Modal';

const RespondRequestComponent = ({solicitud, tecnicos,  isOpen, onClose,  }) => {

  const handleApprove = () => {
    // Aquí se debería enviar la solicitud a la base de datos
    console.log('Solicitud aprobada');
    onClose();
  }
  
  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="respond-request-container text-black" >
        <h2 className='text-2xl text-center pb-10'>Responder solicitud</h2>
        <div className="request-details">
          <p><strong>Solicitante:</strong> {solicitud.nombre}</p>
          <p><strong>Mensaje de Solicitud:</strong> {solicitud.descripcion} </p>
          <p><strong>Dirección:</strong> {solicitud.direccion}</p>
        </div>
        <form className="respond-form">
          <select>
            <option value="">Seleccione un técnico para asignar</option>
            {
              tecnicos.map((tecnico) => (
                <option value={tecnico.id} key={tecnico.id}>{tecnico.nombre}</option>
              ))  
            }
          </select>
          
          {/* Ahora depende del tecnico que haya elegido para el horario de llegada*/}
          <select name="horario" id="horario">
            <option value="">Seleccione un horario de llegada</option>

            <option value="8:00">8:00</option>
            <option value="9:00">9:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>


          </select>



          <div className="button-group">
            <button type="button" className="approve" onClick={handleApprove}>Aprobar solicitud</button>
            <button type="button" className="reject" onClick={onClose}>Rechazar solicitud</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RespondRequestComponent;