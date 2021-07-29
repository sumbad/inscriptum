import { EG, useEffect, useReducer } from '@web-companions/fc';
import { MarginAction } from './margin.action';
import { getMarginById } from '../../services/margin.service';
import { initialState, margin$, MarginState, reducer } from './margin.state';
import { render } from 'lit-html';
import { sketchPadElement } from 'new-components/sketch-pad/SketchPad.element';
import { css } from 'utils/common';

const SketchPadElement = sketchPadElement('sketch-pad');

export const marginElement = EG({
  props: {
    marginId: String,
    pageId: String,
  },
  render,
  shadow: {
    mode: 'open',
  },
})(function (this: HTMLElement, props) {
  // TODO: fix types for useReducer
  const [state, dispatch]: [MarginState, (action: MarginAction) => void] = useReducer(reducer, initialState) as any;

  useEffect(() => {
    const sub = margin$(props.marginId).subscribe((action) => dispatch(action as any));

    if (props.marginId != null) {
      getMarginById(props.marginId);
    }

    return () => {
      sub.unsubscribe();
    };
  }, [props.marginId]);

  return (
    <>
      <style>{require('./margin.scss')}</style>
      {state.data ? (
        <SketchPadElement
          style={css`
            width: 100%;
          `}
          data={state.data}
        ></SketchPadElement>
      ) : (
        ''
      )}
    </>
  );
});
