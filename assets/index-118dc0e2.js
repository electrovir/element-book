var Ti=Object.defineProperty;var _i=(e,t,r)=>t in e?Ti(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var tr=(e,t,r)=>(_i(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Li(e,t){return e.includes(t)}function ve(e){return!!e}function Ai(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ri={capitalizeFirstLetter:!1};function Pi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Bi(e,t){return t.capitalizeFirstLetter?Pi(e):e}function Hi(e,t=Ri){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Bi(n,t)}var He;(function(e){e.Upper="upper",e.Lower="lower"})(He||(He={}));function Ni(e){return e.toLowerCase()!==e.toUpperCase()}function wn(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Ni(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===He.Upper&&o!==o.toUpperCase())return!1;if(t===He.Lower&&o!==o.toLowerCase())return!1}return!0}function Oi(e){return e.split("").reduce((r,n,o,a)=>{const i=o>0&&a[o-1]||"",s=o<a.length-1&&a[o+1]||"",l=wn(i,He.Lower,{blockNoCaseCharacters:!0})||wn(s,He.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function zi(e,t){return e.split(t)}var vn;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(vn||(vn={}));const Ii=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function U(e,t){return e?Ii.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function jo(e,t){return e&&t.every(r=>U(e,r))}function Uo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>at(r).trim()).join(`
`))}function at(e){return e?e instanceof Error?e.message:U(e,"message")?String(e.message):String(e):""}function Fo(e){return e instanceof Error?e:new Error(at(e))}function $r(e){return Array.isArray(e)?"array":typeof e}function Y(e,t){return $r(e)===t}function ne(e){return!!e&&typeof e=="object"}function F(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Vo(e,t,r=!1,n={}){const o=F(e),a=new Set(F(t));if(!r){const i=o.filter(s=>!a.has(s));if(i.length)throw new Error(`Test object has extra keys: ${i.join(", ")}`)}a.forEach(i=>{if(!U(e,i))throw new Error(`test object does not have key "${String(i)}" from expected shape.`);function s(u){throw new Error(`test object value at key "${String(i)}" did not match expected shape: ${u}`)}const l=e[i],c=t[i];n[i]||Yo(l,c,s,r,n[i]??{})})}function Yo(e,t,r,n,o){var s;const a=typeof e,i=typeof t;a!==i&&r(`type "${a}" did not match expected type "${i}"`);try{U(t,"constructor")&&(!U(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{Yo(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${at(f)}`)}}).filter(ve).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):ne(t)&&Vo(e,t,n,o)}function yn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const $n="Failed to compare objects using JSON.stringify";function En(e,t,r){return yn({source:e,errorHandler(n){if(r)return"";throw n}})===yn({source:t,errorHandler(n){if(r)return"";throw n}})}function ue(e,t,r={}){try{return e===t?!0:ne(e)&&ne(t)?En(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ue(e[o],t[o])):!1:En(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Fo(n);throw o.message.startsWith($n)||(o.message=`${$n}: ${o.message}`),o}}function Di(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ji(e){return F(e).filter(t=>isNaN(Number(t)))}function Ui(e){return ji(e).map(r=>e[r])}function Fi(e,t){return Ui(t).includes(e)}function Vi(e,t){return F(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Yi(e,t){return Vi(e,r=>!t.includes(r))}function he(e,t){let r=!1;const n=F(e).reduce((o,a)=>{const i=t(a,e[a],e);return i instanceof Promise&&(r=!0),{...o,[a]:i}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(F(n).map(async i=>{const s=await n[i];n[i]=s})),o(n)}catch(i){a(i)}}):n}function kn(e,t){try{return Wo(e,t),!0}catch{return!1}}function Wo(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Yr(){let e,t,r=!1;const n=new Promise((o,a)=>{e=i=>(r=!0,o(i)),t=i=>{r=!0,a(i)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Yr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Er(e){const t=Yr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const Wi=globalThis.crypto;function Gi(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Wi.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function qi({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Xi(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(ve);return t.length?`?${t.join("&")}`:""}function Zi(e){return qi({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=zi(n,"="),i=a.join("");if(!(!i&&!o))return[o,i]}).filter(ve)}function Ji(e,t){const r=Y(e,"string")?new URL(e):e,n=Zi(r.search),o=Object.fromEntries(n);return t&&Vo(o,t),o}const Ki="px";function Qi(e){return es({value:e,suffix:Ki})}function es({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function ts(e,t){return U(e,"entryType")&&e.entryType===t}var B;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(B||(B={}));function _e(e,t){return e.controlType===t}var _;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(_||(_={}));const Go=Symbol("any-type"),rs={[_.Checkbox]:!1,[_.Color]:"",[_.Dropdown]:"",[_.Hidden]:Go,[_.Number]:0,[_.Text]:""};function ns(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=rs[o.controlType];a!==Go&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Wr(e,t){const r=Tt(e.title);return e.parent?[...Wr(e.parent,!1),Tt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Tt(e){return Ai(e).toLowerCase().replaceAll(/\s/g,"-")}function os({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function as(){return e=>ze(e)}function ze(e){const t={...e,entryType:B.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:B.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ve)};r.add(n.title),t.elementExamples[Tt(o.title)]=o}}),t}var J;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(J||(J={}));async function kr(e=1){const t=Yr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function is(e){return ss(e,1)}async function ss(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{Wo(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=window,Gr=Et.ShadowRoot&&(Et.ShadyCSS===void 0||Et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qr=Symbol(),xn=new WeakMap;let qo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==qr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Gr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=xn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&xn.set(r,t))}return t}toString(){return this.cssText}};const K=e=>new qo(typeof e=="string"?e:e+"",void 0,qr),kt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new qo(r,e,qr)},ls=(e,t)=>{Gr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Et.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Cn=Gr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return K(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rr;const _t=window,Mn=_t.trustedTypes,cs=Mn?Mn.emptyScript:"",Sn=_t.reactiveElementPolyfillSupport,xr={toAttribute(e,t){switch(t){case Boolean:e=e?cs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Xo=(e,t)=>t!==e&&(t==t||e==e),nr={attribute:!0,type:String,converter:xr,reflect:!1,hasChanged:Xo},Cr="finalized";let Pe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=nr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||nr}static finalize(){if(this.hasOwnProperty(Cr))return!1;this[Cr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Cn(o))}else t!==void 0&&r.push(Cn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ls(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=nr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const i=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:xr).toAttribute(r,n.type);this._$El=t,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const i=o.getPropertyOptions(a),s=typeof i.converter=="function"?{fromAttribute:i.converter}:((n=i.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?i.converter:xr;this._$El=a,this[a]=s.fromAttribute(r,i.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Xo)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Pe[Cr]=!0,Pe.elementProperties=new Map,Pe.elementStyles=[],Pe.shadowRootOptions={mode:"open"},Sn==null||Sn({ReactiveElement:Pe}),((rr=_t.reactiveElementVersions)!==null&&rr!==void 0?rr:_t.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var or;const Lt=window,Ne=Lt.trustedTypes,Tn=Ne?Ne.createPolicy("lit-html",{createHTML:e=>e}):void 0,At="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,Xr="?"+se,us=`<${Xr}>`,Ce=document,Ze=()=>Ce.createComment(""),Je=e=>e===null||typeof e!="object"&&typeof e!="function",Zo=Array.isArray,Jo=e=>Zo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ar=`[ 	
\f\r]`,Ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_n=/-->/g,Ln=/>/g,ye=RegExp(`>|${ar}(?:([^\\s"'>=/]+)(${ar}*=${ar}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),An=/'/g,Rn=/"/g,Ko=/^(?:script|style|textarea|title)$/i,ds=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),fs=ds(1),ee=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Pn=new WeakMap,xe=Ce.createTreeWalker(Ce,129,null,!1);function Qo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tn!==void 0?Tn.createHTML(t):t}const ea=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",i=Ve;for(let s=0;s<r;s++){const l=e[s];let c,u,d=-1,f=0;for(;f<l.length&&(i.lastIndex=f,u=i.exec(l),u!==null);)f=i.lastIndex,i===Ve?u[1]==="!--"?i=_n:u[1]!==void 0?i=Ln:u[2]!==void 0?(Ko.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=ye):u[3]!==void 0&&(i=ye):i===ye?u[0]===">"?(i=o??Ve,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?ye:u[3]==='"'?Rn:An):i===Rn||i===An?i=ye:i===_n||i===Ln?i=Ve:(i=ye,o=void 0);const h=i===ye&&e[s+1].startsWith("/>")?" ":"";a+=i===Ve?l+us:d>=0?(n.push(c),l.slice(0,d)+At+l.slice(d)+se+h):l+se+(d===-2?(n.push(void 0),s):h)}return[Qo(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Ke{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,i=0;const s=t.length-1,l=this.parts,[c,u]=ea(t,r);if(this.el=Ke.createElement(c,n),xe.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=xe.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(At)||f.startsWith(se)){const h=u[i++];if(d.push(f),h!==void 0){const p=o.getAttribute(h.toLowerCase()+At).split(se),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:g[2],strings:p,ctor:g[1]==="."?ra:g[1]==="?"?na:g[1]==="@"?oa:it})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(Ko.test(o.tagName)){const d=o.textContent.split(se),f=d.length-1;if(f>0){o.textContent=Ne?Ne.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],Ze()),xe.nextNode(),l.push({type:2,index:++a});o.append(d[f],Ze())}}}else if(o.nodeType===8)if(o.data===Xr)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(se,d+1))!==-1;)l.push({type:7,index:a}),d+=se.length-1}a++}}static createElement(t,r){const n=Ce.createElement("template");return n.innerHTML=t,n}}function Me(e,t,r=e,n){var o,a,i,s;if(t===ee)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Je(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((i=(s=r)._$Co)!==null&&i!==void 0?i:s._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Me(e,l._$AS(e,t.values),l,n)),t}class ta{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Ce).importNode(n,!0);xe.currentNode=a;let i=xe.nextNode(),s=0,l=0,c=o[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new Ie(i,i.nextSibling,this,t):c.type===1?u=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(u=new aa(i,this,t)),this._$AV.push(u),c=o[++l]}s!==(c==null?void 0:c.index)&&(i=xe.nextNode(),s++)}return xe.currentNode=Ce,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Ie{constructor(t,r,n,o){var a;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Me(this,t,r),Je(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==ee&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Jo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&Je(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ce.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ke.createElement(Qo(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const i=new ta(a,this),s=i.u(this.options);i.v(n),this.$(s),this._$AH=i}}_$AC(t){let r=Pn.get(t.strings);return r===void 0&&Pn.set(t.strings,r=new Ke(t)),r}T(t){Zo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Ie(this.k(Ze()),this.k(Ze()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class it{constructor(t,r,n,o,a){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let i=!1;if(a===void 0)t=Me(this,t,r,0),i=!Je(t)||t!==this._$AH&&t!==ee,i&&(this._$AH=t);else{const s=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Me(this,s[n+l],r,l),c===ee&&(c=this._$AH[l]),i||(i=!Je(c)||c!==this._$AH[l]),c===L?t=L:t!==L&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ra extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const hs=Ne?Ne.emptyScript:"";class na extends it{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,hs):this.element.removeAttribute(this.name)}}class oa extends it{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=Me(this,t,r,0))!==null&&n!==void 0?n:L)===ee)return;const o=this._$AH,a=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==L&&(o===L||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class aa{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Me(this,t)}}const ms={O:At,P:se,A:Xr,C:1,M:ea,L:ta,R:Jo,D:Me,I:Ie,V:it,H:na,N:oa,U:ra,F:aa},Bn=Lt.litHtmlPolyfillSupport;Bn==null||Bn(Ke,Ie),((or=Lt.litHtmlVersions)!==null&&or!==void 0?or:Lt.litHtmlVersions=[]).push("2.8.0");const ps=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let i=a._$litPart$;if(i===void 0){const s=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=i=new Ie(t.insertBefore(Ze(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ir,sr;let qe=class extends Pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ps(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return ee}};qe.finalized=!0,qe._$litElement$=!0,(ir=globalThis.litElementHydrateSupport)===null||ir===void 0||ir.call(globalThis,{LitElement:qe});const Hn=globalThis.litElementPolyfillSupport;Hn==null||Hn({LitElement:qe});((sr=globalThis.litElementVersions)!==null&&sr!==void 0?sr:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},De=e=>(...t)=>({_$litDirective$:e,values:t});let Se=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:gs}=ms,Nn=()=>document.createComment(""),Ye=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=o.insertBefore(Nn(),a),s=o.insertBefore(Nn(),a);r=new gs(i,s,e,e.options)}else{const i=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(i!==a||l){let c=r._$AA;for(;c!==i;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},$e=(e,t,r=e)=>(e._$AI(t,r),e),bs={},ws=(e,t=bs)=>e._$AH=t,vs=e=>e._$AH,lr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ia=De(class extends Se{constructor(e){var t;if(super(e),e.type!==Yt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const i=!!t[a];i===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(i?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return ee}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const On=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},ys=De(class extends Se{constructor(e){if(super(e),e.type!==Yt.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let i=0;for(const s of e)o[i]=n?n(s,i):i,a[i]=r(s,i),i++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=vs(e),{values:i,keys:s}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=s,i;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,h=a.length-1,p=0,g=i.length-1;for(;f<=h&&p<=g;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===s[p])c[p]=$e(a[f],i[p]),f++,p++;else if(l[h]===s[g])c[g]=$e(a[h],i[g]),h--,g--;else if(l[f]===s[g])c[g]=$e(a[f],i[g]),Ye(e,c[g+1],a[f]),f++,g--;else if(l[h]===s[p])c[p]=$e(a[h],i[p]),Ye(e,a[f],a[h]),h--,p++;else if(u===void 0&&(u=On(s,p,g),d=On(l,f,h)),u.has(l[f]))if(u.has(l[h])){const y=d.get(s[p]),$=y!==void 0?a[y]:null;if($===null){const C=Ye(e,a[f]);$e(C,i[p]),c[p]=C}else c[p]=$e($,i[p]),Ye(e,a[f],$),a[y]=null;p++}else lr(a[h]),h--;else lr(a[f]),f++;for(;p<=g;){const y=Ye(e,c[g+1]);$e(y,i[p]),c[p++]=y}for(;f<=h;){const y=a[f++];y!==null&&lr(y)}return this.ut=s,ws(e,c),ee}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mr=class extends Se{constructor(t){if(super(t),this.et=L,t.type!==Yt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===L||t==null)return this.ft=void 0,this.et=t;if(t===ee)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Mr.directiveName="unsafeHTML",Mr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zn extends Mr{}zn.directiveName="unsafeSVG",zn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $s(e,t,r){return e?t():r==null?void 0:r()}class sa extends qe{}function Te(e){if(ne(e))return he(e,(r,n)=>{if(!Y(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Oi(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,i=r.startsWith("--")?K(r):r.startsWith("-")?kt`-${K(r)}`:kt`--${K(r)}`;return{name:i,value:kt`var(${i}, ${K(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${Te.name}' function.`)}function Es({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function ks(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const a=e.map(s=>[s]);return a.length||(a[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(a[s]=[])}),t.forEach(s=>{const l=a[s.index];l&&l.splice(0,0,...s.values)}),a.flat()}function Sr(e){return U(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function Zr(e){return U(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function la(e){return e.map(t=>Sr(t)?t.definition:t).filter(t=>Zr(t))}const ca=new WeakMap;function xs(e,t){var o;const r=la(t);return(o=ua(ca,[e,...r]).value)==null?void 0:o.template}function Cs(e,t,r){const n=la(t);return fa(ca,[e,...n],r)}function ua(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=da(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ua(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function da(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function fa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:i}=da(e,t,n);if(!a)return{result:!1,reason:i};const s=o??{nested:void 0,template:void 0};if(o||e.set(a,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),fa(l,t,r,n+1)}const Ms=new WeakMap;function ha(e,t,r){const n=xs(e,t),o=n??r();if(!n){const s=Cs(e,t,o);if(s.result)Ms.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=o.valuesTransform(t),i=ks(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:i}}function ma(e,t,r,n){const o=[],a=[],i=[],s=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let g,y=[];if(typeof f=="string"&&(g=r(f,c,p),g)){o[d]=f+g.replacement,i.push(h);const C=g.getExtraValues;y=C?C(p):[],y.length&&C?(o[d]+=" ",y.forEach((T,S)=>{S&&o.push(" ")}),s.push(T=>{const S=T[h],N=C(S);return{index:h,values:N}}),o.push(c)):o[d]+=c}g||o.push(c);const $=e.raw[u];g?(a[d]=a[d]+g.replacement+$,y.length&&y.forEach(()=>{a.push("")})):a.push($)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=s.map(d=>d(c)).flat();return{valueIndexDeletions:i,valueInsertions:u}}}}function Ss(...[e,t,r]){if(Zr(r))return{replacement:r.tagName,getExtraValues:void 0}}function Ts(e,t){return ma(e,t,Ss)}function E(e,...t){const r=ha(e,t,()=>Ts(e,t));return kt(r.strings,...r.values)}const Jr=Symbol("key for ignoring inputs not having been set yet"),_s={[Jr]:!0,allowPolymorphicState:!1};function pa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof sa?!0:pa(r)}function ga(e,t){const r=e.instanceState;F(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&F(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Ls(e)}function Ls(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function In(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class As extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Kr(){return e=>{var t;return t=class extends As{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function le(){return Kr()}function Rs(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Kr()([e,n].join("_"));return r[n]=o,r},{}):{}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Bs=(e,t,r)=>{t.constructor.createProperty(r,e)};function Hs(e){return(t,r)=>r!==void 0?Bs(e,t,r):Ps(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cr;((cr=window.HTMLSlotElement)===null||cr===void 0?void 0:cr.prototype.assignedElements)!=null;const Ns="_elementVirStateSetup";function Os(e){return ne(e)?Ns in e:!1}function zs(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return $r(e)===$r(t)&&r}const ba=Symbol("and"),wa=Symbol("or"),va=Symbol("exact"),ya=Symbol("enum"),Qr=Symbol("unknown"),$a="__vir__shape__definition__key__do__not__use__in__actual__objects";function Ea(e){return U(e,$a)}const ka="__vir__shape__specifier__key__do__not__use__in__actual__objects",Is=[ba,wa,va,ya,Qr];function Ds(){return js([],Qr)}function Wt(e){return st(e,wa)}function en(e){return st(e,ba)}function tn(e){return st(e,va)}function rn(e){return st(e,ya)}function nn(e){return st(e,Qr)}function st(e,t){const r=Gt(e);return!!r&&r.specifierType===t}function js(e,t){return{[ka]:!0,specifierType:t,parts:e}}function xt(e,t){const r=Gt(t);if(r){if(en(r))return r.parts.every(n=>xt(e,n));if(Wt(r))return r.parts.some(n=>xt(e,n));if(tn(r))return ne(e)?xt(e,r.parts[0]):e===r.parts[0];if(rn(r))return Object.values(r.parts[0]).some(n=>n===e);if(nn(r))return!0}return zs(e,t)}function Gt(e){if(ne(e)&&U(e,ka)){if(!U(e,"parts")||!Y(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!U(e,"specifierType")||!Li(Is,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Tr(e,t=!1){return _r(e)}function _r(e){const t=Gt(e);if(t){if(Wt(t)||tn(t))return _r(t.parts[0]);if(en(t))return t.parts.reduce((r,n)=>Object.assign(r,_r(n)),{});if(rn(t))return Object.values(t.parts[0])[0];if(nn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Ea(e)?Tr(e.shape):e instanceof RegExp||Y(e,"array")?e:ne(e)?he(e,(r,n)=>Tr(n)):e}function Us(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Tr(e),[$a]:!0}}class Z extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Fs(e,t,r={}){try{return Vs(e,t,r),!0}catch{return!1}}function Vs(e,t,r={}){Ee(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function xa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Ee(e,t,r,n){if(nn(t))return!0;if(Ea(t))return Ee(e,t.shape,r,n);const o=xa(r);if(Gt(e))throw new Z(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!xt(e,t))throw new Z(`Subject does not match shape definition at key ${o}`);if(Y(t,"function"))return Y(e,"function");if(ne(e)){const i=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(i).map(c=>[c,!1]));let l=!1;if(Wt(t))l=t.parts.some(c=>{try{const u=Ee(e,c,r,{...n});return Object.assign(s,u),!0}catch(u){if(u instanceof Z)return!1;throw u}});else if(en(t))l=t.parts.every(c=>{try{const u=Ee(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,u),!0}catch(u){if(u instanceof Z)return!1;throw u}});else if(tn(t)){const c=Ee(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(rn(t))throw new Z(`Cannot compare an enum specifier to an object at ${o}`);if(Y(t,"array")&&Y(i,"array"))l=i.every((c,u)=>{const d=t.some(f=>{try{return Ee(c,f,[...r,u],n),!0}catch(h){if(h instanceof Z)return!1;throw h}});return s[u]=d,d});else{const c=Ys({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).join(",")}`;throw new Z(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,u])=>{if(!u)throw new Z(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function Ys({keys:e,options:t,shape:r,subject:n}){const o=xa(e),a={};if(ne(r)){const i=new Set(F(n)),s=new Set(F(r));t.ignoreExtraKeys||i.forEach(l=>{if(!s.has(l))throw new Z(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var f;const c=r[l],u=Wt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!i.has(l)&&!u&&!d)throw new Z(`Subject missing key '${String(l)}' in ${o}`)}),i.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=r[l];Ee(c,u,[...e,l],t),a[l]=!0})}else throw new Z(`shape definition at ${o} was not an object.`);return a}const Ws=Us({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:Ds()});function ur(e){return Fs(e,Ws,{allowExtraKeys:!0})}function Ca(e,t){t in e||Hs()(e,t)}function Gs(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Dn(e,t){const r=e;function n(i){t?Gs(i,e,e.tagName):Ca(e,i)}function o(i,s){return n(s),r[s]}return new Proxy({},{get:o,set(i,s,l){const c=Os(l)?l._elementVirStateSetup():l;n(s);const u=r[s];function d(p){i[s]=p,r[s]=p}const f=e.observablePropertyListenerMap[s];if(u!==c&&ur(u)&&(f!=null&&f.length)&&u.removeListener(f),ur(c))if(f)c.addListener(f);else{let p=function(){e.requestUpdate()};var h=p;e.observablePropertyListenerMap[s]=p,c.addListener(p)}else ur(u)&&(e.observablePropertyListenerMap[s]=void 0);return d(c),!0},ownKeys(i){return Reflect.ownKeys(i)},getOwnPropertyDescriptor(i,s){if(s in i)return{get value(){return o(i,s)},configurable:!0,enumerable:!0}},has(i,s){return Reflect.has(i,s)}})}function qs(e){return e?he(e,t=>t):{}}function Xs({hostClassNames:e,cssVars:t}){return{hostClasses:he(e,(r,n)=>({name:K(n),selector:K(`:host(.${n})`)})),cssVars:t}}function Zs({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&F(t).forEach(a=>{const i=t[a],s=r[a];typeof i=="function"&&(i({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Js(e,t){function r(o){F(o).forEach(a=>{const i=o[a];e.instanceState[a]=i})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Ks=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function qt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={..._s,...e.options},n=Rs(e.tagName,e.events),o=qs(e.hostClasses);e.hostClasses&&In(e.tagName,e.hostClasses),e.cssVars&&In(e.tagName,e.cssVars);const a=e.cssVars?Te(e.cssVars):{},i=typeof e.styles=="function"?e.styles(Xs({hostClassNames:o,cssVars:a})):e.styles||E``,s=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends sa{createRenderParams(){return Js(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{pa(this)&&!this._haveInputsBeenSet&&!r[Jr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${qt.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=s(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Zs({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Fo(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){ga(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Dn(this,!1),this.instanceState=Dn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};F(u).forEach(f=>{Ca(this,f),this.instanceState[f]=u[f]}),this.definition=c}},Ks(t,"anonymousClass"),t.tagName=e.tagName,t.styles=i,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=s,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Hi(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Ma(){return e=>qt({...e,options:{[Jr]:!1,...e.options}})}function Sa(e,t){return Qe(e,t),e.element}function Qs(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Qe(e,t){const r=Qs(e),n=r?`: in ${r}`:"";if(e.type!==Yt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function el(e,t){return t?jn(e,t):jn(void 0,e)}const jn=De(class extends Se{constructor(e){super(e),this.element=Sa(e,"assign")}render(e,t){return ga(this.element,t),ee}});function P(e,t){return tl(e,t)}const tl=De(class extends Se{constructor(e){super(e),this.element=Sa(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ee}}),Un="onDomCreated",Fn=De(class extends Se{constructor(e){super(e),Qe(e,Un)}update(e,[t]){Qe(e,Un);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),dr="onResize",Ta=De(class extends Se{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Qe(e,dr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${dr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Qe(e,dr),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function re(e,t,r){return $s(e,()=>t,()=>r)}function _a(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Ma()(r(n))),defineElementNoInputs:n=>(t(n),qt(r(n)))}}function rl(...[e,t,r]){const n=Sr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),i=o||a,s=Zr(n);if(i&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!i||!s?void 0:{replacement:n.tagName,getExtraValues(c){const u=Sr(c)?c.inputs:void 0;return[o&&u?el(u):void 0].filter(ve)}}}function nl(e){}function ol(e){return ma(e.strings,e.values,rl,nl)}function m(e,...t){const r=fs(e,...t),n=ha(e,t,()=>ol(r));return{...r,strings:n.strings,values:n.values}}const al={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},il=Object.keys(al),sl=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...il,...sl];function We(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const ll={[B.ElementExample]:()=>[],[B.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...ns(e.controls,e.title)].filter(ve),[B.Root]:()=>[]},Rt="_isBookTreeNode",La=new Map;function cl(e){return La.get(e)}function ul(e,t){Di(La,e,()=>t)}function Be(e,t){return!!(Aa(e)&&e.entry.entryType===t)}function Aa(e){return!!(jo(e,[Rt,"entry"])&&e[Rt])}function dl(){return{[Rt]:!0,entry:{entryType:B.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function fl({entries:e,debug:t}){const r=cl(e);if(r)return r;const n=dl();e.forEach(i=>on({tree:n,newEntry:i,debug:t,manuallyAdded:!0}));const o=Ra(n),a={tree:n,flattenedNodes:o};return ul(e,a),t&&console.info("element-book tree:",n),a}function hl(e,t,r){if(!t.parent)return e;const n=Lr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),on({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Lr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Wr(t,!1)}`);return o}function on({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=ll[t.entryType](t);t.errors.push(...o);const a=hl(e,t,r),i=Tt(t.title),s=a.children[i];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${i}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Rt]:!0,children:{},urlBreadcrumb:i,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,i],entry:t,manuallyAdded:n};a.children[i]=l,ts(t,B.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>on({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Lr(e,t){const r=Aa(e)?e.fullUrlBreadcrumbs.slice(0,-1):Wr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Ra(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ra(o));return[e,...r].flat()}function an(e,t){return sn(e,["",...t],void 0)}function sn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],i=a&&sn(a,n,r);return{...e.controls,...i}}function ml(e,t,r){const n={...e};return sn(n,["",...t],r),n}function Pa(e,t){const r=(t==null?void 0:t.controls)||(Be(e,B.Page)?he(e.entry.controls,(o,a)=>a.initValue):{});return{children:he(e.children,(o,a)=>{var i;return Pa(a,(i=t==null?void 0:t.children)==null?void 0:i[a.urlBreadcrumb])}),controls:r}}function pl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let i=0,s=0;i<n;i++){const l=a.charCodeAt(i);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const gl=Gi(32);function Ct(e){return e.join(gl)}function Ba(e){if(!e.length)return[];const t=Ct(e),r=Ba(e.slice(0,-1));return[t,...r]}const bl=["error","errors"];function wl(e){return bl.includes(e)}function vl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(i=>(n(i),Ct(i.fullUrlBreadcrumbs))).forEach(i=>r[i]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&wl(t),i=Ct(o.fullUrlBreadcrumbs);if(pl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[i]){const l=Ba(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[i]=!1}),e.filter(o=>{const a=Ct(o.fullUrlBreadcrumbs),i=r[a];if(!Y(i,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return i})}var O;(function(e){e.Search="search",e.Book="book"})(O||(O={}));function Ar(e){return e[0]===O.Book?"":e[1]?decodeURIComponent(e[1]):""}const Oe={hash:void 0,paths:[O.Book],search:void 0},yl=0;function Ha(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==yl)}class Xt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Vn extends Xt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const et="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const $l=globalThis.history.pushState;function Yn(...e){const t=$l.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(et)),t}const El=globalThis.history.replaceState;function Wn(...e){const t=El.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(et)),t}function kl(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Yn)throw new Vn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Wn)throw new Vn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Yn,globalThis.history.replaceState=Wn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(et))})}}function xl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),o=globalThis.location.search?Ji(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function Na(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Oa({routeBase:e,windowPath:t}){if(!e)return"";const r=Na(e);if(za({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Oa({routeBase:n,windowPath:t}):""}function za({routeBase:e,windowPath:t}){const r=Na(e);return r?t.startsWith(`/${r}`):!1}class Cl extends Xt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Ia(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Gn=6;function qn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Gn)throw new Cl(`Route sanitization depth has exceed the max of ${Gn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Ia(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class fr extends Xt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Ml(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new fr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new fr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new fr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Sl(e,t,r=!1){const n=Da(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Da(e,t){var s;const r=za({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Xi(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(ve).join("/")}${n}${a}`}function Tl(e={}){Ml(e),kl();const t=e.routeBase?Oa({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>qn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const i={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(i):i},setRoutes(a,i=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!s&&Ia(l,u)))return Sl(u,t,i)},createRoutesUrl(a){return Da(a,t)},getCurrentRawRoutes(){return xl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,i){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Xt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(i),r||(globalThis.addEventListener(et,n),r=!0),a&&qn(o,i),i},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const i=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(et,n),r=!1),i},sanitizationDepth:0};return o}function _l(e){return Tl({routeBase:e,routeSanitizer(t){return{paths:Ll(t.paths),hash:void 0,search:void 0}}})}function Ll(e){const t=e[0];if(Fi(t,O)){if(t===O.Book)return[O.Book,...e.slice(1)];if(t===O.Search)return e[1]?[t,e[1]]:[O.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Oe.paths}const k=Te({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Al={nav:{hover:{background:k["element-book-nav-hover-background-color"],foreground:k["element-book-nav-hover-foreground-color"]},active:{background:k["element-book-nav-active-background-color"],foreground:k["element-book-nav-active-foreground-color"]},selected:{background:k["element-book-nav-selected-background-color"],foreground:k["element-book-nav-selected-foreground-color"]}},accent:{icon:k["element-book-accent-icon-color"]},page:{background:k["element-book-page-background-color"],backgroundFaint1:k["element-book-page-background-faint-level-1-color"],backgroundFaint2:k["element-book-page-background-faint-level-2-color"],foreground:k["element-book-page-foreground-color"],foregroundFaint1:k["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:k["element-book-page-foreground-faint-level-2-color"]}};function Rl(e,t){ja(e,t,Al)}function Rr(e){return U(e,"_$cssResult$")}function Xn(e){return jo(e,["name","value","default"])&&Y(e.default,"string")&&Rr(e.name)&&Rr(e.value)}function ja(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Rr(o)){if(!Xn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Es({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Xn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ja(e,o,a)}})}function A(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(i=>[i]));let n=t[0].length,o=t[0].map((i,s)=>t.map(l=>l[s])),a=e.map(i=>o.map(s=>{let l=0;if(!Array.isArray(i)){for(let c of s)l+=i*c;return l}for(let c=0;c<i.length;c++)l+=i[c]*(s[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(i=>i[0]):a}function lt(e){return de(e)==="string"}function de(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Pt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Ua(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,i)=>{/%$/.test(i)?(i=new Number(i.slice(0,-1)/100),i.type="<percentage>"):/deg$/.test(i)?(i=new Number(+i.slice(0,-3)),i.type="<angle>",i.unit="deg"):r.test(i)&&(i=new Number(i),i.type="<number>"),a.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),o.push(i)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Fa(e){return e[e.length-1]}function Bt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Va(e,t,r){return(r-e)/(t-e)}function ln(e,t,r){return Bt(t[0],t[1],Va(e[0],e[1],r))}function Ya(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Pl=Object.freeze({__proto__:null,interpolate:Bt,interpolateInv:Va,isString:lt,last:Fa,mapRange:ln,multiplyMatrices:A,parseCoordGrammar:Ya,parseFunction:Ua,toPrecision:Pt,type:de});class Bl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const me=new Bl;var oe={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Q={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Pr(e){return Array.isArray(e)?e:Q[e]}function Ht(e,t,r,n={}){if(e=Pr(e),t=Pr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(me.run("chromatic-adaptation-start",o),o.M||(o.W1===Q.D65&&o.W2===Q.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Q.D50&&o.W2===Q.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),me.run("chromatic-adaptation-end",o),o.M)return A(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Hl=75e-6,D=class D{constructor(t){var o,a,i;this.id=t.id,this.name=t.name,this.base=t.base?D.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Pr(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((i=this.formats)!=null&&i.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Nl(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),me.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Hl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let i=n[a];if(i.type!=="angle"&&i.range){if(Number.isNaN(o))return!0;let[s,l]=i.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Zn(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Zn(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=D.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,a,i;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)a=n[s],i=s;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>i;s--)r=n[s].toBase(r);for(let s=i+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=D.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(D.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof D)return t;if(de(t)==="string"){let o=D.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return D.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=de(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=D.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=de(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=D.get(o);let i=a.toLowerCase(),s=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===i||((l=u.name)==null?void 0:l.toLowerCase())===i)return{space:o,id:c,index:s,...u};s++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};tr(D,"registry",{}),tr(D,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=D;function Nl(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Zn(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ya(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let i=e.coordGrammar[a][0],s=o.range||o.refRange,l=i.range,c="";return i=="<percentage>"?(l=[0,100],c="%"):i=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,i)=>{let{fromRange:s,toRange:l,suffix:c}=r[i];return s&&l&&(a=ln(s,l,a)),a=Pt(a,o),c&&(a+=c),a})}return e}var G=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class z extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=G),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=A(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Ht(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Ht(this.base.white,this.white,r),A(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Wa(e,{meta:t}={}){var n,o,a,i,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(me.run("parse-start",r),r.color)return r.color;if(r.parsed=Ua(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((g,y)=>r.parsed.args[y]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:u}}}let d="";if(c in b.registry){let f=(s=(i=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:i.color)==null?void 0:s.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Fa(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([p,g],y)=>{var te;let $=u.coordGrammar[y],C=(te=f[y])==null?void 0:te.type,T=$.find(I=>I==C);if(!T){let I=g.name||p;throw new TypeError(`${C} not allowed for ${I} in ${l}()`)}let S=T.range;C==="<percentage>"&&(S||(S=[0,1]));let N=g.range||g.refRange;return S&&N&&(f[y]=ln(S,N,f[y])),T})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function x(e){if(!e)throw new TypeError("Empty color reference");lt(e)&&(e=Wa(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function ct(e,t){return t=b.get(t),t.from(e)}function q(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return ct(e,r)[n]}function Ga(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function pe(e,t,r){if(e=x(e),arguments.length===2&&de(arguments[1])==="object"){let n=arguments[1];for(let o in n)pe(e,o,n[o])}else{typeof r=="function"&&(r=r(q(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=ct(e,n);a[o]=r,Ga(e,n,a)}return e}var cn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:G,fromBase:e=>Ht(G.white,"D50",e),toBase:e=>Ht("D50",G.white,e),formats:{color:{}}});const Ol=216/24389,Jn=24/116,ft=24389/27;let hr=Q.D50;var j=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:hr,base:cn,fromBase(e){let r=e.map((n,o)=>n/hr[o]).map(n=>n>Ol?Math.cbrt(n):(ft*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Jn?Math.pow(t[0],3):(116*t[0]-16)/ft,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ft,t[2]>Jn?Math.pow(t[2],3):(116*t[2]-16)/ft].map((n,o)=>n*hr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Zt(e){return(e%360+360)%360}function zl(e,t){if(e==="raw")return t;let[r,n]=t.map(Zt),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var tt=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:j,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Zt(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Kn=25**7,Nt=Math.PI,Qn=180/Nt,Le=Nt/180;function Br(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,i,s]=j.from(e),l=tt.from(j,[a,i,s])[1],[c,u,d]=j.from(t),f=tt.from(j,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,g=.5*(1-Math.sqrt(p/(p+Kn))),y=(1+g)*i,$=(1+g)*u,C=Math.sqrt(y**2+s**2),T=Math.sqrt($**2+d**2),S=y===0&&s===0?0:Math.atan2(s,y),N=$===0&&d===0?0:Math.atan2(d,$);S<0&&(S+=2*Nt),N<0&&(N+=2*Nt),S*=Qn,N*=Qn;let te=c-a,I=T-C,M=N-S,H=S+N,Qt=Math.abs(M),Ue;C*T===0?Ue=0:Qt<=180?Ue=M:M>180?Ue=M-360:M<-180?Ue=M+360:console.log("the unthinkable has happened");let hn=2*Math.sqrt(T*C)*Math.sin(Ue*Le/2),ki=(a+c)/2,er=(C+T)/2,mn=Math.pow(er,7),ae;C*T===0?ae=H:Qt<=180?ae=H/2:H<360?ae=(H+360)/2:ae=(H-360)/2;let pn=(ki-50)**2,xi=1+.015*pn/Math.sqrt(20+pn),gn=1+.045*er,Fe=1;Fe-=.17*Math.cos((ae-30)*Le),Fe+=.24*Math.cos(2*ae*Le),Fe+=.32*Math.cos((3*ae+6)*Le),Fe-=.2*Math.cos((4*ae-63)*Le);let bn=1+.015*er*Fe,Ci=30*Math.exp(-1*((ae-275)/25)**2),Mi=2*Math.sqrt(mn/(mn+Kn)),Si=-1*Math.sin(2*Ci*Le)*Mi,dt=(te/(r*xi))**2;return dt+=(I/(n*gn))**2,dt+=(hn/(o*bn))**2,dt+=Si*(I/(n*gn))*(hn/(o*bn)),Math.sqrt(dt)}const Il=75e-6;function Xe(e,t=e.space,{epsilon:r=Il}={}){e=x(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function rt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ge(e,{method:t=oe.gamut_mapping,space:r=e.space}={}){if(lt(arguments[1])&&(r=arguments[1]),r=b.get(r),Xe(e,r,{epsilon:0}))return x(e);let n=W(e,r);if(t!=="clip"&&!Xe(e,r)){let o=ge(rt(n),{method:"clip",space:r});if(Br(e,o)>2){let a=b.resolveCoord(t),i=a.space,s=a.id,l=W(n,i),u=(a.range||a.refRange)[0],d=.01,f=u,h=q(l,s);for(;h-f>d;){let p=rt(l);p=ge(p,{space:r,method:"clip"}),Br(l,p)-2<d?f=q(l,s):h=q(l,s),pe(l,s,(f+h)/2)}n=W(l,r)}else n=o}if(t==="clip"||!Xe(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,i)=>{let[s,l]=o[i];return s!==void 0&&(a=Math.max(s,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=W(n,e.space)),e.coords=n.coords,e}ge.returns="color";function W(e,t,{inGamut:r}={}){e=x(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ge(o)),o}W.returns="color";function Ot(e,{precision:t=oe.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=x(e);let i=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!Xe(e)&&(s=ge(rt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${i} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(h=>Pt(h,t)));let u=[...s];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Pt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Dl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],jl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Jt=new z({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Dl,fromXYZ_M:jl,formats:{color:{}}});const ht=1.09929682680944,eo=.018053968510807;var qa=new z({id:"rec2020",name:"REC.2020",base:Jt,toBase(e){return e.map(function(t){return t<eo*4.5?t/4.5:Math.pow((t+ht-1)/ht,1/.45)})},fromBase(e){return e.map(function(t){return t>=eo?ht*Math.pow(t,.45)-(ht-1):4.5*t})},formats:{color:{}}});const Ul=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Fl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Xa=new z({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Ul,fromXYZ_M:Fl});const Vl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Yl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Za=new z({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Vl,fromXYZ_M:Yl,formats:{color:{}}}),to={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ro=Array(3).fill("<percentage> | <number>[0, 255]"),no=Array(3).fill("<number>[0, 255]");var nt=new z({id:"srgb",name:"sRGB",base:Za,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ro},rgb_number:{name:"rgb",commas:!0,coords:no,noAlpha:!0},color:{},rgba:{coords:ro,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:no},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=to.black,t.alpha=0):t.coords=to[e],t.coords)return t}}}}),Ja=new z({id:"p3",name:"P3",base:Xa,fromBase:nt.fromBase,toBase:nt.toBase,formats:{color:{id:"display-p3"}}});oe.display_space=nt;if(typeof CSS<"u"&&CSS.supports)for(let e of[j,qa,Ja]){let t=e.getMinCoords(),n=Ot({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){oe.display_space=e;break}}function Wl(e,{space:t=oe.display_space,...r}={}){let n=Ot(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!oe.display_space)n=new String(n),n.color=e;else{let o=W(e,t);n=new String(Ot(o,r)),n.color=o}return n}function Ka(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,i,s)=>{let l=o[s];return isNaN(i)||isNaN(l)?a:a+(l-i)**2},0))}function Gl(e,t){return e=x(e),t=x(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function be(e){return q(e,[G,"y"])}function Qa(e,t){pe(e,[G,"y"],t)}function ql(e){Object.defineProperty(e.prototype,"luminance",{get(){return be(this)},set(t){Qa(this,t)}})}var Xl=Object.freeze({__proto__:null,getLuminance:be,register:ql,setLuminance:Qa});function Zl(e,t){e=x(e),t=x(t);let r=Math.max(be(e),0),n=Math.max(be(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Jl=.56,Kl=.57,Ql=.62,ec=.65,oo=.022,tc=1.414,rc=.1,nc=5e-4,oc=1.14,ao=.027,ac=1.14;function io(e){return e>=oo?e:e+(oo-e)**tc}function Ae(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function ic(e,t){t=x(t),e=x(e);let r,n,o,a,i,s;t=W(t,"srgb"),[a,i,s]=t.coords;let l=Ae(a)*.2126729+Ae(i)*.7151522+Ae(s)*.072175;e=W(e,"srgb"),[a,i,s]=e.coords;let c=Ae(a)*.2126729+Ae(i)*.7151522+Ae(s)*.072175,u=io(l),d=io(c),f=d>u;return Math.abs(d-u)<nc?n=0:f?(r=d**Jl-u**Kl,n=r*oc):(r=d**ec-u**Ql,n=r*ac),Math.abs(n)<rc?o=0:n>0?o=n-ao:o=n+ao,o*100}function sc(e,t){e=x(e),t=x(t);let r=Math.max(be(e),0),n=Math.max(be(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const lc=5e4;function cc(e,t){e=x(e),t=x(t);let r=Math.max(be(e),0),n=Math.max(be(t),0);return n>r&&([r,n]=[n,r]),n===0?lc:(r-n)/n}function uc(e,t){e=x(e),t=x(t);let r=q(e,[j,"l"]),n=q(t,[j,"l"]);return Math.abs(r-n)}const dc=216/24389,so=24/116,mt=24389/27;let mr=Q.D65;var Hr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:mr,base:G,fromBase(e){let r=e.map((n,o)=>n/mr[o]).map(n=>n>dc?Math.cbrt(n):(mt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>so?Math.pow(t[0],3):(116*t[0]-16)/mt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/mt,t[2]>so?Math.pow(t[2],3):(116*t[2]-16)/mt].map((n,o)=>n*mr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const pr=Math.pow(5,.5)*.5+.5;function fc(e,t){e=x(e),t=x(t);let r=q(e,[Hr,"l"]),n=q(t,[Hr,"l"]),o=Math.abs(Math.pow(r,pr)-Math.pow(n,pr)),a=Math.pow(o,1/pr)*Math.SQRT2-40;return a<7.5?0:a}var Mt=Object.freeze({__proto__:null,contrastAPCA:ic,contrastDeltaPhi:fc,contrastLstar:uc,contrastMichelson:sc,contrastWCAG21:Zl,contrastWeber:cc});function hc(e,t,r={}){lt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Mt).map(i=>i.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=x(e),t=x(t);for(let a in Mt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Mt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function ei(e){let[t,r,n]=ct(e,G),o=t+15*r+3*n;return[4*t/o,9*r/o]}function ti(e){let[t,r,n]=ct(e,G),o=t+r+n;return[t/o,r/o]}function mc(e){Object.defineProperty(e.prototype,"uv",{get(){return ei(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ti(this)}})}var pc=Object.freeze({__proto__:null,register:mc,uv:ei,xy:ti});function gc(e,t){return Ka(e,t,"lab")}const bc=Math.PI,lo=bc/180;function wc(e,t,{l:r=2,c:n=1}={}){let[o,a,i]=j.from(e),[,s,l]=tt.from(j,[o,a,i]),[c,u,d]=j.from(t),f=tt.from(j,[c,u,d])[1];s<0&&(s=0),f<0&&(f=0);let h=o-c,p=s-f,g=a-u,y=i-d,$=g**2+y**2-p**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let T=.0638*s/(1+.0131*s)+.638,S;Number.isNaN(l)&&(l=0),l>=164&&l<=345?S=.56+Math.abs(.2*Math.cos((l+168)*lo)):S=.36+Math.abs(.4*Math.cos((l+35)*lo));let N=Math.pow(s,4),te=Math.sqrt(N/(N+1900)),I=T*(te*S+1-te),M=(h/(r*C))**2;return M+=(p/(n*T))**2,M+=$/I**2,Math.sqrt(M)}const co=203;var un=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:G,fromBase(e){return e.map(t=>Math.max(t*co,0))},toBase(e){return e.map(t=>Math.max(t/co,0))}});const pt=1.15,gt=.66,uo=2610/2**14,vc=2**14/2610,fo=3424/2**12,ho=2413/2**7,mo=2392/2**7,yc=1.7*2523/2**5,po=2**5/(1.7*2523),bt=-.56,gr=16295499532821565e-27,$c=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Ec=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],kc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],xc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ri=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:un,fromBase(e){let[t,r,n]=e,o=pt*t-(pt-1)*n,a=gt*r-(gt-1)*t,s=A($c,[o,a,n]).map(function(f){let h=fo+ho*(f/1e4)**uo,p=1+mo*(f/1e4)**uo;return(h/p)**yc}),[l,c,u]=A(kc,s);return[(1+bt)*l/(1+bt*l)-gr,c,u]},toBase(e){let[t,r,n]=e,o=(t+gr)/(1+bt-bt*(t+gr)),i=A(xc,[o,r,n]).map(function(f){let h=fo-f**po,p=mo*f**po-ho;return 1e4*(h/p)**vc}),[s,l,c]=A(Ec,i),u=(s+(pt-1)*c)/pt,d=(l+(gt-1)*u)/gt;return[u,d,c]},formats:{color:{}}}),Nr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ri,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Zt(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Cc(e,t){let[r,n,o]=Nr.from(e),[a,i,s]=Nr.from(t),l=r-a,c=n-i;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let u=o-s,d=2*Math.sqrt(n*i)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const ni=3424/4096,oi=2413/128,ai=2392/128,go=2610/16384,Mc=2523/32,Sc=16384/2610,bo=32/2523,Tc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],_c=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Lc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Ac=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Or=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:un,fromBase(e){let t=A(Tc,e);return Rc(t)},toBase(e){let t=Pc(e);return A(Ac,t)},formats:{color:{}}});function Rc(e){let t=e.map(function(r){let n=ni+oi*(r/1e4)**go,o=1+ai*(r/1e4)**go;return(n/o)**Mc});return A(_c,t)}function Pc(e){return A(Lc,e).map(function(n){let o=Math.max(n**bo-ni,0),a=oi-ai*n**bo;return 1e4*(o/a)**Sc})}function Bc(e,t){let[r,n,o]=Or.from(e),[a,i,s]=Or.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-i)**2+(o-s)**2)}const Hc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Nc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Oc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],zc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var zt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:G,fromBase(e){let r=A(Hc,e).map(n=>Math.cbrt(n));return A(Oc,r)},toBase(e){let r=A(zc,e).map(n=>n**3);return A(Nc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ic(e,t){let[r,n,o]=zt.from(e),[a,i,s]=zt.from(t),l=r-a,c=n-i,u=o-s;return Math.sqrt(l**2+c**2+u**2)}var It={deltaE76:gc,deltaECMC:wc,deltaE2000:Br,deltaEJz:Cc,deltaEITP:Bc,deltaEOK:Ic};function Ge(e,t,r={}){lt(r)&&(r={method:r});let{method:n=oe.deltaE,...o}=r;e=x(e),t=x(t);for(let a in It)if("deltae"+n.toLowerCase()===a.toLowerCase())return It[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Dc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return pe(e,n,o=>o*(1+t))}function jc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return pe(e,n,o=>o*(1-t))}var Uc=Object.freeze({__proto__:null,darken:jc,lighten:Dc});function ii(e,t,r=.5,n={}){[e,t]=[x(e),x(t)],de(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:i}=n;return ut(e,t,{space:o,outputSpace:a,premultiplied:i})(r)}function si(e,t,r={}){let n;dn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:i=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[x(e),x(t)],n=ut(e,t,l));let c=Ge(e,t),u=o>0?Math.max(i,Math.ceil(c/o)+1):i,d=[];if(s!==void 0&&(u=Math.min(u,s)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,p)=>{let g=p*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,p,g)=>{if(g===0)return 0;let y=Ge(p.color,d[g-1].color,a);return Math.max(h,y)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<s;h++){let p=d[h-1],g=d[h],y=(g.p+p.p)/2,$=n(y);f=Math.max(f,Ge($,p.color),Ge($,g.color)),d.splice(h,0,{p:y,color:n(y)}),h++}}}return d=d.map(f=>f.color),d}function ut(e,t,r={}){if(dn(e)){let[l,c]=[e,t];return ut(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:i}=r;e=x(e),t=x(t),e=rt(e),t=rt(t);let s={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[oe.interpolationSpace]||e.space,o=o?b.get(o):n,e=W(e,n),t=W(t,n),e=ge(e),t=ge(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[q(e,c),q(t,c)];[u,d]=zl(l,[u,d]),pe(e,c,u),pe(t,c,d)}return i&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let p=t.coords[h];return Bt(f,p,l)}),u=Bt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return i&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=W(d,o)),d},{rangeArgs:s})}function dn(e){return de(e)==="function"&&!!e.rangeArgs}oe.interpolationSpace="lab";function Fc(e){e.defineFunction("mix",ii,{returns:"color"}),e.defineFunction("range",ut,{returns:"function<color>"}),e.defineFunction("steps",si,{returns:"array<color>"})}var Vc=Object.freeze({__proto__:null,isRange:dn,mix:ii,range:ut,register:Fc,steps:si}),li=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:nt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[i,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:i=(o-a)/c+(o<a?6:0);break;case o:i=(a-n)/c+2;break;case a:i=(n-o)/c+4}i=i*60}return[i,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let i=(a+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(i-3,9-i,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ci=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:li,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Yc=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ci,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let a=1-n,i=a===0?0:1-r/a;return[t,i*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Wc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Gc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ui=new z({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Wc,fromXYZ_M:Gc}),qc=new z({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ui,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Xc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Zc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var di=new z({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:cn,toXYZ_M:Xc,fromXYZ_M:Zc});const Jc=1/512,Kc=16/512;var Qc=new z({id:"prophoto",name:"ProPhoto",base:di,toBase(e){return e.map(t=>t<Kc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Jc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),eu=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:zt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Zt(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const wo=203,vo=2610/2**14,tu=2**14/2610,ru=2523/2**5,yo=2**5/2523,$o=3424/2**12,Eo=2413/2**7,ko=2392/2**7;var nu=new z({id:"rec2100pq",name:"REC.2100-PQ",base:Jt,toBase(e){return e.map(function(t){return(Math.max(t**yo-$o,0)/(Eo-ko*t**yo))**tu*1e4/wo})},fromBase(e){return e.map(function(t){let r=Math.max(t*wo/1e4,0),n=$o+Eo*r**vo,o=1+ko*r**vo;return(n/o)**ru})},formats:{color:{id:"rec2100-pq"}}});const xo=.17883277,Co=.28466892,Mo=.55991073,br=3.7743;var ou=new z({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Jt,toBase(e){return e.map(function(t){return t<=.5?t**2/3*br:(Math.exp((t-Mo)/xo)+Co)/12*br})},fromBase(e){return e.map(function(t){return t/=br,t<=1/12?Math.sqrt(3*t):xo*Math.log(12*t-Co)+Mo})},formats:{color:{id:"rec2100-hlg"}}});const fi={};me.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=hi(e.W1,e.W2,e.options.method))});me.add("chromatic-adaptation-end",e=>{e.M||(e.M=hi(e.W1,e.W2,e.options.method))});function Kt({id:e,toCone_M:t,fromCone_M:r}){fi[e]=arguments[0]}function hi(e,t,r="Bradford"){let n=fi[r],[o,a,i]=A(n.toCone_M,e),[s,l,c]=A(n.toCone_M,t),u=[[s/o,0,0],[0,l/a,0],[0,0,c/i]],d=A(u,n.toCone_M);return A(n.fromCone_M,d)}Kt({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Kt({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Kt({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Kt({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Q,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Q.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const au=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],iu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var mi=new z({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Q.ACES,toXYZ_M:au,fromXYZ_M:iu,formats:{color:{}}});const wt=2**-16,wr=-.35828683,vt=(Math.log2(65504)+9.72)/17.52;var su=new z({id:"acescc",name:"ACEScc",coords:{r:{range:[wr,vt],name:"Red"},g:{range:[wr,vt],name:"Green"},b:{range:[wr,vt],name:"Blue"}},referred:"scene",base:mi,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-wt)*2:r<vt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(wt)+9.72)/17.52:t<wt?(Math.log2(wt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),So=Object.freeze({__proto__:null,A98RGB:qc,A98RGB_Linear:ui,ACEScc:su,ACEScg:mi,HSL:li,HSV:ci,HWB:Yc,ICTCP:Or,JzCzHz:Nr,Jzazbz:ri,LCH:tt,Lab:j,Lab_D65:Hr,OKLCH:eu,OKLab:zt,P3:Ja,P3_Linear:Xa,ProPhoto:Qc,ProPhoto_Linear:di,REC_2020:qa,REC_2020_Linear:Jt,REC_2100_HLG:ou,REC_2100_PQ:nu,XYZ_ABS_D65:un,XYZ_D50:cn,XYZ_D65:G,sRGB:nt,sRGB_Linear:Za});class w{constructor(...t){let r;t.length===1&&(r=x(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let i=0;i<this.coords.length;i++)this.coords[i]==="NaN"&&(this.coords[i]=NaN);for(let i in this.space.coords)Object.defineProperty(this,i,{get:()=>this.get(i),set:s=>this.set(i,s)})}get spaceId(){return this.space.id}clone(){return new w(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Wl(this,...t);return r.color=new w(r.color),r}static get(t,...r){return t instanceof w?t:new w(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,i=function(...s){let l=r(...s);if(a==="color")l=w.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return w.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>w.get(c)));return l};t in w||(w[t]=i),o&&(w.prototype[t]=function(...s){return i(this,...s)})}static defineFunctions(t){for(let r in t)w.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(w);else for(let r in t)w.defineFunction(r,t[r])}}w.defineFunctions({get:q,getAll:ct,set:pe,setAll:Ga,to:W,equals:Gl,inGamut:Xe,toGamut:ge,distance:Ka,toString:Ot});Object.assign(w,{util:Pl,hooks:me,WHITES:Q,Space:b,spaces:b.registry,parse:Wa,defaults:oe});for(let e of Object.keys(So))b.register(So[e]);for(let e in b.registry)zr(e,b.registry[e]);me.add("colorspace-init-end",e=>{var t;zr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{zr(r,e)})});function zr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(w.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,i)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:s}=b.resolveCoord([t,a]);if(s>=0)return o[s]}return Reflect.get(o,a,i)},set:(o,a,i,s)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=i,this.setAll(e,o),!0}return Reflect.set(o,a,i,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}w.extend(It);w.extend({deltaE:Ge});Object.assign(w,{deltaEMethods:It});w.extend(Uc);w.extend({contrast:hc});w.extend(pc);w.extend(Xl);w.extend(Vc);w.extend(Mt);function pi(e){return he(e,(t,r)=>r instanceof w?K(r.toString({format:"hex"})):pi(r))}const lu="dodgerblue";function Ir(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function vr({background:e,foreground:t}){return{background:e??new w(Ir(t)),foreground:t??new w(Ir(e))}}var Dt;(function(e){e.Dark="dark",e.Light="light"})(Dt||(Dt={}));function cu(e){return e==="black"?"white":"black"}const uu={black:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")},white:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")}},du={black:{backgroundFaint1:new w("#666"),backgroundFaint2:new w("#444")},white:{backgroundFaint1:new w("#ccc"),backgroundFaint2:new w("#fafafa")}};function To({themeColor:e=lu,themeStyle:t=Dt.Light}={}){const r=new w(e),n=new w(t===Dt.Dark?"black":"white"),o=Ir(n),a=new w(o),i={nav:{hover:vr({background:r.clone().set({"hsl.l":93})}),active:vr({background:r.clone().set({"hsl.l":90})}),selected:vr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...du[cu(o)],foreground:a,...uu[o]}};return pi(i)}const jt=Kr()("element-book-change-route"),_o="vira-",{defineElement:je,defineElementNoInputs:Ru}=_a({assertInputs:e=>{if(!e.tagName.startsWith(_o))throw new Error(`Tag name should start with '${_o}' but got '${e.tagName}'`)}}),gi=E`
    pointer-events: none;
    opacity: 0.3;
`,fe=Te({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ut=Te({"vira-form-input-border-radius":"8px"}),Ft=Te({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":E`calc(${Ut["vira-form-input-border-radius"].value} + 4px)`});function bi({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=K(Qi(n+r+t));return E`
        ${K(e)}::after {
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
    `}const fu=E`
    padding: 0;
    margin: 0;
`,ke=E`
    ${fu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Dr=E`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,R=je()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>E`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var jr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(jr||(jr={}));je()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===jr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Dr};
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
            ${gi};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${ke};
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
            border-radius: ${Ut["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${fe["vira-interaction-animation-duration"].value},
                background-color
                    ${fe["vira-interaction-animation-duration"].value},
                border-color ${fe["vira-interaction-animation-duration"].value};
        }

        ${bi({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${R} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?m`
                  <${R.assign({icon:e.icon})}></${R}>
              `:"",r=e.text?m`
                  <span class="text-template">${e.text}</span>
              `:"";return m`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Ur;(function(e){e.Header="header"})(Ur||(Ur={}));je()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ke};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${fe["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:le()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?E`
                  height: ${e.contentHeight}px;
              `:E`
                  height: 0;
              `;return m`
            <button
                class="header-wrapper"
                ${P("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Ur.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Ta(({contentRect:i})=>{t({contentHeight:i.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const v=Te({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function ce({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const hu=ce({name:"CloseX24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),mu=ce({name:"Element16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ce({name:"Element24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const pu=ce({name:"Loader24Icon",svgTemplate:m`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),gu=E`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${fe["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,wi=ce({name:"LoaderAnimated24Icon",svgTemplate:m`
        <style>
            ${gu}
        </style>
        ${pu.svgTemplate}
    `}),bu=ce({name:"Options24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${v["vira-icon-stroke-color"].value}"
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),wu=ce({name:"StatusFailure24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ce({name:"StatusInProgress24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});ce({name:"StatusSuccess24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var Vt;(function(e){e.Loading="loading",e.Error="error"})(Vt||(Vt={}));je()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:le(),imageError:le()},styles:({hostClasses:e})=>E`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:o}){const a=e.imageUrl,i=t.erroredUrls[a]?m`
                  <slot class="status-wrapper" name=${Vt.Error}>
                      <${R.assign({icon:wu})} class="error"></${R}>
                  </slot>
              `:t.loadedUrls[a]?void 0:m`
                    <slot class="status-wrapper" name=${Vt.Loading}>
                        <${R.assign({icon:wi})}></${R}>
                    </slot>
                `;return m`
            ${re(!!i,i)}
            <img
                class=${ia({hidden:!!i})}
                ${P("load",async()=>{e._debugLoadDelay&&await Er(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${P("error",async s=>{e._debugLoadDelay&&await Er(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[a]:!0}}),n(new o.imageError(s.error))})}
                src=${a}
            />
        `}});function Fr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Fr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function vi({value:e,allowed:t,blocked:r}){const n=t?Fr({input:e,matcher:t}):!0,o=r?Fr({input:e,matcher:r}):!1;return n&&!o}function yi(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(vi({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function vu({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=We(r,HTMLInputElement),i=r.data,s=t;let l=a.value??"";if(i)if(i.length===1)vi({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(i));else{const{filtered:c,blocked:u}=yi({value:i,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),s!==l&&o(l)}const St=je()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:le(),inputBlocked:le()},styles:({hostClasses:e,cssVars:t})=>E`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ft["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${gi};
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
                ${ke};
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
                ${Dr};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${ke};
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
                border-radius: ${Ut["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${fe["vira-interaction-animation-duration"].value};
            }

            label {
                ${ke};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Ut["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${bi({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ke};
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
                ${Dr};
            }

            .close-x-button {
                ${ke};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${fe["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=yi({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?m`
                  <${R.assign({icon:e.icon})} class="left-side-icon"></${R}>
              `:"",s=e.fitText?E`
                  width: ${r.forcedInputWidth}px;
              `:"";return m`
            <label>
                ${i}
                ${re(!!e.fitText,m`
                        <span
                            class="size-span"
                            ${Ta(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${P("input",l=>{vu({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${re(!!(e.showClearButton&&e.value),m`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${P("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${R.assign({icon:hu})}></${R}>
                        </button>
                    `)}
                ${re(!!e.suffix,m`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});je()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>E`
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
    `,events:{routeChange:le()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(i){e.route&&Ha(i)&&(i.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return m`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return m`
                <a href=${i} rel="noopener noreferrer" ${P("click",n)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:X,defineElementNoInputs:Pu}=_a(),V=X()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>E`
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
                ${P("click",a=>{(!e.router||Ha(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new jt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function yu(e,t){return e.entry.entryType===B.Root?!1:!!(e.entry.entryType===B.Page||ue(t,e.fullUrlBreadcrumbs.slice(0,-1))||ue(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ie=X()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${k["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${k["element-book-nav-hover-background-color"].value};
            color: ${k["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${k["element-book-nav-active-background-color"].value};
            color: ${k["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${V.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${k["element-book-nav-selected-background-color"].value};
            color: ${k["element-book-nav-selected-foreground-color"].value};
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

        ${R} {
            display: inline-flex;
            color: ${k["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!yu(r,e.selectedPath))return;const n=E`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return m`
                <li style=${n}>
                    <${V.assign({router:e.router,route:{paths:[O.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ia({"title-row":!0,selected:e.selectedPath?ue(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${re(Be(r,B.ElementExample),m`
                                    <${R.assign({icon:mu})}></${R}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${V}>
                </li>
            `});return m`
            <${V.assign({route:Oe,router:e.router})}>
                <slot name=${J.NavHeader}>Book</slot>
            </${V}>
            <ul>
                ${t}
            </ul>
        `}});async function $u(e){await kr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await is(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const we=X()({tagName:"book-error",styles:E`
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
    `,renderCallback({inputs:e}){return(Y(e.message,"array")?e.message:[e.message]).map(r=>m`
                <p>${r}</p>
            `)}}),ot=X()({tagName:"book-page-controls",events:{controlValueChange:le()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
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

        ${St} {
            height: 24px;
            max-width: 128px;
        }

        ${R}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===_.Hidden)return"";const i=Eu(e.currentValues[n],o,s=>{const l=Y(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return m`
                    <div class="control-wrapper">
                        ${re(a===0,m`
                                <${R.assign({icon:bu})}
                                    class="options-icon"
                                ></${R}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${i}
                        </label>
                    </div>
                `}):""}});function Eu(e,t,r){return _e(t,_.Hidden)?"":_e(t,_.Checkbox)?m`
            <input
                type="checkbox"
                .value=${e}
                ${P("input",n=>{const o=We(n,HTMLInputElement);r(o.checked)})}
            />
        `:_e(t,_.Color)?m`
            <input
                type="color"
                .value=${e}
                ${P("input",n=>{const o=We(n,HTMLInputElement);r(o.value)})}
            />
        `:_e(t,_.Text)?m`
            <${St.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${P(St.events.valueChange,n=>{r(n.detail)})}
            ></${St}>
        `:_e(t,_.Number)?m`
            <input
                type="number"
                .value=${e}
                ${P("input",n=>{const o=We(n,HTMLInputElement);r(o.value)})}
            />
        `:_e(t,_.Dropdown)?m`
            <select
                .value=${e}
                ${P("input",n=>{const o=We(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>m`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:m`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Lo=X()({tagName:"book-breadcrumbs",styles:E`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,i=o.slice(0,n+1),s=a?"":m`
                      <span class="spacer">&gt;</span>
                  `;return m`
                <${V.assign({route:{hash:void 0,search:void 0,paths:[O.Book,...i]},router:e.router})}>
                    ${r}
                </${V}>
                ${s}
            `}):m`
                &nbsp;
            `}}),yr=X()({tagName:"book-breadcrumbs-bar",styles:E`
        :host {
            border-bottom: 1px solid
                ${k["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${k["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return m`
            ${re(!!e.currentSearch,m`
                    &nbsp;
                `,m`
                    <${Lo.assign({currentRoute:e.currentRoute,router:e.router})}></${Lo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${P("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Er(200),n.value===o&&(n.value?t(new jt({paths:[O.Search,encodeURIComponent(n.value)]})):t(new jt(Oe)))})}
            />
        `}}),Ao=X()({tagName:"book-entry-description",styles:E`
        :host {
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${k["element-book-page-foreground-color"].value};
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
            `)}}),Ro=X()({tagName:"book-page-wrapper",styles:E`
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

        ${V} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?m`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:m`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[O.Book,...e.pageNode.fullUrlBreadcrumbs],n=Uo(e.pageNode.entry.errors);return n&&console.error(n),m`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${V.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${V}>
                    ${n?m`
                              <${we.assign({message:n.message})}></${we}>
                          `:m`
                              <${Ao.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Ao}>
                              <${ot.assign({config:e.pageNode.entry.controls,currentValues:an(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ot}>
                          `}
                </div>
            </div>
        `}}),yt=X()({tagName:"book-element-example-controls",styles:E`
        :host {
            display: flex;
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[O.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return m`
            <${V.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${V}>
        `}}),Po=Symbol("unset-internal-state"),Bo=X()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Po},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Uo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Po&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return m`
                ${re(!!t.elementExampleNode.entry.styles,m`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),m`
                <${we.assign({message:`${t.elementExampleNode.entry.title} failed: ${at(n)}`})}></${we}>
            `}},options:{allowPolymorphicState:!0}}),Ho=X()({tagName:"book-element-example-wrapper",styles:E`
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

        ${yt} {
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${yt} {
            color: ${k["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return m`
            <div class="individual-example-wrapper">
                <${yt.assign(Yi(e,["currentPageControls"]))}></${yt}>
                <${Bo.assign(e)}></${Bo}>
            </div>
        `}});function $i(e,t,r,n){const o=Lr(r,n),a=[];if(o){const i=$i(e,t,o,n);i&&a.push(i)}if(Be(r,B.Page)&&!e.includes(r)){const i=an(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:i,breadcrumbs:he(i,()=>r.fullUrlBreadcrumbs)})}return a.reduce((i,s)=>({config:{...i.config,...s.config},current:{...i.current,...s.current},breadcrumbs:{...i.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function ku({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[m`
                No results
            `];const i=kn(e,1)?$i(e,o,e[0],a):void 0,s=i&&Object.values(i.config).length&&kn(e,1)?m`
                  <${ot.assign({config:i.config,currentValues:i.current,fullUrlBreadcrumbs:i.breadcrumbs})}></${ot}>
              `:"",l=ys(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Be(c,B.Page))return m`
                    <${Ro.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Ro}>
                `;if(Be(c,B.ElementExample)){const d=an(o,c.fullUrlBreadcrumbs.slice(0,-1));return m`
                    <${Ho.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Ho}>
                `}else return Be(c,B.Root)?"":m`
                    <${we.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${we}>
                `});return[s,l].flat()}const Re=X()({tagName:"book-entry-display",styles:E`
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

        ${yr} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${fe["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:le()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Ar(e.currentRoute.paths),i=ku({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return m`
            <${yr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${yr}>

            ${re(e.showLoading,m`
                    <div
                        ${Fn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${R.assign({icon:wi})}></${R}>
                    </div>
                    ${re(!!n.lastElement,m`
                            ${n.lastElement}
                            <slot name=${J.Footer}></slot>
                        `)}
                `,m`
                    <div
                        ${Fn(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${i}
                    </div>
                    <slot name=${J.Footer}></slot>
                `)}
        `}});function xu(e,t,r){const n=No(e,t);if(n.length)return n;r(Oe);const o=No(e,Oe.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function No(e,t){return e.filter(r=>os({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const $t=Ma()({tagName:"element-book-app",events:{pathUpdate:le()},stateInitStatic:{currentRoute:Oe,router:void 0,loading:!0,colors:{config:void 0,theme:To(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:E`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${k["element-book-page-background-color"].value};
            color: ${k["element-book-page-foreground-color"].value};
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

        ${Re} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ie} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Oo(e,Ar(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,h,p,g,y;t._debug&&console.info("rendering element-book app");function i($){return{...e.currentRoute,...$}}function s($){const C=i($);return!ue(e.currentRoute,C)}function l($){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,$].filter(ve).join(" - "))}function c($){if(!s($))return;const C=i($);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!ue(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!ue(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const M=_l(t.internalRouterConfig.basePath);n({router:M}),M.addRouteListener(!0,H=>{n({currentRoute:H})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const $={themeColor:t.themeColor};if(!ue($,(f=e.colors)==null?void 0:f.config)){const M=To($);n({colors:{config:$,theme:M}}),Rl(r,M)}const C=t._debug??!1,T=fl({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Pa(T.tree,{children:(p=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:p.children,controls:t.globalValues})}}));const S=Ar(e.currentRoute.paths),te=(S?vl({flattenedNodes:T.flattenedNodes,searchQuery:S}):void 0)??xu(T.flattenedNodes,e.currentRoute.paths,c);l((g=te[0])==null?void 0:g.entry.title);const I=(y=e.treeBasedControls)==null?void 0:y.controls;return I?(t._debug&&console.info({currentControls:I}),m`
                <div
                    class="root"
                    ${P(jt,async M=>{const H=M.detail;if(!s(H))return;if(n({loading:!0}),c(H),!(r.shadowRoot.querySelector(ie.tagName)instanceof ie))throw new Error(`Failed to find child '${ie.tagName}'`);Oo(r,S,e.currentRoute)})}
                    ${P(ot.events.controlValueChange,M=>{if(!e.treeBasedControls)return;const H=ml(I,M.detail.fullUrlBreadcrumbs,M.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:H}})})}
                >
                    <${ie.assign({flattenedNodes:T.flattenedNodes,router:e.router,selectedPath:S?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${J.NavHeader}
                            slot=${J.NavHeader}
                        ></slot>
                    </${ie}>
                    <${Re.assign({controls:I,currentNodes:te,currentRoute:e.currentRoute,debug:C,originalTree:T.tree,router:e.router,showLoading:e.loading})}
                        ${P(Re.events.loadingRender,async M=>{await kr();const H=r.shadowRoot.querySelector(Re.tagName);H?H.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Re.tagName}' for scrolling.`),await kr(),n({loading:!M.detail})})}
                    >
                        <slot
                            name=${J.Footer}
                            slot=${J.Footer}
                        ></slot>
                    </${Re}>
                </div>
            `):m`
                    <${we.assign({message:"Failed to generate page controls."})}></${we}>
                `}catch($){return console.error($),m`
                <p class="error">${at($)}</p>
            `}}});async function Oo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ie.tagName);if(!(n instanceof ie))throw new Error(`Failed to find child '${ie.tagName}'`);await $u(n)}const fn=as()({title:"Parent Page 1",parent:void 0,controls:{"Parent Control":{controlType:_.Color,initValue:"#33ccff"},"Hidden control":{controlType:_.Hidden,initValue:new RegExp("this can be anything")}}}),Vr=ze({title:"Parent Page 2",parent:void 0}),zo=ze({title:"Sub Page 1",parent:Vr});function Io(e,t){return ze({title:`test ${e}`,parent:t,elementExamplesCallback({defineExample:n}){Array(20).fill(0).forEach((o,a)=>{n({title:`example ${e} ${a}`,renderCallback(){return"element example here"}})})}})}const Do=ze({title:"duplicate error page",parent:fn,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:e}){e({title:"example 1",renderCallback(){return"hi"}}),e({title:"example 2",renderCallback(){return"hi"}})}}),Cu=ze({title:"test 3",controls:{thing:{initValue:"there",controlType:_.Text},thing2:{initValue:!1,controlType:_.Checkbox},thing3:{initValue:"hello",controlType:_.Dropdown,options:["hello","hi","yo"]}},parent:fn,elementExamplesCallback({defineExample:e}){e({title:"example 3 1",renderCallback(){return"hi"}}),e({title:"example 3 2",styles:E`
                .color-control {
                    width: 20px;
                    height: 20px;);
                }
            `,renderCallback({controls:t}){const r=E`
                    background-color: ${K(t["Parent Control"])};
                `;return m`
                    hello ${t.thing}, ${t.thing2}
                    <div style=${r} class="color-control"></div>
                    selected: ${t.thing3} ${t["Hidden control"]}
                    <br />
                    global: ${t.testGlobalControl}
                `}}),e({title:"example with error",renderCallback(){return"broken"}}),e({title:"example with error",renderCallback(){return"broken"}})}}),Ei=[fn,Io(0,Vr),zo,...Array(100).fill(0).map((e,t)=>Io(t+1,zo)),Do,Do,Cu,Vr];console.info({entries:Ei});qt({tagName:"vir-app",styles:E`
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
    `,stateInitStatic:{themeColor:void 0,paths:["book"]},renderCallback:({state:e,updateState:t})=>m`
            <label>
                Theme color
                <input
                    ${P("input",r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("input element not found for input event");t({themeColor:n.value})})}
                    type="color"
                />
            </label>
            <${$t.assign({entries:Ei,themeColor:e.themeColor,internalRouterConfig:{useInternalRouter:!0,basePath:"element-book"},_debug:!0,globalValues:{testGlobalControl:"it worked!"}})}
                ${P($t.events.pathUpdate,r=>{t({paths:r.detail})})}
            >
                <h1 slot=${J.NavHeader}>My Title</h1>
                <footer slot=${J.Footer}>Example Footer</footer>
            </${$t}>
        `});
