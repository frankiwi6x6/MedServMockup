// RegisterComponent.js
import React from 'react';
import './RegisterComponent.css';
import { Link } from 'react-router-dom';

const RegisterComponent = () => {
  return (
    <div className="register-container">
      <h1>MedServ</h1>
      <h2>Registro de cuenta</h2>
      <form className="register-form">
        <input type="email" placeholder="Ingrese su Correo electrónico..." />
        <input type="text" placeholder="Ingrese su Nombre completo..." />
        <input type="tel" placeholder="Ingrese su Número telefónico..." />
        <input type="text" placeholder="Ingrese su Dirección..." />
        <input type="password" placeholder="Ingrese su Contraseña..." />
        <input type="password" placeholder="Confirme su contraseña" />
        <button type="submit">Registrar cuenta</button>
      </form>
      <div className="register-link">
        <Link to="/login" className="text-blue-600 hover:underline">

          <p className="text-white hover:underline">
            ¿Ya tienes cuenta? ¡Inicia sesión aquí!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default RegisterComponent;