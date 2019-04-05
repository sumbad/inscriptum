import Inline from 'quill/blots/inline';
import { sanitize } from './utils';



export class LinkBlot extends Inline {
  static showLinkTooltip: (link: LinkBlot) => any;
  static hideLinkTooltip: () => any;


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
    const a = LinkBlot.relativeUrl(url);

    return sanitize(url, ['http', 'https', 'tg', 'mailto']) ? a : 'about:blank';
  }

  constructor(domNode: Node, public value) {
    super(domNode);

    // $(domNode).on('mouseover', () => {
    //   showLinkTooltip(this, value);
    // });
    // $(domNode).on('mouseout', function() {
    //   hideLinkTooltip();
    // });


    domNode.addEventListener('mouseover', LinkBlot.showLinkTooltip.bind(this, this), false);
    domNode.addEventListener('mouseout', LinkBlot.hideLinkTooltip, false);
  }


  detach() {
    // $(this.domNode).off('mouseover mouseout');
    this.domNode.removeEventListener('mouseover', LinkBlot.showLinkTooltip.bind(this, this), false)
    this.domNode.removeEventListener('mouseout', LinkBlot.hideLinkTooltip, false);

    super.detach();
    LinkBlot.hideLinkTooltip();
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) {
      return super.format(name, value);
    }
    value = LinkBlot.sanitize(value);
    this.domNode.setAttribute('href', value);
    this.domNode.setAttribute('data-title', value);
  }


  static relativeUrl(url) {
    let base_loc = location;

    let loc = document.createElement('a');
    loc.href = url;
    if (base_loc.origin !== loc.origin) {
      return loc.href;
    }
    if (base_loc.pathname !== loc.pathname || base_loc.search !== loc.search) {
      return loc.pathname + loc.search + loc.hash;
    }
    if (base_loc.href === loc.href) {
      return loc.hash || loc.pathname + loc.search + loc.hash;
    }
    return loc.hash;
  }
}


// LinkBlot.blotName = 'link';
// LinkBlot.tagName = 'a';
// Quill.register(LinkBlot);



