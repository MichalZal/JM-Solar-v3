const grants = [
  { value: '7 000 zł+', label: 'Dotacja na PV z magazynem energii lub ciepła' },
  { value: '6 000 zł', label: 'Dotacja na instalację PV' },
  { value: '16 000 zł', label: 'Dotacja na magazyn energii elektrycznej' },
  { value: '5 000 zł', label: 'Dotacja na magazyn ciepła' },
];

export default function Dotacje() {
  return (
    <section className="section dotacje fade-in" id="dotacje">
      <div className="tag tag--gold">Dotacja „Mój Prąd"</div>
      <h2 className="section__title">Twoja szansa na <span className="highlight highlight--gold">realne wsparcie</span></h2>

      <div className="dotacje__grid">
        {grants.map((g, i) => (
          <div key={i} className="dotacja-card">
            <div className="dotacja-card__value">{g.value}</div>
            <div className="dotacja-card__label">{g.label}</div>
          </div>
        ))}
      </div>

      <div className="dotacje__bottom">
        <p>Odbierz realne wsparcie i obniż koszt inwestycji. Zajmujemy się całą dokumentacją za Ciebie.</p>
        <a href="#kontakt" className="btn btn--primary">Umów spotkanie z doradcą</a>
      </div>
    </section>
  );
}
