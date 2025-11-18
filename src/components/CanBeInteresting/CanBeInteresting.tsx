'use client'

import { useEffect, useMemo, useState } from "react";
import styled from "styled-components"
import { useStrapi } from "@/hooks/useStrapi";
import { InterestingProduct } from "../products/InterestingProduct";
import { colors, rm, media } from "@/styles";
import { fontPoppins } from "@/styles/fonts";

interface CanBeInterestingProps {
    data: any;
    title: string;
}

export const CanBeInteresting = ({ data, title }: CanBeInterestingProps) => {

    return (
        <StyledCanBeInteresting>
            <h1>{title}</h1>
            <StyledGrid>
                {data?.data?.map((product: any) => (
                    <InterestingProduct key={product.id} product={product} />
                ))}
            </StyledGrid>
        </StyledCanBeInteresting>
    )
}

const StyledCanBeInteresting = styled.div`
    margin-top: ${rm(60)};
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    padding: ${rm(0)} ${rm(130)} ${rm(50)} ${rm(130)};

    ${media.lg`
        padding: ${rm(0)} ${rm(80)} ${rm(50)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(0)} ${rm(40)} ${rm(40)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(0)} ${rm(20)} ${rm(30)} ${rm(20)};
        margin-top: ${rm(40)};
    `}

    h1 {
        ${fontPoppins(500)};
        font-size: ${rm(50)};
        margin-bottom: ${rm(55)};
        color: ${colors.black100};
        margin-left: 0;
        grid-column: 1 / -1;

        ${media.md`
            font-size: ${rm(40)};
            margin-bottom: ${rm(40)};
        `}

        ${media.xsm`
            font-size: ${rm(28)};
            margin-bottom: ${rm(24)};
            text-align: center;
        `}
    }
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${rm(250)}, 1fr));
    gap: ${rm(50)};
    height: 100%;
    grid-column: 1 / -1;

    ${media.md`
        grid-template-columns: repeat(auto-fill, minmax(${rm(200)}, 1fr));
        gap: ${rm(30)};
    `}

    ${media.xsm`
        grid-template-columns: repeat(2, 1fr);
        gap: ${rm(16)};
    `}
`;
