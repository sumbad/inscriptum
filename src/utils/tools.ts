export default class Tools {
  
  
      /**
       * Создание уникального идентификатора
       * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
       */
      static uuidv4() {
          const hash: any = ([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11;
          return hash.replace(/[018]/g, c =>
              (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          );
      }
  }