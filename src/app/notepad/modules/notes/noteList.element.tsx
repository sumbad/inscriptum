import { EG } from '@web-companions/gfc';
import { IListItem } from 'components/list';
import { render } from 'lit-html2';
import type { Subscription } from 'rxjs';
import { supervise } from 'utils/component.tools';
import { initNoteList, NoteAction } from './noteList.service';
import page from 'page';

import 'components/list';
import { menuElement } from 'new-components/menu/menu.element';

// DEBUG:
// import { marginElement } from 'new-components/margin/margin.element';
// const MarginElement = marginElement('m-e');

const MenuElement = menuElement('inscriptum-menu');

export const noteListElement = EG()(function* () {
  const subs: Subscription[] = [];

  let isPreloader = true;
  let notes: IListItem[] = [];

  const { _: _initNoteList, $: $initNoteList } = supervise(initNoteList);

  _initNoteList();

  subs.push(
    $initNoteList.subscribe((_notes) => {
      notes = _notes;
      isPreloader = false;

      this.next();
    })
  );

  /**
   * Handle note actions
   *
   * @param type - action type
   * @param id - note id
   */
  const handleAction = ({ detail }: { detail: { type: NoteAction; id: string } }) => {
    switch (detail.type) {
      case NoteAction.edit:
        page('/draft/' + detail.id);
        break;
    }
  };

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

          <um-preloader loading={isPreloader}>
            <inscriptum-list onaction={handleAction} value={notes}></inscriptum-list>
          </um-preloader>
        </div>
      </>,
      this
    );
  }
});
