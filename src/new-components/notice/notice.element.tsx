import { EG, p } from '@web-companions/gfc';
import { ComponentFuncThis } from '@web-companions/gfc/@types';
import { render } from 'lit-html2';
import { createRef, ref } from 'lit-html2/directives/ref.js';

export interface NoticeProps {
  status: 'success' | 'warning' | 'error' | 'notice' | 'plain';
  type: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left' | 'bar-top' | 'bar-bottom';
  message: string;
}

export interface NoticeElementType extends ComponentFuncThis<NoticeProps> {
  hide: () => void;
}

export const noticeElement = EG<NoticeProps>({
  props: {
    status: p.req('status'),
    type: p.req('type'),
    message: p.req(),
  },
})(function* (this: NoticeElementType, params) {
  let _params = params;
  const notifyRef = createRef<HTMLDivElement>();

  function onClickNotification(event: PointerEvent) {
    event.stopPropagation();
  }

  // function onClickBtn(event: PointerEvent) {
  //   const target = event.currentTarget as HTMLButtonElement | null;

  //   if (target != null && typeof target.dataset.type === 'string' && typeof target.dataset.status === 'string' && notifyRef.value != null) {
  //     show({
  //       message:
  //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, reprehenderit obcaecati itaque. Officiis libero provident perspiciatis eum fugiat laudantium sequi.',
  //       status: target.dataset.status as any,
  //       type: target.dataset.type as any,
  //     });
  //   }

  //   event.stopPropagation();
  // }

  function show(noticeProps: Partial<NoticeProps>) {
    if (noticeProps.message == null || noticeProps.status == null || noticeProps.type == null || notifyRef.value == null) {
      return;
    }

    notifyRef.value.setAttribute('data-notification-status', noticeProps.status);

    notifyRef.value.removeAttribute('class');
    notifyRef.value.classList.add('notify');
    notifyRef.value.classList.add(noticeProps.type);
    notifyRef.value.classList.add('do-show');
  }

  /**
   * Hide an opened notification
   */
  this.hide = () => {
    if (notifyRef.value != null) {
      notifyRef.value.classList.add('do-hide');
    }
  };

  try {
    requestAnimationFrame(() => {
      document.addEventListener('click', this.hide);
      show(_params);
    });

    while (true) {
      if (params != _params) {
        _params = params;
        show(_params);
      }

      params = yield render(
        <>
          <style>{require('./notice.style.scss')}</style>

          <div class="notify" ref={ref(notifyRef)} onclick={onClickNotification}>
            {params.message != null ? params.message : ''}
          </div>

          {/* <nav>
            <button class="button" data-type="top-left" data-status="success" onclick={onClickBtn}>
              Top Left
            </button>
            <button class="button" data-type="top-right" data-status="warning" onclick={onClickBtn}>
              Top Right
            </button>
            <button class="button" data-type="bottom-right" data-status="error" onclick={onClickBtn}>
              Bottom Right
            </button>
            <button class="button" data-type="bottom-left" data-status="notice" onclick={onClickBtn}>
              Bottom Left
            </button>
            <button class="button" data-type="bar-top" data-status="plain" onclick={onClickBtn}>
              Top bar
            </button>
            <button class="button" data-type="bar-bottom" data-status="plain" onclick={onClickBtn}>
              Bottom bar
            </button>
          </nav> */}
        </>,
        this
      );
    }
  } finally {
    document.removeEventListener('click', this.hide);
  }
});
