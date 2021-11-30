import { EG, p } from '@web-companions/gfc';
import { getMarginById } from './margin.service';
import { initialState, margin$, MarginState, reducer } from './margin.state';
import { render } from 'lit-html2';
// import { sketchPadElement } from 'new-components/sketch-pad/sketchPad.element';
import { css } from 'utils/common';
import { iconArrowBarLeftNode } from './iconArrowBarLeft.node';
import { iconArrowBarRightNode } from './iconArrowBarRight.node';
import { iconBulbNode } from './iconBulb.node';
import { iconMaximizeNode } from './iconMaximize.node';
import { iconMinimizeNode } from './iconMinimize.node';
import { sketchPadPanElement } from 'new-components/sketch-pad/sketchPadPan.element';
import { Subscription } from 'rxjs';
import hub from 'hub';
import { filter } from 'rxjs/operators';
import { HUB_ACTION } from 'hub/actions';

// const SketchPadElement = sketchPadElement('sketch-pad');
const SketchPadElement = sketchPadPanElement('sketch-pad');
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

  const subs: Subscription[] = [];

  let state: MarginState = initialState;
  let mode: MarginElementMode = 'hide';

  subs.push(
    margin$(props.marginId).subscribe((action) => {
      state = reducer(state, action);
      this.next();
    })
  );

  const changeSketchPadMode = (_mode: MarginElementMode) => async () => {
    switch (_mode) {
      case 'expand':
        ($.host as HTMLElement).style.position = 'absolute';
        break;
      case 'full':
        await openFullscreen($.host as HTMLElement);
        break;

      default:
        ($.host as HTMLElement).style.position = 'relative';
        await closeFullscreen();
        break;
    }

    mode = _mode;

    this.dispatchEvent(new CustomEvent('changeMarginMode', { detail: { mode } }));

    this.next();
  };

  subs.push(
    hub.$.pipe(filter((v) => v.type === HUB_ACTION.FULLSCREEN_CHANGED)).subscribe((d) => {
      if (d.type === HUB_ACTION.FULLSCREEN_CHANGED) {
        if (d.payload.isFullscreen && mode !== 'full') {
          mode = 'full';
          this.next();
        }
        if (!d.payload.isFullscreen && mode === 'full') {
          mode = 'collapse';
          this.next();
        }
      }
    })
  );

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
              <button class="btn btn_icon btn__first" onclick={changeSketchPadMode('collapse')}>
                <IconBulbNode isOn={false}></IconBulbNode>
              </button>
            </>
          );
          break;
        case 'collapse':
          toolbar = (
            <>
              <button class="btn btn_icon btn__first" onclick={changeSketchPadMode('hide')}>
                <IconBulbNode isOn={true}></IconBulbNode>
              </button>
              <button class="btn btn_icon btn__second" title="expand" onclick={changeSketchPadMode('expand')}>
                <IconArrowBarLeftNode></IconArrowBarLeftNode>
              </button>
              <button class="btn btn_icon btn__third" title="full" onclick={changeSketchPadMode('full')}>
                <IconMaximizeNode></IconMaximizeNode>
              </button>
            </>
          );
          break;
        case 'expand':
          toolbar = (
            <>
              <button class="btn btn_icon btn__first" title="expand" onclick={changeSketchPadMode('collapse')}>
                <IconArrowBarRightNode></IconArrowBarRightNode>
              </button>
              <button class="btn btn_icon btn__second" title="full" onclick={changeSketchPadMode('full')}>
                <IconMaximizeNode></IconMaximizeNode>
              </button>
            </>
          );
          break;
        case 'full':
          toolbar = (
            <>
              <button class="btn btn_icon btn__first" title="minimize" onclick={changeSketchPadMode('collapse')}>
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
                visibility: ${(mode as MarginElementMode) !== 'hide' ? 'visible' : 'hidden'};
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
    subs.forEach((it) => it.unsubscribe());
  }
});

async function openFullscreen(elem: HTMLElement) {
  if ('requestFullscreen' in elem && document.fullscreenElement == null) {
    await elem.requestFullscreen();
  } else if ('webkitRequestFullscreen' in elem) {
    /* Safari */
    await elem['webkitRequestFullscreen']();
  }
}

/* Close fullscreen */
async function closeFullscreen() {
  if ('exitFullscreen' in document && document.fullscreenElement != null) {
    await document.exitFullscreen();
  } else if ('webkitExitFullscreen' in document) {
    /* Safari */
    await document['webkitExitFullscreen']();
  }
}
