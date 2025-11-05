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
    padding: ${rm(0)} ${rm(50)} ${rm(50)} ${rm(50)};

    ${media.md`
        padding: ${rm(0)} ${rm(30)} ${rm(40)} ${rm(30)};
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
        margin-left: ${rm(80)};

        ${media.md`
            font-size: ${rm(40)};
            margin-left: ${rm(40)};
            margin-bottom: ${rm(40)};
        `}

        ${media.xsm`
            font-size: ${rm(28)};
            margin-left: 0;
            margin-bottom: ${rm(24)};
            text-align: center;
        `}
    }
`;

const StyledGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${rm(50)};
    height: 100%;

    ${media.md`
        gap: ${rm(30)};
        justify-content: center;
    `}

    ${media.xsm`
        gap: ${rm(16)};
        justify-content: center;
    `}

    > * {
        ${media.xsm`
            flex: 0 0 calc(50% - ${rm(8)});
            max-width: calc(50% - ${rm(8)});
        `}
    }
`;
