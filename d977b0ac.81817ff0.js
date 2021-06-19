(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{236:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(265)),i={title:"app.sendCards",sidebar_label:"app.sendCards"},c={unversionedId:"developer/app/components/send-cards",id:"developer/app/components/send-cards",isDocsHomePage:!1,title:"app.sendCards",description:"Input",source:"@site/docs/developer/app/components/send-cards.md",slug:"/developer/app/components/send-cards",permalink:"/docs/developer/app/components/send-cards",version:"current",sidebar_label:"app.sendCards"},s=[{value:"Input",id:"input",children:[]},{value:"Example",id:"example",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"input"},"Input"),Object(o.b)("p",null,"Cards Object, Cards.actions with relevant parameters and option to hide input from user while cards will be shown."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'\napp.sendCards(cards: Cards,hideInput: Boolean, options: Options).then(()=>{\n  // send cards\n});\n\n// Keys Allowed for cards object\ndeclare Cards {\n    "backgroundColor",\n    "icon",\n    "subText",\n    "action",\n    "vertical",\n    "imageAsAction",\n    "imageHeight",\n    "imageWidth",\n    "image",\n    "videoOptions",\n    "video",\n    "title",\n    "text",\n    "insuranceCard",\n    "profile",\n    "slider",\n    "tableTitleWidth",\n    "tableValueWidth",\n    "floatTableLeft",\n    "table",\n    "baggageInformation",\n    "flightSeatServices",\n    "baggage",\n    "dropDown",\n    "input",\n    "form",\n    "actions": Cards.Actions,\n    "action.buttonbackgroundColor",\n    "action.textColor",\n    "action.borderColor",\n    "action.text",\n    "action.triggerJourney",\n    "action.postback",\n    "action.analytics",\n    "action.url",\n    "action.title",\n    "imageAsAction.postback",\n    "imageAsAction.analytics",\n    "imageAsAction.url",\n    "videoOptions.thumbnailImage",\n    "insuranceCard.title",\n    "insuranceCard.subtitle",\n    "insuranceCard.premium",\n    "insuranceCard.types",\n    "insuranceCard.multiSelect",\n    "profile.image",\n    "profile.header",\n    "profile.subHeader",\n    "slider.step",\n    "slider.text",\n    "slider.val",\n    "slider.min",\n    "slider.max",\n    "flightSeatServices.tripInformation",\n    "flightSeatServices.Indigo_6EInfo",\n}\n\n// Keys Allowed for cards.actions object\ndeclare Cards.Actions {\n    "grid",\n    "display",\n    "list",\n    "isMarkdown",\n    "enableFeedBack",\n    "maskBotMessage",\n    "hideInput",\n    "enableFeedBack",\n    "shouldEndSession",\n    "suggestions",\n    "ignorei18n",\n    "target_language",\n    "targetLanguage",\n    "translateAPI",\n    "refactorApiResponse",\n}\n\n')))}p.isMDXComponent=!0},265:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);