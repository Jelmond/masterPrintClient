'use client'

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { colors, media, rm } from "@/styles"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from "next/image";
import { fontGeist } from "@/styles/fonts";
import { RichText } from '@graphcms/rich-text-react-renderer';
import { useCartStore } from "@/store/cartStore";
import { CanBeInteresting } from "@/components/CanBeInteresting/CanBeInteresting";

const IMAGE_ZOOM = 1.45;
/** Размер «лупы» на экране (не зум): прямоугольник */
const LENS_WIDTH_PX = 400;
const LENS_HEIGHT_PX = 290;

/** Главное фото с прямоугольной линзой при наведении (только fine pointer + hover) */
function ProductMainImageWithLens({ src, alt }: { src: string; alt: string }) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const [natural, setNatural] = useState({ w: 0, h: 0 });
    const [lens, setLens] = useState<{
        left: number;
        top: number;
        width: number;
        height: number;
        bgX: number;
        bgY: number;
        bgW: number;
        bgH: number;
    } | null>(null);
    const [enableLens, setEnableLens] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
        const apply = () => setEnableLens(mq.matches);
        apply();
        mq.addEventListener("change", apply);
        return () => mq.removeEventListener("change", apply);
    }, []);

    const updateLens = useCallback(
        (clientX: number, clientY: number) => {
            const el = wrapRef.current;
            if (!el || !natural.w) return;
            const rect = el.getBoundingClientRect();
            const W = rect.width;
            const H = rect.height;
            const mx = clientX - rect.left;
            const my = clientY - rect.top;

            const nw = natural.w;
            const nh = natural.h;
            const scale = Math.max(W / nw, H / nh);
            const dispW = nw * scale;
            const dispH = nh * scale;
            const offX = (W - dispW) / 2;
            const offY = (H - dispH) / 2;

            let lensW = LENS_WIDTH_PX;
            let lensH = LENS_HEIGHT_PX;
            if (W < lensW + 8) lensW = Math.max(80, W - 8);
            if (H < lensH + 8) lensH = Math.max(80, H - 8);

            const halfW = lensW / 2;
            const halfH = lensH / 2;
            /* Центр линзы строго под курсором — иначе у краёв контейнера «лупа» сдвигается
               и обрезает увеличенные участки у реальных краёв фото (object-fit: cover). */
            const cx = mx;
            const cy = my;

            const bgW = dispW * IMAGE_ZOOM;
            const bgH = dispH * IMAGE_ZOOM;
            const bgX = halfW - (cx - offX) * IMAGE_ZOOM;
            const bgY = halfH - (cy - offY) * IMAGE_ZOOM;

            setLens({
                left: cx - halfW,
                top: cy - halfH,
                width: lensW,
                height: lensH,
                bgX,
                bgY,
                bgW,
                bgH,
            });
        },
        [natural]
    );

    const onMouseMove = (e: React.MouseEvent) => {
        if (!enableLens) return;
        updateLens(e.clientX, e.clientY);
    };

    const onMouseEnter = (e: React.MouseEvent) => {
        if (!enableLens || !natural.w) return;
        updateLens(e.clientX, e.clientY);
    };

    const onMouseLeave = () => setLens(null);

    return (
        <MagnifyWrap
            ref={wrapRef}
            onMouseMove={enableLens ? onMouseMove : undefined}
            onMouseEnter={enableLens ? onMouseEnter : undefined}
            onMouseLeave={enableLens ? onMouseLeave : undefined}
            $canLens={enableLens}
        >
            <img
                src={src}
                alt={alt}
                onLoad={(e) => {
                    const t = e.currentTarget;
                    setNatural({ w: t.naturalWidth, h: t.naturalHeight });
                }}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {enableLens && lens && (
                <LensRect
                    aria-hidden
                    style={{
                        left: lens.left,
                        top: lens.top,
                        width: lens.width,
                        height: lens.height,
                        backgroundImage: `url(${JSON.stringify(src)})`,
                        backgroundSize: `${lens.bgW}px ${lens.bgH}px`,
                        backgroundPosition: `${lens.bgX}px ${lens.bgY}px`,
                    }}
                />
            )}
        </MagnifyWrap>
    );
}

