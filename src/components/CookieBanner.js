const STORAGE_KEY = 'cookie_consent';

export const CookieBanner = () => `
  <div class="cookie-banner" id="cookie-banner" role="dialog" aria-modal="true" aria-label="Gestión de cookies">
    <div class="cookie-banner__inner">
      <div class="cookie-banner__content">
        <div class="cookie-banner__icon">🍪</div>
        <div class="cookie-banner__text">
          <p class="cookie-banner__title">Usamos cookies</p>
          <p class="cookie-banner__desc">
            Utilizamos cookies propias para mejorar tu experiencia de navegación.
            Puedes aceptarlas o elegir solo las esenciales para el funcionamiento de la web.
          </p>
        </div>
      </div>
      <div class="cookie-banner__actions">
        <button class="btn btn-cookie-reject" id="cookie-reject">Solo esenciales</button>
        <button class="btn btn-primary" id="cookie-accept">Aceptar todas</button>
      </div>
      <button class="cookie-banner__close" id="cookie-close" aria-label="Cerrar aviso de cookies">✕</button>
    </div>
  </div>
`;

function showBanner() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    requestAnimationFrame(() => requestAnimationFrame(() => banner.classList.add('visible')));
}

function hideBanner() {
    document.getElementById('cookie-banner')?.classList.remove('visible');
}

export function getConsentStatus() {
    return localStorage.getItem(STORAGE_KEY);
}

export function initCookieBanner() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        showBanner();
    }

    document.getElementById('cookie-accept')?.addEventListener('click', () => {
        localStorage.setItem(STORAGE_KEY, 'accepted');
        hideBanner();
    });

    document.getElementById('cookie-reject')?.addEventListener('click', () => {
        localStorage.setItem(STORAGE_KEY, 'rejected');
        hideBanner();
    });

    document.getElementById('cookie-close')?.addEventListener('click', hideBanner);

    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-cookie-settings]')) {
            showBanner();
        }
    });
}
