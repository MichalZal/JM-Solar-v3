export function initNavbar() {
  const navbar = document.querySelector('.js-navbar');
  if (!navbar) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('nav--scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  });
}
