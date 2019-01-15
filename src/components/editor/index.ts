import { TemplateResult } from 'lit-html';
import { Define, AbstractElement, state } from 'abstract-element';
import * as litHtml from 'lit-html';
import litRender from 'abstract-element/render/lit';

import Quill from './quill-register';
import Block from 'quill/blots/block';

import BlockBlot from 'parchment/dist/src/blot/block';
import { AuthService } from './auth';
import { StorageService } from './storage/storage.service';
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
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


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
  faPlus
);



/**
 * The demo web component with lit-html render engine
 */
@Define('inscriptum-editor')
export class DemoLitComponent extends AbstractElement {
  html = litHtml.html;
  css = require('./style.scss');

  state = {
    time: new Date().toLocaleTimeString()
  };

  @state()
  active: boolean = false;

  /** draft id */
  id: string;

  /** the event a content changed */
  changedContent$ = new BehaviorSubject<string | null>(null);


  constructor(
    private _storageService: StorageService = new StorageService(),
    private _authService: AuthService = new AuthService(_storageService),
  ) {
    super(litRender, false);
    // this._storageService = new StorageService();
    // this._authService = new AuthService(this._storageService);

    let cacheLastSavedContent: string;

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
                  cacheLastSavedContent = d;
                }
              );
          }
        }
      );

    window.addEventListener('beforeunload', (event) => {
      const lastChanges = this.changedContent$.getValue();
      if (lastChanges !== null && cacheLastSavedContent !== lastChanges) {
        this._storageService.updateDraft(this.id, lastChanges)
          .then(
            () => {
              cacheLastSavedContent = lastChanges;
            }
          );
        event.returnValue = 'Has not saved content!';
      }
    });
  }


  /**
   * LIFECYCLE
   */
  connectedCallback() {
    super.connectedCallback();

    const editorContainerEl = this.querySelector('#editor-container') as HTMLDivElement;
    // const tooltipControlsEl = this.querySelector('#tooltip-controls') as HTMLDivElement;
    const sidebarControlsEl = this.querySelector('#sidebar-controls') as HTMLDivElement;
    const showControlsEl = this.querySelector('#show-controls') as HTMLDivElement;




    let quill = new Quill(
      editorContainerEl,
      {
        bounds: '#editor-container',
        // modules: {
        //   'syntax': true
        // },
        theme: 'bubble'
      }
    );





    // quill.addContainer(tooltipControlsEl);
    quill.addContainer(sidebarControlsEl);

    quill.on('editor-change', (eventType, range) => {
      if (eventType !== 'selection-change') { return; }
      if (range == null) { return; }
      if (range.length === 0) {
        // $('#tooltip-controls').hide();
        // tooltipControlsEl.style.display = 'none';
        let [block, offset] = quill.scroll.scroll.descendant<BlockBlot>(Block as any, range.index);
        if (block != null && block.domNode.firstChild instanceof HTMLBRElement) {
          let lineBounds = quill.getBounds(range);
          // $('#sidebar-controls').removeClass('active').show().css({
          //   left: lineBounds.left - 50,
          //   top: lineBounds.top - 2
          // });
          sidebarControlsEl.classList.remove('active');
          this.active = false;
          sidebarControlsEl.style.display = 'initial';
          sidebarControlsEl.style.left = `${lineBounds.left - 80}px`;
          sidebarControlsEl.style.top = `${lineBounds.top - 5}px`;
        } else {
          // $('#tooltip-controls, #sidebar-controls').hide();
          // tooltipControlsEl.style.display = 'none';
          // $('#sidebar-controls').removeClass('active');
          // sidebarControlsEl.classList.remove('active');
          sidebarControlsEl.style.display = 'none';
        }
        this.changedContent$.next(quill.getContents());
      } else {
        // $('#sidebar-controls, #sidebar-controls').hide();
        // $('#sidebar-controls').removeClass('active');
        sidebarControlsEl.style.display = 'none';
        sidebarControlsEl.classList.remove('active');
        this.active = false;

        // let rangeBounds = quill.getBounds(range);
        // $('#tooltip-controls').show().css({
        //   left: rangeBounds.left + rangeBounds.width / 2 - $('#tooltip-controls').outerWidth() / 2,
        //   top: rangeBounds.bottom + 10
        // });
        // tooltipControlsEl.style.display = 'initial';
        // tooltipControlsEl.style.left = `${rangeBounds.left + rangeBounds.width / 2 - tooltipControlsEl.offsetWidth / 2}px`;
        // tooltipControlsEl.style.top = `${rangeBounds.bottom + 10}px`;
      }
    });



    const boldButtonEl = this.querySelector('#bold-button') as HTMLButtonElement;
    const italicButtonEl = this.querySelector('#italic-button') as HTMLButtonElement;
    const linkButtonEl = this.querySelector('#link-button') as HTMLButtonElement;
    const blockquoteButtonEl = this.querySelector('#blockquote-button') as HTMLButtonElement;
    const header1ButtonEl = this.querySelector('#header-1-button') as HTMLButtonElement;
    const header2ButtonEl = this.querySelector('#header-2-button') as HTMLButtonElement;
    const dividerButtonEl = this.querySelector('#divider-button') as HTMLButtonElement;
    const imageButtonEl = this.querySelector('#image-button') as HTMLButtonElement;
    const videoButtonEl = this.querySelector('#video-button') as HTMLButtonElement;
    const tweetButtonEl = this.querySelector('#tweet-button') as HTMLButtonElement;


    boldButtonEl.addEventListener('click', () => {
      quill.format('bold', true);
    });

    italicButtonEl.addEventListener('click', () => {
      quill.format('italic', true);
    });

    linkButtonEl.addEventListener('click', () => {
      let value = prompt('Enter link URL');
      quill.format('link', value);
    });

    blockquoteButtonEl.addEventListener('click', () => {
      quill.format('blockquote', true);
    });

    header1ButtonEl.addEventListener('click', () => {
      quill.format('header', 1);
    });

    header2ButtonEl.addEventListener('click', () => {
      quill.format('header', 2);
    });

    dividerButtonEl.addEventListener('click', () => {
      let range = quill.getSelection(true);
      quill.insertEmbed(range.index, 'divider', true, Quill.sources.USER);
      quill.setSelection(range.index + 1, 0, Quill.sources.SILENT);
      sidebarControlsEl.style.display = 'none';
    });

    imageButtonEl.addEventListener('click', () => {
      let range = quill.getSelection(true);
      quill.insertEmbed(range.index, 'image', {
        alt: 'Quill Cloud',
        url: 'https://quilljs.com/0.20/assets/images/cloud.png'
      }, Quill.sources.USER);
      quill.setSelection(range.index + 1, 0, Quill.sources.SILENT);
      sidebarControlsEl.style.display = 'none';
    });

    videoButtonEl.addEventListener('click', () => {
      let range = quill.getSelection(true);
      let url = 'https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0';
      quill.insertEmbed(range.index, 'video', url, Quill.sources.USER);
      quill.formatText(range.index + 1, 1, { height: '170', width: '400' });
      quill.setSelection(range.index + 1, 0, Quill.sources.SILENT);
      sidebarControlsEl.style.display = 'none';
    });

    tweetButtonEl.addEventListener('click', () => {
      let range = quill.getSelection(true);
      let id = '464454167226904576';
      quill.insertEmbed(range.index, 'tweet', id, Quill.sources.USER);
      quill.setSelection(range.index + 1, 0, Quill.sources.SILENT);
      sidebarControlsEl.style.display = 'none';
    });


    showControlsEl.addEventListener('click', () => {
      this.active = !this.active;
      sidebarControlsEl.classList.toggle('active');
      // quill.focus();
      console.log(JSON.stringify(quill.getContents()));
      console.log(quill.root.innerHTML);
    });

    this._authService.authenticated$.subscribe(
      hasAuth => {
        if (hasAuth) {
          this._storageService.allDrafts().then(
            drafts => {
              this.id = drafts.allDrafts[0].id;
              quill.setContents(drafts.allDrafts[0].contents);
            }
          );
        }
      }
    );

    // @TODO: only develop mode
    window['quill'] = quill;

    // For fontawesome icons. Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch()
  }


  render(): TemplateResult {
    const style = this.html`<style>${this.css}</style>`;
    const showControlsIcon = this.active
      ? this.html`<i class="fas fa-plus" data-fa-transform="rotate-45"></i>`
      : this.html`<i class="fas fa-plus"></i>`;

    return this.html`
      ${style}
      
      <div id="tooltip-controls">
        <button id="bold-button"><i class="fas fa-bold"></i></button>
        <button id="italic-button"><i class="fas fa-italic"></i></button>
        <button id="link-button"><i class="fas fa-link"></i></button>
        <button id="blockquote-button"><i class="fas fa-quote-right"></i></button>
        <button id="header-1-button">
          <span class="fa-layers fa-fw">
            <i class="fas fa-heading"></i>
            <span class="fa-layers-text" data-fa-transform="shrink-6 down-4 right-11">
              1
            </span>
          </span>
        </button>
        <button id="header-2-button">
          <span class="fa-layers fa-fw">
            <i class="fas fa-heading"></i>
            <span class="fa-layers-text" data-fa-transform="shrink-6 down-4 right-11">
              2
            </span>
          </span>
        </button>
      </div>
      <div id="sidebar-controls">
        <button id="show-controls">
          ${showControlsIcon}
        </button>
        <span class="controls">
          <button id="image-button"><i class="fas fa-camera"></i></button>
          <button id="video-button"><i class="fas fa-play"></i></button>
          <button id="tweet-button"><i class="fab fa-twitter"></i></button>
          <button id="divider-button"><i class="fas fa-minus"></i></button>
        </span>
      </div>
      <div id="editor-container">
        <p>Tell your story...<p>
      </div>
      
      <button class="editor__publish-btn" @click=${this.clickHandlerPublish.bind(this)}>
        <i class="fas fa-file-export fa-2x"></i>
      </button>
    `;
  }


  /**
   * Publish draft - save as HTML file
   * @param event 
   */
  clickHandlerPublish(event: MouseEvent) {
    event.preventDefault();

    const content = this.querySelector('#editor-container>.ql-editor') as HTMLDivElement;
    const a = document.createElement('a');
    const blob = new Blob([content.innerHTML], { type: 'application/octet-stream' });

    a.href = window.URL.createObjectURL(blob);
    a.download = 'Download.html';
    a.click();
  }
}