function buildProductGallery(data: any): { id: string | number; url: string }[] {
    const base = process.env.NEXT_PUBLIC_STRAPI_URL || "";
    const items: { id: string | number; url: string }[] = [];
    const seenPath = new Set<string>();

    const push = (rawUrl: unknown, id: string | number) => {
        if (rawUrl == null || typeof rawUrl !== "string") return;
        const pathKey = rawUrl.replace(/^https?:\/\/[^/]+/i, "");
        if (seenPath.has(pathKey)) return;
        seenPath.add(pathKey);
        const full =
            rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
                ? rawUrl
                : `${base}${rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`}`;
        items.push({ id, url: full });
    };

    if (data?.preview?.url) {
        push(data.preview.url, data.preview.id ?? "preview");
    }

    const imgs = Array.isArray(data?.images) ? data.images : [];
    imgs.forEach((img: any, idx: number) => {
        if (img?.url) push(img.url, img.id ?? idx);
    });

    return items;
}

export const ProductView = ({ data }: { data: any }) => {
    const galleryItems = useMemo(() => buildProductGallery(data), [data]);

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const addToCart = useCartStore(state => state.addToCart);

    /** Относительный путь для корзины: сначала preview, затем первая картинка галереи */
    const cartImageRel =
        [data?.preview?.url, Array.isArray(data?.images) ? data.images[0]?.url : undefined].find(
            (u): u is string => typeof u === "string" && u.length > 0
        ) ?? "";

    const handleAddToCart = () => {
        // Prevent adding if stock is 0 or undefined
        if (data.stock !== undefined && data.stock <= 0) {
            return;
        }
        
        if (!data.slug) {
            console.error('Product missing slug:', data);
            return;
        }
        
        addToCart({
            productSlug: data.slug,
            title: data.title,
            price: data.price,
            image: cartImageRel,
            stock: data.stock
        }, quantity);
    };
    
    const isOutOfStock = data.stock !== undefined && data.stock <= 0;

    const [quantity, setQuantity] = useState(1);

    const getWordForCount = (count: number) => {
        if (count === 1) return 'набор';
        if (count >= 2 && count <= 4) return 'набора';
        if (count >= 5 && count <= 20) return 'наборов';
        if (count % 10 === 1) return 'набор';
        if (count % 10 >= 2 && count % 10 <= 4) return 'набора';
        return 'наборов';
    }
    
    return (
        <StyledProductView>
            <Left>
                <StyledSwiper>
                    <Swiper
                        className="product-main-swiper"
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        thumbs={
                            galleryItems.length > 1 && thumbsSwiper
                                ? { swiper: thumbsSwiper }
                                : undefined
                        }
                        modules={[Navigation, Thumbs]}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {galleryItems.length > 0 ? (
                            galleryItems.map((item, idx) => (
                                <SwiperSlide key={item.id ?? idx}>
                                    <ImageBox>
                                        <ProductMainImageWithLens src={item.url} alt={data.title} />
                                    </ImageBox>
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <ImageBox>
                                    <ProductMainImageWithLens src="/placeholder.png" alt="placeholder" />
                                </ImageBox>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </StyledSwiper>
                {/* Миниатюры — только если больше одного кадра */}
                {galleryItems.length > 1 && (
                    <ThumbsWrapper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={20}
                            slidesPerView={Math.min(galleryItems.length, 5)}
                            watchSlidesProgress
                            modules={[Thumbs]}
                            style={{ width: '100%' }}
                            breakpoints={{
                                320: {
                                    slidesPerView: Math.min(galleryItems.length, 3),
                                    spaceBetween: 10,
                                },
                                576: {
                                    slidesPerView: Math.min(galleryItems.length, 4),
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: Math.min(galleryItems.length, 5),
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {galleryItems.map((item, idx) => (
                                <SwiperSlide key={`thumb-${item.id ?? idx}`}>
                                    <Thumb>
                                        <Image
                                            src={item.url}
                                            alt={data.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            width={150}
                                            height={150}
                                        />
                                    </Thumb>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </ThumbsWrapper>
                )}
            </Left>
            <Right>
                <div className="content">
                    <p className="title">{data.title}</p>
                    <p className="price">{(data.price * quantity).toLocaleString('ru-RU')} руб.</p>
                    <RichText 
                        content={data.description} 
                        renderers={{
                            p: ({ children }) => <p className="description-paragraph">{children}</p>,
                        }}
                    />
                    {data?.categories?.length > 0 && data?.tags?.length > 0 && <p className="category">Раздел: {data?.categories[0].title} {'   <   '} {data?.tags[0].title}</p>}
                    <p className="quantity">
                        В наличии: <span>{data.stock !== undefined && data.stock > 0 ? `${data.stock} ${getWordForCount(data.stock)}` : 'нет'}</span>
                    </p>
                    {data.articul && (
                        <p className="info">
                            Артикул: <span>{data.articul}</span>
                        </p>
                    )}
                    {data.size && (
                        <p className="info">
                            Размер: <span>{data.size}</span>
                        </p>
                    )}
                    {data.material && (
                        <p className="info">
                            Материал: <span>{data.material}</span>
                        </p>
                    )}
                    {data.density && (
                        <p className="info">
                            Плотность: <span>{data.density}</span>
                        </p>
                    )}
                    {data.quantityInPack && (
                        <p className="info">
                            Количество в наборе: <span>{data.quantityInPack} {getWordForCount(data.quantityInPack)}</span>
                        </p>
                    )}
                    <StyledDisclaimer>
                        Гарантийный срок, сведения о подтверждении соответствия и иную информацию о товаре можно запросить у продавца.
                    </StyledDisclaimer>
                    <StyledActions>
                        <div className="quantityContainer">
                            <button className="quantity-button" onClick={() => {
                                if (quantity > 1) {
                                    setQuantity(quantity - 1);
                                }
                            }}>
                                <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="30.4665" y1="19.166" x2="5.65807" y2="19.166" stroke="black"/>
                                </svg>
                            </button>
                            <span className="quantity-value">{quantity}</span>
                            <button className="quantity-button" onClick={() => {
                                if (quantity < data.stock) {
                                    setQuantity(quantity + 1);
                                }
                            }}>
                                <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="18.6115" y1="6" x2="18.6115" y2="32.3077" stroke="black"/>
                                    <line x1="30.9752" y1="19.166" x2="6.16677" y2="19.166" stroke="black"/>
                                </svg>
                            </button>
                        </div>
                        <StyledAddToCartButton 
                            onClick={handleAddToCart}
                            disabled={isOutOfStock}
                            $isOutOfStock={isOutOfStock}
                        >
                            <span className="button-content">
                                {!isOutOfStock && (
                                    <svg className="cart-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                )}
                                <span className="button-text">
                                    {isOutOfStock ? 'Нет в наличии' : 'Добавить в корзину'}
                                </span>
                            </span>
                        </StyledAddToCartButton>
                    </StyledActions>
                </div>
            </Right>
        </StyledProductView>
    )
}

const StyledProductView = styled.div`
    display: flex;
    padding: ${rm(90)} ${rm(130)};
    gap: ${rm(60)};

    ${media.lg`
        padding: ${rm(80)} ${rm(80)} ${rm(60)} ${rm(80)};
        gap: ${rm(40)};
    `}

    ${media.md`
        flex-direction: column;
        padding: ${rm(80)} ${rm(40)} ${rm(40)} ${rm(40)};
        gap: ${rm(30)};
    `}

    ${media.xsm`
        padding: ${rm(80)} ${rm(20)} ${rm(20)} ${rm(20)};
        gap: ${rm(20)};
    `}
`
const Left = styled.div`
    flex: 1.2;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.md`
        width: 100%;
    `}
