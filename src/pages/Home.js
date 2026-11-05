import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Создаём сайты, которые работают</h1>
        <p>
          Проектируем и разрабатываем современные сайты и веб-приложения —
          от идеи до запуска и поддержки.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <Link to="/contact" className="btn">Обсудить проект</Link>
          <Link to="/portfolio" className="btn btn-outline">Наши работы</Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">Почему мы</h2>
        <p className="section-subtitle">Нас выбирают за скорость, качество и внимание к деталям.</p>
        <div className="grid">
          <div className="card">
            <div className="icon">⚡</div>
            <h3>Быстрый запуск</h3>
            <p>Первые прототипы уже через неделю после старта проекта.</p>
          </div>
          <div className="card">
            <div className="icon">💎</div>
            <h3>Современный дизайн</h3>
            <p>Аккуратный и понятный интерфейс, адаптированный под мобильные.</p>
          </div>
          <div className="card">
            <div className="icon">🛠️</div>
            <h3>Чистый код</h3>
            <p>React, TypeScript и продуманная архитектура проекта.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;