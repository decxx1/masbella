import { useEffect, useState } from "react";

export default function Menu({origin}) {
  const [path, setPath] = useState(null);
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return (
    <div className="header__menu__option">
      <nav className="header__menu">
        <ul>
          <li className={path === "/" ? "active" : ""}>
            <a href={`${origin}/`}>Inicio</a>
          </li>
          <li className={path?.includes("/servicios") ? "active" : ""}>
            <a href={`${origin}/servicios`}>Servicios</a>
          </li>
          <li className={path === "/about" ? "active" : ""}>
            <a href={`${origin}/about`}>Nosotros</a>
          </li>
          <li className={path === "/centros" ? "active" : ""}>
            <a href={`${origin}/centros`}>Centros</a>
          </li>
          <li className={path === "/franquicias" ? "active" : ""}>
            <a href={`${origin}/franquicias`}>Franquicias</a>
          </li>
        </ul>
      </nav>
      <div className="header__btn">
        <a
          href={`${origin}/contacto`}
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
