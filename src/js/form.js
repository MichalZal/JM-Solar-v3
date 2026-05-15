export function initForm() {
  const form = document.querySelector('.js-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.js-form-submit');
    const existingMsg = form.querySelector('.form__success, .form__error');
    if (existingMsg) existingMsg.remove();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Wysyłanie…';

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

      const success = document.createElement('p');
      success.className = 'form__success';
      success.textContent = 'Dziękujemy! Skontaktujemy się z Tobą w ciągu 24 godzin.';
      form.appendChild(success);
    } catch {
      const error = document.createElement('p');
      error.className = 'form__error';
      error.textContent = 'Wystąpił błąd. Prosimy spróbować później lub zadzwonić pod +48 518 337 406.';
      form.appendChild(error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Wyślij zapytanie';
    }
  });
}
