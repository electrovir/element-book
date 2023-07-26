var ei=Object.defineProperty;var ti=(e,t,r)=>t in e?ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Qt=(e,t,r)=>(ti(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function Yr(e){return!!e}function ri(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const ni={capitalizeFirstLetter:!1};function oi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function si(e,t){return t.capitalizeFirstLetter?oi(e):e}function ai(e,t=ni){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""});return si(n,t)}function Jo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Ut(r).trim()).join(`
`))}function Ut(e){return e?e instanceof Error?e.message:Le(e,"message")?String(e.message):String(e):""}function Ko(e){return e instanceof Error?e:new Error(Ut(e))}function yr(e){return!!e&&typeof e=="object"}function ii(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const li=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Le(e,t){return e?li.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Qo(e,t){return e&&t.every(r=>Le(e,r))}function ne(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ci(e){return Array.isArray(e)?"array":typeof e}function It(e,t){return ci(e)===t}function xn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const En="Failed to compare objects using JSON.stringify";function Sn(e,t,r){return xn({source:e,errorHandler(n){if(r)return"";throw n}})===xn({source:t,errorHandler(n){if(r)return"";throw n}})}function me(e,t,r={}){try{return e===t?!0:yr(e)&&yr(t)?Sn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>me(e[o],t[o])):!1:Sn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Ko(n);throw o.message.startsWith(En)||(o.message=`${En}: ${o.message}`),o}}function ui(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function di(e){return ne(e).filter(t=>isNaN(Number(t)))}function fi(e){return di(e).map(r=>e[r])}function hi(e,t){return fi(t).includes(e)}function pi(e,t){return ne(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function mi(e,t){return pi(e,r=>!t.includes(r))}function Me(e,t){let r=!1;const n=ne(e).reduce((o,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...o,[s]:a}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(ne(n).map(async a=>{const i=await n[a];n[a]=i})),o(n)}catch(a){s(a)}}):n}function gi(e){const t=Zr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Zr(){let e,t,r=!1;const n=new Promise((o,s)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,s(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Zr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function _n(e,t){try{return es(e,t),!0}catch{return!1}}function es(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function bi(e,t){return Le(e,"entryType")&&e.entryType===t}var P;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(P||(P={}));function we(e,t){return e.controlType===t}var T;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(T||(T={}));const ts=Symbol("any-type"),vi={[T.Checkbox]:!1,[T.Color]:"",[T.Dropdown]:"",[T.Hidden]:ts,[T.Number]:0,[T.Text]:""};function yi(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const s=vi[o.controlType];s!==ts&&(typeof s!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof s} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function qr(e,t){const r=St(e.title);return e.parent?[...qr(e.parent,!1),St(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function St(e){return ri(e).toLowerCase().replaceAll(/\s/g,"-")}function $i({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function wi(){return e=>Be(e)}function Be(e){const t={...e,entryType:P.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:P.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Yr)};r.add(n.title),t.elementExamples[St(o.title)]=o}}),t}var X;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(X||(X={}));async function $r(e=1){const t=Zr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const ki=globalThis.crypto;function Ci(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return ki.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function xi(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{es(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function Ve(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$e=e=>(...t)=>({_$litDirective$:e,values:t});let ue=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var er;const _t=window,Ae=_t.trustedTypes,Tn=Ae?Ae.createPolicy("lit-html",{createHTML:e=>e}):void 0,Tt="$lit$",te=`lit$${(Math.random()+"").slice(9)}$`,Gr="?"+te,Ei=`<${Gr}>`,be=document,qe=()=>be.createComment(""),Ge=e=>e===null||typeof e!="object"&&typeof e!="function",rs=Array.isArray,ns=e=>rs(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",tr=`[ 	
\f\r]`,Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mn=/-->/g,An=/>/g,de=RegExp(`>|${tr}(?:([^\\s"'>=/]+)(${tr}*=${tr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pn=/'/g,Rn=/"/g,os=/^(?:script|style|textarea|title)$/i,Si=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ss=Si(1),z=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Nn=new WeakMap,pe=be.createTreeWalker(be,129,null,!1);function as(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tn!==void 0?Tn.createHTML(t):t}const is=(e,t)=>{const r=e.length-1,n=[];let o,s=t===2?"<svg>":"",a=Fe;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(a.lastIndex=f,u=a.exec(l),u!==null);)f=a.lastIndex,a===Fe?u[1]==="!--"?a=Mn:u[1]!==void 0?a=An:u[2]!==void 0?(os.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=de):u[3]!==void 0&&(a=de):a===de?u[0]===">"?(a=o??Fe,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?de:u[3]==='"'?Rn:Pn):a===Rn||a===Pn?a=de:a===Mn||a===An?a=Fe:(a=de,o=void 0);const h=a===de&&e[i+1].startsWith("/>")?" ":"";s+=a===Fe?l+Ei:d>=0?(n.push(c),l.slice(0,d)+Tt+l.slice(d)+te+h):l+te+(d===-2?(n.push(void 0),i):h)}return[as(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Xe{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let s=0,a=0;const i=t.length-1,l=this.parts,[c,u]=is(t,r);if(this.el=Xe.createElement(c,n),pe.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=pe.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Tt)||f.startsWith(te)){const h=u[a++];if(d.push(f),h!==void 0){const p=o.getAttribute(h.toLowerCase()+Tt).split(te),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:m[2],strings:p,ctor:m[1]==="."?cs:m[1]==="?"?us:m[1]==="@"?ds:nt})}else l.push({type:6,index:s})}for(const f of d)o.removeAttribute(f)}if(os.test(o.tagName)){const d=o.textContent.split(te),f=d.length-1;if(f>0){o.textContent=Ae?Ae.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],qe()),pe.nextNode(),l.push({type:2,index:++s});o.append(d[f],qe())}}}else if(o.nodeType===8)if(o.data===Gr)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(te,d+1))!==-1;)l.push({type:7,index:s}),d+=te.length-1}s++}}static createElement(t,r){const n=be.createElement("template");return n.innerHTML=t,n}}function ve(e,t,r=e,n){var o,s,a,i;if(t===z)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Ge(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((a=(i=r)._$Co)!==null&&a!==void 0?a:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=ve(e,l._$AS(e,t.values),l,n)),t}class ls{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,s=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:be).importNode(n,!0);pe.currentNode=s;let a=pe.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new Oe(a,a.nextSibling,this,t):c.type===1?u=new c.ctor(a,c.name,c.strings,this,t):c.type===6&&(u=new fs(a,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(a=pe.nextNode(),i++)}return pe.currentNode=be,s}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Oe{constructor(t,r,n,o){var s;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ve(this,t,r),Ge(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ns(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&Ge(this._$AH)?this._$AA.nextSibling.data=t:this.$(be.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Xe.createElement(as(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(n);else{const a=new ls(s,this),i=a.u(this.options);a.v(n),this.$(i),this._$AH=a}}_$AC(t){let r=Nn.get(t.strings);return r===void 0&&Nn.set(t.strings,r=new Xe(t)),r}T(t){rs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of t)o===r.length?r.push(n=new Oe(this.k(qe()),this.k(qe()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class nt{constructor(t,r,n,o,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const s=this.strings;let a=!1;if(s===void 0)t=ve(this,t,r,0),a=!Ge(t)||t!==this._$AH&&t!==z,a&&(this._$AH=t);else{const i=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=ve(this,i[n+l],r,l),c===z&&(c=this._$AH[l]),a||(a=!Ge(c)||c!==this._$AH[l]),c===M?t=M:t!==M&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class cs extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const _i=Ae?Ae.emptyScript:"";class us extends nt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,_i):this.element.removeAttribute(this.name)}}class ds extends nt{constructor(t,r,n,o,s){super(t,r,n,o,s),this.type=5}_$AI(t,r=this){var n;if((t=(n=ve(this,t,r,0))!==null&&n!==void 0?n:M)===z)return;const o=this._$AH,s=t===M&&o!==M||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==M&&(o===M||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class fs{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ve(this,t)}}const Ti={O:Tt,P:te,A:Gr,C:1,M:is,L:ls,D:ns,R:ve,I:Oe,V:nt,H:us,N:ds,U:cs,F:fs},Ln=_t.litHtmlPolyfillSupport;Ln==null||Ln(Xe,Oe),((er=_t.litHtmlVersions)!==null&&er!==void 0?er:_t.litHtmlVersions=[]).push("2.7.5");const Mi=(e,t,r)=>{var n,o;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let a=s._$litPart$;if(a===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=a=new Oe(t.insertBefore(qe(),i),i,void 0,r??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ai}=Ti,Bn=()=>document.createComment(""),Ue=(e,t,r)=>{var n;const o=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=o.insertBefore(Bn(),s),i=o.insertBefore(Bn(),s);r=new Ai(a,i,e,e.options)}else{const a=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(a!==s||l){let c=r._$AA;for(;c!==a;){const u=c.nextSibling;o.insertBefore(c,s),c=u}}}return r},fe=(e,t,r=e)=>(e._$AI(t,r),e),Pi={},Ri=(e,t=Pi)=>e._$AH=t,Ni=e=>e._$AH,rr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs=$e(class extends ue{constructor(e){var t;if(super(e),e.type!==rt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((r=this.nt)===null||r===void 0)&&r.has(s))&&this.it.add(s);return this.render(t)}const o=e.element.classList;this.it.forEach(s=>{s in t||(o.remove(s),this.it.delete(s))});for(const s in t){const a=!!t[s];a===this.it.has(s)||!((n=this.nt)===null||n===void 0)&&n.has(s)||(a?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return z}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const On=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Li=$e(class extends ue{constructor(e){if(super(e),e.type!==rt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],s=[];let a=0;for(const i of e)o[a]=n?n(i,a):a,s[a]=r(i,a),a++;return{values:s,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const s=Ni(e),{values:a,keys:i}=this.dt(t,r,n);if(!Array.isArray(s))return this.ht=i,a;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,f=0,h=s.length-1,p=0,m=a.length-1;for(;f<=h&&p<=m;)if(s[f]===null)f++;else if(s[h]===null)h--;else if(l[f]===i[p])c[p]=fe(s[f],a[p]),f++,p++;else if(l[h]===i[m])c[m]=fe(s[h],a[m]),h--,m--;else if(l[f]===i[m])c[m]=fe(s[f],a[m]),Ue(e,c[m+1],s[f]),f++,m--;else if(l[h]===i[p])c[p]=fe(s[h],a[p]),Ue(e,s[f],s[h]),h--,p++;else if(u===void 0&&(u=On(i,p,m),d=On(l,f,h)),u.has(l[f]))if(u.has(l[h])){const g=d.get(i[p]),$=g!==void 0?s[g]:null;if($===null){const E=Ue(e,s[f]);fe(E,a[p]),c[p]=E}else c[p]=fe($,a[p]),Ue(e,s[f],$),s[g]=null;p++}else rr(s[h]),h--;else rr(s[f]),f++;for(;p<=m;){const g=Ue(e,c[m+1]);fe(g,a[p]),c[p++]=g}for(;f<=h;){const g=s[f++];g!==null&&rr(g)}return this.ht=i,Ri(e,c),z}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wr=class extends ue{constructor(t){if(super(t),this.et=M,t.type!==rt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||t==null)return this.ft=void 0,this.et=t;if(t===z)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};wr.directiveName="unsafeHTML",wr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dn=class extends wr{};Dn.directiveName="unsafeSVG",Dn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bi(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=window,Xr=wt.ShadowRoot&&(wt.ShadyCSS===void 0||wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jr=Symbol(),zn=new WeakMap;let ps=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Jr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Xr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=zn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&zn.set(r,t))}return t}toString(){return this.cssText}};const O=e=>new ps(typeof e=="string"?e:e+"",void 0,Jr),ge=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new ps(r,e,Jr)},Oi=(e,t)=>{Xr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=wt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},jn=Xr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return O(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nr;const Mt=window,Hn=Mt.trustedTypes,Di=Hn?Hn.emptyScript:"",Vn=Mt.reactiveElementPolyfillSupport,kr={toAttribute(e,t){switch(t){case Boolean:e=e?Di:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ms=(e,t)=>t!==e&&(t==t||e==e),or={attribute:!0,type:String,converter:kr,reflect:!1,hasChanged:ms},Cr="finalized";class xe extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=or){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const s=this[t];this[r]=o,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||or}static finalize(){if(this.hasOwnProperty(Cr))return!1;this[Cr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(jn(o))}else t!==void 0&&r.push(jn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Oi(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=or){var o;const s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){const a=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:kr).toAttribute(r,n.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=o.getPropertyOptions(s),i=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:kr;this._$El=s,this[s]=i.fromAttribute(r,a.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||ms)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}xe[Cr]=!0,xe.elementProperties=new Map,xe.elementStyles=[],xe.shadowRootOptions={mode:"open"},Vn==null||Vn({ReactiveElement:xe}),((nr=Mt.reactiveElementVersions)!==null&&nr!==void 0?nr:Mt.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sr,ar;class _e extends xe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return z}}_e.finalized=!0,_e._$litElement$=!0,(sr=globalThis.litElementHydrateSupport)===null||sr===void 0||sr.call(globalThis,{LitElement:_e});const Fn=globalThis.litElementPolyfillSupport;Fn==null||Fn({LitElement:_e});((ar=globalThis.litElementVersions)!==null&&ar!==void 0?ar:globalThis.litElementVersions=[]).push("3.3.2");var zi=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,s){function a($){if($!==void 0&&typeof $!="function")throw new TypeError("Function expected");return $}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var m in n)p[m]=m==="access"?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function($){if(f)throw new TypeError("Cannot add initializers after decoration has completed");s.push(a($||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=a(g.get))&&(u.get=d),(d=a(g.set))&&(u.set=d),(d=a(g.init))&&o.unshift(d)}else(d=a(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},ji=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Hi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Vi(){function e(t,r){return t}return e}let gs=(()=>{let e=[Vi()],t,r=[],n;return n=class extends _e{},Hi(n,"DeclarativeElement"),zi(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,ji(n,r),n})();function Un(e){return e!==e.toUpperCase()}function Fi(e){return e.split("").reduce((r,n,o,s)=>{const a=o>0?s[o-1]:"",i=o<s.length-1?s[o+1]:"",l=Un(a)||Un(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Ui=["january","february","march","april","may","june","july","august","september","october","november","december"];Ui.map(e=>e.slice(0,3));function Ii(e){return!!e}function Wi(e){return!!e&&typeof e=="object"}function In(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Yi(e){return Array.isArray(e)?"array":typeof e}function Zi(e,t){return Yi(e)===t}function qi(e,t){let r=!1;const n=In(e).reduce((o,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...o,[s]:a}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(In(n).map(async a=>{const i=await n[a];n[a]=i})),o(n)}catch(a){s(a)}}):n}function oe(e){if(Wi(e))return qi(e,(r,n)=>{if(!Zi(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Fi(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,a=r.startsWith("--")?O(r):r.startsWith("-")?ge`-${O(r)}`:ge`--${O(r)}`;return{name:a,value:ge`var(${a}, ${O(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${oe.name}' function.`)}function Gi({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Ji=(e,t,r)=>{t.constructor.createProperty(r,e)};function Wt(e){return(t,r)=>r!==void 0?Ji(e,t,r):Xi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ir;((ir=window.HTMLSlotElement)===null||ir===void 0?void 0:ir.prototype.assignedElements)!=null;const Kr=Symbol("key for ignoring inputs not having been set yet"),Ki={[Kr]:!0,allowPolymorphicState:!1};function bs(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof gs?!0:bs(r)}function vs(e,t){const r=e.instanceState;ne(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ne(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Qi(e)}function Qi(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Wn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}let el=class extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}};function Qr(){return e=>{var t;return t=class extends el{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Pe(){return Qr()}function tl(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Qr()(r);return t[r]=n,t},{}):{}}const rl="_elementVirStateSetup";function nl(e){return yr(e)?rl in e:!1}function ol(e,t){return e.includes(t)}function ot(e){return!!e&&typeof e=="object"}const sl=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function kt(e,t){return e?sl.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function At(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function xr(e){return Array.isArray(e)?"array":typeof e}function Ee(e,t){return xr(e)===t}function al(e,t){let r=!1;const n=At(e).reduce((o,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...o,[s]:a}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(At(n).map(async a=>{const i=await n[a];n[a]=i})),o(n)}catch(a){s(a)}}):n}function il(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return xr(e)===xr(t)&&r}const ys=Symbol("and"),$s=Symbol("or"),ws=Symbol("exact"),ks=Symbol("enum"),en=Symbol("unknown"),Cs="__vir__shape__definition__key__do__not__use__in__actual__objects";function xs(e){return kt(e,Cs)}const Es="__vir__shape__specifier__key__do__not__use__in__actual__objects",ll=[ys,$s,ws,ks,en];function Ss(){return cl([],en)}function Yt(e){return st(e,$s)}function tn(e){return st(e,ys)}function rn(e){return st(e,ws)}function nn(e){return st(e,ks)}function on(e){return st(e,en)}function st(e,t){const r=Zt(e);return!!r&&r.specifierType===t}function cl(e,t){return{[Es]:!0,specifierType:t,parts:e}}function Ct(e,t){const r=Zt(t);if(r){if(tn(r))return r.parts.every(n=>Ct(e,n));if(Yt(r))return r.parts.some(n=>Ct(e,n));if(rn(r))return ot(e)?Ct(e,r.parts[0]):e===r.parts[0];if(nn(r))return Object.values(r.parts[0]).some(n=>n===e);if(on(r))return!0}return il(e,t)}function Zt(e){if(ot(e)&&kt(e,Es)){if(!kt(e,"parts")||!Ee(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!kt(e,"specifierType")||!ol(ll,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Er(e){return Sr(e)}function Sr(e){const t=Zt(e);if(t){if(Yt(t)||rn(t))return Sr(t.parts[0]);if(tn(t))return t.parts.reduce((r,n)=>Object.assign(r,Sr(n)),{});if(nn(t))return Object.values(t.parts[0])[0];if(on(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return xs(e)?Er(e.shape):e instanceof RegExp||Ee(e,"array")?e:ot(e)?al(e,(r,n)=>Er(n)):e}function _s(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Er(e),[Cs]:!0}}class Z extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Ts(e,t,r={}){try{return ul(e,t,r),!0}catch{return!1}}function ul(e,t,r={}){he(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Ms(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function he(e,t,r,n){if(on(t))return!0;if(xs(t))return he(e,t.shape,r,n);const o=Ms(r);if(Zt(e))throw new Z(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Ct(e,t))throw new Z(`Subject does not match shape definition at key ${o}`);if(Ee(t,"function"))return Ee(e,"function");if(ot(e)){const a=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(Yt(t))l=t.parts.some(c=>{try{const u=he(e,c,r,{...n,ignoreExtraKeys:!1});return Object.assign(i,u),!0}catch(u){if(u instanceof Z)return!1;throw u}});else if(tn(t))l=t.parts.every(c=>{try{const u=he(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof Z)return!1;throw u}});else if(rn(t)){const c=he(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(nn(t))throw new Z(`Cannot compare an enum specifier to an object at ${o}`);if(Ee(t,"array")&&Ee(a,"array"))l=a.every((c,u)=>{const d=t.some(f=>{try{return he(c,f,[...r,u],n),!0}catch(h){if(h instanceof Z)return!1;throw h}});return i[u]=d,d});else{const c=dl({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l)throw new Z("no error message");return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new Z(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function dl({keys:e,options:t,shape:r,subject:n}){const o=Ms(e),s={};if(ot(r)){const a=new Set(At(n)),i=new Set(At(r));t.ignoreExtraKeys||a.forEach(l=>{if(!i.has(l))throw new Z(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=Yt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!d)throw new Z(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];he(c,u,[...e,l],t),s[l]=!0})}else throw new Z(`shape definition at ${o} was not an object.`);return s}const fl=_s({addListener(){return!1},removeListener(){return!1},value:Ss()});function lr(e){return Ts(e,fl,{allowExtraKeys:!0})}function hl(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Yn(e,t){const r=e;function n(a){t?hl(a,e,e.tagName):Wt()(e,a)}function o(a,i){return n(i),r[i]}return new Proxy({},{get:o,set:(a,i,l)=>{const c=nl(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(p){a[i]=p,r[i]=p}const f=e.observablePropertyListenerMap[i];if(u!==c&&lr(u)&&(f!=null&&f.length)&&u.removeListener(f),lr(c))if(f)c.addListener(f);else{let p=function(){e.requestUpdate()};var h=p;e.observablePropertyListenerMap[i]=p,c.addListener(p)}else lr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,i){if(i in a)return{get value(){return o(a,i)},configurable:!0,enumerable:!0}},has:(a,i)=>Reflect.has(a,i)})}function pl(e){return e?Me(e,t=>t):{}}function ml({hostClassNames:e,cssVars:t}){return{hostClasses:Me(e,(r,n)=>({name:O(n),selector:O(`:host(.${n})`)})),cssVars:t}}function gl({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ne(t).forEach(s=>{const a=t[s],i=r[s];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function bl(e,t){function r(o){ne(o).forEach(s=>{const a=o[s];e.instanceState[s]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var vl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function sn(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Ki,...e.options},n=tl(e.events),o=pl(e.hostClasses);e.hostClasses&&Wn(e.tagName,e.hostClasses),e.cssVars&&Wn(e.tagName,e.cssVars);const s=e.cssVars?oe(e.cssVars):{},a=typeof e.styles=="function"?e.styles(ml({hostClassNames:o,cssVars:s})):e.styles||ge``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends gs{createRenderParams(){return bl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){try{bs(this)&&!this.haveInputsBeenSet&&!r[Kr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${sn.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return gl({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Ko(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){vs(this,u)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Yn(this,!1),this.instanceState=Yn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};ne(u).forEach(f=>{Wt()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},vl(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=s,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:ai(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function As(){return e=>sn({...e,options:{[Kr]:!1,...e.options}})}function Ps(e,t){return _r(e,t),e.element}function yl(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function _r(e,t){const r=yl(e),n=r?`: in ${r}`:"";if(e.type!==rt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Rs(e,t){return t?Zn(e,t):Zn(void 0,e)}const Zn=$e(class extends ue{constructor(e){super(e),this.element=Ps(e,"assign")}render(e,t){return vs(this.element,t),z}});function j(e,t){return $l(e,t)}const $l=$e(class extends ue{constructor(e){super(e),this.element=Ps(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),z}}),cr="onResize",Ns=$e(class extends ue{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),_r(e,cr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${cr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){_r(e,cr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Re(e,t,r){return Bi(e,()=>t,()=>r)}function Ls(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),As()(r(n))),defineElementNoInputs:n=>(t(n),sn(r(n)))}}function wl(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const s=e.map(i=>[i]);return s.length||(s[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(s[i]=[])}),t.forEach(i=>{const l=s[i.index];l&&l.splice(0,0,...i.values)}),s.flat()}function Tr(e){return Le(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function an(e){return Le(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Bs(e){return e.map(t=>Tr(t)?t.definition:t).filter(t=>an(t))}const Os=new WeakMap;function kl(e,t){var o;const r=Bs(t);return(o=Ds(Os,[e,...r]).value)==null?void 0:o.template}function Cl(e,t,r){const n=Bs(t);return js(Os,[e,...n],r)}function Ds(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=zs(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ds(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function zs(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function js(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:a}=zs(e,t,n);if(!s)return{result:!1,reason:a};const i=o??{nested:void 0,template:void 0};if(o||e.set(s,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),js(l,t,r,n+1)}const xl=new WeakMap;function Hs(e,t,r){const n=kl(e,t),o=n??r();if(!n){const i=Cl(e,t,o);if(i.result)xl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const s=o.valuesTransform(t),a=wl(t,s.valueInsertions,s.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Vs(e,t,r,n){const o=[],s=[],a=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let m,g=[];if(typeof f=="string"&&(m=r(f,c,p),m)){o[d]=f+m.replacement,a.push(h);const E=m.getExtraValues;g=E?E(p):[],g.length&&E?(o[d]+=" ",g.forEach((_,S)=>{S&&o.push(" ")}),i.push(_=>{const S=_[h],k=E(S);return{index:h,values:k}}),o.push(c)):o[d]+=c}m||o.push(c);const $=e.raw[u];m?(s[d]=s[d]+m.replacement+$,g.length&&g.forEach(()=>{s.push("")})):s.push($)}),{templateStrings:Object.assign([],o,{raw:s}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:a,valueInsertions:u}}}}function El(...[e,t,r]){if(an(r))return{replacement:r.tagName,getExtraValues:void 0}}function Sl(e,t){return Vs(e,t,El)}function x(e,...t){const r=Hs(e,t,()=>Sl(e,t));return ge(r.strings,...r.values)}function _l(...[e,t,r]){const n=Tr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),s=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||s,i=an(n);if(a&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Tr(c)?c.inputs:void 0;return[o&&u?Rs(u):void 0].filter(Yr)}}}function Tl(e){}function Ml(e){return Vs(e.strings,e.values,_l,Tl)}function b(e,...t){const r=ss(e,...t),n=Hs(e,t,()=>Ml(r));return{...r,strings:n.strings,values:n.values}}const Al={[P.ElementExample]:()=>[],[P.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...yi(e.controls,e.title)].filter(Yr),[P.Root]:()=>[]},Pt="_isBookTreeNode",Fs=new Map;function Pl(e){return Fs.get(e)}function Rl(e,t){ui(Fs,e,()=>t)}function Te(e,t){return!!(Us(e)&&e.entry.entryType===t)}function Us(e){return!!(Qo(e,[Pt,"entry"])&&e[Pt])}function Nl(){return{[Pt]:!0,entry:{entryType:P.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Ll({entries:e,debug:t}){const r=Pl(e);if(r)return r;const n=Nl();e.forEach(a=>ln({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=Is(n),s={tree:n,flattenedNodes:o};return Rl(e,s),t&&console.info("element-book tree:",n),s}function Bl(e,t,r){if(!t.parent)return e;const n=Mr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),ln({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Mr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${qr(t,!1)}`);return o}function ln({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Al[t.entryType](t);t.errors.push(...o);const s=Bl(e,t,r),a=St(t.title),i=s.children[a];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${a}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Pt]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};s.children[a]=l,bi(t,P.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>ln({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Mr(e,t){const r=Us(e)?e.fullUrlBreadcrumbs.slice(0,-1):qr(e,!1);return r.length?r.reduce((o,s)=>{if(o)return o.children[s]},t):void 0}function Is(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Is(o));return[e,...r].flat()}function cn(e,t){return un(e,["",...t],void 0)}function un(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const s=e.children[o||""],a=s&&un(s,n,r);return{...e.controls,...a}}function Ol(e,t,r){const n=ii(e);return un(n,["",...t],r),n}function Ws(e,t){const r=(t==null?void 0:t.controls)||(Te(e,P.Page)?Me(e.entry.controls,(o,s)=>s.initValue):{});return{children:Me(e.children,(o,s)=>{var a;return Ws(s,(a=t==null?void 0:t.children)==null?void 0:a[s.urlBreadcrumb])}),controls:r}}function Dl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),s=e.toLowerCase();e:for(let a=0,i=0;a<n;a++){const l=s.charCodeAt(a);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const zl=Ci(32);function xt(e){return e.join(zl)}function Ys(e){if(!e.length)return[];const t=xt(e),r=Ys(e.slice(0,-1));return[t,...r]}const jl=["error","errors"];function Hl(e){return jl.includes(e)}function Vl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),xt(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const s=o.entry.errors.length&&Hl(t),a=xt(o.fullUrlBreadcrumbs);if(Dl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||r[a]){const l=Ys(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const s=xt(o.fullUrlBreadcrumbs),a=r[s];if(!It(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var N;(function(e){e.Search="search",e.Book="book"})(N||(N={}));function Ar(e){return e[0]===N.Book?"":e[1]?decodeURIComponent(e[1]):""}const Ne={hash:void 0,paths:[N.Book],search:void 0},Fl=0;function Zs(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Fl)}class qt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class qn extends qt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Je="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Ul=globalThis.history.pushState;function Gn(...e){const t=Ul.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Je)),t}const Il=globalThis.history.replaceState;function Xn(...e){const t=Il.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Je)),t}function Wl(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Gn)throw new qn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Xn)throw new qn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Gn,globalThis.history.replaceState=Xn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Je))})}}function Yl(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Zl(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function ql(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),s=globalThis.location.search?Yl(new URLSearchParams(globalThis.location.search)):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:s,hash:a}}function qs(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Gs({routeBase:e,windowPath:t}){if(!e)return"";const r=qs(e);if(Xs({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Gs({routeBase:n,windowPath:t}):""}function Xs({routeBase:e,windowPath:t}){const r=qs(e);return r?t.startsWith(`/${r}`):!1}class Gl extends qt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Js(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Jn=6;function Kn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Jn)throw new Gl(`Route sanitization depth has exceed the max of ${Jn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Js(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class ur extends qt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Xl(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new ur(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new ur(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new ur(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Jl(e,t,r=!1){const n=Ks(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ks(e,t){var l;const r=Xs({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Zl(e.search).toString():"",o=n?`?${n}`:"",s=(l=e.hash)!=null&&l.startsWith("#")?"":"#",a=e.hash?`${s}${e.hash}`:"";return`/${[r,...e.paths].filter(Ii).join("/")}${o}${a}`}function Kl(e={}){Xl(e),Wl();const t=e.routeBase?Gs({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Kn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(s){const a={hash:void 0,search:void 0,...s};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(s,a=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...s},u=o.sanitizeFullRoute(c);if(!(!i&&Js(l,u)))return Jl(u,t,a)},createRoutesUrl(s){return Ks(s,t)},getCurrentRawRoutes(){return ql(t)},removeAllRouteListeners(){o.listeners.forEach(s=>o.removeRouteListener(s))},addRouteListener(s,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new qt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(Je,n),r=!0),s&&Kn(o,a),a},hasRouteListener(s){return o.listeners.has(s)},removeRouteListener(s){const a=o.listeners.delete(s);return o.listeners.size||(globalThis.removeEventListener(Je,n),r=!1),a},sanitizationDepth:0};return o}function Ql(e){return Kl({routeBase:e,routeSanitizer(t){return{paths:ec(t.paths),hash:void 0,search:void 0}}})}function ec(e){const t=e[0];if(hi(t,N)){if(t===N.Book)return[N.Book,...e.slice(1)];if(t===N.Search)return e[1]?[t,e[1]]:[N.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ne.paths}const w=oe({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),tc={nav:{hover:{background:w["element-book-nav-hover-background-color"],foreground:w["element-book-nav-hover-foreground-color"]},active:{background:w["element-book-nav-active-background-color"],foreground:w["element-book-nav-active-foreground-color"]},selected:{background:w["element-book-nav-selected-background-color"],foreground:w["element-book-nav-selected-foreground-color"]}},accent:{icon:w["element-book-accent-icon-color"]},page:{background:w["element-book-page-background-color"],backgroundFaint1:w["element-book-page-background-faint-level-1-color"],backgroundFaint2:w["element-book-page-background-faint-level-2-color"],foreground:w["element-book-page-foreground-color"],foregroundFaint1:w["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:w["element-book-page-foreground-faint-level-2-color"]}};function rc(e,t){Qs(e,t,tc)}function Pr(e){return Le(e,"_$cssResult$")}function Qn(e){return Qo(e,["name","value","default"])&&It(e.default,"string")&&Pr(e.name)&&Pr(e.value)}function Qs(e,t,r){Object.entries(t).forEach(([n,o])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(Pr(o)){if(!Qn(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);Gi({forCssVar:s,onElement:e,toValue:String(o)})}else{if(Qn(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Qs(e,o,s)}})}function A(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,i)=>t.map(l=>l[i])),s=e.map(a=>o.map(i=>{let l=0;if(!Array.isArray(a)){for(let c of i)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(i[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(a=>a[0]):s}function at(e){return se(e)==="string"}function se(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Rt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function ea(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(s,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),s.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ta(e){return e[e.length-1]}function Nt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function ra(e,t,r){return(r-e)/(t-e)}function dn(e,t,r){return Nt(t[0],t[1],ra(e[0],e[1],r))}function na(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var nc=Object.freeze({__proto__:null,interpolate:Nt,interpolateInv:ra,isString:at,last:ta,mapRange:dn,multiplyMatrices:A,parseCoordGrammar:na,parseFunction:ea,toPrecision:Rt,type:se});class oc{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ae=new oc;var J={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const q={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Rr(e){return Array.isArray(e)?e:q[e]}function Lt(e,t,r,n={}){if(e=Rr(e),t=Rr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ae.run("chromatic-adaptation-start",o),o.M||(o.W1===q.D65&&o.W2===q.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===q.D50&&o.W2===q.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ae.run("chromatic-adaptation-end",o),o.M)return A(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const sc=75e-6,B=class B{constructor(t){var o,s,a;this.id=t.id,this.name=t.name,this.base=t.base?B.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Rr(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(s=this.formats)!=null&&s.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:ac(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ae.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=sc}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,s)=>{let a=n[s];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[i,l]=a.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=eo(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=eo(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=B.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,s,a;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)s=n[i],a=i;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>a;i--)r=n[i].toBase(r);for(let i=a+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=B.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(B.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof B)return t;if(se(t)==="string"){let o=B.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return B.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=se(t),o,s;if(n==="string"?t.includes(".")?[o,s]=t.split("."):[o,s]=[,t]:Array.isArray(t)?[o,s]=t:(o=t.space,s=t.coordId),o=B.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=se(s),n==="number"||n==="string"&&s>=0){let c=Object.entries(o.coords)[s];if(c)return{space:o,id:c[0],index:s,...c[1]}}o=B.get(o);let a=s.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===a||((l=u.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Qt(B,"registry",{}),Qt(B,"DEFAULT_FORMAT",{type:"functions",name:"color"});let v=B;function ac(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function eo(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=na(e.coords);let r=Object.entries(t).map(([n,o],s)=>{let a=e.coordGrammar[s][0],i=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((s,a)=>{let{fromRange:i,toRange:l,suffix:c}=r[a];return i&&l&&(s=dn(i,l,s)),s=Rt(s,o),c&&(s+=c),s})}return e}var U=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class L extends v{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=U),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=A(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Lt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Lt(this.base.white,this.white,r),A(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function oa(e,{meta:t}={}){var n,o,s,a,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(ae.run("parse-start",r),r.color)return r.color;if(r.parsed=ea(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of v.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((m,g)=>r.parsed.args[g]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:u}}}let d="";if(c in v.registry){let f=(i=(a=(s=v.registry[c].formats)==null?void 0:s.functions)==null?void 0:a.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of v.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||ta(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([p,m],g)=>{var R;let $=u.coordGrammar[g],E=(R=f[g])==null?void 0:R.type,_=$.find(K=>K==E);if(!_){let K=m.name||p;throw new TypeError(`${E} not allowed for ${K} in ${l}()`)}let S=_.range;E==="<percentage>"&&(S||(S=[0,1]));let k=m.range||m.refRange;return S&&k&&(f[g]=dn(S,k,f[g])),_})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of v.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function C(e){if(!e)throw new TypeError("Empty color reference");at(e)&&(e=oa(e));let t=e.space||e.spaceId;return t instanceof v||(e.space=v.get(t)),e.alpha===void 0&&(e.alpha=1),e}function it(e,t){return t=v.get(t),t.from(e)}function I(e,t){let{space:r,index:n}=v.resolveCoord(t,e.space);return it(e,r)[n]}function sa(e,t,r){return t=v.get(t),e.coords=t.to(e.space,r),e}function ie(e,t,r){if(e=C(e),arguments.length===2&&se(arguments[1])==="object"){let n=arguments[1];for(let o in n)ie(e,o,n[o])}else{typeof r=="function"&&(r=r(I(e,t)));let{space:n,index:o}=v.resolveCoord(t,e.space),s=it(e,n);s[o]=r,sa(e,n,s)}return e}var fn=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:U,fromBase:e=>Lt(U.white,"D50",e),toBase:e=>Lt("D50",U.white,e),formats:{color:{}}});const ic=216/24389,to=24/116,dt=24389/27;let dr=q.D50;var D=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:dr,base:fn,fromBase(e){let r=e.map((n,o)=>n/dr[o]).map(n=>n>ic?Math.cbrt(n):(dt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>to?Math.pow(t[0],3):(116*t[0]-16)/dt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/dt,t[2]>to?Math.pow(t[2],3):(116*t[2]-16)/dt].map((n,o)=>n*dr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Gt(e){return(e%360+360)%360}function lc(e,t){if(e==="raw")return t;let[r,n]=t.map(Gt),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Ke=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:D,fromBase(e){let[t,r,n]=e,o;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Gt(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ro=25**7,Bt=Math.PI,no=180/Bt,ke=Bt/180;function Nr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[s,a,i]=D.from(e),l=Ke.from(D,[s,a,i])[1],[c,u,d]=D.from(t),f=Ke.from(D,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,m=.5*(1-Math.sqrt(p/(p+ro))),g=(1+m)*a,$=(1+m)*u,E=Math.sqrt(g**2+i**2),_=Math.sqrt($**2+d**2),S=g===0&&i===0?0:Math.atan2(i,g),k=$===0&&d===0?0:Math.atan2(d,$);S<0&&(S+=2*Bt),k<0&&(k+=2*Bt),S*=no,k*=no;let R=c-s,K=_-E,G=k-S,ze=S+k,vn=Math.abs(G),je;E*_===0?je=0:vn<=180?je=G:G>180?je=G-360:G<-180?je=G+360:console.log("the unthinkable has happened");let yn=2*Math.sqrt(_*E)*Math.sin(je*ke/2),Ga=(s+c)/2,Kt=(E+_)/2,$n=Math.pow(Kt,7),Q;E*_===0?Q=ze:vn<=180?Q=ze/2:ze<360?Q=(ze+360)/2:Q=(ze-360)/2;let wn=(Ga-50)**2,Xa=1+.015*wn/Math.sqrt(20+wn),kn=1+.045*Kt,He=1;He-=.17*Math.cos((Q-30)*ke),He+=.24*Math.cos(2*Q*ke),He+=.32*Math.cos((3*Q+6)*ke),He-=.2*Math.cos((4*Q-63)*ke);let Cn=1+.015*Kt*He,Ja=30*Math.exp(-1*((Q-275)/25)**2),Ka=2*Math.sqrt($n/($n+ro)),Qa=-1*Math.sin(2*Ja*ke)*Ka,ut=(R/(r*Xa))**2;return ut+=(K/(n*kn))**2,ut+=(yn/(o*Cn))**2,ut+=Qa*(K/(n*kn))*(yn/(o*Cn)),Math.sqrt(ut)}const cc=75e-6;function Ye(e,t=e.space,{epsilon:r=cc}={}){e=C(e),t=v.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Qe(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function le(e,{method:t=J.gamut_mapping,space:r=e.space}={}){if(at(arguments[1])&&(r=arguments[1]),r=v.get(r),Ye(e,r,{epsilon:0}))return C(e);let n=V(e,r);if(t!=="clip"&&!Ye(e,r)){let o=le(Qe(n),{method:"clip",space:r});if(Nr(e,o)>2){let s=v.resolveCoord(t),a=s.space,i=s.id,l=V(n,a),u=(s.range||s.refRange)[0],d=.01,f=u,h=I(l,i);for(;h-f>d;){let p=Qe(l);p=le(p,{space:r,method:"clip"}),Nr(l,p)-2<d?f=I(l,i):h=I(l,i),ie(l,i,(f+h)/2)}n=V(l,r)}else n=o}if(t==="clip"||!Ye(n,r,{epsilon:0})){let o=Object.values(r.coords).map(s=>s.range||[]);n.coords=n.coords.map((s,a)=>{let[i,l]=o[a];return i!==void 0&&(s=Math.max(i,s)),l!==void 0&&(s=Math.min(s,l)),s})}return r!==e.space&&(n=V(n,e.space)),e.coords=n.coords,e}le.returns="color";function V(e,t,{inGamut:r}={}){e=C(e),t=v.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=le(o)),o}V.returns="color";function Ot(e,{precision:t=J.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let s;e=C(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??v.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!Ye(e)&&(i=le(Qe(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)s=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>Rt(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Rt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";s=`${c}(${u.join(r.commas?", ":" ")}${f})`}return s}const uc=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],dc=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Xt=new L({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:uc,fromXYZ_M:dc,formats:{color:{}}});const ft=1.09929682680944,oo=.018053968510807;var aa=new L({id:"rec2020",name:"REC.2020",base:Xt,toBase(e){return e.map(function(t){return t<oo*4.5?t/4.5:Math.pow((t+ft-1)/ft,1/.45)})},fromBase(e){return e.map(function(t){return t>=oo?ft*Math.pow(t,.45)-(ft-1):4.5*t})},formats:{color:{}}});const fc=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],hc=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ia=new L({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:fc,fromXYZ_M:hc});const pc=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],mc=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var la=new L({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:pc,fromXYZ_M:mc,formats:{color:{}}}),so={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ao=Array(3).fill("<percentage> | <number>[0, 255]"),io=Array(3).fill("<number>[0, 255]");var et=new L({id:"srgb",name:"sRGB",base:la,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ao},rgb_number:{name:"rgb",commas:!0,coords:io,noAlpha:!0},color:{},rgba:{coords:ao,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:io},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=so.black,t.alpha=0):t.coords=so[e],t.coords)return t}}}}),ca=new L({id:"p3",name:"P3",base:ia,fromBase:et.fromBase,toBase:et.toBase,formats:{color:{id:"display-p3"}}});J.display_space=et;if(typeof CSS<"u"&&CSS.supports)for(let e of[D,aa,ca]){let t=e.getMinCoords(),n=Ot({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){J.display_space=e;break}}function gc(e,{space:t=J.display_space,...r}={}){let n=Ot(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!J.display_space)n=new String(n),n.color=e;else{let o=V(e,t);n=new String(Ot(o,r)),n.color=o}return n}function ua(e,t,r="lab"){r=v.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((s,a,i)=>{let l=o[i];return isNaN(a)||isNaN(l)?s:s+(l-a)**2},0))}function bc(e,t){return e=C(e),t=C(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ce(e){return I(e,[U,"y"])}function da(e,t){ie(e,[U,"y"],t)}function vc(e){Object.defineProperty(e.prototype,"luminance",{get(){return ce(this)},set(t){da(this,t)}})}var yc=Object.freeze({__proto__:null,getLuminance:ce,register:vc,setLuminance:da});function $c(e,t){e=C(e),t=C(t);let r=Math.max(ce(e),0),n=Math.max(ce(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const wc=.56,kc=.57,Cc=.62,xc=.65,lo=.022,Ec=1.414,Sc=.1,_c=5e-4,Tc=1.14,co=.027,Mc=1.14;function uo(e){return e>=lo?e:e+(lo-e)**Ec}function Ce(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Ac(e,t){t=C(t),e=C(e);let r,n,o,s,a,i;t=V(t,"srgb"),[s,a,i]=t.coords;let l=Ce(s)*.2126729+Ce(a)*.7151522+Ce(i)*.072175;e=V(e,"srgb"),[s,a,i]=e.coords;let c=Ce(s)*.2126729+Ce(a)*.7151522+Ce(i)*.072175,u=uo(l),d=uo(c),f=d>u;return Math.abs(d-u)<_c?n=0:f?(r=d**wc-u**kc,n=r*Tc):(r=d**xc-u**Cc,n=r*Mc),Math.abs(n)<Sc?o=0:n>0?o=n-co:o=n+co,o*100}function Pc(e,t){e=C(e),t=C(t);let r=Math.max(ce(e),0),n=Math.max(ce(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Rc=5e4;function Nc(e,t){e=C(e),t=C(t);let r=Math.max(ce(e),0),n=Math.max(ce(t),0);return n>r&&([r,n]=[n,r]),n===0?Rc:(r-n)/n}function Lc(e,t){e=C(e),t=C(t);let r=I(e,[D,"l"]),n=I(t,[D,"l"]);return Math.abs(r-n)}const Bc=216/24389,fo=24/116,ht=24389/27;let fr=q.D65;var Lr=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:fr,base:U,fromBase(e){let r=e.map((n,o)=>n/fr[o]).map(n=>n>Bc?Math.cbrt(n):(ht*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>fo?Math.pow(t[0],3):(116*t[0]-16)/ht,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ht,t[2]>fo?Math.pow(t[2],3):(116*t[2]-16)/ht].map((n,o)=>n*fr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const hr=Math.pow(5,.5)*.5+.5;function Oc(e,t){e=C(e),t=C(t);let r=I(e,[Lr,"l"]),n=I(t,[Lr,"l"]),o=Math.abs(Math.pow(r,hr)-Math.pow(n,hr)),s=Math.pow(o,1/hr)*Math.SQRT2-40;return s<7.5?0:s}var Et=Object.freeze({__proto__:null,contrastAPCA:Ac,contrastDeltaPhi:Oc,contrastLstar:Lc,contrastMichelson:Pc,contrastWCAG21:$c,contrastWeber:Nc});function Dc(e,t,r={}){at(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let s=Object.keys(Et).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=C(e),t=C(t);for(let s in Et)if("contrast"+n.toLowerCase()===s.toLowerCase())return Et[s](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function fa(e){let[t,r,n]=it(e,U),o=t+15*r+3*n;return[4*t/o,9*r/o]}function ha(e){let[t,r,n]=it(e,U),o=t+r+n;return[t/o,r/o]}function zc(e){Object.defineProperty(e.prototype,"uv",{get(){return fa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ha(this)}})}var jc=Object.freeze({__proto__:null,register:zc,uv:fa,xy:ha});function Hc(e,t){return ua(e,t,"lab")}const Vc=Math.PI,ho=Vc/180;function Fc(e,t,{l:r=2,c:n=1}={}){let[o,s,a]=D.from(e),[,i,l]=Ke.from(D,[o,s,a]),[c,u,d]=D.from(t),f=Ke.from(D,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,p=i-f,m=s-u,g=a-d,$=m**2+g**2-p**2,E=.511;o>=16&&(E=.040975*o/(1+.01765*o));let _=.0638*i/(1+.0131*i)+.638,S;Number.isNaN(l)&&(l=0),l>=164&&l<=345?S=.56+Math.abs(.2*Math.cos((l+168)*ho)):S=.36+Math.abs(.4*Math.cos((l+35)*ho));let k=Math.pow(i,4),R=Math.sqrt(k/(k+1900)),K=_*(R*S+1-R),G=(h/(r*E))**2;return G+=(p/(n*_))**2,G+=$/K**2,Math.sqrt(G)}const po=203;var hn=new v({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:U,fromBase(e){return e.map(t=>Math.max(t*po,0))},toBase(e){return e.map(t=>Math.max(t/po,0))}});const pt=1.15,mt=.66,mo=2610/2**14,Uc=2**14/2610,go=3424/2**12,bo=2413/2**7,vo=2392/2**7,Ic=1.7*2523/2**5,yo=2**5/(1.7*2523),gt=-.56,pr=16295499532821565e-27,Wc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Yc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Zc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],qc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var pa=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:hn,fromBase(e){let[t,r,n]=e,o=pt*t-(pt-1)*n,s=mt*r-(mt-1)*t,i=A(Wc,[o,s,n]).map(function(f){let h=go+bo*(f/1e4)**mo,p=1+vo*(f/1e4)**mo;return(h/p)**Ic}),[l,c,u]=A(Zc,i);return[(1+gt)*l/(1+gt*l)-pr,c,u]},toBase(e){let[t,r,n]=e,o=(t+pr)/(1+gt-gt*(t+pr)),a=A(qc,[o,r,n]).map(function(f){let h=go-f**yo,p=vo*f**yo-bo;return 1e4*(h/p)**Uc}),[i,l,c]=A(Yc,a),u=(i+(pt-1)*c)/pt,d=(l+(mt-1)*u)/mt;return[u,d,c]},formats:{color:{}}}),Br=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:pa,fromBase(e){let[t,r,n]=e,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Gt(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Gc(e,t){let[r,n,o]=Br.from(e),[s,a,i]=Br.from(t),l=r-s,c=n-a;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*a)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const ma=3424/4096,ga=2413/128,ba=2392/128,$o=2610/16384,Xc=2523/32,Jc=16384/2610,wo=32/2523,Kc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Qc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],eu=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],tu=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Or=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:hn,fromBase(e){let t=A(Kc,e);return ru(t)},toBase(e){let t=nu(e);return A(tu,t)},formats:{color:{}}});function ru(e){let t=e.map(function(r){let n=ma+ga*(r/1e4)**$o,o=1+ba*(r/1e4)**$o;return(n/o)**Xc});return A(Qc,t)}function nu(e){return A(eu,e).map(function(n){let o=Math.max(n**wo-ma,0),s=ga-ba*n**wo;return 1e4*(o/s)**Jc})}function ou(e,t){let[r,n,o]=Or.from(e),[s,a,i]=Or.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-a)**2+(o-i)**2)}const su=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],au=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],iu=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],lu=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Dt=new v({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:U,fromBase(e){let r=A(su,e).map(n=>Math.cbrt(n));return A(iu,r)},toBase(e){let r=A(lu,e).map(n=>n**3);return A(au,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function cu(e,t){let[r,n,o]=Dt.from(e),[s,a,i]=Dt.from(t),l=r-s,c=n-a,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var zt={deltaE76:Hc,deltaECMC:Fc,deltaE2000:Nr,deltaEJz:Gc,deltaEITP:ou,deltaEOK:cu};function We(e,t,r={}){at(r)&&(r={method:r});let{method:n=J.deltaE,...o}=r;e=C(e),t=C(t);for(let s in zt)if("deltae"+n.toLowerCase()===s.toLowerCase())return zt[s](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function uu(e,t=.25){let n=[v.get("oklch","lch"),"l"];return ie(e,n,o=>o*(1+t))}function du(e,t=.25){let n=[v.get("oklch","lch"),"l"];return ie(e,n,o=>o*(1-t))}var fu=Object.freeze({__proto__:null,darken:du,lighten:uu});function va(e,t,r=.5,n={}){[e,t]=[C(e),C(t)],se(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:s,premultiplied:a}=n;return lt(e,t,{space:o,outputSpace:s,premultiplied:a})(r)}function ya(e,t,r={}){let n;pn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:a=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[C(e),C(t)],n=lt(e,t,l));let c=We(e,t),u=o>0?Math.max(a,Math.ceil(c/o)+1):a,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,p)=>{let m=p*f;return{p:m,color:n(m)}})}if(o>0){let f=d.reduce((h,p,m)=>{if(m===0)return 0;let g=We(p.color,d[m-1].color,s);return Math.max(h,g)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let p=d[h-1],m=d[h],g=(m.p+p.p)/2,$=n(g);f=Math.max(f,We($,p.color),We($,m.color)),d.splice(h,0,{p:g,color:n(g)}),h++}}}return d=d.map(f=>f.color),d}function lt(e,t,r={}){if(pn(e)){let[l,c]=[e,t];return lt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:s,premultiplied:a}=r;e=C(e),t=C(t),e=Qe(e),t=Qe(t);let i={colors:[e,t],options:r};if(n?n=v.get(n):n=v.registry[J.interpolationSpace]||e.space,o=o?v.get(o):n,e=V(e,n),t=V(t,n),e=le(e),t=le(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[I(e,c),I(t,c)];[u,d]=lc(l,[u,d]),ie(e,c,u),ie(t,c,d)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=s?s(l):l;let c=e.coords.map((f,h)=>{let p=t.coords[h];return Nt(f,p,l)}),u=Nt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return a&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=V(d,o)),d},{rangeArgs:i})}function pn(e){return se(e)==="function"&&!!e.rangeArgs}J.interpolationSpace="lab";function hu(e){e.defineFunction("mix",va,{returns:"color"}),e.defineFunction("range",lt,{returns:"function<color>"}),e.defineFunction("steps",ya,{returns:"array<color>"})}var pu=Object.freeze({__proto__:null,isRange:pn,mix:va,range:lt,register:hu,steps:ya}),$a=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:et,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,s]=e,[a,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-s)/c+(o<s?6:0);break;case o:a=(s-n)/c+2;break;case s:a=(n-o)/c+4}a=a*60}return[a,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(s){let a=(s+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),wa=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:$a,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),mu=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:wa,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let s=1-n,a=s===0?0:1-r/s;return[t,a*100,s*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const gu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],bu=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ka=new L({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:gu,fromXYZ_M:bu}),vu=new L({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ka,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const yu=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],$u=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Ca=new L({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:fn,toXYZ_M:yu,fromXYZ_M:$u});const wu=1/512,ku=16/512;var Cu=new L({id:"prophoto",name:"ProPhoto",base:Ca,toBase(e){return e.map(t=>t<ku?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=wu?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),xu=new v({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Dt,fromBase(e){let[t,r,n]=e,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Gt(o)]},toBase(e){let[t,r,n]=e,o,s;return isNaN(n)?(o=0,s=0):(o=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,o,s]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const ko=203,Co=2610/2**14,Eu=2**14/2610,Su=2523/2**5,xo=2**5/2523,Eo=3424/2**12,So=2413/2**7,_o=2392/2**7;var _u=new L({id:"rec2100pq",name:"REC.2100-PQ",base:Xt,toBase(e){return e.map(function(t){return(Math.max(t**xo-Eo,0)/(So-_o*t**xo))**Eu*1e4/ko})},fromBase(e){return e.map(function(t){let r=Math.max(t*ko/1e4,0),n=Eo+So*r**Co,o=1+_o*r**Co;return(n/o)**Su})},formats:{color:{id:"rec2100-pq"}}});const To=.17883277,Mo=.28466892,Ao=.55991073,mr=3.7743;var Tu=new L({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Xt,toBase(e){return e.map(function(t){return t<=.5?t**2/3*mr:(Math.exp((t-Ao)/To)+Mo)/12*mr})},fromBase(e){return e.map(function(t){return t/=mr,t<=1/12?Math.sqrt(3*t):To*Math.log(12*t-Mo)+Ao})},formats:{color:{id:"rec2100-hlg"}}});const xa={};ae.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Ea(e.W1,e.W2,e.options.method))});ae.add("chromatic-adaptation-end",e=>{e.M||(e.M=Ea(e.W1,e.W2,e.options.method))});function Jt({id:e,toCone_M:t,fromCone_M:r}){xa[e]=arguments[0]}function Ea(e,t,r="Bradford"){let n=xa[r],[o,s,a]=A(n.toCone_M,e),[i,l,c]=A(n.toCone_M,t),u=[[i/o,0,0],[0,l/s,0],[0,0,c/a]],d=A(u,n.toCone_M);return A(n.fromCone_M,d)}Jt({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Jt({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Jt({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Jt({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(q,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});q.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Mu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Au=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Sa=new L({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:q.ACES,toXYZ_M:Mu,fromXYZ_M:Au,formats:{color:{}}});const bt=2**-16,gr=-.35828683,vt=(Math.log2(65504)+9.72)/17.52;var Pu=new L({id:"acescc",name:"ACEScc",coords:{r:{range:[gr,vt],name:"Red"},g:{range:[gr,vt],name:"Green"},b:{range:[gr,vt],name:"Blue"}},referred:"scene",base:Sa,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-bt)*2:r<vt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(bt)+9.72)/17.52:t<bt?(Math.log2(bt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Po=Object.freeze({__proto__:null,A98RGB:vu,A98RGB_Linear:ka,ACEScc:Pu,ACEScg:Sa,HSL:$a,HSV:wa,HWB:mu,ICTCP:Or,JzCzHz:Br,Jzazbz:pa,LCH:Ke,Lab:D,Lab_D65:Lr,OKLCH:xu,OKLab:Dt,P3:ca,P3_Linear:ia,ProPhoto:Cu,ProPhoto_Linear:Ca,REC_2020:aa,REC_2020_Linear:Xt,REC_2100_HLG:Tu,REC_2100_PQ:_u,XYZ_ABS_D65:hn,XYZ_D50:fn,XYZ_D65:U,sRGB:et,sRGB_Linear:la});class y{constructor(...t){let r;t.length===1&&(r=C(t[0]));let n,o,s;r?(n=r.space||r.spaceId,o=r.coords,s=r.alpha):[n,o,s]=t,Object.defineProperty(this,"space",{value:v.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=s<1?s:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:i=>this.set(a,i)})}get spaceId(){return this.space.id}clone(){return new y(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=gc(this,...t);return r.color=new y(r.color),r}static get(t,...r){return t instanceof y?t:new y(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:s}=n,a=function(...i){let l=r(...i);if(s==="color")l=y.get(l);else if(s==="function<color>"){let c=l;l=function(...u){let d=c(...u);return y.get(d)},Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>y.get(c)));return l};t in y||(y[t]=a),o&&(y.prototype[t]=function(...i){return a(this,...i)})}static defineFunctions(t){for(let r in t)y.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(y);else for(let r in t)y.defineFunction(r,t[r])}}y.defineFunctions({get:I,getAll:it,set:ie,setAll:sa,to:V,equals:bc,inGamut:Ye,toGamut:le,distance:ua,toString:Ot});Object.assign(y,{util:nc,hooks:ae,WHITES:q,Space:v,spaces:v.registry,parse:oa,defaults:J});for(let e of Object.keys(Po))v.register(Po[e]);for(let e in v.registry)Dr(e,v.registry[e]);ae.add("colorspace-init-end",e=>{var t;Dr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Dr(r,e)})});function Dr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(y.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,s)=>{try{return v.resolveCoord([t,s]),!0}catch{}return Reflect.has(o,s)},get:(o,s,a)=>{if(s&&typeof s!="symbol"&&!(s in o)){let{index:i}=v.resolveCoord([t,s]);if(i>=0)return o[i]}return Reflect.get(o,s,a)},set:(o,s,a,i)=>{if(s&&typeof s!="symbol"&&!(s in o)||s>=0){let{index:l}=v.resolveCoord([t,s]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,s,a,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}y.extend(zt);y.extend({deltaE:We});Object.assign(y,{deltaEMethods:zt});y.extend(fu);y.extend({contrast:Dc});y.extend(jc);y.extend(yc);y.extend(pu);y.extend(Et);function _a(e){return Me(e,(t,r)=>r instanceof y?O(r.toString({format:"hex"})):_a(r))}const Ru="dodgerblue";function zr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function br({background:e,foreground:t}){return{background:e??new y(zr(t)),foreground:t??new y(zr(e))}}var jt;(function(e){e.Dark="dark",e.Light="light"})(jt||(jt={}));function Nu(e){return e==="black"?"white":"black"}const Lu={black:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")},white:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")}},Bu={black:{backgroundFaint1:new y("#666"),backgroundFaint2:new y("#444")},white:{backgroundFaint1:new y("#ccc"),backgroundFaint2:new y("#fafafa")}};function Ro({themeColor:e=Ru,themeStyle:t=jt.Light}={}){const r=new y(e),n=new y(t===jt.Dark?"black":"white"),o=zr(n),s=new y(o),a={nav:{hover:br({background:r.clone().set({"hsl.l":93})}),active:br({background:r.clone().set({"hsl.l":90})}),selected:br({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Bu[Nu(o)],foreground:s,...Lu[o]}};return _a(a)}const Ht=Qr()("element-book-change-route"),No="vira-",{defineElement:ct,defineElementNoInputs:jd}=Ls({assertInputs:e=>{if(!e.tagName.startsWith(No))throw new Error(`Tag name should start with '${No}' but got '${e.tagName}'`)}}),Ta=x`
    pointer-events: none;
    opacity: 0.3;
`,Ze=oe({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Ou(e){return`${e}px`}const Vt=oe({"vira-form-input-border-radius":"8px"}),Ft=oe({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":x`calc(${Vt["vira-form-input-border-radius"].value} + 4px)`});function Ma({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=O(Ou(n+r+t));return x`
        ${O(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Ft["vira-focus-outline-color"].value};
            border-radius: ${Ft["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Se=x`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Aa=x`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,jr=oe({"vira-icon-color":"currentColor"}),Du=oe({"vira-icon-stroke-color":jr["vira-icon-color"].value,"vira-icon-fill-color":jr["vira-icon-color"].value}),F={...jr,...Du},W=ct()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>x`
        :host {
            display: inline-block;
            color: ${F["vira-icon-color"].value};
            fill: ${F["vira-icon-fill-color"].value};
            stroke: ${F["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Hr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Hr||(Hr={}));ct()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Hr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>x`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Aa};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Ft["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ta};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${Se};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Vt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Ze["vira-interaction-animation-duration"].value},
                background-color
                    ${Ze["vira-interaction-animation-duration"].value},
                border-color ${Ze["vira-interaction-animation-duration"].value};
        }

        ${Ma({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${W} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?b`
                  <${W.assign({icon:e.icon})}></${W}>
              `:"",r=e.text?b`
                  <span class="text-template">${e.text}</span>
              `:"";return b`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Vr;(function(e){e.Header="header"})(Vr||(Vr={}));ct()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>x`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Se};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Ze["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Pe()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const s=o.expanded?x`
                  height: ${e.contentHeight}px;
              `:x`
                  height: 0;
              `;return b`
            <button
                class="header-wrapper"
                ${j("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Vr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${Ns(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Fr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Fr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Pa({value:e,allowed:t,blocked:r}){const n=t?Fr({input:e,matcher:t}):!0,o=r?Fr({input:e,matcher:r}):!1;return n&&!o}function Lo(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Pa({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}ct()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Pe(),inputBlocked:Pe()},styles:({hostClasses:e,cssVars:t})=>x`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ft["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ta};
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
                ${Se};
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
                ${Aa};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${Se};
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
                border-radius: ${Vt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${Ze["vira-interaction-animation-duration"].value};
            }

            label {
                ${Se};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Vt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Ma({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${W} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Se};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:s}=Lo({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?b`
                  <${W.assign({icon:e.icon})}></${W}>
              `:"",i=e.fitText?x`
                  width: ${r.forcedInputWidth}px;
              `:"";return b`
            <label>
                ${a}
                ${Re(!!e.fitText,b`
                        <span
                            class="size-span"
                            ${Ns(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${hs({"have-value":!!s})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${j("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=s;let f=c.value??"";if(u)if(u.length===1)Pa({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:h,blocked:p}=Lo({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=h,t(new o.inputBlocked(p))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${Re(!!e.suffix,b`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});ct()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>x`
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
    `,events:{routeChange:Pe()},renderCallback({inputs:e,dispatch:t,events:r}){var o,s;function n(a){e.route&&Zs(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return b`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(s=e.route)==null?void 0:s.router.createRoutesUrl(e.route.route);return b`
                <a href=${a} rel="noopener noreferrer" ${j("click",n)}>
                    <slot></slot>
                </a>
            `}}});function De({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const zu=De({name:"Element16Icon",svgTemplate:b`
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
    `});De({name:"Element24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const ju=De({name:"Options24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${F["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `});De({name:"StatusFailure24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${F["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                stroke="none"
                fill=${F["vira-icon-stroke-color"].value}
                d="m11.33 12-3.7-4.17.74-.66L12 11.25l3.63-4.08.74.66-3.7 4.17 3.7 4.17-.74.66L12 12.75l-3.63 4.08-.74-.66 3.7-4.17Z"
            />
        </svg>
    `});De({name:"StatusInProgress24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${F["vira-icon-stroke-color"].value}
                fill="none"
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${F["vira-icon-stroke-color"].value}
                stroke="none"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${F["vira-icon-stroke-color"].value}
                stroke="none"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${F["vira-icon-stroke-color"].value}
                stroke="none"
            />
        </svg>
    `});De({name:"StatusSuccess24Icon",svgTemplate:b`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke=${F["vira-icon-stroke-color"].value}
                fill="none"
            />
            <path
                d="m6.64 13.81.7-.7 2.63 2.62 6.65-7.6.74.66-7.35 8.4-3.37-3.38Z"
                fill=${F["vira-icon-stroke-color"].value}
                stroke="none"
            />
        </svg>
    `});const Hu=x`
    padding: 0;
    margin: 0;
`;x`
    ${Hu}
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;const{defineElement:Y,defineElementNoInputs:Hd}=Ls(),H=Y()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>x`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return b`
            <a
                href=${r}
                ${j("click",s=>{(!e.router||Zs(s))&&(s.preventDefault(),window.scrollTo(0,0),t(new Ht(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Vu(e,t){return e.entry.entryType===P.Root?!1:!!(e.entry.entryType===P.Page||me(t,e.fullUrlBreadcrumbs.slice(0,-1))||me(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ee=Y()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>x`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${w["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${w["element-book-nav-hover-background-color"].value};
            color: ${w["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${w["element-book-nav-active-background-color"].value};
            color: ${w["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${H.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${w["element-book-nav-selected-background-color"].value};
            color: ${w["element-book-nav-selected-foreground-color"].value};
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

        ${W} {
            display: inline-flex;
            color: ${w["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Vu(r,e.selectedPath))return;const n=x`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return b`
                <li style=${n}>
                    <${H.assign({router:e.router,route:{paths:[N.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${hs({"title-row":!0,selected:e.selectedPath?me(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Re(Te(r,P.ElementExample),b`
                                    <${W.assign({icon:zu})}></${W}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${H}>
                </li>
            `});return b`
            <${H.assign({route:Ne,router:e.router})}>
                <slot name=${X.NavHeader}>Book</slot>
            </${H}>
            <ul>
                ${t}
            </ul>
        `}});async function Fu(e){await $r(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await xi(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const re=Y()({tagName:"book-error",styles:x`
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
    `,renderCallback({inputs:e}){return(It(e.message,"array")?e.message:[e.message]).map(r=>b`
                    <p>${r}</p>
                `)}}),Bo=Y()({tagName:"book-breadcrumbs",styles:x`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const s=n>=o.length-1,a=o.slice(0,n+1),i=s?"":b`
                      <span class="spacer">&gt;</span>
                  `;return b`
                <${H.assign({route:{hash:void 0,search:void 0,paths:[N.Book,...a]},router:e.router})}>
                    ${r}
                </${H}>
                ${i}
            `}):b`
                &nbsp;
            `}}),Oo=Y()({tagName:"book-breadcrumbs-bar",styles:x`
        :host {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${w["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${w["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return b`
            ${Re(!!e.currentSearch,b`
                    &nbsp;
                `,b`
                    <${Bo.assign({currentRoute:e.currentRoute,router:e.router})}></${Bo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${j("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await gi(200),n.value===o&&(n.value?t(new Ht({paths:[N.Search,encodeURIComponent(n.value)]})):t(new Ht(Ne)))})}
            />
        `}}),tt=Y()({tagName:"book-page-controls",events:{controlValueChange:Pe()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>x`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
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

        ${W}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],s)=>{if(o.controlType===T.Hidden)return"";const a=Uu(e.currentValues[n],o,i=>{const l=It(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return b`
                    <div class="control-wrapper">
                        ${Re(s===0,b`
                                <${W.assign({icon:ju})}
                                    class="options-icon"
                                ></${W}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function Uu(e,t,r){return we(t,T.Hidden)?"":we(t,T.Checkbox)?b`
            <input
                type="checkbox"
                .value=${e}
                ${j("input",n=>{const o=Ve(n,HTMLInputElement);r(o.checked)})}
            />
        `:we(t,T.Color)?b`
            <input
                type="color"
                .value=${e}
                ${j("input",n=>{const o=Ve(n,HTMLInputElement);r(o.value)})}
            />
        `:we(t,T.Text)?b`
            <input
                type="text"
                .value=${e}
                ${j("input",n=>{const o=Ve(n,HTMLInputElement);r(o.value)})}
            />
        `:we(t,T.Number)?b`
            <input
                type="number"
                .value=${e}
                ${j("input",n=>{const o=Ve(n,HTMLInputElement);r(o.value)})}
            />
        `:we(t,T.Dropdown)?b`
            <select
                .value=${e}
                ${j("input",n=>{const o=Ve(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>b`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:b`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Do=Y()({tagName:"book-entry-description",styles:x`
        :host {
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${w["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>b`
                <p>${t}</p>
            `)}}),zo=Y()({tagName:"book-page-wrapper",styles:x`
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

        ${H} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?b`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:b`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[N.Book,...e.pageNode.fullUrlBreadcrumbs],n=Jo(e.pageNode.entry.errors);return n&&console.error(n),b`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${H.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${H}>
                    ${n?b`
                              <${re.assign({message:n.message})}></${re}>
                          `:b`
                              <${Do.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Do}>
                              <${tt.assign({config:e.pageNode.entry.controls,currentValues:cn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${tt}>
                          `}
                </div>
            </div>
        `}}),yt=Y()({tagName:"book-element-example-controls",styles:x`
        :host {
            display: flex;
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[N.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return b`
            <${H.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${H}>
        `}}),jo=Symbol("unset-internal-state"),Ho=Y()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:jo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Jo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===jo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return b`
                ${Re(!!t.elementExampleNode.entry.styles,b`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),b`
                <${re.assign({message:`${t.elementExampleNode.entry.title} failed: ${Ut(n)}`})}></${re}>
            `}},options:{allowPolymorphicState:!0}}),Vo=Y()({tagName:"book-element-example-wrapper",styles:x`
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

        ${yt} {
            color: ${w["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${yt} {
            color: ${w["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return b`
            <div class="individual-example-wrapper">
                <${yt.assign(mi(e,["currentPageControls"]))}></${yt}>
                <${Ho.assign(e)}></${Ho}>
            </div>
        `}}),Ie=Y()({tagName:"book-entry-display",styles:x`
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
    `,renderCallback:({inputs:e})=>{const t=Ar(e.currentRoute.paths),r=Iu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,controls:e.controls,originalTree:e.originalTree});return b`
            <${Oo.assign({currentSearch:t,currentRoute:e.currentRoute,router:e.router})}></${Oo}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${X.Footer}></slot>
        `}});function Ra(e,t,r,n){const o=Mr(r,n),s=[];if(o){const a=Ra(e,t,o,n);a&&s.push(a)}if(Te(r,P.Page)&&!e.includes(r)){const a=cn(t,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:a,breadcrumbs:Me(a,()=>r.fullUrlBreadcrumbs)})}return s.reduce((a,i)=>({config:{...a.config,...i.config},current:{...a.current,...i.current},breadcrumbs:{...a.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Iu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:s}){if(!e.length&&n)return[b`
                No results
            `];const a=_n(e,1)?Ra(e,o,e[0],s):void 0,i=a&&Object.values(a.config).length&&_n(e,1)?b`
                  <${tt.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${tt}>
              `:"",l=Li(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Te(c,P.Page))return b`
                    <${zo.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${zo}>
                `;if(Te(c,P.ElementExample)){const d=cn(o,c.fullUrlBreadcrumbs.slice(0,-1));return b`
                    <${Vo.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Vo}>
                `}else return Te(c,P.Root)?b``:b`
                    <${re}
                        class="block-entry"
                        ${Rs(re,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${re}>
                `});return[i,l]}function Wu(e,t,r){const n=Fo(e,t);if(n.length)return n;r(Ne);const o=Fo(e,Ne.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Fo(e,t){return e.filter(r=>$i({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const $t=As()({tagName:"element-book-app",events:{pathUpdate:Pe()},stateInitStatic:{currentRoute:Ne,router:void 0,loading:!1,colors:{config:void 0,theme:Ro(void 0)},treeBasedControls:void 0},styles:x`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${w["element-book-page-background-color"].value};
            color: ${w["element-book-page-foreground-color"].value};
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

        ${Ie} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ee} {
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
    `,initCallback({host:e,state:t}){setTimeout(()=>{Uo(e,Ar(t.currentRoute.paths),t.currentRoute)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:s})=>{var i,l,c,u,d,f;t._debug&&console.info("rendering element-book app");try{let h=function(k){e.router?e.router.setRoutes(k):n({currentRoute:{...e.currentRoute,...k}}),t.elementBookRoutePaths&&!me(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new s.pathUpdate(k.paths??[]))};var a=h;if(t.elementBookRoutePaths&&!me(t.elementBookRoutePaths,e.currentRoute.paths)&&h({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const k=Ql(t.internalRouterConfig.basePath);n({router:k}),k.addRouteListener(!0,R=>{n({currentRoute:R})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const p={themeColor:t.themeColor};if(!me(p,(c=e.colors)==null?void 0:c.config)){const k=Ro(p);n({colors:{config:p,theme:k}}),rc(r,k)}const m=t._debug??!1,g=Ll({entries:t.entries,debug:m});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Ws(g.tree,{children:(d=(u=e.treeBasedControls)==null?void 0:u.controls)==null?void 0:d.children,controls:t.globalValues})}}));const $=Ar(e.currentRoute.paths),_=($?Vl({flattenedNodes:g.flattenedNodes,searchQuery:$}):void 0)??Wu(g.flattenedNodes,e.currentRoute.paths,h),S=(f=e.treeBasedControls)==null?void 0:f.controls;return S?(t._debug&&console.info({currentControls:S}),b`
                <div
                    class="root"
                    ${j(Ht,async k=>{const R=r.shadowRoot.querySelector(Ie.tagName);for(n({loading:!0});!r.shadowRoot.querySelector(".loading");)await $r();if(await $r(),R?R.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Ie.tagName}' for scrolling.`),h(k.detail),!(r.shadowRoot.querySelector(ee.tagName)instanceof ee))throw new Error(`Failed to find child '${ee.tagName}'`);n({loading:!1}),Uo(r,$,e.currentRoute)})}
                    ${j(tt.events.controlValueChange,k=>{if(!e.treeBasedControls)return;const R=Ol(S,k.detail.fullUrlBreadcrumbs,k.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:R}})})}
                >
                    <${ee.assign({flattenedNodes:g.flattenedNodes,router:e.router,selectedPath:$?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${X.NavHeader}
                            slot=${X.NavHeader}
                        ></slot>
                    </${ee}>
                    ${e.loading?b`
                              <div class="loading">Loading...</div>
                          `:b`
                              <${Ie.assign({currentRoute:e.currentRoute,currentNodes:_,router:e.router,debug:m,controls:S,originalTree:g.tree})}>
                                  <slot
                                      name=${X.Footer}
                                      slot=${X.Footer}
                                  ></slot>
                              </${Ie}>
                          `}
                </div>
            `):b`
                    <${re.assign({message:"Failed to generate page controls."})}></${re}>
                `}catch(h){return console.error(h),b`
                <p class="error">${Ut(h)}</p>
            `}}});async function Uo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ee.tagName);if(!(n instanceof ee))throw new Error(`Failed to find child '${ee.tagName}'`);await Fu(n)}var Yu=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,s){function a($){if($!==void 0&&typeof $!="function")throw new TypeError("Function expected");return $}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var m in n)p[m]=m==="access"?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function($){if(f)throw new TypeError("Cannot add initializers after decoration has completed");s.push(a($||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=a(g.get))&&(u.get=d),(d=a(g.set))&&(u.set=d),(d=a(g.init))&&o.unshift(d)}else(d=a(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},Zu=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},qu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Gu(){function e(t,r){return t}return e}let Na=(()=>{let e=[Gu()],t,r=[],n;return n=class extends _e{},qu(n,"DeclarativeElement"),Yu(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,Zu(n,r),n})();function Xu(e){return!!e}const Ju={capitalizeFirstLetter:!1};function Ku(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Qu(e,t){return t.capitalizeFirstLetter?Ku(e):e}function ed(e,t=Ju){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""});return Qu(n,t)}function td(e){return e?e instanceof Error?e.message:mn(e,"message")?String(e.message):String(e):""}function rd(e){return e instanceof Error?e:new Error(td(e))}function nd(e){return!!e&&typeof e=="object"}const od=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function mn(e,t){return e?od.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ye(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function La(e,t){let r=!1;const n=ye(e).reduce((o,s)=>{const a=t(s,e[s],e);return a instanceof Promise&&(r=!0),{...o,[s]:a}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(ye(n).map(async a=>{const i=await n[a];n[a]=i})),o(n)}catch(a){s(a)}}):n}const Ba=Symbol("key for ignoring inputs not having been set yet"),sd={[Ba]:!0,allowPolymorphicState:!1};function Oa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Na?!0:Oa(r)}function Da(e,t){const r=e.instanceState;ye(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&ye(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),ad(e)}function ad(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Io(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class id extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function ld(){return e=>{var t;return t=class extends id{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function cd(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=ld()(r);return t[r]=n,t},{}):{}}const ud="_elementVirStateSetup";function dd(e){return nd(e)?ud in e:!1}const fd=_s({addListener(){return!1},removeListener(){return!1},value:Ss()});function vr(e){return Ts(e,fd,{allowExtraKeys:!0})}function hd(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Wo(e,t){const r=e;function n(a){t?hd(a,e,e.tagName):Wt()(e,a)}function o(a,i){return n(i),r[i]}return new Proxy({},{get:o,set:(a,i,l)=>{const c=dd(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(p){a[i]=p,r[i]=p}const f=e.observablePropertyListenerMap[i];if(u!==c&&vr(u)&&(f!=null&&f.length)&&u.removeListener(f),vr(c))if(f)c.addListener(f);else{let p=function(){e.requestUpdate()};var h=p;e.observablePropertyListenerMap[i]=p,c.addListener(p)}else vr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:a=>Reflect.ownKeys(a),getOwnPropertyDescriptor(a,i){if(i in a)return{get value(){return o(a,i)},configurable:!0,enumerable:!0}},has:(a,i)=>Reflect.has(a,i)})}function pd(e){return e?La(e,t=>t):{}}function md({hostClassNames:e,cssVars:t}){return{hostClasses:La(e,(r,n)=>({name:O(n),selector:O(`:host(.${n})`)})),cssVars:t}}function gd({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&ye(t).forEach(s=>{const a=t[s],i=r[s];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function bd(e,t){function r(o){ye(o).forEach(s=>{const a=o[s];e.instanceState[s]=a})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var vd=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function za(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...sd,...e.options},n=cd(e.events),o=pd(e.hostClasses);e.hostClasses&&Io(e.tagName,e.hostClasses),e.cssVars&&Io(e.tagName,e.cssVars);const s=e.cssVars?oe(e.cssVars):{},a=typeof e.styles=="function"?e.styles(md({hostClassNames:o,cssVars:s})):e.styles||ge``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends Na{createRenderParams(){return bd(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){try{Oa(this)&&!this.haveInputsBeenSet&&!r[Ba]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${za.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return gd({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=rd(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){Da(this,u)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Wo(this,!1),this.instanceState=Wo(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};ye(u).forEach(f=>{Wt()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},vd(t,"anonymousClass"),t.tagName=e.tagName,t.styles=a,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=s,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:ed(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function ja(e,t){return $d(e,t),e.element}function yd(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function $d(e,t){const r=yd(e),n=r?`: in ${r}`:"";if(e.type!==rt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function wd(e,t){return t?Yo(e,t):Yo(void 0,e)}const Yo=$e(class extends ue{constructor(e){super(e),this.element=ja(e,"assign")}render(e,t){return Da(this.element,t),z}});function Zo(e,t){return kd(e,t)}const kd=$e(class extends ue{constructor(e){super(e),this.element=ja(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),z}});function Cd(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const s=e.map(i=>[i]);return s.length||(s[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(s[i]=[])}),t.forEach(i=>{const l=s[i.index];l&&l.splice(0,0,...i.values)}),s.flat()}function Ur(e){return mn(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function gn(e){return mn(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ha(e){return e.map(t=>Ur(t)?t.definition:t).filter(t=>gn(t))}const Va=new WeakMap;function xd(e,t){var o;const r=Ha(t);return(o=Fa(Va,[e,...r]).value)==null?void 0:o.template}function Ed(e,t,r){const n=Ha(t);return Ia(Va,[e,...n],r)}function Fa(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Ua(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Fa(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Ua(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Ia(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:a}=Ua(e,t,n);if(!s)return{result:!1,reason:a};const i=o??{nested:void 0,template:void 0};if(o||e.set(s,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Ia(l,t,r,n+1)}const Sd=new WeakMap;function Wa(e,t,r){const n=xd(e,t),o=n??r();if(!n){const i=Ed(e,t,o);if(i.result)Sd.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const s=o.valuesTransform(t),a=Cd(t,s.valueInsertions,s.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Ya(e,t,r,n){const o=[],s=[],a=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let m,g=[];if(typeof f=="string"&&(m=r(f,c,p),m)){o[d]=f+m.replacement,a.push(h);const E=m.getExtraValues;g=E?E(p):[],g.length&&E?(o[d]+=" ",g.forEach((_,S)=>{S&&o.push(" ")}),i.push(_=>{const S=_[h],k=E(S);return{index:h,values:k}}),o.push(c)):o[d]+=c}m||o.push(c);const $=e.raw[u];m?(s[d]=s[d]+m.replacement+$,g.length&&g.forEach(()=>{s.push("")})):s.push($)}),{templateStrings:Object.assign([],o,{raw:s}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:a,valueInsertions:u}}}}function _d(...[e,t,r]){if(gn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Td(e,t){return Ya(e,t,_d)}function Ir(e,...t){const r=Wa(e,t,()=>Td(e,t));return ge(r.strings,...r.values)}function Md(...[e,t,r]){const n=Ur(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),s=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||s,i=gn(n);if(a&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!a||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Ur(c)?c.inputs:void 0;return[o&&u?wd(u):void 0].filter(Xu)}}}function Ad(e){}function Pd(e){return Ya(e.strings,e.values,Md,Ad)}function Za(e,...t){const r=ss(e,...t),n=Wa(e,t,()=>Pd(r));return{...r,strings:n.strings,values:n.values}}const bn=wi()({title:"Parent Page 1",parent:void 0,controls:{"Parent Control":{controlType:T.Color,initValue:"#33ccff"},"Hidden control":{controlType:T.Hidden,initValue:new RegExp("this can be anything")}}}),Wr=Be({title:"Parent Page 2",parent:void 0}),qo=Be({title:"Sub Page 1",parent:Wr});function Go(e,t){return Be({title:`test ${e}`,parent:t,elementExamplesCallback({defineExample:n}){Array(20).fill(0).forEach((o,s)=>{n({title:`example ${e} ${s}`,renderCallback(){return"element example here"}})})}})}const Xo=Be({title:"duplicate error page",parent:bn,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:e}){e({title:"example 1",renderCallback(){return"hi"}}),e({title:"example 2",renderCallback(){return"hi"}})}}),Rd=Be({title:"test 3",controls:{thing:{initValue:"there",controlType:T.Text},thing2:{initValue:!1,controlType:T.Checkbox},thing3:{initValue:"hello",controlType:T.Dropdown,options:["hello","hi","yo"]}},parent:bn,elementExamplesCallback({defineExample:e}){e({title:"example 3 1",renderCallback(){return"hi"}}),e({title:"example 3 2",styles:Ir`
                .color-control {
                    width: 20px;
                    height: 20px;);
                }
            `,renderCallback({controls:t}){const r=Ir`
                    background-color: ${O(t["Parent Control"])};
                `;return Za`
                    hello ${t.thing}, ${t.thing2}
                    <div style=${r} class="color-control"></div>
                    selected: ${t.thing3} ${t["Hidden control"]}
                    <br />
                    global: ${t.testGlobalControl}
                `}}),e({title:"example with error",renderCallback(){return"broken"}}),e({title:"example with error",renderCallback(){return"broken"}})}}),qa=[bn,Go(0,Wr),qo,...Array(100).fill(0).map((e,t)=>Go(t+1,qo)),Xo,Xo,Rd,Wr];console.info({entries:qa});za({tagName:"vir-app",styles:Ir`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${$t} {
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
    `,stateInitStatic:{themeColor:void 0,paths:["book"]},renderCallback:({state:e,updateState:t})=>Za`
            <label>
                Theme color
                <input
                    ${Zo("input",r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("input element not found for input event");t({themeColor:n.value})})}
                    type="color"
                />
            </label>
            <${$t.assign({entries:qa,themeColor:e.themeColor,internalRouterConfig:{useInternalRouter:!0},_debug:!0,globalValues:{testGlobalControl:"it worked!"}})}
                ${Zo($t.events.pathUpdate,r=>{t({paths:r.detail})})}
            >
                <h1 slot=${X.NavHeader}>My Title</h1>
                <footer slot=${X.Footer}>Example Footer</footer>
            </${$t}>
        `});
