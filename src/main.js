import './styles/main.css';
import { initNavbar } from './js/navbar.js';
import { initMobileMenu } from './js/mobileMenu.js';
import { initAnimations } from './js/animations.js';
import { initForm } from './js/form.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initAnimations();
  initForm();
});
