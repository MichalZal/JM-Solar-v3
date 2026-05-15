interface CardProps {
  variant: 'solar' | 'heat';
  title: string;
  desc: string;
}

function ServiceCard({ variant, title, desc }: CardProps) {
  return (
    <div className={`service-card service-card--${variant}`}>
      <div className="service-card__top"></div>
      <div className="service-card__body">
        <div className="service-card__icon-box">{variant === 'solar' ? 'S' : 'H'}</div>
        <h3 className="service-card__title">{title}</h3>
        <div className="service-card__line"></div>
        <p className="service-card__desc">{desc}</p>
      </div>
    </div>
  );
}

const services: CardProps[] = [
  { variant: 'solar', title: 'Fotowoltaika', desc: 'Projektujemy i montujemy systemy PV dopasowane do Twojego zużycia energii. Każda instalacja to indywidualny projekt, nie szablon.' },
  { variant: 'heat', title: 'Magazyny energii', desc: 'Systemy BESS pozwalające przechowywać nadwyżki energii i korzystać z nich w nocy lub podczas awarii sieci. Prawdziwa niezależność.' },
  { variant: 'solar', title: 'Serwis i przeglądy', desc: 'Pełna opieka po montażu — regularne przeglądy, szybka reakcja w 24h i wsparcie techniczne przez cały okres użytkowania instalacji.' },
  { variant: 'heat', title: 'Audyt energetyczny', desc: 'Szczegółowa analiza zużycia energii w Twoim domu i dobór optymalnego systemu. Darmowa konsultacja i wycena — bez zobowiązań.' },
  { variant: 'solar', title: 'Dofinansowania', desc: 'Pomagamy pozyskać dotację z programu „Mój Prąd" oraz innych programów. Zajmujemy się całą dokumentacją za Ciebie — od A do Z.' },
  { variant: 'heat', title: 'Montaż w 2-3 dni', desc: 'Własne, w pełni przeszkolone ekipy montażowe. Szybka realizacja bez podwykonawców — od podpisania umowy do uruchomienia w zaledwie kilka dni.' },
];

export default function Services() {
  return (
    <section className="section services fade-in" id="uslugi">
      <div className="services__header">
        <div>
          <div className="tag tag--teal">Oferta</div>
          <h2 className="section__title">Kompletne rozwiązania<br /><span className="highlight highlight--teal">OZE dla Twojego domu</span></h2>
        </div>
        <p className="services__desc">
          Oferujemy kompleksową obsługę — od audytu energetycznego, przez projekt i montaż,
          po serwis i monitoring. Jeden partner dla całego procesu.
        </p>
      </div>

      <div className="services__grid">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
