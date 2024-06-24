// TechniciansComponent.js
import React from 'react';
import './TechniciansComponent.css';
import sampleData from './sampleData.json';

const TechniciansComponent = () => {
  return (
    <div className="technicians-container">
      <h1>MedServ</h1>
      <h2>Técnicos</h2>
      <div className="technicians-list">
        {sampleData.technicians.map(technician => (
          <div key={technician.id} className="technician-item">
            <span>{technician.name}</span>
            <button>Ver horario</button>
          </div>
        ))}
      </div>
      <h3>Últimas solicitudes</h3>
      <div className="recent-requests">
        {sampleData.requests.map(request => (
          <div key={request.id} className="request-item">
            <div className="request-header">
              <span>{request.date}</span>
              <span className={`status ${request.status.toLowerCase()}`}>{request.status}</span>
            </div>
            <p>{request.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechniciansComponent;