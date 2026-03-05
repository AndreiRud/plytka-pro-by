import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Сколько стоит укладка тротуарной плитки в Пружанах за м²?",
    a: "Стоимость от 15 бел. руб./м² на готовое основание. Итоговая цена зависит от типа плитки, схемы раскладки, вида основания и необходимости бордюров и водоотвода. Для автомобильной площадки — от 18 р./м², сложный рисунок — от 20 р./м², гранитная брусчатка — от 30 р./м²."
  },
  {
    q: "Какой срок гарантии на укладку?",
    a: "Гарантия до 5 лет. Покрывает просадку покрытия, расхождение швов и разрушение элементов при соблюдении условий эксплуатации. Фиксируется в договоре."
  },
  {
    q: "Сколько времени занимает укладка?",
    a: "50 м² дорожек — 3–5 дней, 100 м² двора — 7–10 дней, 200 м² и более — от 14 дней. Зависит от сложности рисунка и земляных работ."
  },
  {
    q: "Можно ли укладывать зимой?",
    a: "При температуре ниже +5°C не рекомендуется: ЦПС и бетон не набирают прочность. Лучшее время — апрель–октябрь."
  },
  {
    q: "Какую плитку выбрать для парковки?",
    a: "Вибропрессованная толщиной от 8 см (Кирпичик, Катушка) на щебне 25–30 см. Для грузового транспорта — гранитная брусчатка на армированном бетоне. Плитка 6 см не рассчитана на авто."
  },
  {
    q: "Нужен ли бордюр?",
    a: "Обязателен. Без него покрытие «расползается» за 1–2 сезона. Стоимость — от 7 бел. руб./м.п."
  },
  {
    q: "Можно ли положить на старый асфальт?",
    a: "Да, если асфальт ровный, без просадок и трещин более 5 мм. Поверх — слой ЦПС 3–5 см, затем плитка."
  },
  {
    q: "Работаете ли вы с материалами заказчика?",
    a: "Да. Также помогаем с закупкой и доставкой. При заказе под ключ доставка входит в стоимость."
  },
  {
    q: "Нужен ли дренаж?",
    a: "При высоком УГВ (выше 0,5 м) и на глинистых грунтах — обязателен. Мастер определяет необходимость при осмотре участка."
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
          Частые <span className="text-gradient">вопросы</span>
        </h2>
        <div className="max-w-3xl mx-auto mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border shadow-card px-6">
                <AccordionTrigger className="font-heading font-semibold text-sm md:text-base text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
