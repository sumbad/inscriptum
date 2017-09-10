import * as hyperHTML from 'hyperhtml';
// import pell from 'pell';



export class EditorComponent extends HTMLElement {
    private _template: any;
    private _style: any;
    private _content: any;

    constructor() {
        super();
        try {
            this._template = require('./editor.component.html');
            this._style = require('./editor.component.scss');
        } catch (error) {
            console.warn('Can not find the EditorComponent template!');
        }
    }


    connectedCallback() {
        const style = document.createElement('style');
        style.textContent = this._style;
        this._content = document.createElement('div');

        this.appendChild(style);
        this.appendChild(this._content);

        // this._shadowStyle.textContent = this._style;

        this.render();

        // const pellEditor = pell.init({
        //     element: this.querySelector('#pell'),
        //     onChange: html => {
        //         this.querySelector('#text-output')!.innerHTML = html
        //         this.querySelector('#html-output')!.textContent = html
        //     },
        //     styleWithCSS: true,
        //     actions: [
        //         {
        //             name:'heading1',
        //             result: () => pell.exec('formatBlock', '<H2 class="213">')
        //         }
        //     //     'bold',
        //     //     'underline',
        //     //     {
        //     //         name: 'italic',
        //     //         result: () => window['pell'].exec('italic')
        //     //     },
        //     //     {
        //     //         name: 'custom',
        //     //         icon: '<b><u><i>C</i></u></b>',
        //     //         title: 'Custom Action',
        //     //         result: () => console.log('YOLO')
        //     //     },
        //     //     {
        //     //         name: 'image',
        //     //         result: () => {
        //     //             const url = window.prompt('Enter the image URL')
        //     //             if (url) window['pell'].exec('insertImage', url)
        //     //         }
        //     //     },
        //     //     {
        //     //         name: 'link',
        //     //         result: () => {
        //     //             const url = window.prompt('Enter the link URL')
        //     //             if (url) window['pell'].exec('createLink', url)
        //     //         }
        //     //     }
        //     ],
        //     // classes: {
        //     //     actionbar: 'pell-actionbar-custom-name',
        //     //     button: 'pell-button-custom-name',
        //     //     content: 'pell-content-custom-name'
        //     // }
        // })
    }


    render() {
        this._template(this, hyperHTML.bind(this._content));
    }


    doRichEditCommand(event, aName, aArg?) {
        event.preventDefault();
        console.log(111111111111111)
        document.execCommand(aName, false, aArg);
        const selectedElement = window.getSelection().focusNode.parentElement;
        if (selectedElement) {

            switch (aName) {
                case 'formatBlock':
                    this._formatBlockClasses(aArg, selectedElement)
                    break;
            }

            // console.log(selectedElement)
            // selectedElement.classList.add("oder2");
        }
    }


    private _formatBlockClasses(aArg, selectedElement) {
        switch (aArg) {
            case 'h2':
                selectedElement.classList.add("entry-title");
                break;
        }
    }

}