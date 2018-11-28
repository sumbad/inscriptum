import hyperHTML from 'hyperhtml/esm';
import { Define, UmWebComponent } from 'components/um-web.component';
// import pell from 'pell';

import template from './template';
import { PreloaderService } from 'components/um-preloader/service';
import Quill from './quill-register';


@Define('inscriptum-editor')
export class EditorComponent extends UmWebComponent {

  constructor() {
    super(template, require('./style.scss'));
    PreloaderService.isAppLoading.next(false);
  }


  connectedCallback() {
    super.connectedCallback();

    var quill = new Quill('#editor', {
      theme: 'snow'
    });

    console.log(quill.getContents());
    console.log(quill.getText(0, quill.getLength()));
    

    // setTimeout(() => {
    //   var quill = new Quill('#editor'
    //   , {
    //     // modules: {
    //     //   toolbar: true
    //     // }
    //     theme: 'snow'
    //   }
    //   // , {
    //   //   modules: { toolbar: true },
    //   //   theme: 'snow'
    //   // }
    //   );
    // }, 3000);


  //   this.$editorContent = <HTMLElement>this.querySelector('#editorContent');

  //   this.$editorContent.addEventListener("paste", function(e) {
  //     // cancel paste
  //     e.preventDefault();
  
  //     // get text representation of clipboard
  //     var text = e.clipboardData.getData("text/plain");
  
  //     // insert text manually
  //     document.execCommand("insertHTML", false, text);
  // });
  }

}