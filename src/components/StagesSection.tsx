const stages = [
  { num: "01", title: "Консультация и разметка", desc: "Мастер выезжает на объект, оценивает грунт, определяет схему раскладки. Согласовываем смету — все позиции в договоре." },
  { num: "02", title: "Выемка грунта", desc: "Снимаем плодородный слой на 25–45 см. Дно уплотняем виброплитой минимум 4 прохода до коэффициента 0,95." },
  { num: "03", title: "Щебёночное основание", desc: "По желанию клиента. Щебень 20–40 мм, ЩПГС или ПГС послойно по 10–15 см с уплотнением виброплитой. Для парковки — 25–30 см." },
  { num: "04", title: "Установка бордюров", desc: "Борт на бетонный раствор М150–М200. Выставляем по нитке строго по уровню — задаёт высоту покрытия." },
  { num: "05", title: "Выравнивающий слой ЦПС или песка", desc: "Цементно-песчаная смесь 1:6 или песок толщиной 3–5 см, протягиваем правилом." },
  { num: "06", title: "Укладка плитки", desc: "Осаживаем киянкой до уровня, зазор 2–3 мм. Подрезку выполняем болгаркой с алмазным диском." },
  { num: "07", title: "Заполнение швов", desc: "Песок 0–2 мм, 2–3 прохода виброплитой с резиновой подошвой. Повторная просыпка через 2–3 недели." },
];

const StagesSection = () => {
  return (
    <section id="stages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
          Как мы <span className="text-gradient">работаем</span>
        </h2>
         <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-body">
          7 этапов для долговечного покрытия — каждый контролируется
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((s, i) => (
            <div key={i} className="relative bg-card rounded-lg p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow group">
              <span className="text-5xl font-black font-heading text-gradient opacity-30 group-hover:opacity-60 transition-opacity absolute top-4 right-4">
                {s.num}
              </span>
              <h3 className="font-heading font-bold text-base mb-3 pr-12">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-muted rounded-lg p-6">
            <p className="text-2xl font-black font-heading text-gradient">3–5 дней</p>
            <p className="text-muted-foreground text-sm font-body mt-1">50 м² дорожек</p>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <p className="text-2xl font-black font-heading text-gradient">7–10 дней</p>
            <p className="text-muted-foreground text-sm font-body mt-1">100 м² двора</p>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <p className="text-2xl font-black font-heading text-gradient">от 14 дней</p>
            <p className="text-muted-foreground text-sm font-body mt-1">200 м² и более</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
