"use strict";(self.webpackChunkinscriptum=self.webpackChunkinscriptum||[]).push([[2940],{12940:(t,o,i)=>{i.r(o),i.d(o,{EditorTooltipComponent:()=>d});var e=i(60745),s=i(35306),l=i(36201),n=i(69935);let d=class extends e.yB{constructor(){super(l.Z,!1),this.html=s.dy,this.linkTTOptions={padding:7,position:"bottom",depend:this.$tl_tooltip,dependPadding:10},this.formatTTOptions={padding:10,position:n.browser.mobile?"bottom":"top",minDelta:5}}connectedCallback(){super.connectedCallback(),this.$tl_link_tooltip=this.querySelector("#_tl_link_tooltip")||document.createElement("div"),this.$tl_tooltip=this.querySelector("#_tl_tooltip")||document.createElement("div"),this.$tl_blocks=this.querySelector("#_tl_blocks")||document.createElement("div"),this.$bold_button=this.querySelector("#_bold_button")||document.createElement("div"),this.$italic_button=this.querySelector("#_italic_button")||document.createElement("div"),this.$link_button=this.querySelector("#_link_button")||document.createElement("div"),this.$header_button=this.querySelector("#_header_button")||document.createElement("div"),this.$subheader_button=this.querySelector("#_subheader_button")||document.createElement("div"),this.$quote_button=this.querySelector("#_quote_button")||document.createElement("div"),this.$strikeButton=this.querySelector("#_strike_button")||document.createElement("div"),this.$image_button=this.querySelector("#_image_button")||document.createElement("div"),this.$embed_button=this.querySelector("#_embed_button")||document.createElement("div")}render(){return this.html`
      <div id="_tl_link_tooltip" class="tl_link_tooltip"></div>
      <div id="_tl_tooltip" class="tl_tooltip" @mouseover=${this.handleMouseover.bind(this)} @mouseout=${this.handleMouseout.bind(this)}>
        <div class="buttons">
          <span class="button_hover"></span>
          <div class="button_group">
            <button id="_bold_button"></button>
            <button id="_italic_button"></button>
            <button id="_link_button"></button>
          </div>
          <div class="button_group">
            <button id="_header_button"></button>
            <button id="_subheader_button"></button>
            <button id="_quote_button"></button>
          </div>
          <div class="button_group">
            <button id="_strike_button" class="tt-icon-btn">
            ${s.YP`
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-strikethrough" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7" />
              <path d="M16.5 16a3.5 3.5 0 0 1 -3.5 3h-1.5a4 2 0 0 1 -4 -1.5" />
            </svg>
              `}
            </button>
          </div>
        </div>
        <div class="prompt">
          <span class="close"></span>
          <div class="prompt_input_wrap"><input type="url" class="prompt_input" /></div>
        </div>
      </div>
      <div id="_tl_blocks" class="tl_blocks">
        <div class="buttons">
          <button id="_image_button"></button>
          <button id="_embed_button"></button>
        </div>
      </div>
    `}handleMouseover(t){let o=t.target;t instanceof MouseEvent&&"BUTTON"==(null==o?void 0:o.tagName)&&!o.classList.contains("disabled")&&(this.$tl_tooltip.setAttribute("data-hover",o.id),this.$tl_tooltip.classList.add("hover"),setTimeout((()=>{this.$tl_tooltip.classList.add("hover_anim")}),1),clearTimeout(this.$tl_tooltip.to))}handleMouseout(t){"BUTTON"==t.target.tagName&&(this.$tl_tooltip.classList.remove("hover"),this.$tl_tooltip.to=setTimeout((()=>{this.$tl_tooltip.classList.remove("hover_anim")}),70))}tooltipUpdatePosition(t,o,i,e){if(i=i||{padding:10,position:"top"},null==(o=o||t._range||null))return;let s=e.getBounds(o),l=e.container.getBoundingClientRect(),n={width:t.offsetWidth,height:t.offsetHeight},d=window.outerWidth,p=window.outerHeight,a=document.body.scrollTop,h=a+9,r=d-n.width-9,u=a+p-n.height-9;n.left=s.left+s.width/2-n.width/2;let _,c=l.left+n.left;if(c<9?n.left=9-l.left:c>r&&(n.left=r-l.left),"top"==i.position)n.top=s.top-n.height-i.padding,_=!1,l.top+n.top<h&&(n.top=s.bottom+i.padding,_=!0);else if("bottom"==i.position){let t=!1;n.top=s.bottom+i.padding,(t=this.isOverElement(n,i.depend,i.dependPadding))&&(n.top=t.bottom+i.dependPadding),_=!0,l.top+(n.top||0)>u&&(n.top=s.top-n.height-i.padding,(t=this.isOverElement(n,i.depend,i.dependPadding))&&(n.top=t.top-n.height-i.dependPadding),_=!1)}n.left=Math.round(n.left),n.top=Math.round(n.top||0),t._range=o,i.minDelta&&Math.abs(n.left-t._left)<i.minDelta&&Math.abs(n.top-t._top)<i.minDelta||(t._left=n.left,t._top=n.top,t.style.left=n.left+"px",t.style.top=n.top+"px",t.classList.toggle("bottom",_))}isOverElement(t,o,i){if(!o||!o.classList.contains("shown"))return!1;t.bottom=t.top+t.height,t.right=t.left+t.width;let e={_left:o.offsetLeft,_top:o.offsetTop},s={top:e._top,bottom:e._top+o.offsetHeight,left:e._left,right:e._left+o.offsetWidth};return!(t.left-s.right>=i||s.left-t.right>=i||t.top-s.bottom>=i||s.top-t.bottom>=i)&&s}hideBlocksTooltip(){this.$tl_blocks.classList.remove("shown")}showFormatTooltip(t,o,i){i&&(this.$tl_tooltip.classList.remove("tooltip_prompt"),this.tooltipUpdatePosition(this.$tl_tooltip,t,this.formatTTOptions,o),this.$tl_tooltip.classList.contains("move_anim")||setTimeout((()=>{this.$tl_tooltip.classList.add("move_anim")}),10),this.$tl_tooltip.classList.contains("shown")?this.tooltipUpdatePosition(this.$tl_link_tooltip,null,this.linkTTOptions,o):setTimeout((()=>{this.$tl_tooltip.classList.add("shown"),this.tooltipUpdatePosition(this.$tl_link_tooltip,null,this.linkTTOptions,o)}),10))}hideFormatTooltip(t){this.$tl_tooltip.classList.remove("move_anim","shown"),this.tooltipUpdatePosition(this.$tl_link_tooltip,null,this.linkTTOptions,t)}showBlocksTooltip(t,o,i){o&&(this.$tl_blocks.classList.add("shown"),this.blocksUpdatePosition(t,i))}blocksUpdatePosition(t,o){if(void 0===t&&(t=o.getSelection()),null==t||!o)return;let i=o.getBounds(t);this.$tl_blocks.style.top=i.top+i.height/2+"px"}showLinkTooltip(t,o,i,e){if(!i)return;let s={index:t.offset(e.scroll),length:t.length()};this.$tl_link_tooltip.textContent=o,this.tooltipUpdatePosition(this.$tl_link_tooltip,s,this.linkTTOptions,e),this.$tl_link_tooltip.classList.contains("move_anim")||setTimeout((()=>{this.$tl_link_tooltip.classList.add("move_anim")}),1),this.$tl_link_tooltip.classList.contains("shown")||setTimeout((()=>{this.$tl_link_tooltip.classList.add("shown")}),10)}hideLinkTooltip(t){this.$tl_link_tooltip.classList.remove("move_anim","shown")}};d=function(t,o,i,e){var s,l=arguments.length,n=l<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,o,i,e);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(n=(l<3?s(n):l>3?s(o,i,n):s(o,i))||n);return l>3&&n&&Object.defineProperty(o,i,n),n}([(0,e.Qr)("inscriptum-editor-tooltip")],d)}}]);