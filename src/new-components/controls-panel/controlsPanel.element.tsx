import { EG, p } from '@web-companions/gfc';
import hub from 'hub';
import { HUB_ACTION } from 'hub/actions';
import { render } from 'lit-html2';
import { css } from 'utils/component.tools';
import { iconPublishNode } from './iconPublish.node';

const IconPublishNode = iconPublishNode();

export const controlsPanelElement = EG({
  props: {
    draftId: p.req<string>('draft-id'),
  },
})(function* (props) {
  function publishDraft() {
    hub.dispatch({
      type: HUB_ACTION.DRAFT_PUBLISH,
      payload: {
        draftId: props.draftId,
      },
    });
  }

  while (true) {
    yield render(
      <div
        style={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <button class="btn btn_icon" onclick={publishDraft}>
          <IconPublishNode></IconPublishNode>
        </button>
      </div>,
      this
    );
  }
});
