var Ps=Object.defineProperty;var Bs=(e,t,r)=>t in e?Ps(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var or=(e,t,r)=>(Bs(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function qr(e){return!!e}function Ns(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Wo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Vt(r).trim()).join(`
`))}function Vt(e){return e?e instanceof Error?e.message:Yt(e,"message")?String(e.message):String(e):""}function Ls(e){return e instanceof Error?e:new Error(Vt(e))}function $n(e){return!!e&&typeof e=="object"}const Os=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Yt(e,t){return e?Os.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function qo(e,t){return e&&t.every(r=>Yt(e,r))}function St(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function zs(e){return Array.isArray(e)?"array":typeof e}function Wt(e,t){return zs(e)===t}function kn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const xn="Failed to compare objects using JSON.stringify";function Sn(e,t,r){return kn({source:e,errorHandler(n){if(r)return"";throw n}})===kn({source:t,errorHandler(n){if(r)return"";throw n}})}function ae(e,t,r={}){try{return e===t?!0:$n(e)&&$n(t)?Sn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ae(e[o],t[o])):!1:Sn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Ls(n);throw o.message.startsWith(xn)||(o.message=`${xn}: ${o.message}`),o}}function js(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Ds(e){return St(e).filter(t=>isNaN(Number(t)))}function Is(e){return Ds(e).map(r=>e[r])}function Hs(e,t){return Is(t).includes(e)}function Us(e,t){return St(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Fs(e,t){return Us(e,r=>!t.includes(r))}function Ct(e,t){let r=!1;const n=St(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(St(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Vs(e){const t=Go();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Go(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Go.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Cn(e,t){try{return Ys(e,t),!0}catch{return!1}}function Ys(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Ws(e,t){return Yt(e,"entryType")&&e.entryType===t}var P;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(P||(P={}));function Se(e,t){return e.controlType===t}var M;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(M||(M={}));const Xo=Symbol("any-type"),qs={[M.Checkbox]:!1,[M.Color]:"",[M.Dropdown]:"",[M.Hidden]:Xo,[M.Number]:0,[M.Text]:""};function Gs(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=qs[o.controlType];a!==Xo&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Gr(e,t){const r=Et(e.title);return e.parent?[...Gr(e.parent,!1),Et(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Et(e){return Ns(e).toLowerCase().replaceAll(/\s/g,"-")}function Xs({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Zs(){return e=>Be(e)}function Be(e){const t={...e,entryType:P.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:P.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(qr)};r.add(n.title),t.elementExamples[Et(o.title)]=o}}),t}var G;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(G||(G={}));function Zo(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Zo.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ks(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}async function Sr(e=1){const t=Zo();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const Js=globalThis.crypto;function Qs(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Js.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function ei(e){return ti(e,1)}async function ti(e,t){return new Promise(r=>{new IntersectionObserver((o,a)=>{Ks(o,1),a.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}function Ie(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ne=e=>(...t)=>({_$litDirective$:e,values:t});let ke=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ar;const _t=window,Re=_t.trustedTypes,En=Re?Re.createPolicy("lit-html",{createHTML:e=>e}):void 0,Tt="$lit$",re=`lit$${(Math.random()+"").slice(9)}$`,Xr="?"+re,ri=`<${Xr}>`,ve=document,Ye=()=>ve.createComment(""),We=e=>e===null||typeof e!="object"&&typeof e!="function",Ko=Array.isArray,Jo=e=>Ko(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",sr=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_n=/-->/g,Tn=/>/g,he=RegExp(`>|${sr}(?:([^\\s"'>=/]+)(${sr}*=${sr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mn=/'/g,An=/"/g,Qo=/^(?:script|style|textarea|title)$/i,ni=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),oi=ni(1),K=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Rn=new WeakMap,be=ve.createTreeWalker(ve,129,null,!1);function ea(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return En!==void 0?En.createHTML(t):t}const ta=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=je;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===je?u[1]==="!--"?s=_n:u[1]!==void 0?s=Tn:u[2]!==void 0?(Qo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=he):u[3]!==void 0&&(s=he):s===he?u[0]===">"?(s=o??je,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?he:u[3]==='"'?An:Mn):s===An||s===Mn?s=he:s===_n||s===Tn?s=je:(s=he,o=void 0);const h=s===he&&e[i+1].startsWith("/>")?" ":"";a+=s===je?l+ri:d>=0?(n.push(c),l.slice(0,d)+Tt+l.slice(d)+re+h):l+re+(d===-2?(n.push(void 0),i):h)}return[ea(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class qe{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=ta(t,r);if(this.el=qe.createElement(c,n),be.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=be.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Tt)||f.startsWith(re)){const h=u[s++];if(d.push(f),h!==void 0){const p=o.getAttribute(h.toLowerCase()+Tt).split(re),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:g[2],strings:p,ctor:g[1]==="."?na:g[1]==="?"?oa:g[1]==="@"?aa:et})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(Qo.test(o.tagName)){const d=o.textContent.split(re),f=d.length-1;if(f>0){o.textContent=Re?Re.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],Ye()),be.nextNode(),l.push({type:2,index:++a});o.append(d[f],Ye())}}}else if(o.nodeType===8)if(o.data===Xr)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(re,d+1))!==-1;)l.push({type:7,index:a}),d+=re.length-1}a++}}static createElement(t,r){const n=ve.createElement("template");return n.innerHTML=t,n}}function ye(e,t,r=e,n){var o,a,s,i;if(t===K)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=We(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=ye(e,l._$AS(e,t.values),l,n)),t}class ra{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:ve).importNode(n,!0);be.currentNode=a;let s=be.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new Le(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new sa(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=be.nextNode(),i++)}return be.currentNode=ve,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Le{constructor(t,r,n,o){var a;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ye(this,t,r),We(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==K&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Jo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&We(this._$AH)?this._$AA.nextSibling.data=t:this.$(ve.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=qe.createElement(ea(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new ra(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=Rn.get(t.strings);return r===void 0&&Rn.set(t.strings,r=new qe(t)),r}T(t){Ko(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Le(this.k(Ye()),this.k(Ye()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class et{constructor(t,r,n,o,a){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=ye(this,t,r,0),s=!We(t)||t!==this._$AH&&t!==K,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=ye(this,i[n+l],r,l),c===K&&(c=this._$AH[l]),s||(s=!We(c)||c!==this._$AH[l]),c===A?t=A:t!==A&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class na extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const ai=Re?Re.emptyScript:"";class oa extends et{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,ai):this.element.removeAttribute(this.name)}}class aa extends et{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=ye(this,t,r,0))!==null&&n!==void 0?n:A)===K)return;const o=this._$AH,a=t===A&&o!==A||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==A&&(o===A||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class sa{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ye(this,t)}}const si={O:Tt,P:re,A:Xr,C:1,M:ta,L:ra,R:Jo,D:ye,I:Le,V:et,H:oa,N:aa,U:na,F:sa},Pn=_t.litHtmlPolyfillSupport;Pn==null||Pn(qe,Le),((ar=_t.litHtmlVersions)!==null&&ar!==void 0?ar:_t.litHtmlVersions=[]).push("2.8.0");const ii=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Le(t.insertBefore(Ye(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:li}=si,Bn=()=>document.createComment(""),De=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(Bn(),a),i=o.insertBefore(Bn(),a);r=new li(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},pe=(e,t,r=e)=>(e._$AI(t,r),e),ci={},ui=(e,t=ci)=>e._$AH=t,di=e=>e._$AH,ir=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi=Ne(class extends ke{constructor(e){var t;if(super(e),e.type!==qt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return K}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},hi=Ne(class extends ke{constructor(e){if(super(e),e.type!==qt.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.ct(e,t,r).values}update(e,[t,r,n]){var o;const a=di(e),{values:s,keys:i}=this.ct(t,r,n);if(!Array.isArray(a))return this.ut=i,s;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,d,f=0,h=a.length-1,p=0,g=s.length-1;for(;f<=h&&p<=g;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[p])c[p]=pe(a[f],s[p]),f++,p++;else if(l[h]===i[g])c[g]=pe(a[h],s[g]),h--,g--;else if(l[f]===i[g])c[g]=pe(a[f],s[g]),De(e,c[g+1],a[f]),f++,g--;else if(l[h]===i[p])c[p]=pe(a[h],s[p]),De(e,a[f],a[h]),h--,p++;else if(u===void 0&&(u=Nn(i,p,g),d=Nn(l,f,h)),u.has(l[f]))if(u.has(l[h])){const v=d.get(i[p]),w=v!==void 0?a[v]:null;if(w===null){const C=De(e,a[f]);pe(C,s[p]),c[p]=C}else c[p]=pe(w,s[p]),De(e,a[f],w),a[v]=null;p++}else ir(a[h]),h--;else ir(a[f]),f++;for(;p<=g;){const v=De(e,c[g+1]);pe(v,s[p]),c[p++]=v}for(;f<=h;){const v=a[f++];v!==null&&ir(v)}return this.ut=i,ui(e,c),K}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Cr=class extends ke{constructor(t){if(super(t),this.et=A,t.type!==qt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this.ft=void 0,this.et=t;if(t===K)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Cr.directiveName="unsafeHTML",Cr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ln=class extends Cr{};Ln.directiveName="unsafeSVG",Ln.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pi(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=window,Zr=vt.ShadowRoot&&(vt.ShadyCSS===void 0||vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kr=Symbol(),On=new WeakMap;let ia=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Kr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Zr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=On.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&On.set(r,t))}return t}toString(){return this.cssText}};const X=e=>new ia(typeof e=="string"?e:e+"",void 0,Kr),Ue=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new ia(r,e,Kr)},mi=(e,t)=>{Zr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=vt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},zn=Zr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return X(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lr;const Mt=window,jn=Mt.trustedTypes,gi=jn?jn.emptyScript:"",Dn=Mt.reactiveElementPolyfillSupport,Er={toAttribute(e,t){switch(t){case Boolean:e=e?gi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},la=(e,t)=>t!==e&&(t==t||e==e),cr={attribute:!0,type:String,converter:Er,reflect:!1,hasChanged:la},_r="finalized";class Te extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=cr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||cr}static finalize(){if(this.hasOwnProperty(_r))return!1;this[_r]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(zn(o))}else t!==void 0&&r.push(zn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return mi(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=cr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Er).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Er;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||la)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Te[_r]=!0,Te.elementProperties=new Map,Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Dn==null||Dn({ReactiveElement:Te}),((lr=Mt.reactiveElementVersions)!==null&&lr!==void 0?lr:Mt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ur,dr;class Fe extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ii(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return K}}Fe.finalized=!0,Fe._$litElement$=!0,(ur=globalThis.litElementHydrateSupport)===null||ur===void 0||ur.call(globalThis,{LitElement:Fe});const In=globalThis.litElementPolyfillSupport;In==null||In({LitElement:Fe});((dr=globalThis.litElementVersions)!==null&&dr!==void 0?dr:globalThis.litElementVersions=[]).push("3.3.3");var bi=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(w){if(w!==void 0&&typeof w!="function")throw new TypeError("Function expected");return w}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var g in n)p[g]=g==="access"?{}:n[g];for(var g in n.access)p.access[g]=n.access[g];p.addInitializer=function(w){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(w||null))};var v=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(d=s(v.get))&&(u.get=d),(d=s(v.set))&&(u.set=d),(d=s(v.init))&&o.unshift(d)}else(d=s(v))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},vi=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},yi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function wi(){function e(t,r){return t}return e}let ca=(()=>{let e=[wi()],t,r=[],n,o=Fe;return n=class extends o{},yi(n,"DeclarativeElement"),(()=>{const a=typeof Symbol=="function"&&Symbol.metadata?Object.create(o[Symbol.metadata]??null):void 0;bi(null,t={value:n},e,{kind:"class",name:n.name,metadata:a},null,r),n=t.value,a&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),vi(n,r)})(),n})();function $i(e){return!!e}const ki={capitalizeFirstLetter:!1};function xi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Si(e,t){return t.capitalizeFirstLetter?xi(e):e}function Ci(e,t=ki){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Si(n,t)}function Ei(e){return e?e instanceof Error?e.message:Jr(e,"message")?String(e.message):String(e):""}function _i(e){return e instanceof Error?e:new Error(Ei(e))}function Ti(e){return!!e&&typeof e=="object"}const Mi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Jr(e,t){return e?Mi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function we(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ua(e,t){let r=!1;const n=we(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(we(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Hn(e){return e!==e.toUpperCase()}function Ai(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=Hn(s)||Hn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Ri(e){return!!e&&typeof e=="object"}function Un(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Pi(e){return Array.isArray(e)?"array":typeof e}function Bi(e,t){return Pi(e)===t}function Ni(e,t){let r=!1;const n=Un(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Un(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function xe(e){if(Ri(e))return Ni(e,(r,n)=>{if(!Bi(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Ai(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?X(r):r.startsWith("-")?Ue`-${X(r)}`:Ue`--${X(r)}`;return{name:s,value:Ue`var(${s}, ${X(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${xe.name}' function.`)}function Li({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},zi=(e,t,r)=>{t.constructor.createProperty(r,e)};function da(e){return(t,r)=>r!==void 0?zi(e,t,r):Oi(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fr;((fr=window.HTMLSlotElement)===null||fr===void 0?void 0:fr.prototype.assignedElements)!=null;const Qr=Symbol("key for ignoring inputs not having been set yet"),ji={[Qr]:!0,allowPolymorphicState:!1};function fa(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ca?!0:fa(r)}function ha(e,t){const r=e.instanceState;we(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&we(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Di(e)}function Di(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Fn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Ii extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function en(){return e=>{var t;return t=class extends Ii{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function $e(){return en()}function Hi(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=en()(r);return t[r]=n,t},{}):{}}const Ui="_elementVirStateSetup";function Fi(e){return Ti(e)?Ui in e:!1}function Vi(e,t){return e.includes(t)}function tt(e){return!!e&&typeof e=="object"}const Yi=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function yt(e,t){return e?Yi.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function At(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Tr(e){return Array.isArray(e)?"array":typeof e}function Me(e,t){return Tr(e)===t}function Wi(e,t){let r=!1;const n=At(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(At(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function qi(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Tr(e)===Tr(t)&&r}const pa=Symbol("and"),ma=Symbol("or"),ga=Symbol("exact"),ba=Symbol("enum"),tn=Symbol("unknown"),va="__vir__shape__definition__key__do__not__use__in__actual__objects";function ya(e){return yt(e,va)}const wa="__vir__shape__specifier__key__do__not__use__in__actual__objects",Gi=[pa,ma,ga,ba,tn];function Xi(){return Zi([],tn)}function Gt(e){return rt(e,ma)}function rn(e){return rt(e,pa)}function nn(e){return rt(e,ga)}function on(e){return rt(e,ba)}function an(e){return rt(e,tn)}function rt(e,t){const r=Xt(e);return!!r&&r.specifierType===t}function Zi(e,t){return{[wa]:!0,specifierType:t,parts:e}}function wt(e,t){const r=Xt(t);if(r){if(rn(r))return r.parts.every(n=>wt(e,n));if(Gt(r))return r.parts.some(n=>wt(e,n));if(nn(r))return tt(e)?wt(e,r.parts[0]):e===r.parts[0];if(on(r))return Object.values(r.parts[0]).some(n=>n===e);if(an(r))return!0}return qi(e,t)}function Xt(e){if(tt(e)&&yt(e,wa)){if(!yt(e,"parts")||!Me(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!yt(e,"specifierType")||!Vi(Gi,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Mr(e){return Ar(e)}function Ar(e){const t=Xt(e);if(t){if(Gt(t)||nn(t))return Ar(t.parts[0]);if(rn(t))return t.parts.reduce((r,n)=>Object.assign(r,Ar(n)),{});if(on(t))return Object.values(t.parts[0])[0];if(an(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return ya(e)?Mr(e.shape):e instanceof RegExp||Me(e,"array")?e:tt(e)?Wi(e,(r,n)=>Mr(n)):e}function Ki(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Mr(e),[va]:!0}}class q extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Ji(e,t,r={}){try{return Qi(e,t,r),!0}catch{return!1}}function Qi(e,t,r={}){me(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function $a(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function me(e,t,r,n){if(an(t))return!0;if(ya(t))return me(e,t.shape,r,n);const o=$a(r);if(Xt(e))throw new q(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!wt(e,t))throw new q(`Subject does not match shape definition at key ${o}`);if(Me(t,"function"))return Me(e,"function");if(tt(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(Gt(t))l=t.parts.some(c=>{try{const u=me(e,c,r,{...n});return Object.assign(i,u),!0}catch(u){if(u instanceof q)return!1;throw u}});else if(rn(t))l=t.parts.every(c=>{try{const u=me(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof q)return!1;throw u}});else if(nn(t)){const c=me(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(on(t))throw new q(`Cannot compare an enum specifier to an object at ${o}`);if(Me(t,"array")&&Me(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return me(c,f,[...r,u],n),!0}catch(h){if(h instanceof q)return!1;throw h}});return i[u]=d,d});else{const c=el({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l){const u=`Failed on key(s): ${Object.keys(i).filter(d=>!i[d]).join(",")}`;throw new q(u)}return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new q(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function el({keys:e,options:t,shape:r,subject:n}){const o=$a(e),a={};if(tt(r)){const s=new Set(At(n)),i=new Set(At(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new q(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=Gt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new q(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];me(c,u,[...e,l],t),a[l]=!0})}else throw new q(`shape definition at ${o} was not an object.`);return a}const tl=Ki({addListener(){return!1},removeListener(){return!1},value:Xi()});function hr(e){return Ji(e,tl,{allowExtraKeys:!0})}function rl(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Vn(e,t){const r=e;function n(s){t?rl(s,e,e.tagName):da()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=Fi(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(p){s[i]=p,r[i]=p}const f=e.observablePropertyListenerMap[i];if(u!==c&&hr(u)&&(f!=null&&f.length)&&u.removeListener(f),hr(c))if(f)c.addListener(f);else{let p=function(){e.requestUpdate()};var h=p;e.observablePropertyListenerMap[i]=p,c.addListener(p)}else hr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function nl(e){return e?ua(e,t=>t):{}}function ol({hostClassNames:e,cssVars:t}){return{hostClasses:ua(e,(r,n)=>({name:X(n),selector:X(`:host(.${n})`)})),cssVars:t}}function al({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&we(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function sl(e,t){function r(o){we(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var il=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Zt(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...ji,...e.options},n=Hi(e.events),o=nl(e.hostClasses);e.hostClasses&&Fn(e.tagName,e.hostClasses),e.cssVars&&Fn(e.tagName,e.cssVars);const a=e.cssVars?xe(e.cssVars):{},s=typeof e.styles=="function"?e.styles(ol({hostClassNames:o,cssVars:a})):e.styles||Ue``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends ca{createRenderParams(){return sl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this.renderCount++;try{fa(this)&&!this.haveInputsBeenSet&&!r[Qr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Zt.name}' to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return al({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=_i(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,this.lastRenderError=d,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){ha(this,u)}constructor(){var d;super(),this.lastRenderError=void 0,this.renderCount=0,this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=Vn(this,!1),this.instanceState=Vn(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};we(u).forEach(f=>{da()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},il(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:Ci(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function ka(){return e=>Zt({...e,options:{[Qr]:!1,...e.options}})}function xa(e,t){return Ge(e,t),e.element}function ll(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Ge(e,t){const r=ll(e),n=r?`: in ${r}`:"";if(e.type!==qt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function cl(e,t){return t?Yn(e,t):Yn(void 0,e)}const Yn=Ne(class extends ke{constructor(e){super(e),this.element=xa(e,"assign")}render(e,t){return ha(this.element,t),K}});function B(e,t){return ul(e,t)}const ul=Ne(class extends ke{constructor(e){super(e),this.element=xa(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),K}}),Wn="onDomCreated",qn=Ne(class extends ke{constructor(e){super(e),Ge(e,Wn)}update(e,[t]){Ge(e,Wn);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),pr="onResize",Sa=Ne(class extends ke{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Ge(e,pr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${pr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Ge(e,pr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function ne(e,t,r){return pi(e,()=>t,()=>r)}function Ca(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),ka()(r(n))),defineElementNoInputs:n=>(t(n),Zt(r(n)))}}function dl(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Rr(e){return Jr(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function sn(e){return Jr(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ea(e){return e.map(t=>Rr(t)?t.definition:t).filter(t=>sn(t))}const _a=new WeakMap;function fl(e,t){var o;const r=Ea(t);return(o=Ta(_a,[e,...r]).value)==null?void 0:o.template}function hl(e,t,r){const n=Ea(t);return Aa(_a,[e,...n],r)}function Ta(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Ma(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ta(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Ma(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Aa(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Ma(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Aa(l,t,r,n+1)}const pl=new WeakMap;function Ra(e,t,r){const n=fl(e,t),o=n??r();if(!n){const i=hl(e,t,o);if(i.result)pl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=dl(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Pa(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let g,v=[];if(typeof f=="string"&&(g=r(f,c,p),g)){o[d]=f+g.replacement,s.push(h);const C=g.getExtraValues;v=C?C(p):[],v.length&&C?(o[d]+=" ",v.forEach((T,_)=>{_&&o.push(" ")}),i.push(T=>{const _=T[h],O=C(_);return{index:h,values:O}}),o.push(c)):o[d]+=c}g||o.push(c);const w=e.raw[u];g?(a[d]=a[d]+g.replacement+w,v.length&&v.forEach(()=>{a.push("")})):a.push(w)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function ml(...[e,t,r]){if(sn(r))return{replacement:r.tagName,getExtraValues:void 0}}function gl(e,t){return Pa(e,t,ml)}function x(e,...t){const r=Ra(e,t,()=>gl(e,t));return Ue(r.strings,...r.values)}function bl(...[e,t,r]){const n=Rr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=sn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Rr(c)?c.inputs:void 0;return[o&&u?cl(u):void 0].filter($i)}}}function vl(e){}function yl(e){return Pa(e.strings,e.values,bl,vl)}function m(e,...t){const r=oi(e,...t),n=Ra(e,t,()=>yl(r));return{...r,strings:n.strings,values:n.values}}const wl={[P.ElementExample]:()=>[],[P.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Gs(e.controls,e.title)].filter(qr),[P.Root]:()=>[]},Rt="_isBookTreeNode",Ba=new Map;function $l(e){return Ba.get(e)}function kl(e,t){js(Ba,e,()=>t)}function Ae(e,t){return!!(Na(e)&&e.entry.entryType===t)}function Na(e){return!!(qo(e,[Rt,"entry"])&&e[Rt])}function xl(){return{[Rt]:!0,entry:{entryType:P.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Sl({entries:e,debug:t}){const r=$l(e);if(r)return r;const n=xl();e.forEach(s=>ln({tree:n,newEntry:s,debug:t,manuallyAdded:!0}));const o=La(n),a={tree:n,flattenedNodes:o};return kl(e,a),t&&console.info("element-book tree:",n),a}function Cl(e,t,r){if(!t.parent)return e;const n=Pr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),ln({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Pr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Gr(t,!1)}`);return o}function ln({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=wl[t.entryType](t);t.errors.push(...o);const a=Cl(e,t,r),s=Et(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[Rt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,Ws(t,P.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>ln({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Pr(e,t){const r=Na(e)?e.fullUrlBreadcrumbs.slice(0,-1):Gr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function La(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>La(o));return[e,...r].flat()}function cn(e,t){return un(e,["",...t],void 0)}function un(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const a=e.children[o||""],s=a&&un(a,n,r);return{...e.controls,...s}}function El(e,t,r){const n={...e};return un(n,["",...t],r),n}function Oa(e,t){const r=(t==null?void 0:t.controls)||(Ae(e,P.Page)?Ct(e.entry.controls,(o,a)=>a.initValue):{});return{children:Ct(e.children,(o,a)=>{var s;return Oa(a,(s=t==null?void 0:t.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function _l({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const Tl=Qs(32);function $t(e){return e.join(Tl)}function za(e){if(!e.length)return[];const t=$t(e),r=za(e.slice(0,-1));return[t,...r]}const Ml=["error","errors"];function Al(e){return Ml.includes(e)}function Rl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(s=>(n(s),$t(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return e.forEach(o=>{const a=o.entry.errors.length&&Al(t),s=$t(o.fullUrlBreadcrumbs);if(_l({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||a||r[s]){const l=za(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[s]=!1}),e.filter(o=>{const a=$t(o.fullUrlBreadcrumbs),s=r[a];if(!Wt(s,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var z;(function(e){e.Search="search",e.Book="book"})(z||(z={}));function Br(e){return e[0]===z.Book?"":e[1]?decodeURIComponent(e[1]):""}const Pe={hash:void 0,paths:[z.Book],search:void 0},Pl=0;function ja(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Pl)}class Kt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Gn extends Kt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Xe="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Bl=globalThis.history.pushState;function Xn(...e){const t=Bl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Xe)),t}const Nl=globalThis.history.replaceState;function Zn(...e){const t=Nl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Xe)),t}function Ll(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Xn)throw new Gn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Zn)throw new Gn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Xn,globalThis.history.replaceState=Zn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Xe))})}}function Jt(e){return!!e}function Ol(e,t){return e.split(t)}function zl(e){return e?e instanceof Error?e.message:Pt(e,"message")?String(e.message):String(e):""}function jl(e){return!!e&&typeof e=="object"}const Dl=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Pt(e,t){return e?Dl.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Kn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Da(e,t,r=!1,n={}){const o=Kn(e),a=new Set(Kn(t));if(!r){const s=o.filter(i=>!a.has(i));if(s.length)throw new Error(`Test object has extra keys: ${s.join(", ")}`)}a.forEach(s=>{if(!Pt(e,s))throw new Error(`test object does not have key "${String(s)}" from expected shape.`);function i(u){throw new Error(`test object value at key "${String(s)}" did not match expected shape: ${u}`)}const l=e[s],c=t[s];n[s]||Ia(l,c,i,r,n[s]??{})})}function Ia(e,t,r,n,o){var i;const a=typeof e,s=typeof t;a!==s&&r(`type "${a}" did not match expected type "${s}"`);try{Pt(t,"constructor")&&(!Pt(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(i=e==null?void 0:e.constructor)==null?void 0:i.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(d=>{try{Ia(l,d,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${zl(f)}`)}}).filter(Jt).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):jl(t)&&Da(e,t,n,o)}function Il(e){return Array.isArray(e)?"array":typeof e}function Hl(e,t){return Il(e)===t}function Ul({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function Fl(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(Jt);return t.length?`?${t.join("&")}`:""}function Vl(e){return Ul({value:e,prefix:"?"}).split("&").map(n=>{const[o,...a]=Ol(n,"="),s=a.join("");if(!(!s&&!o))return[o,s]}).filter(Jt)}function Yl(e,t){const r=Hl(e,"string")?new URL(e):e,n=Vl(r.search),o=Object.fromEntries(n);return t&&Da(o,t),o}function Wl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?Yl(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:o,hash:a}}function Ha(e){return e.replace(/(?:^\/|\/+$)/g,"")}function Ua({routeBase:e,windowPath:t}){if(!e)return"";const r=Ha(e);if(Fa({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Ua({routeBase:n,windowPath:t}):""}function Fa({routeBase:e,windowPath:t}){const r=Ha(e);return r?t.startsWith(`/${r}`):!1}class ql extends Kt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Va(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Jn=6;function Qn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Jn)throw new ql(`Route sanitization depth has exceed the max of ${Jn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Va(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class mr extends Kt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Gl(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new mr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new mr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new mr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Xl(e,t,r=!1){const n=Ya(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ya(e,t){var i;const r=Fa({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Fl(e.search):"",o=(i=e.hash)!=null&&i.startsWith("#")?"":"#",a=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(Jt).join("/")}${n}${a}`}function Zl(e={}){Gl(e),Ll();const t=e.routeBase?Ua({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Qn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&Va(l,u)))return Xl(u,t,s)},createRoutesUrl(a){return Ya(a,t)},getCurrentRawRoutes(){return Wl(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new Kt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(Xe,n),r=!0),a&&Qn(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(Xe,n),r=!1),s},sanitizationDepth:0};return o}function Kl(e){return Zl({routeBase:e,routeSanitizer(t){return{paths:Jl(t.paths),hash:void 0,search:void 0}}})}function Jl(e){const t=e[0];if(Hs(t,z)){if(t===z.Book)return[z.Book,...e.slice(1)];if(t===z.Search)return e[1]?[t,e[1]]:[z.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Pe.paths}const k=xe({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Ql={nav:{hover:{background:k["element-book-nav-hover-background-color"],foreground:k["element-book-nav-hover-foreground-color"]},active:{background:k["element-book-nav-active-background-color"],foreground:k["element-book-nav-active-foreground-color"]},selected:{background:k["element-book-nav-selected-background-color"],foreground:k["element-book-nav-selected-foreground-color"]}},accent:{icon:k["element-book-accent-icon-color"]},page:{background:k["element-book-page-background-color"],backgroundFaint1:k["element-book-page-background-faint-level-1-color"],backgroundFaint2:k["element-book-page-background-faint-level-2-color"],foreground:k["element-book-page-foreground-color"],foregroundFaint1:k["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:k["element-book-page-foreground-faint-level-2-color"]}};function ec(e,t){Wa(e,t,Ql)}function Nr(e){return Yt(e,"_$cssResult$")}function eo(e){return qo(e,["name","value","default"])&&Wt(e.default,"string")&&Nr(e.name)&&Nr(e.value)}function Wa(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Nr(o)){if(!eo(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Li({forCssVar:a,onElement:e,toValue:String(o)})}else{if(eo(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Wa(e,o,a)}})}function R(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function nt(e){return se(e)==="string"}function se(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Bt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function qa(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Ga(e){return e[e.length-1]}function Nt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Xa(e,t,r){return(r-e)/(t-e)}function dn(e,t,r){return Nt(t[0],t[1],Xa(e[0],e[1],r))}function Za(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var tc=Object.freeze({__proto__:null,interpolate:Nt,interpolateInv:Xa,isString:nt,last:Ga,mapRange:dn,multiplyMatrices:R,parseCoordGrammar:Za,parseFunction:qa,toPrecision:Bt,type:se});class rc{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const le=new rc;var Q={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Z={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Lr(e){return Array.isArray(e)?e:Z[e]}function Lt(e,t,r,n={}){if(e=Lr(e),t=Lr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(le.run("chromatic-adaptation-start",o),o.M||(o.W1===Z.D65&&o.W2===Z.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Z.D50&&o.W2===Z.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),le.run("chromatic-adaptation-end",o),o.M)return R(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const nc=75e-6,I=class I{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?I.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Lr(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:oc(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),le.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=nc}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=to(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=to(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=I.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=I.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(I.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof I)return t;if(se(t)==="string"){let o=I.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return I.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=se(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=I.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=se(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=I.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};or(I,"registry",{}),or(I,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=I;function oc(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function to(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Za(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=dn(i,l,a)),a=Bt(a,o),c&&(a+=c),a})}return e}var V=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class j extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=V),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=R(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Lt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Lt(this.base.white,this.white,r),R(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ka(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(le.run("parse-start",r),r.color)return r.color;if(r.parsed=qa(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((g,v)=>r.parsed.args[v]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||Ga(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([p,g],v)=>{var J;let w=u.coordGrammar[v],C=(J=f[v])==null?void 0:J.type,T=w.find(D=>D==C);if(!T){let D=g.name||p;throw new TypeError(`${C} not allowed for ${D} in ${l}()`)}let _=T.range;C==="<percentage>"&&(_||(_=[0,1]));let O=g.range||g.refRange;return _&&O&&(f[v]=dn(_,O,f[v])),T})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function S(e){if(!e)throw new TypeError("Empty color reference");nt(e)&&(e=Ka(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function ot(e,t){return t=b.get(t),t.from(e)}function Y(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return ot(e,r)[n]}function Ja(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function ce(e,t,r){if(e=S(e),arguments.length===2&&se(arguments[1])==="object"){let n=arguments[1];for(let o in n)ce(e,o,n[o])}else{typeof r=="function"&&(r=r(Y(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=ot(e,n);a[o]=r,Ja(e,n,a)}return e}var fn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:V,fromBase:e=>Lt(V.white,"D50",e),toBase:e=>Lt("D50",V.white,e),formats:{color:{}}});const ac=216/24389,ro=24/116,lt=24389/27;let gr=Z.D50;var H=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:gr,base:fn,fromBase(e){let r=e.map((n,o)=>n/gr[o]).map(n=>n>ac?Math.cbrt(n):(lt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ro?Math.pow(t[0],3):(116*t[0]-16)/lt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/lt,t[2]>ro?Math.pow(t[2],3):(116*t[2]-16)/lt].map((n,o)=>n*gr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Qt(e){return(e%360+360)%360}function sc(e,t){if(e==="raw")return t;let[r,n]=t.map(Qt),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Ze=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:H,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Qt(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const no=25**7,Ot=Math.PI,oo=180/Ot,Ce=Ot/180;function Or(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=H.from(e),l=Ze.from(H,[a,s,i])[1],[c,u,d]=H.from(t),f=Ze.from(H,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,g=.5*(1-Math.sqrt(p/(p+no))),v=(1+g)*s,w=(1+g)*u,C=Math.sqrt(v**2+i**2),T=Math.sqrt(w**2+d**2),_=v===0&&i===0?0:Math.atan2(i,v),O=w===0&&d===0?0:Math.atan2(d,w);_<0&&(_+=2*Ot),O<0&&(O+=2*Ot),_*=oo,O*=oo;let J=c-a,D=T-C,E=O-_,N=_+O,rr=Math.abs(E),Oe;C*T===0?Oe=0:rr<=180?Oe=E:E>180?Oe=E-360:E<-180?Oe=E+360:console.log("the unthinkable has happened");let gn=2*Math.sqrt(T*C)*Math.sin(Oe*Ce/2),_s=(a+c)/2,nr=(C+T)/2,bn=Math.pow(nr,7),ee;C*T===0?ee=N:rr<=180?ee=N/2:N<360?ee=(N+360)/2:ee=(N-360)/2;let vn=(_s-50)**2,Ts=1+.015*vn/Math.sqrt(20+vn),yn=1+.045*nr,ze=1;ze-=.17*Math.cos((ee-30)*Ce),ze+=.24*Math.cos(2*ee*Ce),ze+=.32*Math.cos((3*ee+6)*Ce),ze-=.2*Math.cos((4*ee-63)*Ce);let wn=1+.015*nr*ze,Ms=30*Math.exp(-1*((ee-275)/25)**2),As=2*Math.sqrt(bn/(bn+no)),Rs=-1*Math.sin(2*Ms*Ce)*As,it=(J/(r*Ts))**2;return it+=(D/(n*yn))**2,it+=(gn/(o*wn))**2,it+=Rs*(D/(n*yn))*(gn/(o*wn)),Math.sqrt(it)}const ic=75e-6;function Ve(e,t=e.space,{epsilon:r=ic}={}){e=S(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Ke(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ue(e,{method:t=Q.gamut_mapping,space:r=e.space}={}){if(nt(arguments[1])&&(r=arguments[1]),r=b.get(r),Ve(e,r,{epsilon:0}))return S(e);let n=F(e,r);if(t!=="clip"&&!Ve(e,r)){let o=ue(Ke(n),{method:"clip",space:r});if(Or(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=F(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=Y(l,i);for(;h-f>d;){let p=Ke(l);p=ue(p,{space:r,method:"clip"}),Or(l,p)-2<d?f=Y(l,i):h=Y(l,i),ce(l,i,(f+h)/2)}n=F(l,r)}else n=o}if(t==="clip"||!Ve(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=F(n,e.space)),e.coords=n.coords,e}ue.returns="color";function F(e,t,{inGamut:r}={}){e=S(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ue(o)),o}F.returns="color";function zt(e,{precision:t=Q.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=S(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!Ve(e)&&(i=ue(Ke(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>Bt(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Bt(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const lc=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],cc=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var er=new j({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:lc,fromXYZ_M:cc,formats:{color:{}}});const ct=1.09929682680944,ao=.018053968510807;var Qa=new j({id:"rec2020",name:"REC.2020",base:er,toBase(e){return e.map(function(t){return t<ao*4.5?t/4.5:Math.pow((t+ct-1)/ct,1/.45)})},fromBase(e){return e.map(function(t){return t>=ao?ct*Math.pow(t,.45)-(ct-1):4.5*t})},formats:{color:{}}});const uc=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],dc=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var es=new j({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:uc,fromXYZ_M:dc});const fc=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],hc=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ts=new j({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:fc,fromXYZ_M:hc,formats:{color:{}}}),so={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let io=Array(3).fill("<percentage> | <number>[0, 255]"),lo=Array(3).fill("<number>[0, 255]");var Je=new j({id:"srgb",name:"sRGB",base:ts,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:io},rgb_number:{name:"rgb",commas:!0,coords:lo,noAlpha:!0},color:{},rgba:{coords:io,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:lo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=so.black,t.alpha=0):t.coords=so[e],t.coords)return t}}}}),rs=new j({id:"p3",name:"P3",base:es,fromBase:Je.fromBase,toBase:Je.toBase,formats:{color:{id:"display-p3"}}});Q.display_space=Je;if(typeof CSS<"u"&&CSS.supports)for(let e of[H,Qa,rs]){let t=e.getMinCoords(),n=zt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Q.display_space=e;break}}function pc(e,{space:t=Q.display_space,...r}={}){let n=zt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Q.display_space)n=new String(n),n.color=e;else{let o=F(e,t);n=new String(zt(o,r)),n.color=o}return n}function ns(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function mc(e,t){return e=S(e),t=S(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function de(e){return Y(e,[V,"y"])}function os(e,t){ce(e,[V,"y"],t)}function gc(e){Object.defineProperty(e.prototype,"luminance",{get(){return de(this)},set(t){os(this,t)}})}var bc=Object.freeze({__proto__:null,getLuminance:de,register:gc,setLuminance:os});function vc(e,t){e=S(e),t=S(t);let r=Math.max(de(e),0),n=Math.max(de(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const yc=.56,wc=.57,$c=.62,kc=.65,co=.022,xc=1.414,Sc=.1,Cc=5e-4,Ec=1.14,uo=.027,_c=1.14;function fo(e){return e>=co?e:e+(co-e)**xc}function Ee(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Tc(e,t){t=S(t),e=S(e);let r,n,o,a,s,i;t=F(t,"srgb"),[a,s,i]=t.coords;let l=Ee(a)*.2126729+Ee(s)*.7151522+Ee(i)*.072175;e=F(e,"srgb"),[a,s,i]=e.coords;let c=Ee(a)*.2126729+Ee(s)*.7151522+Ee(i)*.072175,u=fo(l),d=fo(c),f=d>u;return Math.abs(d-u)<Cc?n=0:f?(r=d**yc-u**wc,n=r*Ec):(r=d**kc-u**$c,n=r*_c),Math.abs(n)<Sc?o=0:n>0?o=n-uo:o=n+uo,o*100}function Mc(e,t){e=S(e),t=S(t);let r=Math.max(de(e),0),n=Math.max(de(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Ac=5e4;function Rc(e,t){e=S(e),t=S(t);let r=Math.max(de(e),0),n=Math.max(de(t),0);return n>r&&([r,n]=[n,r]),n===0?Ac:(r-n)/n}function Pc(e,t){e=S(e),t=S(t);let r=Y(e,[H,"l"]),n=Y(t,[H,"l"]);return Math.abs(r-n)}const Bc=216/24389,ho=24/116,ut=24389/27;let br=Z.D65;var zr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:br,base:V,fromBase(e){let r=e.map((n,o)=>n/br[o]).map(n=>n>Bc?Math.cbrt(n):(ut*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ho?Math.pow(t[0],3):(116*t[0]-16)/ut,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ut,t[2]>ho?Math.pow(t[2],3):(116*t[2]-16)/ut].map((n,o)=>n*br[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const vr=Math.pow(5,.5)*.5+.5;function Nc(e,t){e=S(e),t=S(t);let r=Y(e,[zr,"l"]),n=Y(t,[zr,"l"]),o=Math.abs(Math.pow(r,vr)-Math.pow(n,vr)),a=Math.pow(o,1/vr)*Math.SQRT2-40;return a<7.5?0:a}var kt=Object.freeze({__proto__:null,contrastAPCA:Tc,contrastDeltaPhi:Nc,contrastLstar:Pc,contrastMichelson:Mc,contrastWCAG21:vc,contrastWeber:Rc});function Lc(e,t,r={}){nt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(kt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=S(e),t=S(t);for(let a in kt)if("contrast"+n.toLowerCase()===a.toLowerCase())return kt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function as(e){let[t,r,n]=ot(e,V),o=t+15*r+3*n;return[4*t/o,9*r/o]}function ss(e){let[t,r,n]=ot(e,V),o=t+r+n;return[t/o,r/o]}function Oc(e){Object.defineProperty(e.prototype,"uv",{get(){return as(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return ss(this)}})}var zc=Object.freeze({__proto__:null,register:Oc,uv:as,xy:ss});function jc(e,t){return ns(e,t,"lab")}const Dc=Math.PI,po=Dc/180;function Ic(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=H.from(e),[,i,l]=Ze.from(H,[o,a,s]),[c,u,d]=H.from(t),f=Ze.from(H,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,p=i-f,g=a-u,v=s-d,w=g**2+v**2-p**2,C=.511;o>=16&&(C=.040975*o/(1+.01765*o));let T=.0638*i/(1+.0131*i)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*po)):_=.36+Math.abs(.4*Math.cos((l+35)*po));let O=Math.pow(i,4),J=Math.sqrt(O/(O+1900)),D=T*(J*_+1-J),E=(h/(r*C))**2;return E+=(p/(n*T))**2,E+=w/D**2,Math.sqrt(E)}const mo=203;var hn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:V,fromBase(e){return e.map(t=>Math.max(t*mo,0))},toBase(e){return e.map(t=>Math.max(t/mo,0))}});const dt=1.15,ft=.66,go=2610/2**14,Hc=2**14/2610,bo=3424/2**12,vo=2413/2**7,yo=2392/2**7,Uc=1.7*2523/2**5,wo=2**5/(1.7*2523),ht=-.56,yr=16295499532821565e-27,Fc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Vc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Yc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Wc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var is=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:hn,fromBase(e){let[t,r,n]=e,o=dt*t-(dt-1)*n,a=ft*r-(ft-1)*t,i=R(Fc,[o,a,n]).map(function(f){let h=bo+vo*(f/1e4)**go,p=1+yo*(f/1e4)**go;return(h/p)**Uc}),[l,c,u]=R(Yc,i);return[(1+ht)*l/(1+ht*l)-yr,c,u]},toBase(e){let[t,r,n]=e,o=(t+yr)/(1+ht-ht*(t+yr)),s=R(Wc,[o,r,n]).map(function(f){let h=bo-f**wo,p=yo*f**wo-vo;return 1e4*(h/p)**Hc}),[i,l,c]=R(Vc,s),u=(i+(dt-1)*c)/dt,d=(l+(ft-1)*u)/ft;return[u,d,c]},formats:{color:{}}}),jr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:is,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Qt(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function qc(e,t){let[r,n,o]=jr.from(e),[a,s,i]=jr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const ls=3424/4096,cs=2413/128,us=2392/128,$o=2610/16384,Gc=2523/32,Xc=16384/2610,ko=32/2523,Zc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Kc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Jc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Qc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Dr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:hn,fromBase(e){let t=R(Zc,e);return eu(t)},toBase(e){let t=tu(e);return R(Qc,t)},formats:{color:{}}});function eu(e){let t=e.map(function(r){let n=ls+cs*(r/1e4)**$o,o=1+us*(r/1e4)**$o;return(n/o)**Gc});return R(Kc,t)}function tu(e){return R(Jc,e).map(function(n){let o=Math.max(n**ko-ls,0),a=cs-us*n**ko;return 1e4*(o/a)**Xc})}function ru(e,t){let[r,n,o]=Dr.from(e),[a,s,i]=Dr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const nu=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],ou=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],au=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],su=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var jt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:V,fromBase(e){let r=R(nu,e).map(n=>Math.cbrt(n));return R(au,r)},toBase(e){let r=R(su,e).map(n=>n**3);return R(ou,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function iu(e,t){let[r,n,o]=jt.from(e),[a,s,i]=jt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Dt={deltaE76:jc,deltaECMC:Ic,deltaE2000:Or,deltaEJz:qc,deltaEITP:ru,deltaEOK:iu};function He(e,t,r={}){nt(r)&&(r={method:r});let{method:n=Q.deltaE,...o}=r;e=S(e),t=S(t);for(let a in Dt)if("deltae"+n.toLowerCase()===a.toLowerCase())return Dt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function lu(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ce(e,n,o=>o*(1+t))}function cu(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ce(e,n,o=>o*(1-t))}var uu=Object.freeze({__proto__:null,darken:cu,lighten:lu});function ds(e,t,r=.5,n={}){[e,t]=[S(e),S(t)],se(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return at(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function fs(e,t,r={}){let n;pn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[S(e),S(t)],n=at(e,t,l));let c=He(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,p)=>{let g=p*f;return{p:g,color:n(g)}})}if(o>0){let f=d.reduce((h,p,g)=>{if(g===0)return 0;let v=He(p.color,d[g-1].color,a);return Math.max(h,v)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let p=d[h-1],g=d[h],v=(g.p+p.p)/2,w=n(v);f=Math.max(f,He(w,p.color),He(w,g.color)),d.splice(h,0,{p:v,color:n(v)}),h++}}}return d=d.map(f=>f.color),d}function at(e,t,r={}){if(pn(e)){let[l,c]=[e,t];return at(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=S(e),t=S(t),e=Ke(e),t=Ke(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[Q.interpolationSpace]||e.space,o=o?b.get(o):n,e=F(e,n),t=F(t,n),e=ue(e),t=ue(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[Y(e,c),Y(t,c)];[u,d]=sc(l,[u,d]),ce(e,c,u),ce(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let p=t.coords[h];return Nt(f,p,l)}),u=Nt(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=F(d,o)),d},{rangeArgs:i})}function pn(e){return se(e)==="function"&&!!e.rangeArgs}Q.interpolationSpace="lab";function du(e){e.defineFunction("mix",ds,{returns:"color"}),e.defineFunction("range",at,{returns:"function<color>"}),e.defineFunction("steps",fs,{returns:"array<color>"})}var fu=Object.freeze({__proto__:null,isRange:pn,mix:ds,range:at,register:du,steps:fs}),hs=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Je,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ps=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:hs,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),hu=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ps,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const pu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],mu=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ms=new j({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:pu,fromXYZ_M:mu}),gu=new j({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ms,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const bu=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],vu=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var gs=new j({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:fn,toXYZ_M:bu,fromXYZ_M:vu});const yu=1/512,wu=16/512;var $u=new j({id:"prophoto",name:"ProPhoto",base:gs,toBase(e){return e.map(t=>t<wu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=yu?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),ku=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:jt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Qt(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const xo=203,So=2610/2**14,xu=2**14/2610,Su=2523/2**5,Co=2**5/2523,Eo=3424/2**12,_o=2413/2**7,To=2392/2**7;var Cu=new j({id:"rec2100pq",name:"REC.2100-PQ",base:er,toBase(e){return e.map(function(t){return(Math.max(t**Co-Eo,0)/(_o-To*t**Co))**xu*1e4/xo})},fromBase(e){return e.map(function(t){let r=Math.max(t*xo/1e4,0),n=Eo+_o*r**So,o=1+To*r**So;return(n/o)**Su})},formats:{color:{id:"rec2100-pq"}}});const Mo=.17883277,Ao=.28466892,Ro=.55991073,wr=3.7743;var Eu=new j({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:er,toBase(e){return e.map(function(t){return t<=.5?t**2/3*wr:(Math.exp((t-Ro)/Mo)+Ao)/12*wr})},fromBase(e){return e.map(function(t){return t/=wr,t<=1/12?Math.sqrt(3*t):Mo*Math.log(12*t-Ao)+Ro})},formats:{color:{id:"rec2100-hlg"}}});const bs={};le.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=vs(e.W1,e.W2,e.options.method))});le.add("chromatic-adaptation-end",e=>{e.M||(e.M=vs(e.W1,e.W2,e.options.method))});function tr({id:e,toCone_M:t,fromCone_M:r}){bs[e]=arguments[0]}function vs(e,t,r="Bradford"){let n=bs[r],[o,a,s]=R(n.toCone_M,e),[i,l,c]=R(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=R(u,n.toCone_M);return R(n.fromCone_M,d)}tr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});tr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});tr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});tr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Z,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Z.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const _u=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Tu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ys=new j({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Z.ACES,toXYZ_M:_u,fromXYZ_M:Tu,formats:{color:{}}});const pt=2**-16,$r=-.35828683,mt=(Math.log2(65504)+9.72)/17.52;var Mu=new j({id:"acescc",name:"ACEScc",coords:{r:{range:[$r,mt],name:"Red"},g:{range:[$r,mt],name:"Green"},b:{range:[$r,mt],name:"Blue"}},referred:"scene",base:ys,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-pt)*2:r<mt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(pt)+9.72)/17.52:t<pt?(Math.log2(pt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Po=Object.freeze({__proto__:null,A98RGB:gu,A98RGB_Linear:ms,ACEScc:Mu,ACEScg:ys,HSL:hs,HSV:ps,HWB:hu,ICTCP:Dr,JzCzHz:jr,Jzazbz:is,LCH:Ze,Lab:H,Lab_D65:zr,OKLCH:ku,OKLab:jt,P3:rs,P3_Linear:es,ProPhoto:$u,ProPhoto_Linear:gs,REC_2020:Qa,REC_2020_Linear:er,REC_2100_HLG:Eu,REC_2100_PQ:Cu,XYZ_ABS_D65:hn,XYZ_D50:fn,XYZ_D65:V,sRGB:Je,sRGB_Linear:ts});class y{constructor(...t){let r;t.length===1&&(r=S(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new y(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=pc(this,...t);return r.color=new y(r.color),r}static get(t,...r){return t instanceof y?t:new y(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=y.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return y.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>y.get(c)));return l};t in y||(y[t]=s),o&&(y.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)y.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(y);else for(let r in t)y.defineFunction(r,t[r])}}y.defineFunctions({get:Y,getAll:ot,set:ce,setAll:Ja,to:F,equals:mc,inGamut:Ve,toGamut:ue,distance:ns,toString:zt});Object.assign(y,{util:tc,hooks:le,WHITES:Z,Space:b,spaces:b.registry,parse:Ka,defaults:Q});for(let e of Object.keys(Po))b.register(Po[e]);for(let e in b.registry)Ir(e,b.registry[e]);le.add("colorspace-init-end",e=>{var t;Ir(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Ir(r,e)})});function Ir(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(y.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}y.extend(Dt);y.extend({deltaE:He});Object.assign(y,{deltaEMethods:Dt});y.extend(uu);y.extend({contrast:Lc});y.extend(zc);y.extend(bc);y.extend(fu);y.extend(kt);function ws(e){return Ct(e,(t,r)=>r instanceof y?X(r.toString({format:"hex"})):ws(r))}const Au="dodgerblue";function Hr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function kr({background:e,foreground:t}){return{background:e??new y(Hr(t)),foreground:t??new y(Hr(e))}}var It;(function(e){e.Dark="dark",e.Light="light"})(It||(It={}));function Ru(e){return e==="black"?"white":"black"}const Pu={black:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")},white:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")}},Bu={black:{backgroundFaint1:new y("#666"),backgroundFaint2:new y("#444")},white:{backgroundFaint1:new y("#ccc"),backgroundFaint2:new y("#fafafa")}};function Bo({themeColor:e=Au,themeStyle:t=It.Light}={}){const r=new y(e),n=new y(t===It.Dark?"black":"white"),o=Hr(n),a=new y(o),s={nav:{hover:kr({background:r.clone().set({"hsl.l":93})}),active:kr({background:r.clone().set({"hsl.l":90})}),selected:kr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Bu[Ru(o)],foreground:a,...Pu[o]}};return ws(s)}const Ht=en()("element-book-change-route"),No="vira-",{defineElement:st,defineElementNoInputs:rd}=Ca({assertInputs:e=>{if(!e.tagName.startsWith(No))throw new Error(`Tag name should start with '${No}' but got '${e.tagName}'`)}}),Nu="px";function Lu(e){return Ou({value:e,suffix:Nu})}function Ou({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const $s=x`
    pointer-events: none;
    opacity: 0.3;
`,ie=xe({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ut=xe({"vira-form-input-border-radius":"8px"}),Ft=xe({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":x`calc(${Ut["vira-form-input-border-radius"].value} + 4px)`});function ks({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=X(Lu(n+r+t));return x`
        ${X(e)}::after {
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
    `}const zu=x`
    padding: 0;
    margin: 0;
`,ge=x`
    ${zu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Ur=x`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,L=st()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>x`
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Fr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Fr||(Fr={}));st()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Fr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>x`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Ur};
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
            ${$s};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${ge};
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
            transition: color ${ie["vira-interaction-animation-duration"].value},
                background-color
                    ${ie["vira-interaction-animation-duration"].value},
                border-color ${ie["vira-interaction-animation-duration"].value};
        }

        ${ks({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${L} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?m`
                  <${L.assign({icon:e.icon})}></${L}>
              `:"",r=e.text?m`
                  <span class="text-template">${e.text}</span>
              `:"";return m`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Vr;(function(e){e.Header="header"})(Vr||(Vr={}));st()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>x`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ge};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${ie["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:$e()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?x`
                  height: ${e.contentHeight}px;
              `:x`
                  height: 0;
              `;return m`
            <button
                class="header-wrapper"
                ${B("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Vr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Sa(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const $=xe({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function oe({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const ju=oe({name:"CloseX24Icon",svgTemplate:m`
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
    `});function Yr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Yr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function xs({value:e,allowed:t,blocked:r}){const n=t?Yr({input:e,matcher:t}):!0,o=r?Yr({input:e,matcher:r}):!1;return n&&!o}function Ss(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(xs({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Du({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=Ie(r,HTMLInputElement),s=r.data,i=t;let l=a.value??"";if(s)if(s.length===1)xs({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=i,n(s));else{const{filtered:c,blocked:u}=Ss({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(u)}a.value!==l&&(a.value=l),i!==l&&o(l)}const xt=st()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:$e(),inputBlocked:$e()},styles:({hostClasses:e,cssVars:t})=>x`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ft["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${$s};
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
                ${ge};
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
                ${Ur};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${ge};
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
                    ${ie["vira-interaction-animation-duration"].value};
            }

            label {
                ${ge};
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

            ${ks({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ge};
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
                ${Ur};
            }

            .close-x-button {
                ${ge};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${ie["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=Ss({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?m`
                  <${L.assign({icon:e.icon})} class="left-side-icon"></${L}>
              `:"",i=e.fitText?x`
                  width: ${r.forcedInputWidth}px;
              `:"";return m`
            <label>
                ${s}
                ${ne(!!e.fitText,m`
                        <span
                            class="size-span"
                            ${Sa(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${B("input",l=>{Du({inputs:e,filteredValue:a,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${ne(!!(e.showClearButton&&e.value),m`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${B("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${L.assign({icon:ju})}></${L}>
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
        `}});st()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>x`
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
    `,events:{routeChange:$e()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&ja(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return m`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return m`
                <a href=${s} rel="noopener noreferrer" ${B("click",n)}>
                    <slot></slot>
                </a>
            `}}});const Iu=oe({name:"Element16Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});oe({name:"Element24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${$["vira-icon-stroke-color"].value}
                stroke-width=${$["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Hu=oe({name:"Loader24Icon",svgTemplate:m`
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
    `}),Uu=x`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ie["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Fu=oe({name:"LoaderAnimated24Icon",svgTemplate:m`
        <style>
            ${Uu}
        </style>
        ${Hu.svgTemplate}
    `}),Vu=oe({name:"Options24Icon",svgTemplate:m`
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
    `});oe({name:"StatusFailure24Icon",svgTemplate:m`
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
    `});oe({name:"StatusInProgress24Icon",svgTemplate:m`
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
    `});oe({name:"StatusSuccess24Icon",svgTemplate:m`
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
    `});const{defineElement:W,defineElementNoInputs:nd}=Ca(),U=W()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>x`
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
                ${B("click",a=>{(!e.router||ja(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Ht(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Yu(e,t){return e.entry.entryType===P.Root?!1:!!(e.entry.entryType===P.Page||ae(t,e.fullUrlBreadcrumbs.slice(0,-1))||ae(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const te=W()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>x`
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

        ${L} {
            display: inline-flex;
            color: ${k["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Yu(r,e.selectedPath))return;const n=x`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return m`
                <li style=${n}>
                    <${U.assign({router:e.router,route:{paths:[z.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${fi({"title-row":!0,selected:e.selectedPath?ae(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ne(Ae(r,P.ElementExample),m`
                                    <${L.assign({icon:Iu})}></${L}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${U}>
                </li>
            `});return m`
            <${U.assign({route:Pe,router:e.router})}>
                <slot name=${G.NavHeader}>Book</slot>
            </${U}>
            <ul>
                ${t}
            </ul>
        `}});async function Wu(e){await Sr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await ei(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const fe=W()({tagName:"book-error",styles:x`
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
    `,renderCallback({inputs:e}){return(Wt(e.message,"array")?e.message:[e.message]).map(r=>m`
                    <p>${r}</p>
                `)}}),Qe=W()({tagName:"book-page-controls",events:{controlValueChange:$e()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>x`
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

        ${L}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===M.Hidden)return"";const s=qu(e.currentValues[n],o,i=>{const l=Wt(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return m`
                    <div class="control-wrapper">
                        ${ne(a===0,m`
                                <${L.assign({icon:Vu})}
                                    class="options-icon"
                                ></${L}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function qu(e,t,r){return Se(t,M.Hidden)?"":Se(t,M.Checkbox)?m`
            <input
                type="checkbox"
                .value=${e}
                ${B("input",n=>{const o=Ie(n,HTMLInputElement);r(o.checked)})}
            />
        `:Se(t,M.Color)?m`
            <input
                type="color"
                .value=${e}
                ${B("input",n=>{const o=Ie(n,HTMLInputElement);r(o.value)})}
            />
        `:Se(t,M.Text)?m`
            <${xt.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${B(xt.events.valueChange,n=>{r(n.detail)})}
            ></${xt}>
        `:Se(t,M.Number)?m`
            <input
                type="number"
                .value=${e}
                ${B("input",n=>{const o=Ie(n,HTMLInputElement);r(o.value)})}
            />
        `:Se(t,M.Dropdown)?m`
            <select
                .value=${e}
                ${B("input",n=>{const o=Ie(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>m`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:m`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Lo=W()({tagName:"book-breadcrumbs",styles:x`
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
                <${U.assign({route:{hash:void 0,search:void 0,paths:[z.Book,...s]},router:e.router})}>
                    ${r}
                </${U}>
                ${i}
            `}):m`
                &nbsp;
            `}}),xr=W()({tagName:"book-breadcrumbs-bar",styles:x`
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
            ${ne(!!e.currentSearch,m`
                    &nbsp;
                `,m`
                    <${Lo.assign({currentRoute:e.currentRoute,router:e.router})}></${Lo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${B("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Vs(200),n.value===o&&(n.value?t(new Ht({paths:[z.Search,encodeURIComponent(n.value)]})):t(new Ht(Pe)))})}
            />
        `}}),Oo=W()({tagName:"book-entry-description",styles:x`
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
            `)}}),zo=W()({tagName:"book-page-wrapper",styles:x`
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
              `,r=[z.Book,...e.pageNode.fullUrlBreadcrumbs],n=Wo(e.pageNode.entry.errors);return n&&console.error(n),m`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${U.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${U}>
                    ${n?m`
                              <${fe.assign({message:n.message})}></${fe}>
                          `:m`
                              <${Oo.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Oo}>
                              <${Qe.assign({config:e.pageNode.entry.controls,currentValues:cn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Qe}>
                          `}
                </div>
            </div>
        `}}),gt=W()({tagName:"book-element-example-controls",styles:x`
        :host {
            display: flex;
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[z.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return m`
            <${U.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${U}>
        `}}),jo=Symbol("unset-internal-state"),Do=W()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:jo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Wo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===jo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return m`
                ${ne(!!t.elementExampleNode.entry.styles,m`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),m`
                <${fe.assign({message:`${t.elementExampleNode.entry.title} failed: ${Vt(n)}`})}></${fe}>
            `}},options:{allowPolymorphicState:!0}}),Io=W()({tagName:"book-element-example-wrapper",styles:x`
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

        ${gt} {
            color: ${k["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${gt} {
            color: ${k["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return m`
            <div class="individual-example-wrapper">
                <${gt.assign(Fs(e,["currentPageControls"]))}></${gt}>
                <${Do.assign(e)}></${Do}>
            </div>
        `}});function Cs(e,t,r,n){const o=Pr(r,n),a=[];if(o){const s=Cs(e,t,o,n);s&&a.push(s)}if(Ae(r,P.Page)&&!e.includes(r)){const s=cn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:Ct(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Gu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:a}){if(!e.length&&n)return[m`
                No results
            `];const s=Cn(e,1)?Cs(e,o,e[0],a):void 0,i=s&&Object.values(s.config).length&&Cn(e,1)?m`
                  <${Qe.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${Qe}>
              `:"",l=hi(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(Ae(c,P.Page))return m`
                    <${zo.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${zo}>
                `;if(Ae(c,P.ElementExample)){const d=cn(o,c.fullUrlBreadcrumbs.slice(0,-1));return m`
                    <${Io.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${Io}>
                `}else return Ae(c,P.Root)?"":m`
                    <${fe.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${fe}>
                `});return[i,l].flat()}const _e=W()({tagName:"book-entry-display",styles:x`
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

        ${xr} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${ie["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:$e()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const a=Br(e.currentRoute.paths),s=Gu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!a,controls:e.controls,originalTree:e.originalTree});return m`
            <${xr.assign({currentSearch:a,currentRoute:e.currentRoute,router:e.router})}></${xr}>

            ${ne(e.showLoading,m`
                    <div
                        ${qn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${L.assign({icon:Fu})}></${L}>
                    </div>
                    ${ne(!!n.lastElement,m`
                            ${n.lastElement}
                            <slot name=${G.Footer}></slot>
                        `)}
                `,m`
                    <div
                        ${qn(i=>{o({lastElement:i})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${G.Footer}></slot>
                `)}
        `}});function Xu(e,t,r){const n=Ho(e,t);if(n.length)return n;r(Pe);const o=Ho(e,Pe.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function Ho(e,t){return e.filter(r=>Xs({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const bt=ka()({tagName:"element-book-app",events:{pathUpdate:$e()},stateInitStatic:{currentRoute:Pe,router:void 0,loading:!0,colors:{config:void 0,theme:Bo(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:x`
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

        ${_e} {
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
    `,initCallback({host:e,state:t}){setTimeout(()=>{Uo(e,Br(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var u,d,f,h,p,g,v;t._debug&&console.info("rendering element-book app");function s(w){return{...e.currentRoute,...w}}function i(w){const C=s(w);return!ae(e.currentRoute,C)}function l(w){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,w].filter(qr).join(" - "))}function c(w){if(!i(w))return;const C=s(w);e.router?e.router.setRoutes(C):n({currentRoute:{...e.currentRoute,...C}}),t.elementBookRoutePaths&&!ae(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(C.paths??[]))}try{if(t.elementBookRoutePaths&&!ae(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(u=t.internalRouterConfig)!=null&&u.useInternalRouter&&!e.router){const E=Kl(t.internalRouterConfig.basePath);n({router:E}),E.addRouteListener(!0,N=>{n({currentRoute:N})})}else!((d=t.internalRouterConfig)!=null&&d.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const w={themeColor:t.themeColor};if(!ae(w,(f=e.colors)==null?void 0:f.config)){const E=Bo(w);n({colors:{config:w,theme:E}}),ec(r,E)}const C=t._debug??!1,T=Sl({entries:t.entries,debug:C});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Oa(T.tree,{children:(p=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:p.children,controls:t.globalValues})}}));const _=Br(e.currentRoute.paths),J=(_?Rl({flattenedNodes:T.flattenedNodes,searchQuery:_}):void 0)??Xu(T.flattenedNodes,e.currentRoute.paths,c);l((g=J[0])==null?void 0:g.entry.title);const D=(v=e.treeBasedControls)==null?void 0:v.controls;return D?(t._debug&&console.info({currentControls:D}),m`
                <div
                    class="root"
                    ${B(Ht,async E=>{const N=E.detail;if(!i(N))return;if(n({loading:!0}),c(N),!(r.shadowRoot.querySelector(te.tagName)instanceof te))throw new Error(`Failed to find child '${te.tagName}'`);Uo(r,_,e.currentRoute)})}
                    ${B(Qe.events.controlValueChange,E=>{if(!e.treeBasedControls)return;const N=El(D,E.detail.fullUrlBreadcrumbs,E.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:N}})})}
                >
                    <${te.assign({flattenedNodes:T.flattenedNodes,router:e.router,selectedPath:_?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${G.NavHeader}
                            slot=${G.NavHeader}
                        ></slot>
                    </${te}>
                    <${_e.assign({controls:D,currentNodes:J,currentRoute:e.currentRoute,debug:C,originalTree:T.tree,router:e.router,showLoading:e.loading})}
                        ${B(_e.events.loadingRender,async E=>{await Sr();const N=r.shadowRoot.querySelector(_e.tagName);N?N.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${_e.tagName}' for scrolling.`),await Sr(),n({loading:!E.detail})})}
                    >
                        <slot
                            name=${G.Footer}
                            slot=${G.Footer}
                        ></slot>
                    </${_e}>
                </div>
            `):m`
                    <${fe.assign({message:"Failed to generate page controls."})}></${fe}>
                `}catch(w){return console.error(w),m`
                <p class="error">${Vt(w)}</p>
            `}}});async function Uo(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(te.tagName);if(!(n instanceof te))throw new Error(`Failed to find child '${te.tagName}'`);await Wu(n)}const mn=Zs()({title:"Parent Page 1",parent:void 0,controls:{"Parent Control":{controlType:M.Color,initValue:"#33ccff"},"Hidden control":{controlType:M.Hidden,initValue:new RegExp("this can be anything")}}}),Wr=Be({title:"Parent Page 2",parent:void 0}),Fo=Be({title:"Sub Page 1",parent:Wr});function Vo(e,t){return Be({title:`test ${e}`,parent:t,elementExamplesCallback({defineExample:n}){Array(20).fill(0).forEach((o,a)=>{n({title:`example ${e} ${a}`,renderCallback(){return"element example here"}})})}})}const Yo=Be({title:"duplicate error page",parent:mn,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:e}){e({title:"example 1",renderCallback(){return"hi"}}),e({title:"example 2",renderCallback(){return"hi"}})}}),Zu=Be({title:"test 3",controls:{thing:{initValue:"there",controlType:M.Text},thing2:{initValue:!1,controlType:M.Checkbox},thing3:{initValue:"hello",controlType:M.Dropdown,options:["hello","hi","yo"]}},parent:mn,elementExamplesCallback({defineExample:e}){e({title:"example 3 1",renderCallback(){return"hi"}}),e({title:"example 3 2",styles:x`
                .color-control {
                    width: 20px;
                    height: 20px;);
                }
            `,renderCallback({controls:t}){const r=x`
                    background-color: ${X(t["Parent Control"])};
                `;return m`
                    hello ${t.thing}, ${t.thing2}
                    <div style=${r} class="color-control"></div>
                    selected: ${t.thing3} ${t["Hidden control"]}
                    <br />
                    global: ${t.testGlobalControl}
                `}}),e({title:"example with error",renderCallback(){return"broken"}}),e({title:"example with error",renderCallback(){return"broken"}})}}),Es=[mn,Vo(0,Wr),Fo,...Array(100).fill(0).map((e,t)=>Vo(t+1,Fo)),Yo,Yo,Zu,Wr];console.info({entries:Es});Zt({tagName:"vir-app",styles:x`
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
                    ${B("input",r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("input element not found for input event");t({themeColor:n.value})})}
                    type="color"
                />
            </label>
            <${bt.assign({entries:Es,themeColor:e.themeColor,internalRouterConfig:{useInternalRouter:!0,basePath:"element-book"},_debug:!0,globalValues:{testGlobalControl:"it worked!"}})}
                ${B(bt.events.pathUpdate,r=>{t({paths:r.detail})})}
            >
                <h1 slot=${G.NavHeader}>My Title</h1>
                <footer slot=${G.Footer}>Example Footer</footer>
            </${bt}>
        `});
