var ns=Object.defineProperty;var os=(e,t,r)=>t in e?ns(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ft=(e,t,r)=>(os(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function as(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function wo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Rt(r).trim()).join(`
`))}function Rt(e){return e?e instanceof Error?e.message:Nt(e,"message")?String(e.message):String(e):""}function ss(e){return e instanceof Error?e:new Error(Rt(e))}function Co(e){return!!e}function en(e){return!!e&&typeof e=="object"}function is(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const ls=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Nt(e,t){return e?ls.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ko(e,t){return e&&t.every(r=>Nt(e,r))}function hr(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function cs(e){return Array.isArray(e)?"array":typeof e}function Bt(e,t){return cs(e)===t}function tn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const rn="Failed to compare objects using JSON.stringify";function nn(e,t,r){return tn({source:e,errorHandler(n){if(r)return"";throw n}})===tn({source:t,errorHandler(n){if(r)return"";throw n}})}function ze(e,t,r={}){try{return e===t?!0:en(e)&&en(t)?nn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>ze(e[o],t[o])):!1:nn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=ss(n);throw o.message.startsWith(rn)||(o.message=`${rn}: ${o.message}`),o}}function us(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function ds(e){return hr(e).filter(t=>isNaN(Number(t)))}function hs(e){return ds(e).map(r=>e[r])}function fs(e,t){return hs(t).includes(e)}function mt(e,t){let r=!1;const n=hr(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(hr(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function ps(e){const t=xo();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function xo(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${xo.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function on(e,t){try{return ms(e,t),!0}catch{return!1}}function ms(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function gs(e,t){return Nt(e,"entryType")&&e.entryType===t}var R;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(R||(R={}));function me(e,t){return e.controlType===t}var T;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(T||(T={}));const Eo=Symbol("any-type"),bs={[T.Checkbox]:!1,[T.Color]:"",[T.Dropdown]:"",[T.Hidden]:Eo,[T.Number]:0,[T.Text]:""};function vs(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=bs[o.controlType];a!==Eo&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Nr(e,t){const r=gt(e.title);return e.parent?[...Nr(e.parent,!1),gt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function gt(e){return as(e).toLowerCase().replaceAll(/\s/g,"-")}function ys({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Ee(e){const t={...e,entryType:R.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:R.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(Co)};r.add(n.title),t.elementExamples[gt(o.title)]=o}}),t}var G;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(G||(G={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ge=e=>(...t)=>({_$litDirective$:e,values:t});let Se=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ut;const bt=window,Ce=bt.trustedTypes,an=Ce?Ce.createPolicy("lit-html",{createHTML:e=>e}):void 0,vt="$lit$",Q=`lit$${(Math.random()+"").slice(9)}$`,Br="?"+Q,$s=`<${Br}>`,he=document,Fe=()=>he.createComment(""),Ue=e=>e===null||typeof e!="object"&&typeof e!="function",So=Array.isArray,_o=e=>So(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Vt=`[ 	
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sn=/-->/g,ln=/>/g,le=RegExp(`>|${Vt}(?:([^\\s"'>=/]+)(${Vt}*=${Vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),cn=/'/g,un=/"/g,To=/^(?:script|style|textarea|title)$/i,ws=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Cs=ws(1),W=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),dn=new WeakMap,ue=he.createTreeWalker(he,129,null,!1);function Mo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return an!==void 0?an.createHTML(t):t}const Ao=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=Pe;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===Pe?u[1]==="!--"?s=sn:u[1]!==void 0?s=ln:u[2]!==void 0?(To.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=le):u[3]!==void 0&&(s=le):s===le?u[0]===">"?(s=o??Pe,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?le:u[3]==='"'?un:cn):s===un||s===cn?s=le:s===sn||s===ln?s=Pe:(s=le,o=void 0);const f=s===le&&e[i+1].startsWith("/>")?" ":"";a+=s===Pe?l+$s:d>=0?(n.push(c),l.slice(0,d)+vt+l.slice(d)+Q+f):l+Q+(d===-2?(n.push(void 0),i):f)}return[Mo(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Ve{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=Ao(t,r);if(this.el=Ve.createElement(c,n),ue.currentNode=this.el.content,r===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(o=ue.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const h of o.getAttributeNames())if(h.endsWith(vt)||h.startsWith(Q)){const f=u[s++];if(d.push(h),f!==void 0){const p=o.getAttribute(f.toLowerCase()+vt).split(Q),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:g[2],strings:p,ctor:g[1]==="."?Ro:g[1]==="?"?No:g[1]==="@"?Bo:Je})}else l.push({type:6,index:a})}for(const h of d)o.removeAttribute(h)}if(To.test(o.tagName)){const d=o.textContent.split(Q),h=d.length-1;if(h>0){o.textContent=Ce?Ce.emptyScript:"";for(let f=0;f<h;f++)o.append(d[f],Fe()),ue.nextNode(),l.push({type:2,index:++a});o.append(d[h],Fe())}}}else if(o.nodeType===8)if(o.data===Br)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(Q,d+1))!==-1;)l.push({type:7,index:a}),d+=Q.length-1}a++}}static createElement(t,r){const n=he.createElement("template");return n.innerHTML=t,n}}function fe(e,t,r=e,n){var o,a,s,i;if(t===W)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=Ue(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=fe(e,l._$AS(e,t.values),l,n)),t}class Po{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:he).importNode(n,!0);ue.currentNode=a;let s=ue.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new _e(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new Lo(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=ue.nextNode(),i++)}return ue.currentNode=he,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class _e{constructor(t,r,n,o){var a;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=fe(this,t,r),Ue(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==W&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):_o(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&Ue(this._$AH)?this._$AA.nextSibling.data=t:this.$(he.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ve.createElement(Mo(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new Po(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=dn.get(t.strings);return r===void 0&&dn.set(t.strings,r=new Ve(t)),r}T(t){So(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new _e(this.k(Fe()),this.k(Fe()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Je{constructor(t,r,n,o,a){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=fe(this,t,r,0),s=!Ue(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=fe(this,i[n+l],r,l),c===W&&(c=this._$AH[l]),s||(s=!Ue(c)||c!==this._$AH[l]),c===M?t=M:t!==M&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ro extends Je{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const ks=Ce?Ce.emptyScript:"";class No extends Je{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,ks):this.element.removeAttribute(this.name)}}class Bo extends Je{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=fe(this,t,r,0))!==null&&n!==void 0?n:M)===W)return;const o=this._$AH,a=t===M&&o!==M||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==M&&(o===M||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Lo{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){fe(this,t)}}const xs={O:vt,P:Q,A:Br,C:1,M:Ao,L:Po,D:_o,R:fe,I:_e,V:Je,H:No,N:Bo,U:Ro,F:Lo},hn=bt.litHtmlPolyfillSupport;hn==null||hn(Ve,_e),((Ut=bt.litHtmlVersions)!==null&&Ut!==void 0?Ut:bt.litHtmlVersions=[]).push("2.7.5");const Es=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new _e(t.insertBefore(Fe(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ss}=xs,fn=()=>document.createComment(""),Re=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(fn(),a),i=o.insertBefore(fn(),a);r=new Ss(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},ce=(e,t,r=e)=>(e._$AI(t,r),e),_s={},Ts=(e,t=_s)=>e._$AH=t,Ms=e=>e._$AH,Yt=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=Ge(class extends Se{constructor(e){var t;if(super(e),e.type!==Lt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},As=Ge(class extends Se{constructor(e){if(super(e),e.type!==Lt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=Ms(e),{values:s,keys:i}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,h=0,f=a.length-1,p=0,g=s.length-1;for(;h<=f&&p<=g;)if(a[h]===null)h++;else if(a[f]===null)f--;else if(l[h]===i[p])c[p]=ce(a[h],s[p]),h++,p++;else if(l[f]===i[g])c[g]=ce(a[f],s[g]),f--,g--;else if(l[h]===i[g])c[g]=ce(a[h],s[g]),Re(e,c[g+1],a[h]),h++,g--;else if(l[f]===i[p])c[p]=ce(a[f],s[p]),Re(e,a[h],a[f]),f--,p++;else if(u===void 0&&(u=pn(i,p,g),d=pn(l,h,f)),u.has(l[h]))if(u.has(l[f])){const v=d.get(i[p]),E=v!==void 0?a[v]:null;if(E===null){const S=Re(e,a[h]);ce(S,s[p]),c[p]=S}else c[p]=ce(E,s[p]),Re(e,a[h],E),a[v]=null;p++}else Yt(a[f]),f--;else Yt(a[h]),h++;for(;p<=g;){const v=Re(e,c[g+1]);ce(v,s[p]),c[p++]=v}for(;h<=f;){const v=a[h++];v!==null&&Yt(v)}return this.ht=i,Ts(e,c),W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let fr=class extends Se{constructor(t){if(super(t),this.et=M,t.type!==Lt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||t==null)return this.ft=void 0,this.et=t;if(t===W)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};fr.directiveName="unsafeHTML",fr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mn=class extends fr{};mn.directiveName="unsafeSVG",mn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ps(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=window,Lr=ht.ShadowRoot&&(ht.ShadyCSS===void 0||ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Or=Symbol(),gn=new WeakMap;let zo=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Or)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Lr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=gn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&gn.set(r,t))}return t}toString(){return this.cssText}};const Y=e=>new zo(typeof e=="string"?e:e+"",void 0,Or),He=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new zo(r,e,Or)},Rs=(e,t)=>{Lr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=ht.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},bn=Lr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Y(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zt;const yt=window,vn=yt.trustedTypes,Ns=vn?vn.emptyScript:"",yn=yt.reactiveElementPolyfillSupport,pr={toAttribute(e,t){switch(t){case Boolean:e=e?Ns:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ho=(e,t)=>t!==e&&(t==t||e==e),Wt={attribute:!0,type:String,converter:pr,reflect:!1,hasChanged:Ho},mr="finalized";class ye extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Wt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Wt}static finalize(){if(this.hasOwnProperty(mr))return!1;this[mr]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(bn(o))}else t!==void 0&&r.push(bn(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Rs(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Wt){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:pr).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:pr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Ho)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}ye[mr]=!0,ye.elementProperties=new Map,ye.elementStyles=[],ye.shadowRootOptions={mode:"open"},yn==null||yn({ReactiveElement:ye}),((Zt=yt.reactiveElementVersions)!==null&&Zt!==void 0?Zt:yt.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qt,Xt;class De extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Es(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return W}}De.finalized=!0,De._$litElement$=!0,(qt=globalThis.litElementHydrateSupport)===null||qt===void 0||qt.call(globalThis,{LitElement:De});const $n=globalThis.litElementPolyfillSupport;$n==null||$n({LitElement:De});((Xt=globalThis.litElementVersions)!==null&&Xt!==void 0?Xt:globalThis.litElementVersions=[]).push("3.3.2");var Bs=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(E){if(E!==void 0&&typeof E!="function")throw new TypeError("Function expected");return E}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,h=!1,f=r.length-1;f>=0;f--){var p={};for(var g in n)p[g]=g==="access"?{}:n[g];for(var g in n.access)p.access[g]=n.access[g];p.addInitializer=function(E){if(h)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(E||null))};var v=(0,r[f])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(d=s(v.get))&&(u.get=d),(d=s(v.set))&&(u.set=d),(d=s(v.init))&&o.push(d)}else(d=s(v))&&(i==="field"?o.push(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),h=!0},Ls=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Os=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function zs(){function e(t,r){return t}return e}let Do=(()=>{let e=[zs()],t,r=[],n;return n=class extends De{},Os(n,"DeclarativeElement"),Bs(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,Ls(n,r),n})();const Hs={capitalizeFirstLetter:!1};function Ds(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Is(e,t){return t.capitalizeFirstLetter?Ds(e):e}function js(e,t=Hs){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return Is(n,t)}function Fs(e){return e?e instanceof Error?e.message:Ke(e,"message")?String(e.message):String(e):""}function Us(e){return e instanceof Error?e:new Error(Fs(e))}const Vs=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Ke(e,t){return e?Vs.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Ys(e,t){return e&&t.every(r=>Ke(e,r))}function pe(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Io(e,t){let r=!1;const n=pe(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(pe(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function wn(e){return e!==e.toUpperCase()}function Zs(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=wn(s)||wn(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Ws=["january","february","march","april","may","june","july","august","september","october","november","december"];Ws.map(e=>e.slice(0,3));function qs(e){return!!e}function Xs(e){return!!e&&typeof e=="object"}function Cn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Gs(e){return Array.isArray(e)?"array":typeof e}function Js(e,t){return Gs(e)===t}function Ks(e,t){let r=!1;const n=Cn(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(Cn(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function se(e){if(Xs(e))return Ks(e,(r,n)=>{if(!Js(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Zs(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?Y(r):r.startsWith("-")?He`-${Y(r)}`:He`--${Y(r)}`;return{name:s,value:He`var(${s}, ${Y(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${se.name}' function.`)}function Qs({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},ti=(e,t,r)=>{t.constructor.createProperty(r,e)};function jo(e){return(t,r)=>r!==void 0?ti(e,t,r):ei(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gt;((Gt=window.HTMLSlotElement)===null||Gt===void 0?void 0:Gt.prototype.assignedElements)!=null;const gr=Symbol("this-is-an-element-vir-declarative-element"),zr=Symbol("key for ignoring inputs not having been set yet"),ri={[zr]:!0,allowPolymorphicState:!1};function Fo(e,t){const r=e.instanceState;pe(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&pe(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Uo(e)}function Uo(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Vo(e,t){return br(e,t),e.element}function ni(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function br(e,t){const r=ni(e),n=r?`: found in ${r}`:"";if(e.type!==Lt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function x(e,t){return t?kn(e,t):kn(void 0,e)}const kn=Ge(class extends Se{constructor(e){super(e),this.element=Vo(e,"assign")}render(e,t){return oi(e,this.element,t),W}});function oi(e,t,r){Fo(t,r)}function Yo(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Do?!0:Yo(r)}function xn(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class ai extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Hr(){return e=>{var t;return t=class extends ai{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function ke(){return Hr()}function si(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Hr()(r);return t[r]=n,t},{}):{}}const En="_is_element_vir_observable_property_handler_instance",Sn="_is_element_vir_observable_property_handler_creator";function ii(e){return Ke(e,Sn)&&e[Sn]===!0}function li(e){return Ke(e,En)&&e[En]===!0}function ci(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function _n(e,t){const r=e;function n(s){t?ci(s,e,e.tagName):jo()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{n(i);const c=e.observablePropertyHandlerMap[i];function u(d){s[i]=d,r[i]=d}return ii(l)&&(l=l.init()),li(l)?(c&&l!==c?(l.addMultipleListeners(c.getAllListeners()),c.removeAllListeners()):l.addListener(!0,d=>{u(d)}),e.observablePropertyHandlerMap[i]=l):c?c.setValue(l):u(l),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function ui(e){return e?Io(e,t=>t):{}}function di({hostClassNames:e,cssVars:t}){return{hostClasses:Io(e,(r,n)=>({name:Y(n),selector:Y(`:host(.${n})`)})),cssVars:t}}function hi({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&pe(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function fi(e,t){function r(o){pe(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var pi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Ot(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...ri,...e.options},n=si(e.events),o=ui(e.hostClasses);e.hostClasses&&xn(e.tagName,e.hostClasses),e.cssVars&&xn(e.tagName,e.cssVars);const a=e.cssVars?se(e.cssVars):{},s=typeof e.styles=="function"?e.styles(di({hostClassNames:o,cssVars:a})):e.styles||He``,i=e.renderCallback,l=(t=class extends Do{createRenderParams(){return fi(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Uo(this)}render(){try{Yo(this)&&!this.haveInputsBeenSet&&!r[zr]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${x.name}" directive on it. If no inputs are intended, use "${Ot.name}" to define ${e.tagName}.`),this.hasRendered=!0;const c=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(c)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const u=i(c);if(u instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return hi({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:c.state,inputs:c.inputs}),this.lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},u}catch(c){const u=Us(c);throw u.message=`Failed to render '${e.tagName}': ${u.message}`,u}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const c=this.createRenderParams();if(e.initCallback(c)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const c=this.createRenderParams();if(e.cleanupCallback(c)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(c){Fo(this,c)}constructor(){var u;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=_n(this,!1),this.instanceState=_n(this,!((u=e.options)!=null&&u.allowPolymorphicState));const c=e.stateInitStatic||{};pe(c).forEach(d=>{jo()(this,d),this.instanceState[d]=c[d]}),this.definition=l}},pi(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(l,{[gr]:{value:!0,writable:!1},name:{value:js(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:c=>c instanceof l,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function Zo(){return e=>Ot({...e,options:{[zr]:!1,...e.options}})}function N(e,t){return mi(e,t)}const mi=Ge(class extends Se{constructor(e){super(e),this.element=Vo(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),W}}),Jt="onResize",Wo=Ge(class extends Se{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),br(e,Jt)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Jt} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){br(e,Jt),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function xe(e,t,r){return Ps(e,()=>t,()=>r)}function qo(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Zo()(r(n))),defineElementNoInputs:n=>(t(n),Ot(r(n)))}}function gi(e,t){return e.filter((r,n)=>!t.includes(n))}function Xo(e){return e.filter(t=>Ys(t,["tagName",gr])&&!!t.tagName&&!!t[gr])}const Go=new WeakMap;function bi(e,t){var o;const r=Xo(t);return(o=Jo(Go,[e,...r]).value)==null?void 0:o.template}function vi(e,t,r){const n=Xo(t);return Qo(Go,[e,...n],r)}function Jo(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Ko(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Jo(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Ko(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Qo(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Ko(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Qo(l,t,r,n+1)}function ea(e,t,r){return{name:e,check:t,transform:r}}const yi=new WeakMap;function ta(e,t,r){const n=bi(e,t),o=n??r();if(!n){const s=vi(e,t,o);if(s.result)yi.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const a=gi(t,o.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function ra(e,t,r,n){const o=[],a=[],s=[];return e.forEach((l,c)=>{var v;const u=o.length-1,d=o[u],h=c-1,f=t[h];let p;n&&n(l),typeof d=="string"&&(p=(v=r.find(E=>E.check(d,l,f)))==null?void 0:v.transform,p&&(o[u]=d+p(f)+l,s.push(h))),p||o.push(l);const g=e.raw[c];p?a[u]=a[u]+p(f)+g:a.push(g)}),{templateStrings:Object.assign([],o,{raw:a}),valueIndexDeletions:s}}function na(e){return Ke(e,"tagName")&&typeof e.tagName=="string"&&e.tagName.includes("-")}const $i=[ea("tag name css selector interpolation",(e,t,r)=>na(r),e=>e.tagName)];function wi(e,t){return ra(e,t,$i)}function w(e,...t){const r=ta(e,t,()=>wi(e,t));return He(r.strings,...r.values)}const Ci=[ea("tag name interpolation",(e,t,r)=>{const n=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),o=na(r);if(n&&!o)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${r.prototype.constructor.name}'`);return n&&o},e=>e.tagName)];function ki(e){}function xi(e){return ra(e.strings,e.values,Ci,ki)}function m(e,...t){const r=Cs(e,...t),n=ta(e,t,()=>xi(r));return{...r,strings:n.strings,values:n.values}}const Ei={[R.ElementExample]:()=>[],[R.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...vs(e.controls,e.title)].filter(Co),[R.Root]:()=>[]},$t="_isBookTreeNode",oa=new Map;function Si(e){return oa.get(e)}function _i(e,t){us(oa,e,()=>t)}function we(e,t){return!!(aa(e)&&e.entry.entryType===t)}function aa(e){return!!(ko(e,[$t,"entry"])&&e[$t])}function Ti(e,t){return{[$t]:!0,entry:{entryType:R.Root,title:e||"Everything",parent:void 0,errors:[],descriptionParagraphs:t},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Mi({entries:e,everythingTitle:t,everythingDescriptionParagraphs:r,debug:n}){const o=Si(e);if(o)return o;const a=Ti(t,r);e.forEach(l=>Dr({tree:a,newEntry:l,debug:n,manuallyAdded:!0}));const s=sa(a),i={tree:a,flattenedNodes:s};return _i(e,i),n&&console.info("element-book tree:",a),i}function Ai(e,t,r){if(!t.parent)return e;const n=vr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),Dr({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=vr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Nr(t,!1)}`);return o}function Dr({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Ei[t.entryType](t);t.errors.push(...o);const a=Ai(e,t,r),s=gt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[$t]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,gs(t,R.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>Dr({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function vr(e,t){const r=aa(e)?e.fullUrlBreadcrumbs.slice(0,-1):Nr(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function sa(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>sa(o));return[e,...r].flat()}function Pi(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function Ir(e,t){return jr(e,t,void 0)}function jr(e,t,r){const n=t[0];if(!n)return{};const o=Pi(e,n,r);if(!o)return{};const a=t.slice(1);return!a.length&&r&&(o.controls=r),{...o.controls,...jr(o.children,a,r)}}function Ri(e,t,r){const n=is(e);return jr(n,t,r),n}function ia(e){return mt(e.children,(r,n)=>we(n,R.Page)?{children:ia(n),controls:mt(n.entry.controls,(o,a)=>a.initValue)}:{children:{},controls:{}})}function la(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${la.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Ni(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}async function Bi(e=1){const t=la();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const Li=globalThis.crypto;function Oi(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Li.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function zi(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{Ni(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function Ne(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function Hi({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const Di=Oi(32);function yr(e){return e.join(Di)}function ca(e){if(!e.length)return[];const t=yr(e),r=ca(e.slice(0,-1));return[t,...r]}const Ii=["error","errors"];function ji(e){return Ii.includes(e)}function Fi({flattenedNodes:e,searchQuery:t}){const r={};return e.forEach(n=>{const o=n.entry.errors.length&&ji(t);if(Hi({searchIn:[n.entry.title,...n.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o)ca(n.fullUrlBreadcrumbs).forEach(i=>r[i]=!0);else{const s=yr(n.fullUrlBreadcrumbs);r[s]=!1}}),e.filter(n=>{const o=yr(n.fullUrlBreadcrumbs),a=r[o];if(!Bt(a,"boolean"))throw new Error(`Failed to find '${n.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var B;(function(e){e.Search="search",e.Book="book"})(B||(B={}));function ua(e){return e[0]===B.Book?"":e[1]?decodeURIComponent(e[1]):""}const Ye={hash:void 0,paths:[B.Book],search:void 0},Ui=0;function da(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Ui)}class zt extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Tn extends zt{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const Ze="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Vi=globalThis.history.pushState;function Mn(...e){const t=Vi.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ze)),t}const Yi=globalThis.history.replaceState;function An(...e){const t=Yi.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Ze)),t}function Zi(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Mn)throw new Tn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===An)throw new Tn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Mn,globalThis.history.replaceState=An,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ze))})}}function Wi(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function qi(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function Xi(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),a=globalThis.location.search?Wi(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:a,hash:s}}function ha(e){return e.replace(/(?:^\/|\/+$)/g,"")}function fa({routeBase:e,windowPath:t}){if(!e)return"";const r=ha(e);if(pa({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?fa({routeBase:n,windowPath:t}):""}function pa({routeBase:e,windowPath:t}){const r=ha(e);return r?t.startsWith(`/${r}`):!1}class Gi extends zt{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function ma(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Pn=6;function Rn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Pn)throw new Gi(`Route sanitization depth has exceed the max of ${Pn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(ma(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Kt extends zt{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Ji(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Kt(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Kt(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Kt(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Ki(e,t,r=!1){const n=ga(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function ga(e,t){var l;const r=pa({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?qi(e.search).toString():"",o=n?`?${n}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",s=e.hash?`${a}${e.hash}`:"";return`/${[r,...e.paths].filter(qs).join("/")}${o}${s}`}function Qi(e={}){Ji(e),Zi();const t=e.routeBase?fa({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Rn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&ma(l,u)))return Ki(u,t,s)},createRoutesUrl(a){return ga(a,t)},getCurrentRawRoutes(){return Xi(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new zt(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(Ze,n),r=!0),a&&Rn(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(Ze,n),r=!1),s},sanitizationDepth:0};return o}function el(e){return Qi({routeBase:e,routeSanitizer(t){return{paths:tl(t.paths),hash:void 0,search:void 0}}})}function tl(e){const t=e[0];if(fs(t,B)){if(t===B.Book)return[B.Book,...e.slice(1)];if(t===B.Search)return e[1]?[t,e[1]]:[B.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Ye.paths}const $=se({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),rl={nav:{hover:{background:$["element-book-nav-hover-background-color"],foreground:$["element-book-nav-hover-foreground-color"]},active:{background:$["element-book-nav-active-background-color"],foreground:$["element-book-nav-active-foreground-color"]},selected:{background:$["element-book-nav-selected-background-color"],foreground:$["element-book-nav-selected-foreground-color"]}},accent:{icon:$["element-book-accent-icon-color"]},page:{background:$["element-book-page-background-color"],backgroundFaint1:$["element-book-page-background-faint-level-1-color"],backgroundFaint2:$["element-book-page-background-faint-level-2-color"],foreground:$["element-book-page-foreground-color"],foregroundFaint1:$["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:$["element-book-page-foreground-faint-level-2-color"]}};function nl(e,t){ba(e,t,rl)}function $r(e){return Nt(e,"_$cssResult$")}function Nn(e){return ko(e,["name","value","default"])&&Bt(e.default,"string")&&$r(e.name)&&$r(e.value)}function ba(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if($r(o)){if(!Nn(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);Qs({forCssVar:a,onElement:e,toValue:String(o)})}else{if(Nn(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ba(e,o,a)}})}function A(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function Qe(e){return te(e)==="string"}function te(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function wt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function va(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ya(e){return e[e.length-1]}function Ct(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function $a(e,t,r){return(r-e)/(t-e)}function Fr(e,t,r){return Ct(t[0],t[1],$a(e[0],e[1],r))}function wa(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var ol=Object.freeze({__proto__:null,interpolate:Ct,interpolateInv:$a,isString:Qe,last:ya,mapRange:Fr,multiplyMatrices:A,parseCoordGrammar:wa,parseFunction:va,toPrecision:wt,type:te});class al{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const re=new al;var J={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const Z={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function wr(e){return Array.isArray(e)?e:Z[e]}function kt(e,t,r,n={}){if(e=wr(e),t=wr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(re.run("chromatic-adaptation-start",o),o.M||(o.W1===Z.D65&&o.W2===Z.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===Z.D50&&o.W2===Z.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),re.run("chromatic-adaptation-end",o),o.M)return A(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const sl=75e-6,z=class z{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?z.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=wr(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:il(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),re.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=sl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=Bn(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=Bn(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=z.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=z.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(z.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof z)return t;if(te(t)==="string"){let o=z.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return z.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=te(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=z.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=te(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=z.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};Ft(z,"registry",{}),Ft(z,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=z;function il(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function Bn(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=wa(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=Fr(i,l,a)),a=wt(a,o),c&&(a+=c),a})}return e}var j=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class O extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=j),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=A(t.toXYZ_M,r);return this.white!==this.base.white&&(n=kt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=kt(this.base.white,this.white,r),A(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Ca(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(re.run("parse-start",r),r.color)return r.color;if(r.parsed=va(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let h of b.all){let f=h.getFormat("color");if(f&&(c===f.id||(o=f.ids)!=null&&o.includes(c))){const p=Object.keys(h.coords).map((g,v)=>r.parsed.args[v]||0);return t&&(t.formatId="color"),{spaceId:h.id,coords:p,alpha:u}}}let d="";if(c in b.registry){let h=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;h&&(d=`Did you mean color(${h})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||ya(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let h=r.parsed.args,f;return u.coordGrammar&&(f=Object.entries(c.coords).map(([p,g],v)=>{var ie;let E=u.coordGrammar[v],S=(ie=h[v])==null?void 0:ie.type,k=E.find(ee=>ee==S);if(!k){let ee=g.name||p;throw new TypeError(`${S} not allowed for ${ee} in ${l}()`)}let _=k.range;S==="<percentage>"&&(_||(_=[0,1]));let D=g.range||g.refRange;return _&&D&&(h[v]=Fr(_,D,h[v])),k})),t&&Object.assign(t,{formatId:u.name,types:f}),{spaceId:c.id,coords:h,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function C(e){if(!e)throw new TypeError("Empty color reference");Qe(e)&&(e=Ca(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function et(e,t){return t=b.get(t),t.from(e)}function F(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return et(e,r)[n]}function ka(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function ne(e,t,r){if(e=C(e),arguments.length===2&&te(arguments[1])==="object"){let n=arguments[1];for(let o in n)ne(e,o,n[o])}else{typeof r=="function"&&(r=r(F(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=et(e,n);a[o]=r,ka(e,n,a)}return e}var Ur=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:j,fromBase:e=>kt(j.white,"D50",e),toBase:e=>kt("D50",j.white,e),formats:{color:{}}});const ll=216/24389,Ln=24/116,ot=24389/27;let Qt=Z.D50;var H=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Qt,base:Ur,fromBase(e){let r=e.map((n,o)=>n/Qt[o]).map(n=>n>ll?Math.cbrt(n):(ot*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ln?Math.pow(t[0],3):(116*t[0]-16)/ot,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ot,t[2]>Ln?Math.pow(t[2],3):(116*t[2]-16)/ot].map((n,o)=>n*Qt[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ht(e){return(e%360+360)%360}function cl(e,t){if(e==="raw")return t;let[r,n]=t.map(Ht),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var We=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:H,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ht(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const On=25**7,xt=Math.PI,zn=180/xt,ge=xt/180;function Cr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=H.from(e),l=We.from(H,[a,s,i])[1],[c,u,d]=H.from(t),h=We.from(H,[c,u,d])[1];l<0&&(l=0),h<0&&(h=0);let p=((l+h)/2)**7,g=.5*(1-Math.sqrt(p/(p+On))),v=(1+g)*s,E=(1+g)*u,S=Math.sqrt(v**2+i**2),k=Math.sqrt(E**2+d**2),_=v===0&&i===0?0:Math.atan2(i,v),D=E===0&&d===0?0:Math.atan2(d,E);_<0&&(_+=2*xt),D<0&&(D+=2*xt),_*=zn,D*=zn;let ie=c-a,ee=k-S,q=D-_,Te=_+D,qr=Math.abs(q),Me;S*k===0?Me=0:qr<=180?Me=q:q>180?Me=q-360:q<-180?Me=q+360:console.log("the unthinkable has happened");let Xr=2*Math.sqrt(k*S)*Math.sin(Me*ge/2),Ka=(a+c)/2,jt=(S+k)/2,Gr=Math.pow(jt,7),K;S*k===0?K=Te:qr<=180?K=Te/2:Te<360?K=(Te+360)/2:K=(Te-360)/2;let Jr=(Ka-50)**2,Qa=1+.015*Jr/Math.sqrt(20+Jr),Kr=1+.045*jt,Ae=1;Ae-=.17*Math.cos((K-30)*ge),Ae+=.24*Math.cos(2*K*ge),Ae+=.32*Math.cos((3*K+6)*ge),Ae-=.2*Math.cos((4*K-63)*ge);let Qr=1+.015*jt*Ae,es=30*Math.exp(-1*((K-275)/25)**2),ts=2*Math.sqrt(Gr/(Gr+On)),rs=-1*Math.sin(2*es*ge)*ts,nt=(ie/(r*Qa))**2;return nt+=(ee/(n*Kr))**2,nt+=(Xr/(o*Qr))**2,nt+=rs*(ee/(n*Kr))*(Xr/(o*Qr)),Math.sqrt(nt)}const ul=75e-6;function Ie(e,t=e.space,{epsilon:r=ul}={}){e=C(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function qe(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function oe(e,{method:t=J.gamut_mapping,space:r=e.space}={}){if(Qe(arguments[1])&&(r=arguments[1]),r=b.get(r),Ie(e,r,{epsilon:0}))return C(e);let n=I(e,r);if(t!=="clip"&&!Ie(e,r)){let o=oe(qe(n),{method:"clip",space:r});if(Cr(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=I(n,s),u=(a.range||a.refRange)[0],d=.01,h=u,f=F(l,i);for(;f-h>d;){let p=qe(l);p=oe(p,{space:r,method:"clip"}),Cr(l,p)-2<d?h=F(l,i):f=F(l,i),ne(l,i,(h+f)/2)}n=I(l,r)}else n=o}if(t==="clip"||!Ie(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=I(n,e.space)),e.coords=n.coords,e}oe.returns="color";function I(e,t,{inGamut:r}={}){e=C(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=oe(o)),o}I.returns="color";function Et(e,{precision:t=J.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=C(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!Ie(e)&&(i=oe(qe(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(f=>wt(f,t)));let u=[...i];if(c==="color"){let f=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(f)}let d=e.alpha;t!==null&&(d=wt(d,t));let h=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${h})`}return a}const dl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],hl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Dt=new O({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:dl,fromXYZ_M:hl,formats:{color:{}}});const at=1.09929682680944,Hn=.018053968510807;var xa=new O({id:"rec2020",name:"REC.2020",base:Dt,toBase(e){return e.map(function(t){return t<Hn*4.5?t/4.5:Math.pow((t+at-1)/at,1/.45)})},fromBase(e){return e.map(function(t){return t>=Hn?at*Math.pow(t,.45)-(at-1):4.5*t})},formats:{color:{}}});const fl=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],pl=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ea=new O({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:fl,fromXYZ_M:pl});const ml=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],gl=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Sa=new O({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:ml,fromXYZ_M:gl,formats:{color:{}}}),Dn={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let In=Array(3).fill("<percentage> | <number>[0, 255]"),jn=Array(3).fill("<number>[0, 255]");var Xe=new O({id:"srgb",name:"sRGB",base:Sa,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:In},rgb_number:{name:"rgb",commas:!0,coords:jn,noAlpha:!0},color:{},rgba:{coords:In,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:jn},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Dn.black,t.alpha=0):t.coords=Dn[e],t.coords)return t}}}}),_a=new O({id:"p3",name:"P3",base:Ea,fromBase:Xe.fromBase,toBase:Xe.toBase,formats:{color:{id:"display-p3"}}});J.display_space=Xe;if(typeof CSS<"u"&&CSS.supports)for(let e of[H,xa,_a]){let t=e.getMinCoords(),n=Et({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){J.display_space=e;break}}function bl(e,{space:t=J.display_space,...r}={}){let n=Et(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!J.display_space)n=new String(n),n.color=e;else{let o=I(e,t);n=new String(Et(o,r)),n.color=o}return n}function Ta(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function vl(e,t){return e=C(e),t=C(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ae(e){return F(e,[j,"y"])}function Ma(e,t){ne(e,[j,"y"],t)}function yl(e){Object.defineProperty(e.prototype,"luminance",{get(){return ae(this)},set(t){Ma(this,t)}})}var $l=Object.freeze({__proto__:null,getLuminance:ae,register:yl,setLuminance:Ma});function wl(e,t){e=C(e),t=C(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Cl=.56,kl=.57,xl=.62,El=.65,Fn=.022,Sl=1.414,_l=.1,Tl=5e-4,Ml=1.14,Un=.027,Al=1.14;function Vn(e){return e>=Fn?e:e+(Fn-e)**Sl}function be(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Pl(e,t){t=C(t),e=C(e);let r,n,o,a,s,i;t=I(t,"srgb"),[a,s,i]=t.coords;let l=be(a)*.2126729+be(s)*.7151522+be(i)*.072175;e=I(e,"srgb"),[a,s,i]=e.coords;let c=be(a)*.2126729+be(s)*.7151522+be(i)*.072175,u=Vn(l),d=Vn(c),h=d>u;return Math.abs(d-u)<Tl?n=0:h?(r=d**Cl-u**kl,n=r*Ml):(r=d**El-u**xl,n=r*Al),Math.abs(n)<_l?o=0:n>0?o=n-Un:o=n+Un,o*100}function Rl(e,t){e=C(e),t=C(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Nl=5e4;function Bl(e,t){e=C(e),t=C(t);let r=Math.max(ae(e),0),n=Math.max(ae(t),0);return n>r&&([r,n]=[n,r]),n===0?Nl:(r-n)/n}function Ll(e,t){e=C(e),t=C(t);let r=F(e,[H,"l"]),n=F(t,[H,"l"]);return Math.abs(r-n)}const Ol=216/24389,Yn=24/116,st=24389/27;let er=Z.D65;var kr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:er,base:j,fromBase(e){let r=e.map((n,o)=>n/er[o]).map(n=>n>Ol?Math.cbrt(n):(st*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Yn?Math.pow(t[0],3):(116*t[0]-16)/st,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/st,t[2]>Yn?Math.pow(t[2],3):(116*t[2]-16)/st].map((n,o)=>n*er[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const tr=Math.pow(5,.5)*.5+.5;function zl(e,t){e=C(e),t=C(t);let r=F(e,[kr,"l"]),n=F(t,[kr,"l"]),o=Math.abs(Math.pow(r,tr)-Math.pow(n,tr)),a=Math.pow(o,1/tr)*Math.SQRT2-40;return a<7.5?0:a}var ft=Object.freeze({__proto__:null,contrastAPCA:Pl,contrastDeltaPhi:zl,contrastLstar:Ll,contrastMichelson:Rl,contrastWCAG21:wl,contrastWeber:Bl});function Hl(e,t,r={}){Qe(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(ft).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=C(e),t=C(t);for(let a in ft)if("contrast"+n.toLowerCase()===a.toLowerCase())return ft[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Aa(e){let[t,r,n]=et(e,j),o=t+15*r+3*n;return[4*t/o,9*r/o]}function Pa(e){let[t,r,n]=et(e,j),o=t+r+n;return[t/o,r/o]}function Dl(e){Object.defineProperty(e.prototype,"uv",{get(){return Aa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Pa(this)}})}var Il=Object.freeze({__proto__:null,register:Dl,uv:Aa,xy:Pa});function jl(e,t){return Ta(e,t,"lab")}const Fl=Math.PI,Zn=Fl/180;function Ul(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=H.from(e),[,i,l]=We.from(H,[o,a,s]),[c,u,d]=H.from(t),h=We.from(H,[c,u,d])[1];i<0&&(i=0),h<0&&(h=0);let f=o-c,p=i-h,g=a-u,v=s-d,E=g**2+v**2-p**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let k=.0638*i/(1+.0131*i)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*Zn)):_=.36+Math.abs(.4*Math.cos((l+35)*Zn));let D=Math.pow(i,4),ie=Math.sqrt(D/(D+1900)),ee=k*(ie*_+1-ie),q=(f/(r*S))**2;return q+=(p/(n*k))**2,q+=E/ee**2,Math.sqrt(q)}const Wn=203;var Vr=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:j,fromBase(e){return e.map(t=>Math.max(t*Wn,0))},toBase(e){return e.map(t=>Math.max(t/Wn,0))}});const it=1.15,lt=.66,qn=2610/2**14,Vl=2**14/2610,Xn=3424/2**12,Gn=2413/2**7,Jn=2392/2**7,Yl=1.7*2523/2**5,Kn=2**5/(1.7*2523),ct=-.56,rr=16295499532821565e-27,Zl=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Wl=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ql=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Xl=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Ra=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Vr,fromBase(e){let[t,r,n]=e,o=it*t-(it-1)*n,a=lt*r-(lt-1)*t,i=A(Zl,[o,a,n]).map(function(h){let f=Xn+Gn*(h/1e4)**qn,p=1+Jn*(h/1e4)**qn;return(f/p)**Yl}),[l,c,u]=A(ql,i);return[(1+ct)*l/(1+ct*l)-rr,c,u]},toBase(e){let[t,r,n]=e,o=(t+rr)/(1+ct-ct*(t+rr)),s=A(Xl,[o,r,n]).map(function(h){let f=Xn-h**Kn,p=Jn*h**Kn-Gn;return 1e4*(f/p)**Vl}),[i,l,c]=A(Wl,s),u=(i+(it-1)*c)/it,d=(l+(lt-1)*u)/lt;return[u,d,c]},formats:{color:{}}}),xr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ra,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ht(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Gl(e,t){let[r,n,o]=xr.from(e),[a,s,i]=xr.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const Na=3424/4096,Ba=2413/128,La=2392/128,Qn=2610/16384,Jl=2523/32,Kl=16384/2610,eo=32/2523,Ql=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],ec=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],tc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],rc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Er=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Vr,fromBase(e){let t=A(Ql,e);return nc(t)},toBase(e){let t=oc(e);return A(rc,t)},formats:{color:{}}});function nc(e){let t=e.map(function(r){let n=Na+Ba*(r/1e4)**Qn,o=1+La*(r/1e4)**Qn;return(n/o)**Jl});return A(ec,t)}function oc(e){return A(tc,e).map(function(n){let o=Math.max(n**eo-Na,0),a=Ba-La*n**eo;return 1e4*(o/a)**Kl})}function ac(e,t){let[r,n,o]=Er.from(e),[a,s,i]=Er.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const sc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],ic=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],lc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],cc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var St=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:j,fromBase(e){let r=A(sc,e).map(n=>Math.cbrt(n));return A(lc,r)},toBase(e){let r=A(cc,e).map(n=>n**3);return A(ic,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function uc(e,t){let[r,n,o]=St.from(e),[a,s,i]=St.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var _t={deltaE76:jl,deltaECMC:Ul,deltaE2000:Cr,deltaEJz:Gl,deltaEITP:ac,deltaEOK:uc};function Oe(e,t,r={}){Qe(r)&&(r={method:r});let{method:n=J.deltaE,...o}=r;e=C(e),t=C(t);for(let a in _t)if("deltae"+n.toLowerCase()===a.toLowerCase())return _t[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function dc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ne(e,n,o=>o*(1+t))}function hc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ne(e,n,o=>o*(1-t))}var fc=Object.freeze({__proto__:null,darken:hc,lighten:dc});function Oa(e,t,r=.5,n={}){[e,t]=[C(e),C(t)],te(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return tt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function za(e,t,r={}){let n;Yr(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[C(e),C(t)],n=tt(e,t,l));let c=Oe(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let h=1/(u-1);d=Array.from({length:u},(f,p)=>{let g=p*h;return{p:g,color:n(g)}})}if(o>0){let h=d.reduce((f,p,g)=>{if(g===0)return 0;let v=Oe(p.color,d[g-1].color,a);return Math.max(f,v)},0);for(;h>o;){h=0;for(let f=1;f<d.length&&d.length<i;f++){let p=d[f-1],g=d[f],v=(g.p+p.p)/2,E=n(v);h=Math.max(h,Oe(E,p.color),Oe(E,g.color)),d.splice(f,0,{p:v,color:n(v)}),f++}}}return d=d.map(h=>h.color),d}function tt(e,t,r={}){if(Yr(e)){let[l,c]=[e,t];return tt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=C(e),t=C(t),e=qe(e),t=qe(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[J.interpolationSpace]||e.space,o=o?b.get(o):n,e=I(e,n),t=I(t,n),e=oe(e),t=oe(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[F(e,c),F(t,c)];[u,d]=cl(l,[u,d]),ne(e,c,u),ne(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((h,f)=>{let p=t.coords[f];return Ct(h,p,l)}),u=Ct(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(h=>h/u)),o!==n&&(d=I(d,o)),d},{rangeArgs:i})}function Yr(e){return te(e)==="function"&&!!e.rangeArgs}J.interpolationSpace="lab";function pc(e){e.defineFunction("mix",Oa,{returns:"color"}),e.defineFunction("range",tt,{returns:"function<color>"}),e.defineFunction("steps",za,{returns:"array<color>"})}var mc=Object.freeze({__proto__:null,isRange:Yr,mix:Oa,range:tt,register:pc,steps:za}),Ha=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Xe,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Da=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ha,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),gc=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Da,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const bc=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],vc=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Ia=new O({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:bc,fromXYZ_M:vc}),yc=new O({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Ia,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const $c=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],wc=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var ja=new O({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Ur,toXYZ_M:$c,fromXYZ_M:wc});const Cc=1/512,kc=16/512;var xc=new O({id:"prophoto",name:"ProPhoto",base:ja,toBase(e){return e.map(t=>t<kc?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=Cc?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Ec=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:St,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),Ht(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const to=203,ro=2610/2**14,Sc=2**14/2610,_c=2523/2**5,no=2**5/2523,oo=3424/2**12,ao=2413/2**7,so=2392/2**7;var Tc=new O({id:"rec2100pq",name:"REC.2100-PQ",base:Dt,toBase(e){return e.map(function(t){return(Math.max(t**no-oo,0)/(ao-so*t**no))**Sc*1e4/to})},fromBase(e){return e.map(function(t){let r=Math.max(t*to/1e4,0),n=oo+ao*r**ro,o=1+so*r**ro;return(n/o)**_c})},formats:{color:{id:"rec2100-pq"}}});const io=.17883277,lo=.28466892,co=.55991073,nr=3.7743;var Mc=new O({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Dt,toBase(e){return e.map(function(t){return t<=.5?t**2/3*nr:(Math.exp((t-co)/io)+lo)/12*nr})},fromBase(e){return e.map(function(t){return t/=nr,t<=1/12?Math.sqrt(3*t):io*Math.log(12*t-lo)+co})},formats:{color:{id:"rec2100-hlg"}}});const Fa={};re.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Ua(e.W1,e.W2,e.options.method))});re.add("chromatic-adaptation-end",e=>{e.M||(e.M=Ua(e.W1,e.W2,e.options.method))});function It({id:e,toCone_M:t,fromCone_M:r}){Fa[e]=arguments[0]}function Ua(e,t,r="Bradford"){let n=Fa[r],[o,a,s]=A(n.toCone_M,e),[i,l,c]=A(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=A(u,n.toCone_M);return A(n.fromCone_M,d)}It({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});It({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});It({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});It({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(Z,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Z.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Ac=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Pc=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Va=new O({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Z.ACES,toXYZ_M:Ac,fromXYZ_M:Pc,formats:{color:{}}});const ut=2**-16,or=-.35828683,dt=(Math.log2(65504)+9.72)/17.52;var Rc=new O({id:"acescc",name:"ACEScc",coords:{r:{range:[or,dt],name:"Red"},g:{range:[or,dt],name:"Green"},b:{range:[or,dt],name:"Blue"}},referred:"scene",base:Va,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-ut)*2:r<dt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ut)+9.72)/17.52:t<ut?(Math.log2(ut+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),uo=Object.freeze({__proto__:null,A98RGB:yc,A98RGB_Linear:Ia,ACEScc:Rc,ACEScg:Va,HSL:Ha,HSV:Da,HWB:gc,ICTCP:Er,JzCzHz:xr,Jzazbz:Ra,LCH:We,Lab:H,Lab_D65:kr,OKLCH:Ec,OKLab:St,P3:_a,P3_Linear:Ea,ProPhoto:xc,ProPhoto_Linear:ja,REC_2020:xa,REC_2020_Linear:Dt,REC_2100_HLG:Mc,REC_2100_PQ:Tc,XYZ_ABS_D65:Vr,XYZ_D50:Ur,XYZ_D65:j,sRGB:Xe,sRGB_Linear:Sa});class y{constructor(...t){let r;t.length===1&&(r=C(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new y(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=bl(this,...t);return r.color=new y(r.color),r}static get(t,...r){return t instanceof y?t:new y(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=y.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return y.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>y.get(c)));return l};t in y||(y[t]=s),o&&(y.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)y.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(y);else for(let r in t)y.defineFunction(r,t[r])}}y.defineFunctions({get:F,getAll:et,set:ne,setAll:ka,to:I,equals:vl,inGamut:Ie,toGamut:oe,distance:Ta,toString:Et});Object.assign(y,{util:ol,hooks:re,WHITES:Z,Space:b,spaces:b.registry,parse:Ca,defaults:J});for(let e of Object.keys(uo))b.register(uo[e]);for(let e in b.registry)Sr(e,b.registry[e]);re.add("colorspace-init-end",e=>{var t;Sr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Sr(r,e)})});function Sr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(y.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}y.extend(_t);y.extend({deltaE:Oe});Object.assign(y,{deltaEMethods:_t});y.extend(fc);y.extend({contrast:Hl});y.extend(Il);y.extend($l);y.extend(mc);y.extend(ft);function Ya(e){return mt(e,(t,r)=>r instanceof y?Y(r.toString({format:"hex"})):Ya(r))}const Nc="dodgerblue";function _r(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function ar({background:e,foreground:t}){return{background:e??new y(_r(t)),foreground:t??new y(_r(e))}}var Tt;(function(e){e.Dark="dark",e.Light="light"})(Tt||(Tt={}));function Bc(e){return e==="black"?"white":"black"}const Lc={black:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")},white:{foregroundFaint1:new y("#ccc"),foregroundFaint2:new y("#eee")}},Oc={black:{backgroundFaint1:new y("#666"),backgroundFaint2:new y("#444")},white:{backgroundFaint1:new y("#ccc"),backgroundFaint2:new y("#fafafa")}};function ho({themeColor:e=Nc,themeStyle:t=Tt.Light}={}){const r=new y(e),n=new y(t===Tt.Dark?"black":"white"),o=_r(n),a=new y(o),s={nav:{hover:ar({background:r.clone().set({"hsl.l":93})}),active:ar({background:r.clone().set({"hsl.l":90})}),selected:ar({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Oc[Bc(o)],foreground:a,...Lc[o]}};return Ya(s)}const Mt=Hr()("element-book-change-route"),fo="vira-",{defineElement:rt,defineElementNoInputs:Kc}=qo({assertInputs:e=>{if(!e.tagName.startsWith(fo))throw new Error(`Tag name should start with '${fo}' but got '${e.tagName}'`)}}),Za=w`
    pointer-events: none;
    opacity: 0.3;
`,je=se({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function zc(e){return`${e}px`}const At=se({"vira-form-input-border-radius":"8px"}),Pt=se({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":w`calc(${At["vira-form-input-border-radius"].value} + 4px)`});function Wa({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=Y(zc(n+r+t));return w`
        ${Y(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Pt["vira-focus-outline-color"].value};
            border-radius: ${Pt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const $e=w`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,qa=w`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Tr=se({"vira-icon-color":"currentColor"}),Hc=se({"vira-icon-stroke-color":Tr["vira-icon-color"].value,"vira-icon-fill-color":Tr["vira-icon-color"].value}),pt={...Tr,...Hc},P=rt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>w`
        :host {
            display: inline-block;
            color: ${pt["vira-icon-color"].value};
            fill: ${pt["vira-icon-fill-color"].value};
            stroke: ${pt["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Mr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Mr||(Mr={}));rt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Mr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>w`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${qa};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Pt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Za};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${$e};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${At["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${je["vira-interaction-animation-duration"].value},
                background-color
                    ${je["vira-interaction-animation-duration"].value},
                border-color ${je["vira-interaction-animation-duration"].value};
        }

        ${Wa({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${P} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?m`
                  <${P}
                      ${x(P,{icon:e.icon})}
                  ></${P}>
              `:"",r=e.text?m`
                  <span class="text-template">${e.text}</span>
              `:"";return m`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var Ar;(function(e){e.Header="header"})(Ar||(Ar={}));rt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>w`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${$e};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${je["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:ke()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?w`
                  height: ${e.contentHeight}px;
              `:w`
                  height: 0;
              `;return m`
            <button
                class="header-wrapper"
                ${N("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${Ar.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Wo(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function Pr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Pr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Xa({value:e,allowed:t,blocked:r}){const n=t?Pr({input:e,matcher:t}):!0,o=r?Pr({input:e,matcher:r}):!1;return n&&!o}function po(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Xa({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}rt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ke(),inputBlocked:ke()},styles:({hostClasses:e,cssVars:t})=>w`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Pt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Za};
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
                ${$e};
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
                ${qa};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${$e};
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
                border-radius: ${At["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${je["vira-interaction-animation-duration"].value};
            }

            label {
                ${$e};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${At["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${Wa({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${P} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${$e};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=po({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?m`
                  <${P} ${x(P,{icon:e.icon})}></${P}>
              `:"",i=e.fitText?w`
                  width: ${r.forcedInputWidth}px;
              `:"";return m`
            <label>
                ${s}
                ${xe(!!e.fitText,m`
                        <span
                            class="size-span"
                            ${Wo(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${Oo({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${N("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let h=c.value??"";if(u)if(u.length===1)Xa({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(h=d,t(new o.inputBlocked(u)));else{const{filtered:f,blocked:p}=po({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});h=f,t(new o.inputBlocked(p))}c.value!==h&&(c.value=h),d!==h&&t(new o.valueChange(h))})}
                    placeholder=${e.placeholder}
                />
                ${xe(!!e.suffix,m`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});rt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>w`
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
    `,events:{routeChange:ke()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&da(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return m`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return m`
                <a href=${s} rel="noopener noreferrer" ${N("click",n)}>
                    <slot></slot>
                </a>
            `}}});function Zr({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Dc=Zr({name:"Element16Icon",svgTemplate:m`
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
    `});Zr({name:"Element24Icon",svgTemplate:m`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const Ic=Zr({name:"Options24Icon",svgTemplate:m`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${pt["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),jc=w`
    padding: 0;
    margin: 0;
`;w`
    ${jc}
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;const{defineElement:V,defineElementNoInputs:Qc}=qo(),L=V()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>w`
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
                ${N("click",a=>{(!e.router||da(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Mt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),X=V()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>w`
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
            ${L.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${P} {
            display: inline-flex;
            color: ${$["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{const n=w`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length};
            `;return m`
                <li style=${n}>
                    <${L}
                        ${x(L,{router:e.router,route:{paths:[B.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Oo({"title-row":!0,selected:e.selectedPath?ze(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${xe(we(r,R.ElementExample),m`
                                    <${P}
                                        ${x(P,{icon:Dc})}
                                    ></${P}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${L}>
                </li>
            `});return m`
            <slot name=${G.NavHeader}></slot>
            <ul>
                ${t}
            </ul>
        `}});async function Fc(e){await Bi(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await zi(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const U=V()({tagName:"book-error",styles:w`
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
    `,renderCallback({inputs:e}){return(Bt(e.message,"array")?e.message:[e.message]).map(r=>m`
                    <p>${r}</p>
                `)}}),sr=V()({tagName:"book-breadcrumbs",styles:w`
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
                <${L}
                    ${x(L,{route:{hash:void 0,search:void 0,paths:[B.Book,...s]},router:e.router})}
                >
                    ${r}
                </${L}>
                ${i}
            `}):m`
                &nbsp;
            `}}),ir=V()({tagName:"book-breadcrumbs-bar",styles:w`
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
    `,renderCallback({inputs:e,dispatch:t}){return m`
            ${xe(!!e.currentSearch,m`
                    &nbsp;
                `,m`
                    <${sr}
                        ${x(sr,{currentRoute:e.currentRoute,router:e.router})}
                    ></${sr}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${N("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await ps(200),n.value===o&&(n.value?t(new Mt({paths:[B.Search,encodeURIComponent(n.value)]})):t(new Mt(Ye)))})}
            />
        `}}),de=V()({tagName:"book-page-controls",events:{controlValueChange:ke()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>w`
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

        ${P}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===T.Hidden)return"";const s=Uc(e.currentValues[n],o,i=>{const l=Bt(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return m`
                    <div class="control-wrapper">
                        ${xe(a===0,m`
                                <${P}
                                    class="options-icon"
                                    ${x(P,{icon:Ic})}
                                ></${P}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function Uc(e,t,r){return me(t,T.Hidden)?"":me(t,T.Checkbox)?m`
            <input
                type="checkbox"
                .value=${e}
                ${N("input",n=>{const o=Ne(n,HTMLInputElement);r(o.checked)})}
            />
        `:me(t,T.Color)?m`
            <input
                type="color"
                .value=${e}
                ${N("input",n=>{const o=Ne(n,HTMLInputElement);r(o.value)})}
            />
        `:me(t,T.Text)?m`
            <input
                type="text"
                .value=${e}
                ${N("input",n=>{const o=Ne(n,HTMLInputElement);r(o.value)})}
            />
        `:me(t,T.Number)?m`
            <input
                type="number"
                .value=${e}
                ${N("input",n=>{const o=Ne(n,HTMLInputElement);r(o.value)})}
            />
        `:me(t,T.Dropdown)?m`
            <select
                .value=${e}
                ${N("input",n=>{const o=Ne(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>m`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:m`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const lr=V()({tagName:"book-entry-description",styles:w`
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
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>m`
                <p>${t}</p>
            `)}}),cr=V()({tagName:"book-page-wrapper",styles:w`
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
    `,renderCallback({inputs:e}){const t=e.isTopLevel?m`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:m`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[B.Book,...e.pageNode.fullUrlBreadcrumbs],n=wo(e.pageNode.entry.errors);return n&&console.error(n),m`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${L}
                        ${x(L,{route:{paths:r,hash:void 0,search:void 0},router:e.router})}
                    >
                        ${t}
                    </${L}>
                    ${n?m`
                              <${U}
                                  ${x(U,{message:n.message})}
                              ></${U}>
                          `:m`
                              <${lr}
                                  ${x(lr,{descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}
                              ></${lr}>
                              <${de}
                                  ${x(de,{config:e.pageNode.entry.controls,currentValues:Ir(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}
                              ></${de}>
                          `}
                </div>
            </div>
        `}}),Be=V()({tagName:"book-element-example-controls",styles:w`
        :host {
            display: flex;
            color: ${$["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[B.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return m`
            <${L}
                ${x(L,{route:{paths:t,hash:void 0,search:void 0},router:e.router})}
            >
                ${e.elementExampleNode.entry.title}
            </${L}>
        `}}),mo=Symbol("unset-internal-state"),ur=V()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:mo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw wo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===mo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return m`
                ${xe(!!t.elementExampleNode.entry.styles,m`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),m`
                <${U}
                    ${x(U,{message:`${t.elementExampleNode.entry.title} failed: ${Rt(n)}`})}
                ></${U}>
            `}},options:{allowPolymorphicState:!0}}),dr=V()({tagName:"book-element-example-wrapper",styles:w`
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

        ${Be} {
            color: ${$["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Be} {
            color: ${$["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return m`
            <div class="individual-example-wrapper">
                <${Be}
                    ${x(Be,e)}
                ></${Be}>
                <${ur}
                    ${x(ur,e)}
                ></${ur}>
            </div>
        `}}),ve=V()({tagName:"book-entry-display",styles:w`
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
    `,renderCallback:({inputs:e})=>{const t=ua(e.currentRoute.paths),r=Vc({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,currentControls:e.currentControls,originalTree:e.originalTree});return m`
            <${ir}
                ${x(ir,{currentSearch:t,currentRoute:e.currentRoute,router:e.router})}
            ></${ir}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${G.Footer}></slot>
        `}});function Ga(e,t,r,n){const o=vr(r,n),a=[];if(o){const s=Ga(e,t,o,n);s&&a.push(s)}if(we(r,R.Page)&&!e.includes(r)){const s=Ir(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:mt(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Vc({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o,originalTree:a}){if(!e.length&&n)return[m`
                No results
            `];const s=on(e,1)?Ga(e,o,e[0],a):void 0,i=s&&on(e,1)?m`
                  <${de}
                      ${x(de,{config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}
                  ></${de}>
              `:"",l=As(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(we(c,R.Page))return m`
                    <${cr}
                        class="block-entry"
                        ${x(cr,{isTopLevel:t,pageNode:c,currentControls:o,router:r})}
                    ></${cr}>
                `;if(we(c,R.ElementExample)){const d=Ir(o,c.fullUrlBreadcrumbs.slice(0,-1));return m`
                    <${dr}
                        class="inline-entry"
                        ${x(dr,{elementExampleNode:c,currentPageControls:d,router:r})}
                    ></${dr}>
                `}else return we(c,R.Root)?m`
                    <h1>${c.entry.title}</h1>
                `:m`
                    <${U}
                        class="block-entry"
                        ${x(U,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${U}>
                `});return[i,l]}function Yc(e,t,r){const n=go(e,t);if(n.length)return n;r(Ye);const o=go(e,Ye.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function go(e,t){return e.filter(r=>ys({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Le=Zo()({tagName:"element-book-app",events:{pathUpdate:ke()},stateInitStatic:{currentRoute:Ye,router:void 0,colors:{config:void 0,theme:ho(void 0)},treeBasedCurrentControls:void 0},styles:w`
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

        ${ve} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${X} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,initCallback({host:e}){setTimeout(()=>{bo(e)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c,u;try{let d=function(k){e.router?e.router.setRoutes(k):n({currentRoute:{...e.currentRoute,...k}}),t.elementBookRoutePaths&&!ze(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(k.paths??[]))};var s=d;if(t.elementBookRoutePaths&&!ze(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const k=el(t.internalRouterConfig.basePath);n({router:k}),k.addRouteListener(!0,_=>{n({currentRoute:_})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const h={themeColor:t.themeColor};if(!ze(h,(c=e.colors)==null?void 0:c.config)){const k=ho(h);n({colors:{config:h,theme:k}}),nl(r,k)}const f=t.debug??!1,p=Mi({entries:t.entries,everythingTitle:t.everythingTitle,everythingDescriptionParagraphs:t.everythingDescriptionParagraphs??[],debug:f});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.trigger!==t.entries)&&n({treeBasedCurrentControls:{trigger:t.entries,currentControls:ia(p.tree)}});const g=ua(e.currentRoute.paths),E=(g?Fi({flattenedNodes:p.flattenedNodes,searchQuery:g}):void 0)??Yc(p.flattenedNodes,e.currentRoute.paths,d),S=(u=e.treeBasedCurrentControls)==null?void 0:u.currentControls;return S?(t.debug&&console.info({currentControls:S}),m`
                <div
                    class="root"
                    ${N(Mt,k=>{const _=r.shadowRoot.querySelector(ve.tagName);if(_?_.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${ve.tagName}' for scrolling.`),d(k.detail),!(r.shadowRoot.querySelector(X.tagName)instanceof X))throw new Error(`Failed to find child '${X.tagName}'`);bo(r)})}
                    ${N(de.events.controlValueChange,k=>{if(!e.treeBasedCurrentControls)return;const _=Ri(S,k.detail.fullUrlBreadcrumbs,k.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:_}})})}
                >
                    <${X}
                        ${x(X,{flattenedNodes:p.flattenedNodes,router:e.router,selectedPath:g?void 0:e.currentRoute.paths.slice(1)})}
                    >
                        <slot
                            name=${G.NavHeader}
                            slot=${G.NavHeader}
                        ></slot>
                    </${X}>
                    <${ve}
                        ${x(ve,{currentRoute:e.currentRoute,currentNodes:E,router:e.router,debug:f,currentControls:S,originalTree:p.tree})}
                    >
                        <slot
                            name=${G.Footer}
                            slot=${G.Footer}
                        ></slot>
                    </${ve}>
                </div>
            `):m`
                    <${U}
                        ${x(U,{message:"Failed to generate page controls."})}
                    ></${U}>
                `}catch(d){return console.error(d),m`
                <p class="error">${Rt(d)}</p>
            `}}});async function bo(e){const t=e.shadowRoot.querySelector(X.tagName);if(!(t instanceof X))throw new Error(`Failed to find child '${X.tagName}'`);await Fc(t)}const Wr=Ee({title:"Parent Page 1",parent:void 0,controls:{"Parent Control":{controlType:T.Color,initValue:"#33ccff"},"Hidden control":{controlType:T.Hidden,initValue:new RegExp("this can be anything")}}}),Rr=Ee({title:"Parent Page 2",parent:void 0}),vo=Ee({title:"Sub Page 1",parent:Rr});function yo(e,t){return Ee({title:`test ${e}`,parent:t,elementExamplesCallback({defineExample:n}){Array(20).fill(0).forEach((o,a)=>{n({title:`example ${e} ${a}`,renderCallback(){return"element example here"}})})}})}const $o=Ee({title:"duplicate error page",parent:Wr,descriptionParagraphs:["This is the description. It has stuff in it.","Yay stuff!"],elementExamplesCallback({defineExample:e}){e({title:"example 1",renderCallback(){return"hi"}}),e({title:"example 2",renderCallback(){return"hi"}})}}),Zc=Ee({title:"test 3",controls:{thing:{initValue:"there",controlType:T.Text},thing2:{initValue:!1,controlType:T.Checkbox},thing3:{initValue:"hello",controlType:T.Dropdown,options:["hello","hi","yo"]}},parent:Wr,elementExamplesCallback({defineExample:e}){e({title:"example 3 1",renderCallback(){return"hi"}}),e({title:"example 3 2",styles:w`
                .color-control {
                    width: 20px;
                    height: 20px;
                }
            `,renderCallback({controls:t}){const r=w`
                    background-color: ${Y(t["Parent Control"])};
                `;return m`
                    hello ${t.thing}, ${t.thing2}
                    <div style=${r} class="color-control"></div>
                    selected: ${t.thing3} ${t["Hidden control"]}
                `}}),e({title:"example with error",renderCallback(){return"broken"}}),e({title:"example with error",renderCallback(){return"broken"}})}}),Ja=[Wr,yo(0,Rr),vo,...Array(100).fill(0).map((e,t)=>yo(t+1,vo)),$o,$o,Zc,Rr];console.info({entries:Ja});Ot({tagName:"vir-app",styles:w`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${Le} {
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
                    ${N("input",r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("input element not found for input event");t({themeColor:n.value})})}
                    type="color"
                />
            </label>
            <${Le}
                ${x(Le,{entries:Ja,themeColor:e.themeColor,internalRouterConfig:{useInternalRouter:!0},everythingTitle:"All",debug:!0})}
                ${N(Le.events.pathUpdate,r=>{t({paths:r.detail})})}
            >
                <h1 slot=${G.NavHeader}>My Title</h1>
                <footer slot=${G.Footer}>Example Footer</footer>
            </${Le}>
        `});
