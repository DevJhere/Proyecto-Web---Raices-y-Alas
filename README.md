# Raíces y Alas — Web Profesional de Psicopedagogía Infantil

Web profesional para **Raíces y Alas**, centro de psicopedagogía infantil de Samantha Cruellas García, ubicado en Sama de Langreo (Asturias). Presenta los servicios, el perfil profesional, casos de éxito y facilita el contacto directo con las familias a través de WhatsApp Business.

---

## Tecnologías

| Tecnología | Versión | Rol |
|---|---|---|
| **JavaScript** | ES2022+ | Lenguaje principal (sin framework) |
| **Vite** | 7.1.2 | Bundler, dev server con HMR |
| **CSS** | Custom | Sistema de diseño propio con tokens CSS |
| **Google Fonts** | — | Nunito (cuerpo) + Playfair Display (títulos) |
| **History API** | Browser nativa | Navegación SPA sin recarga |
| **LocalStorage** | Browser nativa | Persistencia de preferencias de cookies |
| **WhatsApp Business** | wa.me | Canal de contacto con las familias |

Sin dependencias de producción — el bundle final es HTML + CSS + JS puro.

---

## Arquitectura

### Patrón SPA con router propio

La aplicación es una **Single Page Application** construida sobre JavaScript vanilla. No utiliza ningún framework (React, Vue, Angular). Toda la lógica de routing, renderizado y gestión de estado es código propio.

```
index.html
    └── #app
        ├── <nav>      → Navbar.js    (persistente)
        ├── <main>     → #page-content (contenido de la ruta activa)
        ├── <footer>   → Footer.js    (persistente)
        └── .cookie-banner → CookieBanner.js (persistente)
```

### Flujo de renderizado

1. `main.js` inyecta los componentes persistentes en `#app`.
2. `Router` intercepta clics en elementos `[data-link]` y eventos `popstate`.
3. El router actualiza la URL con `history.pushState()` y llama a la función de la página correspondiente.
4. Cada página devuelve un **template literal** de HTML que se inyecta en `#page-content` via `innerHTML`.
5. Si la ruta tiene función `setup`, se ejecuta después del renderizado para registrar event listeners.

### Páginas como funciones puras

```js
// Patrón de cada página
export const NombrePagina = () => `<div>...HTML...</div>`;

// Páginas con interactividad post-render
export const setupNombrePagina = () => {
  document.getElementById('mi-elemento').addEventListener('click', ...);
};
```

---

## Estructura del proyecto

```
espacio-educativo/
├── index.html              # Entry point HTML
├── vite.config.js          # Configuración de Vite + cabeceras de seguridad
├── .env                    # Variables de entorno (no versionado)
├── .env.example            # Plantilla de variables de entorno
├── assets/
│   └── images/
│       ├── Raices y Alas Logo.png
│       └── Foto Perfil Personal.png
└── src/
    ├── main.js             # Punto de entrada: monta la app y registra rutas
    ├── router.js           # Router SPA (History API)
    ├── style.css           # Sistema de diseño completo
    ├── components/
    │   ├── Navbar.js       # Navegación principal + menú hamburguesa
    │   ├── Footer.js       # Pie de página con enlaces legales
    │   └── CookieBanner.js # Banner de consentimiento de cookies
    └── pages/
        ├── Home.js         # Página de inicio
        ├── Services.js     # Servicios ofrecidos
        ├── About.js        # Perfil profesional
        ├── Resources.js    # Recursos para familias
        ├── SuccessCases.js # Casos de éxito
        ├── Contact.js      # Formulario de contacto → WhatsApp
        └── Privacy.js      # Política de privacidad (RGPD/LOPDGDD)
```

---

## Funcionalidades implementadas

### Páginas y contenido

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Inicio | Hero principal, propuesta de valor, grid de servicios destacados, testimonios y CTA |
| `/servicios` | Servicios | Catálogo completo de servicios de psicopedagogía infantil |
| `/sobre-mi` | Sobre Mí | Perfil de Samantha Cruellas García, formación y enfoque pedagógico |
| `/recursos` | Recursos | Material y recursos de apoyo para familias |
| `/casos-exito` | Casos de Éxito | Testimonios y experiencias de familias atendidas |
| `/contacto` | Contacto | Formulario validado con envío directo a WhatsApp Business |
| `/privacidad` | Privacidad | Política de privacidad completa (RGPD + LOPDGDD) |

### Componentes

- **Navbar** — Responsive con menú hamburguesa activo en viewports ≤ 768 px. Sombra dinámica al hacer scroll.
- **Footer** — Acceso a política de privacidad, gestión de cookies y enlaces de contacto.
- **Cookie Banner** — Diálogo de consentimiento con tres acciones: aceptar todas, solo esenciales y cerrar. Preferencia persistida en `localStorage`.

### Formulario de contacto

- Validación nativa en el navegador (`required`, `type="email"`, `maxlength`).
- Validación reforzada en JavaScript (regex de email, límites de longitud).
- **Campo honeypot** oculto para detectar y descartar envíos automatizados de bots.
- En lugar de enviar a un servidor, genera una URL `wa.me` con el mensaje preformateado y abre WhatsApp en una nueva pestaña — sin backend, sin almacenamiento de datos.

