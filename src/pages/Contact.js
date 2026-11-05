import { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <div className="page-header">
        <h1>Контакты</h1>
        <p>Свяжитесь с нами — обсудим ваш проект</p>
      </div>

      <div className="contact-wrap">
        <div className="contact-info">
          <div>
            <div className="label">Email</div>
            <div className="value">hello@webstudio.ru</div>
          </div>
          <div>
            <div className="label">Телефон</div>
            <div className="value">+7 (999) 000-00-00</div>
          </div>
          <div>
            <div className="label">Адрес</div>
            <div className="value">Москва, ул. Примерная, 1</div>
          </div>
          <div>
            <div className="label">Часы работы</div>
            <div className="value">Пн–Пт, 10:00–19:00</div>
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Ваше имя</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Иван Иванов"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Сообщение</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Расскажите о вашем проекте..."
              required
            />
          </div>
          <button type="submit" className="btn">Отправить</button>
          {sent && (
            <p style={{ color: '#10b981', marginTop: 14 }}>
              ✓ Спасибо! Мы свяжемся с вами в ближайшее время.
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default Contact;