(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{171:function(e,t){let l=navigator.userAgent.toLowerCase(),o=(/opera/i.test(l)||/opr/i.test(l),/msie/i.test(l)&&!/opera/i.test(l)||/trident\//i.test(l)||/edge/i.test(l),/edge/i.test(l)&&/opera/i.test(l),/firefox/i.test(l),/chrome/i.test(l)&&/edge/i.test(l),!/chrome/i.test(l)&&/webkit|safari|khtml/i.test(l),/iphone/i.test(l),/ipod/i.test(l),/ipad/i.test(l),/android/i.test(l),/iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(l)),i=/iphone|ipod|ipad/i.test(l),s=(/opera mini|opera mobi/i.test(l),/opera mini/i.test(l),/mac/i.test(l),Quill.import("blots/inline")),n=Quill.import("blots/block"),r=Quill.import("blots/block/embed"),a=Quill.import("blots/embed"),c=(Quill.import("blots/text"),Quill.import("formats/code-block")),d=Quill.import("formats/list/item"),u=Quill.import("parchment"),h=Quill.import("delta"),p=Quill.import("modules/keyboard");class m extends s{static create(e){let t=super.create(e);e=this.sanitize(e),t.setAttribute("href",e);var l=e.substr(0,1);return"/"!=l&&"#"!=l&&"tg://"!=e.substr(0,5)&&"mailto:"!=e.substr(0,7)&&t.setAttribute("target","_blank"),t}static formats(e){return e.getAttribute("href")}static sanitize(e){return A(e,["http","https","tg","mailto"])?function(e){let t=location,l=document.createElement("a");if(l.href=e,t.origin!=l.origin)return l.href;if(t.pathname!=l.pathname||t.search!=l.search)return l.pathname+l.search+l.hash;if(t.href==l.href)return l.hash||l.pathname+l.search+l.hash;return l.hash}(e):"about:blank"}constructor(e,t){super(e),$(e).on("mouseover",()=>{showLinkTooltip(this,t)}),$(e).on("mouseout",(function(){hideLinkTooltip()}))}detach(){$(this.domNode).off("mouseover mouseout"),super.detach(),hideLinkTooltip()}format(e,t){if(e!==this.statics.blotName||!t)return super.format(e,t);t=this.constructor.sanitize(t),this.domNode.setAttribute("href",t),this.domNode.setAttribute("data-title",t)}}m.blotName="link",m.tagName="a",Quill.register(m);class f extends a{}f.blotName="textBreak",f.tagName="br",f.className="inline",Quill.register(f);class g extends n{replace(e){e.children.forEach(e=>{e instanceof f&&e.replaceWith(u.create("text"," "))}),super.replace(e)}insertAt(e,t,l){void 0!==l&&"textBreak"==t?super.insertAt(e,"\n"):super.insertAt(e,t,l)}}class b extends g{}class k extends b{static create(e){let t=super.create(e);return t.setAttribute("data-placeholder","Title"),t.setAttribute("data-label","Title"),t}formatAt(e,t,l,o){l===this.constructor.blotName&&super.formatAt(e,t,l,o)}}k.blotName="blockTitle",k.tagName="h1",Quill.register(k);class v extends b{static create(e){let t=super.create(e);return t.setAttribute("data-placeholder","Your name"),t.setAttribute("data-label","Author"),t}formatAt(e,t,l,o){l===this.constructor.blotName?super.formatAt(e,t,l,o):"link"===l&&super.formatAt(0,this.length(),l,o)}}v.blotName="blockAuthor",v.tagName="address",Quill.register(v);class _ extends g{optimize(){super.optimize();let e=$(this.domNode).text();e=e.replace(/[\s_]+/g,"-"),e=e.replace(/(^-+|-+$)/g,""),this.domNode.setAttribute("id",e)}formatAt(e,t,l,o){("bold"!==l&&"italic"!==l&&"code"!==l||!o)&&super.formatAt(e,t,l,o)}}_.blotName="blockHeader",_.tagName="h3",Quill.register(_);class x extends _{}x.blotName="blockSubheader",x.tagName="h4",Quill.register(x);class S extends n{}S.blotName="blockBlockquote",S.tagName="blockquote",Quill.register(S);class C extends n{}C.blotName="blockPullquote",C.tagName="aside",Quill.register(C);class y extends c{replace(e){e.children.forEach(e=>{e instanceof f&&e.replaceWith(u.create("text","\n"))}),super.replace(e)}}y.blotName="code-block",Quill.register(y);class N extends r{}N.blotName="blockDivider",N.tagName="hr",Quill.register(N);class E extends r{static create(e){let t=super.create(e);return t.setAttribute("contenteditable","false"),t}constructor(e,t){super(e),this.domWrapper=document.createElement("div"),this.domCursor=document.createElement("span"),this.domCaption=document.createElement("figcaption"),this.domWrapper.classList.add("figure_wrapper"),this.domCursor.classList.add("cursor_wrapper"),this.domCursor.setAttribute("contenteditable","true"),this.domCaption.classList.add("editable_text"),this.domCaption.setAttribute("data-placeholder","Caption (optional)"),t.caption&&(this.domCaption.innerText=t.caption),this.domNode.appendChild(this.domWrapper),this.domNode.appendChild(this.domCursor),this.domNode.appendChild(this.domCaption),setTimeout(()=>{K(this.domNode)},1);let l=!1;t.image?(this.appendImgNode(t.image),l=this.uploadData(t.image)):t.video?(this.appendVideoNode(t.video),l=this.uploadData(t.video)):t.embed&&this.appendIframeNode(t.embed),l&&(this.domProgress=document.createElement("div"),this.domProgressBar=document.createElement("div"),this.domProgress.classList.add("file_progress"),this.domProgressBar.classList.add("file_progress_bar"),this.domWrapper.classList.add("loading"),this.domProgress.appendChild(this.domProgressBar),this.domWrapper.appendChild(this.domProgress),this.uploadFile(l)),$(this.domWrapper).click(()=>{if(!this.domNode.classList.contains("focus")){let e=this.offset(xe.scroll);xe.focus(),xe.setSelection(e,0,Quill.sources.USER)}}),$(this.domCursor).keydown(e=>{let t=e.which||e.keyCode;if(t==p.keys.BACKSPACE){let t=this.offset(xe.scroll);xe.deleteText(t,this.length(),Quill.sources.USER),xe.setSelection(t-1,0,Quill.sources.USER),e.preventDefault()}else if(t==p.keys.ENTER){let t=this.offset(xe.scroll)+this.length();xe.focus(),xe.insertText(t,"\n",Quill.sources.USER),xe.setSelection(t,0,Quill.sources.USER),e.preventDefault()}}),$(this.domCursor).on("paste",e=>{e.stopPropagation(),e.preventDefault()}),$(this.domCaption).keydown(e=>{let t=e.which||e.keyCode,l=$(e.target);if(t==p.keys.ENTER){if(e.shiftKey)return;let t=l.selection("getPos"),o=l.val();if(t.start!=t.end)o=o.substr(0,t.start)+o.substr(t.end),l.val(o).selection("setPos",{start:o.length,end:o.length});else if(t.end==o.length){let e=this.offset(xe.scroll)+this.length();xe.focus(),xe.insertText(e,"\n",Quill.sources.USER),xe.setSelection(e,0,Quill.sources.USER)}e.preventDefault()}else if(t==p.keys.DOWN||t==p.keys.TAB||t==p.keys.RIGHT){let t=l.selection("getPos"),o=l.val();if(t.start==t.end&&t.end==o.length){let t=this.offset(xe.scroll)+this.length();xe.focus(),xe.setSelection(t,0,Quill.sources.USER),e.preventDefault()}}else if(t==p.keys.LEFT||t==p.keys.UP){let t=l.selection("getPos");if(t.start==t.end&&0===t.start){let t=this.offset(xe.scroll)-1;xe.focus(),xe.setSelection(t,0,Quill.sources.USER),e.preventDefault()}}}),$(this.domCaption).on("paste",e=>{e.stopPropagation()}),$(this.domCaption).on("keyup drop change input textInput paste cut",e=>{$(this.domCaption).toggleClass("empty",!e.target.value),autosize.update(e.target),O()}),$(this.domCaption).click(e=>{e.target.focus()})}appendImgNode(e){let t=document.createElement("img");return t.setAttribute("src",this.sanitize(e)),this.domWrapper.appendChild(t),t}appendVideoNode(e){let t=document.createElement("video");return t.setAttribute("src",this.sanitize(e)),t.setAttribute("preload","auto"),t.setAttribute("controls","controls"),t.addEventListener("loadeddata",(function(){this.mozHasAudio||this.webkitAudioDecodedByteCount||this.audioTracks&&this.audioTracks.length||(this.setAttribute("autoplay","autoplay"),this.setAttribute("loop","loop"),this.setAttribute("muted","muted"),this.removeAttribute("controls"),this.play())})),this.domWrapper.appendChild(t),t}appendIframeNode(e){let t=document.createElement("div"),l=document.createElement("div"),o=document.createElement("iframe");return t.classList.add("iframe_wrap"),t.appendChild(l),l.classList.add("iframe_helper"),l.style.paddingTop="56.25%",l.appendChild(o),o.setAttribute("src",this.sanitize(e)),o.setAttribute("width","640"),o.setAttribute("height","360"),o.setAttribute("frameborder","0"),o.setAttribute("allowtransparency","true"),o.setAttribute("allowfullscreen","true"),o.setAttribute("scrolling","no"),this.domWrapper.appendChild(t),t}uploadFile(e){!function(e,t,l,o){var i=new FormData;i.append("file",U(e)),$.ajax({url:"/upload",type:"POST",data:i,cache:!1,dataType:"json",processData:!1,contentType:!1,xhr:function(){var e=new XMLHttpRequest;return e.upload.addEventListener("progress",(function(e){e.lengthComputable&&t&&t(e.loaded,e.total)})),e},beforeSend:function(e){t&&t(0,1)},success:function(e){if(e.error)return o&&o(e.error);$.each(e,(function(e,t){l&&l(t)}))},error:function(e){return o&&o("Network error")}})}(e,(e,t)=>{let l=0;t&&e&&(l=100*e/t,l=Math.min(100,l)),this.domProgressBar.style.width=l+"%"},t=>{if(t){let l=this.sanitize(t.src);if("video/"==e.type.substr(0,6)){this.domWrapper.querySelector("video").setAttribute("src",l)}else{this.domWrapper.querySelector("img").setAttribute("src",l)}this.domWrapper.classList.remove("loading"),O()}},e=>(xe.deleteText(this.offset(xe.scroll),this.length(),Quill.sources.SILENT),O(),z(e)))}uploadData(e){let t=null;return!!(t=e.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/))&&{type:t[1],base64_data:t[2]}}sanitize(e){return A(e,["http","https","data"])?e:"//:0"}static value(e){let t={caption:""},l=e.querySelector("img");l&&(t.image=l.src);let o=e.querySelector("video");o&&(t.video=o.src);let i=e.querySelector("iframe");i&&(t.embed=i.src);let s=e.querySelector("figcaption");if(s){let e=s.querySelector(".editable_input");t.caption=e?e.value:s.innerText}return t}focus(){this.domNode.classList.add("focus")}blur(){this.domNode.classList.remove("focus")}_index(e,t){if(e===this.domCaption)return 0;let l=0;return e.nodeType==e.TEXT_NODE&&(l+=t>=0?t:e.data.length),e.previousSibling?l+this._index(e.previousSibling,-1):e.parentNode?l+this._index(e.parentNode,-1):0}_position(e,t){if(e.nodeType==e.TEXT_NODE)return t<=e.data.length?[e,t]:[null,t-=e.data.length];{let l=e.firstChild;for(;l;){let e=null;if([e,t]=this._position(l,t),e)return[e,t];l=l.nextSibling}return[e,t]}}update(e){this.domCursor.innerHTML=""}index(e,t){return 0}position(e,t){return[this.domCursor,0]}}E.blotName="blockFigure",E.tagName="figure",Quill.register(E);class w extends Quill{formatLine(...e){super.formatLine(...e),this.updateSelection()}formatText(...e){super.formatText(...e),this.updateSelection()}updateSelection(e){if(this.hasFocus()){e=e||this.constructor.sources.SILENT;let t=this.getSelection(!0);this.setSelection(++t.index,t.length,e),this.setSelection(--t.index,t.length,e)}}}function A(e,t){let l=document.createElement("a");l.href=e;let o=l.href.slice(0,l.href.indexOf(":"));return t.indexOf(o)>-1}function Q(e){let t;if((t=e.match(/^(https?):\/\/(www\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/i))||(t=e.match(/^(https?):\/\/(www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/i)))return{embed:"/embed/youtube?url="+encodeURIComponent(e)};if(t=e.match(/^(https?):\/\/(www\.)?vimeo\.com\/(\d+)/i))return{embed:"/embed/vimeo?url="+encodeURIComponent(e)};if(t=e.match(/^(https?):\/\/(www\.|mobile\.)?twitter\.com\/(.+)\/status\/(\d+)/i))return{embed:"/embed/twitter?url="+encodeURIComponent(e)};if(t=e.match(/^(https?):\/\/(t\.me|telegram\.me|telegram\.dog)\/([a-zA-Z0-9_]+)\/(\d+)/i))return{embed:"/embed/telegram?url="+encodeURIComponent(e)};if(t=e.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/))return"video/"==t[1].substr(0,6)?{video:e}:{image:e};if(t=e.match(/^(https?):\/\/\S+/i)){let l=document.createElement("a");if(l.href=e,l.pathname.match(/\.(jpe?g|png|gif|mp4)$/i))return"mp4"==t[1]?{video:e}:{image:e}}return!1}function L(){$(".placeholder_once").removeAttr("data-placeholder").removeClass("placeholder_once empty")}function R(e){e.scroll.descendants(n,0,e.scroll.length()).forEach(e=>{if(e.domNode.hasAttribute("data-placeholder")){let t=$(e.domNode).text();$(e.domNode).toggleClass("empty",!t)}})}function P(e){let[t,l]=e.scroll.lines();if(t instanceof r)e.updateContents((new h).insert("\n",{blockTitle:!0}).insert("\n",{blockAuthor:!0}),Quill.sources.SILENT);else if(t instanceof k||e.formatLine(0,1,{blockTitle:!0},Quill.sources.SILENT),l){if(l instanceof r){let t=l.offset(e.scroll);e.updateContents((new h).retain(t).insert("\n",{blockAuthor:!0}),Quill.sources.SILENT)}else if(!(l instanceof v)){let t=l.offset(e.scroll);e.formatLine(t,1,{blockAuthor:!0},Quill.sources.SILENT)}}else{let t=e.scroll.length();e.updateContents((new h).retain(t).insert("\n",{blockAuthor:!0}),Quill.sources.SILENT)}let[,,o]=e.scroll.lines();if(o){let t=o.offset(e.scroll),l=e.scroll.length()-t;e.scroll.descendants(b,t,l).forEach(t=>{let l=t.offset(e.scroll),o=t.length(),i=t.constructor.blotName;e.formatText(l,o,i,!1,Quill.sources.SILENT)})}else{let t=e.scroll.length();e.insertText(t,"\n",Quill.sources.SILENT)}let i=e.scroll.lines();i.forEach((e,t)=>{"P"==e.domNode.tagName&&(3==i.length&&2==t?e.domNode.setAttribute("data-placeholder","Your story..."):e.domNode.removeAttribute("data-placeholder"))})}function q(e){let[t]=xe.scroll.descendant(E,e.index);xe.scroll.descendants(E,0,xe.scroll.length()).forEach(e=>{t!==e&&e.blur()}),t&&(t.focus(),me(),fe())}function I(e,t){if("image/jpg"==e.type||"image/jpeg"==e.type)return loadImage(e,l=>{if("error"===l.type)t(e);else if(l.toBlob)l.toBlob((function(e){t(e)}),e.type);else{var o=l.toDataURL(e.type),i={type:e.type,base64_data:o.split(",")[1]};t(U(i))}},{canvas:!0,orientation:!0});t(e)}function U(e){for(var t=atob(e.base64_data),l=[],o=0;o<t.length;o++)l.push(t.charCodeAt(o));return new Blob([new Uint8Array(l)],{type:e.type})}function D(e){if(!e.tagName)return e.data;let t={tag:e.tagName.toLowerCase()};if(e.attributes.length){t.attrs={};for(var l=0;l<e.attributes.length;l++){let o=e.attributes[l];t.attrs[o.name]=o.value}}if(e.childNodes.length){t.children=[];for(l=0;l<e.childNodes.length;l++)t.children.push(D(e.childNodes[l]))}return t}function B(e){let t=$(xe.scroll.domNode);$("textarea,input",t).map((function(){this.setAttribute("data-value",this.value)}));let l=t.clone();return $("textarea,input",t).map((function(){this.removeAttribute("data-value")})),$("textarea,input",l).map((function(){this.value=this.getAttribute("data-value"),this.removeAttribute("data-value")})),K(l,!1),$("[contenteditable]",l).removeAttr("contenteditable"),$("[data-placeholder]",l).removeAttr("data-placeholder"),$("[data-label]",l).removeAttr("data-label"),$("[data-title]",l).removeAttr("data-title"),$(".editable_text",l).removeClass("editable_text"),$(".focus",l).removeClass("focus"),$(".empty",l).removeClass("empty"),$('[class=""]',l).removeAttr("class"),$(".file_progress",l).remove(),$(".cursor_wrapper",l).remove(),e?($("h1:not(:has(br)),address:not(:has(br))",l).append("<br>"),l.html()):($("h1,address",l).remove(),$("br.inline",l).replaceWith("\n"),{data:JSON.stringify(D(l.get(0)).children),length:l.html().length})}function z(e){ue.text(e),clearTimeout(ue.to),ue.addClass("shown"),ue.to=setTimeout(()=>{ue.removeClass("shown")},3e3)}function H(){if(V.hasClass("tl_article_saving"))return!1;let e=$("h1",G).text(),t=$("address",G).text(),l=$("address a",G).attr("href")||"";if(e.length<2){clearTimeout(V.to),V.addClass("title_required"),V.to=setTimeout(()=>{V.removeClass("title_required")},3e3),xe.focus();let[e]=xe.scroll.descendants(k,0,xe.scroll.length());return xe.setSelection(e.offset(),e.length()-1),xe.selection.scrollIntoView(),z("Title is too small")}if($('img[src^="data:"],video[src^="data:"]').length)return z("Upload in progress.\nPlease wait...");let o=B();if(o.length>65536)return z("Content is too big");V.addClass("tl_article_saving"),M(!1);let i="---------------------------TelegraPhBoundary21",s="--"+i+'\r\nContent-Disposition: form-data; name="Data";filename="content.html"\r\nContent-type: plain/text\r\n\r\n'+o.data+"\r\n--"+i+'\r\nContent-Disposition: form-data; name="title"\r\n\r\n'+e+"\r\n--"+i+'\r\nContent-Disposition: form-data; name="author"\r\n\r\n'+t+"\r\n--"+i+'\r\nContent-Disposition: form-data; name="author_url"\r\n\r\n'+l+"\r\n--"+i+'\r\nContent-Disposition: form-data; name="save_hash"\r\n\r\n'+(T.saveHash||"")+"\r\n--"+i+'\r\nContent-Disposition: form-data; name="page_id"\r\n\r\n'+T.pageId+"\r\n--"+i+"--";$.ajax(T.apiUrl+"/save",{contentType:"multipart/form-data; boundary="+i,data:s,type:"POST",dataType:"json",xhrFields:{withCredentials:!0},success:function(e){if(V.removeClass("tl_article_saving"),e.error)return M(!0),z(e.error);!function(e){try{localStorage.removeItem(e)}catch(e){return!1}}("draft"),!T.pageId&&e.path&&(location.href="/"+e.path)},error:function(e){return V.removeClass("tl_article_saving"),M(!0),z("Network error")}})}function W(e){let t=null==e?{}:xe.getFormat(e),l=!!t.blockAuthor,o=!(!t.blockHeader&&!t.blockSubheader),i=!!t["code-block"];if(ee.toggleClass("active",!!t.bold),ee.toggleClass("disabled",l||o||i),te.toggleClass("active",!!t.italic),te.toggleClass("disabled",l||o||i),oe.toggleClass("active",!!t.blockHeader),oe.toggleClass("disabled",l),ie.toggleClass("active",!!t.blockSubheader),ie.toggleClass("disabled",l),se.toggleClass("active",!(!t.blockBlockquote&&!t.blockPullquote)),se.toggleClass("pullquote",!!t.blockPullquote),se.toggleClass("disabled",l),null!=e){let t=xe.scroll.descendants(m,e.index,e.length);le.toggleClass("active",!!t.length)}else le.toggleClass("active",!1);le.toggleClass("disabled",i)}function O(){if(!Se)return!1;if(!T.pageId){var e=B(!0);if(Se!=e)return Se=e,function(e,t){try{return localStorage.setItem(e,t),!!localStorage.getItem(e)}catch(e){return!1}}("draft",e)}return!1}function F(){return!T.pageId&&function(e){try{return localStorage.getItem(e)}catch(e){return!1}}("draft")}function j(){return V.hasClass("tl_article_edit")}function K(e,t){void 0===t&&(t=j()),t?$(".editable_text:not(:has(.editable_input))",e).map((function(){let e=this.innerText,t=document.createElement("textarea");return t.classList.add("editable_input"),t.setAttribute("tabindex","-1"),t.setAttribute("rows","1"),t.value=e,e||this.classList.add("empty"),$(this).empty().append(t),autosize(t),t})):$(".editable_text > .editable_input",e).map((function(){let e=this.value,t=this.parentNode;return $(t).empty().text(e),t}))}function M(e){if(V.toggleClass("tl_article_edit",e),K(),window.quill&&(xe.enable(e),e&&xe.focus()),!e){var t=$("h1",G).text(),l=$("address",G).text(),o=$("address a",G).attr("href");$("h1",X).text(t),$("address a",X).text(l),o?$("address a",X).attr("href",o):$("address a",X).removeAttr("href"),hideLinkTooltip(),me(),fe()}}$(".tl_page");let V=$(".tl_article"),X=$(".tl_article_header"),G=$(".tl_article_content"),Y=$("#_tl_tooltip"),Z=$("#_tl_blocks"),J=$("#_tl_link_tooltip"),ee=$("#_bold_button"),te=$("#_italic_button"),le=$("#_link_button"),oe=$("#_header_button"),ie=$("#_subheader_button"),se=$("#_quote_button"),ne=$("#_image_button"),re=$("#_embed_button"),ae=$("#_edit_button"),ce=$("#_publish_button"),de=$(".account"),ue=$("#_error_msg"),he={padding:10,position:o?"bottom":"top",minDelta:5},pe={padding:7,position:"bottom",depend:Y,dependPadding:10};function me(){Y.removeClass("move_anim shown"),ve(J,null,pe)}function fe(){Z.removeClass("shown")}function ge(){$(".tl_alert").remove()}function be(e,t){(t=t||{}).close_btn=t.close_btn||"OK",t.submit_btn=t.submit_btn||!1,t.close=t.close||ge,t.submit=t.submit||t.close,ge();var l=$('<div class="tl_alert"><main class="tl_alert_message"><section></section><aside class="tl_message_buttons"></aside></main></div>');$("section",l).html(e);var o=$("aside",l);t.close_btn&&$('<button class="button"></button>').html(t.close_btn).click(t.close).appendTo(o);t.submit_btn&&$('<button class="button"></button>').html(t.submit_btn).click((function(){l.addClass("tl_alert_loading"),t.submit()})).appendTo(o);l.appendTo("body")}function ke(e,t,l){if(!t||!t.hasClass("shown"))return!1;e.bottom=e.top+e.height,e.right=e.left+e.width;let o=t,i={top:o._top,bottom:o._top+t.outerHeight(),left:o._left,right:o._left+t.outerWidth()};return!(e.left-i.right>=l||i.left-e.right>=l||e.top-i.bottom>=l||i.top-e.bottom>=l)&&i}function ve(e,t,l){if(l=l||{padding:10,position:"top"},null==(t=t||e._range||null))return;let o=xe.getBounds(t),i=$(xe.container).offset(),s={width:e.outerWidth(),height:e.outerHeight()},n=$(window).outerWidth(),r=$(window).outerHeight(),a=document.body.scrollTop,c=9,d=a+9,u=n-s.width-9,h=a+r-s.height-9;s.left=o.left+o.width/2-s.width/2;let p,m=i.left+s.left;if(m<c?s.left=c-i.left:m>u&&(s.left=u-i.left),"top"==l.position){s.top=o.top-s.height-l.padding,p=!1,i.top+s.top<d&&(s.top=o.bottom+l.padding,p=!0)}else if("bottom"==l.position){let e=!1;s.top=o.bottom+l.padding,(e=ke(s,l.depend,l.dependPadding))&&(s.top=e.bottom+l.dependPadding),p=!0,i.top+s.top>h&&(s.top=o.top-s.height-l.padding,(e=ke(s,l.depend,l.dependPadding))&&(s.top=e.top-s.height-l.dependPadding),p=!1)}s.left=Math.round(s.left),s.top=Math.round(s.top),e._range=t,l.minDelta&&Math.abs(s.left-e._left)<l.minDelta&&Math.abs(s.top-e._top)<l.minDelta||(e._left=s.left,e._top=s.top,e.css({left:s.left,top:s.top}).toggleClass("bottom",p))}function _e(e){let t=$(".prompt_input",e),l=$(".close",e);t.off("keydown"),t.off("blur"),l.off("click"),e.show().removeClass("tooltip_prompt"),xe.focus()}Y.mouseover((function(e){let t=e.target;"BUTTON"!=e.target.tagName||e.target.classList.contains("disabled")||(Y.attr("data-hover",t.id).addClass("hover"),setTimeout(()=>{Y.addClass("hover_anim")},1),clearTimeout(Y.to))})),Y.mouseout((function(e){"BUTTON"==e.target.tagName&&(Y.removeClass("hover"),Y.to=setTimeout(()=>{Y.removeClass("hover_anim")},70))})),ee.click((function(e){let t=e.target.classList.contains("active");e.preventDefault();xe.getSelection(!0);xe.format("bold",!t),xe.updateSelection(Quill.sources.API)})),te.click((function(e){let t=e.target.classList.contains("active");e.preventDefault();xe.getSelection(!0);xe.format("italic",!t),xe.updateSelection(Quill.sources.API)})),le.click((function(e){let t=e.target.classList.contains("active");e.preventDefault();var l=xe.getSelection(!0);if(t){xe.scroll.descendants(m,l.index,l.length).forEach(e=>{let t=e.offset(xe.scroll),l=e.length();xe.formatText(t,l,"link",!1)}),W(l)}else!function(e,t,l){let o=$(".prompt_input",e),i=$(".close",e);o.val("").attr("placeholder",t),o.on("keydown",(function(t){let i=t.which||t.keyCode;if(27==i)_e(e);else if(13==i){let i=o.val();i&&(l&&l(i),t.preventDefault()),_e(e)}})),o.on("blur",(function(){_e(e)})),i.on("click",(function(){_e(e)})),e.show().addClass("tooltip_prompt"),o.focus()}(Y,"Paste or type a link...",(function(e){"#"!=(e=e.trim()).substr(0,1)&&"/"!=e.substr(0,1)&&"http://"!=e.substr(0,7)&&"https://"!=e.substr(0,8)&&"tg://"!=e.substr(0,5)&&"mailto:"!=e.substr(0,7)&&(e=e.indexOf("@")>0?"mailto:"+e:"http://"+e),xe.focus(),xe.format("link",e),W(l)}))})),oe.click((function(e){let t=e.target.classList.contains("active");e.preventDefault();let l=xe.getSelection(!0);xe.format("blockHeader",!t),xe.scroll.descendants(_,l.index,l.length).forEach(e=>{let t=e.offset(xe.scroll),l=e.length();xe.formatText(t,l,{bold:!1,italic:!1,code:!1},Quill.sources.SILENT)}),xe.updateSelection(Quill.sources.API)})),ie.click((function(e){let t=e.target.classList.contains("active");e.preventDefault();let l=xe.getSelection(!0);xe.format("blockSubheader",!t),xe.scroll.descendants(x,l.index,l.length).forEach(e=>{let t=e.offset(xe.scroll),l=e.length();xe.formatText(t,l,{bold:!1,italic:!1,code:!1},Quill.sources.SILENT)}),xe.updateSelection(Quill.sources.API)})),se.click((function(e){let t=e.target,l=t.classList.contains("active"),o=t.classList.contains("pullquote");e.preventDefault();xe.getSelection(!0);l?xe.format("blockPullquote",!o):xe.format("blockBlockquote",!0),xe.updateSelection(Quill.sources.API)})),ne.click((function(){let e=xe.container.querySelector("input.ql-image[type=file][data-status=ready]");null==e&&(e=document.createElement("input"),e.setAttribute("type","file"),e.setAttribute("accept",i?"image/gif, image/jpeg, image/jpg, image/png":"image/gif, image/jpeg, image/jpg, image/png, video/mp4"),e.classList.add("ql-image"),e.addEventListener("change",()=>{null!=e.files&&null!=e.files[0]&&I(e.files[0],t=>{if(xe.fileSizeLimit&&t.size>xe.fileSizeLimit)return xe.fileSizeLimitCallback&&xe.fileSizeLimitCallback();var l=new FileReader;l.onload=function(t){let l=Q(t.target.result);if(l){let e=xe.getSelection(!0);xe.updateContents((new h).retain(e.index).delete(e.length).insert({blockFigure:l}),Quill.sources.USER)}else z("Invalid file format");e.value="",e.setAttribute("data-status","ready")},l.readAsDataURL(t)})}),xe.container.appendChild(e)),e.setAttribute("data-status","busy"),e.click()})),re.click((function(e){let t=xe.getSelection(!0),[l]=xe.scroll.line(t.index);if(l){$(l.domNode).text()||(l.domNode.setAttribute("data-placeholder","Paste a YouTube, Vimeo or Twitter link, and press Enter"),$(l.domNode).addClass("placeholder_once empty"),fe())}})),ce.click((function(){H()})),ae.click((function(){M(!0)})),$(window).on("scroll resize",(function(){ve(Y,null,he),ve(J,null,pe)})),(new Image).src=window.devicePixelRatio>=2?"/images/icons_2x.png?1":"/images/icons.png?1";var xe=function(){let e=F();function t(e,t){return[e,function(e,l){return l.compose((new h).retain(l.length(),t))}]}function l(e){let t=function(e){let[t,l]=s.scroll.line(e);return s.getText(e,t.length()-l)}(e);return!t||"\n"==t}function o(e,t,o){let i,n=t.index;t.length>0&&s.scroll.deleteAt(n,t.length);let r=l(n),a=!1;return[i]=s.scroll.descendant(f,n),i?(!i.prev||i.prev instanceof f)&&(s.scroll.deleteAt(--n,1),a=!0):([i]=s.scroll.descendant(f,n-1),i&&(s.scroll.deleteAt(--n,1),a=!0)),[i]=s.scroll.descendant(g,n),i||a||!e?(s.insertText(n,"\n",Quill.sources.USER),s.setSelection(++n,Quill.sources.USER),(o.format.blockHeader||o.format.blockSubheader||o.format.blockBlockquote||o.format.blockPullquote)&&r&&s.formatLine(n,1,{blockHeader:!1,blockSubheader:!1,blockBlockquote:!1,blockPullquote:!1},Quill.sources.USER)):(s.insertEmbed(n,"textBreak",!0,Quill.sources.USER),[i]=s.scroll.descendant(f,n),!i||i.next||i.prev&&i.prev instanceof f||(s.insertEmbed(++n,"textBreak",!0,Quill.sources.SILENT),s.setSelection(n,0,Quill.sources.SILENT))),s.selection.scrollIntoView(),!1}function i(e){let[t,l]=s.scroll.line(e.index);if(t){let o;if(o=t.domNode.innerText.substr(0,l).match(/(^|\s)((?:https?|tg):\/\/\S+|www\.\S+)$/)){let t=o[2],l=t.length;"www."==t.substr(0,4)&&(t="http://"+t),s.scroll.descendants(m,e.index-l,l).length||s.formatText(e.index-l,l,"link",t,Quill.sources.USER)}}return!0}e&&$("#_tl_editor").html(e);var s=new w("#_tl_editor",{readOnly:!0,fileSizeLimit:5242880,fileSizeLimitCallback:function(){z("File too big (up to 5 MB allowed)")},updatePhoto:I,formats:["bold","italic","underline","strike","code","link","textBreak","blockTitle","blockAuthor","blockHeader","blockSubheader","blockBlockquote","blockPullquote","blockDivider","blockFigure","code-block","list"],modules:{clipboard:{matchers:[t("h2",{blockHeader:!0}),t("h5",{blockSubheader:!0}),t("h6",{blockSubheader:!0}),["img",function(e,t){return e.src&&A(e.src,["http","https","data"])?(new h).insert({blockFigure:{image:e.src,caption:e.alt||""}}):new h}],["video",function(e,t){return e.src&&A(e.src,["http","https","data"])?(new h).insert({blockFigure:{video:e.src}}):new h}],["br",function(e,t){return e.classList.contains("inline")?(new h).insert({textBreak:!0}):t}]]},keyboard:{bindings:{indent:{handler:function(){return!0}},outdent:{handler:function(){return!0}},tab:{key:p.keys.TAB,handler:function(){return!0}},"required enter":{key:p.keys.ENTER,collapsed:!0,shiftKey:null,format:["blockTitle","blockAuthor"],suffix:/^$/,handler:function(e,t){let[l]=this.quill.scroll.descendant(b,e.index);return l&&l.next&&!$(l.next.domNode).text()?(this.quill.setSelection(l.next.offset(this.quill.scroll),0,Quill.sources.USER),!1):(this.quill.insertText(e.index,"\n",Quill.sources.USER),!1)}},"required tab prev":{key:p.keys.TAB,shiftKey:!0,handler:function(e,t){let l=null;if(e.length>0){let t=s.scroll.descendants(n,e.index,e.length);if(1!=t.length)return!0;l=t[0]}else[l]=s.scroll.descendant(n,e.index);if(null!=l&&null!=l.prev&&l.prev instanceof b){let e=l.prev.offset(s.scroll),t=l.prev.length();return s.setSelection(e,t>1?t:0,Quill.sources.USER),!1}return!0}},"required tab next":{key:p.keys.TAB,shiftKey:!1,handler:function(e,t){let l=null;if(e.length>0){let t=s.scroll.descendants(n,e.index,e.length);if(1!=t.length)return!0;l=t[0]}else[l]=s.scroll.descendant(n,e.index);if(null!=l&&l instanceof b&&null!=l.next){let e=l.next.offset(s.scroll);if(l.next instanceof b){let t=l.next.length();s.setSelection(e,t>1?t:0,Quill.sources.USER)}else s.setSelection(e,0,Quill.sources.USER);return!1}return!0}},"no tab":{key:p.keys.TAB,shiftKey:null,handler:function(e,t){return!1}},"detect embed":{key:p.keys.ENTER,collapsed:!0,handler:function(e,t){let[l,o]=s.scroll.line(e.index);if(l){let t,i=l.domNode.innerText.substr(0,o);if(t=i.match(/(^|\s)(https?:\/\/\S+)$/)){let n=t[2];if(s.scroll.descendants(m,e.index-n.length,n.length).length||s.formatText(e.index-n.length,n.length,"link",n,Quill.sources.USER),!i.substr(0,o-n.length).trim().length&&"P"==l.domNode.tagName){let e=Q(n);if(e){let t=l.offset(s.scroll);return s.updateContents((new h).retain(t).delete(i.length).insert({blockFigure:e}),Quill.sources.USER),fe(),!1}}}}return!0}},"divider autofill":{key:p.keys.ENTER,collapsed:!0,prefix:/^([-*])\1{2,}$/,handler:function(e,t){let[l,o]=s.scroll.line(e.index);if(l&&"P"==l.domNode.tagName){let e=l.offset(s.scroll),t=(new h).retain(e).delete(l.length()).insert({blockDivider:!0});return l.next||t.insert("\n"),s.updateContents(t,Quill.sources.USER),!1}return!0}},break:{key:p.keys.ENTER,shiftKey:!0,handler:o.bind(null,!0)},enter:{key:p.keys.ENTER,handler:o.bind(null,!1)},"detect link":{key:" ",collapsed:!0,handler:i},"cancel placeholder":{key:p.keys.ESCAPE,handler:function(e,t){return L(),this.quill.updateSelection(Quill.sources.USER),!0}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^(1\.|-|\*)$/,handler:function(e,t){let l=t.prefix.length;this.quill.scroll.deleteAt(e.index-l,l),this.quill.formatLine(e.index-l,1,"list",1===l?"bullet":"ordered",Quill.sources.USER),this.quill.setSelection(e.index-l,Quill.sources.SILENT)}},"pre wrap":{key:192,collapsed:!0,format:{"code-block":!1},prefix:/^``$/,offset:2,handler:function(e,t){let l=t.prefix.length,o=e.index-l;this.quill.scroll.deleteAt(o,l),this.quill.formatLine(o,1,"code-block",!0,Quill.sources.USER),this.quill.setSelection(o,Quill.sources.SILENT)}},code:{key:192,handler:function(e,t){if(!t.collapsed){let l=s.scroll.descendants(n,e.index,e.length);if(l.length>1||1==l.length&&l[0]instanceof c)return this.quill.format("code-block",!t.format["code-block"],Quill.sources.USER),!1;if(s.scroll.descendants(f,e.index,e.length).length)return this.quill.format("code-block",!t.format["code-block"],Quill.sources.USER),!1}if(t.collapsed&&!t.format.code&&!/\s$/.test(t.prefix))return!0;this.quill.format("code",!t.format.code,Quill.sources.USER)}},"figure delete":{key:p.keys.BACKSPACE,collapsed:!0,offset:0,handler:function(e,t){let[l,o]=s.scroll.line(e.index);return!(l&&l.prev&&l.prev instanceof E)||(t.empty&&s.deleteText(e.index,1,Quill.sources.USER),s.setSelection(l.prev.offset(s.scroll)),!1)}},"field backspace":{key:p.keys.BACKSPACE,collapsed:!0,offset:0,handler:function(e,t){let[l,o]=s.scroll.line(e.index);return!(l&&l.prev&&l.prev instanceof b&&$(l.domNode).text().length>0)}}}}}});return s.addContainer(J.get(0)),s.addContainer(Y.get(0)),s.addContainer(Z.get(0)),s.on(Quill.events.EDITOR_CHANGE,(function(e,t){if(e!==Quill.events.SELECTION_CHANGE)return;if(!s.isEnabled())return;if(null==t)return;q(t);let[l,o]=s.scroll.descendant(n,t.index);0===t.length?(me(),null==l||l instanceof b||l instanceof S||l instanceof C||l instanceof c||l instanceof d||$(l.domNode).text().length?fe():function(e){if(!j())return;Z.addClass("shown"),function(e){void 0===e&&(e=s.getSelection());if(null==e||!window.quill)return;let t=s.getBounds(e);Z.css({top:t.top+t.height/2})}(e)}(t)):(null==l||l instanceof k?me():(!function(e){if(!j())return;Y.removeClass("tooltip_prompt"),ve(Y,e,he),Y.hasClass("move_anim")||setTimeout(()=>{Y.addClass("move_anim")},10);Y.hasClass("shown")?ve(J,null,pe):setTimeout(()=>{Y.addClass("shown"),ve(J,null,pe)},10)}(t),W(t)),fe());let i=s.getFormat(t);V.toggleClass("title_focused",!(!i.blockTitle&&!i.blockAuthor)),L()})),s.on(Quill.events.TEXT_CHANGE,(function(){s.getSelection();P(s),R(s),L(),O()})),s.on(Quill.events.TEXT_PASTE,(function(){let e=s.getSelection();e&&i(e)})),s.on(Quill.events.SCROLL_OPTIMIZE,(function(e){e.forEach(e=>{if("childList"==e.type&&!e.addedNodes.length&&e.removedNodes.length){let t=e.previousSibling,l=e.nextSibling;if(!l&&t&&"BR"==t.tagName&&"inline"==t.className){let t=document.createElement("br");t.className="inline",e.target.appendChild(t)}else!l||!t||"BR"==t.tagName&&"inline"==t.className||"BR"!=l.tagName||"inline"!=l.className||l.nextSibling||l.parentNode&&l.parentNode.removeChild(l)}})})),s.scroll.domNode.setAttribute("dir","auto"),$(document).on("click touchstart",(function(e){let t=e.target;for(;t;){if(t===s.container)return;t=t.parentNode}me(),fe()})),P(s),R(s),s}(),Se=!1;o&&$(document.body).addClass("mobile"),$.ajax(T.apiUrl+"/check",{data:{page_id:T.pageId},type:"POST",dataType:"json",xhrFields:{withCredentials:!0},success:function(e){if(e.save_hash&&(T.saveHash=e.save_hash),(e.can_edit&&T.saveHash||!T.pageId)&&(e.short_name&&de.text(e.short_name),V.addClass("tl_article_editable")),!T.pageId&&(V.addClass("tl_article_edit"),!F()&&e.author_name)){if(e.author_url)var t={link:e.author_url};else t={};let[l]=xe.scroll.descendants(v);l&&xe.updateContents((new h).retain(l.offset()).delete(l.length()).insert(e.author_name,t),Quill.sources.USER)}if(e.auth_alert&&e.short_name){var l="Success! You are now logged in as <b>"+e.short_name.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\'/g,"&#39;").replace(/%/g,"&#37;")+"</b> in this browser.";e.migrate_count>0&&e.migrate_hash?(l+="<br/><br/>",be(l+="We can also add "+e.migrate_count+" Telegraph page"+(e.migrate_count>1?"s":"")+" from this browser to your account.",{close_btn:"Skip",submit_btn:"Add",submit:function(){var t;t=e.migrate_hash,$.ajax(T.apiUrl+"/migrate",{data:{migrate_hash:t},type:"POST",dataType:"json",xhrFields:{withCredentials:!0},success:function(e){e.migrated_count>0?be("Added <b>"+e.migrated_count+"</b> Telegraph page"+(e.migrated_count>1?"s":"")+' to your account.<br><br>To see a list of your pages, talk to the <a href="https://t.me/telegraph" target="_blank">@Telegraph</a> bot on Telegram.'):ge()}})}})):be(l)}Se=B(!0),M(j())}})}}]);