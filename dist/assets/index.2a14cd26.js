const fe=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};fe();function Y(){}function te(e){return e()}function ee(){return Object.create(null)}function H(e){e.forEach(te)}function me(e){return typeof e=="function"}function ne(e,i){return e!=e?i==i:e!==i||e&&typeof e=="object"||typeof e=="function"}let O;function ie(e,i){return O||(O=document.createElement("a")),O.href=i,e===O.href}function ue(e){return Object.keys(e).length===0}function r(e,i){e.appendChild(i)}function F(e,i,a){e.insertBefore(i,a||null)}function G(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function _(e){return document.createTextNode(e)}function h(){return _(" ")}function he(e,i,a,n){return e.addEventListener(i,a,n),()=>e.removeEventListener(i,a,n)}function d(e,i,a){a==null?e.removeAttribute(i):e.getAttribute(i)!==a&&e.setAttribute(i,a)}function pe(e){return Array.from(e.childNodes)}function U(e,i){i=""+i,e.wholeText!==i&&(e.data=i)}let P;function q(e){P=e}const j=[],ae=[],I=[],oe=[],ge=Promise.resolve();let T=!1;function ve(){T||(T=!0,ge.then(re))}function B(e){I.push(e)}const M=new Set;let N=0;function re(){const e=P;do{for(;N<j.length;){const i=j[N];N++,q(i),xe(i.$$)}for(q(null),j.length=0,N=0;ae.length;)ae.pop()();for(let i=0;i<I.length;i+=1){const a=I[i];M.has(a)||(M.add(a),a())}I.length=0}while(j.length);for(;oe.length;)oe.pop()();T=!1,M.clear(),q(e)}function xe(e){if(e.fragment!==null){e.update(),H(e.before_update);const i=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,i),e.after_update.forEach(B)}}const R=new Set;let ke;function se(e,i){e&&e.i&&(R.delete(e),e.i(i))}function we(e,i,a,n){if(e&&e.o){if(R.has(e))return;R.add(e),ke.c.push(()=>{R.delete(e),n&&(a&&e.d(1),n())}),e.o(i)}}function ye(e){e&&e.c()}function le(e,i,a,n){const{fragment:o,on_mount:s,on_destroy:l,after_update:m}=e.$$;o&&o.m(i,a),n||B(()=>{const b=s.map(te).filter(me);l?l.push(...b):H(b),e.$$.on_mount=[]}),m.forEach(B)}function de(e,i){const a=e.$$;a.fragment!==null&&(H(a.on_destroy),a.fragment&&a.fragment.d(i),a.on_destroy=a.fragment=null,a.ctx=[])}function ze(e,i){e.$$.dirty[0]===-1&&(j.push(e),ve(),e.$$.dirty.fill(0)),e.$$.dirty[i/31|0]|=1<<i%31}function ce(e,i,a,n,o,s,l,m=[-1]){const b=P;q(e);const t=e.$$={fragment:null,ctx:null,props:s,update:Y,not_equal:o,bound:ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(b?b.$$.context:[])),callbacks:ee(),dirty:m,skip_bound:!1,root:i.target||b.$$.root};l&&l(t.root);let u=!1;if(t.ctx=a?a(e,i.props||{},(f,w,...v)=>{const g=v.length?v[0]:w;return t.ctx&&o(t.ctx[f],t.ctx[f]=g)&&(!t.skip_bound&&t.bound[f]&&t.bound[f](g),u&&ze(e,f)),w}):[],t.update(),u=!0,H(t.before_update),t.fragment=n?n(t.ctx):!1,i.target){if(i.hydrate){const f=pe(i.target);t.fragment&&t.fragment.l(f),f.forEach(G)}else t.fragment&&t.fragment.c();i.intro&&se(e.$$.fragment),le(e,i.target,i.anchor,i.customElement),re()}q(b)}class be{$destroy(){de(this,1),this.$destroy=Y}$on(i,a){const n=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return n.push(a),()=>{const o=n.indexOf(a);o!==-1&&n.splice(o,1)}}$set(i){this.$$set&&!ue(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}var je="/vite.svg",Ge="/assets/svelte.a39f39b7.svg";function _e(e){let i,a,n,o,s,l,m,b;return{c(){i=c("button"),a=_(e[0]),n=_(" \u0421\u0447\u0435\u0442\u0447\u0438\u043A: "),o=_(e[1]),s=h(),l=c("div"),l.textContent="\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430",d(l,"class","svelte-lgdh2u")},m(t,u){F(t,i,u),r(i,a),r(i,n),r(i,o),F(t,s,u),F(t,l,u),m||(b=he(i,"click",e[2]),m=!0)},p(t,[u]){u&1&&U(a,t[0]),u&2&&U(o,t[1])},i:Y,o:Y,d(t){t&&G(i),t&&G(s),t&&G(l),m=!1,b()}}}function qe(e,i,a){let n=0;const o=()=>{a(1,n+=1)};let{prp:s}=i;return e.$$set=l=>{"prp"in l&&a(0,s=l.prp)},[s,n,o]}class $e extends be{constructor(i){super(),ce(this,i,qe,_e,ne,{prp:0})}}function Ce(e){let i,a,n,o,s,l,m,b,t,u,f,w,v,g,D,y,k,V,K,$,J,C,Q,S,W,L,x,X,A,z;return x=new $e({props:{prp:e[0]}}),{c(){i=c("main"),a=c("div"),n=_(e[0]),o=h(),s=c("p"),s.textContent="\u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u043A\u0441\u0442 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A. \u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u043A\u0441\u0442 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A",l=h(),m=c("p"),m.textContent="\u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u043A\u0441\u0442 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A. \u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u043A\u0441\u0442 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A",b=h(),t=c("p"),t.textContent="\u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u043A\u0441\u0442 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A. \u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u043A\u0441\u0442 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A",u=h(),f=c("p"),f.textContent="\u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u043A\u0441\u0442 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A. \u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u043A\u0441\u0442 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A",w=h(),v=c("a"),g=c("img"),y=c("a"),k=c("img"),K=h(),$=c("div"),$.textContent="Vite+Svelte 12345",J=h(),C=c("p"),C.textContent="789.567 test 678 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430",Q=h(),S=c("h1"),S.textContent="H1 123 \u041F\u0420\u041E\u0432\u0435\u0440\u043A\u0430",W=h(),L=c("div"),ye(x.$$.fragment),X=h(),A=c("button"),A.textContent="\u041A\u043B\u0430\u0432\u0438\u0448\u0430",d(s,"class","one svelte-1ranftg"),d(m,"class","two svelte-1ranftg"),d(t,"class","three svelte-1ranftg"),d(f,"class","four svelte-1ranftg"),ie(g.src,D=je)||d(g,"src",D),d(g,"class","logo svelte-1ranftg"),d(g,"alt","Vite Logo"),d(v,"href","https://vitejs.dev"),d(v,"target","_blank"),ie(k.src,V=Ge)||d(k,"src",V),d(k,"class","logo svelte svelte-1ranftg"),d(k,"alt","Svelte Logo"),d(y,"href","https://svelte.dev"),d(y,"target","_blank"),d($,"class","card box svelte-1ranftg"),d(C,"class","message svelte-1ranftg"),d(S,"class","svelte-1ranftg"),d(L,"class","card svelte-1ranftg"),d(A,"class","button is-info"),d(i,"class","kv-container  svelte-1ranftg")},m(p,E){F(p,i,E),r(i,a),r(a,n),r(a,o),r(a,s),r(a,l),r(a,m),r(a,b),r(a,t),r(a,u),r(a,f),r(a,w),r(a,v),r(v,g),r(a,y),r(y,k),r(i,K),r(i,$),r(i,J),r(i,C),r(i,Q),r(i,S),r(i,W),r(i,L),le(x,L,null),r(i,X),r(i,A),z=!0},p(p,[E]){(!z||E&1)&&U(n,p[0]);const Z={};E&1&&(Z.prp=p[0]),x.$set(Z)},i(p){z||(se(x.$$.fragment,p),z=!0)},o(p){we(x.$$.fragment,p),z=!1},d(p){p&&G(i),de(x)}}}function Se(e,i,a){let{prp:n}=i;return e.$$set=o=>{"prp"in o&&a(0,n=o.prp)},[n]}class Le extends be{constructor(i){super(),ce(this,i,Se,Ce,ne,{prp:0})}}new Le({target:document.querySelector("section div"),props:{prp:"qwerty"}});
