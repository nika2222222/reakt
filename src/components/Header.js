import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="logo">
          Web<span>Studio</span>
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end>Главная</NavLink>
          <NavLink to="/about">О нас</NavLink>
          <NavLink to="/services">Услуги</NavLink>
          <NavLink to="/portfolio">Портфолио</NavLink>
          <NavLink to="/contact">Контакты</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
