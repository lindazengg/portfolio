(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6uWv":function(A,e,t){"use strict";t("q1tI"),t("Wbzz"),t("XjQp")},"8+s/":function(A,e,t){"use strict";var n,r=t("q1tI"),a=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);A.exports=function(A,e,t){if("function"!=typeof A)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=A(l.map((function(A){return A.props}))),u.canUseDOM?e(c):t&&(c=t(c))}var u=function(A){var e,t;function r(){return A.apply(this,arguments)||this}t=A,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,r.peek=function(){return c},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var A=c;return c=void 0,l=[],A};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var A=l.indexOf(this);l.splice(A,1),s()},o.render=function(){return a.createElement(n,this.props)},r}(r.PureComponent);return o(u,"displayName","SideEffect("+function(A){return A.displayName||A.name||"Component"}(n)+")"),o(u,"canUseDOM",i),u}}},Bl7J:function(A,e,t){"use strict";var n=t("q1tI"),r=t.n(n),a=t("LbRr"),o=(t("6uWv"),t("Wbzz"),t("qhky"));t("XjQp");e.a=function(A){var e=A.children,t=A.val;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-2",id:"header",style:{top:"0",position:"sticky",display:"block",overflowWrap:"anywhere",height:"fit-content",paddingTop:"3vh",paddingLeft:"3vw",paddingRight:"3vw"}},r.a.createElement(a.a,{val:t})),r.a.createElement("div",{className:"col"},e),r.a.createElement("div",{className:"col-xl-1"},"contact icon",r.a.createElement("br",null),"email icon",r.a.createElement("br",null),"linkedin icon")),r.a.createElement(o.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Cantarell:wght@700&family=Hammersmith+One&family=Maven+Pro:wght@400;900&family=Miriam+Libre:wght@400&family=Poppins:wght@200&display=swap",rel:"stylesheet"})))}},LbRr:function(A,e,t){"use strict";var n=t("Wbzz"),r=t("q1tI"),a=t.n(r),o=(t("XjQp"),t("X+5V")),i=t.n(o),c=t("vtJi"),l=t.n(c),s=function(A){var e=A.val;return a.a.createElement("nav",{className:"navbar navbar-expand-xl",id:"header"},a.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("img",{src:l.a,alt:"menu"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},a.a.createElement("div",{className:"flex-column"},a.a.createElement("span",{style:{left:"3vh",zIndex:"3",paddingBottom:"5vh",paddingTop:"4vh",display:"block",fontSize:"18px",fontWeight:"500",lineHeight:"21px",letterSpacing:"0.325em"}},a.a.createElement(n.a,{to:"/",className:"headerName"},"LINDA ZENG")),a.a.createElement("img",{src:i.a,alt:"linda zeng",style:{maxWidth:"15vh",paddingBottom:"40px"}}),a.a.createElement("br",null),a.a.createElement("span",{style:{fontSize:"18px",fontWeight:"500",lineHeight:"21px",letterSpacing:"0.065em"}},0===e?a.a.createElement(n.a,{className:"navlink_active",to:"/"},"HOME"):a.a.createElement(n.a,{to:"/",className:"navlink"},"HOME"),a.a.createElement("br",null),1===e?a.a.createElement(n.a,{className:"navlink_active",to:"/uiux_design"},"DESIGN"):a.a.createElement(n.a,{to:"/uiux_design",className:"navlink"},"DESIGN"),a.a.createElement("br",null),2===e?a.a.createElement(n.a,{className:"navlink_active",to:"/painting"},"ART"):a.a.createElement(n.a,{to:"/painting",className:"navlink"},"ART"),a.a.createElement("br",null),3===e?a.a.createElement(n.a,{className:"navlink_active",to:"/photos"},"PHOTOS"):a.a.createElement(n.a,{to:"/photos",className:"navlink"},"PHOTOS"),"     "))))};s.defaultProps={siteTitle:""},e.a=s},"X+5V":function(A,e){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsICAoIBwsKCQoNDAsNERwSEQ8PESIZGhQcKSQrKigkJyctMkA3LTA9MCcnOEw5PUNFSElIKzZPVU5GVEBHSEX/2wBDAQwNDREPESESEiFFLicuRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wgARCAHCAcIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAABrimMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QAFBABAAAAAAAAAAAAAAAAAAAAsP/aAAgBAQABBQJLH//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQMBAT8BUn//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAECAQE/AVJ//8QAFBABAAAAAAAAAAAAAAAAAAAAsP/aAAgBAQAGPwJLH//EABQQAQAAAAAAAAAAAAAAAAAAALD/2gAIAQEAAT8hSx//2gAMAwEAAgADAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/EFJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPxBSf//EABQQAQAAAAAAAAAAAAAAAAAAALD/2gAIAQEAAT8QSx//2Q=="},XjQp:function(A,e,t){},bmMU:function(A,e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;A.exports=function(A,e){try{return function A(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var i,c,l,s;if(Array.isArray(e)){if((i=e.length)!=o.length)return!1;for(c=i;0!=c--;)if(!A(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!A(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((i=e.length)!=o.length)return!1;for(c=i;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((i=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=i;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=i;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!A(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}(A,e)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},qhky:function(A,e,t){"use strict";(function(A){t.d(e,"a",(function(){return mA}));t("E9XD");var n,r,a,o,i=t("17x9"),c=t.n(i),l=t("8+s/"),s=t.n(l),u=t("bmMU"),f=t.n(u),p=t("q1tI"),d=t.n(p),m=t("YVoz"),h=t.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(A){return v[A]})),"charset"),T="cssText",w="href",C="http-equiv",S="innerHTML",O="itemprop",k="name",x="property",P="rel",j="src",N="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",R="defer",Q="encodeSpecialCharacters",L="onChangeClientState",M="titleTemplate",U=Object.keys(I).reduce((function(A,e){return A[I[e]]=e,A}),{}),F=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},V=function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")},H=function(){function A(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),e}}(),q=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},_=function(A,e){var t={};for(var n in A)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(A,n)&&(t[n]=A[n]);return t},z=function(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e},J=function(A){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(A):String(A).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(A){var e=Z(A,v.TITLE),t=Z(A,M);if(t&&e)return t.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=Z(A,B);return e||n||void 0},X=function(A){return Z(A,L)||function(){}},Y=function(A,e){return e.filter((function(e){return void 0!==e[A]})).map((function(e){return e[A]})).reduce((function(A,e){return q({},A,e)}),{})},K=function(A,e){return e.filter((function(A){return void 0!==A[v.BASE]})).map((function(A){return A[v.BASE]})).reverse().reduce((function(e,t){if(!e.length)for(var n=Object.keys(t),r=0;r<n.length;r++){var a=n[r].toLowerCase();if(-1!==A.indexOf(a)&&t[a])return e.concat(t)}return e}),[])},G=function(A,e,t){var n={};return t.filter((function(e){return!!Array.isArray(e[A])||(void 0!==e[A]&&nA("Helmet: "+A+' should be of type "Array". Instead found type "'+D(e[A])+'"'),!1)})).map((function(e){return e[A]})).reverse().reduce((function(A,t){var r={};t.filter((function(A){for(var t=void 0,a=Object.keys(A),o=0;o<a.length;o++){var i=a[o],c=i.toLowerCase();-1===e.indexOf(c)||t===P&&"canonical"===A[t].toLowerCase()||c===P&&"stylesheet"===A[c].toLowerCase()||(t=c),-1===e.indexOf(i)||i!==S&&i!==T&&i!==O||(t=i)}if(!t||!A[t])return!1;var l=A[t].toLowerCase();return n[t]||(n[t]={}),r[t]||(r[t]={}),!n[t][l]&&(r[t][l]=!0,!0)})).reverse().forEach((function(e){return A.push(e)}));for(var a=Object.keys(r),o=0;o<a.length;o++){var i=a[o],c=h()({},n[i],r[i]);n[i]=c}return A}),[]).reverse()},Z=function(A,e){for(var t=A.length-1;t>=0;t--){var n=A[t];if(n.hasOwnProperty(e))return n[e]}return null},$=(n=Date.now(),function(A){var e=Date.now();e-n>16?(n=e,A(e)):setTimeout((function(){$(A)}),0)}),AA=function(A){return clearTimeout(A)},eA="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:A.requestAnimationFrame||$,tA="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||AA:A.cancelAnimationFrame||AA,nA=function(A){return console&&"function"==typeof console.warn&&console.warn(A)},rA=null,aA=function(A,e){var t=A.baseTag,n=A.bodyAttributes,r=A.htmlAttributes,a=A.linkTags,o=A.metaTags,i=A.noscriptTags,c=A.onChangeClientState,l=A.scriptTags,s=A.styleTags,u=A.title,f=A.titleAttributes;cA(v.BODY,n),cA(v.HTML,r),iA(u,f);var p={baseTag:lA(v.BASE,t),linkTags:lA(v.LINK,a),metaTags:lA(v.META,o),noscriptTags:lA(v.NOSCRIPT,i),scriptTags:lA(v.SCRIPT,l),styleTags:lA(v.STYLE,s)},d={},m={};Object.keys(p).forEach((function(A){var e=p[A],t=e.newTags,n=e.oldTags;t.length&&(d[A]=t),n.length&&(m[A]=p[A].oldTags)})),e&&e(),c(A,d,m)},oA=function(A){return Array.isArray(A)?A.join(""):A},iA=function(A,e){void 0!==A&&document.title!==A&&(document.title=oA(A)),cA(v.TITLE,e)},cA=function(A,e){var t=document.getElementsByTagName(A)[0];if(t){for(var n=t.getAttribute("data-react-helmet"),r=n?n.split(","):[],a=[].concat(r),o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=e[c]||"";t.getAttribute(c)!==l&&t.setAttribute(c,l),-1===r.indexOf(c)&&r.push(c);var s=a.indexOf(c);-1!==s&&a.splice(s,1)}for(var u=a.length-1;u>=0;u--)t.removeAttribute(a[u]);r.length===a.length?t.removeAttribute("data-react-helmet"):t.getAttribute("data-react-helmet")!==o.join(",")&&t.setAttribute("data-react-helmet",o.join(","))}},lA=function(A,e){var t=document.head||document.querySelector(v.HEAD),n=t.querySelectorAll(A+"[data-react-helmet]"),r=Array.prototype.slice.call(n),a=[],o=void 0;return e&&e.length&&e.forEach((function(e){var t=document.createElement(A);for(var n in e)if(e.hasOwnProperty(n))if(n===S)t.innerHTML=e.innerHTML;else if(n===T)t.styleSheet?t.styleSheet.cssText=e.cssText:t.appendChild(document.createTextNode(e.cssText));else{var i=void 0===e[n]?"":e[n];t.setAttribute(n,i)}t.setAttribute("data-react-helmet","true"),r.some((function(A,e){return o=e,t.isEqualNode(A)}))?r.splice(o,1):a.push(t)})),r.forEach((function(A){return A.parentNode.removeChild(A)})),a.forEach((function(A){return t.appendChild(A)})),{oldTags:r,newTags:a}},sA=function(A){return Object.keys(A).reduce((function(e,t){var n=void 0!==A[t]?t+'="'+A[t]+'"':""+t;return e?e+" "+n:n}),"")},uA=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(A).reduce((function(e,t){return e[I[t]||t]=A[t],e}),e)},fA=function(A,e,t){switch(A){case v.TITLE:return{toComponent:function(){return A=e.title,t=e.titleAttributes,(n={key:A})["data-react-helmet"]=!0,r=uA(t,n),[d.a.createElement(v.TITLE,r,A)];var A,t,n,r},toString:function(){return function(A,e,t,n){var r=sA(t),a=oA(e);return r?"<"+A+' data-react-helmet="true" '+r+">"+J(a,n)+"</"+A+">":"<"+A+' data-react-helmet="true">'+J(a,n)+"</"+A+">"}(A,e.title,e.titleAttributes,t)}};case y:case b:return{toComponent:function(){return uA(e)},toString:function(){return sA(e)}};default:return{toComponent:function(){return function(A,e){return e.map((function(e,t){var n,r=((n={key:t})["data-react-helmet"]=!0,n);return Object.keys(e).forEach((function(A){var t=I[A]||A;if(t===S||t===T){var n=e.innerHTML||e.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[t]=e[A]})),d.a.createElement(A,r)}))}(A,e)},toString:function(){return function(A,e,t){return e.reduce((function(e,n){var r=Object.keys(n).filter((function(A){return!(A===S||A===T)})).reduce((function(A,e){var r=void 0===n[e]?e:e+'="'+J(n[e],t)+'"';return A?A+" "+r:r}),""),a=n.innerHTML||n.cssText||"",o=-1===F.indexOf(A);return e+"<"+A+' data-react-helmet="true" '+r+(o?"/>":">"+a+"</"+A+">")}),"")}(A,e,t)}}}},pA=function(A){var e=A.baseTag,t=A.bodyAttributes,n=A.encode,r=A.htmlAttributes,a=A.linkTags,o=A.metaTags,i=A.noscriptTags,c=A.scriptTags,l=A.styleTags,s=A.title,u=void 0===s?"":s,f=A.titleAttributes;return{base:fA(v.BASE,e,n),bodyAttributes:fA(y,t,n),htmlAttributes:fA(b,r,n),link:fA(v.LINK,a,n),meta:fA(v.META,o,n),noscript:fA(v.NOSCRIPT,i,n),script:fA(v.SCRIPT,c,n),style:fA(v.STYLE,l,n),title:fA(v.TITLE,{title:u,titleAttributes:f},n)}},dA=s()((function(A){return{baseTag:K([w,N],A),bodyAttributes:Y(y,A),defer:Z(A,R),encode:Z(A,Q),htmlAttributes:Y(b,A),linkTags:G(v.LINK,[P,w],A),metaTags:G(v.META,[k,E,C,x,O],A),noscriptTags:G(v.NOSCRIPT,[S],A),onChangeClientState:X(A),scriptTags:G(v.SCRIPT,[j,S],A),styleTags:G(v.STYLE,[T],A),title:W(A),titleAttributes:Y(g,A)}}),(function(A){rA&&tA(rA),A.defer?rA=eA((function(){aA(A,(function(){rA=null}))})):(aA(A),rA=null)}),pA)((function(){return null})),mA=(r=dA,o=a=function(A){function e(){return V(this,e),z(this,A.apply(this,arguments))}return function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(e,A),e.prototype.shouldComponentUpdate=function(A){return!f()(this.props,A)},e.prototype.mapNestedChildrenToProps=function(A,e){if(!e)return null;switch(A.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:e};case v.STYLE:return{cssText:e}}throw new Error("<"+A.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(A){var e,t=A.child,n=A.arrayTypeChildren,r=A.newChildProps,a=A.nestedChildren;return q({},n,((e={})[t.type]=[].concat(n[t.type]||[],[q({},r,this.mapNestedChildrenToProps(t,a))]),e))},e.prototype.mapObjectTypeChildren=function(A){var e,t,n=A.child,r=A.newProps,a=A.newChildProps,o=A.nestedChildren;switch(n.type){case v.TITLE:return q({},r,((e={})[n.type]=o,e.titleAttributes=q({},a),e));case v.BODY:return q({},r,{bodyAttributes:q({},a)});case v.HTML:return q({},r,{htmlAttributes:q({},a)})}return q({},r,((t={})[n.type]=q({},a),t))},e.prototype.mapArrayTypeChildrenToProps=function(A,e){var t=q({},e);return Object.keys(A).forEach((function(e){var n;t=q({},t,((n={})[e]=A[e],n))})),t},e.prototype.warnOnInvalidChildren=function(A,e){return!0},e.prototype.mapChildrenToProps=function(A,e){var t=this,n={};return d.a.Children.forEach(A,(function(A){if(A&&A.props){var r=A.props,a=r.children,o=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(A).reduce((function(e,t){return e[U[t]||t]=A[t],e}),e)}(_(r,["children"]));switch(t.warnOnInvalidChildren(A,a),A.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=t.flattenArrayTypeChildren({child:A,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:e=t.mapObjectTypeChildren({child:A,newProps:e,newChildProps:o,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var A=this.props,e=A.children,t=_(A,["children"]),n=q({},t);return e&&(n=this.mapChildrenToProps(e,n)),d.a.createElement(r,n)},H(e,null,[{key:"canUseDOM",set:function(A){r.canUseDOM=A}}]),e}(d.a.Component),a.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=r.peek,a.rewind=function(){var A=r.rewind();return A||(A=pA({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),A},o);mA.renderStatic=mA.rewind}).call(this,t("yLpj"))},vtJi:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAMUlEQVRIx2NgGAWjYFCCeob/ZMD6oWDQKCAMHBjqyYAOQyH6qea1UTBajIyCUTCwAACXXfHt8glkJQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=commons-0c2ec16f7ca8fcf08222.js.map