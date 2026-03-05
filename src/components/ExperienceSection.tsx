import { AlertTriangle } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          Наш <span className="text-gradient">опыт</span>
        </h2>
        <div className="space-y-6">
          {[
            { title: "Отказ от укладки без геотекстиля", text: "На суглинках песок заиливается за 1–2 сезона, плитка проседает. Экономия 0,5–1 р./м² оборачивается переделкой за 30–40 р./м²." },
            { title: "Отказ от вибролитой плитки", text: "Дешевле на 10–15%, но закрытая пористая структура разрушается за 3–4 зимы. Используем только вибропрессованную по СТБ 1071." },
            { title: "Клинкер — только на бетон", text: "Клинкерная брусчатка 5–7 см без замков на ЦПС расшатывается через год. С 2024 года — только клеевая фиксация на бетонном основании." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-card rounded-lg p-6 border border-border shadow-card">
              <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
