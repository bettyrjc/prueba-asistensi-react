import React from "react";
import { Link } from "react-router-dom";
import icons from "../styles/img/icons/sprite.svg";
const header = () => {
  return (
    <header className="header">
      <Link to="./index.html">
        <img
          className="header-logo"
          src="https://asistensi.com/static/images/Asistensi_logotipo.svg"
          alt="logo"
        />
      </Link>

      <ul className="header-links">
        <li className="header-links-link c-pink">
          <Link to=" #">Inicio</Link>
        </li>
        <li className="header-links-link">
          <Link to=" #">Planes</Link>
        </li>
        <li className="header-links-link">
          <Link to=" #">Beneficios</Link>
        </li>
        <li className="header-links-link">
          <Link to=" #">¿Quienes somos?</Link>
        </li>
        <li className="header-links-link">
          <Link to=" #">FAQ's</Link>
        </li>
        <li className="header-links-link">
          <Link to=" #">Contacto</Link>
        </li>
        <li className="header-links-link">
          <Link to=" #">SOS</Link>
        </li>
        <li className="header-links-link">
          <Link to="/busqueda">Vuelos</Link>
        </li>
      </ul>

      <div className="header-buttons">
        <button className="btn header-buttons-btn c-purple b-lightPurple">
          Iniciar Sesion
        </button>
        <button className="btn header-buttons-btn c-pink b-lightPink">
          Afiliarse
        </button>
      </div>
      <div className="header-menuicon">
        <svg className="header-menuicon-icon" id="menu">
          <use href={`${icons}#icon-menu`} />
        </svg>
      </div>
    </header>
  );
};
export default header;
