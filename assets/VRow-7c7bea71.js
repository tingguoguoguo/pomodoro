import{a_ as i,aT as u,h as C,m as S,l as b,d as k,c as N,aV as V}from"./index-0ced500c.js";const j=(()=>i.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),v=(()=>i.reduce((e,a)=>{const t="offset"+u(a);return e[t]={type:[String,Number],default:null},e},{}))(),L=(()=>i.reduce((e,a)=>{const t="order"+u(a);return e[t]={type:[String,Number],default:null},e},{}))(),y={col:Object.keys(j),offset:Object.keys(v),order:Object.keys(L)};function _(e,a,t){let s=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");s+=`-${n}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const G=["auto","start","end","center","baseline","stretch"],T=C({cols:{type:[Boolean,String,Number],default:!1},...j,offset:{type:[String,Number],default:null},...v,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>G.includes(e)},...S(),...b()},"VCol"),x=k()({name:"VCol",props:T(),setup(e,a){let{slots:t}=a;const s=N(()=>{const n=[];let l;for(l in y)y[l].forEach(o=>{const c=e[o],g=_(l,o,c);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return V(e.tag,{class:[s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),f=["start","end","center"],h=["space-between","space-around","space-evenly"];function d(e,a){return i.reduce((t,s)=>{const n=e+u(s);return t[n]=a(),t},{})}const I=[...f,"baseline","stretch"],$=e=>I.includes(e),w=d("align",()=>({type:String,default:null,validator:$})),R=[...f,...h],P=e=>R.includes(e),E=d("justify",()=>({type:String,default:null,validator:P})),U=[...f,...h,"stretch"],A=e=>U.includes(e),O=d("alignContent",()=>({type:String,default:null,validator:A})),m={align:Object.keys(w),justify:Object.keys(E),alignContent:Object.keys(O)},B={align:"align",justify:"justify",alignContent:"align-content"};function M(e,a,t){let s=B[e];if(t!=null){if(a){const n=a.replace(e,"");s+=`-${n}`}return s+=`-${t}`,s.toLowerCase()}}const F=C({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...w,justify:{type:String,default:null,validator:P},...E,alignContent:{type:String,default:null,validator:A},...O,...S(),...b()},"VRow"),z=k()({name:"VRow",props:F(),setup(e,a){let{slots:t}=a;const s=N(()=>{const n=[];let l;for(l in m)m[l].forEach(r=>{const o=e[r],c=M(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return V(e.tag,{class:["v-row",s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});export{x as V,z as a};
