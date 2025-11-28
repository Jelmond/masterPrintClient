'use client'

import { useStrapi } from "@/hooks/useStrapi";
import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout";
import { colors, media, rm } from "@/styles";
import { fontGeist } from "@/styles/fonts";
import { BoxSvg } from "@/views/HomeView/screens/animatedSvgs/Box";
import { CardsSvg } from "@/views/HomeView/screens/animatedSvgs/Cards";
import { CardsPostcardsSvg } from "@/views/HomeView/screens/animatedSvgs/CardsPostcards";
import { ConvertsSvg } from "@/views/HomeView/screens/animatedSvgs/Converts";
import { StyledSlideImage } from "@/views/HomeView/screens/CatalogSwiper";
import Link from "next/link";
import styled from "styled-components";

export default function CatalogPage() {

    const { data, error, loading } = useStrapi<{ data: any[] }>({
        path: '/api/categories',
    });

    console.log(data?.data)

    return (
        <StyledCatalogPage>
            {data?.data?.map((category, index) => (
                <StyledCategory href={`/catalog/${category.id}`} key={index}>
                    <StyledSlideImage>
                        {category.icon === 'stickers' && <CardsSvg />}
                        {category.icon === 'box' && <BoxSvg />}
                        {category.icon === 'convert' && <ConvertsSvg />}
                        {category.icon === 'cards' && <CardsPostcardsSvg />}
                    </StyledSlideImage>
                    <span>{category.title}</span>
                </StyledCategory>
            ))}
        </StyledCatalogPage>
    )
}

const StyledCatalogPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 100vh;
    gap: ${rm(60)};
    padding: ${rm(200)};
    position: relative;

    ${media.md`
        padding: ${rm(100)} ${rm(25)} ${rm(100)} ${rm(25)};
    `}
`

const StyledCategory = styled(AnimLink)`
    display: flex;
    flex-direction: column;
    gap: ${rm(50)};
    width: ${rm(300)};
    position: relative;

    img{
        width: 100%;
        height: ${rm(290)};
        object-fit: cover;
    }

    span{
        font-size: ${rm(24)};
        ${fontGeist(200)};
        color: ${colors.black100};
        text-align: center;
    }
`

const StyledHiddenLink = styled(AnimLink)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`