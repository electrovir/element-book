var cs=Object.defineProperty;var us=(e,t,r)=>t in e?cs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var qt=(e,t,r)=>(us(e,typeof t!="symbol"?t+"":t,r),r),Gt=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var me=(e,t,r)=>(Gt(e,t,"read from private field"),r?r.call(e):t.get(e)),Re=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Jt=(e,t,r,n)=>(Gt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var ut=(e,t,r)=>(Gt(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function ge(e,t){return e.controlType===t}var _;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(_||(_={}));const Ro=Symbol("any-type"),ds={[_.Checkbox]:!1,[_.Color]:"",[_.Dropdown]:0,[_.Hidden]:Ro,[_.Number]:0,[_.Text]:""};function hs(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=ds[o.controlType];a!==Ro&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function fs(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function No(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Dt(r).trim()).join(`
`))}function Dt(e){return e?e instanceof Error?e.message:It(e,"message")?String(e.message):String(e):""}function ps(e){return e instanceof Error?e:new Error(Dt(e))}function Bo(e){return!!e}function fn(e){return!!e&&typeof e=="object"}function ms(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const gs=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function It(e,t){return e?gs.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Lo(e,t){return e&&t.every(r=>It(e,r))}function wr(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function bs(e){return Array.isArray(e)?"array":typeof e}function jt(e,t){return bs(e)===t}function pn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const mn="Failed to compare objects using JSON.stringify";function gn(e,t,r){return pn({source:e,errorHandler(n){if(r)return"";throw n}})===pn({source:t,errorHandler(n){if(r)return"";throw n}})}function De(e,t,r={}){try{return e===t?!0:fn(e)&&fn(t)?gn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>De(e[o],t[o])):!1:gn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=ps(n);throw o.message.startsWith(mn)||(o.message=`${mn}: ${o.message}`),o}}function vs(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ys(e){return wr(e).filter(t=>isNaN(Number(t)))}function $s(e){return ys(e).map(r=>e[r])}function ws(e,t){return $s(t).includes(e)}function Ct(e,t){let r=!1;const n=wr(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(wr(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Cs(e){const t=Vr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Vr(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Vr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function bn(e,t){try{return zo(e,t),!0}catch{return!1}}function zo(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}var N;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(N||(N={}));function Yr(e,t){const r=kt(e.title);return e.parent?[...Yr(e.parent,!1),kt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function kt(e){return fs(e).toLowerCase().replaceAll(/\s/g,"-")}function ks({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Se(e){const t={...e,entryType:N.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:N.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Bo)};r.add(n.title),t.elementExamples[kt(o.title)]=o}}),t}var G;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(G||(G={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},et=e=>(...t)=>({_$litDirective$:e,values:t});let _e=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kt;const xt=window,xe=xt.trustedTypes,vn=xe?xe.createPolicy("lit-html",{createHTML:e=>e}):void 0,Et="$lit$",ee=`lit$${(Math.random()+"").slice(9)}$`,Zr="?"+ee,xs=`<${Zr}>`,he=document,Ve=()=>he.createComment(""),Ye=e=>e===null||typeof e!="object"&&typeof e!="function",Oo=Array.isArray,Ho=e=>Oo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Qt=`[ 	
\f\r]`,Ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yn=/-->/g,$n=/>/g,ie=RegExp(`>|${Qt}(?:([^\\s"'>=/]+)(${Qt}*=${Qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wn=/'/g,Cn=/"/g,Do=/^(?:script|style|textarea|title)$/i,Es=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ss=Es(1),W=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),kn=new WeakMap,ce=he.createTreeWalker(he,129,null,!1),Io=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=Ne;for(let l=0;l<r;l++){const c=e[l];let d,u,h=-1,p=0;for(;p<c.length&&(s.lastIndex=p,u=s.exec(c),u!==null);)p=s.lastIndex,s===Ne?u[1]==="!--"?s=yn:u[1]!==void 0?s=$n:u[2]!==void 0?(Do.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=ie):u[3]!==void 0&&(s=ie):s===ie?u[0]===">"?(s=o??Ne,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?ie:u[3]==='"'?Cn:wn):s===Cn||s===wn?s=ie:s===yn||s===$n?s=Ne:(s=ie,o=void 0);const f=s===ie&&e[l+1].startsWith("/>")?" ":"";a+=s===Ne?c+xs:h>=0?(n.push(d),c.slice(0,h)+Et+c.slice(h)+ee+f):c+ee+(h===-2?(n.push(void 0),l):f)}const i=a+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[vn!==void 0?vn.createHTML(i):i,n]};class Ze{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,d]=Io(t,r);if(this.el=Ze.createElement(c,n),ce.currentNode=this.el.content,r===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=ce.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(Et)||h.startsWith(ee)){const p=d[s++];if(u.push(h),p!==void 0){const f=o.getAttribute(p.toLowerCase()+Et).split(ee),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:a,name:m[2],strings:f,ctor:m[1]==="."?Fo:m[1]==="?"?Uo:m[1]==="@"?Vo:tt})}else l.push({type:6,index:a})}for(const h of u)o.removeAttribute(h)}if(Do.test(o.tagName)){const u=o.textContent.split(ee),h=u.length-1;if(h>0){o.textContent=xe?xe.emptyScript:"";for(let p=0;p<h;p++)o.append(u[p],Ve()),ce.nextNode(),l.push({type:2,index:++a});o.append(u[h],Ve())}}}else if(o.nodeType===8)if(o.data===Zr)l.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(ee,u+1))!==-1;)l.push({type:7,index:a}),u+=ee.length-1}a++}}static createElement(t,r){const n=he.createElement("template");return n.innerHTML=t,n}}function fe(e,t,r=e,n){var o,a,s,i;if(t===W)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Ye(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=fe(e,l._$AS(e,t.values),l,n)),t}let jo=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:he).importNode(n,!0);ce.currentNode=a;let s=ce.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let d;c.type===2?d=new Me(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new Yo(s,this,t)),this._$AV.push(d),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=ce.nextNode(),i++)}return ce.currentNode=he,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class Me{constructor(t,r,n,o){var a;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=fe(this,t,r),Ye(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==W&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ho(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&Ye(this._$AH)?this._$AA.nextSibling.data=t:this.$(he.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ze.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new jo(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=kn.get(t.strings);return r===void 0&&kn.set(t.strings,r=new Ze(t)),r}T(t){Oo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Me(this.k(Ve()),this.k(Ve()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class tt{constructor(t,r,n,o,a){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=fe(this,t,r,0),s=!Ye(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=fe(this,i[n+l],r,l),c===W&&(c=this._$AH[l]),s||(s=!Ye(c)||c!==this._$AH[l]),c===M?t=M:t!==M&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Fo extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const _s=xe?xe.emptyScript:"";class Uo extends tt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,_s):this.element.removeAttribute(this.name)}}class Vo extends tt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=fe(this,t,r,0))!==null&&n!==void 0?n:M)===W)return;const o=this._$AH,a=t===M&&o!==M||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==M&&(o===M||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Yo{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){fe(this,t)}}const Ms={O:Et,P:ee,A:Zr,C:1,M:Io,L:jo,D:Ho,R:fe,I:Me,V:tt,H:Uo,N:Vo,U:Fo,F:Yo},xn=xt.litHtmlPolyfillSupport;xn==null||xn(Ze,Me),((Kt=xt.litHtmlVersions)!==null&&Kt!==void 0?Kt:xt.litHtmlVersions=[]).push("2.7.4");const Ts=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Me(t.insertBefore(Ve(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:As}=Ms,En=()=>document.createComment(""),Be=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(En(),a),i=o.insertBefore(En(),a);r=new As(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const d=c.nextSibling;o.insertBefore(c,a),c=d}}}return r},le=(e,t,r=e)=>(e._$AI(t,r),e),Ps={},Rs=(e,t=Ps)=>e._$AH=t,Ns=e=>e._$AH,er=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=et(class extends _e{constructor(e){var t;if(super(e),e.type!==Ft.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Bs=et(class extends _e{constructor(e){if(super(e),e.type!==Ft.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=Ns(e),{values:s,keys:i}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,h=0,p=a.length-1,f=0,m=s.length-1;for(;h<=p&&f<=m;)if(a[h]===null)h++;else if(a[p]===null)p--;else if(l[h]===i[f])c[f]=le(a[h],s[f]),h++,f++;else if(l[p]===i[m])c[m]=le(a[p],s[m]),p--,m--;else if(l[h]===i[m])c[m]=le(a[h],s[m]),Be(e,c[m+1],a[h]),h++,m--;else if(l[p]===i[f])c[f]=le(a[p],s[f]),Be(e,a[h],a[p]),p--,f++;else if(d===void 0&&(d=Sn(i,f,m),u=Sn(l,h,p)),d.has(l[h]))if(d.has(l[p])){const v=u.get(i[f]),k=v!==void 0?a[v]:null;if(k===null){const A=Be(e,a[h]);le(A,s[f]),c[f]=A}else c[f]=le(k,s[f]),Be(e,a[h],k),a[v]=null;f++}else er(a[p]),p--;else er(a[h]),h++;for(;f<=m;){const v=Be(e,c[m+1]);le(v,s[f]),c[f++]=v}for(;h<=p;){const v=a[h++];v!==null&&er(v)}return this.ht=i,Rs(e,c),W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Cr=class extends _e{constructor(t){if(super(t),this.et=M,t.type!==Ft.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||t==null)return this.ft=void 0,this.et=t;if(t===W)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Cr.directiveName="unsafeHTML",Cr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _n=class extends Cr{};_n.directiveName="unsafeSVG",_n.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ls(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=window,Wr=yt.ShadowRoot&&(yt.ShadyCSS===void 0||yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xr=Symbol(),Mn=new WeakMap;let Wo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Xr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Wr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Mn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Mn.set(r,t))}return t}toString(){return this.cssText}};const Y=e=>new Wo(typeof e=="string"?e:e+"",void 0,Xr),Ie=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new Wo(r,e,Xr)},zs=(e,t)=>{Wr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=yt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Tn=Wr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Y(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tr;const St=window,An=St.trustedTypes,Os=An?An.emptyScript:"",Pn=St.reactiveElementPolyfillSupport,kr={toAttribute(e,t){switch(t){case Boolean:e=e?Os:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Xo=(e,t)=>t!==e&&(t==t||e==e),rr={attribute:!0,type:String,converter:kr,reflect:!1,hasChanged:Xo},xr="finalized";class $e extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=rr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||rr}static finalize(){if(this.hasOwnProperty(xr))return!1;this[xr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Tn(o))}else t!==void 0&&r.push(Tn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return zs(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=rr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:kr).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:kr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Xo)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}$e[xr]=!0,$e.elementProperties=new Map,$e.elementStyles=[],$e.shadowRootOptions={mode:"open"},Pn==null||Pn({ReactiveElement:$e}),((tr=St.reactiveElementVersions)!==null&&tr!==void 0?tr:St.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nr,or;class je extends $e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ts(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return W}}je.finalized=!0,je._$litElement$=!0,(nr=globalThis.litElementHydrateSupport)===null||nr===void 0||nr.call(globalThis,{LitElement:je});const Rn=globalThis.litElementPolyfillSupport;Rn==null||Rn({LitElement:je});((or=globalThis.litElementVersions)!==null&&or!==void 0?or:globalThis.litElementVersions=[]).push("3.3.2");var Hs=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(k){if(k!==void 0&&typeof k!="function")throw new TypeError("Function expected");return k}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,h=!1,p=r.length-1;p>=0;p--){var f={};for(var m in n)f[m]=m==="access"?{}:n[m];for(var m in n.access)f.access[m]=n.access[m];f.addInitializer=function(k){if(h)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(k||null))};var v=(0,r[p])(i==="accessor"?{get:d.get,set:d.set}:d[l],f);if(i==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(u=s(v.get))&&(d.get=u),(u=s(v.set))&&(d.set=u),(u=s(v.init))&&o.push(u)}else(u=s(v))&&(i==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),h=!0},Ds=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Is=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function js(){function e(t,r){return t}return e}let qo=(()=>{let e=[js()],t,r=[],n;return n=class extends je{},Is(n,"DeclarativeElement"),Hs(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,Ds(n,r),n})();const Fs={capitalizeFirstLetter:!1};function Us(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Vs(e,t){return t.capitalizeFirstLetter?Us(e):e}function Ys(e,t=Fs){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Vs(n,t)}function Zs(e){return e?e instanceof Error?e.message:rt(e,"message")?String(e.message):String(e):""}function Ws(e){return e instanceof Error?e:new Error(Zs(e))}const Xs=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function rt(e,t){return e?Xs.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function qs(e,t){return e&&t.every(r=>rt(e,r))}function pe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Go(e,t){let r=!1;const n=pe(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(pe(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Nn(e){return e!==e.toUpperCase()}function Gs(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=Nn(s)||Nn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Js=["january","february","march","april","may","june","july","august","september","october","november","december"];Js.map(e=>e.slice(0,3));function Ks(e){return!!e&&typeof e=="object"}function Bn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Qs(e){return Array.isArray(e)?"array":typeof e}function ei(e,t){return Qs(e)===t}function ti(e,t){let r=!1;const n=Bn(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Bn(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function se(e){if(Ks(e))return ti(e,(r,n)=>{if(!ei(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Gs(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?Y(r):r.startsWith("-")?Ie`-${Y(r)}`:Ie`--${Y(r)}`;return{name:s,value:Ie`var(${s}, ${Y(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${se.name}' function.`)}function ri({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ni=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},oi=(e,t,r)=>{t.constructor.createProperty(r,e)};function Jo(e){return(t,r)=>r!==void 0?oi(e,t,r):ni(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ar;((ar=window.HTMLSlotElement)===null||ar===void 0?void 0:ar.prototype.assignedElements)!=null;const Er=Symbol("this-is-an-element-vir-declarative-element"),qr=Symbol("key for ignoring inputs not having been set yet"),ai={[qr]:!0,allowPolymorphicState:!1};function Ko(e,t){const r=e.instanceState;pe(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&pe(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Qo(e)}function Qo(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function ea(e,t){return Sr(e,t),e.element}function si(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Sr(e,t){const r=si(e),n=r?`: found in ${r}`:"";if(e.type!==Ft.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function E(e,t){return t?Ln(e,t):Ln(void 0,e)}const Ln=et(class extends _e{constructor(e){super(e),this.element=ea(e,"assign")}render(e,t){return ii(e,this.element,t),W}});function ii(e,t,r){Ko(t,r)}function ta(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof qo?!0:ta(r)}function zn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class li extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Gr(){return e=>{var t;return t=class extends li{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function We(){return Gr()}function ci(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Gr()(r);return t[r]=n,t},{}):{}}const On="_is_element_vir_observable_property_handler_instance",Hn="_is_element_vir_observable_property_handler_creator";function ui(e){return rt(e,Hn)&&e[Hn]===!0}function di(e){return rt(e,On)&&e[On]===!0}function hi(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Dn(e,t){const r=e;function n(s){t?hi(s,e,e.tagName):Jo()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=e.observablePropertyHandlerMap[i];function d(u){s[i]=u,r[i]=u}return ui(l)&&(l=l.init()),di(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),e.observablePropertyHandlerMap[i]=l):c?c.setValue(l):d(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function fi(e){return e?Go(e,t=>t):{}}function pi({hostClassNames:e,cssVars:t}){return{hostClasses:Go(e,(r,n)=>({name:Y(n),selector:Y(`:host(.${n})`)})),cssVars:t}}function mi({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&pe(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function gi(e,t){function r(o){pe(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var bi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Ut(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...ai,...e.options},n=ci(e.events),o=fi(e.hostClasses);e.hostClasses&&zn(e.tagName,e.hostClasses),e.cssVars&&zn(e.tagName,e.cssVars);const a=e.cssVars?se(e.cssVars):{},s=typeof e.styles=="function"?e.styles(pi({hostClassNames:o,cssVars:a})):e.styles||Ie``,i=e.renderCallback,l=(t=class extends qo{createRenderParams(){return gi(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Qo(this)}render(){try{ta(this)&&!this.haveInputsBeenSet&&!r[qr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${E.name}" directive on it. If no inputs are intended, use "${Ut.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(c);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return mi({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=Ws(c);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){Ko(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Dn(this,!1),this.instanceState=Dn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const c=e.stateInitStatic||{};pe(c).forEach(u=>{Jo()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},bi(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[Er]:{value:!0,writable:!1},name:{value:Ys(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function ra(){return e=>Ut({...e,options:{[qr]:!1,...e.options}})}function O(e,t){return vi(e,t)}const vi=et(class extends _e{constructor(e){super(e),this.element=ea(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),W}}),sr="onResize",na=et(class extends _e{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Sr(e,sr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${sr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Sr(e,sr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Ee(e,t,r){return Ls(e,()=>t,()=>r)}function oa(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),ra()(r(n))),defineElementNoInputs:n=>(t(n),Ut(r(n)))}}function yi(e,t){return e.filter((r,n)=>!t.includes(n))}function aa(e){return e.filter(t=>qs(t,["tagName",Er])&&!!t.tagName&&!!t[Er])}const sa=new WeakMap;function $i(e,t){var o;const r=aa(t);return(o=ia(sa,[e,...r]).value)==null?void 0:o.template}function wi(e,t,r){const n=aa(t);return ca(sa,[e,...n],r)}function ia(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=la(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ia(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function la(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function ca(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=la(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),ca(l,t,r,n+1)}function ua(e,t,r){return{name:e,check:t,transform:r}}const Ci=new WeakMap;function da(e,t,r){const n=$i(e,t),o=n??r();if(!n){const s=wi(e,t,o);if(s.result)Ci.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=yi(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function ha(e,t,r,n){const o=[],a=[],s=[];return e.forEach((l,c)=>{var v;const d=o.length-1,u=o[d],h=c-1,p=t[h];let f;n&&n(l),typeof u=="string"&&(f=(v=r.find(k=>k.check(u,l,p)))==null?void 0:v.transform,f&&(o[d]=u+f(p)+l,s.push(h))),f||o.push(l);const m=e.raw[c];f?a[d]=a[d]+f(p)+m:a.push(m)}),{templateStrings:Object.assign([],o,{raw:a}),valueIndexDeletions:s}}function fa(e){return rt(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const ki=[ua("tag name css selector interpolation",(e,t,r)=>fa(r),e=>e.tagName)];function xi(e,t){return ha(e,t,ki)}function w(e,...t){const r=da(e,t,()=>xi(e,t));return Ie(r.strings,...r.values)}const Ei=[ua("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=fa(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function Si(e){}function _i(e){return ha(e.strings,e.values,Ei,Si)}function g(e,...t){const r=Ss(e,...t),n=da(e,t,()=>_i(r));return{...r,strings:n.strings,values:n.values}}function Mi(e,t){return It(e,"entryType")&&e.entryType===t}const Ti={[N.ElementExample]:()=>[],[N.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...hs(e.controls,e.title)].filter(Bo),[N.Root]:()=>[]},_t="_isBookTreeNode",pa=new Map;function Ai(e){return pa.get(e)}function Pi(e,t){vs(pa,e,()=>t)}function Ce(e,t){return!!(ma(e)&&e.entry.entryType===t)}function ma(e){return!!(Lo(e,[_t,"entry"])&&e[_t])}function Ri(e,t){return{[_t]:!0,entry:{entryType:N.Root,title:e||"Everything",parent:void 0,errors:[],descriptionParagraphs:t},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Ni({entries:e,everythingTitle:t,everythingDescriptionParagraphs:r,debug:n}){const o=Ai(e);if(o)return o;const a=Ri(t,r);e.forEach(l=>Jr({tree:a,newEntry:l,debug:n,manuallyAdded:!0}));const s=ga(a),i={tree:a,flattenedNodes:s};return Pi(e,i),n&&console.info("element-book tree:",a),i}function Bi(e,t,r){if(!t.parent)return e;const n=_r(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Jr({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=_r(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Yr(t,!1)}`);return o}function Jr({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Ti[t.entryType](t);t.errors.push(...o);const a=Bi(e,t,r),s=kt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[_t]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,Mi(t,N.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Jr({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function _r(e,t){const r=ma(e)?e.fullUrlBreadcrumbs.slice(0,-1):Yr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function ga(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>ga(o));return[e,...r].flat()}function Li(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function Kr(e,t){return Qr(e,t,void 0)}function Qr(e,t,r){const n=t[0];if(!n)return{};const o=Li(e,n,r);if(!o)return{};const a=t.slice(1);return!a.length&&r&&(o.controls=r),{...o.controls,...Qr(o.children,a,r)}}function zi(e,t,r){const n=ms(e);return Qr(n,t,r),n}function ba(e){return Ct(e.children,(r,n)=>Ce(n,N.Page)?{children:ba(n),controls:Ct(n.entry.controls,(o,a)=>a.initValue)}:{children:{},controls:{}})}async function Oi(e=1){const t=Vr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const Hi=globalThis.crypto;function Di(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Hi.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function Ii(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{zo(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function Le(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function ji({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const Fi=Di(32);function Mr(e){return e.join(Fi)}function va(e){if(!e.length)return[];const t=Mr(e),r=va(e.slice(0,-1));return[t,...r]}const Ui=["error","errors"];function Vi(e){return Ui.includes(e)}function Yi({flattenedNodes:e,searchQuery:t}){const r={};return e.forEach(n=>{const o=n.entry.errors.length&&Vi(t);if(ji({searchIn:[n.entry.title,...n.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o)va(n.fullUrlBreadcrumbs).forEach(i=>r[i]=!0);else{const s=Mr(n.fullUrlBreadcrumbs);r[s]=!1}}),e.filter(n=>{const o=Mr(n.fullUrlBreadcrumbs),a=r[o];if(!jt(a,"boolean"))throw new Error(`Failed to find '${n.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var B;(function(e){e.Search="search",e.Book="book"})(B||(B={}));function ya(e){return e[0]===B.Book?"":e[1]?decodeURIComponent(e[1]):""}const Xe={hash:void 0,paths:[B.Book],search:void 0},Zi=0;function Wi(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Zi)}class nt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class In extends nt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const qe="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Xi=globalThis.history.pushState;function jn(...e){const t=Xi.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(qe)),t}const qi=globalThis.history.replaceState;function Fn(...e){const t=qi.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(qe)),t}function Gi(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===jn)throw new In("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Fn)throw new In("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=jn,globalThis.history.replaceState=Fn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(qe))})}}function Ji(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Ki(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Qi(e){const r=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?Ji(new URLSearchParams(globalThis.location.search)):void 0,a=globalThis.location.hash||void 0;return{paths:r,search:o,hash:a}}class el extends nt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function $a(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Un=6;function Vn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Un)throw new el(`Route sanitization depth has exceed the max of ${Un} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if($a(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class ir extends nt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function tl(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new ir(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new ir(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new ir(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function rl(e,t,r,n=!1){const o=wa(e,t,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function wa(e,t,r=""){var l;if(!r&&t!=null)throw new nt("Route base regexp was defined but routeBase string was not provided.");const n=nl(t)?`/${r}`:"",o=e.search?Ki(e.search).toString():"",a=o?`?${o}`:"",s=(l=e.hash)!=null&&l.startsWith("#")?"":"#",i=e.hash?`${s}${e.hash}`:"";return`${n}/${e.paths.join("/")}${a}${i}`}function nl(e){return!!(e&&globalThis.location.pathname.match(e))}function ol(e={}){var s;tl(e),Gi();const t=(s=e.routeBase)==null?void 0:s.replace(/\/+$/,""),r=t?new RegExp(`^\\/${e.routeBase}`):void 0;let n=!1;const o=()=>Vn(a),a={listeners:new Set,initParams:e,sanitizeFullRoute:i=>{const l={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(l):l},setRoutes:(i,l=!1,c=!1)=>{const d=a.getCurrentRawRoutes(),u={...d,...i},h=a.sanitizeFullRoute(u);if(!(!c&&$a(d,h)))return rl(h,r,t,l)},createRoutesUrl:i=>wa(i,r,t),getCurrentRawRoutes:()=>Qi(r),removeAllRouteListeners(){a.listeners.forEach(i=>a.removeRouteListener(i))},addRouteListener:(i,l)=>{if(e.maxListenerCount&&a.listeners.size>=e.maxListenerCount)throw new nt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return a.listeners.add(l),n||(globalThis.addEventListener(qe,o),n=!0),i&&Vn(a,l),l},hasRouteListener:i=>a.listeners.has(i),removeRouteListener:i=>{const l=a.listeners.delete(i);return a.listeners.size||(globalThis.removeEventListener(qe,o),n=!1),l},sanitizationDepth:0};return a}function al(e){return ol({routeBase:e,routeSanitizer(t){return{paths:sl(t.paths),hash:void 0,search:void 0}}})}function sl(e){const t=e[0];if(ws(t,B)){if(t===B.Book)return[B.Book,...e.slice(1)];if(t===B.Search)return e[1]?[t,e[1]]:[B.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Xe.paths}const y=se({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),il={nav:{hover:{background:y["element-book-nav-hover-background-color"],foreground:y["element-book-nav-hover-foreground-color"]},active:{background:y["element-book-nav-active-background-color"],foreground:y["element-book-nav-active-foreground-color"]},selected:{background:y["element-book-nav-selected-background-color"],foreground:y["element-book-nav-selected-foreground-color"]}},accent:{icon:y["element-book-accent-icon-color"]},page:{background:y["element-book-page-background-color"],backgroundFaint1:y["element-book-page-background-faint-level-1-color"],backgroundFaint2:y["element-book-page-background-faint-level-2-color"],foreground:y["element-book-page-foreground-color"],foregroundFaint1:y["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:y["element-book-page-foreground-faint-level-2-color"]}};function ll(e,t){Ca(e,t,il)}function Tr(e){return It(e,"_$cssResult$")}function Yn(e){return Lo(e,["name","value","default"])&&jt(e.default,"string")&&Tr(e.name)&&Tr(e.value)}function Ca(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Tr(o)){if(!Yn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);ri({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Yn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ca(e,o,a)}})}function T(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function ot(e){return te(e)==="string"}function te(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Mt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function ka(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function xa(e){return e[e.length-1]}function Tt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Ea(e,t,r){return(r-e)/(t-e)}function en(e,t,r){return Tt(t[0],t[1],Ea(e[0],e[1],r))}function Sa(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var cl=Object.freeze({__proto__:null,isString:ot,type:te,toPrecision:Mt,parseFunction:ka,last:xa,interpolate:Tt,interpolateInv:Ea,mapRange:en,parseCoordGrammar:Sa,multiplyMatrices:T});class ul{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const re=new ul;var J={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Z={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ar(e){return Array.isArray(e)?e:Z[e]}function At(e,t,r,n={}){if(e=Ar(e),t=Ar(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(re.run("chromatic-adaptation-start",o),o.M||(o.W1===Z.D65&&o.W2===Z.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Z.D50&&o.W2===Z.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),re.run("chromatic-adaptation-end",o),o.M)return T(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const dl=75e-6;var Qe,Pr,ke,Ht,_a;const V=class{constructor(t){Re(this,Qe);Re(this,Ht);Re(this,ke,void 0);var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?V.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ar(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Jt(this,ke,ut(this,Ht,_a).call(this).reverse()),re.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=dl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=ut(this,Qe,Pr).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=ut(this,Qe,Pr).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=V.get(t),this===t)return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=me(this,ke),o=me(t,ke),a,s;for(let i=0;i<n.length&&n[i]===o[i];i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=V.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(V.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof V)return t;if(te(t)==="string"){let o=V.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return V.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=te(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=V.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=te(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=V.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===s||((l=d.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...d};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let b=V;Qe=new WeakSet,Pr=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=Sa(t.coords);let r=Object.entries(this.coords).map(([n,o],a)=>{let s=t.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=en(i,l,a)),a=Mt(a,o),c&&(a+=c),a})}return t},ke=new WeakMap,Ht=new WeakSet,_a=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},qt(b,"registry",{}),qt(b,"DEFAULT_FORMAT",{type:"functions",name:"color"});var I=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class z extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=I),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=T(t.toXYZ_M,r);return this.white!==this.base.white&&(n=At(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=At(this.base.white,this.white,r),T(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ma(e){var r,n,o,a,s;let t={str:(r=String(e))==null?void 0:r.trim()};if(re.run("parse-start",t),t.color)return t.color;if(t.parsed=ka(t.str),t.parsed){let i=t.parsed.name;if(i==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let u of b.all){let h=u.getFormat("color");if(h&&(l===h.id||(n=h.ids)!=null&&n.includes(l))){let p=Object.keys(u.coords).length,f=Array(p).fill(0);return f.forEach((m,v)=>f[v]=t.parsed.args[v]||0),{spaceId:u.id,coords:f,alpha:c}}}let d="";if(l in b.registry){let u=(s=(a=(o=b.registry[l].formats)==null?void 0:o.functions)==null?void 0:a.color)==null?void 0:s.id;u&&(d=`Did you mean color(${u})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of b.all){let c=l.getFormat(i);if(c&&c.type==="function"){let d=1;(c.lastAlpha||xa(t.parsed.args).alpha)&&(d=t.parsed.args.pop());let u=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([h,p],f)=>{var x;let m=c.coordGrammar[f],v=(x=u[f])==null?void 0:x.type;if(m=m.find(S=>S==v),!m){let S=p.name||h;throw new TypeError(`${v} not allowed for ${S} in ${i}()`)}let k=m.range;v==="<percentage>"&&(k||(k=[0,1]));let A=p.range||p.refRange;k&&A&&(u[f]=en(k,A,u[f]))}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let i of b.all)for(let l in i.formats){let c=i.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let d=c.parse(t.str);if(d)return d.alpha??(d.alpha=1),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function $(e){if(!e)throw new TypeError("Empty color reference");ot(e)&&(e=Ma(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function at(e,t){return t=b.get(t),t.from(e)}function j(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return at(e,r)[n]}function Ta(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function ne(e,t,r){if(e=$(e),arguments.length===2&&te(arguments[1])==="object"){let n=arguments[1];for(let o in n)ne(e,o,n[o])}else{typeof r=="function"&&(r=r(j(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=at(e,n);a[o]=r,Ta(e,n,a)}return e}var tn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:I,fromBase:e=>At(I.white,"D50",e),toBase:e=>At("D50",I.white,e),formats:{color:{}}});const hl=216/24389,Zn=24/116,dt=24389/27;let lr=Z.D50;var H=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:lr,base:tn,fromBase(e){let r=e.map((n,o)=>n/lr[o]).map(n=>n>hl?Math.cbrt(n):(dt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Zn?Math.pow(t[0],3):(116*t[0]-16)/dt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/dt,t[2]>Zn?Math.pow(t[2],3):(116*t[2]-16)/dt].map((n,o)=>n*lr[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Vt(e){return(e%360+360)%360}function fl(e,t){if(e==="raw")return t;let[r,n]=t.map(Vt),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Ge=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:H,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Vt(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Wn=25**7,Pt=Math.PI,Xn=180/Pt,be=Pt/180;function Rr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=H.from(e),l=Ge.from(H,[a,s,i])[1],[c,d,u]=H.from(t),h=Ge.from(H,[c,d,u])[1];l<0&&(l=0),h<0&&(h=0);let f=((l+h)/2)**7,m=.5*(1-Math.sqrt(f/(f+Wn))),v=(1+m)*s,k=(1+m)*d,A=Math.sqrt(v**2+i**2),x=Math.sqrt(k**2+u**2),S=v===0&&i===0?0:Math.atan2(i,v),K=k===0&&u===0?0:Math.atan2(u,k);S<0&&(S+=2*Pt),K<0&&(K+=2*Pt),S*=Xn,K*=Xn;let it=c-a,lt=x-A,X=K-S,Te=S+K,sn=Math.abs(X),Ae;A*x===0?Ae=0:sn<=180?Ae=X:X>180?Ae=X-360:X<-180?Ae=X+360:console.log("the unthinkable has happened");let ln=2*Math.sqrt(x*A)*Math.sin(Ae*be/2),os=(a+c)/2,Xt=(A+x)/2,cn=Math.pow(Xt,7),Q;A*x===0?Q=Te:sn<=180?Q=Te/2:Te<360?Q=(Te+360)/2:Q=(Te-360)/2;let un=(os-50)**2,as=1+.015*un/Math.sqrt(20+un),dn=1+.045*Xt,Pe=1;Pe-=.17*Math.cos((Q-30)*be),Pe+=.24*Math.cos(2*Q*be),Pe+=.32*Math.cos((3*Q+6)*be),Pe-=.2*Math.cos((4*Q-63)*be);let hn=1+.015*Xt*Pe,ss=30*Math.exp(-1*((Q-275)/25)**2),is=2*Math.sqrt(cn/(cn+Wn)),ls=-1*Math.sin(2*ss*be)*is,ct=(it/(r*as))**2;return ct+=(lt/(n*dn))**2,ct+=(ln/(o*hn))**2,ct+=ls*(lt/(n*dn))*(ln/(o*hn)),Math.sqrt(ct)}const pl=75e-6;function Fe(e,t=e.space,{epsilon:r=pl}={}){e=$(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Je(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function oe(e,{method:t=J.gamut_mapping,space:r=e.space}={}){if(ot(arguments[1])&&(r=arguments[1]),r=b.get(r),Fe(e,r,{epsilon:0}))return e;let n=D(e,r);if(t!=="clip"&&!Fe(e,r)){let o=oe(Je(n),{method:"clip",space:r});if(Rr(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=D(n,s),d=(a.range||a.refRange)[0],u=.01,h=d,p=j(l,i);for(;p-h>u;){let f=Je(l);f=oe(f,{space:r,method:"clip"}),Rr(l,f)-2<u?h=j(l,i):p=j(l,i),ne(l,i,(h+p)/2)}n=D(l,r)}else n=o}if(t==="clip"||!Fe(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=D(n,e.space)),e.coords=n.coords,e}oe.returns="color";function D(e,t,{inGamut:r}={}){e=$(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=oe(o)),o}D.returns="color";function Rt(e,{precision:t=J.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=$(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!Fe(e)&&(i=oe(Je(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(p=>Mt(p,t)));let d=[...i];if(c==="color"){let p=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(p)}let u=e.alpha;t!==null&&(u=Mt(u,t));let h=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";a=`${c}(${d.join(r.commas?", ":" ")}${h})`}return a}const ml=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],gl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Yt=new z({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:ml,fromXYZ_M:gl,formats:{color:{}}});const ht=1.09929682680944,qn=.018053968510807;var Aa=new z({id:"rec2020",name:"REC.2020",base:Yt,toBase(e){return e.map(function(t){return t<qn*4.5?t/4.5:Math.pow((t+ht-1)/ht,1/.45)})},fromBase(e){return e.map(function(t){return t>=qn?ht*Math.pow(t,.45)-(ht-1):4.5*t})},formats:{color:{}}});const bl=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],vl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Pa=new z({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:bl,fromXYZ_M:vl});const yl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],$l=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ra=new z({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:yl,fromXYZ_M:$l,formats:{color:{}}}),Gn={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Jn=Array(3).fill("<percentage> | <number>[0, 255]"),Kn=Array(3).fill("<number>[0, 255]");var Ke=new z({id:"srgb",name:"sRGB",base:Ra,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Jn},rgb_number:{name:"rgb",commas:!0,coords:Kn,noAlpha:!0},color:{},rgba:{coords:Jn,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Kn},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Gn.black,t.alpha=0):t.coords=Gn[e],t.coords)return t}}}}),Na=new z({id:"p3",name:"P3",base:Pa,fromBase:Ke.fromBase,toBase:Ke.toBase,formats:{color:{id:"display-p3"}}});J.display_space=Ke;if(typeof CSS<"u"&&CSS.supports)for(let e of[H,Aa,Na]){let t=e.getMinCoords(),n=Rt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){J.display_space=e;break}}function wl(e,{space:t=J.display_space,...r}={}){let n=Rt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!J.display_space)n=new String(n),n.color=e;else{let o=D(e,t);n=new String(Rt(o,r)),n.color=o}return n}function Ba(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Cl(e,t){return e=$(e),t=$(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ae(e){return j(e,[I,"y"])}function La(e,t){ne(e,[I,"y"],t)}function kl(e){Object.defineProperty(e.prototype,"luminance",{get(){return ae(this)},set(t){La(this,t)}})}var xl=Object.freeze({__proto__:null,getLuminance:ae,setLuminance:La,register:kl});function El(e,t){e=$(e),t=$(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Sl=.56,_l=.57,Ml=.62,Tl=.65,Qn=.022,Al=1.414,Pl=.1,Rl=5e-4,Nl=1.14,eo=.027,Bl=1.14;function to(e){return e>=Qn?e:e+(Qn-e)**Al}function ve(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Ll(e,t){t=$(t),e=$(e);let r,n,o,a,s,i;t=D(t,"srgb"),[a,s,i]=t.coords;let l=ve(a)*.2126729+ve(s)*.7151522+ve(i)*.072175;e=D(e,"srgb"),[a,s,i]=e.coords;let c=ve(a)*.2126729+ve(s)*.7151522+ve(i)*.072175,d=to(l),u=to(c),h=u>d;return Math.abs(u-d)<Rl?n=0:h?(r=u**Sl-d**_l,n=r*Nl):(r=u**Tl-d**Ml,n=r*Bl),Math.abs(n)<Pl?o=0:n>0?o=n-eo:o=n+eo,o*100}function zl(e,t){e=$(e),t=$(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Ol=5e4;function Hl(e,t){e=$(e),t=$(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);return n>r&&([r,n]=[n,r]),n===0?Ol:(r-n)/n}function Dl(e,t){e=$(e),t=$(t);let r=j(e,[H,"l"]),n=j(t,[H,"l"]);return Math.abs(r-n)}const Il=216/24389,ro=24/116,ft=24389/27;let cr=Z.D65;var Nr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:cr,base:I,fromBase(e){let r=e.map((n,o)=>n/cr[o]).map(n=>n>Il?Math.cbrt(n):(ft*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ro?Math.pow(t[0],3):(116*t[0]-16)/ft,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ft,t[2]>ro?Math.pow(t[2],3):(116*t[2]-16)/ft].map((n,o)=>n*cr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const ur=Math.pow(5,.5)*.5+.5;function jl(e,t){e=$(e),t=$(t);let r=j(e,[Nr,"l"]),n=j(t,[Nr,"l"]),o=Math.abs(Math.pow(r,ur)-Math.pow(n,ur)),a=Math.pow(o,1/ur)*Math.SQRT2-40;return a<7.5?0:a}var $t=Object.freeze({__proto__:null,contrastWCAG21:El,contrastAPCA:Ll,contrastMichelson:zl,contrastWeber:Hl,contrastLstar:Dl,contrastDeltaPhi:jl});function Fl(e,t,r={}){ot(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys($t).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=$(e),t=$(t);for(let a in $t)if("contrast"+n.toLowerCase()===a.toLowerCase())return $t[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function za(e){let[t,r,n]=at(e,I),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Oa(e){let[t,r,n]=at(e,I),o=t+r+n;return[t/o,r/o]}function Ul(e){Object.defineProperty(e.prototype,"uv",{get(){return za(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Oa(this)}})}var Vl=Object.freeze({__proto__:null,uv:za,xy:Oa,register:Ul});function Yl(e,t){return Ba(e,t,"lab")}const Zl=Math.PI,no=Zl/180;function Wl(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=H.from(e),[,i,l]=Ge.from(H,[o,a,s]),[c,d,u]=H.from(t),h=Ge.from(H,[c,d,u])[1];i<0&&(i=0),h<0&&(h=0);let p=o-c,f=i-h,m=a-d,v=s-u,k=m**2+v**2-f**2,A=.511;o>=16&&(A=.040975*o/(1+.01765*o));let x=.0638*i/(1+.0131*i)+.638,S;Number.isNaN(l)&&(l=0),l>=164&&l<=345?S=.56+Math.abs(.2*Math.cos((l+168)*no)):S=.36+Math.abs(.4*Math.cos((l+35)*no));let K=Math.pow(i,4),it=Math.sqrt(K/(K+1900)),lt=x*(it*S+1-it),X=(p/(r*A))**2;return X+=(f/(n*x))**2,X+=k/lt**2,Math.sqrt(X)}const oo=203;var rn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:I,fromBase(e){return e.map(t=>Math.max(t*oo,0))},toBase(e){return e.map(t=>Math.max(t/oo,0))}});const pt=1.15,mt=.66,ao=2610/2**14,Xl=2**14/2610,so=3424/2**12,io=2413/2**7,lo=2392/2**7,ql=1.7*2523/2**5,co=2**5/(1.7*2523),gt=-.56,dr=16295499532821565e-27,Gl=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Jl=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Kl=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Ql=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ha=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:rn,fromBase(e){let[t,r,n]=e,o=pt*t-(pt-1)*n,a=mt*r-(mt-1)*t,i=T(Gl,[o,a,n]).map(function(h){let p=so+io*(h/1e4)**ao,f=1+lo*(h/1e4)**ao;return(p/f)**ql}),[l,c,d]=T(Kl,i);return[(1+gt)*l/(1+gt*l)-dr,c,d]},toBase(e){let[t,r,n]=e,o=(t+dr)/(1+gt-gt*(t+dr)),s=T(Ql,[o,r,n]).map(function(h){let p=so-h**co,f=lo*h**co-io;return 1e4*(p/f)**Xl}),[i,l,c]=T(Jl,s),d=(i+(pt-1)*c)/pt,u=(l+(mt-1)*d)/mt;return[d,u,c]},formats:{color:{}}}),Br=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ha,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Vt(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function ec(e,t){let[r,n,o]=Br.from(e),[a,s,i]=Br.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let d=o-i,u=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const Da=3424/4096,Ia=2413/128,ja=2392/128,uo=2610/16384,tc=2523/32,rc=16384/2610,ho=32/2523,nc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],oc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],ac=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],sc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Lr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:rn,fromBase(e){let t=T(nc,e);return ic(t)},toBase(e){let t=lc(e);return T(sc,t)},formats:{color:{}}});function ic(e){let t=e.map(function(r){let n=Da+Ia*(r/1e4)**uo,o=1+ja*(r/1e4)**uo;return(n/o)**tc});return T(oc,t)}function lc(e){return T(ac,e).map(function(n){let o=Math.max(n**ho-Da,0),a=Ia-ja*n**ho;return 1e4*(o/a)**rc})}function cc(e,t){let[r,n,o]=Lr.from(e),[a,s,i]=Lr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const uc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],dc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],hc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],fc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Nt=new b({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:I,fromBase(e){let r=T(uc,e).map(n=>Math.cbrt(n));return T(hc,r)},toBase(e){let r=T(fc,e).map(n=>n**3);return T(dc,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function pc(e,t){let[r,n,o]=Nt.from(e),[a,s,i]=Nt.from(t),l=r-a,c=n-s,d=o-i;return Math.sqrt(l**2+c**2+d**2)}var zr=Object.freeze({__proto__:null,deltaE76:Yl,deltaECMC:Wl,deltaE2000:Rr,deltaEJz:ec,deltaEITP:cc,deltaEOK:pc});function He(e,t,r={}){ot(r)&&(r={method:r});let{method:n=J.deltaE,...o}=r;e=$(e),t=$(t);for(let a in zr)if("deltae"+n.toLowerCase()===a.toLowerCase())return zr[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function mc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ne(e,n,o=>o*(1+t))}function gc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ne(e,n,o=>o*(1-t))}var bc=Object.freeze({__proto__:null,lighten:mc,darken:gc});function Fa(e,t,r=.5,n={}){[e,t]=[$(e),$(t)],te(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return st(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function Ua(e,t,r={}){let n;nn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[$(e),$(t)],n=st(e,t,l));let c=He(e,t),d=o>0?Math.max(s,Math.ceil(c/o)+1):s,u=[];if(i!==void 0&&(d=Math.min(d,i)),d===1)u=[{p:.5,color:n(.5)}];else{let h=1/(d-1);u=Array.from({length:d},(p,f)=>{let m=f*h;return{p:m,color:n(m)}})}if(o>0){let h=u.reduce((p,f,m)=>{if(m===0)return 0;let v=He(f.color,u[m-1].color,a);return Math.max(p,v)},0);for(;h>o;){h=0;for(let p=1;p<u.length&&u.length<i;p++){let f=u[p-1],m=u[p],v=(m.p+f.p)/2,k=n(v);h=Math.max(h,He(k,f.color),He(k,m.color)),u.splice(p,0,{p:v,color:n(v)}),p++}}}return u=u.map(h=>h.color),u}function st(e,t,r={}){if(nn(e)){let[l,c]=[e,t];return st(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=$(e),t=$(t),e=Je(e),t=Je(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[J.interpolationSpace]||e.space,o=o?b.get(o):n,e=D(e,n),t=D(t,n),e=oe(e),t=oe(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[j(e,c),j(t,c)];[d,u]=fl(l,[d,u]),ne(e,c,d),ne(t,c,u)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((h,p)=>{let f=t.coords[p];return Tt(h,f,l)}),d=Tt(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return s&&(u.coords=u.coords.map(h=>h/d)),o!==n&&(u=D(u,o)),u},{rangeArgs:i})}function nn(e){return te(e)==="function"&&!!e.rangeArgs}J.interpolationSpace="lab";function vc(e){e.defineFunction("mix",Fa,{returns:"color"}),e.defineFunction("range",st,{returns:"function<color>"}),e.defineFunction("steps",Ua,{returns:"array<color>"})}var yc=Object.freeze({__proto__:null,mix:Fa,steps:Ua,range:st,isRange:nn,register:vc}),Va=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ke,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ya=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Va,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),$c=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ya,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const wc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Cc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Za=new z({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:wc,fromXYZ_M:Cc}),kc=new z({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Za,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const xc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Ec=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Wa=new z({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:tn,toXYZ_M:xc,fromXYZ_M:Ec});const Sc=1/512,_c=16/512;var Mc=new z({id:"prophoto",name:"ProPhoto",base:Wa,toBase(e){return e.map(t=>t<_c?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Sc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Tc=new b({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Nt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Vt(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const fo=203,po=2610/2**14,Ac=2**14/2610,Pc=2523/2**5,mo=2**5/2523,go=3424/2**12,bo=2413/2**7,vo=2392/2**7;var Rc=new z({id:"rec2100pq",name:"REC.2100-PQ",base:Yt,toBase(e){return e.map(function(t){return(Math.max(t**mo-go,0)/(bo-vo*t**mo))**Ac*1e4/fo})},fromBase(e){return e.map(function(t){let r=Math.max(t*fo/1e4,0),n=go+bo*r**po,o=1+vo*r**po;return(n/o)**Pc})},formats:{color:{id:"rec2100-pq"}}});const yo=.17883277,$o=.28466892,wo=.55991073,hr=3.7743;var Nc=new z({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Yt,toBase(e){return e.map(function(t){return t<=.5?t**2/3*hr:Math.exp((t-wo)/yo+$o)/12*hr})},fromBase(e){return e.map(function(t){return t/=hr,t<=1/12?Math.sqrt(3*t):yo*Math.log(12*t-$o)+wo})},formats:{color:{id:"rec2100-hlg"}}});const Xa={};re.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=qa(e.W1,e.W2,e.options.method))});re.add("chromatic-adaptation-end",e=>{e.M||(e.M=qa(e.W1,e.W2,e.options.method))});function Zt({id:e,toCone_M:t,fromCone_M:r}){Xa[e]=arguments[0]}function qa(e,t,r="Bradford"){let n=Xa[r],[o,a,s]=T(n.toCone_M,e),[i,l,c]=T(n.toCone_M,t),d=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],u=T(d,n.toCone_M);return T(n.fromCone_M,u)}Zt({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Zt({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Zt({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Zt({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Z,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Z.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Bc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Lc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ga=new z({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Z.ACES,toXYZ_M:Bc,fromXYZ_M:Lc,formats:{color:{}}});const bt=2**-16,fr=-.35828683,vt=(Math.log2(65504)+9.72)/17.52;var zc=new z({id:"acescc",name:"ACEScc",coords:{r:{range:[fr,vt],name:"Red"},g:{range:[fr,vt],name:"Green"},b:{range:[fr,vt],name:"Blue"}},referred:"scene",base:Ga,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-bt)*2:r<vt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(bt)+9.72)/17.52:t<bt?(Math.log2(bt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Co=Object.freeze({__proto__:null,XYZ_D65:I,XYZ_D50:tn,XYZ_ABS_D65:rn,Lab_D65:Nr,Lab:H,LCH:Ge,sRGB_Linear:Ra,sRGB:Ke,HSL:Va,HWB:$c,HSV:Ya,P3_Linear:Pa,P3:Na,A98RGB_Linear:Za,A98RGB:kc,ProPhoto_Linear:Wa,ProPhoto:Mc,REC_2020_Linear:Yt,REC_2020:Aa,OKLab:Nt,OKLCH:Tc,Jzazbz:Ha,JzCzHz:Br,ICTCP:Lr,REC_2100_PQ:Rc,REC_2100_HLG:Nc,ACEScg:Ga,ACEScc:zc}),ue;const R=class{constructor(...t){Re(this,ue,void 0);let r;t.length===1&&(r=$(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Jt(this,ue,b.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in me(this,ue).coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get space(){return me(this,ue)}get spaceId(){return me(this,ue).id}clone(){return new R(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=wl(this,...t);return r.color=new R(r.color),r}static get(t,...r){return t instanceof R?t:new R(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=R.get(l);else if(a==="function<color>"){let c=l;l=function(...d){let u=c(...d);return R.get(u)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>R.get(c)));return l};t in R||(R[t]=s),o&&(R.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)R.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(R);else for(let r in t)R.defineFunction(r,t[r])}};let C=R;ue=new WeakMap;C.defineFunctions({get:j,getAll:at,set:ne,setAll:Ta,to:D,equals:Cl,inGamut:Fe,toGamut:oe,distance:Ba,toString:Rt});Object.assign(C,{util:cl,hooks:re,WHITES:Z,Space:b,spaces:b.registry,parse:Ma,defaults:J});for(let e of Object.keys(Co))b.register(Co[e]);for(let e in b.registry)Or(e,b.registry[e]);re.add("colorspace-init-end",e=>{var t;Or(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Or(r,e)})});function Or(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(C.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}C.extend(zr);C.extend({deltaE:He});C.extend(bc);C.extend({contrast:Fl});C.extend(Vl);C.extend(xl);C.extend(yc);C.extend($t);function Ja(e){return Ct(e,(t,r)=>r instanceof C?Y(r.toString({format:"hex"})):Ja(r))}const Oc="dodgerblue";function Hr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function pr({background:e,foreground:t}){return{background:e??new C(Hr(t)),foreground:t??new C(Hr(e))}}var Bt;(function(e){e.Dark="dark",e.Light="light"})(Bt||(Bt={}));function Hc(e){return e==="black"?"white":"black"}const Dc={black:{foregroundFaint1:new C("#ccc"),foregroundFaint2:new C("#eee")},white:{foregroundFaint1:new C("#ccc"),foregroundFaint2:new C("#eee")}},Ic={black:{backgroundFaint1:new C("#666"),backgroundFaint2:new C("#444")},white:{backgroundFaint1:new C("#ccc"),backgroundFaint2:new C("#fafafa")}};function ko({themeColor:e=Oc,themeStyle:t=Bt.Light}={}){const r=new C(e),n=new C(t===Bt.Dark?"black":"white"),o=Hr(n),a=new C(o),s={nav:{hover:pr({background:r.clone().set({"hsl.l":93})}),active:pr({background:r.clone().set({"hsl.l":90})}),selected:pr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Ic[Hc(o)],foreground:a,...Dc[o]}};return Ja(s)}const Lt=Gr()("element-book-change-route"),xo="vira-",{defineElement:Wt,defineElementNoInputs:ru}=oa({assertInputs:e=>{if(!e.tagName.startsWith(xo))throw new Error(`Tag name should start with '${xo}' but got '${e.tagName}'`)}}),Ka=w`
    pointer-events: none;
    opacity: 0.3;
`,Ue=se({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function jc(e){return`${e}px`}const zt=se({"vira-form-input-border-radius":"8px"}),Ot=se({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":w`calc(${zt["vira-form-input-border-radius"].value} + 4px)`});function Qa({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=Y(jc(n+r+t));return w`
        ${Y(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Ot["vira-focus-outline-color"].value};
            border-radius: ${Ot["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const we=w`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,es=w`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Dr=se({"vira-icon-color":"currentColor"}),Fc=se({"vira-icon-stroke-color":Dr["vira-icon-color"].value,"vira-icon-fill-color":Dr["vira-icon-color"].value}),wt={...Dr,...Fc},P=Wt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>w`
        :host {
            display: inline-block;
            color: ${wt["vira-icon-color"].value};
            fill: ${wt["vira-icon-fill-color"].value};
            stroke: ${wt["vira-icon-stroke-color"].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Ir;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Ir||(Ir={}));Wt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Ir.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>w`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${es};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Ot["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Ka};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${we};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${zt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Ue["vira-interaction-animation-duration"].value},
                background-color
                    ${Ue["vira-interaction-animation-duration"].value},
                border-color ${Ue["vira-interaction-animation-duration"].value};
        }

        ${Qa({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${P} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?g`
                  <${P}
                      ${E(P,{icon:e.icon})}
                  ></${P}>
              `:"",r=e.text?g`
                  <span class="text-template">${e.text}</span>
              `:"";return g`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var jr;(function(e){e.Header="header"})(jr||(jr={}));Wt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>w`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${we};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Ue["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:We()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?w`
                  height: ${e.contentHeight}px;
              `:w`
                  height: 0;
              `;return g`
            <button
                class="header-wrapper"
                ${O("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${jr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${na(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Fr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Fr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function ts({value:e,allowed:t,blocked:r}){const n=t?Fr({input:e,matcher:t}):!0,o=r?Fr({input:e,matcher:r}):!1;return n&&!o}function Eo(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(ts({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}Wt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:We(),inputBlocked:We()},styles:({hostClasses:e,cssVars:t})=>w`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ot["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ka};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${we};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${es};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${we};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${zt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Ue["vira-interaction-animation-duration"].value};
            }

            label {
                ${we};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${zt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Qa({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${P} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${we};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Eo({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?g`
                  <${P} ${E(P,{icon:e.icon})}></${P}>
              `:"",i=e.fitText?w`
                  width: ${r.forcedInputWidth}px;
              `:"";return g`
            <label>
                ${s}
                ${Ee(!!e.fitText,g`
                        <span
                            class="size-span"
                            ${na(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${Zo({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${O("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=a;let h=c.value??"";if(d)if(d.length===1)ts({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs})||(h=u,t(new o.inputBlocked(d)));else{const{filtered:p,blocked:f}=Eo({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs});h=p,t(new o.inputBlocked(f))}c.value!==h&&(c.value=h),u!==h&&t(new o.valueChange(h))})}
                    placeholder=${e.placeholder}
                />
                ${Ee(!!e.suffix,g`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function on({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Uc=on({name:"Element16Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="1"
                vector-effect="non-scaling-stroke"
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
            />
        </svg>
    `});on({name:"Element24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const Vc=on({name:"Options24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${wt["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),{defineElement:U,defineElementNoInputs:nu}=oa(),L=U()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>w`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return g`
            <a
                href=${r}
                ${O("click",a=>{(!e.router||Wi(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Lt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),q=U()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>w`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${y["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${y["element-book-nav-hover-background-color"].value};
            color: ${y["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${y["element-book-nav-active-background-color"].value};
            color: ${y["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${L.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${y["element-book-nav-selected-background-color"].value};
            color: ${y["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${P} {
            display: inline-flex;
            color: ${y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{const n=w`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length};
            `;return g`
                <li style=${n}>
                    <${L}
                        ${E(L,{router:e.router,route:{paths:[B.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Zo({"title-row":!0,selected:e.selectedPath?De(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Ee(Ce(r,N.ElementExample),g`
                                    <${P}
                                        ${E(P,{icon:Uc})}
                                    ></${P}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${L}>
                </li>
            `});return g`
            <slot name=${G.NavHeader}></slot>
            <ul>
                ${t}
            </ul>
        `}});async function Yc(e){await Oi(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Ii(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const F=U()({tagName:"book-error",styles:w`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e}){return(jt(e.message,"array")?e.message:[e.message]).map(r=>g`
                    <p>${r}</p>
                `)}}),mr=U()({tagName:"book-breadcrumbs",styles:w`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),i=a?"":g`
                      <span class="spacer">&gt;</span>
                  `;return g`
                <${L}
                    ${E(L,{route:{hash:void 0,search:void 0,paths:[B.Book,...s]},router:e.router})}
                >
                    ${r}
                </${L}>
                ${i}
            `}):g`
                &nbsp;
            `}}),gr=U()({tagName:"book-breadcrumbs-bar",styles:w`
        :host {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${y["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${y["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return g`
            ${Ee(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${mr}
                        ${E(mr,{currentRoute:e.currentRoute,router:e.router})}
                    ></${mr}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${O("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Cs(200),n.value===o&&(n.value?t(new Lt({paths:[B.Search,encodeURIComponent(n.value)]})):t(new Lt(Xe)))})}
            />
        `}}),de=U()({tagName:"book-page-controls",events:{controlValueChange:We()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>w`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${P}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===_.Hidden)return"";const s=Zc(e.currentValues[n],o,i=>{const l=jt(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return g`
                    <div class="control-wrapper">
                        ${Ee(a===0,g`
                                <${P}
                                    class="options-icon"
                                    ${E(P,{icon:Vc})}
                                ></${P}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function Zc(e,t,r){return ge(t,_.Hidden)?"":ge(t,_.Checkbox)?g`
            <input
                type="checkbox"
                .value=${e}
                ${O("input",n=>{const o=Le(n,HTMLInputElement);r(o.checked)})}
            />
        `:ge(t,_.Color)?g`
            <input
                type="color"
                .value=${e}
                ${O("input",n=>{const o=Le(n,HTMLInputElement);r(o.value)})}
            />
        `:ge(t,_.Text)?g`
            <input
                type="text"
                .value=${e}
                ${O("input",n=>{const o=Le(n,HTMLInputElement);r(o.value)})}
            />
        `:ge(t,_.Number)?g`
            <input
                type="number"
                .value=${e}
                ${O("input",n=>{const o=Le(n,HTMLInputElement);r(o.value)})}
            />
        `:ge(t,_.Dropdown)?g`
            <select
                .value=${e}
                ${O("input",n=>{const o=Le(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map((n,o)=>g`
                        <option ?selected=${o===e} value=${o}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:g`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const br=U()({tagName:"book-entry-description",styles:w`
        :host {
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${y["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>g`
                <p>${t}</p>
            `)}}),vr=U()({tagName:"book-page-wrapper",styles:w`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${L} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?g`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:g`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[B.Book,...e.pageNode.fullUrlBreadcrumbs],n=No(e.pageNode.entry.errors);return n&&console.error(n),g`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${L}
                        ${E(L,{route:{paths:r,hash:void 0,search:void 0},router:e.router})}
                    >
                        ${t}
                    </${L}>
                    ${n?g`
                              <${F}
                                  ${E(F,{message:n.message})}
                              ></${F}>
                          `:g`
                              <${br}
                                  ${E(br,{descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}
                              ></${br}>
                              <${de}
                                  ${E(de,{config:e.pageNode.entry.controls,currentValues:Kr(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}
                              ></${de}>
                          `}
                </div>
            </div>
        `}}),ze=U()({tagName:"book-element-example-controls",styles:w`
        :host {
            display: flex;
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[B.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${L}
                ${E(L,{route:{paths:t,hash:void 0,search:void 0},router:e.router})}
            >
                ${e.elementExampleNode.entry.title}
            </${L}>
        `}}),So=Symbol("unset-internal-state"),yr=U()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:So},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw No(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===So&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return g`
                ${Ee(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),g`
                <${F}
                    ${E(F,{message:`${t.elementExampleNode.entry.title} failed: ${Dt(n)}`})}
                ></${F}>
            `}},options:{allowPolymorphicState:!0}}),$r=U()({tagName:"book-element-example-wrapper",styles:w`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${ze} {
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${ze} {
            color: ${y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${ze}
                    ${E(ze,e)}
                ></${ze}>
                <${yr}
                    ${E(yr,e)}
                ></${yr}>
            </div>
        `}}),ye=U()({tagName:"book-entry-display",styles:w`
        :host {
            display: flex;
            flex-direction: column;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }
    `,renderCallback:({inputs:e})=>{const t=ya(e.currentRoute.paths),r=Wc({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,currentControls:e.currentControls,originalTree:e.originalTree});return g`
            <${gr}
                ${E(gr,{currentSearch:t,currentRoute:e.currentRoute,router:e.router})}
            ></${gr}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${G.Footer}></slot>
        `}});function rs(e,t,r,n){const o=_r(r,n),a=[];if(o){const s=rs(e,t,o,n);s&&a.push(s)}if(Ce(r,N.Page)&&!e.includes(r)){const s=Kr(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:Ct(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Wc({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o,originalTree:a}){if(!e.length&&n)return[g`
                No results
            `];const s=bn(e,1)?rs(e,o,e[0],a):void 0,i=s&&bn(e,1)?g`
                  <${de}
                      ${E(de,{config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}
                  ></${de}>
              `:"",l=Bs(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Ce(c,N.Page))return g`
                    <${vr}
                        class="block-entry"
                        ${E(vr,{isTopLevel:t,pageNode:c,currentControls:o,router:r})}
                    ></${vr}>
                `;if(Ce(c,N.ElementExample)){const u=Kr(o,c.fullUrlBreadcrumbs.slice(0,-1));return g`
                    <${$r}
                        class="inline-entry"
                        ${E($r,{elementExampleNode:c,currentPageControls:u,router:r})}
                    ></${$r}>
                `}else return Ce(c,N.Root)?g`
                    <h1>${c.entry.title}</h1>
                `:g`
                    <${F}
                        class="block-entry"
                        ${E(F,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${F}>
                `});return[i,l]}function Xc(e,t,r){const n=_o(e,t);if(n.length)return n;r(Xe);const o=_o(e,Xe.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function _o(e,t){return e.filter(r=>ks({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Oe=ra()({tagName:"element-book-app",events:{pathUpdate:We()},stateInitStatic:{currentRoute:Xe,router:void 0,colors:{config:void 0,theme:ko(void 0)},treeBasedCurrentControls:void 0},styles:w`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${y["element-book-page-background-color"].value};
            color: ${y["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            height: 100%;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${ye} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${q} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({host:e}){setTimeout(()=>{Mo(e)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c,d;try{let u=function(x){e.router?e.router.setRoutes(x):n({currentRoute:{...e.currentRoute,...x}}),t.elementBookRoutePaths&&!De(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(x.paths??[]))};var s=u;if(t.elementBookRoutePaths&&!De(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const x=al(t.internalRouterConfig.basePath);n({router:x}),x.addRouteListener(!0,S=>{n({currentRoute:S})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const h={themeColor:t.themeColor};if(!De(h,(c=e.colors)==null?void 0:c.config)){const x=ko(h);n({colors:{config:h,theme:x}}),ll(r,x)}const p=t.debug??!1,f=Ni({entries:t.entries,everythingTitle:t.everythingTitle,everythingDescriptionParagraphs:t.everythingDescriptionParagraphs??[],debug:p});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.trigger!==t.entries)&&n({treeBasedCurrentControls:{trigger:t.entries,currentControls:ba(f.tree)}});const m=ya(e.currentRoute.paths),k=(m?Yi({flattenedNodes:f.flattenedNodes,searchQuery:m}):void 0)??Xc(f.flattenedNodes,e.currentRoute.paths,u),A=(d=e.treeBasedCurrentControls)==null?void 0:d.currentControls;return A?(t.debug&&console.info({currentControls:A}),g`
                <div
                    class="root"
                    ${O(Lt,x=>{const S=r.shadowRoot.querySelector(ye.tagName);if(S?S.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${ye.tagName}' for scrolling.`),u(x.detail),!(r.shadowRoot.querySelector(q.tagName)instanceof q))throw new Error(`Failed to find child '${q.tagName}'`);Mo(r)})}
                    ${O(de.events.controlValueChange,x=>{if(!e.treeBasedCurrentControls)return;const S=zi(A,x.detail.fullUrlBreadcrumbs,x.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:S}})})}
                >
                    <${q}
                        ${E(q,{flattenedNodes:f.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}
                    >
                        <slot
                            name=${G.NavHeader}
                            slot=${G.NavHeader}
                        ></slot>
                    </${q}>
                    <${ye}
                        ${E(ye,{currentRoute:e.currentRoute,currentNodes:k,router:e.router,debug:p,currentControls:A,originalTree:f.tree})}
                    >
                        <slot
                            name=${G.Footer}
                            slot=${G.Footer}
                        ></slot>
                    </${ye}>
                </div>
            `):g`
                    <${F}
                        ${E(F,{message:"Failed to generate page controls."})}
                    ></${F}>
                `}catch(u){return console.error(u),g`
                <p class="error">${Dt(u)}</p>
            `}}});async function Mo(e){const t=e.shadowRoot.querySelector(q.tagName);if(!(t instanceof q))throw new Error(`Failed to find child '${q.tagName}'`);await Yc(t)}const an=Se({title:"Parent Page 1",parent:void 0,controls:{"Parent Control":{controlType:_.Color,initValue:"#33ccff"},"Hidden control":{controlType:_.Hidden,initValue:new RegExp("this can be anything")}}}),Ur=Se({title:"Parent Page 2",parent:void 0}),To=Se({title:"Sub Page 1",parent:Ur});function Ao(e,t){return Se({title:`test ${e}`,parent:t,elementExamplesCallback({defineExample:n}){Array(20).fill(0).forEach((o,a)=>{n({title:`example ${e} ${a}`,renderCallback(){return"element example here"}})})}})}const Po=Se({title:"duplicate error page",parent:an,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:e}){e({title:"example 1",renderCallback(){return"hi"}}),e({title:"example 2",renderCallback(){return"hi"}})}}),qc=Se({title:"test 3",controls:{thing:{initValue:"there",controlType:_.Text},thing2:{initValue:!1,controlType:_.Checkbox},thing3:{initValue:1,controlType:_.Dropdown,options:["hello","hi","yo"]}},parent:an,elementExamplesCallback({defineExample:e}){e({title:"example 3 1",renderCallback(){return"hi"}}),e({title:"example 3 2",styles:w`
                .color-control {
                    width: 20px;
                    height: 20px;
                }
            `,renderCallback({controls:t}){const r=w`
                    background-color: ${Y(t["Parent Control"])};
                `;return g`
                    hello ${t.thing}, ${t.thing2}
                    <div style=${r} class="color-control"></div>
                    selected: ${t.thing3} ${t["Hidden control"]}
                `}}),e({title:"example with error",renderCallback(){return"broken"}}),e({title:"example with error",renderCallback(){return"broken"}})}}),ns=[an,Ao(0,Ur),To,...Array(100).fill(0).map((e,t)=>Ao(t+1,To)),Po,Po,qc,Ur];console.info({entries:ns});Ut({tagName:"vir-app",styles:w`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${Oe} {
            flex-grow: 1;
            overflow: hidden;
            max-width: 100%;
            box-sizing: border-box;
        }

        h1 {
            padding-left: 16px;
            margin: 0;
            margin-bottom: 16px;
        }
    `,stateInitStatic:{themeColor:void 0,paths:["book"]},renderCallback:({state:e,updateState:t})=>g`
            <label>
                Theme color
                <input
                    ${O("input",r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("input element not found for input event");t({themeColor:n.value})})}
                    type="color"
                />
            </label>
            <${Oe}
                ${E(Oe,{entries:ns,themeColor:e.themeColor,internalRouterConfig:{useInternalRouter:!0},everythingTitle:"All",debug:!0})}
                ${O(Oe.events.pathUpdate,r=>{t({paths:r.detail})})}
            >
                <h1 slot=${G.NavHeader}>My Title</h1>
                <footer slot=${G.Footer}>Example Footer</footer>
            </${Oe}>
        `});
