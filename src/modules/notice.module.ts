import hub from 'hub';
import { NOTICE_ACTION } from 'hub/notice.action';
import { noticeElement } from 'new-components/notice/notice.element';
import { filterByActionsGroup } from 'utils/operators';

export function noticeModule() {
  const NoticeElementConstructor = noticeElement('inscriptum-notice');
  const NoticeElement = new NoticeElementConstructor();
  document.body.appendChild(NoticeElement);

  hub.$.pipe(filterByActionsGroup(NOTICE_ACTION)).subscribe((d) => {
    switch (d.type) {
      case NOTICE_ACTION.SHOW:
        NoticeElement.props = d.payload;

        if (d.payload.status === 'success') {
          setTimeout(() => {
            NoticeElement.hide();
          }, 3500);
        }
        break;
      case NOTICE_ACTION.HIDE:
        NoticeElement.hide();
        break;
    }
  });

  return {};
}
