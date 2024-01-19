import{u as pe}from"./list-aa8f8e17.js";import{u as ke}from"./settings-96b06d90.js";import{g as P,c as Se,a as Ce,m as x,h as Ve,b as _e,o as Ie,d as ae,n as Ae,u as L,e as ne,r as T,w as Pe,f as y,p as xe,i as N,j as s,k as O,I as w,l as M,q as G,s as Te,t as H,v as W,x as se,y as $,z as ie,A as le,B as q,C as we,V as oe,D as Ne,E as re,F as z,G as ce,H as Be,J as ue,K as Le,L as Oe,M as De,N as Ee,R as Fe,O as de,P as Re,Q as ve,S as je,T as Ue,U as ze,W as Me,X as Ge,Y as He,Z as We,_ as $e,$ as qe,a0 as K,a1 as Ye,a2 as Xe,a3 as Je,a4 as Ke,a5 as Q,a6 as F,a7 as Z,a8 as C,a9 as Qe,aa as V,ab as R,ac as j,ad as Ze,ae as et,af as tt,ag as at}from"./index-a5a16494.js";import{V as U,a as ee}from"./VRow-0b791a97.js";function D(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return P()({name:a??Se(Ce(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...x()},setup(t,i){let{slots:l}=i;return()=>{var o;return Ve(t.tag,{class:[e,t.class],style:t.style},(o=l.default)==null?void 0:o.call(l))}}})}const nt=D("v-spacer","div","VSpacer");function Y(e){return _e()?(Ie(e),!0):!1}function B(){const e=new Set,n=i=>{e.delete(i)};return{on:i=>{e.add(i);const l=()=>n(i);return Y(l),{off:l}},off:n,trigger:(...i)=>Promise.all(Array.from(e).map(l=>l(...i)))}}function me(e){return typeof e=="function"?e():L(e)}const st=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const it=Object.prototype.toString,lt=e=>it.call(e)==="[object Object]",ot=()=>{};function rt(e){return e||ne()}function ct(e,n=!0,a){const t=rt(a);t?ae(e,t):n?e():Ae(e)}function ut(e){var n;const a=me(e);return(n=a==null?void 0:a.$el)!=null?n:a}const fe=st?window:void 0;function dt(...e){let n,a,t,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,t,i]=e,n=fe):[n,a,t,i]=e,!n)return ot;Array.isArray(a)||(a=[a]),Array.isArray(t)||(t=[t]);const l=[],o=()=>{l.forEach(r=>r()),l.length=0},m=(r,c,u,d)=>(r.addEventListener(c,u,d),()=>r.removeEventListener(c,u,d)),f=Pe(()=>[ut(n),me(i)],([r,c])=>{if(o(),!r)return;const u=lt(c)?{...c}:c;l.push(...a.flatMap(d=>t.map(h=>m(r,d,h,u))))},{immediate:!0,flush:"post"}),v=()=>{f(),o()};return Y(v),v}function vt(){const e=T(!1);return ne()&&ae(()=>{e.value=!0}),e}function mt(e){const n=vt();return y(()=>(n.value,!!e()))}function ft(e={}){const{window:n=fe,requestPermissions:a=!0}=e,t=e,i=mt(()=>!!n&&"Notification"in n),l=T(i.value&&"permission"in Notification&&Notification.permission==="granted"),o=T(null),m=async()=>{if(i.value)return!l.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(l.value=!0),l.value},{on:f,trigger:v}=B(),{on:r,trigger:c}=B(),{on:u,trigger:d}=B(),{on:h,trigger:_}=B(),b=async g=>{if(!i.value||!l.value)return;const k=Object.assign({},t,g);return o.value=new Notification(k.title||"",k),o.value.onclick=v,o.value.onshow=c,o.value.onerror=d,o.value.onclose=_,o.value},p=()=>{o.value&&o.value.close(),o.value=null};if(a&&ct(m),Y(p),i.value&&n){const g=n.document;dt(g,"visibilitychange",k=>{k.preventDefault(),g.visibilityState==="visible"&&p()})}return{isSupported:i,notification:o,ensurePermissions:m,permissionGranted:l,show:b,close:p,onClick:f,onShow:r,onError:u,onClose:h}}const gt=P()({name:"VCardActions",props:x(),setup(e,n){let{slots:a}=n;return xe({VBtn:{slim:!0,variant:"text"}}),N(()=>{var t;return s("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),yt=D("v-card-subtitle"),ht=D("v-card-title");const bt=O({start:Boolean,end:Boolean,icon:w,image:String,text:String,...x(),...M(),...G(),...Te(),...H(),...W(),...se({variant:"flat"})},"VAvatar"),te=P()({name:"VAvatar",props:bt(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=$(e),{colorClasses:i,colorStyles:l,variantClasses:o}=ie(e),{densityClasses:m}=le(e),{roundedClasses:f}=q(e),{sizeClasses:v,sizeStyles:r}=we(e);return N(()=>s(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,i.value,m.value,f.value,v.value,o.value,e.class],style:[l.value,r.value,e.style]},{default:()=>{var c;return[e.image?s(oe,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?s(Ne,{key:"icon",icon:e.icon},null):((c=a.default)==null?void 0:c.call(a))??e.text,re(!1,"v-avatar")]}})),{}}}),pt=O({appendAvatar:String,appendIcon:w,prependAvatar:String,prependIcon:w,subtitle:[String,Number],title:[String,Number],...x(),...M()},"VCardItem"),kt=P()({name:"VCardItem",props:pt(),setup(e,n){let{slots:a}=n;return N(()=>{var v;const t=!!(e.prependAvatar||e.prependIcon),i=!!(t||a.prepend),l=!!(e.appendAvatar||e.appendIcon),o=!!(l||a.append),m=!!(e.title!=null||a.title),f=!!(e.subtitle!=null||a.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[i&&s("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?s(z,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},a.prepend):t&&s(te,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),s("div",{class:"v-card-item__content"},[m&&s(ht,{key:"title"},{default:()=>{var r;return[((r=a.title)==null?void 0:r.call(a))??e.title]}}),f&&s(yt,{key:"subtitle"},{default:()=>{var r;return[((r=a.subtitle)==null?void 0:r.call(a))??e.subtitle]}}),(v=a.default)==null?void 0:v.call(a)]),o&&s("div",{key:"append",class:"v-card-item__append"},[a.append?s(z,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},a.append):l&&s(te,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),St=D("v-card-text"),Ct=O({appendAvatar:String,appendIcon:w,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:w,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ce(),...x(),...M(),...Be(),...ue(),...Le(),...Oe(),...De(),...G(),...Ee(),...H(),...W(),...se({variant:"elevated"})},"VCard"),Vt=P()({name:"VCard",directives:{Ripple:Fe},props:Ct(),setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:i}=$(e),{borderClasses:l}=de(e),{colorClasses:o,colorStyles:m,variantClasses:f}=ie(e),{densityClasses:v}=le(e),{dimensionStyles:r}=Re(e),{elevationClasses:c}=ve(e),{loaderClasses:u}=je(e),{locationStyles:d}=Ue(e),{positionClasses:h}=ze(e),{roundedClasses:_}=q(e),b=Me(e,a),p=y(()=>e.link!==!1&&b.isLink.value),g=y(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return N(()=>{const k=p.value?"a":e.tag,S=!!(t.title||e.title!=null),I=!!(t.subtitle||e.subtitle!=null),A=S||I,E=!!(t.append||e.appendAvatar||e.appendIcon),ge=!!(t.prepend||e.prependAvatar||e.prependIcon),ye=!!(t.image||e.image),he=A||ge||E,be=!!(t.text||e.text!=null);return Ge(s(k,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":g.value},i.value,l.value,o.value,v.value,c.value,u.value,h.value,_.value,f.value,e.class],style:[m.value,r.value,d.value,e.style],href:b.href.value,onClick:g.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var X;return[ye&&s("div",{key:"image",class:"v-card__image"},[t.image?s(z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(oe,{key:"image-img",cover:!0,src:e.image},null)]),s(We,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),he&&s(kt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),be&&s(St,{key:"text"},{default:()=>{var J;return[((J=t.text)==null?void 0:J.call(t))??e.text]}}),(X=t.default)==null?void 0:X.call(t),t.actions&&s(gt,null,{default:t.actions}),re(g.value,"v-card")]}}),[[He("ripple"),g.value&&e.ripple]])}),{}}});const _t=O({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ce(),...x(),...ue(),...$e(),...G(),...H({tag:"footer"}),...W()},"VFooter"),It=P()({name:"VFooter",props:_t(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=$(e),{backgroundColorClasses:i,backgroundColorStyles:l}=qe(K(e,"color")),{borderClasses:o}=de(e),{elevationClasses:m}=ve(e),{roundedClasses:f}=q(e),v=Ye(32),{resizeRef:r}=Xe(d=>{d.length&&(v.value=d[0].target.clientHeight)}),c=y(()=>e.height==="auto"?v.value:parseInt(e.height,10)),{layoutItemStyles:u}=Je({id:e.name,order:y(()=>parseInt(e.order,10)),position:y(()=>"bottom"),layoutSize:c,elementSize:y(()=>e.height==="auto"?void 0:c.value),active:y(()=>e.app),absolute:K(e,"absolute")});return N(()=>s(e.tag,{ref:r,class:["v-footer",t.value,i.value,o.value,m.value,f.value,e.class],style:[l.value,e.app?u.value:{height:Ke(e.height)},e.style]},a)),{}}}),At=V("div",{class:"spacer"},null,-1),Pt={class:"bg-secondary w-100 text-center"},xt=V("strong",null,"天天是好日",-1),Tt={class:"px-4 py-2 bg-primary text-center w-100"},wt=V("strong",null,"Guo",-1),Dt={__name:"HomeView",setup(e){const n=pe(),{currentItem:a,items:t,timeleft:i}=Q(n),{setCurrentItem:l,countdown:o,setFinishedItem:m}=n,f=ke(),{selectedAlarmFile:v,notify:r}=Q(f),c=T([{title:"Say",image:"https://i.pinimg.com/1200x/53/ce/8a/53ce8a42afa02be00f98fa37eec4f9c2.jpg"},{title:"The",image:"https://i.pinimg.com/originals/48/6e/88/486e88cd7f351f1fd3bc91eb0d082a0e.jpg"},{title:"Name",image:"https://i.pinimg.com/1200x/d7/20/3c/d7203c5e320f6f9ee2d7e16481f2075e.jpg"},{title:"Seventeen",image:"https://i.pinimg.com/originals/00/08/d9/0008d909dd716a04e2963c0da7293680.jpg"},{title:"Hoshi",image:"https://i.pinimg.com/236x/25/8d/c8/258dc826fd8cef565062c5f526d53905.jpg"},{title:"! !",image:"https://pbs.twimg.com/media/EVX-id_UYAAvwy3.jpg"}]),u={STOP:0,COUNTING:1,PAUSE:2},d=T(u.STOP);let h=0;const _=()=>{d.value===u.STOP&&t.value.length>0&&l(),d.value=u.COUNTING,h=setInterval(()=>{o(),i.value===0&&p()},1e3)},b=()=>{d.value=u.PAUSE,clearInterval(h)},p=()=>{clearInterval(h),d.value=u.STOP;const S=new Audio;if(S.src=v.value,S.play(),r.value){const{show:I,isSupported:A}=ft({title:"事項完成",body:a.value,icon:new URL(""+new URL("tomato-fe6b03eb.png",import.meta.url).href,self.location).href});A.value&&I()}m(),t.value.length>0&&_()},g=y(()=>a.value.length>0?a.value:t.value.length>0?"點擊開始":"沒有事項"),k=y(()=>{const S=Math.floor(i.value/60).toString().padStart(2,"0"),I=(i.value%60).toString().padStart(2,"0");return S+":"+I});return(S,I)=>(F(),Z(Qe,null,{default:C(()=>[s(ee,{class:"bg-secondary carats"},{default:C(()=>[s(U,{cols:"12"},{default:C(()=>[V("h1",null,R(g.value),1),V("h1",null,R(k.value),1)]),_:1}),s(U,{cols:"12"},{default:C(()=>[s(j,{variant:"text",icon:"mdi-play",disabled:d.value===u.COUNTING||L(a).length===0&&L(t).length===0,onClick:_},null,8,["disabled"]),s(j,{variant:"text",icon:"mdi-pause",disabled:d.value!==u.COUNTING,onClick:b},null,8,["disabled"]),s(j,{variant:"text",icon:"mdi-skip-next",disabled:L(a).length===0,onClick:p},null,8,["disabled"])]),_:1})]),_:1}),At,s(ee,{class:"mx-auto"},{default:C(()=>[(F(!0),Ze(tt,null,et(c.value,(A,E)=>(F(),Z(U,{cols:"12",md:"4",key:E},{default:C(()=>[s(Vt,{"max-width":"200",height:"200",image:A.image,title:A.title,theme:"dark",style:{position:"relative",left:"185px",color:"#525455"}},null,8,["image","title"])]),_:2},1024))),128))]),_:1}),s(It,{class:"d-flex flex-column",id:"footer"},{default:C(()=>[V("div",Pt,[xt,s(nt)]),V("div",Tt,[at(R(new Date().getFullYear())+" — ",1),wt])]),_:1})]),_:1}))}};export{Dt as default};
