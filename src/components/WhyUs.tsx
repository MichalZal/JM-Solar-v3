const items = [
  { badge: '01', title: 'Bez pośpiechu, z pełną odpowiedzialnością', desc: 'Montaż dopasowany do każdego dachu, indywidualne projekty, nie gotowe szablony. Jasna komunikacja na każdym etapie.' },
  { badge: '02', title: 'Klient to nie numer w kolejce', desc: 'Rodzinna firma z tradycją. Każdy montaż nadzorowany osobiście przez właściciela. Stały kontakt z doradcą.' },
  { badge: '03', title: 'Opieka po montażu', desc: 'Szybka reakcja w 24h, serwis zgodny z gwarancją producenta, spokój i pewność na lata. Jesteśmy z Tobą również po instalacji.' },
  { badge: '04', title: '2 ekipy pełnoetatowych pracowników', desc: 'Własny, doświadczony zespół montażowy. Bez podwykonawców — każda instalacja wykonana od A do Z przez naszych ludzi.' },
];

export default function WhyUs() {
  return (
    <section className="why" id="dlaczego-my">
      <div className="why__content fade-in">
        <div className="tag tag--orange">Ludzie, nie korporacja</div>
        <h2 className="section__title">Jakość i uczciwość<br /><span className="highlight highlight--orange">zamiast ilości</span></h2>
        <p className="why__text">
          W JMSolar nie ścigamy się na liczby. Działamy tak, żeby każda instalacja była dopięta na ostatni szczegół — od pierwszej rozmowy po serwis. Wierzymy, że lepiej zrobić mniej, ale dobrze, niż obiecywać wszystko i zostawić klienta z problemem.
        </p>

        <div className="why__grid">
          {items.map((item) => (
            <div key={item.badge} className="why-item">
              <div className="why-item__header">
                <span className="why-item__badge">{item.badge}</span>
                <h3 className="why-item__title">{item.title}</h3>
              </div>
              <p className="why-item__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="why__visual">
        <div className="why__shape why__shape--1"></div>
        <div className="why__shape why__shape--2"></div>
        <div className="why__shape why__shape--3"></div>
        <div className="why__shape why__shape--4"></div>
      </div>
    </section>
  );
}
