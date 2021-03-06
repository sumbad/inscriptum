import Quill from 'quill/core';
import autosize from 'autosize';
import { MyQuill } from './MyQuill';



export let T: {
  apiUrl: string;
  datetime: number;
  pageId: number;
  saveHash?: any;
} = {
  apiUrl: 'https:\/\/inscriptum.js.org',
  datetime: 0,
  pageId: 0
};

(
  function () {
    var b = document.querySelector('time');
    if (b && T.datetime) {
      var a = new Date(1E3 * T.datetime)
      let d = 'January February March April May June July August September October November December'.split(' ')[a.getMonth()]
      let c = a.getDate();
      b.textContent = d + ' ' + (10 > c ? '0' : '') + c + ', ' + a.getFullYear()
    }
  }
)();



export function draftSave(pageContent, quill) {
  if (!pageContent) {
    return false;
  }
  if (!T.pageId) {
    var page_content: any = getPageContent(true, quill);
    if (pageContent != page_content) {
      pageContent = page_content;
      return storageSet('draft', page_content);
    }
  }
  return false;
}


export function getPageContent(for_draft, quill: Quill) {
  let $domNode = quill.scroll.domNode;
  $domNode.querySelectorAll('textarea,input').forEach(
    (el: HTMLInputElement) => {
      el.setAttribute('data-value', el.value);
    }
  );

  let $node = $domNode.cloneNode(true) as HTMLElement;

  $domNode.querySelectorAll('textarea,input').forEach(
    (el) => {
      el.removeAttribute('data-value');
    }
  );

  $node.querySelectorAll('textarea,input').forEach(
    (el: HTMLTextAreaElement) => {
      el.value = el.getAttribute('data-value') || '';
      el.removeAttribute('data-value');
    }
  );

  updateEditableText($node, false);


  const contenteditable = $node.querySelectorAll('[contenteditable]')
  contenteditable.forEach(el => el.removeAttribute('contenteditable'));

  const placeholder = $node.querySelectorAll('[data-placeholder]')
  placeholder.forEach(el => el.removeAttribute('data-placeholder'));

  const data_label = $node.querySelectorAll('[data-label]')
  data_label.forEach(el => el.removeAttribute('data-label'));

  const title = $node.querySelectorAll('[data-title]')
  title.forEach(el => el.removeAttribute('data-title'));

  const editable_text = $node.querySelectorAll('.editable_text');
  editable_text.forEach(el => el.classList.remove('editable_text'));

  const focus = $node.querySelectorAll('.focus');
  focus.forEach(el => el.classList.remove('focus'));

  const empty = $node.querySelectorAll('.empty');
  empty.forEach(el => el.classList.remove('empty'));

  const emptyCssClass = $node.querySelectorAll('[class=""]');
  emptyCssClass.forEach(el => el.removeAttribute('class'));

  const file_progress = $node.querySelectorAll('.file_progress');
  file_progress.forEach(el => el.remove());

  const cursor_wrapper = $node.querySelectorAll('.cursor_wrapper');
  cursor_wrapper.forEach(el => el.remove());

  if (!for_draft) {
    const h1Address = $node.querySelector('h1,address');
    h1Address && h1Address.remove();
    const brInline = $node.querySelector('br.inline');
    brInline && brInline.replaceWith('\n');
    return {
      data: JSON.stringify(wrapDomElement($node).children),
      length: $node.innerHTML.length
    };
  } else {
    $node.querySelectorAll('h1').forEach(
      el => {
        if (!el.querySelector('br')) {
          el.append(document.createElement('br'))
        }
      }
    );
    $node.querySelectorAll('address').forEach(
      el => {
        if (!el.querySelector('br')) {
          el.append(document.createElement('br'))
        }
      }
    );
  }
  return $node.innerHTML;
}


function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return !!localStorage.getItem(key);
  } catch (e) {
    return false;
  }
}


export function isEdit(): boolean {
  return document.getElementsByClassName('tl_article_edit').length > 0;
}


