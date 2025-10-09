(()=>{var e={};e.id=351,e.ids=[351],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6162:e=>{"use strict";e.exports=require("stream")},2649:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(4375),r(5361),r(5866);var n=r(3191),i=r(8716),l=r(7922),a=r.n(l),s=r(5231),o={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>s[e]);r.d(t,o);let c=["",{children:["products",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4375)),"/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/products/[id]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5361)),"/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/jelmond/projects/masterPrintClient/next14-starter/src/app/products/[id]/page.tsx"],u="/products/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/products/[id]/page",pathname:"/products/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9569:(e,t,r)=>{Promise.resolve().then(r.bind(r,3297)),Promise.resolve().then(r.bind(r,3072))},7391:e=>{"use strict";var t=/["'&<>]/;e.exports=function(e){var r,n=""+e,i=t.exec(n);if(!i)return n;var l="",a=0,s=0;for(a=i.index;a<n.length;a++){switch(n.charCodeAt(a)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}s!==a&&(l+=n.substring(s,a)),s=a+1,l+=r}return s!==a?l+n.substring(s,a):l}},3297:(e,t,r)=>{"use strict";r.d(t,{CanBeInteresting:()=>u});var n=r(326),i=r(3824),l=r(3296),a=r(8186),s=r(4091);let o=({product:e})=>{let t=(0,l.x)(e=>e.addToCart),r=e=>{t({productId:e.id,title:e.title,price:e.price,image:e.images[0]?.url})};return(0,n.jsxs)(c,{children:[n.jsx("img",{src:`http://127.0.0.1:1337${e.images[0].url}`,alt:e.title}),n.jsx(d,{href:`/products/${e?.id}`,target:"_blank"}),(0,n.jsxs)("div",{className:"content",children:[n.jsx("div",{className:"title",children:e.title}),(0,n.jsxs)("div",{className:"priceContainer",children:[(0,n.jsxs)("div",{className:"price",children:[e.price," руб."]}),n.jsx("div",{className:"button",onClick:t=>{t.preventDefault(),r(e)},children:(0,n.jsxs)("svg",{width:"38",height:"38",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("line",{x1:"19.1667",y1:"6",x2:"19.1667",y2:"32.3077",stroke:"black"}),n.jsx("line",{x1:"32.3077",y1:"19.166",x2:"6",y2:"19.166",stroke:"black"})]})})]})]})]})},c=i.ZP.div`
    display: flex;
    flex-direction: column;
    width: ${(0,a.rm)(315)};
    overflow: hidden;
    position: relative;

    img{
        border-radius: ${(0,a.rm)(5)};
        width: 100%;
        height: ${(0,a.rm)(470)};
        object-fit: cover;
    }

    .content{
        display: flex;
        flex-direction: column;
        margin-top: ${(0,a.rm)(10)};
        z-index: 2;

        .title{
            font-size: ${(0,a.rm)(18)};
            ${(0,s.cn)(400)};
            color: ${a.O9.black100};
            height: ${(0,a.rm)(50)};
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .priceContainer{
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            margin-top: ${(0,a.rm)(10)};
            .price{
                font-size: ${(0,a.rm)(24)};
                ${(0,s.cn)(400)};
                color: ${a.O9.black100};
            }

            .button{
                width: ${(0,a.rm)(38)};
                height: ${(0,a.rm)(38)};
                cursor: pointer;
                
                transition: opacity .3s ease-in-out;

                &:hover{
                    opacity: .7;
                }
            }
        }
    }
`,d=i.ZP.a`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`,u=({data:e,title:t})=>(0,n.jsxs)(p,{children:[n.jsx("h1",{children:t}),n.jsx(m,{children:e?.data?.map(e=>n.jsx(o,{product:e},e.id))})]}),p=i.ZP.div`
    margin-top: ${(0,a.rm)(60)};
    height: 100%;
    padding: ${(0,a.rm)(0)} ${(0,a.rm)(50)} ${(0,a.rm)(50)} ${(0,a.rm)(50)};

    h1 {
        ${(0,s.O$)(500)};
        font-size: ${(0,a.rm)(50)};
        margin-bottom: ${(0,a.rm)(55)};
        color: ${a.O9.black100};
        margin-left: ${(0,a.rm)(80)};
    }
`,m=i.ZP.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${(0,a.rm)(50)};
    height: 100%;
`},3072:(e,t,r)=>{"use strict";r.d(t,{ProductView:()=>R});var n,i=r(326),l=r(7577),a=r.n(l),s=r(8186),o=r(3824),c=r(1006),d=r(6632),u=r(4877);function p(e){let{swiper:t,extendParams:r,on:n,emit:i}=e;function l(e){let r;return e&&"string"==typeof e&&t.isElement&&(r=t.el.querySelector(e)||t.hostEl.querySelector(e))?r:(e&&("string"==typeof e&&(r=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&r&&r.length>1&&1===t.el.querySelectorAll(e).length?r=t.el.querySelector(e):r&&1===r.length&&(r=r[0])),e&&!r)?e:r}function a(e,r){let n=t.params.navigation;(e=(0,u.m)(e)).forEach(e=>{e&&(e.classList[r?"add":"remove"](...n.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=r),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](n.lockClass))})}function s(){let{nextEl:e,prevEl:r}=t.navigation;if(t.params.loop){a(r,!1),a(e,!1);return}a(r,t.isBeginning&&!t.params.rewind),a(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){var e,r,n;let i=t.params.navigation;if(t.params.navigation=(e=t.originalParams.navigation,r=t.params.navigation,n={nextEl:"swiper-button-next",prevEl:"swiper-button-prev"},t.params.createElements&&Object.keys(n).forEach(i=>{if(!r[i]&&!0===r.auto){let l=(0,u.e)(t.el,`.${n[i]}`)[0];l||((l=(0,u.c)("div",n[i])).className=n[i],t.el.append(l)),r[i]=l,e[i]=l}}),r),!(i.nextEl||i.prevEl))return;let a=l(i.nextEl),s=l(i.prevEl);Object.assign(t.navigation,{nextEl:a,prevEl:s}),a=(0,u.m)(a),s=(0,u.m)(s);let d=(e,r)=>{e&&e.addEventListener("click","next"===r?c:o),!t.enabled&&e&&e.classList.add(...i.lockClass.split(" "))};a.forEach(e=>d(e,"next")),s.forEach(e=>d(e,"prev"))}function p(){let{nextEl:e,prevEl:r}=t.navigation;e=(0,u.m)(e),r=(0,u.m)(r);let n=(e,r)=>{e.removeEventListener("click","next"===r?c:o),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach(e=>n(e,"next")),r.forEach(e=>n(e,"prev"))}r({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null},n("init",()=>{!1===t.params.navigation.enabled?m():(d(),s())}),n("toEdge fromEdge lock unlock",()=>{s()}),n("destroy",()=>{p()}),n("enable disable",()=>{let{nextEl:e,prevEl:r}=t.navigation;if(e=(0,u.m)(e),r=(0,u.m)(r),t.enabled){s();return}[...e,...r].filter(e=>!!e).forEach(e=>e.classList.add(t.params.navigation.lockClass))}),n("click",(e,r)=>{let{nextEl:n,prevEl:l}=t.navigation;n=(0,u.m)(n),l=(0,u.m)(l);let a=r.target,s=l.includes(a)||n.includes(a);if(t.isElement&&!s){let e=r.path||r.composedPath&&r.composedPath();e&&(s=e.find(e=>n.includes(e)||l.includes(e)))}if(t.params.navigation.hideOnClick&&!s){let e;if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===a||t.pagination.el.contains(a)))return;n.length?e=n[0].classList.contains(t.params.navigation.hiddenClass):l.length&&(e=l[0].classList.contains(t.params.navigation.hiddenClass)),!0===e?i("navigationShow"):i("navigationHide"),[...n,...l].filter(e=>!!e).forEach(e=>e.classList.toggle(t.params.navigation.hiddenClass))}});let m=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),s()},disable:m,update:s,init:d,destroy:p})}function m(e){let{swiper:t,extendParams:r,on:n}=e;r({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,l=!1;function a(){let e;let r=t.thumbs.swiper;if(!r||r.destroyed)return;let n=r.clickedIndex,i=r.clickedSlide;i&&i.classList.contains(t.params.thumbs.slideThumbActiveClass)||null==n||(e=r.params.loop?parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10):n,t.params.loop?t.slideToLoop(e):t.slideTo(e))}function s(){let{thumbs:e}=t.params;if(i)return!1;i=!0;let r=t.constructor;if(e.swiper instanceof r)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if((0,u.l)(e.swiper)){let n=Object.assign({},e.swiper);Object.assign(n,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new r(n),l=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",a),!0}function o(e){let r=t.thumbs.swiper;if(!r||r.destroyed)return;let n="auto"===r.params.slidesPerView?r.slidesPerViewDynamic():r.params.slidesPerView,i=1,l=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),r.slides.forEach(e=>e.classList.remove(l)),r.params.loop||r.params.virtual&&r.params.virtual.enabled)for(let e=0;e<i;e+=1)(0,u.e)(r.slidesEl,`[data-swiper-slide-index="${t.realIndex+e}"]`).forEach(e=>{e.classList.add(l)});else for(let e=0;e<i;e+=1)r.slides[t.realIndex+e]&&r.slides[t.realIndex+e].classList.add(l);let a=t.params.thumbs.autoScrollOffset,s=a&&!r.params.loop;if(t.realIndex!==r.realIndex||s){let i,l;let o=r.activeIndex;if(r.params.loop){let e=r.slides.find(e=>e.getAttribute("data-swiper-slide-index")===`${t.realIndex}`);i=r.slides.indexOf(e),l=t.activeIndex>t.previousIndex?"next":"prev"}else l=(i=t.realIndex)>t.previousIndex?"next":"prev";s&&(i+="next"===l?a:-1*a),r.visibleSlidesIndexes&&0>r.visibleSlidesIndexes.indexOf(i)&&(r.params.centeredSlides?i=i>o?i-Math.floor(n/2)+1:i+Math.floor(n/2)-1:i>o&&r.params.slidesPerGroup,r.slideTo(i,e?0:void 0))}}t.thumbs={swiper:null},n("beforeInit",()=>{let{thumbs:e}=t.params;if(e&&e.swiper){if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){let r=(0,d.g)(),n=()=>{let n="string"==typeof e.swiper?r.querySelector(e.swiper):e.swiper;if(n&&n.swiper)e.swiper=n.swiper,s(),o(!0);else if(n){let r=`${t.params.eventsPrefix}init`,i=l=>{e.swiper=l.detail[0],n.removeEventListener(r,i),s(),o(!0),e.swiper.update(),t.update()};n.addEventListener(r,i)}return n},i=()=>{!t.destroyed&&(n()||requestAnimationFrame(i))};requestAnimationFrame(i)}else s(),o(!0)}}),n("slideChange update resize observerUpdate",()=>{o()}),n("setTransition",(e,r)=>{let n=t.thumbs.swiper;n&&!n.destroyed&&n.setTransition(r)}),n("beforeDestroy",()=>{let e=t.thumbs.swiper;e&&!e.destroyed&&l&&e.destroy()}),Object.assign(t.thumbs,{init:s,update:o})}r(3754),r(2119),r(4919);var h=r(6226),f=r(4091);function g(e){return void 0!==e.children}function v(e){return void 0!==e.text}!function(e){e[e["heading-one"]=0]="heading-one",e[e["heading-two"]=1]="heading-two",e[e["heading-three"]=2]="heading-three",e[e["heading-four"]=3]="heading-four",e[e["heading-five"]=4]="heading-five",e[e["heading-six"]=5]="heading-six",e[e.table_head=6]="table_head"}(n||(n={}));var b={"heading-one":"h1","heading-two":"h2","heading-three":"h3","heading-four":"h4","heading-five":"h5","heading-six":"h6",class:"class",link:"a",image:"img",iframe:"iframe",video:"video","bulleted-list":"ul","numbered-list":"ol","list-item":"li","list-item-child":"list_item_child",table:"table",table_head:"table_head",table_body:"table_body",table_row:"table_row",table_cell:"table_cell",table_header_cell:"table_header_cell","block-quote":"blockquote",paragraph:"p",bold:"bold",italic:"italic",underline:"underline",code:"code","code-block":"code_block"},x=r(7391),w=r.n(x);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}function E(e){var t=e.url;return a().createElement("audio",{style:{display:"block",maxWidth:"100%",height:"auto"},src:t,controls:!0},a().createElement("p",null,"Your browser doesn't support HTML5 audio. Here is a"," ",a().createElement("a",{href:t},"link to the audio")," instead."))}function k(e){var t=e.src,r=e.width,n=e.height,i=e.altText,l=e.title,s=r&&r>0,o=n&&n>0;return a().createElement("img",Object.assign({loading:"lazy",src:w()(t)},s&&{width:r},o&&{height:n},{alt:i,title:l}))}function $(e){var t=e.src,r=e.width,n=e.height,i=e.title;return a().createElement("video",{src:w()(t),controls:!0,width:r||"100%",height:n||"100%",title:i},a().createElement("p",null,"Your browser doesn't support HTML5 video. Here is a"," ",a().createElement("a",{href:t},"link to the video")," instead."))}function P(e){return e.mimeType,a().createElement(l.Fragment,null)}var _={a:function(e){var t=e.children,r=j(e,["children"]),n=r.href,i=r.rel,l=r.id,s=r.title,o=r.openInNewTab,c=r.className,d={};return i&&(d.rel=i),l&&(d.id=l),s&&(d.title=s),c&&(d.className=c),o&&(d.target="_blank"),a().createElement("a",Object.assign({href:w()(n)},d),t)},class:function(e){var t=e.className,r=e.children;return a().createElement("div",{className:t},r)},video:$,img:k,iframe:function(e){var t=e.url;return a().createElement("div",{style:{position:"relative",overflow:"hidden",width:"100%",paddingTop:"56.25%"}},a().createElement("iframe",{style:{position:"absolute",top:0,bottom:0,right:0,left:0,width:"100%",height:"100%"},src:w()(t),loading:"lazy",allow:"fullscreen",frameBorder:"0",referrerPolicy:"no-referrer"}))},blockquote:function(e){var t=e.children;return a().createElement("blockquote",null,t)},ul:function(e){var t=e.children;return a().createElement("ul",null,t)},ol:function(e){var t=e.children;return a().createElement("ol",null,t)},li:function(e){var t=e.children;return a().createElement("li",null,t)},p:function(e){var t=e.children;return a().createElement("p",null,t)},h1:function(e){var t=e.children;return a().createElement("h1",null,t)},h2:function(e){var t=e.children;return a().createElement("h2",null,t)},h3:function(e){var t=e.children;return a().createElement("h3",null,t)},h4:function(e){var t=e.children;return a().createElement("h4",null,t)},h5:function(e){var t=e.children;return a().createElement("h5",null,t)},h6:function(e){var t=e.children;return a().createElement("h6",null,t)},table:function(e){var t=e.children;return a().createElement("table",null,t)},table_head:function(e){var t=e.children;return a().createElement("thead",null,t)},table_body:function(e){var t=e.children;return a().createElement("tbody",null,t)},table_row:function(e){var t=e.children;return a().createElement("tr",null,t)},table_cell:function(e){var t=e.children;return a().createElement("td",null,t)},table_header_cell:function(e){var t=e.children;return a().createElement("th",null,t)},bold:function(e){var t=e.children;return a().createElement("b",null,t)},italic:function(e){var t=e.children;return a().createElement("i",null,t)},underline:function(e){var t=e.children;return a().createElement("u",null,t)},code:function(e){var t=e.children;return a().createElement("code",null,t)},code_block:function(e){var t=e.children;return a().createElement("pre",{style:{whiteSpace:"pre",wordWrap:"break-word",overflowX:"auto",WebkitOverflowScrolling:"touch",fontFamily:"monospace"}},t)},list_item_child:function(e){var t=e.children;return a().createElement(a().Fragment,null,t)},Asset:{audio:function(e){return a().createElement(E,Object.assign({},e,{url:e.url}))},image:function(e){return a().createElement(k,Object.assign({},e,{src:e.url}))},video:function(e){return a().createElement($,Object.assign({},e,{src:e.url}))},font:P,application:P,model:P,text:P},embed:{},link:{}};function O(e){var t=e.textNode,r=e.renderers,n=e.shouldSerialize,i=t.text,l=t.bold,s=t.italic,o=t.underline,c=t.code,d=n?function(e){if(e.includes("\n")){var t=e.split("\n");return t.map(function(e,r){return a().createElement(a().Fragment,{key:r},e,r===t.length-1?null:a().createElement("br",null))})}return e}(i):i,u=null==r?void 0:r.bold,p=null==r?void 0:r.italic,m=null==r?void 0:r.underline,h=null==r?void 0:r.code;return l&&u&&(d=a().createElement(u,null,d)),s&&p&&(d=a().createElement(p,null,d)),o&&m&&(d=a().createElement(m,null,d)),c&&h&&(d=a().createElement(h,null,d)),a().createElement(a().Fragment,null,d)}function C(e){var t=e.node,r=e.parent,n=e.renderers,i=e.references;if(v(t)){var s=t.text,o=r&&g(r)&&"code-block"!==r.type;return a().createElement(O,{textNode:y({},t,{text:s}),renderers:n,shouldSerialize:o})}return g(t)?a().createElement(S,{element:t,renderers:n,references:i}):(t.type,a().createElement(l.Fragment,null))}function S(e){var t=e.element,r=e.renderers,i=e.references,s=t.children,o=t.type,c=j(t,["children","type"]),d=c.nodeId,u=c.nodeType;if(o in n&&(s.length>1?!(s.filter(function e(t){return!!v(t)&&""!==t.text||!!g(t)&&(t.children=t.children.filter(e)).length}).length>0):""===s[0].text))return a().createElement(l.Fragment,null);var p=d&&u,m=p?null==i?void 0:i.filter(function(e){return e.id===d})[0]:null;if(p&&"Asset"!==u){var h,f,x,w="link"===o?null==r?void 0:null==(f=r.link)?void 0:f[u]:null==r?void 0:null==(x=r.embed)?void 0:x[u];if(void 0===w)return console.warn("[@graphcms/rich-text-react-renderer]: No renderer found for custom "+o+" nodeType "+u+"."),a().createElement(l.Fragment,null);h=w}if(p&&"Asset"===u){var E=null==r?void 0:null==(k=r.Asset)?void 0:k[null==m?void 0:m.mimeType];if(void 0!==E)h=E;else{var k,$,P=null==m?void 0:m.mimeType.split("/")[0];h=null==r?void 0:null==($=r.Asset)?void 0:$[P]}}var _=p?h:null==r?void 0:r[b[o]],O=y({},c,m);return _?a().createElement(_,Object.assign({},O),a().createElement(N,{content:s,renderers:r,references:i,parent:t})):a().createElement(l.Fragment,null)}function N(e){var t=e.content,r=e.references,n=e.renderers,i=e.parent,l=Array.isArray(t)?t:t.children;return a().createElement(a().Fragment,null,l.map(function(e,t){return a().createElement(C,{node:e,parent:i||null,renderers:n,references:r,key:t})}))}function T(e){var t=e.content,r=e.renderers,n=e.references,i=y({},null==_?void 0:_.Asset,null==r?void 0:r.Asset),l=y({},_,r,{Asset:i});return a().createElement(N,{content:t,renderers:l,references:n})}var q=r(3296);let R=({data:e})=>{let t=e.images||[],[r,n]=(0,l.useState)(null),a=(0,q.x)(e=>e.addToCart),[s,o]=(0,l.useState)(1),d=e=>1===e?"штука":e>=2&&e<=4?"штуки":e>=5&&e<=20?"штук":e%10==1?"штука":e%10>=2&&e%10<=4?"штуки":"штук";return(0,i.jsxs)(A,{children:[(0,i.jsxs)(L,{children:[i.jsx(M,{children:i.jsx(c.tq,{spaceBetween:20,slidesPerView:1,navigation:!0,thumbs:{swiper:r},modules:[p,m],style:{width:"100%",height:"100%"},children:t.length>0?t.map((t,r)=>i.jsx(c.o5,{children:i.jsx(z,{children:i.jsx("img",{src:"http://127.0.0.1:1337"+t.url,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"}})})},t.id||r)):i.jsx(c.o5,{children:i.jsx(z,{children:i.jsx("img",{src:"/placeholder.png",alt:"placeholder",style:{width:"100%",height:"100%",objectFit:"cover"}})})})})}),i.jsx(B,{children:i.jsx(c.tq,{onSwiper:n,spaceBetween:20,slidesPerView:Math.min(t.length,5),watchSlidesProgress:!0,modules:[m],style:{width:"100%",height:"120px"},children:t.map((t,r)=>i.jsx(c.o5,{children:i.jsx(U,{children:i.jsx(h.default,{src:"http://127.0.0.1:1337"+t.url,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"},width:150,height:150})})},t.id||r))})})]}),i.jsx(I,{children:(0,i.jsxs)("div",{className:"content",children:[i.jsx("p",{className:"title",children:e.title}),(0,i.jsxs)("p",{className:"price",children:[e.price," руб."]}),i.jsx(T,{content:e.description,renderers:{p:({children:e})=>i.jsx("p",{className:"description-paragraph",children:e})}}),(0,i.jsxs)("p",{className:"category",children:["Раздел: ",e?.categories[0].title," ","   <   "," ",e?.tags[0].title]}),(0,i.jsxs)("p",{className:"quantity",children:["В наличии: ",(0,i.jsxs)("span",{children:[e.stock," ",d(e.stock)]})]}),(0,i.jsxs)("p",{className:"info",children:["Размер: ",i.jsx("span",{children:e.size})]}),(0,i.jsxs)("p",{className:"info",children:["Материал: ",i.jsx("span",{children:e.material})]}),(0,i.jsxs)("p",{className:"info",children:["Плотность: ",i.jsx("span",{children:e.density})]}),(0,i.jsxs)("p",{className:"info",children:["Количество в наборе: ",(0,i.jsxs)("span",{children:[e.quantityInPack," ",d(e.quantityInPack)]})]}),(0,i.jsxs)(F,{children:[(0,i.jsxs)("div",{className:"quantityContainer",children:[i.jsx("button",{className:"quantity-button",onClick:()=>{s>1&&o(s-1)},children:i.jsx("svg",{width:"36",height:"38",viewBox:"0 0 36 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("line",{x1:"30.4665",y1:"19.166",x2:"5.65807",y2:"19.166",stroke:"black"})})}),i.jsx("span",{className:"quantity-value",children:s}),i.jsx("button",{className:"quantity-button",onClick:()=>{s<e.stock&&o(s+1)},children:(0,i.jsxs)("svg",{width:"37",height:"38",viewBox:"0 0 37 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("line",{x1:"18.6115",y1:"6",x2:"18.6115",y2:"32.3077",stroke:"black"}),i.jsx("line",{x1:"30.9752",y1:"19.166",x2:"6.16677",y2:"19.166",stroke:"black"})]})})]}),i.jsx("button",{className:"button",onClick:()=>{a({productId:e.id,title:e.title,price:e.price,image:e.images[0]?.url},s)},children:"Добавить в корзину"})]})]})})]})},A=o.ZP.div`    display: flex;
    padding: ${(0,s.rm)(90)} ${(0,s.rm)(130)};
    gap: ${(0,s.rm)(60)};
`,L=o.ZP.div`
    flex: 1.2;
    display: flex;
    flex-direction: column;
    align-items: center;
`,F=o.ZP.div`
    display: flex;
    gap: ${(0,s.rm)(30)};
    align-items: center;
    margin-top: ${(0,s.rm)(30)};

    .quantityContainer{
        display: flex;
        align-items: center;
        gap: ${(0,s.rm)(33)};

        .quantity-value{
            color: ${s.O9.black100};
            font-size: ${(0,s.rm)(32)};
            ${(0,f.cn)(400)};
            margin-top: ${(0,s.rm)(10)};
            margin-left: ${(0,s.rm)(10)};
            width: ${(0,s.rm)(50)};
            text-align: center;
        }

        .quantity-button{
            width: ${(0,s.rm)(35)};
            height: ${(0,s.rm)(35)};
            background: transparent;
            border: none;
            cursor: pointer;
        }
    }

    .button{
        padding: ${(0,s.rm)(13)} ${(0,s.rm)(22)};
        background: #A6A6A6;
        border-radius: ${(0,s.rm)(15)};
        color: ${s.O9.white100};
        font-size: ${(0,s.rm)(24)};
        margin-top: ${(0,s.rm)(15)};
        ${(0,f.cn)(500)};
        cursor: pointer;

        transition: opacity 0.3s ease;

        &:hover{
            opacity: 0.8;
        }
    }
`,I=o.ZP.div`
    flex: 1.8;
    
    .content{
        display: flex;
        flex-direction: column;
        width: ${(0,s.rm)(750)};
        padding-top: ${(0,s.rm)(20)};

        .title{
            font-size: ${(0,s.rm)(36)};
            ${(0,f.cn)(400)};
            margin-bottom: ${(0,s.rm)(10)};
            color: ${s.O9.black100};
        }

        .price{
            font-size: ${(0,s.rm)(36)};
            ${(0,f.cn)(500)};
            margin-bottom: ${(0,s.rm)(25)};
            color: ${s.O9.black100};
        }
        
        .description-paragraph {
            margin-bottom: ${(0,s.rm)(15)};
            font-size: ${(0,s.rm)(20)};
            ${(0,f.cn)(400)};
            color: #555555;
        }

        .category{
            color: #949494;
            font-size: ${(0,s.rm)(24)};
            ${(0,f.cn)(400)};
            margin-bottom: ${(0,s.rm)(16)};
        }

        .quantity{
            color: ${s.O9.black100};
            font-size: ${(0,s.rm)(24)};
            ${(0,f.cn)(400)};
            margin-bottom: ${(0,s.rm)(16)};

            span{
                color: #555555;
                font-size: ${(0,s.rm)(24)};
                ${(0,f.cn)(400)};
            }
        }

        .info{
            color: ${s.O9.black100};
            font-size: ${(0,s.rm)(20)};
            ${(0,f.cn)(400)};
            margin-bottom: ${(0,s.rm)(12)};

            span{
                color: #555555;
                font-size: ${(0,s.rm)(20)};
                ${(0,f.cn)(400)};
            }
        }
    }
`,M=o.ZP.div`
    width: 100%;
    max-width: ${(0,s.rm)(680)};
    height: ${(0,s.rm)(680)};
    border-radius: ${(0,s.rm)(5)};
    background: #e0e0e0;
    margin-bottom: ${(0,s.rm)(30)};
    overflow: hidden;
    position: relative;


    .swiper-button-next::after {
        content: '';
        display: block;
        width: ${(0,s.rm)(15)};
        height: ${(0,s.rm)(34)};
        background: url('data:image/svg+xml;utf8,<svg width="15" height="34" viewBox="0 0 15 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L13 17L2 32" stroke="%23919191" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>') center/contain no-repeat;
        background-size: contain;
    }
    .swiper-button-prev::after {
        content: '';
        display: block;
        width: ${(0,s.rm)(15)};
        height: ${(0,s.rm)(34)};
        background: url('data:image/svg+xml;utf8,<svg width="15" height="34" viewBox="0 0 15 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L2 17L13 32" stroke="%23919191" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>') center/contain no-repeat;
        background-size: contain;
    }

    .swiper-button-next.swiper-button-disabled,
    .swiper-button-prev.swiper-button-disabled {
        opacity: 0.3;
        pointer-events: none;
    }
`,z=o.ZP.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,B=o.ZP.div`
    width: 100%;
    max-width: ${(0,s.rm)(680)};
    .swiper {
        height: ${(0,s.rm)(120)};
    }
`,U=o.ZP.div`
    width: ${(0,s.rm)(150)};
    height: ${(0,s.rm)(150)};
    border-radius: ${(0,s.rm)(5)};
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`},8585:(e,t,r)=>{"use strict";var n=r(1085);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}})},1085:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return a},RedirectType:function(){return n.RedirectType},notFound:function(){return i.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(3953),i=r(6399);class l extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class a extends URLSearchParams{append(){throw new l}delete(){throw new l}set(){throw new l}sort(){throw new l}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return i},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function i(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3953:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return o},getRedirectStatusCodeFromError:function(){return h},getRedirectTypeFromError:function(){return m},getURLFromRedirectError:function(){return p},isRedirectError:function(){return u},permanentRedirect:function(){return d},redirect:function(){return c}});let i=r(4580),l=r(2934),a=r(8586),s="NEXT_REDIRECT";function o(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let n=Error(s);n.digest=s+";"+t+";"+e+";"+r+";";let l=i.requestAsyncStorage.getStore();return l&&(n.mutableCookies=l.mutableCookies),n}function c(e,t){void 0===t&&(t="replace");let r=l.actionAsyncStorage.getStore();throw o(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let r=l.actionAsyncStorage.getStore();throw o(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function u(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,i]=e.digest.split(";",4),l=Number(i);return t===s&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(l)&&l in a.RedirectStatusCode}function p(e){return u(e)?e.digest.split(";",3)[2]:null}function m(e){if(!u(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function h(e){if(!u(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4375:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(9510),i=r(8570);let l=(0,i.createProxy)(String.raw`/Users/jelmond/projects/masterPrintClient/next14-starter/src/components/CanBeInteresting/CanBeInteresting.tsx#CanBeInteresting`),a=(0,i.createProxy)(String.raw`/Users/jelmond/projects/masterPrintClient/next14-starter/src/views/ProductView/ProductView.tsx#ProductView`);var s=r(8585);async function o({params:e}){let t=await fetch(`http://127.0.0.1:1337/api/products?filters[id][$eq]=${e.id}&populate=*`,{cache:"no-store"});if(!t.ok)throw Error("Failed to fetch");let r=await t.json(),i=r?.data?.[0];if(!i)return(0,s.notFound)();let o=await fetch(`http://127.0.0.1:1337/api/getSimilarProducts/${e.id}`,{cache:"no-store"}),c=await o.json();return(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[n.jsx(a,{data:i}),n.jsx(l,{data:c,title:"Подобные товары"})]})}},4919:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[276,805,589,49],()=>r(2649));module.exports=n})();