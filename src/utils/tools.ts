


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


  /**
   * Создание уникального идентификатора
   * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
   */
  static uuidv4() {
    const hash: any = ([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11;
    // https://stackoverflow.com/questions/44042816/what-is-wrong-with-crypto-getrandomvalues-in-internet-explorer-11
    const crypto = window.crypto || window['msCrypto']; // for IE 11
    return hash.replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))![0] & 15 >> c / 4).toString(16)
    );
  }
}