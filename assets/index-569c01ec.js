var Ja=Object.defineProperty;var Ka=(e,t,r)=>t in e?Ja(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Yt=(e,t,r)=>(Ka(e,typeof t!="symbol"?t+"":t,r),r),Wt=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var fe=(e,t,r)=>(Wt(e,t,"read from private field"),r?r.call(e):t.get(e)),Ae=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Xt=(e,t,r,n)=>(Wt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var st=(e,t,r)=>(Wt(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();var Q;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Text="text"})(Q||(Q={}));const Qa={[Q.Checkbox]:!1,[Q.Color]:"",[Q.Dropdown]:0,[Q.Text]:""};function es(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=Qa[o.controlType];typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`))}),r}function ts(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const rs={capitalizeFirstLetter:!1};function ns(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function os(e,t){return t.capitalizeFirstLetter?ns(e):e}function as(e,t=rs){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return os(n,t)}function sn(e){return e!==e.toUpperCase()}function ss(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=sn(s)||sn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const is=["january","february","march","april","may","june","july","august","september","october","november","december"];is.map(e=>e.slice(0,3));function Co(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>zt(r).trim()).join(`
`))}function zt(e){return e?e instanceof Error?e.message:String(e):""}function xo(e){return e instanceof Error?e:new Error(zt(e))}function ko(e){return!!e}function br(e){return!!e&&typeof e=="object"}const ln="Failed to compare objects using JSON.stringify";function cn(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Be(e,t){try{return e===t?!0:br(e)&&br(t)?cn(Object.keys(e).sort(),Object.keys(t).sort())?Object.keys(e).every(n=>Be(e[n],t[n])):!1:cn(e,t)}catch(r){const n=xo(r);throw n.message.startsWith(ln)||(n.message=`${ln}: ${n.message}`),n}}function ls(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const cs=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ce(e,t){return e?cs.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Hr(e,t){return e&&t.every(r=>Ce(e,r))}function te(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function us(e){return Array.isArray(e)?"array":typeof e}function Ot(e,t){return us(e)===t}function ds(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function hs(e){return te(e).filter(t=>isNaN(Number(t)))}function fs(e){return hs(e).map(r=>e[r])}function ps(e,t){return fs(t).includes(e)}function $e(e,t){let r=!1;const n=te(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(te(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function ms(e){const t=Eo();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Eo(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Eo.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}var T;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(T||(T={}));function jr(e,t){const r=$t(e.title);return e.parent?[$t(e.parent.title),...jr(e.parent,!1)].concat(t?[r]:[]):t?[r]:[]}function $t(e){return ts(e).toLowerCase().replaceAll(/\s/g,"-")}function gs({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function xe(e){const t={...e,entryType:T.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:T.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(ko)};r.add(n.title),t.elementExamples[$t(o.title)]=o}}),t}var W;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(W||(W={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Je=e=>(...t)=>({_$litDirective$:e,values:t});let ke=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zt;const wt=window,we=wt.trustedTypes,un=we?we.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ct="$lit$",q=`lit$${(Math.random()+"").slice(9)}$`,Fr="?"+q,bs=`<${Fr}>`,de=document,He=()=>de.createComment(""),je=e=>e===null||typeof e!="object"&&typeof e!="function",_o=Array.isArray,So=e=>_o(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Gt=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dn=/-->/g,hn=/>/g,ie=RegExp(`>|${Gt}(?:([^\\s"'>=/]+)(${Gt}*=${Gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fn=/'/g,pn=/"/g,Mo=/^(?:script|style|textarea|title)$/i,vs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ys=vs(1),U=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),mn=new WeakMap,ce=de.createTreeWalker(de,129,null,!1),Ao=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=Te;for(let l=0;l<r;l++){const c=e[l];let d,u,h=-1,p=0;for(;p<c.length&&(s.lastIndex=p,u=s.exec(c),u!==null);)p=s.lastIndex,s===Te?u[1]==="!--"?s=dn:u[1]!==void 0?s=hn:u[2]!==void 0?(Mo.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=ie):u[3]!==void 0&&(s=ie):s===ie?u[0]===">"?(s=o??Te,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?ie:u[3]==='"'?pn:fn):s===pn||s===fn?s=ie:s===dn||s===hn?s=Te:(s=ie,o=void 0);const f=s===ie&&e[l+1].startsWith("/>")?" ":"";a+=s===Te?c+bs:h>=0?(n.push(d),c.slice(0,h)+Ct+c.slice(h)+q+f):c+q+(h===-2?(n.push(void 0),l):f)}const i=a+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[un!==void 0?un.createHTML(i):i,n]};class Fe{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,d]=Ao(t,r);if(this.el=Fe.createElement(c,n),ce.currentNode=this.el.content,r===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=ce.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const h of o.getAttributeNames())if(h.endsWith(Ct)||h.startsWith(q)){const p=d[s++];if(u.push(h),p!==void 0){const f=o.getAttribute(p.toLowerCase()+Ct).split(q),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:a,name:m[2],strings:f,ctor:m[1]==="."?Po:m[1]==="?"?Ro:m[1]==="@"?No:Ke})}else l.push({type:6,index:a})}for(const h of u)o.removeAttribute(h)}if(Mo.test(o.tagName)){const u=o.textContent.split(q),h=u.length-1;if(h>0){o.textContent=we?we.emptyScript:"";for(let p=0;p<h;p++)o.append(u[p],He()),ce.nextNode(),l.push({type:2,index:++a});o.append(u[h],He())}}}else if(o.nodeType===8)if(o.data===Fr)l.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(q,u+1))!==-1;)l.push({type:7,index:a}),u+=q.length-1}a++}}static createElement(t,r){const n=de.createElement("template");return n.innerHTML=t,n}}function he(e,t,r=e,n){var o,a,s,i;if(t===U)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=je(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=he(e,l._$AS(e,t.values),l,n)),t}let To=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:de).importNode(n,!0);ce.currentNode=a;let s=ce.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let d;c.type===2?d=new Ee(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new Bo(s,this,t)),this._$AV.push(d),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=ce.nextNode(),i++)}return ce.currentNode=de,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class Ee{constructor(t,r,n,o){var a;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=he(this,t,r),je(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==U&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):So(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==S&&je(this._$AH)?this._$AA.nextSibling.data=t:this.$(de.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Fe.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new To(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=mn.get(t.strings);return r===void 0&&mn.set(t.strings,r=new Fe(t)),r}T(t){_o(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Ee(this.k(He()),this.k(He()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Ke{constructor(t,r,n,o,a){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=he(this,t,r,0),s=!je(t)||t!==this._$AH&&t!==U,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=he(this,i[n+l],r,l),c===U&&(c=this._$AH[l]),s||(s=!je(c)||c!==this._$AH[l]),c===S?t=S:t!==S&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Po extends Ke{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}const $s=we?we.emptyScript:"";class Ro extends Ke{constructor(){super(...arguments),this.type=4}j(t){t&&t!==S?this.element.setAttribute(this.name,$s):this.element.removeAttribute(this.name)}}class No extends Ke{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=he(this,t,r,0))!==null&&n!==void 0?n:S)===U)return;const o=this._$AH,a=t===S&&o!==S||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==S&&(o===S||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Bo{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){he(this,t)}}const ws={O:Ct,P:q,A:Fr,C:1,M:Ao,L:To,D:So,R:he,I:Ee,V:Ke,H:Ro,N:No,U:Po,F:Bo},gn=wt.litHtmlPolyfillSupport;gn==null||gn(Fe,Ee),((Zt=wt.litHtmlVersions)!==null&&Zt!==void 0?Zt:wt.litHtmlVersions=[]).push("2.7.4");const Cs=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Ee(t.insertBefore(He(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:xs}=ws,bn=()=>document.createComment(""),Pe=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(bn(),a),i=o.insertBefore(bn(),a);r=new xs(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const d=c.nextSibling;o.insertBefore(c,a),c=d}}}return r},le=(e,t,r=e)=>(e._$AI(t,r),e),ks={},Es=(e,t=ks)=>e._$AH=t,_s=e=>e._$AH,qt=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=Je(class extends ke{constructor(e){var t;if(super(e),e.type!==Dt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return U}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Ss=Je(class extends ke{constructor(e){if(super(e),e.type!==Dt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=_s(e),{values:s,keys:i}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let d,u,h=0,p=a.length-1,f=0,m=s.length-1;for(;h<=p&&f<=m;)if(a[h]===null)h++;else if(a[p]===null)p--;else if(l[h]===i[f])c[f]=le(a[h],s[f]),h++,f++;else if(l[p]===i[m])c[m]=le(a[p],s[m]),p--,m--;else if(l[h]===i[m])c[m]=le(a[h],s[m]),Pe(e,c[m+1],a[h]),h++,m--;else if(l[p]===i[f])c[f]=le(a[p],s[f]),Pe(e,a[h],a[p]),p--,f++;else if(d===void 0&&(d=vn(i,f,m),u=vn(l,h,p)),d.has(l[h]))if(d.has(l[p])){const v=u.get(i[f]),C=v!==void 0?a[v]:null;if(C===null){const A=Pe(e,a[h]);le(A,s[f]),c[f]=A}else c[f]=le(C,s[f]),Pe(e,a[h],C),a[v]=null;f++}else qt(a[p]),p--;else qt(a[h]),h++;for(;f<=m;){const v=Pe(e,c[m+1]);le(v,s[f]),c[f++]=v}for(;h<=p;){const v=a[h++];v!==null&&qt(v)}return this.ht=i,Es(e,c),U}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vr=class extends ke{constructor(t){if(super(t),this.et=S,t.type!==Dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S||t==null)return this.ft=void 0,this.et=t;if(t===U)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};vr.directiveName="unsafeHTML",vr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yn=class extends vr{};yn.directiveName="unsafeSVG",yn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ms(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=window,Ur=bt.ShadowRoot&&(bt.ShadyCSS===void 0||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vr=Symbol(),$n=new WeakMap;let zo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Vr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ur&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=$n.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&$n.set(r,t))}return t}toString(){return this.cssText}};const X=e=>new zo(typeof e=="string"?e:e+"",void 0,Vr),Le=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new zo(r,e,Vr)},As=(e,t)=>{Ur?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=bt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},wn=Ur?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return X(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jt;const xt=window,Cn=xt.trustedTypes,Ts=Cn?Cn.emptyScript:"",xn=xt.reactiveElementPolyfillSupport,yr={toAttribute(e,t){switch(t){case Boolean:e=e?Ts:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Oo=(e,t)=>t!==e&&(t==t||e==e),Kt={attribute:!0,type:String,converter:yr,reflect:!1,hasChanged:Oo},$r="finalized";class be extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Kt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Kt}static finalize(){if(this.hasOwnProperty($r))return!1;this[$r]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(wn(o))}else t!==void 0&&r.push(wn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return As(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Kt){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:yr).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:yr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Oo)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}be[$r]=!0,be.elementProperties=new Map,be.elementStyles=[],be.shadowRootOptions={mode:"open"},xn==null||xn({ReactiveElement:be}),((Jt=xt.reactiveElementVersions)!==null&&Jt!==void 0?Jt:xt.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qt,er;class ze extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Cs(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return U}}ze.finalized=!0,ze._$litElement$=!0,(Qt=globalThis.litElementHydrateSupport)===null||Qt===void 0||Qt.call(globalThis,{LitElement:ze});const kn=globalThis.litElementPolyfillSupport;kn==null||kn({LitElement:ze});((er=globalThis.litElementVersions)!==null&&er!==void 0?er:globalThis.litElementVersions=[]).push("3.3.2");var Ps=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(C){if(C!==void 0&&typeof C!="function")throw new TypeError("Function expected");return C}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,d=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),u,h=!1,p=r.length-1;p>=0;p--){var f={};for(var m in n)f[m]=m==="access"?{}:n[m];for(var m in n.access)f.access[m]=n.access[m];f.addInitializer=function(C){if(h)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(C||null))};var v=(0,r[p])(i==="accessor"?{get:d.get,set:d.set}:d[l],f);if(i==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(u=s(v.get))&&(d.get=u),(u=s(v.set))&&(d.set=u),(u=s(v.init))&&o.push(u)}else(u=s(v))&&(i==="field"?o.push(u):d[l]=u)}c&&Object.defineProperty(c,n.name,d),h=!0},Rs=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Ns=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Bs(){function e(t,r){return t}return e}let Do=(()=>{let e=[Bs()],t,r=[],n;return n=class extends ze{},Ns(n,"DeclarativeElement"),Ps(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,Rs(n,r),n})();function se(e){if(br(e))return $e(e,(r,n)=>{if(!Ot(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(ss(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?X(r):r.startsWith("-")?Le`-${X(r)}`:Le`--${X(r)}`;return{name:s,value:Le`var(${s}, ${X(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${se.name}' function.`)}function Ls({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Os=(e,t,r)=>{t.constructor.createProperty(r,e)};function Io(e){return(t,r)=>r!==void 0?Os(e,t,r):zs(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tr;((tr=window.HTMLSlotElement)===null||tr===void 0?void 0:tr.prototype.assignedElements)!=null;const wr=Symbol("this-is-an-element-vir-declarative-element"),Yr=Symbol("key for ignoring inputs not having been set yet"),Ds={[Yr]:!0,allowPolymorphicState:!1};function Ho(e,t){const r=e.instanceState;te(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&te(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),jo(e)}function jo(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Fo(e,t){return Cr(e,t),e.element}function Cr(e,t){if(e.type!==Dt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}function E(e,t){return t?En(e,t):En(void 0,e)}const En=Je(class extends ke{constructor(e){super(e),this.element=Fo(e,"assign")}render(e,t){return Is(e,this.element,t),U}});function Is(e,t,r){Ho(t,r)}function Uo(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Do?!0:Uo(r)}function _n(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Hs extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Wr(){return e=>{var t;return t=class extends Hs{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Ue(){return Wr()}function js(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Wr()(r);return t[r]=n,t},{}):{}}const Sn="_is_element_vir_observable_property_handler_instance",Mn="_is_element_vir_observable_property_handler_creator";function Fs(e){return Ce(e,Mn)&&e[Mn]===!0}function Us(e){return Ce(e,Sn)&&e[Sn]===!0}function Vs(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function An(e,t){const r=e;function n(s){t?Vs(s,e,e.tagName):Io()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=e.observablePropertyHandlerMap[i];function d(u){s[i]=u,r[i]=u}return Fs(l)&&(l=l.init()),Us(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,u=>{d(u)}),e.observablePropertyHandlerMap[i]=l):c?c.setValue(l):d(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function Ys(e){return e?$e(e,t=>t):{}}function Ws({hostClassNames:e,cssVars:t}){return{hostClasses:$e(e,(r,n)=>({name:X(n),selector:X(`:host(.${n})`)})),cssVars:t}}function Xs({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&te(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function Zs(e,t){function r(o){te(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var Gs=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function It(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Ds,...e.options},n=js(e.events),o=Ys(e.hostClasses);e.hostClasses&&_n(e.tagName,e.hostClasses),e.cssVars&&_n(e.tagName,e.cssVars);const a=e.cssVars?se(e.cssVars):{},s=typeof e.styles=="function"?e.styles(Ws({hostClassNames:o,cssVars:a})):e.styles||Le``,i=e.renderCallback,l=(t=class extends Do{createRenderParams(){return Zs(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){jo(this)}render(){try{Uo(this)&&!this.haveInputsBeenSet&&!r[Yr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${E.name}" directive on it. If no inputs are intended, use "${It.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(c);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Xs({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=xo(c);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){Ho(this,c)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=An(this,!1),this.instanceState=An(this,!((d=e.options)!=null&&d.allowPolymorphicState));const c=e.stateInitStatic||{};te(c).forEach(u=>{Io()(this,u),this.instanceState[u]=c[u]}),this.definition=l}},Gs(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[wr]:{value:!0,writable:!1},name:{value:as(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function Vo(){return e=>It({...e,options:{[Yr]:!1,...e.options}})}function J(e,t){return qs(e,t)}const qs=Je(class extends ke{constructor(e){super(e),this.element=Fo(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),U}}),rr="onResize",Yo=Je(class extends ke{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),Cr(e,rr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${rr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){Cr(e,rr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function Ve(e,t,r){return Ms(e,()=>t,()=>r)}function Wo(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Vo()(r(n))),defineElementNoInputs:n=>(t(n),It(r(n)))}}function Js(e,t){return e.filter((r,n)=>!t.includes(n))}function Xo(e){return e.filter(t=>Hr(t,["tagName",wr])&&!!t.tagName&&!!t[wr])}const Zo=new WeakMap;function Ks(e,t){var o;const r=Xo(t);return(o=Go(Zo,[e,...r]).value)==null?void 0:o.template}function Qs(e,t,r){const n=Xo(t);return Jo(Zo,[e,...n],r)}function Go(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=qo(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Go(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function qo(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Jo(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=qo(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Jo(l,t,r,n+1)}function Ko(e,t,r){return{name:e,check:t,transform:r}}const ei=new WeakMap;function Qo(e,t,r){const n=Ks(e,t),o=n??r();if(!n){const s=Qs(e,t,o);if(s.result)ei.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=Js(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function ea(e,t,r,n){const o=[],a=[],s=[];return e.forEach((l,c)=>{var v;const d=o.length-1,u=o[d],h=c-1,p=t[h];let f;n&&n(l),typeof u=="string"&&(f=(v=r.find(C=>C.check(u,l,p)))==null?void 0:v.transform,f&&(o[d]=u+f(p)+l,s.push(h))),f||o.push(l);const m=e.raw[c];f?a[d]=a[d]+f(p)+m:a.push(m)}),{templateStrings:Object.assign([],o,{raw:a}),valueIndexDeletions:s}}function ta(e){return Ce(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const ti=[Ko("tag name css selector interpolation",(e,t,r)=>ta(r),e=>e.tagName)];function ri(e,t){return ea(e,t,ti)}function k(e,...t){const r=Qo(e,t,()=>ri(e,t));return Le(r.strings,...r.values)}const ni=[Ko("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=ta(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function oi(e){}function ai(e){return ea(e.strings,e.values,ni,oi)}function b(e,...t){const r=ys(e,...t),n=Qo(e,t,()=>ai(r));return{...r,strings:n.strings,values:n.values}}function xr(e,t){return Ce(e,"entryType")&&e.entryType===t}const si={[T.ElementExample]:()=>[],[T.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...es(e.controls,e.title)].filter(ko),[T.Root]:()=>[]},kt="_isBookTreeNode",ra=new Map;function ii(e){return ra.get(e)}function li(e,t){ds(ra,e,()=>t)}function Oe(e,t){return!!(Hr(e,[kt,"entry"])&&e[kt]&&e.entry.entryType===t)}function ci(e,t){return{[kt]:!0,entry:{entryType:T.Root,title:e||"Everything",parent:void 0,errors:[],descriptionParagraphs:t},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function ui({entries:e,everythingTitle:t,everythingDescriptionParagraphs:r,debug:n}){const o=ii(e);if(o)return o;const a=ci(t,r);e.forEach(l=>Xr({tree:a,newEntry:l,debug:n,manuallyAdded:!0}));const s=na(a),i={tree:a,flattenedNodes:s};return li(e,i),n&&console.info("element-book tree:",a),i}function di(e,t,r){const n=Tn(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Xr({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Tn(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${jr(t,!1)}`);return o}function Xr({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=si[t.entryType](t);t.errors.push(...o);const a=di(e,t,r),s=$t(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[kt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,xr(t,T.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Xr({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Tn(e,t){return jr(e,!1).reverse().reduce((o,a)=>{if(o)return o.children[a]},t)}function hi(e,t){if(e.entry.entryType!==t.entry.entryType){if(xr(e.entry,T.ElementExample))return-1;if(xr(t.entry,T.ElementExample))return 1}return e.entry.title.localeCompare(t.entry.title)}function na(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).sort(hi).map(o=>na(o));return[e,...r].flat()}function fi(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function oa(e,t){return Zr(e,t,void 0)}function Zr(e,t,r){const n=t[0];if(!n)return{};const o=fi(e,n,r);if(!o)return{};const a=t.slice(1);return!a.length&&r&&(o.controls=r),{...o.controls,...Zr(o.children,a,r)}}function pi(e,t,r){const n=ls(e);return Zr(n,t,r),n}function aa(e){return $e(e.children,(r,n)=>Oe(n,T.Page)?{children:aa(n),controls:$e(n.entry.controls,(o,a)=>a.initValue)}:{children:{},controls:{}})}const mi=globalThis.crypto;function gi(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return mi.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function bi({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const vi=gi(32);function kr(e){return e.join(vi)}function sa(e){if(!e.length)return[];const t=kr(e),r=sa(e.slice(0,-1));return[t,...r]}const yi=["error","errors"];function $i(e){return yi.includes(e)}function wi({flattenedNodes:e,searchQuery:t}){const r={};return e.forEach(n=>{const o=n.entry.errors.length&&$i(t);if(bi({searchIn:[n.entry.title,...n.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o)sa(n.fullUrlBreadcrumbs).forEach(i=>r[i]=!0);else{const s=kr(n.fullUrlBreadcrumbs);r[s]=!1}}),e.filter(n=>{const o=kr(n.fullUrlBreadcrumbs),a=r[o];if(!Ot(a,"boolean"))throw new Error(`Failed to find '${n.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var R;(function(e){e.Search="search",e.Book="book"})(R||(R={}));function ia(e){return e[0]===R.Book?"":e[1]?decodeURIComponent(e[1]):""}const Ye={hash:void 0,paths:[R.Book],search:void 0},Ci=0;function xi(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Ci)}class Qe extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Pn extends Qe{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const We="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const ki=globalThis.history.pushState;function Rn(...e){const t=ki.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(We)),t}const Ei=globalThis.history.replaceState;function Nn(...e){const t=Ei.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(We)),t}function _i(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Rn)throw new Pn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Nn)throw new Pn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Rn,globalThis.history.replaceState=Nn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(We))})}}function Si(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Mi(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Ai(e){const r=(e?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(s=>!!s),o=globalThis.location.search?Si(new URLSearchParams(globalThis.location.search)):void 0,a=globalThis.location.hash||void 0;return{paths:r,search:o,hash:a}}class Ti extends Qe{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function la(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Bn=6;function Ln(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Bn)throw new Ti(`Route sanitization depth has exceed the max of ${Bn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(la(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class nr extends Qe{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Pi(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new nr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new nr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new nr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Ri(e,t,r,n=!1){const o=ca(e,t,r);n?globalThis.history.replaceState(void 0,"",o):globalThis.history.pushState(void 0,"",o)}function ca(e,t,r=""){var l;if(!r&&t!=null)throw new Qe("Route base regexp was defined but routeBase string was not provided.");const n=Ni(t)?`/${r}`:"",o=e.search?Mi(e.search).toString():"",a=o?`?${o}`:"",s=(l=e.hash)!=null&&l.startsWith("#")?"":"#",i=e.hash?`${s}${e.hash}`:"";return`${n}/${e.paths.join("/")}${a}${i}`}function Ni(e){return!!(e&&globalThis.location.pathname.match(e))}function Bi(e={}){var s;Pi(e),_i();const t=(s=e.routeBase)==null?void 0:s.replace(/\/+$/,""),r=t?new RegExp(`^\\/${e.routeBase}`):void 0;let n=!1;const o=()=>Ln(a),a={listeners:new Set,initParams:e,sanitizeFullRoute:i=>{const l={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(l):l},setRoutes:(i,l=!1,c=!1)=>{const d=a.getCurrentRawRoutes(),u={...d,...i},h=a.sanitizeFullRoute(u);if(!(!c&&la(d,h)))return Ri(h,r,t,l)},createRoutesUrl:i=>ca(i,r,t),getCurrentRawRoutes:()=>Ai(r),removeAllRouteListeners(){a.listeners.forEach(i=>a.removeRouteListener(i))},addRouteListener:(i,l)=>{if(e.maxListenerCount&&a.listeners.size>=e.maxListenerCount)throw new Qe(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return a.listeners.add(l),n||(globalThis.addEventListener(We,o),n=!0),i&&Ln(a,l),l},hasRouteListener:i=>a.listeners.has(i),removeRouteListener:i=>{const l=a.listeners.delete(i);return a.listeners.size||(globalThis.removeEventListener(We,o),n=!1),l},sanitizationDepth:0};return a}function Li(e){return Bi({routeBase:e,routeSanitizer(t){return{paths:zi(t.paths),hash:void 0,search:void 0}}})}function zi(e){const t=e[0];if(ps(t,R)){if(t===R.Book)return[R.Book,...e.slice(1)];if(t===R.Search)return e[1]?[t,e[1]]:[R.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ye.paths}const y=se({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Oi={nav:{hover:{background:y["element-book-nav-hover-background-color"],foreground:y["element-book-nav-hover-foreground-color"]},active:{background:y["element-book-nav-active-background-color"],foreground:y["element-book-nav-active-foreground-color"]},selected:{background:y["element-book-nav-selected-background-color"],foreground:y["element-book-nav-selected-foreground-color"]}},accent:{icon:y["element-book-accent-icon-color"]},page:{background:y["element-book-page-background-color"],backgroundFaint1:y["element-book-page-background-faint-level-1-color"],backgroundFaint2:y["element-book-page-background-faint-level-2-color"],foreground:y["element-book-page-foreground-color"],foregroundFaint1:y["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:y["element-book-page-foreground-faint-level-2-color"]}};function Di(e,t){ua(e,t,Oi)}function Er(e){return Ce(e,"_$cssResult$")}function zn(e){return Hr(e,["name","value","default"])&&Ot(e.default,"string")&&Er(e.name)&&Er(e.value)}function ua(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Er(o)){if(!zn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ls({forCssVar:a,onElement:e,toValue:String(o)})}else{if(zn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ua(e,o,a)}})}function M(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function et(e){return ee(e)==="string"}function ee(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Et(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function da(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ha(e){return e[e.length-1]}function _t(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function fa(e,t,r){return(r-e)/(t-e)}function Gr(e,t,r){return _t(t[0],t[1],fa(e[0],e[1],r))}function pa(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Ii=Object.freeze({__proto__:null,isString:et,type:ee,toPrecision:Et,parseFunction:da,last:ha,interpolate:_t,interpolateInv:fa,mapRange:Gr,parseCoordGrammar:pa,multiplyMatrices:M});class Hi{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const re=new Hi;var Z={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const F={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function _r(e){return Array.isArray(e)?e:F[e]}function St(e,t,r,n={}){if(e=_r(e),t=_r(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(re.run("chromatic-adaptation-start",o),o.M||(o.W1===F.D65&&o.W2===F.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===F.D50&&o.W2===F.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),re.run("chromatic-adaptation-end",o),o.M)return M(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const ji=75e-6;var qe,Sr,ye,Lt,ma;const j=class{constructor(t){Ae(this,qe);Ae(this,Lt);Ae(this,ye,void 0);var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?j.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;this.coords=r;let n=t.white??this.base.white??"D65";this.white=_r(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Xt(this,ye,st(this,Lt,ma).call(this).reverse()),re.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=ji}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=st(this,qe,Sr).call(this,t),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=st(this,qe,Sr).call(this,r),r):null}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=j.get(t),this===t)return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=fe(this,ye),o=fe(t,ye),a,s;for(let i=0;i<n.length&&n[i]===o[i];i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=j.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(j.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof j)return t;if(ee(t)==="string"){let o=j.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return j.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=ee(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=j.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ee(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=j.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===s||((l=d.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...d};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};let g=j;qe=new WeakSet,Sr=function(t){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=pa(t.coords);let r=Object.entries(this.coords).map(([n,o],a)=>{let s=t.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});t.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=Gr(i,l,a)),a=Et(a,o),c&&(a+=c),a})}return t},ye=new WeakMap,Lt=new WeakSet,ma=function(){let t=[this];for(let r=this;r=r.base;)t.push(r);return t},Yt(g,"registry",{}),Yt(g,"DEFAULT_FORMAT",{type:"functions",name:"color"});var D=new g({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class B extends g{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=D),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=M(t.toXYZ_M,r);return this.white!==this.base.white&&(n=St(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=St(this.base.white,this.white,r),M(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function ga(e){var r,n,o,a,s;let t={str:(r=String(e))==null?void 0:r.trim()};if(re.run("parse-start",t),t.color)return t.color;if(t.parsed=da(t.str),t.parsed){let i=t.parsed.name;if(i==="color"){let l=t.parsed.args.shift(),c=t.parsed.rawArgs.indexOf("/")>0?t.parsed.args.pop():1;for(let u of g.all){let h=u.getFormat("color");if(h&&(l===h.id||(n=h.ids)!=null&&n.includes(l))){let p=Object.keys(u.coords).length,f=Array(p).fill(0);return f.forEach((m,v)=>f[v]=t.parsed.args[v]||0),{spaceId:u.id,coords:f,alpha:c}}}let d="";if(l in g.registry){let u=(s=(a=(o=g.registry[l].formats)==null?void 0:o.functions)==null?void 0:a.color)==null?void 0:s.id;u&&(d=`Did you mean color(${u})?`)}throw new TypeError(`Cannot parse color(${l}). `+(d||"Missing a plugin?"))}else for(let l of g.all){let c=l.getFormat(i);if(c&&c.type==="function"){let d=1;(c.lastAlpha||ha(t.parsed.args).alpha)&&(d=t.parsed.args.pop());let u=t.parsed.args;return c.coordGrammar&&Object.entries(l.coords).forEach(([h,p],f)=>{var x;let m=c.coordGrammar[f],v=(x=u[f])==null?void 0:x.type;if(m=m.find(_=>_==v),!m){let _=p.name||h;throw new TypeError(`${v} not allowed for ${_} in ${i}()`)}let C=m.range;v==="<percentage>"&&(C||(C=[0,1]));let A=p.range||p.refRange;C&&A&&(u[f]=Gr(C,A,u[f]))}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let i of g.all)for(let l in i.formats){let c=i.formats[l];if(c.type!=="custom"||c.test&&!c.test(t.str))continue;let d=c.parse(t.str);if(d)return d.alpha??(d.alpha=1),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function $(e){if(!e)throw new TypeError("Empty color reference");et(e)&&(e=ga(e));let t=e.space||e.spaceId;return t instanceof g||(e.space=g.get(t)),e.alpha===void 0&&(e.alpha=1),e}function tt(e,t){return t=g.get(t),t.from(e)}function I(e,t){let{space:r,index:n}=g.resolveCoord(t,e.space);return tt(e,r)[n]}function ba(e,t,r){return t=g.get(t),e.coords=t.to(e.space,r),e}function ne(e,t,r){if(e=$(e),arguments.length===2&&ee(arguments[1])==="object"){let n=arguments[1];for(let o in n)ne(e,o,n[o])}else{typeof r=="function"&&(r=r(I(e,t)));let{space:n,index:o}=g.resolveCoord(t,e.space),a=tt(e,n);a[o]=r,ba(e,n,a)}return e}var qr=new g({id:"xyz-d50",name:"XYZ D50",white:"D50",base:D,fromBase:e=>St(D.white,"D50",e),toBase:e=>St("D50",D.white,e),formats:{color:{}}});const Fi=216/24389,On=24/116,it=24389/27;let or=F.D50;var L=new g({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:or,base:qr,fromBase(e){let r=e.map((n,o)=>n/or[o]).map(n=>n>Fi?Math.cbrt(n):(it*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>On?Math.pow(t[0],3):(116*t[0]-16)/it,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/it,t[2]>On?Math.pow(t[2],3):(116*t[2]-16)/it].map((n,o)=>n*or[o])},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Ht(e){return(e%360+360)%360}function Ui(e,t){if(e==="raw")return t;let[r,n]=t.map(Ht),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?n+=360:r+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var Xe=new g({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:L,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ht(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const Dn=25**7,Mt=Math.PI,In=180/Mt,pe=Mt/180;function Mr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=L.from(e),l=Xe.from(L,[a,s,i])[1],[c,d,u]=L.from(t),h=Xe.from(L,[c,d,u])[1];l<0&&(l=0),h<0&&(h=0);let f=((l+h)/2)**7,m=.5*(1-Math.sqrt(f/(f+Dn))),v=(1+m)*s,C=(1+m)*d,A=Math.sqrt(v**2+i**2),x=Math.sqrt(C**2+u**2),_=v===0&&i===0?0:Math.atan2(i,v),K=C===0&&u===0?0:Math.atan2(u,C);_<0&&(_+=2*Mt),K<0&&(K+=2*Mt),_*=In,K*=In;let nt=c-a,ot=x-A,Y=K-_,_e=_+K,en=Math.abs(Y),Se;A*x===0?Se=0:en<=180?Se=Y:Y>180?Se=Y-360:Y<-180?Se=Y+360:console.log("the unthinkable has happened");let tn=2*Math.sqrt(x*A)*Math.sin(Se*pe/2),Wa=(a+c)/2,Vt=(A+x)/2,rn=Math.pow(Vt,7),G;A*x===0?G=_e:en<=180?G=_e/2:_e<360?G=(_e+360)/2:G=(_e-360)/2;let nn=(Wa-50)**2,Xa=1+.015*nn/Math.sqrt(20+nn),on=1+.045*Vt,Me=1;Me-=.17*Math.cos((G-30)*pe),Me+=.24*Math.cos(2*G*pe),Me+=.32*Math.cos((3*G+6)*pe),Me-=.2*Math.cos((4*G-63)*pe);let an=1+.015*Vt*Me,Za=30*Math.exp(-1*((G-275)/25)**2),Ga=2*Math.sqrt(rn/(rn+Dn)),qa=-1*Math.sin(2*Za*pe)*Ga,at=(nt/(r*Xa))**2;return at+=(ot/(n*on))**2,at+=(tn/(o*an))**2,at+=qa*(ot/(n*on))*(tn/(o*an)),Math.sqrt(at)}const Vi=75e-6;function De(e,t=e.space,{epsilon:r=Vi}={}){e=$(e),t=g.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Ze(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function oe(e,{method:t=Z.gamut_mapping,space:r=e.space}={}){if(et(arguments[1])&&(r=arguments[1]),r=g.get(r),De(e,r,{epsilon:0}))return e;let n=z(e,r);if(t!=="clip"&&!De(e,r)){let o=oe(Ze(n),{method:"clip",space:r});if(Mr(e,o)>2){let a=g.resolveCoord(t),s=a.space,i=a.id,l=z(n,s),d=(a.range||a.refRange)[0],u=.01,h=d,p=I(l,i);for(;p-h>u;){let f=Ze(l);f=oe(f,{space:r,method:"clip"}),Mr(l,f)-2<u?h=I(l,i):p=I(l,i),ne(l,i,(h+p)/2)}n=z(l,r)}else n=o}if(t==="clip"||!De(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=z(n,e.space)),e.coords=n.coords,e}oe.returns="color";function z(e,t,{inGamut:r}={}){e=$(e),t=g.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=oe(o)),o}z.returns="color";function At(e,{precision:t=Z.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=$(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??g.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!De(e)&&(i=oe(Ze(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(p=>Et(p,t)));let d=[...i];if(c==="color"){let p=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(p)}let u=e.alpha;t!==null&&(u=Et(u,t));let h=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";a=`${c}(${d.join(r.commas?", ":" ")}${h})`}return a}const Yi=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Wi=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var jt=new B({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Yi,fromXYZ_M:Wi,formats:{color:{}}});const lt=1.09929682680944,Hn=.018053968510807;var va=new B({id:"rec2020",name:"REC.2020",base:jt,toBase(e){return e.map(function(t){return t<Hn*4.5?t/4.5:Math.pow((t+lt-1)/lt,1/.45)})},fromBase(e){return e.map(function(t){return t>=Hn?lt*Math.pow(t,.45)-(lt-1):4.5*t})},formats:{color:{}}});const Xi=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Zi=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ya=new B({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Xi,fromXYZ_M:Zi});const Gi=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],qi=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var $a=new B({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Gi,fromXYZ_M:qi,formats:{color:{}}}),jn={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Fn=Array(3).fill("<percentage> | <number>[0, 255]"),Un=Array(3).fill("<number>[0, 255]");var Ge=new B({id:"srgb",name:"sRGB",base:$a,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Fn},rgb_number:{name:"rgb",commas:!0,coords:Un,noAlpha:!0},color:{},rgba:{coords:Fn,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Un},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=jn.black,t.alpha=0):t.coords=jn[e],t.coords)return t}}}}),wa=new B({id:"p3",name:"P3",base:ya,fromBase:Ge.fromBase,toBase:Ge.toBase,formats:{color:{id:"display-p3"}}});Z.display_space=Ge;if(typeof CSS<"u"&&CSS.supports)for(let e of[L,va,wa]){let t=e.getMinCoords(),n=At({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Z.display_space=e;break}}function Ji(e,{space:t=Z.display_space,...r}={}){let n=At(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Z.display_space)n=new String(n),n.color=e;else{let o=z(e,t);n=new String(At(o,r)),n.color=o}return n}function Ca(e,t,r="lab"){r=g.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Ki(e,t){return e=$(e),t=$(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ae(e){return I(e,[D,"y"])}function xa(e,t){ne(e,[D,"y"],t)}function Qi(e){Object.defineProperty(e.prototype,"luminance",{get(){return ae(this)},set(t){xa(this,t)}})}var el=Object.freeze({__proto__:null,getLuminance:ae,setLuminance:xa,register:Qi});function tl(e,t){e=$(e),t=$(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const rl=.56,nl=.57,ol=.62,al=.65,Vn=.022,sl=1.414,il=.1,ll=5e-4,cl=1.14,Yn=.027,ul=1.14;function Wn(e){return e>=Vn?e:e+(Vn-e)**sl}function me(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function dl(e,t){t=$(t),e=$(e);let r,n,o,a,s,i;t=z(t,"srgb"),[a,s,i]=t.coords;let l=me(a)*.2126729+me(s)*.7151522+me(i)*.072175;e=z(e,"srgb"),[a,s,i]=e.coords;let c=me(a)*.2126729+me(s)*.7151522+me(i)*.072175,d=Wn(l),u=Wn(c),h=u>d;return Math.abs(u-d)<ll?n=0:h?(r=u**rl-d**nl,n=r*cl):(r=u**al-d**ol,n=r*ul),Math.abs(n)<il?o=0:n>0?o=n-Yn:o=n+Yn,o*100}function hl(e,t){e=$(e),t=$(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const fl=5e4;function pl(e,t){e=$(e),t=$(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);return n>r&&([r,n]=[n,r]),n===0?fl:(r-n)/n}function ml(e,t){e=$(e),t=$(t);let r=I(e,[L,"l"]),n=I(t,[L,"l"]);return Math.abs(r-n)}const gl=216/24389,Xn=24/116,ct=24389/27;let ar=F.D65;var Ar=new g({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ar,base:D,fromBase(e){let r=e.map((n,o)=>n/ar[o]).map(n=>n>gl?Math.cbrt(n):(ct*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Xn?Math.pow(t[0],3):(116*t[0]-16)/ct,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ct,t[2]>Xn?Math.pow(t[2],3):(116*t[2]-16)/ct].map((n,o)=>n*ar[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}});const sr=Math.pow(5,.5)*.5+.5;function bl(e,t){e=$(e),t=$(t);let r=I(e,[Ar,"l"]),n=I(t,[Ar,"l"]),o=Math.abs(Math.pow(r,sr)-Math.pow(n,sr)),a=Math.pow(o,1/sr)*Math.SQRT2-40;return a<7.5?0:a}var vt=Object.freeze({__proto__:null,contrastWCAG21:tl,contrastAPCA:dl,contrastMichelson:hl,contrastWeber:pl,contrastLstar:ml,contrastDeltaPhi:bl});function vl(e,t,r={}){et(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(vt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=$(e),t=$(t);for(let a in vt)if("contrast"+n.toLowerCase()===a.toLowerCase())return vt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function ka(e){let[t,r,n]=tt(e,D),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Ea(e){let[t,r,n]=tt(e,D),o=t+r+n;return[t/o,r/o]}function yl(e){Object.defineProperty(e.prototype,"uv",{get(){return ka(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Ea(this)}})}var $l=Object.freeze({__proto__:null,uv:ka,xy:Ea,register:yl});function wl(e,t){return Ca(e,t,"lab")}const Cl=Math.PI,Zn=Cl/180;function xl(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=L.from(e),[,i,l]=Xe.from(L,[o,a,s]),[c,d,u]=L.from(t),h=Xe.from(L,[c,d,u])[1];i<0&&(i=0),h<0&&(h=0);let p=o-c,f=i-h,m=a-d,v=s-u,C=m**2+v**2-f**2,A=.511;o>=16&&(A=.040975*o/(1+.01765*o));let x=.0638*i/(1+.0131*i)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*Zn)):_=.36+Math.abs(.4*Math.cos((l+35)*Zn));let K=Math.pow(i,4),nt=Math.sqrt(K/(K+1900)),ot=x*(nt*_+1-nt),Y=(p/(r*A))**2;return Y+=(f/(n*x))**2,Y+=C/ot**2,Math.sqrt(Y)}const Gn=203;var Jr=new g({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:D,fromBase(e){return e.map(t=>Math.max(t*Gn,0))},toBase(e){return e.map(t=>Math.max(t/Gn,0))}});const ut=1.15,dt=.66,qn=2610/2**14,kl=2**14/2610,Jn=3424/2**12,Kn=2413/2**7,Qn=2392/2**7,El=1.7*2523/2**5,eo=2**5/(1.7*2523),ht=-.56,ir=16295499532821565e-27,_l=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Sl=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Ml=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Al=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var _a=new g({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Jr,fromBase(e){let[t,r,n]=e,o=ut*t-(ut-1)*n,a=dt*r-(dt-1)*t,i=M(_l,[o,a,n]).map(function(h){let p=Jn+Kn*(h/1e4)**qn,f=1+Qn*(h/1e4)**qn;return(p/f)**El}),[l,c,d]=M(Ml,i);return[(1+ht)*l/(1+ht*l)-ir,c,d]},toBase(e){let[t,r,n]=e,o=(t+ir)/(1+ht-ht*(t+ir)),s=M(Al,[o,r,n]).map(function(h){let p=Jn-h**eo,f=Qn*h**eo-Kn;return 1e4*(p/f)**kl}),[i,l,c]=M(Sl,s),d=(i+(ut-1)*c)/ut,u=(l+(dt-1)*d)/dt;return[d,u,c]},formats:{color:{}}}),Tr=new g({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:_a,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ht(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Tl(e,t){let[r,n,o]=Tr.from(e),[a,s,i]=Tr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let d=o-i,u=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const Sa=3424/4096,Ma=2413/128,Aa=2392/128,to=2610/16384,Pl=2523/32,Rl=16384/2610,ro=32/2523,Nl=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Bl=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Ll=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],zl=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Pr=new g({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Jr,fromBase(e){let t=M(Nl,e);return Ol(t)},toBase(e){let t=Dl(e);return M(zl,t)},formats:{color:{}}});function Ol(e){let t=e.map(function(r){let n=Sa+Ma*(r/1e4)**to,o=1+Aa*(r/1e4)**to;return(n/o)**Pl});return M(Bl,t)}function Dl(e){return M(Ll,e).map(function(n){let o=Math.max(n**ro-Sa,0),a=Ma-Aa*n**ro;return 1e4*(o/a)**Rl})}function Il(e,t){let[r,n,o]=Pr.from(e),[a,s,i]=Pr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const Hl=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],jl=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Fl=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Ul=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Tt=new g({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:D,fromBase(e){let r=M(Hl,e).map(n=>Math.cbrt(n));return M(Fl,r)},toBase(e){let r=M(Ul,e).map(n=>n**3);return M(jl,r)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}});function Vl(e,t){let[r,n,o]=Tt.from(e),[a,s,i]=Tt.from(t),l=r-a,c=n-s,d=o-i;return Math.sqrt(l**2+c**2+d**2)}var Rr=Object.freeze({__proto__:null,deltaE76:wl,deltaECMC:xl,deltaE2000:Mr,deltaEJz:Tl,deltaEITP:Il,deltaEOK:Vl});function Ne(e,t,r={}){et(r)&&(r={method:r});let{method:n=Z.deltaE,...o}=r;e=$(e),t=$(t);for(let a in Rr)if("deltae"+n.toLowerCase()===a.toLowerCase())return Rr[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Yl(e,t=.25){let n=[g.get("oklch","lch"),"l"];return ne(e,n,o=>o*(1+t))}function Wl(e,t=.25){let n=[g.get("oklch","lch"),"l"];return ne(e,n,o=>o*(1-t))}var Xl=Object.freeze({__proto__:null,lighten:Yl,darken:Wl});function Ta(e,t,r=.5,n={}){[e,t]=[$(e),$(t)],ee(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return rt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function Pa(e,t,r={}){let n;Kr(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[$(e),$(t)],n=rt(e,t,l));let c=Ne(e,t),d=o>0?Math.max(s,Math.ceil(c/o)+1):s,u=[];if(i!==void 0&&(d=Math.min(d,i)),d===1)u=[{p:.5,color:n(.5)}];else{let h=1/(d-1);u=Array.from({length:d},(p,f)=>{let m=f*h;return{p:m,color:n(m)}})}if(o>0){let h=u.reduce((p,f,m)=>{if(m===0)return 0;let v=Ne(f.color,u[m-1].color,a);return Math.max(p,v)},0);for(;h>o;){h=0;for(let p=1;p<u.length&&u.length<i;p++){let f=u[p-1],m=u[p],v=(m.p+f.p)/2,C=n(v);h=Math.max(h,Ne(C,f.color),Ne(C,m.color)),u.splice(p,0,{p:v,color:n(v)}),p++}}}return u=u.map(h=>h.color),u}function rt(e,t,r={}){if(Kr(e)){let[l,c]=[e,t];return rt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=$(e),t=$(t),e=Ze(e),t=Ze(t);let i={colors:[e,t],options:r};if(n?n=g.get(n):n=g.registry[Z.interpolationSpace]||e.space,o=o?g.get(o):n,e=z(e,n),t=z(t,n),e=oe(e),t=oe(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[I(e,c),I(t,c)];[d,u]=Ui(l,[d,u]),ne(e,c,d),ne(t,c,u)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((h,p)=>{let f=t.coords[p];return _t(h,f,l)}),d=_t(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return s&&(u.coords=u.coords.map(h=>h/d)),o!==n&&(u=z(u,o)),u},{rangeArgs:i})}function Kr(e){return ee(e)==="function"&&!!e.rangeArgs}Z.interpolationSpace="lab";function Zl(e){e.defineFunction("mix",Ta,{returns:"color"}),e.defineFunction("range",rt,{returns:"function<color>"}),e.defineFunction("steps",Pa,{returns:"array<color>"})}var Gl=Object.freeze({__proto__:null,mix:Ta,steps:Pa,range:rt,isRange:Kr,register:Zl}),Ra=new g({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ge,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Na=new g({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ra,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),ql=new g({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Na,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Jl=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Kl=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Ba=new B({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Jl,fromXYZ_M:Kl}),Ql=new B({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Ba,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const ec=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],tc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var La=new B({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:qr,toXYZ_M:ec,fromXYZ_M:tc});const rc=1/512,nc=16/512;var oc=new B({id:"prophoto",name:"ProPhoto",base:La,toBase(e){return e.map(t=>t<nc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=rc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),ac=new g({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Tt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ht(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}});const no=203,oo=2610/2**14,sc=2**14/2610,ic=2523/2**5,ao=2**5/2523,so=3424/2**12,io=2413/2**7,lo=2392/2**7;var lc=new B({id:"rec2100pq",name:"REC.2100-PQ",base:jt,toBase(e){return e.map(function(t){return(Math.max(t**ao-so,0)/(io-lo*t**ao))**sc*1e4/no})},fromBase(e){return e.map(function(t){let r=Math.max(t*no/1e4,0),n=so+io*r**oo,o=1+lo*r**oo;return(n/o)**ic})},formats:{color:{id:"rec2100-pq"}}});const co=.17883277,uo=.28466892,ho=.55991073,lr=3.7743;var cc=new B({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:jt,toBase(e){return e.map(function(t){return t<=.5?t**2/3*lr:Math.exp((t-ho)/co+uo)/12*lr})},fromBase(e){return e.map(function(t){return t/=lr,t<=1/12?Math.sqrt(3*t):co*Math.log(12*t-uo)+ho})},formats:{color:{id:"rec2100-hlg"}}});const za={};re.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Oa(e.W1,e.W2,e.options.method))});re.add("chromatic-adaptation-end",e=>{e.M||(e.M=Oa(e.W1,e.W2,e.options.method))});function Ft({id:e,toCone_M:t,fromCone_M:r}){za[e]=arguments[0]}function Oa(e,t,r="Bradford"){let n=za[r],[o,a,s]=M(n.toCone_M,e),[i,l,c]=M(n.toCone_M,t),d=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],u=M(d,n.toCone_M);return M(n.fromCone_M,u)}Ft({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});Ft({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});Ft({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});Ft({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(F,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});F.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const uc=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],dc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Da=new B({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:F.ACES,toXYZ_M:uc,fromXYZ_M:dc,formats:{color:{}}});const ft=2**-16,cr=-.35828683,pt=(Math.log2(65504)+9.72)/17.52;var hc=new B({id:"acescc",name:"ACEScc",coords:{r:{range:[cr,pt],name:"Red"},g:{range:[cr,pt],name:"Green"},b:{range:[cr,pt],name:"Blue"}},referred:"scene",base:Da,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-ft)*2:r<pt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ft)+9.72)/17.52:t<ft?(Math.log2(ft+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),fo=Object.freeze({__proto__:null,XYZ_D65:D,XYZ_D50:qr,XYZ_ABS_D65:Jr,Lab_D65:Ar,Lab:L,LCH:Xe,sRGB_Linear:$a,sRGB:Ge,HSL:Ra,HWB:ql,HSV:Na,P3_Linear:ya,P3:wa,A98RGB_Linear:Ba,A98RGB:Ql,ProPhoto_Linear:La,ProPhoto:oc,REC_2020_Linear:jt,REC_2020:va,OKLab:Tt,OKLCH:ac,Jzazbz:_a,JzCzHz:Tr,ICTCP:Pr,REC_2100_PQ:lc,REC_2100_HLG:cc,ACEScg:Da,ACEScc:hc}),ue;const P=class{constructor(...t){Ae(this,ue,void 0);let r;t.length===1&&(r=$(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Xt(this,ue,g.get(n)),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in fe(this,ue).coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get space(){return fe(this,ue)}get spaceId(){return fe(this,ue).id}clone(){return new P(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Ji(this,...t);return r.color=new P(r.color),r}static get(t,...r){return t instanceof P?t:new P(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=P.get(l);else if(a==="function<color>"){let c=l;l=function(...d){let u=c(...d);return P.get(u)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>P.get(c)));return l};t in P||(P[t]=s),o&&(P.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)P.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(P);else for(let r in t)P.defineFunction(r,t[r])}};let w=P;ue=new WeakMap;w.defineFunctions({get:I,getAll:tt,set:ne,setAll:ba,to:z,equals:Ki,inGamut:De,toGamut:oe,distance:Ca,toString:At});Object.assign(w,{util:Ii,hooks:re,WHITES:F,Space:g,spaces:g.registry,parse:ga,defaults:Z});for(let e of Object.keys(fo))g.register(fo[e]);for(let e in g.registry)Nr(e,g.registry[e]);re.add("colorspace-init-end",e=>{var t;Nr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Nr(r,e)})});function Nr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(w.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return g.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=g.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=g.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}w.extend(Rr);w.extend({deltaE:Ne});w.extend(Xl);w.extend({contrast:vl});w.extend($l);w.extend(el);w.extend(Gl);w.extend(vt);function Ia(e){return $e(e,(t,r)=>r instanceof w?X(r.toString({format:"hex"})):Ia(r))}const fc="dodgerblue";function Br(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ur({background:e,foreground:t}){return{background:e??new w(Br(t)),foreground:t??new w(Br(e))}}var Pt;(function(e){e.Dark="dark",e.Light="light"})(Pt||(Pt={}));function pc(e){return e==="black"?"white":"black"}const mc={black:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")},white:{foregroundFaint1:new w("#ccc"),foregroundFaint2:new w("#eee")}},gc={black:{backgroundFaint1:new w("#666"),backgroundFaint2:new w("#444")},white:{backgroundFaint1:new w("#ccc"),backgroundFaint2:new w("#fafafa")}};function po({themeColor:e=fc,themeStyle:t=Pt.Light}={}){const r=new w(e),n=new w(t===Pt.Dark?"black":"white"),o=Br(n),a=new w(o),s={nav:{hover:ur({background:r.clone().set({"hsl.l":93})}),active:ur({background:r.clone().set({"hsl.l":90})}),selected:ur({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...gc[pc(o)],foreground:a,...mc[o]}};return Ia(s)}const Rt=Wr()("element-book-change-route"),mo="vira-",{defineElement:Ut,defineElementNoInputs:Tc}=Wo({assertInputs:e=>{if(!e.tagName.startsWith(mo))throw new Error(`Tag name should start with '${mo}' but got '${e.tagName}'`)}}),Ha=k`
    pointer-events: none;
    opacity: 0.3;
`,Ie=se({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function bc(e){return`${e}px`}const Nt=se({"vira-form-input-border-radius":"8px"}),Bt=se({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":k`calc(${Nt["vira-form-input-border-radius"].value} + 4px)`});function ja({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=X(bc(n+r+t));return k`
        ${X(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Bt["vira-focus-outline-color"].value};
            border-radius: ${Bt["vira-focus-outline-border-radius"].value};
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
`,Fa=k`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Lr=se({"vira-icon-color":"currentColor"}),vc=se({"vira-icon-stroke-color":Lr["vira-icon-color"].value,"vira-icon-fill-color":Lr["vira-icon-color"].value}),dr={...Lr,...vc},O=Ut()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>k`
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

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var zr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(zr||(zr={}));Ut()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===zr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>k`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Fa};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Bt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ha};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
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
            border-radius: ${Nt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${Ie["vira-interaction-animation-duration"].value},
                background-color
                    ${Ie["vira-interaction-animation-duration"].value},
                border-color ${Ie["vira-interaction-animation-duration"].value};
        }

        ${ja({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${O} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?b`
                  <${O}
                      ${E(O,{icon:e.icon})}
                  ></${O}>
              `:"",r=e.text?b`
                  <span class="text-template">${e.text}</span>
              `:"";return b`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Or;(function(e){e.Header="header"})(Or||(Or={}));Ut()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>k`
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
            transition: height ${Ie["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Ue()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?k`
                  height: ${e.contentHeight}px;
              `:k`
                  height: 0;
              `;return b`
            <button
                class="header-wrapper"
                ${J("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Or.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Yo(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Dr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Dr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ua({value:e,allowed:t,blocked:r}){const n=t?Dr({input:e,matcher:t}):!0,o=r?Dr({input:e,matcher:r}):!1;return n&&!o}function go(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Ua({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}Ut()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Ue(),inputBlocked:Ue()},styles:({hostClasses:e,cssVars:t})=>k`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Bt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ha};
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
                ${Fa};
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
                border-radius: ${Nt["vira-form-input-border-radius"].value};
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
                ${ve};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Nt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${ja({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${O} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ve};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=go({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?b`
                  <${O} ${E(O,{icon:e.icon})}></${O}>
              `:"",i=e.fitText?k`
                  width: ${r.forcedInputWidth}px;
              `:"";return b`
            <label>
                ${s}
                ${Ve(!!e.fitText,b`
                        <span
                            class="size-span"
                            ${Yo(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${Lo({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${J("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const d=l.data,u=a;let h=c.value??"";if(d)if(d.length===1)Ua({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs})||(h=u,t(new o.inputBlocked(d)));else{const{filtered:p,blocked:f}=go({value:d,allowed:e.allowedInputs,blocked:e.blockedInputs});h=p,t(new o.inputBlocked(f))}c.value!==h&&(c.value=h),u!==h&&t(new o.valueChange(h))})}
                    placeholder=${e.placeholder}
                />
                ${Ve(!!e.suffix,b`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function Va({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const yc=Va({name:"Element16Icon",svgTemplate:b`
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
    `});Va({name:"Element24Icon",svgTemplate:b`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const{defineElement:V,defineElementNoInputs:Pc}=Wo(),N=V()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>k`
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
                ${J("click",a=>{(!e.router||xi(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Rt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),mt=V()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>k`
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
            ${N.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${O} {
            display: inline-flex;
            color: ${y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{const n=k`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length};
            `;return b`
                <li style=${n}>
                    <${N}
                        ${E(N,{router:e.router,route:{paths:[R.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Lo({"title-row":!0,selected:e.selectedPath?Be(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Ve(Oe(r,T.ElementExample),b`
                                    <${O}
                                        ${E(O,{icon:yc})}
                                    ></${O}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${N}>
                </li>
            `});return b`
            <slot name=${W.NavHeader}></slot>
            <ul>
                ${t}
            </ul>
        `}}),H=V()({tagName:"book-error",styles:k`
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
    `,renderCallback({inputs:e}){return(Ot(e.message,"array")?e.message:[e.message]).map(r=>b`
                    <p>${r}</p>
                `)}}),hr=V()({tagName:"book-breadcrumbs",styles:k`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const a=n>=o.length-1,s=o.slice(0,n+1),i=a?"":b`
                      <span class="spacer">&gt;</span>
                  `;return b`
                <${N}
                    ${E(N,{route:{hash:void 0,search:void 0,paths:[R.Book,...s]},router:e.router})}
                >
                    ${r}
                </${N}>
                ${i}
            `}):b`
                &nbsp;
            `}}),fr=V()({tagName:"book-entry-description",styles:k`
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
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>b`
                <p>${t}</p>
            `)}}),yt=V()({tagName:"book-page-controls",events:{controlValueChange:Ue()},styles:k`
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
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).map(([n,o])=>{const a=$c(e.currentValues[n],o.controlType,s=>{t(new r.controlValueChange({fullUrlBreadcrumbs:e.fullUrlBreadcrumbs,newValues:{...e.currentValues,[n]:s}}))});return b`
                    <label class="control-wrapper">
                        <span>${n}</span>
                        ${a}
                    </label>
                `})}});function $c(e,t,r){return t===Q.Text?b`
            <input
                type="text"
                .value=${e||""}
                ${J("input",n=>{const o=n.currentTarget;if(!(o instanceof HTMLInputElement))throw new Error("Din't get an input element from the event target.");r(o.value)})}
            />
        `:b`
            <p class="error">${t} controls are not implemented yet.</p>
        `}const pr=V()({tagName:"book-page-wrapper",styles:k`
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
            margin-bottom: 24px;
        }

        ${N} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?b`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:b`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[R.Book,...e.pageNode.fullUrlBreadcrumbs],n=Co(e.pageNode.entry.errors);return n&&console.error(n),b`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${N}
                        ${E(N,{route:{paths:r,hash:void 0,search:void 0},router:e.router})}
                    >
                        ${t}
                    </${N}>
                    ${n?b`
                              <${H}
                                  ${E(H,{message:n.message})}
                              ></${H}>
                          `:b`
                              <${fr}
                                  ${E(fr,{descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}
                              ></${fr}>
                              <${yt}
                                  ${E(yt,{config:e.pageNode.entry.controls,currentValues:oa(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}
                              ></${yt}>
                          `}
                </div>
            </div>
        `}}),gt=V()({tagName:"book-element-example-controls",styles:k`
        :host {
            display: flex;
            color: ${y["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[R.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return b`
            <${N}
                ${E(N,{route:{paths:t,hash:void 0,search:void 0},router:e.router})}
            >
                ${e.elementExampleNode.entry.title}
            </${N}>
        `}}),bo=Symbol("unset-internal-state"),mr=V()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:bo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Co(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===bo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return b`
                ${Ve(!!t.elementExampleNode.entry.styles,b`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),b`
                <${H}
                    ${E(H,{message:`${t.elementExampleNode.entry.title} failed: ${zt(n)}`})}
                ></${H}>
            `}},options:{allowPolymorphicState:!0}}),gr=V()({tagName:"book-element-example-wrapper",styles:k`
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

        .individual-example-wrapper:hover ${gt} {
            color: ${y["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return b`
            <div class="individual-example-wrapper">
                <${gt}
                    ${E(gt,e)}
                ></${gt}>
                <${mr}
                    ${E(mr,e)}
                ></${mr}>
            </div>
        `}}),ge=V()({tagName:"book-entry-display",styles:k`
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

        h1 {
            margin: 0;
            padding: 0;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{const r=ia(e.currentRoute.paths),n=wc({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!r,currentControls:e.currentControls});return b`
            <div class="title-bar">
                ${Ve(!!r,b`
                        &nbsp;
                    `,b`
                        <${hr}
                            ${E(hr,{currentRoute:e.currentRoute,router:e.router})}
                        ></${hr}>
                    `)}
                <input
                    placeholder="search"
                    .value=${r}
                    ${J("input",async o=>{const a=o.currentTarget;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const s=a.value;await ms(500),a.value===s&&(a.value?t(new Rt({paths:[R.Search,encodeURIComponent(a.value)]})):t(new Rt(Ye)))})}
                />
            </div>
            <div class="all-book-entries-wrapper">${n}</div>
            <slot name=${W.Footer}></slot>
        `}});function wc({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o}){return!e.length&&n?[b`
                No results
            `]:Ss(e,a=>a.fullUrlBreadcrumbs.join(">"),a=>{if(Oe(a,T.Page))return b`
                    <${pr}
                        class="block-entry"
                        ${E(pr,{isTopLevel:t,pageNode:a,currentControls:o,router:r})}
                    ></${pr}>
                `;if(Oe(a,T.ElementExample)){const s=oa(o,a.fullUrlBreadcrumbs.slice(0,-1));return b`
                    <${gr}
                        class="inline-entry"
                        ${E(gr,{elementExampleNode:a,currentPageControls:s,router:r})}
                    ></${gr}>
                `}else return Oe(a,T.Root)?b`
                    <h1>${a.entry.title}</h1>
                `:b`
                    <${H}
                        class="block-entry"
                        ${E(H,{message:`Unknown entry type for rendering: '${a.entry.entryType}'`})}
                    ></${H}>
                `})}function Cc(e,t,r){const n=vo(e,t);if(n.length)return n;r(Ye);const o=vo(e,Ye.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function vo(e,t){return e.filter(r=>gs({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Re=Vo()({tagName:"element-book-app",events:{pathUpdate:Ue()},stateInitStatic:{currentRoute:Ye,router:void 0,colors:{config:void 0,theme:po(void 0)},treeBasedCurrentControls:void 0},styles:k`
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

        ${mt} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c,d;try{let u=function(x){e.router?e.router.setRoutes(x):n({currentRoute:{...e.currentRoute,...x}}),t.elementBookRoutePaths&&!Be(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(x.paths??[]))};var s=u;if(t.elementBookRoutePaths&&!Be(t.elementBookRoutePaths,e.currentRoute.paths)&&u({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const x=Li(t.internalRouterConfig.basePath);n({router:x}),x.addRouteListener(!0,_=>{n({currentRoute:_})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const h={themeColor:t.themeColor};if(!Be(h,(c=e.colors)==null?void 0:c.config)){const x=po(h);n({colors:{config:h,theme:x}}),Di(r,x)}const p=t.debug??!1,f=ui({entries:t.entries,everythingTitle:t.everythingTitle,everythingDescriptionParagraphs:t.everythingDescriptionParagraphs??[],debug:p});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.trigger!==t.entries)&&n({treeBasedCurrentControls:{trigger:t.entries,currentControls:aa(f.tree)}});const m=ia(e.currentRoute.paths),C=(m?wi({flattenedNodes:f.flattenedNodes,searchQuery:m}):void 0)??Cc(f.flattenedNodes,e.currentRoute.paths,u),A=(d=e.treeBasedCurrentControls)==null?void 0:d.currentControls;return A?(t.debug&&console.info({currentControls:A}),b`
                <div
                    class="root"
                    ${J(Rt,x=>{const _=r.shadowRoot.querySelector(ge.tagName);_?_.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${ge.tagName}' for scrolling.`),u(x.detail)})}
                    ${J(yt.events.controlValueChange,x=>{if(!e.treeBasedCurrentControls)return;const _=pi(A,x.detail.fullUrlBreadcrumbs,x.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:_}})})}
                >
                    <${mt}
                        ${E(mt,{flattenedNodes:f.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}
                    >
                        <slot
                            name=${W.NavHeader}
                            slot=${W.NavHeader}
                        ></slot>
                    </${mt}>
                    <${ge}
                        ${E(ge,{currentRoute:e.currentRoute,currentNodes:C,router:e.router,debug:p,currentControls:A})}
                    >
                        <slot
                            name=${W.Footer}
                            slot=${W.Footer}
                        ></slot>
                    </${ge}>
                </div>
            `):b`
                    <${H}
                        ${E(H,{message:"Failed to generate page controls."})}
                    ></${H}>
                `}catch(u){return console.error(u),b`
                <p class="error">${zt(u)}</p>
            `}}}),Qr=xe({title:"Parent Page 1",parent:void 0}),Ir=xe({title:"Parent Page 2",parent:void 0}),yo=xe({title:"Sub Page 1",parent:Ir});function $o(e,t){return xe({title:`test ${e}`,parent:t,elementExamplesCallback({defineExample:n}){n({title:"example",renderCallback(){return"element example here"}})}})}const wo=xe({title:"duplicate error page",parent:Qr,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:e}){e({title:"example 1",renderCallback(){return"hi"}}),e({title:"example 2",renderCallback(){return"hi"}})}}),xc=xe({title:"test 3",controls:{thing:{initValue:"there",controlType:Q.Text}},parent:Qr,elementExamplesCallback({defineExample:e}){e({title:"example 3 1",renderCallback(){return"hi"}}),e({title:"example 3 2",renderCallback({controls:t}){return`hello ${t.thing}`}}),e({title:"example with error",renderCallback({controls:t}){return"broken"}}),e({title:"example with error",renderCallback({controls:t}){return"broken"}})}}),Ya=[$o(0,Ir),yo,...Array(100).fill(0).map((e,t)=>$o(t+1,yo)),Qr,wo,wo,xc,Ir];console.info({entries:Ya});It({tagName:"vir-app",styles:k`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${Re} {
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
    `,stateInitStatic:{themeColor:void 0,paths:["book"]},renderCallback:({state:e,updateState:t})=>b`
            <label>
                Theme color
                <input
                    ${J("input",r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("input element not found for input event");t({themeColor:n.value})})}
                    type="color"
                />
            </label>
            <${Re}
                ${E(Re,{entries:Ya,themeColor:e.themeColor,internalRouterConfig:{useInternalRouter:!0},everythingTitle:"All",debug:!0})}
                ${J(Re.events.pathUpdate,r=>{t({paths:r.detail})})}
            >
                <h1 slot=${W.NavHeader}>My Title</h1>
                <footer slot=${W.Footer}>Example Footer</footer>
            </${Re}>
        `});
