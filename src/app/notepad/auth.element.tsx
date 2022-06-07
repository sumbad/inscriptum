import { EG, p } from '@web-companions/gfc';
import hub from 'hub';
import { AUTH_ACTION } from 'hub/auth/auth.action';
import { render } from 'lit-html2';
import { createRef, Ref, ref } from 'lit-html2/directives/ref.js';
import { css } from 'utils/component.tools';

export const authElement = EG({
  props: {
    isOpen: p.opt<boolean>('is-open'),
    message: p.opt<string>(),
  },
})(function* (params) {
  const dialogRef: Ref<HTMLDialogElement & { showModal: Function; close: Function }> = createRef();
  const emailRef: Ref<HTMLInputElement> = createRef();
  const passwordRef: Ref<HTMLInputElement> = createRef();

  let isOpen = params.isOpen;

  function toggleDialog(_isOpen: boolean) {
    const dialogEl = dialogRef.value;
    if (dialogEl != null) {
      if (_isOpen) {
        dialogEl.showModal();
      } else {
        dialogEl.close();
      }
    }
  }

  const onClose = () => {
    const email = emailRef.value?.value;
    const password = passwordRef.value?.value;

    if (email != null && password != null) {
      hub.dispatch({
        type: AUTH_ACTION.SING_IN,
        payload: {
          email,
          password,
        },
      });
    }

    isOpen = false;
  };

  const onCancel = (event) => {
    event.preventDefault();
  };

  while (true) {
    if (params.isOpen !== isOpen) {
      isOpen = params.isOpen;
      toggleDialog(isOpen ?? false);
    }

    params = yield render(
      <dialog ref={ref(dialogRef)} onclose={onClose} oncancel={onCancel}>
        <form method="dialog">
          <p
            style={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <label
              style={css`
                display: flex;
                justify-content: space-between;
                gap: 2rem;
              `}
            >
              Email:
              <input type="email" ref={ref(emailRef)} autocomplete="email" />
            </label>
            <label
              style={css`
                display: flex;
                justify-content: space-between;
                gap: 2rem;
              `}
            >
              Password:
              <input type="password" ref={ref(passwordRef)} autocomplete="current-password"/>
            </label>
          </p>
          {params.message != null ? <p>{params.message}</p> : ''}
          <menu
            style={css`
              float: right;
              margin: 0;
            `}
          >
            <button class="button" type="submit">
              Sign in
            </button>
          </menu>
        </form>
      </dialog>,
      this
    );
  }
});
