import { Phone, MapPin, FileText, Clock } from "lucide-react";

const ContactsSection = () => {
  return (
    <section id="contacts" className="section section-dark">
      <div className="container">
        <h2 className="contacts-title">Контакты</h2>
        <div className="contacts-grid">
          <div>
            <div className="contact-row">
              <div className="contact-icon"><FileText size={20} /></div>
              <div>
                <p className="contact-label">ИП Якутчик Андрей Степанович</p>
                <p className="contact-value">УНП 291211659 • г. Пружаны</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon"><Phone size={20} /></div>
              <div>
                <p className="contact-label">Телефон</p>
                <a href="tel:+375291234567" className="contact-link">+375 (29) 123-45-67</a>
                <p className="contact-small">Viber, Telegram</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div>
                <p className="contact-label">Адрес</p>
                <p className="contact-value">г. Пружаны, Брестская область</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon"><Clock size={20} /></div>
              <div>
                <p className="contact-label">Режим работы</p>
                <p className="contact-value">Пн–Сб: 8:00–19:00</p>
                <p className="contact-small">Выезд на объект — по договорённости</p>
              </div>
            </div>
          </div>
          <div className="contacts-box">
            <h3>Бесплатная консультация</h3>
            <p>Отправьте фото участка в Viber или Telegram — мастер подготовит предварительный расчёт стоимости.</p>
            <a href="tel:+375291234567" className="contacts-cta">
              <Phone size={20} />
              Позвонить сейчас
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
