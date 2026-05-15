export function initMobileMenu() {
  const toggle = document.querySelector('.js-menu-toggle');
  const menu = document.querySelector('.js-nav-links');
  const links = menu?.querySelectorAll('a');
  if (!toggle || !menu) return;

  function open() {
    menu.classList.add('nav__links--open');
    toggle.classList.add('nav__toggle--open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    menu.classList.remove('nav__links--open');
    toggle.classList.remove('nav__toggle--open');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    menu.classList.contains('nav__links--open') ? close() : open();
  });

  links?.forEach(link => {
    link.addEventListener('click', close);
  });

  document.addEventListener('click', (e) => {
    if (menu.classList.contains('nav__links--open') &&
        !menu.contains(e.target) &&
        !toggle.contains(e.target)) {
      close();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('nav__links--open')) {
      close();
    }
  });
}
