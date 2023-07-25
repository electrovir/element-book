var Ts=Object.defineProperty;var Ms=(e,t,r)=>t in e?Ts(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Qt=(e,t,r)=>(Ms(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Io(e){return!!e}function As(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Uo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>It(r).trim()).join(`
`))}function It(e){return e?e instanceof Error?e.message:Ut(e,"message")?String(e.message):String(e):""}function Ps(e){return e instanceof Error?e:new Error(It(e))}function bn(e){return!!e&&typeof e=="object"}function Rs(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Bs=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ut(e,t){return e?Bs.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Vo(e,t){return e&&t.every(r=>Ut(e,r))}function Ct(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ns(e){return Array.isArray(e)?"array":typeof e}function Vt(e,t){return Ns(e)===t}function vn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const yn="Failed to compare objects using JSON.stringify";function $n(e,t,r){return vn({source:e,errorHandler(n){if(r)return"";throw n}})===vn({source:t,errorHandler(n){if(r)return"";throw n}})}function fe(e,t,r={}){try{return e===t?!0:bn(e)&&bn(t)?$n(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>fe(e[o],t[o])):!1:$n(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Ps(n);throw o.message.startsWith(yn)||(o.message=`${yn}: ${o.message}`),o}}function Ls(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Os(e){return Ct(e).filter(t=>isNaN(Number(t)))}function zs(e){return Os(e).map(r=>e[r])}function js(e,t){return zs(t).includes(e)}function Ds(e,t){return Ct(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Hs(e,t){return Ds(e,r=>!t.includes(r))}function xt(e,t){let r=!1;const n=Ct(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Ct(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Is(e){const t=Fo();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Fo(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Fo.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function wn(e,t){try{return Us(e,t),!0}catch{return!1}}function Us(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Vs(e,t){return Ut(e,"entryType")&&e.entryType===t}var A;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(A||(A={}));function ge(e,t){return e.controlType===t}var _;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(_||(_={}));const Yo=Symbol("any-type"),Fs={[_.Checkbox]:!1,[_.Color]:"",[_.Dropdown]:"",[_.Hidden]:Yo,[_.Number]:0,[_.Text]:""};function Ys(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=Fs[o.controlType];a!==Yo&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Ur(e,t){const r=kt(e.title);return e.parent?[...Ur(e.parent,!1),kt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function kt(e){return As(e).toLowerCase().replaceAll(/\s/g,"-")}function Ws({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Zs(){return e=>_e(e)}function _e(e){const t={...e,entryType:A.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:A.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Io)};r.add(n.title),t.elementExamples[kt(o.title)]=o}}),t}var q;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(q||(q={}));function Wo(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Wo.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function qs(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}async function vr(e=1){const t=Wo();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const Gs=globalThis.crypto;function Xs(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Gs.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function Ks(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{qs(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function Be(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xe=e=>(...t)=>({_$litDirective$:e,values:t});let Te=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var er;const St=window,xe=St.trustedTypes,Cn=xe?xe.createPolicy("lit-html",{createHTML:e=>e}):void 0,Et="$lit$",J=`lit$${(Math.random()+"").slice(9)}$`,Vr="?"+J,Js=`<${Vr}>`,he=document,Ue=()=>he.createComment(""),Ve=e=>e===null||typeof e!="object"&&typeof e!="function",Zo=Array.isArray,qo=e=>Zo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",tr=`[ 	
\f\r]`,Ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xn=/-->/g,kn=/>/g,le=RegExp(`>|${tr}(?:([^\\s"'>=/]+)(${tr}*=${tr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sn=/'/g,En=/"/g,Go=/^(?:script|style|textarea|title)$/i,Qs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ei=Qs(1),W=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),_n=new WeakMap,de=he.createTreeWalker(he,129,null,!1);function Xo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cn!==void 0?Cn.createHTML(t):t}const Ko=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=Ne;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Ne?u[1]==="!--"?s=xn:u[1]!==void 0?s=kn:u[2]!==void 0?(Go.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=le):u[3]!==void 0&&(s=le):s===le?u[0]===">"?(s=o??Ne,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?le:u[3]==='"'?En:Sn):s===En||s===Sn?s=le:s===xn||s===kn?s=Ne:(s=le,o=void 0);const h=s===le&&e[i+1].startsWith("/>")?" ":"";a+=s===Ne?l+Js:d>=0?(n.push(c),l.slice(0,d)+Et+l.slice(d)+J+h):l+J+(d===-2?(n.push(void 0),i):h)}return[Xo(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Fe{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=Ko(t,r);if(this.el=Fe.createElement(c,n),de.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=de.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Et)||f.startsWith(J)){const h=u[s++];if(d.push(f),h!==void 0){const p=o.getAttribute(h.toLowerCase()+Et).split(J),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:m[2],strings:p,ctor:m[1]==="."?Qo:m[1]==="?"?ea:m[1]==="@"?ta:Ke})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(Go.test(o.tagName)){const d=o.textContent.split(J),f=d.length-1;if(f>0){o.textContent=xe?xe.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],Ue()),de.nextNode(),l.push({type:2,index:++a});o.append(d[f],Ue())}}}else if(o.nodeType===8)if(o.data===Vr)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(J,d+1))!==-1;)l.push({type:7,index:a}),d+=J.length-1}a++}}static createElement(t,r){const n=he.createElement("template");return n.innerHTML=t,n}}function pe(e,t,r=e,n){var o,a,s,i;if(t===W)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Ve(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=pe(e,l._$AS(e,t.values),l,n)),t}class Jo{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:he).importNode(n,!0);de.currentNode=a;let s=de.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new Me(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new ra(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=de.nextNode(),i++)}return de.currentNode=he,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Me{constructor(t,r,n,o){var a;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=pe(this,t,r),Ve(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==W&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&Ve(this._$AH)?this._$AA.nextSibling.data=t:this.$(he.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Fe.createElement(Xo(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new Jo(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=_n.get(t.strings);return r===void 0&&_n.set(t.strings,r=new Fe(t)),r}T(t){Zo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Me(this.k(Ue()),this.k(Ue()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Ke{constructor(t,r,n,o,a){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=pe(this,t,r,0),s=!Ve(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=pe(this,i[n+l],r,l),c===W&&(c=this._$AH[l]),s||(s=!Ve(c)||c!==this._$AH[l]),c===T?t=T:t!==T&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Qo extends Ke{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const ti=xe?xe.emptyScript:"";class ea extends Ke{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,ti):this.element.removeAttribute(this.name)}}class ta extends Ke{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=pe(this,t,r,0))!==null&&n!==void 0?n:T)===W)return;const o=this._$AH,a=t===T&&o!==T||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==T&&(o===T||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ra{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){pe(this,t)}}const ri={O:Et,P:J,A:Vr,C:1,M:Ko,L:Jo,D:qo,R:pe,I:Me,V:Ke,H:ea,N:ta,U:Qo,F:ra},Tn=St.litHtmlPolyfillSupport;Tn==null||Tn(Fe,Me),((er=St.litHtmlVersions)!==null&&er!==void 0?er:St.litHtmlVersions=[]).push("2.7.5");const ni=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Me(t.insertBefore(Ue(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:oi}=ri,Mn=()=>document.createComment(""),Le=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(Mn(),a),i=o.insertBefore(Mn(),a);r=new oi(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},ce=(e,t,r=e)=>(e._$AI(t,r),e),ai={},si=(e,t=ai)=>e._$AH=t,ii=e=>e._$AH,rr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const na=Xe(class extends Te{constructor(e){var t;if(super(e),e.type!==Ft.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},li=Xe(class extends Te{constructor(e){if(super(e),e.type!==Ft.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=ii(e),{values:s,keys:i}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,f=0,h=a.length-1,p=0,m=s.length-1;for(;f<=h&&p<=m;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[p])c[p]=ce(a[f],s[p]),f++,p++;else if(l[h]===i[m])c[m]=ce(a[h],s[m]),h--,m--;else if(l[f]===i[m])c[m]=ce(a[f],s[m]),Le(e,c[m+1],a[f]),f++,m--;else if(l[h]===i[p])c[p]=ce(a[h],s[p]),Le(e,a[f],a[h]),h--,p++;else if(u===void 0&&(u=An(i,p,m),d=An(l,f,h)),u.has(l[f]))if(u.has(l[h])){const v=d.get(i[p]),k=v!==void 0?a[v]:null;if(k===null){const S=Le(e,a[f]);ce(S,s[p]),c[p]=S}else c[p]=ce(k,s[p]),Le(e,a[f],k),a[v]=null;p++}else rr(a[h]),h--;else rr(a[f]),f++;for(;p<=m;){const v=Le(e,c[m+1]);ce(v,s[p]),c[p++]=v}for(;f<=h;){const v=a[f++];v!==null&&rr(v)}return this.ht=i,si(e,c),W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yr=class extends Te{constructor(t){if(super(t),this.et=T,t.type!==Ft.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===T||t==null)return this.ft=void 0,this.et=t;if(t===W)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};yr.directiveName="unsafeHTML",yr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pn=class extends yr{};Pn.directiveName="unsafeSVG",Pn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ci(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=window,Fr=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yr=Symbol(),Rn=new WeakMap;let oa=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Yr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Fr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Rn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Rn.set(r,t))}return t}toString(){return this.cssText}};const F=e=>new oa(typeof e=="string"?e:e+"",void 0,Yr),je=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new oa(r,e,Yr)},ui=(e,t)=>{Fr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=gt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Bn=Fr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return F(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nr;const _t=window,Nn=_t.trustedTypes,di=Nn?Nn.emptyScript:"",Ln=_t.reactiveElementPolyfillSupport,$r={toAttribute(e,t){switch(t){case Boolean:e=e?di:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},aa=(e,t)=>t!==e&&(t==t||e==e),or={attribute:!0,type:String,converter:$r,reflect:!1,hasChanged:aa},wr="finalized";class ye extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=or){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||or}static finalize(){if(this.hasOwnProperty(wr))return!1;this[wr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Bn(o))}else t!==void 0&&r.push(Bn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ui(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=or){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:$r).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:$r;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||aa)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}ye[wr]=!0,ye.elementProperties=new Map,ye.elementStyles=[],ye.shadowRootOptions={mode:"open"},Ln==null||Ln({ReactiveElement:ye}),((nr=_t.reactiveElementVersions)!==null&&nr!==void 0?nr:_t.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ar,sr;class De extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ni(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return W}}De.finalized=!0,De._$litElement$=!0,(ar=globalThis.litElementHydrateSupport)===null||ar===void 0||ar.call(globalThis,{LitElement:De});const On=globalThis.litElementPolyfillSupport;On==null||On({LitElement:De});((sr=globalThis.litElementVersions)!==null&&sr!==void 0?sr:globalThis.litElementVersions=[]).push("3.3.2");var fi=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(k){if(k!==void 0&&typeof k!="function")throw new TypeError("Function expected");return k}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var m in n)p[m]=m==="access"?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function(k){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(k||null))};var v=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(d=s(v.get))&&(u.get=d),(d=s(v.set))&&(u.set=d),(d=s(v.init))&&o.unshift(d)}else(d=s(v))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},hi=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},pi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function mi(){function e(t,r){return t}return e}let sa=(()=>{let e=[mi()],t,r=[],n;return n=class extends De{},pi(n,"DeclarativeElement"),fi(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,hi(n,r),n})();function gi(e){return!!e}const bi={capitalizeFirstLetter:!1};function vi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function yi(e,t){return t.capitalizeFirstLetter?vi(e):e}function $i(e,t=bi){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return yi(n,t)}function wi(e){return e?e instanceof Error?e.message:Wr(e,"message")?String(e.message):String(e):""}function Ci(e){return e instanceof Error?e:new Error(wi(e))}function xi(e){return!!e&&typeof e=="object"}const ki=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Wr(e,t){return e?ki.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function me(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ia(e,t){let r=!1;const n=me(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(me(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function zn(e){return e!==e.toUpperCase()}function Si(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=zn(s)||zn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Ei=["january","february","march","april","may","june","july","august","september","october","november","december"];Ei.map(e=>e.slice(0,3));function _i(e){return!!e}function Ti(e){return!!e&&typeof e=="object"}function jn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Mi(e){return Array.isArray(e)?"array":typeof e}function Ai(e,t){return Mi(e)===t}function Pi(e,t){let r=!1;const n=jn(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(jn(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function se(e){if(Ti(e))return Pi(e,(r,n)=>{if(!Ai(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Si(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?F(r):r.startsWith("-")?je`-${F(r)}`:je`--${F(r)}`;return{name:s,value:je`var(${s}, ${F(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${se.name}' function.`)}function Ri({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Ni=(e,t,r)=>{t.constructor.createProperty(r,e)};function la(e){return(t,r)=>r!==void 0?Ni(e,t,r):Bi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ir;((ir=window.HTMLSlotElement)===null||ir===void 0?void 0:ir.prototype.assignedElements)!=null;const Zr=Symbol("key for ignoring inputs not having been set yet"),Li={[Zr]:!0,allowPolymorphicState:!1};function ca(e,t){const r=e.instanceState;me(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&me(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),ua(e)}function ua(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function da(e,t){return Cr(e,t),e.element}function Oi(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Cr(e,t){const r=Oi(e),n=r?`: in ${r}`:"";if(e.type!==Ft.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Je(e,t){return t?Dn(e,t):Dn(void 0,e)}const Dn=Xe(class extends Te{constructor(e){super(e),this.element=da(e,"assign")}render(e,t){return ca(this.element,t),W}});function fa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof sa?!0:fa(r)}function Hn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class zi extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function qr(){return e=>{var t;return t=class extends zi{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function ke(){return qr()}function ji(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=qr()(r);return t[r]=n,t},{}):{}}const Di="_elementVirStateSetup";function Hi(e){return xi(e)?Di in e:!1}function Ii(e,t){return e.includes(t)}function Qe(e){return!!e&&typeof e=="object"}const Ui=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function bt(e,t){return e?Ui.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Tt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function xr(e){return Array.isArray(e)?"array":typeof e}function $e(e,t){return xr(e)===t}function Vi(e,t){let r=!1;const n=Tt(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Tt(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Fi(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return xr(e)===xr(t)&&r}const ha=Symbol("and"),pa=Symbol("or"),ma=Symbol("exact"),ga=Symbol("enum"),Gr=Symbol("unknown"),ba="__vir__shape__definition__key__do__not__use__in__actual__objects";function va(e){return bt(e,ba)}const ya="__vir__shape__specifier__key__do__not__use__in__actual__objects",Yi=[ha,pa,ma,ga,Gr];function Wi(){return Zi([],Gr)}function Yt(e){return et(e,pa)}function Xr(e){return et(e,ha)}function Kr(e){return et(e,ma)}function Jr(e){return et(e,ga)}function Qr(e){return et(e,Gr)}function et(e,t){const r=Wt(e);return!!r&&r.specifierType===t}function Zi(e,t){return{[ya]:!0,specifierType:t,parts:e}}function vt(e,t){const r=Wt(t);if(r){if(Xr(r))return r.parts.every(n=>vt(e,n));if(Yt(r))return r.parts.some(n=>vt(e,n));if(Kr(r))return Qe(e)?vt(e,r.parts[0]):e===r.parts[0];if(Jr(r))return Object.values(r.parts[0]).some(n=>n===e);if(Qr(r))return!0}return Fi(e,t)}function Wt(e){if(Qe(e)&&bt(e,ya)){if(!bt(e,"parts")||!$e(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!bt(e,"specifierType")||!Ii(Yi,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function kr(e){return Sr(e)}function Sr(e){const t=Wt(e);if(t){if(Yt(t)||Kr(t))return Sr(t.parts[0]);if(Xr(t))return t.parts.reduce((r,n)=>Object.assign(r,Sr(n)),{});if(Jr(t))return Object.values(t.parts[0])[0];if(Qr(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return va(e)?kr(e.shape):e instanceof RegExp||$e(e,"array")?e:Qe(e)?Vi(e,(r,n)=>kr(n)):e}function qi(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:kr(e),[ba]:!0}}class V extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Gi(e,t,r={}){try{return Xi(e,t,r),!0}catch{return!1}}function Xi(e,t,r={}){ue(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function $a(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ue(e,t,r,n){if(Qr(t))return!0;if(va(t))return ue(e,t.shape,r,n);const o=$a(r);if(Wt(e))throw new V(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!vt(e,t))throw new V(`Subject does not match shape definition at key ${o}`);if($e(t,"function"))return $e(e,"function");if(Qe(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(Yt(t))l=t.parts.some(c=>{try{const u=ue(e,c,r,{...n,ignoreExtraKeys:!1});return Object.assign(i,u),!0}catch(u){if(u instanceof V)return!1;throw u}});else if(Xr(t))l=t.parts.every(c=>{try{const u=ue(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof V)return!1;throw u}});else if(Kr(t)){const c=ue(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(Jr(t))throw new V(`Cannot compare an enum specifier to an object at ${o}`);if($e(t,"array")&&$e(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return ue(c,f,[...r,u],n),!0}catch(h){if(h instanceof V)return!1;throw h}});return i[u]=d,d});else{const c=Ki({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l)throw new V("no error message");return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new V(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function Ki({keys:e,options:t,shape:r,subject:n}){const o=$a(e),a={};if(Qe(r)){const s=new Set(Tt(n)),i=new Set(Tt(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new V(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=Yt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new V(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];ue(c,u,[...e,l],t),a[l]=!0})}else throw new V(`shape definition at ${o} was not an object.`);return a}const Ji=qi({addListener(){return!1},removeListener(){return!1},value:Wi()});function lr(e){return Gi(e,Ji,{allowExtraKeys:!0})}function Qi(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function In(e,t){const r=e;function n(s){t?Qi(s,e,e.tagName):la()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=Hi(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(p){s[i]=p,r[i]=p}const f=e.observablePropertyListenerMap[i];if(u!==c&&lr(u)&&(f!=null&&f.length)&&u.removeListener(f),lr(c))if(f)c.addListener(f);else{let p=function(){e.requestUpdate()};var h=p;e.observablePropertyListenerMap[i]=p,c.addListener(p)}else lr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function el(e){return e?ia(e,t=>t):{}}function tl({hostClassNames:e,cssVars:t}){return{hostClasses:ia(e,(r,n)=>({name:F(n),selector:F(`:host(.${n})`)})),cssVars:t}}function rl({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&me(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function nl(e,t){function r(o){me(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var ol=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Zt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Li,...e.options},n=ji(e.events),o=el(e.hostClasses);e.hostClasses&&Hn(e.tagName,e.hostClasses),e.cssVars&&Hn(e.tagName,e.cssVars);const a=e.cssVars?se(e.cssVars):{},s=typeof e.styles=="function"?e.styles(tl({hostClassNames:o,cssVars:a})):e.styles||je``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends sa{createRenderParams(){return nl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){ua(this)}render(){try{fa(this)&&!this.haveInputsBeenSet&&!r[Zr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${Je.name}" directive on it. If no inputs are intended, use "${Zt.name}" to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return rl({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Ci(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){ca(this,u)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=In(this,!1),this.instanceState=In(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};me(u).forEach(f=>{la()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},ol(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:$i(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function wa(){return e=>Zt({...e,options:{[Zr]:!1,...e.options}})}function R(e,t){return al(e,t)}const al=Xe(class extends Te{constructor(e){super(e),this.element=da(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),W}}),cr="onResize",Ca=Xe(class extends Te{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Cr(e,cr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${cr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Cr(e,cr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Se(e,t,r){return ci(e,()=>t,()=>r)}function xa(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),wa()(r(n))),defineElementNoInputs:n=>(t(n),Zt(r(n)))}}function sl(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Er(e){return Wr(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function en(e){return Wr(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function ka(e){return e.map(t=>Er(t)?t.definition:t).filter(t=>en(t))}const Sa=new WeakMap;function il(e,t){var o;const r=ka(t);return(o=Ea(Sa,[e,...r]).value)==null?void 0:o.template}function ll(e,t,r){const n=ka(t);return Ta(Sa,[e,...n],r)}function Ea(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=_a(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ea(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function _a(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Ta(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=_a(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Ta(l,t,r,n+1)}const cl=new WeakMap;function Ma(e,t,r){const n=il(e,t),o=n??r();if(!n){const i=ll(e,t,o);if(i.result)cl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=sl(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Aa(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let m,v=[];if(typeof f=="string"&&(m=r(f,c,p),m)){o[d]=f+m.replacement,s.push(h);const S=m.getExtraValues;v=S?S(p):[],v.length&&S?(o[d]+=" ",v.forEach((C,E)=>{E&&o.push(" ")}),i.push(C=>{const E=C[h],P=S(E);return{index:h,values:P}}),o.push(c)):o[d]+=c}m||o.push(c);const k=e.raw[u];m?(a[d]=a[d]+m.replacement+k,v.length&&v.forEach(()=>{a.push("")})):a.push(k)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function ul(...[e,t,r]){if(en(r))return{replacement:r.tagName,getExtraValues:void 0}}function dl(e,t){return Aa(e,t,ul)}function w(e,...t){const r=Ma(e,t,()=>dl(e,t));return je(r.strings,...r.values)}function fl(...[e,t,r]){const n=Er(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=en(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Er(c)?c.inputs:void 0;return[o&&u&&Object.values(u).length?Je(u):void 0].filter(gi)}}}function hl(e){}function pl(e){return Aa(e.strings,e.values,fl,hl)}function g(e,...t){const r=ei(e,...t),n=Ma(e,t,()=>pl(r));return{...r,strings:n.strings,values:n.values}}const ml={[A.ElementExample]:()=>[],[A.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Ys(e.controls,e.title)].filter(Io),[A.Root]:()=>[]},Mt="_isBookTreeNode",Pa=new Map;function gl(e){return Pa.get(e)}function bl(e,t){Ls(Pa,e,()=>t)}function Ce(e,t){return!!(Ra(e)&&e.entry.entryType===t)}function Ra(e){return!!(Vo(e,[Mt,"entry"])&&e[Mt])}function vl(){return{[Mt]:!0,entry:{entryType:A.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function yl({entries:e,debug:t}){const r=gl(e);if(r)return r;const n=vl();e.forEach(s=>tn({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=Ba(n),a={tree:n,flattenedNodes:o};return bl(e,a),t&&console.info("element-book tree:",n),a}function $l(e,t,r){if(!t.parent)return e;const n=_r(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),tn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=_r(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Ur(t,!1)}`);return o}function tn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=ml[t.entryType](t);t.errors.push(...o);const a=$l(e,t,r),s=kt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Mt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,Vs(t,A.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>tn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function _r(e,t){const r=Ra(e)?e.fullUrlBreadcrumbs.slice(0,-1):Ur(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Ba(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ba(o));return[e,...r].flat()}function wl(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function rn(e,t){return nn(e,t,void 0)}function nn(e,t,r){const n=t[0];if(!n)return{};const o=wl(e,n,r);if(!o)return{};const a=t.slice(1);return!a.length&&r&&(o.controls=r),{...o.controls,...nn(o.children,a,r)}}function Cl(e,t,r){const n=Rs(e);return nn(n,t,r),n}function Na(e,t){return xt(e.children,(n,o)=>Ce(o,A.Page)?{children:Na(o,{}),controls:{...t,...xt(o.entry.controls,(a,s)=>s.initValue)}}:{children:{},controls:{}})}function xl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const kl=Xs(32);function yt(e){return e.join(kl)}function La(e){if(!e.length)return[];const t=yt(e),r=La(e.slice(0,-1));return[t,...r]}const Sl=["error","errors"];function El(e){return Sl.includes(e)}function _l({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),yt(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&El(t),s=yt(o.fullUrlBreadcrumbs);if(xl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=La(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=yt(o.fullUrlBreadcrumbs),s=r[a];if(!Vt(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var B;(function(e){e.Search="search",e.Book="book"})(B||(B={}));function Tr(e){return e[0]===B.Book?"":e[1]?decodeURIComponent(e[1]):""}const Ee={hash:void 0,paths:[B.Book],search:void 0},Tl=0;function Oa(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Tl)}class qt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Un extends qt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Ye="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Ml=globalThis.history.pushState;function Vn(...e){const t=Ml.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ye)),t}const Al=globalThis.history.replaceState;function Fn(...e){const t=Al.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ye)),t}function Pl(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Vn)throw new Un("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Fn)throw new Un("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Vn,globalThis.history.replaceState=Fn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ye))})}}function Rl(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Bl(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Nl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),a=globalThis.location.search?Rl(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:a,hash:s}}function za(e){return e.replace(/(?:^\/|\/+$)/g,"")}function ja({routeBase:e,windowPath:t}){if(!e)return"";const r=za(e);if(Da({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?ja({routeBase:n,windowPath:t}):""}function Da({routeBase:e,windowPath:t}){const r=za(e);return r?t.startsWith(`/${r}`):!1}class Ll extends qt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Ha(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Yn=6;function Wn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Yn)throw new Ll(`Route sanitization depth has exceed the max of ${Yn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Ha(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class ur extends qt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Ol(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new ur(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new ur(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new ur(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function zl(e,t,r=!1){const n=Ia(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ia(e,t){var l;const r=Da({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Bl(e.search).toString():"",o=n?`?${n}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",s=e.hash?`${a}${e.hash}`:"";return`/${[r,...e.paths].filter(_i).join("/")}${o}${s}`}function jl(e={}){Ol(e),Pl();const t=e.routeBase?ja({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Wn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Ha(l,u)))return zl(u,t,s)},createRoutesUrl(a){return Ia(a,t)},getCurrentRawRoutes(){return Nl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new qt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(Ye,n),r=!0),a&&Wn(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(Ye,n),r=!1),s},sanitizationDepth:0};return o}function Dl(e){return jl({routeBase:e,routeSanitizer(t){return{paths:Hl(t.paths),hash:void 0,search:void 0}}})}function Hl(e){const t=e[0];if(js(t,B)){if(t===B.Book)return[B.Book,...e.slice(1)];if(t===B.Search)return e[1]?[t,e[1]]:[B.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ee.paths}const $=se({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Il={nav:{hover:{background:$["element-book-nav-hover-background-color"],foreground:$["element-book-nav-hover-foreground-color"]},active:{background:$["element-book-nav-active-background-color"],foreground:$["element-book-nav-active-foreground-color"]},selected:{background:$["element-book-nav-selected-background-color"],foreground:$["element-book-nav-selected-foreground-color"]}},accent:{icon:$["element-book-accent-icon-color"]},page:{background:$["element-book-page-background-color"],backgroundFaint1:$["element-book-page-background-faint-level-1-color"],backgroundFaint2:$["element-book-page-background-faint-level-2-color"],foreground:$["element-book-page-foreground-color"],foregroundFaint1:$["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:$["element-book-page-foreground-faint-level-2-color"]}};function Ul(e,t){Ua(e,t,Il)}function Mr(e){return Ut(e,"_$cssResult$")}function Zn(e){return Vo(e,["name","value","default"])&&Vt(e.default,"string")&&Mr(e.name)&&Mr(e.value)}function Ua(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Mr(o)){if(!Zn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ri({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Zn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ua(e,o,a)}})}function M(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function tt(e){return te(e)==="string"}function te(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function At(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Va(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Fa(e){return e[e.length-1]}function Pt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Ya(e,t,r){return(r-e)/(t-e)}function on(e,t,r){return Pt(t[0],t[1],Ya(e[0],e[1],r))}function Wa(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Vl=Object.freeze({__proto__:null,interpolate:Pt,interpolateInv:Ya,isString:tt,last:Fa,mapRange:on,multiplyMatrices:M,parseCoordGrammar:Wa,parseFunction:Va,toPrecision:At,type:te});class Fl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const re=new Fl;var G={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Y={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ar(e){return Array.isArray(e)?e:Y[e]}function Rt(e,t,r,n={}){if(e=Ar(e),t=Ar(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(re.run("chromatic-adaptation-start",o),o.M||(o.W1===Y.D65&&o.W2===Y.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Y.D50&&o.W2===Y.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),re.run("chromatic-adaptation-end",o),o.M)return M(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Yl=75e-6,O=class O{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?O.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ar(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Wl(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),re.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Yl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=qn(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=qn(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=O.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=O.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(O.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof O)return t;if(te(t)==="string"){let o=O.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return O.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=te(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=O.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=te(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=O.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Qt(O,"registry",{}),Qt(O,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=O;function Wl(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function qn(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Wa(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=on(i,l,a)),a=At(a,o),c&&(a+=c),a})}return e}var H=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class L extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=H),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=M(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Rt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Rt(this.base.white,this.white,r),M(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Za(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(re.run("parse-start",r),r.color)return r.color;if(r.parsed=Va(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((m,v)=>r.parsed.args[v]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Fa(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([p,m],v)=>{var ie;let k=u.coordGrammar[v],S=(ie=f[v])==null?void 0:ie.type,C=k.find(ee=>ee==S);if(!C){let ee=m.name||p;throw new TypeError(`${S} not allowed for ${ee} in ${l}()`)}let E=C.range;S==="<percentage>"&&(E||(E=[0,1]));let P=m.range||m.refRange;return E&&P&&(f[v]=on(E,P,f[v])),C})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function x(e){if(!e)throw new TypeError("Empty color reference");tt(e)&&(e=Za(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function rt(e,t){return t=b.get(t),t.from(e)}function I(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return rt(e,r)[n]}function qa(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function ne(e,t,r){if(e=x(e),arguments.length===2&&te(arguments[1])==="object"){let n=arguments[1];for(let o in n)ne(e,o,n[o])}else{typeof r=="function"&&(r=r(I(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=rt(e,n);a[o]=r,qa(e,n,a)}return e}var an=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:H,fromBase:e=>Rt(H.white,"D50",e),toBase:e=>Rt("D50",H.white,e),formats:{color:{}}});const Zl=216/24389,Gn=24/116,st=24389/27;let dr=Y.D50;var z=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:dr,base:an,fromBase(e){let r=e.map((n,o)=>n/dr[o]).map(n=>n>Zl?Math.cbrt(n):(st*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Gn?Math.pow(t[0],3):(116*t[0]-16)/st,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/st,t[2]>Gn?Math.pow(t[2],3):(116*t[2]-16)/st].map((n,o)=>n*dr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Gt(e){return(e%360+360)%360}function ql(e,t){if(e==="raw")return t;let[r,n]=t.map(Gt),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var We=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:z,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Gt(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Xn=25**7,Bt=Math.PI,Kn=180/Bt,be=Bt/180;function Pr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=z.from(e),l=We.from(z,[a,s,i])[1],[c,u,d]=z.from(t),f=We.from(z,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,m=.5*(1-Math.sqrt(p/(p+Xn))),v=(1+m)*s,k=(1+m)*u,S=Math.sqrt(v**2+i**2),C=Math.sqrt(k**2+d**2),E=v===0&&i===0?0:Math.atan2(i,v),P=k===0&&d===0?0:Math.atan2(d,k);E<0&&(E+=2*Bt),P<0&&(P+=2*Bt),E*=Kn,P*=Kn;let ie=c-a,ee=C-S,Z=P-E,Ae=E+P,dn=Math.abs(Z),Pe;S*C===0?Pe=0:dn<=180?Pe=Z:Z>180?Pe=Z-360:Z<-180?Pe=Z+360:console.log("the unthinkable has happened");let fn=2*Math.sqrt(C*S)*Math.sin(Pe*be/2),xs=(a+c)/2,Jt=(S+C)/2,hn=Math.pow(Jt,7),X;S*C===0?X=Ae:dn<=180?X=Ae/2:Ae<360?X=(Ae+360)/2:X=(Ae-360)/2;let pn=(xs-50)**2,ks=1+.015*pn/Math.sqrt(20+pn),mn=1+.045*Jt,Re=1;Re-=.17*Math.cos((X-30)*be),Re+=.24*Math.cos(2*X*be),Re+=.32*Math.cos((3*X+6)*be),Re-=.2*Math.cos((4*X-63)*be);let gn=1+.015*Jt*Re,Ss=30*Math.exp(-1*((X-275)/25)**2),Es=2*Math.sqrt(hn/(hn+Xn)),_s=-1*Math.sin(2*Ss*be)*Es,at=(ie/(r*ks))**2;return at+=(ee/(n*mn))**2,at+=(fn/(o*gn))**2,at+=_s*(ee/(n*mn))*(fn/(o*gn)),Math.sqrt(at)}const Gl=75e-6;function He(e,t=e.space,{epsilon:r=Gl}={}){e=x(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Ze(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function oe(e,{method:t=G.gamut_mapping,space:r=e.space}={}){if(tt(arguments[1])&&(r=arguments[1]),r=b.get(r),He(e,r,{epsilon:0}))return x(e);let n=D(e,r);if(t!=="clip"&&!He(e,r)){let o=oe(Ze(n),{method:"clip",space:r});if(Pr(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=D(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=I(l,i);for(;h-f>d;){let p=Ze(l);p=oe(p,{space:r,method:"clip"}),Pr(l,p)-2<d?f=I(l,i):h=I(l,i),ne(l,i,(f+h)/2)}n=D(l,r)}else n=o}if(t==="clip"||!He(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=D(n,e.space)),e.coords=n.coords,e}oe.returns="color";function D(e,t,{inGamut:r}={}){e=x(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=oe(o)),o}D.returns="color";function Nt(e,{precision:t=G.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=x(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!He(e)&&(i=oe(Ze(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>At(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=At(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Xl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Kl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Xt=new L({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Xl,fromXYZ_M:Kl,formats:{color:{}}});const it=1.09929682680944,Jn=.018053968510807;var Ga=new L({id:"rec2020",name:"REC.2020",base:Xt,toBase(e){return e.map(function(t){return t<Jn*4.5?t/4.5:Math.pow((t+it-1)/it,1/.45)})},fromBase(e){return e.map(function(t){return t>=Jn?it*Math.pow(t,.45)-(it-1):4.5*t})},formats:{color:{}}});const Jl=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Ql=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Xa=new L({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Jl,fromXYZ_M:Ql});const ec=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],tc=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ka=new L({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:ec,fromXYZ_M:tc,formats:{color:{}}}),Qn={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let eo=Array(3).fill("<percentage> | <number>[0, 255]"),to=Array(3).fill("<number>[0, 255]");var qe=new L({id:"srgb",name:"sRGB",base:Ka,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:eo},rgb_number:{name:"rgb",commas:!0,coords:to,noAlpha:!0},color:{},rgba:{coords:eo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:to},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Qn.black,t.alpha=0):t.coords=Qn[e],t.coords)return t}}}}),Ja=new L({id:"p3",name:"P3",base:Xa,fromBase:qe.fromBase,toBase:qe.toBase,formats:{color:{id:"display-p3"}}});G.display_space=qe;if(typeof CSS<"u"&&CSS.supports)for(let e of[z,Ga,Ja]){let t=e.getMinCoords(),n=Nt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){G.display_space=e;break}}function rc(e,{space:t=G.display_space,...r}={}){let n=Nt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!G.display_space)n=new String(n),n.color=e;else{let o=D(e,t);n=new String(Nt(o,r)),n.color=o}return n}function Qa(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function nc(e,t){return e=x(e),t=x(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ae(e){return I(e,[H,"y"])}function es(e,t){ne(e,[H,"y"],t)}function oc(e){Object.defineProperty(e.prototype,"luminance",{get(){return ae(this)},set(t){es(this,t)}})}var ac=Object.freeze({__proto__:null,getLuminance:ae,register:oc,setLuminance:es});function sc(e,t){e=x(e),t=x(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const ic=.56,lc=.57,cc=.62,uc=.65,ro=.022,dc=1.414,fc=.1,hc=5e-4,pc=1.14,no=.027,mc=1.14;function oo(e){return e>=ro?e:e+(ro-e)**dc}function ve(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function gc(e,t){t=x(t),e=x(e);let r,n,o,a,s,i;t=D(t,"srgb"),[a,s,i]=t.coords;let l=ve(a)*.2126729+ve(s)*.7151522+ve(i)*.072175;e=D(e,"srgb"),[a,s,i]=e.coords;let c=ve(a)*.2126729+ve(s)*.7151522+ve(i)*.072175,u=oo(l),d=oo(c),f=d>u;return Math.abs(d-u)<hc?n=0:f?(r=d**ic-u**lc,n=r*pc):(r=d**uc-u**cc,n=r*mc),Math.abs(n)<fc?o=0:n>0?o=n-no:o=n+no,o*100}function bc(e,t){e=x(e),t=x(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const vc=5e4;function yc(e,t){e=x(e),t=x(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);return n>r&&([r,n]=[n,r]),n===0?vc:(r-n)/n}function $c(e,t){e=x(e),t=x(t);let r=I(e,[z,"l"]),n=I(t,[z,"l"]);return Math.abs(r-n)}const wc=216/24389,ao=24/116,lt=24389/27;let fr=Y.D65;var Rr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:fr,base:H,fromBase(e){let r=e.map((n,o)=>n/fr[o]).map(n=>n>wc?Math.cbrt(n):(lt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ao?Math.pow(t[0],3):(116*t[0]-16)/lt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/lt,t[2]>ao?Math.pow(t[2],3):(116*t[2]-16)/lt].map((n,o)=>n*fr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const hr=Math.pow(5,.5)*.5+.5;function Cc(e,t){e=x(e),t=x(t);let r=I(e,[Rr,"l"]),n=I(t,[Rr,"l"]),o=Math.abs(Math.pow(r,hr)-Math.pow(n,hr)),a=Math.pow(o,1/hr)*Math.SQRT2-40;return a<7.5?0:a}var $t=Object.freeze({__proto__:null,contrastAPCA:gc,contrastDeltaPhi:Cc,contrastLstar:$c,contrastMichelson:bc,contrastWCAG21:sc,contrastWeber:yc});function xc(e,t,r={}){tt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys($t).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=x(e),t=x(t);for(let a in $t)if("contrast"+n.toLowerCase()===a.toLowerCase())return $t[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function ts(e){let[t,r,n]=rt(e,H),o=t+15*r+3*n;return[4*t/o,9*r/o]}function rs(e){let[t,r,n]=rt(e,H),o=t+r+n;return[t/o,r/o]}function kc(e){Object.defineProperty(e.prototype,"uv",{get(){return ts(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return rs(this)}})}var Sc=Object.freeze({__proto__:null,register:kc,uv:ts,xy:rs});function Ec(e,t){return Qa(e,t,"lab")}const _c=Math.PI,so=_c/180;function Tc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=z.from(e),[,i,l]=We.from(z,[o,a,s]),[c,u,d]=z.from(t),f=We.from(z,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,p=i-f,m=a-u,v=s-d,k=m**2+v**2-p**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let C=.0638*i/(1+.0131*i)+.638,E;Number.isNaN(l)&&(l=0),l>=164&&l<=345?E=.56+Math.abs(.2*Math.cos((l+168)*so)):E=.36+Math.abs(.4*Math.cos((l+35)*so));let P=Math.pow(i,4),ie=Math.sqrt(P/(P+1900)),ee=C*(ie*E+1-ie),Z=(h/(r*S))**2;return Z+=(p/(n*C))**2,Z+=k/ee**2,Math.sqrt(Z)}const io=203;var sn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:H,fromBase(e){return e.map(t=>Math.max(t*io,0))},toBase(e){return e.map(t=>Math.max(t/io,0))}});const ct=1.15,ut=.66,lo=2610/2**14,Mc=2**14/2610,co=3424/2**12,uo=2413/2**7,fo=2392/2**7,Ac=1.7*2523/2**5,ho=2**5/(1.7*2523),dt=-.56,pr=16295499532821565e-27,Pc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Rc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Bc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Nc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ns=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:sn,fromBase(e){let[t,r,n]=e,o=ct*t-(ct-1)*n,a=ut*r-(ut-1)*t,i=M(Pc,[o,a,n]).map(function(f){let h=co+uo*(f/1e4)**lo,p=1+fo*(f/1e4)**lo;return(h/p)**Ac}),[l,c,u]=M(Bc,i);return[(1+dt)*l/(1+dt*l)-pr,c,u]},toBase(e){let[t,r,n]=e,o=(t+pr)/(1+dt-dt*(t+pr)),s=M(Nc,[o,r,n]).map(function(f){let h=co-f**ho,p=fo*f**ho-uo;return 1e4*(h/p)**Mc}),[i,l,c]=M(Rc,s),u=(i+(ct-1)*c)/ct,d=(l+(ut-1)*u)/ut;return[u,d,c]},formats:{color:{}}}),Br=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ns,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Gt(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Lc(e,t){let[r,n,o]=Br.from(e),[a,s,i]=Br.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const os=3424/4096,as=2413/128,ss=2392/128,po=2610/16384,Oc=2523/32,zc=16384/2610,mo=32/2523,jc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Dc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Hc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Ic=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Nr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:sn,fromBase(e){let t=M(jc,e);return Uc(t)},toBase(e){let t=Vc(e);return M(Ic,t)},formats:{color:{}}});function Uc(e){let t=e.map(function(r){let n=os+as*(r/1e4)**po,o=1+ss*(r/1e4)**po;return(n/o)**Oc});return M(Dc,t)}function Vc(e){return M(Hc,e).map(function(n){let o=Math.max(n**mo-os,0),a=as-ss*n**mo;return 1e4*(o/a)**zc})}function Fc(e,t){let[r,n,o]=Nr.from(e),[a,s,i]=Nr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Yc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Wc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Zc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],qc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Lt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:H,fromBase(e){let r=M(Yc,e).map(n=>Math.cbrt(n));return M(Zc,r)},toBase(e){let r=M(qc,e).map(n=>n**3);return M(Wc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Gc(e,t){let[r,n,o]=Lt.from(e),[a,s,i]=Lt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Ot={deltaE76:Ec,deltaECMC:Tc,deltaE2000:Pr,deltaEJz:Lc,deltaEITP:Fc,deltaEOK:Gc};function ze(e,t,r={}){tt(r)&&(r={method:r});let{method:n=G.deltaE,...o}=r;e=x(e),t=x(t);for(let a in Ot)if("deltae"+n.toLowerCase()===a.toLowerCase())return Ot[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Xc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ne(e,n,o=>o*(1+t))}function Kc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ne(e,n,o=>o*(1-t))}var Jc=Object.freeze({__proto__:null,darken:Kc,lighten:Xc});function is(e,t,r=.5,n={}){[e,t]=[x(e),x(t)],te(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return nt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function ls(e,t,r={}){let n;ln(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[x(e),x(t)],n=nt(e,t,l));let c=ze(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,p)=>{let m=p*f;return{p:m,color:n(m)}})}if(o>0){let f=d.reduce((h,p,m)=>{if(m===0)return 0;let v=ze(p.color,d[m-1].color,a);return Math.max(h,v)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let p=d[h-1],m=d[h],v=(m.p+p.p)/2,k=n(v);f=Math.max(f,ze(k,p.color),ze(k,m.color)),d.splice(h,0,{p:v,color:n(v)}),h++}}}return d=d.map(f=>f.color),d}function nt(e,t,r={}){if(ln(e)){let[l,c]=[e,t];return nt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=x(e),t=x(t),e=Ze(e),t=Ze(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[G.interpolationSpace]||e.space,o=o?b.get(o):n,e=D(e,n),t=D(t,n),e=oe(e),t=oe(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[I(e,c),I(t,c)];[u,d]=ql(l,[u,d]),ne(e,c,u),ne(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let p=t.coords[h];return Pt(f,p,l)}),u=Pt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=D(d,o)),d},{rangeArgs:i})}function ln(e){return te(e)==="function"&&!!e.rangeArgs}G.interpolationSpace="lab";function Qc(e){e.defineFunction("mix",is,{returns:"color"}),e.defineFunction("range",nt,{returns:"function<color>"}),e.defineFunction("steps",ls,{returns:"array<color>"})}var eu=Object.freeze({__proto__:null,isRange:ln,mix:is,range:nt,register:Qc,steps:ls}),cs=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:qe,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),us=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:cs,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),tu=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:us,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const ru=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],nu=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ds=new L({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:ru,fromXYZ_M:nu}),ou=new L({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ds,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const au=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],su=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var fs=new L({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:an,toXYZ_M:au,fromXYZ_M:su});const iu=1/512,lu=16/512;var cu=new L({id:"prophoto",name:"ProPhoto",base:fs,toBase(e){return e.map(t=>t<lu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=iu?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),uu=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Lt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Gt(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const go=203,bo=2610/2**14,du=2**14/2610,fu=2523/2**5,vo=2**5/2523,yo=3424/2**12,$o=2413/2**7,wo=2392/2**7;var hu=new L({id:"rec2100pq",name:"REC.2100-PQ",base:Xt,toBase(e){return e.map(function(t){return(Math.max(t**vo-yo,0)/($o-wo*t**vo))**du*1e4/go})},fromBase(e){return e.map(function(t){let r=Math.max(t*go/1e4,0),n=yo+$o*r**bo,o=1+wo*r**bo;return(n/o)**fu})},formats:{color:{id:"rec2100-pq"}}});const Co=.17883277,xo=.28466892,ko=.55991073,mr=3.7743;var pu=new L({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Xt,toBase(e){return e.map(function(t){return t<=.5?t**2/3*mr:(Math.exp((t-ko)/Co)+xo)/12*mr})},fromBase(e){return e.map(function(t){return t/=mr,t<=1/12?Math.sqrt(3*t):Co*Math.log(12*t-xo)+ko})},formats:{color:{id:"rec2100-hlg"}}});const hs={};re.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=ps(e.W1,e.W2,e.options.method))});re.add("chromatic-adaptation-end",e=>{e.M||(e.M=ps(e.W1,e.W2,e.options.method))});function Kt({id:e,toCone_M:t,fromCone_M:r}){hs[e]=arguments[0]}function ps(e,t,r="Bradford"){let n=hs[r],[o,a,s]=M(n.toCone_M,e),[i,l,c]=M(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=M(u,n.toCone_M);return M(n.fromCone_M,d)}Kt({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Kt({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Kt({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Kt({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Y,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Y.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const mu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],gu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ms=new L({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Y.ACES,toXYZ_M:mu,fromXYZ_M:gu,formats:{color:{}}});const ft=2**-16,gr=-.35828683,ht=(Math.log2(65504)+9.72)/17.52;var bu=new L({id:"acescc",name:"ACEScc",coords:{r:{range:[gr,ht],name:"Red"},g:{range:[gr,ht],name:"Green"},b:{range:[gr,ht],name:"Blue"}},referred:"scene",base:ms,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-ft)*2:r<ht?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ft)+9.72)/17.52:t<ft?(Math.log2(ft+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),So=Object.freeze({__proto__:null,A98RGB:ou,A98RGB_Linear:ds,ACEScc:bu,ACEScg:ms,HSL:cs,HSV:us,HWB:tu,ICTCP:Nr,JzCzHz:Br,Jzazbz:ns,LCH:We,Lab:z,Lab_D65:Rr,OKLCH:uu,OKLab:Lt,P3:Ja,P3_Linear:Xa,ProPhoto:cu,ProPhoto_Linear:fs,REC_2020:Ga,REC_2020_Linear:Xt,REC_2100_HLG:pu,REC_2100_PQ:hu,XYZ_ABS_D65:sn,XYZ_D50:an,XYZ_D65:H,sRGB:qe,sRGB_Linear:Ka});class y{constructor(...t){let r;t.length===1&&(r=x(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new y(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=rc(this,...t);return r.color=new y(r.color),r}static get(t,...r){return t instanceof y?t:new y(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=y.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return y.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>y.get(c)));return l};t in y||(y[t]=s),o&&(y.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)y.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(y);else for(let r in t)y.defineFunction(r,t[r])}}y.defineFunctions({get:I,getAll:rt,set:ne,setAll:qa,to:D,equals:nc,inGamut:He,toGamut:oe,distance:Qa,toString:Nt});Object.assign(y,{util:Vl,hooks:re,WHITES:Y,Space:b,spaces:b.registry,parse:Za,defaults:G});for(let e of Object.keys(So))b.register(So[e]);for(let e in b.registry)Lr(e,b.registry[e]);re.add("colorspace-init-end",e=>{var t;Lr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Lr(r,e)})});function Lr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(y.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}y.extend(Ot);y.extend({deltaE:ze});Object.assign(y,{deltaEMethods:Ot});y.extend(Jc);y.extend({contrast:xc});y.extend(Sc);y.extend(ac);y.extend(eu);y.extend($t);function gs(e){return xt(e,(t,r)=>r instanceof y?F(r.toString({format:"hex"})):gs(r))}const vu="dodgerblue";function Or(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function br({background:e,foreground:t}){return{background:e??new y(Or(t)),foreground:t??new y(Or(e))}}var zt;(function(e){e.Dark="dark",e.Light="light"})(zt||(zt={}));function yu(e){return e==="black"?"white":"black"}const $u={black:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")},white:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")}},wu={black:{backgroundFaint1:new y("#666"),backgroundFaint2:new y("#444")},white:{backgroundFaint1:new y("#ccc"),backgroundFaint2:new y("#fafafa")}};function Eo({themeColor:e=vu,themeStyle:t=zt.Light}={}){const r=new y(e),n=new y(t===zt.Dark?"black":"white"),o=Or(n),a=new y(o),s={nav:{hover:br({background:r.clone().set({"hsl.l":93})}),active:br({background:r.clone().set({"hsl.l":90})}),selected:br({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...wu[yu(o)],foreground:a,...$u[o]}};return gs(s)}const jt=qr()("element-book-change-route"),_o="vira-",{defineElement:ot,defineElementNoInputs:ju}=xa({assertInputs:e=>{if(!e.tagName.startsWith(_o))throw new Error(`Tag name should start with '${_o}' but got '${e.tagName}'`)}}),bs=w`
    pointer-events: none;
    opacity: 0.3;
`,Ie=se({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Cu(e){return`${e}px`}const Dt=se({"vira-form-input-border-radius":"8px"}),Ht=se({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":w`calc(${Dt["vira-form-input-border-radius"].value} + 4px)`});function vs({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=F(Cu(n+r+t));return w`
        ${F(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Ht["vira-focus-outline-color"].value};
            border-radius: ${Ht["vira-focus-outline-border-radius"].value};
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
`,ys=w`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,zr=se({"vira-icon-color":"currentColor"}),xu=se({"vira-icon-stroke-color":zr["vira-icon-color"].value,"vira-icon-fill-color":zr["vira-icon-color"].value}),wt={...zr,...xu},N=ot()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>w`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var jr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(jr||(jr={}));ot()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===jr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>w`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ys};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Ht["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${bs};
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
            border-radius: ${Dt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Ie["vira-interaction-animation-duration"].value},
                background-color
                    ${Ie["vira-interaction-animation-duration"].value},
                border-color ${Ie["vira-interaction-animation-duration"].value};
        }

        ${vs({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${N} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?g`
                  <${N}
                      ${Je(N,{icon:e.icon})}
                  ></${N}>
              `:"",r=e.text?g`
                  <span class="text-template">${e.text}</span>
              `:"";return g`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Dr;(function(e){e.Header="header"})(Dr||(Dr={}));ot()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>w`
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
            transition: height ${Ie["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:ke()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?w`
                  height: ${e.contentHeight}px;
              `:w`
                  height: 0;
              `;return g`
            <button
                class="header-wrapper"
                ${R("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Dr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Ca(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Hr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Hr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function $s({value:e,allowed:t,blocked:r}){const n=t?Hr({input:e,matcher:t}):!0,o=r?Hr({input:e,matcher:r}):!1;return n&&!o}function To(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>($s({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}ot()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ke(),inputBlocked:ke()},styles:({hostClasses:e,cssVars:t})=>w`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ht["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${bs};
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
                ${ys};
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
                border-radius: ${Dt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Ie["vira-interaction-animation-duration"].value};
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
                border-radius: ${Dt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${vs({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${N} {
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=To({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?g`
                  <${N} ${Je(N,{icon:e.icon})}></${N}>
              `:"",i=e.fitText?w`
                  width: ${r.forcedInputWidth}px;
              `:"";return g`
            <label>
                ${s}
                ${Se(!!e.fitText,g`
                        <span
                            class="size-span"
                            ${Ca(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${na({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${R("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let f=c.value??"";if(u)if(u.length===1)$s({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:h,blocked:p}=To({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=h,t(new o.inputBlocked(p))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${Se(!!e.suffix,g`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});ot()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>w`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,events:{routeChange:ke()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&Oa(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return g`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return g`
                <a href=${s} rel="noopener noreferrer" ${R("click",n)}>
                    <slot></slot>
                </a>
            `}}});function cn({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const ku=cn({name:"Element16Icon",svgTemplate:g`
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
    `});cn({name:"Element24Icon",svgTemplate:g`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const Su=cn({name:"Options24Icon",svgTemplate:g`
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
    `}),Eu=w`
    padding: 0;
    margin: 0;
`;w`
    ${Eu}
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;const{defineElement:U,defineElementNoInputs:Du}=xa(),j=U()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>w`
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
                ${R("click",a=>{(!e.router||Oa(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new jt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function _u(e,t){return e.entry.entryType===A.Root?!1:!!(e.entry.entryType===A.Page||fe(t,e.fullUrlBreadcrumbs.slice(0,-1))||fe(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const K=U()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>w`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${$["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${$["element-book-nav-hover-background-color"].value};
            color: ${$["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${$["element-book-nav-active-background-color"].value};
            color: ${$["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${j.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${$["element-book-nav-selected-background-color"].value};
            color: ${$["element-book-nav-selected-foreground-color"].value};
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

        ${N} {
            display: inline-flex;
            color: ${$["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!_u(r,e.selectedPath))return;const n=w`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return g`
                <li style=${n}>
                    <${j.assign({router:e.router,route:{paths:[B.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${na({"title-row":!0,selected:e.selectedPath?fe(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Se(Ce(r,A.ElementExample),g`
                                    <${N.assign({icon:ku})}></${N}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${j}>
                </li>
            `});return g`
            <${j.assign({route:Ee,router:e.router})}>
                <slot name=${q.NavHeader}>Book</slot>
            </${j}>
            <ul>
                ${t}
            </ul>
        `}});async function Tu(e){await vr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Ks(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Q=U()({tagName:"book-error",styles:w`
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
    `,renderCallback({inputs:e}){return(Vt(e.message,"array")?e.message:[e.message]).map(r=>g`
                    <p>${r}</p>
                `)}}),Mo=U()({tagName:"book-breadcrumbs",styles:w`
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
                <${j.assign({route:{hash:void 0,search:void 0,paths:[B.Book,...s]},router:e.router})}>
                    ${r}
                </${j}>
                ${i}
            `}):g`
                &nbsp;
            `}}),Ao=U()({tagName:"book-breadcrumbs-bar",styles:w`
        :host {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${$["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${$["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return g`
            ${Se(!!e.currentSearch,g`
                    &nbsp;
                `,g`
                    <${Mo.assign({currentRoute:e.currentRoute,router:e.router})}></${Mo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${R("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Is(200),n.value===o&&(n.value?t(new jt({paths:[B.Search,encodeURIComponent(n.value)]})):t(new jt(Ee)))})}
            />
        `}}),Ge=U()({tagName:"book-page-controls",events:{controlValueChange:ke()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>w`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${$["element-book-page-foreground-faint-level-1-color"].value};
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

        ${N}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===_.Hidden)return"";const s=Mu(e.currentValues[n],o,i=>{const l=Vt(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return g`
                    <div class="control-wrapper">
                        ${Se(a===0,g`
                                <${N.assign({icon:Su})}
                                    class="options-icon"
                                ></${N}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function Mu(e,t,r){return ge(t,_.Hidden)?"":ge(t,_.Checkbox)?g`
            <input
                type="checkbox"
                .value=${e}
                ${R("input",n=>{const o=Be(n,HTMLInputElement);r(o.checked)})}
            />
        `:ge(t,_.Color)?g`
            <input
                type="color"
                .value=${e}
                ${R("input",n=>{const o=Be(n,HTMLInputElement);r(o.value)})}
            />
        `:ge(t,_.Text)?g`
            <input
                type="text"
                .value=${e}
                ${R("input",n=>{const o=Be(n,HTMLInputElement);r(o.value)})}
            />
        `:ge(t,_.Number)?g`
            <input
                type="number"
                .value=${e}
                ${R("input",n=>{const o=Be(n,HTMLInputElement);r(o.value)})}
            />
        `:ge(t,_.Dropdown)?g`
            <select
                .value=${e}
                ${R("input",n=>{const o=Be(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>g`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:g`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Po=U()({tagName:"book-entry-description",styles:w`
        :host {
            color: ${$["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${$["element-book-page-foreground-color"].value};
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
            `)}}),Ro=U()({tagName:"book-page-wrapper",styles:w`
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

        ${j} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?g`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:g`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[B.Book,...e.pageNode.fullUrlBreadcrumbs],n=Uo(e.pageNode.entry.errors);return n&&console.error(n),g`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${j.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${j}>
                    ${n?g`
                              <${Q.assign({message:n.message})}></${Q}>
                          `:g`
                              <${Po.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Po}>
                              <${Ge.assign({config:e.pageNode.entry.controls,currentValues:rn(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Ge}>
                          `}
                </div>
            </div>
        `}}),pt=U()({tagName:"book-element-example-controls",styles:w`
        :host {
            display: flex;
            color: ${$["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[B.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return g`
            <${j.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${j}>
        `}}),Bo=Symbol("unset-internal-state"),No=U()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Bo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Uo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Bo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return g`
                ${Se(!!t.elementExampleNode.entry.styles,g`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),g`
                <${Q.assign({message:`${t.elementExampleNode.entry.title} failed: ${It(n)}`})}></${Q}>
            `}},options:{allowPolymorphicState:!0}}),Lo=U()({tagName:"book-element-example-wrapper",styles:w`
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

        ${pt} {
            color: ${$["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${pt} {
            color: ${$["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return g`
            <div class="individual-example-wrapper">
                <${pt.assign(Hs(e,["currentPageControls"]))}></${pt}>
                <${No.assign(e)}></${No}>
            </div>
        `}}),Oe=U()({tagName:"book-entry-display",styles:w`
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
    `,renderCallback:({inputs:e})=>{const t=Tr(e.currentRoute.paths),r=Au({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,currentControls:e.currentControls,originalTree:e.originalTree});return g`
            <${Ao.assign({currentSearch:t,currentRoute:e.currentRoute,router:e.router})}></${Ao}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${q.Footer}></slot>
        `}});function ws(e,t,r,n){const o=_r(r,n),a=[];if(o){const s=ws(e,t,o,n);s&&a.push(s)}if(Ce(r,A.Page)&&!e.includes(r)){const s=rn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:xt(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Au({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o,originalTree:a}){if(!e.length&&n)return[g`
                No results
            `];const s=wn(e,1)?ws(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&wn(e,1)?g`
                  <${Ge.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${Ge}>
              `:"",l=li(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Ce(c,A.Page))return g`
                    <${Ro.assign({isTopLevel:t,pageNode:c,currentControls:o,router:r})}
                        class="block-entry"
                    ></${Ro}>
                `;if(Ce(c,A.ElementExample)){const d=rn(o,c.fullUrlBreadcrumbs.slice(0,-1));return g`
                    <${Lo.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Lo}>
                `}else return Ce(c,A.Root)?g``:g`
                    <${Q}
                        class="block-entry"
                        ${Je(Q,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${Q}>
                `});return[i,l]}function Pu(e,t,r){const n=Oo(e,t);if(n.length)return n;r(Ee);const o=Oo(e,Ee.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Oo(e,t){return e.filter(r=>Ws({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const mt=wa()({tagName:"element-book-app",events:{pathUpdate:ke()},stateInitStatic:{currentRoute:Ee,router:void 0,loading:!1,colors:{config:void 0,theme:Eo(void 0)},treeBasedCurrentControls:void 0},styles:w`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${$["element-book-page-background-color"].value};
            color: ${$["element-book-page-foreground-color"].value};
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

        ${Oe} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${K} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }

        .loading {
            padding: 64px;
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{zo(e,Tr(t.currentRoute.paths),t.currentRoute)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c,u;try{let d=function(C){e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!fe(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))};var s=d;if(t.elementBookRoutePaths&&!fe(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const C=Dl(t.internalRouterConfig.basePath);n({router:C}),C.addRouteListener(!0,E=>{n({currentRoute:E})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const f={themeColor:t.themeColor};if(!fe(f,(c=e.colors)==null?void 0:c.config)){const C=Eo(f);n({colors:{config:f,theme:C}}),Ul(r,C)}const h=t._debug??!1,p=yl({entries:t.entries,debug:h});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.entries!==t.entries||e.treeBasedCurrentControls.globalValues!==t.globalValues)&&n({treeBasedCurrentControls:{entries:t.entries,globalValues:t.globalValues??{},currentControls:Na(p.tree,t.globalValues??{})}});const m=Tr(e.currentRoute.paths),k=(m?_l({flattenedNodes:p.flattenedNodes,searchQuery:m}):void 0)??Pu(p.flattenedNodes,e.currentRoute.paths,d),S=(u=e.treeBasedCurrentControls)==null?void 0:u.currentControls;return S?(t._debug&&console.info({currentControls:S}),g`
                <div
                    class="root"
                    ${R(jt,async C=>{const E=r.shadowRoot.querySelector(Oe.tagName);for(n({loading:!0});!r.shadowRoot.querySelector(".loading");)console.log("waiting"),await vr();if(await vr(),E?E.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Oe.tagName}' for scrolling.`),d(C.detail),!(r.shadowRoot.querySelector(K.tagName)instanceof K))throw new Error(`Failed to find child '${K.tagName}'`);n({loading:!1}),zo(r,m,e.currentRoute)})}
                    ${R(Ge.events.controlValueChange,C=>{if(!e.treeBasedCurrentControls)return;const E=Cl(S,C.detail.fullUrlBreadcrumbs,C.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:E}})})}
                >
                    <${K.assign({flattenedNodes:p.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${q.NavHeader}
                            slot=${q.NavHeader}
                        ></slot>
                    </${K}>
                    ${e.loading?g`
                              <div class="loading">Loading...</div>
                          `:g`
                              <${Oe.assign({currentRoute:e.currentRoute,currentNodes:k,router:e.router,debug:h,currentControls:S,originalTree:p.tree})}>
                                  <slot
                                      name=${q.Footer}
                                      slot=${q.Footer}
                                  ></slot>
                              </${Oe}>
                          `}
                </div>
            `):g`
                    <${Q.assign({message:"Failed to generate page controls."})}></${Q}>
                `}catch(d){return console.error(d),g`
                <p class="error">${It(d)}</p>
            `}}});async function zo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(K.tagName);if(!(n instanceof K))throw new Error(`Failed to find child '${K.tagName}'`);await Tu(n)}const un=Zs()({title:"Parent Page 1",parent:void 0,controls:{"Parent Control":{controlType:_.Color,initValue:"#33ccff"},"Hidden control":{controlType:_.Hidden,initValue:new RegExp("this can be anything")}}}),Ir=_e({title:"Parent Page 2",parent:void 0}),jo=_e({title:"Sub Page 1",parent:Ir});function Do(e,t){return _e({title:`test ${e}`,parent:t,elementExamplesCallback({defineExample:n}){Array(20).fill(0).forEach((o,a)=>{n({title:`example ${e} ${a}`,renderCallback(){return"element example here"}})})}})}const Ho=_e({title:"duplicate error page",parent:un,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:e}){e({title:"example 1",renderCallback(){return"hi"}}),e({title:"example 2",renderCallback(){return"hi"}})}}),Ru=_e({title:"test 3",controls:{thing:{initValue:"there",controlType:_.Text},thing2:{initValue:!1,controlType:_.Checkbox},thing3:{initValue:"hello",controlType:_.Dropdown,options:["hello","hi","yo"]}},parent:un,elementExamplesCallback({defineExample:e}){e({title:"example 3 1",renderCallback(){return"hi"}}),e({title:"example 3 2",styles:w`
                .color-control {
                    width: 20px;
                    height: 20px;
                }
            `,renderCallback({controls:t}){const r=w`
                    background-color: ${F(t["Parent Control"])};
                `;return g`
                    hello ${t.thing}, ${t.thing2}
                    <div style=${r} class="color-control"></div>
                    selected: ${t.thing3} ${t["Hidden control"]}
                    <br />
                    global: ${t.testGlobalControl}
                `}}),e({title:"example with error",renderCallback(){return"broken"}}),e({title:"example with error",renderCallback(){return"broken"}})}}),Cs=[un,Do(0,Ir),jo,...Array(100).fill(0).map((e,t)=>Do(t+1,jo)),Ho,Ho,Ru,Ir];console.info({entries:Cs});Zt({tagName:"vir-app",styles:w`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${mt} {
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
                    ${R("input",r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("input element not found for input event");t({themeColor:n.value})})}
                    type="color"
                />
            </label>
            <${mt.assign({entries:Cs,themeColor:e.themeColor,internalRouterConfig:{useInternalRouter:!0},_debug:!0,globalValues:{testGlobalControl:"it worked!"}})}
                ${R(mt.events.pathUpdate,r=>{t({paths:r.detail})})}
            >
                <h1 slot=${q.NavHeader}>My Title</h1>
                <footer slot=${q.Footer}>Example Footer</footer>
            </${mt}>
        `});
