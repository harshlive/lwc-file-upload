var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/form-element/horizontal/example.jsx.js"]=function(e){function t(t){for(var a,l,i=t[0],c=t[1],d=t[2],s=0,p=[];s<i.length;s++)l=i[s],o[l]&&p.push(o[l][0]),o[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={87:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;return r.push([126,0]),n()}({0:function(e,t){e.exports=React},126:function(e,t,n){"use strict";n.r(t),n.d(t,"states",(function(){return p})),n.d(t,"examples",(function(){return h}));var a=n(0),o=n.n(a),r=n(33),l=n(35),i=n(5),c=n(8),d=n(36),u=n(29),s=n(23);t.default=o.a.createElement(r.a,{direction:"horizontal",snapshot:l.c,isViewMode:!0,hasInlineEdit:!0});var p=[{id:"edit-horizontal",label:"Horizontal form layout - Edit Mode",element:o.a.createElement(r.a,{direction:"horizontal",snapshot:l.c})}],h=[{id:"horizontal-single-column",label:"Horizontal form layout - 1 column - Read Only Mode",element:o.a.createElement(r.a,{direction:"horizontal",snapshot:l.d,isViewMode:!0})},{id:"deprecated-view-horizontal",label:"Deprecated - Horizontal form layout - View Mode",element:o.a.createElement(r.a,{direction:"horizontal",snapshot:l.a,isViewMode:!0,hasInlineEdit:!0,isDeprecated:!0})},{id:"deprecated-edit-horizontal",label:"Deprecated - Horizontal form layout - Edit Mode",element:o.a.createElement(r.a,{direction:"horizontal",snapshot:l.a,isDeprecated:!0})},{id:"simple-horizontal",label:"Simple - Horizontal form layout",element:o.a.createElement("div",{className:"slds-form"},o.a.createElement(i.b,{labelContent:"Text Input",inputId:"horizontal-input-id-01",isHorizontal:!0},o.a.createElement(c.a,{id:"horizontal-input-id-01",placeholder:"Placeholder Text"})),o.a.createElement(i.b,{labelContent:"Textarea Input",inputId:"horizontal-input-id-02",isHorizontal:!0},o.a.createElement(d.Textarea,{id:"horizontal-input-id-02",placeholder:"Placeholder Text"})),o.a.createElement(i.a,{label:"Checkbox Group label",isHorizontal:!0},o.a.createElement(s.Checkbox,{label:"All opportunities owned by you",name:"default"}),o.a.createElement(s.Checkbox,{label:"All contacts in the account owned by you",name:"default"})),o.a.createElement(i.a,{label:"Radio Group label",isHorizontal:!0},o.a.createElement(u.Radio,{label:"Lead Generation",name:"options"}),o.a.createElement(u.Radio,{label:"Education Leads",name:"options"})))}]}});