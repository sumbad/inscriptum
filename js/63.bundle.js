(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{654:function(e,t,n){"use strict";n.r(t),n.d(t,"uploadFileService",function(){return s});const r="inscriptum",o="cz5pibn5";function s(e,t){return new Promise((n,s)=>{var a=`https://api.cloudinary.com/v1_1/${r}/upload`,p=new XMLHttpRequest,u=new FormData;p.open("POST",a,!0),p.setRequestHeader("X-Requested-With","XMLHttpRequest"),p.upload.addEventListener("progress",function(e){e.lengthComputable&&t&&t(e.loaded,e.total)}),t&&t(0,1),u.append("upload_preset",o),u.append("tags","browser_upload"),u.append("file",e),p.send(u),p.onreadystatechange=(e=>{if(4==p.readyState&&200==p.status){var t=JSON.parse(p.responseText);console.log(1111,t),t.src=t.secure_url,n(t)}}),p.onerror=function(){s(new Error("Network Error"))}})}}}]);