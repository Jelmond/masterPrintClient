exports.id=540,exports.ids=[540],exports.modules={9483:(e,t,r)=>{Promise.resolve().then(r.bind(r,9053))},9053:(e,t,r)=>{"use strict";r.d(t,{CatalogView:()=>U});var i=r(326),o=r(3824),n=r(3296),s=r(8186),a=r(4091);let l=({product:e})=>{let t=(0,n.x)(e=>e.addToCart),r=e=>{t({productId:e.id,title:e.title,price:e.price,image:e.images[0]?.url})};return(0,i.jsxs)(c,{children:[i.jsx("img",{src:`http://127.0.0.1:1337${e.images[0].url}`,alt:e.title}),i.jsx(d,{href:`/products/${e?.id}`,target:"_blank"}),(0,i.jsxs)("div",{className:"content",children:[i.jsx("div",{className:"title",children:e.title}),(0,i.jsxs)("div",{className:"priceContainer",children:[(0,i.jsxs)("div",{className:"price",children:[e.price," руб."]}),i.jsx("div",{className:"button",onClick:t=>{t.preventDefault(),r(e)},children:(0,i.jsxs)("svg",{width:"38",height:"38",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("line",{x1:"19.1667",y1:"6",x2:"19.1667",y2:"32.3077",stroke:"black"}),i.jsx("line",{x1:"32.3077",y1:"19.166",x2:"6",y2:"19.166",stroke:"black"})]})})]})]})]})},c=o.ZP.div`
    display: flex;
    flex-direction: column;
    width: ${(0,s.rm)(315)};
    overflow: hidden;
    position: relative;

    img{
        border-radius: ${(0,s.rm)(5)};
        width: 100%;
        height: ${(0,s.rm)(470)};
        object-fit: cover;
    }

    .content{
        display: flex;
        flex-direction: column;
        margin-top: ${(0,s.rm)(10)};
        z-index: 2;

        .title{
            font-size: ${(0,s.rm)(18)};
            ${(0,a.cn)(400)};
            color: ${s.O9.black100};
            height: ${(0,s.rm)(50)};
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .priceContainer{
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            margin-top: ${(0,s.rm)(10)};
            .price{
                font-size: ${(0,s.rm)(24)};
                ${(0,a.cn)(400)};
                color: ${s.O9.black100};
            }

            .button{
                width: ${(0,s.rm)(38)};
                height: ${(0,s.rm)(38)};
                cursor: pointer;
                
                transition: opacity .3s ease-in-out;

                &:hover{
                    opacity: .7;
                }
            }
        }
    }
`,d=o.ZP.a`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`,u=o.ZP.div`
    width: 100%;
    height: 100%;
    padding: ${(0,s.rm)(80)} ${(0,s.rm)(216)};
`,p=o.ZP.p`
    font-size: ${(0,s.rm)(60)};
    ${(0,a.cn)(400)};
    margin-bottom: ${(0,s.rm)(60)};
    color: ${s.O9.black100};
    text-transform: capitalize;
    margin-left: ${(0,s.rm)(20)};
`,m=o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,s.rm)(160)};

    .section {

        .subTitle {
            font-size: ${(0,s.rm)(46)};
            ${(0,a.cn)(400)};
            color: ${s.O9.black100};
            margin-bottom: ${(0,s.rm)(10)};
            text-transform: capitalize;
        }

        .products {
            display: flex;
            flex-wrap: wrap;
            gap: ${(0,s.rm)(54)};
        }
    }

