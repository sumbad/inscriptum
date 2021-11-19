import { EG } from '@web-companions/gfc';
import { render } from 'lit-html2';
import type { Subscription } from 'rxjs';
import page from 'page';

import 'components/list';
import { IListItem } from 'components/list';
import { createNewDraft, deleteDraftById, DraftAction, getAllDrafts } from './draftList.service';
import { newDraftIconNode } from './newDraftIcon.node';
import { saveIconNode } from './saveIcon.node';
import { menuElement } from 'new-components/menu/menu.element';
import { supervise } from 'utils/component.tools';

const NewDraftIconNode = newDraftIconNode();
const SaveIconNode = saveIconNode();
const MenuElement = menuElement('inscriptum-menu');

export const draftListElement = EG()(function* () {
  const subs: Subscription[] = [];
  let drafts: IListItem[] = [];
  let isPreloader = true;

  /**
   * Save all drafts as JSON file
   *
   * @param event
   */
  const handleBtnExportAllDrafts = (event: MouseEvent) => {
    event.preventDefault();

    const content = JSON.stringify(drafts);
    const a = document.createElement('a');
    const blob = new Blob([content], { type: 'application/octet-stream' });

    a.href = window.URL.createObjectURL(blob);
    a.download = 'drafts.json';
    a.click();
  };

  /**
   * Handle draft actions
   *
   * @param type - action type
   * @param id - draft id
   */
  const handleAction = ({ detail }: { detail: { type: DraftAction; id: string } }) => {
    switch (detail.type) {
      case DraftAction.delete:
        _deleteDraftById(detail.id);
        break;
    }
  };

  const { $: $getAllDrafts, _: _getAllDrafts } = supervise(getAllDrafts);
  const { $: $createNewDraft, _: _createNewDraft } = supervise(createNewDraft);
  const { $: $deleteDraftById, _: _deleteDraftById } = supervise(deleteDraftById);

  subs.push(
    $getAllDrafts.subscribe((d) => {
      drafts = d;
      isPreloader = false;

      this.next();
    })
  );

  subs.push(
    $createNewDraft.subscribe((d) => {
      page('/draft/' + d.id);
    })
  );

  subs.push(
    $deleteDraftById.subscribe((deletedDraft) => {
      drafts = drafts.filter((d) => d.id !== deletedDraft.id);

      this.next();
    })
  );

  _getAllDrafts();

  try {
    while (true) {
      yield render(
        <div class="container">
          <style>${require('./style.scss')}</style>

          <MenuElement></MenuElement>

          <um-preloader loading={isPreloader}>
            <div class="row">
              <div class="twelve columns um-drafts__submenu">
                <button class="btn btn_icon" title="Export all drafts" onclick={handleBtnExportAllDrafts}>
                  <SaveIconNode></SaveIconNode>
                </button>
                <button class="btn btn_icon" title="Create a new draft" onclick={_createNewDraft}>
                  <NewDraftIconNode></NewDraftIconNode>
                </button>
              </div>
            </div>

            <inscriptum-list onaction={handleAction} value={drafts}></inscriptum-list>
          </um-preloader>
        </div>,
        this
      );
    }
  } finally {
    subs.forEach((it) => it.unsubscribe());
  }
});
