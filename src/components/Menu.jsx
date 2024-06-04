import { useEffect, useState } from "react";

export default function Menu() {
  const [path, setPath] = useState(null);
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return (
    <div className="header__menu__option">
      <nav className="header__menu">
        <ul>
          <li className={path === "/" ? "active" : ""}>
            <a href="./">Inicio</a>
          </li>
          <li className={path === "/servicios" ? "active" : ""}>
            <a href="./servicios">Servicios</a>
          </li>
          <li className={path === "/about" ? "active" : ""}>
            <a href="./about">Nosotros</a>
          </li>
          <li className={path === "/franquicias" ? "active" : ""}>
            <a href="./franquicias">Franquicias</a>
          </li>
          <li className={path === "/centros" ? "active" : ""}>
            <a href="./centros">Centros</a>
          </li>
        </ul>
      </nav>
      <div className="header__btn">
        <a
          href="./contacto"
          className={
            path === "/contacto" ? "contact-select primary-btn" : "primary-btn"
          }
        >
          Contacto
        </a>
      </div>
    </div>
  );
}
