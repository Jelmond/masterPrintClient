'use client'

import { useEffect, useMemo, useState } from "react";
import styled from "styled-components"
import { useStrapi } from "@/hooks/useStrapi";
import { InterestingProduct } from "../products/InterestingProduct";
import { colors, rm } from "@/styles";
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

    h1 {
        ${fontPoppins(500)};
        font-size: ${rm(50)};
        margin-bottom: ${rm(55)};
        color: ${colors.black100};
        margin-left: ${rm(80)};
    }
`;

const StyledGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${rm(50)};
    height: 100%;
`;
