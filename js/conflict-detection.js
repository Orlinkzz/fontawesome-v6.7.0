/*!
 * Font Awesome Pro 6.7.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 * Copyright 2024 Fonticons, Inc.
 */
var t;t=function(){function o(t,e,n){(e=(t=>"symbol"==typeof(t=((t,e)=>{if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);if("object"!=typeof(n=n.call(t,e||"default")))return n;throw new TypeError("@@toPrimitive must return a primitive value.")})(t,"string"))?t:t+"")(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}function r(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let t={},e={};try{"undefined"!=typeof window&&(t=window),"undefined"!=typeof document&&(e=document)}catch(t){}var{userAgent:n=""}=t.navigator||{};let c=t,l=e,a=!!c.document,s=!!l.documentElement&&!!l.head&&"function"==typeof l.addEventListener&&"function"==typeof l.createElement;~n.indexOf("MSIE")||n.indexOf("Trident/");function f(){l.removeEventListener("DOMContentLoaded",f),u=1,d.map(t=>t())}let d=[],u=!1;function h(t){s&&(u?setTimeout(t,0):d.push(t))}s&&!(u=(l.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(l.readyState))&&l.addEventListener("DOMContentLoaded",f);var p="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(t){function d(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function s(t,e,n,o,r,a){return d((e=d(d(e,t),d(o,a)))<<r|e>>>32-r,n)}function u(t,e,n,o,r,a,i){return s(e&n|~e&o,t,e,r,a,i)}function h(t,e,n,o,r,a,i){return s(e&o|n&~o,t,e,r,a,i)}function g(t,e,n,o,r,a,i){return s(e^n^o,t,e,r,a,i)}function m(t,e,n,o,r,a,i){return s(n^(e|~o),t,e,r,a,i)}function i(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;for(var n,o,r,a,i=1732584193,s=-271733879,f=-1732584194,c=271733878,l=0;l<t.length;l+=16)i=u(n=i,o=s,r=f,a=c,t[l],7,-680876936),c=u(c,i,s,f,t[l+1],12,-389564586),f=u(f,c,i,s,t[l+2],17,606105819),s=u(s,f,c,i,t[l+3],22,-1044525330),i=u(i,s,f,c,t[l+4],7,-176418897),c=u(c,i,s,f,t[l+5],12,1200080426),f=u(f,c,i,s,t[l+6],17,-1473231341),s=u(s,f,c,i,t[l+7],22,-45705983),i=u(i,s,f,c,t[l+8],7,1770035416),c=u(c,i,s,f,t[l+9],12,-1958414417),f=u(f,c,i,s,t[l+10],17,-42063),s=u(s,f,c,i,t[l+11],22,-1990404162),i=u(i,s,f,c,t[l+12],7,1804603682),c=u(c,i,s,f,t[l+13],12,-40341101),f=u(f,c,i,s,t[l+14],17,-1502002290),i=h(i,s=u(s,f,c,i,t[l+15],22,1236535329),f,c,t[l+1],5,-165796510),c=h(c,i,s,f,t[l+6],9,-1069501632),f=h(f,c,i,s,t[l+11],14,643717713),s=h(s,f,c,i,t[l],20,-373897302),i=h(i,s,f,c,t[l+5],5,-701558691),c=h(c,i,s,f,t[l+10],9,38016083),f=h(f,c,i,s,t[l+15],14,-660478335),s=h(s,f,c,i,t[l+4],20,-405537848),i=h(i,s,f,c,t[l+9],5,568446438),c=h(c,i,s,f,t[l+14],9,-1019803690),f=h(f,c,i,s,t[l+3],14,-187363961),s=h(s,f,c,i,t[l+8],20,1163531501),i=h(i,s,f,c,t[l+13],5,-1444681467),c=h(c,i,s,f,t[l+2],9,-51403784),f=h(f,c,i,s,t[l+7],14,1735328473),i=g(i,s=h(s,f,c,i,t[l+12],20,-1926607734),f,c,t[l+5],4,-378558),c=g(c,i,s,f,t[l+8],11,-2022574463),f=g(f,c,i,s,t[l+11],16,1839030562),s=g(s,f,c,i,t[l+14],23,-35309556),i=g(i,s,f,c,t[l+1],4,-1530992060),c=g(c,i,s,f,t[l+4],11,1272893353),f=g(f,c,i,s,t[l+7],16,-155497632),s=g(s,f,c,i,t[l+10],23,-1094730640),i=g(i,s,f,c,t[l+13],4,681279174),c=g(c,i,s,f,t[l],11,-358537222),f=g(f,c,i,s,t[l+3],16,-722521979),s=g(s,f,c,i,t[l+6],23,76029189),i=g(i,s,f,c,t[l+9],4,-640364487),c=g(c,i,s,f,t[l+12],11,-421815835),f=g(f,c,i,s,t[l+15],16,530742520),i=m(i,s=g(s,f,c,i,t[l+2],23,-995338651),f,c,t[l],6,-198630844),c=m(c,i,s,f,t[l+7],10,1126891415),f=m(f,c,i,s,t[l+14],15,-1416354905),s=m(s,f,c,i,t[l+5],21,-57434055),i=m(i,s,f,c,t[l+12],6,1700485571),c=m(c,i,s,f,t[l+3],10,-1894986606),f=m(f,c,i,s,t[l+10],15,-1051523),s=m(s,f,c,i,t[l+1],21,-2054922799),i=m(i,s,f,c,t[l+8],6,1873313359),c=m(c,i,s,f,t[l+15],10,-30611744),f=m(f,c,i,s,t[l+6],15,-1560198380),s=m(s,f,c,i,t[l+13],21,1309151649),i=m(i,s,f,c,t[l+4],6,-145523070),c=m(c,i,s,f,t[l+11],10,-1120210379),f=m(f,c,i,s,t[l+2],15,718787259),s=m(s,f,c,i,t[l+9],21,-343485551),i=d(i,n),s=d(s,o),f=d(f,r),c=d(c,a);return[i,s,f,c]}function f(t){for(var e="",n=32*t.length,o=0;o<n;o+=8)e+=String.fromCharCode(t[o>>5]>>>o%32&255);return e}function c(t){var e=[];for(e[(t.length>>2)-1]=void 0,o=0;o<e.length;o+=1)e[o]=0;for(var n=8*t.length,o=0;o<n;o+=8)e[o>>5]|=(255&t.charCodeAt(o/8))<<o%32;return e}function o(t){for(var e,n="0123456789abcdef",o="",r=0;r<t.length;r+=1)e=t.charCodeAt(r),o+=n.charAt(e>>>4&15)+n.charAt(15&e);return o}function l(t){return unescape(encodeURIComponent(t))}function r(t){return f(i(c(t=l(t)),8*t.length))}function a(t,e){var n,t=l(t),e=l(e),o=c(t),r=[],a=[];for(r[15]=a[15]=void 0,16<o.length&&(o=i(o,8*t.length)),n=0;n<16;n+=1)r[n]=909522486^o[n],a[n]=1549556828^o[n];return t=i(r.concat(c(e)),512+8*e.length),f(i(a.concat(t),640))}function e(t,e,n){return e?n?a(e,t):o(a(e,t)):n?r(t):o(r(t))}var n;n=p,t.exports?t.exports=e:n.md5=e})(n={exports:{}});var g=n.exports;function m(t){if(null!==t&&"object"==typeof t)return t.src?g(t.src):t.href?g(t.href):t.innerText&&""!==t.innerText?g(t.innerText):void 0}let b="fa-kits-diag",w="fa-kits-node-under-test",y="data-md5",v="data-fa-detection-ignore",A="data-fa-detection-timeout",x="data-fa-detection-results-collection-max-wait",T=t=>{t.preventDefault(),t.stopPropagation()};function D(t){let{fn:a=()=>!0,initialDuration:e=1,maxDuration:i=c.FontAwesomeDetection.timeout,showProgress:s=!1,progressIndicator:f}=t;return new Promise(function(o,r){!function e(t,n){setTimeout(function(){var t=a();s&&console.info(f),t?o(t):(t=250+n)<=i?e(250,t):r("timeout")},t)}(e,0)})}function E(t){var{nodesTested:t,nodesFound:e}=t;c.FontAwesomeDetection=c.FontAwesomeDetection||{},c.FontAwesomeDetection.nodesTested=t,c.FontAwesomeDetection.nodesFound=e,c.FontAwesomeDetection.detectionDone=!0}function O(t){let e=0<arguments.length&&void 0!==t?t:()=>{},n={conflict:{},noConflict:{}};c.onmessage=function(t){"file://"!==c.location.origin&&t.origin!==c.location.origin||t&&t.data&&("fontawesome-conflict"===t.data.type?n.conflict[t.data.md5]=t.data:"no-conflict"===t.data.type&&(n.noConflict[t.data.md5]=t.data))};var t=(e=>{var r=Array.from(l.scripts).filter(t=>!t.hasAttribute(v)&&t!==e),a={};for(let o=0;o<r.length;o++){let t=l.createElement("iframe"),e=(t.setAttribute("style","display:none;"),l.createElement("script"));e.setAttribute("id",w);var i=m(r[o]);e.setAttribute(y,i),a[i]=r[o],""!==r[o].src&&(e.src=r[o].src),""!==r[o].innerText&&(e.innerText=r[o].innerText),e.async=!0;let n=l.createElement("script");n.setAttribute("id",b);var s="file://"===c.location.origin?"*":c.location.origin;n.innerText="(".concat(((n,o,r)=>{parent.FontAwesomeDetection.__pollUntil({fn:()=>!!window.FontAwesomeConfig||!!window.FontAwesomeKitConfig}).then(function(){var t=document.getElementById(n);parent.postMessage({type:"fontawesome-conflict",technology:"js",src:t.src,innerText:t.innerText,tagName:t.tagName,md5:o},r)}).catch(function(t){var e=document.getElementById(n);"timeout"===t?parent.postMessage({type:"no-conflict",src:e.src,innerText:e.innerText,tagName:e.tagName,md5:o},r):console.error(t)})}).toString(),")('").concat(w,"', '").concat(i,"', '").concat(s,"');"),t.onload=function(){t.contentWindow.addEventListener("error",T,!0),t.contentDocument.head.appendChild(n),t.contentDocument.head.appendChild(e)},h(()=>l.body.appendChild(t))}return a})(l.currentScript),o=(()=>{var e=Array.from(l.getElementsByTagName("link")).filter(t=>!t.hasAttribute(v)),n=Array.from(l.getElementsByTagName("style")).filter(t=>!(t.hasAttribute(v)||c.FontAwesomeConfig&&t.innerText.match(new RegExp("svg:not\\(:root\\)\\.".concat(c.FontAwesomeConfig.replacementClass)))));function o(t,e){let n=l.createElement("iframe");n.setAttribute("style","visibility: hidden; position: absolute; height: 0; width: 0;");var o="fa-test-icon-"+e;let r=l.createElement("i"),a=(r.setAttribute("class","fa fa-coffee"),r.setAttribute("id",o),l.createElement("script"));a.setAttribute("id",b);var i="file://"===c.location.origin?"*":c.location.origin;a.innerText="(".concat(((n,e,o,r)=>{parent.FontAwesomeDetection.__pollUntil({fn:()=>{var t=document.getElementById(e),t=window.getComputedStyle(t).getPropertyValue("font-family");return!(!t.match(/FontAwesome/)&&!t.match(/Font Awesome [56]/))}}).then(()=>{var t=document.getElementById(n);parent.postMessage({type:"fontawesome-conflict",technology:"webfont",href:t.href,innerText:t.innerText,tagName:t.tagName,md5:o},r)}).catch(function(t){var e=document.getElementById(n);"timeout"===t?parent.postMessage({type:"no-conflict",technology:"webfont",href:e.src,innerText:e.innerText,tagName:e.tagName,md5:o},r):console.error(t)})}).toString(),")('").concat(w,"', '").concat(o||"foo","', '").concat(e,"', '").concat(i,"');"),n.onload=function(){n.contentWindow.addEventListener("error",T,!0),n.contentDocument.head.appendChild(a),n.contentDocument.head.appendChild(t),n.contentDocument.body.appendChild(r)},h(()=>l.body.appendChild(n))}var r={};for(let t=0;t<e.length;t++){var a=l.createElement("link"),i=(a.setAttribute("id",w),a.setAttribute("href",e[t].href),a.setAttribute("rel",e[t].rel),m(e[t]));a.setAttribute(y,i),r[i]=e[t],o(a,i)}for(let t=0;t<n.length;t++){var s=l.createElement("style"),f=(s.setAttribute("id",w),m(n[t]));s.setAttribute(y,f),s.innerText=n[t].innerText,r[f]=n[t],o(s,f)}return r})();let r=i(i({},t),o),a=Object.keys(t).length+Object.keys(o).length;t=c.FontAwesomeDetection.timeout+c.FontAwesomeDetection.resultsCollectionMaxWait;console.group("Font Awesome Detector"),0===a?(console.info("%cAll Good!","color: green; font-size: large"),console.info("We didn't find anything that needs testing for conflicts. Ergo, no conflicts.")):(console.info("Testing ".concat(a," possible conflicts.")),console.info("We'll wait about ".concat(Math.round(c.FontAwesomeDetection.timeout/10)/100," seconds while testing these and\n")+"then up to another ".concat(Math.round(c.FontAwesomeDetection.resultsCollectionMaxWait/10)/100," to allow the browser time\n")+"to accumulate the results. But we'll probably be outta here way before then.\n\n"),console.info("You can adjust those durations by assigning values to these attributes on the <script> element that loads this detection:"),console.info("\t%c".concat(A,"%c: milliseconds to wait for each test before deciding whether it's a conflict."),"font-weight: bold;","font-size: normal;"),console.info("\t%c".concat(x,"%c: milliseconds to wait for the browser to accumulate test results before giving up."),"font-weight: bold;","font-size: normal;"),D({maxDuration:t,showProgress:!0,progressIndicator:"waiting...",fn:()=>Object.keys(n.conflict).length+Object.keys(n.noConflict).length>=a}).then(()=>{console.info("DONE!"),E({nodesTested:n,nodesFound:r}),e({nodesTested:n,nodesFound:r}),console.groupEnd()}).catch(t=>{"timeout"===t?console.info("TIME OUT! We waited until we got tired. Here's what we found:"):(console.info("Whoops! We hit an error:",t),console.info("Here's what we'd found up until that error:")),E({nodesTested:n,nodesFound:r}),e({nodesTested:n,nodesFound:r}),console.groupEnd()}))}var n=c.FontAwesomeDetection||{},n=i(i(i({},{report:function(t){var e,{nodesTested:n,nodesFound:o}=t,r={};for(e in o)n.conflict[e]||n.noConflict[e]||(r[e]=o[e]);if(0<(t=Object.keys(n.conflict).length)){console.info("%cConflict".concat(1<t?"s":""," found:"),"color: darkred; font-size: large");var a,i={};for(a in n.conflict){var s=n.conflict[a];i[a]={tagName:s.tagName,"src/href":s.src||s.href||"n/a","innerText excerpt":s.innerText&&""!==s.innerText?s.innerText.slice(0,200)+"...":"(empty)"}}console.table(i)}if(0<(t=Object.keys(n.noConflict).length)){console.info("%cNo conflict".concat(1<t?"s":""," found with ").concat(1===t?"this":"these",":"),"color: green; font-size: large");var f,c={};for(f in n.noConflict){var l=n.noConflict[f];c[f]={tagName:l.tagName,"src/href":l.src||l.href||"n/a","innerText excerpt":l.innerText&&""!==l.innerText?l.innerText.slice(0,200)+"...":"(empty)"}}console.table(c)}if(0<(t=Object.keys(r).length)){console.info("%cLeftovers--we timed out before collecting test results for ".concat(1===t?"this":"these",":"),"color: blue; font-size: large");var d,u={};for(d in r){var h=r[d];u[d]={tagName:h.tagName,"src/href":h.src||h.href||"n/a","innerText excerpt":h.innerText&&""!==h.innerText?h.innerText.slice(0,200)+"...":"(empty)"}}console.table(u)}},timeout:+(l.currentScript.getAttribute(A)||"2000"),resultsCollectionMaxWait:+(l.currentScript.getAttribute(x)||"5000")}),n),{},{__pollUntil:D,md5ForNode:m,detectionDone:!1,nodesTested:null,nodesFound:null}),n=(c.FontAwesomeDetection=n,{classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}}),C="classic",F={fak:"kit","fa-kit":"kit"},k={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},j={kit:"fak"},N={"kit-duotone":"fakd"};let P=(()=>{try{return"production"===process.env.NODE_ENV}catch(t){return!1}})();function S(t){return new Proxy(t,{get(t,e){return e in t?t[e]:t[C]}})}var M=i({},n),n=(M[C]=i(i(i(i({},{"fa-duotone":"duotone"}),n[C]),F),k),S(M),i({},{classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}})),F=(n[C]=i(i(i(i({},{duotone:"fad"}),n[C]),j),N),S(n),i({},{classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}})),k=(F[C]=i(i({},F[C]),{fak:"fa-kit"}),S(F),i({},{classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}}));k[C]=i(i({},k[C]),{"fa-kit":"fak"}),S(k),S(i({},{classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}}));!function(t){try{for(var e=arguments.length,n=new Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];t(...n)}catch(t){if(!P)throw t}}(()=>{a&&s&&O(window.FontAwesomeDetection.report)})},("object"!=typeof exports||"undefined"==typeof module)&&"function"==typeof define&&define.amd?define(t):t();