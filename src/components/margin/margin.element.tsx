import { EG, p } from '@web-companions/gfc';
import { createNewMargin, getMarginById } from './margin.service';
import { initialState, MarginState, reducer } from './margin.state';
import { render } from 'lit-html2';
import { iconArrowBarLeftNode } from './iconArrowBarLeft.node';
import { iconArrowBarRightNode } from './iconArrowBarRight.node';
import { iconBulbNode } from './iconBulb.node';
import { iconMaximizeNode } from './iconMaximize.node';
import { iconMinimizeNode } from './iconMinimize.node';
import { sketchPadPanElement } from 'components/sketch-pad/sketchPadPan.element';
import { Subscription } from 'rxjs';
import hub from 'hub';
import { filter } from 'rxjs/operators';
import { HUB_ACTION } from 'hub/actions';
import { filterByActionsGroup } from 'utils/operators';
import { MarginAction, MARGIN_ACTION } from './margin.action';
import { iconNewMarginNode } from './iconNewMargin.node';
import { css } from '@web-companions/h';

// const SketchPadElement = sketchPadElement('sketch-pad');
const SketchPadElement = sketchPadPanElement('sketch-pad');

const IconArrowBarLeftNodeStatic = iconArrowBarLeftNode();
const IconArrowBarRightNodeStatic = iconArrowBarRightNode();
const IconBulbNodeStatic = iconBulbNode();
const IconMaximizeNodeStatic = iconMaximizeNode();
const IconMinimizeNodeStatic = iconMinimizeNode();
const IconNewMarginNode = iconNewMarginNode();

export type MarginElementMode = 'empty' | 'hide' | 'collapse' | 'expand' | 'full';

export const marginElement = EG({
  props: {
    pageId: p.req<string>(),
    marginId: p.opt<string>(),
    onchangeMarginMode: p.opt<(event: CustomEvent<{ mode: MarginElementMode }>) => any>(),
  },
})(function* (props) {
  const $ = this.attachShadow({ mode: 'open' });

  const subs: Subscription[] = [];
  let marginSub: Subscription | undefined = undefined;

  let state: MarginState = initialState;
  let mode: MarginElementMode = props.marginId != null ? 'hide' : 'empty';

  const $margin = hub.$.pipe(
    filterByActionsGroup<MarginAction>(MARGIN_ACTION),
    filter((action) => action.type !== MARGIN_ACTION.CREATE_FAIL && action.payload.id === props.marginId)
  );

  const changeSketchPadMode = (_mode: MarginElementMode) => async () => {
    const hostEl = $.host as HTMLElement;
    
    switch (_mode) {
      case 'expand':
        hostEl.style.position = 'absolute';
        hostEl.style.borderLeft = 'none';
        break;
      case 'full':
        hostEl.style.borderLeft = 'none';
        await openFullscreen(hostEl);
        break;

      case 'collapse':
        hostEl.style.position = 'relative';
        hostEl.style.borderLeft = 'solid 1px var(--light-grey)';
        await closeFullscreen();
        break;

      default:
        hostEl.style.borderLeft = 'none';
        hostEl.style.position = 'relative';
        await closeFullscreen();
        break;
    }

    mode = _mode;

    this.dispatchEvent(new CustomEvent('changeMarginMode', { detail: { mode } }));

    this.next();
  };

  const createMargin = () => {
    if (state?.data?.id == null) {
      createNewMargin(props.pageId);
    }
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
    for (;;) {
      if (props.marginId != null && props.marginId !== state.data?.id) {
        marginSub?.unsubscribe();
        marginSub = $margin.subscribe((action) => {
          state = reducer(state, action);

          this.next();
        });

        if(mode === 'empty') {
          changeSketchPadMode('collapse')();
        }

        getMarginById(props.marginId);
      }

      let toolbar = <></>;
      switch (mode as MarginElementMode) {
        case 'empty':
          toolbar = (
            <button class="btn btn_icon btn__first" title="create new margin" onclick={createMargin}>
              <IconNewMarginNode></IconNewMarginNode>
            </button>
          );
          break;
        case 'hide':
          toolbar = (
            <button class="btn btn_icon btn__first" onclick={changeSketchPadMode('collapse')}>
              <IconBulbNodeStatic isOn={false}></IconBulbNodeStatic>
            </button>
          );
          break;
        case 'collapse':
          toolbar = (
            <>
              <button class="btn btn_icon btn__first" onclick={changeSketchPadMode('hide')}>
                <IconBulbNodeStatic isOn={true}></IconBulbNodeStatic>
              </button>
              <button class="btn btn_icon btn__second" title="expand" onclick={changeSketchPadMode('expand')}>
                <IconArrowBarLeftNodeStatic></IconArrowBarLeftNodeStatic>
              </button>
              <button class="btn btn_icon btn__third" title="full" onclick={changeSketchPadMode('full')}>
                <IconMaximizeNodeStatic></IconMaximizeNodeStatic>
              </button>
            </>
          );
          break;
        case 'expand':
          toolbar = (
            <>
              <button class="btn btn_icon btn__first" title="expand" onclick={changeSketchPadMode('collapse')}>
                <IconArrowBarRightNodeStatic></IconArrowBarRightNodeStatic>
              </button>
              <button class="btn btn_icon btn__second" title="full" onclick={changeSketchPadMode('full')}>
                <IconMaximizeNodeStatic></IconMaximizeNodeStatic>
              </button>
            </>
          );
          break;
        case 'full':
          toolbar = (
            <button class="btn btn_icon btn__first" title="minimize" onclick={changeSketchPadMode('collapse')}>
              <IconMinimizeNodeStatic></IconMinimizeNodeStatic>
            </button>
          );
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
    subs.forEach((it) => it.unsubscribe());
    marginSub?.unsubscribe();
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
