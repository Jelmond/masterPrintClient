'use client'

import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

export default function PaymentPage() {
    return (
        <StyledPaymentPage>
            <StyledContainer>
                <StyledTitle>Способы оплаты</StyledTitle>
                
                <StyledContent>
                    <StyledSection>
                        <StyledSectionTitle>Для физических лиц:</StyledSectionTitle>
                        <StyledList>
                            <StyledListItem>
                                наличный расчет при получении товара на пункте выдаче;
                            </StyledListItem>
                            <StyledListItem>
                                банковской картой при получении через терминал (все виды карт и способов прикладывания карты);
                            </StyledListItem>
                            <StyledListItem>
                                банковской картой онлайн (предоплата);
                            </StyledListItem>
                            <StyledListItem>
                                через платежную систему ЕРИП (предоплата).
                            </StyledListItem>
                        </StyledList>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Для юридических лиц, индивидуальных предпринимателей и лиц, осуществляющих самостоятельную профессиональную деятельность:</StyledSectionTitle>
                        <StyledList>
                            <StyledListItem>
                                оплата по расчетному счёту (предоплата);
                            </StyledListItem>
                            <StyledListItem>
                                через платежную систему ЕРИП (предоплата).
                            </StyledListItem>
                        </StyledList>
                    </StyledSection>

                    <StyledWarningBox>
                        <StyledWarningIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledWarningIcon>
                        <StyledWarningText>
                            <strong>Внимание!</strong> Перед оплатой через ЕРИП <strong>ОБЯЗАТЕЛЬНО</strong> уточните наличие товара на складе по телефону!
                        </StyledWarningText>
                    </StyledWarningBox>

                    <StyledSection>
                        <StyledSectionTitle>Покупка за наличный расчет или банковской картой через терминал на пункте выдачи</StyledSectionTitle>
                        <StyledText>
                            При оплате за наличный расчет или банковской картой через терминал на пункте выдачи мы связываемся с вами по средствам э/почты или телефона, чтобы подтвердить заказ и уточнить срок получения товара. После этого вы можете самостоятельно забрать заказ, произведя оплату при получении товара на пункте выдаче.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Оплата банковской картой онлайн</StyledSectionTitle>
                        <StyledText>
                            При оплате банковской картой мы связываемся с вами по средствам э/почты или телефона, чтобы подтвердить заказ и уточнить срок доставки/ получения товара. После этого вы оплачиваете товар и забирайте его на пункте выдачи или вам осуществляется доставка, в зависимости от выбранного вами способа доставки.
                        </StyledText>
                        
                        <StyledInfoBox>
                            <StyledInfoTitle>Внимание!</StyledInfoTitle>
                            <StyledInfoContent>
                                <StyledInfoSection>
                                    <StyledInfoSubtitle>К оплате принимаются следующие карты:</StyledInfoSubtitle>
                                    <StyledList>
                                        <StyledListItem>Visa (любых банков);</StyledListItem>
                                        <StyledListItem>MasterCard (любых банков);</StyledListItem>
                                        <StyledListItem>БЕЛКАРТ (эмитированные &quot;Приорбанк&quot; ОАО).</StyledListItem>
                                    </StyledList>
                                </StyledInfoSection>
                                
                                <StyledInfoSection>
                                    <StyledInfoSubtitle>К оплате не принимаются карты:</StyledInfoSubtitle>
                                    <StyledList>
                                        <StyledListItem>Maestro;</StyledListItem>
                                        <StyledListItem>БЕЛКАРТ (эмитированные иными банками)</StyledListItem>
                                    </StyledList>
                                </StyledInfoSection>
                            </StyledInfoContent>
                        </StyledInfoBox>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Оплата через платёжную систему ЕРИП</StyledSectionTitle>
                        <StyledText>
                            Оплатить товары интернет-магазина <strong>mppshop.by</strong> Вы можете через систему «Расчет» (ЕРИП), в любом удобном для Вас месте и время, или в пункте банковского обслуживания – интернет-банке, с помощью мобильного банкинга, инфокиоске, кассе банков, банкомате и т.д.
                        </StyledText>
                        <StyledText>
                            Совершить оплату можно с использованием наличных денежных средств, электронных денег и платежных карточек в банках, которые оказывают услуги по приему платежей, а также посредством инструментов дистанционного обслуживания.
                        </StyledText>
                        
                        <StyledInstructionsBox>
                            <StyledInstructionsTitle>ДЛЯ ПРОВЕДЕНИЯ ПЛАТЕЖА ЧЕРЕЗ ПЛАТЕЖНУЮ СИСТЕМУ ЕРИП НЕОБХОДИМО:</StyledInstructionsTitle>
                            <StyledInstructionsList>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>1</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Выбрать:<br />
                                        Пункт «Система «Расчет» (ЕРИП)<br />
                                        Интернет-магазины/сервисы<br />
                                        <strong>[+]</strong> ………
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>2</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Для оплаты «Товара» ввести Номер заказа, затем Фамилию Имя Отчество.
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>3</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Ввести сумму платежа (если не указана)
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>4</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Проверить корректность информации
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>5</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Совершить платеж.
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                            </StyledInstructionsList>
                        </StyledInstructionsBox>
                    </StyledSection>
                </StyledContent>
            </StyledContainer>
        </StyledPaymentPage>
    )
}

