(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{598:function(t,e,l){"use strict";l.r(e);var i=l(552),s=l(551),n=l(589),a=l(619);class o extends s.c{static formats(t){return this.tagName.indexOf(t.tagName)+1}}o.blotName="header",o.tagName=["H1","H2","H3","H4","H5","H6"];var r=o,c=l(587),h=l(557);class u extends h.a{static create(t){let e=super.create(t);return t=this.sanitize(t),e.setAttribute("href",t),e.setAttribute("rel","noopener noreferrer"),e.setAttribute("target","_blank"),e}static formats(t){return t.getAttribute("href")}static sanitize(t){return d(t,this.PROTOCOL_WHITELIST)?t:this.SANITIZED_URL}format(t,e){if(t!==this.statics.blotName||!e)return super.format(t,e);e=this.constructor.sanitize(e),this.domNode.setAttribute("href",e)}}function d(t,e){let l=document.createElement("a");l.href=t;let i=l.href.slice(0,l.href.indexOf(":"));return e.indexOf(i)>-1}u.blotName="link",u.tagName="A",u.SANITIZED_URL="about:blank",u.PROTOCOL_WHITELIST=["http","https","mailto","tel"];var p=l(550),f=l.n(p);const g=["alt","height","width"];class x extends f.a.Embed{static create(t){let e=super.create(t);return"string"==typeof t&&e.setAttribute("src",this.sanitize(t)),e}static formats(t){return g.reduce(function(e,l){return t.hasAttribute(l)&&(e[l]=t.getAttribute(l)),e},{})}static match(t){return/\.(jpe?g|gif|png)$/.test(t)||/^data:image\/.+;base64/.test(t)}static sanitize(t){return d(t,["http","https","data"])?t:"//:0"}static value(t){return t.getAttribute("src")}format(t,e){g.indexOf(t)>-1?e?this.domNode.setAttribute(t,e):this.domNode.removeAttribute(t):super.format(t,e)}}x.blotName="image",x.tagName="IMG";var q=x,y=l(555),b=l.n(y),v=l(573),m=l(553),w=l.n(m),A=l(574),k=l(650),E=l(701),L=l.n(E);let H=0;function S(t,e){t.setAttribute(e,!("true"===t.getAttribute(e)))}var M=class{constructor(t){this.select=t,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",()=>{this.togglePicker()}),this.label.addEventListener("keydown",t=>{switch(t.keyCode){case A.a.keys.ENTER:this.togglePicker();break;case A.a.keys.ESCAPE:this.escape(),t.preventDefault()}}),this.select.addEventListener("change",this.update.bind(this))}togglePicker(){this.container.classList.toggle("ql-expanded"),S(this.label,"aria-expanded"),S(this.options,"aria-hidden")}buildItem(t){let e=document.createElement("span");return e.tabIndex="0",e.setAttribute("role","button"),e.classList.add("ql-picker-item"),t.hasAttribute("value")&&e.setAttribute("data-value",t.getAttribute("value")),t.textContent&&e.setAttribute("data-label",t.textContent),e.addEventListener("click",()=>{this.selectItem(e,!0)}),e.addEventListener("keydown",t=>{switch(t.keyCode){case A.a.keys.ENTER:this.selectItem(e,!0),t.preventDefault();break;case A.a.keys.ESCAPE:this.escape(),t.preventDefault()}}),e}buildLabel(){let t=document.createElement("span");return t.classList.add("ql-picker-label"),t.innerHTML=L.a,t.tabIndex="0",t.setAttribute("role","button"),t.setAttribute("aria-expanded","false"),this.container.appendChild(t),t}buildOptions(){let t=document.createElement("span");t.classList.add("ql-picker-options"),t.setAttribute("aria-hidden","true"),t.tabIndex="-1",t.id=`ql-picker-options-${H}`,H+=1,this.label.setAttribute("aria-controls",t.id),this.options=t,[].slice.call(this.select.options).forEach(e=>{let l=this.buildItem(e);t.appendChild(l),!0===e.selected&&this.selectItem(l)}),this.container.appendChild(t)}buildPicker(){[].slice.call(this.select.attributes).forEach(t=>{this.container.setAttribute(t.name,t.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}escape(){this.close(),setTimeout(()=>this.label.focus(),1)}close(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}selectItem(t,e=!1){let l=this.container.querySelector(".ql-selected");if(t!==l&&(null!=l&&l.classList.remove("ql-selected"),null!=t&&(t.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(t.parentNode.children,t),t.hasAttribute("data-value")?this.label.setAttribute("data-value",t.getAttribute("data-value")):this.label.removeAttribute("data-value"),t.hasAttribute("data-label")?this.label.setAttribute("data-label",t.getAttribute("data-label")):this.label.removeAttribute("data-label"),e))){if("function"==typeof Event)this.select.dispatchEvent(new Event("change"));else if("object"==typeof Event){let t=document.createEvent("Event");t.initEvent("change",!0,!0),this.select.dispatchEvent(t)}this.close()}}update(){let t;if(this.select.selectedIndex>-1){let e=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];t=this.select.options[this.select.selectedIndex],this.selectItem(e)}else this.selectItem(null);let e=null!=t&&t!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",e)}};var T=class extends M{constructor(t,e){super(t),this.label.innerHTML=e,this.container.classList.add("ql-color-picker"),[].slice.call(this.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(t){t.classList.add("ql-primary")})}buildItem(t){let e=super.buildItem(t);return e.style.backgroundColor=t.getAttribute("value")||"",e}selectItem(t,e){super.selectItem(t,e);let l=this.label.querySelector(".ql-color-label"),i=t&&t.getAttribute("data-value")||"";l&&("line"===l.tagName?l.style.stroke=i:l.style.fill=i)}};var I=class extends M{constructor(t,e){super(t),this.container.classList.add("ql-icon-picker"),[].forEach.call(this.container.querySelectorAll(".ql-picker-item"),t=>{t.innerHTML=e[t.getAttribute("data-value")||""]}),this.defaultItem=this.container.querySelector(".ql-selected"),this.selectItem(this.defaultItem)}selectItem(t,e){super.selectItem(t,e),t=t||this.defaultItem,this.label.innerHTML=t.innerHTML}};var C=class{constructor(t,e){this.quill=t,this.boundsContainer=e||document.body,this.root=t.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",()=>{this.root.style.marginTop=-1*this.quill.root.scrollTop+"px"}),this.hide()}hide(){this.root.classList.add("ql-hidden")}position(t){let e=t.left+t.width/2-this.root.offsetWidth/2,l=t.bottom+this.quill.root.scrollTop;this.root.style.left=e+"px",this.root.style.top=l+"px",this.root.classList.remove("ql-flip");let i=this.boundsContainer.getBoundingClientRect(),s=this.root.getBoundingClientRect(),n=0;if(s.right>i.right&&(n=i.right-s.right,this.root.style.left=e+n+"px"),s.left<i.left&&(n=i.left-s.left,this.root.style.left=e+n+"px"),s.bottom>i.bottom){let e=s.bottom-s.top,i=t.bottom-t.top+e;this.root.style.top=l-i+"px",this.root.classList.add("ql-flip")}return n}show(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}};const N=[!1,"center","right","justify"],Z=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],R=[!1,"serif","monospace"],U=["1","2","3",!1],O=["small",!1,"large","huge"];class V extends k.a{constructor(t,e){super(t,e);let l=e=>{if(!document.body.contains(t.root))return document.body.removeEventListener("click",l);null==this.tooltip||this.tooltip.root.contains(e.target)||document.activeElement===this.tooltip.textbox||this.quill.hasFocus()||this.tooltip.hide(),null!=this.pickers&&this.pickers.forEach(function(t){t.container.contains(e.target)||t.close()})};t.emitter.listenDOM("click",document.body,l)}addModule(t){let e=super.addModule(t);return"toolbar"===t&&this.extendToolbar(e),e}buildButtons(t,e){t.forEach(t=>{(t.getAttribute("class")||"").split(/\s+/).forEach(l=>{if(l.startsWith("ql-")&&(l=l.slice("ql-".length),null!=e[l]))if("direction"===l)t.innerHTML=e[l][""]+e[l].rtl;else if("string"==typeof e[l])t.innerHTML=e[l];else{let i=t.value||"";null!=i&&e[l][i]&&(t.innerHTML=e[l][i])}})})}buildPickers(t,e){this.pickers=t.map(t=>{if(t.classList.contains("ql-align"))return null==t.querySelector("option")&&F(t,N),new I(t,e.align);if(t.classList.contains("ql-background")||t.classList.contains("ql-color")){let l=t.classList.contains("ql-background")?"background":"color";return null==t.querySelector("option")&&F(t,Z,"background"===l?"#ffffff":"#000000"),new T(t,e[l])}return null==t.querySelector("option")&&(t.classList.contains("ql-font")?F(t,R):t.classList.contains("ql-header")?F(t,U):t.classList.contains("ql-size")&&F(t,O)),new M(t)});this.quill.on(v.a.events.EDITOR_CHANGE,()=>{this.pickers.forEach(function(t){t.update()})})}}V.DEFAULTS=b()(!0,{},k.a.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){let t=this.container.querySelector("input.ql-image[type=file]");null==t&&((t=document.createElement("input")).setAttribute("type","file"),t.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),t.classList.add("ql-image"),t.addEventListener("change",()=>{if(null!=t.files&&null!=t.files[0]){let e=new FileReader;e.onload=e=>{let l=this.quill.getSelection(!0);this.quill.updateContents((new w.a).retain(l.index).delete(l.length).insert({image:e.target.result}),v.a.sources.USER),this.quill.setSelection(l.index+1,v.a.sources.SILENT),t.value=""},e.readAsDataURL(t.files[0])}}),this.container.appendChild(t)),t.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});class D extends C{constructor(t,e){super(t,e),this.textbox=this.root.querySelector('input[type="text"]'),this.listen()}listen(){this.textbox.addEventListener("keydown",t=>{A.a.match(t,"enter")?(this.save(),t.preventDefault()):A.a.match(t,"escape")&&(this.cancel(),t.preventDefault())})}cancel(){this.hide()}edit(t="link",e=null){this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),null!=e?this.textbox.value=e:t!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute(`data-${t}`)||""),this.root.setAttribute("data-mode",t)}restoreFocus(){let t=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=t}save(){let t=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":{let e=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",t,v.a.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",t,v.a.sources.USER)),this.quill.root.scrollTop=e;break}case"video":t=function(t){let e=t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);if(e)return(e[1]||"https")+"://www.youtube.com/embed/"+e[2]+"?showinfo=0";if(e=t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))return(e[1]||"https")+"://player.vimeo.com/video/"+e[2]+"/";return t}(t);case"formula":{if(!t)break;let e=this.quill.getSelection(!0);if(null!=e){let l=e.index+e.length;this.quill.insertEmbed(l,this.root.getAttribute("data-mode"),t,v.a.sources.USER),"formula"===this.root.getAttribute("data-mode")&&this.quill.insertText(l+1," ",v.a.sources.USER),this.quill.setSelection(l+2,v.a.sources.USER)}break}}this.textbox.value="",this.hide()}}function F(t,e,l=!1){e.forEach(function(e){let i=document.createElement("option");e===l?i.setAttribute("selected","selected"):i.setAttribute("value",e),t.appendChild(i)})}var B=l(649),P=l(702),_=l.n(P);const j=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]];class z extends V{constructor(t,e){null!=e.modules.toolbar&&null==e.modules.toolbar.container&&(e.modules.toolbar.container=j),super(t,e),this.quill.container.classList.add("ql-bubble")}extendToolbar(t){this.tooltip=new G(this.quill,this.options.bounds),this.tooltip.root.appendChild(t.container),this.buildButtons([].slice.call(t.container.querySelectorAll("button")),_.a),this.buildPickers([].slice.call(t.container.querySelectorAll("select")),_.a)}}z.DEFAULTS=b()(!0,{},V.DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){t?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});class G extends D{constructor(t,e){super(t,e),this.quill.on(v.a.events.EDITOR_CHANGE,(t,e,l,i)=>{if(t===v.a.events.SELECTION_CHANGE)if(null!=e&&e.length>0&&i===v.a.sources.USER){this.show(),this.root.style.left="0px",this.root.style.width="",this.root.style.width=this.root.offsetWidth+"px";let t=this.quill.getLines(e.index,e.length);if(1===t.length)this.position(this.quill.getBounds(e));else{let l=t[t.length-1],i=this.quill.getIndex(l),s=Math.min(l.length()-1,e.index+e.length-i),n=this.quill.getBounds(new B.a(i,s));this.position(n)}}else document.activeElement!==this.textbox&&this.quill.hasFocus()&&this.hide()})}listen(){super.listen(),this.root.querySelector(".ql-close").addEventListener("click",()=>{this.root.classList.remove("ql-editing")}),this.quill.on(v.a.events.SCROLL_OPTIMIZE,()=>{setTimeout(()=>{if(this.root.classList.contains("ql-hidden"))return;let t=this.quill.getSelection();null!=t&&this.position(this.quill.getBounds(t))},1)})}cancel(){this.show()}position(t){let e=super.position(t),l=this.root.querySelector(".ql-tooltip-arrow");if(l.style.marginLeft="",0===e)return e;l.style.marginLeft=-1*e-l.offsetWidth/2+"px"}}G.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join("");var W=l(568),$=l(562),Q=l(563);let J=Object($.a)("quill:toolbar");class K extends Q.a{constructor(t,e){if(super(t,e),Array.isArray(this.options.container)){let e=document.createElement("div");!function(t,e){Array.isArray(e[0])||(e=[e]);e.forEach(function(e){let l=document.createElement("span");l.classList.add("ql-formats"),e.forEach(function(t){if("string"==typeof t)X(l,t);else{let e=Object.keys(t)[0],i=t[e];Array.isArray(i)?function(t,e,l){let i=document.createElement("select");i.classList.add("ql-"+e),l.forEach(function(t){let e=document.createElement("option");!1!==t?e.setAttribute("value",t):e.setAttribute("selected","selected"),i.appendChild(e)}),t.appendChild(i)}(l,e,i):X(l,e,i)}}),t.appendChild(l)})}(e,this.options.container),t.container.parentNode.insertBefore(e,t.container),this.container=e}else"string"==typeof this.options.container?this.container=document.querySelector(this.options.container):this.container=this.options.container;if(!(this.container instanceof HTMLElement))return J.error("Container required for toolbar",this.options);this.container.classList.add("ql-toolbar"),this.controls=[],this.handlers={},Object.keys(this.options.handlers).forEach(t=>{this.addHandler(t,this.options.handlers[t])}),[].forEach.call(this.container.querySelectorAll("button, select"),t=>{this.attach(t)}),this.quill.on(W.a.events.EDITOR_CHANGE,(t,e)=>{t===W.a.events.SELECTION_CHANGE&&this.update(e)}),this.quill.on(W.a.events.SCROLL_OPTIMIZE,()=>{let[t]=this.quill.selection.getRange();this.update(t)})}addHandler(t,e){this.handlers[t]=e}attach(t){let e=[].find.call(t.classList,t=>0===t.indexOf("ql-"));if(!e)return;if(e=e.slice("ql-".length),"BUTTON"===t.tagName&&t.setAttribute("type","button"),null==this.handlers[e]){if(null!=this.quill.scroll.whitelist&&null==this.quill.scroll.whitelist[e])return void J.warn("ignoring attaching to disabled format",e,t);if(null==f.a.query(e))return void J.warn("ignoring attaching to nonexistent format",e,t)}let l="SELECT"===t.tagName?"change":"click";t.addEventListener(l,l=>{let i;if("SELECT"===t.tagName){if(t.selectedIndex<0)return;let e=t.options[t.selectedIndex];i=!e.hasAttribute("selected")&&(e.value||!1)}else i=!t.classList.contains("ql-active")&&(t.value||!t.hasAttribute("value")),l.preventDefault();this.quill.focus();let[s]=this.quill.selection.getRange();if(null!=this.handlers[e])this.handlers[e].call(this,i);else if(f.a.query(e).prototype instanceof f.a.Embed){if(!(i=prompt(`Enter ${e}`)))return;this.quill.updateContents((new w.a).retain(s.index).delete(s.length).insert({[e]:i}),W.a.sources.USER)}else this.quill.format(e,i,W.a.sources.USER);this.update(s)}),this.controls.push([e,t])}update(t){let e=null==t?{}:this.quill.getFormat(t);this.controls.forEach(function(l){let[i,s]=l;if("SELECT"===s.tagName){let l;if(null==t)l=null;else if(null==e[i])l=s.querySelector("option[selected]");else if(!Array.isArray(e[i])){let t=e[i];"string"==typeof t&&(t=t.replace(/\"/g,'\\"')),l=s.querySelector(`option[value="${t}"]`)}null==l?(s.value="",s.selectedIndex=-1):l.selected=!0}else if(null==t)s.classList.remove("ql-active");else if(s.hasAttribute("value")){let t=e[i]===s.getAttribute("value")||null!=e[i]&&e[i].toString()===s.getAttribute("value")||null==e[i]&&!s.getAttribute("value");s.classList.toggle("ql-active",t)}else s.classList.toggle("ql-active",null!=e[i])})}}function X(t,e,l){let i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("ql-"+e),null!=l&&(i.value=l),t.appendChild(i)}K.DEFAULTS={},K.DEFAULTS={container:null,handlers:{clean:function(){let t=this.quill.getSelection();if(null!=t)if(0==t.length){let t=this.quill.getFormat();Object.keys(t).forEach(t=>{null!=f.a.query(t,f.a.Scope.INLINE)&&this.quill.format(t,!1)})}else this.quill.removeFormat(t,W.a.sources.USER)},direction:function(t){let e=this.quill.getFormat().align;"rtl"===t&&null==e?this.quill.format("align","right",W.a.sources.USER):t||"right"!==e||this.quill.format("align",!1,W.a.sources.USER),this.quill.format("direction",t,W.a.sources.USER)},indent:function(t){let e=this.quill.getSelection(),l=this.quill.getFormat(e),i=parseInt(l.indent||0);if("+1"===t||"-1"===t){let e="+1"===t?1:-1;"rtl"===l.direction&&(e*=-1),this.quill.format("indent",i+e,W.a.sources.USER)}},link:function(t){!0===t&&(t=prompt("Enter link URL:")),this.quill.format("link",t,W.a.sources.USER)},list:function(t){let e=this.quill.getSelection(),l=this.quill.getFormat(e);"check"===t?"checked"===l.list||"unchecked"===l.list?this.quill.format("list",!1,W.a.sources.USER):this.quill.format("list","unchecked",W.a.sources.USER):this.quill.format("list",t,W.a.sources.USER)}}};var Y,tt,et,lt,it,st,nt=l(621);i.a.register({"modules/toolbar":K,"modules/syntax":nt.c,"themes/bubble":z,"formats/bold":n.a,"formats/italic":a.a,"formats/header":r,"formats/list":c.b,"formats/list-item":c.a,"formats/link":u,"formats/image":q});class at extends s.a{}at.blotName="divider",at.tagName="hr",i.a.register(at);class ot extends s.a{static create(t){var e=super.create(this.value);return e.setAttribute("src",t),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","true"),e}static formats(t){var e={};return t.hasAttribute("height")&&(e.height=t.getAttribute("height")),t.hasAttribute("width")&&(e.width=t.getAttribute("width")),e}static value(t){return t.getAttribute("src")}format(t,e){"height"===t||"width"===t?e?this.domNode.setAttribute(t,e):this.domNode.removeAttribute(t,e):super.format(t,e)}}ot.blotName="video",ot.tagName="iframe",i.a.register(ot);class rt extends s.a{static create(t){var e=super.create(t);return e.dataset.id=t,rt.twttr.widgets.createTweet(t,e),e}static value(t){return t.dataset.id}}(Y=document,tt="script",et="twitter-wjs",it=Y.getElementsByTagName(tt)[0],st=window.twttr||{},Y.getElementById(et)?st:((lt=Y.createElement(tt)).id=et,lt.src="https://platform.twitter.com/widgets.js",it.parentNode.insertBefore(lt,it),new Promise((t,e)=>{setTimeout(function e(){void 0===(st=window.twttr)?setTimeout(e,500):t(st)},500)}))).then(t=>{rt.blotName="tweet",rt.tagName="div",rt.className="tweet",rt.twttr=t,i.a.register(rt)});e.default=i.a},667:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline>\n  <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline>\n  <line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"></line>\n</svg>'},701:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon>\n  <polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon>\n</svg>'},702:function(t,e,l){t.exports={align:{"":l(703),center:l(704),right:l(705),justify:l(706)},background:l(707),blockquote:l(708),bold:l(709),clean:l(710),code:l(667),"code-block":l(667),color:l(711),direction:{"":l(712),rtl:l(713)},float:{center:l(714),full:l(715),left:l(716),right:l(717)},formula:l(718),header:{1:l(719),2:l(720)},italic:l(721),image:l(722),indent:{"+1":l(723),"-1":l(724)},link:l(725),list:{ordered:l(726),bullet:l(727),check:l(728)},script:{sub:l(729),super:l(730)},strike:l(731),underline:l(732),video:l(733)}},703:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'},704:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'},705:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'},706:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"></line>\n</svg>'},707:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <g class="ql-fill ql-color-label">\n    <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon>\n    <rect height="1" width="1" x="4" y="4"></rect>\n    <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon>\n    <rect height="1" width="1" x="2" y="6"></rect>\n    <rect height="1" width="1" x="3" y="5"></rect>\n    <rect height="1" width="1" x="4" y="7"></rect>\n    <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon>\n    <rect height="1" width="1" x="2" y="12"></rect>\n    <rect height="1" width="1" x="2" y="9"></rect>\n    <rect height="1" width="1" x="2" y="15"></rect>\n    <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon>\n    <rect height="1" width="1" x="3" y="8"></rect>\n    <path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"></path>\n    <path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"></path>\n    <path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"></path>\n    <rect height="1" width="1" x="12" y="2"></rect>\n    <rect height="1" width="1" x="11" y="3"></rect>\n    <path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"></path>\n    <rect height="1" width="1" x="2" y="3"></rect>\n    <rect height="1" width="1" x="6" y="2"></rect>\n    <rect height="1" width="1" x="3" y="2"></rect>\n    <rect height="1" width="1" x="5" y="3"></rect>\n    <rect height="1" width="1" x="9" y="2"></rect>\n    <rect height="1" width="1" x="15" y="14"></rect>\n    <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon>\n    <rect height="1" width="1" x="13" y="7"></rect>\n    <rect height="1" width="1" x="15" y="5"></rect>\n    <rect height="1" width="1" x="14" y="6"></rect>\n    <rect height="1" width="1" x="15" y="8"></rect>\n    <rect height="1" width="1" x="14" y="9"></rect>\n    <path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"></path>\n    <rect height="1" width="1" x="14" y="3"></rect>\n    <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon>\n    <rect height="1" width="1" x="15" y="2"></rect>\n    <rect height="1" width="1" x="12" y="5"></rect>\n    <rect height="1" width="1" x="13" y="4"></rect>\n    <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon>\n    <rect height="1" width="1" x="9" y="14"></rect>\n    <rect height="1" width="1" x="8" y="15"></rect>\n    <path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"></path>\n    <rect height="1" width="1" x="5" y="15"></rect>\n    <path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"></path>\n    <rect height="1" width="1" x="11" y="15"></rect>\n    <path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"></path>\n    <rect height="1" width="1" x="14" y="15"></rect>\n    <rect height="1" width="1" x="15" y="11"></rect>\n  </g>\n  <polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"></polyline>\n  <line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"></line>\n</svg>'},708:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"></rect>\n  <rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"></rect>\n  <path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"></path>\n  <path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"></path>\n</svg>'},709:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path>\n  <path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path>\n</svg>'},710:function(t,e){t.exports='<svg class="" viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line>\n  <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line>\n  <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line>\n  <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line>\n  <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect>\n</svg>'},711:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"></line>\n  <polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"></polyline>\n  <line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"></line>\n</svg>'},712:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon>\n  <line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"></line>\n  <path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"></path>\n  <rect class="ql-fill" height="11" width="1" x="11" y="4"></rect>\n  <rect class="ql-fill" height="11" width="1" x="13" y="4"></rect>\n</svg>'},713:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon>\n  <line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"></line>\n  <path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"></path>\n  <rect class="ql-fill" height="11" width="1" x="5" y="4"></rect>\n  <rect class="ql-fill" height="11" width="1" x="7" y="4"></rect>\n</svg>'},714:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z"/>\n  <path class="ql-fill" d="M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z"/>\n  <rect class="ql-fill" x="3" y="6" width="12" height="6" rx="1" ry="1"/>\n</svg>'},715:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z"/>\n  <path class="ql-fill" d="M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z"/>\n  <rect class="ql-fill" x="2" y="6" width="14" height="6" rx="1" ry="1"/>\n</svg>'},716:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z"/>\n  <path class="ql-fill" d="M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z"/>\n  <path class="ql-fill" d="M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z"/>\n  <path class="ql-fill" d="M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z"/>\n  <rect class="ql-fill" x="2" y="6" width="8" height="6" rx="1" ry="1"/>\n</svg>'},717:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z"/>\n  <path class="ql-fill" d="M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z"/>\n  <path class="ql-fill" d="M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z"/>\n  <path class="ql-fill" d="M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z"/>\n  <rect class="ql-fill" x="8" y="6" width="8" height="6" rx="1" ry="1" transform="translate(24 18) rotate(-180)"/>\n</svg>'},718:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"></path>\n  <rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"></rect>\n  <path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"></path>\n</svg>'},719:function(t,e){t.exports='<svg viewBox="0 0 18 18">\n  <path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/>\n</svg>'},720:function(t,e){t.exports='<svg viewBox="0 0 18 18">\n  <path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/>\n</svg>'},721:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line>\n  <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line>\n</svg>'},722:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>\n  <circle class="ql-fill" cx="6" cy="7" r="1"></circle>\n  <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline>\n</svg>'},723:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"></line>\n  <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"></line>\n  <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline>\n</svg>'},724:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"></line>\n  <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"></line>\n  <polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"></polyline>\n</svg>'},725:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line>\n  <path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path>\n  <path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path>\n</svg>'},726:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"></line>\n  <line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"></line>\n  <line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line>\n  <path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path>\n  <path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path>\n  <path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path>\n</svg>'},727:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"></line>\n  <line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"></line>\n  <line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"></line>\n</svg>'},728:function(t,e){t.exports='<svg class="" viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"></line>\n  <polyline class="ql-stroke" points="3 4 4 5 6 3"></polyline>\n  <line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"></line>\n  <polyline class="ql-stroke" points="3 14 4 15 6 13"></polyline>\n  <line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"></line>\n  <polyline class="ql-stroke" points="3 9 4 10 6 8"></polyline>\n</svg>'},729:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/>\n  <path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/>\n</svg>'},730:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/>\n  <path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/>\n</svg>'},731:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"></line>\n  <path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"></path>\n  <path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"></path>\n</svg>'},732:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path>\n  <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect>\n</svg>'},733:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <rect class="ql-stroke" height="12" width="12" x="3" y="3"></rect>\n  <rect class="ql-fill" height="12" width="1" x="5" y="3"></rect>\n  <rect class="ql-fill" height="12" width="1" x="12" y="3"></rect>\n  <rect class="ql-fill" height="2" width="8" x="5" y="8"></rect>\n  <rect class="ql-fill" height="1" width="3" x="3" y="5"></rect>\n  <rect class="ql-fill" height="1" width="3" x="3" y="7"></rect>\n  <rect class="ql-fill" height="1" width="3" x="3" y="10"></rect>\n  <rect class="ql-fill" height="1" width="3" x="3" y="12"></rect>\n  <rect class="ql-fill" height="1" width="3" x="12" y="5"></rect>\n  <rect class="ql-fill" height="1" width="3" x="12" y="7"></rect>\n  <rect class="ql-fill" height="1" width="3" x="12" y="10"></rect>\n  <rect class="ql-fill" height="1" width="3" x="12" y="12"></rect>\n</svg>'}}]);