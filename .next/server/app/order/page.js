(()=>{var e={};e.id=778,e.ids=[778],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6162:e=>{"use strict";e.exports=require("stream")},9516:(e,r,i)=>{"use strict";i.r(r),i.d(r,{GlobalError:()=>s.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>c,routeModule:()=>x,tree:()=>d}),i(4161),i(5361),i(5866);var t=i(3191),o=i(8716),n=i(7922),s=i.n(n),a=i(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);i.d(r,l);let d=["",{children:["order",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,4161)),"/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/order/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(i.bind(i,5361)),"/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/order/page.tsx"],m="/order/page",h={require:i,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/order/page",pathname:"/order",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4519:(e,r,i)=>{Promise.resolve().then(i.bind(i,3801))},3801:(e,r,i)=>{"use strict";i.d(r,{OrderView:()=>v});var t=i(326),o=i(8186),n=i(4091),s=i(3824),a=i(6226),l=i(3296),d=i(7577);let c=s.ZP.div`
  display: flex;
  flex-direction: column;
  gap: ${(0,o.rm)(8)};
  width: 100%;
  margin-bottom: ${(0,o.rm)(24)};
`,m=s.ZP.label`
  font-size: ${(0,o.rm)(16)};
  color: ${o.O9.black100};
  ${(0,n.cn)(400)};
  font-weight: 400;
`,h=s.ZP.input`
  width: 100%;
  border: 1px solid #B3D9FF;
  border-radius: ${(0,o.rm)(8)};
  font-size: ${(0,o.rm)(16)};
  ${(0,n.cn)(400)};
  padding: ${(0,o.rm)(16)} ${(0,o.rm)(20)};
  background: #F7FAFC;
  outline: none;
  color: #222;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &::placeholder {
    color: #A0A0A0;
    opacity: 0.6;
    font-size: ${(0,o.rm)(16)};
    ${(0,n.cn)(400)};
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    background: #ffffff;
    
    &::placeholder {
      opacity: 0.8;
    }
  }

  &:hover {
    border-color: #80C7FF;
  }
`,x=({label:e,placeholder:r,...i})=>(0,t.jsxs)(c,{children:[t.jsx(m,{children:e}),t.jsx(h,{...i,placeholder:r})]}),p=s.ZP.div`
  display: flex;
  flex-direction: column;
  gap: ${(0,o.rm)(8)};
  width: 100%;
  margin-bottom: ${(0,o.rm)(24)};
`,f=s.ZP.label`
  font-size: ${(0,o.rm)(16)};
  color: ${o.O9.black100};
  ${(0,n.cn)(400)};
  font-weight: 400;
`,g=s.ZP.div`
  display: flex;
  gap: ${(0,o.rm)(8)};
  width: 100%;
`,u=s.ZP.div`
  width: ${(0,o.rm)(80)};
  height: ${(0,o.rm)(56)};
  border: 1px solid #DDE2E7;
  border-radius: ${(0,o.rm)(8)};
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(0,o.rm)(16)};
  color: ${o.O9.black100};
  ${(0,n.cn)(400)};
  flex-shrink: 0;
`,$=s.ZP.input`
  flex: 1;
  height: ${(0,o.rm)(56)};
  border: 1px solid #DDE2E7;
  border-radius: ${(0,o.rm)(8)};
  font-size: ${(0,o.rm)(16)};
  ${(0,n.cn)(400)};
  padding: 0 ${(0,o.rm)(20)};
  background: #F7FAFC;
  outline: none;
  color: #222;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &::placeholder {
    color: #A0A0A0;
    opacity: 0.6;
    font-size: ${(0,o.rm)(16)};
    ${(0,n.cn)(400)};
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    background: #ffffff;
    
    &::placeholder {
      opacity: 0.8;
    }
  }

  &:hover {
    border-color: #80C7FF;
  }
`,b=({label:e,value:r="",onChange:i,placeholder:o="Номер получателя"})=>(0,t.jsxs)(p,{children:[t.jsx(f,{children:e}),(0,t.jsxs)(g,{children:[t.jsx(u,{children:"+375"}),t.jsx($,{value:r,onChange:e=>i?.(e.target.value),placeholder:o,type:"tel"})]})]});var j=i(5047);let v=()=>{let e=(0,j.useRouter)(),r=(0,l.x)(e=>e.items);(0,l.x)(e=>e.updateQuantity);let i=(0,l.x)(e=>e.removeFromCart),[o,n]=(0,d.useState)(!1),[s,c]=(0,d.useState)("courier"),[m,h]=(0,d.useState)(!1),[p,f]=(0,d.useState)({firstName:"",lastName:"",email:"",phone:"",city:"",address:"",comment:""}),[g,u]=(0,d.useState)({firstName:"",lastName:"",email:"",phone:"",city:"",address:""});if((0,d.useEffect)(()=>{n(!0)},[]),!o)return null;let $=r.reduce((e,r)=>e+r.price*r.quantity,0),v="courier"===s?7.5:0,ef=e=>e.trim()?e.trim().length<2?"Имя должно содержать минимум 2 символа":"":"Имя обязательно для заполнения",eg=e=>e.trim()?e.trim().length<2?"Фамилия должна содержать минимум 2 символа":"":"Фамилия обязательна для заполнения",eu=e=>e.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?"":"Введите корректный email адрес":"Email обязателен для заполнения",e$=e=>e.trim()?/^\d{9}$/.test(e)?"":"Введите корректный номер телефона (9 цифр)":"Номер телефона обязателен для заполнения",eb=e=>e.trim()?e.trim().length<2?"Название города должно содержать минимум 2 символа":"":"Город обязателен для заполнения",ej=e=>e.trim()?e.trim().length<5?"Адрес должен содержать минимум 5 символов":"":"Адрес обязателен для заполнения",ev=(e,r)=>{f(i=>({...i,[e]:r})),g[e]&&u(r=>({...r,[e]:""}))},ek=()=>{let e={firstName:ef(p.firstName),lastName:eg(p.lastName),email:eu(p.email),phone:e$(p.phone),city:eb(p.city),address:ej(p.address)};return u(e),Object.values(e).every(e=>""===e)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(k,{children:[(0,t.jsxs)(y,{children:[t.jsx(Z,{children:"Оформление заказа"}),t.jsx(z,{children:"Товары покупки"}),t.jsx(C,{children:r.map(e=>(0,t.jsxs)(O,{children:[t.jsx(F,{children:e.image?t.jsx(a.default,{src:`http://127.0.0.1:1337${e.image}`,alt:e.title,fill:!0,style:{objectFit:"cover"}}):t.jsx(E,{})}),(0,t.jsxs)(A,{children:[t.jsx(N,{children:e.title}),(0,t.jsxs)(_,{children:["Количество: ",e.quantity," шт."]})]}),(0,t.jsxs)(D,{children:[e.price," руб."]})]},e.productId))}),t.jsx(z,{children:"Данные получателя"}),(0,t.jsxs)(P,{children:[(0,t.jsxs)("div",{children:[t.jsx(x,{label:"Имя получателя",placeholder:"Введите имя получателя",value:p.firstName,onChange:e=>ev("firstName",e.target.value)}),g.firstName&&t.jsx(ep,{children:g.firstName})]}),(0,t.jsxs)("div",{children:[t.jsx(x,{label:"Фамилия получателя",placeholder:"Введите фамилию получателя",value:p.lastName,onChange:e=>ev("lastName",e.target.value)}),g.lastName&&t.jsx(ep,{children:g.lastName})]}),(0,t.jsxs)("div",{children:[t.jsx(x,{label:"Email",placeholder:"Введите email",value:p.email,onChange:e=>ev("email",e.target.value)}),g.email&&t.jsx(ep,{children:g.email})]}),(0,t.jsxs)("div",{children:[t.jsx(b,{label:"Номер телефона получателя",placeholder:"Номер получателя",value:p.phone,onChange:e=>ev("phone",e)}),g.phone&&t.jsx(ep,{children:g.phone})]})]}),t.jsx(z,{children:"Адрес получателя"}),(0,t.jsxs)(w,{children:[(0,t.jsxs)("div",{children:[t.jsx(x,{label:"Город",placeholder:"Введите название города",value:p.city,onChange:e=>ev("city",e.target.value)}),g.city&&t.jsx(ep,{children:g.city})]}),(0,t.jsxs)("div",{children:[t.jsx(x,{label:"Улица, дом, квартира",placeholder:"Введите адрес",value:p.address,onChange:e=>ev("address",e.target.value)}),g.address&&t.jsx(ep,{children:g.address})]})]}),t.jsx(z,{children:"Способ доставки"}),(0,t.jsxs)(L,{children:[(0,t.jsxs)(H,{children:[t.jsx(I,{type:"radio",id:"courier",name:"delivery",value:"courier",checked:"courier"===s,onChange:e=>c(e.target.value)}),t.jsx(R,{htmlFor:"courier",children:(0,t.jsxs)(Q,{children:[t.jsx(T,{children:"Курьер"}),t.jsx(X,{children:"+7.50 Руб."})]})})]}),(0,t.jsxs)(H,{children:[t.jsx(I,{type:"radio",id:"pickup",name:"delivery",value:"pickup",checked:"pickup"===s,onChange:e=>c(e.target.value)}),t.jsx(R,{htmlFor:"pickup",children:(0,t.jsxs)(Q,{children:[t.jsx(T,{children:"Самовывоз"}),t.jsx(X,{children:"— бесплатно"})]})})]})]}),t.jsx(Y,{children:"courier"===s?"Ориентировочное время доставки: через 2 дня, 22 ноября":"Самовывоз доступен в день заказа"}),t.jsx(z,{children:"Комментарий к заказу (опционально)"}),(0,t.jsxs)(J,{children:[t.jsx(K,{placeholder:"Добавьте свой комментарий...",rows:4,value:p.comment,onChange:e=>ev("comment",e.target.value)}),(0,t.jsxs)(ee,{children:[t.jsx(er,{onClick:()=>e.push("/cart"),children:"Назад к корзине"}),t.jsx(ei,{onClick:()=>{ek()&&(r.forEach(e=>{i(e.productId)}),h(!0))},children:"Перейти к оплате"})]})]})]}),(0,t.jsxs)(q,{children:[t.jsx(M,{children:"Общая сумма заказа"}),(0,t.jsxs)(S,{children:[t.jsx(V,{children:"Промежуточный итог"}),(0,t.jsxs)(W,{children:[$.toFixed(2)," руб."]})]}),(0,t.jsxs)(S,{children:[t.jsx(V,{children:"Доставка"}),t.jsx(W,{children:"courier"===s?`${v.toFixed(2)} руб.`:"Бесплатно"})]}),(0,t.jsxs)(S,{children:[t.jsx(V,{children:"Общая сумма заказа"}),(0,t.jsxs)(W,{children:[($+v).toFixed(2)," руб."]})]}),(0,t.jsxs)(B,{children:[t.jsx(G,{children:"Без регистрации"}),t.jsx(U,{children:"|"}),t.jsx(G,{children:"Защита перевода"}),t.jsx(U,{children:"|"}),t.jsx(G,{children:"Условия пользования"})]})]})]}),m&&t.jsx(et,{children:(0,t.jsxs)(eo,{children:[t.jsx(en,{children:"Ваш заказ успешно оформлен"}),t.jsx(es,{children:t.jsx(ea,{children:t.jsx("svg",{width:"80",height:"80",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",fill:"white"})})})}),(0,t.jsxs)(el,{children:["Спасибо Вам, ",p.firstName||"пользователь"]}),(0,t.jsxs)(ed,{children:[t.jsx(ec,{children:(0,t.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z",stroke:"#666",strokeWidth:"2",fill:"none"}),t.jsx("polyline",{points:"14,2 14,8 20,8",stroke:"#666",strokeWidth:"2",fill:"none"}),t.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13",stroke:"#666",strokeWidth:"2"}),t.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17",stroke:"#666",strokeWidth:"2"}),t.jsx("polyline",{points:"10,9 9,9 8,9",stroke:"#666",strokeWidth:"2",fill:"none"})]})}),t.jsx(em,{children:"Нажмите чтобы скачать PDF чек"})]}),(0,t.jsxs)(eh,{children:["Чек был отправлен на почту ",p.email||"указанный email"]}),t.jsx(ex,{onClick:()=>e.push("/track"),children:"На страницу отслеживания"})]})})]})},k=s.ZP.div`
    display: flex;
    gap: ${(0,o.rm)(40)};
    padding: ${(0,o.rm)(110)} ${(0,o.rm)(125)} ${(0,o.rm)(125)} ${(0,o.rm)(125)};
    min-height: 60vh;
`,y=s.ZP.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`,w=s.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,o.rm)(40)};
    width: ${(0,o.rm)(520)};
`,P=s.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,o.rm)(40)};
    width: ${(0,o.rm)(520)};
    margin-bottom: ${(0,o.rm)(40)}
`;s.ZP.div`
    display: flex;
    align-items: center;
    gap: ${(0,o.rm)(10)};
    margin-top: ${(0,o.rm)(40)};

    p{
        ${(0,n.cn)(400)};
        font-size: ${(0,o.rm)(36)};
        margin-bottom: ${(0,o.rm)(40)};
        color: ${o.O9.black100};
    }

    span{
        ${(0,n.cn)(300)};
        font-size: ${(0,o.rm)(48)};
        margin-bottom: ${(0,o.rm)(40)};
        color: ${o.O9.black100};
    }
`;let Z=s.ZP.p`
    ${(0,n.cn)(400)};
    font-size: ${(0,o.rm)(48)};
    margin-bottom: ${(0,o.rm)(60)};
    color: ${o.O9.black100};
`,z=s.ZP.p`
    ${(0,n.cn)(400)};
    font-size: ${(0,o.rm)(36)};
    margin-bottom: ${(0,o.rm)(40)};
    color: ${o.O9.black100};
`,C=s.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,o.rm)(25)};
    width: ${(0,o.rm)(781)};
`,O=s.ZP.div`
    display: flex;
    align-items: center;
    gap: ${(0,o.rm)(20)};
    width: 100%;
    padding: ${(0,o.rm)(20)};
    background: #f8f9fa;
    border-radius: ${(0,o.rm)(12)};
    margin-bottom: ${(0,o.rm)(16)};
    
    &:last-child {
        margin-bottom: 0;
    }
`,F=s.ZP.div`
    width: ${(0,o.rm)(80)};
    height: ${(0,o.rm)(80)};
    background: #e0e0e0;
    border-radius: ${(0,o.rm)(8)};
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
`,E=s.ZP.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d3d3d3;
    border-radius: ${(0,o.rm)(5)};
    &::before {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        background: url('data:image/svg+xml;utf8,<svg fill=\'gray\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><rect width=\'100%\' height=\'100%\' fill=\'lightgray\'/><path d=\'M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM7 10l5 5 5-5\' stroke=\'gray\' stroke-width=\'2\' fill=\'none\'/></svg>') center/contain no-repeat;
    }
`,A=s.ZP.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${(0,o.rm)(6)};
`,N=s.ZP.div`
    font-size: ${(0,o.rm)(16)};
    color: ${o.O9.black100};
    ${(0,n.cn)(500)};
    font-weight: 500;
`,_=s.ZP.div`
    font-size: ${(0,o.rm)(14)};
    color: #666;
    ${(0,n.cn)(400)};
`,D=s.ZP.div`
    font-size: ${(0,o.rm)(16)};
    color: ${o.O9.black100};
    ${(0,n.cn)(500)};
    font-weight: 500;
    min-width: ${(0,o.rm)(80)};
    text-align: right;
`,q=s.ZP.div`
    position: sticky;
    top: ${(0,o.rm)(120)};
    width: ${(0,o.rm)(500)};
    height: fit-content;
    background: #ffffff;
    border-radius: ${(0,o.rm)(12)};
    padding: ${(0,o.rm)(32)};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,M=s.ZP.h3`
    font-size: ${(0,o.rm)(24)};
    font-weight: 600;
    color: ${o.O9.black100};
    ${(0,n.cn)(600)};
    margin: 0 0 ${(0,o.rm)(24)} 0;
`,S=s.ZP.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${(0,o.rm)(16)};
    
    &:last-of-type {
        margin-bottom: ${(0,o.rm)(24)};
        padding-top: ${(0,o.rm)(16)};
        border-top: 1px solid #e9ecef;
    }
`,V=s.ZP.span`
    font-size: ${(0,o.rm)(18)};
    color: ${o.O9.black100};
    ${(0,n.cn)(400)};
`,W=s.ZP.span`
    font-size: ${(0,o.rm)(18)};
    color: ${o.O9.black100};
    ${(0,n.cn)(500)};
    font-weight: 500;
`,B=s.ZP.div`
    display: flex;
    align-items: center;
    gap: ${(0,o.rm)(12)};
    margin-top: ${(0,o.rm)(20)};
`,G=s.ZP.a`
    font-size: ${(0,o.rm)(12)};
    color: #666;
    ${(0,n.cn)(400)};
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
        color: ${o.O9.black100};
        text-decoration: underline;
    }
`,U=s.ZP.span`
    font-size: ${(0,o.rm)(14)};
    color: #ccc;
    ${(0,n.cn)(400)};
`,L=s.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,o.rm)(12)};
    margin-bottom: ${(0,o.rm)(20)};
`,H=s.ZP.div`
    position: relative;
`,I=s.ZP.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    
    &:checked + label {
        background: #f8f9fa;
        border-color: #007bff;
    }
    
    &:checked + label::before {
        background: #007bff;
        border-color: #007bff;
    }
    
    &:checked + label::after {
        opacity: 1;
    }
`,R=s.ZP.label`
    display: flex;
    align-items: center;
    padding: ${(0,o.rm)(16)} ${(0,o.rm)(20)};
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: ${(0,o.rm)(8)};
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    
    &::before {
        content: '';
        width: ${(0,o.rm)(20)};
        height: ${(0,o.rm)(20)};
        border: 2px solid #ccc;
        border-radius: 50%;
        margin-right: ${(0,o.rm)(12)};
        transition: all 0.2s ease;
        flex-shrink: 0;
    }
    
    &::after {
        content: '';
        position: absolute;
        left: ${(0,o.rm)(26)};
        top: 50%;
        transform: translateY(-50%);
        width: ${(0,o.rm)(8)};
        height: ${(0,o.rm)(8)};
        background: white;
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.2s ease;
    }
    
    &:hover {
        background: #e9ecef;
        border-color: #dee2e6;
    }
`,Q=s.ZP.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`,T=s.ZP.span`
    font-size: ${(0,o.rm)(16)};
    color: ${o.O9.black100};
    ${(0,n.cn)(400)};
    font-weight: 500;
`,X=s.ZP.span`
    font-size: ${(0,o.rm)(16)};
    color: ${o.O9.black100};
    ${(0,n.cn)(400)};
    font-weight: 500;
`,Y=s.ZP.p`
    font-size: ${(0,o.rm)(14)};
    color: #666;
    ${(0,n.cn)(400)};
    margin: 0;
    margin-bottom: ${(0,o.rm)(20)};
`,J=s.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,o.rm)(24)};
    margin-bottom: ${(0,o.rm)(40)};
`,K=s.ZP.textarea`
    width: 100%;
    min-height: ${(0,o.rm)(120)};
    border: 1px solid #DDE2E7;
    border-radius: ${(0,o.rm)(8)};
    font-size: ${(0,o.rm)(16)};
    ${(0,n.cn)(400)};
    padding: ${(0,o.rm)(16)} ${(0,o.rm)(20)};
    background: #ffffff;
    outline: none;
    color: #222;
    resize: vertical;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
        color: #A0A0A0;
        font-size: ${(0,o.rm)(16)};
        ${(0,n.cn)(400)};
    }

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    &:hover {
        border-color: #80C7FF;
    }
`,ee=s.ZP.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${(0,o.rm)(20)};
`,er=s.ZP.button`
    background: #E9ECEF;
    border: none;
    border-radius: ${(0,o.rm)(8)};
    padding: ${(0,o.rm)(16)} ${(0,o.rm)(32)};
    font-size: ${(0,o.rm)(16)};
    color: ${o.O9.black100};
    ${(0,n.cn)(500)};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
    
    &:hover {
        background: #DEE2E6;
    }
    
    &:active {
        background: #CED4DA;
    }
`,ei=s.ZP.button`
    background: #6C757D;
    border: none;
    border-radius: ${(0,o.rm)(8)};
    padding: ${(0,o.rm)(16)} ${(0,o.rm)(32)};
    font-size: ${(0,o.rm)(16)};
    color: #ffffff;
    ${(0,n.cn)(500)};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
    
    &:hover {
        background: #5A6268;
    }
    
    &:active {
        background: #495057;
    }
`,et=s.ZP.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: ${(0,o.rm)(20)};
`,eo=s.ZP.div`
    background: white;
    border-radius: ${(0,o.rm)(16)};
    padding: ${(0,o.rm)(40)};
    max-width: ${(0,o.rm)(500)};
    width: 100%;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
`,en=s.ZP.h2`
    font-size: ${(0,o.rm)(24)};
    color: ${o.O9.black100};
    ${(0,n.cn)(600)};
    font-weight: 600;
    margin: 0 0 ${(0,o.rm)(32)} 0;
`,es=s.ZP.div`
    display: flex;
    justify-content: center;
    margin-bottom: ${(0,o.rm)(24)};
`,ea=s.ZP.div`
    width: ${(0,o.rm)(120)};
    height: ${(0,o.rm)(120)};
    background: #6C757D;
    border-radius: ${(0,o.rm)(16)};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
`,el=s.ZP.p`
    font-size: ${(0,o.rm)(18)};
    color: ${o.O9.black100};
    ${(0,n.cn)(500)};
    font-weight: 500;
    margin: 0 0 ${(0,o.rm)(24)} 0;
`,ed=s.ZP.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(0,o.rm)(12)};
    margin-bottom: ${(0,o.rm)(16)};
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
        opacity: 0.8;
    }
`,ec=s.ZP.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,em=s.ZP.span`
    font-size: ${(0,o.rm)(16)};
    color: ${o.O9.black100};
    ${(0,n.cn)(400)};
    text-decoration: underline;
`,eh=s.ZP.p`
    font-size: ${(0,o.rm)(14)};
    color: #666;
    ${(0,n.cn)(400)};
    margin: 0 0 ${(0,o.rm)(32)} 0;
`,ex=s.ZP.button`
    background: #6C757D;
    border: none;
    border-radius: ${(0,o.rm)(8)};
    padding: ${(0,o.rm)(16)} ${(0,o.rm)(32)};
    font-size: ${(0,o.rm)(16)};
    color: #ffffff;
    ${(0,n.cn)(500)};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
    width: 100%;
    
    &:hover {
        background: #5A6268;
    }
    
    &:active {
        background: #495057;
    }
`,ep=s.ZP.div`
    color: #dc3545;
    font-size: ${(0,o.rm)(14)};
    ${(0,n.cn)(400)};
    margin-top: ${(0,o.rm)(8)};
    margin-bottom: ${(0,o.rm)(8)};
`},4161:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>n});var t=i(9510);let o=(0,i(8570).createProxy)(String.raw`/Users/jelmond/projects/masterPrintClient/next14-starter/src/views/OrderView/OrderView.tsx#OrderView`);function n(){return t.jsx(o,{})}}};var r=require("../../webpack-runtime.js");r.C(e);var i=e=>r(r.s=e),t=r.X(0,[276,805,49],()=>i(9516));module.exports=t})();