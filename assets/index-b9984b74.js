var Ja=Object.defineProperty;var Ka=(t,e,r)=>e in t?Ja(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Vt=(t,e,r)=>(Ka(t,typeof e!="symbol"?e+"":e,r),r),Xt=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var fe=(t,e,r)=>(Xt(t,e,"read from private field"),r?r.call(t):e.get(t)),Te=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Wt=(t,e,r,n)=>(Xt(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);var at=(t,e,r)=>(Xt(t,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Qa(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const es={capitalizeFirstLetter:!1};function ts(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function rs(t,e){return e.capitalizeFirstLetter?ts(t):t}function ns(t,e=es){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return rs(n,e)}function an(t){return t!==t.toUpperCase()}function os(t){return t.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=an(s)||an(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const as=["january","february","march","april","may","june","july","august","september","october","november","december"];as.map(t=>t.slice(0,3));function Or(t){return t?t instanceof Error?t.message:String(t):""}function wo(t){return t instanceof Error?t:new Error(Or(t))}function Dr(t){return!!t}function mr(t){return!!t&&typeof t=="object"}const sn="Failed to compare objects using JSON.stringify";function ln(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Ne(t,e){try{return t===e?!0:mr(t)&&mr(e)?ln(Object.keys(t).sort(),Object.keys(e).sort())?Object.keys(t).every(n=>Ne(t[n],e[n])):!1:ln(t,e)}catch(r){const n=wo(r);throw n.message.startsWith(sn)||(n.message=`${sn}: ${n.message}`),n}}function ss(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}const is=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function xe(t,e){return t?is.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Ir(t,e){return t&&e.every(r=>xe(t,r))}function te(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ls(t){return Array.isArray(t)?"array":typeof t}function Hr(t,e){return ls(t)===e}function cs(t,e,r){const n=e;if(t.has(n))return t.get(n);{const o=r();return t.set(n,o),o}}function us(t){return te(t).filter(e=>isNaN(Number(e)))}function ds(t){return us(t).map(r=>t[r])}function hs(t,e){return ds(e).includes(t)}function $e(t,e){let r=!1;const n=te(t).reduce((o,a)=>{const s=e(a,t[a],t);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(te(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function fs(t){const e=Co();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function Co(){let t,e,r=!1;const n=new Promise((o,a)=>{t=s=>(r=!0,o(s)),e=s=>{r=!0,a(s)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Co.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function ps(t,e){try{return ms(t,e),!0}catch{return!1}}function ms(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function yt(t,e){return xe(t,"entryType")&&t.entryType===e}var Q;(function(t){t.Checkbox="checkbox",t.Color="color",t.Dropdown="dropdown",t.Text="text"})(Q||(Q={}));const gs={[Q.Checkbox]:!1,[Q.Color]:"",[Q.Dropdown]:0,[Q.Text]:""};function bs(t,e){if(!t)return[];const r=[];return Object.entries(t).forEach(([n,o])=>{const a=gs[o.controlType];typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${e}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${e}' cannot have an empty control name.`))}),r}var T;(function(t){t.ElementExample="element-example",t.Page="page",t.Root="root"})(T||(T={}));function zt(t,e){const r=$t(t.title);return t.parent?[$t(t.parent.title),...zt(t.parent,!1)].concat(e?[r]:[]):e?[r]:[]}function $t(t){return Qa(t).toLowerCase().replaceAll(/\s/g,"-")}function ke(t){const e={...t,entryType:T.Page,elementExamples:{},descriptionParagraphs:t.descriptionParagraphs??[],controls:t.controls??{},errors:[]},r=new Set;return t.elementExamplesCallback&&t.elementExamplesCallback({defineExample(n){const o={...n,entryType:T.ElementExample,parent:e,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${t.title}' is already taken.`)].filter(Dr)};r.add(n.title),e.elementExamples[$t(o.title)]=o}}),e}var V;(function(t){t.Footer="book-footer",t.NavHeader="book-nav-header"})(V||(V={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qe=t=>(...e)=>({_$litDirective$:t,values:e});let Ee=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zt;const wt=window,we=wt.trustedTypes,cn=we?we.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ct="$lit$",G=`lit$${(Math.random()+"").slice(9)}$`,jr="?"+G,vs=`<${jr}>`,de=document,je=()=>de.createComment(""),Fe=t=>t===null||typeof t!="object"&&typeof t!="function",xo=Array.isArray,ko=t=>xo(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Gt=`[ 	
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,un=/-->/g,dn=/>/g,ie=RegExp(`>|${Gt}(?:([^\\s"'>=/]+)(${Gt}*=${Gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hn=/'/g,fn=/"/g,Eo=/^(?:script|style|textarea|title)$/i,ys=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),$s=ys(1),U=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),pn=new WeakMap,ce=de.createTreeWalker(de,129,null,!1),_o=(t,e)=>{const r=t.length-1,n=[];let o,a=e===2?"<svg>":"",s=Pe;for(let l=0;l<r;l++){const c=t[l];let d,u,h=-1,p=0;for(;p<c.length&&(s.lastIndex=p,u=s.exec(c),u!==null);)p=s.lastIndex,s===Pe?u[1]==="!--"?s=un:u[1]!==void 0?s=dn:u[2]!==void 0?(Eo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=ie):u[3]!==void 0&&(s=ie):s===ie?u[0]===">"?(s=o??Pe,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?ie:u[3]==='"'?fn:hn):s===fn||s===hn?s=ie:s===un||s===dn?s=Pe:(s=ie,o=void 0);const f=s===ie&&t[l+1].startsWith("/>")?" ":"";a+=s===Pe?c+vs:h>=0?(n.push(d),c.slice(0,h)+Ct+c.slice(h)+G+f):c+G+(h===-2?(n.push(void 0),l):f)}const i=a+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[cn!==void 0?cn.createHTML(i):i,n]};class Ue{constructor({strings:e,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=e.length-1,l=this.parts,[c,d]=_o(e,r);if(this.el=Ue.createElement(c,n),ce.currentNode=this.el.content,r===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=ce.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(Ct)||h.startsWith(G)){const p=d[s++];if(u.push(h),p!==void 0){const f=o.getAttribute(p.toLowerCase()+Ct).split(G),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:a,name:m[2],strings:f,ctor:m[1]==="."?Mo:m[1]==="?"?Ao:m[1]==="@"?To:Je})}else l.push({type:6,index:a})}for(const h of u)o.removeAttribute(h)}if(Eo.test(o.tagName)){const u=o.textContent.split(G),h=u.length-1;if(h>0){o.textContent=we?we.emptyScript:"";for(let p=0;p<h;p++)o.append(u[p],je()),ce.nextNode(),l.push({type:2,index:++a});o.append(u[h],je())}}}else if(o.nodeType===8)if(o.data===jr)l.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(G,u+1))!==-1;)l.push({type:7,index:a}),u+=G.length-1}a++}}static createElement(e,r){const n=de.createElement("template");return n.innerHTML=e,n}}function he(t,e,r=t,n){var o,a,s,i;if(e===U)return e;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Fe(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(e=he(t,l._$AS(t,e.values),l,n)),e}let So=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:de).importNode(n,!0);ce.currentNode=a;let s=ce.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let d;c.type===2?d=new _e(s,s.nextSibling,this,e):c.type===1?d=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(d=new Po(s,this,e)),this._$AV.push(d),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=ce.nextNode(),i++)}return ce.currentNode=de,a}v(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}};class _e{constructor(e,r,n,o){var a;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=he(this,e,r),Fe(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==U&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ko(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==S&&Fe(this._$AH)?this._$AA.nextSibling.data=e:this.$(de.createTextNode(e)),this._$AH=e}g(e){var r;const{values:n,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ue.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new So(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(e){let r=pn.get(e.strings);return r===void 0&&pn.set(e.strings,r=new Ue(e)),r}T(e){xo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of e)o===r.length?r.push(n=new _e(this.k(je()),this.k(je()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class Je{constructor(e,r,n,o,a){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)e=he(this,e,r,0),s=!Fe(e)||e!==this._$AH&&e!==U,s&&(this._$AH=e);else{const i=e;let l,c;for(e=a[0],l=0;l<a.length-1;l++)c=he(this,i[n+l],r,l),c===U&&(c=this._$AH[l]),s||(s=!Fe(c)||c!==this._$AH[l]),c===S?e=S:e!==S&&(e+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mo extends Je{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}const ws=we?we.emptyScript:"";class Ao extends Je{constructor(){super(...arguments),this.type=4}j(e){e&&e!==S?this.element.setAttribute(this.name,ws):this.element.removeAttribute(this.name)}}class To extends Je{constructor(e,r,n,o,a){super(e,r,n,o,a),this.type=5}_$AI(e,r=this){var n;if((e=(n=he(this,e,r,0))!==null&&n!==void 0?n:S)===U)return;const o=this._$AH,a=e===S&&o!==S||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==S&&(o===S||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Po{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){he(this,e)}}const Cs={O:Ct,P:G,A:jr,C:1,M:_o,L:So,D:ko,R:he,I:_e,V:Je,H:Ao,N:To,U:Mo,F:Po},mn=wt.litHtmlPolyfillSupport;mn==null||mn(Ue,_e),((Zt=wt.litHtmlVersions)!==null&&Zt!==void 0?Zt:wt.litHtmlVersions=[]).push("2.7.4");const xs=(t,e,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new _e(e.insertBefore(je(),i),i,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ks}=Cs,gn=()=>document.createComment(""),Re=(t,e,r)=>{var n;const o=t._$AA.parentNode,a=e===void 0?t._$AB:e._$AA;if(r===void 0){const s=o.insertBefore(gn(),a),i=o.insertBefore(gn(),a);r=new ks(s,i,t,t.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==t;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,t),r._$AM=t,r._$AP!==void 0&&(c=t._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const d=c.nextSibling;o.insertBefore(c,a),c=d}}}return r},le=(t,e,r=t)=>(t._$AI(e,r),t),Es={},_s=(t,e=Es)=>t._$AH=e,Ss=t=>t._$AH,qt=t=>{var e;(e=t._$AP)===null||e===void 0||e.call(t,!1,!0);let r=t._$AA;const n=t._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ro=qe(class extends Ee{constructor(t){var e;if(super(t),t.type!==Ot.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(e)}const o=t.element.classList;this.it.forEach(a=>{a in e||(o.remove(a),this.it.delete(a))});for(const a in e){const s=!!e[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return U}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bn=(t,e,r)=>{const n=new Map;for(let o=e;o<=r;o++)n.set(t[o],o);return n},Ms=qe(class extends Ee{constructor(t){if(super(t),t.type!==Ot.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const o=[],a=[];let s=0;for(const i of t)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){var o;const a=Ss(t),{values:s,keys:i}=this.dt(e,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,h=0,p=a.length-1,f=0,m=s.length-1;for(;h<=p&&f<=m;)if(a[h]===null)h++;else if(a[p]===null)p--;else if(l[h]===i[f])c[f]=le(a[h],s[f]),h++,f++;else if(l[p]===i[m])c[m]=le(a[p],s[m]),p--,m--;else if(l[h]===i[m])c[m]=le(a[h],s[m]),Re(t,c[m+1],a[h]),h++,m--;else if(l[p]===i[f])c[f]=le(a[p],s[f]),Re(t,a[h],a[p]),p--,f++;else if(d===void 0&&(d=bn(i,f,m),u=bn(l,h,p)),d.has(l[h]))if(d.has(l[p])){const v=u.get(i[f]),C=v!==void 0?a[v]:null;if(C===null){const A=Re(t,a[h]);le(A,s[f]),c[f]=A}else c[f]=le(C,s[f]),Re(t,a[h],C),a[v]=null;f++}else qt(a[p]),p--;else qt(a[h]),h++;for(;f<=m;){const v=Re(t,c[m+1]);le(v,s[f]),c[f++]=v}for(;h<=p;){const v=a[h++];v!==null&&qt(v)}return this.ht=i,_s(t,c),U}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gr=class extends Ee{constructor(e){if(super(e),this.et=S,e.type!==Ot.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===S||e==null)return this.ft=void 0,this.et=e;if(e===U)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const r=[e];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};gr.directiveName="unsafeHTML",gr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vn=class extends gr{};vn.directiveName="unsafeSVG",vn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function As(t,e,r){return t?e():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=window,Fr=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ur=Symbol(),yn=new WeakMap;let Bo=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Ur)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Fr&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=yn.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&yn.set(r,e))}return e}toString(){return this.cssText}};const X=t=>new Bo(typeof t=="string"?t:t+"",void 0,Ur),ze=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[a+1],t[0]);return new Bo(r,t,Ur)},Ts=(t,e)=>{Fr?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),o=gt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)})},$n=Fr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return X(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jt;const xt=window,wn=xt.trustedTypes,Ps=wn?wn.emptyScript:"",Cn=xt.reactiveElementPolyfillSupport,br={toAttribute(t,e){switch(e){case Boolean:t=t?Ps:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Lo=(t,e)=>e!==t&&(e==e||t==t),Kt={attribute:!0,type:String,converter:br,reflect:!1,hasChanged:Lo},vr="finalized";class be extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),e.push(o))}),e}static createProperty(e,r=Kt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,r);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(o){const a=this[e];this[r]=o,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Kt}static finalize(){if(this.hasOwnProperty(vr))return!1;this[vr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)r.unshift($n(o))}else e!==void 0&&r.push($n(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ts(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=Kt){var o;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:br).toAttribute(r,n.type);this._$El=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(e,r){var n;const o=this.constructor,a=o._$Ev.get(e);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:br;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(e,r,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Lo)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}be[vr]=!0,be.elementProperties=new Map,be.elementStyles=[],be.shadowRootOptions={mode:"open"},Cn==null||Cn({ReactiveElement:be}),((Jt=xt.reactiveElementVersions)!==null&&Jt!==void 0?Jt:xt.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qt,er;class Oe extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xs(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return U}}Oe.finalized=!0,Oe._$litElement$=!0,(Qt=globalThis.litElementHydrateSupport)===null||Qt===void 0||Qt.call(globalThis,{LitElement:Oe});const xn=globalThis.litElementPolyfillSupport;xn==null||xn({LitElement:Oe});((er=globalThis.litElementVersions)!==null&&er!==void 0?er:globalThis.litElementVersions=[]).push("3.3.2");var Rs=globalThis&&globalThis.__esDecorate||function(t,e,r,n,o,a){function s(C){if(C!==void 0&&typeof C!="function")throw new TypeError("Function expected");return C}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!e&&t?n.static?t:t.prototype:null,d=e||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,h=!1,p=r.length-1;p>=0;p--){var f={};for(var m in n)f[m]=m==="access"?{}:n[m];for(var m in n.access)f.access[m]=n.access[m];f.addInitializer=function(C){if(h)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(C||null))};var v=(0,r[p])(i==="accessor"?{get:d.get,set:d.set}:d[l],f);if(i==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(u=s(v.get))&&(d.get=u),(u=s(v.set))&&(d.set=u),(u=s(v.init))&&o.push(u)}else(u=s(v))&&(i==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),h=!0},Bs=globalThis&&globalThis.__runInitializers||function(t,e,r){for(var n=arguments.length>2,o=0;o<e.length;o++)r=n?e[o].call(t,r):e[o].call(t);return n?r:void 0},Ls=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Ns(){function t(e,r){return e}return t}let No=(()=>{let t=[Ns()],e,r=[],n;return n=class extends Oe{},Ls(n,"DeclarativeElement"),Rs(null,e={value:n},t,{kind:"class",name:n.name},null,r),n=e.value,Bs(n,r),n})();function se(t){if(mr(t))return $e(t,(r,n)=>{if(!Hr(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(os(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?X(r):r.startsWith("-")?ze`-${X(r)}`:ze`--${X(r)}`;return{name:s,value:ze`var(${s}, ${X(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${se.name}' function.`)}function zs({onElement:t,toValue:e,forCssVar:r}){t.style.setProperty(String(r.name),String(e))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Os=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}},Ds=(t,e,r)=>{e.constructor.createProperty(r,t)};function zo(t){return(e,r)=>r!==void 0?Ds(t,e,r):Os(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tr;((tr=window.HTMLSlotElement)===null||tr===void 0?void 0:tr.prototype.assignedElements)!=null;const yr=Symbol("this-is-an-element-vir-declarative-element"),Yr=Symbol("key for ignoring inputs not having been set yet"),Is={[Yr]:!0,allowPolymorphicState:!1};function Oo(t,e){const r=t.instanceState;te(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&te(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),Do(t)}function Do(t){t.haveInputsBeenSet||(t.haveInputsBeenSet=!0)}function Io(t,e){return $r(t,e),t.element}function $r(t,e){if(t.type!==Ot.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function E(t,e){return e?kn(t,e):kn(void 0,t)}const kn=qe(class extends Ee{constructor(t){super(t),this.element=Io(t,"assign")}render(t,e){return Hs(t,this.element,e),U}});function Hs(t,e,r){Oo(e,r)}function Ho(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof No?!0:Ho(r)}function En(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class js extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Vr(){return t=>{var e;return e=class extends js{constructor(r){super(t,r),this._type=t}},e.type=t,e}}function Ye(){return Vr()}function Fs(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,r)=>{const n=Vr()(r);return e[r]=n,e},{}):{}}const _n="_is_element_vir_observable_property_handler_instance",Sn="_is_element_vir_observable_property_handler_creator";function Us(t){return xe(t,Sn)&&t[Sn]===!0}function Ys(t){return xe(t,_n)&&t[_n]===!0}function Vs(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function Mn(t,e){const r=t;function n(s){e?Vs(s,t,t.tagName):zo()(t,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=t.observablePropertyHandlerMap[i];function d(u){s[i]=u,r[i]=u}return Us(l)&&(l=l.init()),Ys(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),t.observablePropertyHandlerMap[i]=l):c?c.setValue(l):d(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Xs(t){return t?$e(t,e=>e):{}}function Ws({hostClassNames:t,cssVars:e}){return{hostClasses:$e(t,(r,n)=>({name:X(n),selector:X(`:host(.${n})`)})),cssVars:e}}function Zs({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:o}){e&&te(e).forEach(a=>{const s=e[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?t.classList.add(i):t.classList.remove(i))})}function Gs(t,e){function r(o){te(o).forEach(a=>{const s=o[a];t.instanceState[a]=s})}return{dispatch:o=>t.dispatchEvent(o),updateState:r,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}var qs=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Dt(t){var e;if(!t.renderCallback||typeof t.renderCallback=="string")throw new Error(`Failed to define element '${t.tagName}': renderCallback is not a function`);const r={...Is,...t.options},n=Fs(t.events),o=Xs(t.hostClasses);t.hostClasses&&En(t.tagName,t.hostClasses),t.cssVars&&En(t.tagName,t.cssVars);const a=t.cssVars?se(t.cssVars):{},s=typeof t.styles=="function"?t.styles(Ws({hostClassNames:o,cssVars:a})):t.styles||ze``,i=t.renderCallback,l=(e=class extends No{createRenderParams(){return Gs(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Do(this)}render(){try{Ho(this)&&!this.haveInputsBeenSet&&!r[Yr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${E.name}" directive on it. If no inputs are intended, use "${Dt.name}" to define ${t.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(c);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Zs({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=wo(c);throw d.message=`Failed to render '${t.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(t.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${t.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const c=this.createRenderParams();if(t.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${t.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){Oo(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=Mn(this,!1),this.instanceState=Mn(this,!((d=t.options)!=null&&d.allowPolymorphicState));const c=t.stateInitStatic||{};te(c).forEach(u=>{zo()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},qs(e,"anonymousClass"),e.tagName=t.tagName,e.styles=s,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=i,e.hostClasses=o,e.cssVars=a,e.stateInitStatic=t.stateInitStatic,e);return Object.defineProperties(l,{[yr]:{value:!0,writable:!1},name:{value:ns(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,l),l}function jo(){return t=>Dt({...t,options:{[Yr]:!1,...t.options}})}function q(t,e){return Js(t,e)}const Js=qe(class extends Ee{constructor(t){super(t),this.element=Io(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),U}}),rr="onResize",Fo=qe(class extends Ee{constructor(t){super(t),this.resizeObserver=new ResizeObserver(e=>this.fireCallback(e)),$r(t,rr)}fireCallback(t){var r;const e=t[0];if(!e)throw console.error(t),new Error(`${rr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:e.target,contentRect:e.contentRect})}update(t,[e]){$r(t,rr),this.callback=e;const r=t.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(e)}render(t){}});function Ce(t,e,r){return As(t,()=>e,()=>r)}function Uo(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),jo()(r(n))),defineElementNoInputs:n=>(e(n),Dt(r(n)))}}function Ks(t,e){return t.filter((r,n)=>!e.includes(n))}function Yo(t){return t.filter(e=>Ir(e,["tagName",yr])&&!!e.tagName&&!!e[yr])}const Vo=new WeakMap;function Qs(t,e){var o;const r=Yo(e);return(o=Xo(Vo,[t,...r]).value)==null?void 0:o.template}function ei(t,e,r){const n=Yo(e);return Zo(Vo,[t,...n],r)}function Xo(t,e,r=0){const{currentTemplateAndNested:n,reason:o}=Wo(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Xo(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Wo(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=t.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Zo(t,e,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Wo(t,e,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||t.set(a,i),n===e.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Zo(l,e,r,n+1)}function Go(t,e,r){return{name:t,check:e,transform:r}}const ti=new WeakMap;function qo(t,e,r){const n=Qs(t,e),o=n??r();if(!n){const s=ei(t,e,o);if(s.result)ti.set(t,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=Ks(e,o.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Jo(t,e,r,n){const o=[],a=[],s=[];return t.forEach((l,c)=>{var v;const d=o.length-1,u=o[d],h=c-1,p=e[h];let f;n&&n(l),typeof u=="string"&&(f=(v=r.find(C=>C.check(u,l,p)))==null?void 0:v.transform,f&&(o[d]=u+f(p)+l,s.push(h))),f||o.push(l);const m=t.raw[c];f?a[d]=a[d]+f(p)+m:a.push(m)}),{templateStrings:Object.assign([],o,{raw:a}),valueIndexDeletions:s}}function Ko(t){return xe(t,"tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const ri=[Go("tag name css selector interpolation",(t,e,r)=>Ko(r),t=>t.tagName)];function ni(t,e){return Jo(t,e,ri)}function k(t,...e){const r=qo(t,e,()=>ni(t,e));return ze(r.strings,...r.values)}const oi=[Go("tag name interpolation",(t,e,r)=>{const n=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),o=Ko(r);if(n&&!o)throw console.error({lastNewString:t,currentLitString:e,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},t=>t.tagName)];function ai(t){}function si(t){return Jo(t.strings,t.values,oi,ai)}function b(t,...e){const r=$s(t,...e),n=qo(t,e,()=>si(r));return{...r,strings:n.strings,values:n.values}}const ii={[T.ElementExample]:()=>[],[T.Page]:t=>[!t.title&&new Error("Cannot define an element-book page with an empty title."),...bs(t.controls,t.title)].filter(Dr),[T.Root]:()=>[]},Qo=new Map;function ea(t,e){var r;return(r=Qo.get(t))==null?void 0:r.get(e)}function ta(t,e,r){cs(Qo,t,()=>new Map).set(e,r)}const kt="_isBookTreeNode";function De(t,e){return!!(Ir(t,[kt,"entry"])&&t[kt]&&t.entry.entryType===e)}function ra(t,e){return{[kt]:!0,entry:{entryType:T.Root,title:t||"Everything",parent:void 0,errors:[],descriptionParagraphs:e},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function li({entries:t,everythingTitle:e,everythingDescriptionParagraphs:r,debug:n}){const o=ea(t,"");if(o)return o;const a=ra(e,r);return t.forEach(s=>Xr({tree:a,newEntry:s,debug:n,manuallyAdded:!0})),ta(t,"",a),n&&console.info("element-book tree:",a),a}function ci(t,e,r){const n=An(e,t);if(n)return n;r&&console.info(`parent of ${e.title} not found in tree; adding it now.`),Xr({tree:t,newEntry:e.parent,debug:r,manuallyAdded:!1});const o=An(e,t);if(!o)throw new Error(`Failed to find node despite having just added it: ${zt(e,!1)}`);return o}function Xr({tree:t,newEntry:e,debug:r,manuallyAdded:n}){const o=ii[e.entryType](e);e.errors.push(...o);const a=ci(t,e,r),s=$t(e.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate entry '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[kt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:e,manuallyAdded:n};a.children[s]=l,yt(e,T.Page)&&Object.values(e.elementExamples??{}).length&&Object.values(e.elementExamples??{}).forEach(c=>Xr({tree:t,newEntry:c,debug:r,manuallyAdded:n}))}function An(t,e){return zt(t,!1).reverse().reduce((o,a)=>{if(o)return o.children[a]},e)}function wr(t,e){if(!ps(t,1))return e;const r=t[0],n=e.children[r];if(n)return wr(t.slice(1),n)}function ui(t,e){if(t.entry.entryType!==e.entry.entryType){if(yt(t.entry,T.ElementExample))return-1;if(yt(e.entry,T.ElementExample))return 1}return t.entry.title.localeCompare(e.entry.title)}function na(t){return[t,...Object.values(t.children).sort(ui).map(r=>na(r))].flat()}function di(t,e,r){const n=t[e];if(n)return n;if(r){const o={children:{},controls:{}};return t[e]=o,o}}function Tn(t,e){return Wr(t,e,void 0)}function Wr(t,e,r){const n=e[0];if(!n)return{};const o=di(t,n,r);if(!o)return{};const a=e.slice(1);return!a.length&&r&&(o.controls=r),{...o.controls,...Wr(o.children,a,r)}}function hi(t,e,r){const n=ss(t);return Wr(n,e,r),n}function oa(t){return $e(t.children,(r,n)=>De(n,T.Page)?{children:oa(n),controls:$e(n.entry.controls,(o,a)=>a.initValue)}:{children:{},controls:{}})}function fi({searchQuery:t,searchIn:e}){const r=e.length,n=t.length;if(n>r)return!1;if(n===r)return t===e;const o=e.toLowerCase(),a=t.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}function pi({entries:t,startTree:e,searchQuery:r}){const n=ea(t,r);if(n)return n;const o=ra("Search Results",[]);return aa(e,o,r),ta(t,r,o),o}function aa(t,e,r){if(t.entry.entryType!==T.Root&&fi({searchIn:[t.entry.title,...t.entry.descriptionParagraphs].join(" "),searchQuery:r}))return e.children=t.children,!0;const n=Object.entries(t.children).map(([o,a])=>{const s={...a,children:{}};if(aa(a,s,r))return[o,s]}).filter(Dr);return n.length?(e.children=Object.fromEntries(n),!0):!1}var L;(function(t){t.Search="search",t.Book="book"})(L||(L={}));function sa(t){return t[0]===L.Book?"":t[1]?decodeURIComponent(t[1]):""}const It={hash:void 0,paths:[L.Book],search:void 0},mi=0;function gi(t){return!(t.type!=="click"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==mi)}class Ke extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class Pn extends Ke{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const Ve="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const bi=globalThis.history.pushState;function Rn(...t){const e=bi.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Ve)),e}const vi=globalThis.history.replaceState;function Bn(...t){const e=vi.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Ve)),e}function yi(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Rn)throw new Pn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Bn)throw new Pn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Rn,globalThis.history.replaceState=Bn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ve))})}}function $i(t){return Array.from(t.entries()).reduce((e,r)=>(e[r[0]]=r[1],e),{})}function wi(t){const e=Object.entries(t).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(e)}function Ci(t){const r=(t?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?$i(new URLSearchParams(globalThis.location.search)):void 0,a=globalThis.location.hash||void 0;return{paths:r,search:o,hash:a}}class xi extends Ke{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function ia(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const r=Object.entries(t.search).join(" "),n=Object.entries(e.search).join(" ");if(r!==n)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const Ln=6;function Nn(t,e){const r=t.getCurrentRawRoutes();if(t.sanitizationDepth>Ln)throw new xi(`Route sanitization depth has exceed the max of ${Ln} with ${JSON.stringify(r)}`);const n=t.sanitizeFullRoute(r);if(ia(n,r))t.sanitizationDepth=0,e?e(n):t.listeners.forEach(o=>{o(n)});else return t.sanitizationDepth++,t.setRoutes(n,!0)}class nr extends Ke{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function ki(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new nr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new nr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new nr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Ei(t,e,r,n=!1){const o=la(t,e,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function la(t,e,r=""){var l;if(!r&&e!=null)throw new Ke("Route base regexp was defined but routeBase string was not provided.");const n=_i(e)?`/${r}`:"",o=t.search?wi(t.search).toString():"",a=o?`?${o}`:"",s=(l=t.hash)!=null&&l.startsWith("#")?"":"#",i=t.hash?`${s}${t.hash}`:"";return`${n}/${t.paths.join("/")}${a}${i}`}function _i(t){return!!(t&&globalThis.location.pathname.match(t))}function Si(t={}){var s;ki(t),yi();const e=(s=t.routeBase)==null?void 0:s.replace(/\/+$/,""),r=e?new RegExp(`^\\/${t.routeBase}`):void 0;let n=!1;const o=()=>Nn(a),a={listeners:new Set,initParams:t,sanitizeFullRoute:i=>{const l={hash:void 0,search:void 0,...i};return t.routeSanitizer?t.routeSanitizer(l):l},setRoutes:(i,l=!1,c=!1)=>{const d=a.getCurrentRawRoutes(),u={...d,...i},h=a.sanitizeFullRoute(u);if(!(!c&&ia(d,h)))return Ei(h,r,e,l)},createRoutesUrl:i=>la(i,r,e),getCurrentRawRoutes:()=>Ci(r),removeAllRouteListeners(){a.listeners.forEach(i=>a.removeRouteListener(i))},addRouteListener:(i,l)=>{if(t.maxListenerCount&&a.listeners.size>=t.maxListenerCount)throw new Ke(`Tried to exceed route listener max of '${t.maxListenerCount}'.`);return a.listeners.add(l),n||(globalThis.addEventListener(Ve,o),n=!0),i&&Nn(a,l),l},hasRouteListener:i=>a.listeners.has(i),removeRouteListener:i=>{const l=a.listeners.delete(i);return a.listeners.size||(globalThis.removeEventListener(Ve,o),n=!1),l},sanitizationDepth:0};return a}function Mi(t){return Si({routeBase:t,routeSanitizer(e){return{paths:Ai(e.paths),hash:void 0,search:void 0}}})}function Ai(t){const e=t[0];if(hs(e,L)){if(e===L.Book)return[L.Book,...t.slice(1)];if(e===L.Search)return t[1]?[e,t[1]]:[L.Book,...t.slice(1)];throw new Error(`Route path not handled for sanitization: ${t.join("/")}`)}else return It.paths}const y=se({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Ti={nav:{hover:{background:y["element-book-nav-hover-background-color"],foreground:y["element-book-nav-hover-foreground-color"]},active:{background:y["element-book-nav-active-background-color"],foreground:y["element-book-nav-active-foreground-color"]},selected:{background:y["element-book-nav-selected-background-color"],foreground:y["element-book-nav-selected-foreground-color"]}},accent:{icon:y["element-book-accent-icon-color"]},page:{background:y["element-book-page-background-color"],backgroundFaint1:y["element-book-page-background-faint-level-1-color"],backgroundFaint2:y["element-book-page-background-faint-level-2-color"],foreground:y["element-book-page-foreground-color"],foregroundFaint1:y["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:y["element-book-page-foreground-faint-level-2-color"]}};function Pi(t,e){ca(t,e,Ti)}function Cr(t){return xe(t,"_$cssResult$")}function zn(t){return Ir(t,["name","value","default"])&&Hr(t.default,"string")&&Cr(t.name)&&Cr(t.value)}function ca(t,e,r){Object.entries(e).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Cr(o)){if(!zn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);zs({forCssVar:a,onElement:t,toValue:String(o)})}else{if(zn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ca(t,o,a)}})}function M(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(s=>[s]));let n=e[0].length,o=e[0].map((s,i)=>e.map(l=>l[i])),a=t.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function Qe(t){return ee(t)==="string"}function ee(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Et(t,e){t=+t,e=+e;let r=(Math.floor(t)+"").length;if(e>r)return+t.toFixed(e-r);{let n=10**(r-e);return Math.round(t/n)*n}}function ua(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=t.match(e);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function da(t){return t[t.length-1]}function _t(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function ha(t,e,r){return(r-t)/(e-t)}function Zr(t,e,r){return _t(e[0],e[1],ha(t[0],t[1],r))}function fa(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Ri=Object.freeze({__proto__:null,isString:Qe,type:ee,toPrecision:Et,parseFunction:ua,last:da,interpolate:_t,interpolateInv:ha,mapRange:Zr,parseCoordGrammar:fa,multiplyMatrices:M});class Bi{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const re=new Bi;var W={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const F={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function xr(t){return Array.isArray(t)?t:F[t]}function St(t,e,r,n={}){if(t=xr(t),e=xr(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let o={W1:t,W2:e,XYZ:r,options:n};if(re.run("chromatic-adaptation-start",o),o.M||(o.W1===F.D65&&o.W2===F.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===F.D50&&o.W2===F.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),re.run("chromatic-adaptation-end",o),o.M)return M(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Li=75e-6;var Ge,kr,ye,Nt,pa;const j=class{constructor(e){Te(this,Ge);Te(this,Nt);Te(this,ye,void 0);var o,a,s;this.id=e.id,this.name=e.name,this.base=e.base?j.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;this.coords=r;let n=e.white??this.base.white??"D65";this.white=xr(n),this.formats=e.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}e.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:e.cssId},Object.defineProperty(this,"cssId",{value:e.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=e.referred,Wt(this,ye,at(this,Nt,pa).call(this).reverse()),re.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=Li}={}){if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var e,r;return((r=(e=this.formats.functions)==null?void 0:e.color)==null?void 0:r.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=at(this,Ge,kr).call(this,e),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=at(this,Ge,kr).call(this,r),r):null}to(e,r){if(arguments.length===1&&([e,r]=[e.space,e.coords]),e=j.get(e),this===e)return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=fe(this,ye),o=fe(e,ye),a,s;for(let i=0;i<n.length&&n[i]===o[i];i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(e,r){return arguments.length===1&&([e,r]=[e.space,e.coords]),e=j.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;e.push((o==null?void 0:o.min)??0)}return e}static get all(){return[...new Set(Object.values(j.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof j)return e;if(ee(e)==="string"){let o=j.registry[e.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${e}"`);return o}if(r.length)return j.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){var l;let n=ee(e),o,a;if(n==="string"?e.includes(".")?[o,a]=e.split("."):[o,a]=[,e]:Array.isArray(e)?[o,a]=e:(o=e.space,a=e.coordId),o=j.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=ee(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=j.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===s||((l=d.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...d};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let g=j;Ge=new WeakSet,kr=function(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=fa(e.coords);let r=Object.entries(this.coords).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=Zr(i,l,a)),a=Et(a,o),c&&(a+=c),a})}return e},ye=new WeakMap,Nt=new WeakSet,pa=function(){let e=[this];for(let r=this;r=r.base;)e.push(r);return e},Vt(g,"registry",{}),Vt(g,"DEFAULT_FORMAT",{type:"functions",name:"color"});var D=new g({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class N extends g{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=D),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=r=>{let n=M(e.toXYZ_M,r);return this.white!==this.base.white&&(n=St(this.white,this.base.white,n)),n}),e.fromBase??(e.fromBase=r=>(r=St(this.base.white,this.white,r),M(e.fromXYZ_M,r)))),e.referred??(e.referred="display"),super(e)}}function ma(t){var r,n,o,a,s;let e={str:(r=String(t))==null?void 0:r.trim()};if(re.run("parse-start",e),e.color)return e.color;if(e.parsed=ua(e.str),e.parsed){let i=e.parsed.name;if(i==="color"){let l=e.parsed.args.shift(),c=e.parsed.rawArgs.indexOf("/")>0?e.parsed.args.pop():1;for(let u of g.all){let h=u.getFormat("color");if(h&&(l===h.id||(n=h.ids)!=null&&n.includes(l))){let p=Object.keys(u.coords).length,f=Array(p).fill(0);return f.forEach((m,v)=>f[v]=e.parsed.args[v]||0),{spaceId:u.id,coords:f,alpha:c}}}let d="";if(l in g.registry){let u=(s=(a=(o=g.registry[l].formats)==null?void 0:o.functions)==null?void 0:a.color)==null?void 0:s.id;u&&(d=`Did you mean color(${u})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of g.all){let c=l.getFormat(i);if(c&&c.type==="function"){let d=1;(c.lastAlpha||da(e.parsed.args).alpha)&&(d=e.parsed.args.pop());let u=e.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([h,p],f)=>{var x;let m=c.coordGrammar[f],v=(x=u[f])==null?void 0:x.type;if(m=m.find(_=>_==v),!m){let _=p.name||h;throw new TypeError(`${v} not allowed for ${_} in ${i}()`)}let C=m.range;v==="<percentage>"&&(C||(C=[0,1]));let A=p.range||p.refRange;C&&A&&(u[f]=Zr(C,A,u[f]))}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let i of g.all)for(let l in i.formats){let c=i.formats[l];if(c.type!=="custom"||c.test&&!c.test(e.str))continue;let d=c.parse(e.str);if(d)return d.alpha??(d.alpha=1),d}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function $(t){if(!t)throw new TypeError("Empty color reference");Qe(t)&&(t=ma(t));let e=t.space||t.spaceId;return e instanceof g||(t.space=g.get(e)),t.alpha===void 0&&(t.alpha=1),t}function et(t,e){return e=g.get(e),e.from(t)}function I(t,e){let{space:r,index:n}=g.resolveCoord(e,t.space);return et(t,r)[n]}function ga(t,e,r){return e=g.get(e),t.coords=e.to(t.space,r),t}function ne(t,e,r){if(t=$(t),arguments.length===2&&ee(arguments[1])==="object"){let n=arguments[1];for(let o in n)ne(t,o,n[o])}else{typeof r=="function"&&(r=r(I(t,e)));let{space:n,index:o}=g.resolveCoord(e,t.space),a=et(t,n);a[o]=r,ga(t,n,a)}return t}var Gr=new g({id:"xyz-d50",name:"XYZ D50",white:"D50",base:D,fromBase:t=>St(D.white,"D50",t),toBase:t=>St("D50",D.white,t),formats:{color:{}}});const Ni=216/24389,On=24/116,st=24389/27;let or=F.D50;var z=new g({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:or,base:Gr,fromBase(t){let r=t.map((n,o)=>n/or[o]).map(n=>n>Ni?Math.cbrt(n):(st*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>On?Math.pow(e[0],3):(116*e[0]-16)/st,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/st,e[2]>On?Math.pow(e[2],3):(116*e[2]-16)/st].map((n,o)=>n*or[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Ht(t){return(t%360+360)%360}function zi(t,e){if(t==="raw")return e;let[r,n]=e.map(Ht),o=n-r;return t==="increasing"?o<0&&(n+=360):t==="decreasing"?o>0&&(r+=360):t==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):t==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Xe=new g({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:z,fromBase(t){let[e,r,n]=t,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ht(o)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Dn=25**7,Mt=Math.PI,In=180/Mt,pe=Mt/180;function Er(t,e,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=z.from(t),l=Xe.from(z,[a,s,i])[1],[c,d,u]=z.from(e),h=Xe.from(z,[c,d,u])[1];l<0&&(l=0),h<0&&(h=0);let f=((l+h)/2)**7,m=.5*(1-Math.sqrt(f/(f+Dn))),v=(1+m)*s,C=(1+m)*d,A=Math.sqrt(v**2+i**2),x=Math.sqrt(C**2+u**2),_=v===0&&i===0?0:Math.atan2(i,v),K=C===0&&u===0?0:Math.atan2(u,C);_<0&&(_+=2*Mt),K<0&&(K+=2*Mt),_*=In,K*=In;let rt=c-a,nt=x-A,Y=K-_,Se=_+K,Qr=Math.abs(Y),Me;A*x===0?Me=0:Qr<=180?Me=Y:Y>180?Me=Y-360:Y<-180?Me=Y+360:console.log("the unthinkable has happened");let en=2*Math.sqrt(x*A)*Math.sin(Me*pe/2),Xa=(a+c)/2,Yt=(A+x)/2,tn=Math.pow(Yt,7),Z;A*x===0?Z=Se:Qr<=180?Z=Se/2:Se<360?Z=(Se+360)/2:Z=(Se-360)/2;let rn=(Xa-50)**2,Wa=1+.015*rn/Math.sqrt(20+rn),nn=1+.045*Yt,Ae=1;Ae-=.17*Math.cos((Z-30)*pe),Ae+=.24*Math.cos(2*Z*pe),Ae+=.32*Math.cos((3*Z+6)*pe),Ae-=.2*Math.cos((4*Z-63)*pe);let on=1+.015*Yt*Ae,Za=30*Math.exp(-1*((Z-275)/25)**2),Ga=2*Math.sqrt(tn/(tn+Dn)),qa=-1*Math.sin(2*Za*pe)*Ga,ot=(rt/(r*Wa))**2;return ot+=(nt/(n*nn))**2,ot+=(en/(o*on))**2,ot+=qa*(nt/(n*nn))*(en/(o*on)),Math.sqrt(ot)}const Oi=75e-6;function Ie(t,e=t.space,{epsilon:r=Oi}={}){t=$(t),e=g.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function We(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function oe(t,{method:e=W.gamut_mapping,space:r=t.space}={}){if(Qe(arguments[1])&&(r=arguments[1]),r=g.get(r),Ie(t,r,{epsilon:0}))return t;let n=O(t,r);if(e!=="clip"&&!Ie(t,r)){let o=oe(We(n),{method:"clip",space:r});if(Er(t,o)>2){let a=g.resolveCoord(e),s=a.space,i=a.id,l=O(n,s),d=(a.range||a.refRange)[0],u=.01,h=d,p=I(l,i);for(;p-h>u;){let f=We(l);f=oe(f,{space:r,method:"clip"}),Er(l,f)-2<u?h=I(l,i):p=I(l,i),ne(l,i,(h+p)/2)}n=O(l,r)}else n=o}if(e==="clip"||!Ie(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==t.space&&(n=O(n,t.space)),t.coords=n.coords,t}oe.returns="color";function O(t,e,{inGamut:r}={}){t=$(t),e=g.get(e);let n=e.from(t),o={space:e,coords:n,alpha:t.alpha};return r&&(o=oe(o)),o}O.returns="color";function At(t,{precision:e=W.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;t=$(t);let s=r;r=t.space.getFormat(r)??t.space.getFormat("default")??g.DEFAULT_FORMAT,n||(n=r.toGamut);let i=t.coords;if(i=i.map(c=>c||0),n&&!Ie(t)&&(i=oe(We(t),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=e,r.serialize)a=r.serialize(i,t.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,e):e!==null&&(i=i.map(p=>Et(p,e)));let d=[...i];if(c==="color"){let p=r.id||((l=r.ids)==null?void 0:l[0])||t.space.id;d.unshift(p)}let u=t.alpha;e!==null&&(u=Et(u,e));let h=t.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";a=`${c}(${d.join(r.commas?", ":" ")}${h})`}return a}const Di=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Ii=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var jt=new N({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Di,fromXYZ_M:Ii,formats:{color:{}}});const it=1.09929682680944,Hn=.018053968510807;var ba=new N({id:"rec2020",name:"REC.2020",base:jt,toBase(t){return t.map(function(e){return e<Hn*4.5?e/4.5:Math.pow((e+it-1)/it,1/.45)})},fromBase(t){return t.map(function(e){return e>=Hn?it*Math.pow(e,.45)-(it-1):4.5*e})},formats:{color:{}}});const Hi=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],ji=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var va=new N({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Hi,fromXYZ_M:ji});const Fi=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Ui=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ya=new N({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Fi,fromXYZ_M:Ui,formats:{color:{}}}),jn={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Fn=Array(3).fill("<percentage> | <number>[0, 255]"),Un=Array(3).fill("<number>[0, 255]");var Ze=new N({id:"srgb",name:"sRGB",base:ya,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Fn},rgb_number:{name:"rgb",commas:!0,coords:Un,noAlpha:!0},color:{},rgba:{coords:Fn,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Un},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(a=>Math.round(a*255));let n=r&&t.every(a=>a%17===0);return"#"+t.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=jn.black,e.alpha=0):e.coords=jn[t],e.coords)return e}}}}),$a=new N({id:"p3",name:"P3",base:va,fromBase:Ze.fromBase,toBase:Ze.toBase,formats:{color:{id:"display-p3"}}});W.display_space=Ze;if(typeof CSS<"u"&&CSS.supports)for(let t of[z,ba,$a]){let e=t.getMinCoords(),n=At({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){W.display_space=t;break}}function Yi(t,{space:e=W.display_space,...r}={}){let n=At(t,r);if(typeof CSS>"u"||CSS.supports("color",n)||!W.display_space)n=new String(n),n.color=t;else{let o=O(t,e);n=new String(At(o,r)),n.color=o}return n}function wa(t,e,r="lab"){r=g.get(r);let n=r.from(t),o=r.from(e);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Vi(t,e){return t=$(t),e=$(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((r,n)=>r===e.coords[n])}function ae(t){return I(t,[D,"y"])}function Ca(t,e){ne(t,[D,"y"],e)}function Xi(t){Object.defineProperty(t.prototype,"luminance",{get(){return ae(this)},set(e){Ca(this,e)}})}var Wi=Object.freeze({__proto__:null,getLuminance:ae,setLuminance:Ca,register:Xi});function Zi(t,e){t=$(t),e=$(e);let r=Math.max(ae(t),0),n=Math.max(ae(e),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Gi=.56,qi=.57,Ji=.62,Ki=.65,Yn=.022,Qi=1.414,el=.1,tl=5e-4,rl=1.14,Vn=.027,nl=1.14;function Xn(t){return t>=Yn?t:t+(Yn-t)**Qi}function me(t){let e=t<0?-1:1,r=Math.abs(t);return e*Math.pow(r,2.4)}function ol(t,e){e=$(e),t=$(t);let r,n,o,a,s,i;e=O(e,"srgb"),[a,s,i]=e.coords;let l=me(a)*.2126729+me(s)*.7151522+me(i)*.072175;t=O(t,"srgb"),[a,s,i]=t.coords;let c=me(a)*.2126729+me(s)*.7151522+me(i)*.072175,d=Xn(l),u=Xn(c),h=u>d;return Math.abs(u-d)<tl?n=0:h?(r=u**Gi-d**qi,n=r*rl):(r=u**Ki-d**Ji,n=r*nl),Math.abs(n)<el?o=0:n>0?o=n-Vn:o=n+Vn,o*100}function al(t,e){t=$(t),e=$(e);let r=Math.max(ae(t),0),n=Math.max(ae(e),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const sl=5e4;function il(t,e){t=$(t),e=$(e);let r=Math.max(ae(t),0),n=Math.max(ae(e),0);return n>r&&([r,n]=[n,r]),n===0?sl:(r-n)/n}function ll(t,e){t=$(t),e=$(e);let r=I(t,[z,"l"]),n=I(e,[z,"l"]);return Math.abs(r-n)}const cl=216/24389,Wn=24/116,lt=24389/27;let ar=F.D65;var _r=new g({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ar,base:D,fromBase(t){let r=t.map((n,o)=>n/ar[o]).map(n=>n>cl?Math.cbrt(n):(lt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>Wn?Math.pow(e[0],3):(116*e[0]-16)/lt,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/lt,e[2]>Wn?Math.pow(e[2],3):(116*e[2]-16)/lt].map((n,o)=>n*ar[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const sr=Math.pow(5,.5)*.5+.5;function ul(t,e){t=$(t),e=$(e);let r=I(t,[_r,"l"]),n=I(e,[_r,"l"]),o=Math.abs(Math.pow(r,sr)-Math.pow(n,sr)),a=Math.pow(o,1/sr)*Math.SQRT2-40;return a<7.5?0:a}var bt=Object.freeze({__proto__:null,contrastWCAG21:Zi,contrastAPCA:ol,contrastMichelson:al,contrastWeber:il,contrastLstar:ll,contrastDeltaPhi:ul});function dl(t,e,r={}){Qe(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(bt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}t=$(t),e=$(e);for(let a in bt)if("contrast"+n.toLowerCase()===a.toLowerCase())return bt[a](t,e,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function xa(t){let[e,r,n]=et(t,D),o=e+15*r+3*n;return[4*e/o,9*r/o]}function ka(t){let[e,r,n]=et(t,D),o=e+r+n;return[e/o,r/o]}function hl(t){Object.defineProperty(t.prototype,"uv",{get(){return xa(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return ka(this)}})}var fl=Object.freeze({__proto__:null,uv:xa,xy:ka,register:hl});function pl(t,e){return wa(t,e,"lab")}const ml=Math.PI,Zn=ml/180;function gl(t,e,{l:r=2,c:n=1}={}){let[o,a,s]=z.from(t),[,i,l]=Xe.from(z,[o,a,s]),[c,d,u]=z.from(e),h=Xe.from(z,[c,d,u])[1];i<0&&(i=0),h<0&&(h=0);let p=o-c,f=i-h,m=a-d,v=s-u,C=m**2+v**2-f**2,A=.511;o>=16&&(A=.040975*o/(1+.01765*o));let x=.0638*i/(1+.0131*i)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*Zn)):_=.36+Math.abs(.4*Math.cos((l+35)*Zn));let K=Math.pow(i,4),rt=Math.sqrt(K/(K+1900)),nt=x*(rt*_+1-rt),Y=(p/(r*A))**2;return Y+=(f/(n*x))**2,Y+=C/nt**2,Math.sqrt(Y)}const Gn=203;var qr=new g({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:D,fromBase(t){return t.map(e=>Math.max(e*Gn,0))},toBase(t){return t.map(e=>Math.max(e/Gn,0))}});const ct=1.15,ut=.66,qn=2610/2**14,bl=2**14/2610,Jn=3424/2**12,Kn=2413/2**7,Qn=2392/2**7,vl=1.7*2523/2**5,eo=2**5/(1.7*2523),dt=-.56,ir=16295499532821565e-27,yl=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],$l=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],wl=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Cl=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ea=new g({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:qr,fromBase(t){let[e,r,n]=t,o=ct*e-(ct-1)*n,a=ut*r-(ut-1)*e,i=M(yl,[o,a,n]).map(function(h){let p=Jn+Kn*(h/1e4)**qn,f=1+Qn*(h/1e4)**qn;return(p/f)**vl}),[l,c,d]=M(wl,i);return[(1+dt)*l/(1+dt*l)-ir,c,d]},toBase(t){let[e,r,n]=t,o=(e+ir)/(1+dt-dt*(e+ir)),s=M(Cl,[o,r,n]).map(function(h){let p=Jn-h**eo,f=Qn*h**eo-Kn;return 1e4*(p/f)**bl}),[i,l,c]=M($l,s),d=(i+(ct-1)*c)/ct,u=(l+(ut-1)*d)/ut;return[d,u,c]},formats:{color:{}}}),Sr=new g({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ea,fromBase(t){let[e,r,n]=t,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ht(o)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]},formats:{color:{}}});function xl(t,e){let[r,n,o]=Sr.from(t),[a,s,i]=Sr.from(e),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let d=o-i,u=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const _a=3424/4096,Sa=2413/128,Ma=2392/128,to=2610/16384,kl=2523/32,El=16384/2610,ro=32/2523,_l=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Sl=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Ml=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Al=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Mr=new g({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:qr,fromBase(t){let e=M(_l,t);return Tl(e)},toBase(t){let e=Pl(t);return M(Al,e)},formats:{color:{}}});function Tl(t){let e=t.map(function(r){let n=_a+Sa*(r/1e4)**to,o=1+Ma*(r/1e4)**to;return(n/o)**kl});return M(Sl,e)}function Pl(t){return M(Ml,t).map(function(n){let o=Math.max(n**ro-_a,0),a=Sa-Ma*n**ro;return 1e4*(o/a)**El})}function Rl(t,e){let[r,n,o]=Mr.from(t),[a,s,i]=Mr.from(e);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Bl=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Ll=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Nl=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],zl=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Tt=new g({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:D,fromBase(t){let r=M(Bl,t).map(n=>Math.cbrt(n));return M(Nl,r)},toBase(t){let r=M(zl,t).map(n=>n**3);return M(Ll,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Ol(t,e){let[r,n,o]=Tt.from(t),[a,s,i]=Tt.from(e),l=r-a,c=n-s,d=o-i;return Math.sqrt(l**2+c**2+d**2)}var Ar=Object.freeze({__proto__:null,deltaE76:pl,deltaECMC:gl,deltaE2000:Er,deltaEJz:xl,deltaEITP:Rl,deltaEOK:Ol});function Le(t,e,r={}){Qe(r)&&(r={method:r});let{method:n=W.deltaE,...o}=r;t=$(t),e=$(e);for(let a in Ar)if("deltae"+n.toLowerCase()===a.toLowerCase())return Ar[a](t,e,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Dl(t,e=.25){let n=[g.get("oklch","lch"),"l"];return ne(t,n,o=>o*(1+e))}function Il(t,e=.25){let n=[g.get("oklch","lch"),"l"];return ne(t,n,o=>o*(1-e))}var Hl=Object.freeze({__proto__:null,lighten:Dl,darken:Il});function Aa(t,e,r=.5,n={}){[t,e]=[$(t),$(e)],ee(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return tt(t,e,{space:o,outputSpace:a,premultiplied:s})(r)}function Ta(t,e,r={}){let n;Jr(t)&&([n,r]=[t,e],[t,e]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([t,e]=[$(t),$(e)],n=tt(t,e,l));let c=Le(t,e),d=o>0?Math.max(s,Math.ceil(c/o)+1):s,u=[];if(i!==void 0&&(d=Math.min(d,i)),d===1)u=[{p:.5,color:n(.5)}];else{let h=1/(d-1);u=Array.from({length:d},(p,f)=>{let m=f*h;return{p:m,color:n(m)}})}if(o>0){let h=u.reduce((p,f,m)=>{if(m===0)return 0;let v=Le(f.color,u[m-1].color,a);return Math.max(p,v)},0);for(;h>o;){h=0;for(let p=1;p<u.length&&u.length<i;p++){let f=u[p-1],m=u[p],v=(m.p+f.p)/2,C=n(v);h=Math.max(h,Le(C,f.color),Le(C,m.color)),u.splice(p,0,{p:v,color:n(v)}),p++}}}return u=u.map(h=>h.color),u}function tt(t,e,r={}){if(Jr(t)){let[l,c]=[t,e];return tt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;t=$(t),e=$(e),t=We(t),e=We(e);let i={colors:[t,e],options:r};if(n?n=g.get(n):n=g.registry[W.interpolationSpace]||t.space,o=o?g.get(o):n,t=O(t,n),e=O(e,n),t=oe(t),e=oe(e),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[I(t,c),I(e,c)];[d,u]=zi(l,[d,u]),ne(t,c,d),ne(e,c,u)}return s&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=a?a(l):l;let c=t.coords.map((h,p)=>{let f=e.coords[p];return _t(h,f,l)}),d=_t(t.alpha,e.alpha,l),u={space:n,coords:c,alpha:d};return s&&(u.coords=u.coords.map(h=>h/d)),o!==n&&(u=O(u,o)),u},{rangeArgs:i})}function Jr(t){return ee(t)==="function"&&!!t.rangeArgs}W.interpolationSpace="lab";function jl(t){t.defineFunction("mix",Aa,{returns:"color"}),t.defineFunction("range",tt,{returns:"function<color>"}),t.defineFunction("steps",Ta,{returns:"array<color>"})}var Fl=Object.freeze({__proto__:null,mix:Aa,steps:Ta,range:tt,isRange:Jr,register:jl}),Pa=new g({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ze,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,o,a]=t,[s,i,l]=[NaN,0,(r+e)/2],c=e-r;if(c!==0){switch(i=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function o(a){let s=(a+e/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Ra=new g({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Pa,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[e,o===0?0:200*(1-n/o),100*o]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let o=n*(1-r/2);return[e,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Ul=new g({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ra,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[e,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[e,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Yl=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Vl=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Ba=new N({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Yl,fromXYZ_M:Vl}),Xl=new N({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Ba,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e)),formats:{color:{id:"a98-rgb"}}});const Wl=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Zl=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var La=new N({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Gr,toXYZ_M:Wl,fromXYZ_M:Zl});const Gl=1/512,ql=16/512;var Jl=new N({id:"prophoto",name:"ProPhoto",base:La,toBase(t){return t.map(e=>e<ql?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=Gl?e**(1/1.8):16*e)},formats:{color:{id:"prophoto-rgb"}}}),Kl=new g({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Tt,fromBase(t){let[e,r,n]=t,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ht(o)]},toBase(t){let[e,r,n]=t,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[e,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const no=203,oo=2610/2**14,Ql=2**14/2610,ec=2523/2**5,ao=2**5/2523,so=3424/2**12,io=2413/2**7,lo=2392/2**7;var tc=new N({id:"rec2100pq",name:"REC.2100-PQ",base:jt,toBase(t){return t.map(function(e){return(Math.max(e**ao-so,0)/(io-lo*e**ao))**Ql*1e4/no})},fromBase(t){return t.map(function(e){let r=Math.max(e*no/1e4,0),n=so+io*r**oo,o=1+lo*r**oo;return(n/o)**ec})},formats:{color:{id:"rec2100-pq"}}});const co=.17883277,uo=.28466892,ho=.55991073,lr=3.7743;var rc=new N({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:jt,toBase(t){return t.map(function(e){return e<=.5?e**2/3*lr:Math.exp((e-ho)/co+uo)/12*lr})},fromBase(t){return t.map(function(e){return e/=lr,e<=1/12?Math.sqrt(3*e):co*Math.log(12*e-uo)+ho})},formats:{color:{id:"rec2100-hlg"}}});const Na={};re.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=za(t.W1,t.W2,t.options.method))});re.add("chromatic-adaptation-end",t=>{t.M||(t.M=za(t.W1,t.W2,t.options.method))});function Ft({id:t,toCone_M:e,fromCone_M:r}){Na[t]=arguments[0]}function za(t,e,r="Bradford"){let n=Na[r],[o,a,s]=M(n.toCone_M,t),[i,l,c]=M(n.toCone_M,e),d=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],u=M(d,n.toCone_M);return M(n.fromCone_M,u)}Ft({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Ft({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Ft({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Ft({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(F,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});F.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const nc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],oc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Oa=new N({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:F.ACES,toXYZ_M:nc,fromXYZ_M:oc,formats:{color:{}}});const ht=2**-16,cr=-.35828683,ft=(Math.log2(65504)+9.72)/17.52;var ac=new N({id:"acescc",name:"ACEScc",coords:{r:{range:[cr,ft],name:"Red"},g:{range:[cr,ft],name:"Green"},b:{range:[cr,ft],name:"Blue"}},referred:"scene",base:Oa,toBase(t){const e=-.3013698630136986;return t.map(function(r){return r<=e?(2**(r*17.52-9.72)-ht)*2:r<ft?2**(r*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(ht)+9.72)/17.52:e<ht?(Math.log2(ht+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})},formats:{color:{}}}),fo=Object.freeze({__proto__:null,XYZ_D65:D,XYZ_D50:Gr,XYZ_ABS_D65:qr,Lab_D65:_r,Lab:z,LCH:Xe,sRGB_Linear:ya,sRGB:Ze,HSL:Pa,HWB:Ul,HSV:Ra,P3_Linear:va,P3:$a,A98RGB_Linear:Ba,A98RGB:Xl,ProPhoto_Linear:La,ProPhoto:Jl,REC_2020_Linear:jt,REC_2020:ba,OKLab:Tt,OKLCH:Kl,Jzazbz:Ea,JzCzHz:Sr,ICTCP:Mr,REC_2100_PQ:tc,REC_2100_HLG:rc,ACEScg:Oa,ACEScc:ac}),ue;const R=class{constructor(...e){Te(this,ue,void 0);let r;e.length===1&&(r=$(e[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=e,Wt(this,ue,g.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in fe(this,ue).coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get space(){return fe(this,ue)}get spaceId(){return fe(this,ue).id}clone(){return new R(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let r=Yi(this,...e);return r.color=new R(r.color),r}static get(e,...r){return e instanceof R?e:new R(e,...r)}static defineFunction(e,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=R.get(l);else if(a==="function<color>"){let c=l;l=function(...d){let u=c(...d);return R.get(u)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>R.get(c)));return l};e in R||(R[e]=s),o&&(R.prototype[e]=function(...i){return s(this,...i)})}static defineFunctions(e){for(let r in e)R.defineFunction(r,e[r],e[r])}static extend(e){if(e.register)e.register(R);else for(let r in e)R.defineFunction(r,e[r])}};let w=R;ue=new WeakMap;w.defineFunctions({get:I,getAll:et,set:ne,setAll:ga,to:O,equals:Vi,inGamut:Ie,toGamut:oe,distance:wa,toString:At});Object.assign(w,{util:Ri,hooks:re,WHITES:F,Space:g,spaces:g.registry,parse:ma,defaults:W});for(let t of Object.keys(fo))g.register(fo[t]);for(let t in g.registry)Tr(t,g.registry[t]);re.add("colorspace-init-end",t=>{var e;Tr(t.id,t),(e=t.aliases)==null||e.forEach(r=>{Tr(r,t)})});function Tr(t,e){Object.keys(e.coords),Object.values(e.coords).map(n=>n.name);let r=t.replace(/-/g,"_");Object.defineProperty(w.prototype,r,{get(){let n=this.getAll(t);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return g.resolveCoord([e,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=g.resolveCoord([e,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=g.resolveCoord([e,a]);if(l>=0)return o[l]=s,this.setAll(t,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(t,n)},configurable:!0,enumerable:!0})}w.extend(Ar);w.extend({deltaE:Le});w.extend(Hl);w.extend({contrast:dl});w.extend(fl);w.extend(Wi);w.extend(Fl);w.extend(bt);function Da(t){return $e(t,(e,r)=>r instanceof w?X(r.toString({format:"hex"})):Da(r))}const sc="dodgerblue";function Pr(t){const e=Math.abs(t.contrast("white","APCA")),r=Math.abs(t.contrast("black","APCA"));return e>r?"white":"black"}function ur({background:t,foreground:e}){return{background:t??new w(Pr(e)),foreground:e??new w(Pr(t))}}var Pt;(function(t){t.Dark="dark",t.Light="light"})(Pt||(Pt={}));function ic(t){return t==="black"?"white":"black"}const lc={black:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")},white:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")}},cc={black:{backgroundFaint1:new w("#666"),backgroundFaint2:new w("#444")},white:{backgroundFaint1:new w("#ccc"),backgroundFaint2:new w("#fafafa")}};function po({themeColor:t=sc,themeStyle:e=Pt.Light}={}){const r=new w(t),n=new w(e===Pt.Dark?"black":"white"),o=Pr(n),a=new w(o),s={nav:{hover:ur({background:r.clone().set({"hsl.l":93})}),active:ur({background:r.clone().set({"hsl.l":90})}),selected:ur({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...cc[ic(o)],foreground:a,...lc[o]}};return Da(s)}const Rt=Vr()("element-book-change-route"),mo="vira-",{defineElement:Ut,defineElementNoInputs:Ec}=Uo({assertInputs:t=>{if(!t.tagName.startsWith(mo))throw new Error(`Tag name should start with '${mo}' but got '${t.tagName}'`)}}),Ia=k`
    pointer-events: none;
    opacity: 0.3;
`,He=se({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function uc(t){return`${t}px`}const Bt=se({"vira-form-input-border-radius":"8px"}),Lt=se({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":k`calc(${Bt["vira-form-input-border-radius"].value} + 4px)`});function Ha({mainSelector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=3}){const o=X(uc(n+r+e));return k`
        ${X(t)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Lt["vira-focus-outline-color"].value};
            border-radius: ${Lt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const ve=k`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,ja=k`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Rr=se({"vira-icon-color":"currentColor"}),dc=se({"vira-icon-stroke-color":Rr["vira-icon-color"].value,"vira-icon-fill-color":Rr["vira-icon-color"].value}),dr={...Rr,...dc},P=Ut()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>k`
        :host {
            display: inline-block;
            color: ${dr["vira-icon-color"].value};
            fill: ${dr["vira-icon-fill-color"].value};
            stroke: ${dr["vira-icon-stroke-color"].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${t["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t})=>t.icon?t.icon.svgTemplate:""});var Br;(function(t){t.Default="vira-button-default",t.Outline="vira-button-outline"})(Br||(Br={}));Ut()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle===Br.Outline,"vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:t,cssVars:e})=>k`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ja};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${Lt["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-active-color"].value};
        }

        ${t["vira-button-disabled"].selector} {
            ${Ia};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${ve};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Bt["vira-form-input-border-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition: color ${He["vira-interaction-animation-duration"].value},
                background-color
                    ${He["vira-interaction-animation-duration"].value},
                border-color ${He["vira-interaction-animation-duration"].value};
        }

        ${Ha({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${P} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?b`
                  <${P}
                      ${E(P,{icon:t.icon})}
                  ></${P}>
              `:"",r=t.text?b`
                  <span class="text-template">${t.text}</span>
              `:"";return b`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}});var Lr;(function(t){t.Header="header"})(Lr||(Lr={}));Ut()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},styles:({hostClasses:t})=>k`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ve};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${He["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${t["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Ye()},stateInitStatic:{contentHeight:0},renderCallback({state:t,updateState:e,dispatch:r,events:n,inputs:o}){const a=o.expanded?k`
                  height: ${t.contentHeight}px;
              `:k`
                  height: 0;
              `;return b`
            <button
                class="header-wrapper"
                ${q("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Lr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Fo(({contentRect:s})=>{e({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Nr({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>Nr({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function Fa({value:t,allowed:e,blocked:r}){const n=e?Nr({input:t,matcher:e}):!0,o=r?Nr({input:t,matcher:r}):!1;return n&&!o}function go(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,o)=>(Fa({...t,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}Ut()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-has-value":({inputs:t})=>!!t.value,"vira-input-fit-text":({inputs:t})=>!!t.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Ye(),inputBlocked:Ye()},styles:({hostClasses:t,cssVars:e})=>k`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Lt["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${Ia};
            }

            ${t["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${t["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${t["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${t["vira-input-fit-text"].selector} .size-span {
                ${ve};
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
                ${ja};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${ve};
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
                border-radius: ${Bt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${e["vira-input-border-color"].value};
                transition: border
                    ${He["vira-interaction-animation-duration"].value};
            }

            label {
                ${ve};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${Bt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Ha({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${P} {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ve};
                cursor: text;
                margin: ${e["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${e["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${e["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${e["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:o})=>{const{filtered:a}=go({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),s=t.icon?b`
                  <${P} ${E(P,{icon:t.icon})}></${P}>
              `:"",i=t.fitText?k`
                  width: ${r.forcedInputWidth}px;
              `:"";return b`
            <label>
                ${s}
                ${Ce(!!t.fitText,b`
                        <span
                            class="size-span"
                            ${Fo(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${Ro({"have-value":!!a})}
                    style=${i}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${a}
                    ${q("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=a;let h=c.value??"";if(d)if(d.length===1)Fa({value:d,allowed:t.allowedInputs,blocked:t.blockedInputs})||(h=u,e(new o.inputBlocked(d)));else{const{filtered:p,blocked:f}=go({value:d,allowed:t.allowedInputs,blocked:t.blockedInputs});h=p,e(new o.inputBlocked(f))}c.value!==h&&(c.value=h),u!==h&&e(new o.valueChange(h))})}
                    placeholder=${t.placeholder}
                />
                ${Ce(!!t.suffix,b`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function Ua({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}const hc=Ua({name:"Element16Icon",svgTemplate:b`
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
    `}),fc=Ua({name:"Element24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),{defineElement:J,defineElementNoInputs:_c}=Uo(),H=J()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:t})=>k`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${t["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t,dispatch:e})=>{var n,o;const r=((o=t.router)==null?void 0:o.createRoutesUrl({...(n=t.router)==null?void 0:n.getCurrentRawRoutes(),...t.route}))??"#";return b`
            <a
                href=${r}
                ${q("click",a=>{(!t.router||gi(a))&&(a.preventDefault(),window.scrollTo(0,0),e(new Rt(t.route)))})}
            >
                <slot></slot>
            </a>
        `}}),pt=J()({tagName:"book-nav",styles:k`
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
            ${H.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * var(--indent, 0)) + 8px);
        }

        ${H} {
            font-size: 20px;
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
            text-overflow: ellipsis;
            display: inline-flex;
            gap: 8px;
            align-items: center;
            font-size: 0.75em;
        }

        ${P} {
            display: inline-flex;
            color: ${y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){const e=Ya({indent:0,entryTreeNode:t.tree,rootPath:[],router:t.router,selectedPath:t.selectedPath.slice(1)});return b`
            <ul>
                ${e}
            </ul>
        `}});function Ya({indent:t,entryTreeNode:e,rootPath:r,selectedPath:n,router:o}){const a=e.urlBreadcrumb?r.concat(e.urlBreadcrumb):r,s=Object.values(e.children).map(i=>Ya({indent:t+1,entryTreeNode:i,rootPath:a,selectedPath:n,router:o}));return b`
        <div class="nav-tree-entry" style="--indent: ${t};">
            <slot name=${V.NavHeader}></slot>
            <li class=${e.entry.entryType}>
                <${H}
                    ${E(H,{router:o,route:{paths:[L.Book,...a]}})}
                    class=${Ro({"title-row":!0,selected:Ne(n,a)})}
                >
                    <div class="title-text">
                        ${Ce(De(e,T.ElementExample),b`
                                <${P}
                                    ${E(P,{icon:hc})}
                                ></${P}>
                            `)}
                        ${e.entry.title}
                    </div>
                </${H}>
            </li>
            ${s}
        </div>
    `}const B=J()({tagName:"book-error",styles:k`
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
    `,renderCallback({inputs:t}){return(Hr(t.message,"array")?t.message:[t.message]).map(r=>b`
                    <p>${r}</p>
                `)}}),hr=J()({tagName:"book-breadcrumbs",styles:k`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.currentRoute.paths.slice(1);return e.length?e.map((r,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),i=a?"":b`
                      <span class="spacer">&gt;</span>
                  `;return b`
                <${H}
                    ${E(H,{route:{hash:void 0,search:void 0,paths:[L.Book,...s]},router:t.router})}
                >
                    ${r}
                </${H}>
                ${i}
            `}):b`
                &nbsp;
            `}}),vt=J()({tagName:"book-page-controls",events:{controlValueChange:Ye()},styles:k`
        :host {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .control-wrapper {
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }
    `,renderCallback({inputs:t,dispatch:e,events:r}){return Object.entries(t.config).map(([n,o])=>{const a=pc(t.currentValues[n],o.controlType,s=>{e(new r.controlValueChange({fullUrlBreadcrumbs:t.fullUrlBreadcrumbs,newValues:{...t.currentValues,[n]:s}}))});return b`
                    <label class="control-wrapper">
                        <span>${n}</span>
                        ${a}
                    </label>
                `})}});function pc(t,e,r){return e===Q.Text?b`
            <input
                type="text"
                .value=${t||""}
                ${q("input",n=>{const o=n.currentTarget;if(!(o instanceof HTMLInputElement))throw new Error("Din't get an input element from the event target.");r(o.value)})}
            />
        `:b`
            <p class="error">${e} controls are not implemented yet.</p>
        `}const mt=J()({tagName:"book-element-example-controls",styles:k`
        :host {
            display: flex;
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:t}){return b`
            <span>
                ${t.elementExample.title}
                <span></span>
            </span>
        `}}),bo=Symbol("unset-internal-state"),fr=J()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:bo},renderCallback({state:t,inputs:e,updateState:r}){if(!e.elementExample.renderCallback||typeof e.elementExample.renderCallback=="string")throw new Error(`Failed to render example '${e.elementExample.title}': renderCallback is not a function`);t.isUnset===bo&&r({isUnset:void 0,...e.elementExample.stateInitStatic});try{const n=e.elementExample.renderCallback({state:t,updateState:r,controls:e.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return b`
                ${Ce(!!e.elementExample.styles,b`
                        <style>
                            ${e.elementExample.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),b`
                <${B}
                    ${E(B,{message:`inputs.fullUrlBreadcrumbs.join(' > ')} failed: ${Or(n)}`})}
                ></${B}>
            `}},options:{allowPolymorphicState:!0}}),pr=J()({tagName:"book-element-example-wrapper",styles:k`
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

        .individual-example-wrapper:hover ${mt} {
            color: ${y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){return t.elementExample.errors.length?b`
                <${B}
                    ${E(B,{message:t.elementExample.errors.map(e=>e.message)})}
                ></${B}>
            `:b`
            <div class="individual-example-wrapper">
                <${mt}
                    ${E(mt,{elementExample:t.elementExample})}
                ></${mt}>
                <${fr}
                    ${E(fr,{elementExample:t.elementExample,fullUrlBreadcrumbs:t.fullUrlBreadcrumbs,currentPageControls:t.parentControls})}
                ></${fr}>
            </div>
        `}}),ge=J()({tagName:"book-entry-display",styles:k`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
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

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin-top: 32px;
        }

        .inline-entry + .inline-entry {
            margin-left: 16px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        h1,
        h2,
        h3 {
            margin: 0;
            padding: 0;
        }

        h2,
        h3 {
            font-size: 1.5em;
        }

        ${H} {
            display: inline-block;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${P} {
            color: ${y["element-book-accent-icon-color"].value};
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        }

        .description {
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        .description:hover {
            color: ${y["element-book-page-foreground-color"].value};
        }

        .description p {
            margin: 0;
            padding: 0;
        }

        .description p:first-child {
            margin-top: 8px;
        }
    `,renderCallback:({inputs:t,dispatch:e})=>{const r=na(t.currentNode);t.debug&&console.info({flattenedTree:r});const n=sa(t.currentRoute.paths),o=zt(t.currentNode.entry,!1).reverse(),a=mc({flattenedTree:r,parentBreadcrumbs:o,isTopLevel:!0,router:t.router,isSearching:!!n,currentControls:t.currentControls});return b`
            <div class="title-bar">
                ${Ce(!!n,b`
                        &nbsp;
                    `,b`
                        <${hr}
                            ${E(hr,{currentRoute:t.currentRoute,router:t.router})}
                        ></${hr}>
                    `)}
                <input
                    placeholder="search"
                    .value=${n}
                    ${q("input",async s=>{const i=s.currentTarget;if(!(i instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const l=i.value;await fs(500),i.value===l&&(i.value?e(new Rt({paths:[L.Search,encodeURIComponent(i.value)]})):e(new Rt(It)))})}
                />
            </div>
            <div class="all-book-entries-wrapper">${a}</div>
            <slot name=${V.Footer}></slot>
        `}});function mc({flattenedTree:t,parentBreadcrumbs:e,isTopLevel:r,router:n,isSearching:o,currentControls:a}){return!t.length&&o?[b`
                No results
            `]:Ms(t,s=>s.fullUrlBreadcrumbs.join(">"),s=>{if(De(s,T.Page)){const i=s.entry;if(!yt(i,T.Page))throw new Error("nested entry should be a page");const l=!!Object.keys(s.entry.elementExamples).length,c=b`
                    ${Ce(l,b`
                            <${P} ${E(P,{icon:fc})}></${P}>
                        `)}
                    ${i.title}
                `,d=r?b`
                          <h2 class="header-with-icon">${c}</h2>
                      `:b`
                          <h3 class="header-with-icon">${c}</h3>
                      `,u=[L.Book,...e.concat(s.urlBreadcrumb)];return s.entry.errors.length?b`
                        <${B}
                            class="block-entry"
                            ${E(B,{message:s.entry.errors.map(h=>h.message)})}
                        ></${B}>
                    `:b`
                    <div class="page-header block-entry">
                        <div class="title-group">
                            <${H}
                                ${E(H,{route:{paths:u,hash:void 0,search:void 0},router:n})}
                            >
                                ${d}
                            </${H}>
                            ${gc(i)}
                            <${vt}
                                ${E(vt,{config:s.entry.controls,currentValues:Tn(a,s.fullUrlBreadcrumbs),fullUrlBreadcrumbs:s.fullUrlBreadcrumbs})}
                            ></${vt}>
                        </div>
                    </div>
                `}else if(De(s,T.ElementExample)){const i=Tn(a,s.fullUrlBreadcrumbs.slice(0,-1));return b`
                    <${pr}
                        class="inline-entry"
                        ${E(pr,{elementExample:s.entry,fullUrlBreadcrumbs:s.fullUrlBreadcrumbs,parentControls:i})}
                    ></${pr}>
                `}else return De(s,T.Root)?"":b`
                    <${B}
                        class="block-entry"
                        ${E(B,{message:`Unknown entry type for rendering: '${s.entry.entryType}'`})}
                    ></${B}>
                `})}function gc(t){const e=(t.descriptionParagraphs??[]).map(r=>b`
            <p>${r}</p>
        `);return b`
        <div class="description">${e}</div>
    `}function bc(t,e,r){if(e[0]===L.Search)return t;wr(e.slice(1),t)||r(It);const o=wr(e.slice(1),t);if(!o)throw new Error(`Tried to self-correct for invalid path ${e.join("/")}
                        but failed to do so.`);return o}const Be=jo()({tagName:"element-book-app",events:{pathUpdate:Ye()},stateInitStatic:{currentRoute:It,router:void 0,colors:{config:void 0,theme:po(void 0)},treeBasedCurrentControls:void 0},styles:k`
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

        ${ge} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${pt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,cleanupCallback({state:t,updateState:e}){t.router&&(t.router.removeAllRouteListeners(),e({router:void 0}))},renderCallback:({state:t,inputs:e,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c,d;try{let u=function(x){t.router?t.router.setRoutes(x):n({currentRoute:{...t.currentRoute,...x}}),e.elementBookRoutePaths&&!Ne(e.elementBookRoutePaths,t.currentRoute.paths)&&o(new a.pathUpdate(x.paths??[]))};var s=u;if(e.elementBookRoutePaths&&!Ne(e.elementBookRoutePaths,t.currentRoute.paths)&&u({paths:e.elementBookRoutePaths}),(i=e.internalRouterConfig)!=null&&i.useInternalRouter&&!t.router){const x=Mi(e.internalRouterConfig.basePath);n({router:x}),x.addRouteListener(!0,_=>{n({currentRoute:_})})}else!((l=e.internalRouterConfig)!=null&&l.useInternalRouter)&&t.router&&t.router.removeAllRouteListeners();const h={themeColor:e.themeColor};if(!Ne(h,(c=t.colors)==null?void 0:c.config)){const x=po(h);n({colors:{config:h,theme:x}}),Pi(r,x)}const p=e.debug??!1,f=li({entries:e.entries,everythingTitle:e.everythingTitle,everythingDescriptionParagraphs:e.everythingDescriptionParagraphs??[],debug:p});(!t.treeBasedCurrentControls||t.treeBasedCurrentControls.trigger!==e.entries)&&n({treeBasedCurrentControls:{trigger:e.entries,currentControls:oa(f)}});const m=sa(t.currentRoute.paths),v=m?pi({entries:e.entries,searchQuery:m,startTree:f}):f,C=bc(v,t.currentRoute.paths,u),A=(d=t.treeBasedCurrentControls)==null?void 0:d.currentControls;return A?(e.debug&&console.info({currentControls:A}),b`
                <div
                    class="root"
                    ${q(Rt,x=>{const _=r.shadowRoot.querySelector(ge.tagName);_?_.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${ge.tagName}' for scrolling.`),u(x.detail)})}
                    ${q(vt.events.controlValueChange,x=>{if(!t.treeBasedCurrentControls)return;const _=hi(A,x.detail.fullUrlBreadcrumbs,x.detail.newValues);n({treeBasedCurrentControls:{...t.treeBasedCurrentControls,currentControls:_}})})}
                >
                    <${pt}
                        ${E(pt,{tree:f,router:t.router,selectedPath:t.currentRoute.paths})}
                    >
                        <slot
                            name=${V.NavHeader}
                            slot=${V.NavHeader}
                        ></slot>
                    </${pt}>
                    <${ge}
                        ${E(ge,{currentRoute:t.currentRoute,currentNode:C,router:t.router,debug:p,currentControls:A})}
                    >
                        <slot
                            name=${V.Footer}
                            slot=${V.Footer}
                        ></slot>
                    </${ge}>
                </div>
            `):b`
                    <${B}
                        ${E(B,{message:"Failed to generate page controls."})}
                    ></${B}>
                `}catch(u){return console.error(u),b`
                <p class="error">${Or(u)}</p>
            `}}}),zr=ke({title:"Parent Page 1",parent:void 0}),Kr=ke({title:"Page with error",parent:void 0}),vo=ke({title:"Sub Page 1",parent:zr});function yo(t,e){return ke({title:`test ${t}`,parent:e,elementExamplesCallback({defineExample:n}){n({title:"example",renderCallback(){return"element example here"}})}})}const $o=ke({title:"test 2",parent:Kr,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:t}){t({title:"example 1",renderCallback(){return"hi"}}),t({title:"example 2",renderCallback(){return"hi"}})}}),vc=ke({title:"test 3",controls:{thing:{initValue:"there",controlType:Q.Text}},parent:Kr,elementExamplesCallback({defineExample:t}){t({title:"example 3 1",renderCallback(){return"hi"}}),t({title:"example 3 2",renderCallback({controls:e}){return`hello ${e.thing}`}}),t({title:"example with error",renderCallback({controls:e}){return"broken"}}),t({title:"example with error",renderCallback({controls:e}){return"broken"}})}}),Va=[yo(0,zr),vo,...Array(100).fill(0).map((t,e)=>yo(e+1,vo)),Kr,$o,$o,vc,zr];console.info({entries:Va});Dt({tagName:"vir-app",styles:k`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${Be} {
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
    `,stateInitStatic:{themeColor:void 0,paths:["book"]},renderCallback:({state:t,updateState:e})=>b`
            <label>
                Theme color
                <input
                    ${q("input",r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("input element not found for input event");e({themeColor:n.value})})}
                    type="color"
                />
            </label>
            <${Be}
                ${E(Be,{entries:Va,themeColor:t.themeColor,internalRouterConfig:{useInternalRouter:!0},everythingTitle:"All",debug:!0})}
                ${q(Be.events.pathUpdate,r=>{e({paths:r.detail})})}
            >
                <h1 slot=${V.NavHeader}>My Title</h1>
                <footer slot=${V.Footer}>Example Footer</footer>
            </${Be}>
        `});