`,f=o.ZP.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${(0,s.rm)(80)} ${(0,s.rm)(40)};
    text-align: center;

    p {
        font-size: ${(0,s.rm)(24)};
        ${(0,a.cn)(400)};
        color: #666;
        margin: 0;
        
        &:first-child {
            font-size: ${(0,s.rm)(28)};
            color: ${s.O9.black100};
            margin-bottom: ${(0,s.rm)(16)};
        }
    }
`,h=({title:e,tagsProductsData:t,hasActiveFilters:r})=>{let o=t.length>0&&t.some(e=>e.products.length>0);return(0,i.jsxs)(u,{children:[i.jsx(p,{children:e}),i.jsx(m,{children:!o&&r?(0,i.jsxs)(f,{children:[i.jsx("p",{children:"По выбранным фильтрам товары не найдены"}),i.jsx("p",{children:"Попробуйте изменить параметры поиска"})]}):t.map((e,t)=>(0,i.jsxs)("div",{className:"section",children:[i.jsx("p",{className:"subTitle",children:e.title}),i.jsx("div",{className:"products",children:e.products.map(e=>i.jsx(l,{product:e},e.id))})]},t))})]})};var g=r(3909),x=r(6239);let b=o.ZP.div`
    margin-bottom: ${(0,s.rm)(30)};
    
    .visibleContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${(0,s.rm)(12)};
        cursor: pointer;
        padding: ${(0,s.rm)(12)} ${(0,s.rm)(16)};
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: ${(0,s.rm)(12)};
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
            
            &::before {
                left: 100%;
            }
        }

        &:active {
            transform: translateY(0);
        }

        p{
            font-size: ${(0,s.rm)(18)};
            ${(0,a.cn)(600)};
            color: white;
            margin: 0;
            position: relative;
            z-index: 1;
        }

        svg{
            width: ${(0,s.rm)(14)};
            height: ${(0,s.rm)(14)};
            fill: white;
            transition: transform 0.2s ease;
            position: relative;
            z-index: 1;
        }

        &:hover svg {
            transform: translateX(${(0,s.rm)(4)});
        }
    }
`,$=({onClick:e})=>i.jsx(b,{children:(0,i.jsxs)("div",{className:"visibleContent",onClick:e,children:[i.jsx("p",{children:"Настроить фильтры"}),i.jsx("svg",{width:"12",height:"20",viewBox:"0 0 12 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M0 18.03L1.77 19.8L11.67 9.9L1.77 0L0 1.77L8.13 9.9L0 18.03Z",fill:"#323232"})})]})});var v=r(7577);let j=({tags:e,filters:t,onFilterChange:r,onTagToggle:o,onClearFilters:n,onOpenFilterModal:a})=>{let[l,c]=(0,v.useState)(!0),d=(0,x.q_)({width:l?`${(0,s.rm)(202)}`:`${(0,s.rm)(0)}`,x:l?`${(0,s.rm)(0)}`:`${(0,s.rm)(-50)}`,config:{duration:300}}),u=(0,x.q_)({width:l?`${(0,s.rm)(202)}`:`${(0,s.rm)(50)}`,config:{duration:300}}),p=(0,x.q_)({transform:l?"rotate(180deg)":"rotate(0deg)",config:{duration:100}});return i.jsx(k,{children:(0,i.jsxs)(y,{style:u,children:[(0,i.jsxs)(w,{style:d,children:[i.jsx($,{onClick:a}),(0,i.jsxs)(P,{children:[i.jsx("p",{className:`text ${"new"===t.sales?"active":""}`,onClick:()=>r("sales","new"===t.sales?"":"new"),children:"Новинки"}),i.jsx("p",{className:`text ${"sale"===t.sales?"active":""}`,onClick:()=>r("sales","sale"===t.sales?"":"sale"),children:"Акции"}),i.jsx("p",{className:`text ${"popular"===t.sales?"active":""}`,onClick:()=>r("sales","popular"===t.sales?"":"popular"),children:"Популярные"})]}),i.jsx(S,{children:e.slice(0,9).map((e,r)=>i.jsx("p",{className:`tag ${t.selectedTags.includes(e.title)?"active":""}`,onClick:()=>o(e.title),children:e.title},r))}),e.length>9&&i.jsx(C,{children:"Показать ещё"}),(t.sales||t.selectedTags.length>0)&&i.jsx(O,{onClick:n,children:"Очистить фильтры"})]}),i.jsx(z,{onClick:()=>c(!l),children:i.jsx(x.q.svg,{style:p,width:"12",height:"20",viewBox:"0 0 12 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M0 18.03L1.77 19.8L11.67 9.9L1.77 0L0 1.77L8.13 9.9L0 18.03Z",fill:"#323232"})})})]})})},w=(0,o.ZP)(x.q.div)`
    padding: ${(0,s.rm)(13)};
    padding-right: ${(0,s.rm)(25)};
    position: relative;
    overflow: hidden;
    width: 100%;
`,y=(0,o.ZP)(x.q.div)`
    position: relative; 
    overflow: hidden;
    height: 80vh;
`,k=(0,o.ZP)(x.q.div)`
    background-color: ${g.O.white100};
    position: fixed;
    top: ${(0,s.rm)(80)};
    left: 0;
    z-index: 100;
    border-top-right-radius: ${(0,s.rm)(20)};
    border-bottom-right-radius: ${(0,s.rm)(20)};
    box-shadow: -16px 15px 49px 0px #0000001A,
                -64px 62px 89px 0px #00000017,
                -145px 139px 120px 0px #0000000D,
                -258px 246px 143px 0px #00000003,
                -403px 385px 156px 0px #00000000;

`,P=o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,s.rm)(20)};
    margin-bottom: ${(0,s.rm)(20)};

    .text{
        font-size: ${(0,s.rm)(20)};
        ${(0,a.cn)(500)};
        color: ${g.O.black100};
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: ${(0,s.rm)(8)} ${(0,s.rm)(12)};
        border-radius: ${(0,s.rm)(6)};
        border: 1px solid transparent;

        &:hover{
            transform: translateX(${(0,s.rm)(10)});
            background-color: #f8f9fa;
        }

        &.active {
            background-color: #007bff;
            color: white;
            border-color: #007bff;
        }
    }
