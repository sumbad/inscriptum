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