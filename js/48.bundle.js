(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{91:function(e,t,i){"use strict";i.r(t),i.d(t,"MyQuill",(function(){return s}));var n=i(59);class s extends n.a{formatLine(...e){super.formatLine(...e),this.updateSelection()}formatText(...e){super.formatText(...e),this.updateSelection()}updateSelection(e){if(this.hasFocus()){e=e||s.sources.SILENT;let t=this.getSelection(!0);this.setSelection(++t.index,t.length,e),this.setSelection(--t.index,t.length,e)}}}}}]);