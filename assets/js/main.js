const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');
if (toggle){
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('show');
  });
}
const y = document.querySelector('#year');
if (y) y.textContent = new Date().getFullYear();
