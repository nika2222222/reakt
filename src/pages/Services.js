function Services() {
  const items = [
    { icon: '🎨', title: 'UX/UI дизайн', text: 'Проектируем интерфейсы, рисуем прототипы и макеты.' },
    { icon: '💻', title: 'Веб-разработка', text: 'Разрабатываем сайты и приложения на React.' },
    { icon: '📱', title: 'Адаптивность', text: 'Верстаем под мобильные, планшеты и десктоп.' },
    { icon: '🚀', title: 'Оптимизация', text: 'Ускоряем загрузку и улучшаем SEO.' },
    { icon: '🔒', title: 'Поддержка', text: 'Сопровождаем проекты после запуска.' },
    { icon: '📊', title: 'Аналитика', text: 'Подключаем метрики и отслеживаем результаты.' },
  ];

  return (
    <>
      <div className="page-header">
        <h1>Услуги</h1>
        <p>Полный цикл разработки — от дизайна до поддержки</p>
      </div>

      <div className="grid">
        {items.map((s) => (
          <div className="card" key={s.title}>
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;