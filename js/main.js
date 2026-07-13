// main.js – JavaScript de la página
// Funcionalidad básica: menú hamburguesa, scroll suave y envío de formulario

// Toggle del menú en móviles
const toggleBtn = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');
if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });
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
