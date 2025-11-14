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
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.81313 9.25758L9.9798 7.09091M9.9798 7.09091L7.81313 4.92425M9.9798 7.09091H4.20202M13.5909 7.09091C13.5909 3.50106 10.6808 0.590912 7.09091 0.590912C3.50106 0.590912 0.59091 3.50106 0.59091 7.09091C0.59091 10.6808 3.50106 13.5909 7.09091 13.5909C10.6808 13.5909 13.5909 10.6808 13.5909 7.09091Z" stroke="#E6E8E6" stroke-width="1.18182" stroke-linecap="round" stroke-linejoin="round"/>
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
    padding: ${rm(10)} ${rm(19)};
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: ${rm(9)};
    cursor: pointer;
    font-size: ${rm(16)};
    ${fontGeist(400)};
    width: fit-content;

    transition: opacity 0.3s ease;

    &:hover{
        opacity: 0.8;
    }

    svg{
        width: ${rm(13)};
        height: ${rm(13)};
    }

    a{
        display: flex;
        align-items: center;
        gap: ${rm(10)};

        flex-direction: ${({ isArrowLeft }) => isArrowLeft ? 'row' : 'row-reverse'};
    }
`