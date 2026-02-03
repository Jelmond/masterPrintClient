'use client'

import { media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

export default function ReturnPage() {
    return (
        <StyledReturnPage>
            <StyledContainer>
                <StyledTitle>Возврат товара</StyledTitle>

                <StyledNotice>
                    <strong>Важно:</strong> возврат доступен только для товаров с браком (ненадлежащего качества).
                </StyledNotice>

                <StyledIntroText>
                    ООО «Мастерпринт-Пак» принимает товар обратно и осуществляет возврат денежных средств 
                    в соответствии с законодательством Республики Беларусь о защите прав потребителей. 
                    Учитывая специфику полиграфической продукции (изготовление по индивидуальному заказу), 
                    возврат принимается исключительно в случае наличия производственного брака.
                </StyledIntroText>

                <StyledContent>
                    <StyledSection>
                        <StyledSectionTitle>1. Условия возврата</StyledSectionTitle>
                        <StyledText>
                            Возврат возможен только для товаров с браком — то есть товаров ненадлежащего качества, 
                            имеющих дефекты производства: дефекты печати, повреждения, несоответствие заказанному 
                            тиражу или оформлению по вине производителя.
                        </StyledText>
                        <StyledText>
                            Товары надлежащего качества (без брака), в том числе изготовленные по индивидуальному 
                            заказу, возврату и обмену не подлежат.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>2. Как оформить возврат</StyledSectionTitle>
                        <StyledList>
                            <li>Свяжитесь с нами по телефону или через раздел «Обращения покупателей», указав номер заказа и описание дефекта.</li>
                            <li>Предоставьте фото или видео брака (если возможно) для предварительной оценки.</li>
                            <li>Сохраните товар в том виде, в котором он был получен; при необходимости мы согласуем способ передачи товара для осмотра.</li>
                            <li>После подтверждения брака мы организуем возврат товара и осуществим возврат денежных средств или замену на качественный товар.</li>
                        </StyledList>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>3. Сроки и способ возврата денег</StyledSectionTitle>
                        <StyledText>
                            Возврат денежных средств осуществляется тем же способом, которым была произведена оплата, 
                            в течение 10 (десяти) рабочих дней с момента подтверждения брака и получения товара Продавцом.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>4. Контакты</StyledSectionTitle>
                        <StyledText>
                            По вопросам возврата товара с браком обращайтесь:
                        </StyledText>
                        <StyledList>
                            <li>Пункт выдачи: <a href="tel:+375447495465">+375 44 749 54 65</a></li>
                            <li>Менеджер: <a href="tel:+375445842911">+375 44 584 29 11</a></li>
                            <li>Через раздел <a href="/requests">Обращения покупателей</a> на сайте</li>
                        </StyledList>
                    </StyledSection>
                </StyledContent>
            </StyledContainer>
        </StyledReturnPage>
    )
}

const StyledReturnPage = styled.div`
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

const StyledNotice = styled.div`
    ${fontGeist(500)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    line-height: 1.6;
    margin: 0 0 ${rm(24)} 0;
    padding: ${rm(20)} ${rm(24)};
    background-color: #FFF8E6;
    border-left: 4px solid #E6A800;
    border-radius: ${rm(8)};

    ${media.xsm`
        font-size: ${rm(14)};
        padding: ${rm(16)} ${rm(20)};
    `}

    strong {
        ${fontGeist(700)};
    }
`

const StyledIntroText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    line-height: 1.7;
    margin: 0 0 ${rm(40)} 0;
    text-align: justify;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
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

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(16)};
    background-color: #FFFFFF;
    padding: ${rm(32)};
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.md`
        padding: ${rm(28)};
        gap: ${rm(14)};
    `}

    ${media.xsm`
        padding: ${rm(20)};
        gap: ${rm(12)};
    `}
`

const StyledSectionTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(28)};
    color: #111111;
    margin: 0 0 ${rm(8)} 0;

    ${media.md`
        font-size: ${rm(24)};
    `}

    ${media.xsm`
        font-size: ${rm(20)};
    `}
`

const StyledText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.7;
    margin: 0;
    text-align: justify;

    ${media.md`
        font-size: ${rm(15)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}

    strong {
        ${fontGeist(600)};
    }

    a {
        color: #111111;
        text-decoration: underline;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }
    }
`

const StyledList = styled.ul`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.7;
    margin: ${rm(8)} 0;
    padding-left: ${rm(24)};

    ${media.xsm`
        font-size: ${rm(14)};
        padding-left: ${rm(20)};
    `}

    li {
        margin-bottom: ${rm(8)};

        &:last-child {
            margin-bottom: 0;
        }
    }

    a {
        color: #111111;
        text-decoration: underline;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }
    }
`
