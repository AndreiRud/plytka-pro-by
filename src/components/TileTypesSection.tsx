/* Кирпичик — серые кирпичи 2:1, ёлочкой */
const BrickSvg = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" fill="none">
    <rect x="2" y="2" width="18" height="9" rx="1" fill="#a0a0a0" stroke="#787878" strokeWidth=".7"/>
    <rect x="22" y="2" width="18" height="9" rx="1" fill="#8c8c8c" stroke="#666" strokeWidth=".7"/>
    <rect x="42" y="2" width="12" height="9" rx="1" fill="#a0a0a0" stroke="#787878" strokeWidth=".7"/>
    <rect x="2" y="13" width="12" height="9" rx="1" fill="#8c8c8c" stroke="#666" strokeWidth=".7"/>
    <rect x="16" y="13" width="18" height="9" rx="1" fill="#a0a0a0" stroke="#787878" strokeWidth=".7"/>
    <rect x="36" y="13" width="18" height="9" rx="1" fill="#8c8c8c" stroke="#666" strokeWidth=".7"/>
    <rect x="2" y="24" width="18" height="9" rx="1" fill="#a0a0a0" stroke="#787878" strokeWidth=".7"/>
    <rect x="22" y="24" width="18" height="9" rx="1" fill="#8c8c8c" stroke="#666" strokeWidth=".7"/>
    <rect x="42" y="24" width="12" height="9" rx="1" fill="#a0a0a0" stroke="#787878" strokeWidth=".7"/>
  </svg>
);

/* Старый город — 3 разных размера плитки вперемешку */
const OldTownSvg = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" fill="none">
    <rect x="2" y="2" width="20" height="11" rx="1" fill="#c2601a" stroke="#8a3e0e" strokeWidth=".7"/>
    <rect x="24" y="2" width="14" height="11" rx="1" fill="#d4782a" stroke="#a04e10" strokeWidth=".7"/>
    <rect x="40" y="2" width="14" height="11" rx="1" fill="#b35518" stroke="#8a3e0e" strokeWidth=".7"/>
    <rect x="2" y="15" width="11" height="11" rx="1" fill="#d4782a" stroke="#a04e10" strokeWidth=".7"/>
    <rect x="15" y="15" width="11" height="11" rx="1" fill="#b35518" stroke="#8a3e0e" strokeWidth=".7"/>
    <rect x="28" y="15" width="14" height="11" rx="1" fill="#c2601a" stroke="#8a3e0e" strokeWidth=".7"/>
    <rect x="44" y="15" width="10" height="11" rx="1" fill="#d4782a" stroke="#a04e10" strokeWidth=".7"/>
    <rect x="2" y="28" width="16" height="10" rx="1" fill="#b35518" stroke="#8a3e0e" strokeWidth=".7"/>
    <rect x="20" y="28" width="20" height="10" rx="1" fill="#d4782a" stroke="#a04e10" strokeWidth=".7"/>
    <rect x="42" y="28" width="12" height="10" rx="1" fill="#c2601a" stroke="#8a3e0e" strokeWidth=".7"/>
  </svg>
);

/* Колормикс — одинаковые кирпичи, но разных цветов */
const ColormixSvg = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" fill="none">
    <rect x="2" y="2" width="16" height="9" rx="1" fill="#e69b00" stroke="#c2601a" strokeWidth=".7"/>
    <rect x="20" y="2" width="16" height="9" rx="1" fill="#c2601a" stroke="#8a3e0e" strokeWidth=".7"/>
    <rect x="38" y="2" width="16" height="9" rx="1" fill="#8b4513" stroke="#6b3410" strokeWidth=".7"/>
    <rect x="2" y="13" width="16" height="9" rx="1" fill="#c2601a" stroke="#8a3e0e" strokeWidth=".7"/>
    <rect x="20" y="13" width="16" height="9" rx="1" fill="#8b4513" stroke="#6b3410" strokeWidth=".7"/>
    <rect x="38" y="13" width="16" height="9" rx="1" fill="#e69b00" stroke="#c2601a" strokeWidth=".7"/>
    <rect x="2" y="24" width="16" height="9" rx="1" fill="#8b4513" stroke="#6b3410" strokeWidth=".7"/>
    <rect x="20" y="24" width="16" height="9" rx="1" fill="#e69b00" stroke="#c2601a" strokeWidth=".7"/>
    <rect x="38" y="24" width="16" height="9" rx="1" fill="#c2601a" stroke="#8a3e0e" strokeWidth=".7"/>
  </svg>
);

/* Катушка — форма двутавра / кости, раскладка вперемешку */
const KatushkaSvg = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" fill="none">
    {/* Ряд 1: катушки горизонтально */}
    <path d="M3 2h12v4h-3v6h3v4H3v-4h3V6H3z" fill="#c2601a" stroke="#8a3e0e" strokeWidth=".6"/>
    <path d="M17 2h12v4h-3v6h3v4H17v-4h3V6h-3z" fill="#d4782a" stroke="#a04e10" strokeWidth=".6"/>
    <path d="M31 2h12v4h-3v6h3v4H31v-4h3V6h-3z" fill="#c2601a" stroke="#8a3e0e" strokeWidth=".6"/>
    <path d="M45 2h9v4h-2v6h2v4h-9v-4h2V6h-2z" fill="#d4782a" stroke="#a04e10" strokeWidth=".6"/>
    {/* Ряд 2: катушки со сдвигом */}
    <path d="M-4 20h12v4H5v6h3v4H-4v-4h3v-6h-3z" fill="#d4782a" stroke="#a04e10" strokeWidth=".6"/>
    <path d="M10 20h12v4h-3v6h3v4H10v-4h3v-6h-3z" fill="#c2601a" stroke="#8a3e0e" strokeWidth=".6"/>
    <path d="M24 20h12v4h-3v6h3v4H24v-4h3v-6h-3z" fill="#d4782a" stroke="#a04e10" strokeWidth=".6"/>
    <path d="M38 20h12v4h-3v6h3v4H38v-4h3v-6h-3z" fill="#c2601a" stroke="#8a3e0e" strokeWidth=".6"/>
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
                  <td style={{ width: 72, textAlign: "center" }}>{t.icon}</td>
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
