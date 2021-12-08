import { TemplateResult } from 'lit-html';
import { Define, AbstractElement } from 'abstract-element';
import * as litHtml from 'lit-html';
import litRender from 'abstract-element/render/lit';
import Quill from 'quill/core';
import { browser } from '.';

@Define('inscriptum-editor-tooltip')
export class EditorTooltipComponent extends AbstractElement {
  html = litHtml.html;
  $tl_link_tooltip: HTMLDivElement;
  $tl_tooltip: HTMLDivElement;
  $tl_blocks: HTMLDivElement;

  $bold_button: HTMLDivElement;
  $italic_button: HTMLDivElement;
  $link_button: HTMLDivElement;
  $header_button: HTMLDivElement;
  $subheader_button: HTMLDivElement;
  $quote_button: HTMLDivElement;
  $strikeButton: HTMLDivElement;
  $image_button: HTMLDivElement;
  $embed_button: HTMLDivElement;

  props: any;

  formatTTOptions = {
    padding: 10,
    position: browser.mobile ? 'bottom' : 'top',
    minDelta: 5,
  };

  get linkTTOptions() {
    return {
      padding: 7,
      position: 'bottom',
      depend: this.$tl_tooltip,
      dependPadding: 10,
    };
  }

  constructor() {
    super(litRender, false);
  }

  connectedCallback() {
    super.connectedCallback();

    this.$tl_link_tooltip = this.querySelector('#_tl_link_tooltip') || document.createElement('div');
    this.$tl_tooltip = this.querySelector('#_tl_tooltip') || document.createElement('div');
    this.$tl_blocks = this.querySelector('#_tl_blocks') || document.createElement('div');

    this.$bold_button = this.querySelector('#_bold_button') || document.createElement('div');
    this.$italic_button = this.querySelector('#_italic_button') || document.createElement('div');
    this.$link_button = this.querySelector('#_link_button') || document.createElement('div');
    this.$header_button = this.querySelector('#_header_button') || document.createElement('div');
    this.$subheader_button = this.querySelector('#_subheader_button') || document.createElement('div');
    this.$quote_button = this.querySelector('#_quote_button') || document.createElement('div');
    this.$strikeButton = this.querySelector('#_strike_button') || document.createElement('div');

    this.$image_button = this.querySelector('#_image_button') || document.createElement('div');
    this.$embed_button = this.querySelector('#_embed_button') || document.createElement('div');
  }

  render(): TemplateResult {
    return this.html`
      <div id="_tl_link_tooltip" class="tl_link_tooltip"></div>
      <div id="_tl_tooltip" class="tl_tooltip" @mouseover=${this.handleMouseover.bind(this)} @mouseout=${this.handleMouseout.bind(this)}>
        <div class="buttons">
          <span class="button_hover"></span>
          <div class="button_group">
            <button id="_bold_button"></button>
            <button id="_italic_button"></button>
            <button id="_link_button"></button>
          </div>
          <div class="button_group">
            <button id="_header_button"></button>
            <button id="_subheader_button"></button>
            <button id="_quote_button"></button>
          </div>
          <div class="button_group">
            <button id="_strike_button" class="tt-icon-btn">
            ${litHtml.svg`
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-strikethrough" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7" />
              <path d="M16.5 16a3.5 3.5 0 0 1 -3.5 3h-1.5a4 2 0 0 1 -4 -1.5" />
            </svg>
              `}
            </button>
          </div>
        </div>
        <div class="prompt">
          <span class="close"></span>
          <div class="prompt_input_wrap"><input type="url" class="prompt_input" /></div>
        </div>
      </div>
      <div id="_tl_blocks" class="tl_blocks">
        <div class="buttons">
          <button id="_image_button"></button>
          <button id="_embed_button"></button>
        </div>
      </div>
    `;
  }

  // <i class="fas fa-strikethrough fa-lg"></i>

  handleMouseover(event: MouseEvent) {
    let button = event.target as Element;
    if (event instanceof MouseEvent && button?.tagName == 'BUTTON' && !button.classList.contains('disabled')) {
      this.$tl_tooltip.setAttribute('data-hover', button.id);
      this.$tl_tooltip.classList.add('hover');
      setTimeout(() => {
        this.$tl_tooltip.classList.add('hover_anim');
      }, 1);
      clearTimeout(this.$tl_tooltip['to']);
    }
  }

  handleMouseout(event: MouseEvent) {
    let button = event.target as HTMLElement;
    if (button.tagName == 'BUTTON') {
      this.$tl_tooltip.classList.remove('hover');
      this.$tl_tooltip['to'] = setTimeout(() => {
        this.$tl_tooltip.classList.remove('hover_anim');
      }, 70);
    }
  }

