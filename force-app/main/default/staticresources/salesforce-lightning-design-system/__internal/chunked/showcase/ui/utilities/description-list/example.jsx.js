var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/utilities/description-list/example.jsx.js"]=function(e){function l(l){for(var a,s,i=l[0],d=l[1],o=l[2],_=0,m=[];_<i.length;_++)s=i[_],n[s]&&m.push(n[s][0]),n[s]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(c&&c(l);m.length;)m.shift()();return r.push.apply(r,o||[]),t()}function t(){for(var e,l=0;l<r.length;l++){for(var t=r[l],a=!0,i=1;i<t.length;i++){var d=t[i];0!==n[d]&&(a=!1)}a&&(r.splice(l--,1),e=s(s.s=t[0]))}return e}var a={},n={168:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},r=[];function s(l){if(a[l])return a[l].exports;var t=a[l]={i:l,l:!1,exports:{}};return e[l].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=a,s.d=function(e,l,t){s.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,l){if(1&l&&(e=s(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var a in e)s.d(t,a,function(l){return e[l]}.bind(null,a));return t},s.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(l,"a",l),l},s.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},s.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],d=i.push.bind(i);i.push=l,i=i.slice();for(var o=0;o<i.length;o++)l(i[o]);var c=d;return r.push([195,0]),t()}({0:function(e,l){e.exports=React},195:function(e,l,t){"use strict";t.r(l),t.d(l,"examples",(function(){return r}));var a=t(0),n=t.n(a),r=[{id:"description-list",label:"Default",element:n.a.createElement("dl",null,n.a.createElement("dt",null,"First Label:"),n.a.createElement("dd",null,"Description for first label"),n.a.createElement("dt",null,"Second Label:"),n.a.createElement("dd",null,"Description for second label"))},{id:"description-list-horizontal",label:"Horizontal",element:n.a.createElement("dl",{className:"slds-dl_horizontal"},n.a.createElement("dt",{className:"slds-dl_horizontal__label"},"First Label:"),n.a.createElement("dd",{className:"slds-dl_horizontal__detail"},"Description for first label"),n.a.createElement("dt",{className:"slds-dl_horizontal__label"},"Second Label:"),n.a.createElement("dd",{className:"slds-dl_horizontal__detail"},"Second description"))},{id:"horizontal-narrow",label:"Horizontal - Within narrow region",element:n.a.createElement("div",{className:"slds-region_narrow",style:{width:"360px"}},n.a.createElement("dl",{className:"slds-dl_horizontal"},n.a.createElement("dt",{className:"slds-dl_horizontal__label"},"First Label:"),n.a.createElement("dd",{className:"slds-dl_horizontal__detail"},"Description for first label"),n.a.createElement("dt",{className:"slds-dl_horizontal__label"},"Second Label:"),n.a.createElement("dd",{className:"slds-dl_horizontal__detail"},"Second description")))},{id:"description-list-inline",label:"Inline",element:n.a.createElement("dl",{className:"slds-dl_inline"},n.a.createElement("dt",{className:"slds-dl_inline__label"},"First Label:"),n.a.createElement("dd",{className:"slds-dl_inline__detail"},"Description for first label"),n.a.createElement("dt",{className:"slds-dl_inline__label"},"Second Label:"),n.a.createElement("dd",{className:"slds-dl_inline__detail"},"Description for second label"))},{id:"inline-narrow",label:"Inline - Within narrow region",element:n.a.createElement("div",{className:"slds-region_narrow",style:{width:"360px"}},n.a.createElement("dl",{className:"slds-dl_inline"},n.a.createElement("dt",{className:"slds-dl_inline__label"},"First Label:"),n.a.createElement("dd",{className:"slds-dl_inline__detail"},"Description for first label"),n.a.createElement("dt",{className:"slds-dl_inline__label"},"Second Label:"),n.a.createElement("dd",{className:"slds-dl_inline__detail"},"Second description")))}]}});