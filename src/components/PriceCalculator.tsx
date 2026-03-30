import { useEffect, useRef } from "react";
import { Calculator } from "lucide-react";
import "../styles.css";

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
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const tabs = el.querySelectorAll<HTMLButtonElement>(".calc-tab");
    const panels = el.querySelectorAll<HTMLDivElement>(".calc-panel");
    const inputs = el.querySelectorAll<HTMLInputElement>(".calc-qty");
    const list = el.querySelector<HTMLDivElement>(".calc-summary-list")!;
    const empty = el.querySelector<HTMLParagraphElement>(".calc-summary-empty")!;
    const total = el.querySelector<HTMLSpanElement>(".calc-total-value")!;

    function showTab(cat: string) {
      tabs.forEach(t => t.classList.toggle("active", t.dataset.cat === cat));
      panels.forEach(p => p.style.display = p.dataset.cat === cat ? "" : "none");
    }

    function update() {
      let sum = 0;
      let html = "";
      inputs.forEach(inp => {
        const qty = parseInt(inp.value) || 0;
        const i = parseInt(inp.dataset.idx!);
        const item = priceItems[i];
        const row = inp.closest(".calc-row") as HTMLDivElement;
        if (qty > 0) {
          sum += item.price * qty;
          html += '<div class="calc-summary-row"><span class="calc-summary-name">' + item.name + '</span><span class="calc-summary-val">' + qty + " " + item.unit + " × " + item.price + " = " + (qty * item.price).toFixed(0) + " р.</span></div>";
          row.classList.add("selected");
        } else {
          row.classList.remove("selected");
        }
      });
      list.innerHTML = html;
      list.style.display = html ? "" : "none";
      empty.style.display = html ? "none" : "";
      total.textContent = sum.toFixed(0) + " бел. руб.";
    }

    tabs.forEach(t => t.addEventListener("click", () => showTab(t.dataset.cat!)));

    el.querySelectorAll<HTMLButtonElement>(".calc-btn-minus").forEach(btn => {
      btn.addEventListener("click", () => {
        const inp = btn.parentElement!.querySelector("input") as HTMLInputElement;
        inp.value = String(Math.max(0, (parseInt(inp.value) || 0) - 1));
        update();
      });
    });

    el.querySelectorAll<HTMLButtonElement>(".calc-btn-plus").forEach(btn => {
      btn.addEventListener("click", () => {
        const inp = btn.parentElement!.querySelector("input") as HTMLInputElement;
        inp.value = String((parseInt(inp.value) || 0) + 1);
        update();
      });
    });

    inputs.forEach(inp => inp.addEventListener("input", update));
    showTab(categories[0]);
    update();
  }, []);

  return (
    <section id="calculator" className="calc-section">
      <div className="container" ref={root}>
        <div className="calc-header">
          <div className="calc-badge">
            <Calculator size={16} />
            <span>Калькулятор</span>
          </div>
          <h2 className="calc-title">
            Рассчитайте <span className="text-gradient">стоимость работ</span>
          </h2>
          <p className="calc-subtitle">Цены обновлены: 01.03.2026 г. • Не является публичной офертой</p>
        </div>

        <div className="calc-grid">
          <div>
            <div className="calc-tabs">
              {categories.map(cat => (
                <button key={cat} className="calc-tab" data-cat={cat}>{cat}</button>
              ))}
            </div>

            {categories.map(cat => (
              <div key={cat} className="calc-panel" data-cat={cat} style={{ display: "none" }}>
                {priceItems.map((item, idx) => {
                  if (item.category !== cat) return null;
                  return (
                    <div key={idx} className="calc-row">
                      <div className="calc-row-info">
                        <p className="calc-row-name">{item.name}</p>
                        <p className="calc-row-price">от {item.price} бел. руб./{item.unit}</p>
                      </div>
                      <div className="calc-controls">
                        <button className="calc-btn-minus">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>
                        </button>
                        <input type="number" min={0} defaultValue={0} className="calc-qty" data-idx={idx} />
                        <button className="calc-btn-plus">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div>
            <div className="calc-summary">
              <h3>Ваша смета</h3>
              <p className="calc-summary-empty">Добавьте позиции из прайса, чтобы рассчитать стоимость</p>
              <div className="calc-summary-list" style={{ display: "none" }}></div>
              <div className="calc-total-row">
                <span className="calc-total-label">Итого от:</span>
                <span className="calc-total-value">0 бел. руб.</span>
              </div>
              <a href="tel:+375291234567" className="calc-cta">Уточнить стоимость</a>
              <p className="calc-note">Точная стоимость определяется после осмотра объекта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
