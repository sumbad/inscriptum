(window.webpackJsonp=window.webpackJsonp||[]).push([[21,59],{114:function(t,e,n){"use strict";n.r(e),e.default=(t,e)=>t`
<iframe id="iframeid" scrolling="no" style="width:100%; height:0"></iframe>
`},72:function(t,e,n){"use strict";n.r(e),n.d(e,"GistComponent",(function(){return c}));var i,s=n(69),r=n(114),o=function(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};let c=i=class extends s.UmWebComponent{constructor(){super(r.default)}static get observedAttributes(){return this.attributes}connectedCallback(){super.connectedCallback(i.attributes),this.iframeEl=this.querySelector("iframe");let t=this.iframeEl.contentDocument||this.iframeEl.contentWindow;t.open(),t.write(`\n      <html>\n        <style>\n          .gist-meta {\n            display: none;\n          } \n          .gist .blob-code {\n            line-height: 25px !important; \n            font-size: 14px !important;\n          }\n        </style>\n        <body>\n          <link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-9f0a4ad9c85ca776e669003688baa9d55f9db315562ce4d231d37dab2714c70a.css">\n          <script type="text/javascript" src="https://gist.github.com/sumbad/${this.props.iframeid}.js"><\/script>\n        </body>\n      </html>\n      `),t.close(),this.iframeEl.contentWindow.onload=()=>{this.iframeEl.style.height=t.body.scrollHeight+"px"}}};c.attributes=["iframeid"],c=i=o([Object(s.Define)("um-gist")],c)}}]);