`

const StyledDisclaimer = styled.p`
    margin-top: ${rm(24)};
    margin-bottom: 0;
    font-size: ${rm(14)};
    ${fontGeist(400)};
    color: #666;
    line-height: 1.5;
    max-width: ${rm(520)};

    ${media.md`
        font-size: ${rm(13)};
        margin-top: ${rm(20)};
    `}

    ${media.xsm`
        font-size: ${rm(12)};
        margin-top: ${rm(16)};
    `}
`

const StyledActions = styled.div`
    display: flex;
    gap: ${rm(30)};
    align-items: center;
    margin-top: ${rm(30)};

    ${media.md`
        gap: ${rm(20)};
        margin-top: ${rm(20)};
    `}

    ${media.xsm`
        flex-direction: column;
        align-items: stretch;
        gap: ${rm(15)};
        margin-top: ${rm(15)};
    `}

    .quantityContainer{
        display: flex;
        align-items: center;
        gap: ${rm(33)};

        ${media.md`
            gap: ${rm(25)};
        `}

        ${media.xsm`
            gap: ${rm(20)};
            justify-content: center;
        `}

        .quantity-value{
            color: ${colors.black100};
            font-size: ${rm(32)};
            ${fontGeist(400)};
            margin-top: ${rm(10)};
            margin-left: ${rm(10)};
            width: ${rm(50)};
            text-align: center;

            ${media.md`
                font-size: ${rm(28)};
                width: ${rm(45)};
            `}

            ${media.xsm`
                font-size: ${rm(24)};
                width: ${rm(40)};
                margin-top: 0;
                margin-left: 0;
            `}
        }

        .quantity-button{
            width: ${rm(35)};
            height: ${rm(35)};
            background: transparent;
            border: none;
            cursor: pointer;

            ${media.md`
                width: ${rm(30)};
                height: ${rm(30)};
            `}

            ${media.xsm`
                width: ${rm(28)};
                height: ${rm(28)};
            `}
        }
    }

