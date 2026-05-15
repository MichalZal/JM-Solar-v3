const steps = [
  { num: '01', title: 'Darmowy audyt i wycena', desc: 'Przyjeżdżamy, analizujemy Twoje rachunki i potrzeby. Dostajesz jasne wyliczenia — bez presji i marketingowych sztuczek.' },
  { num: '02', title: 'Projekt i oferta', desc: 'Przygotowujemy indywidualny projekt instalacji i konkretną wycenę. Doradzamy w zakresie dotacji i dofinansowań.' },
  { num: '03', title: 'Montaż w 2-3 dni', desc: 'Nasze ekipy montują instalację sprawnie i czysto. Zajmujemy się wszystkimi formalnościami i zgłoszeniami.' },
  { num: '04', title: 'Serwis i monitoring', desc: 'Uruchamiamy system, szkolimy z obsługi i zapewniamy stałe wsparcie. Jesteśmy z Tobą również po instalacji.' },
];

export default function Process() {
  return (
    <section className="section process fade-in">
      <div className="tag tag--teal">Jak działamy</div>
      <h2 className="section__title" style={{ maxWidth: 540 } as React.CSSProperties}>
        Zacznij od rozmowy,<br /><span className="highlight highlight--teal">nie od decyzji</span>
      </h2>

      <div className="process__track">
        <div className="process__line"></div>
        {steps.map((s) => (
          <div key={s.num} className="step">
            <div className="step__marker"><span>{s.num}</span></div>
            <div className="step__content">
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
