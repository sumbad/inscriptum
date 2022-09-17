import { render } from 'lit-html2';
import { EG } from '@web-companions/gfc';
import { css, setStyle } from '@web-companions/h';
import { iconGitHubNode } from './iconGitHub.node';
import { iconTreeNode } from './iconTree.node';

const IconGitHubNode = iconGitHubNode();
const IconTreeNode = iconTreeNode();

export const footerElement = EG()(function* () {
  setStyle(require('./style.scss'), this);

  const firstPath = location.pathname.split('/')[1];
  let backUrl = '/';

  switch (firstPath) {
    case 'draft':
      backUrl = '/drafts';
      break;
    case 'note':
      backUrl = '/notes';
      break;
  }

  while (true) {
    yield render(
      <>
        <nav class="navbar">
          <div class="footer__container">
            <ul class="navbar-list">
              <li class="navbar-item">
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
