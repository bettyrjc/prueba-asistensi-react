import React from "react";
import icons from "../styles/img/icons/sprite.svg";
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
            <button className="btn footer-container-contacts-btns-btn">
              App Store
            </button>
            <button className="btn footer-container-contacts-btns-btn">
              Google play
            </button>
          </div>
        </div>
        <div className="footer-container-list">
          <h3 className="c-pink">Mapa de sitio</h3>
          <ul>
            <a href="">
              <li>¿Quienes somos?</li>
            </a>
            <a href="">
              <li>Planes</li>
            </a>
            <a href="">
              <li>Beneficios</li>
            </a>
            <a href="">
              <li>Cotizar un plan</li>
            </a>
            <a href="">
              <li>Contacto</li>
            </a>
          </ul>
        </div>
        <div className="footer-container-list">
          <h3 className="c-pink">Información</h3>
          <ul>
            <a href="">
              <li>Preguntas Frecuentes</li>
            </a>
            <a href="">
              <li>Términos de uso</li>
            </a>
            <a href="">
              <li>Políticas de privacidad</li>
            </a>
            <a href="">
              <li>Políticas de cookies</li>
            </a>
            <a href="">
              <li>Aviso legal</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="footer-red">
        <p>©2020 Asistensi Global</p>
        <img src="https://asistensi.com/static/images/logo.svg" alt="logo" />
        <div className="footer-red-social">
          <svg className="footer-red-social-icon">
            <use href={`${icons}#icon-facebook2`} />
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
