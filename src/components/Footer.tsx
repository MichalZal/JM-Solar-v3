export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="#" className="logo">JM<span>Solar</span></a>
          <p className="footer__desc">Rodzinna firma specjalizująca się w fotowoltaice i magazynach energii. Działamy na terenie Dolnego Śląska i okolic.</p>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">Usługi</h4>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">Fotowoltaika</a></li>
            <li><a href="#" className="footer__link">Magazyny energii</a></li>
            <li><a href="#" className="footer__link">Serwis i przeglądy</a></li>
            <li><a href="#" className="footer__link">Audyt energetyczny</a></li>
            <li><a href="#" className="footer__link">Dofinansowania</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">Firma</h4>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">O nas</a></li>
            <li><a href="#" className="footer__link">Realizacje</a></li>
            <li><a href="#" className="footer__link">Opinie klientów</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">Programy</h4>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">Mój Prąd 7.0</a></li>
            <li><a href="#" className="footer__link">Ulga termomodernizacyjna</a></li>
            <li><a href="#" className="footer__link">Dofinansowania UE</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2025 JMSolar. Wszelkie prawa zastrzeżone.</span>
        <span><a href="/polityka-prywatnosci.html" className="footer__privacy-link">Polityka prywatności</a> · RODO</span>
      </div>
    </footer>
  );
}
