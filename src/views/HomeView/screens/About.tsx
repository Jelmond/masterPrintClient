import { media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled, { keyframes } from "styled-components"
import { CatalogueButton } from "@/components/UI/Buttons/CatalogueButton"

const slideInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const About = () => {
    return (
        <StyledAbout>
            <StyledBackgroundDecoration />
            <StyledFormContainer>
                <StyledHeader>
                    <StyledTitle>Делаем продукцию под заказ!</StyledTitle>
                    <StyledSubtitle>Открытки, стикеры, коробки, конверты и многое другое — под ваш бренд и в нужном тираже</StyledSubtitle>
                    <StyledSubtitle className="small">Юридические лица, ИП, и лица осуществляющие самостоятельную профессиональную деятельность могут оформить индивидуальный заказ через менеджера</StyledSubtitle>
                </StyledHeader>
                <StyledFeatureList>
                    <StyledFeatureItem>
                        <StyledFeatureIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledFeatureIcon>
                        <span>Высокое качество печати</span>
                    </StyledFeatureItem>
                    <StyledFeatureItem>
                        <StyledFeatureIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledFeatureIcon>
                        <span>Любой тираж — от 100 шт.</span>
                    </StyledFeatureItem>
                    <StyledFeatureItem>
                        <StyledFeatureIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledFeatureIcon>
                        <span>Персональный менеджер</span>
                    </StyledFeatureItem>
                </StyledFeatureList>
                <StyledCtaWrapper>
                    <CatalogueButton link="/custom-order" color="black" isArrowLeft={false}>
                        <span>Оформить заказ</span>
                    </CatalogueButton>
                </StyledCtaWrapper>
            </StyledFormContainer>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rm(120)} ${rm(125)};
    background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 50%, #f0f4f8 100%);
    overflow: hidden;

    ${media.lg`
        padding: ${rm(100)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(80)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(60)} ${rm(20)};
    `}
`

const StyledBackgroundDecoration = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        radial-gradient(circle at 20% 30%, rgba(28, 28, 28, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(28, 28, 28, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
`

const StyledFormContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: ${rm(900)};
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    animation: ${slideInUp} 0.6s ease-out;

    .small {
        font-size: ${rm(14)};
        margin-top: ${rm(12)};
    }
`

const StyledHeader = styled.div`
    text-align: center;
    margin-bottom: ${rm(48)};

    ${media.md`
        margin-bottom: ${rm(40)};
    `}

    ${media.xsm`
        margin-bottom: ${rm(32)};
    `}
`

const StyledTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(56)};
    color: #1C1C1C;
    margin: 0 0 ${rm(16)} 0;
    background: linear-gradient(135deg, #1C1C1C 0%, #2C2C2C 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    line-height: 1.2;

    ${media.lg`
        font-size: ${rm(48)};
    `}

    ${media.md`
        font-size: ${rm(40)};
        margin-bottom: ${rm(12)};
    `}

    ${media.xsm`
        font-size: ${rm(32)};
        margin-bottom: ${rm(10)};
    `}
`

const StyledSubtitle = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #6B7280;
    margin: 0 auto;
    line-height: 1.6;
    max-width: ${rm(600)};

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledFeatureList = styled.div`
    display: flex;
    gap: ${rm(40)};
    margin-bottom: ${rm(48)};
    flex-wrap: wrap;
    justify-content: center;

    ${media.xsm`
        gap: ${rm(20)};
        margin-bottom: ${rm(36)};
    `}
`

const StyledFeatureItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(10)};
    ${fontGeist(500)};
    font-size: ${rm(16)};
    color: #1C1C1C;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledFeatureIcon = styled.div`
    display: flex;
    align-items: center;
    color: #1C9C56;

    svg {
        width: ${rm(22)};
        height: ${rm(22)};
    }
`

const StyledCtaWrapper = styled.div`
    display: flex;
    justify-content: center;
`