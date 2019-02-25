import { TemplateResult } from 'lit-html';
import { Define, AbstractElement, state } from 'abstract-element';
import * as litHtml from 'lit-html';
import litRender from 'abstract-element/render/lit';

import hljs from 'highlight.js';

// import Quill from './register';
import Block from 'quill/blots/block';

import BlockBlot from 'parchment/dist/src/blot/block';
import { AuthService } from '../../auth';
import { StorageService } from 'storage/storage.service';
import { BehaviorSubject } from 'rxjs';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faFileExport,
  faBold,
  faItalic,
  faLink,
  faQuoteRight,
  faHeading,
  faCamera,
  faPlay,
  faMinus,
  faPlus,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Delta from 'quill-delta';


library.add(
  faFileExport,
  faBold,
  faItalic,
  faLink,
  faQuoteRight,
  faHeading,
  faCamera,
  faPlay,
  faTwitter,
  faMinus,
  faPlus,
  faCode
);



hljs.configure({
  languages: ['javascript', 'typescript', 'html', 'css']
});


import template from './template';

/**
 * The demo web component with lit-html render engine
 */
@Define('inscriptum-editor')
export class EditorComponent extends AbstractElement {
  html = litHtml.html;
  css = require('./style.scss');


  constructor(
    private _storageService: StorageService = new StorageService(),
    private _authService: AuthService = new AuthService(_storageService),
  ) {
    super(litRender, false);
  }


  /**
   * LIFECYCLE
   */
  connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      const a = require('./editor/index');
    }, 500);

    // @TODO: only develop mode
    // window['quill'] = quill;

    // For fontawesome icons. Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch()
  }


  render(): TemplateResult {
    const style = this.html`<style>${this.css}</style>`;

    return template(this.html, { style });
  }

}