import page from 'page';
import { render } from 'lit-html2';
import { EG } from '@web-companions/gfc';
import { css, setStyle } from '@web-companions/h';
import { iconGitHubNode } from './iconGitHub.node';
import { iconTreeNode } from './iconTree.node';

const IconGitHubNode = iconGitHubNode();
const IconTreeNode = iconTreeNode();

export const footerElement = EG()(function* () {
  setStyle(require('./style.scss'), this);

  let firstPath = location.pathname.split('/')[1];
  let backUrl: string | null = null;

  page('*', (ctx, next) => {
    firstPath = ctx.pathname.split('/')[1];

    next(); // process next route handlers
    this.next(); // render this element again
  });

  while (true) {
    switch (firstPath) {
      case 'draft':
        backUrl = '/drafts';
        break;
      case 'note':
        backUrl = '/notes';
        break;
      default:
        backUrl = null;
    }


    yield render(
      <>
        <nav class="navbar">
          <div class="footer__container">
            <ul class="navbar-list">
              <li class="navbar-item">
                {backUrl != null ? (
                  <a
                    class="navbar-link"
                    href={backUrl}
                    style={css`
                      display: flex;
                      align-content: center;
                      align-items: center;
                    `}
                  >
                    {'../../'}
                    <IconTreeNode></IconTreeNode>
                  </a>
                ) : (
                  <div
                    style={css`
                      height: 6.5rem;
                      line-height: 6.5rem;
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <IconTreeNode></IconTreeNode>
                  </div>
                )}
              </li>
            </ul>

            <ul class="navbar-list">
              <li class="navbar-item">
                <a
                  class="navbar-link"
                  href="https://github.com/sumbad"
                  style={css`
                    display: flex;
                    align-content: center;
                    align-items: center;
                  `}
                >
                  <IconGitHubNode></IconGitHubNode>
                  GitHub
                </a>
              </li>
              <li class="navbar-item">
                <span class="copyright">© Copyright 2022 Denis Sumbaev</span>
              </li>
            </ul>
          </div>
        </nav>
      </>,
      this
    );
  }
});