  tooltipUpdatePosition($tooltip: HTMLElement, range, options, quill: Quill) {
    options = options || { padding: 10, position: 'top' };
    range = range || $tooltip['_range'] || null;
    if (range == null) return;
    let rangeBounds = quill.getBounds(range);
    let quillOffset = quill.container.getBoundingClientRect();
    let tt: {
      width: number;
      height: number;
      left?: number;
      top?: number;
    } = {
      width: $tooltip.offsetWidth,
      height: $tooltip.offsetHeight,
    };
    let win = {
      width: window.outerWidth,
      height: window.outerHeight,
      scrolltop: document.body.scrollTop,
    };
    let min = {
      left: 9,
      top: win.scrolltop + 9,
    };
    let max = {
      left: win.width - tt.width - 9,
      top: win.scrolltop + win.height - tt.height - 9,
    };
    tt.left = rangeBounds.left + rangeBounds.width / 2 - tt.width / 2;
    // console.log('1_tt = ', tt);
    // console.log('1_quillOffset = ', quillOffset);
    let pleft = quillOffset.left + tt.left;
    if (pleft < min.left) {
      tt.left = min.left - quillOffset.left;
    } else if (pleft > max.left) {
      tt.left = max.left - quillOffset.left;
    }
    let top, bottom_class;
    if (options.position == 'top') {
      tt.top = rangeBounds.top - tt.height - options.padding;
      let ptop = quillOffset.top + tt.top;
      bottom_class = false;
      if (ptop < min.top) {
        tt.top = rangeBounds.bottom + options.padding;
        bottom_class = true;
      }
    } else if (options.position == 'bottom') {
      let dependOfBounds:
        | boolean
        | {
            top: number;
            bottom: number;
            left: number;
            right: number;
          } = false;
      tt.top = rangeBounds.bottom + options.padding;
      if ((dependOfBounds = this.isOverElement(tt, options.depend, options.dependPadding))) {
        tt.top = dependOfBounds.bottom + options.dependPadding;
      }
      let ptop = quillOffset.top + (tt.top || 0);
      bottom_class = true;
      if (ptop > max.top) {
        tt.top = rangeBounds.top - tt.height - options.padding;
        if ((dependOfBounds = this.isOverElement(tt, options.depend, options.dependPadding))) {
          tt.top = dependOfBounds.top - tt.height - options.dependPadding;
        }
        bottom_class = false;
      }
    }
    tt.left = Math.round(tt.left);
    tt.top = Math.round(tt.top || 0);
    $tooltip['_range'] = range;
    if (
      options.minDelta &&
      Math.abs(tt.left - $tooltip['_left']) < options.minDelta &&
      Math.abs(tt.top - $tooltip['_top']) < options.minDelta
    ) {
      return;
    }
    // console.log('2_tt = ', tt);
    // console.log('2_quillOffset = ', quillOffset);

    $tooltip['_left'] = tt.left;
    $tooltip['_top'] = tt.top;
    $tooltip.style.left = tt.left + 'px';
    $tooltip.style.top = tt.top + 'px';

    $tooltip.classList.toggle('bottom', bottom_class);
  }

  isOverElement(bounds1, $elem2: HTMLElement, padding) {
    if (!$elem2 || !$elem2.classList.contains('shown')) {
      return false;
    }
    bounds1.bottom = bounds1.top + bounds1.height;
    bounds1.right = bounds1.left + bounds1.width;
    let pos2 = { _left: $elem2.offsetLeft, _top: $elem2.offsetTop }; //.position();
    let bounds2 = {
      top: pos2._top,
      bottom: pos2._top + $elem2.offsetHeight,
      left: pos2._left,
      right: pos2._left + $elem2.offsetWidth,
    };
    if (
      bounds1.left - bounds2.right >= padding ||
      bounds2.left - bounds1.right >= padding ||
      bounds1.top - bounds2.bottom >= padding ||
      bounds2.top - bounds1.bottom >= padding
    ) {
      return false;
    }
    return bounds2;
  }

  hideBlocksTooltip() {
    this.$tl_blocks.classList.remove('shown');
  }

  showFormatTooltip(range, quill: Quill, isEdit) {
    if (!isEdit) return;
    this.$tl_tooltip.classList.remove('tooltip_prompt');
    this.tooltipUpdatePosition(this.$tl_tooltip, range, this.formatTTOptions, quill);
    if (!this.$tl_tooltip.classList.contains('move_anim')) {
      setTimeout(() => {
        this.$tl_tooltip.classList.add('move_anim');
      }, 10);
    }
    if (!this.$tl_tooltip.classList.contains('shown')) {
      setTimeout(() => {
        this.$tl_tooltip.classList.add('shown');
        this.tooltipUpdatePosition(this.$tl_link_tooltip, null, this.linkTTOptions, quill);
      }, 10);
    } else {
      this.tooltipUpdatePosition(this.$tl_link_tooltip, null, this.linkTTOptions, quill);
    }
  }

  hideFormatTooltip(quill: Quill) {
    this.$tl_tooltip.classList.remove('move_anim', 'shown');
    this.tooltipUpdatePosition(this.$tl_link_tooltip, null, this.linkTTOptions, quill);
  }

  showBlocksTooltip(range, isEdit, quill) {
    if (!isEdit) return;
    this.$tl_blocks.classList.add('shown');
    this.blocksUpdatePosition(range, quill);
  }

  blocksUpdatePosition(range, quill: Quill) {
    if (typeof range === 'undefined') {
      range = quill.getSelection();
    }
    if (range == null || !quill) return;
    let lineBounds = quill.getBounds(range);
    this.$tl_blocks.style.top = lineBounds.top + lineBounds.height / 2 + 'px';
  }

  showLinkTooltip(link, value, isEdit, quill) {
    if (!isEdit) return;
    let range = {
      index: link.offset(quill.scroll),
      length: link.length(),
    };
    this.$tl_link_tooltip.textContent = value;
    this.tooltipUpdatePosition(this.$tl_link_tooltip, range, this.linkTTOptions, quill);
    if (!this.$tl_link_tooltip.classList.contains('move_anim')) {
      setTimeout(() => {
        this.$tl_link_tooltip.classList.add('move_anim');
      }, 1);
    }
    if (!this.$tl_link_tooltip.classList.contains('shown')) {
      setTimeout(() => {
        this.$tl_link_tooltip.classList.add('shown');
      }, 10);
    }
  }

  hideLinkTooltip(quill) {
    this.$tl_link_tooltip.classList.remove('move_anim', 'shown');
    // this.tooltipUpdatePosition(this.$tl_link_tooltip, null, this.linkTTOptions, quill);
  }
}