`

const Right = styled.div`
    flex: 1.8;
    
    ${media.md`
        width: 100%;
    `}
    
    .content{
        display: flex;
        flex-direction: column;
        width: ${rm(750)};
        padding-top: ${rm(20)};

        ${media.lg`
            width: 100%;
            max-width: ${rm(600)};
        `}

        ${media.md`
            width: 100%;
            max-width: 100%;
            padding-top: 0;
        `}

        .title{
            font-size: ${rm(36)};
            ${fontGeist(400)};
            margin-bottom: ${rm(10)};
            color: ${colors.black100};

            ${media.md`
                font-size: ${rm(28)};
            `}

            ${media.xsm`
                font-size: ${rm(24)};
            `}
        }

        .price{
            font-size: ${rm(36)};
            ${fontGeist(500)};
            margin-bottom: ${rm(25)};
            color: ${colors.black100};

            ${media.md`
                font-size: ${rm(28)};
                margin-bottom: ${rm(20)};
            `}

            ${media.xsm`
                font-size: ${rm(24)};
                margin-bottom: ${rm(15)};
            `}
        }
        
        .description-paragraph {
            margin-bottom: ${rm(15)};
            font-size: ${rm(20)};
            ${fontGeist(400)};
            color: #555555;

            ${media.md`
                font-size: ${rm(18)};
                margin-bottom: ${rm(12)};
            `}

            ${media.xsm`
                font-size: ${rm(16)};
                margin-bottom: ${rm(10)};
            `}
        }

        .category{
            color: #949494;
            font-size: ${rm(24)};
            ${fontGeist(400)};
            margin-bottom: ${rm(16)};

            ${media.md`
                font-size: ${rm(20)};
                margin-bottom: ${rm(12)};
            `}

            ${media.xsm`
                font-size: ${rm(18)};
                margin-bottom: ${rm(10)};
            `}
        }

        .quantity{
            color: ${colors.black100};
            font-size: ${rm(24)};
            ${fontGeist(400)};
            margin-bottom: ${rm(16)};

            ${media.md`
                font-size: ${rm(20)};
                margin-bottom: ${rm(12)};
            `}

            ${media.xsm`
                font-size: ${rm(18)};
                margin-bottom: ${rm(10)};
            `}

            span{
                color: #555555;
                font-size: ${rm(24)};
                ${fontGeist(400)};

                ${media.md`
                    font-size: ${rm(20)};
                `}

                ${media.xsm`
                    font-size: ${rm(18)};
                `}
            }
        }

        .info{
            color: ${colors.black100};
            font-size: ${rm(20)};
            ${fontGeist(400)};
            margin-bottom: ${rm(12)};

            ${media.md`
                font-size: ${rm(18)};
                margin-bottom: ${rm(10)};
            `}

            ${media.xsm`
                font-size: ${rm(16)};
                margin-bottom: ${rm(8)};
            `}

            span{
                color: #555555;
                font-size: ${rm(20)};
                ${fontGeist(400)};

                ${media.md`
                    font-size: ${rm(18)};
                `}

                ${media.xsm`
                    font-size: ${rm(16)};
                `}
            }
        }
    }
