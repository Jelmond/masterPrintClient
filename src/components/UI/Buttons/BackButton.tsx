'use client'

import { useSpringTrigger } from "@/hooks/useSpringTrigger"
import { useScroll } from "@/layouts/ScrollLayout/useScroll"
import { rm } from "@/styles"

import { colors } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

export const BackButton = ({isInView}: {isInView: boolean}) => {

    const stopScroll = useScroll((state: any) => (state.stop))
    const startScroll = useScroll((state: any) => (state.start))
    
    const handleClick = () => {
        stopScroll()

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }, 50)

        setTimeout(() => {
            startScroll()
        }, 1000)
    }
    
    return (
        <StyledBackButton onClick={handleClick} style={{opacity: isInView ? 1 : 0}}>
            <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_457_1624)">
                <path d="M7.15407 27.3652L19.7037 15.4648L32.2533 27.3652L35.6296 24.1636L19.7037 9.06156L3.77777 24.1636L7.15407 27.3652Z" fill="#474747"/>
                </g>
                <defs>
                <clipPath id="clip0_457_1624">
                <rect width="36.2449" height="38.2222" fill="white" transform="translate(0.59259 36.2451) rotate(-90)"/>
                </clipPath>
                </defs>
            </svg>
            <p className="text">
            Вернуться
            </p>
        </StyledBackButton>
    )
}

const StyledBackButton = styled.button`
    position: fixed;
    bottom: ${rm(150)};
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${rm(10)};
    cursor: pointer;
    z-index: 10;

    transition: opacity 0.3s ease;

    &:hover{
        .text{
            transform: translateY(-5px);
        }

        svg{
            transform: translateY(5px);
        }
    }


    svg{
        width: ${rm(40)};
        height: ${rm(40)};

        transition: transform 0.3s ease;
    }

    .text{
        font-size: ${rm(18)};
        ${fontGeist(400)};
        color: #484848;

        transition: transform 0.3s ease;
    }
`