export function updateEditableText(context: HTMLElement, is_edit?: boolean) {
  if (typeof is_edit === 'undefined') {
    is_edit = isEdit();
  }
  if (is_edit) {
    context.querySelectorAll('.editable_text')
      .forEach(
        (el: HTMLElement) => {
          let hasEditableInput = false;
          el.childNodes.forEach((e: HTMLElement) => {
            if (!hasEditableInput && e && e.classList) {
              hasEditableInput = e.classList.contains('editable_input');
            }
          });
          if (!hasEditableInput) {
            let value = el.textContent || '';
            let input = document.createElement('textarea');
            input.classList.add('editable_input');
            input.setAttribute('tabindex', '-1');
            input.setAttribute('rows', '1');
            input.value = value;
            if (!value) {
              el.classList.add('empty');
            }
            el.innerHTML = '';
            el.append(input);
            autosize(input);
            // return input;
          }
        }
      );
  } else {
    context.querySelectorAll('.editable_text > .editable_input')
      .forEach(
        (el: HTMLTextAreaElement) => {
          let value = el.value;
          let parent = el.parentNode as HTMLElement;
          parent.innerHTML = '';
          parent.textContent = value;
          // return parent;
        }
      );
  }
}



function wrapDomElement(node) {
  if (!node.tagName) {
    return node.data;
  }
  let obj: {
    tag: string;
    attrs?: any;
    children?: any[];
  } = {
    tag: node.tagName.toLowerCase(),
  };
  if (node.attributes.length) {
    obj.attrs = {};
    for (var i = 0; i < node.attributes.length; i++) {
      let attr = node.attributes[i];
      obj.attrs[attr.name] = attr.value;
    }
  }
  if (node.childNodes.length) {
    obj.children = [];
    for (var i = 0; i < node.childNodes.length; i++) {
      obj.children.push(wrapDomElement(node.childNodes[i]));
    }
  }
  return obj;
}


export function sanitize(url, protocols) {
  let anchor = document.createElement('a');
  anchor.href = url;
  let protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}


export function uploadDataToBlob(file_data) {
  var binary = atob(file_data.base64_data);
  var array: any[] = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], { type: file_data.type });
}


export function showError(error) {
  let $error_msg = document.querySelector('#_error_msg') as HTMLElement;
  $error_msg.textContent = error;
  clearTimeout($error_msg['to']);
  $error_msg.classList.add('shown');
  $error_msg['to'] = setTimeout(
    () => {
      $error_msg.classList.remove('shown');
    },
    3000
  );
}


export function updateEditable(is_editable, quill: MyQuill, tooltip, $tl_article: HTMLElement, $tl_content: HTMLElement, $tl_header: HTMLElement) {
  $tl_article && $tl_article.classList.toggle('tl_article_edit', is_editable);
  updateEditableText(document.body);
  if (quill) {
    quill.enable(is_editable);
    if (is_editable) {
      quill.focus();
    }
  }
  if (!is_editable && $tl_content && $tl_header) {
    const titleEl = $tl_content.querySelector('h1')
    const title = titleEl ? titleEl.textContent : '';
    const authorEl = $tl_content.querySelector('address');
    const author = authorEl ? authorEl.textContent : '';
    const authorUrlEl = $tl_content.querySelector('address a')
    const author_url = authorUrlEl && authorUrlEl.getAttribute('href');

    ($tl_header.querySelector('h1') as HTMLElement).textContent = title;
    ($tl_header.querySelector('address a') as HTMLElement).textContent = author;

    if (author_url) {
      ($tl_header.querySelector('address a') as HTMLElement).setAttribute('href', author_url);
    } else {
      ($tl_header.querySelector('address a') as HTMLElement).removeAttribute('href');
    }
    // tooltip.hideLinkTooltip();
    tooltip.hideFormatTooltip(quill);
    tooltip.hideBlocksTooltip();
  }
}


//Если с английского на русский, то передаём вторым параметром true.
export function transliterate(text: string, engToRus = false) {
  const rus = 'щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь'.split(/ +/g);
  const eng = 'shh sh ch cz yu ya yo zh `` y\' e` a b v g d e z i j k l m n o p r s t u f x `'.split(/ +/g);

  for (let x = 0; x < rus.length; x++) {
    text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
    text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());
  }
  return text;
}


export function storageDelete(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

export function draftClear() {
  storageDelete('draft');
}