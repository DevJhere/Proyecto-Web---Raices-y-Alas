const instagramIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor" stroke-width="3"/>
  </svg>
`;

const tiktokIcon = `
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.8 1.54V6.79a4.85 4.85 0 01-1.03-.1z"/>
  </svg>
`;

import logoImg from "../../assets/images/Raices y Alas Logo.png";

export const Footer = () => {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">

          <div class="footer-brand">
            <a href="/" class="logo-link" data-link>
              <img src="${logoImg}" alt="Raíces y Alas"
                   class="footer-logo-img"
                   width="46" height="46"
                   loading="lazy" decoding="async" />
              <div class="logo-text">
                <span class="logo-name">Raíces y Alas</span>
                <span class="logo-tagline">Pedagogía Infantil</span>
              </div>
            </a>
            <p>
              Acompañamos el desarrollo integral de cada niño con amor, ciencia
              y vocación. Porque cada infancia merece florecer.
            </p>
          </div>

          <div>
            <p class="footer-heading">Navegación</p>
            <ul class="footer-links">
              <li><a href="/" data-link>Inicio</a></li>
              <li><a href="/sobre-mi" data-link>Sobre Mí</a></li>
              <li><a href="/servicios" data-link>Servicios</a></li>
              <li><a href="/contacto" data-link>Contacto</a></li>
            </ul>
          </div>

          <div>
            <p class="footer-heading">Síguenos</p>
            <div class="social-links">
              <a href="https://instagram.com/raices_y_alas_21" target="_blank" rel="noopener noreferrer"
                 class="social-link" aria-label="Instagram" title="Instagram">
                ${instagramIcon}
              </a>
              <a href="https://tiktok.com/@raices_y_alas_21_" target="_blank" rel="noopener noreferrer"
                 class="social-link" aria-label="TikTok" title="TikTok">
                ${tiktokIcon}
              </a>
            </div>
          </div>

        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Raíces y Alas — Pedagogía Infantil. Todos los derechos reservados.</p>
          <div class="footer-bottom-links">
            <a href="/privacidad" data-link>Privacidad</a>
            <button class="footer-btn-link" data-cookie-settings aria-label="Gestionar preferencias de cookies">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  `;
};
