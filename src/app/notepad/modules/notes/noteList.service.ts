import { sdk } from 'api';
import { GetAllNotesQuery } from 'api/generated';
import hub from 'hub';
import { AUTH_ACTION } from 'hub/auth/auth.action';
import { authState } from 'hub/auth/auth.state';
import { first } from 'rxjs/operators';
import { config } from 'settings';
import { authorized } from 'utils/guards';

export enum NoteAction {
  edit,
  delete,
}

/**
 * Check auth and get notes
 *
 * @returns
 */
export async function initNoteList() {
  let notes: GetAllNotesQuery['notes'] = [];

  try {
    notes = (
      process.env.NODE_ENV === 'development'
        ? await import(
            /* webpackInclude: /\.json$/ */
            /* webpackChunkName: "notes-list" */
            `public/note/${config.nodeListFileName}`
          )
        : await import(
            /* webpackInclude: /\.json$/ */
            /* webpackExclude: /\.dev\.json$/ */
            /* webpackChunkName: "notes-list" */
            `public/note/${config.nodeListFileName}`
          )
    ).default;
  } catch (error) {
    notes = await authorized(async () => {
      return (await sdk().getAllNotes()).notes;
    });
  }

  let auth = await authState.pipe(first()).toPromise();

  if (auth.data == null && !auth.isLoading) {
    hub.dispatch({
      type: AUTH_ACTION.AUTH,
      payload: {
        silent: true,
      },
    });

    auth = await authState.pipe(first((state) => !state.isLoading)).toPromise();
  }

  const hasAuth = auth.data != null;

  return notes.map((item) => {
    return {
      id: item.id,
      preview: item.preview,
      linkUrl: item.static_link + (config.isDevMode ? '.html' : ''),
      linkRel: 'external',
      actions: () =>
        hasAuth
          ? [
              {
                type: NoteAction.edit,
                label: 'edit',
              },
            ]
          : [],
    };
  });
}
