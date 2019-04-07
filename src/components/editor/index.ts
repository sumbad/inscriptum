import page from 'page';
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
import { EditorTooltipComponent } from './editor/tooltip';
import * as QuillRegister from './editor';



/**
 * The demo web component with lit-html render engine
 */
@Define('inscriptum-editor')
export class EditorComponent extends AbstractElement {
  html = litHtml.html;
  styles = require('./style.scss');
  tooltip = new EditorTooltipComponent();
  $tl_article: HTMLDivElement;

  @state()
  isPreloader = true;

  /** draft id */
  @attr('draft-id')
  id: string;

  /** the event a content changed */
  changedContent$ = new BehaviorSubject<string | null>(null);


  constructor(
    private _storageService: StorageService = new StorageService(),
    private _authService: AuthService = new AuthService(_storageService, `${document.location.origin}/notes/drafts`),
  ) {
    super(litRender, false);
  }


  /**
   * LIFECYCLE
   */
  connectedCallback() {
    super.connectedCallback();
    // For fontawesome icons. Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch();

    // let $tl_article = this.getElementsByClassName('tl_article')[0];
    const editorContainerEl = this.querySelector('#_tl_editor') as HTMLDivElement;

    const quill = QuillRegister.editor(this.tooltip, editorContainerEl);

    if (this._authService.$authenticated.getValue()) {
      this.loadContent(quill);
    } else {
      this._authService.$authenticated.subscribe(
        hasAuth => {
          if (hasAuth === false) {
            page('/notes/drafts');
          } else if (hasAuth) {
            this.loadContent(quill);
          }
        }
      );
    }

    // @TODO: only develop mode
    window['quill'] = quill;

    // Store accumulated changes
    var change = new Delta();
    quill.on('text-change', (delta) => {
      change = change.compose(delta);
      this.changedContent$.next(quill.getContents());
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

    // // Check for unsaved data
    // window.onbeforeunload = function () {
    //   if (change.length() > 0) {
    //     return 'There are unsaved changes. Are you sure you want to leave?';
    //   }
    // }
  }


  /**
   * LIFECYCLE
   */
  disconnectedCallback() {
    window.onbeforeunload = null;
  }


  render(): TemplateResult {
    return template.call({...this});
  }


  /**
   * Load editor content
   * @param quill - quill instance
   */
  loadContent(quill) {
    this._storageService.getDraft(this.id).then(
      data => {
        console.log('id = ' + this.id);
        console.log(data);
        quill.setContents(data.Draft.contents);

        this.isPreloader = false;
        // this.id = data.Draft.id;
        // quill.setContents(data.Draft.contents);
      }
    );
  }

}
