import React from "react";
import { Link } from "react-router-dom";
import icons from "../styles/img/icons/sprite.svg";
export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-list">
          <h3 className="c-pink">Información</h3>
          <ul>
            <Link to="">
              <li>Preguntas Frecuentes</li>
            </Link>
            <Link to="">
              <li>Términos de uso</li>
            </Link>
            <Link to="">
              <li>Políticas de privacidad</li>
            </Link>
            <Link to="">
              <li>Políticas de cookies</li>
            </Link>
            <Link to="">
              <li>Aviso legal</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer-red">
        <p>©2020 Vuela rapido</p>

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
