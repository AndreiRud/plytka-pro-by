const tileTypes = [
  { name: "Кирпичик", thickness: "6–8 см", purpose: "Дорожки, отмостка, пешеходные зоны", price: "от 15" },
  { name: "Старый город", thickness: "6–8 см", purpose: "Дворовые площадки, зоны отдыха", price: "от 16" },
  { name: "Колормикс", thickness: "6–8 см", purpose: "Декоративное мощение в несколько цветов", price: "от 16" },
  { name: "Катушка", thickness: "8 см", purpose: "Площадки средней нагрузки", price: "от 17" },
  { name: "Клинкерная", thickness: "5–7 см", purpose: "Премиум-покрытие, парадные зоны", price: "от 30" },
  { name: "Гранитная", thickness: "5–10 см", purpose: "Въезды для грузового транспорта", price: "от 30" },
];

const TileTypesSection = () => {
  return (
    <section id="tile-types" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
          Виды тротуарной <span className="text-gradient">плитки</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-body">
          Подбираем покрытие под нагрузку и бюджет
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-lg overflow-hidden shadow-card border border-border">
            <thead>
              <tr className="bg-gradient-dark">
                <th className="text-left p-4 font-heading font-semibold text-secondary-foreground text-sm">Вид плитки</th>
                <th className="text-left p-4 font-heading font-semibold text-secondary-foreground text-sm">Толщина</th>
                <th className="text-left p-4 font-heading font-semibold text-secondary-foreground text-sm">Назначение</th>
                <th className="text-right p-4 font-heading font-semibold text-secondary-foreground text-sm">Укладка, бел. руб./м²</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tileTypes.map((t, i) => (
                <tr key={i} className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-heading font-bold text-sm">{t.name}</td>
                  <td className="p-4 text-muted-foreground text-sm font-body">{t.thickness}</td>
                  <td className="p-4 text-muted-foreground text-sm font-body">{t.purpose}</td>
                  <td className="p-4 text-right font-heading font-bold text-primary text-sm">{t.price}</td>
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
