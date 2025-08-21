import{b7 as a}from"./D9U9Eznd.js";/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase()),w=e=>{const t=h(e);return t.charAt(0).toUpperCase()+t.slice(1)},C=(...e)=>e.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=({size:e,strokeWidth:t=2,absoluteStrokeWidth:r,color:o,iconNode:l,name:c,class:g,...u},{slots:i})=>a("svg",{...s,width:e||s.width,height:e||s.height,stroke:o||s.stroke,"stroke-width":r?Number(t)*24/Number(e):t,class:C("lucide",...c?[`lucide-${n(w(c))}-icon`,`lucide-${n(c)}`]:["lucide-icon"]),...u},[...l.map(d=>a(...d)),...i.default?[i.default()]:[]]);/**
 * @license lucide-vue-next v0.534.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(e,t)=>(r,{slots:o})=>a(p,{...r,iconNode:t,name:e},o);export{f as c};
