
export class Router {
    constructor(routes, root = document.getElementById('app')) {
        this.routes = routes;
        this.root = root;
        this.init();
    }

    init() {
        window.addEventListener('popstate', () => this.handleRoute());
        document.body.addEventListener('click', e => {
            const link = e.target.closest('[data-link]');
            if (link) {
                e.preventDefault();
                this.navigateTo(link.href);
            }
        });
        this.handleRoute();
    }

    navigateTo(url) {
        history.pushState(null, null, url);
        this.handleRoute();
    }

    async handleRoute() {
        const path = window.location.pathname;
        const route = this.routes.find(r => r.path === path) || this.routes.find(r => r.path === '/');

        if (!route) return;

        try {
            const content = await route.view();
            this.root.innerHTML = content;
            window.scrollTo(0, 0);
            if (typeof route.setup === 'function') {
                route.setup();
            }
        } catch (err) {
            console.error('[Router] Error al renderizar ruta:', path, err);
        }
    }
}
