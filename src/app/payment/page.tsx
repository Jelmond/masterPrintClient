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
                            <StyledListItem>наличный расчёт;</StyledListItem>
                            <StyledListItem>банковской картой при получении через терминал (все виды карт и способов прикладывания карты);</StyledListItem>
                            <StyledListItem>банковской картой онлайн (предоплата);</StyledListItem>
                            <StyledListItem>через платёжную систему ЕРИП (предоплата).</StyledListItem>
                        </StyledList>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Покупка за наличный расчёт или банковской картой через терминал</StyledSectionTitle>
                        <StyledText>
                            При оплате за наличный расчёт или банковской картой через терминал мы связываемся с вами по э/почте или телефону, чтобы подтвердить заказ и уточнить срок доставки/получения товара. После этого производится оплата при получении товара.
                        </StyledText>
                        <StyledNoteBox>
                            <StyledNoteTitle>Для информации Покупателей:</StyledNoteTitle>
                            <StyledText>
                                Оплата при расчёте наличными средствами или банковской картой при получении товара производится в момент получения товара. Получить товар в пункте выдачи необходимо в течение 2 (двух) банковских дней с даты готовности заказа к получению, указанной в письме, подтверждающем принятие заказа к исполнению. В противном случае заказ аннулируется.
                            </StyledText>
                        </StyledNoteBox>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Оплата онлайн</StyledSectionTitle>
                        <StyledText>
                            При оплате онлайн мы связываемся с вами по э/почте или телефону, чтобы подтвердить заказ и уточнить срок доставки/получения товара. После этого вы производите оплату за товар. После оплаты вы можете забрать товар выбранным вами способом.
                        </StyledText>
                        <StyledNoteBox>
                            <StyledNoteTitle>Для информации Покупателей:</StyledNoteTitle>
                            <StyledText>
                                Оплату через ЕРИП и банковской картой (онлайн) необходимо произвести в течение 2 (двух) банковских дней с момента получения на электронную почту письма, подтверждающего принятие заказа к исполнению. В противном случае заказ аннулируется. При оплате через ЕРИП или банковской картой (онлайн) в платёжном документе указывается номер и дата заказа.
                            </StyledText>
                        </StyledNoteBox>
                        <StyledWarningBox>
                            <StyledWarningIcon>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </StyledWarningIcon>
                            <StyledWarningText>
                                <strong>Внимание!</strong> К оплате принимаются следующие карты: Visa (любых банков); MasterCard (любых банков); БЕЛКАРТ (эмитированные «Приорбанк» ОАО). К оплате не принимаются карты: Maestro; БЕЛКАРТ (эмитированные иными банками).
                            </StyledWarningText>
                        </StyledWarningBox>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Оплата через платёжную систему ЕРИП</StyledSectionTitle>
                        <StyledText>
                            Оплатить товары интернет-магазина <strong>mppshop.by</strong> Вы можете через систему «Расчёт» (ЕРИП).
                        </StyledText>
                        <StyledInstructionsBox>
                            <StyledInstructionsTitle>Для проведения платежа через платёжную систему ЕРИП необходимо:</StyledInstructionsTitle>
                            <StyledInstructionsList>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>1</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Выбрать: Пункт «Система «Расчёт» (ЕРИП) → Сервис E-POS → E-POS – оплата товаров и услуг.
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>2</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Ввести код услуги в E-POS и номер заказа (указанный в письме, подтверждающем принятие заказа к исполнению).
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>3</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Ввести сумму платежа, указанную в письме, подтверждающем принятие заказа к исполнению (если не указана).
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>4</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Проверить корректность информации.
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>5</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Совершить платёж.
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                            </StyledInstructionsList>
                        </StyledInstructionsBox>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Для юридических лиц, индивидуальных предпринимателей, лиц, осуществляющих самостоятельную профессиональную деятельность:</StyledSectionTitle>
                        <StyledList>
                            <StyledListItem>оплата по расчётному счёту (путём внесения 100% предоплаты);</StyledListItem>
                            <StyledListItem>через платёжную систему ЕРИП (путём внесения 100% предоплаты).</StyledListItem>
                        </StyledList>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Оплата по расчётному счёту</StyledSectionTitle>
                        <StyledText>
                            При оплате по расчётному счёту мы направляем на э/почту счёт, чтобы подтвердить заказ и уточнить срок доставки/получения товара. После этого вы производите оплату товара (при оплате в платёжном документе указывается номер и дата счёта). После оплаты вы можете забрать товар в пункте выдачи или вам осуществляется доставка, в зависимости от выбранного вами способа доставки.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Оплата через платёжную систему ЕРИП</StyledSectionTitle>
                        <StyledText>
                            Оплатить товары интернет-магазина <strong>mppshop.by</strong> Вы можете через систему «Расчёт» (ЕРИП).
                        </StyledText>
                        <StyledInstructionsBox>
                            <StyledInstructionsTitle>ДЛЯ ПРОВЕДЕНИЯ ПЛАТЕЖА ЧЕРЕЗ ПЛАТЕЖНУЮ СИСТЕМУ ЕРИП НЕОБХОДИМО:</StyledInstructionsTitle>
                            <StyledInstructionsList>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>1</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Выбрать: Пункт «Система «Расчёт» (ЕРИП) → Сервис E-POS → E-POS – оплата товаров и услуг.
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>2</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Ввести код услуги в E-POS и номер счёта (указанный в письме, подтверждающем принятие заказа к исполнению).
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>3</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Ввести сумму платежа, указанную в счёте (если не указана).
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>4</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Проверить корректность информации.
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                                <StyledInstructionItem>
                                    <StyledInstructionNumber>5</StyledInstructionNumber>
                                    <StyledInstructionText>
                                        Совершить платёж.
                                    </StyledInstructionText>
                                </StyledInstructionItem>
                            </StyledInstructionsList>
                        </StyledInstructionsBox>
                    </StyledSection>

                    <StyledSection>
                        <StyledText>
                            Возврат денежных средств Покупателю при его осуществлении производится в том же порядке, в котором производилась оплата.
                        </StyledText>
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

const StyledNoteBox = styled.div`
    padding: ${rm(20)} ${rm(24)};
    background-color: #F8F9FA;
    border-left: 4px solid #6c757d;
    border-radius: ${rm(8)};
    margin-top: ${rm(8)};

    ${media.xsm`
        padding: ${rm(16)} ${rm(20)};
    `}
`

const StyledNoteTitle = styled.span`
    ${fontGeist(600)};
    font-size: ${rm(16)};
    color: #111111;
    display: block;
    margin-bottom: ${rm(8)};

    ${media.xsm`
        font-size: ${rm(14)};
    `}
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

