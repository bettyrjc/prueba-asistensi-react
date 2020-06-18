import React from "react";
import icons from "../styles/img/icons/sprite.svg";
import { Link } from "react-router-dom";
export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-contacts">
          <div className="footer-container-contacts-texts">
            <p className="footer-container-contacts-text">
              Estados Unidos: <i className="c-pink">+1 (305) 455.88.11</i>
            </p>
            <p className="footer-container-contacts-text">
              Venezuela:
              <i className="c-pink">+58 (800) 836.36.37 /+58 (212) 822.12.60</i>
            </p>
            <p className="footer-container-contacts-text">
              España: <i className="c-pink">+34 (911) 238.276</i>
            </p>
          </div>
          <div className="footer-container-contacts-btns">
            <button className="btn footer-container-contacts-btns-btn ">
              <svg className="footer-red-social-icon">
                <use href={`${icons}#icon-appleinc`} />
              </svg>
              App Store
            </button>
            <button className="btn footer-container-contacts-btns-btn">
              <svg className="footer-red-social-icon">
                <use href={`${icons}#icon-googleplay`} />
              </svg>
              Google play
            </button>
          </div>
        </div>
        <div className="footer-container-list">
          <h3 className="c-pink">Mapa de sitio</h3>
          <ul>
            <Link>
              <li>¿Quienes somos?</li>
            </Link>
            <Link>
              <li>Planes</li>
            </Link>
            <Link>
              <li>Beneficios</li>
            </Link>
            <Link>
              <li>Cotizar un plan</li>
            </Link>
            <Link href="">
              <li>Contacto</li>
            </Link>
          </ul>
        </div>
        <div className="footer-container-list">
          <h3 className="c-pink">Información</h3>
          <ul>
            <Link>
              <li>Preguntas Frecuentes</li>
            </Link>
            <Link>
              <li>Términos de uso</li>
            </Link>
            <Link>
              <li>Políticas de privacidad</li>
            </Link>
            <Link>
              <li>Políticas de cookies</li>
            </Link>
            <Link>
              <li>Aviso legal</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer-red">
        <p>©2020 Asistensi Global</p>
        <img src="https://asistensi.com/static/images/logo.svg" alt="logo" />
        <div className="footer-red-social">
          <svg className="footer-red-social-icon">
            <use href={`${icons}#icon-facebook1`} />
          </svg>
          <svg className="footer-red-social-icon">
            <use href={`${icons}#icon-linkedin`} />
          </svg>
          <svg className="footer-red-social-icon">
            <use href={`${icons}#icon-twitter1`} />
          </svg>
          <svg className="footer-red-social-icon">
            <use href={`${icons}#icon-instagram1`} />
          </svg>
        </div>
      </div>
    </footer>
  );
}
