var Ys=Object.defineProperty;var Ws=(e,t,r)=>t in e?Ys(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var sr=(e,t,r)=>(Ws(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Xr(e){return!!e}function Gs(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}var kn;(function(e){e.Upper="upper",e.Lower="lower"})(kn||(kn={}));const qs=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Wt(e,t){return e?qs.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ra(e,t){return e&&t.every(r=>Wt(e,r))}function na(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Gt(r).trim()).join(`
`))}function Gt(e){return e?e instanceof Error?e.message:Wt(e,"message")?String(e.message):String(e):""}function Xs(e){return e instanceof Error?e:new Error(Gt(e))}function xn(e){return!!e&&typeof e=="object"}function Tt(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Zs(e){return Array.isArray(e)?"array":typeof e}function qt(e,t){return Zs(e)===t}function Tn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Sn="Failed to compare objects using JSON.stringify";function Cn(e,t,r){return Tn({source:e,errorHandler(n){if(r)return"";throw n}})===Tn({source:t,errorHandler(n){if(r)return"";throw n}})}function se(e,t,r={}){try{return e===t?!0:xn(e)&&xn(t)?Cn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>se(e[o],t[o])):!1:Cn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Xs(n);throw o.message.startsWith(Sn)||(o.message=`${Sn}: ${o.message}`),o}}function Ks(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Js(e){return Tt(e).filter(t=>isNaN(Number(t)))}function Qs(e){return Js(e).map(r=>e[r])}function ei(e,t){return Qs(t).includes(e)}function ti(e,t){return Tt(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function ri(e,t){return ti(e,r=>!t.includes(r))}function St(e,t){let r=!1;const n=Tt(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Tt(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Mn(e,t){try{return ni(e,t),!0}catch{return!1}}function ni(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function oa(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${oa.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function oi(e){const t=oa();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const ai=globalThis.crypto;function si(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return ai.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function ii(e,t){return Wt(e,"entryType")&&e.entryType===t}var B;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(B||(B={}));function xe(e,t){return e.controlType===t}var _;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(_||(_={}));const aa=Symbol("any-type"),li={[_.Checkbox]:!1,[_.Color]:"",[_.Dropdown]:"",[_.Hidden]:aa,[_.Number]:0,[_.Text]:""};function ci(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=li[o.controlType];a!==aa&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Zr(e,t){const r=Ct(e.title);return e.parent?[...Zr(e.parent,!1),Ct(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Ct(e){return Gs(e).toLowerCase().replaceAll(/\s/g,"-")}function ui({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function di(){return e=>Be(e)}function Be(e){const t={...e,entryType:B.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:B.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Xr)};r.add(n.title),t.elementExamples[Ct(o.title)]=o}}),t}var q;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(q||(q={}));var _n;(function(e){e.Upper="upper",e.Lower="lower"})(_n||(_n={}));function fi(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function sa(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${sa.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}async function Sr(e=1){const t=sa();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function hi(e){return mi(e,1)}async function mi(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{fi(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=window,Kr=vt.ShadowRoot&&(vt.ShadyCSS===void 0||vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jr=Symbol(),Ln=new WeakMap;let ia=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Jr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Kr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ln.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ln.set(r,t))}return t}toString(){return this.cssText}};const X=e=>new ia(typeof e=="string"?e:e+"",void 0,Jr),yt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new ia(r,e,Jr)},pi=(e,t)=>{Kr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=vt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},An=Kr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return X(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ir;const Mt=window,Pn=Mt.trustedTypes,gi=Pn?Pn.emptyScript:"",Rn=Mt.reactiveElementPolyfillSupport,Cr={toAttribute(e,t){switch(t){case Boolean:e=e?gi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},la=(e,t)=>t!==e&&(t==t||e==e),lr={attribute:!0,type:String,converter:Cr,reflect:!1,hasChanged:la},Mr="finalized";let Me=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=lr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||lr}static finalize(){if(this.hasOwnProperty(Mr))return!1;this[Mr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(An(o))}else t!==void 0&&r.push(An(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return pi(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=lr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Cr).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Cr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||la)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Me[Mr]=!0,Me.elementProperties=new Map,Me.elementStyles=[],Me.shadowRootOptions={mode:"open"},Rn==null||Rn({ReactiveElement:Me}),((ir=Mt.reactiveElementVersions)!==null&&ir!==void 0?ir:Mt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cr;const _t=window,Ae=_t.trustedTypes,Bn=Ae?Ae.createPolicy("lit-html",{createHTML:e=>e}):void 0,Lt="$lit$",ne=`lit$${(Math.random()+"").slice(9)}$`,Qr="?"+ne,bi=`<${Qr}>`,ye=document,We=()=>ye.createComment(""),Ge=e=>e===null||typeof e!="object"&&typeof e!="function",ca=Array.isArray,ua=e=>ca(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ur=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hn=/-->/g,Nn=/>/g,me=RegExp(`>|${ur}(?:([^\\s"'>=/]+)(${ur}*=${ur}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),On=/'/g,jn=/"/g,da=/^(?:script|style|textarea|title)$/i,vi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),yi=vi(1),K=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),zn=new WeakMap,ve=ye.createTreeWalker(ye,129,null,!1);function fa(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bn!==void 0?Bn.createHTML(t):t}const ha=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=De;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===De?u[1]==="!--"?s=Hn:u[1]!==void 0?s=Nn:u[2]!==void 0?(da.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=me):u[3]!==void 0&&(s=me):s===me?u[0]===">"?(s=o??De,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?me:u[3]==='"'?jn:On):s===jn||s===On?s=me:s===Hn||s===Nn?s=De:(s=me,o=void 0);const h=s===me&&e[i+1].startsWith("/>")?" ":"";a+=s===De?l+bi:d>=0?(n.push(c),l.slice(0,d)+Lt+l.slice(d)+ne+h):l+ne+(d===-2?(n.push(void 0),i):h)}return[fa(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class qe{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=ha(t,r);if(this.el=qe.createElement(c,n),ve.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=ve.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Lt)||f.startsWith(ne)){const h=u[s++];if(d.push(f),h!==void 0){const p=o.getAttribute(h.toLowerCase()+Lt).split(ne),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:g[2],strings:p,ctor:g[1]==="."?pa:g[1]==="?"?ga:g[1]==="@"?ba:tt})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(da.test(o.tagName)){const d=o.textContent.split(ne),f=d.length-1;if(f>0){o.textContent=Ae?Ae.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],We()),ve.nextNode(),l.push({type:2,index:++a});o.append(d[f],We())}}}else if(o.nodeType===8)if(o.data===Qr)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(ne,d+1))!==-1;)l.push({type:7,index:a}),d+=ne.length-1}a++}}static createElement(t,r){const n=ye.createElement("template");return n.innerHTML=t,n}}function we(e,t,r=e,n){var o,a,s,i;if(t===K)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Ge(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=we(e,l._$AS(e,t.values),l,n)),t}class ma{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:ye).importNode(n,!0);ve.currentNode=a;let s=ve.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new He(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new va(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=ve.nextNode(),i++)}return ve.currentNode=ye,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class He{constructor(t,r,n,o){var a;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=we(this,t,r),Ge(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==K&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ua(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&Ge(this._$AH)?this._$AA.nextSibling.data=t:this.$(ye.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=qe.createElement(fa(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new ma(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=zn.get(t.strings);return r===void 0&&zn.set(t.strings,r=new qe(t)),r}T(t){ca(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new He(this.k(We()),this.k(We()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class tt{constructor(t,r,n,o,a){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=we(this,t,r,0),s=!Ge(t)||t!==this._$AH&&t!==K,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=we(this,i[n+l],r,l),c===K&&(c=this._$AH[l]),s||(s=!Ge(c)||c!==this._$AH[l]),c===L?t=L:t!==L&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class pa extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const wi=Ae?Ae.emptyScript:"";class ga extends tt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,wi):this.element.removeAttribute(this.name)}}class ba extends tt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=we(this,t,r,0))!==null&&n!==void 0?n:L)===K)return;const o=this._$AH,a=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==L&&(o===L||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class va{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){we(this,t)}}const $i={O:Lt,P:ne,A:Qr,C:1,M:ha,L:ma,R:ua,D:we,I:He,V:tt,H:ga,N:ba,U:pa,F:va},Dn=_t.litHtmlPolyfillSupport;Dn==null||Dn(qe,He),((cr=_t.litHtmlVersions)!==null&&cr!==void 0?cr:_t.litHtmlVersions=[]).push("2.8.0");const Ei=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new He(t.insertBefore(We(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr,fr;let Ve=class extends Me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ei(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return K}};Ve.finalized=!0,Ve._$litElement$=!0,(dr=globalThis.litElementHydrateSupport)===null||dr===void 0||dr.call(globalThis,{LitElement:Ve});const In=globalThis.litElementPolyfillSupport;In==null||In({LitElement:Ve});((fr=globalThis.litElementVersions)!==null&&fr!==void 0?fr:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ne=e=>(...t)=>({_$litDirective$:e,values:t});let Ee=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ki}=$i,Un=()=>document.createComment(""),Ie=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(Un(),a),i=o.insertBefore(Un(),a);r=new ki(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},pe=(e,t,r=e)=>(e._$AI(t,r),e),xi={},Ti=(e,t=xi)=>e._$AH=t,Si=e=>e._$AH,hr=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ya=Ne(class extends Ee{constructor(e){var t;if(super(e),e.type!==Xt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return K}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Ci=Ne(class extends Ee{constructor(e){if(super(e),e.type!==Xt.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=Si(e),{values:s,keys:i}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=i,s;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,h=a.length-1,p=0,g=s.length-1;for(;f<=h&&p<=g;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[p])c[p]=pe(a[f],s[p]),f++,p++;else if(l[h]===i[g])c[g]=pe(a[h],s[g]),h--,g--;else if(l[f]===i[g])c[g]=pe(a[f],s[g]),Ie(e,c[g+1],a[f]),f++,g--;else if(l[h]===i[p])c[p]=pe(a[h],s[p]),Ie(e,a[f],a[h]),h--,p++;else if(u===void 0&&(u=Fn(i,p,g),d=Fn(l,f,h)),u.has(l[f]))if(u.has(l[h])){const v=d.get(i[p]),w=v!==void 0?a[v]:null;if(w===null){const T=Ie(e,a[f]);pe(T,s[p]),c[p]=T}else c[p]=pe(w,s[p]),Ie(e,a[f],w),a[v]=null;p++}else hr(a[h]),h--;else hr(a[f]),f++;for(;p<=g;){const v=Ie(e,c[g+1]);pe(v,s[p]),c[p++]=v}for(;f<=h;){const v=a[f++];v!==null&&hr(v)}return this.ut=i,Ti(e,c),K}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _r=class extends Ee{constructor(t){if(super(t),this.et=L,t.type!==Xt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===L||t==null)return this.ft=void 0,this.et=t;if(t===K)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};_r.directiveName="unsafeHTML",_r.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vn extends _r{}Vn.directiveName="unsafeSVG",Vn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mi(e,t,r){return e?t():r==null?void 0:r()}var _i=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(w){if(w!==void 0&&typeof w!="function")throw new TypeError("Function expected");return w}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var g in n)p[g]=g==="access"?{}:n[g];for(var g in n.access)p.access[g]=n.access[g];p.addInitializer=function(w){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(w||null))};var v=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(d=s(v.get))&&(u.get=d),(d=s(v.set))&&(u.set=d),(d=s(v.init))&&o.unshift(d)}else(d=s(v))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},Li=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Ai=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Pi(){function e(t,r){return t}return e}let wa=(()=>{let e=[Pi()],t,r=[],n,o=Ve;return n=class extends o{},Ai(n,"DeclarativeElement"),(()=>{const a=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;_i(null,t={value:n},e,{kind:"class",name:n.name,metadata:a},null,r),n=t.value,a&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),Li(n,r)})(),n})();function Ri(e){return!!e}const Bi={capitalizeFirstLetter:!1};function Hi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Ni(e,t){return t.capitalizeFirstLetter?Hi(e):e}function Oi(e,t=Bi){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Ni(n,t)}var Yn;(function(e){e.Upper="upper",e.Lower="lower"})(Yn||(Yn={}));const ji=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function en(e,t){return e?ji.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function zi(e){return e?e instanceof Error?e.message:en(e,"message")?String(e.message):String(e):""}function Di(e){return e instanceof Error?e:new Error(zi(e))}function Ii(e){return!!e&&typeof e=="object"}function $e(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function $a(e,t){let r=!1;const n=$e(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all($e(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}var Pe;(function(e){e.Upper="upper",e.Lower="lower"})(Pe||(Pe={}));function Ui(e){return e.toLowerCase()!==e.toUpperCase()}function Wn(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Ui(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Pe.Upper&&o!==o.toUpperCase())return!1;if(t===Pe.Lower&&o!==o.toLowerCase())return!1}return!0}function Fi(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0&&a[o-1]||"",i=o<a.length-1&&a[o+1]||"",l=Wn(s,Pe.Lower,{blockNoCaseCharacters:!0})||Wn(i,Pe.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Vi(e){return!!e&&typeof e=="object"}function Gn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Yi(e){return Array.isArray(e)?"array":typeof e}function Wi(e,t){return Yi(e)===t}function Gi(e,t){let r=!1;const n=Gn(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Gn(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function ke(e){if(Vi(e))return Gi(e,(r,n)=>{if(!Wi(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Fi(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?X(r):r.startsWith("-")?yt`-${X(r)}`:yt`--${X(r)}`;return{name:s,value:yt`var(${s}, ${X(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${ke.name}' function.`)}function qi({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Zi=(e,t,r)=>{t.constructor.createProperty(r,e)};function Ea(e){return(t,r)=>r!==void 0?Zi(e,t,r):Xi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mr;((mr=window.HTMLSlotElement)===null||mr===void 0?void 0:mr.prototype.assignedElements)!=null;function Ki(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Lr(e){return en(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function tn(e){return en(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function ka(e){return e.map(t=>Lr(t)?t.definition:t).filter(t=>tn(t))}const xa=new WeakMap;function Ji(e,t){var o;const r=ka(t);return(o=Ta(xa,[e,...r]).value)==null?void 0:o.template}function Qi(e,t,r){const n=ka(t);return Ca(xa,[e,...n],r)}function Ta(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Sa(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ta(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Sa(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Ca(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Sa(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Ca(l,t,r,n+1)}const el=new WeakMap;function Ma(e,t,r){const n=Ji(e,t),o=n??r();if(!n){const i=Qi(e,t,o);if(i.result)el.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=Ki(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function _a(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let g,v=[];if(typeof f=="string"&&(g=r(f,c,p),g)){o[d]=f+g.replacement,s.push(h);const T=g.getExtraValues;v=T?T(p):[],v.length&&T?(o[d]+=" ",v.forEach((M,C)=>{C&&o.push(" ")}),i.push(M=>{const C=M[h],N=T(C);return{index:h,values:N}}),o.push(c)):o[d]+=c}g||o.push(c);const w=e.raw[u];g?(a[d]=a[d]+g.replacement+w,v.length&&v.forEach(()=>{a.push("")})):a.push(w)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function tl(...[e,t,r]){if(tn(r))return{replacement:r.tagName,getExtraValues:void 0}}function rl(e,t){return _a(e,t,tl)}function E(e,...t){const r=Ma(e,t,()=>rl(e,t));return yt(r.strings,...r.values)}const rn=Symbol("key for ignoring inputs not having been set yet"),nl={[rn]:!0,allowPolymorphicState:!1};function La(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof wa?!0:La(r)}function Aa(e,t){const r=e.instanceState;$e(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&$e(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),ol(e)}function ol(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function qn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class al extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function nn(){return e=>{var t;return t=class extends al{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function oe(){return nn()}function sl(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=nn()([e,n].join("-"));return r[n]=o,r},{}):{}}const il="_elementVirStateSetup";function ll(e){return Ii(e)?il in e:!1}function cl(e,t){return e.includes(t)}var Xn;(function(e){e.Upper="upper",e.Lower="lower"})(Xn||(Xn={}));const ul=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function wt(e,t){return e?ul.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function rt(e){return!!e&&typeof e=="object"}function At(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ar(e){return Array.isArray(e)?"array":typeof e}function _e(e,t){return Ar(e)===t}function dl(e,t){let r=!1;const n=At(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(At(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function fl(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Ar(e)===Ar(t)&&r}const Pa=Symbol("and"),Ra=Symbol("or"),Ba=Symbol("exact"),Ha=Symbol("enum"),on=Symbol("unknown"),Na="__vir__shape__definition__key__do__not__use__in__actual__objects";function Oa(e){return wt(e,Na)}const ja="__vir__shape__specifier__key__do__not__use__in__actual__objects",hl=[Pa,Ra,Ba,Ha,on];function ml(){return pl([],on)}function Zt(e){return nt(e,Ra)}function an(e){return nt(e,Pa)}function sn(e){return nt(e,Ba)}function ln(e){return nt(e,Ha)}function cn(e){return nt(e,on)}function nt(e,t){const r=Kt(e);return!!r&&r.specifierType===t}function pl(e,t){return{[ja]:!0,specifierType:t,parts:e}}function $t(e,t){const r=Kt(t);if(r){if(an(r))return r.parts.every(n=>$t(e,n));if(Zt(r))return r.parts.some(n=>$t(e,n));if(sn(r))return rt(e)?$t(e,r.parts[0]):e===r.parts[0];if(ln(r))return Object.values(r.parts[0]).some(n=>n===e);if(cn(r))return!0}return fl(e,t)}function Kt(e){if(rt(e)&&wt(e,ja)){if(!wt(e,"parts")||!_e(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!wt(e,"specifierType")||!cl(hl,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Pr(e,t=!1){return Rr(e)}function Rr(e){const t=Kt(e);if(t){if(Zt(t)||sn(t))return Rr(t.parts[0]);if(an(t))return t.parts.reduce((r,n)=>Object.assign(r,Rr(n)),{});if(ln(t))return Object.values(t.parts[0])[0];if(cn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Oa(e)?Pr(e.shape):e instanceof RegExp||_e(e,"array")?e:rt(e)?dl(e,(r,n)=>Pr(n)):e}function gl(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Pr(e),[Na]:!0}}class G extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function bl(e,t,r={}){try{return vl(e,t,r),!0}catch{return!1}}function vl(e,t,r={}){ge(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function za(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ge(e,t,r,n){if(cn(t))return!0;if(Oa(t))return ge(e,t.shape,r,n);const o=za(r);if(Kt(e))throw new G(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!$t(e,t))throw new G(`Subject does not match shape definition at key ${o}`);if(_e(t,"function"))return _e(e,"function");if(rt(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(Zt(t))l=t.parts.some(c=>{try{const u=ge(e,c,r,{...n});return Object.assign(i,u),!0}catch(u){if(u instanceof G)return!1;throw u}});else if(an(t))l=t.parts.every(c=>{try{const u=ge(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof G)return!1;throw u}});else if(sn(t)){const c=ge(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(ln(t))throw new G(`Cannot compare an enum specifier to an object at ${o}`);if(_e(t,"array")&&_e(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return ge(c,f,[...r,u],n),!0}catch(h){if(h instanceof G)return!1;throw h}});return i[u]=d,d});else{const c=yl({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(i).filter(d=>!i[d]).join(",")}`;throw new G(u)}return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new G(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function yl({keys:e,options:t,shape:r,subject:n}){const o=za(e),a={};if(rt(r)){const s=new Set(At(n)),i=new Set(At(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new G(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=Zt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new G(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];ge(c,u,[...e,l],t),a[l]=!0})}else throw new G(`shape definition at ${o} was not an object.`);return a}const wl=gl({addListener(){return!1},removeListener(){return!1},value:ml()});function pr(e){return bl(e,wl,{allowExtraKeys:!0})}function $l(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Zn(e,t){const r=e;function n(s){t?$l(s,e,e.tagName):Ea()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=ll(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(p){s[i]=p,r[i]=p}const f=e.observablePropertyListenerMap[i];if(u!==c&&pr(u)&&(f!=null&&f.length)&&u.removeListener(f),pr(c))if(f)c.addListener(f);else{let p=function(){e.requestUpdate()};var h=p;e.observablePropertyListenerMap[i]=p,c.addListener(p)}else pr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function El(e){return e?$a(e,t=>t):{}}function kl({hostClassNames:e,cssVars:t}){return{hostClasses:$a(e,(r,n)=>({name:X(n),selector:X(`:host(.${n})`)})),cssVars:t}}function xl({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&$e(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Tl(e,t){function r(o){$e(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Sl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Jt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...nl,...e.options},n=sl(e.tagName,e.events),o=El(e.hostClasses);e.hostClasses&&qn(e.tagName,e.hostClasses),e.cssVars&&qn(e.tagName,e.cssVars);const a=e.cssVars?ke(e.cssVars):{},s=typeof e.styles=="function"?e.styles(kl({hostClassNames:o,cssVars:a})):e.styles||E``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends wa{createRenderParams(){return Tl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{La(this)&&!this._haveInputsBeenSet&&!r[rn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Jt.name}' to define ${e.tagName}.`),this._hasRendered=!0;const u=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return xl({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this._lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=Di(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this._lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(u){Aa(this,u)}constructor(){var d;super(),this._lastRenderError=void 0,this._internalRenderCount=0,this._initCalled=!1,this._hasRendered=!1,this._lastRenderedProps=void 0,this._haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Zn(this,!1),this.instanceState=Zn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};$e(u).forEach(f=>{Ea()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},Sl(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Oi(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Da(){return e=>Jt({...e,options:{[rn]:!1,...e.options}})}function Ia(e,t){return Xe(e,t),e.element}function Cl(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Xe(e,t){const r=Cl(e),n=r?`: in ${r}`:"";if(e.type!==Xt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function Ml(e,t){return t?Kn(e,t):Kn(void 0,e)}const Kn=Ne(class extends Ee{constructor(e){super(e),this.element=Ia(e,"assign")}render(e,t){return Aa(this.element,t),K}});function R(e,t){return _l(e,t)}const _l=Ne(class extends Ee{constructor(e){super(e),this.element=Ia(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),K}}),Jn="onDomCreated",Qn=Ne(class extends Ee{constructor(e){super(e),Xe(e,Jn)}update(e,[t]){Xe(e,Jn);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),gr="onResize",Ua=Ne(class extends Ee{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Xe(e,gr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${gr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Xe(e,gr),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Q(e,t,r){return Mi(e,()=>t,()=>r)}function Fa(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Da()(r(n))),defineElementNoInputs:n=>(t(n),Jt(r(n)))}}function Ll(...[e,t,r]){const n=Lr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=tn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Lr(c)?c.inputs:void 0;return[o&&u?Ml(u):void 0].filter(Ri)}}}function Al(e){}function Pl(e){return _a(e.strings,e.values,Ll,Al)}function m(e,...t){const r=yi(e,...t),n=Ma(e,t,()=>Pl(r));return{...r,strings:n.strings,values:n.values}}var eo;(function(e){e.Upper="upper",e.Lower="lower"})(eo||(eo={}));const Rl={a:HTMLAnchorElement,abbr:HTMLElement,address:HTMLElement,area:HTMLAreaElement,article:HTMLElement,aside:HTMLElement,audio:HTMLAudioElement,b:HTMLElement,base:HTMLBaseElement,bdi:HTMLElement,bdo:HTMLElement,blockquote:HTMLQuoteElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,caption:HTMLTableCaptionElement,cite:HTMLElement,code:HTMLElement,col:HTMLTableColElement,colgroup:HTMLTableColElement,data:HTMLDataElement,datalist:HTMLDataListElement,dd:HTMLElement,del:HTMLModElement,details:HTMLDetailsElement,dfn:HTMLElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,dt:HTMLElement,em:HTMLElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLElement,figure:HTMLElement,footer:HTMLElement,form:HTMLFormElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,head:HTMLHeadElement,header:HTMLElement,hgroup:HTMLElement,hr:HTMLHRElement,html:HTMLHtmlElement,i:HTMLElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,ins:HTMLModElement,kbd:HTMLElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLElement,map:HTMLMapElement,mark:HTMLElement,menu:HTMLMenuElement,meta:HTMLMetaElement,meter:HTMLMeterElement,nav:HTMLElement,noscript:HTMLElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,q:HTMLQuoteElement,rp:HTMLElement,rt:HTMLElement,ruby:HTMLElement,s:HTMLElement,samp:HTMLElement,script:HTMLScriptElement,search:HTMLElement,section:HTMLElement,select:HTMLSelectElement,slot:HTMLSlotElement,small:HTMLElement,source:HTMLSourceElement,span:HTMLSpanElement,strong:HTMLElement,style:HTMLStyleElement,sub:HTMLElement,summary:HTMLElement,sup:HTMLElement,table:HTMLTableElement,tbody:HTMLTableSectionElement,td:HTMLTableCellElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,tfoot:HTMLTableSectionElement,th:HTMLTableCellElement,thead:HTMLTableSectionElement,time:HTMLTimeElement,title:HTMLTitleElement,tr:HTMLTableRowElement,track:HTMLTrackElement,u:HTMLElement,ul:HTMLUListElement,var:HTMLElement,video:HTMLVideoElement,wbr:HTMLElement},Bl=Object.keys(Rl),Hl=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...Bl,...Hl];function Ue(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const Nl={[B.ElementExample]:()=>[],[B.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...ci(e.controls,e.title)].filter(Xr),[B.Root]:()=>[]},Pt="_isBookTreeNode",Va=new Map;function Ol(e){return Va.get(e)}function jl(e,t){Ks(Va,e,()=>t)}function Le(e,t){return!!(Ya(e)&&e.entry.entryType===t)}function Ya(e){return!!(ra(e,[Pt,"entry"])&&e[Pt])}function zl(){return{[Pt]:!0,entry:{entryType:B.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Dl({entries:e,debug:t}){const r=Ol(e);if(r)return r;const n=zl();e.forEach(s=>un({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=Wa(n),a={tree:n,flattenedNodes:o};return jl(e,a),t&&console.info("element-book tree:",n),a}function Il(e,t,r){if(!t.parent)return e;const n=Br(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),un({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Br(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Zr(t,!1)}`);return o}function un({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Nl[t.entryType](t);t.errors.push(...o);const a=Il(e,t,r),s=Ct(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Pt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,ii(t,B.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>un({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Br(e,t){const r=Ya(e)?e.fullUrlBreadcrumbs.slice(0,-1):Zr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Wa(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Wa(o));return[e,...r].flat()}function dn(e,t){return fn(e,["",...t],void 0)}function fn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],s=a&&fn(a,n,r);return{...e.controls,...s}}function Ul(e,t,r){const n={...e};return fn(n,["",...t],r),n}function Ga(e,t){const r=(t==null?void 0:t.controls)||(Le(e,B.Page)?St(e.entry.controls,(o,a)=>a.initValue):{});return{children:St(e.children,(o,a)=>{var s;return Ga(a,(s=t==null?void 0:t.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function Fl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const Vl=si(32);function Et(e){return e.join(Vl)}function qa(e){if(!e.length)return[];const t=Et(e),r=qa(e.slice(0,-1));return[t,...r]}const Yl=["error","errors"];function Wl(e){return Yl.includes(e)}function Gl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),Et(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&Wl(t),s=Et(o.fullUrlBreadcrumbs);if(Fl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=qa(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=Et(o.fullUrlBreadcrumbs),s=r[a];if(!qt(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var O;(function(e){e.Search="search",e.Book="book"})(O||(O={}));function Hr(e){return e[0]===O.Book?"":e[1]?decodeURIComponent(e[1]):""}const Re={hash:void 0,paths:[O.Book],search:void 0},ql=0;function Xa(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==ql)}class Qt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class to extends Qt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Ze="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Xl=globalThis.history.pushState;function ro(...e){const t=Xl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ze)),t}const Zl=globalThis.history.replaceState;function no(...e){const t=Zl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ze)),t}function Kl(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===ro)throw new to("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===no)throw new to("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=ro,globalThis.history.replaceState=no,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ze))})}}function er(e){return!!e}var oo;(function(e){e.Upper="upper",e.Lower="lower"})(oo||(oo={}));function Jl(e,t){return e.split(t)}function Ql(e){return e?e instanceof Error?e.message:Rt(e,"message")?String(e.message):String(e):""}function ec(e){return!!e&&typeof e=="object"}const tc=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Rt(e,t){return e?tc.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ao(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Za(e,t,r=!1,n={}){const o=ao(e),a=new Set(ao(t));if(!r){const s=o.filter(i=>!a.has(i));if(s.length)throw new Error(`Test object has extra keys: ${s.join(", ")}`)}a.forEach(s=>{if(!Rt(e,s))throw new Error(`test object does not have key "${String(s)}" from expected shape.`);function i(u){throw new Error(`test object value at key "${String(s)}" did not match expected shape: ${u}`)}const l=e[s],c=t[s];n[s]||Ka(l,c,i,r,n[s]??{})})}function Ka(e,t,r,n,o){var i;const a=typeof e,s=typeof t;a!==s&&r(`type "${a}" did not match expected type "${s}"`);try{Rt(t,"constructor")&&(!Rt(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(i=e==null?void 0:e.constructor)==null?void 0:i.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{Ka(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${Ql(f)}`)}}).filter(er).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):ec(t)&&Za(e,t,n,o)}function rc(e){return Array.isArray(e)?"array":typeof e}function nc(e,t){return rc(e)===t}function oc({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function ac(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(er);return t.length?`?${t.join("&")}`:""}function sc(e){return oc({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=Jl(n,"="),s=a.join("");if(!(!s&&!o))return[o,s]}).filter(er)}function ic(e,t){const r=nc(e,"string")?new URL(e):e,n=sc(r.search),o=Object.fromEntries(n);return t&&Za(o,t),o}function lc(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?ic(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function Ja(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Qa({routeBase:e,windowPath:t}){if(!e)return"";const r=Ja(e);if(es({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Qa({routeBase:n,windowPath:t}):""}function es({routeBase:e,windowPath:t}){const r=Ja(e);return r?t.startsWith(`/${r}`):!1}class cc extends Qt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function ts(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const so=6;function io(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>so)throw new cc(`Route sanitization depth has exceed the max of ${so} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(ts(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class br extends Qt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function uc(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new br(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new br(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new br(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function dc(e,t,r=!1){const n=rs(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function rs(e,t){var i;const r=es({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?ac(e.search):"",o=(i=e.hash)!=null&&i.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(er).join("/")}${n}${a}`}function fc(e={}){uc(e),Kl();const t=e.routeBase?Qa({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>io(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&ts(l,u)))return dc(u,t,s)},createRoutesUrl(a){return rs(a,t)},getCurrentRawRoutes(){return lc(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Qt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(Ze,n),r=!0),a&&io(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(Ze,n),r=!1),s},sanitizationDepth:0};return o}function hc(e){return fc({routeBase:e,routeSanitizer(t){return{paths:mc(t.paths),hash:void 0,search:void 0}}})}function mc(e){const t=e[0];if(ei(t,O)){if(t===O.Book)return[O.Book,...e.slice(1)];if(t===O.Search)return e[1]?[t,e[1]]:[O.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Re.paths}const k=ke({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),pc={nav:{hover:{background:k["element-book-nav-hover-background-color"],foreground:k["element-book-nav-hover-foreground-color"]},active:{background:k["element-book-nav-active-background-color"],foreground:k["element-book-nav-active-foreground-color"]},selected:{background:k["element-book-nav-selected-background-color"],foreground:k["element-book-nav-selected-foreground-color"]}},accent:{icon:k["element-book-accent-icon-color"]},page:{background:k["element-book-page-background-color"],backgroundFaint1:k["element-book-page-background-faint-level-1-color"],backgroundFaint2:k["element-book-page-background-faint-level-2-color"],foreground:k["element-book-page-foreground-color"],foregroundFaint1:k["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:k["element-book-page-foreground-faint-level-2-color"]}};function gc(e,t){ns(e,t,pc)}function Nr(e){return Wt(e,"_$cssResult$")}function lo(e){return ra(e,["name","value","default"])&&qt(e.default,"string")&&Nr(e.name)&&Nr(e.value)}function ns(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Nr(o)){if(!lo(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);qi({forCssVar:a,onElement:e,toValue:String(o)})}else{if(lo(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ns(e,o,a)}})}function A(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function ot(e){return ie(e)==="string"}function ie(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Bt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function os(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function as(e){return e[e.length-1]}function Ht(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function ss(e,t,r){return(r-e)/(t-e)}function hn(e,t,r){return Ht(t[0],t[1],ss(e[0],e[1],r))}function is(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var bc=Object.freeze({__proto__:null,interpolate:Ht,interpolateInv:ss,isString:ot,last:as,mapRange:hn,multiplyMatrices:A,parseCoordGrammar:is,parseFunction:os,toPrecision:Bt,type:ie});class vc{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ce=new vc;var ee={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Z={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Or(e){return Array.isArray(e)?e:Z[e]}function Nt(e,t,r,n={}){if(e=Or(e),t=Or(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ce.run("chromatic-adaptation-start",o),o.M||(o.W1===Z.D65&&o.W2===Z.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Z.D50&&o.W2===Z.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ce.run("chromatic-adaptation-end",o),o.M)return A(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const yc=75e-6,D=class D{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?D.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Or(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:wc(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ce.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=yc}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=co(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=co(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=D.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=D.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(D.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof D)return t;if(ie(t)==="string"){let o=D.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return D.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=ie(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=D.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ie(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=D.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};sr(D,"registry",{}),sr(D,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=D;function wc(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function co(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=is(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=hn(i,l,a)),a=Bt(a,o),c&&(a+=c),a})}return e}var V=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class j extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=V),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=A(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Nt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Nt(this.base.white,this.white,r),A(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function ls(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(ce.run("parse-start",r),r.color)return r.color;if(r.parsed=os(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((g,v)=>r.parsed.args[v]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||as(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([p,g],v)=>{var J;let w=u.coordGrammar[v],T=(J=f[v])==null?void 0:J.type,M=w.find(z=>z==T);if(!M){let z=g.name||p;throw new TypeError(`${T} not allowed for ${z} in ${l}()`)}let C=M.range;T==="<percentage>"&&(C||(C=[0,1]));let N=g.range||g.refRange;return C&&N&&(f[v]=hn(C,N,f[v])),M})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function x(e){if(!e)throw new TypeError("Empty color reference");ot(e)&&(e=ls(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function at(e,t){return t=b.get(t),t.from(e)}function Y(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return at(e,r)[n]}function cs(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function ue(e,t,r){if(e=x(e),arguments.length===2&&ie(arguments[1])==="object"){let n=arguments[1];for(let o in n)ue(e,o,n[o])}else{typeof r=="function"&&(r=r(Y(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=at(e,n);a[o]=r,cs(e,n,a)}return e}var mn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:V,fromBase:e=>Nt(V.white,"D50",e),toBase:e=>Nt("D50",V.white,e),formats:{color:{}}});const $c=216/24389,uo=24/116,lt=24389/27;let vr=Z.D50;var I=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:vr,base:mn,fromBase(e){let r=e.map((n,o)=>n/vr[o]).map(n=>n>$c?Math.cbrt(n):(lt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>uo?Math.pow(t[0],3):(116*t[0]-16)/lt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/lt,t[2]>uo?Math.pow(t[2],3):(116*t[2]-16)/lt].map((n,o)=>n*vr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function tr(e){return(e%360+360)%360}function Ec(e,t){if(e==="raw")return t;let[r,n]=t.map(tr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Ke=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:I,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const fo=25**7,Ot=Math.PI,ho=180/Ot,Te=Ot/180;function jr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=I.from(e),l=Ke.from(I,[a,s,i])[1],[c,u,d]=I.from(t),f=Ke.from(I,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,g=.5*(1-Math.sqrt(p/(p+fo))),v=(1+g)*s,w=(1+g)*u,T=Math.sqrt(v**2+i**2),M=Math.sqrt(w**2+d**2),C=v===0&&i===0?0:Math.atan2(i,v),N=w===0&&d===0?0:Math.atan2(d,w);C<0&&(C+=2*Ot),N<0&&(N+=2*Ot),C*=ho,N*=ho;let J=c-a,z=M-T,S=N-C,H=C+N,or=Math.abs(S),je;T*M===0?je=0:or<=180?je=S:S>180?je=S-360:S<-180?je=S+360:console.log("the unthinkable has happened");let vn=2*Math.sqrt(M*T)*Math.sin(je*Te/2),Ds=(a+c)/2,ar=(T+M)/2,yn=Math.pow(ar,7),te;T*M===0?te=H:or<=180?te=H/2:H<360?te=(H+360)/2:te=(H-360)/2;let wn=(Ds-50)**2,Is=1+.015*wn/Math.sqrt(20+wn),$n=1+.045*ar,ze=1;ze-=.17*Math.cos((te-30)*Te),ze+=.24*Math.cos(2*te*Te),ze+=.32*Math.cos((3*te+6)*Te),ze-=.2*Math.cos((4*te-63)*Te);let En=1+.015*ar*ze,Us=30*Math.exp(-1*((te-275)/25)**2),Fs=2*Math.sqrt(yn/(yn+fo)),Vs=-1*Math.sin(2*Us*Te)*Fs,it=(J/(r*Is))**2;return it+=(z/(n*$n))**2,it+=(vn/(o*En))**2,it+=Vs*(z/(n*$n))*(vn/(o*En)),Math.sqrt(it)}const kc=75e-6;function Ye(e,t=e.space,{epsilon:r=kc}={}){e=x(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Je(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function de(e,{method:t=ee.gamut_mapping,space:r=e.space}={}){if(ot(arguments[1])&&(r=arguments[1]),r=b.get(r),Ye(e,r,{epsilon:0}))return x(e);let n=F(e,r);if(t!=="clip"&&!Ye(e,r)){let o=de(Je(n),{method:"clip",space:r});if(jr(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=F(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=Y(l,i);for(;h-f>d;){let p=Je(l);p=de(p,{space:r,method:"clip"}),jr(l,p)-2<d?f=Y(l,i):h=Y(l,i),ue(l,i,(f+h)/2)}n=F(l,r)}else n=o}if(t==="clip"||!Ye(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=F(n,e.space)),e.coords=n.coords,e}de.returns="color";function F(e,t,{inGamut:r}={}){e=x(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=de(o)),o}F.returns="color";function jt(e,{precision:t=ee.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=x(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!Ye(e)&&(i=de(Je(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>Bt(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Bt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const xc=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Tc=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var rr=new j({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:xc,fromXYZ_M:Tc,formats:{color:{}}});const ct=1.09929682680944,mo=.018053968510807;var us=new j({id:"rec2020",name:"REC.2020",base:rr,toBase(e){return e.map(function(t){return t<mo*4.5?t/4.5:Math.pow((t+ct-1)/ct,1/.45)})},fromBase(e){return e.map(function(t){return t>=mo?ct*Math.pow(t,.45)-(ct-1):4.5*t})},formats:{color:{}}});const Sc=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Cc=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ds=new j({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Sc,fromXYZ_M:Cc});const Mc=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],_c=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var fs=new j({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Mc,fromXYZ_M:_c,formats:{color:{}}}),po={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let go=Array(3).fill("<percentage> | <number>[0, 255]"),bo=Array(3).fill("<number>[0, 255]");var Qe=new j({id:"srgb",name:"sRGB",base:fs,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:go},rgb_number:{name:"rgb",commas:!0,coords:bo,noAlpha:!0},color:{},rgba:{coords:go,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:bo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=po.black,t.alpha=0):t.coords=po[e],t.coords)return t}}}}),hs=new j({id:"p3",name:"P3",base:ds,fromBase:Qe.fromBase,toBase:Qe.toBase,formats:{color:{id:"display-p3"}}});ee.display_space=Qe;if(typeof CSS<"u"&&CSS.supports)for(let e of[I,us,hs]){let t=e.getMinCoords(),n=jt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ee.display_space=e;break}}function Lc(e,{space:t=ee.display_space,...r}={}){let n=jt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ee.display_space)n=new String(n),n.color=e;else{let o=F(e,t);n=new String(jt(o,r)),n.color=o}return n}function ms(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Ac(e,t){return e=x(e),t=x(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function fe(e){return Y(e,[V,"y"])}function ps(e,t){ue(e,[V,"y"],t)}function Pc(e){Object.defineProperty(e.prototype,"luminance",{get(){return fe(this)},set(t){ps(this,t)}})}var Rc=Object.freeze({__proto__:null,getLuminance:fe,register:Pc,setLuminance:ps});function Bc(e,t){e=x(e),t=x(t);let r=Math.max(fe(e),0),n=Math.max(fe(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Hc=.56,Nc=.57,Oc=.62,jc=.65,vo=.022,zc=1.414,Dc=.1,Ic=5e-4,Uc=1.14,yo=.027,Fc=1.14;function wo(e){return e>=vo?e:e+(vo-e)**zc}function Se(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Vc(e,t){t=x(t),e=x(e);let r,n,o,a,s,i;t=F(t,"srgb"),[a,s,i]=t.coords;let l=Se(a)*.2126729+Se(s)*.7151522+Se(i)*.072175;e=F(e,"srgb"),[a,s,i]=e.coords;let c=Se(a)*.2126729+Se(s)*.7151522+Se(i)*.072175,u=wo(l),d=wo(c),f=d>u;return Math.abs(d-u)<Ic?n=0:f?(r=d**Hc-u**Nc,n=r*Uc):(r=d**jc-u**Oc,n=r*Fc),Math.abs(n)<Dc?o=0:n>0?o=n-yo:o=n+yo,o*100}function Yc(e,t){e=x(e),t=x(t);let r=Math.max(fe(e),0),n=Math.max(fe(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Wc=5e4;function Gc(e,t){e=x(e),t=x(t);let r=Math.max(fe(e),0),n=Math.max(fe(t),0);return n>r&&([r,n]=[n,r]),n===0?Wc:(r-n)/n}function qc(e,t){e=x(e),t=x(t);let r=Y(e,[I,"l"]),n=Y(t,[I,"l"]);return Math.abs(r-n)}const Xc=216/24389,$o=24/116,ut=24389/27;let yr=Z.D65;var zr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:yr,base:V,fromBase(e){let r=e.map((n,o)=>n/yr[o]).map(n=>n>Xc?Math.cbrt(n):(ut*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>$o?Math.pow(t[0],3):(116*t[0]-16)/ut,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ut,t[2]>$o?Math.pow(t[2],3):(116*t[2]-16)/ut].map((n,o)=>n*yr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const wr=Math.pow(5,.5)*.5+.5;function Zc(e,t){e=x(e),t=x(t);let r=Y(e,[zr,"l"]),n=Y(t,[zr,"l"]),o=Math.abs(Math.pow(r,wr)-Math.pow(n,wr)),a=Math.pow(o,1/wr)*Math.SQRT2-40;return a<7.5?0:a}var kt=Object.freeze({__proto__:null,contrastAPCA:Vc,contrastDeltaPhi:Zc,contrastLstar:qc,contrastMichelson:Yc,contrastWCAG21:Bc,contrastWeber:Gc});function Kc(e,t,r={}){ot(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(kt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=x(e),t=x(t);for(let a in kt)if("contrast"+n.toLowerCase()===a.toLowerCase())return kt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function gs(e){let[t,r,n]=at(e,V),o=t+15*r+3*n;return[4*t/o,9*r/o]}function bs(e){let[t,r,n]=at(e,V),o=t+r+n;return[t/o,r/o]}function Jc(e){Object.defineProperty(e.prototype,"uv",{get(){return gs(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return bs(this)}})}var Qc=Object.freeze({__proto__:null,register:Jc,uv:gs,xy:bs});function eu(e,t){return ms(e,t,"lab")}const tu=Math.PI,Eo=tu/180;function ru(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=I.from(e),[,i,l]=Ke.from(I,[o,a,s]),[c,u,d]=I.from(t),f=Ke.from(I,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,p=i-f,g=a-u,v=s-d,w=g**2+v**2-p**2,T=.511;o>=16&&(T=.040975*o/(1+.01765*o));let M=.0638*i/(1+.0131*i)+.638,C;Number.isNaN(l)&&(l=0),l>=164&&l<=345?C=.56+Math.abs(.2*Math.cos((l+168)*Eo)):C=.36+Math.abs(.4*Math.cos((l+35)*Eo));let N=Math.pow(i,4),J=Math.sqrt(N/(N+1900)),z=M*(J*C+1-J),S=(h/(r*T))**2;return S+=(p/(n*M))**2,S+=w/z**2,Math.sqrt(S)}const ko=203;var pn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:V,fromBase(e){return e.map(t=>Math.max(t*ko,0))},toBase(e){return e.map(t=>Math.max(t/ko,0))}});const dt=1.15,ft=.66,xo=2610/2**14,nu=2**14/2610,To=3424/2**12,So=2413/2**7,Co=2392/2**7,ou=1.7*2523/2**5,Mo=2**5/(1.7*2523),ht=-.56,$r=16295499532821565e-27,au=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],su=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],iu=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],lu=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var vs=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:pn,fromBase(e){let[t,r,n]=e,o=dt*t-(dt-1)*n,a=ft*r-(ft-1)*t,i=A(au,[o,a,n]).map(function(f){let h=To+So*(f/1e4)**xo,p=1+Co*(f/1e4)**xo;return(h/p)**ou}),[l,c,u]=A(iu,i);return[(1+ht)*l/(1+ht*l)-$r,c,u]},toBase(e){let[t,r,n]=e,o=(t+$r)/(1+ht-ht*(t+$r)),s=A(lu,[o,r,n]).map(function(f){let h=To-f**Mo,p=Co*f**Mo-So;return 1e4*(h/p)**nu}),[i,l,c]=A(su,s),u=(i+(dt-1)*c)/dt,d=(l+(ft-1)*u)/ft;return[u,d,c]},formats:{color:{}}}),Dr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:vs,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function cu(e,t){let[r,n,o]=Dr.from(e),[a,s,i]=Dr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const ys=3424/4096,ws=2413/128,$s=2392/128,_o=2610/16384,uu=2523/32,du=16384/2610,Lo=32/2523,fu=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],hu=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],mu=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],pu=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Ir=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:pn,fromBase(e){let t=A(fu,e);return gu(t)},toBase(e){let t=bu(e);return A(pu,t)},formats:{color:{}}});function gu(e){let t=e.map(function(r){let n=ys+ws*(r/1e4)**_o,o=1+$s*(r/1e4)**_o;return(n/o)**uu});return A(hu,t)}function bu(e){return A(mu,e).map(function(n){let o=Math.max(n**Lo-ys,0),a=ws-$s*n**Lo;return 1e4*(o/a)**du})}function vu(e,t){let[r,n,o]=Ir.from(e),[a,s,i]=Ir.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const yu=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],wu=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],$u=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Eu=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var zt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:V,fromBase(e){let r=A(yu,e).map(n=>Math.cbrt(n));return A($u,r)},toBase(e){let r=A(Eu,e).map(n=>n**3);return A(wu,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ku(e,t){let[r,n,o]=zt.from(e),[a,s,i]=zt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Dt={deltaE76:eu,deltaECMC:ru,deltaE2000:jr,deltaEJz:cu,deltaEITP:vu,deltaEOK:ku};function Fe(e,t,r={}){ot(r)&&(r={method:r});let{method:n=ee.deltaE,...o}=r;e=x(e),t=x(t);for(let a in Dt)if("deltae"+n.toLowerCase()===a.toLowerCase())return Dt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function xu(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ue(e,n,o=>o*(1+t))}function Tu(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ue(e,n,o=>o*(1-t))}var Su=Object.freeze({__proto__:null,darken:Tu,lighten:xu});function Es(e,t,r=.5,n={}){[e,t]=[x(e),x(t)],ie(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return st(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function ks(e,t,r={}){let n;gn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[x(e),x(t)],n=st(e,t,l));let c=Fe(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,p)=>{let g=p*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,p,g)=>{if(g===0)return 0;let v=Fe(p.color,d[g-1].color,a);return Math.max(h,v)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let p=d[h-1],g=d[h],v=(g.p+p.p)/2,w=n(v);f=Math.max(f,Fe(w,p.color),Fe(w,g.color)),d.splice(h,0,{p:v,color:n(v)}),h++}}}return d=d.map(f=>f.color),d}function st(e,t,r={}){if(gn(e)){let[l,c]=[e,t];return st(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=x(e),t=x(t),e=Je(e),t=Je(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[ee.interpolationSpace]||e.space,o=o?b.get(o):n,e=F(e,n),t=F(t,n),e=de(e),t=de(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Y(e,c),Y(t,c)];[u,d]=Ec(l,[u,d]),ue(e,c,u),ue(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let p=t.coords[h];return Ht(f,p,l)}),u=Ht(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=F(d,o)),d},{rangeArgs:i})}function gn(e){return ie(e)==="function"&&!!e.rangeArgs}ee.interpolationSpace="lab";function Cu(e){e.defineFunction("mix",Es,{returns:"color"}),e.defineFunction("range",st,{returns:"function<color>"}),e.defineFunction("steps",ks,{returns:"array<color>"})}var Mu=Object.freeze({__proto__:null,isRange:gn,mix:Es,range:st,register:Cu,steps:ks}),xs=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Qe,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ts=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:xs,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),_u=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ts,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Lu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Au=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Ss=new j({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Lu,fromXYZ_M:Au}),Pu=new j({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Ss,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Ru=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Bu=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Cs=new j({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:mn,toXYZ_M:Ru,fromXYZ_M:Bu});const Hu=1/512,Nu=16/512;var Ou=new j({id:"prophoto",name:"ProPhoto",base:Cs,toBase(e){return e.map(t=>t<Nu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Hu?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),ju=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:zt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),tr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Ao=203,Po=2610/2**14,zu=2**14/2610,Du=2523/2**5,Ro=2**5/2523,Bo=3424/2**12,Ho=2413/2**7,No=2392/2**7;var Iu=new j({id:"rec2100pq",name:"REC.2100-PQ",base:rr,toBase(e){return e.map(function(t){return(Math.max(t**Ro-Bo,0)/(Ho-No*t**Ro))**zu*1e4/Ao})},fromBase(e){return e.map(function(t){let r=Math.max(t*Ao/1e4,0),n=Bo+Ho*r**Po,o=1+No*r**Po;return(n/o)**Du})},formats:{color:{id:"rec2100-pq"}}});const Oo=.17883277,jo=.28466892,zo=.55991073,Er=3.7743;var Uu=new j({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:rr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Er:(Math.exp((t-zo)/Oo)+jo)/12*Er})},fromBase(e){return e.map(function(t){return t/=Er,t<=1/12?Math.sqrt(3*t):Oo*Math.log(12*t-jo)+zo})},formats:{color:{id:"rec2100-hlg"}}});const Ms={};ce.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=_s(e.W1,e.W2,e.options.method))});ce.add("chromatic-adaptation-end",e=>{e.M||(e.M=_s(e.W1,e.W2,e.options.method))});function nr({id:e,toCone_M:t,fromCone_M:r}){Ms[e]=arguments[0]}function _s(e,t,r="Bradford"){let n=Ms[r],[o,a,s]=A(n.toCone_M,e),[i,l,c]=A(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=A(u,n.toCone_M);return A(n.fromCone_M,d)}nr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});nr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});nr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});nr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Z,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Z.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Fu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Vu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ls=new j({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Z.ACES,toXYZ_M:Fu,fromXYZ_M:Vu,formats:{color:{}}});const mt=2**-16,kr=-.35828683,pt=(Math.log2(65504)+9.72)/17.52;var Yu=new j({id:"acescc",name:"ACEScc",coords:{r:{range:[kr,pt],name:"Red"},g:{range:[kr,pt],name:"Green"},b:{range:[kr,pt],name:"Blue"}},referred:"scene",base:Ls,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-mt)*2:r<pt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(mt)+9.72)/17.52:t<mt?(Math.log2(mt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Do=Object.freeze({__proto__:null,A98RGB:Pu,A98RGB_Linear:Ss,ACEScc:Yu,ACEScg:Ls,HSL:xs,HSV:Ts,HWB:_u,ICTCP:Ir,JzCzHz:Dr,Jzazbz:vs,LCH:Ke,Lab:I,Lab_D65:zr,OKLCH:ju,OKLab:zt,P3:hs,P3_Linear:ds,ProPhoto:Ou,ProPhoto_Linear:Cs,REC_2020:us,REC_2020_Linear:rr,REC_2100_HLG:Uu,REC_2100_PQ:Iu,XYZ_ABS_D65:pn,XYZ_D50:mn,XYZ_D65:V,sRGB:Qe,sRGB_Linear:fs});class y{constructor(...t){let r;t.length===1&&(r=x(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new y(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Lc(this,...t);return r.color=new y(r.color),r}static get(t,...r){return t instanceof y?t:new y(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=y.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return y.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>y.get(c)));return l};t in y||(y[t]=s),o&&(y.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)y.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(y);else for(let r in t)y.defineFunction(r,t[r])}}y.defineFunctions({get:Y,getAll:at,set:ue,setAll:cs,to:F,equals:Ac,inGamut:Ye,toGamut:de,distance:ms,toString:jt});Object.assign(y,{util:bc,hooks:ce,WHITES:Z,Space:b,spaces:b.registry,parse:ls,defaults:ee});for(let e of Object.keys(Do))b.register(Do[e]);for(let e in b.registry)Ur(e,b.registry[e]);ce.add("colorspace-init-end",e=>{var t;Ur(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ur(r,e)})});function Ur(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(y.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}y.extend(Dt);y.extend({deltaE:Fe});Object.assign(y,{deltaEMethods:Dt});y.extend(Su);y.extend({contrast:Kc});y.extend(Qc);y.extend(Rc);y.extend(Mu);y.extend(kt);function As(e){return St(e,(t,r)=>r instanceof y?X(r.toString({format:"hex"})):As(r))}const Wu="dodgerblue";function Fr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function xr({background:e,foreground:t}){return{background:e??new y(Fr(t)),foreground:t??new y(Fr(e))}}var It;(function(e){e.Dark="dark",e.Light="light"})(It||(It={}));function Gu(e){return e==="black"?"white":"black"}const qu={black:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")},white:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")}},Xu={black:{backgroundFaint1:new y("#666"),backgroundFaint2:new y("#444")},white:{backgroundFaint1:new y("#ccc"),backgroundFaint2:new y("#fafafa")}};function Io({themeColor:e=Wu,themeStyle:t=It.Light}={}){const r=new y(e),n=new y(t===It.Dark?"black":"white"),o=Fr(n),a=new y(o),s={nav:{hover:xr({background:r.clone().set({"hsl.l":93})}),active:xr({background:r.clone().set({"hsl.l":90})}),selected:xr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Xu[Gu(o)],foreground:a,...qu[o]}};return As(s)}const Ut=nn()("element-book-change-route"),Uo="vira-",{defineElement:Oe,defineElementNoInputs:yd}=Fa({assertInputs:e=>{if(!e.tagName.startsWith(Uo))throw new Error(`Tag name should start with '${Uo}' but got '${e.tagName}'`)}});var Fo;(function(e){e.Upper="upper",e.Lower="lower"})(Fo||(Fo={}));function Ps(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Ps.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Vo(e){const t=Ps();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const Zu="px";function Ku(e){return Ju({value:e,suffix:Zu})}function Ju({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const Rs=E`
    pointer-events: none;
    opacity: 0.3;
`,le=ke({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ft=ke({"vira-form-input-border-radius":"8px"}),Vt=ke({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":E`calc(${Ft["vira-form-input-border-radius"].value} + 4px)`});function Bs({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=X(Ku(n+r+t));return E`
        ${X(e)}::after {
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
    `}const Qu=E`
    padding: 0;
    margin: 0;
`,be=E`
    ${Qu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Vr=E`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,P=Oe()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>E`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Yr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Yr||(Yr={}));Oe()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Yr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>E`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Vr};
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
            ${Rs};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${be};
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
                color ${le["vira-interaction-animation-duration"].value},
                background-color
                    ${le["vira-interaction-animation-duration"].value},
                border-color ${le["vira-interaction-animation-duration"].value};
        }

        ${Bs({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${P} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?m`
                  <${P.assign({icon:e.icon})}></${P}>
              `:"",r=e.text?m`
                  <span class="text-template">${e.text}</span>
              `:"";return m`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Wr;(function(e){e.Header="header"})(Wr||(Wr={}));Oe()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>E`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${be};
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
    `,events:{expandChange:oe()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?E`
                  height: ${e.contentHeight}px;
              `:E`
                  height: 0;
              `;return m`
            <button
                class="header-wrapper"
                ${R("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Wr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Ua(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const $=ke({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function ae({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const ed=ae({name:"CloseX24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),td=ae({name:"Element16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ae({name:"Element24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const rd=ae({name:"Loader24Icon",svgTemplate:m`
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
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),nd=E`
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
`,Hs=ae({name:"LoaderAnimated24Icon",svgTemplate:m`
        <style>
            ${nd}
        </style>
        ${rd.svgTemplate}
    `}),od=ae({name:"Options24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${$["vira-icon-stroke-color"].value}"
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ad=ae({name:"StatusFailure24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});ae({name:"StatusInProgress24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${$["vira-icon-stroke-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width="calc(${$["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});ae({name:"StatusSuccess24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${$["vira-icon-fill-color"].value}
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var Yt;(function(e){e.Loading="loading",e.Error="error"})(Yt||(Yt={}));Oe()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:oe(),imageError:oe()},styles:({hostClasses:e})=>E`
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
                      <${P.assign({icon:ad})} class="error"></${P}>
                  </slot>
              `:t.loadedUrls[a]?void 0:m`
                    <slot class="status-wrapper" name=${Yt.Loading}>
                        <${P.assign({icon:Hs})}></${P}>
                    </slot>
                `;return m`
            ${Q(!!s,s)}
            <img
                class=${ya({hidden:!!s})}
                ${R("load",async()=>{e._debugLoadDelay&&await Vo(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[a]:!0}}),n(new o.imageLoad)})}
                ${R("error",async i=>{e._debugLoadDelay&&await Vo(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[a]:!0}}),n(new o.imageError(i.error))})}
                src=${a}
            />
        `}});function Gr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Gr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ns({value:e,allowed:t,blocked:r}){const n=t?Gr({input:e,matcher:t}):!0,o=r?Gr({input:e,matcher:r}):!1;return n&&!o}function Os(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Ns({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function sd({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=Ue(r,HTMLInputElement),s=r.data,i=t;let l=a.value??"";if(s)if(s.length===1)Ns({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=i,n(s));else{const{filtered:c,blocked:u}=Os({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),i!==l&&o(l)}const xt=Oe()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:oe(),inputBlocked:oe()},styles:({hostClasses:e,cssVars:t})=>E`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Vt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Rs};
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
                ${be};
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
                ${Vr};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${be};
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
                    ${le["vira-interaction-animation-duration"].value};
            }

            label {
                ${be};
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

            ${Bs({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${be};
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
                ${Vr};
            }

            .close-x-button {
                ${be};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Os({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?m`
                  <${P.assign({icon:e.icon})} class="left-side-icon"></${P}>
              `:"",i=e.fitText?E`
                  width: ${r.forcedInputWidth}px;
              `:"";return m`
            <label>
                ${s}
                ${Q(!!e.fitText,m`
                        <span
                            class="size-span"
                            ${Ua(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${R("input",l=>{sd({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Q(!!(e.showClearButton&&e.value),m`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${R("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${P.assign({icon:ed})}></${P}>
                        </button>
                    `)}
                ${Q(!!e.suffix,m`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});Oe()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>E`
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
    `,events:{routeChange:oe()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&Xa(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return m`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return m`
                <a href=${s} rel="noopener noreferrer" ${R("click",n)}>
                    <slot></slot>
                </a>
            `}}});const{defineElement:W,defineElementNoInputs:wd}=Fa(),U=W()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>E`
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
                ${R("click",a=>{(!e.router||Xa(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Ut(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function id(e,t){return e.entry.entryType===B.Root?!1:!!(e.entry.entryType===B.Page||se(t,e.fullUrlBreadcrumbs.slice(0,-1))||se(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const re=W()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>E`
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
            ${U.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${P} {
            display: inline-flex;
            color: ${k["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!id(r,e.selectedPath))return;const n=E`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return m`
                <li style=${n}>
                    <${U.assign({router:e.router,route:{paths:[O.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ya({"title-row":!0,selected:e.selectedPath?se(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Q(Le(r,B.ElementExample),m`
                                    <${P.assign({icon:td})}></${P}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${U}>
                </li>
            `});return m`
            <${U.assign({route:Re,router:e.router})}>
                <slot name=${q.NavHeader}>Book</slot>
            </${U}>
            <ul>
                ${t}
            </ul>
        `}});async function ld(e){await Sr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await hi(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const he=W()({tagName:"book-error",styles:E`
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
    `,renderCallback({inputs:e}){return(qt(e.message,"array")?e.message:[e.message]).map(r=>m`
                <p>${r}</p>
            `)}}),et=W()({tagName:"book-page-controls",events:{controlValueChange:oe()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>E`
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

        ${xt} {
            height: 24px;
            max-width: 128px;
        }

        ${P}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===_.Hidden)return"";const s=cd(e.currentValues[n],o,i=>{const l=qt(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return m`
                    <div class="control-wrapper">
                        ${Q(a===0,m`
                                <${P.assign({icon:od})}
                                    class="options-icon"
                                ></${P}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function cd(e,t,r){return xe(t,_.Hidden)?"":xe(t,_.Checkbox)?m`
            <input
                type="checkbox"
                .value=${e}
                ${R("input",n=>{const o=Ue(n,HTMLInputElement);r(o.checked)})}
            />
        `:xe(t,_.Color)?m`
            <input
                type="color"
                .value=${e}
                ${R("input",n=>{const o=Ue(n,HTMLInputElement);r(o.value)})}
            />
        `:xe(t,_.Text)?m`
            <${xt.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${R(xt.events.valueChange,n=>{r(n.detail)})}
            ></${xt}>
        `:xe(t,_.Number)?m`
            <input
                type="number"
                .value=${e}
                ${R("input",n=>{const o=Ue(n,HTMLInputElement);r(o.value)})}
            />
        `:xe(t,_.Dropdown)?m`
            <select
                .value=${e}
                ${R("input",n=>{const o=Ue(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>m`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:m`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Yo=W()({tagName:"book-breadcrumbs",styles:E`
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
                <${U.assign({route:{hash:void 0,search:void 0,paths:[O.Book,...s]},router:e.router})}>
                    ${r}
                </${U}>
                ${i}
            `}):m`
                &nbsp;
            `}}),Tr=W()({tagName:"book-breadcrumbs-bar",styles:E`
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
            ${Q(!!e.currentSearch,m`
                    &nbsp;
                `,m`
                    <${Yo.assign({currentRoute:e.currentRoute,router:e.router})}></${Yo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${R("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await oi(200),n.value===o&&(n.value?t(new Ut({paths:[O.Search,encodeURIComponent(n.value)]})):t(new Ut(Re)))})}
            />
        `}}),Wo=W()({tagName:"book-entry-description",styles:E`
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
            `)}}),Go=W()({tagName:"book-page-wrapper",styles:E`
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

        ${U} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?m`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:m`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[O.Book,...e.pageNode.fullUrlBreadcrumbs],n=na(e.pageNode.entry.errors);return n&&console.error(n),m`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${U.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${U}>
                    ${n?m`
                              <${he.assign({message:n.message})}></${he}>
                          `:m`
                              <${Wo.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Wo}>
                              <${et.assign({config:e.pageNode.entry.controls,currentValues:dn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${et}>
                          `}
                </div>
            </div>
        `}}),gt=W()({tagName:"book-element-example-controls",styles:E`
        :host {
            display: flex;
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[O.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return m`
            <${U.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${U}>
        `}}),qo=Symbol("unset-internal-state"),Xo=W()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:qo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw na(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===qo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return m`
                ${Q(!!t.elementExampleNode.entry.styles,m`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),m`
                <${he.assign({message:`${t.elementExampleNode.entry.title} failed: ${Gt(n)}`})}></${he}>
            `}},options:{allowPolymorphicState:!0}}),Zo=W()({tagName:"book-element-example-wrapper",styles:E`
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

        ${gt} {
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${gt} {
            color: ${k["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return m`
            <div class="individual-example-wrapper">
                <${gt.assign(ri(e,["currentPageControls"]))}></${gt}>
                <${Xo.assign(e)}></${Xo}>
            </div>
        `}});function js(e,t,r,n){const o=Br(r,n),a=[];if(o){const s=js(e,t,o,n);s&&a.push(s)}if(Le(r,B.Page)&&!e.includes(r)){const s=dn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:St(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function ud({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[m`
                No results
            `];const s=Mn(e,1)?js(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&Mn(e,1)?m`
                  <${et.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${et}>
              `:"",l=Ci(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Le(c,B.Page))return m`
                    <${Go.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Go}>
                `;if(Le(c,B.ElementExample)){const d=dn(o,c.fullUrlBreadcrumbs.slice(0,-1));return m`
                    <${Zo.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Zo}>
                `}else return Le(c,B.Root)?"":m`
                    <${he.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${he}>
                `});return[i,l].flat()}const Ce=W()({tagName:"book-entry-display",styles:E`
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

        ${Tr} {
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
    `,events:{loadingRender:oe()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Hr(e.currentRoute.paths),s=ud({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return m`
            <${Tr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${Tr}>

            ${Q(e.showLoading,m`
                    <div
                        ${Qn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${P.assign({icon:Hs})}></${P}>
                    </div>
                    ${Q(!!n.lastElement,m`
                            ${n.lastElement}
                            <slot name=${q.Footer}></slot>
                        `)}
                `,m`
                    <div
                        ${Qn(i=>{o({lastElement:i})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${q.Footer}></slot>
                `)}
        `}});function dd(e,t,r){const n=Ko(e,t);if(n.length)return n;r(Re);const o=Ko(e,Re.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Ko(e,t){return e.filter(r=>ui({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const bt=Da()({tagName:"element-book-app",events:{pathUpdate:oe()},stateInitStatic:{currentRoute:Re,router:void 0,loading:!0,colors:{config:void 0,theme:Io(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:E`
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

        ${Ce} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${re} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{Jo(e,Hr(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,h,p,g,v;t._debug&&console.info("rendering element-book app");function s(w){return{...e.currentRoute,...w}}function i(w){const T=s(w);return!se(e.currentRoute,T)}function l(w){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,w].filter(Xr).join(" - "))}function c(w){if(!i(w))return;const T=s(w);e.router?e.router.setRoutes(T):n({currentRoute:{...e.currentRoute,...T}}),t.elementBookRoutePaths&&!se(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(T.paths??[]))}try{if(t.elementBookRoutePaths&&!se(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const S=hc(t.internalRouterConfig.basePath);n({router:S}),S.addRouteListener(!0,H=>{n({currentRoute:H})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const w={themeColor:t.themeColor};if(!se(w,(f=e.colors)==null?void 0:f.config)){const S=Io(w);n({colors:{config:w,theme:S}}),gc(r,S)}const T=t._debug??!1,M=Dl({entries:t.entries,debug:T});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Ga(M.tree,{children:(p=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:p.children,controls:t.globalValues})}}));const C=Hr(e.currentRoute.paths),J=(C?Gl({flattenedNodes:M.flattenedNodes,searchQuery:C}):void 0)??dd(M.flattenedNodes,e.currentRoute.paths,c);l((g=J[0])==null?void 0:g.entry.title);const z=(v=e.treeBasedControls)==null?void 0:v.controls;return z?(t._debug&&console.info({currentControls:z}),m`
                <div
                    class="root"
                    ${R(Ut,async S=>{const H=S.detail;if(!i(H))return;if(n({loading:!0}),c(H),!(r.shadowRoot.querySelector(re.tagName)instanceof re))throw new Error(`Failed to find child '${re.tagName}'`);Jo(r,C,e.currentRoute)})}
                    ${R(et.events.controlValueChange,S=>{if(!e.treeBasedControls)return;const H=Ul(z,S.detail.fullUrlBreadcrumbs,S.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:H}})})}
                >
                    <${re.assign({flattenedNodes:M.flattenedNodes,router:e.router,selectedPath:C?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${q.NavHeader}
                            slot=${q.NavHeader}
                        ></slot>
                    </${re}>
                    <${Ce.assign({controls:z,currentNodes:J,currentRoute:e.currentRoute,debug:T,originalTree:M.tree,router:e.router,showLoading:e.loading})}
                        ${R(Ce.events.loadingRender,async S=>{await Sr();const H=r.shadowRoot.querySelector(Ce.tagName);H?H.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ce.tagName}' for scrolling.`),await Sr(),n({loading:!S.detail})})}
                    >
                        <slot
                            name=${q.Footer}
                            slot=${q.Footer}
                        ></slot>
                    </${Ce}>
                </div>
            `):m`
                    <${he.assign({message:"Failed to generate page controls."})}></${he}>
                `}catch(w){return console.error(w),m`
                <p class="error">${Gt(w)}</p>
            `}}});async function Jo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(re.tagName);if(!(n instanceof re))throw new Error(`Failed to find child '${re.tagName}'`);await ld(n)}const bn=di()({title:"Parent Page 1",parent:void 0,controls:{"Parent Control":{controlType:_.Color,initValue:"#33ccff"},"Hidden control":{controlType:_.Hidden,initValue:new RegExp("this can be anything")}}}),qr=Be({title:"Parent Page 2",parent:void 0}),Qo=Be({title:"Sub Page 1",parent:qr});function ea(e,t){return Be({title:`test ${e}`,parent:t,elementExamplesCallback({defineExample:n}){Array(20).fill(0).forEach((o,a)=>{n({title:`example ${e} ${a}`,renderCallback(){return"element example here"}})})}})}const ta=Be({title:"duplicate error page",parent:bn,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:e}){e({title:"example 1",renderCallback(){return"hi"}}),e({title:"example 2",renderCallback(){return"hi"}})}}),fd=Be({title:"test 3",controls:{thing:{initValue:"there",controlType:_.Text},thing2:{initValue:!1,controlType:_.Checkbox},thing3:{initValue:"hello",controlType:_.Dropdown,options:["hello","hi","yo"]}},parent:bn,elementExamplesCallback({defineExample:e}){e({title:"example 3 1",renderCallback(){return"hi"}}),e({title:"example 3 2",styles:E`
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
                `}}),e({title:"example with error",renderCallback(){return"broken"}}),e({title:"example with error",renderCallback(){return"broken"}})}}),zs=[bn,ea(0,qr),Qo,...Array(100).fill(0).map((e,t)=>ea(t+1,Qo)),ta,ta,fd,qr];console.info({entries:zs});Jt({tagName:"vir-app",styles:E`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${bt} {
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
                    ${R("input",r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("input element not found for input event");t({themeColor:n.value})})}
                    type="color"
                />
            </label>
            <${bt.assign({entries:zs,themeColor:e.themeColor,internalRouterConfig:{useInternalRouter:!0,basePath:"element-book"},_debug:!0,globalValues:{testGlobalControl:"it worked!"}})}
                ${R(bt.events.pathUpdate,r=>{t({paths:r.detail})})}
            >
                <h1 slot=${q.NavHeader}>My Title</h1>
                <footer slot=${q.Footer}>Example Footer</footer>
            </${bt}>
        `});
