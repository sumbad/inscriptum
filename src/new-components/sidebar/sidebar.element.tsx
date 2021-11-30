import { EG } from '@web-companions/gfc';
import { render } from 'lit-html2';
import { iconMenuNode } from './iconMenu.node';

const IconMenuNode = iconMenuNode();

export const sidebarElement = EG()(function* (this: HTMLElement) {
  const isHide = window.innerWidth <= Number(getComputedStyle(this).getPropertyValue('--ipad-min-width') ?? 0);

  while (true) {
    yield render(
      <>
        <style>{require('./sidebar.style.scss')}</style>
        <input type="checkbox" id="sidebar" name="sidebar" class="sidebar-checkbox" checked={!isHide} />
        <div class="sidebar">
          <label class="btn btn_icon sidebar-toggle" for="sidebar">
            <IconMenuNode></IconMenuNode>
          </label>
          <div class="sidebar-content">
            <slot></slot>
          </div>
        </div>
      </>,
      this.attachShadow({ mode: 'open' })
    );
  }
});
