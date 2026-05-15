import { useCallback, useEffect, useRef } from 'react';
import { useScrollNav } from '../hooks/useScrollNav';

export default function Nav() {
  const scrolled = useScrollNav();
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    menuRef.current?.classList.remove('nav__links--open');
    toggleRef.current?.classList.remove('nav__toggle--open');
    document.body.style.overflow = '';
  }, []);

  const open = useCallback(() => {
    menuRef.current?.classList.add('nav__links--open');
    toggleRef.current?.classList.add('nav__toggle--open');
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    const toggle = toggleRef.current;
    const menu = menuRef.current;
    if (!toggle || !menu) return;

    const onToggle = () => {
      menu.classList.contains('nav__links--open') ? close() : open();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menu.classList.contains('nav__links--open')) close();
    };

    const onClickOutside = (e: MouseEvent) => {
      if (menu.classList.contains('nav__links--open') &&
          !menu.contains(e.target as Node) &&
          !toggle.contains(e.target as Node)) {
        close();
      }
    };

    toggle.addEventListener('click', onToggle);
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onKey);
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));

    return () => {
      toggle.removeEventListener('click', onToggle);
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, [close, open]);

  return (
    <nav className={`nav js-navbar${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="#" className="logo">JM<span>Solar</span></a>

      <button ref={toggleRef} className="nav__toggle js-menu-toggle" aria-label="Menu" type="button">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul ref={menuRef} className="nav__links js-nav-links">
        <li><a href="#uslugi" className="nav__link">Usługi</a></li>
        <li><a href="#dlaczego-my" className="nav__link">O nas</a></li>
        <li><a href="#realizacje" className="nav__link">Realizacje</a></li>
        <li><a href="#kontakt" className="nav__link">Kontakt</a></li>
      </ul>

      <a href="#kontakt" className="nav__cta">Bezpłatna wycena</a>
    </nav>
  );
}
