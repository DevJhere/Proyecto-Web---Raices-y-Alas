
import './style.css';
import { Router } from './router.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { CookieBanner, initCookieBanner } from './components/CookieBanner.js';
import { Home } from './pages/Home.js';
import { Services } from './pages/Services.js';
import { About } from './pages/About.js';
import { Resources } from './pages/Resources.js';
import { SuccessCases } from './pages/SuccessCases.js';
import { Contact, setupContact } from './pages/Contact.js';
import { Privacy } from './pages/Privacy.js';

const app = document.querySelector('#app');

const routes = [
    { path: '/', view: Home },
    { path: '/servicios', view: Services },
    { path: '/sobre-mi', view: About },
    { path: '/recursos', view: Resources },
    { path: '/casos-exito', view: SuccessCases },
    { path: '/contacto', view: Contact, setup: setupContact },
    { path: '/privacidad', view: Privacy }
];

app.innerHTML = `
  ${Navbar()}
  <main id="page-content" style="min-height: calc(100vh - 300px);"></main>
  ${Footer()}
  ${CookieBanner()}
`;

new Router(routes, document.getElementById('page-content'));
initCookieBanner();
