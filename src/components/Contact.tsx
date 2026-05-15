import { FormEvent, useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const submitBtn = form.querySelector('.js-form-submit') as HTMLButtonElement;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wysyłanie…';
    setStatus('idle');

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Network error');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Wyślij zapytanie';
    }
  };

  return (
    <section className="section contact fade-in" id="kontakt">
      <div className="contact__info">
        <div className="tag tag--orange">Kontakt</div>
        <h2 className="section__title">Porozmawiajmy<br />o <span className="highlight highlight--orange">Twojej</span> instalacji</h2>
        <p className="contact__text">Zostaw kontakt, a doradzimy Ci najlepsze rozwiązanie dla Twojego domu. Oddzwonimy w 24h.</p>
        <div className="contact__details">
          <div className="contact-line">
            <span className="contact-line__label">Adres</span>
            <span className="contact-line__value">Konopnickiej 6a, 67-115 Bytom Odrzański</span>
          </div>
          <div className="contact-line">
            <span className="contact-line__label">Telefon</span>
            <span className="contact-line__value"><a href="tel:+48518337406">518 337 406</a></span>
          </div>
          <div className="contact-line">
            <span className="contact-line__label">E-mail</span>
            <span className="contact-line__value"><a href="mailto:biuro@jmsolar.pl">biuro@jmsolar.pl</a></span>
          </div>
          <div className="contact-line">
            <span className="contact-line__label">Social</span>
            <span className="contact-line__value" style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://www.facebook.com/FirmaJMSolar" target="_blank" rel="noopener">Facebook</a>
              <a href="https://www.instagram.com/jmsolar.pl/" target="_blank" rel="noopener">Instagram</a>
            </span>
          </div>
        </div>
      </div>
      <div className="contact__form-wrap">
        <div className="contact__form-bg"></div>
        <form ref={formRef} className="form js-form" onSubmit={handleSubmit} noValidate>
          <div className="form__row">
            <div className="form__group">
              <label className="form__label" htmlFor="name">Imię i nazwisko</label>
              <input type="text" id="name" name="name" className="form__input" placeholder="Jan Kowalski" required />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="phone">Telefon</label>
              <input type="tel" id="phone" name="phone" className="form__input" placeholder="+48 …" required />
            </div>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="address">Adres nieruchomości</label>
            <input type="text" id="address" name="address" className="form__input" placeholder="Miejscowość, ulica" />
          </div>
          <div className="form__row">
            <div className="form__group">
              <label className="form__label" htmlFor="interest">Zainteresowany/a</label>
              <select id="interest" name="interest" className="form__input" defaultValue="">
                <option value="">Wybierz usługę</option>
                <option>Fotowoltaika</option>
                <option>Magazyn energii</option>
                <option>Fotowoltaika + magazyn</option>
                <option>Audyt energetyczny</option>
                <option>Dofinansowanie</option>
              </select>
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="consumption">Roczne zużycie energii</label>
              <input type="text" id="consumption" name="consumption" className="form__input" placeholder="np. 4000 kWh" />
            </div>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="message">Wiadomość</label>
            <textarea id="message" name="message" className="form__input" placeholder="Opisz krótko swoją nieruchomość i oczekiwania…"></textarea>
          </div>
          <button type="submit" className="btn btn--primary form__submit js-form-submit">Wyślij zapytanie</button>

          {status === 'success' && <p className="form__success">Dziękujemy! Skontaktujemy się z Tobą w ciągu 24 godzin.</p>}
          {status === 'error' && <p className="form__error">Wystąpił błąd. Prosimy spróbować później lub zadzwonić pod +48 518 337 406.</p>}
        </form>
      </div>
    </section>
  );
}
