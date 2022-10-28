import { EG, p } from '@web-companions/gfc';
import { render } from 'lit-html2';

import 'presentarium';
import { unsafeHTML } from 'lit-html2/directives/unsafe-html.js';

export const presentationElement = EG({
  props: {
    id: p.req<string>('data-id'),
  },
})(function* (params) {
  let id: string | null = null;
  let content: string = '';

  const loadHTML = async () => {
    content = await (await fetch(`/data/presentations/${params.id}/template.html`)).text();

    this.next();
  };

  while (true) {
    if (id !== params.id) {
      id = params.id;
      loadHTML();
    }

    params = yield render(
      <>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />

        {unsafeHTML(content)}
      </>,
      this
    );
  }
});
