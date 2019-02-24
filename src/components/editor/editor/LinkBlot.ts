import Quill from 'quill/core';
import Inline from 'quill/blots/inline';
import { showLinkTooltip, hideLinkTooltip, sanitize, relativeUrl } from '.';



export class LinkBlot extends Inline {
  static create(value) {
    let domNode = super.create(value) as Element;
    value = this.sanitize(value);
    domNode.setAttribute('href', value);
    var ch = value.substr(0, 1);
    if (ch != '/' &&
        ch != '#' &&
        value.substr(0, 5) != 'tg://' &&
        value.substr(0, 7) != 'mailto:') {
      domNode.setAttribute('target', '_blank');
    }
    return domNode;
  }
  static formats(domNode) {
    return domNode.getAttribute('href');
  }

  static sanitize(url) {
    return sanitize(url, ['http', 'https', 'tg', 'mailto']) ? relativeUrl(url) : 'about:blank';
  }

  constructor(domNode: Node, public value) {
    super(domNode);
    // $(domNode).on('mouseover', () => {
    //   showLinkTooltip(this, value);
    // });
    // $(domNode).on('mouseout', function() {
    //   hideLinkTooltip();
    // });
    domNode.addEventListener('mouseover', showLinkTooltip.bind(this, this, this.value), false);
    domNode.addEventListener('mouseout', hideLinkTooltip.bind(this), false);
  }


  detach() {
    // $(this.domNode).off('mouseover mouseout');
    this.domNode.removeEventListener('mouseover', showLinkTooltip.bind(this, this, this.value), false)
    this.domNode.removeEventListener('mouseout', hideLinkTooltip.bind(this), false);

    super.detach();
    hideLinkTooltip();
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) {
      return super.format(name, value);
    }
    value = LinkBlot.sanitize(value);
    this.domNode.setAttribute('href', value);
    this.domNode.setAttribute('data-title', value);
  }
}


LinkBlot.blotName = 'link';
LinkBlot.tagName = 'a';
Quill.register(LinkBlot);



