(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{3005:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/pediatrix",function(){return n(4437)}])},4683:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),o=n(214),i=n.n(o);function c(){return(0,r.jsxs)("div",{className:i().header,children:[(0,r.jsx)("h1",{children:"Gavin Camlin"}),(0,r.jsx)("h2",{children:"Engineer"}),(0,r.jsx)("h2",{children:"Game Developer"})]})}},2352:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893);function o(){var e=function(e){var t=e.color;return(0,r.jsx)("hr",{style:{color:t,backgroundColor:t,height:2,margin:0,border:0}})};return(0,r.jsx)("div",{children:(0,r.jsx)(e,{color:"#45A29E"})})}},3762:function(e,t,n){"use strict";var r=n(5893),o=n(7294),i=n(2352),c=n(214),u=n.n(c);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function f(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}var d=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,n,o,c=p(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).title=e.title,t.id=e.id,t}return t=l,(n=[{key:"render",value:function(){return(0,r.jsxs)("div",{className:u().section,children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("h3",{id:this.id,children:this.title}),(0,r.jsx)(i.Z,{})]})}}])&&a(t.prototype,n),o&&a(t,o),l}(o.Component);t.Z=h},5486:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),o=(n(7294),n(2352)),i=n(1664);function c(){return(0,r.jsxs)("nav",{children:[(0,r.jsx)(o.Z,{}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/#About",children:(0,r.jsx)("a",{children:"About"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/#Contact",children:(0,r.jsx)("a",{children:"Contact"})})})]}),(0,r.jsx)(o.Z,{})]})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,c=(i=n(7294))&&i.__esModule?i:{default:i},u=n(6273),a=n(387),l=n(7190);var f={};function s(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=a.useRouter(),i=c.default.useMemo((function(){var t=o(u.resolveHref(r,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?u.resolveHref(r,e.as):i||n}}),[r,e.href,e.as]),d=i.href,p=i.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,_=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var b=(t=c.default.Children.only(h))&&"object"===typeof t&&t.ref,j=o(l.useIntersection({rootMargin:"200px"}),2),g=j[0],x=j[1],w=c.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);c.default.useEffect((function(){var e=x&&n&&u.isLocalURL(d),t="undefined"!==typeof _?_:r&&r.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(r,d,p,{locale:t})}),[p,d,x,_,n,r]);var E={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:a,scroll:c}))}(e,r,d,p,v,y,m,_)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof _?_:r&&r.locale,O=r&&r.isLocaleDomain&&u.getDomainLocale(p,C,r&&r.locales,r&&r.domainLocales);E.href=O||u.addBasePath(u.addLocale(p,C,r&&r.defaultLocale))}return c.default.cloneElement(t,E)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,f=i.useRef(),s=o(i.useState(!1),2),d=s[0],p=s[1],h=o(i.useState(t?t.current:null),2),v=h[0],y=h[1],m=i.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||d||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=a.get(r):(t=a.get(n),l.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,c=r.elements;return c.set(e,t),i.observe(e),function(){if(c.delete(e),i.unobserve(e),0===c.size){i.disconnect(),a.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:n}))}),[r,v,n,d]);return i.useEffect((function(){if(!u&&!d){var e=c.requestIdleCallback((function(){return p(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&y(t.current)}),[t]),[m,d]};var i=n(7294),c=n(9311),u="undefined"!==typeof IntersectionObserver;var a=new Map,l=[]},4437:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),o=n(9008),i=(n(5675),n(214)),c=n.n(i),u=n(4683),a=n(5486),l=n(3762);function f(){return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Gavin Camlin"}),(0,r.jsx)("meta",{name:"description",content:"My portfolio"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(l.Z,{title:"Unity/Vivox"})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",header:"Home_header__GCVRv",section:"Home_section__taYTg",experience:"Home_experience__Q7ZEC",buttonHolder:"Home_buttonHolder__T3lug",buttonImage:"Home_buttonImage__Z38yO"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[675,774,888,179],(function(){return t=3005,e(e.s=t);var t}));var t=e.O();_N_E=t}]);