import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import Image from "next/image"
import { CatalogueButton } from "@/components/UI/Buttons/CatalogueButton"
import { heightLvh } from "@/styles/utils"
import { useWindowWidth } from "@react-hook/window-size"

export const Welcome = () => {

    const width = useWindowWidth()

    return (
        <StyledWelcome>
            <StyledContent>
                <StyledBackgroundImage src={width > 768 ? "/hero.webp" : "/heroMobile.webp"} alt="welcomeBackground" fill />
                <StyledLeft>
                    <StyledHeadline>
                        ВАШ ПАРТНЁР В ОБЛАСТИ ПОДАРОЧНЫХ ПЕЧАТНЫХ ИЗДЕЛИЙ
                    </StyledHeadline>
                    <StyledFeatures>
                        <span>Высокое качество</span>
                        <span className="dot"></span>
                        <span>Быстрая доставка</span>
                        <span className="dot"></span>
                        <span>Низкие цены</span>
                    </StyledFeatures>
                    <StyledDescription>
                        Подарочные упаковки, карточки, открытки и многое другое!
                    </StyledDescription>
                    <StyledButtonWrapper>
                        <CatalogueButton link="/catalog" color="black" isArrowLeft={false}>
                            <span>Каталог</span>
                        </CatalogueButton>
                    </StyledButtonWrapper>
                </StyledLeft>
            </StyledContent>
        </StyledWelcome>
    )
}

const StyledWelcome = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding: ${rm(96)} ${rm(64)};
    ${heightLvh(100)};
    padding-bottom: ${rm(24)};

    ${media.lg`
        padding: ${rm(96)} ${rm(80)};
        padding-bottom: ${rm(24)};
    `}

    ${media.md`
        padding: ${rm(50)} ${rm(40)};
        min-height: ${rm(500)};
    `}

    ${media.xsm`
        padding: ${rm(64)} ${rm(20)};
        padding-bottom: ${rm(24)};
        min-height: ${rm(400)};
    `}
`

const StyledBackgroundImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
`

const StyledContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    align-items: center;
    padding: ${rm(43)};
    overflow: hidden;
    border-radius: ${rm(12)};

    ${media.lg`
        padding: ${rm(35)};
    `}

    ${media.md`
        padding: ${rm(30)};
    `}

    ${media.xsm`
        padding: ${rm(20)};
    `}
`

const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(24)};
    position: relative;
    z-index: 1;
    width: ${rm(820)};

    ${media.lg`
        width: 100%;
        max-width: ${rm(700)};
    `}

    ${media.md`
        flex: 1;
        width: 100%;
        max-width: 100%;
        align-items: center;
        text-align: center;
    `}

    ${media.xsm`
        gap: ${rm(16)};
    `}
`

const StyledHeadline = styled.h1`
    ${fontGeist(900)};
    font-size: ${rm(36)};
    line-height: 120%;
    color: #1C1C1C;
    text-transform: uppercase;
    margin: 0;
    width: 100%;

    ${media.lg`
        font-size: ${rm(40)};
    `}

    ${media.md`
        font-size: ${rm(32)};
    `}

    ${media.xsm`
        font-size: ${rm(24)};
        line-height: 130%;
    `}
`

const StyledFeatures = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(8)};
    font-size: ${rm(18)};
    ${fontGeist(700)};
    color: #1C1C1C;

    ${media.md`
        justify-content: center;
        flex-wrap: wrap;
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        gap: ${rm(6)};
    `}

    .dot {
        width: ${rm(5)};
        height: ${rm(5)};
        border-radius: 50%;
        border: 1px solid #1C1C1C;
    }
`

const StyledDescription = styled.p`
    ${fontGeist(500)};
    font-size: ${rm(16)};
    line-height: 140%;
    color: #323232;
    margin: 0;

    ${media.lg`
        font-size: ${rm(15)};
    `}

    ${media.md`
        font-size: ${rm(15)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledButtonWrapper = styled.div`
    margin-top: ${rm(8)};

    ${media.xsm`
        width: 100%;
        display: flex;
        justify-content: center;
    `}
`

const StyledRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${media.md`
        width: 100%;
        max-width: ${rm(300)};
    `}

    ${media.xsm`
        max-width: ${rm(200)};
    `}
`

const StyledGiftBox = styled.div`
    position: relative;
    width: ${rm(280)};
    height: ${rm(320)};
    background: #D4A5A5;
    border-radius: ${rm(12)};
    transform: rotate(-8deg);
    box-shadow: 0 ${rm(8)} ${rm(24)} rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.lg`
        width: ${rm(240)};
        height: ${rm(280)};
    `}

    ${media.md`
        width: ${rm(200)};
        height: ${rm(240)};
    `}

    ${media.xsm`
        width: ${rm(150)};
        height: ${rm(180)};
    `}
`

const StyledRibbon = styled.div`
    position: absolute;
    top: ${rm(-15)};
    left: ${rm(-15)};
    width: ${rm(100)};
    height: ${rm(100)};
    z-index: 2;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${rm(60)};
        height: ${rm(60)};
        border: ${rm(5)} solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        background: transparent;
    }

    &::after {
        content: '';
        position: absolute;
        top: ${rm(20)};
        left: ${rm(20)};
        width: ${rm(60)};
        height: ${rm(4)};
        background: white;
        transform: rotate(45deg);
    }

    ${media.lg`
        width: ${rm(85)};
        height: ${rm(85)};
        top: ${rm(-12)};
        left: ${rm(-12)};
        
        &::before {
            width: ${rm(50)};
            height: ${rm(50)};
            border-width: ${rm(4)};
        }
        
        &::after {
            top: ${rm(17)};
            left: ${rm(17)};
            width: ${rm(50)};
            height: ${rm(3)};
        }
    `}

    ${media.md`
        width: ${rm(70)};
        height: ${rm(70)};
        top: ${rm(-10)};
        left: ${rm(-10)};
        
        &::before {
            width: ${rm(40)};
            height: ${rm(40)};
            border-width: ${rm(3)};
        }
        
        &::after {
            top: ${rm(14)};
            left: ${rm(14)};
            width: ${rm(40)};
            height: ${rm(3)};
        }
    `}

    ${media.xsm`
        width: ${rm(55)};
        height: ${rm(55)};
        top: ${rm(-8)};
        left: ${rm(-8)};
        
        &::before {
            width: ${rm(32)};
            height: ${rm(32)};
            border-width: ${rm(2.5)};
        }
        
        &::after {
            top: ${rm(11)};
            left: ${rm(11)};
            width: ${rm(32)};
            height: ${rm(2)};
        }
    `}
`

const StyledRibbonLine = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: ${rm(4)};
    background: white;
    transform: translateY(-50%);

    ${media.lg`
        height: ${rm(3)};
    `}

    ${media.md`
        height: ${rm(3)};
    `}

    ${media.xsm`
        height: ${rm(2)};
    `}
`

const StyledShopText = styled.div`
    position: absolute;
    bottom: ${rm(30)};
    right: ${rm(20)};
    transform: rotate(12deg);
    font-size: ${rm(24)};
    ${fontGeist(700)};
    color: white;
    letter-spacing: ${rm(2)};
    z-index: 1;

    ${media.lg`
        font-size: ${rm(20)};
        bottom: ${rm(25)};
        right: ${rm(15)};
    `}

    ${media.md`
        font-size: ${rm(18)};
        bottom: ${rm(20)};
        right: ${rm(12)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        bottom: ${rm(15)};
        right: ${rm(10)};
        letter-spacing: ${rm(1)};
    `}
`