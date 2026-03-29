import { useEffect, useRef } from "react";
import { Calculator } from "lucide-react";

const priceItems = [
  { name: "Укладка тротуарной плитки на готовое основание", unit: "м²", price: 15, category: "Укладка" },
  { name: "Укладка плитки, круговая выкладка", unit: "м²", price: 20, category: "Укладка" },
  { name: "Укладка плитки, сложный рисунок", unit: "м²", price: 20, category: "Укладка" },
  { name: "Укладка плитки Кирпичик", unit: "м²", price: 15, category: "Укладка" },
  { name: "Укладка плитки Старый город", unit: "м²", price: 16, category: "Укладка" },
  { name: "Укладка плитки Колормикс", unit: "м²", price: 16, category: "Укладка" },
  { name: "Укладка плитки Катушка", unit: "м²", price: 17, category: "Укладка" },
  { name: "Укладка под пешеходную зону", unit: "м²", price: 17, category: "Укладка" },
  { name: "Укладка под автомобиль (до 3,5 т)", unit: "м²", price: 18, category: "Укладка" },
  { name: "Укладка (несколько цветов)", unit: "м²", price: 20, category: "Укладка" },
  { name: "Мощение гранитной брусчаткой на бетон", unit: "м²", price: 30, category: "Укладка" },
  { name: "Установка тротуарного бордюра (прямые)", unit: "м.п.", price: 7, category: "Бордюры" },
  { name: "Установка тротуарного бордюра (кривые)", unit: "м.п.", price: 8, category: "Бордюры" },
  { name: "Установка дорожного борта (прямые)", unit: "м.п.", price: 9, category: "Бордюры" },
  { name: "Установка дорожного борта (кривые)", unit: "м.п.", price: 10, category: "Бордюры" },
  { name: "Основание из асфальтогранулята", unit: "м²", price: 2.5, category: "Основание" },
  { name: "Песчаное основание до 20 см", unit: "м²", price: 2, category: "Основание" },
  { name: "Монтаж бетонного основания", unit: "м²", price: 20, category: "Основание" },
  { name: "Монтаж основания из щебня", unit: "м²", price: 3, category: "Основание" },
  { name: "Подрезка тротуарной плитки", unit: "м.п.", price: 5, category: "Дополнительно" },
  { name: "Прокладка труб для отвода воды", unit: "м.п.", price: 10, category: "Дополнительно" },
  { name: "Установка дренажа", unit: "м.п.", price: 15, category: "Дополнительно" },
  { name: "Установка продольных дождеприёмников", unit: "м.п.", price: 11, category: "Дополнительно" },
  { name: "Установка точечного дождеприёмника", unit: "шт", price: 12, category: "Дополнительно" },
  { name: "Демонтаж тротуарного борта", unit: "м.п.", price: 4, category: "Демонтаж" },
  { name: "Демонтаж дорожного борта", unit: "м.п.", price: 5, category: "Демонтаж" },
  { name: "Демонтаж тротуарной плитки", unit: "м²", price: 5, category: "Демонтаж" },
  { name: "Выемка грунта вручную", unit: "м³", price: 30, category: "Земляные работы" },
  { name: "Приготовление смесей вручную", unit: "м³", price: 40, category: "Земляные работы" },
];

const categories = [...new Set(priceItems.map(i => i.category))];

