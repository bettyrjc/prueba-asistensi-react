import React from "react";
import { Link } from "react-router-dom";
import icons from "../styles/img/icons/sprite.svg";
const header = () => {
  return (
    <header className="header search-header">
      <Link to="/" className="logo">
        Vuela rapido
      </Link>
      <ul className="header-links">
        <li className="header-links-link">
          <Link to=" ">Destinos</Link>
        </li>
        <li className="header-links-link">
          <Link to=" ">Beneficios</Link>
        </li>
        <li className="header-links-link">
          <Link to=" ">¿Quienes somos?</Link>
        </li>
        <li className="header-links-link">
          <Link to=" ">FAQ's</Link>
        </li>
      </ul>
      <div className="header-menuicon">
        <svg className="header-menuicon-icon" id="menu">
          <use href={`${icons}#icon-menu`} />
        </svg>
      </div>
    </header>
  );
};
export default header;
