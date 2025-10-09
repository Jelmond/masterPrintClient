import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import Image from "next/image"
import { AnimatedText } from "@/components/animated/AnimatedText/AnimatedText"
export const Markets = () => {
    return (
        <StyledMarkets>
            <StyledPromotionContainer>
                <p className="text">
                    Качественная продукция по ценам ниже рыночных
                </p>
                <Image className="backgroundImage" src="/assets/images/marketsImage.png" alt="background" width={1920} height={1080} />
            </StyledPromotionContainer>
        </StyledMarkets>
    )
}

const StyledMarkets = styled.div`
    width: 100%;
    padding-top: ${rm(126)};
    background-color: ${colors.white100};
    overflow: hidden;
`
const StyledPromotionContainer = styled.div`
    width: 100%;
    background-color: ${colors.bgMain};
    height: ${rm(226)};
    position: relative;
    overflow: hidden;

    ${media.lg`
        height: ${rm(150)};
    `}

    ${media.xsm`
        height: ${rm(115)};
        background-color: rgba(0, 0, 0, 0.5);
    `}

    .text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ${fontGeist(200)};
        font-size: ${rm(64)};
        color: ${colors.white100};
        width: ${rm(1570)};
        z-index: 2;

        ${media.lg`
            font-size: ${rm(40)};
            width: ${rm(1000)};
        `}

        ${media.md`
            font-size: ${rm(36)};
            width: ${rm(890)};
        `}

        ${media.xsm`
            font-size: ${rm(20)};
            width: 80%;
            text-align: center;
            color: ${colors.white100};
            z-index: 10;
        `}
    }

    .backgroundImage{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }
`