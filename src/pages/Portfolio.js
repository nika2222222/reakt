function Portfolio() {
  const projects = [
    { title: 'Интернет-магазин одежды', desc: 'Каталог, корзина и онлайн-оплата.', emoji: '🛍️', color: '#6366f1' },
    { title: 'Сайт стоматологии', desc: 'Запись онлайн и личный кабинет.', emoji: '🦷', color: '#0ea5e9' },
    { title: 'Платформа курсов', desc: 'Личный кабинет, уроки и прогресс.', emoji: '🎓', color: '#10b981' },
    { title: 'Сервис доставки', desc: 'Карта, заказы и трекинг курьера.', emoji: '🚚', color: '#f59e0b' },
    { title: 'Агентство недвижимости', desc: 'Фильтры, карточки объектов, заявки.', emoji: '🏠', color: '#ef4444' },
    { title: 'Медиа-портал', desc: 'Статьи, категории и поиск.', emoji: '📰', color: '#8b5cf6' },
  ];

  return (
    <>
      <div className="page-header">
        <h1>Портфолио</h1>
        <p>Некоторые из проектов, которыми мы гордимся</p>
      </div>

      <div className="grid">
        {projects.map((p) => (
          <div className="project" key={p.title}>
            <div className="project-thumb" style={{ background: p.color }}>
              {p.emoji}
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;