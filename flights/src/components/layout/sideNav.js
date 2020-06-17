import React from "react";
import { Link } from "react-router-dom";
import icons from "../styles/img/icons/sprite.svg";

export default function sideNav() {
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
            <a href="#" className="c-pink side-links-link">
              Inicio
            </a>
          </li>
          <li className="side-links-item">
            <a href="#" className="side-links-link">
              Planes
            </a>
          </li>
          <li className="side-links-item">
            <a className="side-links-link" href="#">
              Beneficios
            </a>
          </li>
          <li className="side-links-item">
            <a className="side-links-link" href="#">
              ¿Quienes somos?
            </a>
          </li>
          <li className="side-links-item">
            <a className="side-links-link" href="#">
              FAQ's
            </a>
          </li>
          <li className="side-links-item">
            <a className="side-links-link" href="#">
              Contacto
            </a>
          </li>
          <li className="side-links-item">
            <a className="side-links-link" href="#">
              SOS
            </a>
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
      <div className="side-icons" id="close">
        <svg className="side-icon">
          <use href={`${icons}#icon-x`} />
        </svg>
      </div>
    </div>
  );
}
