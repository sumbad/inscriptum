


export default class Tools {
 
  
  static async importWebComponent(tagName: string, componentPath: string) {
    if (typeof customElements.get(tagName) === 'undefined') {
      await import('../components/' + componentPath);
      return await customElements.whenDefined(tagName);
    } else {
      return;
    }
  }

  // static async importWebComponent(tagNames: string[], componentPath: string) {
  //   let listUndefinedTags: string[] = [];

  //   tagNames.forEach(tagName => {
  //     if (typeof customElements.get(tagName) === 'undefined') {
  //       listUndefinedTags.push(tagName);
  //     }
  //   });


  //   if (listUndefinedTags.length > 0) {
  //     await 

  //     import('../components/' + componentPath);
  //     return await customElements.whenDefined(tagName);
  //   } else {
  //     return;
  //   }
  // }

}