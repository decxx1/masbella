
export default function Menu(props) {
    return (
        <div className="header__menu__option">
          <nav className="header__menu">
            <ul>
              <li className={props.path === '/' ? 'active' : ''}><a href='./'>Inicio</a></li>
              <li className={props.path === '/servicios' ? 'active' : ''}><a href='./servicios'>Servicios</a></li>
              <li className={props.path === '/about' ? 'active' : ''}><a href='./about'>Nosotros</a></li>
              <li className={props.path === '/franquicias' ? 'active' : ''}><a href='./franquicias'>Franquicias</a></li>
            </ul>
          </nav>
          <div className="header__btn">
            <a href="./contacto" className={props.path === '/contacto' ? 'contact-select primary-btn' : 'primary-btn'}>Contacto</a>
          </div>
        </div>
    )
}