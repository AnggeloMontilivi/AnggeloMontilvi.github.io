
'use strict';

/* - 1. NAVBAR — estilo al hacer scroll - */
const navbar    = document.getElementById('navBar');
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');
const navLinks  = document.querySelectorAll('.navbar_link');

// Añade .scrolled cuando el usuario baja
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  markActiveLink();
}, { passive: true });

// Marca el link activo según la sección visible
function markActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.scrollY + 100;

  sections.forEach(section => {
    const link = document.querySelector(`.navbar_link[href="#${section.id}"]`);
    if (!link) return;

    const inView = scrollY >= section.offsetTop &&
                   scrollY < section.offsetTop + section.offsetHeight;

    link.classList.toggle('active', inView);
  });
}


/* - 2. MENÚ MOBILE — abrir / cerrar - */
navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

// Cierra el menú al hacer clic en un link (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});


/* - FORMULARIO DE CONTACTO - */
const form    = document.getElementById('contactoFormulario');
const success = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    // Validación básica
    if (!name || !email || !message) return;
    if (!email.includes('@')) return;

    // Simula envío
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.textContent = 'Enviar mensaje';
      btn.disabled = false;
      success.classList.add('visible');

      // Oculta el mensaje de éxito tras 5 segundos
      setTimeout(() => success.classList.remove('visible'), 5000);
    }, 1200);
  });
}
