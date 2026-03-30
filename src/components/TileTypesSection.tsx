const BrickSvg = () => (
  <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
    <rect x="1" y="1" width="22" height="14" rx="1" fill="#d4782a" stroke="#a04e10" strokeWidth="1"/>
    <rect x="25" y="1" width="22" height="14" rx="1" fill="#c2601a" stroke="#a04e10" strokeWidth="1"/>
    <rect x="1" y="17" width="22" height="14" rx="1" fill="#c2601a" stroke="#a04e10" strokeWidth="1"/>
    <rect x="25" y="17" width="22" height="14" rx="1" fill="#d4782a" stroke="#a04e10" strokeWidth="1"/>
  </svg>
);

const OldTownSvg = () => (
  <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
    <rect x="1" y="1" width="14" height="14" rx="1" fill="#c2601a" stroke="#a04e10" strokeWidth="1"/>
    <rect x="17" y="1" width="10" height="14" rx="1" fill="#e69b00" stroke="#c2601a" strokeWidth="1"/>
    <rect x="29" y="1" width="18" height="14" rx="1" fill="#d4782a" stroke="#a04e10" strokeWidth="1"/>
    <rect x="1" y="17" width="18" height="14" rx="1" fill="#e69b00" stroke="#c2601a" strokeWidth="1"/>
    <rect x="21" y="17" width="12" height="14" rx="1" fill="#c2601a" stroke="#a04e10" strokeWidth="1"/>
    <rect x="35" y="17" width="12" height="14" rx="1" fill="#d4782a" stroke="#a04e10" strokeWidth="1"/>
  </svg>
);

const ColormixSvg = () => (
  <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
    <rect x="1" y="1" width="14" height="14" rx="1" fill="#e69b00" stroke="#c2601a" strokeWidth="1"/>
    <rect x="17" y="1" width="14" height="14" rx="1" fill="#c2601a" stroke="#a04e10" strokeWidth="1"/>
    <rect x="33" y="1" width="14" height="14" rx="1" fill="#b35518" stroke="#8a3e0e" strokeWidth="1"/>
    <rect x="1" y="17" width="14" height="14" rx="1" fill="#c2601a" stroke="#a04e10" strokeWidth="1"/>
    <rect x="17" y="17" width="14" height="14" rx="1" fill="#b35518" stroke="#8a3e0e" strokeWidth="1"/>
    <rect x="33" y="17" width="14" height="14" rx="1" fill="#e69b00" stroke="#c2601a" strokeWidth="1"/>
  </svg>
);

const KatushkaSvg = () => (
  <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
    <path d="M6 1 C2 1 1 4 1 8 L1 24 C1 28 2 31 6 31 L12 31 C16 31 17 28 17 24 L17 8 C17 4 16 1 12 1 Z" fill="#c2601a" stroke="#a04e10" strokeWidth="1"/>
    <path d="M22 1 C18 1 17 4 17 8 L17 24 C17 28 18 31 22 31 L28 31 C32 31 33 28 33 24 L33 8 C33 4 32 1 28 1 Z" fill="#d4782a" stroke="#a04e10" strokeWidth="1"/>
    <path d="M38 1 C34 1 33 4 33 8 L33 24 C33 28 34 31 38 31 L42 31 C46 31 47 28 47 24 L47 8 C47 4 46 1 42 1 Z" fill="#c2601a" stroke="#a04e10" strokeWidth="1"/>
  </svg>
);

const tileTypes = [
  { name: "Кирпичик", thickness: "6–8 см", purpose: "Дорожки, отмостка, пешеходные зоны", price: "от 15", icon: <BrickSvg /> },
  { name: "Старый город", thickness: "6–8 см", purpose: "Дворовые площадки, зоны отдыха", price: "от 16", icon: <OldTownSvg /> },
  { name: "Колормикс", thickness: "6–8 см", purpose: "Декоративное мощение в несколько цветов", price: "от 16", icon: <ColormixSvg /> },
  { name: "Катушка", thickness: "8 см", purpose: "Площадки средней нагрузки", price: "от 17", icon: <KatushkaSvg /> },
];

const TileTypesSection = () => {
  return (
    <section id="tile-types" className="section section-muted">
      <div className="container">
        <h2 className="section-title">
          Виды тротуарной <span className="text-gradient">плитки</span>
        </h2>
        <p className="section-subtitle">
          Подбираем покрытие под нагрузку и бюджет
        </p>
        <div className="tile-table-wrap">
          <table className="tile-table">
            <thead>
              <tr>
                <th></th>
                <th>Вид плитки</th>
                <th>Толщина</th>
                <th>Назначение</th>
                <th>Укладка, бел. руб./м²</th>
              </tr>
            </thead>
            <tbody>
              {tileTypes.map((t, i) => (
                <tr key={i}>
                  <td style={{ width: 64, textAlign: "center" }}>{t.icon}</td>
                  <td className="tile-name">{t.name}</td>
                  <td className="tile-muted">{t.thickness}</td>
                  <td className="tile-muted">{t.purpose}</td>
                  <td className="tile-price">{t.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TileTypesSection;
