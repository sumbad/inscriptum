import List from 'quill/formats/list';


/**
 * The list with a continuer function
 */
export class ListContinuer extends List {
  static create(value) {
    let node;
    if(typeof value === 'string') {
      node = super.create(value);
    } else {
      node = super.create(value.type);
      if(value.start!== undefined) {
        node.setAttribute('start', value.start);
        node.style['counter-reset'] = `list-0 ${value.start}`;
      }
    }
    return node;
  }


  static formats(domNode: HTMLElement) {
    let formats = super.formats(domNode);
    console.log('MyList-static.formats', formats, domNode.getAttribute('start'));
    return {type: formats, start: domNode.getAttribute('start')};
  }
}
