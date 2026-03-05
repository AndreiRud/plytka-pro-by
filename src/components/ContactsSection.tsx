import { Phone, MapPin, FileText, Clock } from "lucide-react";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary-foreground mb-12">
          Контакты
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-warm flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-secondary-foreground">ИП Якутчик Андрей Степанович</p>
                <p className="text-secondary-foreground/70 text-sm font-body">УНП 291211659 • г. Пружаны</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-warm flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-secondary-foreground">Телефон</p>
                <a href="tel:+375291234567" className="text-accent hover:underline font-body">+375 (29) 123-45-67</a>
                <p className="text-secondary-foreground/50 text-xs font-body mt-1">Viber, Telegram</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-warm flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-secondary-foreground">Адрес</p>
                <p className="text-secondary-foreground/70 text-sm font-body">г. Пружаны, Брестская область</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-warm flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-bold text-secondary-foreground">Режим работы</p>
                <p className="text-secondary-foreground/70 text-sm font-body">Пн–Сб: 8:00–19:00</p>
                <p className="text-secondary-foreground/50 text-xs font-body">Выезд на объект — по договорённости</p>
              </div>
            </div>
          </div>
          <div className="bg-secondary-foreground/5 backdrop-blur-sm rounded-lg border border-secondary-foreground/10 p-6">
            <h3 className="font-heading font-bold text-secondary-foreground text-lg mb-2">Бесплатная консультация</h3>
            <p className="text-secondary-foreground/70 text-sm font-body mb-6">
              Отправьте фото участка в Viber или Telegram — мастер подготовит предварительный расчёт стоимости.
            </p>
            <a
              href="tel:+375291234567"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-warm text-primary-foreground font-heading font-bold px-6 py-4 rounded-lg shadow-hero hover:opacity-90 transition-opacity text-lg"
            >
              <Phone className="w-5 h-5" />
              Позвонить сейчас
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
