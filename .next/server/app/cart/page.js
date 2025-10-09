(()=>{var e={};e.id=565,e.ids=[565],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6162:e=>{"use strict";e.exports=require("stream")},6358:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>h,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(7097),t(5361),t(5866);var i=t(3191),n=t(8716),s=t(7922),l=t.n(s),a=t(5231),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);t.d(r,o);let c=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7097)),"/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/cart/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,5361)),"/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/cart/page.tsx"],h="/cart/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8663:(e,r,t)=>{Promise.resolve().then(t.bind(t,6798))},3297:(e,r,t)=>{"use strict";t.d(r,{CanBeInteresting:()=>h});var i=t(326),n=t(3824),s=t(3296),l=t(8186),a=t(4091);let o=({product:e})=>{let r=(0,s.x)(e=>e.addToCart),t=e=>{r({productId:e.id,title:e.title,price:e.price,image:e.images[0]?.url})};return(0,i.jsxs)(c,{children:[i.jsx("img",{src:`http://127.0.0.1:1337${e.images[0].url}`,alt:e.title}),i.jsx(d,{href:`/products/${e?.id}`,target:"_blank"}),(0,i.jsxs)("div",{className:"content",children:[i.jsx("div",{className:"title",children:e.title}),(0,i.jsxs)("div",{className:"priceContainer",children:[(0,i.jsxs)("div",{className:"price",children:[e.price," руб."]}),i.jsx("div",{className:"button",onClick:r=>{r.preventDefault(),t(e)},children:(0,i.jsxs)("svg",{width:"38",height:"38",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("line",{x1:"19.1667",y1:"6",x2:"19.1667",y2:"32.3077",stroke:"black"}),i.jsx("line",{x1:"32.3077",y1:"19.166",x2:"6",y2:"19.166",stroke:"black"})]})})]})]})]})},c=n.ZP.div`
    display: flex;
    flex-direction: column;
    width: ${(0,l.rm)(315)};
    overflow: hidden;
    position: relative;

    img{
        border-radius: ${(0,l.rm)(5)};
        width: 100%;
        height: ${(0,l.rm)(470)};
        object-fit: cover;
    }

    .content{
        display: flex;
        flex-direction: column;
        margin-top: ${(0,l.rm)(10)};
        z-index: 2;

        .title{
            font-size: ${(0,l.rm)(18)};
            ${(0,a.cn)(400)};
            color: ${l.O9.black100};
            height: ${(0,l.rm)(50)};
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .priceContainer{
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            margin-top: ${(0,l.rm)(10)};
            .price{
                font-size: ${(0,l.rm)(24)};
                ${(0,a.cn)(400)};
                color: ${l.O9.black100};
            }

            .button{
                width: ${(0,l.rm)(38)};
                height: ${(0,l.rm)(38)};
                cursor: pointer;
                
                transition: opacity .3s ease-in-out;

                &:hover{
                    opacity: .7;
                }
            }
        }
    }
`,d=n.ZP.a`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`,h=({data:e,title:r})=>(0,i.jsxs)(p,{children:[i.jsx("h1",{children:r}),i.jsx(m,{children:e?.data?.map(e=>i.jsx(o,{product:e},e.id))})]}),p=n.ZP.div`
    margin-top: ${(0,l.rm)(60)};
    height: 100%;
    padding: ${(0,l.rm)(0)} ${(0,l.rm)(50)} ${(0,l.rm)(50)} ${(0,l.rm)(50)};

    h1 {
        ${(0,a.O$)(500)};
        font-size: ${(0,l.rm)(50)};
        margin-bottom: ${(0,l.rm)(55)};
        color: ${l.O9.black100};
        margin-left: ${(0,l.rm)(80)};
    }
`,m=n.ZP.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${(0,l.rm)(50)};
    height: 100%;
