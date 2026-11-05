import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h4>WebStudio</h4>
          <p style={{ fontSize: 14, maxWidth: 240 }}>
            Создаём современные сайты и веб-приложения под ключ.
          </p>
        </div>
        <div>
          <h4>Навигация</h4>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/portfolio">Портфолио</Link>
          <Link to="/contact">Контакты</Link>
        </div>
        <div>
          <h4>Контакты</h4>
          <a href="mailto:hello@webstudio.ru">hello@webstudio.ru</a>
          <a href="tel:+79990000000">+7 (999) 000-00-00</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} WebStudio. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

export default Footer;