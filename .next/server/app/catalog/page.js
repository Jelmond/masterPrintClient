(()=>{var e={};e.id=43,e.ids=[43],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6162:e=>{"use strict";e.exports=require("stream")},7147:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>c,routeModule:()=>m,tree:()=>p}),r(7445),r(5361),r(5866);var a=r(3191),s=r(8716),n=r(7922),i=r.n(n),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let p=["",{children:["catalog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7445)),"/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/catalog/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5361)),"/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/catalog/page.tsx"],d="/catalog/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/catalog/page",pathname:"/catalog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},3714:(e,t,r)=>{Promise.resolve().then(r.bind(r,6106))},6106:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(326),s=r(3893),n=r(8186),i=r(4091),o=r(434),l=r(3824);function p(){let{data:e,error:t,loading:r}=(0,s.Z)({path:"/api/categories"});return console.log(e?.data),a.jsx(c,{children:e?.data?.map((e,t)=>a.jsxs(d,{children:[a.jsx("img",{src:`http://127.0.0.1:1337${e?.image[0]?.url}`,alt:e.title}),a.jsx("p",{children:e.title}),a.jsx(u,{href:`/catalog/${e.id}`})]},t))})}let c=l.ZP.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 100vh;
    gap: ${(0,n.rm)(60)};
    padding: ${(0,n.rm)(200)};
    position: relative;

    ${n.BC.md`
        padding: ${(0,n.rm)(100)} ${(0,n.rm)(25)} ${(0,n.rm)(100)} ${(0,n.rm)(25)};
    `}
`,d=l.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,n.rm)(50)};
    width: ${(0,n.rm)(300)};
    position: relative;

    img{
        width: 100%;
        height: ${(0,n.rm)(290)};
        object-fit: cover;
    }

    p{
        font-size: ${(0,n.rm)(24)};
        ${(0,i.cn)(200)};
        color: ${n.O9.black100};
        text-align: center;
    }
`,u=(0,l.ZP)(o.default)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`},3893:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(7577);let s=({path:e,method:t="GET",body:r})=>{let[s,n]=(0,a.useState)(null),[i,o]=(0,a.useState)(null),[l,p]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{(async()=>{try{let a=`http://127.0.0.1:1337${e}`;a.includes("?")?a+="&populate=*":a+="?populate=*";let s=await fetch(a,{method:t,headers:{"Content-Type":"application/json"},...r&&{body:JSON.stringify(r)}});if(!s.ok)throw Error(`HTTP error! status: ${s.status}`);let i=await s.json();n(i)}catch(e){o(e instanceof Error?e:Error("An error occurred"))}finally{p(!1)}})()},[e,t,r]),{data:s,error:i,loading:l}}},7445:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(8570).createProxy)(String.raw`/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/catalog/page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[276,805,49],()=>r(7147));module.exports=a})();