var xs=Object.defineProperty;var ks=(e,t,r)=>t in e?xs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var rr=(e,t,r)=>(ks(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Cs(e,t){return e.includes(t)}function we(e){return!!e}function Ms(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ts={capitalizeFirstLetter:!1};function Ss(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function _s(e,t){return t.capitalizeFirstLetter?Ss(e):e}function Ls(e,t=Ts){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return _s(n,t)}var Ne;(function(e){e.Upper="upper",e.Lower="lower"})(Ne||(Ne={}));function As(e){return e.toLowerCase()!==e.toUpperCase()}function gn(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!As(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Ne.Upper&&o!==o.toUpperCase())return!1;if(t===Ne.Lower&&o!==o.toLowerCase())return!1}return!0}function Rs(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0&&a[o-1]||"",i=o<a.length-1&&a[o+1]||"",l=gn(s,Ne.Lower,{blockNoCaseCharacters:!0})||gn(i,Ne.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Ps(e,t){return e.split(t)}const Bs=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function U(e,t){return e?Bs.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Oo(e,t){return e&&t.every(r=>U(e,r))}function zo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>it(r).trim()).join(`
`))}function it(e){return e?e instanceof Error?e.message:U(e,"message")?String(e.message):String(e):""}function Do(e){return e instanceof Error?e:new Error(it(e))}function yr(e){return Array.isArray(e)?"array":typeof e}function Y(e,t){return yr(e)===t}function ne(e){return!!e&&typeof e=="object"}function F(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Io(e,t,r=!1,n={}){const o=F(e),a=new Set(F(t));if(!r){const s=o.filter(i=>!a.has(i));if(s.length)throw new Error(`Test object has extra keys: ${s.join(", ")}`)}a.forEach(s=>{if(!U(e,s))throw new Error(`test object does not have key "${String(s)}" from expected shape.`);function i(u){throw new Error(`test object value at key "${String(s)}" did not match expected shape: ${u}`)}const l=e[s],c=t[s];n[s]||jo(l,c,i,r,n[s]??{})})}function jo(e,t,r,n,o){var i;const a=typeof e,s=typeof t;a!==s&&r(`type "${a}" did not match expected type "${s}"`);try{U(t,"constructor")&&(!U(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(i=e==null?void 0:e.constructor)==null?void 0:i.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{jo(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${it(f)}`)}}).filter(we).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):ne(t)&&Io(e,t,n,o)}function bn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const vn="Failed to compare objects using JSON.stringify";function yn(e,t,r){return bn({source:e,errorHandler(n){if(r)return"";throw n}})===bn({source:t,errorHandler(n){if(r)return"";throw n}})}function ue(e,t,r={}){try{return e===t?!0:ne(e)&&ne(t)?yn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ue(e[o],t[o])):!1:yn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Do(n);throw o.message.startsWith(vn)||(o.message=`${vn}: ${o.message}`),o}}function Hs(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Ns(e){return F(e).filter(t=>isNaN(Number(t)))}function Os(e){return Ns(e).map(r=>e[r])}function zs(e,t){return Os(t).includes(e)}function Ds(e,t){return F(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Is(e,t){return Ds(e,r=>!t.includes(r))}function me(e,t){let r=!1;const n=F(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(F(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function wn(e,t){try{return Uo(e,t),!0}catch{return!1}}function Uo(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function jr(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${jr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function wr(e){const t=jr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const js=globalThis.crypto;function Us(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return js.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Fs({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Vs(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(we);return t.length?`?${t.join("&")}`:""}function Ys(e){return Fs({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=Ps(n,"="),s=a.join("");if(!(!s&&!o))return[o,s]}).filter(we)}function Ws(e,t){const r=Y(e,"string")?new URL(e):e,n=Ys(r.search),o=Object.fromEntries(n);return t&&Io(o,t),o}const qs="px";function Gs(e){return Xs({value:e,suffix:qs})}function Xs({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Zs(e,t){return U(e,"entryType")&&e.entryType===t}var B;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(B||(B={}));function Le(e,t){return e.controlType===t}var _;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(_||(_={}));const Fo=Symbol("any-type"),Js={[_.Checkbox]:!1,[_.Color]:"",[_.Dropdown]:"",[_.Hidden]:Fo,[_.Number]:0,[_.Text]:""};function Ks(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=Js[o.controlType];a!==Fo&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Ur(e,t){const r=Lt(e.title);return e.parent?[...Ur(e.parent,!1),Lt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Lt(e){return Ms(e).toLowerCase().replaceAll(/\s/g,"-")}function Qs({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function ei(){return e=>ze(e)}function ze(e){const t={...e,entryType:B.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:B.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(we)};r.add(n.title),t.elementExamples[Lt(o.title)]=o}}),t}var J;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(J||(J={}));async function $r(e=1){const t=jr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function ti(e){return ri(e,1)}async function ri(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{Uo(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=globalThis,Fr=kt.ShadowRoot&&(kt.ShadyCSS===void 0||kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vr=Symbol(),$n=new WeakMap;let Vo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Vr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Fr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=$n.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&$n.set(r,t))}return t}toString(){return this.cssText}};const K=e=>new Vo(typeof e=="string"?e:e+"",void 0,Vr),Ct=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new Vo(r,e,Vr)},ni=(e,t)=>{if(Fr)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=kt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},En=Fr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return K(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:oi,defineProperty:ai,getOwnPropertyDescriptor:si,getOwnPropertyNames:ii,getOwnPropertySymbols:li,getPrototypeOf:ci}=Object,de=globalThis,xn=de.trustedTypes,ui=xn?xn.emptyScript:"",nr=de.reactiveElementPolyfillSupport,Ge=(e,t)=>e,At={toAttribute(e,t){switch(t){case Boolean:e=e?ui:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Yr=(e,t)=>!oi(e,t),kn={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:Yr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),de.litPropertyMetadata??(de.litPropertyMetadata=new WeakMap);let Be=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=kn){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&ai(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:a}=si(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const i=o==null?void 0:o.call(this);a.call(this,s),this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??kn}static _$Ei(){if(this.hasOwnProperty(Ge("elementProperties")))return;const t=ci(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ge("properties"))){const r=this.properties,n=[...ii(r),...li(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(En(o))}else t!==void 0&&r.push(En(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ni(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r){var a;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const s=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:At).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var a;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:At;this._$Em=o,this[o]=i.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n,o=!1,a){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Yr)(o?a:this[t],r))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,s]of o)s.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.C(a,this[a],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(r)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(t){}firstUpdated(t){}};Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[Ge("elementProperties")]=new Map,Be[Ge("finalized")]=new Map,nr==null||nr({ReactiveElement:Be}),(de.reactiveElementVersions??(de.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=globalThis,Rt=Xe.trustedTypes,Cn=Rt?Rt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Wr="$lit$",ie=`lit$${(Math.random()+"").slice(9)}$`,qr="?"+ie,di=`<${qr}>`,Me=document,Ke=()=>Me.createComment(""),Qe=e=>e===null||typeof e!="object"&&typeof e!="function",Yo=Array.isArray,Wo=e=>Yo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",or=`[ 	
\f\r]`,Ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mn=/-->/g,Tn=/>/g,$e=RegExp(`>|${or}(?:([^\\s"'>=/]+)(${or}*=${or}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sn=/'/g,_n=/"/g,qo=/^(?:script|style|textarea|title)$/i,fi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),hi=fi(1),ee=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Ln=new WeakMap,Ce=Me.createTreeWalker(Me,129);function Go(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cn!==void 0?Cn.createHTML(t):t}const Xo=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=Ve;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Ve?u[1]==="!--"?s=Mn:u[1]!==void 0?s=Tn:u[2]!==void 0?(qo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=$e):u[3]!==void 0&&(s=$e):s===$e?u[0]===">"?(s=o??Ve,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?$e:u[3]==='"'?_n:Sn):s===_n||s===Sn?s=$e:s===Mn||s===Tn?s=Ve:(s=$e,o=void 0);const h=s===$e&&e[i+1].startsWith("/>")?" ":"";a+=s===Ve?l+di:d>=0?(n.push(c),l.slice(0,d)+Wr+l.slice(d)+ie+h):l+ie+(d===-2?i:h)}return[Go(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class et{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=Xo(t,r);if(this.el=et.createElement(c,n),Ce.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Ce.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Wr)){const f=u[s++],h=o.getAttribute(d).split(ie),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:p[2],strings:h,ctor:p[1]==="."?Jo:p[1]==="?"?Ko:p[1]==="@"?Qo:lt}),o.removeAttribute(d)}else d.startsWith(ie)&&(l.push({type:6,index:a}),o.removeAttribute(d));if(qo.test(o.tagName)){const d=o.textContent.split(ie),f=d.length-1;if(f>0){o.textContent=Rt?Rt.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],Ke()),Ce.nextNode(),l.push({type:2,index:++a});o.append(d[f],Ke())}}}else if(o.nodeType===8)if(o.data===qr)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(ie,d+1))!==-1;)l.push({type:7,index:a}),d+=ie.length-1}a++}}static createElement(t,r){const n=Me.createElement("template");return n.innerHTML=t,n}}function Te(e,t,r=e,n){var s,i;if(t===ee)return t;let o=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const a=Qe(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((i=o==null?void 0:o._$AO)==null||i.call(o,!1),a===void 0?o=void 0:(o=new a(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Te(e,o._$AS(e,t.values),o,n)),t}class Zo{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Me).importNode(r,!0);Ce.currentNode=o;let a=Ce.nextNode(),s=0,i=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new De(a,a.nextSibling,this,t):l.type===1?c=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(c=new ea(a,this,t)),this._$AV.push(c),l=n[++i]}s!==(l==null?void 0:l.index)&&(a=Ce.nextNode(),s++)}return Ce.currentNode=Me,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class De{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Te(this,t,r),Qe(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==ee&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Wo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&Qe(this._$AH)?this._$AA.nextSibling.data=t:this.$(Me.createTextNode(t)),this._$AH=t}g(t){var a;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=et.createElement(Go(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===o)this._$AH.p(r);else{const s=new Zo(o,this),i=s.u(this.options);s.p(r),this.$(i),this._$AH=s}}_$AC(t){let r=Ln.get(t.strings);return r===void 0&&Ln.set(t.strings,r=new et(t)),r}T(t){Yo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new De(this.k(Ke()),this.k(Ke()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,a){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=Te(this,t,r,0),s=!Qe(t)||t!==this._$AH&&t!==ee,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Te(this,i[n+l],r,l),c===ee&&(c=this._$AH[l]),s||(s=!Qe(c)||c!==this._$AH[l]),c===L?t=L:t!==L&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.O(t)}O(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Jo extends lt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===L?void 0:t}}class Ko extends lt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class Qo extends lt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){if((t=Te(this,t,r,0)??L)===ee)return;const n=this._$AH,o=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,a=t!==L&&(n===L||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class ea{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Te(this,t)}}const mi={j:Wr,P:ie,A:qr,C:1,M:Xo,L:Zo,R:Wo,V:Te,D:De,I:lt,H:Ko,N:Qo,U:Jo,B:ea},ar=Xe.litHtmlPolyfillSupport;ar==null||ar(et,De),(Xe.litHtmlVersions??(Xe.litHtmlVersions=[])).push("3.1.0");const pi=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const a=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new De(t.insertBefore(Ke(),a),a,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ze=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=pi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ee}};var No;Ze._$litElement$=!0,Ze.finalized=!0,(No=globalThis.litElementHydrateSupport)==null||No.call(globalThis,{LitElement:Ze});const sr=globalThis.litElementPolyfillSupport;sr==null||sr({LitElement:Ze});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ie=e=>(...t)=>({_$litDirective$:e,values:t});class Se{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:gi}=mi,An=()=>document.createComment(""),Ye=(e,t,r)=>{var a;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=n.insertBefore(An(),o),i=n.insertBefore(An(),o);r=new gi(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(a=r._$AQ)==null||a.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==o||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;n.insertBefore(c,o),c=u}}}return r},Ee=(e,t,r=e)=>(e._$AI(t,r),e),bi={},vi=(e,t=bi)=>e._$AH=t,yi=e=>e._$AH,ir=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ta=Ie(class extends Se{constructor(e){var t;if(super(e),e.type!==Wt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!((n=this.st)!=null&&n.has(a))&&this.it.add(a);return this.render(t)}const r=e.element.classList;for(const a of this.it)a in t||(r.remove(a),this.it.delete(a));for(const a in t){const s=!!t[a];s===this.it.has(a)||(o=this.st)!=null&&o.has(a)||(s?(r.add(a),this.it.add(a)):(r.remove(a),this.it.delete(a)))}return ee}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},wi=Ie(class extends Se{constructor(e){if(super(e),e.type!==Wt.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.ht(e,t,r).values}update(e,[t,r,n]){const o=yi(e),{values:a,keys:s}=this.ht(t,r,n);if(!Array.isArray(o))return this.dt=s,a;const i=this.dt??(this.dt=[]),l=[];let c,u,d=0,f=o.length-1,h=0,p=a.length-1;for(;d<=f&&h<=p;)if(o[d]===null)d++;else if(o[f]===null)f--;else if(i[d]===s[h])l[h]=Ee(o[d],a[h]),d++,h++;else if(i[f]===s[p])l[p]=Ee(o[f],a[p]),f--,p--;else if(i[d]===s[p])l[p]=Ee(o[d],a[p]),Ye(e,l[p+1],o[d]),d++,p--;else if(i[f]===s[h])l[h]=Ee(o[f],a[h]),Ye(e,o[d],o[f]),f--,h++;else if(c===void 0&&(c=Rn(s,h,p),u=Rn(i,d,f)),c.has(i[d]))if(c.has(i[f])){const b=u.get(s[h]),E=b!==void 0?o[b]:null;if(E===null){const $=Ye(e,o[d]);Ee($,a[h]),l[h]=$}else l[h]=Ee(E,a[h]),Ye(e,o[d],E),o[b]=null;h++}else ir(o[f]),f--;else ir(o[d]),d++;for(;h<=p;){const b=Ye(e,l[p+1]);Ee(b,a[h]),l[h++]=b}for(;d<=f;){const b=o[d++];b!==null&&ir(b)}return this.dt=s,vi(e,l),ee}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Er extends Se{constructor(t){if(super(t),this.et=L,t.type!==Wt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===L||t==null)return this.vt=void 0,this.et=t;if(t===ee)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Er.directiveName="unsafeHTML",Er.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pn extends Er{}Pn.directiveName="unsafeSVG",Pn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $i(e,t,r){return e?t(e):r==null?void 0:r(e)}class ra extends Ze{}function _e(e){if(ne(e))return me(e,(r,n)=>{if(!Y(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Rs(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?K(r):r.startsWith("-")?Ct`-${K(r)}`:Ct`--${K(r)}`;return{name:s,value:Ct`var(${s}, ${K(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${_e.name}' function.`)}function Ei({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:Yr},ki=(e=xi,t,r)=>{const{kind:n,metadata:o}=r;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(i){const l=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,l,e)},init(i){return i!==void 0&&this.C(s,void 0,e),i}}}if(n==="setter"){const{name:s}=r;return function(i){const l=this[s];t.call(this,i),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+n)};function na(e){return(t,r)=>typeof r=="object"?ki(e,t,r):((n,o,a)=>{const s=o.hasOwnProperty(a);return o.constructor.createProperty(a,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(o,a):void 0})(e,t,r)}function Ci(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function xr(e){return U(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function Gr(e){return U(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function oa(e){return e.map(t=>xr(t)?t.definition:t).filter(t=>Gr(t))}const aa=new WeakMap;function Mi(e,t){var o;const r=oa(t);return(o=sa(aa,[e,...r]).value)==null?void 0:o.template}function Ti(e,t,r){const n=oa(t);return la(aa,[e,...n],r)}function sa(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=ia(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?sa(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function ia(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function la(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=ia(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),la(l,t,r,n+1)}const Si=new WeakMap;function ca(e,t,r){const n=Mi(e,t),o=n??r();if(!n){const i=Ti(e,t,o);if(i.result)Si.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=Ci(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function ua(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let b,E=[];if(typeof f=="string"&&(b=r(f,c,p),b)){o[d]=f+b.replacement,s.push(h);const C=b.getExtraValues;E=C?C(p):[],E.length&&C?(o[d]+=" ",E.forEach((S,T)=>{T&&o.push(" ")}),i.push(S=>{const T=S[h],N=C(T);return{index:h,values:N}}),o.push(c)):o[d]+=c}b||o.push(c);const $=e.raw[u];b?(a[d]=a[d]+b.replacement+$,E.length&&E.forEach(()=>{a.push("")})):a.push($)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function _i(...[e,t,r]){if(Gr(r))return{replacement:r.tagName,getExtraValues:void 0}}function Li(e,t){return ua(e,t,_i)}function w(e,...t){const r=ca(e,t,()=>Li(e,t));return Ct(r.strings,...r.values)}const Xr=Symbol("key for ignoring inputs not having been set yet"),Ai={[Xr]:!0,allowPolymorphicState:!1};function da(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ra?!0:da(r)}function fa(e,t){const r=e.instanceState;F(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&F(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Ri(e)}function Ri(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function Bn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Pi extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Zr(){return e=>{var t;return t=class extends Pi{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function le(){return Zr()}function Bi(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=Zr()([e,n].join("-"));return r[n]=o,r},{}):{}}const Hi="_elementVirStateSetup";function Ni(e){return ne(e)?Hi in e:!1}function Oi(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return yr(e)===yr(t)&&r}const ha=Symbol("and"),ma=Symbol("or"),pa=Symbol("exact"),ga=Symbol("enum"),Jr=Symbol("unknown"),ba="__vir__shape__definition__key__do__not__use__in__actual__objects";function va(e){return U(e,ba)}const ya="__vir__shape__specifier__key__do__not__use__in__actual__objects",zi=[ha,ma,pa,ga,Jr];function Di(){return Ii([],Jr)}function qt(e){return ct(e,ma)}function Kr(e){return ct(e,ha)}function Qr(e){return ct(e,pa)}function en(e){return ct(e,ga)}function tn(e){return ct(e,Jr)}function ct(e,t){const r=Gt(e);return!!r&&r.specifierType===t}function Ii(e,t){return{[ya]:!0,specifierType:t,parts:e}}function Mt(e,t){const r=Gt(t);if(r){if(Kr(r))return r.parts.every(n=>Mt(e,n));if(qt(r))return r.parts.some(n=>Mt(e,n));if(Qr(r))return ne(e)?Mt(e,r.parts[0]):e===r.parts[0];if(en(r))return Object.values(r.parts[0]).some(n=>n===e);if(tn(r))return!0}return Oi(e,t)}function Gt(e){if(ne(e)&&U(e,ya)){if(!U(e,"parts")||!Y(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!U(e,"specifierType")||!Cs(zi,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function kr(e,t=!1){return Cr(e)}function Cr(e){const t=Gt(e);if(t){if(qt(t)||Qr(t))return Cr(t.parts[0]);if(Kr(t))return t.parts.reduce((r,n)=>Object.assign(r,Cr(n)),{});if(en(t))return Object.values(t.parts[0])[0];if(tn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return va(e)?kr(e.shape):e instanceof RegExp||Y(e,"array")?e:ne(e)?me(e,(r,n)=>kr(n)):e}function ji(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:kr(e),[ba]:!0}}class Z extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Ui(e,t,r={}){try{return Fi(e,t,r),!0}catch{return!1}}function Fi(e,t,r={}){xe(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function wa(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function xe(e,t,r,n){if(tn(t))return!0;if(va(t))return xe(e,t.shape,r,n);const o=wa(r);if(Gt(e))throw new Z(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Mt(e,t))throw new Z(`Subject does not match shape definition at key ${o}`);if(Y(t,"function"))return Y(e,"function");if(ne(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(qt(t))l=t.parts.some(c=>{try{const u=xe(e,c,r,{...n});return Object.assign(i,u),!0}catch(u){if(u instanceof Z)return!1;throw u}});else if(Kr(t))l=t.parts.every(c=>{try{const u=xe(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof Z)return!1;throw u}});else if(Qr(t)){const c=xe(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(en(t))throw new Z(`Cannot compare an enum specifier to an object at ${o}`);if(Y(t,"array")&&Y(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return xe(c,f,[...r,u],n),!0}catch(h){if(h instanceof Z)return!1;throw h}});return i[u]=d,d});else{const c=Vi({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(i).filter(d=>!i[d]).join(",")}`;throw new Z(u)}return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new Z(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function Vi({keys:e,options:t,shape:r,subject:n}){const o=wa(e),a={};if(ne(r)){const s=new Set(F(n)),i=new Set(F(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new Z(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=qt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new Z(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];xe(c,u,[...e,l],t),a[l]=!0})}else throw new Z(`shape definition at ${o} was not an object.`);return a}const Yi=ji({addListener(){return!1},removeListener(){return!1},value:Di()});function lr(e){return Ui(e,Yi,{allowExtraKeys:!0})}function Wi(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Hn(e,t){const r=e;function n(s){t?Wi(s,e,e.tagName):na()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=Ni(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(p){s[i]=p,r[i]=p}const f=e.observablePropertyListenerMap[i];if(u!==c&&lr(u)&&(f!=null&&f.length)&&u.removeListener(f),lr(c))if(f)c.addListener(f);else{let p=function(){e.requestUpdate()};var h=p;e.observablePropertyListenerMap[i]=p,c.addListener(p)}else lr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function qi(e){return e?me(e,t=>t):{}}function Gi({hostClassNames:e,cssVars:t}){return{hostClasses:me(e,(r,n)=>({name:K(n),selector:K(`:host(.${n})`)})),cssVars:t}}function Xi({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&F(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Zi(e,t){function r(o){F(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Ji=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Xt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Ai,...e.options},n=Bi(e.tagName,e.events),o=qi(e.hostClasses);e.hostClasses&&Bn(e.tagName,e.hostClasses),e.cssVars&&Bn(e.tagName,e.cssVars);const a=e.cssVars?_e(e.cssVars):{},s=typeof e.styles=="function"?e.styles(Gi({hostClassNames:o,cssVars:a})):e.styles||w``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends ra{createRenderParams(){return Zi(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{da(this)&&!this._haveInputsBeenSet&&!r[Xr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Xt.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Xi({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Do(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){fa(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Hn(this,!1),this.instanceState=Hn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};F(u).forEach(f=>{na()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},Ji(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Ls(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function $a(){return e=>Xt({...e,options:{[Xr]:!1,...e.options}})}function Ea(e,t){return tt(e,t),e.element}function Ki(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function tt(e,t){const r=Ki(e),n=r?`: in ${r}`:"";if(e.type!==Wt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Qi(e,t){return t?Nn(e,t):Nn(void 0,e)}const Nn=Ie(class extends Se{constructor(e){super(e),this.element=Ea(e,"assign")}render(e,t){return fa(this.element,t),ee}});function P(e,t){return el(e,t)}const el=Ie(class extends Se{constructor(e){super(e),this.element=Ea(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ee}}),On="onDomCreated",zn=Ie(class extends Se{constructor(e){super(e),tt(e,On)}update(e,[t]){tt(e,On);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),cr="onResize",xa=Ie(class extends Se{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),tt(e,cr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${cr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){tt(e,cr),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function re(e,t,r){return $i(e,()=>t,()=>r)}function ka(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),$a()(r(n))),defineElementNoInputs:n=>(t(n),Xt(r(n)))}}function tl(...[e,t,r]){const n=xr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=Gr(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=xr(c)?c.inputs:void 0;return[o&&u?Qi(u):void 0].filter(we)}}}function rl(e){}function nl(e){return ua(e.strings,e.values,tl,rl)}function m(e,...t){const r=hi(e,...t),n=ca(e,t,()=>nl(r));return{...r,strings:n.strings,values:n.values}}const ol={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},al=Object.keys(ol),sl=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...al,...sl];function We(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const il={[B.ElementExample]:()=>[],[B.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Ks(e.controls,e.title)].filter(we),[B.Root]:()=>[]},Pt="_isBookTreeNode",Ca=new Map;function ll(e){return Ca.get(e)}function cl(e,t){Hs(Ca,e,()=>t)}function He(e,t){return!!(Ma(e)&&e.entry.entryType===t)}function Ma(e){return!!(Oo(e,[Pt,"entry"])&&e[Pt])}function ul(){return{[Pt]:!0,entry:{entryType:B.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function dl({entries:e,debug:t}){const r=ll(e);if(r)return r;const n=ul();e.forEach(s=>rn({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=Ta(n),a={tree:n,flattenedNodes:o};return cl(e,a),t&&console.info("element-book tree:",n),a}function fl(e,t,r){if(!t.parent)return e;const n=Mr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),rn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Mr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Ur(t,!1)}`);return o}function rn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=il[t.entryType](t);t.errors.push(...o);const a=fl(e,t,r),s=Lt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Pt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,Zs(t,B.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>rn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Mr(e,t){const r=Ma(e)?e.fullUrlBreadcrumbs.slice(0,-1):Ur(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Ta(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ta(o));return[e,...r].flat()}function nn(e,t){return on(e,["",...t],void 0)}function on(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],s=a&&on(a,n,r);return{...e.controls,...s}}function hl(e,t,r){const n={...e};return on(n,["",...t],r),n}function Sa(e,t){const r=(t==null?void 0:t.controls)||(He(e,B.Page)?me(e.entry.controls,(o,a)=>a.initValue):{});return{children:me(e.children,(o,a)=>{var s;return Sa(a,(s=t==null?void 0:t.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function ml({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const pl=Us(32);function Tt(e){return e.join(pl)}function _a(e){if(!e.length)return[];const t=Tt(e),r=_a(e.slice(0,-1));return[t,...r]}const gl=["error","errors"];function bl(e){return gl.includes(e)}function vl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Tt(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&bl(t),s=Tt(o.fullUrlBreadcrumbs);if(ml({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=_a(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=Tt(o.fullUrlBreadcrumbs),s=r[a];if(!Y(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var O;(function(e){e.Search="search",e.Book="book"})(O||(O={}));function Tr(e){return e[0]===O.Book?"":e[1]?decodeURIComponent(e[1]):""}const Oe={hash:void 0,paths:[O.Book],search:void 0},yl=0;function La(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==yl)}class Zt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Dn extends Zt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const rt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const wl=globalThis.history.pushState;function In(...e){const t=wl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(rt)),t}const $l=globalThis.history.replaceState;function jn(...e){const t=$l.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(rt)),t}function El(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===In)throw new Dn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===jn)throw new Dn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=In,globalThis.history.replaceState=jn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(rt))})}}function xl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?Ws(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function Aa(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Ra({routeBase:e,windowPath:t}){if(!e)return"";const r=Aa(e);if(Pa({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Ra({routeBase:n,windowPath:t}):""}function Pa({routeBase:e,windowPath:t}){const r=Aa(e);return r?t.startsWith(`/${r}`):!1}class kl extends Zt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Ba(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Un=6;function Fn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Un)throw new kl(`Route sanitization depth has exceed the max of ${Un} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Ba(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class ur extends Zt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Cl(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new ur(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new ur(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new ur(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Ml(e,t,r=!1){const n=Ha(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ha(e,t){var i;const r=Pa({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Vs(e.search):"",o=(i=e.hash)!=null&&i.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(we).join("/")}${n}${a}`}function Tl(e={}){Cl(e),El();const t=e.routeBase?Ra({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Fn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Ba(l,u)))return Ml(u,t,s)},createRoutesUrl(a){return Ha(a,t)},getCurrentRawRoutes(){return xl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Zt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(rt,n),r=!0),a&&Fn(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(rt,n),r=!1),s},sanitizationDepth:0};return o}function Sl(e){return Tl({routeBase:e,routeSanitizer(t){return{paths:_l(t.paths),hash:void 0,search:void 0}}})}function _l(e){const t=e[0];if(zs(t,O)){if(t===O.Book)return[O.Book,...e.slice(1)];if(t===O.Search)return e[1]?[t,e[1]]:[O.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Oe.paths}const x=_e({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Ll={nav:{hover:{background:x["element-book-nav-hover-background-color"],foreground:x["element-book-nav-hover-foreground-color"]},active:{background:x["element-book-nav-active-background-color"],foreground:x["element-book-nav-active-foreground-color"]},selected:{background:x["element-book-nav-selected-background-color"],foreground:x["element-book-nav-selected-foreground-color"]}},accent:{icon:x["element-book-accent-icon-color"]},page:{background:x["element-book-page-background-color"],backgroundFaint1:x["element-book-page-background-faint-level-1-color"],backgroundFaint2:x["element-book-page-background-faint-level-2-color"],foreground:x["element-book-page-foreground-color"],foregroundFaint1:x["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:x["element-book-page-foreground-faint-level-2-color"]}};function Al(e,t){Na(e,t,Ll)}function Sr(e){return U(e,"_$cssResult$")}function Vn(e){return Oo(e,["name","value","default"])&&Y(e.default,"string")&&Sr(e.name)&&Sr(e.value)}function Na(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Sr(o)){if(!Vn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ei({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Vn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Na(e,o,a)}})}function A(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function ut(e){return fe(e)==="string"}function fe(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Bt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Oa(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function za(e){return e[e.length-1]}function Ht(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Da(e,t,r){return(r-e)/(t-e)}function an(e,t,r){return Ht(t[0],t[1],Da(e[0],e[1],r))}function Ia(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Rl=Object.freeze({__proto__:null,interpolate:Ht,interpolateInv:Da,isString:ut,last:za,mapRange:an,multiplyMatrices:A,parseCoordGrammar:Ia,parseFunction:Oa,toPrecision:Bt,type:fe});class Pl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const pe=new Pl;var oe={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Q={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function _r(e){return Array.isArray(e)?e:Q[e]}function Nt(e,t,r,n={}){if(e=_r(e),t=_r(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(pe.run("chromatic-adaptation-start",o),o.M||(o.W1===Q.D65&&o.W2===Q.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Q.D50&&o.W2===Q.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),pe.run("chromatic-adaptation-end",o),o.M)return A(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Bl=75e-6,I=class I{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?I.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=_r(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Hl(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),pe.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Bl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Yn(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Yn(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=I.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=I.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(I.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof I)return t;if(fe(t)==="string"){let o=I.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return I.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=fe(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=I.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=fe(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=I.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};rr(I,"registry",{}),rr(I,"DEFAULT_FORMAT",{type:"functions",name:"color"});let g=I;function Hl(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Yn(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Ia(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=an(i,l,a)),a=Bt(a,o),c&&(a+=c),a})}return e}var q=new g({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class z extends g{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=q),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=A(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Nt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Nt(this.base.white,this.white,r),A(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function ja(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(pe.run("parse-start",r),r.color)return r.color;if(r.parsed=Oa(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of g.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((b,E)=>r.parsed.args[E]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:u}}}let d="";if(c in g.registry){let f=(i=(s=(a=g.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of g.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||za(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([p,b],E)=>{var te;let $=u.coordGrammar[E],C=(te=f[E])==null?void 0:te.type,S=$.find(D=>D==C);if(!S){let D=b.name||p;throw new TypeError(`${C} not allowed for ${D} in ${l}()`)}let T=S.range;C==="<percentage>"&&(T||(T=[0,1]));let N=b.range||b.refRange;return T&&N&&(f[E]=an(T,N,f[E])),S})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of g.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function k(e){if(!e)throw new TypeError("Empty color reference");ut(e)&&(e=ja(e));let t=e.space||e.spaceId;return t instanceof g||(e.space=g.get(t)),e.alpha===void 0&&(e.alpha=1),e}function dt(e,t){return t=g.get(t),t.from(e)}function G(e,t){let{space:r,index:n}=g.resolveCoord(t,e.space);return dt(e,r)[n]}function Ua(e,t,r){return t=g.get(t),e.coords=t.to(e.space,r),e}function ge(e,t,r){if(e=k(e),arguments.length===2&&fe(arguments[1])==="object"){let n=arguments[1];for(let o in n)ge(e,o,n[o])}else{typeof r=="function"&&(r=r(G(e,t)));let{space:n,index:o}=g.resolveCoord(t,e.space),a=dt(e,n);a[o]=r,Ua(e,n,a)}return e}var sn=new g({id:"xyz-d50",name:"XYZ D50",white:"D50",base:q,fromBase:e=>Nt(q.white,"D50",e),toBase:e=>Nt("D50",q.white,e),formats:{color:{}}});const Nl=216/24389,Wn=24/116,mt=24389/27;let dr=Q.D50;var j=new g({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:dr,base:sn,fromBase(e){let r=e.map((n,o)=>n/dr[o]).map(n=>n>Nl?Math.cbrt(n):(mt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Wn?Math.pow(t[0],3):(116*t[0]-16)/mt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/mt,t[2]>Wn?Math.pow(t[2],3):(116*t[2]-16)/mt].map((n,o)=>n*dr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Jt(e){return(e%360+360)%360}function Ol(e,t){if(e==="raw")return t;let[r,n]=t.map(Jt),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var nt=new g({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:j,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Jt(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const qn=25**7,Ot=Math.PI,Gn=180/Ot,Ae=Ot/180;function Lr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=j.from(e),l=nt.from(j,[a,s,i])[1],[c,u,d]=j.from(t),f=nt.from(j,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,b=.5*(1-Math.sqrt(p/(p+qn))),E=(1+b)*s,$=(1+b)*u,C=Math.sqrt(E**2+i**2),S=Math.sqrt($**2+d**2),T=E===0&&i===0?0:Math.atan2(i,E),N=$===0&&d===0?0:Math.atan2(d,$);T<0&&(T+=2*Ot),N<0&&(N+=2*Ot),T*=Gn,N*=Gn;let te=c-a,D=S-C,M=N-T,H=T+N,er=Math.abs(M),Ue;C*S===0?Ue=0:er<=180?Ue=M:M>180?Ue=M-360:M<-180?Ue=M+360:console.log("the unthinkable has happened");let dn=2*Math.sqrt(S*C)*Math.sin(Ue*Ae/2),vs=(a+c)/2,tr=(C+S)/2,fn=Math.pow(tr,7),ae;C*S===0?ae=H:er<=180?ae=H/2:H<360?ae=(H+360)/2:ae=(H-360)/2;let hn=(vs-50)**2,ys=1+.015*hn/Math.sqrt(20+hn),mn=1+.045*tr,Fe=1;Fe-=.17*Math.cos((ae-30)*Ae),Fe+=.24*Math.cos(2*ae*Ae),Fe+=.32*Math.cos((3*ae+6)*Ae),Fe-=.2*Math.cos((4*ae-63)*Ae);let pn=1+.015*tr*Fe,ws=30*Math.exp(-1*((ae-275)/25)**2),$s=2*Math.sqrt(fn/(fn+qn)),Es=-1*Math.sin(2*ws*Ae)*$s,ht=(te/(r*ys))**2;return ht+=(D/(n*mn))**2,ht+=(dn/(o*pn))**2,ht+=Es*(D/(n*mn))*(dn/(o*pn)),Math.sqrt(ht)}const zl=75e-6;function Je(e,t=e.space,{epsilon:r=zl}={}){e=k(e),t=g.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function ot(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function be(e,{method:t=oe.gamut_mapping,space:r=e.space}={}){if(ut(arguments[1])&&(r=arguments[1]),r=g.get(r),Je(e,r,{epsilon:0}))return k(e);let n=W(e,r);if(t!=="clip"&&!Je(e,r)){let o=be(ot(n),{method:"clip",space:r});if(Lr(e,o)>2){let a=g.resolveCoord(t),s=a.space,i=a.id,l=W(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=G(l,i);for(;h-f>d;){let p=ot(l);p=be(p,{space:r,method:"clip"}),Lr(l,p)-2<d?f=G(l,i):h=G(l,i),ge(l,i,(f+h)/2)}n=W(l,r)}else n=o}if(t==="clip"||!Je(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=W(n,e.space)),e.coords=n.coords,e}be.returns="color";function W(e,t,{inGamut:r}={}){e=k(e),t=g.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=be(o)),o}W.returns="color";function zt(e,{precision:t=oe.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=k(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??g.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!Je(e)&&(i=be(ot(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>Bt(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Bt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const Dl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Il=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Kt=new z({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Dl,fromXYZ_M:Il,formats:{color:{}}});const pt=1.09929682680944,Xn=.018053968510807;var Fa=new z({id:"rec2020",name:"REC.2020",base:Kt,toBase(e){return e.map(function(t){return t<Xn*4.5?t/4.5:Math.pow((t+pt-1)/pt,1/.45)})},fromBase(e){return e.map(function(t){return t>=Xn?pt*Math.pow(t,.45)-(pt-1):4.5*t})},formats:{color:{}}});const jl=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Ul=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Va=new z({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:jl,fromXYZ_M:Ul});const Fl=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Vl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Ya=new z({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Fl,fromXYZ_M:Vl,formats:{color:{}}}),Zn={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Jn=Array(3).fill("<percentage> | <number>[0, 255]"),Kn=Array(3).fill("<number>[0, 255]");var at=new z({id:"srgb",name:"sRGB",base:Ya,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Jn},rgb_number:{name:"rgb",commas:!0,coords:Kn,noAlpha:!0},color:{},rgba:{coords:Jn,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Kn},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Zn.black,t.alpha=0):t.coords=Zn[e],t.coords)return t}}}}),Wa=new z({id:"p3",name:"P3",base:Va,fromBase:at.fromBase,toBase:at.toBase,formats:{color:{id:"display-p3"}}});oe.display_space=at;if(typeof CSS<"u"&&CSS.supports)for(let e of[j,Fa,Wa]){let t=e.getMinCoords(),n=zt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){oe.display_space=e;break}}function Yl(e,{space:t=oe.display_space,...r}={}){let n=zt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!oe.display_space)n=new String(n),n.color=e;else{let o=W(e,t);n=new String(zt(o,r)),n.color=o}return n}function qa(e,t,r="lab"){r=g.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Wl(e,t){return e=k(e),t=k(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ve(e){return G(e,[q,"y"])}function Ga(e,t){ge(e,[q,"y"],t)}function ql(e){Object.defineProperty(e.prototype,"luminance",{get(){return ve(this)},set(t){Ga(this,t)}})}var Gl=Object.freeze({__proto__:null,getLuminance:ve,register:ql,setLuminance:Ga});function Xl(e,t){e=k(e),t=k(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Zl=.56,Jl=.57,Kl=.62,Ql=.65,Qn=.022,ec=1.414,tc=.1,rc=5e-4,nc=1.14,eo=.027,oc=1.14;function to(e){return e>=Qn?e:e+(Qn-e)**ec}function Re(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function ac(e,t){t=k(t),e=k(e);let r,n,o,a,s,i;t=W(t,"srgb"),[a,s,i]=t.coords;let l=Re(a)*.2126729+Re(s)*.7151522+Re(i)*.072175;e=W(e,"srgb"),[a,s,i]=e.coords;let c=Re(a)*.2126729+Re(s)*.7151522+Re(i)*.072175,u=to(l),d=to(c),f=d>u;return Math.abs(d-u)<rc?n=0:f?(r=d**Zl-u**Jl,n=r*nc):(r=d**Ql-u**Kl,n=r*oc),Math.abs(n)<tc?o=0:n>0?o=n-eo:o=n+eo,o*100}function sc(e,t){e=k(e),t=k(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const ic=5e4;function lc(e,t){e=k(e),t=k(t);let r=Math.max(ve(e),0),n=Math.max(ve(t),0);return n>r&&([r,n]=[n,r]),n===0?ic:(r-n)/n}function cc(e,t){e=k(e),t=k(t);let r=G(e,[j,"l"]),n=G(t,[j,"l"]);return Math.abs(r-n)}const uc=216/24389,ro=24/116,gt=24389/27;let fr=Q.D65;var Ar=new g({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:fr,base:q,fromBase(e){let r=e.map((n,o)=>n/fr[o]).map(n=>n>uc?Math.cbrt(n):(gt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ro?Math.pow(t[0],3):(116*t[0]-16)/gt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/gt,t[2]>ro?Math.pow(t[2],3):(116*t[2]-16)/gt].map((n,o)=>n*fr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const hr=Math.pow(5,.5)*.5+.5;function dc(e,t){e=k(e),t=k(t);let r=G(e,[Ar,"l"]),n=G(t,[Ar,"l"]),o=Math.abs(Math.pow(r,hr)-Math.pow(n,hr)),a=Math.pow(o,1/hr)*Math.SQRT2-40;return a<7.5?0:a}var St=Object.freeze({__proto__:null,contrastAPCA:ac,contrastDeltaPhi:dc,contrastLstar:cc,contrastMichelson:sc,contrastWCAG21:Xl,contrastWeber:lc});function fc(e,t,r={}){ut(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(St).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=k(e),t=k(t);for(let a in St)if("contrast"+n.toLowerCase()===a.toLowerCase())return St[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Xa(e){let[t,r,n]=dt(e,q),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Za(e){let[t,r,n]=dt(e,q),o=t+r+n;return[t/o,r/o]}function hc(e){Object.defineProperty(e.prototype,"uv",{get(){return Xa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Za(this)}})}var mc=Object.freeze({__proto__:null,register:hc,uv:Xa,xy:Za});function pc(e,t){return qa(e,t,"lab")}const gc=Math.PI,no=gc/180;function bc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=j.from(e),[,i,l]=nt.from(j,[o,a,s]),[c,u,d]=j.from(t),f=nt.from(j,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,p=i-f,b=a-u,E=s-d,$=b**2+E**2-p**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let S=.0638*i/(1+.0131*i)+.638,T;Number.isNaN(l)&&(l=0),l>=164&&l<=345?T=.56+Math.abs(.2*Math.cos((l+168)*no)):T=.36+Math.abs(.4*Math.cos((l+35)*no));let N=Math.pow(i,4),te=Math.sqrt(N/(N+1900)),D=S*(te*T+1-te),M=(h/(r*C))**2;return M+=(p/(n*S))**2,M+=$/D**2,Math.sqrt(M)}const oo=203;var ln=new g({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:q,fromBase(e){return e.map(t=>Math.max(t*oo,0))},toBase(e){return e.map(t=>Math.max(t/oo,0))}});const bt=1.15,vt=.66,ao=2610/2**14,vc=2**14/2610,so=3424/2**12,io=2413/2**7,lo=2392/2**7,yc=1.7*2523/2**5,co=2**5/(1.7*2523),yt=-.56,mr=16295499532821565e-27,wc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],$c=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Ec=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],xc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ja=new g({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:ln,fromBase(e){let[t,r,n]=e,o=bt*t-(bt-1)*n,a=vt*r-(vt-1)*t,i=A(wc,[o,a,n]).map(function(f){let h=so+io*(f/1e4)**ao,p=1+lo*(f/1e4)**ao;return(h/p)**yc}),[l,c,u]=A(Ec,i);return[(1+yt)*l/(1+yt*l)-mr,c,u]},toBase(e){let[t,r,n]=e,o=(t+mr)/(1+yt-yt*(t+mr)),s=A(xc,[o,r,n]).map(function(f){let h=so-f**co,p=lo*f**co-io;return 1e4*(h/p)**vc}),[i,l,c]=A($c,s),u=(i+(bt-1)*c)/bt,d=(l+(vt-1)*u)/vt;return[u,d,c]},formats:{color:{}}}),Rr=new g({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ja,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Jt(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function kc(e,t){let[r,n,o]=Rr.from(e),[a,s,i]=Rr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Ka=3424/4096,Qa=2413/128,es=2392/128,uo=2610/16384,Cc=2523/32,Mc=16384/2610,fo=32/2523,Tc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Sc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],_c=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Lc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Pr=new g({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:ln,fromBase(e){let t=A(Tc,e);return Ac(t)},toBase(e){let t=Rc(e);return A(Lc,t)},formats:{color:{}}});function Ac(e){let t=e.map(function(r){let n=Ka+Qa*(r/1e4)**uo,o=1+es*(r/1e4)**uo;return(n/o)**Cc});return A(Sc,t)}function Rc(e){return A(_c,e).map(function(n){let o=Math.max(n**fo-Ka,0),a=Qa-es*n**fo;return 1e4*(o/a)**Mc})}function Pc(e,t){let[r,n,o]=Pr.from(e),[a,s,i]=Pr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Bc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Hc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Nc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Oc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Dt=new g({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:q,fromBase(e){let r=A(Bc,e).map(n=>Math.cbrt(n));return A(Nc,r)},toBase(e){let r=A(Oc,e).map(n=>n**3);return A(Hc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function zc(e,t){let[r,n,o]=Dt.from(e),[a,s,i]=Dt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var It={deltaE76:pc,deltaECMC:bc,deltaE2000:Lr,deltaEJz:kc,deltaEITP:Pc,deltaEOK:zc};function qe(e,t,r={}){ut(r)&&(r={method:r});let{method:n=oe.deltaE,...o}=r;e=k(e),t=k(t);for(let a in It)if("deltae"+n.toLowerCase()===a.toLowerCase())return It[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Dc(e,t=.25){let n=[g.get("oklch","lch"),"l"];return ge(e,n,o=>o*(1+t))}function Ic(e,t=.25){let n=[g.get("oklch","lch"),"l"];return ge(e,n,o=>o*(1-t))}var jc=Object.freeze({__proto__:null,darken:Ic,lighten:Dc});function ts(e,t,r=.5,n={}){[e,t]=[k(e),k(t)],fe(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return ft(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function rs(e,t,r={}){let n;cn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[k(e),k(t)],n=ft(e,t,l));let c=qe(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,p)=>{let b=p*f;return{p:b,color:n(b)}})}if(o>0){let f=d.reduce((h,p,b)=>{if(b===0)return 0;let E=qe(p.color,d[b-1].color,a);return Math.max(h,E)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let p=d[h-1],b=d[h],E=(b.p+p.p)/2,$=n(E);f=Math.max(f,qe($,p.color),qe($,b.color)),d.splice(h,0,{p:E,color:n(E)}),h++}}}return d=d.map(f=>f.color),d}function ft(e,t,r={}){if(cn(e)){let[l,c]=[e,t];return ft(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=k(e),t=k(t),e=ot(e),t=ot(t);let i={colors:[e,t],options:r};if(n?n=g.get(n):n=g.registry[oe.interpolationSpace]||e.space,o=o?g.get(o):n,e=W(e,n),t=W(t,n),e=be(e),t=be(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[G(e,c),G(t,c)];[u,d]=Ol(l,[u,d]),ge(e,c,u),ge(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let p=t.coords[h];return Ht(f,p,l)}),u=Ht(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=W(d,o)),d},{rangeArgs:i})}function cn(e){return fe(e)==="function"&&!!e.rangeArgs}oe.interpolationSpace="lab";function Uc(e){e.defineFunction("mix",ts,{returns:"color"}),e.defineFunction("range",ft,{returns:"function<color>"}),e.defineFunction("steps",rs,{returns:"array<color>"})}var Fc=Object.freeze({__proto__:null,isRange:cn,mix:ts,range:ft,register:Uc,steps:rs}),ns=new g({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:at,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),os=new g({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:ns,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Vc=new g({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:os,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Yc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Wc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var as=new z({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Yc,fromXYZ_M:Wc}),qc=new z({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:as,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Gc=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Xc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var ss=new z({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:sn,toXYZ_M:Gc,fromXYZ_M:Xc});const Zc=1/512,Jc=16/512;var Kc=new z({id:"prophoto",name:"ProPhoto",base:ss,toBase(e){return e.map(t=>t<Jc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Zc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Qc=new g({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Dt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Jt(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const ho=203,mo=2610/2**14,eu=2**14/2610,tu=2523/2**5,po=2**5/2523,go=3424/2**12,bo=2413/2**7,vo=2392/2**7;var ru=new z({id:"rec2100pq",name:"REC.2100-PQ",base:Kt,toBase(e){return e.map(function(t){return(Math.max(t**po-go,0)/(bo-vo*t**po))**eu*1e4/ho})},fromBase(e){return e.map(function(t){let r=Math.max(t*ho/1e4,0),n=go+bo*r**mo,o=1+vo*r**mo;return(n/o)**tu})},formats:{color:{id:"rec2100-pq"}}});const yo=.17883277,wo=.28466892,$o=.55991073,pr=3.7743;var nu=new z({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Kt,toBase(e){return e.map(function(t){return t<=.5?t**2/3*pr:(Math.exp((t-$o)/yo)+wo)/12*pr})},fromBase(e){return e.map(function(t){return t/=pr,t<=1/12?Math.sqrt(3*t):yo*Math.log(12*t-wo)+$o})},formats:{color:{id:"rec2100-hlg"}}});const is={};pe.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=ls(e.W1,e.W2,e.options.method))});pe.add("chromatic-adaptation-end",e=>{e.M||(e.M=ls(e.W1,e.W2,e.options.method))});function Qt({id:e,toCone_M:t,fromCone_M:r}){is[e]=arguments[0]}function ls(e,t,r="Bradford"){let n=is[r],[o,a,s]=A(n.toCone_M,e),[i,l,c]=A(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=A(u,n.toCone_M);return A(n.fromCone_M,d)}Qt({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Qt({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Qt({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Qt({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Q,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Q.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const ou=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],au=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var cs=new z({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Q.ACES,toXYZ_M:ou,fromXYZ_M:au,formats:{color:{}}});const wt=2**-16,gr=-.35828683,$t=(Math.log2(65504)+9.72)/17.52;var su=new z({id:"acescc",name:"ACEScc",coords:{r:{range:[gr,$t],name:"Red"},g:{range:[gr,$t],name:"Green"},b:{range:[gr,$t],name:"Blue"}},referred:"scene",base:cs,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-wt)*2:r<$t?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(wt)+9.72)/17.52:t<wt?(Math.log2(wt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Eo=Object.freeze({__proto__:null,A98RGB:qc,A98RGB_Linear:as,ACEScc:su,ACEScg:cs,HSL:ns,HSV:os,HWB:Vc,ICTCP:Pr,JzCzHz:Rr,Jzazbz:Ja,LCH:nt,Lab:j,Lab_D65:Ar,OKLCH:Qc,OKLab:Dt,P3:Wa,P3_Linear:Va,ProPhoto:Kc,ProPhoto_Linear:ss,REC_2020:Fa,REC_2020_Linear:Kt,REC_2100_HLG:nu,REC_2100_PQ:ru,XYZ_ABS_D65:ln,XYZ_D50:sn,XYZ_D65:q,sRGB:at,sRGB_Linear:Ya});class v{constructor(...t){let r;t.length===1&&(r=k(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:g.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new v(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Yl(this,...t);return r.color=new v(r.color),r}static get(t,...r){return t instanceof v?t:new v(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=v.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return v.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>v.get(c)));return l};t in v||(v[t]=s),o&&(v.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)v.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(v);else for(let r in t)v.defineFunction(r,t[r])}}v.defineFunctions({get:G,getAll:dt,set:ge,setAll:Ua,to:W,equals:Wl,inGamut:Je,toGamut:be,distance:qa,toString:zt});Object.assign(v,{util:Rl,hooks:pe,WHITES:Q,Space:g,spaces:g.registry,parse:ja,defaults:oe});for(let e of Object.keys(Eo))g.register(Eo[e]);for(let e in g.registry)Br(e,g.registry[e]);pe.add("colorspace-init-end",e=>{var t;Br(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Br(r,e)})});function Br(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(v.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return g.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=g.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=g.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}v.extend(It);v.extend({deltaE:qe});Object.assign(v,{deltaEMethods:It});v.extend(jc);v.extend({contrast:fc});v.extend(mc);v.extend(Gl);v.extend(Fc);v.extend(St);function us(e){return me(e,(t,r)=>r instanceof v?K(r.toString({format:"hex"})):us(r))}const iu="dodgerblue";function Hr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function br({background:e,foreground:t}){return{background:e??new v(Hr(t)),foreground:t??new v(Hr(e))}}var jt;(function(e){e.Dark="dark",e.Light="light"})(jt||(jt={}));function lu(e){return e==="black"?"white":"black"}const cu={black:{foregroundFaint1:new v("#ccc"),foregroundFaint2:new v("#eee")},white:{foregroundFaint1:new v("#ccc"),foregroundFaint2:new v("#eee")}},uu={black:{backgroundFaint1:new v("#666"),backgroundFaint2:new v("#444")},white:{backgroundFaint1:new v("#ccc"),backgroundFaint2:new v("#fafafa")}};function xo({themeColor:e=iu,themeStyle:t=jt.Light}={}){const r=new v(e),n=new v(t===jt.Dark?"black":"white"),o=Hr(n),a=new v(o),s={nav:{hover:br({background:r.clone().set({"hsl.l":93})}),active:br({background:r.clone().set({"hsl.l":90})}),selected:br({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...uu[lu(o)],foreground:a,...cu[o]}};return us(s)}const Ut=Zr()("element-book-change-route"),ko="vira-",{defineElement:je,defineElementNoInputs:_u}=ka({assertInputs:e=>{if(!e.tagName.startsWith(ko))throw new Error(`Tag name should start with '${ko}' but got '${e.tagName}'`)}}),ds=w`
    pointer-events: none;
    opacity: 0.3;
`,he=_e({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ft=_e({"vira-form-input-border-radius":"8px"}),Vt=_e({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":w`calc(${Ft["vira-form-input-border-radius"].value} + 4px)`});function fs({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=K(Gs(n+r+t));return w`
        ${K(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Vt["vira-focus-outline-color"].value};
            border-radius: ${Vt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const du=w`
    padding: 0;
    margin: 0;
`,ke=w`
    ${du};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Nr=w`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,R=je()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>w`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Or;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Or||(Or={}));je()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Or.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>w`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Nr};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Vt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${ds};
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
            border-radius: ${Ft["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${he["vira-interaction-animation-duration"].value},
                background-color
                    ${he["vira-interaction-animation-duration"].value},
                border-color ${he["vira-interaction-animation-duration"].value};
        }

        ${fs({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${R} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?m`
                  <${R.assign({icon:e.icon})}></${R}>
              `:"",r=e.text?m`
                  <span class="text-template">${e.text}</span>
              `:"";return m`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var zr;(function(e){e.Header="header"})(zr||(zr={}));je()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>w`
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
            transition: height ${he["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:le()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?w`
                  height: ${e.contentHeight}px;
              `:w`
                  height: 0;
              `;return m`
            <button
                class="header-wrapper"
                ${P("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${zr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${xa(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const y=_e({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function ce({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const fu=ce({name:"CloseX24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),hu=ce({name:"Element16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ce({name:"Element24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const mu=ce({name:"Loader24Icon",svgTemplate:m`
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
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),pu=w`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${he["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,hs=ce({name:"LoaderAnimated24Icon",svgTemplate:m`
        <style>
            ${pu}
        </style>
        ${mu.svgTemplate}
    `}),gu=ce({name:"Options24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${y["vira-icon-stroke-color"].value}"
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),bu=ce({name:"StatusFailure24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ce({name:"StatusInProgress24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});ce({name:"StatusSuccess24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var Yt;(function(e){e.Loading="loading",e.Error="error"})(Yt||(Yt={}));je()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:le(),imageError:le()},styles:({hostClasses:e})=>w`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:o}){const a=e.imageUrl,s=t.erroredUrls[a]?m`
                  <slot class="status-wrapper" name=${Yt.Error}>
                      <${R.assign({icon:bu})} class="error"></${R}>
                  </slot>
              `:t.loadedUrls[a]?void 0:m`
                    <slot class="status-wrapper" name=${Yt.Loading}>
                        <${R.assign({icon:hs})}></${R}>
                    </slot>
                `;return m`
            ${re(!!s,s)}
            <img
                class=${ta({hidden:!!s})}
                ${P("load",async()=>{e._debugLoadDelay&&await wr(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${P("error",async i=>{e._debugLoadDelay&&await wr(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[a]:!0}}),n(new o.imageError(i.error))})}
                src=${a}
            />
        `}});function Dr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Dr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function ms({value:e,allowed:t,blocked:r}){const n=t?Dr({input:e,matcher:t}):!0,o=r?Dr({input:e,matcher:r}):!1;return n&&!o}function ps(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(ms({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function vu({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=We(r,HTMLInputElement),s=r.data,i=t;let l=a.value??"";if(s)if(s.length===1)ms({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=i,n(s));else{const{filtered:c,blocked:u}=ps({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),i!==l&&o(l)}const _t=je()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:le(),inputBlocked:le()},styles:({hostClasses:e,cssVars:t})=>w`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Vt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${ds};
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
                ${Nr};
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
                border-radius: ${Ft["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${he["vira-interaction-animation-duration"].value};
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
                border-radius: ${Ft["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${fs({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${Nr};
            }

            .close-x-button {
                ${ke};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${he["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=ps({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?m`
                  <${R.assign({icon:e.icon})} class="left-side-icon"></${R}>
              `:"",i=e.fitText?w`
                  width: ${r.forcedInputWidth}px;
              `:"";return m`
            <label>
                ${s}
                ${re(!!e.fitText,m`
                        <span
                            class="size-span"
                            ${xa(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${i}
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
                            <${R.assign({icon:fu})}></${R}>
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
        `}});je()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>w`
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
    `,events:{routeChange:le()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&La(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return m`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return m`
                <a href=${s} rel="noopener noreferrer" ${P("click",n)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:X,defineElementNoInputs:Lu}=ka(),V=X()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>w`
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
                ${P("click",a=>{(!e.router||La(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Ut(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function yu(e,t){return e.entry.entryType===B.Root?!1:!!(e.entry.entryType===B.Page||ue(t,e.fullUrlBreadcrumbs.slice(0,-1))||ue(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const se=X()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>w`
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
            ${V.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${R} {
            display: inline-flex;
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!yu(r,e.selectedPath))return;const n=w`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return m`
                <li style=${n}>
                    <${V.assign({router:e.router,route:{paths:[O.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ta({"title-row":!0,selected:e.selectedPath?ue(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${re(He(r,B.ElementExample),m`
                                    <${R.assign({icon:hu})}></${R}>
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
        `}});async function wu(e){await $r(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await ti(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ye=X()({tagName:"book-error",styles:w`
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
            `)}}),st=X()({tagName:"book-page-controls",events:{controlValueChange:le()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>w`
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

        ${_t} {
            height: 24px;
            max-width: 128px;
        }

        ${R}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===_.Hidden)return"";const s=$u(e.currentValues[n],o,i=>{const l=Y(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return m`
                    <div class="control-wrapper">
                        ${re(a===0,m`
                                <${R.assign({icon:gu})}
                                    class="options-icon"
                                ></${R}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function $u(e,t,r){return Le(t,_.Hidden)?"":Le(t,_.Checkbox)?m`
            <input
                type="checkbox"
                .value=${e}
                ${P("input",n=>{const o=We(n,HTMLInputElement);r(o.checked)})}
            />
        `:Le(t,_.Color)?m`
            <input
                type="color"
                .value=${e}
                ${P("input",n=>{const o=We(n,HTMLInputElement);r(o.value)})}
            />
        `:Le(t,_.Text)?m`
            <${_t.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${P(_t.events.valueChange,n=>{r(n.detail)})}
            ></${_t}>
        `:Le(t,_.Number)?m`
            <input
                type="number"
                .value=${e}
                ${P("input",n=>{const o=We(n,HTMLInputElement);r(o.value)})}
            />
        `:Le(t,_.Dropdown)?m`
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
        `}const Co=X()({tagName:"book-breadcrumbs",styles:w`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),i=a?"":m`
                      <span class="spacer">&gt;</span>
                  `;return m`
                <${V.assign({route:{hash:void 0,search:void 0,paths:[O.Book,...s]},router:e.router})}>
                    ${r}
                </${V}>
                ${i}
            `}):m`
                &nbsp;
            `}}),vr=X()({tagName:"book-breadcrumbs-bar",styles:w`
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
            ${re(!!e.currentSearch,m`
                    &nbsp;
                `,m`
                    <${Co.assign({currentRoute:e.currentRoute,router:e.router})}></${Co}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${P("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await wr(200),n.value===o&&(n.value?t(new Ut({paths:[O.Search,encodeURIComponent(n.value)]})):t(new Ut(Oe)))})}
            />
        `}}),Mo=X()({tagName:"book-entry-description",styles:w`
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
            `)}}),To=X()({tagName:"book-page-wrapper",styles:w`
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
              `,r=[O.Book,...e.pageNode.fullUrlBreadcrumbs],n=zo(e.pageNode.entry.errors);return n&&console.error(n),m`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${V.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${V}>
                    ${n?m`
                              <${ye.assign({message:n.message})}></${ye}>
                          `:m`
                              <${Mo.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Mo}>
                              <${st.assign({config:e.pageNode.entry.controls,currentValues:nn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${st}>
                          `}
                </div>
            </div>
        `}}),Et=X()({tagName:"book-element-example-controls",styles:w`
        :host {
            display: flex;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[O.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return m`
            <${V.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${V}>
        `}}),So=Symbol("unset-internal-state"),_o=X()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:So},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw zo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===So&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return m`
                ${re(!!t.elementExampleNode.entry.styles,m`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),m`
                <${ye.assign({message:`${t.elementExampleNode.entry.title} failed: ${it(n)}`})}></${ye}>
            `}},options:{allowPolymorphicState:!0}}),Lo=X()({tagName:"book-element-example-wrapper",styles:w`
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

        ${Et} {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Et} {
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return m`
            <div class="individual-example-wrapper">
                <${Et.assign(Is(e,["currentPageControls"]))}></${Et}>
                <${_o.assign(e)}></${_o}>
            </div>
        `}});function gs(e,t,r,n){const o=Mr(r,n),a=[];if(o){const s=gs(e,t,o,n);s&&a.push(s)}if(He(r,B.Page)&&!e.includes(r)){const s=nn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:me(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Eu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[m`
                No results
            `];const s=wn(e,1)?gs(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&wn(e,1)?m`
                  <${st.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${st}>
              `:"",l=wi(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(He(c,B.Page))return m`
                    <${To.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${To}>
                `;if(He(c,B.ElementExample)){const d=nn(o,c.fullUrlBreadcrumbs.slice(0,-1));return m`
                    <${Lo.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Lo}>
                `}else return He(c,B.Root)?"":m`
                    <${ye.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${ye}>
                `});return[i,l].flat()}const Pe=X()({tagName:"book-entry-display",styles:w`
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

        ${vr} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${he["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:le()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Tr(e.currentRoute.paths),s=Eu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return m`
            <${vr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${vr}>

            ${re(e.showLoading,m`
                    <div
                        ${zn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${R.assign({icon:hs})}></${R}>
                    </div>
                    ${re(!!n.lastElement,m`
                            ${n.lastElement}
                            <slot name=${J.Footer}></slot>
                        `)}
                `,m`
                    <div
                        ${zn(i=>{o({lastElement:i})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${J.Footer}></slot>
                `)}
        `}});function xu(e,t,r){const n=Ao(e,t);if(n.length)return n;r(Oe);const o=Ao(e,Oe.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Ao(e,t){return e.filter(r=>Qs({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const xt=$a()({tagName:"element-book-app",events:{pathUpdate:le()},stateInitStatic:{currentRoute:Oe,router:void 0,loading:!0,colors:{config:void 0,theme:xo(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:w`
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

        ${se} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Ro(e,Tr(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,h,p,b,E;t._debug&&console.info("rendering element-book app");function s($){return{...e.currentRoute,...$}}function i($){const C=s($);return!ue(e.currentRoute,C)}function l($){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,$].filter(we).join(" - "))}function c($){if(!i($))return;const C=s($);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!ue(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!ue(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const M=Sl(t.internalRouterConfig.basePath);n({router:M}),M.addRouteListener(!0,H=>{n({currentRoute:H})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const $={themeColor:t.themeColor};if(!ue($,(f=e.colors)==null?void 0:f.config)){const M=xo($);n({colors:{config:$,theme:M}}),Al(r,M)}const C=t._debug??!1,S=dl({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Sa(S.tree,{children:(p=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:p.children,controls:t.globalValues})}}));const T=Tr(e.currentRoute.paths),te=(T?vl({flattenedNodes:S.flattenedNodes,searchQuery:T}):void 0)??xu(S.flattenedNodes,e.currentRoute.paths,c);l((b=te[0])==null?void 0:b.entry.title);const D=(E=e.treeBasedControls)==null?void 0:E.controls;return D?(t._debug&&console.info({currentControls:D}),m`
                <div
                    class="root"
                    ${P(Ut,async M=>{const H=M.detail;if(!i(H))return;if(n({loading:!0}),c(H),!(r.shadowRoot.querySelector(se.tagName)instanceof se))throw new Error(`Failed to find child '${se.tagName}'`);Ro(r,T,e.currentRoute)})}
                    ${P(st.events.controlValueChange,M=>{if(!e.treeBasedControls)return;const H=hl(D,M.detail.fullUrlBreadcrumbs,M.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:H}})})}
                >
                    <${se.assign({flattenedNodes:S.flattenedNodes,router:e.router,selectedPath:T?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${J.NavHeader}
                            slot=${J.NavHeader}
                        ></slot>
                    </${se}>
                    <${Pe.assign({controls:D,currentNodes:te,currentRoute:e.currentRoute,debug:C,originalTree:S.tree,router:e.router,showLoading:e.loading})}
                        ${P(Pe.events.loadingRender,async M=>{await $r();const H=r.shadowRoot.querySelector(Pe.tagName);H?H.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Pe.tagName}' for scrolling.`),await $r(),n({loading:!M.detail})})}
                    >
                        <slot
                            name=${J.Footer}
                            slot=${J.Footer}
                        ></slot>
                    </${Pe}>
                </div>
            `):m`
                    <${ye.assign({message:"Failed to generate page controls."})}></${ye}>
                `}catch($){return console.error($),m`
                <p class="error">${it($)}</p>
            `}}});async function Ro(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(se.tagName);if(!(n instanceof se))throw new Error(`Failed to find child '${se.tagName}'`);await wu(n)}const un=ei()({title:"Parent Page 1",parent:void 0,controls:{"Parent Control":{controlType:_.Color,initValue:"#33ccff"},"Hidden control":{controlType:_.Hidden,initValue:new RegExp("this can be anything")}}}),Ir=ze({title:"Parent Page 2",parent:void 0}),Po=ze({title:"Sub Page 1",parent:Ir});function Bo(e,t){return ze({title:`test ${e}`,parent:t,elementExamplesCallback({defineExample:n}){Array(20).fill(0).forEach((o,a)=>{n({title:`example ${e} ${a}`,renderCallback(){return"element example here"}})})}})}const Ho=ze({title:"duplicate error page",parent:un,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:e}){e({title:"example 1",renderCallback(){return"hi"}}),e({title:"example 2",renderCallback(){return"hi"}})}}),ku=ze({title:"test 3",controls:{thing:{initValue:"there",controlType:_.Text},thing2:{initValue:!1,controlType:_.Checkbox},thing3:{initValue:"hello",controlType:_.Dropdown,options:["hello","hi","yo"]}},parent:un,elementExamplesCallback({defineExample:e}){e({title:"example 3 1",renderCallback(){return"hi"}}),e({title:"example 3 2",styles:w`
                .color-control {
                    width: 20px;
                    height: 20px;);
                }
            `,renderCallback({controls:t}){const r=w`
                    background-color: ${K(t["Parent Control"])};
                `;return m`
                    hello ${t.thing}, ${t.thing2}
                    <div style=${r} class="color-control"></div>
                    selected: ${t.thing3} ${t["Hidden control"]}
                    <br />
                    global: ${t.testGlobalControl}
                `}}),e({title:"example with error",renderCallback(){return"broken"}}),e({title:"example with error",renderCallback(){return"broken"}})}}),bs=[un,Bo(0,Ir),Po,...Array(100).fill(0).map((e,t)=>Bo(t+1,Po)),Ho,Ho,ku,Ir];console.info({entries:bs});Xt({tagName:"vir-app",styles:w`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${xt} {
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
            <${xt.assign({entries:bs,themeColor:e.themeColor,internalRouterConfig:{useInternalRouter:!0,basePath:"element-book"},_debug:!0,globalValues:{testGlobalControl:"it worked!"}})}
                ${P(xt.events.pathUpdate,r=>{t({paths:r.detail})})}
            >
                <h1 slot=${J.NavHeader}>My Title</h1>
                <footer slot=${J.Footer}>Example Footer</footer>
            </${xt}>
        `});
