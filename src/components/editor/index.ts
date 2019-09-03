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
import { loadStyleFile, quillDelta2Preview } from 'utils/common';
import { MyQuill } from './editor/MyQuill';
import { showError, getPageContent, transliterate, updateEditable, draftClear } from './editor/utils';
import { TitleBlot } from './editor/TitleBlot';


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

  @state()
  isPosted = false;

  /** id */
  @attr('data-id')
  id: string;

  /** editor flag */
  @attr('data-flag')
  set flag(val: string) {
    if (val === 'posted') {
      this.isPosted = true;
    }
  }

  /** the event a content changed */
  changedContent$ = new BehaviorSubject<string | null>(null);
  quill: MyQuill | null;

  private _authService: AuthService;
  private _storageService: StorageService;


  constructor() {
    super(litRender, false);
    loadStyleFile('/css/custom_editor_fonts.css');

    this._storageService = new StorageService();
    const redirectUrl = this.isPosted ? `${document.location.origin}/notes` : `${document.location.origin}/drafts`;
    this._authService = new AuthService(this._storageService, redirectUrl);
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
    this.quill = QuillRegister.editor(this.tooltip, editorContainerEl);

    if (this._authService.$authenticated.getValue()) {
      this.loadContent(this.quill);
    } else {
      this._authService.$authenticated.subscribe(
        hasAuth => {
          if (hasAuth !== null && this.quill) {
            if (hasAuth) {
              this.loadContent(this.quill);
            } else if (this.isPosted) {
              page('/notes');
            } else {
              page('/notes/drafts');
            }
          }
        }
      );
    }

    // @TODO: only develop mode
    window['quill'] = this.quill;

    // Store accumulated changes
    var change = new Delta();
    this.quill.on('text-change', (delta) => {
      change = change.compose(delta);
      this.changedContent$.next((this.quill as MyQuill).getContents());
    });

    // Save periodically
    this.changedContent$
      .skip(2)
      .debounceTime(10000)
      .subscribe(
        d => {
          if (d !== null && !this.isPosted) {
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
    this.quill = null;
  }


  render(): TemplateResult {
    return template(
      {
        isPreloader: this.isPreloader,
        styles: this.styles,
        tooltip: this.tooltip
      },
      {
        publish: this.publish.bind(this)
      }
    );
  }


  /**
   * Load editor content
   * @param quill - quill instance
   */
  async loadContent(quill: MyQuill) {
    let content: object;
    if (this.isPosted) {
      content = (await this._storageService.getNote(this.id)).Note.content;
    } else {
      content = (await this._storageService.getDraft(this.id)).Draft.contents;
    }

    quill.setContents(content);
    this.isPreloader = false;
  }


  /**
   * Publish this draft
   */
  async publish() {
    if (this.quill === undefined || this.quill === null) {
      return;
    }

    let $tl_article = document.querySelector('.tl_article') as HTMLElement;
    let $tl_header = document.querySelector('.tl_article_header') as HTMLElement;
    let $tl_content = document.querySelector('.tl_article_content') as HTMLElement;

    if ($tl_article.classList.contains('tl_article_saving')) {
      return false;
    }

    let title = ($tl_content.querySelector('h1') as HTMLHeadElement).textContent || '';
    let author = ($tl_content.querySelector('address') as HTMLElement).textContent || '';
    // let author_url = ($tl_content.querySelector('address a') as HTMLLinkElement).href || '';

    if (title.length < 2) {
      clearTimeout($tl_article['to']);
      $tl_article.classList.add('title_required');
      $tl_article['to'] = setTimeout(() => {
        $tl_article.classList.remove('title_required');
      }, 3000);
      this.quill.focus();
      let [title] = this.quill.scroll.descendants(TitleBlot, 0, this.quill.scroll.length());
      this.quill.setSelection(title.offset(), title.length() - 1);
      // quill.selection.scrollIntoView();
      return showError('Title is too small');
    }

    // let loading_images = $('img[src^="data:"],video[src^="data:"]');
    let loading_images = $tl_content.querySelectorAll('img[src^="data:"],video[src^="data:"]');
    if (loading_images.length) {
      return showError('Upload in progress.\nPlease wait...');
    }

    /** @todo - not need */
    let content = getPageContent(false, this.quill);
    if (content.length > 65536) {
      return showError('Content is too big');
    }

    updateEditable(false, this.quill, this.tooltip, $tl_article, $tl_content, $tl_header);

    // const pageEl = document.querySelector('.tl_page_wrap');
    let pageHTML = '';
    let firstImgSrc = '';

    /** @todo - add logic from getPageContent */
    const pageEl = this._removeElementsBySelectors(
      document.querySelector('.tl_page_wrap'),
      [
        'article .ql-editor h1',
        'article .ql-editor address',
        'article .ql-clipboard',
        '#_tl_link_tooltip',
        '#_tl_tooltip',
        '#_tl_blocks',
        'inscriptum-editor-tooltip',
        'aside .account_top',
        'aside .publish_button',
        'aside .account_bottom',
        'aside .error_msg',
      ]
    );

    $tl_article.classList.add('tl_article_saving');

    if (pageEl === null) {
      $tl_article.classList.remove('tl_article_saving');
      return showError('Content cannot be empty');
    }

    const firstImg: HTMLImageElement | null = pageEl.querySelector('figure img');
    firstImgSrc = firstImg ? firstImg.src : '';

    const quillDelta = this.quill.getContents();

    const { content: previewContent } = quillDelta2Preview(quillDelta);

    const name = transliterate(title).replace(/[^a-zA-Z0-9-_]/g, '-');

    let noteInfo: { id: any; createdAt: any; updatedAt: any; };
    if (this.isPosted) {
      noteInfo = (await this._storageService.updateNote(this.id, author, name, title, quillDelta)).updateNote;
    } else {
      noteInfo = (await this._storageService.createNote(author, name, title, quillDelta)).createNote;
      // delete this draft
      this._storageService.deleteDraft(this.id);
      draftClear();
    }

    this.isPosted = true;
    this.id = noteInfo.id;
    window.history.pushState(noteInfo, document.title, `${document.location.origin}/editor/${this.id}/posted`);
    $tl_article.classList.remove('tl_article_saving');
    updateEditable(true, this.quill, this.tooltip, $tl_article, $tl_content, $tl_header);

    if(pageEl!==null) {
      (pageEl.querySelector('#_edit_button') as HTMLLinkElement).href = `/editor/${this.id}/posted`;
      pageHTML = pageEl.outerHTML;
    }

    const note = /*html*/`  
<html>
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="MobileOptimized" content="176">
    <meta name="HandheldFriendly" content="True">
    <meta name="robots" content="index, follow">
    <meta property="og:site_name" content="inscriptum">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${previewContent}">
    <meta property="og:image" content="${firstImgSrc}">
    <meta property="article:published_time" content="${noteInfo.createdAt}">
    <meta property="article:modified_time" content="${noteInfo.updatedAt}">
    <meta property="article:author" content="${author}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${previewContent}">
    <meta name="twitter:image" content="${firstImgSrc}">
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <link href="/css/note.css" rel="stylesheet">
    <link href="/css/custom_editor_fonts.css" rel="stylesheet">
  </head>
  <body>
    ${pageHTML}
  </body>
  <script type="text/javascript" src="/js/vendor.js"></script>
  <script type="text/javascript" src="/js/note.js"></script>
</html>`
      ;

    const a = document.createElement('a');
    const blob = new Blob([note], { type: 'application/octet-stream' });

    a.href = window.URL.createObjectURL(blob);
    a.download = `${name}.html`;

    a.click();
  }


  /**
   * Delete elements from root by selectors
   * 
   * @param rootElement - root element
   * @param selectors - array of selectors
   */
  _removeElementsBySelectors(rootElement: Element | null, selectors: string[]) {
    if (rootElement === null) {
      return null;
    }
    const resultRootEl = rootElement.cloneNode(true) as Element;
    selectors.forEach(
      selector => {
        const el = resultRootEl.querySelector(selector)
        el && el.remove();
      }
    );
    return resultRootEl;
  }
}
