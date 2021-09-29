import { EG, p } from '@web-companions/gfc';
import { getMarginById } from './margin.service';
import { initialState, margin$, MarginState, reducer } from './margin.state';
import { render } from 'lit-html2';
import { sketchPadElement } from 'new-components/sketch-pad/sketchPad.element';
import { css } from 'utils/common';
import { iconArrowBarLeftNode } from './iconArrowBarLeft.node';
import { iconArrowBarRightNode } from './iconArrowBarRight.node';
import { iconBulbNode } from './iconBulb.node';

const SketchPadElement = sketchPadElement('sketch-pad');
const IconArrowBarLeftNode = iconArrowBarLeftNode();
const IconArrowBarRightNode = iconArrowBarRightNode();
const IconBulbNode = iconBulbNode();

export const marginElement = EG({
  props: {
    marginId: p.req<string>(),
  },
})(function* (
  this: HTMLElement & {
    next(): Promise<void>; // TODO: add right type for the next()
  },
  props
) {
  const $ = this.attachShadow({ mode: 'open' });

  let state: MarginState = initialState;
  let isExpanded = false;
  let isShow = true;

  const sub = margin$(props.marginId).subscribe((action) => {
    state = reducer(state, action);
    this.next();
  });

  const toggleExpand = () => {
    isExpanded = !isExpanded;
    if (isExpanded) {
      ($.host as HTMLElement).style.position = 'absolute';
    } else {
      ($.host as HTMLElement).style.position = 'relative';
    }

    this.next();
  };

  const toggleShow = () => {
    isShow = !isShow;
    this.next();
  };

  try {
    while (true) {
      if (props.marginId !== state.data?.id) {
        getMarginById(props.marginId);
      }

      props = yield render(
        <>
          <style>{require('./margin.scss')}</style>

          <button
            class="btn btn_icon btn__show"
            onclick={toggleShow}
            style={css`
              visibility: ${!isExpanded ? 'visible' : 'hidden'};
            `}
          >
            <IconBulbNode isOn={isShow}></IconBulbNode>
          </button>

          <button
            class="btn btn_icon btn__expand"
            title={`${isExpanded ? 'expand' : 'collapse'}`}
            onclick={toggleExpand}
            style={css`
              visibility: ${isShow ? 'visible' : 'hidden'};
            `}
          >
            {isExpanded ? <IconArrowBarRightNode></IconArrowBarRightNode> : <IconArrowBarLeftNode></IconArrowBarLeftNode>}
          </button>

          {state.data ? (
            <SketchPadElement
              style={css`
                visibility: ${isShow ? 'visible' : 'hidden'};
              `}
              data={state.data}
              isExpanded={isExpanded}
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