`
const StyledSwiper = styled.div`
    width: 100%;
    max-width: ${rm(680)};
    height: ${rm(680)};
    border-radius: ${rm(5)};
    background: #e0e0e0;
    margin-bottom: ${rm(30)};
    /* visible — чтобы прямоугольная лупа могла выходить за край и не обрезалась */
    overflow: visible;
    position: relative;

    .product-main-swiper.swiper {
        overflow: visible !important;
    }

    .product-main-swiper .swiper-wrapper {
        overflow: visible;
    }

    .product-main-swiper .swiper-slide {
        overflow: visible !important;
    }

    ${media.lg`
        max-width: ${rm(600)};
        height: ${rm(600)};
    `}

    ${media.md`
        max-width: 100%;
        height: ${rm(500)};
        margin-bottom: ${rm(20)};
    `}

    ${media.xsm`
        height: ${rm(450)};
        margin-bottom: ${rm(15)};
    `}

    .swiper-button-next::after {
        content: '';
        display: block;
        width: ${rm(15)};
        height: ${rm(34)};
        background: url('data:image/svg+xml;utf8,<svg width="15" height="34" viewBox="0 0 15 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L13 17L2 32" stroke="%23919191" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>') center/contain no-repeat;
        background-size: contain;
    }
    .swiper-button-prev::after {
        content: '';
        display: block;
        width: ${rm(15)};
        height: ${rm(34)};
        background: url('data:image/svg+xml;utf8,<svg width="15" height="34" viewBox="0 0 15 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L2 17L13 32" stroke="%23919191" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>') center/contain no-repeat;
        background-size: contain;
    }

    .swiper-button-next.swiper-button-disabled,
    .swiper-button-prev.swiper-button-disabled {
        opacity: 0.3;
        pointer-events: none;
    }
`
const ImageBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
`

const MagnifyWrap = styled.div<{ $canLens: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;
    cursor: ${(p) => (p.$canLens ? "crosshair" : "default")};
`

const LensRect = styled.div`
    position: absolute;
    pointer-events: none;
    z-index: 20;
    border-radius: ${rm(6)};
    border: 2px solid rgba(255, 255, 255, 0.95);
    box-shadow:
        inset 0 0 0 1px rgba(0, 0, 0, 0.12),
        0 4px 24px rgba(0, 0, 0, 0.35);
    background-repeat: no-repeat;
    overflow: hidden;
`
const ThumbsWrapper = styled.div`
    width: 100%;
    max-width: ${rm(680)};
    height: ${rm(150)};

    ${media.lg`
        max-width: ${rm(600)};
        height: ${rm(120)};
    `}

    ${media.md`
        max-width: 100%;
        height: ${rm(100)};
    `}

    ${media.xsm`
        height: ${rm(80)};
    `}

    .swiper {
        height: 100%;
    }
`
const Thumb = styled.div`
    width: ${rm(150)};
    height: ${rm(150)};
    border-radius: ${rm(5)};
    overflow: hidden;

    ${media.lg`
        width: ${rm(120)};
        height: ${rm(120)};
    `}

    ${media.md`
        width: ${rm(100)};
        height: ${rm(100)};
    `}

    ${media.xsm`
        width: ${rm(80)};
        height: ${rm(80)};
    `}

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const StyledAddToCartButton = styled.button<{ $isOutOfStock: boolean }>`
    padding: ${rm(18)} ${rm(40)};
    background: ${props => props.$isOutOfStock ? '#A6A6A6' : '#1C1C1C'};
    border-radius: ${rm(8)};
    color: ${colors.white100};
    font-size: ${rm(18)};
    margin-top: ${rm(15)};
    ${fontGeist(500)};
    cursor: ${props => props.$isOutOfStock ? 'not-allowed' : 'pointer'};
    border: none;
    transition: background-color 0.2s ease, opacity 0.2s ease;

    ${media.md`
        font-size: ${rm(16)};
        padding: ${rm(16)} ${rm(32)};
        margin-top: ${rm(12)};
    `}

    ${media.xsm`
        font-size: ${rm(16)};
        padding: ${rm(14)} ${rm(24)};
        margin-top: 0;
        width: 100%;
    `}

    .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${rm(12)};

        ${media.xsm`
            gap: ${rm(8)};
        `}
    }

    .cart-icon,
    .arrow-icon {
        flex-shrink: 0;
    }

    .button-text {
        white-space: nowrap;
    }

    &:hover:not(:disabled) {
        background: ${props => props.$isOutOfStock ? '#A6A6A6' : '#2C2C2C'};
        opacity: 0.9;
    }

    &:active:not(:disabled) {
        opacity: 0.8;
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
