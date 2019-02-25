import Quill from 'quill/core';
import { BlockEmbed } from 'quill/blots/block';
import {
  updateEditableText,
  handleDomCursorOnkeydown,
  handleDomCaptionOnkeydown,
  handleDomWrapperClick,
  draftSave,
  uploadFile,
  sanitize,
  showError,
  uploadFileOnErrorFigureBlot
} from '.';
import Keyboard from 'quill/modules/keyboard';



export class FigureBlot extends BlockEmbed {
  domWrapper: HTMLDivElement;
  domCursor: HTMLSpanElement;
  domCaption: HTMLElement;
  domProgress: HTMLDivElement;
  domProgressBar: HTMLDivElement;

  static create(value) {
    let domNode = super.create(value) as Element;
    domNode.setAttribute('contenteditable', 'false');
    return domNode;
  }

  constructor(public domNode: HTMLElement, value) {
    super(domNode);
    this.domWrapper = document.createElement('div');
    this.domCursor = document.createElement('span');
    this.domCaption = document.createElement('figcaption');

    this.domWrapper.classList.add('figure_wrapper');

    this.domCursor.classList.add('cursor_wrapper');
    this.domCursor.setAttribute('contenteditable', 'true');

    this.domCaption.classList.add('editable_text');
    this.domCaption.setAttribute('data-placeholder', 'Caption (optional)');
    if (value.caption) {
      this.domCaption.innerText = value.caption;
    }

    this.domNode.appendChild(this.domWrapper);
    this.domNode.appendChild(this.domCursor);
    this.domNode.appendChild(this.domCaption);
    setTimeout(() => {
      updateEditableText(this.domNode);
    }, 1);

    let upload_data: false | { type: never; base64_data: never; } = false;
    if (value.image) {
      this.appendImgNode(value.image);
      upload_data = this.uploadData(value.image);
    } else if (value.video) {
      this.appendVideoNode(value.video);
      upload_data = this.uploadData(value.video);
    } else if (value.embed) {
      this.appendIframeNode(value.embed);
    }
    if (upload_data) {
      this.domProgress = document.createElement('div');
      this.domProgressBar = document.createElement('div');

      this.domProgress.classList.add('file_progress');
      this.domProgressBar.classList.add('file_progress_bar');
      this.domWrapper.classList.add('loading');

      this.domProgress.appendChild(this.domProgressBar);
      this.domWrapper.appendChild(this.domProgress);

      this.uploadFile(upload_data);
    }

    this.domWrapper.onclick = () => {
      handleDomWrapperClick(this);
    };

    this.domCursor.onkeydown = (e) => {
      handleDomCursorOnkeydown(this, e);
    };

    this.domCursor.onpaste = (e) => {
      e.stopPropagation();
      e.preventDefault();
    };

    this.domCaption.onkeydown = (e) => {
      handleDomCaptionOnkeydown(this, e);
    };

    this.domCaption.onpaste = (e) => {
      e.stopPropagation();
    };

    // $(this.domCaption).on('keyup drop change input textInput paste cut', (e) => {
    //   $(this.domCaption).toggleClass('empty', !e.target.value);
    //   autosize.update(e.target);
    //   draftSave();
    // });

    const domCaptionListenerFunc = (e) => {
      this.domCaption.classList.toggle('empty');
      // autosize.update(e.target);
      draftSave();
    };

    this.domCaption.onkeyup = domCaptionListenerFunc;
    this.domCaption.ondrop = domCaptionListenerFunc;
    this.domCaption.onchange = domCaptionListenerFunc;
    this.domCaption.oninput = domCaptionListenerFunc;
    this.domCaption.onpaste = domCaptionListenerFunc;
    this.domCaption.oncut = domCaptionListenerFunc;

    this.domCaption.onclick = (e) => {
      e.target && (e.target as HTMLElement).focus();
    };
  }

  appendImgNode(src) {
    let image = document.createElement('img');
    image.setAttribute('src', this.sanitize(src));
    this.domWrapper.appendChild(image);
    return image;
  }

