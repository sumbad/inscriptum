import { AbstractRoute, IRouters } from 'components/abstract.router';
import presentations from 'data/presentations';

export class SlidesRouter extends AbstractRoute {
  rootPath: string;

  getRouter(): IRouters<string> {
    const rootPath = '/slides';
    this.rootPath = rootPath;

    return {
      rootPath,
      routers: [
        {
          path: '/:id',
          callback: async (ctx, next) => {
            const tag = 'inscriptum-presentation';
            let ElConstructor = customElements.get(tag);

            if (ElConstructor == null) {
              const { presentationElement } = await import('new-components/presentation/presentation.element');
              ElConstructor = presentationElement(tag);
            }

            const presentationHTMLElement = new ElConstructor();
            presentationHTMLElement.dataset['id'] = ctx.params.id;

            this.routerOutlet.replaceChildren(presentationHTMLElement);
          },
        },
        {
          path: '',
          callback: (ctx) => {
            // TODO: create a component slides
            this.routerOutlet.innerHTML = presentations
              .map((it) => `<a rel="external" href="/slides/${it.name}">${it.name}</a>`)
              .join('<br/>');
          },
        },
        {
          path: '*',
          callback: (ctx, next) => {
            if (ctx.handled) {
              ctx.handled = false;
              next();
            } else {
              this.page.replace(rootPath);
            }
          },
        },
      ],
    };
  }
}
