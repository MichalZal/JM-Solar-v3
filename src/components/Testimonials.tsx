const testimonials = [
  { quote: '„Profesjonalne podejście od początku do końca. Doradztwo, montaż i serwis na najwyższym poziomie. Polecam z czystym sumieniem."', author: 'Marek Wiśniewski', meta: 'Fotowoltaika 5,4 kW' },
  { quote: '„System hybrydowy z magazynem energii — pełna niezależność od sieci. Firma godna zaufania, terminowa i rzetelna."', author: 'Katarzyna Nowak', meta: 'System hybrydowy + magazyn 10 kWh' },
  { quote: '„Od pierwszej rozmowy czułem, że mam do czynienia z fachowcami. Instalacja działa bez zarzutu, rachunki spadły o 80%. Bardzo polecam!"', author: 'Tomasz Kowalczyk', meta: 'Fotowoltaika z magazynem energii' },
];

export default function Testimonials() {
  return (
    <section className="section testimonials fade-in">
      <div className="tag tag--gold">Opinie klientów</div>
      <h2 className="section__title">Co mówią o nas <span className="highlight highlight--gold">klienci</span></h2>

      <div className="testimonials__grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial">
            <div className="testimonial__stars">★★★★★</div>
            <blockquote className="testimonial__quote">{t.quote}</blockquote>
            <div className="testimonial__author">{t.author}</div>
            <div className="testimonial__meta">{t.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
