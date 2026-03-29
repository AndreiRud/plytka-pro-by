import { Shield, Clock, Wrench, PhoneCall, FileText, Percent } from "lucide-react";

const advantages = [
  { icon: FileText, title: "Без предоплаты", desc: "Оплата по факту выполнения этапа, зафиксированного в договоре." },
  { icon: Shield, title: "Качество работ", desc: "Выполняем работы качественно — просадки, расхождение швов и разрушение покрытия исключены." },
  { icon: Wrench, title: "Работа под ключ", desc: "От выемки грунта до установки дождеприемников, включая закупку материалов." },
  { icon: PhoneCall, title: "Консультация мастера", desc: "Предварительный выезд для оценки основания, расчёт по фото." },
  { icon: Clock, title: "Без скрытых доплат", desc: "Смета согласовывается до начала работ, все позиции в договоре." },
  { icon: Percent, title: "Скидки от 100 м²", desc: "Чем больше площадь, тем ниже цена укладки за м²." },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="section section-light">
      <div className="container">
        <h2 className="section-title">
          Наши <span className="text-gradient">преимущества</span>
        </h2>
        <p className="section-subtitle">
          Покрытие со сроком службы 15–30 лет благодаря технологии послойного уплотнения виброплитой
        </p>
        <div className="advantages-grid">
          {advantages.map((a, i) => (
            <div key={i} className="advantage-card">
              <div className="advantage-icon">
                <a.icon />
              </div>
              <h3 className="advantage-title">{a.title}</h3>
              <p className="advantage-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
