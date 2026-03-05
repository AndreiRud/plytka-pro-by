const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
            Об <span className="text-gradient">ИП Якутчик А.С.</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {[
              { value: "2007", label: "Год основания" },
              { value: "19 лет", label: "Опыт работы" },
              { value: "15+ лет", label: "Стаж мастеров" },
              { value: "до 5 лет", label: "Гарантия" },
            ].map((s, i) => (
              <div key={i} className="bg-card rounded-lg p-5 text-center border border-border shadow-card">
                <p className="text-2xl font-black font-heading text-gradient">{s.value}</p>
                <p className="text-muted-foreground text-sm font-body mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-lg p-6 md:p-8 border border-border shadow-card space-y-4">
            <p className="font-body text-muted-foreground leading-relaxed">
              ИП Якутчик Андрей Степанович работает с 2007 года. За 19 лет выполнены сотни заказов по благоустройству в Пружанах и Брестской области. Наши бригады специализируются на укладке тротуарной плитки, мощении брусчаткой, устройстве оснований и монтаже водоотводных систем.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Работаем по договору с физическими лицами и организациями. Безналичный расчёт с НДС и без НДС. Акты выполненных работ, сметная документация.
            </p>
            <div className="bg-muted rounded-lg p-5 mt-4">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-heading">Инженерный секрет:</strong> определить качество вибропрессованной плитки можно по весу и звуку. Кирпичик 200×100×60 мм должен весить не менее 2,4 кг. При ударе друг о друга — звонкий «стеклянный» звук. Глухой звук и вес менее 2 кг — признак нарушения технологии.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