### Diseño y responsive

Sistema de diseño basado en **custom properties CSS** con paleta verde-dorado y tipografía editorial:

```
Breakpoints:
  1024 px  → tablet landscape
   900 px  → tablet portrait
   768 px  → mobile (hamburger nav activo)
   480 px  → small mobile
   360 px  → extra small
```

Todos los contenedores tienen padding horizontal garantizado en cada breakpoint — la clase `.section` usa `padding-top`/`padding-bottom` para no sobreescribir el padding lateral del `.container`.

### Animaciones

- Animaciones de scroll `fade-up` en la página de inicio gestionadas con `IntersectionObserver` (con `unobserve` para evitar memory leaks).

---

## Seguridad

### Cabeceras HTTP (vite.config.js)

| Cabecera | Valor | Protección |
|---|---|---|
| `X-Frame-Options` | `DENY` | Clickjacking |
| `X-Content-Type-Options` | `nosniff` | MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Fuga de URL |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Acceso a hardware |

> En producción estas cabeceras deben replicarse en la plataforma de hosting (Netlify `_headers`, `vercel.json`, etc.).

### Content Security Policy (index.html)

```
default-src 'self'
script-src 'self'
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
font-src 'self' https://fonts.gstatic.com
img-src 'self' data: blob:
connect-src 'self'
form-action 'self'
base-uri 'self'
```

### Formulario

- `maxlength` a nivel de atributo HTML (nombre: 100, email: 254, mensaje: 2000 caracteres).
- Validación regex de email en JavaScript (no bypasseable con DevTools).
- Campo honeypot invisible para humanos (`position: absolute; left: -9999px`).
- `window.open` con `noopener,noreferrer` — impide que la pestaña de WhatsApp acceda al objeto `window` de la web.
- Todos los enlaces externos usan `rel="noopener noreferrer"`.

---

## Cumplimiento legal

La página `/privacidad` cubre el marco legal vigente a 2026:

| Normativa | Ámbito | Aspectos cubiertos |
|---|---|---|
| **RGPD 2016/679** | UE | Base jurídica, derechos del interesado, transferencias internacionales |
| **LOPDGDD 3/2018** | España | Adaptación nacional del RGPD, derechos digitales |
| **LSSI 34/2002** | España | Servicios de la sociedad de la información |
| **NIS 2 (2022/2555)** | UE | Ciberseguridad y medidas técnicas |

### Protección especial de menores

Conforme al **Art. 8 RGPD** y el **Art. 7 LOPDGDD**, se requiere consentimiento expreso y verificable del padre, madre o tutor legal para el tratamiento de datos de menores de **14 años**. La política detalla que ningún dato clínico o identificativo de menores atendidos se recoge a través de la web.

---

## Instalación y uso

### Requisitos

- Node.js 18+
- npm 9+

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/espacio-educativo.git
cd espacio-educativo

# 2. Instalar dependencias
npm install

# 3. Copiar y configurar variables de entorno
cp .env.example .env
# Editar .env con el número de WhatsApp

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173` con Hot Module Replacement activo.

---

## Variables de entorno

Crear un fichero `.env` en la raíz del proyecto (no versionado):

```env
VITE_WHATSAPP_NUMBER="+34 600 000 000"
```

Vite expone las variables con prefijo `VITE_` al bundle del cliente. El número se limpia automáticamente (`replace(/\D/g, '')`) antes de usarse en la URL `wa.me`.

---

## Scripts

```bash
npm run dev      # Servidor de desarrollo con HMR (localhost:5173)
npm run build    # Build de producción → dist/
npm run preview  # Preview del build de producción (localhost:4173)
```

---

## Roadmap

Funcionalidades planificadas para próximas versiones:

- [ ] **Sistema de reserva de citas** — Integración con calendario (Cal.com o Google Calendar API) para que las familias reserven directamente desde la web.
- [ ] **Sección de blog / artículos** — Publicación de contenido educativo y consejos para familias.
- [ ] **Formulario con backend** — Envío de formulario a email mediante un servicio serverless (Resend, Formspree, EmailJS) sin depender de WhatsApp.
- [ ] **PWA (Progressive Web App)** — Service Worker para funcionamiento offline y acceso desde pantalla de inicio en móvil.
- [ ] **Optimización SEO avanzada** — Metadatos Open Graph, Twitter Cards, sitemap XML y robots.txt.
- [ ] **Google Analytics 4** — Integración con panel de consentimiento y respeto a las preferencias de cookies.
- [ ] **Accesibilidad WCAG 2.1 AA** — Auditoría completa y mejoras de contraste, focus management y ARIA.

---

## Licencia

Proyecto privado — todos los derechos reservados.  
El código fuente no puede reproducirse ni distribuirse sin autorización expresa de la titular.

---

*Desarrollado con JavaScript vanilla, Vite y mucha dedicación para Raíces y Alas — Psicopedagogía Infantil.*
