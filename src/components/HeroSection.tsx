import heroImg from "@/assets/hero-paving.jpg";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Укладка тротуарной плитки в Пружанах"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-primary-foreground text-sm font-medium font-heading">
              Опыт с 2007 года • Гарантия до 5 лет
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-primary-foreground leading-tight mb-6">
            Укладка тротуарной плитки в Пружанах
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-body mb-4">
            Цена от <span className="font-bold text-accent">15 бел. руб./м²</span>
          </p>
          <p className="text-lg text-primary-foreground/80 font-body mb-8 max-w-2xl">
            Бригады с опытом от 15 лет, договор, гарантия на работы до 5 лет. Без предоплаты — оплата по факту.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+375291234567"
              className="inline-flex items-center justify-center gap-2 bg-gradient-warm text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg shadow-hero hover:opacity-90 transition-opacity text-lg"
            >
              <Phone className="w-5 h-5" />
              Позвонить
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/20 transition-colors text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Рассчитать стоимость
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
