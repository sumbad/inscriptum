export function hasCustomElement(tag: string): boolean {
  return typeof customElements.get(tag) !== 'undefined';
}


export interface IWebComponent4Import {
  tag: string;
  import: Promise<any>;
}

export async function importWebComponent(components: IWebComponent4Import[]) {
  await Promise.all(components.map(
    c => c.import
  ))
  // .then(
  //   (elements: object[]) => {
  //     components.forEach((component, index) => {
  //       if (!hasCustomElement(component.tag)) {
  //         console.log(component.tag, elements[index])
  //         customElements.define(component.tag, elements[index]);
  //       }
  //     });
  //   }
  // );
  
  // await all definitions
  await Promise.all(components.map(
    c => customElements.whenDefined(c.tag)
  ));
}


/**
 * Load style from css file dynamically
 * @param path - path to css file
 */
export function loadStyleFile(path: string) {
  if (!document.getElementById(path))
  {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = path;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = document.location.origin + path;
      link.media = 'all';
      head.appendChild(link);
  }
}
