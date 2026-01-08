'use client'

import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

export default function OrderInstructionsPage() {
    return (
        <StyledPage>
            <StyledContainer>
                <StyledTitle>Оформление заказа</StyledTitle>
                
                <StyledContent>
                    <StyledIntroText>
                        Оформить заказ в нашем интернет-магазине можно с помощью кнопки «+» расположенной рядом с карточкой товара и затем нажать на иконку корзины.
                    </StyledIntroText>

                    <StyledSection>
                        <StyledSectionTitle>Пошаговая инструкция:</StyledSectionTitle>
                        <StyledStepsList>
                            <StyledStepItem>
                                <StyledStepNumber>1</StyledStepNumber>
                                <StyledStepContent>
                                    <StyledStepTitle>Выбираете товар</StyledStepTitle>
                                    <StyledStepText>
                                        Выбираете товар, который Вас заинтересовал
                                    </StyledStepText>
                                </StyledStepContent>
                            </StyledStepItem>

                            <StyledStepItem>
                                <StyledStepNumber>2</StyledStepNumber>
                                <StyledStepContent>
                                    <StyledStepTitle>Добавляете в корзину</StyledStepTitle>
                                    <StyledStepText>
                                        Нажимаете кнопку <strong>«+»</strong> или <strong>«Добавить в корзину»</strong>
                                    </StyledStepText>
                                </StyledStepContent>
                            </StyledStepItem>

                            <StyledStepItem>
                                <StyledStepNumber>3</StyledStepNumber>
                                <StyledStepContent>
                                    <StyledStepTitle>Переходите к оформлению</StyledStepTitle>
                                    <StyledStepText>
                                        Переходите в корзину и нажимаете <strong>«Перейти к оформлению заказа»</strong>
                                    </StyledStepText>
                                </StyledStepContent>
                            </StyledStepItem>

                            <StyledStepItem>
                                <StyledStepNumber>4</StyledStepNumber>
                                <StyledStepContent>
                                    <StyledStepTitle>Заполняете форму</StyledStepTitle>
                                    <StyledStepText>
                                        Заполняете соответствующую форму (для физических лиц или для юридических лиц, ИП, лиц, осуществляющих самостоятельную профессиональную деятельность)
                                    </StyledStepText>
                                </StyledStepContent>
                            </StyledStepItem>

                            <StyledStepItem>
                                <StyledStepNumber>5</StyledStepNumber>
                                <StyledStepContent>
                                    <StyledStepTitle>Оформляете заказ</StyledStepTitle>
                                    <StyledStepText>
                                        Нажимаете <strong>«Оформить заказ»</strong> и ожидаете э/письмо, на указанный Вами адрес электронной почты, со счетом или номером заказа подтверждающим принятие заказа и заключение договора оферты.
                                    </StyledStepText>
                                </StyledStepContent>
                            </StyledStepItem>
                        </StyledStepsList>
                    </StyledSection>
                </StyledContent>
            </StyledContainer>
        </StyledPage>
    )
}

const StyledPage = styled.div`
    min-height: 100vh;
    padding-top: ${rm(80)};
    background-color: #E6E8E6;
    padding-bottom: ${rm(80)};

    ${media.xsm`
        padding-top: ${rm(60)};
        padding-bottom: ${rm(60)};
    `}
`

const StyledContainer = styled.div`
    max-width: ${rm(1000)};
    margin: 0 auto;
    padding: ${rm(80)} ${rm(125)};

    ${media.lg`
        padding: ${rm(60)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(50)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(40)} ${rm(20)};
    `}
`

const StyledTitle = styled.h1`
    ${fontGeist(700)};
    font-size: ${rm(48)};
    color: #111111;
    margin: 0 0 ${rm(40)} 0;
    text-align: center;

    ${media.lg`
        font-size: ${rm(40)};
        margin-bottom: ${rm(35)};
    `}

    ${media.md`
        font-size: ${rm(36)};
        margin-bottom: ${rm(30)};
    `}

    ${media.xsm`
        font-size: ${rm(28)};
        margin-bottom: ${rm(24)};
    `}
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(40)};

    ${media.md`
        gap: ${rm(35)};
    `}

    ${media.xsm`
        gap: ${rm(30)};
    `}
`

const StyledIntroText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(20)};
    color: #1C1C1C;
    line-height: 1.7;
    margin: 0;
    text-align: center;
    max-width: ${rm(900)};
    margin: 0 auto;

    ${media.md`
        font-size: ${rm(18)};
    `}

    ${media.xsm`
        font-size: ${rm(16)};
    `}
`

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(24)};
    background-color: #FFFFFF;
    padding: ${rm(40)};
    border-radius: ${rm(16)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.md`
        padding: ${rm(32)};
        gap: ${rm(20)};
    `}

    ${media.xsm`
        padding: ${rm(24)};
        gap: ${rm(16)};
    `}
`

const StyledSectionTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(32)};
    color: #111111;
    margin: 0 0 ${rm(8)} 0;

    ${media.md`
        font-size: ${rm(28)};
    `}

    ${media.xsm`
        font-size: ${rm(24)};
    `}
`

const StyledStepsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(24)};

    ${media.xsm`
        gap: ${rm(20)};
    `}
`

const StyledStepItem = styled.div`
    display: flex;
    gap: ${rm(20)};
    align-items: flex-start;
    padding: ${rm(24)};
    background-color: #F8F9FA;
    border-radius: ${rm(12)};
    border-left: 4px solid #667eea;
    transition: all 0.3s ease;

    ${media.xsm`
        padding: ${rm(20)};
        gap: ${rm(16)};
    `}

    &:hover {
        background-color: #F0F4FF;
        transform: translateX(${rm(4)});
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
    }
`

const StyledStepNumber = styled.div`
    width: ${rm(48)};
    height: ${rm(48)};
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #FFFFFF;
    border-radius: 50%;
    ${fontGeist(700)};
    font-size: ${rm(24)};
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);

    ${media.xsm`
        width: ${rm(40)};
        height: ${rm(40)};
        font-size: ${rm(20)};
    `}
`

const StyledStepContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(8)};
    flex: 1;
`

const StyledStepTitle = styled.h3`
    ${fontGeist(600)};
    font-size: ${rm(20)};
    color: #111111;
    margin: 0;

    ${media.md`
        font-size: ${rm(18)};
    `}

    ${media.xsm`
        font-size: ${rm(16)};
    `}
`

const StyledStepText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    line-height: 1.6;
    margin: 0;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}

    strong {
        ${fontGeist(600)};
        color: #667eea;
    }
`

const StyledInfoBox = styled.div`
    display: flex;
    gap: ${rm(16)};
    padding: ${rm(24)};
    background-color: #E3F2FD;
    border-left: 4px solid #2196F3;
    border-radius: ${rm(12)};
    align-items: flex-start;

    ${media.xsm`
        padding: ${rm(20)};
        gap: ${rm(12)};
    `}
`

const StyledInfoIcon = styled.div`
    width: ${rm(32)};
    height: ${rm(32)};
    color: #2196F3;
    flex-shrink: 0;
    margin-top: ${rm(2)};

    ${media.xsm`
        width: ${rm(28)};
        height: ${rm(28)};
    `}

    svg {
        width: 100%;
        height: 100%;
    }
`

const StyledInfoText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1565C0;
    line-height: 1.6;
    margin: 0;
    flex: 1;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

