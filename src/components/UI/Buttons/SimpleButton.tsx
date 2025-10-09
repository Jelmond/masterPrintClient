import { rm } from "@/styles"
import { colors } from "@/styles/colors"
import { fontGeist } from "@/styles/fonts"
import Link from "next/link"
import styled from "styled-components"

export const SimpleButton = ({ href, text, isIcon = true }: { href: string, text: string, isIcon?: boolean }) => {
    
    return (
        <StyledSimpleButton>
            <StyledHiddenLink href={href} target="blank"/>
            <p>{text}</p>
            {isIcon && 
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_373_1827)">
                <path d="M18.75 6.25L16.9875 8.0125L22.7125 13.75H2.5V16.25H22.7125L16.975 21.9875L18.75 23.75L27.5 15L18.75 6.25Z" fill="#323232"/>
                </g>
                <defs>
                <clipPath id="clip0_373_1827">
                <rect width="30" height="30" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            }
        </StyledSimpleButton>
    )
}

const StyledSimpleButton = styled.div`
    width: fit-content;
    background-color: ${colors.bgMain};
    border-radius: ${rm(8)};
    padding: ${rm(10)} ${rm(14)};
    ${fontGeist(500)};
    font-size: ${rm(28)};
    line-height: 130%;
    color: ${colors.black100};
    display: flex;
    align-items: center;
    background-color: ${colors.white100};
    cursor: pointer;
    position: relative;

    transition: opacity 0.3s ease-in-out;

    &:hover{
        opacity: 0.6;
    }

    svg{
        width: ${rm(30)};
        height: ${rm(30)};
        margin-left: ${rm(10)};
    }
`

const StyledHiddenLink = styled.a`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`