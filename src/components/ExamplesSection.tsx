import exampleWork1 from "@/assets/example-work1.jpg";
import exampleWork2 from "@/assets/example-work2.jpg";
import processImg from "@/assets/process-compacting.jpg";

const examples = [
  {
    img: exampleWork1,
    title: "Двор частного дома, 120 м²",
    desc: "Плитка Старый город, 6 и 8 см. Щебёночное основание, 4 точечных дождеприёмника. 8 рабочих дней.",
  },
  {
    img: exampleWork2,
    title: "Парковка на 8 авто, 250 м²",
    desc: "Кирпичик 8 см на щебёночном основании 30 см. Продольные лотки для ливневых вод. 16 рабочих дней.",
  },
  {
    img: processImg,
    title: "Перекладка просевшей плитки, 90 м²",
    desc: "Причина: отсутствие геотекстиля. Полная замена основания, повторное использование плитки. 10 рабочих дней.",
  },
];

const ExamplesSection = () => {
  return (
    <section id="examples" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
          Примеры <span className="text-gradient">работ</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-body">
          Реальные объекты с описанием материалов и сроков
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {examples.map((e, i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-shadow group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold mb-2">{e.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
