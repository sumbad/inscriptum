import { EG, p } from '@web-companions/gfc';
import { getMarginById } from './margin.service';
import { initialState, margin$, MarginState, reducer } from './margin.state';
import { render } from 'lit-html2';
import { sketchPadElement } from 'new-components/sketch-pad/sketchPad.element';
import { css } from 'utils/common';
import { iconArrowBarLeftNode } from './iconArrowBarLeft.node';
import { iconArrowBarRightNode } from './iconArrowBarRight.node';
import { iconBulbNode } from './iconBulb.node';
import { iconMaximizeNode } from './iconMaximize.node';
import { iconMinimizeNode } from './iconMinimize.node';

const SketchPadElement = sketchPadElement('sketch-pad');
const IconArrowBarLeftNode = iconArrowBarLeftNode();
const IconArrowBarRightNode = iconArrowBarRightNode();
const IconBulbNode = iconBulbNode();
const IconMaximizeNode = iconMaximizeNode();
const IconMinimizeNode = iconMinimizeNode();

export type MarginElementMode = 'hide' | 'collapse' | 'expand' | 'full';

export const marginElement = EG({
  props: {
    marginId: p.req<string>(),
    onchangeMarginMode: p.opt<(event: CustomEvent<{ mode: MarginElementMode }>) => any>(),
  },
})(function* (
  this: HTMLElement & {
    next(): Promise<void>; // TODO: add right type for the next()
  },
  props
) {
  const $ = this.attachShadow({ mode: 'open' });

  let state: MarginState = initialState;
  let mode: MarginElementMode = 'hide';

  const sub = margin$(props.marginId).subscribe((action) => {
    state = reducer(state, action);
    this.next();
  });

  const changeSketchPadMode = (_mode: MarginElementMode) => () => {
    switch (_mode) {
      case 'expand':
        ($.host as HTMLElement).style.position = 'absolute';
        break;
      case 'full':
        openFullscreen($.host as HTMLElement);
        break;

      default:
        ($.host as HTMLElement).style.position = 'relative';
        closeFullscreen();
        break;
    }

    mode = _mode;

    this.dispatchEvent(new CustomEvent('changeMarginMode', { detail: { mode } }));

    this.next();
  };

  try {
    while (true) {
      if (props.marginId !== state.data?.id) {
        getMarginById(props.marginId);
      }

      let toolbar = <></>;
      switch (mode as MarginElementMode) {
        case 'hide':
          toolbar = (
            <>
              <button class="btn btn_icon btn__show" onclick={changeSketchPadMode('collapse')}>
                <IconBulbNode isOn={false}></IconBulbNode>
              </button>
            </>
          );
          break;
        case 'collapse':
          toolbar = (
            <>
              <button class="btn btn_icon btn__show" onclick={changeSketchPadMode('hide')}>
                <IconBulbNode isOn={true}></IconBulbNode>
              </button>
              <button class="btn btn_icon btn__expand" title="expand" onclick={changeSketchPadMode('expand')}>
                <IconArrowBarLeftNode></IconArrowBarLeftNode>
              </button>
              <button class="btn btn_icon btn__full" title="full" onclick={changeSketchPadMode('full')}>
                <IconMaximizeNode></IconMaximizeNode>
              </button>
            </>
          );
          break;
        case 'expand':
          toolbar = (
            <>
              <button class="btn btn_icon btn__expand" title="expand" onclick={changeSketchPadMode('collapse')}>
                <IconArrowBarRightNode></IconArrowBarRightNode>
              </button>
              <button class="btn btn_icon btn__full" title="full" onclick={changeSketchPadMode('full')}>
                <IconMaximizeNode></IconMaximizeNode>
              </button>
            </>
          );
          break;
        case 'full':
          toolbar = (
            <>
              <button class="btn btn_icon btn__full" title="minimize" onclick={changeSketchPadMode('collapse')}>
                <IconMinimizeNode></IconMinimizeNode>
              </button>
            </>
          );
          break;

        default:
          break;
      }

      props = yield render(
        <>
          <style>{require('./margin.scss')}</style>

          {toolbar}

          {state.data ? (
            <SketchPadElement
              style={css`
                visibility: ${mode !== 'hide' ? 'visible' : 'hidden'};
              `}
              data={state.data}
              mode={mode}
            ></SketchPadElement>
          ) : (
            ''
          )}
        </>,
        $
      );
    }
  } finally {
    // TODO: not working now on destroy element
    debugger;
    sub.unsubscribe();
  }
});

function openFullscreen(elem: HTMLElement) {
  if ('requestFullscreen' in elem && document.fullscreenElement == null) {
    elem.requestFullscreen();
  } else if ('webkitRequestFullscreen' in elem) {
    /* Safari */
    elem['webkitRequestFullscreen']();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if ('exitFullscreen' in document && document.fullscreenElement != null) {
    document.exitFullscreen();
  } else if ('webkitExitFullscreen' in document) {
    /* Safari */
    document['webkitExitFullscreen']();
  }
}
