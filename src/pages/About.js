function About() {
  return (
    <>
      <div className="page-header">
        <h1>О нас</h1>
        <p>Небольшая команда с большой любовью к вебу</p>
      </div>

      <div className="about-text">
        <p>
          Мы — студия веб-разработки, которая помогает бизнесу выглядеть
          в интернете современно и уверенно. Работаем с React, Node.js и
          современными инструментами фронтенда.
        </p>
        <p>
          За плечами — десятки проектов: от лендингов до крупных порталов
          и внутренних сервисов компаний.
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <div className="num">60+</div>
          <div className="label">проектов</div>
        </div>
        <div className="stat">
          <div className="num">7</div>
          <div className="label">лет на рынке</div>
        </div>
        <div className="stat">
          <div className="num">98%</div>
          <div className="label">довольных клиентов</div>
        </div>
        <div className="stat">
          <div className="num">12</div>
          <div className="label">специалистов</div>
        </div>
      </div>
    </>
  );
}

export default About;