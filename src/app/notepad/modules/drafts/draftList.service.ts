import { sdk } from 'api';
import { IListItem } from 'components/list';
import type Delta from 'quill-delta';
import { defer, Subject } from 'rxjs';
import { config } from 'settings';
import { quillDelta2Preview, redactorContent2Preview } from 'utils/common';
import { authorized } from 'utils/guards';
import { Unpacked } from 'utils/types';

const MESSAGES = {
  CANT_FIND_ID: "Can't find ID for a new draft",
  AUTHOR_NOT_FOUND: 'Author was not found',
  cantDeleteDraft: (id: string) => `Can't delete draft ${id}`,
};

export enum DraftAction {
  delete,
  publish,
}

export async function getAllDrafts(): Promise<IListItem[]> {
  return await authorized(async () => {
    const { drafts } = await sdk().getAllDrafts();

    return drafts.map((item) => {
      const content = item.pages[0].content;
      const { description, title, image } =
        content != null && 'ops' in content ? quillDelta2Preview(content as Delta) : redactorContent2Preview(content);
      const tags =
        item.notes.length > 0
          ? [
              {
                code: 'note',
                link:
                  item.notes[0].static_link != null
                    ? {
                        href: item.notes[0].static_link + (config.isDevMode ? '.html' : ''),
                        rel: 'external',
                      }
                    : undefined,
              },
            ]
          : undefined;

      return {
        id: item.id,
        preview: {
          title,
          description,
          image,
        },
        linkUrl: '/draft/' + item.id,
        actions: [
          {
            label: 'delete',
            type: DraftAction.delete,
          },
        ],
        tags,
      };
    });
  });
}

export async function createNewDraft() {
  return await authorized(async (auth) => {
    const author = (await sdk().findAuthorByAuth0({ auth0_id: auth.userInfo.auth0Id })).author[0];

    if (author == null) {
      alert(MESSAGES.AUTHOR_NOT_FOUND);
      throw new Error(MESSAGES.AUTHOR_NOT_FOUND);
    }

    const { insert_draft_one } = await sdk().createNewDraft({
      author_id: author.id,
    });

    if (insert_draft_one == null) {
      alert(MESSAGES.CANT_FIND_ID);
      throw new Error(MESSAGES.CANT_FIND_ID);
    }

    return insert_draft_one;
  });
}

export async function deleteDraftById(id: string) {
  return await authorized(async () => {
    const { update_draft_by_pk } = await sdk().deleteDraftById({
      id,
      ended_at: new Date().toISOString(),
    });

    if (update_draft_by_pk == null) {
      alert(MESSAGES.CANT_FIND_ID);
      throw new Error(MESSAGES.cantDeleteDraft(id));
    }

    return update_draft_by_pk;
  });
}

// TODO: rename and move to common utils
export function doSubject<T extends (...args: any[]) => any>(func: T) {
  const subject = new Subject<Unpacked<ReturnType<typeof func>>>();

  return {
    $: subject.asObservable(),
    _: (...params: Parameters<typeof func>) => defer(() => func(...params)).subscribe(subject),
  };
}
