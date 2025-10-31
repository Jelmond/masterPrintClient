import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout";
import { rm } from "@/styles";
import { fontGeist } from "@/styles/fonts";
import Link from "next/link";
import styled from "styled-components";

interface CatalogueButtonProps {
    link: string;
    children: React.ReactNode;
    color: 'black' | 'white' | 'grey';
    isArrowLeft?: boolean;
}

export const CatalogueButton = ({ link, children, color, isArrowLeft }: CatalogueButtonProps) => {

    const finalColor = color === 'black' ? '#484848' : color === 'white' ? '#D9D9D9' : '#8D8D8D';
    const textColor = color === 'black' ? '#FFFFFF' : color === 'white' ? '#000000' : '#FFFFFF';

    return (
        //@ts-expect-error
        <StyledAddButton color={textColor} backgroundColor={finalColor} isArrowLeft={isArrowLeft}>
            <AnimLink href={link}>
                {isArrowLeft ? 
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_684_3341)">
                    <path d="M28.875 15.125H9.39125L14.3137 10.1887L12.375 8.25L4.125 16.5L12.375 24.75L14.3137 22.8113L9.39125 17.875H28.875V15.125Z" fill={textColor}/>
                    </g>
                    <defs>
                    <clipPath id="clip0_684_3341">
                    <rect width="33" height="33" fill={textColor}/>
                    </clipPath>
                    </defs>
                </svg>
                :
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_686_3143)">
                    <path d="M4.125 15.125H23.6088L18.6863 10.1887L20.625 8.25L28.875 16.5L20.625 24.75L18.6863 22.8113L23.6088 17.875H4.125V15.125Z" fill={textColor}/>
                    </g>
                    <defs>
                    <clipPath id="clip0_686_3143">
                    <rect width="33" height="33" fill={textColor} transform="matrix(-1 0 0 1 33 0)"/>
                    </clipPath>
                    </defs>
                </svg>
                
            }
                {children}
            </AnimLink>
        </StyledAddButton>
    )
}

const StyledAddButton = styled.div<{ color: string, backgroundColor: string, isArrowLeft: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${rm(10)};
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: ${rm(15)};
    cursor: pointer;
    font-size: ${rm(24)};
    ${fontGeist(400)};

    transition: opacity 0.3s ease;

    &:hover{
        opacity: 0.8;
    }

    a{
        display: flex;
        align-items: center;
        gap: ${rm(10)};

        flex-direction: ${({ isArrowLeft }) => isArrowLeft ? 'row' : 'row-reverse'};
    }
`