import { EG } from '@web-companions/gfc';
import { render } from 'lit-html2';
import page from 'page';

import { createNewDraft, deleteDraftById, DraftAction, getAllDrafts } from './draftList.service';
import { newDraftIconNode } from './newDraftIcon.node';
import { saveIconNode } from './saveIcon.node';
import { menuElement } from 'components/menu/menu.element';
import { supervise } from 'utils/component.tools';
import { IListItem, listElement } from 'components/list/list.element';
import { preloaderElement } from 'components/preloader/preloader.element';

const NewDraftIconNode = newDraftIconNode();
const SaveIconNode = saveIconNode();
const MenuElement = menuElement('inscriptum-menu');
const ListElement = listElement('inscriptum-list');
const PreloaderElement = preloaderElement('inscriptum-preloader');

export const draftListElement = EG()(function* () {
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

  $getAllDrafts.subscribe((d) => {
    drafts = d;
    isPreloader = false;

    this.next();
  });

  $createNewDraft.subscribe((d) => {
    page('/draft/' + d.id);
  });

  $deleteDraftById.subscribe((deletedDraft) => {
    drafts = drafts.filter((d) => d.id !== deletedDraft.id);

    this.next();
  });

  _getAllDrafts();

  try {
    while (true) {
      yield render(
        <div class="container">
          <style>${require('./style.scss')}</style>

          <MenuElement></MenuElement>

          <PreloaderElement loading={isPreloader}>
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

            <ListElement list={drafts} onaction={handleAction}></ListElement>
          </PreloaderElement>
        </div>,
        this
      );
    }
  } finally {
    $getAllDrafts.complete();
    $createNewDraft.complete();
    $deleteDraftById.complete();
  }
});
