import React from "react";
import { Link } from "react-router-dom";

function sideNav() {
  return (
    <div className="nav-bar" id="nav">
      <div className="side">
        <Link to="./index.html" className="side-logo">
          <img
            className="side-logo-img"
            src="https://asistensi.com/static/images/Asistensi_logotipo.svg"
            alt="logo"
          />
        </Link>
        <hr />
        <ul className="side-links">
          <li className="side-links-item">
            <Link to="" className="c-pink side-links-link">
              Destinos
            </Link>
          </li>
          <li className="side-links-item">
            <Link to="" className="side-links-link">
              Beneficios
            </Link>
          </li>
          <li className="side-links-item">
            <Link to="" className="side-links-link">
              ¿Quienes somos?
            </Link>
          </li>
          <li className="side-links-item">
            <Link to="" className="side-links-link">
              FAQ's
            </Link>
          </li>
        </ul>

        <div className="side-buttons">
          <button className="btn side-buttons-btn c-purple b-lightPurple">
            Iniciar Sesion
          </button>
          <button className="btn side-buttons-btn c-pink b-lightPink m-l">
            Afiliarse
          </button>
        </div>
      </div>
    </div>
  );
}
export default sideNav;
