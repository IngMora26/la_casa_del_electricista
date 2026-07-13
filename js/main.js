// main.js – JavaScript de la página
// Funcionalidad básica: menú hamburguesa, scroll suave y envío de formulario

// Toggle del menú en móviles (con estado accesible)
const toggleBtn = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');
if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar el menú al hacer clic en un link (mejor UX en mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Año dinámico en el footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Scroll suave para enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Envío del formulario de contacto (Formspree/Web3Forms)
const form = document.querySelector('.contact__form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (form.action.includes('YOUR_FORM_ID')) {
      alert('El formulario aún no está conectado a un servicio de envío real. Contacta al desarrollador para completar la configuración, o escríbenos directamente por WhatsApp.');
      console.warn('Formspree action todavía usa el placeholder YOUR_FORM_ID. Reemplázalo por el ID real.');
      return;
    }

    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        alert('¡Mensaje enviado! Gracias por contactarnos.');
        form.reset();
      } else {
        const result = await response.json();
        alert('Error al enviar el mensaje: ' + (result.error || 'Inténtelo de nuevo'));
      }
    } catch (err) {
      alert('No se pudo enviar el formulario. Verifique su conexión.');
    }
  });
}
