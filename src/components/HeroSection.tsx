import heroImg from "@/assets/hero-paving.jpg";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero">

      <img
        src={heroImg}
        alt="Укладка тротуарной плитки в Пружанах"
        className="hero-img"
        loading="eager"
      />

      <div className="hero-overlay" />

      <div className="container hero-content">

        <div className="hero-badge">
          Работаем с 30.07.2015 г. • Высокое качество работ
        </div>

        <h1 className="hero-title">
          Укладка тротуарной плитки в Пружанах
        </h1>

        <p className="hero-price">
          Цена от <span>20 бел. руб./м²</span>
        </p>

        <p className="hero-desc">
          Договор, качественное выполнение работ. Без предоплаты — оплата по факту.
        </p>

        <div className="hero-buttons">
          <a href="tel:+375291234567" className="hero-btn-primary">
            <Phone size={20} />
            Позвонить
          </a>

          <a href="#calculator" className="hero-btn-secondary">
            <MessageCircle size={20} />
            Рассчитать стоимость
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
