(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6162:e=>{"use strict";e.exports=require("stream")},7616:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(870),r(5361),r(5866);var i=r(3191),n=r(8716),s=r(7922),o=r.n(s),a=r(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,870)),"/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,5361)),"/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/page.tsx"],h="/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6546:(e,t,r)=>{Promise.resolve().then(r.bind(r,8466))},3893:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(7577);let n=({path:e,method:t="GET",body:r})=>{let[n,s]=(0,i.useState)(null),[o,a]=(0,i.useState)(null),[l,d]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{(async()=>{try{let i=`http://127.0.0.1:1337${e}`;i.includes("?")?i+="&populate=*":i+="?populate=*";let n=await fetch(i,{method:t,headers:{"Content-Type":"application/json"},...r&&{body:JSON.stringify(r)}});if(!n.ok)throw Error(`HTTP error! status: ${n.status}`);let o=await n.json();s(o)}catch(e){a(e instanceof Error?e:Error("An error occurred"))}finally{d(!1)}})()},[e,t,r]),{data:n,error:o,loading:l}}},8466:(e,t,r)=>{"use strict";r.d(t,{HomeView:()=>eJ});var i=r(326),n=r(7577),s=r.n(n),o=r(3824),a=r(8186),l=r(4091),d=r(6226),c=r(6696);let h=e=>{var t=(0,n.useRef)(e);return(0,n.useEffect)(()=>{t.current=e}),t};var u=function(e,t,r){function i(){a.current&&clearTimeout(a.current),a.current=void 0}function s(){a.current=void 0}void 0===t&&(t=100),void 0===r&&(r=0);var o=h(e),a=(0,n.useRef)(),l=[t,r,o];return(0,n.useEffect)(()=>i,l),(0,n.useCallback)(function(){var e=arguments,{current:i}=a;if(void 0===i&&r)return a.current=setTimeout(s,t),o.current.apply(null,e);i&&clearTimeout(i),a.current=setTimeout(()=>{a.current=void 0,o.current.apply(null,e)},t)},l)},m=(e,t,r)=>{var i=(0,n.useState)(e);return[i[0],u(i[1],t,r)]};function p(e,t,r,i){var s=(0,n.useRef)(r),o=(0,n.useRef)(i);(0,n.useEffect)(()=>{s.current=r,o.current=i}),(0,n.useEffect)(()=>{function r(){if(!n){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];s.current.apply(this,t)}}var i=e&&"current"in e?e.current:e;if(i){var n=0;i.addEventListener(t,r);var a=o.current;return()=>{n=1,i.removeEventListener(t,r),a&&a()}}},[e,t])}var f={},g="undefined"==typeof window?null:window,x=g&&void 0!==g.visualViewport?g.visualViewport:null,C=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],w=function(e){void 0===e&&(e=f);var{wait:t,leading:r,initialWidth:i=0,initialHeight:n=0}=e,[s,o]=m("undefined"==typeof document?[i,n]:C,t,r),a=()=>o(C);return p(g,"resize",a),p(x,"resize",a),p(g,"orientationchange",a),s},v=e=>w(e)[0],$=r(6621);let b=[{text:"Мы всегда рады принять заказ или ответить на ваши вопросы",button:{text:"Заказать по звонку",url:"tel:+79292111818",isBlank:!1}},{text:"Карточки, Открытки, конверты, коробки. Все по лучшей цене",button:{text:"Перейти в каталог",url:"/catalog",isBlank:!1}},{text:"Индивидуальный дизайн и многое другое",button:{text:"На сайт типографии",url:"/catalog",isBlank:!0}}],y=()=>(v(),(0,c.R)(e=>e.isLoading),i.jsx(j,{children:(0,i.jsxs)(_,{children:[i.jsx(O,{src:"/assets/images/homeImage.png",alt:"welcomeBackground",width:1920,height:1080}),(0,i.jsxs)(P,{children:[i.jsx("h1",{className:"title",children:"Добро пожаловать в каталог Мастерпринт-Пак"}),i.jsx(k,{children:"MPPK\xa0— каталог креативной печатной продукции. Открытки, подарочные упаковки и\xa0другие изделия, созданные от\xa0идеи до\xa0упаковки в\xa0нашей типографии"})]}),i.jsx(M,{children:b.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(Z,{children:[i.jsx("p",{className:"text",children:e.text}),i.jsx("a",{href:e.button.url,target:e.button.isBlank?"_blank":"_self","aria-label":e.button.text,children:e.button.text})]},t),t!==b.length-1&&i.jsx("div",{className:"divider"})]}))})]})})),j=o.ZP.div`
    display: flex;
    background-color: ${a.O9.bgMain};
    width: 100%;
    ${(0,$.NN)(100)};
    padding: ${(0,a.rm)(80)} ${(0,a.rm)(48)};

    // ${a.BC.lg`
    //     padding-left: ${(0,a.rm)(70)};
    //     padding-top: ${(0,a.rm)(177)};
    //     padding-bottom: ${(0,a.rm)(90)};
    // `}

    // ${a.BC.md`
    //     padding-left: ${(0,a.rm)(25)};
    //     padding-top: ${(0,a.rm)(100)};
    //     padding-bottom: ${(0,a.rm)(50)};
    // `}

    ${a.BC.xsm`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-left: ${(0,a.rm)(0)};
        padding-top: ${(0,a.rm)(100)};
        padding-bottom: ${(0,a.rm)(50)};
    `}
`,_=o.ZP.div`
    position: relative;
    border-radius: ${(0,a.rm)(30)};
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    padding: ${(0,a.rm)(41)};
    padding-bottom: ${(0,a.rm)(0)};
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`,O=(0,o.ZP)(d.default)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`,P=o.ZP.div`
    display: flex;
    flex-direction: column;
    width: ${(0,a.rm)(1030)};
    position: relative;
    z-index: 1;
    align-items: flex-end;

    ${a.BC.lg`
        width: ${(0,a.rm)(700)};
    `}

    ${a.BC.md`
        width: ${(0,a.rm)(500)};
    `}

    ${a.BC.xsm`
        width: ${(0,a.rm)(348)};   
        position: relative;
        z-index: 1;
    `}

    .title{
        ${(0,l.cn)(700)};
        font-size: ${(0,a.rm)(96)};
        line-height: 130%;
        color: ${a.O9.white100};
        text-align: right;

        // ${a.BC.lg`
        //     font-size: ${(0,a.rm)(64)};
        // `}

        ${a.BC.md`
            font-size: ${(0,a.rm)(40)};
            line-height: 110%;
        `}

        ${a.BC.xsm`
            font-size: ${(0,a.rm)(39)};
            line-height: 130%;
        `}
    }
`,k=o.ZP.p`
    ${(0,l.cn)(400)};
    font-size: ${(0,a.rm)(30)};
    line-height: 110%;
    color: ${a.O9.white100};
    margin-top: ${(0,a.rm)(48)};
    margin-bottom: ${(0,a.rm)(140)};
    width: ${(0,a.rm)(846)};
    text-align: right;

    // ${a.BC.xsm`
    //     font-size: ${(0,a.rm)(14)};
    //     margin-top: ${(0,a.rm)(15)};
    //     margin-bottom: ${(0,a.rm)(50)};
    //     width: ${(0,a.rm)(302)};
    // `}
