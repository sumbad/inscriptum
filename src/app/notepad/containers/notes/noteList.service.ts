import { sdk } from 'api';
import { GetAllNotesQuery } from 'api/generated';
import hub from 'hub';
import { AUTH_ACTION } from 'hub/auth/auth.action';
import { authState } from 'hub/auth/auth.state';
import { IListItem } from 'new-components/list/list.element';
import { first } from 'rxjs/operators';
import { config } from 'settings';

export enum NoteAction {
  edit,
  delete,
}

/**
 * Check auth and get notes
 *
 * @returns
 */
export async function initNoteList(): Promise<IListItem[]> {
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
    notes = (await sdk().getAllNotes()).notes;
  }

  let auth = await authState.pipe(first()).toPromise();

  const hasAuth = auth?.data != null;

  if (!hasAuth && auth?.isLoading) {
    hub.dispatch({
      type: AUTH_ACTION.AUTH,
      payload: {
        silent: true,
      },
    });

    auth = await authState.pipe(first((state) => !state.isLoading)).toPromise();
  }

  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', month: 'short', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false
  };
  const dateTimeFormat = new Intl.DateTimeFormat(undefined, options).format;  

  return notes.map((item) => {
    return {
      id: item.id,
      preview: item.preview,
      linkUrl: item.static_link + (config.isDevMode ? '.html' : ''),
      linkRel: 'external',
      createdAt: item.created_at && dateTimeFormat(new Date(item.created_at)),
      updatedAt: item.updated_at && dateTimeFormat(new Date(item.updated_at)),
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
