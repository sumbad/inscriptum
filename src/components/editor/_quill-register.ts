import Quill from 'quill/core';
import Inline from 'quill/blots/inline';
import Block from 'quill/blots/block';
import { BlockEmbed } from 'quill/blots/block';



class BoldBlot extends Inline { };

BoldBlot.blotName = 'bold';
BoldBlot.tagName = 'strong';

class ItalicBlot extends Inline { }
ItalicBlot.blotName = 'italic';
ItalicBlot.tagName = 'em';

Quill.register(BoldBlot);
Quill.register(ItalicBlot);



class LinkBlot extends Inline {
  static create(value) {
    let node = super.create(value) as Element;
    // Sanitize url value if desired
    node.setAttribute('href', value);
    // Okay to set other non-format related attributes
    // These are invisible to Parchment so must be static
    node.setAttribute('target', '_blank');
    return node;
  }

  static formats(node) {
    // We will only be called with a node already
    // determined to be a Link blot, so we do
    // not need to check ourselves
    return node.getAttribute('href');
  }
}
LinkBlot.blotName = 'link';
LinkBlot.tagName = 'a';

Quill.register(LinkBlot);


class BlockquoteBlot extends Block { }
BlockquoteBlot.blotName = 'blockquote';
BlockquoteBlot.tagName = 'blockquote';

Quill.register(BlockquoteBlot);


class HeaderBlot extends Block {
  // static formats(node) {
  //   return HeaderBlot.tagName.indexOf(node.tagName) + 1;
  // }
}
HeaderBlot.blotName = 'header';
HeaderBlot.tagName = ['h1', 'h2'] as any;

Quill.register(HeaderBlot);


class DividerBlot extends BlockEmbed { }
DividerBlot.blotName = 'divider';
DividerBlot.tagName = 'hr';

Quill.register(DividerBlot);


class ImageBlot extends BlockEmbed {
  static create(value) {
    let node = super.create(null) as Element;
    node.setAttribute('alt', value.alt);
    node.setAttribute('src', value.url);
    return node;
  }

  static value(node) {
    return {
      alt: node.getAttribute('alt'),
      url: node.getAttribute('src')
    };
  }
}
ImageBlot.blotName = 'image';
ImageBlot.tagName = 'img';

Quill.register(ImageBlot);


class VideoBlot extends BlockEmbed {
  domNode: any;
  static create(url) {
    let node = super.create(this.value) as Element;
    node.setAttribute('src', url);
    node.setAttribute('frameborder', '0');
    node.setAttribute('allowfullscreen', 'true');
    return node;
  }

  static formats(node) {
    let format: { height?: string, width?: string } = {};
    if (node.hasAttribute('height')) {
      format.height = node.getAttribute('height');
    }
    if (node.hasAttribute('width')) {
      format.width = node.getAttribute('width');
    }
    return format;
  }

  static value(node) {
    return node.getAttribute('src');
  }

  format(name, value) {
    if (name === 'height' || name === 'width') {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name, value);
      }
    } else {
      super.format(name, value);
    }
  }
}
VideoBlot.blotName = 'video';
VideoBlot.tagName = 'iframe';

Quill.register(VideoBlot);




function getTwttr(d, s, id) {
  let js, fjs = d.getElementsByTagName(s)[0];
  let t = window['twttr'] || {};

  if (d.getElementById(id)) return t;

  js = d.createElement(s);
  js.id = id;
  js.src = 'https://platform.twitter.com/widgets.js';
  (fjs.parentNode as Node).insertBefore(js, fjs);

  return new Promise((resolve, reject) => {
    let timerId = setTimeout(function tick() {
      t = window['twttr'];
      if (t === undefined) {
        timerId = setTimeout(tick, 500);
      } else {
        resolve(t);
      }
    }, 500);
  });
}


class TweetBlot extends BlockEmbed {
  static twttr;
  static create(id) {
    let node = super.create(id) as any;
    node.dataset.id = id;
    TweetBlot.twttr.widgets.createTweet(id, node);
    return node;
  }

  static value(domNode) {
    return domNode.dataset.id;
  }
}

getTwttr(document, 'script', 'twitter-wjs').then(t => {
  TweetBlot.blotName = 'tweet';
  TweetBlot.tagName = 'div';
  TweetBlot.className = 'tweet';  
  TweetBlot.twttr = t;

  Quill.register(TweetBlot);
});


export default Quill;