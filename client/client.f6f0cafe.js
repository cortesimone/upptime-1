function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function c(e,t,n,r,s,o,a){const c=function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(t,r,s,o);if(c){const s=i(t,n,r,a);e.p(s,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}function p(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function v(){return b(" ")}function $(){return b("")}function y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function w(e){return function(t){return t.preventDefault(),e.call(this,t)}}function P(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:P(e,r,t[r])}function E(e){return Array.from(e.childNodes)}function x(e,t,n,r){for(let r=0;r<e.length;r+=1){const s=e[r];if(s.nodeName===t){let t=0;const o=[];for(;t<s.attributes.length;){const e=s.attributes[t++];n[e.name]||o.push(e.name)}for(let e=0;e<o.length;e++)s.removeAttribute(o[e]);return e.splice(r,1)[0]}}return r?g(t):m(t)}function k(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return b(t)}function O(e){return k(e," ")}function S(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e,t){e.value=null==t?"":t}let I,U;function R(){if(void 0===I){I=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){I=!0}}return I}function T(e,t){const n=getComputedStyle(e),r=(parseInt(n.zIndex)||0)-1;"static"===n.position&&(e.style.position="relative");const s=m("iframe");s.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${r};`),s.setAttribute("aria-hidden","true"),s.tabIndex=-1;const o=R();let a;return o?(s.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=y(window,"message",(e=>{e.source===s.contentWindow&&t()}))):(s.src="about:blank",s.onload=()=>{a=y(s.contentWindow,"resize",t)}),p(e,s),()=>{(o||a&&s.contentWindow)&&a(),d(s)}}function N(e,t=document.body){return Array.from(t.querySelectorAll(e))}class C{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=m(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)f(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(d)}}function L(e){U=e}function M(){if(!U)throw new Error("Function called outside component initialization");return U}function G(e){M().$$.on_mount.push(e)}function j(e){M().$$.after_update.push(e)}function H(e){M().$$.on_destroy.push(e)}const D=[],q=[],W=[],B=[],z=Promise.resolve();let J=!1;function V(e){W.push(e)}let F=!1;const K=new Set;function Y(){if(!F){F=!0;do{for(let e=0;e<D.length;e+=1){const t=D[e];L(t),Q(t.$$)}for(L(null),D.length=0;q.length;)q.pop()();for(let e=0;e<W.length;e+=1){const t=W[e];K.has(t)||(K.add(t),t())}W.length=0}while(D.length);for(;B.length;)B.pop()();J=!1,F=!1,K.clear()}}function Q(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const X=new Set;let Z;function ee(){Z={r:0,c:[],p:Z}}function te(){Z.r||s(Z.c),Z=Z.p}function ne(e,t){e&&e.i&&(X.delete(e),e.i(t))}function re(e,t,n,r){if(e&&e.o){if(X.has(e))return;X.add(e),Z.c.push((()=>{X.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function se(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(r[e]=1);for(const e in i)s[e]||(n[e]=i[e],s[e]=1);e[o]=i}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function oe(e){return"object"==typeof e&&null!==e?e:{}}function ae(e){e&&e.c()}function ie(e,t){e&&e.l(t)}function ce(e,t,r){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=e.$$;a&&a.m(t,r),V((()=>{const t=i.map(n).filter(o);c?c.push(...t):s(t),e.$$.on_mount=[]})),l.forEach(V)}function le(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){-1===e.$$.dirty[0]&&(D.push(e),J||(J=!0,z.then(Y)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(t,n,o,a,i,c,l=[-1]){const u=U;L(t);const p=n.props||{},f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(f.ctx=o?o(t,p,((e,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=s)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](s),h&&ue(t,e)),n})):[],f.update(),h=!0,s(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const e=E(n.target);f.fragment&&f.fragment.l(e),e.forEach(d)}else f.fragment&&f.fragment.c();n.intro&&ne(t.$$.fragment),ce(t,n.target,n.anchor),Y()}L(u)}class fe{$destroy(){le(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const de=[];function he(t,n=e){let r;const s=[];function o(e){if(a(t,e)&&(t=e,r)){const e=!de.length;for(let e=0;e<s.length;e+=1){const n=s[e];n[1](),de.push(n,t)}if(e){for(let e=0;e<de.length;e+=2)de[e][0](de[e+1]);de.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const c=[a,i];return s.push(c),1===s.length&&(r=n(o)||e),a(t),()=>{const e=s.indexOf(c);-1!==e&&s.splice(e,1),0===s.length&&(r(),r=null)}}}}const me={};var ge={owner:"openupm",repo:"upptime",sites:[{name:"[Global] OpenUPM Website",url:"https://openupm.com"},{name:"[Global] OpenUPM Website Docs",url:"https://openupm.com/docs/"},{name:"[Global] OpenUPM Website Packages",url:"https://openupm.com/packages/"},{name:"[Global] OpenUPM Website Package Detail",url:"https://openupm.com/packages/com.littlebigfun.addressable-importer/"},{name:"[Global] OpenUPM API /site/info",url:"https://api.openupm.com/site/info"},{name:"[Global] OpenUPM API /packages/extra",url:"https://api.openupm.com/packages/extra"},{name:"[Global] OpenUPM API /packages/recent",url:"https://api.openupm.com/packages/recent"},{name:"[Global] OpenUPM API /feeds/updates/rss",url:"https://api.openupm.com/feeds/updates/rss"},{name:"[Global] OpenUPM API /packages/package-name",url:"https://api.openupm.com/packages/com.littlebigfun.addressable-importer"},{name:"[Global] OpenUPM Registry /-/all",url:"https://package.openupm.com/-/all"},{name:"[Global] OpenUPM Registry /package-name",url:"https://package.openupm.com/com.littlebigfun.addressable-importer"},{name:"[Global] OpenUPM Registry Fetch a Tarball",url:"https://package.openupm.com:443/com.littlebigfun.addressable-importer/-/com.littlebigfun.addressable-importer-0.9.3.tgz"},{name:"[Global] Unity Registry /package-name",url:"https://packages.unity.com/com.unity.addressables"},{name:"[CN] OpenUPM Website",url:"https://openupm.cn"},{name:"[CN] OpenUPM Website Docs",url:"https://openupm.cn/docs/"},{name:"[CN] OpenUPM Website Packages",url:"https://openupm.cn/packages/"},{name:"[CN] OpenUPM Website Package Detail",url:"https://openupm.cn/packages/com.littlebigfun.addressable-importer/"},{name:"[CN] OpenUPM API /site/info",url:"https://api.openupm.cn/site/info"},{name:"[CN] OpenUPM API /packages/extra",url:"https://api.openupm.cn/packages/extra"},{name:"[CN] OpenUPM API /packages/recent",url:"https://api.openupm.cn/packages/recent"},{name:"[CN] OpenUPM API /feeds/updates/rss",url:"https://api.openupm.cn/feeds/updates/rss"},{name:"[CN] OpenUPM API /packages/package-name",url:"https://api.openupm.cn/packages/com.littlebigfun.addressable-importer"},{name:"[CN] OpenUPM Registry /-/all",url:"https://package.openupm.cn/-/all"},{name:"[CN] OpenUPM Registry /package-name",url:"https://package.openupm.cn/com.littlebigfun.addressable-importer"},{name:"[CN] OpenUPM Registry Fetch a Tarball",url:"https://package.openupm.cn/com.littlebigfun.addressable-importer/-/com.littlebigfun.addressable-importer-0.9.3.tgz"}],"status-website":{baseUrl:"/upptime",logoUrl:"https://github.com/openupm.png?size=128",name:"OpenUPM Status",introTitle:"Uptime monitor and status page for OpenUPM",introMessage:"Powered by [@upptime](https://github.com/upptime/upptime)",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://openupm.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage"}};function be(e,t,n){const r=e.slice();return r[1]=t[n],r}function ve(e){let t,n,r,s,o,a,i=e[1].title+"";return{c(){t=m("li"),n=m("a"),r=b(i),a=v(),this.h()},l(e){t=x(e,"LI",{});var s=E(t);n=x(s,"A",{"aria-current":!0,href:!0,class:!0});var o=E(n);r=k(o,i),o.forEach(d),a=O(s),s.forEach(d),this.h()},h(){P(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),P(n,"href",o=e[1].href.replace("$OWNER",ge.owner).replace("$REPO",ge.repo)),P(n,"class","svelte-1sgaob0")},m(e,s){f(e,t,s),p(t,n),p(n,r),p(t,a)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&P(n,"aria-current",s)},d(e){e&&d(t)}}}function $e(t){let n,r,s,o,a,i=ge["status-website"]&&ge["status-website"].logoUrl&&function(t){let n,r,s,o,a,i,c,l,u=ge["status-website"].name+"";return{c(){n=m("div"),r=m("a"),s=m("img"),a=v(),i=m("div"),c=b(u),this.h()},l(e){n=x(e,"DIV",{});var t=E(n);r=x(t,"A",{href:!0,class:!0});var o=E(r);s=x(o,"IMG",{alt:!0,src:!0,class:!0}),a=O(o),i=x(o,"DIV",{});var l=E(i);c=k(l,u),l.forEach(d),o.forEach(d),t.forEach(d),this.h()},h(){P(s,"alt",""),s.src!==(o=ge["status-website"].logoUrl)&&P(s,"src",o),P(s,"class","svelte-1sgaob0"),P(r,"href",l=ge["status-website"].logoHref||ge.path),P(r,"class","logo svelte-1sgaob0")},m(e,t){f(e,n,t),p(n,r),p(r,s),p(r,a),p(r,i),p(i,c)},p:e,d(e){e&&d(n)}}}(),c=ge["status-website"]&&ge["status-website"].navbar&&function(e){let t,n=ge["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=ve(be(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=$()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=$()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);f(e,t,n)},p(e,s){if(1&s){let o;for(n=ge["status-website"].navbar,o=0;o<n.length;o+=1){const a=be(e,n,o);r[o]?r[o].p(a,s):(r[o]=ve(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){h(r,e),e&&d(t)}}}(t),l=ge["status-website"]&&ge["status-website"].navbarGitHub&&!ge["status-website"].navbar&&function(t){let n,r,s,o,a=ge.i18n.navGitHub+"";return{c(){n=m("li"),r=m("a"),s=b(a),this.h()},l(e){n=x(e,"LI",{});var t=E(n);r=x(t,"A",{href:!0,class:!0});var o=E(r);s=k(o,a),o.forEach(d),t.forEach(d),this.h()},h(){P(r,"href",o=`https://github.com/${ge.owner}/${ge.repo}`),P(r,"class","svelte-1sgaob0")},m(e,t){f(e,n,t),p(n,r),p(r,s)},p:e,d(e){e&&d(n)}}}();return{c(){n=m("nav"),r=m("div"),i&&i.c(),s=v(),o=m("ul"),c&&c.c(),a=v(),l&&l.c(),this.h()},l(e){n=x(e,"NAV",{class:!0});var t=E(n);r=x(t,"DIV",{class:!0});var u=E(r);i&&i.l(u),s=O(u),o=x(u,"UL",{class:!0});var p=E(o);c&&c.l(p),a=O(p),l&&l.l(p),p.forEach(d),u.forEach(d),t.forEach(d),this.h()},h(){P(o,"class","svelte-1sgaob0"),P(r,"class","container svelte-1sgaob0"),P(n,"class","svelte-1sgaob0")},m(e,t){f(e,n,t),p(n,r),i&&i.m(r,null),p(r,s),p(r,o),c&&c.m(o,null),p(o,a),l&&l.m(o,null)},p(e,[t]){ge["status-website"]&&ge["status-website"].logoUrl&&i.p(e,t),ge["status-website"]&&ge["status-website"].navbar&&c.p(e,t),ge["status-website"]&&ge["status-website"].navbarGitHub&&!ge["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&d(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function ye(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class we extends fe{constructor(e){super(),pe(this,e,ye,$e,a,{segment:0})}}var Pe={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function _e(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ee(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xe(e,t){var n,r,s,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},p=0;function f(e){var t=Pe[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function d(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=i.exec(e);)r=e.substring(p,s.index),p=i.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((a=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+_e(Ee(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=s[6])?(a.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=xe(_e(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):s[8]?n='<img src="'+Ee(s[8])+'" alt="'+Ee(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ee(s[11]||u[r.toLowerCase()])+'">'),n=d()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(a="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+xe(s[12]||s[15],u)+"</"+a+">":s[16]?n="<code>"+Ee(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(p)+d()).replace(/^\n+|\n+$/g,"")}function ke(e,t,n){const r=e.slice();return r[3]=t[n],r}function Oe(e,t,n){const r=e.slice();return r[6]=t[n],r}function Se(t){let n,r,s,o;return{c(){n=m("script"),this.h()},l(e){n=x(e,"SCRIPT",{src:!0,async:!0,defer:!0}),E(n).forEach(d),this.h()},h(){n.src!==(r=t[6].src)&&P(n,"src",r),n.async=s=!!t[6].async,n.defer=o=!!t[6].async},m(e,t){f(e,n,t)},p:e,d(e){e&&d(n)}}}function Ae(t){let n,r,s,o;return{c(){n=m("link"),this.h()},l(e){n=x(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){P(n,"rel",r=t[3].rel),P(n,"href",s=t[3].href),P(n,"media",o=t[3].media)},m(e,t){f(e,n,t)},p:e,d(e){e&&d(n)}}}function Ie(e){let t,n,r,s,o,a,l,u,g,y,w,_,S,A,I,U,R=xe(ge.i18n.footer.replace(/\$REPO/,`https://github.com/${ge.owner}/${ge.repo}`))+"",T=ge["status-website"].scripts&&function(e){let t,n=ge["status-website"].scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=Se(Oe(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=$()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=$()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);f(e,t,n)},p(e,s){if(0&s){let o;for(n=ge["status-website"].scripts,o=0;o<n.length;o+=1){const a=Oe(e,n,o);r[o]?r[o].p(a,s):(r[o]=Se(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){h(r,e),e&&d(t)}}}(e),C=ge["status-website"].links&&function(e){let t,n=ge["status-website"].links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ae(ke(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=$()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=$()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);f(e,t,n)},p(e,s){if(0&s){let o;for(n=ge["status-website"].links,o=0;o<n.length;o+=1){const a=ke(e,n,o);r[o]?r[o].p(a,s):(r[o]=Ae(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){h(r,e),e&&d(t)}}}(e),L=ge["status-website"].css&&function(e){let t,n;return{c(){t=m("style"),n=b("{config['status-website'].css}\n    ")},l(e){t=x(e,"STYLE",{});var r=E(t);n=k(r,"{config['status-website'].css}\n    "),r.forEach(d)},m(e,r){f(e,t,r),p(t,n)},d(e){e&&d(t)}}}(),M=ge["status-website"].js&&function(e){let t,n;return{c(){t=m("script"),n=b('{\n        config["status-website"].js;\n      }')},l(e){t=x(e,"SCRIPT",{});var r=E(t);n=k(r,'{\n        config["status-website"].js;\n      }'),r.forEach(d)},m(e,r){f(e,t,r),p(t,n)},d(e){e&&d(t)}}}();y=new we({props:{segment:e[0]}});const G=e[2].default,j=function(e,t,n,r){if(e){const s=i(e,t,n,r);return e[0](s)}}(G,e,e[1],null);return{c(){t=m("link"),r=m("link"),T&&T.c(),o=$(),C&&C.c(),a=$(),L&&L.c(),l=$(),M&&M.c(),u=$(),g=v(),ae(y.$$.fragment),w=v(),_=m("main"),j&&j.c(),S=v(),A=m("footer"),I=m("p"),this.h()},l(e){const n=N('[data-svelte="svelte-1pvickc"]',document.head);t=x(n,"LINK",{rel:!0,type:!0,href:!0}),r=x(n,"LINK",{rel:!0,type:!0,href:!0}),T&&T.l(n),o=$(),C&&C.l(n),a=$(),L&&L.l(n),l=$(),M&&M.l(n),u=$(),n.forEach(d),g=O(e),ie(y.$$.fragment,e),w=O(e),_=x(e,"MAIN",{class:!0});var s=E(_);j&&j.l(s),s.forEach(d),S=O(e),A=x(e,"FOOTER",{class:!0});var i=E(A);I=x(i,"P",{}),E(I).forEach(d),i.forEach(d),this.h()},h(){P(t,"rel","icon"),P(t,"type","image/svg"),P(t,"href",n=(ge["status-website"]||{}).faviconSvg||(ge["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),P(r,"rel","icon"),P(r,"type","image/png"),P(r,"href",s=(ge["status-website"]||{}).favicon||"/logo-192.png"),P(_,"class","container"),P(A,"class","svelte-jbr799")},m(e,n){p(document.head,t),p(document.head,r),T&&T.m(document.head,null),p(document.head,o),C&&C.m(document.head,null),p(document.head,a),L&&L.m(document.head,null),p(document.head,l),M&&M.m(document.head,null),p(document.head,u),f(e,g,n),ce(y,e,n),f(e,w,n),f(e,_,n),j&&j.m(_,null),f(e,S,n),f(e,A,n),p(A,I),I.innerHTML=R,U=!0},p(e,[t]){ge["status-website"].scripts&&T.p(e,t),ge["status-website"].links&&C.p(e,t);const n={};1&t&&(n.segment=e[0]),y.$set(n),j&&j.p&&2&t&&c(j,G,e,e[1],t,null,null)},i(e){U||(ne(y.$$.fragment,e),ne(j,e),U=!0)},o(e){re(y.$$.fragment,e),re(j,e),U=!1},d(e){d(t),d(r),T&&T.d(e),d(o),C&&C.d(e),d(a),L&&L.d(e),d(l),M&&M.d(e),d(u),e&&d(g),le(y,e),e&&d(w),e&&d(_),j&&j.d(e),e&&d(S),e&&d(A)}}}function Ue(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Re extends fe{constructor(e){super(),pe(this,e,Ue,Ie,a,{segment:0})}}function Te(e){let t,n,r=e[1].stack+"";return{c(){t=m("pre"),n=b(r)},l(e){t=x(e,"PRE",{});var s=E(t);n=k(s,r),s.forEach(d)},m(e,r){f(e,t,r),p(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&S(n,r)},d(e){e&&d(t)}}}function Ne(t){let n,r,s,o,a,i,c,l,u,h=t[1].message+"";document.title=n=t[0];let g=t[2]&&t[1].stack&&Te(t);return{c(){r=v(),s=m("h1"),o=b(t[0]),a=v(),i=m("p"),c=b(h),l=v(),g&&g.c(),u=$(),this.h()},l(e){N('[data-svelte="svelte-1moakz"]',document.head).forEach(d),r=O(e),s=x(e,"H1",{class:!0});var n=E(s);o=k(n,t[0]),n.forEach(d),a=O(e),i=x(e,"P",{class:!0});var p=E(i);c=k(p,h),p.forEach(d),l=O(e),g&&g.l(e),u=$(),this.h()},h(){P(s,"class","svelte-17w3omn"),P(i,"class","svelte-17w3omn")},m(e,t){f(e,r,t),f(e,s,t),p(s,o),f(e,a,t),f(e,i,t),p(i,c),f(e,l,t),g&&g.m(e,t),f(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&S(o,e[0]),2&t&&h!==(h=e[1].message+"")&&S(c,h),e[2]&&e[1].stack?g?g.p(e,t):(g=Te(e),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:e,o:e,d(e){e&&d(r),e&&d(s),e&&d(a),e&&d(i),e&&d(l),g&&g.d(e),e&&d(u)}}}function Ce(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Le extends fe{constructor(e){super(),pe(this,e,Ce,Ne,a,{status:0,error:1})}}function Me(e){let n,r,s;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ae(n.$$.fragment),r=$()},l(e){n&&ie(n.$$.fragment,e),r=$()},m(e,t){n&&ce(n,e,t),f(e,r,t),s=!0},p(e,t){const s=16&t?se(o,[oe(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){ee();const e=n;re(e.$$.fragment,1,0,(()=>{le(e,1)})),te()}a?(n=new a(i()),ae(n.$$.fragment),ne(n.$$.fragment,1),ce(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(e){s||(n&&ne(n.$$.fragment,e),s=!0)},o(e){n&&re(n.$$.fragment,e),s=!1},d(e){e&&d(r),n&&le(n,e)}}}function Ge(e){let t,n;return t=new Le({props:{error:e[0],status:e[1]}}),{c(){ae(t.$$.fragment)},l(e){ie(t.$$.fragment,e)},m(e,r){ce(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function je(e){let t,n,r,s;const o=[Ge,Me],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),r=$()},l(e){n.l(e),r=$()},m(e,n){a[t].m(e,n),f(e,r,n),s=!0},p(e,s){let c=t;t=i(e),t===c?a[t].p(e,s):(ee(),re(a[c],1,1,(()=>{a[c]=null})),te(),n=a[t],n?n.p(e,s):(n=a[t]=o[t](e),n.c()),ne(n,1),n.m(r.parentNode,r))},i(e){s||(ne(n),s=!0)},o(e){re(n),s=!1},d(e){a[t].d(e),e&&d(r)}}}function He(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[je]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Re({props:o}),{c(){ae(n.$$.fragment)},l(e){ie(n.$$.fragment,e)},m(e,t){ce(n,e,t),r=!0},p(e,[t]){const r=12&t?se(s,[4&t&&{segment:e[2][0]},8&t&&oe(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(ne(n.$$.fragment,e),r=!0)},o(e){re(n.$$.fragment,e),r=!1},d(e){le(n,e)}}}function De(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:l}=t;var u,p;return j(l),u=me,p=r,M().$$.context.set(u,p),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,a,i,c,r,l]}class qe extends fe{constructor(e){super(),pe(this,e,De,He,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const We=[],Be=[{js:()=>Promise.all([import("./index.33e530b7.js"),__inject_styles(["client-f7e6ed36.css","createOctokit-777bf8f6.css","index-d57edde8.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.facf8352.js"),__inject_styles(["client-f7e6ed36.css","rate-limit-exceeded-e1b7a1b3.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].a2f04039.js"),__inject_styles(["client-f7e6ed36.css","createOctokit-777bf8f6.css","[number]-7cdb9800.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].5964a474.js"),__inject_styles(["client-f7e6ed36.css","createOctokit-777bf8f6.css","[number]-e7104239.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.e9d1bf57.js"),__inject_styles(["client-f7e6ed36.css","error-a44b661b.css"])]).then((function(e){return e[0]}))}],ze=(Je=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Je(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Je(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Je;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ve(e,t,n,r){return new(n||(n=Promise))((function(s,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))}function Fe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let Ke,Ye=1;const Qe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Xe={};let Ze,et;function tt(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((e=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r})),t}function nt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ze))return null;let t=e.pathname.slice(Ze.length);if(""===t&&(t="/"),!We.some((e=>e.test(t))))for(let n=0;n<ze.length;n+=1){const r=ze[n],s=r.pattern.exec(t);if(s){const n=tt(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:s,page:i}}}}function rt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Fe(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=nt(s);if(o){at(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),Qe.pushState({id:Ke},"",s.href)}}function st(){return{x:pageXOffset,y:pageYOffset}}function ot(e){if(Xe[Ke]=st(),e.state){const t=nt(new URL(location.href));t?at(t,e.state.id):location.href=location.href}else!function(e){Ye=e}(Ye+1),function(e){Ke=e}(Ye),Qe.replaceState({id:Ke},"",location.href)}function at(e,t,n,r){return Ve(this,void 0,void 0,(function*(){const s=!!t;if(s)Ke=t;else{const e=st();Xe[Ke]=e,Ke=t=++Ye,Xe[Ke]=n?e:{x:0,y:0}}if(yield et(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=Xe[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),Xe[Ke]=n,s||e?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function it(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let ct,lt=null;function ut(e){const t=Fe(e.target);t&&"prefetch"===t.rel&&function(e){const t=nt(new URL(e,it(document)));if(t)lt&&e===lt.href||(lt={href:e,promise:Ot(t)}),lt.promise}(t.href)}function pt(e){clearTimeout(ct),ct=setTimeout((()=>{ut(e)}),20)}function ft(e,t={noscroll:!1,replaceState:!1}){const n=nt(new URL(e,it(document)));return n?(Qe[t.replaceState?"replaceState":"pushState"]({id:Ke},"",e),at(n,null,t.noscroll)):(location.href=e,new Promise((()=>{})))}const dt="undefined"!=typeof __SAPPER__&&__SAPPER__;let ht,mt,gt,bt=!1,vt=[],$t="{}";const yt={page:function(e){const t=he(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:he(null),session:he(dt&&dt.session)};let wt,Pt,_t;function Et(e,t){const{error:n}=e;return Object.assign({error:n},t)}function xt(e){return Ve(this,void 0,void 0,(function*(){ht&&yt.preloading.set(!0);const t=function(e){return lt&&lt.href===e.href?lt.promise:Ot(e)}(e),n=mt={},r=yield t,{redirect:s}=r;if(n===mt)if(s)yield ft(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield kt(n,t,Et(t,e.page))}}))}function kt(e,t,n){return Ve(this,void 0,void 0,(function*(){yt.page.set(n),yt.preloading.set(!1),ht?ht.$set(t):(t.stores={page:{subscribe:yt.page.subscribe},preloading:{subscribe:yt.preloading.subscribe},session:yt.session},t.level0={props:yield gt},t.notify=yt.page.notify,ht=new qe({target:_t,props:t,hydrate:!0})),vt=e,$t=JSON.stringify(n.query),bt=!0,Pt=!1}))}function Ot(e){return Ve(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!gt){const e=()=>({});gt=dt.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},wt)}let i,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>Ve(this,void 0,void 0,(function*(){const p=r[i];if(function(e,t,n,r){if(r!==$t)return!0;const s=vt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,p,l,s)&&(u=!0),o.segments[c]=r[i+1],!t)return{segment:p};const f=c++;if(!Pt&&!u&&vt[i]&&vt[i].part===t.i)return vt[i];u=!1;const{default:d,preload:h}=yield Be[t.i].js();let m;return m=bt||!dt.preloaded[i+1]?h?yield h.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},wt):{}:dt.preloaded[i+1],o[`level${f}`]={component:d,props:m,segment:p,match:l,part:t.i}})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}))}var St,At,It;yt.session.subscribe((e=>Ve(void 0,void 0,void 0,(function*(){if(wt=e,!bt)return;Pt=!0;const t=nt(new URL(location.href)),n=mt={},{redirect:r,props:s,branch:o}=yield Ot(t);n===mt&&(r?yield ft(r.location,{replaceState:!0}):yield kt(o,s,Et(s,t.page)))})))),St={target:document.querySelector("#sapper")},At=St.target,_t=At,It=dt.baseUrl,Ze=It,et=xt,"scrollRestoration"in Qe&&(Qe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Qe.scrollRestoration="auto"})),addEventListener("load",(()=>{Qe.scrollRestoration="manual"})),addEventListener("click",rt),addEventListener("popstate",ot),addEventListener("touchstart",ut),addEventListener("mousemove",pt),dt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:a}=dt;gt||(gt=s&&s[0]);const i={error:a,status:o,session:r,level0:{props:gt},level1:{props:{status:o,error:a},component:Le},segments:s},c=tt(n);kt([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;Qe.replaceState({id:Ye},"",t);const n=nt(new URL(location.href));if(n)return at(n,Ye,!0,e)}));export{le as A,y as B,s as C,q as D,u as E,N as F,xe as G,C as H,g as I,ft as J,A as K,w as L,t as M,_ as N,se as O,j as P,H as Q,l as R,fe as S,oe as T,V as U,T as V,E as a,k as b,x as c,d,m as e,P as f,f as g,p as h,pe as i,v as j,O as k,ee as l,re as m,e as n,te as o,ne as p,G as q,ge as r,a as s,b as t,S as u,$ as v,h as w,ae as x,ie as y,ce as z};

import __inject_styles from './inject_styles.5607aec6.js';