const PriceCalculator = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // --- Pure JS calculator logic ---
    const tabBtns = root.querySelectorAll<HTMLButtonElement>("[data-tab-btn]");
    const tabPanels = root.querySelectorAll<HTMLDivElement>("[data-tab-panel]");
    const inputs = root.querySelectorAll<HTMLInputElement>("[data-qty-input]");
    const minusBtns = root.querySelectorAll<HTMLButtonElement>("[data-minus]");
    const plusBtns = root.querySelectorAll<HTMLButtonElement>("[data-plus]");
    const summaryList = root.querySelector<HTMLDivElement>("[data-summary-list]")!;
    const summaryEmpty = root.querySelector<HTMLParagraphElement>("[data-summary-empty]")!;
    const totalEl = root.querySelector<HTMLSpanElement>("[data-total]")!;

    function switchTab(cat: string) {
      tabBtns.forEach(btn => {
        const active = btn.dataset.tabBtn === cat;
        btn.className = active
          ? "px-4 py-2 rounded-lg font-heading font-semibold text-sm transition-all bg-gradient-warm text-primary-foreground shadow-hero"
          : "px-4 py-2 rounded-lg font-heading font-semibold text-sm transition-all bg-card text-foreground border border-border hover:border-primary/30";
      });
      tabPanels.forEach(p => {
        p.style.display = p.dataset.tabPanel === cat ? "" : "none";
      });
    }

    function recalc() {
      let total = 0;
      let html = "";
      inputs.forEach(inp => {
        const qty = parseInt(inp.value) || 0;
        const idx = parseInt(inp.dataset.qtyInput!);
        const item = priceItems[idx];
        const row = inp.closest("[data-row]") as HTMLDivElement;
        if (qty > 0) {
          total += item.price * qty;
          html += `<div class="flex justify-between text-sm font-body"><span class="text-muted-foreground truncate mr-2">${item.name}</span><span class="font-semibold whitespace-nowrap">${qty} ${item.unit} × ${item.price} = ${(qty * item.price).toFixed(0)} р.</span></div>`;
          row.classList.add("bg-primary/5");
          row.classList.remove("hover:bg-muted/50");
        } else {
          row.classList.remove("bg-primary/5");
          row.classList.add("hover:bg-muted/50");
        }
      });
      summaryList.innerHTML = html;
      summaryList.style.display = html ? "" : "none";
      summaryEmpty.style.display = html ? "none" : "";
      totalEl.textContent = total.toFixed(0) + " бел. руб.";
    }

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tabBtn!));
    });

    minusBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const inp = btn.parentElement!.querySelector("input") as HTMLInputElement;
        inp.value = String(Math.max(0, (parseInt(inp.value) || 0) - 1));
        recalc();
      });
    });

    plusBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const inp = btn.parentElement!.querySelector("input") as HTMLInputElement;
        inp.value = String((parseInt(inp.value) || 0) + 1);
        recalc();
      });
    });

    inputs.forEach(inp => {
      inp.addEventListener("input", recalc);
    });

    // Init: show first tab
    switchTab(categories[0]);
    recalc();
  }, []);

  return (
    <section id="calculator" className="py-20 bg-muted">
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-warm text-primary-foreground rounded-full px-4 py-1.5 mb-4">
            <Calculator className="w-4 h-4" />
            <span className="font-heading font-semibold text-sm">Калькулятор</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Рассчитайте <span className="text-gradient">стоимость работ</span>
          </h2>
          <p className="text-muted-foreground mt-3 font-body">Цены обновлены: 01.03.2026 г. • Не является публичной офертой</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(cat => (
                <button key={cat} data-tab-btn={cat} className="px-4 py-2 rounded-lg font-heading font-semibold text-sm transition-all bg-card text-foreground border border-border hover:border-primary/30">
                  {cat}
                </button>
              ))}
            </div>

            {/* All tab panels rendered in HTML, hidden/shown via JS */}
            {categories.map(cat => (
              <div key={cat} data-tab-panel={cat} className="bg-card rounded-lg border border-border overflow-hidden" style={{ display: "none" }}>
                <div className="divide-y divide-border">
                  {priceItems.map((item, idx) => {
                    if (item.category !== cat) return null;
                    return (
                      <div key={idx} data-row="" className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/50">
                        <div className="flex-1 min-w-0">
                          <p className="font-body text-sm md:text-base font-medium truncate">{item.name}</p>
                          <p className="text-muted-foreground text-xs mt-0.5">от {item.price} бел. руб./{item.unit}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button data-minus="" className="w-8 h-8 rounded-md bg-muted flex items-center justify-center hover:bg-border transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                          </button>
                          <input type="number" min={0} defaultValue={0} data-qty-input={idx} className="w-16 h-8 text-center rounded-md border border-border bg-background font-heading font-semibold text-sm" />
                          <button data-plus="" className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 bg-card rounded-lg border border-border p-6 shadow-card">
              <h3 className="font-heading font-bold text-lg mb-4">Ваша смета</h3>
              <p data-summary-empty="" className="text-muted-foreground text-sm font-body">Добавьте позиции из прайса, чтобы рассчитать стоимость</p>
              <div data-summary-list="" className="space-y-3 mb-6" style={{ display: "none" }}></div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-heading font-bold text-lg">Итого от:</span>
                  <span data-total="" className="text-2xl font-black font-heading text-gradient">0 бел. руб.</span>
                </div>
              </div>
              <a href="tel:+375291234567" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-warm text-primary-foreground font-heading font-bold px-6 py-3 rounded-lg shadow-hero hover:opacity-90 transition-opacity">
                Уточнить стоимость
              </a>
              <p className="text-xs text-muted-foreground text-center mt-3 font-body">Точная стоимость определяется после осмотра объекта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
