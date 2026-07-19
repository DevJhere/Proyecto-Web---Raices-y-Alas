import logoImg from '../../assets/images/Raices y Alas Logo.png';

export const Navbar = () => {
  return `
    <nav class="navbar" id="main-navbar">
      <div class="navbar-inner">
        <a href="/" class="logo-link" data-link>
          <img src="${logoImg}" alt="Raíces y Alas"
               class="logo-icon"
               width="52" height="52"
               loading="eager" fetchpriority="high" decoding="async"
               style="object-fit: contain;" />
          <div class="logo-text">
            <span class="logo-name">Raíces y Alas</span>
            <span class="logo-tagline">Pedagogía Infantil</span>
          </div>
        </a>

        <button class="menu-toggle" id="mobile-menu" aria-label="Abrir menú">☰</button>

        <ul class="nav-links" id="nav-links">
          <li><a href="/" data-link>Inicio</a></li>
          <li><a href="/sobre-mi" data-link>Sobre Mí</a></li>
          <li><a href="/servicios" data-link>Servicios</a></li>
          <li><a href="/contacto" class="nav-cta" data-link>Contacto</a></li>
        </ul>
      </div>
    </nav>
  `;
};

/* Mobile menu toggle */
document.addEventListener('click', (e) => {
  if (e.target.closest('#mobile-menu')) {
    document.getElementById('nav-links')?.classList.toggle('active');
  }
  if (e.target.matches('[data-link]')) {
    document.getElementById('nav-links')?.classList.remove('active');
  }
});

/* Navbar scroll shadow */
window.addEventListener('scroll', () => {
  document.getElementById('main-navbar')?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
