'use client'

import { useStrapi } from "@/hooks/useStrapi";
import { colors, media, rm } from "@/styles";
import { fontGeist } from "@/styles/fonts";
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
                <StyledCategory key={index}>
                    <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${category?.image[0]?.url}`} alt={category.title} />
                    <p>{category.title}</p>
                    <StyledHiddenLink href={`/catalog/${category.id}`}/>
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

const StyledCategory = styled.div`
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

    p{
        font-size: ${rm(24)};
        ${fontGeist(200)};
        color: ${colors.black100};
        text-align: center;
    }
`

const StyledHiddenLink = styled(Link)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`