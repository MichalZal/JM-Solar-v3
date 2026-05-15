export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span>Fotowoltaika i magazyny energii</span>
        </div>

        <h1 className="hero__title">
          Nie przepłacaj<br />
          <span className="hero__title-accent">za prąd.</span><br />
          Zainwestuj raz,<br />
          <span className="hero__title-em">oszczędzaj przez lata.</span>
        </h1>

        <p className="hero__desc">
          Montujemy fotowoltaikę i magazyny energii, które realnie obniżają rachunki.
          Przyjedziemy, policzymy, pokażemy Ci, ile naprawdę możesz zyskać.
        </p>

        <div className="hero__actions">
          <a href="#kontakt" className="btn btn--primary">Umów spotkanie z doradcą</a>
          <a href="#uslugi" className="btn btn--ghost">
            Nasze usługi
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M10 4l6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero-stat">
            <span className="hero-stat__num">680+</span>
            <span className="hero-stat__label">Realizacji</span>
          </div>
          <div className="hero-stat__dot"></div>
          <div className="hero-stat">
            <span className="hero-stat__num">120+</span>
            <span className="hero-stat__label">Opinii</span>
          </div>
          <div className="hero-stat__dot"></div>
          <div className="hero-stat">
            <span className="hero-stat__num">7+ lat</span>
            <span className="hero-stat__label">Doświadczenia</span>
          </div>
        </div>
      </div>

      <div className="hero__decor">
        <div className="hero__decor-circle hero__decor-circle--1"></div>
        <div className="hero__decor-circle hero__decor-circle--2"></div>
        <div className="hero__decor-line"></div>
      </div>
    </section>
  );
}
