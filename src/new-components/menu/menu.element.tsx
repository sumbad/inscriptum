import { render } from 'lit-html2';
import { EG } from '@web-companions/gfc';
import { authState } from 'hub/auth/auth.state';
import { first } from 'rxjs/operators';

export const menuElement = EG()(function* () {
  let hasAuth = false;

  authState.pipe(first((state) => state.data?.accessToken != null && !state.isLoading)).subscribe(() => {
    hasAuth = true;

    this.next();
  });

  while (true) {
    yield render(
      <>
        <div class="navbar-spacer"></div>
        <nav class="navbar">
          <div class="container">
            <ul class="navbar-list">
              <li class="navbar-item">
                <a class="navbar-link" href="/notes">
                  Notes
                </a>
              </li>
              <li class="navbar-item">
                <a class="navbar-link" href="/conference">
                  Slides
                </a>
              </li>
              {hasAuth ? (
                <li class="navbar-item">
                  <a class="navbar-link" href="/drafts">
                    Drafts
                  </a>
                </li>
              ) : (
                ''
              )}
            </ul>
          </div>
        </nav>
      </>,
      this
    );
  }
});
