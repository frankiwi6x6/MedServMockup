// RequestsComponent.js
import React from 'react';
import './RequestsComponent.css';
import sampleData from './sampleData.json';

const RequestsComponent = () => {
  return (
    <div className="requests-container">
      <h1>MedServ</h1>
      <h2>Mis solicitudes</h2>
      <div className="requests-list">
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
      <button className="new-request-btn">+</button>
      <h3>Visitas técnicas anteriores</h3>
      <div className="previous-visits">
        {sampleData.previousVisits.map(visit => (
          <div key={visit.id} className="visit-item">
            <span>{visit.date}</span>
            <p>{visit.technician} te atendió en {visit.location} el {visit.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestsComponent;