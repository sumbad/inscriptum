import * as hyperHTML from 'hyperhtml';


function a(t, scope) {
  
  let routerView = 12333331111;

  function templateInterpolatesParser(strings, ...interpolations) {
    let routerView = 1233333;
    // interpolations = Object.keys(interpolatedValues);
    // for(key in interpolatedValues) {
    //   console.log(1111111111111, key)
    // }
    console.log(999999999999, arguments)
  }

  console.log(1111111111111, templateInterpolatesParser)

  t.bind({routerView})({routerView:123}, templateInterpolatesParser);

  // t(123, templateInterpolatesParser);
}



export class BaseComponent extends HTMLElement {
  private _template: any;
  private _style: string;
  private _content: HTMLDivElement;


  constructor(template, style: string = '', shadow = false, mode: 'open' | 'closed' = 'open') {
    super();
    try {
      this._template = template;
      this._style = style;
    } catch (error) {
      console.warn('Can not find the EditorComponent template!');
    }

    if (shadow) {
      this.attachShadow({ mode });
    }

    this.appendChild(hyperHTML.wire() `<style>${this._style}</style>`);
    this._content = this.appendChild(document.createElement('div'));
  }


  /**
   * LIFECYCLE
   * Создание компонента
   */
  connectedCallback(initialPropsList: string[]): void {
    this._initialProps(initialPropsList);
    this.render();
  }


  /**
   * Инициализация
   * @param props атрибуты для инициализации
   */
  _initialProps(props: string[]): void {
    props.forEach(prop => {
      const propAttr = this.getAttribute(prop);
      if (typeof propAttr !== 'undefined' && propAttr !== null) {
        this[prop] = propAttr;
      }
    });
  }


  // template(scope, callbackTag) {
  //   this._template(scope, callbackTag);



  //   console.log(111111111111, this._template);
  //   // console.log(222222222222, this._template(scope, callbackTag));
  //   // return () => {
  //   //   callbackTag(_templateObject, this.routerView);
  //   // };
  //   // if (callbackTag) {
  //   //   console.log(this._template)
  //   //   return callbackTag`${{html: this._style + this._template}}`
  //   // }
  //   // else {
  //   //   return `${this._template}`
  //   // }
  // };


  /**
   * Функция рендеринга компонента
   */
  render(scope: any = this): void {
    // scope

    var animal = {
      routerView: '123123123----'
    };

    

    // var sayHello: any = () => {
    //   let routerView = 1233333;
    //   return this._template
    // };

    // this._template.__proto__ = animal;
    console.log(11111111, this._template);

    // this._template()

    // // Object.setPrototypeOf(this._template, scope);
    // // let a = () =>  {
    // //   return this._template(hyperHTML.bind(this._content));
    // // };

    // (function (animal: any, scope) {

    // })(animal, this);




    // let proxy = new Proxy(this._template, {
    //   // передаст вызов в target, предварительно сообщив о нём
    //   apply:(target, thisArg, argumentsList) => {
    //     console.log(`Буду вычислять сумму: ${argumentsList}`);
    //     return target.apply(this, argumentsList);
    //   }
    // });


    // proxy(this, hyperHTML.bind(this._content), routerView)

    // this._template(this, hyperHTML.bind(this._content, 11111, 2222, 3333))




    // function f(this) {
    //   return console.log(222222, routerView);
    // }

    // sayHello(animal, hyperHTML.bind(this._content))


    // let html = (function (context) {
    //   let routerView = 1233333;
    //   return hyperHTML.bind(context._content);
    // })(this);

    // this._template(animal, hyperHTML.bind(this._content))



  a(this._template, this);


    // console.log(222222, this._template(animal, templateInterpolatesParser));
  }

}