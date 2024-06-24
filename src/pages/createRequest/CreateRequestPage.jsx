// src/pages/createRequest/CreateRequestPage.js
import React from 'react';
import './CreateRequestPage.css';

const CreateRequestPage = () => {
  return (
    <div className="create-request-container">
      <h1>MedServ</h1>
      <h2>Creación de solicitud</h2>
      <form className="create-request-form">
        <div className="request-type">
          <h3>Seleccione el tipo de visita que más se acomode a su solicitud</h3>
          <label>
            <input type="radio" name="requestType" value="maintenance" />
            Mantenimiento
          </label>
          <label>
            <input type="radio" name="requestType" value="repair" />
            Reparación
          </label>
          <label>
            <input type="radio" name="requestType" value="urgent" />
            Urgencia
          </label>
        </div>
        <textarea placeholder="Describa detalladamente su solicitud"></textarea>
        <input type="text" placeholder="Dirección de visita" />
        <button type="submit">Enviar solicitud</button>
      </form>
    </div>
  );
};

export default CreateRequestPage;