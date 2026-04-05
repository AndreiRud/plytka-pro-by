import { useEffect, useRef } from "react";
import { Calculator } from "lucide-react";
import "../styles.css";

const priceData = [
  {
    group: "Подготовительные работы",
    items: [
      {
        name: "Выемка грунта вручную до 20 см",
        unit: "м²",
        price: 5,
        details: [
          "Копание с погрузкой в тачку",
          "Вывоз до 20 м",
        ],
      },
      {
        name: "Основание из гравия до 20 см",
        unit: "м²",
        price: 3,
        details: [
          "Погрузка гравия с подвозом на тачке до 20 м",
          "Разравнивание",
          "Уплотнение виброплитой",
        ],
      },
    ],
  },
  {
    group: "Установка бордюра",
    items: [
      {
        name: "Установка тротуарного бордюра (прямые)",
        unit: "м.п.",
        price: 10,
        details: [
          "Разметка линии установки бордюра",
          "Рытье траншеи (канавы) под бордюр",
          "Замешивание бетона",
          "Устройство бетонного основания (подбетонки)",
          "Поднос бордюрных камней до 20 м",
          "Укладка бордюрных камней на раствор",
          "Выравнивание бордюра по уровню и шнуру (осевая, высотная)",
          "Фиксация бордюра с боков бетонной смесью («замок» или забутовка)",
          "Обратная засыпка грунта и уплотнение вокруг бордюра",
          "Очистка бордюра от остатков раствора",
        ],
      },
      {
        name: "Установка тротуарного бордюра (кривые)",
        unit: "м.п.",
        price: 12,
        details: [
          "Разметка линии установки бордюра",
          "Рытье траншеи (канавы) под бордюр",
          "Замешивание бетона",
          "Устройство бетонного основания (подбетонки)",
          "Запил бордюрного камня",
          "Поднос бордюрных камней до 20 м",
          "Укладка бордюрных камней на раствор",
          "Выравнивание бордюра по уровню и шнуру (осевая, высотная)",
          "Фиксация бордюра с боков бетонной смесью («замок» или забутовка)",
          "Обратная засыпка грунта и уплотнение вокруг бордюра",
          "Очистка бордюра от остатков раствора",
        ],
      },
      {
        name: "Установка дорожного борта (прямые)",
        unit: "м.п.",
        price: 15,
        details: [
          "Разметка линии установки бордюра",
          "Рытье траншеи (канавы) под бордюр",
          "Замешивание бетона",
          "Устройство бетонного основания (подбетонки)",
          "Поднос бордюрных камней до 20 м",
          "Укладка бордюрных камней на раствор",
          "Выравнивание бордюра по уровню и шнуру (осевая, высотная)",
          "Фиксация бордюра с боков бетонной смесью («замок» или забутовка)",
          "Обратная засыпка грунта и уплотнение вокруг бордюра",
          "Очистка бордюра от остатков раствора",
        ],
      },
      {
        name: "Установка дорожного борта (кривые)",
        unit: "м.п.",
        price: 17,
        details: [
          "Разметка линии установки бордюра",
          "Рытье траншеи (канавы) под бордюр",
          "Замешивание бетона",
          "Устройство бетонного основания (подбетонки)",
          "Запил бордюрного камня",
          "Поднос бордюрных камней до 20 м",
          "Укладка бордюрных камней на раствор",
          "Выравнивание бордюра по уровню и шнуру (осевая, высотная)",
          "Фиксация бордюра с боков бетонной смесью («замок» или забутовка)",
          "Обратная засыпка грунта и уплотнение вокруг бордюра",
          "Очистка бордюра от остатков раствора",
        ],
      },
    ],
  },
  {
    group: "Укладка плитки",
    items: [
      {
        name: "Укладка плитки Кирпичик или Катушка (прямые)",
        unit: "м²",
        price: 20,
        details: [
          "Выравнивание основания (в среднем не более 10 см)",
          "Уплотнение поверхности (виброплитой) с дополнительной досыпкой песка или гравия",
          "Установка направляющих и маяков для уклона",
          "Устройство подушки из цементно-песчаной смеси (ЦПС) или песка",
          "Поднос плитки до 20 м",
          "Укладка плитки на подготовленное основание",
          "Регулировка уровня и уклона (простукивание киянкой)",
          "Заполнение швов песком или ЦПС",
          "Уплотнение поверхности (виброплитой)",
          "Очистка плитки от остатков смеси",
        ],
      },
      {
        name: "Укладка плитки Старый город или Колормикс (прямые)",
        unit: "м²",
        price: 21,
        details: [
          "Выравнивание основания с досыпкой гравия (в среднем не более 10 см)",
          "Уплотнение поверхности (виброплитой) с дополнительной досыпкой песка или гравия",
          "Установка направляющих и маяков для уклона",
          "Устройство подушки из цементно-песчаной смеси (ЦПС) или песка",
          "Поднос плитки до 20 м",
          "Укладка плитки на подготовленное основание",
          "Регулировка уровня и уклона (простукивание киянкой)",
          "Заполнение швов песком или ЦПС",
          "Уплотнение поверхности (виброплитой)",
          "Очистка плитки от остатков смеси",
        ],
      },
      {
        name: "Укладка плитки Кирпичик или Катушка (кривые)",
        unit: "м²",
        price: 22,
        details: [
          "Выравнивание основания (в среднем не более 10 см)",
          "Уплотнение поверхности (виброплитой) с дополнительной досыпкой песка или гравия",
          "Установка направляющих и маяков для уклона",
          "Устройство подушки из цементно-песчаной смеси (ЦПС) или песка",
          "Поднос плитки до 20 м",
          "Укладка плитки на подготовленное основание",
          "Регулировка уровня и уклона (простукивание киянкой)",
          "Заполнение швов песком или ЦПС",
          "Уплотнение поверхности (виброплитой)",
          "Очистка плитки от остатков смеси",
        ],
      },
      {
        name: "Укладка плитки Старый город или Колормикс (кривые)",
        unit: "м²",
        price: 23,
        details: [
          "Выравнивание основания с досыпкой гравия (в среднем не более 10 см)",
          "Уплотнение поверхности (виброплитой) с дополнительной досыпкой песка или гравия",
          "Установка направляющих и маяков для уклона",
          "Устройство подушки из цементно-песчаной смеси (ЦПС) или песка",
          "Поднос плитки до 20 м",
          "Укладка плитки на подготовленное основание",
          "Регулировка уровня и уклона (простукивание киянкой)",
          "Заполнение швов песком или ЦПС",
          "Уплотнение поверхности (виброплитой)",
          "Очистка плитки от остатков смеси",
        ],
      },
      {
        name: "Запил",
        unit: "м.п.",
        price: 18,
        details: [
          "Места где меняется ширина площадки или дорожки, идёт под углом, и требуется запиливать каждую плитку",
        ],
      },
    ],
  },
  {
    group: "Демонтаж",
    items: [
      {
        name: "Демонтаж тротуарного борта",
        unit: "м.п.",
        price: 4,
        details: [
          "Разрушение бетонного «замка» (боковой фиксации) с помощью лома или отбойного молотка",
          "Подкоп под бордюр и расшатывание камня",
          "Извлечение бордюра из траншеи",
          "Очистка от остатков бетона (при условии откалывания за 1–2 удара кувалдочки)",
          "Транспортировка до места складирования с разгрузкой, до 20 м",
        ],
      },
      {
        name: "Демонтаж дорожного борта",
        unit: "м.п.",
        price: 8,
        details: [
          "Разрушение бетонного «замка» (боковой фиксации) с помощью лома или отбойного молотка",
          "Подкоп под бордюр и расшатывание камня",
          "Извлечение бордюра из траншеи",
          "Очистка от остатков бетона (при условии откалывания за 1–2 удара кувалдочки)",
          "Транспортировка до места складирования с разгрузкой, до 20 м",
        ],
      },
      {
        name: "Демонтаж тротуарной плитки",
        unit: "м²",
        price: 5,
        details: [
          "Извлечение плитки вручную",
          "Транспортировка до места складирования с разгрузкой, до 20 м",
        ],
      },
    ],
  },
];