`,S=o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,s.rm)(20)};

    .tag{
        font-size: ${(0,s.rm)(16)};
        ${(0,a.cn)(400)};
        color: ${g.O.black100};
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: ${(0,s.rm)(6)} ${(0,s.rm)(10)};
        border-radius: ${(0,s.rm)(4)};
        border: 1px solid transparent;

        &:hover{
            transform: translateX(${(0,s.rm)(10)});
            background-color: #f8f9fa;
        }

        &.active {
            background-color: #28a745;
            color: white;
            border-color: #28a745;
        }
    }
`,z=o.ZP.div`
    position: absolute;
    top: ${(0,s.rm)(26)};
    right: ${(0,s.rm)(27)};
    width: ${(0,s.rm)(12)};
    height: ${(0,s.rm)(20)};
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    svg{
        width: 100%;
        height: 100%;
    }

    &:hover{
        opacity: 0.5;
    }
`,C=o.ZP.p`
    font-size: ${(0,s.rm)(20)};
    ${(0,a.cn)(500)};
    color: ${g.O.black100};
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    margin-top: ${(0,s.rm)(30)};

    &:hover{
        opacity: 0.5;
    }
`,O=o.ZP.button`
    background: #dc3545;
    border: none;
    border-radius: ${(0,s.rm)(6)};
    padding: ${(0,s.rm)(10)} ${(0,s.rm)(16)};
    font-size: ${(0,s.rm)(14)};
    color: white;
    ${(0,a.cn)(500)};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: ${(0,s.rm)(20)};
    width: 100%;

    &:hover {
        background: #c82333;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`,R=o.ZP.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    z-index: 1000;
    display: ${e=>e.isOpen?"flex":"none"};
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${(0,s.rm)(120)} ${(0,s.rm)(20)} ${(0,s.rm)(20)} ${(0,s.rm)(20)};
    opacity: ${e=>e.isOpen?1:0};
    transition: opacity 0.3s ease-in-out;
    animation: ${e=>e.isOpen?"fadeIn":"fadeOut"} 0.3s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`,T=o.ZP.div`
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-radius: ${(0,s.rm)(20)};
    padding: ${(0,s.rm)(32)};
    box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.15),
        0 8px 25px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-width: ${(0,s.rm)(320)};
    max-width: ${(0,s.rm)(420)};
    position: relative;
    transform: translateY(${e=>e.isOpen?"0":"-20px"});
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${e=>e.isOpen?"slideIn":"slideOut"} 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
        }
    }
