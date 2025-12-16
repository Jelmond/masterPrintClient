'use client'

import { useState } from "react";
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

export const ProductView = ({ data }: { data: any }) => {
    const images = data.images || [];
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    console.log(data)

    const addToCart = useCartStore(state => state.addToCart);

    const handleAddToCart = () => {
        // Prevent adding if stock is 0 or undefined
        if (data.stock !== undefined && data.stock <= 0) {
            return;
        }
        
        addToCart({
            productId: data.id,
            documentId: data.documentId,
            title: data.title,
            price: data.price,
            image: data.images[0]?.url,
            stock: data.stock
        }, quantity);
    };
    
    const isOutOfStock = data.stock !== undefined && data.stock <= 0;

    const [quantity, setQuantity] = useState(1);

    const getWordForCount = (count: number) => {
        if (count === 1) return 'штука';
        if (count >= 2 && count <= 4) return 'штуки';
        if (count >= 5 && count <= 20) return 'штук';
        if (count % 10 === 1) return 'штука';
        if (count % 10 >= 2 && count % 10 <= 4) return 'штуки';
        return 'штук';
    }
    
    return (
        <StyledProductView>
            <Left>
                <StyledSwiper>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Navigation, Thumbs]}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {images.length > 0 ? images.map((img: any, idx: number) => (
                            <SwiperSlide key={img.id || idx}>
                                <ImageBox>
                                    <img
                                        src={process.env.NEXT_PUBLIC_STRAPI_URL + img.url}
                                        alt={data.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </ImageBox>
                            </SwiperSlide>
                        )) : (
                            <SwiperSlide>
                                <ImageBox>
                                    <img
                                        src="/placeholder.png"
                                        alt="placeholder"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </ImageBox>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </StyledSwiper>
                {/* Миниатюры */}
                <ThumbsWrapper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={20}
                        slidesPerView={Math.min(images.length, 5)}
                        watchSlidesProgress
                        modules={[Thumbs]}
                        style={{ width: '100%' }}
                        breakpoints={{
                            320: {
                                slidesPerView: Math.min(images.length, 3),
                                spaceBetween: 10,
                            },
                            576: {
                                slidesPerView: Math.min(images.length, 4),
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: Math.min(images.length, 5),
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {images.map((img: any, idx: number) => (
                            <SwiperSlide key={img.id || idx}>
                                <Thumb>
                                    <Image
                                        src={process.env.NEXT_PUBLIC_STRAPI_URL + img.url}
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
                    <p className="info">
                        Размер: <span>{data.size}</span>
                    </p>
                    <p className="info">
                        Материал: <span>{data.material}</span>
                    </p>
                    <p className="info">
                        Плотность: <span>{data.density}</span>
                    </p>
                    <p className="info">
                        Количество в наборе: <span>{data.quantityInPack} {getWordForCount(data.quantityInPack)}</span>
                    </p>
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
                        <button 
                            className="button" 
                            onClick={handleAddToCart}
                            disabled={isOutOfStock}
                            style={{ 
                                opacity: isOutOfStock ? 0.5 : 1, 
                                cursor: isOutOfStock ? 'not-allowed' : 'pointer' 
                            }}
                        >
                            {isOutOfStock ? 'Нет в наличии' : 'Добавить в корзину'}
                        </button>
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

        .button{
        padding: ${rm(13)} ${rm(22)};
        background: #A6A6A6;
        border-radius: ${rm(15)};
        color: ${colors.white100};
        font-size: ${rm(24)};
        margin-top: ${rm(15)};
        ${fontGeist(500)};
        cursor: pointer;
        border: none;

        transition: opacity 0.3s ease;

        ${media.md`
            font-size: ${rm(20)};
            padding: ${rm(12)} ${rm(20)};
            margin-top: ${rm(12)};
        `}

        ${media.xsm`
            font-size: ${rm(18)};
            padding: ${rm(12)} ${rm(16)};
            margin-top: 0;
            width: 100%;
        `}

        &:hover:not(:disabled){
            opacity: 0.8;
        }
        
        &:disabled{
            opacity: 0.5;
            cursor: not-allowed;
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
    overflow: hidden;
    position: relative;

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
        height: ${rm(300)};
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
