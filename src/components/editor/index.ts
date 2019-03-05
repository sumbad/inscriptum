import { TemplateResult } from 'lit-html';
import { Define, AbstractElement, state, attr } from 'abstract-element';
import * as litHtml from 'lit-html';
import litRender from 'abstract-element/render/lit';

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



import template from './template';

/**
 * The demo web component with lit-html render engine
 */
@Define('inscriptum-editor')
export class EditorComponent extends AbstractElement {
  html = litHtml.html;
  css = require('./style.scss');

  /** draft id */
  @attr('draft-id')
  id: string;

  /** the event a content changed */
  changedContent$ = new BehaviorSubject<string | null>(null);


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

    // setTimeout(() => {
    if (this._authService.$authenticated.getValue()) {
      this.loadContent();
    } else {
      this._authService.$authenticated.subscribe(
        hasAuth => {
          if (hasAuth) {
            this.loadContent();
          }
        }
      );
    }

    const a = require('./editor/index');
    // }, 500);

    // @TODO: only develop mode
    // window['quill'] = quill;

    // For fontawesome icons. Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch();


    // Store accumulated changes
    var change = new Delta();
    window['quill'].on('text-change', (delta) => {
      change = change.compose(delta);
      this.changedContent$.next(window['quill'].getContents());
    });

    // Save periodically
    this.changedContent$
      .skip(2)
      .debounceTime(10000)
      .subscribe(
        d => {
          if (d !== null) {
            this._storageService
              .updateDraft(this.id, d)
              .then(
                () => {
                  change = new Delta();
                }
              );
          }
        }
      );

    // Check for unsaved data
    window.onbeforeunload = function () {
      if (change.length() > 0) {
        return 'There are unsaved changes. Are you sure you want to leave?';
      }
    }
  }


  render(): TemplateResult {
    const style = this.html`<style>${this.css}</style>`;

    return template(this.html, { style });
  }


  /**
 * Load editor content
 * @param quill - quill instance
 */
  loadContent() {
    this._storageService.getDraft(this.id).then(
      data => {
        console.log('id = ' + this.id);
        console.log(data);
        window['quill'].setContents(data.Draft.contents);
        // this.id = data.Draft.id;
        // quill.setContents(data.Draft.contents);
      }
    );
  }

}