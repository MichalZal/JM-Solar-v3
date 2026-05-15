export default function Cta() {
  return (
    <div className="cta fade-in">
      <div className="cta__content">
        <h2 className="cta__title">
          Nie przepłacaj za prąd.<br /><span className="cta__title-em">Zainwestuj raz,</span> oszczędzaj przez lata
        </h2>
        <p className="cta__desc">Darmowy audyt i wycena. Montaż w 2-3 dni. Kompleksowy serwis i gwarancja.</p>
      </div>
      <div className="cta__actions">
        <a href="#kontakt" className="btn btn--dark">Umów bezpłatną wizję</a>
        <a href="tel:+48518337406" className="btn btn--ghost btn--ghost-light">+48 518 337 406</a>
      </div>
    </div>
  );
}
