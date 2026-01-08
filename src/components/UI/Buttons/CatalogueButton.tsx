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

    const finalColor = color === 'black' ? '#1C1C1C' : color === 'white' ? '#D9D9D9' : '#8D8D8D';
    const textColor = color === 'black' ? '#E6E8E6' : color === 'white' ? '#000000' : '#FFFFFF';

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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
                {children}
            </AnimLink>
            <StyledHiddenLink href={link}/>
        </StyledAddButton>
    )
}

const StyledAddButton = styled.div<{ color: string, backgroundColor: string, isArrowLeft: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${rm(12)} ${rm(24)};
    color: ${({ color, backgroundColor }) => backgroundColor === '#1C1C1C' ? '#FFFFFF' : '#1C1C1C'};
    background-color: ${({ backgroundColor }) => backgroundColor === '#1C1C1C' ? '#1C1C1C' : '#FFFFFF'};
    border-radius: ${rm(8)};
    cursor: pointer;
    font-size: ${rm(15)};
    ${fontGeist(500)};
    width: fit-content;
    border: 1.5px solid ${({ backgroundColor }) => backgroundColor === '#1C1C1C' ? '#1C1C1C' : '#E5E5E5'};
    transition: all 0.2s ease;
    position: relative;

    &:hover {
        background-color: ${({ backgroundColor }) => backgroundColor === '#1C1C1C' ? '#2C2C2C' : '#F8F8F8'};
        border-color: ${({ backgroundColor }) => backgroundColor === '#1C1C1C' ? '#2C2C2C' : '#D5D5D5'};

        svg {
            transform: ${({ isArrowLeft }) => isArrowLeft ? 'translateX(-2px)' : 'translateX(2px)'};
        }
    }

    &:active {
        transform: scale(0.98);
    }

    svg {
        width: ${rm(14)};
        height: ${rm(14)};
        transition: transform 0.2s ease;
        flex-shrink: 0;
    }

    a {
        display: flex;
        align-items: center;
        gap: ${rm(8)};
        flex-direction: ${({ isArrowLeft }) => isArrowLeft ? 'row' : 'row-reverse'};
        text-decoration: none;
        color: inherit;
    }
`

const StyledHiddenLink = styled(AnimLink)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
`