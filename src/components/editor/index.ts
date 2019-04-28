import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBold, faCamera, faCode, faFileExport, faHeading, faItalic, faLink, faMinus, faPlay, faPlus, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { AbstractElement, attr, Define, state } from 'abstract-element';
import litRender from 'abstract-element/render/lit';
import { html, TemplateResult } from 'lit-html';
import page from 'page';
import Delta from 'quill-delta';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from 'storage/storage.service';
import { AuthService } from '../../auth';
import * as QuillRegister from './editor';
import { EditorTooltipComponent } from './editor/tooltip';
import template from './template';
import { loadStyleFile } from 'utils/common';


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



/**
 * The demo web component with lit-html render engine
 */
@Define('inscriptum-editor')
export class EditorComponent extends AbstractElement {
  styles = html`<style>${require('./style.scss')}</style>`;
  tooltip = new EditorTooltipComponent();
  $tl_article: HTMLDivElement;

  @state()
  isPreloader = true;

  /** draft id */
  @attr('data-id')
  id: string;

  /** the event a content changed */
  changedContent$ = new BehaviorSubject<string | null>(null);


  constructor(
    private _storageService: StorageService = new StorageService(),
    private _authService: AuthService = new AuthService(_storageService, `${document.location.origin}/notes/drafts`),
  ) {
    super(litRender, false);
    loadStyleFile('/css/core_editor.css');
    loadStyleFile('/css/custom_editor_fonts.css');
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
    return template(
      {
        isPreloader: this.isPreloader,
        styles: this.styles,
        tooltip: this.tooltip
      }
    );
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
