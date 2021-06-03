import { EG } from '@web-companions/gfc';
import { TypeConstructor } from '@web-companions/fc/common.model';
import { render } from 'lit-html';

export const tableOfContent = EG({
  props: {
    items: {
      type: {} as TypeConstructor<
        ({
          header: string;
          pageId: string;
        } | null)[]
      >,
      default: [],
    },
  },
})(function* (props) {
  const selected: number = 0;

  while (true) {
    props = yield render(
      <>
        <style>{require('./tableOfContent.scss')}</style>
        <div class="toc-stub"></div>
        <nav class="toc-panel">
          <ul class="toc-panel__list">
            <li class="toc-panel__title">{props.items[0]?.header ?? `In this article`}</li>
            {props.items.slice(1).map((it, idx) => (
              <li class="toc-panel__item">
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