  appendVideoNode(src) {
    let video = document.createElement('video');
    video.setAttribute('src', this.sanitize(src));
    video.setAttribute('preload', 'auto');
    video.setAttribute('controls', 'controls');
    video.addEventListener('loadeddata', function () {
      if (!this['mozHasAudio'] &&
        !(this['webkitAudioDecodedByteCount']) &&
        !(this.audioTracks && this.audioTracks.length)) {
        this.setAttribute('autoplay', 'autoplay');
        this.setAttribute('loop', 'loop');
        this.setAttribute('muted', 'muted');
        this.removeAttribute('controls');
        this.play();
      }
    });
    this.domWrapper.appendChild(video);
    return video;
  }

  appendIframeNode(src) {
    let iframe_wrap = document.createElement('div');
    let iframe_helper = document.createElement('div');
    let iframe = document.createElement('iframe');
    iframe_wrap.classList.add('iframe_wrap');
    iframe_wrap.appendChild(iframe_helper);
    iframe_helper.classList.add('iframe_helper');
    iframe_helper.style.paddingTop = '56.25%';
    iframe_helper.appendChild(iframe);
    iframe.setAttribute('src', this.sanitize(src));
    iframe.setAttribute('width', '640');
    iframe.setAttribute('height', '360');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowtransparency', 'true');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('scrolling', 'no');
    this.domWrapper.appendChild(iframe_wrap);
    return iframe_wrap;
  }

  uploadFile(file_data) {
    uploadFile(file_data, (loaded, total) => {
      let persent = 0;
      if (total && loaded) {
        persent = (loaded * 100 / total);
        persent = Math.min(100, persent);
      }
      this.domProgressBar.style.width = persent + '%';
    },
      (data) => {
        if (data) {
          let src = this.sanitize(data.src);
          if (file_data.type.substr(0, 6) == 'video/') {
            let video = this.domWrapper.querySelector('video');
            video && video.setAttribute('src', src);
          } else {
            let image = this.domWrapper.querySelector('img');
            image && image.setAttribute('src', src);
          }
          this.domWrapper.classList.remove('loading');
          draftSave();
        }
      },
      (error) => {
        uploadFileOnErrorFigureBlot(this);
        draftSave();
        return showError(error);
      }
    );
  }

  uploadData(url) {
    let match = null;
    if (match = url.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/)) {
      return { type: match[1], base64_data: match[2] };
    }
    return false;
  }

  sanitize(url) {
    return sanitize(url, ['http', 'https', 'data']) ? url : '//:0';
  }

  static value(domNode) {
    let value: {
      caption: string;
      image?: string;
      video?: string;
      embed?: string;
    } = {
      caption: ''
    };
    let image = domNode.querySelector('img');
    if (image) {
      value.image = image.src;
    }
    let video = domNode.querySelector('video');
    if (video) {
      value.video = video.src;
    }
    let iframe = domNode.querySelector('iframe');
    if (iframe) {
      value.embed = iframe.src;
    }
    let figcaption = domNode.querySelector('figcaption');
    if (figcaption) {
      let caption_field = figcaption.querySelector('.editable_input');
      if (caption_field) {
        value.caption = caption_field.value;
      } else {
        value.caption = figcaption.innerText;
      }
    }
    return value;
  }

  focus() {
    this.domNode.classList.add('focus');
  }

  blur() {
    this.domNode.classList.remove('focus');
  }

  _index(node, offset) {
    if (node === this.domCaption) {
      return 0;
    }
    let index = 0;
    if (node.nodeType == node.TEXT_NODE) {
      index += offset >= 0 ? offset : node.data.length;
    }
    if (node.previousSibling) {
      return index + this._index(node.previousSibling, -1);
    }
    if (node.parentNode) {
      return index + this._index(node.parentNode, -1);
    }
    return 0;
  }

  _position(ancestor, index) {
    if (ancestor.nodeType == ancestor.TEXT_NODE) {
      if (index <= ancestor.data.length) {
        return [ancestor, index];
      } else {
        index -= ancestor.data.length;
        return [null, index];
      }
    } else {
      let child = ancestor.firstChild;
      while (child) {
        let node = null;
        [node, index] = this._position(child, index);
        if (node) {
          return [node, index];
        } else {
          child = child.nextSibling;
        }
      }
      return [ancestor, index];
    }
  }

  update(mutations) {
    this.domCursor.innerHTML = '';
  }
  index(node, offset) {
    return 0;
  }
  position(index: number, inclusive?: boolean | undefined): [Node, number] {
    return [this.domCursor, 0];
  }
}
FigureBlot.blotName = 'blockFigure';
FigureBlot.tagName = 'figure';
Quill.register(FigureBlot);