const StyledPaymentPage = styled.div`
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
    max-width: ${rm(1200)};
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
    font-size: ${rm(60)};
    color: #111111;
    margin: 0 0 ${rm(60)} 0;
    text-align: center;

    ${media.lg`
        font-size: ${rm(48)};
        margin-bottom: ${rm(50)};
    `}

    ${media.md`
        font-size: ${rm(40)};
        margin-bottom: ${rm(40)};
    `}

    ${media.xsm`
        font-size: ${rm(32)};
        margin-bottom: ${rm(30)};
    `}
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(60)};

    ${media.md`
        gap: ${rm(50)};
    `}

    ${media.xsm`
        gap: ${rm(40)};
    `}
`

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(24)};
`

const StyledSectionTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(34)};
    color: #111111;
    margin: 0;

    ${media.md`
        font-size: ${rm(28)};
    `}

    ${media.xsm`
        font-size: ${rm(24)};
    `}
`

const StyledText = styled.p`
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
    }
`

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: ${rm(12)};
`

const StyledListItem = styled.li`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    line-height: 1.6;
    position: relative;
    padding-left: ${rm(24)};

    ${media.md`
        font-size: ${rm(16)};
        padding-left: ${rm(20)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        padding-left: ${rm(18)};
    `}

    &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #111111;
        font-weight: 700;
        font-size: ${rm(20)};
    }
`

const StyledWarningBox = styled.div`
    display: flex;
    gap: ${rm(16)};
    padding: ${rm(24)};
    background-color: #FFF3CD;
    border-left: 4px solid #FFC107;
    border-radius: ${rm(8)};
    align-items: flex-start;

    ${media.xsm`
        padding: ${rm(20)};
        gap: ${rm(12)};
    `}
`

const StyledWarningIcon = styled.div`
    width: ${rm(24)};
    height: ${rm(24)};
    color: #856404;
    flex-shrink: 0;
    margin-top: ${rm(2)};

    ${media.xsm`
        width: ${rm(20)};
        height: ${rm(20)};
    `}

    svg {
        width: 100%;
        height: 100%;
    }
`

const StyledWarningText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #856404;
    line-height: 1.6;
    margin: 0;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}

    strong {
        ${fontGeist(700)};
    }
`

const StyledInfoBox = styled.div`
    margin-top: ${rm(24)};
    padding: ${rm(32)};
    background-color: #FFFFFF;
    border-radius: ${rm(12)};
    border: 1px solid #E0E0E0;

    ${media.xsm`
        padding: ${rm(24)};
        margin-top: ${rm(20)};
    `}
`

const StyledInfoTitle = styled.h3`
    ${fontGeist(700)};
    font-size: ${rm(24)};
    color: #111111;
    margin: 0 0 ${rm(20)} 0;

    ${media.md`
        font-size: ${rm(20)};
        margin-bottom: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(18)};
        margin-bottom: ${rm(14)};
    `}
`

const StyledInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(24)};

    ${media.xsm`
        gap: ${rm(20)};
    `}
`

const StyledInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(12)};
`

const StyledInfoSubtitle = styled.h4`
    ${fontGeist(600)};
    font-size: ${rm(18)};
    color: #111111;
    margin: 0;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledInstructionsBox = styled.div`
    margin-top: ${rm(32)};
    padding: ${rm(32)};
    background-color: #F8F9FA;
    border-radius: ${rm(12)};
    border: 1px solid #E0E0E0;

    ${media.xsm`
        padding: ${rm(24)};
        margin-top: ${rm(24)};
    `}
`

const StyledInstructionsTitle = styled.h3`
    ${fontGeist(700)};
    font-size: ${rm(24)};
    color: #111111;
    margin: 0 0 ${rm(24)} 0;

    ${media.md`
        font-size: ${rm(20)};
        margin-bottom: ${rm(20)};
    `}

    ${media.xsm`
        font-size: ${rm(18)};
        margin-bottom: ${rm(16)};
    `}
`

const StyledInstructionsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(20)};

    ${media.xsm`
        gap: ${rm(16)};
    `}
`

const StyledInstructionItem = styled.div`
    display: flex;
    gap: ${rm(16)};
    align-items: flex-start;

    ${media.xsm`
        gap: ${rm(12)};
    `}
`

const StyledInstructionNumber = styled.div`
    width: ${rm(32)};
    height: ${rm(32)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111111;
    color: #FFFFFF;
    border-radius: 50%;
    ${fontGeist(700)};
    font-size: ${rm(18)};
    flex-shrink: 0;

    ${media.xsm`
        width: ${rm(28)};
        height: ${rm(28)};
        font-size: ${rm(16)};
    `}
`

const StyledInstructionText = styled.div`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    line-height: 1.6;
    flex: 1;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}

    strong {
        ${fontGeist(700)};
    }
`

