const WA_NUMBER = '+34 614 24 61 23';
const WA_NUMBER_CLEAN = WA_NUMBER.replace(/\D/g, '');

export const Contact = () => {
    return `
    <div class="container section">
      <h1 class="text-center mb-2">Contacto</h1>

      <div class="grid grid-2">
        <div class="contact-info">
          <h3>Estamos en:</h3>
          <p class="mb-1">
            <strong>Dirección:</strong><br>
            Sama de Langreo<br>
            Asturias
          </p>
          <p class="mb-1">
            <strong>Teléfono:</strong><br>
            ${WA_NUMBER}
          </p>
          <p class="mb-1">
            <strong>Email:</strong><br>
            <span class="contact-email">psicopedagogia.raicesyalas21@gmail.com</span>
          </p>
        </div>

        <div class="card">
          <form id="contact-form" novalidate>
            <div class="mb-1">
              <label class="form-label" for="nombre">Nombre</label>
              <input id="nombre" type="text" required maxlength="100" autocomplete="given-name" class="form-input">
            </div>
            <div class="mb-1">
              <label class="form-label" for="email">Email</label>
              <input id="email" type="email" required maxlength="254" autocomplete="email" class="form-input">
            </div>
            <div class="mb-1">
              <label class="form-label" for="mensaje">Mensaje</label>
              <textarea id="mensaje" rows="4" required maxlength="2000" class="form-input"></textarea>
            </div>
            <!-- honeypot: visible to bots, hidden from users -->
            <div class="form-honeypot" aria-hidden="true">
              <label for="website">Sitio web</label>
              <input id="website" name="website" type="text" tabindex="-1" autocomplete="off">
            </div>
            <button type="submit" class="btn" style="width: 100%;">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  `;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function markInvalid(el, msg) {
    el.classList.add('form-input--error');
    el.setCustomValidity(msg);
    el.reportValidity();
}

function clearInvalid(el) {
    el.classList.remove('form-input--error');
    el.setCustomValidity('');
}

export const setupContact = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('input', (e) => {
        if (e.target.classList.contains('form-input--error')) clearInvalid(e.target);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Honeypot: bots fill this, humans don't
        if (document.getElementById('website')?.value) return;

        const nombreEl  = document.getElementById('nombre');
        const emailEl   = document.getElementById('email');
        const mensajeEl = document.getElementById('mensaje');

        const nombre  = nombreEl.value.trim();
        const email   = emailEl.value.trim();
        const mensaje = mensajeEl.value.trim();

        if (!nombre || !email || !mensaje) return;

        if (nombre.length > 100) { markInvalid(nombreEl, 'El nombre no puede superar 100 caracteres.'); return; }
        if (!EMAIL_REGEX.test(email)) { markInvalid(emailEl, 'Introduce un correo electrónico válido.'); return; }
        if (mensaje.length > 2000) { markInvalid(mensajeEl, 'El mensaje no puede superar 2000 caracteres.'); return; }

        const texto =
            `Hola Samantha, te escribo desde la web de Raíces y Alas.\n\n` +
            `*Nombre:* ${nombre}\n` +
            `*Email:* ${email}\n\n` +
            `*Mensaje:*\n${mensaje}`;

        const url = `https://wa.me/${WA_NUMBER_CLEAN}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank', 'noopener,noreferrer');

        form.closest('.card').innerHTML = `
          <div class="contact-success">
            <div class="contact-success__icon">💬</div>
            <h3 class="contact-success__title">¡Casi listo!</h3>
            <p class="contact-success__text">
              Se ha abierto WhatsApp con tu mensaje ya redactado.<br>
              Solo pulsa <strong>Enviar</strong> y Samantha lo recibirá.
            </p>
            <p class="contact-success__sub">
              ¿No se abrió la ventana?
              <a href="${url}" target="_blank" rel="noopener noreferrer" class="contact-success__link">
                Haz clic aquí
              </a>.
            </p>
          </div>
        `;
    });
};
