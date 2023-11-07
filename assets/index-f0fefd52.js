var ba=Object.defineProperty;var va=(e,t,r)=>t in e?ba(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var vr=(e,t,r)=>(va(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function fn(e){return!!e}function $a(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var In;(function(e){e.Upper="upper",e.Lower="lower"})(In||(In={}));const ya=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function nr(e,t){return e?ya.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ks(e,t){return e&&t.every(r=>nr(e,r))}function _s(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>or(r).trim()).join(`
`))}function or(e){return e?e instanceof Error?e.message:nr(e,"message")?String(e.message):String(e):""}function wa(e){return e instanceof Error?e:new Error(or(e))}function Dn(e){return!!e&&typeof e=="object"}function Nt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ea(e){return Array.isArray(e)?"array":typeof e}function sr(e,t){return Ea(e)===t}function Un({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Fn="Failed to compare objects using JSON.stringify";function Vn(e,t,r){return Un({source:e,errorHandler(n){if(r)return"";throw n}})===Un({source:t,errorHandler(n){if(r)return"";throw n}})}function ie(e,t,r={}){try{return e===t?!0:Dn(e)&&Dn(t)?Vn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ie(e[o],t[o])):!1:Vn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=wa(n);throw o.message.startsWith(Fn)||(o.message=`${Fn}: ${o.message}`),o}}function xa(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ka(e){return Nt(e).filter(t=>isNaN(Number(t)))}function _a(e){return ka(e).map(r=>e[r])}function Ta(e,t){return _a(t).includes(e)}function Ca(e,t){return Nt(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Sa(e,t){return Ca(e,r=>!t.includes(r))}function Bt(e,t){let r=!1;const n=Nt(e).reduce((o,s)=>{const i=t(s,e[s],e);return i instanceof Promise&&(r=!0),{...o,[s]:i}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(Nt(n).map(async i=>{const a=await n[i];n[i]=a})),o(n)}catch(i){s(i)}}):n}function Wn(e,t){try{return Ma(e,t),!0}catch{return!1}}function Ma(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Ts(){let e,t,r=!1;const n=new Promise((o,s)=>{e=i=>(r=!0,o(i)),t=i=>{r=!0,s(i)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ts.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Aa(e){const t=Ts();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const La=globalThis.crypto;function Ra(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return La.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Pa(e,t){return nr(e,"entryType")&&e.entryType===t}var P;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(P||(P={}));function Ae(e,t){return e.controlType===t}var M;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(M||(M={}));const Cs=Symbol("any-type"),Ha={[M.Checkbox]:!1,[M.Color]:"",[M.Dropdown]:"",[M.Hidden]:Cs,[M.Number]:0,[M.Text]:""};function Na(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const s=Ha[o.controlType];s!==Cs&&(typeof s!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof s} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function hn(e,t){const r=Ot(e.title);return e.parent?[...hn(e.parent,!1),Ot(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Ot(e){return $a(e).toLowerCase().replaceAll(/\s/g,"-")}function Ba({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Oa(){return e=>Ue(e)}function Ue(e){const t={...e,entryType:P.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:P.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(fn)};r.add(n.title),t.elementExamples[Ot(o.title)]=o}}),t}var Z;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(Z||(Z={}));var Yn;(function(e){e.Upper="upper",e.Lower="lower"})(Yn||(Yn={}));function za(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Ss(){let e,t,r=!1;const n=new Promise((o,s)=>{e=i=>(r=!0,o(i)),t=i=>{r=!0,s(i)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ss.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}async function Ir(e=1){const t=Ss();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function ja(e){return Ia(e,1)}async function Ia(e,t){return new Promise(r=>{new IntersectionObserver((o,s)=>{za(o,1),s.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=window,pn=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mn=Symbol(),Gn=new WeakMap;let Ms=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==mn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(pn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Gn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Gn.set(r,t))}return t}toString(){return this.cssText}};const X=e=>new Ms(typeof e=="string"?e:e+"",void 0,mn),Mt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Ms(r,e,mn)},Da=(e,t)=>{pn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=St.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},qn=pn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return X(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $r;const zt=window,Zn=zt.trustedTypes,Ua=Zn?Zn.emptyScript:"",Xn=zt.reactiveElementPolyfillSupport,Dr={toAttribute(e,t){switch(t){case Boolean:e=e?Ua:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},As=(e,t)=>t!==e&&(t==t||e==e),yr={attribute:!0,type:String,converter:Dr,reflect:!1,hasChanged:As},Ur="finalized";let He=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=yr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const s=this[t];this[r]=o,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||yr}static finalize(){if(this.hasOwnProperty(Ur))return!1;this[Ur]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(qn(o))}else t!==void 0&&r.push(qn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Da(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=yr){var o;const s=this.constructor._$Ep(t,n);if(s!==void 0&&n.reflect===!0){const i=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Dr).toAttribute(r,n.type);this._$El=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,s=o._$Ev.get(t);if(s!==void 0&&this._$El!==s){const i=o.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:Dr;this._$El=s,this[s]=a.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||As)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};He[Ur]=!0,He.elementProperties=new Map,He.elementStyles=[],He.shadowRootOptions={mode:"open"},Xn==null||Xn({ReactiveElement:He}),(($r=zt.reactiveElementVersions)!==null&&$r!==void 0?$r:zt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wr;const jt=window,Oe=jt.trustedTypes,Kn=Oe?Oe.createPolicy("lit-html",{createHTML:e=>e}):void 0,It="$lit$",re=`lit$${(Math.random()+"").slice(9)}$`,gn="?"+re,Fa=`<${gn}>`,xe=document,Dt=()=>xe.createComment(""),Qe=e=>e===null||typeof e!="object"&&typeof e!="function",Ls=Array.isArray,Rs=e=>Ls(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Er=`[ 	
\f\r]`,Ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jn=/-->/g,Qn=/>/g,ge=RegExp(`>|${Er}(?:([^\\s"'>=/]+)(${Er}*=${Er}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eo=/'/g,to=/"/g,Ps=/^(?:script|style|textarea|title)$/i,ce=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),ro=new WeakMap,we=xe.createTreeWalker(xe,129,null,!1);function Hs(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kn!==void 0?Kn.createHTML(t):t}const Ns=(e,t)=>{const r=e.length-1,n=[];let o,s=t===2?"<svg>":"",i=Ye;for(let a=0;a<r;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(i.lastIndex=f,u=i.exec(l),u!==null);)f=i.lastIndex,i===Ye?u[1]==="!--"?i=Jn:u[1]!==void 0?i=Qn:u[2]!==void 0?(Ps.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=ge):u[3]!==void 0&&(i=ge):i===ge?u[0]===">"?(i=o??Ye,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?ge:u[3]==='"'?to:eo):i===to||i===eo?i=ge:i===Jn||i===Qn?i=Ye:(i=ge,o=void 0);const h=i===ge&&e[a+1].startsWith("/>")?" ":"";s+=i===Ye?l+Fa:d>=0?(n.push(c),l.slice(0,d)+It+l.slice(d)+re+h):l+re+(d===-2?(n.push(void 0),a):h)}return[Hs(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};let Fr=class Bs{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let s=0,i=0;const a=t.length-1,l=this.parts,[c,u]=Ns(t,r);if(this.el=Bs.createElement(c,n),we.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=we.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(It)||f.startsWith(re)){const h=u[i++];if(d.push(f),h!==void 0){const p=o.getAttribute(h.toLowerCase()+It).split(re),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:g[2],strings:p,ctor:g[1]==="."?js:g[1]==="?"?Is:g[1]==="@"?Ds:ct})}else l.push({type:6,index:s})}for(const f of d)o.removeAttribute(f)}if(Ps.test(o.tagName)){const d=o.textContent.split(re),f=d.length-1;if(f>0){o.textContent=Oe?Oe.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],Dt()),we.nextNode(),l.push({type:2,index:++s});o.append(d[f],Dt())}}}else if(o.nodeType===8)if(o.data===gn)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(re,d+1))!==-1;)l.push({type:7,index:s}),d+=re.length-1}s++}}static createElement(t,r){const n=xe.createElement("template");return n.innerHTML=t,n}};function ke(e,t,r=e,n){var o,s,i,a;if(t===ce)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Qe(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(a=r)._$Co)!==null&&i!==void 0?i:a._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=ke(e,l._$AS(e,t.values),l,n)),t}let Os=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,s=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:xe).importNode(n,!0);we.currentNode=s;let i=we.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new bn(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new Us(i,this,t)),this._$AV.push(u),c=o[++l]}a!==(c==null?void 0:c.index)&&(i=we.nextNode(),a++)}return we.currentNode=xe,s}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}},bn=class zs{constructor(t,r,n,o){var s;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ke(this,t,r),Qe(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==ce&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Rs(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&Qe(this._$AH)?this._$AA.nextSibling.data=t:this.$(xe.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Fr.createElement(Hs(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(n);else{const i=new Os(s,this),a=i.u(this.options);i.v(n),this.$(a),this._$AH=i}}_$AC(t){let r=ro.get(t.strings);return r===void 0&&ro.set(t.strings,r=new Fr(t)),r}T(t){Ls(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of t)o===r.length?r.push(n=new zs(this.k(Dt()),this.k(Dt()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}},ct=class{constructor(t,r,n,o,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const s=this.strings;let i=!1;if(s===void 0)t=ke(this,t,r,0),i=!Qe(t)||t!==this._$AH&&t!==ce,i&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=ke(this,a[n+l],r,l),c===ce&&(c=this._$AH[l]),i||(i=!Qe(c)||c!==this._$AH[l]),c===A?t=A:t!==A&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},js=class extends ct{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}};const Va=Oe?Oe.emptyScript:"";let Is=class extends ct{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,Va):this.element.removeAttribute(this.name)}},Ds=class extends ct{constructor(t,r,n,o,s){super(t,r,n,o,s),this.type=5}_$AI(t,r=this){var n;if((t=(n=ke(this,t,r,0))!==null&&n!==void 0?n:A)===ce)return;const o=this._$AH,s=t===A&&o!==A||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==A&&(o===A||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}},Us=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ke(this,t)}};const Wa={O:It,P:re,A:gn,C:1,M:Ns,L:Os,R:Rs,D:ke,I:bn,V:ct,H:Is,N:Ds,U:js,F:Us},no=jt.litHtmlPolyfillSupport;no==null||no(Fr,bn),((wr=jt.litHtmlVersions)!==null&&wr!==void 0?wr:jt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xr;const Ut=window,ze=Ut.trustedTypes,oo=ze?ze.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vr="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,Fs="?"+se,Ya=`<${Fs}>`,_e=document,et=()=>_e.createComment(""),tt=e=>e===null||typeof e!="object"&&typeof e!="function",Vs=Array.isArray,Ga=e=>Vs(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",kr=`[ 	
\f\r]`,Ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,so=/-->/g,io=/>/g,be=RegExp(`>|${kr}(?:([^\\s"'>=/]+)(${kr}*=${kr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ao=/'/g,lo=/"/g,Ws=/^(?:script|style|textarea|title)$/i,qa=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Za=qa(1),ue=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),co=new WeakMap,Ee=_e.createTreeWalker(_e,129,null,!1);function Ys(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return oo!==void 0?oo.createHTML(t):t}const Xa=(e,t)=>{const r=e.length-1,n=[];let o,s=t===2?"<svg>":"",i=Ge;for(let a=0;a<r;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(i.lastIndex=f,u=i.exec(l),u!==null);)f=i.lastIndex,i===Ge?u[1]==="!--"?i=so:u[1]!==void 0?i=io:u[2]!==void 0?(Ws.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=be):u[3]!==void 0&&(i=be):i===be?u[0]===">"?(i=o??Ge,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?be:u[3]==='"'?lo:ao):i===lo||i===ao?i=be:i===so||i===io?i=Ge:(i=be,o=void 0);const h=i===be&&e[a+1].startsWith("/>")?" ":"";s+=i===Ge?l+Ya:d>=0?(n.push(c),l.slice(0,d)+Vr+l.slice(d)+se+h):l+se+(d===-2?(n.push(void 0),a):h)}return[Ys(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class rt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let s=0,i=0;const a=t.length-1,l=this.parts,[c,u]=Xa(t,r);if(this.el=rt.createElement(c,n),Ee.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=Ee.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Vr)||f.startsWith(se)){const h=u[i++];if(d.push(f),h!==void 0){const p=o.getAttribute(h.toLowerCase()+Vr).split(se),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:g[2],strings:p,ctor:g[1]==="."?Ja:g[1]==="?"?el:g[1]==="@"?tl:ir})}else l.push({type:6,index:s})}for(const f of d)o.removeAttribute(f)}if(Ws.test(o.tagName)){const d=o.textContent.split(se),f=d.length-1;if(f>0){o.textContent=ze?ze.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],et()),Ee.nextNode(),l.push({type:2,index:++s});o.append(d[f],et())}}}else if(o.nodeType===8)if(o.data===Fs)l.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(se,d+1))!==-1;)l.push({type:7,index:s}),d+=se.length-1}s++}}static createElement(t,r){const n=_e.createElement("template");return n.innerHTML=t,n}}function je(e,t,r=e,n){var o,s,i,a;if(t===ue)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=tt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(a=r)._$Co)!==null&&i!==void 0?i:a._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=je(e,l._$AS(e,t.values),l,n)),t}class Ka{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,s=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:_e).importNode(n,!0);Ee.currentNode=s;let i=Ee.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new ut(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new rl(i,this,t)),this._$AV.push(u),c=o[++l]}a!==(c==null?void 0:c.index)&&(i=Ee.nextNode(),a++)}return Ee.currentNode=_e,s}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class ut{constructor(t,r,n,o){var s;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=je(this,t,r),tt(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==ue&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ga(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.$(_e.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=rt.createElement(Ys(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(n);else{const i=new Ka(s,this),a=i.u(this.options);i.v(n),this.$(a),this._$AH=i}}_$AC(t){let r=co.get(t.strings);return r===void 0&&co.set(t.strings,r=new rt(t)),r}T(t){Vs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of t)o===r.length?r.push(n=new ut(this.k(et()),this.k(et()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ir{constructor(t,r,n,o,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const s=this.strings;let i=!1;if(s===void 0)t=je(this,t,r,0),i=!tt(t)||t!==this._$AH&&t!==ue,i&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=je(this,a[n+l],r,l),c===ue&&(c=this._$AH[l]),i||(i=!tt(c)||c!==this._$AH[l]),c===R?t=R:t!==R&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ja extends ir{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const Qa=ze?ze.emptyScript:"";class el extends ir{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,Qa):this.element.removeAttribute(this.name)}}class tl extends ir{constructor(t,r,n,o,s){super(t,r,n,o,s),this.type=5}_$AI(t,r=this){var n;if((t=(n=je(this,t,r,0))!==null&&n!==void 0?n:R)===ue)return;const o=this._$AH,s=t===R&&o!==R||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==R&&(o===R||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class rl{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){je(this,t)}}const uo=Ut.litHtmlPolyfillSupport;uo==null||uo(rt,ut),((xr=Ut.litHtmlVersions)!==null&&xr!==void 0?xr:Ut.litHtmlVersions=[]).push("2.8.0");const nl=(e,t,r)=>{var n,o;const s=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let i=s._$litPart$;if(i===void 0){const a=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=i=new ut(t.insertBefore(et(),a),a,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _r,Tr;let Ke=class extends He{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nl(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ue}};Ke.finalized=!0,Ke._$litElement$=!0,(_r=globalThis.litElementHydrateSupport)===null||_r===void 0||_r.call(globalThis,{LitElement:Ke});const fo=globalThis.litElementPolyfillSupport;fo==null||fo({LitElement:Ke});((Tr=globalThis.litElementVersions)!==null&&Tr!==void 0?Tr:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fe=e=>(...t)=>({_$litDirective$:e,values:t});let Se=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ol}=Wa,ho=()=>document.createComment(""),qe=(e,t,r)=>{var n;const o=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=o.insertBefore(ho(),s),a=o.insertBefore(ho(),s);r=new ol(i,a,e,e.options)}else{const i=r._$AB.nextSibling,a=r._$AM,l=a!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==a._$AU&&r._$AP(c)}if(i!==s||l){let c=r._$AA;for(;c!==i;){const u=c.nextSibling;o.insertBefore(c,s),c=u}}}return r},ve=(e,t,r=e)=>(e._$AI(t,r),e),sl={},il=(e,t=sl)=>e._$AH=t,al=e=>e._$AH,Cr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ll=Fe(class extends Se{constructor(e){var t;if(super(e),e.type!==ar.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((r=this.nt)===null||r===void 0)&&r.has(s))&&this.it.add(s);return this.render(t)}const o=e.element.classList;this.it.forEach(s=>{s in t||(o.remove(s),this.it.delete(s))});for(const s in t){const i=!!t[s];i===this.it.has(s)||!((n=this.nt)===null||n===void 0)&&n.has(s)||(i?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return ce}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},cl=Fe(class extends Se{constructor(e){if(super(e),e.type!==ar.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],s=[];let i=0;for(const a of e)o[i]=n?n(a,i):i,s[i]=r(a,i),i++;return{values:s,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const s=al(e),{values:i,keys:a}=this.ct(t,r,n);if(!Array.isArray(s))return this.ut=a,i;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,h=s.length-1,p=0,g=i.length-1;for(;f<=h&&p<=g;)if(s[f]===null)f++;else if(s[h]===null)h--;else if(l[f]===a[p])c[p]=ve(s[f],i[p]),f++,p++;else if(l[h]===a[g])c[g]=ve(s[h],i[g]),h--,g--;else if(l[f]===a[g])c[g]=ve(s[f],i[g]),qe(e,c[g+1],s[f]),f++,g--;else if(l[h]===a[p])c[p]=ve(s[h],i[p]),qe(e,s[f],s[h]),h--,p++;else if(u===void 0&&(u=po(a,p,g),d=po(l,f,h)),u.has(l[f]))if(u.has(l[h])){const v=d.get(a[p]),y=v!==void 0?s[v]:null;if(y===null){const _=qe(e,s[f]);ve(_,i[p]),c[p]=_}else c[p]=ve(y,i[p]),qe(e,s[f],y),s[v]=null;p++}else Cr(s[h]),h--;else Cr(s[f]),f++;for(;p<=g;){const v=qe(e,c[g+1]);ve(v,i[p]),c[p++]=v}for(;f<=h;){const v=s[f++];v!==null&&Cr(v)}return this.ut=a,il(e,c),ce}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Wr=class extends Se{constructor(t){if(super(t),this.et=A,t.type!==ar.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this.ft=void 0,this.et=t;if(t===ce)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Wr.directiveName="unsafeHTML",Wr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mo extends Wr{}mo.directiveName="unsafeSVG",mo.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ul(e,t,r){return e?t():r==null?void 0:r()}var dl=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,s){function i(y){if(y!==void 0&&typeof y!="function")throw new TypeError("Function expected");return y}for(var a=n.kind,l=a==="getter"?"get":a==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var g in n)p[g]=g==="access"?{}:n[g];for(var g in n.access)p.access[g]=n.access[g];p.addInitializer=function(y){if(f)throw new TypeError("Cannot add initializers after decoration has completed");s.push(i(y||null))};var v=(0,r[h])(a==="accessor"?{get:u.get,set:u.set}:u[l],p);if(a==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(d=i(v.get))&&(u.get=d),(d=i(v.set))&&(u.set=d),(d=i(v.init))&&o.unshift(d)}else(d=i(v))&&(a==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},fl=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},hl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function pl(){function e(t,r){return t}return e}let Gs=(()=>{let e=[pl()],t,r=[],n,o=Ke;return n=class extends o{},hl(n,"DeclarativeElement"),(()=>{const s=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;dl(null,t={value:n},e,{kind:"class",name:n.name,metadata:s},null,r),n=t.value,s&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:s}),fl(n,r)})(),n})();function ml(e){return!!e}const gl={capitalizeFirstLetter:!1};function bl(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function vl(e,t){return t.capitalizeFirstLetter?bl(e):e}function $l(e,t=gl){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const s=o[1];return s?s.toUpperCase():""});return vl(n,t)}var go;(function(e){e.Upper="upper",e.Lower="lower"})(go||(go={}));const yl=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function vn(e,t){return e?yl.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function wl(e){return e?e instanceof Error?e.message:vn(e,"message")?String(e.message):String(e):""}function El(e){return e instanceof Error?e:new Error(wl(e))}function xl(e){return!!e&&typeof e=="object"}function Te(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function qs(e,t){let r=!1;const n=Te(e).reduce((o,s)=>{const i=t(s,e[s],e);return i instanceof Promise&&(r=!0),{...o,[s]:i}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(Te(n).map(async i=>{const a=await n[i];n[i]=a})),o(n)}catch(i){s(i)}}):n}var Ie;(function(e){e.Upper="upper",e.Lower="lower"})(Ie||(Ie={}));function kl(e){return e.toLowerCase()!==e.toUpperCase()}function bo(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!kl(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Ie.Upper&&o!==o.toUpperCase())return!1;if(t===Ie.Lower&&o!==o.toLowerCase())return!1}return!0}function _l(e){return e.split("").reduce((r,n,o,s)=>{const i=o>0&&s[o-1]||"",a=o<s.length-1&&s[o+1]||"",l=bo(i,Ie.Lower,{blockNoCaseCharacters:!0})||bo(a,Ie.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Tl(e){return!!e&&typeof e=="object"}function vo(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Cl(e){return Array.isArray(e)?"array":typeof e}function Sl(e,t){return Cl(e)===t}function Ml(e,t){let r=!1;const n=vo(e).reduce((o,s)=>{const i=t(s,e[s],e);return i instanceof Promise&&(r=!0),{...o,[s]:i}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(vo(n).map(async i=>{const a=await n[i];n[i]=a})),o(n)}catch(i){s(i)}}):n}function Me(e){if(Tl(e))return Ml(e,(r,n)=>{if(!Sl(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(_l(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,i=r.startsWith("--")?X(r):r.startsWith("-")?Mt`-${X(r)}`:Mt`--${X(r)}`;return{name:i,value:Mt`var(${i}, ${X(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${Me.name}' function.`)}function Al({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ll=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Rl=(e,t,r)=>{t.constructor.createProperty(r,e)};function Zs(e){return(t,r)=>r!==void 0?Rl(e,t,r):Ll(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sr;((Sr=window.HTMLSlotElement)===null||Sr===void 0?void 0:Sr.prototype.assignedElements)!=null;function Pl(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(a=>!!a.index).length;if(n||o)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const l=s[a.index];l&&l.splice(0,0,...a.values)}),s.flat()}function Yr(e){return vn(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function $n(e){return vn(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Xs(e){return e.map(t=>Yr(t)?t.definition:t).filter(t=>$n(t))}const Ks=new WeakMap;function Hl(e,t){var o;const r=Xs(t);return(o=Js(Ks,[e,...r]).value)==null?void 0:o.template}function Nl(e,t,r){const n=Xs(t);return ei(Ks,[e,...n],r)}function Js(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Qs(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Js(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Qs(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function ei(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:s,reason:i}=Qs(e,t,n);if(!s)return{result:!1,reason:i};const a=o??{nested:void 0,template:void 0};if(o||e.set(s,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),ei(l,t,r,n+1)}const Bl=new WeakMap;function ti(e,t,r){const n=Hl(e,t),o=n??r();if(!n){const a=Nl(e,t,o);if(a.result)Bl.set(e,o);else throw new Error(`Failed to set template transform: ${a.reason}`)}const s=o.valuesTransform(t),i=Pl(t,s.valueInsertions,s.valueIndexDeletions);return{strings:o.templateStrings,values:i}}function ri(e,t,r,n){const o=[],s=[],i=[],a=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let g,v=[];if(typeof f=="string"&&(g=r(f,c,p),g)){o[d]=f+g.replacement,i.push(h);const _=g.getExtraValues;v=_?_(p):[],v.length&&_?(o[d]+=" ",v.forEach((S,C)=>{C&&o.push(" ")}),a.push(S=>{const C=S[h],O=_(C);return{index:h,values:O}}),o.push(c)):o[d]+=c}g||o.push(c);const y=e.raw[u];g?(s[d]=s[d]+g.replacement+y,v.length&&v.forEach(()=>{s.push("")})):s.push(y)}),{templateStrings:Object.assign([],o,{raw:s}),valuesTransform(c){const u=a.map(d=>d(c)).flat();return{valueIndexDeletions:i,valueInsertions:u}}}}function Ol(...[e,t,r]){if($n(r))return{replacement:r.tagName,getExtraValues:void 0}}function zl(e,t){return ri(e,t,Ol)}function E(e,...t){const r=ti(e,t,()=>zl(e,t));return Mt(r.strings,...r.values)}const yn=Symbol("key for ignoring inputs not having been set yet"),jl={[yn]:!0,allowPolymorphicState:!1};function ni(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Gs?!0:ni(r)}function oi(e,t){const r=e.instanceState;Te(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&Te(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Il(e)}function Il(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function $o(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Dl extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function wn(){return e=>{var t;return t=class extends Dl{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Ce(){return wn()}function Ul(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=wn()(r);return t[r]=n,t},{}):{}}const Fl="_elementVirStateSetup";function Vl(e){return xl(e)?Fl in e:!1}function Wl(e,t){return e.includes(t)}var yo;(function(e){e.Upper="upper",e.Lower="lower"})(yo||(yo={}));const Yl=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function At(e,t){return e?Yl.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function dt(e){return!!e&&typeof e=="object"}function Ft(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Gr(e){return Array.isArray(e)?"array":typeof e}function Ne(e,t){return Gr(e)===t}function Gl(e,t){let r=!1;const n=Ft(e).reduce((o,s)=>{const i=t(s,e[s],e);return i instanceof Promise&&(r=!0),{...o,[s]:i}},{});return r?new Promise(async(o,s)=>{try{await Promise.all(Ft(n).map(async i=>{const a=await n[i];n[i]=a})),o(n)}catch(i){s(i)}}):n}function ql(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Gr(e)===Gr(t)&&r}const si=Symbol("and"),ii=Symbol("or"),ai=Symbol("exact"),li=Symbol("enum"),En=Symbol("unknown"),ci="__vir__shape__definition__key__do__not__use__in__actual__objects";function ui(e){return At(e,ci)}const di="__vir__shape__specifier__key__do__not__use__in__actual__objects",Zl=[si,ii,ai,li,En];function Xl(){return Kl([],En)}function lr(e){return ft(e,ii)}function xn(e){return ft(e,si)}function kn(e){return ft(e,ai)}function _n(e){return ft(e,li)}function Tn(e){return ft(e,En)}function ft(e,t){const r=cr(e);return!!r&&r.specifierType===t}function Kl(e,t){return{[di]:!0,specifierType:t,parts:e}}function Lt(e,t){const r=cr(t);if(r){if(xn(r))return r.parts.every(n=>Lt(e,n));if(lr(r))return r.parts.some(n=>Lt(e,n));if(kn(r))return dt(e)?Lt(e,r.parts[0]):e===r.parts[0];if(_n(r))return Object.values(r.parts[0]).some(n=>n===e);if(Tn(r))return!0}return ql(e,t)}function cr(e){if(dt(e)&&At(e,di)){if(!At(e,"parts")||!Ne(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!At(e,"specifierType")||!Wl(Zl,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function qr(e,t=!1){return Zr(e)}function Zr(e){const t=cr(e);if(t){if(lr(t)||kn(t))return Zr(t.parts[0]);if(xn(t))return t.parts.reduce((r,n)=>Object.assign(r,Zr(n)),{});if(_n(t))return Object.values(t.parts[0])[0];if(Tn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return ui(e)?qr(e.shape):e instanceof RegExp||Ne(e,"array")?e:dt(e)?Gl(e,(r,n)=>qr(n)):e}function Jl(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:qr(e),[ci]:!0}}class q extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Ql(e,t,r={}){try{return ec(e,t,r),!0}catch{return!1}}function ec(e,t,r={}){$e(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function fi(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function $e(e,t,r,n){if(Tn(t))return!0;if(ui(t))return $e(e,t.shape,r,n);const o=fi(r);if(cr(e))throw new q(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Lt(e,t))throw new q(`Subject does not match shape definition at key ${o}`);if(Ne(t,"function"))return Ne(e,"function");if(dt(e)){const i=e,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(i).map(c=>[c,!1]));let l=!1;if(lr(t))l=t.parts.some(c=>{try{const u=$e(e,c,r,{...n});return Object.assign(a,u),!0}catch(u){if(u instanceof q)return!1;throw u}});else if(xn(t))l=t.parts.every(c=>{try{const u=$e(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(a,u),!0}catch(u){if(u instanceof q)return!1;throw u}});else if(kn(t)){const c=$e(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(a,c),l=!0}else{if(_n(t))throw new q(`Cannot compare an enum specifier to an object at ${o}`);if(Ne(t,"array")&&Ne(i,"array"))l=i.every((c,u)=>{const d=t.some(f=>{try{return $e(c,f,[...r,u],n),!0}catch(h){if(h instanceof q)return!1;throw h}});return a[u]=d,d});else{const c=tc({keys:r,options:n,shape:t,subject:e});Object.assign(a,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(a).filter(d=>!a[d]).join(",")}`;throw new q(u)}return n.ignoreExtraKeys||Object.entries(a).forEach(([c,u])=>{if(!u)throw new q(`subject as extra key '${c}' in ${o}.`)}),a}else if(n.exactValues)return e===t;return!0}function tc({keys:e,options:t,shape:r,subject:n}){const o=fi(e),s={};if(dt(r)){const i=new Set(Ft(n)),a=new Set(Ft(r));t.ignoreExtraKeys||i.forEach(l=>{if(!a.has(l))throw new q(`Subject has extra key '${String(l)}' in ${o}`)}),a.forEach(l=>{var f;const c=r[l],u=lr(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!i.has(l)&&!u&&!d)throw new q(`Subject missing key '${String(l)}' in ${o}`)}),i.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!a.has(l))return;const u=r[l];$e(c,u,[...e,l],t),s[l]=!0})}else throw new q(`shape definition at ${o} was not an object.`);return s}const rc=Jl({addListener(){return!1},removeListener(){return!1},value:Xl()});function Mr(e){return Ql(e,rc,{allowExtraKeys:!0})}function nc(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function wo(e,t){const r=e;function n(i){t?nc(i,e,e.tagName):Zs()(e,i)}function o(i,a){return n(a),r[a]}return new Proxy({},{get:o,set:(i,a,l)=>{const c=Vl(l)?l._elementVirStateSetup():l;n(a);const u=r[a];function d(p){i[a]=p,r[a]=p}const f=e.observablePropertyListenerMap[a];if(u!==c&&Mr(u)&&(f!=null&&f.length)&&u.removeListener(f),Mr(c))if(f)c.addListener(f);else{let p=function(){e.requestUpdate()};var h=p;e.observablePropertyListenerMap[a]=p,c.addListener(p)}else Mr(u)&&(e.observablePropertyListenerMap[a]=void 0);return d(c),!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,a){if(a in i)return{get value(){return o(i,a)},configurable:!0,enumerable:!0}},has:(i,a)=>Reflect.has(i,a)})}function oc(e){return e?qs(e,t=>t):{}}function sc({hostClassNames:e,cssVars:t}){return{hostClasses:qs(e,(r,n)=>({name:X(n),selector:X(`:host(.${n})`)})),cssVars:t}}function ic({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&Te(t).forEach(s=>{const i=t[s],a=r[s];typeof i=="function"&&(i({state:n,inputs:o})?e.classList.add(a):e.classList.remove(a))})}function ac(e,t){function r(o){Te(o).forEach(s=>{const i=o[s];e.instanceState[s]=i})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var lc=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function ur(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...jl,...e.options},n=Ul(e.events),o=oc(e.hostClasses);e.hostClasses&&$o(e.tagName,e.hostClasses),e.cssVars&&$o(e.tagName,e.cssVars);const s=e.cssVars?Me(e.cssVars):{},i=typeof e.styles=="function"?e.styles(sc({hostClassNames:o,cssVars:s})):e.styles||E``,a=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends Gs{createRenderParams(){return ac(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{ni(this)&&!this.haveInputsBeenSet&&!r[yn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${ur.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=a(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return ic({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=El(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){oi(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=wo(this,!1),this.instanceState=wo(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};Te(u).forEach(f=>{Zs()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},lc(t,"anonymousClass"),t.tagName=e.tagName,t.styles=i,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=a,t.hostClasses=o,t.cssVars=s,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:$l(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function hi(){return e=>ur({...e,options:{[yn]:!1,...e.options}})}function pi(e,t){return nt(e,t),e.element}function cc(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function nt(e,t){const r=cc(e),n=r?`: in ${r}`:"";if(e.type!==ar.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function uc(e,t){return t?Eo(e,t):Eo(void 0,e)}const Eo=Fe(class extends Se{constructor(e){super(e),this.element=pi(e,"assign")}render(e,t){return oi(this.element,t),ue}});function H(e,t){return dc(e,t)}const dc=Fe(class extends Se{constructor(e){super(e),this.element=pi(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ue}}),xo="onDomCreated",ko=Fe(class extends Se{constructor(e){super(e),nt(e,xo)}update(e,[t]){nt(e,xo);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Ar="onResize",mi=Fe(class extends Se{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),nt(e,Ar)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Ar} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){nt(e,Ar),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function ne(e,t,r){return ul(e,()=>t,()=>r)}function gi(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),hi()(r(n))),defineElementNoInputs:n=>(t(n),ur(r(n)))}}function fc(...[e,t,r]){const n=Yr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),s=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),i=o||s,a=$n(n);if(i&&!a)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!i||!a?void 0:{replacement:n.tagName,getExtraValues(c){const u=Yr(c)?c.inputs:void 0;return[o&&u?uc(u):void 0].filter(ml)}}}function hc(e){}function pc(e){return ri(e.strings,e.values,fc,hc)}function m(e,...t){const r=Za(e,...t),n=ti(e,t,()=>pc(r));return{...r,strings:n.strings,values:n.values}}var _o;(function(e){e.Upper="upper",e.Lower="lower"})(_o||(_o={}));const mc="px";function gc(e){return bc({value:e,suffix:mc})}function bc({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const vc={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},$c=Object.keys(vc),yc=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...$c,...yc];function Ze(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const wc={[P.ElementExample]:()=>[],[P.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Na(e.controls,e.title)].filter(fn),[P.Root]:()=>[]},Vt="_isBookTreeNode",bi=new Map;function Ec(e){return bi.get(e)}function xc(e,t){xa(bi,e,()=>t)}function Be(e,t){return!!(vi(e)&&e.entry.entryType===t)}function vi(e){return!!(ks(e,[Vt,"entry"])&&e[Vt])}function kc(){return{[Vt]:!0,entry:{entryType:P.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function _c({entries:e,debug:t}){const r=Ec(e);if(r)return r;const n=kc();e.forEach(i=>Cn({tree:n,newEntry:i,debug:t,manuallyAdded:!0}));const o=$i(n),s={tree:n,flattenedNodes:o};return xc(e,s),t&&console.info("element-book tree:",n),s}function Tc(e,t,r){if(!t.parent)return e;const n=Xr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Cn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Xr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${hn(t,!1)}`);return o}function Cn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=wc[t.entryType](t);t.errors.push(...o);const s=Tc(e,t,r),i=Ot(t.title),a=s.children[i];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${i}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const l={[Vt]:!0,children:{},urlBreadcrumb:i,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,i],entry:t,manuallyAdded:n};s.children[i]=l,Pa(t,P.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Cn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Xr(e,t){const r=vi(e)?e.fullUrlBreadcrumbs.slice(0,-1):hn(e,!1);return r.length?r.reduce((o,s)=>{if(o)return o.children[s]},t):void 0}function $i(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>$i(o));return[e,...r].flat()}function Sn(e,t){return Mn(e,["",...t],void 0)}function Mn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const s=e.children[o||""],i=s&&Mn(s,n,r);return{...e.controls,...i}}function Cc(e,t,r){const n={...e};return Mn(n,["",...t],r),n}function yi(e,t){const r=(t==null?void 0:t.controls)||(Be(e,P.Page)?Bt(e.entry.controls,(o,s)=>s.initValue):{});return{children:Bt(e.children,(o,s)=>{var i;return yi(s,(i=t==null?void 0:t.children)==null?void 0:i[s.urlBreadcrumb])}),controls:r}}function Sc({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),s=e.toLowerCase();e:for(let i=0,a=0;i<n;i++){const l=s.charCodeAt(i);for(;a<r;)if(o.charCodeAt(a++)===l)continue e;return!1}return!0}const Mc=Ra(32);function Rt(e){return e.join(Mc)}function wi(e){if(!e.length)return[];const t=Rt(e),r=wi(e.slice(0,-1));return[t,...r]}const Ac=["error","errors"];function Lc(e){return Ac.includes(e)}function Rc({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(i=>(n(i),Rt(i.fullUrlBreadcrumbs))).forEach(i=>r[i]=!0)}return e.forEach(o=>{const s=o.entry.errors.length&&Lc(t),i=Rt(o.fullUrlBreadcrumbs);if(Sc({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||r[i]){const l=wi(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[i]=!1}),e.filter(o=>{const s=Rt(o.fullUrlBreadcrumbs),i=r[s];if(!sr(i,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return i})}var z;(function(e){e.Search="search",e.Book="book"})(z||(z={}));function Kr(e){return e[0]===z.Book?"":e[1]?decodeURIComponent(e[1]):""}const De={hash:void 0,paths:[z.Book],search:void 0},Pc=0;function Ei(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Pc)}class dr extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class To extends dr{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const ot="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Hc=globalThis.history.pushState;function Co(...e){const t=Hc.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ot)),t}const Nc=globalThis.history.replaceState;function So(...e){const t=Nc.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ot)),t}function Bc(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Co)throw new To("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===So)throw new To("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Co,globalThis.history.replaceState=So,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ot))})}}function fr(e){return!!e}var Mo;(function(e){e.Upper="upper",e.Lower="lower"})(Mo||(Mo={}));function Oc(e,t){return e.split(t)}function zc(e){return e?e instanceof Error?e.message:Wt(e,"message")?String(e.message):String(e):""}function jc(e){return!!e&&typeof e=="object"}const Ic=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Wt(e,t){return e?Ic.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ao(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function xi(e,t,r=!1,n={}){const o=Ao(e),s=new Set(Ao(t));if(!r){const i=o.filter(a=>!s.has(a));if(i.length)throw new Error(`Test object has extra keys: ${i.join(", ")}`)}s.forEach(i=>{if(!Wt(e,i))throw new Error(`test object does not have key "${String(i)}" from expected shape.`);function a(u){throw new Error(`test object value at key "${String(i)}" did not match expected shape: ${u}`)}const l=e[i],c=t[i];n[i]||ki(l,c,a,r,n[i]??{})})}function ki(e,t,r,n,o){var a;const s=typeof e,i=typeof t;s!==i&&r(`type "${s}" did not match expected type "${i}"`);try{Wt(t,"constructor")&&(!Wt(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(a=e==null?void 0:e.constructor)==null?void 0:a.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{ki(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${zc(f)}`)}}).filter(fr).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):jc(t)&&xi(e,t,n,o)}function Dc(e){return Array.isArray(e)?"array":typeof e}function Uc(e,t){return Dc(e)===t}function Fc({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Vc(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(fr);return t.length?`?${t.join("&")}`:""}function Wc(e){return Fc({value:e,prefix:"?"}).split("&").map(n=>{const[o,...s]=Oc(n,"="),i=s.join("");if(!(!i&&!o))return[o,i]}).filter(fr)}function Yc(e,t){const r=Uc(e,"string")?new URL(e):e,n=Wc(r.search),o=Object.fromEntries(n);return t&&xi(o,t),o}function Gc(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),o=globalThis.location.search?Yc(globalThis.location.toString()):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:o,hash:s}}function _i(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Ti({routeBase:e,windowPath:t}){if(!e)return"";const r=_i(e);if(Ci({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Ti({routeBase:n,windowPath:t}):""}function Ci({routeBase:e,windowPath:t}){const r=_i(e);return r?t.startsWith(`/${r}`):!1}class qc extends dr{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Si(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Lo=6;function Ro(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Lo)throw new qc(`Route sanitization depth has exceed the max of ${Lo} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Si(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Lr extends dr{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Zc(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Lr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Lr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Lr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Xc(e,t,r=!1){const n=Mi(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Mi(e,t){var a;const r=Ci({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Vc(e.search):"",o=(a=e.hash)!=null&&a.startsWith("#")?"":"#",s=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(fr).join("/")}${n}${s}`}function Kc(e={}){Zc(e),Bc();const t=e.routeBase?Ti({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Ro(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(s){const i={hash:void 0,search:void 0,...s};return e.routeSanitizer?e.routeSanitizer(i):i},setRoutes(s,i=!1,a=!1){const l=o.getCurrentRawRoutes(),c={...l,...s},u=o.sanitizeFullRoute(c);if(!(!a&&Si(l,u)))return Xc(u,t,i)},createRoutesUrl(s){return Mi(s,t)},getCurrentRawRoutes(){return Gc(t)},removeAllRouteListeners(){o.listeners.forEach(s=>o.removeRouteListener(s))},addRouteListener(s,i){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new dr(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(i),r||(globalThis.addEventListener(ot,n),r=!0),s&&Ro(o,i),i},hasRouteListener(s){return o.listeners.has(s)},removeRouteListener(s){const i=o.listeners.delete(s);return o.listeners.size||(globalThis.removeEventListener(ot,n),r=!1),i},sanitizationDepth:0};return o}function Jc(e){return Kc({routeBase:e,routeSanitizer(t){return{paths:Qc(t.paths),hash:void 0,search:void 0}}})}function Qc(e){const t=e[0];if(Ta(t,z)){if(t===z.Book)return[z.Book,...e.slice(1)];if(t===z.Search)return e[1]?[t,e[1]]:[z.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return De.paths}const x=Me({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),eu={nav:{hover:{background:x["element-book-nav-hover-background-color"],foreground:x["element-book-nav-hover-foreground-color"]},active:{background:x["element-book-nav-active-background-color"],foreground:x["element-book-nav-active-foreground-color"]},selected:{background:x["element-book-nav-selected-background-color"],foreground:x["element-book-nav-selected-foreground-color"]}},accent:{icon:x["element-book-accent-icon-color"]},page:{background:x["element-book-page-background-color"],backgroundFaint1:x["element-book-page-background-faint-level-1-color"],backgroundFaint2:x["element-book-page-background-faint-level-2-color"],foreground:x["element-book-page-foreground-color"],foregroundFaint1:x["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:x["element-book-page-foreground-faint-level-2-color"]}};function tu(e,t){Ai(e,t,eu)}function Jr(e){return nr(e,"_$cssResult$")}function Po(e){return ks(e,["name","value","default"])&&sr(e.default,"string")&&Jr(e.name)&&Jr(e.value)}function Ai(e,t,r){Object.entries(t).forEach(([n,o])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(Jr(o)){if(!Po(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);Al({forCssVar:s,onElement:e,toValue:String(o)})}else{if(Po(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ai(e,o,s)}})}function L(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let n=t[0].length,o=t[0].map((i,a)=>t.map(l=>l[a])),s=e.map(i=>o.map(a=>{let l=0;if(!Array.isArray(i)){for(let c of a)l+=i*c;return l}for(let c=0;c<i.length;c++)l+=i[c]*(a[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(i=>i[0]):s}function ht(e){return ae(e)==="string"}function ae(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Yt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Li(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(s,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),s.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),o.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Ri(e){return e[e.length-1]}function Gt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Pi(e,t,r){return(r-e)/(t-e)}function An(e,t,r){return Gt(t[0],t[1],Pi(e[0],e[1],r))}function Hi(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var ru=Object.freeze({__proto__:null,interpolate:Gt,interpolateInv:Pi,isString:ht,last:Ri,mapRange:An,multiplyMatrices:L,parseCoordGrammar:Hi,parseFunction:Li,toPrecision:Yt,type:ae});class nu{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const de=new nu;var Q={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const K={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Qr(e){return Array.isArray(e)?e:K[e]}function qt(e,t,r,n={}){if(e=Qr(e),t=Qr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(de.run("chromatic-adaptation-start",o),o.M||(o.W1===K.D65&&o.W2===K.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===K.D50&&o.W2===K.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),de.run("chromatic-adaptation-end",o),o.M)return L(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const ou=75e-6,D=class D{constructor(t){var o,s,i;this.id=t.id,this.name=t.name,this.base=t.base?D.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let a in r)"name"in r[a]||(r[a].name=a);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Qr(n),this.formats=t.formats??{};for(let a in this.formats){let l=this.formats[a];l.type||(l.type="function"),l.name||(l.name=a)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(s=this.formats)!=null&&s.color&&!((i=this.formats)!=null&&i.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:su(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),de.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=ou}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,s)=>{let i=n[s];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[a,l]=i.range;return(a===void 0||o>=a-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Ho(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Ho(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=D.get(t),this.equals(t))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,o=t.path,s,i;for(let a=0;a<n.length&&n[a].equals(o[a]);a++)s=n[a],i=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>i;a--)r=n[a].toBase(r);for(let a=i+1;a<o.length;a++)r=o[a].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=D.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(D.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof D)return t;if(ae(t)==="string"){let o=D.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return D.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=ae(t),o,s;if(n==="string"?t.includes(".")?[o,s]=t.split("."):[o,s]=[,t]:Array.isArray(t)?[o,s]=t:(o=t.space,s=t.coordId),o=D.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ae(s),n==="number"||n==="string"&&s>=0){let c=Object.entries(o.coords)[s];if(c)return{space:o,id:c[0],index:s,...c[1]}}o=D.get(o);let i=s.toLowerCase(),a=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===i||((l=u.name)==null?void 0:l.toLowerCase())===i)return{space:o,id:c,index:a,...u};a++}throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};vr(D,"registry",{}),vr(D,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=D;function su(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Ho(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Hi(e.coords);let r=Object.entries(t).map(([n,o],s)=>{let i=e.coordGrammar[s][0],a=o.range||o.refRange,l=i.range,c="";return i=="<percentage>"?(l=[0,100],c="%"):i=="<angle>"&&(c="deg"),{fromRange:a,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((s,i)=>{let{fromRange:a,toRange:l,suffix:c}=r[i];return a&&l&&(s=An(a,l,s)),s=Yt(s,o),c&&(s+=c),s})}return e}var W=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class j extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=W),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=L(t.toXYZ_M,r);return this.white!==this.base.white&&(n=qt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=qt(this.base.white,this.white,r),L(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ni(e,{meta:t}={}){var n,o,s,i,a;let r={str:(n=String(e))==null?void 0:n.trim()};if(de.run("parse-start",r),r.color)return r.color;if(r.parsed=Li(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((g,v)=>r.parsed.args[v]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:u}}}let d="";if(c in b.registry){let f=(a=(i=(s=b.registry[c].formats)==null?void 0:s.functions)==null?void 0:i.color)==null?void 0:a.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Ri(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([p,g],v)=>{var J;let y=u.coordGrammar[v],_=(J=f[v])==null?void 0:J.type,S=y.find(I=>I==_);if(!S){let I=g.name||p;throw new TypeError(`${_} not allowed for ${I} in ${l}()`)}let C=S.range;_==="<percentage>"&&(C||(C=[0,1]));let O=g.range||g.refRange;return C&&O&&(f[v]=An(C,O,f[v])),S})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function k(e){if(!e)throw new TypeError("Empty color reference");ht(e)&&(e=Ni(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function pt(e,t){return t=b.get(t),t.from(e)}function Y(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return pt(e,r)[n]}function Bi(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function fe(e,t,r){if(e=k(e),arguments.length===2&&ae(arguments[1])==="object"){let n=arguments[1];for(let o in n)fe(e,o,n[o])}else{typeof r=="function"&&(r=r(Y(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),s=pt(e,n);s[o]=r,Bi(e,n,s)}return e}var Ln=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:W,fromBase:e=>qt(W.white,"D50",e),toBase:e=>qt("D50",W.white,e),formats:{color:{}}});const iu=216/24389,No=24/116,vt=24389/27;let Rr=K.D50;var U=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Rr,base:Ln,fromBase(e){let r=e.map((n,o)=>n/Rr[o]).map(n=>n>iu?Math.cbrt(n):(vt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>No?Math.pow(t[0],3):(116*t[0]-16)/vt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/vt,t[2]>No?Math.pow(t[2],3):(116*t[2]-16)/vt].map((n,o)=>n*Rr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function hr(e){return(e%360+360)%360}function au(e,t){if(e==="raw")return t;let[r,n]=t.map(hr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var st=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:U,fromBase(e){let[t,r,n]=e,o;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),hr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Bo=25**7,Zt=Math.PI,Oo=180/Zt,Le=Zt/180;function en(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[s,i,a]=U.from(e),l=st.from(U,[s,i,a])[1],[c,u,d]=U.from(t),f=st.from(U,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,g=.5*(1-Math.sqrt(p/(p+Bo))),v=(1+g)*i,y=(1+g)*u,_=Math.sqrt(v**2+a**2),S=Math.sqrt(y**2+d**2),C=v===0&&a===0?0:Math.atan2(a,v),O=y===0&&d===0?0:Math.atan2(d,y);C<0&&(C+=2*Zt),O<0&&(O+=2*Zt),C*=Oo,O*=Oo;let J=c-s,I=S-_,T=O-C,N=C+O,gr=Math.abs(T),Ve;_*S===0?Ve=0:gr<=180?Ve=T:T>180?Ve=T-360:T<-180?Ve=T+360:console.log("the unthinkable has happened");let Nn=2*Math.sqrt(S*_)*Math.sin(Ve*Le/2),fa=(s+c)/2,br=(_+S)/2,Bn=Math.pow(br,7),ee;_*S===0?ee=N:gr<=180?ee=N/2:N<360?ee=(N+360)/2:ee=(N-360)/2;let On=(fa-50)**2,ha=1+.015*On/Math.sqrt(20+On),zn=1+.045*br,We=1;We-=.17*Math.cos((ee-30)*Le),We+=.24*Math.cos(2*ee*Le),We+=.32*Math.cos((3*ee+6)*Le),We-=.2*Math.cos((4*ee-63)*Le);let jn=1+.015*br*We,pa=30*Math.exp(-1*((ee-275)/25)**2),ma=2*Math.sqrt(Bn/(Bn+Bo)),ga=-1*Math.sin(2*pa*Le)*ma,bt=(J/(r*ha))**2;return bt+=(I/(n*zn))**2,bt+=(Nn/(o*jn))**2,bt+=ga*(I/(n*zn))*(Nn/(o*jn)),Math.sqrt(bt)}const lu=75e-6;function Je(e,t=e.space,{epsilon:r=lu}={}){e=k(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function it(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function he(e,{method:t=Q.gamut_mapping,space:r=e.space}={}){if(ht(arguments[1])&&(r=arguments[1]),r=b.get(r),Je(e,r,{epsilon:0}))return k(e);let n=V(e,r);if(t!=="clip"&&!Je(e,r)){let o=he(it(n),{method:"clip",space:r});if(en(e,o)>2){let s=b.resolveCoord(t),i=s.space,a=s.id,l=V(n,i),u=(s.range||s.refRange)[0],d=.01,f=u,h=Y(l,a);for(;h-f>d;){let p=it(l);p=he(p,{space:r,method:"clip"}),en(l,p)-2<d?f=Y(l,a):h=Y(l,a),fe(l,a,(f+h)/2)}n=V(l,r)}else n=o}if(t==="clip"||!Je(n,r,{epsilon:0})){let o=Object.values(r.coords).map(s=>s.range||[]);n.coords=n.coords.map((s,i)=>{let[a,l]=o[i];return a!==void 0&&(s=Math.max(a,s)),l!==void 0&&(s=Math.min(s,l)),s})}return r!==e.space&&(n=V(n,e.space)),e.coords=n.coords,e}he.returns="color";function V(e,t,{inGamut:r}={}){e=k(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=he(o)),o}V.returns="color";function Xt(e,{precision:t=Q.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let s;e=k(e);let i=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let a=e.coords;if(a=a.map(c=>c||0),n&&!Je(e)&&(a=he(it(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)s=r.serialize(a,e.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(h=>Yt(h,t)));let u=[...a];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Yt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";s=`${c}(${u.join(r.commas?", ":" ")}${f})`}return s}const cu=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],uu=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var pr=new j({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:cu,fromXYZ_M:uu,formats:{color:{}}});const $t=1.09929682680944,zo=.018053968510807;var Oi=new j({id:"rec2020",name:"REC.2020",base:pr,toBase(e){return e.map(function(t){return t<zo*4.5?t/4.5:Math.pow((t+$t-1)/$t,1/.45)})},fromBase(e){return e.map(function(t){return t>=zo?$t*Math.pow(t,.45)-($t-1):4.5*t})},formats:{color:{}}});const du=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fu=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var zi=new j({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:du,fromXYZ_M:fu});const hu=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],pu=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ji=new j({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:hu,fromXYZ_M:pu,formats:{color:{}}}),jo={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Io=Array(3).fill("<percentage> | <number>[0, 255]"),Do=Array(3).fill("<number>[0, 255]");var at=new j({id:"srgb",name:"sRGB",base:ji,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Io},rgb_number:{name:"rgb",commas:!0,coords:Do,noAlpha:!0},color:{},rgba:{coords:Io,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Do},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=jo.black,t.alpha=0):t.coords=jo[e],t.coords)return t}}}}),Ii=new j({id:"p3",name:"P3",base:zi,fromBase:at.fromBase,toBase:at.toBase,formats:{color:{id:"display-p3"}}});Q.display_space=at;if(typeof CSS<"u"&&CSS.supports)for(let e of[U,Oi,Ii]){let t=e.getMinCoords(),n=Xt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Q.display_space=e;break}}function mu(e,{space:t=Q.display_space,...r}={}){let n=Xt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Q.display_space)n=new String(n),n.color=e;else{let o=V(e,t);n=new String(Xt(o,r)),n.color=o}return n}function Di(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((s,i,a)=>{let l=o[a];return isNaN(i)||isNaN(l)?s:s+(l-i)**2},0))}function gu(e,t){return e=k(e),t=k(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function pe(e){return Y(e,[W,"y"])}function Ui(e,t){fe(e,[W,"y"],t)}function bu(e){Object.defineProperty(e.prototype,"luminance",{get(){return pe(this)},set(t){Ui(this,t)}})}var vu=Object.freeze({__proto__:null,getLuminance:pe,register:bu,setLuminance:Ui});function $u(e,t){e=k(e),t=k(t);let r=Math.max(pe(e),0),n=Math.max(pe(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const yu=.56,wu=.57,Eu=.62,xu=.65,Uo=.022,ku=1.414,_u=.1,Tu=5e-4,Cu=1.14,Fo=.027,Su=1.14;function Vo(e){return e>=Uo?e:e+(Uo-e)**ku}function Re(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Mu(e,t){t=k(t),e=k(e);let r,n,o,s,i,a;t=V(t,"srgb"),[s,i,a]=t.coords;let l=Re(s)*.2126729+Re(i)*.7151522+Re(a)*.072175;e=V(e,"srgb"),[s,i,a]=e.coords;let c=Re(s)*.2126729+Re(i)*.7151522+Re(a)*.072175,u=Vo(l),d=Vo(c),f=d>u;return Math.abs(d-u)<Tu?n=0:f?(r=d**yu-u**wu,n=r*Cu):(r=d**xu-u**Eu,n=r*Su),Math.abs(n)<_u?o=0:n>0?o=n-Fo:o=n+Fo,o*100}function Au(e,t){e=k(e),t=k(t);let r=Math.max(pe(e),0),n=Math.max(pe(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Lu=5e4;function Ru(e,t){e=k(e),t=k(t);let r=Math.max(pe(e),0),n=Math.max(pe(t),0);return n>r&&([r,n]=[n,r]),n===0?Lu:(r-n)/n}function Pu(e,t){e=k(e),t=k(t);let r=Y(e,[U,"l"]),n=Y(t,[U,"l"]);return Math.abs(r-n)}const Hu=216/24389,Wo=24/116,yt=24389/27;let Pr=K.D65;var tn=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Pr,base:W,fromBase(e){let r=e.map((n,o)=>n/Pr[o]).map(n=>n>Hu?Math.cbrt(n):(yt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Wo?Math.pow(t[0],3):(116*t[0]-16)/yt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/yt,t[2]>Wo?Math.pow(t[2],3):(116*t[2]-16)/yt].map((n,o)=>n*Pr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Hr=Math.pow(5,.5)*.5+.5;function Nu(e,t){e=k(e),t=k(t);let r=Y(e,[tn,"l"]),n=Y(t,[tn,"l"]),o=Math.abs(Math.pow(r,Hr)-Math.pow(n,Hr)),s=Math.pow(o,1/Hr)*Math.SQRT2-40;return s<7.5?0:s}var Pt=Object.freeze({__proto__:null,contrastAPCA:Mu,contrastDeltaPhi:Nu,contrastLstar:Pu,contrastMichelson:Au,contrastWCAG21:$u,contrastWeber:Ru});function Bu(e,t,r={}){ht(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let s=Object.keys(Pt).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=k(e),t=k(t);for(let s in Pt)if("contrast"+n.toLowerCase()===s.toLowerCase())return Pt[s](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Fi(e){let[t,r,n]=pt(e,W),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Vi(e){let[t,r,n]=pt(e,W),o=t+r+n;return[t/o,r/o]}function Ou(e){Object.defineProperty(e.prototype,"uv",{get(){return Fi(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Vi(this)}})}var zu=Object.freeze({__proto__:null,register:Ou,uv:Fi,xy:Vi});function ju(e,t){return Di(e,t,"lab")}const Iu=Math.PI,Yo=Iu/180;function Du(e,t,{l:r=2,c:n=1}={}){let[o,s,i]=U.from(e),[,a,l]=st.from(U,[o,s,i]),[c,u,d]=U.from(t),f=st.from(U,[c,u,d])[1];a<0&&(a=0),f<0&&(f=0);let h=o-c,p=a-f,g=s-u,v=i-d,y=g**2+v**2-p**2,_=.511;o>=16&&(_=.040975*o/(1+.01765*o));let S=.0638*a/(1+.0131*a)+.638,C;Number.isNaN(l)&&(l=0),l>=164&&l<=345?C=.56+Math.abs(.2*Math.cos((l+168)*Yo)):C=.36+Math.abs(.4*Math.cos((l+35)*Yo));let O=Math.pow(a,4),J=Math.sqrt(O/(O+1900)),I=S*(J*C+1-J),T=(h/(r*_))**2;return T+=(p/(n*S))**2,T+=y/I**2,Math.sqrt(T)}const Go=203;var Rn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:W,fromBase(e){return e.map(t=>Math.max(t*Go,0))},toBase(e){return e.map(t=>Math.max(t/Go,0))}});const wt=1.15,Et=.66,qo=2610/2**14,Uu=2**14/2610,Zo=3424/2**12,Xo=2413/2**7,Ko=2392/2**7,Fu=1.7*2523/2**5,Jo=2**5/(1.7*2523),xt=-.56,Nr=16295499532821565e-27,Vu=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Wu=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Yu=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Gu=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Wi=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Rn,fromBase(e){let[t,r,n]=e,o=wt*t-(wt-1)*n,s=Et*r-(Et-1)*t,a=L(Vu,[o,s,n]).map(function(f){let h=Zo+Xo*(f/1e4)**qo,p=1+Ko*(f/1e4)**qo;return(h/p)**Fu}),[l,c,u]=L(Yu,a);return[(1+xt)*l/(1+xt*l)-Nr,c,u]},toBase(e){let[t,r,n]=e,o=(t+Nr)/(1+xt-xt*(t+Nr)),i=L(Gu,[o,r,n]).map(function(f){let h=Zo-f**Jo,p=Ko*f**Jo-Xo;return 1e4*(h/p)**Uu}),[a,l,c]=L(Wu,i),u=(a+(wt-1)*c)/wt,d=(l+(Et-1)*u)/Et;return[u,d,c]},formats:{color:{}}}),rn=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Wi,fromBase(e){let[t,r,n]=e,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),hr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function qu(e,t){let[r,n,o]=rn.from(e),[s,i,a]=rn.from(t),l=r-s,c=n-i;Number.isNaN(o)&&Number.isNaN(a)?(o=0,a=0):Number.isNaN(o)?o=a:Number.isNaN(a)&&(a=o);let u=o-a,d=2*Math.sqrt(n*i)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Yi=3424/4096,Gi=2413/128,qi=2392/128,Qo=2610/16384,Zu=2523/32,Xu=16384/2610,es=32/2523,Ku=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Ju=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Qu=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],ed=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var nn=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Rn,fromBase(e){let t=L(Ku,e);return td(t)},toBase(e){let t=rd(e);return L(ed,t)},formats:{color:{}}});function td(e){let t=e.map(function(r){let n=Yi+Gi*(r/1e4)**Qo,o=1+qi*(r/1e4)**Qo;return(n/o)**Zu});return L(Ju,t)}function rd(e){return L(Qu,e).map(function(n){let o=Math.max(n**es-Yi,0),s=Gi-qi*n**es;return 1e4*(o/s)**Xu})}function nd(e,t){let[r,n,o]=nn.from(e),[s,i,a]=nn.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-i)**2+(o-a)**2)}const od=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],sd=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],id=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],ad=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Kt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:W,fromBase(e){let r=L(od,e).map(n=>Math.cbrt(n));return L(id,r)},toBase(e){let r=L(ad,e).map(n=>n**3);return L(sd,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ld(e,t){let[r,n,o]=Kt.from(e),[s,i,a]=Kt.from(t),l=r-s,c=n-i,u=o-a;return Math.sqrt(l**2+c**2+u**2)}var Jt={deltaE76:ju,deltaECMC:Du,deltaE2000:en,deltaEJz:qu,deltaEITP:nd,deltaEOK:ld};function Xe(e,t,r={}){ht(r)&&(r={method:r});let{method:n=Q.deltaE,...o}=r;e=k(e),t=k(t);for(let s in Jt)if("deltae"+n.toLowerCase()===s.toLowerCase())return Jt[s](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function cd(e,t=.25){let n=[b.get("oklch","lch"),"l"];return fe(e,n,o=>o*(1+t))}function ud(e,t=.25){let n=[b.get("oklch","lch"),"l"];return fe(e,n,o=>o*(1-t))}var dd=Object.freeze({__proto__:null,darken:ud,lighten:cd});function Zi(e,t,r=.5,n={}){[e,t]=[k(e),k(t)],ae(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:s,premultiplied:i}=n;return mt(e,t,{space:o,outputSpace:s,premultiplied:i})(r)}function Xi(e,t,r={}){let n;Pn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:s,steps:i=2,maxSteps:a=1e3,...l}=r;n||([e,t]=[k(e),k(t)],n=mt(e,t,l));let c=Xe(e,t),u=o>0?Math.max(i,Math.ceil(c/o)+1):i,d=[];if(a!==void 0&&(u=Math.min(u,a)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,p)=>{let g=p*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,p,g)=>{if(g===0)return 0;let v=Xe(p.color,d[g-1].color,s);return Math.max(h,v)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<a;h++){let p=d[h-1],g=d[h],v=(g.p+p.p)/2,y=n(v);f=Math.max(f,Xe(y,p.color),Xe(y,g.color)),d.splice(h,0,{p:v,color:n(v)}),h++}}}return d=d.map(f=>f.color),d}function mt(e,t,r={}){if(Pn(e)){let[l,c]=[e,t];return mt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:s,premultiplied:i}=r;e=k(e),t=k(t),e=it(e),t=it(t);let a={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[Q.interpolationSpace]||e.space,o=o?b.get(o):n,e=V(e,n),t=V(t,n),e=he(e),t=he(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Y(e,c),Y(t,c)];[u,d]=au(l,[u,d]),fe(e,c,u),fe(t,c,d)}return i&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=s?s(l):l;let c=e.coords.map((f,h)=>{let p=t.coords[h];return Gt(f,p,l)}),u=Gt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return i&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=V(d,o)),d},{rangeArgs:a})}function Pn(e){return ae(e)==="function"&&!!e.rangeArgs}Q.interpolationSpace="lab";function fd(e){e.defineFunction("mix",Zi,{returns:"color"}),e.defineFunction("range",mt,{returns:"function<color>"}),e.defineFunction("steps",Xi,{returns:"array<color>"})}var hd=Object.freeze({__proto__:null,isRange:Pn,mix:Zi,range:mt,register:fd,steps:Xi}),Ki=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:at,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,s]=e,[i,a,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(a=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:i=(o-s)/c+(o<s?6:0);break;case o:i=(s-n)/c+2;break;case s:i=(n-o)/c+4}i=i*60}return[i,a*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(s){let i=(s+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ji=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ki,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),pd=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ji,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let a=r/o;return[t,0,a*100]}let s=1-n,i=s===0?0:1-r/s;return[t,i*100,s*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const md=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],gd=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Qi=new j({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:md,fromXYZ_M:gd}),bd=new j({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Qi,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const vd=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],$d=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var ea=new j({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Ln,toXYZ_M:vd,fromXYZ_M:$d});const yd=1/512,wd=16/512;var Ed=new j({id:"prophoto",name:"ProPhoto",base:ea,toBase(e){return e.map(t=>t<wd?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=yd?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),xd=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Kt,fromBase(e){let[t,r,n]=e,o;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),hr(o)]},toBase(e){let[t,r,n]=e,o,s;return isNaN(n)?(o=0,s=0):(o=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,o,s]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const ts=203,rs=2610/2**14,kd=2**14/2610,_d=2523/2**5,ns=2**5/2523,os=3424/2**12,ss=2413/2**7,is=2392/2**7;var Td=new j({id:"rec2100pq",name:"REC.2100-PQ",base:pr,toBase(e){return e.map(function(t){return(Math.max(t**ns-os,0)/(ss-is*t**ns))**kd*1e4/ts})},fromBase(e){return e.map(function(t){let r=Math.max(t*ts/1e4,0),n=os+ss*r**rs,o=1+is*r**rs;return(n/o)**_d})},formats:{color:{id:"rec2100-pq"}}});const as=.17883277,ls=.28466892,cs=.55991073,Br=3.7743;var Cd=new j({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:pr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Br:(Math.exp((t-cs)/as)+ls)/12*Br})},fromBase(e){return e.map(function(t){return t/=Br,t<=1/12?Math.sqrt(3*t):as*Math.log(12*t-ls)+cs})},formats:{color:{id:"rec2100-hlg"}}});const ta={};de.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=ra(e.W1,e.W2,e.options.method))});de.add("chromatic-adaptation-end",e=>{e.M||(e.M=ra(e.W1,e.W2,e.options.method))});function mr({id:e,toCone_M:t,fromCone_M:r}){ta[e]=arguments[0]}function ra(e,t,r="Bradford"){let n=ta[r],[o,s,i]=L(n.toCone_M,e),[a,l,c]=L(n.toCone_M,t),u=[[a/o,0,0],[0,l/s,0],[0,0,c/i]],d=L(u,n.toCone_M);return L(n.fromCone_M,d)}mr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});mr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});mr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});mr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(K,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});K.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Sd=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Md=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var na=new j({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:K.ACES,toXYZ_M:Sd,fromXYZ_M:Md,formats:{color:{}}});const kt=2**-16,Or=-.35828683,_t=(Math.log2(65504)+9.72)/17.52;var Ad=new j({id:"acescc",name:"ACEScc",coords:{r:{range:[Or,_t],name:"Red"},g:{range:[Or,_t],name:"Green"},b:{range:[Or,_t],name:"Blue"}},referred:"scene",base:na,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-kt)*2:r<_t?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(kt)+9.72)/17.52:t<kt?(Math.log2(kt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),us=Object.freeze({__proto__:null,A98RGB:bd,A98RGB_Linear:Qi,ACEScc:Ad,ACEScg:na,HSL:Ki,HSV:Ji,HWB:pd,ICTCP:nn,JzCzHz:rn,Jzazbz:Wi,LCH:st,Lab:U,Lab_D65:tn,OKLCH:xd,OKLab:Kt,P3:Ii,P3_Linear:zi,ProPhoto:Ed,ProPhoto_Linear:ea,REC_2020:Oi,REC_2020_Linear:pr,REC_2100_HLG:Cd,REC_2100_PQ:Td,XYZ_ABS_D65:Rn,XYZ_D50:Ln,XYZ_D65:W,sRGB:at,sRGB_Linear:ji});class ${constructor(...t){let r;t.length===1&&(r=k(t[0]));let n,o,s;r?(n=r.space||r.spaceId,o=r.coords,s=r.alpha):[n,o,s]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=s<1?s:1;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in this.space.coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:a=>this.set(i,a)})}get spaceId(){return this.space.id}clone(){return new $(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=mu(this,...t);return r.color=new $(r.color),r}static get(t,...r){return t instanceof $?t:new $(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:s}=n,i=function(...a){let l=r(...a);if(s==="color")l=$.get(l);else if(s==="function<color>"){let c=l;l=function(...u){let d=c(...u);return $.get(d)},Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>$.get(c)));return l};t in $||($[t]=i),o&&($.prototype[t]=function(...a){return i(this,...a)})}static defineFunctions(t){for(let r in t)$.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register($);else for(let r in t)$.defineFunction(r,t[r])}}$.defineFunctions({get:Y,getAll:pt,set:fe,setAll:Bi,to:V,equals:gu,inGamut:Je,toGamut:he,distance:Di,toString:Xt});Object.assign($,{util:ru,hooks:de,WHITES:K,Space:b,spaces:b.registry,parse:Ni,defaults:Q});for(let e of Object.keys(us))b.register(us[e]);for(let e in b.registry)on(e,b.registry[e]);de.add("colorspace-init-end",e=>{var t;on(e.id,e),(t=e.aliases)==null||t.forEach(r=>{on(r,e)})});function on(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty($.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,s)=>{try{return b.resolveCoord([t,s]),!0}catch{}return Reflect.has(o,s)},get:(o,s,i)=>{if(s&&typeof s!="symbol"&&!(s in o)){let{index:a}=b.resolveCoord([t,s]);if(a>=0)return o[a]}return Reflect.get(o,s,i)},set:(o,s,i,a)=>{if(s&&typeof s!="symbol"&&!(s in o)||s>=0){let{index:l}=b.resolveCoord([t,s]);if(l>=0)return o[l]=i,this.setAll(e,o),!0}return Reflect.set(o,s,i,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}$.extend(Jt);$.extend({deltaE:Xe});Object.assign($,{deltaEMethods:Jt});$.extend(dd);$.extend({contrast:Bu});$.extend(zu);$.extend(vu);$.extend(hd);$.extend(Pt);function oa(e){return Bt(e,(t,r)=>r instanceof $?X(r.toString({format:"hex"})):oa(r))}const Ld="dodgerblue";function sn(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function zr({background:e,foreground:t}){return{background:e??new $(sn(t)),foreground:t??new $(sn(e))}}var Qt;(function(e){e.Dark="dark",e.Light="light"})(Qt||(Qt={}));function Rd(e){return e==="black"?"white":"black"}const Pd={black:{foregroundFaint1:new $("#ccc"),foregroundFaint2:new $("#eee")},white:{foregroundFaint1:new $("#ccc"),foregroundFaint2:new $("#eee")}},Hd={black:{backgroundFaint1:new $("#666"),backgroundFaint2:new $("#444")},white:{backgroundFaint1:new $("#ccc"),backgroundFaint2:new $("#fafafa")}};function ds({themeColor:e=Ld,themeStyle:t=Qt.Light}={}){const r=new $(e),n=new $(t===Qt.Dark?"black":"white"),o=sn(n),s=new $(o),i={nav:{hover:zr({background:r.clone().set({"hsl.l":93})}),active:zr({background:r.clone().set({"hsl.l":90})}),selected:zr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Hd[Rd(o)],foreground:s,...Pd[o]}};return oa(i)}const er=wn()("element-book-change-route"),fs="vira-",{defineElement:gt,defineElementNoInputs:sf}=gi({assertInputs:e=>{if(!e.tagName.startsWith(fs))throw new Error(`Tag name should start with '${fs}' but got '${e.tagName}'`)}}),sa=E`
    pointer-events: none;
    opacity: 0.3;
`,le=Me({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),tr=Me({"vira-form-input-border-radius":"8px"}),rr=Me({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":E`calc(${tr["vira-form-input-border-radius"].value} + 4px)`});function ia({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=X(gc(n+r+t));return E`
        ${X(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${rr["vira-focus-outline-color"].value};
            border-radius: ${rr["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Nd=E`
    padding: 0;
    margin: 0;
`,ye=E`
    ${Nd};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,an=E`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,B=gt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>E`
        :host {
            display: inline-block;
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ln;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ln||(ln={}));gt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ln.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${an};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${rr["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${sa};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${ye};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${tr["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${le["vira-interaction-animation-duration"].value},
                background-color
                    ${le["vira-interaction-animation-duration"].value},
                border-color ${le["vira-interaction-animation-duration"].value};
        }

        ${ia({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${B} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?m`
                  <${B.assign({icon:e.icon})}></${B}>
              `:"",r=e.text?m`
                  <span class="text-template">${e.text}</span>
              `:"";return m`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var cn;(function(e){e.Header="header"})(cn||(cn={}));gt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ye};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${le["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Ce()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const s=o.expanded?E`
                  height: ${e.contentHeight}px;
              `:E`
                  height: 0;
              `;return m`
            <button
                class="header-wrapper"
                ${H("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${cn.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${s} disabled="disabled">
                <div
                    ${mi(({contentRect:i})=>{t({contentHeight:i.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const w=Me({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function oe({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const aa=oe({name:"CloseX24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function un({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>un({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function la({value:e,allowed:t,blocked:r}){const n=t?un({input:e,matcher:t}):!0,o=r?un({input:e,matcher:r}):!1;return n&&!o}function ca(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(la({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Bd({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const s=Ze(r,HTMLInputElement),i=r.data,a=t;let l=s.value??"";if(i)if(i.length===1)la({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=a,n(i));else{const{filtered:c,blocked:u}=ca({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}s.value!==l&&(s.value=l),a!==l&&o(l)}const Ht=gt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Ce(),inputBlocked:Ce()},styles:({hostClasses:e,cssVars:t})=>E`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${rr["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${sa};
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
                ${ye};
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
                ${an};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${ye};
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
                border-radius: ${tr["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${le["vira-interaction-animation-duration"].value};
            }

            label {
                ${ye};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${tr["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${ia({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ye};
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
                ${an};
            }

            .close-x-button {
                ${ye};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${le["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:s}=ca({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?m`
                  <${B.assign({icon:e.icon})} class="left-side-icon"></${B}>
              `:"",a=e.fitText?E`
                  width: ${r.forcedInputWidth}px;
              `:"";return m`
            <label>
                ${i}
                ${ne(!!e.fitText,m`
                        <span
                            class="size-span"
                            ${mi(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${a}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${H("input",l=>{Bd({inputs:e,filteredValue:s,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${ne(!!(e.showClearButton&&e.value),m`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${H("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${B.assign({icon:aa})}></${B}>
                        </button>
                    `)}
                ${ne(!!e.suffix,m`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});gt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>E`
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
    `,events:{routeChange:Ce()},renderCallback({inputs:e,dispatch:t,events:r}){var o,s;function n(i){e.route&&Ei(i)&&(i.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return m`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(s=e.route)==null?void 0:s.router.createRoutesUrl(e.route.route);return m`
                <a href=${i} rel="noopener noreferrer" ${H("click",n)}>
                    <slot></slot>
                </a>
            `}}});const Od=oe({name:"Element16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});oe({name:"Element24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const zd=oe({name:"Loader24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jd=E`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${le["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Id=oe({name:"LoaderAnimated24Icon",svgTemplate:m`
        <style>
            ${jd}
        </style>
        ${zd.svgTemplate}
    `});oe({name:"Options24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${w["vira-icon-stroke-color"].value}"
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});oe({name:"StatusFailure24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});oe({name:"StatusInProgress24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});oe({name:"StatusSuccess24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const{defineElement:G,defineElementNoInputs:af}=gi(),F=G()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>E`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return m`
            <a
                href=${r}
                ${H("click",s=>{(!e.router||Ei(s))&&(s.preventDefault(),window.scrollTo(0,0),t(new er(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Dd(e,t){return e.entry.entryType===P.Root?!1:!!(e.entry.entryType===P.Page||ie(t,e.fullUrlBreadcrumbs.slice(0,-1))||ie(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const te=G()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${x["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${x["element-book-nav-hover-background-color"].value};
            color: ${x["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${x["element-book-nav-active-background-color"].value};
            color: ${x["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${F.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${x["element-book-nav-selected-background-color"].value};
            color: ${x["element-book-nav-selected-foreground-color"].value};
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

        ${B} {
            display: inline-flex;
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Dd(r,e.selectedPath))return;const n=E`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return m`
                <li style=${n}>
                    <${F.assign({router:e.router,route:{paths:[z.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ll({"title-row":!0,selected:e.selectedPath?ie(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ne(Be(r,P.ElementExample),m`
                                    <${B.assign({icon:Od})}></${B}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${F}>
                </li>
            `});return m`
            <${F.assign({route:De,router:e.router})}>
                <slot name=${Z.NavHeader}>Book</slot>
            </${F}>
            <ul>
                ${t}
            </ul>
        `}});async function Ud(e){await Ir(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await ja(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const me=G()({tagName:"book-error",styles:E`
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
    `,renderCallback({inputs:e}){return(sr(e.message,"array")?e.message:[e.message]).map(r=>m`
                <p>${r}</p>
            `)}}),lt=G()({tagName:"book-page-controls",events:{controlValueChange:Ce()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
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

        ${Ht} {
            height: 24px;
            max-width: 128px;
        }

        ${B}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],s)=>{if(o.controlType===M.Hidden)return"";const i=Fd(e.currentValues[n],o,a=>{const l=sr(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:a}}))});return m`
                    <div class="control-wrapper">
                        ${ne(s===0,m`
                                <${B.assign({icon:aa})}
                                    class="options-icon"
                                ></${B}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${i}
                        </label>
                    </div>
                `}):""}});function Fd(e,t,r){return Ae(t,M.Hidden)?"":Ae(t,M.Checkbox)?m`
            <input
                type="checkbox"
                .value=${e}
                ${H("input",n=>{const o=Ze(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ae(t,M.Color)?m`
            <input
                type="color"
                .value=${e}
                ${H("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Ae(t,M.Text)?m`
            <${Ht.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${H(Ht.events.valueChange,n=>{r(n.detail)})}
            ></${Ht}>
        `:Ae(t,M.Number)?m`
            <input
                type="number"
                .value=${e}
                ${H("input",n=>{const o=Ze(n,HTMLInputElement);r(o.value)})}
            />
        `:Ae(t,M.Dropdown)?m`
            <select
                .value=${e}
                ${H("input",n=>{const o=Ze(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>m`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:m`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const hs=G()({tagName:"book-breadcrumbs",styles:E`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const s=n>=o.length-1,i=o.slice(0,n+1),a=s?"":m`
                      <span class="spacer">&gt;</span>
                  `;return m`
                <${F.assign({route:{hash:void 0,search:void 0,paths:[z.Book,...i]},router:e.router})}>
                    ${r}
                </${F}>
                ${a}
            `}):m`
                &nbsp;
            `}}),jr=G()({tagName:"book-breadcrumbs-bar",styles:E`
        :host {
            border-bottom: 1px solid
                ${x["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${x["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return m`
            ${ne(!!e.currentSearch,m`
                    &nbsp;
                `,m`
                    <${hs.assign({currentRoute:e.currentRoute,router:e.router})}></${hs}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${H("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Aa(200),n.value===o&&(n.value?t(new er({paths:[z.Search,encodeURIComponent(n.value)]})):t(new er(De)))})}
            />
        `}}),ps=G()({tagName:"book-entry-description",styles:E`
        :host {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${x["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>m`
                <p>${t}</p>
            `)}}),ms=G()({tagName:"book-page-wrapper",styles:E`
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

        ${F} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?m`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:m`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[z.Book,...e.pageNode.fullUrlBreadcrumbs],n=_s(e.pageNode.entry.errors);return n&&console.error(n),m`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${F.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${F}>
                    ${n?m`
                              <${me.assign({message:n.message})}></${me}>
                          `:m`
                              <${ps.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${ps}>
                              <${lt.assign({config:e.pageNode.entry.controls,currentValues:Sn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${lt}>
                          `}
                </div>
            </div>
        `}}),Tt=G()({tagName:"book-element-example-controls",styles:E`
        :host {
            display: flex;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[z.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return m`
            <${F.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${F}>
        `}}),gs=Symbol("unset-internal-state"),bs=G()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:gs},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw _s(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===gs&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return m`
                ${ne(!!t.elementExampleNode.entry.styles,m`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),m`
                <${me.assign({message:`${t.elementExampleNode.entry.title} failed: ${or(n)}`})}></${me}>
            `}},options:{allowPolymorphicState:!0}}),vs=G()({tagName:"book-element-example-wrapper",styles:E`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
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

        ${Tt} {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Tt} {
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return m`
            <div class="individual-example-wrapper">
                <${Tt.assign(Sa(e,["currentPageControls"]))}></${Tt}>
                <${bs.assign(e)}></${bs}>
            </div>
        `}});function ua(e,t,r,n){const o=Xr(r,n),s=[];if(o){const i=ua(e,t,o,n);i&&s.push(i)}if(Be(r,P.Page)&&!e.includes(r)){const i=Sn(t,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:i,breadcrumbs:Bt(i,()=>r.fullUrlBreadcrumbs)})}return s.reduce((i,a)=>({config:{...i.config,...a.config},current:{...i.current,...a.current},breadcrumbs:{...i.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Vd({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:s}){if(!e.length&&n)return[m`
                No results
            `];const i=Wn(e,1)?ua(e,o,e[0],s):void 0,a=i&&Object.values(i.config).length&&Wn(e,1)?m`
                  <${lt.assign({config:i.config,currentValues:i.current,fullUrlBreadcrumbs:i.breadcrumbs})}></${lt}>
              `:"",l=cl(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Be(c,P.Page))return m`
                    <${ms.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${ms}>
                `;if(Be(c,P.ElementExample)){const d=Sn(o,c.fullUrlBreadcrumbs.slice(0,-1));return m`
                    <${vs.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${vs}>
                `}else return Be(c,P.Root)?"":m`
                    <${me.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${me}>
                `});return[a,l].flat()}const Pe=G()({tagName:"book-entry-display",styles:E`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
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

        ${jr} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${le["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:Ce()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const s=Kr(e.currentRoute.paths),i=Vd({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return m`
            <${jr.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${jr}>

            ${ne(e.showLoading,m`
                    <div
                        ${ko(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${B.assign({icon:Id})}></${B}>
                    </div>
                    ${ne(!!n.lastElement,m`
                            ${n.lastElement}
                            <slot name=${Z.Footer}></slot>
                        `)}
                `,m`
                    <div
                        ${ko(a=>{o({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${i}
                    </div>
                    <slot name=${Z.Footer}></slot>
                `)}
        `}});function Wd(e,t,r){const n=$s(e,t);if(n.length)return n;r(De);const o=$s(e,De.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function $s(e,t){return e.filter(r=>Ba({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Ct=hi()({tagName:"element-book-app",events:{pathUpdate:Ce()},stateInitStatic:{currentRoute:De,router:void 0,loading:!0,colors:{config:void 0,theme:ds(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:E`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${x["element-book-page-background-color"].value};
            color: ${x["element-book-page-foreground-color"].value};
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

        ${Pe} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${te} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{ys(e,Kr(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:s})=>{var u,d,f,h,p,g,v;t._debug&&console.info("rendering element-book app");function i(y){return{...e.currentRoute,...y}}function a(y){const _=i(y);return!ie(e.currentRoute,_)}function l(y){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,y].filter(fn).join(" - "))}function c(y){if(!a(y))return;const _=i(y);e.router?e.router.setRoutes(_):n({currentRoute:{...e.currentRoute,..._}}),t.elementBookRoutePaths&&!ie(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new s.pathUpdate(_.paths??[]))}try{if(t.elementBookRoutePaths&&!ie(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const T=Jc(t.internalRouterConfig.basePath);n({router:T}),T.addRouteListener(!0,N=>{n({currentRoute:N})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const y={themeColor:t.themeColor};if(!ie(y,(f=e.colors)==null?void 0:f.config)){const T=ds(y);n({colors:{config:y,theme:T}}),tu(r,T)}const _=t._debug??!1,S=_c({entries:t.entries,debug:_});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:yi(S.tree,{children:(p=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:p.children,controls:t.globalValues})}}));const C=Kr(e.currentRoute.paths),J=(C?Rc({flattenedNodes:S.flattenedNodes,searchQuery:C}):void 0)??Wd(S.flattenedNodes,e.currentRoute.paths,c);l((g=J[0])==null?void 0:g.entry.title);const I=(v=e.treeBasedControls)==null?void 0:v.controls;return I?(t._debug&&console.info({currentControls:I}),m`
                <div
                    class="root"
                    ${H(er,async T=>{const N=T.detail;if(!a(N))return;if(n({loading:!0}),c(N),!(r.shadowRoot.querySelector(te.tagName)instanceof te))throw new Error(`Failed to find child '${te.tagName}'`);ys(r,C,e.currentRoute)})}
                    ${H(lt.events.controlValueChange,T=>{if(!e.treeBasedControls)return;const N=Cc(I,T.detail.fullUrlBreadcrumbs,T.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:N}})})}
                >
                    <${te.assign({flattenedNodes:S.flattenedNodes,router:e.router,selectedPath:C?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Z.NavHeader}
                            slot=${Z.NavHeader}
                        ></slot>
                    </${te}>
                    <${Pe.assign({controls:I,currentNodes:J,currentRoute:e.currentRoute,debug:_,originalTree:S.tree,router:e.router,showLoading:e.loading})}
                        ${H(Pe.events.loadingRender,async T=>{await Ir();const N=r.shadowRoot.querySelector(Pe.tagName);N?N.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Pe.tagName}' for scrolling.`),await Ir(),n({loading:!T.detail})})}
                    >
                        <slot
                            name=${Z.Footer}
                            slot=${Z.Footer}
                        ></slot>
                    </${Pe}>
                </div>
            `):m`
                    <${me.assign({message:"Failed to generate page controls."})}></${me}>
                `}catch(y){return console.error(y),m`
                <p class="error">${or(y)}</p>
            `}}});async function ys(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(te.tagName);if(!(n instanceof te))throw new Error(`Failed to find child '${te.tagName}'`);await Ud(n)}const Hn=Oa()({title:"Parent Page 1",parent:void 0,controls:{"Parent Control":{controlType:M.Color,initValue:"#33ccff"},"Hidden control":{controlType:M.Hidden,initValue:new RegExp("this can be anything")}}}),dn=Ue({title:"Parent Page 2",parent:void 0}),ws=Ue({title:"Sub Page 1",parent:dn});function Es(e,t){return Ue({title:`test ${e}`,parent:t,elementExamplesCallback({defineExample:n}){Array(20).fill(0).forEach((o,s)=>{n({title:`example ${e} ${s}`,renderCallback(){return"element example here"}})})}})}const xs=Ue({title:"duplicate error page",parent:Hn,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:e}){e({title:"example 1",renderCallback(){return"hi"}}),e({title:"example 2",renderCallback(){return"hi"}})}}),Yd=Ue({title:"test 3",controls:{thing:{initValue:"there",controlType:M.Text},thing2:{initValue:!1,controlType:M.Checkbox},thing3:{initValue:"hello",controlType:M.Dropdown,options:["hello","hi","yo"]}},parent:Hn,elementExamplesCallback({defineExample:e}){e({title:"example 3 1",renderCallback(){return"hi"}}),e({title:"example 3 2",styles:E`
                .color-control {
                    width: 20px;
                    height: 20px;);
                }
            `,renderCallback({controls:t}){const r=E`
                    background-color: ${X(t["Parent Control"])};
                `;return m`
                    hello ${t.thing}, ${t.thing2}
                    <div style=${r} class="color-control"></div>
                    selected: ${t.thing3} ${t["Hidden control"]}
                    <br />
                    global: ${t.testGlobalControl}
                `}}),e({title:"example with error",renderCallback(){return"broken"}}),e({title:"example with error",renderCallback(){return"broken"}})}}),da=[Hn,Es(0,dn),ws,...Array(100).fill(0).map((e,t)=>Es(t+1,ws)),xs,xs,Yd,dn];console.info({entries:da});ur({tagName:"vir-app",styles:E`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${Ct} {
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
    `,stateInitStatic:{themeColor:void 0,paths:["book"]},renderCallback:({state:e,updateState:t})=>m`
            <label>
                Theme color
                <input
                    ${H("input",r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("input element not found for input event");t({themeColor:n.value})})}
                    type="color"
                />
            </label>
            <${Ct.assign({entries:da,themeColor:e.themeColor,internalRouterConfig:{useInternalRouter:!0,basePath:"element-book"},_debug:!0,globalValues:{testGlobalControl:"it worked!"}})}
                ${H(Ct.events.pathUpdate,r=>{t({paths:r.detail})})}
            >
                <h1 slot=${Z.NavHeader}>My Title</h1>
                <footer slot=${Z.Footer}>Example Footer</footer>
            </${Ct}>
        `});