`,M=o.ZP.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .divider{
        width: ${(0,a.rm)(4)};
        height: 100%;
        margin-bottom: ${(0,a.rm)(30)};
        background: #FFFFFF45;
        position: relative;
        border-radius: ${(0,a.rm)(2)};
    }
`,Z=o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,a.rm)(28)};
    padding: ${(0,a.rm)(21)} ${(0,a.rm)(43)};
    background-color: #CFCFCF7A;
    backdrop-filter: blur(8px);
    border-top-left-radius: ${(0,a.rm)(16)};
    border-top-right-radius: ${(0,a.rm)(16)};
    overflow: hidden;

    .text{
        ${(0,l.cn)(400)};
        font-size: ${(0,a.rm)(24)};
        line-height: 110%;
        color: ${a.O9.white100};
        width: ${(0,a.rm)(425)};
        text-align: center;
    }

    a{
        padding: ${(0,a.rm)(7)} ${(0,a.rm)(20)};
        background: linear-gradient(0deg, rgba(41, 89, 139, 0.32), rgba(41, 89, 139, 0.32)),
        radial-gradient(50% 50% at 50% 50%, rgba(24, 22, 82, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
        backdrop-filter: blur(87px);
        border-radius: ${(0,a.rm)(14)};
        ${(0,l.cn)(500)};
        font-size: ${(0,a.rm)(28)};
        line-height: 100%;
        color: ${a.O9.white100};
        text-align: center;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;

        &:hover{
            opacity: 0.7;
        }
    }
`,B=()=>i.jsx(E,{children:(0,i.jsxs)(S,{children:[i.jsx("p",{className:"text",children:"Качественная продукция по ценам ниже рыночных"}),i.jsx(d.default,{className:"backgroundImage",src:"/assets/images/marketsImage.png",alt:"background",width:1920,height:1080})]})}),E=o.ZP.div`
    width: 100%;
    padding-top: ${(0,a.rm)(126)};
    background-color: ${a.O9.white100};
    overflow: hidden;
`,S=o.ZP.div`
    width: 100%;
    background-color: ${a.O9.bgMain};
    height: ${(0,a.rm)(226)};
    position: relative;
    overflow: hidden;

    ${a.BC.lg`
        height: ${(0,a.rm)(150)};
    `}

    ${a.BC.xsm`
        height: ${(0,a.rm)(115)};
        background-color: rgba(0, 0, 0, 0.5);
    `}

    .text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ${(0,l.cn)(200)};
        font-size: ${(0,a.rm)(64)};
        color: ${a.O9.white100};
        width: ${(0,a.rm)(1570)};
        z-index: 2;

        ${a.BC.lg`
            font-size: ${(0,a.rm)(40)};
            width: ${(0,a.rm)(1e3)};
        `}

        ${a.BC.md`
            font-size: ${(0,a.rm)(36)};
            width: ${(0,a.rm)(890)};
        `}

        ${a.BC.xsm`
            font-size: ${(0,a.rm)(20)};
            width: 80%;
            text-align: center;
            color: ${a.O9.white100};
            z-index: 10;
        `}
    }

    .backgroundImage{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }
`;var I=r(1006),N=r(434),z=r(3893);r(3754),r(2119),r(3141);let T=()=>{let{data:e,error:t,loading:r}=(0,z.Z)({path:"/api/categories"}),n=v();return i.jsx(R,{children:i.jsx(I.tq,{spaceBetween:30,slidesPerView:n>576?4:2.1,className:"catalog-swiper",children:e?.data?.map(e=>i.jsx(I.o5,{children:i.jsxs(D,{href:`/catalog/${e.id}`,children:[i.jsx(L,{children:i.jsx(d.default,{src:`http://127.0.0.1:1337${e?.image[0]?.url}`,alt:e?.title,fill:!0,style:{objectFit:"cover"}})}),i.jsx(H,{children:e?.title})]})},e.id))})})},R=o.ZP.div`
    width: 100%;
    padding: ${(0,a.rm)(40)} 0;

    ${a.BC.xsm`
        padding: 0;
    `}
    
    .swiper-button-next,
    .swiper-button-prev {
        color: ${a.O9.black100};
    }
    
    .swiper-pagination-bullet-active {
        background: ${a.O9.black100};
    }

    .catalog-swiper{
        padding: 0 ${(0,a.rm)(100)};

        ${a.BC.xsm`
            padding: ${(0,a.rm)(25)};
        `}
    }
`,D=(0,o.ZP)(N.default)`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
`,L=o.ZP.div`
    position: relative;
    width: 100%;
    height: ${(0,a.rm)(500)};
    border-radius: 10px;
    overflow: hidden;

    ${a.BC.md`
        height: ${(0,a.rm)(300)};
    `}

    img{
        width: 100%;
        height: auto;
        object-fit: cover;
        position: absolute;
    }
`,H=o.ZP.div`
    margin-top: ${(0,a.rm)(30)};
    ${(0,l.cn)(500)};
    font-size: ${(0,a.rm)(18)};
    text-align: center;
    color: ${a.O9.black100};
`,V=({label:e,className:t})=>{switch(e){case"delivery":return(0,i.jsxs)("svg",{width:"99",height:"99",viewBox:"0 0 99 99",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("g",{"clip-path":"url(#clip0_433_1467)",children:i.jsx("path",{d:"M16.5 33H28.875V16.5H86.625C91.1625 16.5 94.875 20.2125 94.875 24.75V70.125H86.625C86.625 76.9725 81.0975 82.5 74.25 82.5C67.4025 82.5 61.875 76.9725 61.875 70.125H37.125C37.125 76.9725 31.5975 82.5 24.75 82.5C17.9025 82.5 12.375 76.9725 12.375 70.125H4.12501V49.5L16.5 33ZM74.25 76.3125C77.6738 76.3125 80.4375 73.5487 80.4375 70.125C80.4375 66.7012 77.6738 63.9375 74.25 63.9375C70.8263 63.9375 68.0625 66.7012 68.0625 70.125C68.0625 73.5487 70.8263 76.3125 74.25 76.3125ZM18.5625 39.1875L10.4775 49.5H28.875V39.1875H18.5625ZM24.75 76.3125C28.1738 76.3125 30.9375 73.5487 30.9375 70.125C30.9375 66.7012 28.1738 63.9375 24.75 63.9375C21.3263 63.9375 18.5625 66.7012 18.5625 70.125C18.5625 73.5487 21.3263 76.3125 24.75 76.3125Z",fill:"#929292"})}),i.jsx("defs",{children:i.jsx("clipPath",{id:"clip0_433_1467",children:i.jsx("rect",{width:"99",height:"99",fill:"white",transform:"matrix(-1 0 0 1 99 0)"})})})]});case"discount":return i.jsx("svg",{width:"92",height:"84",viewBox:"0 0 92 84",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M19.7738 43.4C16.0965 43.4 12.7315 42.4667 9.67873 40.6C6.69532 38.6556 4.33635 36.05 2.60181 32.7833C0.86727 29.4389 0 25.7444 0 21.7C0 17.6556 0.86727 14 2.60181 10.7333C4.33635 7.38889 6.69532 4.78333 9.67873 2.91666C12.7315 0.972222 16.0965 0 19.7738 0C23.451 0 26.7813 0.972222 29.7647 2.91666C32.8175 4.78333 35.2112 7.38889 36.9457 10.7333C38.6802 14 39.5475 17.6556 39.5475 21.7C39.5475 25.7444 38.6802 29.4389 36.9457 32.7833C35.2112 36.05 32.8175 38.6556 29.7647 40.6C26.7813 42.4667 23.451 43.4 19.7738 43.4ZM20.086 82.8333C18.9759 82.8333 18.1086 82.5611 17.4842 82.0167C16.9291 81.4722 16.6516 80.6944 16.6516 79.6833C16.6516 78.8278 16.9985 77.8556 17.6923 76.7667L62.7557 5.01666C63.727 3.46111 64.5596 2.45 65.2534 1.98334C66.0166 1.43889 67.1267 1.16667 68.5837 1.16667H72.0181C73.0588 1.16667 73.8567 1.43889 74.4118 1.98334C75.0362 2.52778 75.3484 3.30555 75.3484 4.31667C75.3484 5.17222 75.0015 6.14444 74.3077 7.23334L29.2443 78.9833C28.273 80.5389 27.4057 81.5889 26.6425 82.1333C25.9487 82.6 24.8733 82.8333 23.4163 82.8333H20.086ZM19.7738 28.7C21.7164 28.7 23.2428 28.0778 24.3529 26.8333C25.463 25.5889 26.0181 23.8778 26.0181 21.7C26.0181 19.5222 25.463 17.8111 24.3529 16.5667C23.2428 15.3222 21.7164 14.7 19.7738 14.7C17.8311 14.7 16.3047 15.3222 15.1946 16.5667C14.0845 17.8111 13.5294 19.5222 13.5294 21.7C13.5294 23.8778 14.0845 25.5889 15.1946 26.8333C16.3047 28.0778 17.8311 28.7 19.7738 28.7ZM72.2262 84C68.549 84 65.184 83.0667 62.1312 81.2C59.1478 79.2556 56.7888 76.65 55.0543 73.3833C53.3198 70.0389 52.4525 66.3445 52.4525 62.3C52.4525 58.2556 53.3198 54.6 55.0543 51.3333C56.7888 47.9889 59.1478 45.3833 62.1312 43.5167C65.184 41.5722 68.549 40.6 72.2262 40.6C75.9035 40.6 79.2338 41.5722 82.2172 43.5167C85.27 45.3833 87.6637 47.9889 89.3982 51.3333C91.1327 54.6 92 58.2556 92 62.3C92 66.3445 91.1327 70.0389 89.3982 73.3833C87.6637 76.65 85.27 79.2556 82.2172 81.2C79.2338 83.0667 75.9035 84 72.2262 84ZM72.2262 69.3C74.1689 69.3 75.6953 68.6778 76.8054 67.4333C77.9155 66.1889 78.4706 64.4778 78.4706 62.3C78.4706 60.1222 77.9155 58.4111 76.8054 57.1667C75.6953 55.9222 74.1689 55.3 72.2262 55.3C70.2836 55.3 68.7572 55.9222 67.6471 57.1667C66.5369 58.4111 65.9819 60.1222 65.9819 62.3C65.9819 64.4778 66.5369 66.1889 67.6471 67.4333C68.7572 68.6778 70.2836 69.3 72.2262 69.3Z",fill:"#929292"})});case"quality":return(0,i.jsxs)("svg",{width:"93",height:"93",viewBox:"0 0 93 93",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("g",{"clip-path":"url(#clip0_433_1481)",children:i.jsx("path",{d:"M9.80375 76.1437L14.9963 78.3137V43.3225L5.58 66.03C3.99125 69.9825 5.89 74.5162 9.80375 76.1437ZM85.3663 61.8062L66.1462 15.4225C64.945 12.5163 62.1163 10.7338 59.1325 10.6562C58.125 10.6562 57.0788 10.8113 56.0713 11.2375L27.5125 23.0562C24.6063 24.2575 22.8238 27.0475 22.7463 30.0312C22.7075 31.0775 22.9013 32.1238 23.3275 33.1313L42.5475 79.515C43.7488 82.46 46.6163 84.2425 49.6388 84.2812C50.6463 84.2812 51.6537 84.0875 52.6225 83.7L81.1425 71.8812C85.095 70.2537 86.9938 65.72 85.3663 61.8062ZM30.535 33.9062C28.4038 33.9062 26.66 32.1625 26.66 30.0312C26.66 27.9 28.4038 26.1562 30.535 26.1562C32.6663 26.1562 34.41 27.9 34.41 30.0312C34.41 32.1625 32.6663 33.9062 30.535 33.9062ZM22.785 76.5312C22.785 80.7937 26.2725 84.2812 30.535 84.2812H36.1538L22.785 51.9637V76.5312Z",fill:"#929292"})}),i.jsx("defs",{children:i.jsx("clipPath",{id:"clip0_433_1481",children:i.jsx("rect",{width:"93",height:"93",fill:"white"})})})]});case"fast":return(0,i.jsxs)("svg",{width:"93",height:"93",viewBox:"0 0 93 93",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("g",{"clip-path":"url(#clip0_433_1476)",children:i.jsx("path",{d:"M69.75 23.25H62C62 14.6862 55.0638 7.75 46.5 7.75C37.9363 7.75 31 14.6862 31 23.25H23.25C18.9875 23.25 15.5 26.7375 15.5 31V77.5C15.5 81.7625 18.9875 85.25 23.25 85.25H69.75C74.0125 85.25 77.5 81.7625 77.5 77.5V31C77.5 26.7375 74.0125 23.25 69.75 23.25ZM38.75 38.75C38.75 40.8812 37.0063 42.625 34.875 42.625C32.7437 42.625 31 40.8812 31 38.75V31H38.75V38.75ZM46.5 15.5C50.7625 15.5 54.25 18.9875 54.25 23.25H38.75C38.75 18.9875 42.2375 15.5 46.5 15.5ZM62 38.75C62 40.8812 60.2562 42.625 58.125 42.625C55.9938 42.625 54.25 40.8812 54.25 38.75V31H62V38.75Z",fill:"#929292"})}),i.jsx("defs",{children:i.jsx("clipPath",{id:"clip0_433_1476",children:i.jsx("rect",{width:"93",height:"93",fill:"white"})})})]});case"contact":return(0,i.jsxs)("svg",{width:"78",height:"77",viewBox:"0 0 78 77",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsxs)("g",{"clip-path":"url(#clip0_433_1463)",children:[i.jsx("path",{d:"M68.25 39.2058C68.25 21.5921 54.405 9.625 39 9.625C23.7575 9.625 9.75 21.3354 9.75 39.3983C7.8 40.4892 6.5 42.5425 6.5 44.9167V51.3333C6.5 54.8625 9.425 57.75 13 57.75H16.25V38.1792C16.25 25.7629 26.4225 15.7208 39 15.7208C51.5775 15.7208 61.75 25.7629 61.75 38.1792V60.9583H35.75V67.375H61.75C65.325 67.375 68.25 64.4875 68.25 60.9583V57.0442C70.1675 56.0496 71.5 54.0925 71.5 51.7825V44.4033C71.5 42.1575 70.1675 40.2004 68.25 39.2058Z",fill:"#929292"}),i.jsx("path",{d:"M29.25 44.9167C31.0449 44.9167 32.5 43.4802 32.5 41.7083C32.5 39.9364 31.0449 38.5 29.25 38.5C27.4551 38.5 26 39.9364 26 41.7083C26 43.4802 27.4551 44.9167 29.25 44.9167Z",fill:"#929292"}),i.jsx("path",{d:"M48.75 44.9167C50.5449 44.9167 52 43.4802 52 41.7083C52 39.9364 50.5449 38.5 48.75 38.5C46.9551 38.5 45.5 39.9364 45.5 41.7083C45.5 43.4802 46.9551 44.9167 48.75 44.9167Z",fill:"#929292"}),i.jsx("path",{d:"M58.5 35.3879C56.94 26.2442 48.88 19.25 39.1625 19.25C29.315 19.25 18.72 27.3029 19.565 39.9437C27.5925 36.7033 33.6375 29.645 35.36 21.0467C39.6175 29.4846 48.36 35.2917 58.5 35.3879Z",fill:"#929292"})]}),i.jsx("defs",{children:i.jsx("clipPath",{id:"clip0_433_1463",children:i.jsx("rect",{width:"78",height:"77",fill:"white"})})})]});case"viber":return(0,i.jsxs)("svg",{width:"40",height:"39",viewBox:"0 0 40 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"40",height:"39",rx:"19.5",fill:"white","fill-opacity":"0.94"}),i.jsx("path",{d:"M26.2539 9.30717C22.4424 8.59748 18.4843 8.59748 14.6728 9.30717C12.9869 9.66201 10.8613 11.6491 10.4948 13.2105C9.83508 16.2621 9.83508 19.3847 10.4948 22.4364C10.9346 23.9977 13.0602 25.9848 14.6728 26.3397C14.7461 26.3397 14.8194 26.4106 14.8194 26.4816V30.9526C14.8194 31.1656 15.1126 31.3075 15.2592 31.0946L17.4581 28.8946C17.4581 28.8946 19.2173 27.1203 19.5105 26.8365C19.5105 26.8365 19.5838 26.7655 19.6571 26.7655C21.856 26.8365 24.1283 26.6236 26.3272 26.2687C28.0131 25.9139 30.1387 23.9267 30.5052 22.3654C31.1649 19.3138 31.1649 16.1911 30.5052 13.1395C30.0654 11.6491 27.9398 9.66201 26.2539 9.30717ZM26.3272 22.6493C25.9607 23.359 25.5209 23.9267 24.788 24.2816C24.5681 24.3526 24.3482 24.4235 24.1283 24.4945C23.8351 24.4235 23.6152 24.3526 23.3953 24.2816C21.0497 23.359 18.8508 22.0815 17.0916 20.2364C16.1387 19.1718 15.3325 17.9654 14.6728 16.6879C14.3796 16.0492 14.0864 15.4815 13.8665 14.8427C13.6466 14.275 14.0131 13.7072 14.3796 13.2814C14.7461 12.8556 15.1859 12.5717 15.699 12.3588C16.0654 12.1459 16.4319 12.2879 16.7251 12.5717C17.3115 13.2814 17.8979 13.9911 18.3377 14.7718C18.6309 15.2685 18.5576 15.8363 18.0445 16.1911C17.8979 16.2621 17.8246 16.3331 17.678 16.475C17.6047 16.546 17.4581 16.617 17.3848 16.7589C17.2382 16.9718 17.2382 17.1847 17.3115 17.3976C17.8979 19.0299 18.9974 20.3073 20.6832 21.017C20.9764 21.159 21.1963 21.2299 21.5628 21.2299C22.0759 21.159 22.2958 20.5912 22.6623 20.3073C23.0288 20.0235 23.4686 20.0235 23.9084 20.2364C24.2749 20.4493 24.6414 20.7331 25.0811 21.017C25.4476 21.3009 25.8141 21.5138 26.1806 21.7977C26.4005 21.9396 26.4738 22.2945 26.3272 22.6493ZM23.2487 17.3266C23.1021 17.3266 23.1754 17.3266 23.2487 17.3266C22.9555 17.3266 22.8822 17.1847 22.8089 16.9718C22.8089 16.8299 22.8089 16.617 22.7356 16.475C22.6623 16.1911 22.5157 15.9073 22.2225 15.6944C22.0759 15.6234 21.9293 15.5524 21.7827 15.4815C21.5628 15.4105 21.4162 15.4105 21.1963 15.4105C20.9764 15.3395 20.9031 15.1976 20.9031 14.9847C20.9031 14.8427 21.123 14.7008 21.2696 14.7008C22.4424 14.7718 23.322 15.4105 23.4686 16.7589C23.4686 16.8299 23.4686 16.9718 23.4686 17.0428C23.4686 17.1847 23.3953 17.3266 23.2487 17.3266ZM22.5157 14.204C22.1492 14.0621 21.7827 13.9201 21.3429 13.8492C21.1963 13.8492 20.9764 13.7782 20.8298 13.7782C20.6099 13.7782 20.4634 13.6363 20.5366 13.4234C20.5366 13.2105 20.6832 13.0685 20.9031 13.1395C21.6361 13.2105 22.2958 13.3524 22.9555 13.6363C24.2749 14.275 25.0079 15.3395 25.2277 16.7589C25.2277 16.8299 25.2277 16.9008 25.2277 16.9718C25.2277 17.1137 25.2277 17.2557 25.2277 17.4686C25.2277 17.5395 25.2277 17.6105 25.2277 17.6815C25.1545 17.9654 24.6414 18.0363 24.5681 17.6815C24.5681 17.6105 24.4948 17.4686 24.4948 17.3976C24.4948 16.7589 24.3482 16.1202 24.055 15.5524C23.6152 14.9137 23.1021 14.4879 22.5157 14.204ZM26.4738 18.4621C26.2539 18.4621 26.1073 18.2492 26.1073 18.0363C26.1073 17.6105 26.034 17.1847 25.9607 16.7589C25.6675 14.4879 23.7618 12.6427 21.4895 12.2879C21.123 12.2169 20.7565 12.2169 20.4634 12.1459C20.2435 12.1459 19.9503 12.1459 19.877 11.862C19.8037 11.6491 20.0236 11.4362 20.2435 11.4362C20.3168 11.4362 20.3901 11.4362 20.3901 11.4362C20.5367 11.4362 23.3953 11.5072 20.3901 11.4362C23.4686 11.5072 26.034 13.4943 26.5471 16.475C26.6204 16.9718 26.6937 17.4686 26.6937 18.0363C26.8403 18.2492 26.6937 18.4621 26.4738 18.4621Z",fill:"#6D6D6D"})]});case"instagram":return(0,i.jsxs)("svg",{width:"40",height:"39",viewBox:"0 0 40 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"40",height:"39",rx:"19.5",fill:"white","fill-opacity":"0.94"}),i.jsx("path",{d:"M20 11.512C22.6506 11.512 23.0121 11.512 24.0964 11.512C25.0602 11.512 25.5422 11.747 25.9036 11.8645C26.3855 12.0994 26.747 12.2169 27.1084 12.5693C27.4699 12.9217 27.7108 13.2741 27.8313 13.744C27.9518 14.0964 28.0723 14.5663 28.1928 15.506C28.1928 16.5633 28.1928 16.7982 28.1928 19.5C28.1928 22.2018 28.1928 22.4367 28.1928 23.494C28.1928 24.4337 27.9518 24.9036 27.8313 25.256C27.5904 25.7259 27.4699 26.0783 27.1084 26.4307C26.747 26.7831 26.3855 27.0181 25.9036 27.1355C25.5422 27.253 25.0602 27.3705 24.0964 27.488C23.0121 27.488 22.7711 27.488 20 27.488C17.2289 27.488 16.988 27.488 15.9036 27.488C14.9398 27.488 14.4578 27.253 14.0964 27.1355C13.6145 26.9006 13.253 26.7831 12.8916 26.4307C12.5301 26.0783 12.2892 25.7259 12.1687 25.256C12.0482 24.9036 11.9277 24.4337 11.8072 23.494C11.8072 22.4367 11.8072 22.2018 11.8072 19.5C11.8072 16.7982 11.8072 16.5633 11.8072 15.506C11.8072 14.5663 12.0482 14.0964 12.1687 13.744C12.4096 13.2741 12.5301 12.9217 12.8916 12.5693C13.253 12.2169 13.6145 11.9819 14.0964 11.8645C14.4578 11.747 14.9398 11.6295 15.9036 11.512C16.988 11.512 17.3494 11.512 20 11.512ZM20 9.75C17.2289 9.75 16.988 9.75 15.9036 9.75C14.8193 9.75 14.0964 9.98494 13.494 10.2199C12.8916 10.4548 12.2892 10.8072 11.6867 11.3946C11.0843 11.9819 10.8434 12.4518 10.4819 13.1566C10.241 13.744 10.1205 14.4488 10 15.506C10 16.5633 10 16.9157 10 19.5C10 22.2018 10 22.4367 10 23.494C10 24.5512 10.241 25.256 10.4819 25.8434C10.7229 26.4307 11.0843 27.0181 11.6867 27.6054C12.2892 28.1928 12.7711 28.4277 13.494 28.7801C14.0964 29.0151 14.8193 29.1325 15.9036 29.25C16.988 29.25 17.3494 29.25 20 29.25C22.6506 29.25 23.0121 29.25 24.0964 29.25C25.1807 29.25 25.9036 29.0151 26.506 28.7801C27.1084 28.5452 27.7108 28.1928 28.3133 27.6054C28.9157 27.0181 29.1566 26.5482 29.5181 25.8434C29.759 25.256 29.8795 24.5512 30 23.494C30 22.4367 30 22.0843 30 19.5C30 16.9157 30 16.5633 30 15.506C30 14.4488 29.759 13.744 29.5181 13.1566C29.2771 12.5693 28.9157 11.9819 28.3133 11.3946C27.7108 10.8072 27.2289 10.5723 26.506 10.2199C25.9036 9.98494 25.1807 9.86747 24.0964 9.75C23.0121 9.75 22.7711 9.75 20 9.75Z",fill:"#6D6D6D"}),i.jsx("path",{d:"M20 14.4488C17.1084 14.4488 14.8193 16.6807 14.8193 19.5C14.8193 22.3193 17.1084 24.5512 20 24.5512C22.8916 24.5512 25.1807 22.3193 25.1807 19.5C25.1807 16.6807 22.8916 14.4488 20 14.4488ZM20 22.7892C18.1928 22.7892 16.6265 21.3795 16.6265 19.5C16.6265 17.738 18.0723 16.2108 20 16.2108C21.8072 16.2108 23.3735 17.6205 23.3735 19.5C23.3735 21.262 21.8072 22.7892 20 22.7892Z",fill:"#6D6D6D"}),i.jsx("path",{d:"M25.3012 15.506C25.9666 15.506 26.506 14.9801 26.506 14.3313C26.506 13.6826 25.9666 13.1566 25.3012 13.1566C24.6358 13.1566 24.0964 13.6826 24.0964 14.3313C24.0964 14.9801 24.6358 15.506 25.3012 15.506Z",fill:"#6D6D6D"})]});case"telegram":return(0,i.jsxs)("svg",{width:"40",height:"39",viewBox:"0 0 40 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{width:"40",height:"39",rx:"19.5",fill:"white","fill-opacity":"0.94"}),i.jsx("path",{d:"M28 12.2874L24.9946 27.5852C24.9946 27.5852 24.5741 28.6458 23.4189 28.1371L16.4846 22.769L16.4524 22.7531C17.3891 21.904 24.6524 15.3103 24.9698 15.0114C25.4613 14.5485 25.1562 14.273 24.5856 14.6226L13.8568 21.5018L9.71764 20.0957C9.71764 20.0957 9.06626 19.8618 9.00359 19.3531C8.9401 18.8436 9.73908 18.568 9.73908 18.568L26.6131 11.8844C26.6131 11.8844 28 11.2692 28 12.2874Z",fill:"#6D6D6D"})]})}},A=[{icon:"delivery",title:"Бесплатная доставка белпочтой",description:"При оформлении заказа на сумму больше 100 руб.",iconPosition:"right",hasBorder:!0},{icon:"quality",title:"Качественные материалы товаров",description:"Мы тщательно следим за качеством ассортимента.",iconPosition:"right",hasBorder:!1},{icon:"contact",title:"Остались вопросы? Свяжитесь с нами!",description:"Команда в кротчайшие сроки ответит вам на все вопросы.",iconPosition:"right",hasBorder:!1}],W=[{icon:"discount",title:"Скидка 5%",description:"При оформлении заказа на сумму больше 500 руб.",iconPosition:"left",hasBorder:!1},{icon:"fast",title:"Высылка заказа в кротчайшие сроки",description:"Наши сотрудники вышлют ваш заказ в течении двух дней.",iconPosition:"left",hasBorder:!1}],F=(0,n.memo)(({icon:e,title:t,description:r,iconPosition:n,hasBorder:s,$gridPosition:o})=>(0,i.jsxs)(K,{className:e,$hasBorder:s,$gridPosition:o,children:["left"===n&&i.jsx(Q,{children:i.jsx(V,{label:e})}),(0,i.jsxs)("div",{className:"content",children:[i.jsx("p",{className:"title",children:t}),i.jsx("p",{className:"description",children:r}),i.jsx("div",{className:"divider"})]}),"right"===n&&i.jsx(Q,{children:i.jsx(V,{label:e})})]}));F.displayName="Card";let q=(0,n.memo)(()=>i.jsx(G,{children:(0,i.jsxs)(Y,{children:[i.jsx(J,{children:A.map((e,t)=>i.jsx(F,{...e,$gridPosition:t},t))}),i.jsx("div",{className:"dividerMain"}),i.jsx(U,{children:W.map((e,t)=>i.jsx(F,{...e,$gridPosition:t},t))}),i.jsx(d.default,{className:"backgroundImage",src:"/assets/images/cardsImage.png",alt:"background",width:1920,height:1080})]})}));q.displayName="InfoCard";let G=o.ZP.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: transform;
    padding: ${(0,a.rm)(160)} ${(0,a.rm)(48)};

    ${a.BC.xsm`
        width: 100%;
    `}
`,Y=o.ZP.div`
    padding: ${(0,a.rm)(100)} 0;
    border-radius: ${(0,a.rm)(30)};
    width: 100%;
    overflow: hidden;
    position: relative;
    gap: ${(0,a.rm)(20)};
    display: flex;
    align-items: center;
    justify-content: center;

    .dividerMain{
        width: ${(0,a.rm)(6)};
        height: 100%;
        min-height: ${(0,a.rm)(570)};
        background: #D2D2D2;
        position: relative;
        z-index: 1;
        border-radius: ${(0,a.rm)(6)};
    }

    .backgroundImage{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${a.BC.md`
        grid-template-columns: 1fr;
        gap: ${(0,a.rm)(15)};
    `}
`,U=o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,a.rm)(100)};
    align-items: flex-start;
