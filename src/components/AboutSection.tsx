const stats = [
  { value: "2015", label: "Год основания" },
  { value: "10 лет", label: "Опыт работы" },
  { value: "15+ лет", label: "Стаж мастеров" },
  { value: "100%", label: "Качество" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section section-muted">
      <div className="container">
        <div className="about-wrap">

          <h2 className="section-title">
            Об <span className="text-gradient">ИП Якутчик А.С.</span>
          </h2>

          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className="about-stat">
                <p className="about-stat-value">{s.value}</p>
                <p className="about-stat-label">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="about-text">
            <p>
              ИП Якутчик Андрей Степанович работает с 30.07.2015 г.
              За 10 лет выполнены сотни заказов по благоустройству
              в Пружанах и Брестской области. Наши бригады специализируются
              на укладке тротуарной плитки, мощении брусчаткой,
              устройстве оснований и монтаже водоотводных систем.
            </p>
            <p>
              Работаем по договору с физическими лицами и организациями.
              Безналичный расчёт с НДС и без НДС.
              Акты выполненных работ, сметная документация.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