`,Z=o.ZP.button`
    position: absolute;
    top: ${(0,s.rm)(20)};
    right: ${(0,s.rm)(20)};
    background: rgba(0, 0, 0, 0.05);
    border: none;
    font-size: ${(0,s.rm)(18)};
    cursor: pointer;
    color: #666;
    width: ${(0,s.rm)(32)};
    height: ${(0,s.rm)(32)};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    
    &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: #333;
        transform: scale(1.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
`,_=o.ZP.div`
    margin-bottom: ${(0,s.rm)(32)};
    padding-bottom: ${(0,s.rm)(20)};
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    
    h2 {
        font-size: ${(0,s.rm)(24)};
        ${(0,a.cn)(700)};
        color: #1a202c;
        margin: 0 0 ${(0,s.rm)(8)} 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    p {
        font-size: ${(0,s.rm)(14)};
        ${(0,a.cn)(400)};
        color: #718096;
        margin: 0;
    }
`,N=o.ZP.div`
    margin-bottom: ${(0,s.rm)(28)};
    
    &:last-child {
        margin-bottom: 0;
    }
`,L=o.ZP.h3`
    font-size: ${(0,s.rm)(16)};
    ${(0,a.cn)(600)};
    color: #1a202c;
    margin: 0 0 ${(0,s.rm)(18)} 0;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -${(0,s.rm)(6)};
        left: 0;
        width: ${(0,s.rm)(30)};
        height: 2px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        border-radius: 1px;
    }
`,M=o.ZP.div`
    display: flex;
    align-items: center;
    gap: ${(0,s.rm)(16)};
    margin-bottom: ${(0,s.rm)(24)};
    padding: ${(0,s.rm)(16)};
    background: rgba(102, 126, 234, 0.05);
    border-radius: ${(0,s.rm)(12)};
    border: 1px solid rgba(102, 126, 234, 0.1);
`,q=o.ZP.span`
    font-size: ${(0,s.rm)(14)};
    ${(0,a.cn)(500)};
    color: #4a5568;
    white-space: nowrap;
`,E=o.ZP.select`
    flex: 1;
    padding: ${(0,s.rm)(12)} ${(0,s.rm)(16)};
    border: 1px solid #e2e8f0;
    border-radius: ${(0,s.rm)(8)};
    font-size: ${(0,s.rm)(14)};
    ${(0,a.cn)(400)};
    background: white;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    &:hover {
        border-color: #cbd5e0;
    }
`,F=o.ZP.div`
    display: flex;
    flex-direction: column;
    gap: ${(0,s.rm)(8)};
`,B=o.ZP.label`
    display: flex;
    align-items: center;
    gap: ${(0,s.rm)(12)};
    cursor: pointer;
    font-size: ${(0,s.rm)(14)};
    ${(0,a.cn)(400)};
    color: #4a5568;
    padding: ${(0,s.rm)(8)} ${(0,s.rm)(12)};
    border-radius: ${(0,s.rm)(8)};
    transition: all 0.2s ease;
    
    &:hover {
        background: rgba(102, 126, 234, 0.05);
        color: #2d3748;
        transform: translateX(${(0,s.rm)(4)});
    }
`,Y=o.ZP.input`
    width: ${(0,s.rm)(18)};
    height: ${(0,s.rm)(18)};
    cursor: pointer;
    accent-color: #667eea;
    transform: scale(1.1);
    
    &:checked {
        accent-color: #667eea;
    }
`,A=o.ZP.button`
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: ${(0,s.rm)(12)};
    padding: ${(0,s.rm)(16)} ${(0,s.rm)(20)};
    font-size: ${(0,s.rm)(15)};
    color: white;
    ${(0,a.cn)(600)};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(0,s.rm)(10)};
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }
`,I=({isOpen:e,onClose:t,onFilterChange:r,onShowResults:o,filters:n,products:a})=>{let l=Array.from(new Set(a.map(e=>e.size).filter(Boolean))).sort(),c=Array.from(new Set(a.map(e=>e.material).filter(Boolean))).sort(),d=Array.from(new Set(a.map(e=>e.quantityInPack?.toString()).filter(Boolean))).sort((e,t)=>parseInt(e)-parseInt(t)),u=(e,t,i)=>{let o=n[e];r(e,i?[...o,t]:o.filter(e=>e!==t))};return i.jsx(R,{isOpen:e,onClick:e=>{e.target===e.currentTarget&&t()},children:(0,i.jsxs)(T,{isOpen:e,children:[i.jsx(Z,{onClick:t,children:"\xd7"}),(0,i.jsxs)(_,{children:[i.jsx("h2",{children:"Фильтры и сортировка"}),i.jsx("p",{children:"Настройте параметры поиска товаров"})]}),i.jsx(N,{children:(0,i.jsxs)(M,{children:[i.jsx(q,{children:"Сортировать по:"}),(0,i.jsxs)(E,{value:n.sortBy,onChange:e=>r("sortBy",e.target.value),children:[i.jsx("option",{value:"",children:"Выберите сортировку"}),i.jsx("option",{value:"price-asc",children:"Цена (по возрастанию)"}),i.jsx("option",{value:"price-desc",children:"Цена (по убыванию)"}),i.jsx("option",{value:"name-asc",children:"Название (А-Я)"}),i.jsx("option",{value:"name-desc",children:"Название (Я-А)"}),i.jsx("option",{value:"newest",children:"Сначала новые"})]})]})}),(0,i.jsxs)(N,{children:[i.jsx(L,{children:"Размер карточек"}),i.jsx(F,{children:l.length>0?l.map(e=>(0,i.jsxs)(B,{children:[i.jsx(Y,{type:"checkbox",checked:n.cardSizes.includes(e),onChange:t=>u("cardSizes",e,t.target.checked)}),e]},e)):i.jsx("p",{style:{color:"#666",fontSize:(0,s.rm)(14)},children:"Нет доступных размеров"})})]}),(0,i.jsxs)(N,{children:[i.jsx(L,{children:"Материал"}),i.jsx(F,{children:c.length>0?c.map(e=>(0,i.jsxs)(B,{children:[i.jsx(Y,{type:"checkbox",checked:n.tagSizes.includes(e),onChange:t=>u("tagSizes",e,t.target.checked)}),e]},e)):i.jsx("p",{style:{color:"#666",fontSize:(0,s.rm)(14)},children:"Нет доступных материалов"})})]}),(0,i.jsxs)(N,{children:[i.jsx(L,{children:"Количество штук в наборе"}),i.jsx(F,{children:d.length>0?d.map(e=>(0,i.jsxs)(B,{children:[i.jsx(Y,{type:"checkbox",checked:n.quantities.includes(e),onChange:t=>u("quantities",e,t.target.checked)}),e,"шт"]},e)):i.jsx("p",{style:{color:"#666",fontSize:(0,s.rm)(14)},children:"Нет доступных количеств"})})]}),(0,i.jsxs)(A,{onClick:o,children:["Показать результаты",i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})},Q=o.ZP.div`
    min-height: 100vh;
    position: relative;
