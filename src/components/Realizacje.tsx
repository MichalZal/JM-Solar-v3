export default function Realizacje() {
  return (
    <section className="section realizacje fade-in" id="realizacje">
      <div className="tag tag--teal">Nasze realizacje</div>
      <h2 className="section__title">Zaufanie budujemy <span className="highlight highlight--teal">w praktyce</span></h2>
      <p className="realizacje__desc">Każda instalacja to efekt rozmowy, dokładnych wyliczeń i odpowiedzialnego podejścia. Bez pośpiechu, bez kompromisów.</p>

      <div className="realizacje__grid">
        <div className="realizacja-card">
          <div className="realizacja-card__badge">Solar</div>
          <h3 className="realizacja-card__title">Fotowoltaika 5,4 kW</h3>
          <span className="realizacja-card__sub">Bliźniacza zabudowa</span>
          <ul className="realizacja-card__list">
            <li><span>Moc:</span> 2 × 2,7 kW</li>
            <li><span>Moduły:</span> Full Black 450W</li>
            <li><span>Inwerter:</span> hybrydowy</li>
            <li><span>Układ:</span> wschód–zachód</li>
            <li><span>Produkcja:</span> ok. 5 000 kWh/rok</li>
          </ul>
        </div>
        <div className="realizacja-card">
          <div className="realizacja-card__badge realizacja-card__badge--heat">Hybryda</div>
          <h3 className="realizacja-card__title">System hybrydowy 5,4 kW</h3>
          <span className="realizacja-card__sub">+ magazyn Kehua 10 kWh</span>
          <ul className="realizacja-card__list">
            <li><span>Magazyn:</span> Kehua Tech 10 kWh</li>
            <li><span>Tryb:</span> off-grid / hybrydowy</li>
            <li><span>Zastosowanie:</span> zasilanie budowy + dom</li>
            <li><span>Efekt:</span> pełna niezależność od sieci</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
