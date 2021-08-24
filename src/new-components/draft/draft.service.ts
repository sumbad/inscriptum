import { JSONContent } from '@tiptap/core';
import { sdk } from 'api';
import hub from 'hub';
import { DraftModel, DraftTocModel } from 'models/draft.model';
import { NotePreview } from 'models/note.model';
import { DRAFT_ACTION } from 'new-components/draft/draft.action';
import { createHTMLbyContent } from 'new-components/redactor/tools/redactor';
import { redactorContent2Preview, transliterate } from 'utils/common';
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
              content: p.content,
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

export async function publishDraft(data: DraftModel) {
  authorized(async (auth) => {
    const MESSAGES = {
      TOO_SMALL: 'Title is too small',
      EMPTY_CONTENT: 'Content cannot be empty',
      TITLE_NOT_FOUND: 'Title was not found',
      AUTHOR_NOT_FOUND: 'Author was not found',
    };

    let pageTitle = '';
    let pageName = '';
    let pageHTML = '';
    let pagePreview: NotePreview | undefined = undefined;

    for (const page of data.pages || []) {
      const isTitle = page.order === 0;
      const jsonContent: JSONContent = page.content;

      if (jsonContent.content == null) {
        alert(MESSAGES.EMPTY_CONTENT);
        throw new Error(MESSAGES.EMPTY_CONTENT);
      }

      pageHTML += /*html*/ `<section>${createHTMLbyContent(jsonContent, isTitle)}</section>`;

      if (isTitle) {
        pagePreview = redactorContent2Preview(jsonContent);
        pageTitle = pagePreview.title.trim();
        pageName = transliterate(pageTitle).replace(/[^a-zA-Z0-9-_]/g, '-');
      }
    }

    if (pagePreview == null) {
      alert(MESSAGES.TITLE_NOT_FOUND);
      throw new Error(MESSAGES.TITLE_NOT_FOUND);
    }

    if (pageTitle.length < 2) {
      alert(MESSAGES.TOO_SMALL);
      throw new Error(MESSAGES.TOO_SMALL);
    }

    // TODO: validation: 'Upload in progress.\nPlease wait...'
    // TODO: validation: Unsaved content

    // TODO: If a draft has been already published need to set ended_at for the previous one and create a new record
    const noteInfo = {
      created_at: Date.now(),
      updated_at: Date.now(),
    };
    if (data.notes != null && data.notes.length > 0) {
    } else {
    }

    const author = (await sdk().findAuthorByAuth0({ auth0_id: auth.userInfo.auth0Id })).author[0];

    if (author == null) {
      alert(MESSAGES.AUTHOR_NOT_FOUND);
      throw new Error(MESSAGES.AUTHOR_NOT_FOUND);
    }

    const note = /*html*/ `  
    <html>
      <head>
        <meta charset="utf-8">
        <title>${pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="format-detection" content="telephone=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="MobileOptimized" content="176">
        <meta name="HandheldFriendly" content="True">
        <meta name="robots" content="index, follow">
        <meta name="description" content="${pagePreview.description}">
        <meta property="og:site_name" content="inscriptum">
        <meta property="og:type" content="article">
        <meta property="og:title" content="${pageTitle}">
        <meta property="og:description" content="${pagePreview.description}">
        <meta property="og:image" content="${pagePreview.image}">
        <meta property="article:published_time" content="${noteInfo.created_at}">
        <meta property="article:modified_time" content="${noteInfo.updated_at}">
        <meta property="article:author" content="${author.name || author.email}">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="${pageTitle}">
        <meta name="twitter:description" content="${pagePreview.description}">
        <meta name="twitter:image" content="${pagePreview.image}">
        <link rel="shortcut icon" type="image/png" href="favicon.png">
        <link href="/css/note.css" rel="stylesheet">
        <link href="/css/custom_editor_fonts.css" rel="stylesheet">
      </head>
      <body>
        ${pageHTML}
      </body>
      <script type="text/javascript" src="/js/note.js"></script>
    </html>`;

    const a = document.createElement('a');
    const blob = new Blob([note], { type: 'application/octet-stream' });

    a.href = window.URL.createObjectURL(blob);
    a.download = `${pageName}.html`;

    a.click();
  });
}
