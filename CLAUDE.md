# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (hot reload)
npm run build     # Production build to dist/
npm run preview   # Preview the production build locally
```

No linting, testing, or formatting tools are configured.

## Architecture

Vanilla JavaScript SPA using a custom router. No framework, no TypeScript.

**Entry point:** `index.html` → `src/main.js`, which renders a persistent `Navbar` + `Footer` into `#app`, then initializes `AppRouter`.

**Router (`src/router.js`):** A class that intercepts clicks on `[data-link]` elements, updates the URL with the History API, and injects the current page's HTML string into `#page-content`. Also handles `popstate` for back/forward navigation.

**Pages (`src/pages/`):** Each page is a function that returns a template literal string of HTML. Pages are not components with lifecycle hooks — they are pure string renderers. Any interactivity (event listeners, IntersectionObservers) must be set up after the HTML is injected into the DOM, typically by chaining logic after the router renders the page.

**Routes:**
- `/` → `Home.js`
- `/servicios` → `Services.js`
- `/sobre-mi` → `About.js`
- `/recursos` → `Resources.js`
- `/casos-exito` → `SuccessCases.js`
- `/contacto` → `Contact.js`

**Styling (`src/style.css`):** All design tokens are CSS custom properties on `:root`. Always use these variables rather than hardcoded values:
- Colors: `--verde-1` through `--verde-palido` (primary greens), `--dorado-2` through `--dorado-palido` (accent golds), `--crema`, `--blanco`, `--texto-1/2/suave`
- Radius: `--r-sm` (8px) → `--r-full` (9999px)
- Shadows: `--shadow-sm`, `--shadow-md`
- Container max-width: 1200px

Responsive breakpoints: 1024px (tablet), 768px (mobile — hamburger nav activates), 480px (small mobile).

**Images:** Imported as ES6 modules in the files that use them (`import logo from '../assets/images/...'`). Vite handles the asset pipeline.

## Key Patterns

- `Navbar.js` uses a hamburger toggle at 768px that sets `display: flex/none` on the nav links. The toggle logic is wired up via `addEventListener` after the navbar HTML is injected.
- `Home.js` uses `IntersectionObserver` to trigger `.fade-up` scroll animations — this observer is set up after page render.
- The contact form in `Contact.js` has client-side validation only; there is no backend. Submission currently shows an `alert()`.
- All content is in Spanish.
