const tileTypes = [
  { name: "Кирпичик", thickness: "6–8 см", purpose: "Дорожки, отмостка, пешеходные зоны", price: "от 15" },
  { name: "Старый город", thickness: "6–8 см", purpose: "Дворовые площадки, зоны отдыха", price: "от 16" },
  { name: "Колормикс", thickness: "6–8 см", purpose: "Декоративное мощение в несколько цветов", price: "от 16" },
  { name: "Катушка", thickness: "8 см", purpose: "Площадки средней нагрузки", price: "от 17" },
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
                <th>Вид плитки</th>
                <th>Толщина</th>
                <th>Назначение</th>
                <th>Укладка, бел. руб./м²</th>
              </tr>
            </thead>
            <tbody>
              {tileTypes.map((t, i) => (
                <tr key={i}>
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
