'use client'

import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Link from "next/link"
import Image from "next/image"
import { rm, colors, media } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import { useStrapi } from "@/hooks/useStrapi"
import { useWindowWidth } from "@react-hook/window-size"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"
import { CardsSvg } from "./animatedSvgs/Cards"
import { BoxSvg } from "./animatedSvgs/Box"
import { ConvertsSvg } from "./animatedSvgs/Converts"


export const CatalogSwiper = () => {
    const { data, error, loading } = useStrapi<{ data: any[] }>({
        path: '/api/categories',
    });

    const width = useWindowWidth()

    return (
        <StyledCatalogSwiper>
            <StyledTitle>Наша Продукция</StyledTitle>
            <Swiper
                spaceBetween={30}
                slidesPerView={width > 576 ? 4 : 2.1}
                className="catalog-swiper"
            >
                {data?.data?.map((category, index) => (
                    <SwiperSlide key={category.id}>
                        <StyledSlide href={`/catalog/${category.id}`}>
                            <StyledSlideImage>
                                {/* <Image 
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${category?.image[0]?.url}`}
                                    alt={category?.title}
                                    fill 
                                    style={{ objectFit: 'cover' }} 
                                /> */}
                                {index === 3 && <CardsSvg />}
                                {index === 1 && <BoxSvg />}
                                {index === 2 && <ConvertsSvg />}
                                {index === 0 && <CardsSvg />}
                            </StyledSlideImage>
                            <StyledSlideText>{category?.title}</StyledSlideText>
                        </StyledSlide>
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledCatalogSwiper>
    )
}

const StyledCatalogSwiper = styled.div`
    width: 100%;
    padding: ${rm(40)} 0;
    margin-top: ${rm(100)};

    ${media.lg`
        margin-top: ${rm(80)};
        padding: ${rm(30)} 0;
    `}

    ${media.md`
        margin-top: ${rm(60)};
        padding: ${rm(20)} 0;
    `}

    ${media.xsm`
        margin-top: ${rm(40)};
        padding: 0;
    `}
    
    .swiper-button-next,
    .swiper-button-prev {
        color: ${colors.black100};

        ${media.xsm`
            display: none;
        `}
    }
    
    .swiper-pagination-bullet-active {
        background: ${colors.black100};
    }

    .catalog-swiper{
        padding: 0 ${rm(100)};

        ${media.lg`
            padding: 0 ${rm(60)};
        `}

        ${media.md`
            padding: 0 ${rm(40)};
        `}

        ${media.xsm`
            padding: 0 ${rm(20)};
        `}
    }
`

const StyledSlide = styled(AnimLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
        img{
            transform: scale(1.05);
        }
    }
`

const StyledSlideImage = styled.div`
    position: relative;
    width: 100%;
    height: ${rm(500)};
    border-radius: 10px;
    overflow: hidden;

    ${media.lg`
        height: ${rm(400)};
    `}

    ${media.md`
        height: ${rm(300)};
    `}

    ${media.xsm`
        height: ${rm(200)};
    `}

    img, svg{
        width: 100%;
        height: auto;
        object-fit: cover;
        position: absolute;

        transition: transform 0.3s ease;
    }
`

const StyledSlideText = styled.div`
    margin-top: ${rm(30)};
    ${fontGeist(500)};
    font-size: ${rm(18)};
    text-align: center;
    color: ${colors.black100};

    ${media.md`
        font-size: ${rm(16)};
        margin-top: ${rm(20)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        margin-top: ${rm(15)};
    `}
`

const StyledTitle = styled.h1`
    font-size: ${rm(40)};
    color: #1C1C1C;
    ${fontGeist(800)};
    text-align: center;
    margin-bottom: ${rm(24)};
    padding: 0 ${rm(100)};

    ${media.lg`
        font-size: ${rm(36)};
        padding: 0 ${rm(60)};
        margin-bottom: ${rm(20)};
    `}

    ${media.md`
        font-size: ${rm(32)};
        padding: 0 ${rm(40)};
        margin-bottom: ${rm(18)};
    `}

    ${media.xsm`
        font-size: ${rm(24)};
        padding: 0 ${rm(20)};
        margin-bottom: ${rm(15)};
    `}
`