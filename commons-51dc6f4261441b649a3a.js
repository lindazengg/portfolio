(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"4jcX":function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAiUlEQVRIieXQOw6AIBAE0Gnwah6LRsVbcRYL8AgWfktj4sIuoRCZ6V8mA1QShR4eJ1HNhzoSEVITSVgsEmoNbGklVAiChNoi77CpGMSm4hCT4kAsigfdVAJkoR+1qdB7yex1QFQKhY5cH30byvbRNyDZQ0VBTsQ4GhpFkKGhBgYzC/EYoGjoV7kAluo0u/0EOAQAAAAASUVORK5CYII="},"6uWv":function(A,e,t){"use strict";t("q1tI"),t("Wbzz"),t("XjQp"),t("AeFk")},"8+s/":function(A,e,t){"use strict";var n,r=t("q1tI"),a=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);A.exports=function(A,e,t){if("function"!=typeof A)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=A(s.map((function(A){return A.props}))),l.canUseDOM?e(c):t&&(c=t(c))}var l=function(A){var e,t;function r(){return A.apply(this,arguments)||this}t=A,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,r.peek=function(){return c},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var A=c;return c=void 0,s=[],A};var i=r.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var A=s.indexOf(this);s.splice(A,1),u()},i.render=function(){return a.createElement(n,this.props)},r}(r.PureComponent);return i(l,"displayName","SideEffect("+function(A){return A.displayName||A.name||"Component"}(n)+")"),i(l,"canUseDOM",o),l}}},Bl7J:function(A,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("LbRr"),i=(t("6uWv"),t("Wbzz"),t("qhky"),t("XjQp"),t("b57b")),o=t.n(i),c=t("4jcX"),s=t.n(c),u=t("zOWB"),l=t.n(u),f=t("AeFk");e.a=function(A){var e=A.children,t=A.val;return Object(f.a)(r.a.Fragment,null,Object(f.a)("div",{className:"row",style:{maxWidth:"100vw"}},Object(f.a)("div",{className:"col-xl-2",id:"header",style:{top:"0",position:"sticky",display:"block",overflowWrap:"anywhere",height:"fit-content",paddingLeft:"3vw",paddingRight:"3vw"}},Object(f.a)(a.a,{val:t})),Object(f.a)("div",{className:"col"},e),Object(f.a)("div",{className:"col-xl-2"},Object(f.a)("div",{style:{textAlign:"center",paddingRight:"2vh",paddingTop:"9vh",paddingBottom:"6vh",top:"0",position:"sticky"}},Object(f.a)("div",{style:{display:"inline-block",textAlign:"left"}},Object(f.a)("div",{className:"row"},Object(f.a)("a",{className:"iconlinks",href:""},Object(f.a)("img",{src:o.a,alt:"Email icon"}),Object(f.a)("span",{className:"iconlinktext"}," EMAIL "))),Object(f.a)("div",{className:"row"},Object(f.a)("a",{className:"iconlinks",href:""},Object(f.a)("img",{src:s.a,alt:"Resume icon"}),Object(f.a)("span",{className:"iconlinktext"}," RESUME "))),Object(f.a)("div",{className:"row"},Object(f.a)("a",{className:"iconlinks",href:""},Object(f.a)("img",{src:l.a,alt:"Linkedin icon"}),Object(f.a)("span",{className:"iconlinktext"}," LINKEDIN "))))))))}},LbRr:function(A,e,t){"use strict";var n=t("Wbzz"),r=(t("q1tI"),t("XjQp"),t("X+5V")),a=t.n(r),i=t("vtJi"),o=t.n(i),c=t("AeFk"),s=function(A){var e=A.val;return Object(c.a)("nav",{className:"navbar navbar-expand-xl",id:"header"},Object(c.a)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},Object(c.a)("img",{src:o.a,alt:"menu"})),Object(c.a)("div",{className:"collapse navbar-collapse",id:"navbarNav"},Object(c.a)("div",{className:"flex-column"},Object(c.a)("span",{style:{paddingleft:"3vh",zIndex:"3",paddingBottom:"5vh",paddingTop:"9vh",display:"block",fontSize:"22px",fontWeight:"500",lineHeight:"21px",letterSpacing:"0.325em",fontFamily:"Walter Turncoat"}},Object(c.a)(n.a,{to:"/",className:"headerName"},"LINDA ZENG")),Object(c.a)("img",{src:a.a,alt:"linda zeng",style:{maxWidth:"15vh",paddingBottom:"40px"}}),Object(c.a)("br",null),0===e?Object(c.a)("div",{className:"row",id:"navlink_active"},Object(c.a)(n.a,{className:"navlink_active",to:"/"},"HOME")):Object(c.a)("div",{className:"row",id:"navlink"},Object(c.a)(n.a,{to:"/",className:"navlink"},"HOME")),1===e?Object(c.a)("div",{className:"row",id:"navlink_active"},Object(c.a)(n.a,{className:"navlink_active",to:"/uiux_design"},"DESIGN")):Object(c.a)("div",{className:"row",id:"navlink"},Object(c.a)(n.a,{to:"/uiux_design",className:"navlink"},"DESIGN")),2===e?Object(c.a)("div",{className:"row",id:"navlink_active"},Object(c.a)(n.a,{className:"navlink_active",to:"/painting"},"ART")):Object(c.a)("div",{className:"row",id:"navlink"},Object(c.a)(n.a,{to:"/painting",className:"navlink"},"ART")),3===e?Object(c.a)("div",{className:"row",id:"navlink_active"},Object(c.a)(n.a,{className:"navlink_active",to:"/photos"},"PHOTOS")):Object(c.a)("div",{className:"row",id:"navlink"},Object(c.a)(n.a,{to:"/photos",className:"navlink"},"PHOTOS")))))};s.defaultProps={siteTitle:""},e.a=s},"X+5V":function(A,e){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsICAoIBwsKCQoNDAsNERwSEQ8PESIZGhQcKSQrKigkJyctMkA3LTA9MCcnOEw5PUNFSElIKzZPVU5GVEBHSEX/2wBDAQwNDREPESESEiFFLicuRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wgARCAHCAcIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAABrimMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QAFBABAAAAAAAAAAAAAAAAAAAAsP/aAAgBAQABBQJLH//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQMBAT8BUn//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAECAQE/AVJ//8QAFBABAAAAAAAAAAAAAAAAAAAAsP/aAAgBAQAGPwJLH//EABQQAQAAAAAAAAAAAAAAAAAAALD/2gAIAQEAAT8hSx//2gAMAwEAAgADAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/EFJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPxBSf//EABQQAQAAAAAAAAAAAAAAAAAAALD/2gAIAQEAAT8QSx//2Q=="},XjQp:function(A,e,t){},b57b:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAyklEQVRIx+3VQQ5EMBTG8X8ilo7gFA7iKC4xw9JRXMQlNOEAtmOmsxgyKq+mFYuR9HWDNL8+HwpCXbdi7gxozzFQEpvQzRtZRmVC3WGoN6EHGk2OcgYU+XwkQJBQM/1EJmoSkKBpdSmj3WVasnmmFWpIAYgoGEVkpCACIKWxQ/LE75AXEiGz9XX4itxy60Y9xTCX8Lfn2hXadiB16AytM7Fl5gwt4dufojP0CX//vTLqdfhbC5A3pP8O6s/aaquzNv+Y8pzfUagr1RsOFnzoZk0W3AAAAABJRU5ErkJggg=="},bmMU:function(A,e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;A.exports=function(A,e){try{return function A(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var o,c,s,u;if(Array.isArray(e)){if((o=e.length)!=i.length)return!1;for(c=o;0!=c--;)if(!A(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!A(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((o=e.length)!=i.length)return!1;for(c=o;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((o=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=o;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=o;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!A(e[s[c]],i[s[c]]))return!1;return!0}return e!=e&&i!=i}(A,e)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(A,e,t){"use strict";(function(A){t("E9XD");var e,n,r,a,i=t("17x9"),o=t.n(i),c=t("8+s/"),s=t.n(c),u=t("bmMU"),l=t.n(u),f=t("q1tI"),p=t.n(f),d=t("YVoz"),m=t.n(d),b="bodyAttributes",h="htmlAttributes",y="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(g).map((function(A){return g[A]})),"charset"),T="cssText",O="href",w="http-equiv",E="innerHTML",C="itemprop",j="name",S="property",k="rel",N="src",B="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Q="defaultTitle",R="defer",I="encodeSpecialCharacters",P="onChangeClientState",L="titleTemplate",M=Object.keys(x).reduce((function(A,e){return A[x[e]]=e,A}),{}),U=[g.NOSCRIPT,g.SCRIPT,g.STYLE],V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},F=function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")},D=function(){function A(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),e}}(),H=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},z=function(A,e){var t={};for(var n in A)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(A,n)&&(t[n]=A[n]);return t},G=function(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e},W=function(A){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(A):String(A).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(A){var e=_(A,g.TITLE),t=_(A,L);if(t&&e)return t.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=_(A,Q);return e||n||void 0},q=function(A){return _(A,P)||function(){}},J=function(A,e){return e.filter((function(e){return void 0!==e[A]})).map((function(e){return e[A]})).reduce((function(A,e){return H({},A,e)}),{})},X=function(A,e){return e.filter((function(A){return void 0!==A[g.BASE]})).map((function(A){return A[g.BASE]})).reverse().reduce((function(e,t){if(!e.length)for(var n=Object.keys(t),r=0;r<n.length;r++){var a=n[r].toLowerCase();if(-1!==A.indexOf(a)&&t[a])return e.concat(t)}return e}),[])},K=function(A,e,t){var n={};return t.filter((function(e){return!!Array.isArray(e[A])||(void 0!==e[A]&&tA("Helmet: "+A+' should be of type "Array". Instead found type "'+V(e[A])+'"'),!1)})).map((function(e){return e[A]})).reverse().reduce((function(A,t){var r={};t.filter((function(A){for(var t=void 0,a=Object.keys(A),i=0;i<a.length;i++){var o=a[i],c=o.toLowerCase();-1===e.indexOf(c)||t===k&&"canonical"===A[t].toLowerCase()||c===k&&"stylesheet"===A[c].toLowerCase()||(t=c),-1===e.indexOf(o)||o!==E&&o!==T&&o!==C||(t=o)}if(!t||!A[t])return!1;var s=A[t].toLowerCase();return n[t]||(n[t]={}),r[t]||(r[t]={}),!n[t][s]&&(r[t][s]=!0,!0)})).reverse().forEach((function(e){return A.push(e)}));for(var a=Object.keys(r),i=0;i<a.length;i++){var o=a[i],c=m()({},n[o],r[o]);n[o]=c}return A}),[]).reverse()},_=function(A,e){for(var t=A.length-1;t>=0;t--){var n=A[t];if(n.hasOwnProperty(e))return n[e]}return null},Z=(e=Date.now(),function(A){var t=Date.now();t-e>16?(e=t,A(t)):setTimeout((function(){Z(A)}),0)}),$=function(A){return clearTimeout(A)},AA="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:A.requestAnimationFrame||Z,eA="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||$:A.cancelAnimationFrame||$,tA=function(A){return console&&"function"==typeof console.warn&&console.warn(A)},nA=null,rA=function(A,e){var t=A.baseTag,n=A.bodyAttributes,r=A.htmlAttributes,a=A.linkTags,i=A.metaTags,o=A.noscriptTags,c=A.onChangeClientState,s=A.scriptTags,u=A.styleTags,l=A.title,f=A.titleAttributes;oA(g.BODY,n),oA(g.HTML,r),iA(l,f);var p={baseTag:cA(g.BASE,t),linkTags:cA(g.LINK,a),metaTags:cA(g.META,i),noscriptTags:cA(g.NOSCRIPT,o),scriptTags:cA(g.SCRIPT,s),styleTags:cA(g.STYLE,u)},d={},m={};Object.keys(p).forEach((function(A){var e=p[A],t=e.newTags,n=e.oldTags;t.length&&(d[A]=t),n.length&&(m[A]=p[A].oldTags)})),e&&e(),c(A,d,m)},aA=function(A){return Array.isArray(A)?A.join(""):A},iA=function(A,e){void 0!==A&&document.title!==A&&(document.title=aA(A)),oA(g.TITLE,e)},oA=function(A,e){var t=document.getElementsByTagName(A)[0];if(t){for(var n=t.getAttribute("data-react-helmet"),r=n?n.split(","):[],a=[].concat(r),i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=e[c]||"";t.getAttribute(c)!==s&&t.setAttribute(c,s),-1===r.indexOf(c)&&r.push(c);var u=a.indexOf(c);-1!==u&&a.splice(u,1)}for(var l=a.length-1;l>=0;l--)t.removeAttribute(a[l]);r.length===a.length?t.removeAttribute("data-react-helmet"):t.getAttribute("data-react-helmet")!==i.join(",")&&t.setAttribute("data-react-helmet",i.join(","))}},cA=function(A,e){var t=document.head||document.querySelector(g.HEAD),n=t.querySelectorAll(A+"[data-react-helmet]"),r=Array.prototype.slice.call(n),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var t=document.createElement(A);for(var n in e)if(e.hasOwnProperty(n))if(n===E)t.innerHTML=e.innerHTML;else if(n===T)t.styleSheet?t.styleSheet.cssText=e.cssText:t.appendChild(document.createTextNode(e.cssText));else{var o=void 0===e[n]?"":e[n];t.setAttribute(n,o)}t.setAttribute("data-react-helmet","true"),r.some((function(A,e){return i=e,t.isEqualNode(A)}))?r.splice(i,1):a.push(t)})),r.forEach((function(A){return A.parentNode.removeChild(A)})),a.forEach((function(A){return t.appendChild(A)})),{oldTags:r,newTags:a}},sA=function(A){return Object.keys(A).reduce((function(e,t){var n=void 0!==A[t]?t+'="'+A[t]+'"':""+t;return e?e+" "+n:n}),"")},uA=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(A).reduce((function(e,t){return e[x[t]||t]=A[t],e}),e)},lA=function(A,e,t){switch(A){case g.TITLE:return{toComponent:function(){return A=e.title,t=e.titleAttributes,(n={key:A})["data-react-helmet"]=!0,r=uA(t,n),[p.a.createElement(g.TITLE,r,A)];var A,t,n,r},toString:function(){return function(A,e,t,n){var r=sA(t),a=aA(e);return r?"<"+A+' data-react-helmet="true" '+r+">"+W(a,n)+"</"+A+">":"<"+A+' data-react-helmet="true">'+W(a,n)+"</"+A+">"}(A,e.title,e.titleAttributes,t)}};case b:case h:return{toComponent:function(){return uA(e)},toString:function(){return sA(e)}};default:return{toComponent:function(){return function(A,e){return e.map((function(e,t){var n,r=((n={key:t})["data-react-helmet"]=!0,n);return Object.keys(e).forEach((function(A){var t=x[A]||A;if(t===E||t===T){var n=e.innerHTML||e.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[t]=e[A]})),p.a.createElement(A,r)}))}(A,e)},toString:function(){return function(A,e,t){return e.reduce((function(e,n){var r=Object.keys(n).filter((function(A){return!(A===E||A===T)})).reduce((function(A,e){var r=void 0===n[e]?e:e+'="'+W(n[e],t)+'"';return A?A+" "+r:r}),""),a=n.innerHTML||n.cssText||"",i=-1===U.indexOf(A);return e+"<"+A+' data-react-helmet="true" '+r+(i?"/>":">"+a+"</"+A+">")}),"")}(A,e,t)}}}},fA=function(A){var e=A.baseTag,t=A.bodyAttributes,n=A.encode,r=A.htmlAttributes,a=A.linkTags,i=A.metaTags,o=A.noscriptTags,c=A.scriptTags,s=A.styleTags,u=A.title,l=void 0===u?"":u,f=A.titleAttributes;return{base:lA(g.BASE,e,n),bodyAttributes:lA(b,t,n),htmlAttributes:lA(h,r,n),link:lA(g.LINK,a,n),meta:lA(g.META,i,n),noscript:lA(g.NOSCRIPT,o,n),script:lA(g.SCRIPT,c,n),style:lA(g.STYLE,s,n),title:lA(g.TITLE,{title:l,titleAttributes:f},n)}},pA=s()((function(A){return{baseTag:X([O,B],A),bodyAttributes:J(b,A),defer:_(A,R),encode:_(A,I),htmlAttributes:J(h,A),linkTags:K(g.LINK,[k,O],A),metaTags:K(g.META,[j,v,w,S,C],A),noscriptTags:K(g.NOSCRIPT,[E],A),onChangeClientState:q(A),scriptTags:K(g.SCRIPT,[N,E],A),styleTags:K(g.STYLE,[T],A),title:Y(A),titleAttributes:J(y,A)}}),(function(A){nA&&eA(nA),A.defer?nA=AA((function(){rA(A,(function(){nA=null}))})):(rA(A),nA=null)}),fA)((function(){return null})),dA=(n=pA,a=r=function(A){function e(){return F(this,e),G(this,A.apply(this,arguments))}return function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(e,A),e.prototype.shouldComponentUpdate=function(A){return!l()(this.props,A)},e.prototype.mapNestedChildrenToProps=function(A,e){if(!e)return null;switch(A.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:e};case g.STYLE:return{cssText:e}}throw new Error("<"+A.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(A){var e,t=A.child,n=A.arrayTypeChildren,r=A.newChildProps,a=A.nestedChildren;return H({},n,((e={})[t.type]=[].concat(n[t.type]||[],[H({},r,this.mapNestedChildrenToProps(t,a))]),e))},e.prototype.mapObjectTypeChildren=function(A){var e,t,n=A.child,r=A.newProps,a=A.newChildProps,i=A.nestedChildren;switch(n.type){case g.TITLE:return H({},r,((e={})[n.type]=i,e.titleAttributes=H({},a),e));case g.BODY:return H({},r,{bodyAttributes:H({},a)});case g.HTML:return H({},r,{htmlAttributes:H({},a)})}return H({},r,((t={})[n.type]=H({},a),t))},e.prototype.mapArrayTypeChildrenToProps=function(A,e){var t=H({},e);return Object.keys(A).forEach((function(e){var n;t=H({},t,((n={})[e]=A[e],n))})),t},e.prototype.warnOnInvalidChildren=function(A,e){return!0},e.prototype.mapChildrenToProps=function(A,e){var t=this,n={};return p.a.Children.forEach(A,(function(A){if(A&&A.props){var r=A.props,a=r.children,i=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(A).reduce((function(e,t){return e[M[t]||t]=A[t],e}),e)}(z(r,["children"]));switch(t.warnOnInvalidChildren(A,a),A.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=t.flattenArrayTypeChildren({child:A,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:e=t.mapObjectTypeChildren({child:A,newProps:e,newChildProps:i,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var A=this.props,e=A.children,t=z(A,["children"]),r=H({},t);return e&&(r=this.mapChildrenToProps(e,r)),p.a.createElement(n,r)},D(e,null,[{key:"canUseDOM",set:function(A){n.canUseDOM=A}}]),e}(p.a.Component),r.propTypes={base:o.a.object,bodyAttributes:o.a.object,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),defaultTitle:o.a.string,defer:o.a.bool,encodeSpecialCharacters:o.a.bool,htmlAttributes:o.a.object,link:o.a.arrayOf(o.a.object),meta:o.a.arrayOf(o.a.object),noscript:o.a.arrayOf(o.a.object),onChangeClientState:o.a.func,script:o.a.arrayOf(o.a.object),style:o.a.arrayOf(o.a.object),title:o.a.string,titleAttributes:o.a.object,titleTemplate:o.a.string},r.defaultProps={defer:!0,encodeSpecialCharacters:!0},r.peek=n.peek,r.rewind=function(){var A=n.rewind();return A||(A=fA({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),A},a);dA.renderStatic=dA.rewind}).call(this,t("yLpj"))},vtJi:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAMUlEQVRIx2NgGAWjYFCCeob/ZMD6oWDQKCAMHBjqyYAOQyH6qea1UTBajIyCUTCwAACXXfHt8glkJQAAAABJRU5ErkJggg=="},zOWB:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAzklEQVRIx2NgGAWjgDZAmmEpwzMgXMYggyIuAxTBJo7TmDcM/6HwLZIWGSAPmzhOsBSuHASXwcWX4RDHCZ6iaHhKUJz2BuHy2lJSvYYrsHGJkxH9uMSHDNBiCGcoZOhmmMpQxxDJoIQiZ8YwAas4GrBkmMPwCiVuQPAWw0SgDAQwMSzAKo4ElBj2YRiBDPdB3cDBcBWrOBToMnzEawwIfgSqAoEEHOJgcIigMSB4CKxWDoc4GPwiyqBf0HDCLg4G/4mEuFRT36BRMAqGGwAAousdjxZhm7QAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=commons-51dc6f4261441b649a3a.js.map