`},6798:(e,r,t)=>{"use strict";t.d(r,{CartView:()=>x});var i=t(326),n=t(8186),s=t(4091),l=t(3824),a=t(6226),o=t(434);let c=({link:e,children:r,color:t,isArrowLeft:n})=>{let s="black"===t?"#FFFFFF":"white"===t?"#000000":"#FFFFFF";return i.jsx(d,{color:s,backgroundColor:"black"===t?"#484848":"white"===t?"#D9D9D9":"#8D8D8D",isArrowLeft:n,children:(0,i.jsxs)(o.default,{href:e,children:[n?(0,i.jsxs)("svg",{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("g",{"clip-path":"url(#clip0_684_3341)",children:i.jsx("path",{d:"M28.875 15.125H9.39125L14.3137 10.1887L12.375 8.25L4.125 16.5L12.375 24.75L14.3137 22.8113L9.39125 17.875H28.875V15.125Z",fill:s})}),i.jsx("defs",{children:i.jsx("clipPath",{id:"clip0_684_3341",children:i.jsx("rect",{width:"33",height:"33",fill:s})})})]}):(0,i.jsxs)("svg",{width:"33",height:"33",viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("g",{"clip-path":"url(#clip0_686_3143)",children:i.jsx("path",{d:"M4.125 15.125H23.6088L18.6863 10.1887L20.625 8.25L28.875 16.5L20.625 24.75L18.6863 22.8113L23.6088 17.875H4.125V15.125Z",fill:s})}),i.jsx("defs",{children:i.jsx("clipPath",{id:"clip0_686_3143",children:i.jsx("rect",{width:"33",height:"33",fill:s,transform:"matrix(-1 0 0 1 33 0)"})})})]}),r]})})},d=l.ZP.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(0,n.rm)(10)};
    color: ${({color:e})=>e};
    background-color: ${({backgroundColor:e})=>e};
    border-radius: ${(0,n.rm)(15)};
    cursor: pointer;
    font-size: ${(0,n.rm)(24)};
    ${(0,s.cn)(400)};

    transition: opacity 0.3s ease;

    &:hover{
        opacity: 0.8;
    }

    a{
        display: flex;
        align-items: center;
        gap: ${(0,n.rm)(10)};

        flex-direction: ${({isArrowLeft:e})=>e?"row":"row-reverse"};
    }
`;var h=t(3297),p=t(3296),m=t(7577);let x=({similarProducts:e})=>{let r=(0,p.x)(e=>e.items),t=(0,p.x)(e=>e.updateQuantity);(0,p.x)(e=>e.removeFromCart);let[n,s]=(0,m.useState)(!1);return((0,m.useEffect)(()=>{s(!0)},[]),n)?(0,i.jsxs)(i.Fragment,{children:[i.jsx(g,{children:(0,i.jsxs)("div",{style:{width:"100%"},children:[i.jsx(f,{children:"Корзина товаров"}),0===r.length?(0,i.jsxs)(u,{children:[(0,i.jsxs)("svg",{width:"62",height:"62",viewBox:"0 0 62 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("g",{"clip-path":"url(#clip0_655_2792)",children:i.jsx("path",{d:"M46.5 15.5003H41.3333C41.3333 9.79116 36.7092 5.16699 31 5.16699C25.2908 5.16699 20.6667 9.79116 20.6667 15.5003H15.5C12.6583 15.5003 10.3333 17.8253 10.3333 20.667V51.667C10.3333 54.5087 12.6583 56.8337 15.5 56.8337H46.5C49.3417 56.8337 51.6667 54.5087 51.6667 51.667V20.667C51.6667 17.8253 49.3417 15.5003 46.5 15.5003ZM31 10.3337C33.8417 10.3337 36.1667 12.6587 36.1667 15.5003H25.8333C25.8333 12.6587 28.1583 10.3337 31 10.3337ZM46.5 51.667H15.5V20.667H20.6667V25.8337C20.6667 27.2545 21.8292 28.417 23.25 28.417C24.6708 28.417 25.8333 27.2545 25.8333 25.8337V20.667H36.1667V25.8337C36.1667 27.2545 37.3292 28.417 38.75 28.417C40.1708 28.417 41.3333 27.2545 41.3333 25.8337V20.667H46.5V51.667Z",fill:"#323232"})}),i.jsx("defs",{children:i.jsx("clipPath",{id:"clip0_655_2792",children:i.jsx("rect",{width:"62",height:"62",fill:"white"})})})]}),i.jsx("p",{children:"В вашей корзине нет товаров. Здесь будут отображаться добавленные вами позиции."})]}):i.jsx($,{children:r.map(e=>(0,i.jsxs)(j,{children:[i.jsx(w,{children:e.image?i.jsx(a.default,{src:`http://127.0.0.1:1337${e.image}`,alt:e.title,fill:!0,style:{objectFit:"cover"}}):i.jsx(v,{})}),(0,i.jsxs)(b,{children:[i.jsx(y,{children:e.title}),i.jsx(P,{children:"Открытки и конверты < День Рождения"}),(0,i.jsxs)(k,{children:[e.price," руб."]})]}),(0,i.jsxs)(C,{children:[i.jsx(_,{onClick:()=>t(e.productId,Math.max(1,e.quantity-1)),children:"-"}),i.jsx(Z,{children:e.quantity}),i.jsx(_,{onClick:()=>t(e.productId,e.quantity+1),children:"+"})]})]},e.productId))})]})}),r.length>0?(0,i.jsxs)(z,{children:[i.jsx(c,{link:"/catalog",color:"grey",isArrowLeft:!0,children:i.jsx("span",{children:"Продолжить покупки"})}),(0,i.jsxs)("div",{className:"right",children:[(0,i.jsxs)("div",{className:"total",children:[i.jsx("p",{children:"Общая сумма:"}),(0,i.jsxs)("span",{children:[r.reduce((e,r)=>e+r.price*r.quantity,0)," руб."]})]}),i.jsx(c,{link:"/order",color:"black",isArrowLeft:!1,children:i.jsx("span",{children:"Перейти к оплате"})})]})]}):i.jsx(z,{children:i.jsx(c,{link:"/catalog",color:"grey",isArrowLeft:!0,children:i.jsx("span",{children:"Перейти в каталог"})})}),i.jsx(h.CanBeInteresting,{data:e,title:"Может вам понравится"})]}):null},g=l.ZP.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${(0,n.rm)(110)} ${(0,n.rm)(125)} ${(0,n.rm)(125)} ${(0,n.rm)(125)};
    min-height: 60vh;
    justify-content: space-between;
`,f=l.ZP.p`
    ${(0,s.cn)(400)};
    font-size: ${(0,n.rm)(36)};
    margin-bottom: ${(0,n.rm)(28)};
    color: ${n.O9.black100};
    margin-left: ${(0,n.rm)(40)};
`,u=l.ZP.div`
    margin-top: ${(0,n.rm)(40)};
    display: flex;
    align-items: center;
    gap: ${(0,n.rm)(18)};

    svg{
        width: ${(0,n.rm)(62)};
        height: ${(0,n.rm)(62)};
    }

    p{
        font-size: ${(0,n.rm)(24)};
        color: ${n.O9.black100};
        ${(0,s.cn)(400)};
        width: ${(0,n.rm)(574)};
    }
`,$=l.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,n.rm)(50)};
    width: 100%;
`,j=l.ZP.div`
    display: flex;
    align-items: center;
    gap: ${(0,n.rm)(20)};
    width: 100%;
    padding: ${(0,n.rm)(20)};
    background: #ffffff;
    border-radius: ${(0,n.rm)(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: ${(0,n.rm)(16)};
    
    &:last-child {
        margin-bottom: 0;
    }
`,w=l.ZP.div`
    width: ${(0,n.rm)(80)};
    height: ${(0,n.rm)(80)};
    background: #e0e0e0;
    border-radius: ${(0,n.rm)(8)};
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
`,v=l.ZP.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d3d3d3;
    border-radius: ${(0,n.rm)(5)};
    &::before {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        background: url('data:image/svg+xml;utf8,<svg fill=\'gray\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><rect width=\'100%\' height=\'100%\' fill=\'lightgray\'/><path d=\'M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM7 10l5 5 5-5\' stroke=\'gray\' stroke-width=\'2\' fill=\'none\'/></svg>') center/contain no-repeat;
    }
`,b=l.ZP.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${(0,n.rm)(6)};
`,y=l.ZP.div`
    font-size: ${(0,n.rm)(16)};
    color: ${n.O9.black100};
    ${(0,s.cn)(400)};
    text-decoration: underline;
    text-decoration-color: #007bff;
    cursor: pointer;
    
    &:hover {
        color: #007bff;
    }
`,P=l.ZP.div`
    font-size: ${(0,n.rm)(14)};
    color: #666;
    ${(0,s.cn)(400)};
`,k=l.ZP.div`
    font-size: ${(0,n.rm)(16)};
    color: ${n.O9.black100};
    ${(0,s.cn)(500)};
    margin-top: ${(0,n.rm)(4)};
`,C=l.ZP.div`
    display: flex;
    align-items: center;
    gap: ${(0,n.rm)(12)};
    min-width: ${(0,n.rm)(100)};
    justify-content: center;
`,_=l.ZP.button`
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    font-size: ${(0,n.rm)(18)};
    font-weight: 500;
    color: ${n.O9.black100};
    cursor: pointer;
    width: ${(0,n.rm)(36)};
    height: ${(0,n.rm)(36)};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${(0,n.rm)(8)};
    transition: all 0.2s ease;
    user-select: none;
    
    &:hover {
        background-color: #e9ecef;
        border-color: #dee2e6;
        transform: translateY(-1px);
    }
    
    &:active {
        transform: translateY(0);
        background-color: #dee2e6;
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
`,Z=l.ZP.div`
    font-size: ${(0,n.rm)(16)};
    font-weight: 500;
    min-width: ${(0,n.rm)(32)};
    text-align: center;
    ${(0,s.cn)(400)};
    padding: ${(0,n.rm)(8)} ${(0,n.rm)(12)};
    background: #ffffff;
    border: 1px solid #e9ecef;
    border-radius: ${(0,n.rm)(6)};
`,z=l.ZP.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${(0,n.rm)(60)};

    .right{
        display: flex;
        align-items: center;
        gap: ${(0,n.rm)(72)};

        .total{
            display: flex;
            align-items: flex-end;
            gap: ${(0,n.rm)(10)};

            p{
                font-size: ${(0,n.rm)(32)};
                color: ${n.O9.black100};
                ${(0,s.cn)(400)};
            }

            span{
                font-size: ${(0,n.rm)(36)};
                color: ${n.O9.black100};
                ${(0,s.cn)(400)};
            }
        }
    }
`},7097:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var i=t(9510);let n=(0,t(8570).createProxy)(String.raw`/Users/jelmond/projects/masterPrintClient/next14-starter/src/views/CartView/CartView.tsx#CartView`);async function s(){let e=await fetch("http://127.0.0.1:1337/api/getSimilarProducts/1000000",{cache:"no-store"}),r=await e.json();return i.jsx(i.Fragment,{children:i.jsx(n,{similarProducts:r})})}}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[276,805,49],()=>t(6358));module.exports=i})();