`,J=o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,a.rm)(60)};
    align-items: flex-end;
`,K=o.ZP.div`
    width: auto;
    background: #67676736;
    border-radius: ${(0,a.rm)(20)};
    backdrop-filter: blur(58px);
    padding: ${(0,a.rm)(20)} ${(0,a.rm)(20)};
    padding-bottom: ${(0,a.rm)(30)};
    display: flex;
    align-items: center;
    gap: ${(0,a.rm)(25)};
    position: relative;
    z-index: 1;
    
    .content{
        display: flex;
        flex-direction: column;
        gap: ${(0,a.rm)(8)};
        flex: 1;

        .title{
            font-size: ${(0,a.rm)(28)};
            color: ${a.O9.white100};
            ${(0,l.O$)(600)};

            ${a.BC.md`
                font-size: ${(0,a.rm)(20)};
            `}

            ${a.BC.xsm`
                font-size: ${(0,a.rm)(13)};
            `}
        }
        
        .description{
            font-size: ${(0,a.rm)(20)};
            color: ${a.O9.white100};
            ${(0,l.O$)(400)};

            ${a.BC.xsm`
                font-size: ${(0,a.rm)(10)};
            `}
        }

        .divider{
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, 0.3);
            margin-top: ${(0,a.rm)(8)};
        }
    }
`,Q=o.ZP.div`
    width: ${(0,a.rm)(70)};
    height: ${(0,a.rm)(70)};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-shrink: 0;

    ${a.BC.xsm`
        width: ${(0,a.rm)(45)};
        height: ${(0,a.rm)(45)};
    `}

    svg{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
`;var X=r(3296);let ee=()=>{let e=v(),{data:t,error:r,loading:n}=(0,z.Z)({path:"/api/products"}),s=(0,X.x)(e=>e.addToCart),o=(0,X.x)(e=>e.items);if(n)return i.jsx("div",{children:"Loading..."});if(r)return(0,i.jsxs)("div",{children:["Error: ",r.message]});if(!t?.data)return null;let a=[...t?.data,...t?.data,...t?.data],l=e=>{s({productId:e.id,title:e.title,price:e.price,image:e.images[0]?.url}),console.log("Current cart items:",o),console.log("LocalStorage cart data:",localStorage.getItem("cart-storage"))};return(0,i.jsxs)(et,{children:[i.jsx(er,{children:"Бестселлеры"}),i.jsx(ei,{children:i.jsx(I.tq,{spaceBetween:30,slidesPerView:e>1440?5:e>1024?3:1.5,className:"products-swiper",children:a.map((e,t)=>i.jsx(I.o5,{children:(0,i.jsxs)(en,{href:`/products/${e?.id}`,isUp:t%2==1,children:[i.jsx(es,{children:i.jsx(d.default,{src:`http://127.0.0.1:1337${e?.images[0]?.url}`,alt:e?.title,fill:!0,style:{objectFit:"cover"}})}),(0,i.jsxs)(eo,{children:[(0,i.jsxs)("div",{className:"text",children:[i.jsx("p",{className:"description",children:e?.title}),(0,i.jsxs)("p",{className:"price",children:[e?.price," руб."]})]}),i.jsx(ea,{onClick:t=>{t.preventDefault(),l(e)},children:(0,i.jsxs)("svg",{width:"47",height:"48",viewBox:"0 0 47 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("g",{"clip-path":"url(#clip0_856_89)",children:i.jsx("path",{d:"M35.6607 26.5214H24.0498V38.2745H20.1795V26.5214H8.56866V22.6037H20.1795V10.8506H24.0498V22.6037H35.6607V26.5214Z",fill:"#323232"})}),i.jsx("defs",{children:i.jsx("clipPath",{id:"clip0_856_89",children:i.jsx("rect",{width:"46.4434",height:"47.0124",fill:"white",transform:"translate(0.491547 0.630859)"})})})]})})]})]})},t))})})]})},et=o.ZP.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,er=o.ZP.p`
    font-size: ${(0,a.rm)(80)};
    color: ${a.O9.black100};
    ${(0,l.cn)(600)};
    margin-bottom: ${(0,a.rm)(25)};
    margin-left: ${(0,a.rm)(125)};

    ${a.BC.xsm`
        font-size: ${(0,a.rm)(40)};
        margin-left: ${(0,a.rm)(10)};
    `}
`,ei=o.ZP.div`
    width: 100%;
    padding: ${(0,a.rm)(40)} 0;
    margin-bottom: ${(0,a.rm)(140)};

    ${a.BC.xsm`
        padding: ${(0,a.rm)(25)} 0;
        margin-bottom: ${(0,a.rm)(50)};
    `}
    
    .swiper-button-next,
    .swiper-button-prev {
        color: ${a.O9.black100};
    }
    
    .swiper-pagination-bullet-active {
        background: ${a.O9.black100};
    }

    .products-swiper{
        padding: 0 ${(0,a.rm)(50)};
        width: 100%;

        ${a.BC.xsm`
            padding: 0 ${(0,a.rm)(25)};
        `}
    }
`,en=(0,o.ZP)(N.default)`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    height: ${(0,a.rm)(580)};
    width: ${(0,a.rm)(340)};
    gap: ${(0,a.rm)(20)};
    background: ${a.O9.bgMain};
    border-radius: ${(0,a.rm)(20)};
    overflow: hidden;

    ${a.BC.md`
        height: ${(0,a.rm)(480)};
    `}

    ${a.BC.xsm`
        height: ${(0,a.rm)(350)} !important;
        width: 100%;
    `}
    
    &:hover {
        img{
            transform: scale(1.05);
        }
    }
`,es=o.ZP.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: ${(0,a.rm)(10)};
    overflow: hidden;

    img{
        transition: transform 0.3s ease;
    }
`,eo=o.ZP.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    padding: ${(0,a.rm)(20)};

    ${a.BC.xsm`
        padding: ${(0,a.rm)(10)};
    `}

    .text{
        display: flex;
        flex-direction: column;
        gap: ${(0,a.rm)(6)};
        width: 80%;

        .description{
            ${(0,l.cn)(400)};
            font-size: ${(0,a.rm)(20)};
            color: ${a.O9.black100};
        }

        .price{
            ${(0,l.O$)(600)};
            font-size: ${(0,a.rm)(24)};
            color: ${a.O9.black100};
        }
    }
`,ea=o.ZP.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(0,a.rm)(3)};
    width: ${(0,a.rm)(60)};
    height: ${(0,a.rm)(60)};
    border-radius: ${(0,a.rm)(15)};
    border: 1px solid #C4C4C4;
    padding-right: 0;

    transition: opacity 0.3s ease;

    ${a.BC.xsm`
        width: ${(0,a.rm)(40)};
        height: ${(0,a.rm)(40)};
    `}

    &:hover{
        svg{
            transform: scale(1.1);
        }
    }

    svg{
        width: 100%;
        height: 100%;

        transition: transform 0.3s ease;
    }
`;var el=r(6339),ed=r(6239),ec=r(9688),eh=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var r=-1;return e.some(function(e,i){return e[0]===t&&(r=i,!0)}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var r=e(this.__entries__,t),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(t,r){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=r:this.__entries__.push([t,r])},t.prototype.delete=function(t){var r=this.__entries__,i=e(r,t);~i&&r.splice(i,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var r=0,i=this.__entries__;r<i.length;r++){var n=i[r];e.call(t,n[1],n[0])}},t}()}(),eu="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,em="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),ep="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(em):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},ef=["top","right","bottom","left","width","height","size","weight"],eg="undefined"!=typeof MutationObserver,ex=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var r=!1,i=!1,n=0;function s(){r&&(r=!1,e()),i&&a()}function o(){ep(s)}function a(){var e=Date.now();if(r){if(e-n<2)return;i=!0}else r=!0,i=!1,setTimeout(o,20);n=e}return a}(this.refresh.bind(this),0)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,r=t.indexOf(e);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){eu&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),eg?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){eu&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,r=void 0===t?"":t;ef.some(function(e){return!!~r.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),eC=function(e,t){for(var r=0,i=Object.keys(t);r<i.length;r++){var n=i[r];Object.defineProperty(e,n,{value:t[n],enumerable:!1,writable:!1,configurable:!0})}return e},ew=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||em},ev=ej(0,0,0,0);function e$(e){return parseFloat(e)||0}function eb(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(t,r){return t+e$(e["border-"+r+"-width"])},0)}var ey="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof ew(e).SVGGraphicsElement}:function(e){return e instanceof ew(e).SVGElement&&"function"==typeof e.getBBox};function ej(e,t,r,i){return{x:e,y:t,width:r,height:i}}var e_=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ej(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=function(e){if(!eu)return ev;if(ey(e)){var t;return ej(0,0,(t=e.getBBox()).width,t.height)}return function(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return ev;var i=ew(e).getComputedStyle(e),n=function(e){for(var t={},r=0,i=["top","right","bottom","left"];r<i.length;r++){var n=i[r],s=e["padding-"+n];t[n]=e$(s)}return t}(i),s=n.left+n.right,o=n.top+n.bottom,a=e$(i.width),l=e$(i.height);if("border-box"===i.boxSizing&&(Math.round(a+s)!==t&&(a-=eb(i,"left","right")+s),Math.round(l+o)!==r&&(l-=eb(i,"top","bottom")+o)),e!==ew(e).document.documentElement){var d=Math.round(a+s)-t,c=Math.round(l+o)-r;1!==Math.abs(d)&&(a-=d),1!==Math.abs(c)&&(l-=c)}return ej(n.left,n.top,a,l)}(e)}(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),eO=function(e,t){var r,i,n,s,o,a=(r=t.x,i=t.y,n=t.width,s=t.height,eC(o=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:r,y:i,width:n,height:s,top:i,right:r+n,bottom:s+i,left:r}),o);eC(this,{target:e,contentRect:a})},eP=function(){function e(e,t,r){if(this.activeObservations_=[],this.observations_=new eh,"function"!=typeof e)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof ew(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new e_(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof ew(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new eO(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),ek="undefined"!=typeof WeakMap?new WeakMap:new eh,eM=function e(t){if(!(this instanceof e))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var r=new eP(t,ex.getInstance(),this);ek.set(this,r)};["observe","unobserve","disconnect"].forEach(function(e){eM.prototype[e]=function(){var t;return(t=ek.get(this))[e].apply(t,arguments)}});var eZ=void 0!==em.ResizeObserver?em.ResizeObserver:eM;let eB=(0,n.memo)((0,n.forwardRef)(function(e,t){return i.jsx(eE,{ref:t,columnGap:e.columnGap||.3,mode:e.mode||"always",enabled:"boolean"!=typeof e.enabled||e.enabled,className:e.className||"",wrapLineClassName:e.wrapLineClassName||"",lineClassName:e.lineClassName||"",wrapWordClassName:e.wrapWordClassName||"",wordClassName:e.wordClassName||"",wrapLetterClassName:e.wrapLetterClassName||"",letterClassName:e.letterClassName||"",overflow:e.overflow||!1,wrapLineIn:e.wrapLineIn||{},wrapLineOut:e.wrapLineOut||{},lineIn:e.lineIn||{},lineOut:e.lineOut||{},wrapWordIn:e.wrapWordIn||{},wrapWordOut:e.wrapWordOut||{},wordIn:e.wordIn||{},wordOut:e.wordOut||{},wrapLetterIn:e.wrapLetterIn||{},wrapLetterOut:e.wrapLetterOut||{},letterIn:e.letterIn||{},letterOut:e.letterOut||{},lineConfig:e.lineConfig||{},wordConfig:e.wordConfig||{},letterConfig:e.letterConfig||{},lineConfigIn:e.lineConfigIn||{},wordConfigIn:e.wordConfigIn||{},letterConfigIn:e.letterConfigIn||{},lineConfigOut:e.lineConfigOut||{},wordConfigOut:e.wordConfigOut||{},letterConfigOut:e.letterConfigOut||{},lineDelayIn:e.lineDelayIn||0,letterDelayIn:e.letterDelayIn||0,wordDelayIn:e.wordDelayIn||0,lineDelayOut:e.lineDelayOut||0,letterDelayOut:e.letterDelayOut||0,wordDelayOut:e.wordDelayOut||0,lineStagger:e.lineStagger||100,wordStagger:e.wordStagger||100,letterStagger:e.letterStagger||100,lineStaggerIn:e.lineStaggerIn||0,wordStaggerIn:e.wordStaggerIn||0,letterStaggerIn:e.letterStaggerIn||0,lineStaggerOut:e.lineStaggerOut||0,wordStaggerOut:e.wordStaggerOut||0,letterStaggerOut:e.letterStaggerOut||0,delayIn:e.delayIn||0,delayOut:e.delayOut||0,tag:e.as||e.tag||"span",seo:e.seo||!1,showSeoText:e.showSeoText||!1,immediateOut:e.immediateOut||!0,enableInOutDelayesOnRerender:e.enableInOutDelayesOnRerender||!1,onTextEngine:e.onTextEngine||(()=>{}),onTextStart:e.onTextStart||(()=>{}),onTextChange:e.onTextChange||(()=>{}),onTextResolve:e.onTextResolve||(()=>{}),onTextFullyPlayed:e.onTextFullyPlayed||(()=>{}),...e})}));eB.displayName="TextEngine";let eE=(0,n.forwardRef)(({columnGap:e=.3,mode:t="always",enabled:r=!0,className:s,wrapLineClassName:o,lineClassName:a,wrapWordClassName:l,wordClassName:d,wrapLetterClassName:c,letterClassName:h,overflow:u=!1,wrapLineIn:m={},wrapLineOut:p={},lineIn:f={},lineOut:g={},wrapWordIn:x={},wrapWordOut:C={},wordIn:w={},wordOut:v={},wrapLetterIn:$={},wrapLetterOut:b={},letterIn:y={},letterOut:j={},lineConfig:_={},wordConfig:O={},letterConfig:P={},lineConfigIn:k={},wordConfigIn:M={},letterConfigIn:Z={},lineConfigOut:B={},wordConfigOut:E={},letterConfigOut:S={},lineDelayIn:I=0,letterDelayIn:N=0,wordDelayIn:z=0,lineDelayOut:T=0,letterDelayOut:R=0,wordDelayOut:D=0,lineStagger:L=100,letterStagger:H=100,wordStagger:V=100,lineStaggerIn:A=0,letterStaggerIn:W=0,wordStaggerIn:F=0,lineStaggerOut:q=0,letterStaggerOut:G=0,wordStaggerOut:Y=0,delayIn:U=0,delayOut:J=0,tag:K="span",immediateOut:Q=!0,enableInOutDelayesOnRerender:X=!1,seo:ee=!0,showSeoText:et=!1,onTextEngine:er=()=>{},onTextStart:ei=()=>{},onTextChange:en=()=>{},onTextResolve:es=()=>{},onTextFullyPlayed:eo=()=>{},children:ea,style:el,...ec},eh)=>{let[eu,em]=(0,ed.YD)();(0,n.useImperativeHandle)(eh,()=>eu.current);let ep=(0,n.useRef)(!1),[ef,eg]=(0,n.useState)(!0),ex=(0,n.useMemo)(()=>ea.toString().split(" ").map(e=>e.split("")),[ea]),[eC,ew]=(0,n.useState)(ex),ev=(0,n.useRef)(null),e$=(0,n.useRef)(!1);(0,n.useEffect)(()=>{if(JSON.stringify(eC)!==JSON.stringify(ex)){if(clearTimeout(ev.current),e$.current=!1,!Q){let{durationOut:e}=eQ();eg(!1),e$.current=!0,ev.current=setTimeout(()=>{ew(ex),eg(!0),setTimeout(()=>{e$.current=!1},50)},e+50);return}eg(!1),e$.current=!0,ev.current=setTimeout(()=>{ew(ex),eg(!0),setTimeout(()=>{e$.current=!1},50)},50)}},[ex,Q]);let eb=(0,n.useMemo)(()=>eC.flat(),[eC]),[ey,ej]=(0,n.useState)([]),e_=(0,n.useCallback)(()=>void ej(function(e){if(!e.current)return[];let{top:t}=e.current.getBoundingClientRect(),r=e.current.querySelectorAll(".line-word");if(!r.length)return[];let i=[],n=r[0].getBoundingClientRect().height;return r.forEach((e,r)=>{let{top:s}=e.getBoundingClientRect(),o=Math.floor((s-t)/n);i[o]=[...i[o]||[],{word:e,index:r,lineIndex:o}]}),i}(eu)),[ej]);(0,n.useEffect)(()=>void e_(),[eb,e_,eC]),eI(eu,e_);let[eO,eP]=(0,n.useState)(!1),[ek,eM]=(0,n.useState)(!1),eZ=(0,n.useRef)({mode:t,enabled:r,letters:eb,lines:ey,words:eC,playIn:()=>eM(!0),playOut:()=>eM(!1),togglePause:()=>eP(!eO)});(0,n.useEffect)(()=>void(eZ.current.letters=eb,eZ.current.lines=ey,eZ.current.words=eC,eZ.current.mode=t,eZ.current.enabled=r&&ef&&!eO&&"manual"!==t||ef&&!eO&&"manual"===t),[eb,ey,eC,t,r,ef,eO]),(0,n.useEffect)(()=>{},[t]),(0,n.useEffect)(()=>{em&&r&&ef&&"once"===t&&(ep.current=!0)},[em,r,ef]);let[eB,eE]=(0,ed.bY)(ey.length,()=>({...p,onStart:(e,t)=>ei("lineWrap",e,t),onResolve:(e,t)=>es("lineWrap",e,t),onChange:(e,t)=>en("lineWrap",e,t)})),ez=(0,n.useCallback)(e=>eB[ey.flat().find(t=>t.index===e)?.lineIndex||0],[eB,ey]),[eT,eR]=(0,ed.bY)(ey.length,()=>({...g,onStart:(e,t)=>ei("line",e,t),onResolve:(e,t)=>es("line",e,t),onChange:(e,t)=>en("line",e,t)})),eD=(0,n.useCallback)(e=>eT[ey.flat().find(t=>t.index===e)?.lineIndex||0],[eT,ey]),[eL,eH]=(0,ed.bY)(eC.length,()=>({...C,onStart:(e,t)=>ei("wordWrap",e,t),onResolve:(e,t)=>es("wordWrap",e,t),onChange:(e,t)=>en("wordWrap",e,t)})),[eV,eA]=(0,ed.bY)(eC.length,()=>({...v,onStart:(e,t)=>ei("word",e,t),onResolve:(e,t)=>es("word",e,t),onChange:(e,t)=>en("word",e,t)})),[eW,eF]=(0,ed.bY)(eb.length,()=>({...b,onStart:(e,t)=>ei("letterWrap",e,t),onResolve:(e,t)=>es("letterWrap",e,t),onChange:(e,t)=>en("letterWrap",e,t)})),[eq,eG]=(0,ed.bY)(eb.length,()=>({...j,onStart:(e,t)=>ei("letter",e,t),onResolve:(e,t)=>es("letter",e,t),onChange:(e,t)=>en("letter",e,t)})),eY=(0,n.useRef)(null),eU=(0,n.useRef)(null),[eJ,eK]=(0,n.useState)(!1),eQ=(0,n.useCallback)(()=>{let e=Object.keys(f).length>0?1:0,t=Object.keys(w).length>0?1:0,r=Object.keys(y).length>0?1:0,i=(ey.length-1)*(A||L)+(k?.duration||_?.duration||1200),n=(eC.length-1)*(F||V)+(M?.duration||O?.duration||1200),s=(eb.length-1)*(W||H)+(Z?.duration||P?.duration||1200),o=0,a=0,l=0,d=U+I,c=U+z,h=U+N,u=J+T,m=J+D,p=J+R;return(!X&&e$.current||Q&&e$.current)&&(d=0,c=0,h=0,u=0,m=0,p=0),Q||(o=(ey.length-1)*(q||L)+(B?.duration||_?.duration||1200),a=(eC.length-1)*(Y||V)+(E?.duration||O?.duration||1200),l=(eb.length-1)*(G||H)+(S?.duration||P?.duration||1200)),{durationIn:Math.max((d+i)*e,Math.max((c+n)*t,(h+s)*r)),durationOut:Math.max((u+o)*e,Math.max((m+a)*t,(p+l)*r))}},[ey.length,eC.length,eb.length,A,L,F,V,W,H,k,_,M,O,Z,P,U,I,z,N,J,T,D,R,X,e$,Q,q,Y,G,B,E,S]),eX=(0,n.useCallback)((e,t,r)=>!X&&e$.current?r:e+t+r,[X,e$]),e1=(0,n.useCallback)((e,t,r)=>Q?0:!X&&e$.current?r:e+t+r,[Q,X,e$]),e2=(0,n.useCallback)(e=>{eK(!1),clearTimeout(eU.current),eN(p)&&eE.start(e=>({...p,delay:e1(J,T,e*(q||L)),config:eN(B)?B:_,immediate:Q})),eN(g)&&eR.start(e=>({...g,delay:e1(J,T,e*(q||L)),config:eN(B)?B:_,immediate:Q})),eN(C)&&eH.start(e=>({...C,delay:e1(J,D,e*(Y||V)),config:eN(E)?E:O,immediate:Q})),eN(v)&&eA.start(e=>({...v,delay:e1(J,D,e*(Y||V)),config:eN(E)?E:O,immediate:Q})),eN(b)&&eF.start(e=>({...b,delay:e1(J,R,e*(G||H)),config:eN(S)?S:P,immediate:Q})),eN(j)&&eG.start(e=>({...j,delay:e1(J,R,e*(G||H)),config:eN(S)?S:P,immediate:Q})),eU.current=setTimeout(()=>eo("out"),e)},[eE,eR,eH,eA,eF,eG,p,g,C,v,b,j,J,T,D,R,q,Y,G,L,V,H,B,E,S,_,O,P,Q,e1,eo,eQ]),e0=(0,n.useCallback)(e=>{eK(!0),clearTimeout(eY.current),eN(m)&&eE.start(e=>({...m,delay:eX(U,I,e*(A||L)),config:eN(k)?k:_})),eN(f)&&eR.start(e=>({...f,delay:eX(U,I,e*(A||L)),config:eN(k)?k:_})),eN(x)&&eH.start(e=>({...x,delay:eX(U,z,e*(F||V)),config:eN(M)?M:O})),eN(w)&&eA.start(e=>({...w,delay:eX(U,z,e*(F||V)),config:eN(M)?M:O})),eN($)&&eF.start(e=>({...$,delay:eX(U,N,e*(W||H)),config:eN(Z)?Z:P})),eN(y)&&eG.start(e=>({...y,delay:eX(U,N,e*(W||H)),config:eN(Z)?Z:P})),eY.current=setTimeout(()=>eo("in"),e)},[eE,eR,eH,eA,eF,eG,m,f,x,w,$,y,U,I,z,N,A,F,W,L,V,H,k,M,Z,_,O,P,eX,eo,eQ]);return(0,n.useEffect)(()=>{if("manual"===t||eO)return;let{durationIn:e,durationOut:i}=eQ();if(em&&r&&ef&&!eJ){e0(e);return}if(!ep.current&&eJ&&!em||eJ&&!ep.current&&(!r||!ef)){e2(i);return}},[em,r,ef,eJ,eG,eA,eR,y,j,w,v,f,g,O,P,_,M,Z,k,E,S,B,J,U,z,N,I,V,H,L,C,x,b,$,m,p,eE,eC,eQ,t,eO,ep,e0,e2]),(0,n.useEffect)(()=>{if("manual"!==t||eO)return;let{durationIn:e,durationOut:r}=eQ();if(ek&&ef&&!eJ){e0(e);return}if(!ek&&eJ||!ef&&eJ){e2(r);return}},[eO,ek,ey,eb,eC,eE,eH,eF,eR,eA,eG,f,g,w,v,y,j,_,O,P,k,M,Z,B,E,S,J,U,z,N,I,V,H,L,C,x,b,$,m,p]),(0,n.useMemo)(()=>{let t=({children:e,wordIndex:t})=>i.jsx(ed.q.span,{style:{...ez(t),overflow:u?"hidden":"initial",display:"inline-block",userSelect:ee?"none":"auto"},className:"line-word"+(o?" "+o:""),children:e}),r=({children:e,wordIndex:t})=>eN(f)?i.jsx(ed.q.span,{style:{display:"inline-block",...eD(t),userSelect:ee?"none":"auto"},className:a,children:e}):i.jsx(i.Fragment,{children:e}),n=({children:e,wordIndex:t})=>eN(x)?i.jsx(ed.q.span,{style:{display:"inline-block",...eL[t],overflow:u?"hidden":"initial",userSelect:ee?"none":"auto"},className:l,children:e}):i.jsx(i.Fragment,{children:e}),m=({children:e,wordIndex:t})=>eN(w)?i.jsx(ed.q.span,{style:{display:"inline-block",userSelect:ee?"none":"auto",...eV[t]},className:d,children:e}):i.jsx(i.Fragment,{children:e}),p=({children:e,letterIndex:t})=>eN($)?i.jsx(ed.q.span,{style:{display:"inline-block",userSelect:ee?"none":"auto",...eW[t],overflow:u?"hidden":"initial"},className:c,children:e}):i.jsx(i.Fragment,{children:e}),g=({children:e,letterIndex:t})=>eN(y)?i.jsx(ed.q.span,{style:{display:"inline-block",userSelect:ee?"none":"auto",...eq[t]},className:h,children:e}):i.jsx(i.Fragment,{children:e}),C=({word:e,wordIndex:t})=>eN($)||eN(y)?e.map((e,r)=>{let n=eC.slice(0,t).flat().length+r;return i.jsx(p,{letterIndex:n,children:i.jsx(g,{letterIndex:n,children:e})},r)}):i.jsx(i.Fragment,{children:e});return(0,i.jsxs)(eS,{tag:K,ref:eu,style:{position:"relative",columnGap:"number"==typeof e?`${e}em`:e,display:"flex",flexWrap:"wrap",...el},className:s,...ec,children:[ee&&i.jsx("span",{style:{userSelect:"auto",color:et?"red":"transparent",position:"absolute",left:0,top:0,width:"100%",height:"100%"},children:ea}),eC.map((e,s)=>i.jsx(t,{wordIndex:s,children:i.jsx(r,{wordIndex:s,children:i.jsx(n,{wordIndex:s,children:i.jsx(m,{wordIndex:s,children:i.jsx(C,{word:e,wordIndex:s})})})})},s))]})},[eC,s,c,l,a,o,K,e,m,f,x,w,$,y,p,g,C,v,b,j])});eE.displayName="Engine";let eS=(0,n.forwardRef)(({tag:e="span",children:t,className:r,style:s,...o},a)=>{let l=(0,n.useRef)(null);return(0,n.useImperativeHandle)(a,()=>l.current),i.jsx(e,{ref:l,className:r,style:s,...o,children:t})});eS.displayName="VarTextTag";let eI=(e,t)=>{let r=(0,n.useRef)(0);(0,n.useEffect)(()=>{let i=e.current;if(!i)return;let n=new eZ(e=>{for(let n of e)if(n.target===i){let e=r.current,i=n.contentRect.width;r.current=i,t(i,e)}});return n.observe(i),()=>{n.unobserve(i)}},[t])};function eN(e){return Object.keys(e).length>0}new Proxy({},{get:(e,t)=>(0,n.memo)((0,n.forwardRef)((e,r)=>i.jsx(eB,{as:t,ref:r,...e})))});let ez=(0,n.memo)(({children:e,enabled:t=!0,duration:r=1200,stagger:n=130,...s})=>{let{fullyLoaded:o}=(0,el.Oz)();return(0,ec.Yy)(),i.jsx(eB,{enabled:t,lineIn:{y:0},lineOut:{y:100},lineStagger:n,lineConfig:{duration:r,easing:ed.Z5.easeOutQuad},overflow:!0,showSeoText:!1,seo:!0,columnGap:.2,mode:"forward",...s,children:e})});ez.displayName="AnimatedText";let eT=[{url:"https://t.me/mpp_shop",icon:"viber"},{url:"https://t.me/mpp_shop",icon:"instagram"},{url:"https://t.me/mpp_shop",icon:"telegram"}],eR=()=>(0,i.jsxs)(eD,{children:[i.jsx(eV,{src:"/assets/images/aboutImage.png",alt:"about",width:1920,height:1080}),(0,i.jsxs)(eL,{children:[i.jsx(ez,{className:"title",children:"О нас"}),i.jsx(ez,{className:"description",children:"MPP Shop — креативное направление при типографии \xabМастерпинт-Пак\xbb. Мы не просто печатаем — мы сами придумываем, разрабатываем дизайн, производим и доставляем продукцию прямо в Ваши руки, без посредников."}),(0,i.jsxs)("p",{className:"about",children:["Наши товары представлены на популярных маркетплейсах: ",i.jsx("span",{children:"OZON, Wildberries, OZ.by"})," и других. Всё — от идеи до упаковки — мы делаем сами, чтобы вы получали качественный продукт по честной цене."]})]}),(0,i.jsxs)(eH,{children:[i.jsx("p",{className:"title",children:"Контакты"}),i.jsx("p",{className:"info",children:"+375 25 9240768"}),i.jsx("p",{className:"info",children:"mpp.shop@gmail.com"}),i.jsx("div",{className:"socials",children:eT.map((e,t)=>i.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:i.jsx(V,{label:e.icon})},t))})]})]}),eD=o.ZP.div`
    padding: ${(0,a.rm)(130)} ${(0,a.rm)(180)};
    display: flex;
    gap: ${(0,a.rm)(80)};
    position: relative;
    background-color: #868686;
    width: 100%;

    ${a.BC.md`
        padding: ${(0,a.rm)(130)} ${(0,a.rm)(25)} ${(0,a.rm)(130)} ${(0,a.rm)(25)};
    `}

    ${a.BC.xsm`
        flex-direction: column;
        padding: ${(0,a.rm)(50)} ${(0,a.rm)(30)} ${(0,a.rm)(110)} ${(0,a.rm)(30)};
        gap: ${(0,a.rm)(40)};
    `}

    .title{
        margin-bottom: ${(0,a.rm)(20)};
        ${(0,l.cn)(700)};
        font-size: ${(0,a.rm)(64)};
        color: ${a.O9.white100};

        ${a.BC.xsm`
            font-size: ${(0,a.rm)(32)};
            margin-bottom: ${(0,a.rm)(10)};
        `}
    }

`,eL=o.ZP.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    width: ${(0,a.rm)(935)};

    ${a.BC.xsm`
        width: 100%;
    `}

    .description{
        ${(0,l.cn)(600)};
        font-size: ${(0,a.rm)(32)};
        color: ${a.O9.white100};
        margin-bottom: ${(0,a.rm)(30)};

        ${a.BC.xsm`
            font-size: ${(0,a.rm)(16)};
            margin-bottom: ${(0,a.rm)(10)};
        `}
    }

    .about{
        ${(0,l.cn)(400)};
        font-size: ${(0,a.rm)(24)};
        color: ${a.O9.white100};

        ${a.BC.xsm`
            font-size: ${(0,a.rm)(13)};
        `}

        span{
            ${(0,l.cn)(800)};
        }
    }
`,eH=o.ZP.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;

    .info{
        ${(0,l.cn)(400)};
        font-size: ${(0,a.rm)(36)};
        color: ${a.O9.white100};

        ${a.BC.xsm`
            font-size: ${(0,a.rm)(16)};
        `}
    }

    .socials{
        display: flex;
        gap: ${(0,a.rm)(25)};
        margin-top: ${(0,a.rm)(30)};

        ${a.BC.xsm`
            margin-top: ${(0,a.rm)(10)};
            gap: ${(0,a.rm)(10)};
        `}

        svg{
            width: ${(0,a.rm)(40)};
            height: ${(0,a.rm)(40)};

            ${a.BC.xsm`
                width: ${(0,a.rm)(24)};
                height: ${(0,a.rm)(24)};
            `}

            transition: opacity 0.3s ease, transform 0.3s ease;

            &:hover{
                opacity: 0.7;
                transform: scale(1.05);
            }
        }
    }
`,eV=(0,o.ZP)(d.default)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    z-index: 0;
    user-select: none;
    pointer-events: none;
`,eA=[{text:["Wild","berr","ies"],image:"/assets/images/wildberries.png"},{text:"Ozon",image:"/assets/images/ozon.png"}],eW=()=>(0,i.jsxs)(eF,{children:[(0,i.jsxs)(eq,{children:[i.jsx("p",{className:"title",children:"Покупайте где вам удобнее"}),i.jsx("p",{className:"description",children:"Для вашего удобства продажа осуществляется и на маркетплейсах. При желании купить товар с меньшим количеством, переходите на наш профиль и вводите код товара."})]}),i.jsx(eY,{children:eA.map((e,t)=>(0,i.jsxs)(eG,{children:[i.jsx("p",{className:"text",children:Array.isArray(e.text)?e.text.map((t,r)=>(0,i.jsxs)(s().Fragment,{children:[t,r<e.text.length-1&&i.jsx("br",{})]},r)):e.text}),i.jsx(d.default,{className:"backgroundImage",src:e.image,alt:"background",width:1920,height:1080})]},t))})]}),eF=o.ZP.div`
    padding: ${(0,a.rm)(140)} ${(0,a.rm)(90)};
    display: flex;
    justify-content: space-between;
    width: 100%;
`,eq=o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,a.rm)(45)};
    width: ${(0,a.rm)(615)};

    .title{
        ${(0,l.cn)(400)};
        font-size: ${(0,a.rm)(96)};
        color: ${a.O9.black100};
        line-height: 130%;
    }

    .description{
        ${(0,l.cn)(400)};
        font-size: ${(0,a.rm)(32)};
        color: ${a.O9.black100};
        line-height: 110%;
    }
`,eG=o.ZP.div`
    padding: ${(0,a.rm)(100)} ${(0,a.rm)(50)};
    position: relative;
    overflow: hidden;
    border-radius: ${(0,a.rm)(18)};
    background-color: #00000033;
    display: flex;
    justify-content: center;
    align-items: center;

    .backgroundImage{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text{
        ${(0,l.cn)(500)};
        font-size: ${(0,a.rm)(96)};
        color: ${a.O9.white100};
        line-height: 130%;
        position: relative;
        z-index: 2;
        width: ${(0,a.rm)(320)};
    }
`,eY=o.ZP.div`
    display: flex;
    gap: ${(0,a.rm)(96)};
`,eU=o.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,eJ=()=>{let e=(0,n.useRef)(null);return(0,i.jsxs)(eU,{ref:e,children:[i.jsx(y,{}),i.jsx(B,{}),i.jsx(eW,{}),i.jsx(T,{}),i.jsx(q,{}),i.jsx(ee,{}),i.jsx("div",{style:{width:"100%"},children:i.jsx(eR,{})})]})}},870:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var i=r(9510);let n=(0,r(8570).createProxy)(String.raw`/Users/jelmond/projects/masterPrintClient/next14-starter/src/views/HomeView/HomeView.tsx#HomeView`);var s=r(1159);function o(){return i.jsx(s.Suspense,{fallback:i.jsx("div",{children:"Loading..."}),children:i.jsx(n,{})})}},3141:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[276,805,589,49],()=>r(7616));module.exports=i})();