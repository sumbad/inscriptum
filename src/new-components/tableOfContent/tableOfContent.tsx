import { EG, p } from '@web-companions/gfc';
import hub from 'hub';
import { HUB_ACTION } from 'hub/actions';
import { render } from 'lit-html2';
import { DraftTocModel } from 'models/draft.model';

export const tableOfContent = EG({
  props: {
    items: p.req<DraftTocModel[]>(),
  },
})(function* (props) {
  const selected: number = 0;

  const onClickByItem = (pageId: string) => () => {
    const el = document.querySelector(`#page_${pageId}`);

    if (el != null) {
      const bReck = el.getBoundingClientRect();

      window.scroll({
        top: bReck.top,
        behavior: 'smooth'
      });

      hub.dispatch({
        type: HUB_ACTION.PAGE_FOLDED,
        payload: {
          pageId,
          folded: false
        }
      })
    }
  };

  while (true) {
    props = yield render(
      <>
        <style>{require('./tableOfContent.scss')}</style>
        <nav class="toc-panel">
          <ul class="toc-panel__list">
            <li class="toc-panel__title">{props.items[0]?.header ?? `In this article`}</li>
            {props.items.slice(1).map((it, idx) => (
              <li class="toc-panel__item" onclick={onClickByItem(it.pageId)}>
                <span class="toc-panel__page-numb">{idx + 1}</span>
                <a class={`toc-panel__header ${idx + 1 === selected ? 'toc-panel__header_selected' : ''}`}>{it?.header ?? '...'}</a>
              </li>
            ))}

            {/* <li>
            <a href="#formatting" class="toc-panel__header">
              0
            </a>
            <ul class="toc-panel__list">
              <li>
                <a href="#intellisense" class="toc-panel__header">
                  1
                </a>
              </li>
            </ul>
          </li> */}
          </ul>
        </nav>
      </>,
      this
    );
  }
});