const PriceCalculator = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const inputs = el.querySelectorAll<HTMLInputElement>(".calc-qty");
    const list = el.querySelector<HTMLDivElement>(".calc-summary-list")!;
    const empty = el.querySelector<HTMLParagraphElement>(".calc-summary-empty")!;
    const total = el.querySelector<HTMLSpanElement>(".calc-total-value")!;

    el.querySelectorAll<HTMLButtonElement>(".calc-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const details = btn.closest(".calc-row")!.querySelector<HTMLDivElement>(".calc-details")!;
        const isOpen = details.style.display !== "none";
        details.style.display = isOpen ? "none" : "block";
        btn.textContent = isOpen ? "Что входит ▼" : "Свернуть ▲";
      });
    });

    function update() {
      let sum = 0;
      let html = "";
      const allItems = priceData.flatMap((g) => g.items);

      inputs.forEach((inp) => {
        const qty = parseInt(inp.value) || 0;
        const i = parseInt(inp.dataset.idx!);
        const item = allItems[i];
        const row = inp.closest(".calc-row") as HTMLDivElement;

        if (qty > 0) {
          const lineTotal = qty * item.price;
          sum += lineTotal;
          html +=
            '<div class="calc-summary-row">' +
              '<span class="calc-summary-name">' + item.name + "</span>" +
              '<span class="calc-summary-val">' +
                qty + " " + item.unit + " × " + item.price + " = " + lineTotal.toFixed(0) + " р." +
              "</span>" +
            "</div>";
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

    el.querySelectorAll<HTMLButtonElement>(".calc-btn-minus").forEach((btn) => {
      btn.addEventListener("click", () => {
        const inp = btn.parentElement!.querySelector("input") as HTMLInputElement;
        inp.value = String(Math.max(0, (parseInt(inp.value) || 0) - 1));
        update();
      });
    });

    el.querySelectorAll<HTMLButtonElement>(".calc-btn-plus").forEach((btn) => {
      btn.addEventListener("click", () => {
        const inp = btn.parentElement!.querySelector("input") as HTMLInputElement;
        inp.value = String((parseInt(inp.value) || 0) + 1);
        update();
      });
    });

    inputs.forEach((inp) => inp.addEventListener("input", update));
    update();
  }, []);

  let globalIdx = 0;

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

          <p className="calc-subtitle">
            Цены обновлены: 01.03.2026 г. • Не является публичной офертой
          </p>
        </div>

        <div className="calc-grid">

          <div className="calc-items">
            {priceData.map((group) => (
              <div key={group.group} className="calc-group">

                <h3 className="calc-group-title">{group.group}</h3>

                {group.items.map((item) => {
                  const idx = globalIdx++;
                  return (
                    <div key={idx} className="calc-row">

                      <div className="calc-row-top">
                        <div className="calc-row-info">
                          <p className="calc-row-name">{item.name}</p>
                          <p className="calc-row-price">
                            от {item.price} бел. руб./{item.unit}
                          </p>
                          <button type="button" className="calc-toggle">
                            Что входит ▼
                          </button>
                        </div>

                        <div className="calc-controls">
                          <button className="calc-btn-minus" type="button">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14" />
                            </svg>
                          </button>

                          <input
                            type="number"
                            min={0}
                            defaultValue={0}
                            className="calc-qty"
                            data-idx={idx}
                          />

                          <button className="calc-btn-plus" type="button">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="calc-details" style={{ display: "none" }}>
                        <ul className="calc-details-list">
                          {item.details.map((d, di) => (
                            <li key={di}>{d}</li>
                          ))}
                        </ul>
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

              <p className="calc-summary-empty">
                Добавьте позиции из прайса, чтобы рассчитать стоимость
              </p>

              <div className="calc-summary-list" style={{ display: "none" }}></div>

              <div className="calc-total-row">
                <span className="calc-total-label">Итого от:</span>
                <span className="calc-total-value">0 бел. руб.</span>
              </div>

              <a href="tel:+375291234567" className="calc-cta">
                Уточнить стоимость
              </a>

              <p className="calc-note">
                Точная стоимость определяется после осмотра объекта
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
