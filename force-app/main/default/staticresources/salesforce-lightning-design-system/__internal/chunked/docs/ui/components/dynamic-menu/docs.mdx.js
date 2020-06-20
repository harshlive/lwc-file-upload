var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/dynamic-menu/docs.mdx.js"]=function(e){function t(t){for(var o,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],a[i]&&d.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(h&&h(t);d.length;)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={33:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var h=s;return r.push([128,0]),n()}({0:function(e,t){e.exports=React},128:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",(function(){return m})),n.d(t,"getContents",(function(){return f}));var o=n(0),a=n(3),r=n(1),i=(n(23),n(15),n(2)),c=n(70),s=a.c.a,u=a.c.code,h=a.c.h1,l=a.c.h2,d=a.c.h3,p=a.c.p,m=function(){return Object(o.createElement)(a.b,{},Object(o.createElement)("div",{className:"lead doc"},"The Dynamic Menu can be used to give a user a variable number of actions to take. When that list of actions is long, a search mechanism is provided."),Object(o.createElement)(r.a,{exampleOnly:!0},c.c),h({id:"About-Dynamic-Menu"},"About Dynamic Menu"),p({},"The Dynamic Menu is a modified concept of the ",s({href:"/components/menus/"},"Menu component"),", used when the number of actions available to the user is dynamic or variable. It can also be useful when","the number of actions in the menu is large enough that a search functionality would be required."),p({},"The component is composed of a ",s({href:"/components/popovers"},"Popover"),", coupled with either a ",u({},"listbox")," of options or an always expanded ",s({href:"/components/combobox"},"Autocomplete Combobox")," and a list of additional actions pinned to the bottom of the dialog. The Popover and pinned actions are constant through the 3 different states the Dynamic Menu can take."),p({},"When there are no actions other than the pinned actions, static content is displayed in the body of the Popover informing the user of the empty state. When there are 10 or less options in the menu a ",u({},"listbox")," is used to display them in the body of the Popover. When there are more than 10 options an Autocomplete Combobox is used to display some options and allow searching through the rest of available options that may not be displayed."),p({},"Both the ",u({},"listbox")," and Combobox versions come with ",u({},"Up")," and ",u({},"Down")," arrow key navigation through the list. The ",u({},"listbox")," variant should only have a single focusable option. The Combobox variant should follow the expected keyboard behavior listed on the ",s({href:"/components/combobox"},"Combobox Component")," page."),h({id:"Base"},"Base"),Object(o.createElement)(r.a,null,c.c),l({id:"States"},"States"),d({id:"With-1-item"},"With 1 item"),Object(o.createElement)(r.a,null,Object(i.e)(c.d,"dynamic-menu-1-item")),d({id:"With-fewer-than-10-items"},"With fewer than 10 items"),Object(o.createElement)(r.a,null,Object(i.e)(c.d,"dynamic-menu-sub-10-item")),d({id:"With-greater-than-10-items"},"With greater than 10 items"),Object(o.createElement)(r.a,null,Object(i.e)(c.d,"dynamic-menu-over-10-item")))},f=function(){return Object(a.a)(m())}},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM}});