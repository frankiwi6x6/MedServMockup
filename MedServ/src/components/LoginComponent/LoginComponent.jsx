// LoginComponent.js
import React from 'react';
import './LoginComponent.css';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <input type="email" placeholder="Ingrese su Correo electrónico..." />
        <input type="password" placeholder="Ingrese su Contraseña..." />

        <button type="submit">
          <Link to={'/'}>
            Iniciar sesión
          </Link>
        </button>
      </form>
      <div className="login-links text-white">

        <Link to="/register" >
          <p className="text-white hover:underline">
            ¿No tienes cuenta? ¡Crea una aquí!
          </p>
        </Link>
        <Link>

          <p className="text-white hover:underline">

            Recupera tu contraseña
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LoginComponent;