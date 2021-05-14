import { sdk } from 'api';
import hub from 'hub';
import { DraftTocModel } from 'models/draft.model';
import { DRAFT_ACTION } from 'new-components/draft/draft.action';
import { authorized } from 'utils/guards';

export async function getById(draftId: string) {
  hub.dispatch({
    type: DRAFT_ACTION.LOADING,
    payload: {
      id: draftId,
    },
  });

  return authorized(async () => {
    const { draft } = await sdk().getDraftById({ id: draftId });

    if (draft != null) {
      hub.dispatch({
        type: DRAFT_ACTION.LOAD_DONE,
        payload: {
          id: draft.id,
          created_at: draft.created_at,
          updated_at: draft.updated_at,
          table_of_contents: draft.table_of_contents,
          notes: draft.notes,
          pages: draft.pages
            .sort((a, b) => a.order - b.order)
            .map((p, idx) => ({
              ...p,
              content: p.content ?? {},
              draftId,
              isFolded: idx !== 0,
              margins: p.margins ?? [],
            })),
        },
      });
    }
  });
}

export async function updateToc(toc: DraftTocModel[], draftId: string) {
  return authorized(async () => {
    try {
      const { update_draft_by_pk: updatedDraftToc } = await sdk().updateDraftTOC({
        id: draftId,
        table_of_contents: toc,
        updated_at: new Date().toISOString(),
      });

      if (updatedDraftToc != null) {
        hub.dispatch({
          type: DRAFT_ACTION.UPDATE_TOC_DONE,
          payload: {
            id: draftId,
            toc: updatedDraftToc.table_of_contents,
          },
        });
      }
    } catch (error) {
      hub.dispatch({
        type: DRAFT_ACTION.UPDATE_TOC_ERROR,
        payload: {
          id: draftId,
          error,
        },
      });
    }
  });
}
