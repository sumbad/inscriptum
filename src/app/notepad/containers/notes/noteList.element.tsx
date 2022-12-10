import { EG } from '@web-companions/gfc';
import { render } from 'lit-html2';
import { supervise } from 'utils/component.tools';
import { initNoteList, NoteAction } from './noteList.service';
import page from 'page';

import { menuElement } from 'components/menu/menu.element';
import { IListItem, listElement } from 'components/list/list.element';
import { preloaderElement } from 'components/preloader/preloader.element';

// DEBUG:
// import { marginElement } from 'new-components/margin/margin.element';
// const MarginElement = marginElement('m-e');

const MenuElement = menuElement('inscriptum-menu');
const ListElement = listElement('inscriptum-list');
const PreloaderElement = preloaderElement('inscriptum-preloader');

export const noteListElement = EG()(function* () {
  let isPreloader = true;
  let notes: IListItem[] = [];

  const { _: _initNoteList, $: $initNoteList } = supervise(initNoteList);

  _initNoteList();

  $initNoteList.subscribe((_notes) => {
    notes = _notes;
    isPreloader = false;

    this.next();
  });

  /**
   * Handle note actions
   */
  const handleAction = ({ detail }: { detail: { type: NoteAction; id: string } }) => {
    switch (detail.type) {
      case NoteAction.edit:
        page('/draft/' + detail.id);
        break;
    }
  };

  try {
    while (true) {
      yield render(
        <>
          <style>{require('../../../../scss/skeleton/skeleton.scss')}</style>
          <div class="container">
            <MenuElement></MenuElement>

            {/* 
          // DEBUG:
          <div style={css`
            height: 1000px;
            width: 800px;
          `}>
            <MarginElement marginId={'0'} onchangeMarginMode={() => {}}></MarginElement>
          </div> */}

            <PreloaderElement loading={isPreloader}>
              <ListElement list={notes} onaction={handleAction}></ListElement>
            </PreloaderElement>
          </div>
        </>,
        this
      );
    }
  } finally {
    $initNoteList.complete();
  }
});