`,U=({data:e,products:t,tags:r,tagsProductsData:o})=>{let[n,s]=(0,v.useState)({sales:"",selectedTags:[],searchQuery:"",sortBy:"",cardSizes:[],tagSizes:[],quantities:[]}),[a,l]=(0,v.useState)(!1),c=(0,v.useMemo)(()=>{let e=[];return o.forEach(t=>{t.products.forEach(r=>{e.push({...r,tag:t.title})})}),e},[o]),d=(0,v.useMemo)(()=>{let e=c;if(n.searchQuery){let t=n.searchQuery.toLowerCase();e=e.filter(e=>e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.tag?.toLowerCase().includes(t))}if(n.sales)switch(n.sales){case"new":e=e.filter(e=>e.isNew);break;case"sale":e=e.filter(e=>e.isOnSale||e.discount);break;case"popular":e=e.filter(e=>e.isPopular)}return n.selectedTags.length>0&&(e=e.filter(e=>n.selectedTags.includes(e.tag))),n.cardSizes.length>0&&(e=e.filter(e=>n.cardSizes.includes(e.size))),n.tagSizes.length>0&&(e=e.filter(e=>n.tagSizes.includes(e.material))),n.quantities.length>0&&(e=e.filter(e=>n.quantities.includes(e.quantityInPack?.toString()))),n.sortBy&&e.sort((e,t)=>{switch(n.sortBy){case"price-asc":return(e.price||0)-(t.price||0);case"price-desc":return(t.price||0)-(e.price||0);case"name-asc":return(e.title||"").localeCompare(t.title||"");case"name-desc":return(t.title||"").localeCompare(e.title||"");case"newest":return(t.stock||0)-(e.stock||0)||(t.id||0)-(e.id||0);default:return 0}}),e},[c,n]),u=(0,v.useMemo)(()=>{let e={};return d.forEach(t=>{e[t.tag]||(e[t.tag]=[]),e[t.tag].push(t)}),Object.entries(e).map(([e,t])=>({title:e,products:t}))},[d]),p=(e,t)=>{s(r=>({...r,[e]:t}))};return(0,i.jsxs)(Q,{children:[i.jsx(j,{tags:r,filters:{sales:n.sales,selectedTags:n.selectedTags,searchQuery:n.searchQuery},onFilterChange:p,onTagToggle:e=>{s(t=>({...t,selectedTags:t.selectedTags.includes(e)?t.selectedTags.filter(t=>t!==e):[...t.selectedTags,e]}))},onClearFilters:()=>{s({sales:"",selectedTags:[],searchQuery:"",sortBy:"",cardSizes:[],tagSizes:[],quantities:[]})},onOpenFilterModal:()=>{l(!0)}}),i.jsx(h,{title:e.title,tagsProductsData:u,hasActiveFilters:!!(n.sales||n.selectedTags.length>0||n.searchQuery)}),i.jsx(I,{isOpen:a,onClose:()=>{l(!1)},onFilterChange:p,onShowResults:()=>{console.log("Showing results with filters:",n),l(!1)},filters:{sortBy:n.sortBy,cardSizes:n.cardSizes,tagSizes:n.tagSizes,quantities:n.quantities},products:c})]})}},8585:(e,t,r)=>{"use strict";var i=r(1085);r.o(i,"notFound")&&r.d(t,{notFound:function(){return i.notFound}})},1085:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return s},RedirectType:function(){return i.RedirectType},notFound:function(){return o.notFound},permanentRedirect:function(){return i.permanentRedirect},redirect:function(){return i.redirect}});let i=r(3953),o=r(6399);class n extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class s extends URLSearchParams{append(){throw new n}delete(){throw new n}set(){throw new n}sort(){throw new n}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return i}});let r="NEXT_NOT_FOUND";function i(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3953:(e,t,r)=>{"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return i},getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return f},getRedirectTypeFromError:function(){return m},getURLFromRedirectError:function(){return p},isRedirectError:function(){return u},permanentRedirect:function(){return d},redirect:function(){return c}});let o=r(4580),n=r(2934),s=r(8586),a="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=s.RedirectStatusCode.TemporaryRedirect);let i=Error(a);i.digest=a+";"+t+";"+e+";"+r+";";let n=o.requestAsyncStorage.getStore();return n&&(i.mutableCookies=n.mutableCookies),i}function c(e,t){void 0===t&&(t="replace");let r=n.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let r=n.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.PermanentRedirect)}function u(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,i,o]=e.digest.split(";",4),n=Number(o);return t===a&&("replace"===r||"push"===r)&&"string"==typeof i&&!isNaN(n)&&n in s.RedirectStatusCode}function p(e){return u(e)?e.digest.split(";",3)[2]:null}function m(e){if(!u(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function f(e){if(!u(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(i||(i={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7142:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});let i=(0,r(8570).createProxy)(String.raw`/Users/jelmond/projects/masterPrintClient/next14-starter/src/views/CatalogView/CatalogView.tsx#CatalogView`)}};