// TechnicianScheduleComponent.js
import React from 'react';
import './TechnicianScheduleComponent.css';
import Modal from '../Modal/Modal';

const TechnicianScheduleComponent = ({ tecnico, isOpen, onClose }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="technician-schedule-container">
        <h2 className='text-2xl text-center text-black pb-10'>Horario de {tecnico.nombre}</h2>
        <div className="schedule-grid">
          <img src={tecnico.horario} alt="" />
        </div>
        <button
          onClick={onClose}s className="close-button w-full ">Cerrar</button>
      </div>
    </Modal>
  );
};

export default TechnicianScheduleComponent;