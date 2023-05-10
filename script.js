'use strict';

const $ = (selector) => document.querySelector(selector);

const $openMenu = $('.navigation__open-btn');
const $navBackdrop = $('.backdrop');
const $mobileNav = $('.navigation__links');
const $closeMenu = $('.navigation__close-btn');

const openMobileNav = () => {
  $navBackdrop.classList.remove('hidden');
  $mobileNav.classList.add('navigation__mobile-open');
};

const closeMobileNav = () => {
  $mobileNav.classList.remove('navigation__mobile-open');
  $navBackdrop.classList.add('hidden');
};

$openMenu.addEventListener('click', openMobileNav);

[$navBackdrop, $closeMenu].forEach((el) => {
  el.addEventListener('click', closeMobileNav);
});

$mobileNav.addEventListener('click', (e) => {
  const click = e.target.closest('.navigation__link');
  if (!click) return;
  closeMobileNav();
});
