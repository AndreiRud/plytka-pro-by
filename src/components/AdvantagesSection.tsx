import { Shield, Clock, Users, Wrench, PhoneCall, FileText, Percent } from "lucide-react";

const advantages = [
  { icon: FileText, title: "Без предоплаты", desc: "Оплата по факту выполнения этапа, зафиксированного в договоре." },
  { icon: Shield, title: "Гарантия до 5 лет", desc: "Покрывает просадки, расхождение швов и разрушение покрытия." },
  { icon: Users, title: "Опытные мастера", desc: "Средний стаж бригады более 15 лет, профильное образование." },
  { icon: Wrench, title: "Работа под ключ", desc: "От выемки грунта до установки дождеприемников, включая закупку материалов." },
  { icon: PhoneCall, title: "Консультация мастера", desc: "Предварительный выезд для оценки основания, расчёт по фото." },
  { icon: Clock, title: "Без скрытых доплат", desc: "Смета согласовывается до начала работ, все позиции в договоре." },
  { icon: Percent, title: "Скидки от 100 м²", desc: "Чем больше площадь, тем ниже цена укладки за м²." },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
          Наши <span className="text-gradient">преимущества</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-body">
          Покрытие со сроком службы 15–30 лет благодаря технологии послойного уплотнения виброплитой
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {advantages.map((a, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-warm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <a.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-secondary rounded-lg p-6 md:p-8">
          <p className="text-secondary-foreground font-body leading-relaxed">
            <strong className="font-heading">Цена ошибки:</strong> отсутствие уплотнения основания приводит к просадке уже через 1–2 зимы, а экономия 2–3 бел. руб./м² на геотекстиле оборачивается полной переделкой покрытия. ИП Якутчик А.С. защищает от таких рисков договором, поэтапной приёмкой и письменной гарантией.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
