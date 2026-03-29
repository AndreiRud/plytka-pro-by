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
    <section id="stages" className="section section-light">
      <div className="container">
        <h2 className="section-title">
          Как мы <span className="text-gradient">работаем</span>
        </h2>
        <p className="section-subtitle">
          7 этапов для долговечного покрытия — каждый контролируется
        </p>
        <div className="stages-grid">
          {stages.map((s, i) => (
            <div key={i} className="stage-card">
              <span className="stage-num">{s.num}</span>
              <h3 className="stage-title">{s.title}</h3>
              <p className="stage-desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="stages-stats">
          <div className="stages-stat">
            <p className="stages-stat-value">3–5 дней</p>
            <p className="stages-stat-label">50 м² дорожек</p>
          </div>
          <div className="stages-stat">
            <p className="stages-stat-value">7–10 дней</p>
            <p className="stages-stat-label">100 м² двора</p>
          </div>
          <div className="stages-stat">
            <p className="stages-stat-value">от 14 дней</p>
            <p className="stages-stat-label">200 м² и более</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
