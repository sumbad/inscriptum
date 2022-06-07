import { EG, p } from '@web-companions/gfc';
import { defMapper } from '@web-companions/gfc/utils';
import { render } from 'lit-html2';
import { css } from 'utils/component.tools';
import { setStyle } from 'utils/component.tools';
import { snippetRoundNode } from './snippetRound.node';

const SnippetRoundNode = snippetRoundNode();

export const preloaderElement = EG({
  props: {
    loading: p.opt<boolean>('loading'),
  },
  mapper,
})(function* (params) {
  const $ = this.attachShadow({ mode: 'open' });
  let loading = params.loading;
  let showSpinner = true;

  setStyle(require('./style.scss'), $);

  while (true) {
    if (loading !== params.loading) {
      loading = params.loading;

      // remove spinner with animation from DOM
      if (!loading) {
        setTimeout(() => {
          showSpinner = false;
          this.next();
        }, 600);
      } else {
        showSpinner = true;
      }
    }

    params = yield render(
      <div class="um-preloader">
        {showSpinner ? (
          <div
            class="um-preloader__loader um-preloader__loader_fixed"
            style={css`
              opacity: ${loading ? 1 : 0};
            `}
          >
            <SnippetRoundNode/>
          </div>
        ) : (
          ''
        )}
        <slot></slot>
      </div>,
      $
    );
  }
});

function mapper<P>(state: P, key: keyof P, value: any) {
  if (key === 'loading') {
    value = typeof value === 'string' ? true : Boolean(value);
  }

  return defMapper(state, key, value);
}
