'use client'

import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

export default function DeliveryPage() {
    return (
        <StyledDeliveryPage>
            <StyledContainer>
                <StyledTitle>Доставка</StyledTitle>
                
                <StyledContent>
                    <StyledBlockTitle>Для физических лиц:</StyledBlockTitle>

                    <StyledSection>
                        <StyledSectionHeader>
                            <StyledSectionNumber>1</StyledSectionNumber>
                            <StyledSectionTitle>Самовывоз в пункте выдачи</StyledSectionTitle>
                        </StyledSectionHeader>
                        <StyledSectionContent>
                            <StyledText>
                                По адресу: <strong>г. Гродно, ул. Титова, 24</strong>.
                            </StyledText>
                            <StyledInfoBox>
                                <StyledInfoRow>
                                    <StyledInfoLabel>График работы:</StyledInfoLabel>
                                    <StyledInfoValue>понедельник–пятница, с 09:00 до 17:00, без обеда.</StyledInfoValue>
                                </StyledInfoRow>
                            </StyledInfoBox>
                            <StyledBonusBox>
                                <StyledBonusIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledBonusIcon>
                                <StyledBonusText>
                                    При самовывозе действует скидка 3% на весь заказ — это наш бонус за оперативность и экономию на доставке.
                                </StyledBonusText>
                            </StyledBonusBox>
                        </StyledSectionContent>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionHeader>
                            <StyledSectionNumber>2</StyledSectionNumber>
                            <StyledSectionTitle>РУП «Белпочта» (по Республике Беларусь)</StyledSectionTitle>
                        </StyledSectionHeader>
                        <StyledSectionContent>
                            <StyledText>
                                Доставка производится в соответствии с тарифами и в сроки, приведёнными РУП «Белпочта», за счёт покупателя. Оплата товара производится выбранным вами способом онлайн или при его получении на почте.
                            </StyledText>
                            <StyledNoteBox>
                                <StyledNoteTitle>Примечание:</StyledNoteTitle>
                                <StyledText>
                                    В случае если принять заказ никто не может, доставка заказа считается выполненной; или если оказалось, что адрес указан некорректно, то доставка также считается выполненной полностью, и сумма оплаты за заказ возврату не подлежит.
                                    Продавец не возмещает Покупателю стоимость товаров, недоставленных в результате указания Покупателем ошибочного (неверного, некорректного) адреса или в случае, если Покупатель по своей вине не забрал товар, доставленный РУП «Белпочта». В данных случаях Покупатель забирает товар в пункте выдачи (г. Гродно, ул. Титова, 24).
                                </StyledText>
                            </StyledNoteBox>
                        </StyledSectionContent>
                    </StyledSection>

                    <StyledBlockTitle>Для информации Покупателей:</StyledBlockTitle>

                    <StyledSection>
                        <StyledSectionContent>
                            <StyledNumberedItem><strong>4.</strong> Покупатель вправе в течение 14 (четырнадцати) дней с момента передачи ему товара возвратить товар надлежащего качества или обменять его на аналогичный товар, произведя в случае разницы в цене необходимый перерасчёт (ст. 472 ГК, п. 1 ст. 28 Закона Республики Беларусь от 09.01.2002 № 90-З «О защите прав потребителей»). При отсутствии на складе необходимого для обмена товара Покупатель вправе возвратить приобретённый товар и получить уплаченную за него денежную сумму. Требование покупателя об обмене либо возврате товара подлежит удовлетворению, если товар не был в употреблении, сохранены его потребительские свойства и имеются доказательства приобретения его у данного Продавца.</StyledNumberedItem>
                            <StyledNumberedItem><strong>5.</strong> Покупатель не имеет права возвратить товар надлежащего качества, согласно Перечню непродовольственных товаров надлежащего качества, не подлежащих обмену и возврату, утверждённому постановлением Совета Министров Республики Беларусь от 14.06.2002 № 778 «О мерах по реализации Закона Республики Беларусь «О защите прав потребителей»» (печатные издания – открытки без герметичной (вакуумной) упаковки).</StyledNumberedItem>
                            <StyledNumberedItem><strong>6.</strong> Покупатель, которому продан товар ненадлежащего качества, если это не было оговорено Продавцом, вправе по своему выбору потребовать в течение гарантийного срока (срока годности): замены недоброкачественного товара товаром надлежащего качества (при наличии на складе); соразмерного уменьшения покупной цены товара; незамедлительного безвозмездного устранения недостатков товара; расторгнуть публичный договор и потребовать возврата уплаченной за товар денежной суммы.</StyledNumberedItem>
                            <StyledNumberedItem><strong>7.</strong> В случае отказа Покупателя от договора согласно условиям пунктов 4 и 6 настоящего приложения (для физических лиц) и одновременного предъявления требования о возврате уплаченной за товар денежной суммы стоимость товара подлежит возврату Покупателю в течение 5 (пять) рабочих дней с момента получения Продавцом письменного заявления Покупателя в месте нахождения Продавца. Возврат денежных средств осуществляется тем способом, которым была произведена оплата товара.</StyledNumberedItem>
                            <StyledNumberedItem><strong>8.</strong> Возврат товара на условиях пунктов 4 и 6 настоящего приложения (для физических лиц) осуществляется силами и за счёт Покупателя.</StyledNumberedItem>
                        </StyledSectionContent>
                    </StyledSection>

                    <StyledBlockTitle>Для юридических лиц, индивидуальных предпринимателей и лиц, осуществляющих самостоятельную профессиональную деятельность:</StyledBlockTitle>

                    <StyledSection>
                        <StyledSectionHeader>
                            <StyledSectionNumber>1</StyledSectionNumber>
                            <StyledSectionTitle>Самовывоз в пункте выдачи</StyledSectionTitle>
                        </StyledSectionHeader>
                        <StyledSectionContent>
                            <StyledText>По адресу: <strong>г. Гродно, ул. Титова, 24</strong>.</StyledText>
                            <StyledInfoBox>
                                <StyledInfoRow>
                                    <StyledInfoLabel>График работы:</StyledInfoLabel>
                                    <StyledInfoValue>понедельник–пятница, с 09:00 до 17:00, без обеда.</StyledInfoValue>
                                </StyledInfoRow>
                            </StyledInfoBox>
                            <StyledBonusBox>
                                <StyledBonusIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledBonusIcon>
                                <StyledBonusText>
                                    При самовывозе действует скидка 3% на весь заказ — это наш бонус за оперативность и экономию на доставке.
                                </StyledBonusText>
                            </StyledBonusBox>
                        </StyledSectionContent>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionHeader>
                            <StyledSectionNumber>2</StyledSectionNumber>
                            <StyledSectionTitle>Доставка Door-to-Door от DPD (ИООО «ДПД Бел»)</StyledSectionTitle>
                        </StyledSectionHeader>
                        <StyledSectionContent>
                            <StyledFeaturesList>
                                <StyledFeatureItem>
                                    <StyledFeatureContent>
                                        <StyledFeatureTitle>Бесплатная доставка:</StyledFeatureTitle>
                                        <StyledFeatureValue>при заказе от 200,00 (двести рублей, 00 копеек) белорусских рублей.</StyledFeatureValue>
                                    </StyledFeatureContent>
                                </StyledFeatureItem>
                                <StyledFeatureItem>
                                    <StyledFeatureContent>
                                        <StyledFeatureTitle>Доставка осуществляется:</StyledFeatureTitle>
                                        <StyledFeatureValue>по всей Республике Беларусь.</StyledFeatureValue>
                                    </StyledFeatureContent>
                                </StyledFeatureItem>
                                <StyledFeatureItem>
                                    <StyledFeatureContent>
                                        <StyledFeatureTitle>Сроки:</StyledFeatureTitle>
                                        <StyledFeatureValue>DPD доставляет быстро и стабильно — в среднем 2–3 рабочих дня в зависимости от города.</StyledFeatureValue>
                                    </StyledFeatureContent>
                                </StyledFeatureItem>
                            </StyledFeaturesList>
                            <StyledNoteBox>
                                <StyledNoteTitle>Примечание:</StyledNoteTitle>
                                <StyledText>
                                    В случае если адрес доставки указан некорректно, доставка считается выполненной полностью, и сумма оплаты за заказ возврату не подлежит. В данном случае Покупатель забирает товар в пункте выдачи (г. Гродно, ул. Титова, 24).
                                </StyledText>
                            </StyledNoteBox>
                        </StyledSectionContent>
                    </StyledSection>
                </StyledContent>
            </StyledContainer>
        </StyledDeliveryPage>
    )
}

const StyledDeliveryPage = styled.div`
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

const StyledBlockTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(26)};
    color: #111111;
    margin: 0 0 ${rm(20)} 0;
    padding-bottom: ${rm(12)};
    border-bottom: 2px solid #E6E8E6;

    ${media.md`
        font-size: ${rm(22)};
        margin-bottom: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(20)};
        margin-bottom: ${rm(14)};
    `}
`

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(32)};
    background-color: #FFFFFF;
    padding: ${rm(40)};
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.md`
        padding: ${rm(32)};
        gap: ${rm(28)};
    `}

    ${media.xsm`
        padding: ${rm(24)};
        gap: ${rm(24)};
    `}
`

const StyledSectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(20)};
    padding-bottom: ${rm(24)};
    border-bottom: 2px solid #E6E8E6;

    ${media.xsm`
        gap: ${rm(16)};
        padding-bottom: ${rm(20)};
    `}
`

const StyledSectionNumber = styled.div`
    width: ${rm(48)};
    height: ${rm(48)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111111;
    color: #FFFFFF;
    border-radius: 50%;
    ${fontGeist(700)};
    font-size: ${rm(24)};
    flex-shrink: 0;

    ${media.xsm`
        width: ${rm(40)};
        height: ${rm(40)};
        font-size: ${rm(20)};
    `}
`

const StyledSectionTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(34)};
    color: #111111;
    margin: 0;
    flex: 1;

    ${media.md`
        font-size: ${rm(28)};
    `}

    ${media.xsm`
        font-size: ${rm(24)};
    `}
`

const StyledSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(24)};
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

const StyledInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(16)};
    padding: ${rm(24)};
    background-color: #F8F9FA;
    border-radius: ${rm(8)};
    border: 1px solid #E0E0E0;

    ${media.xsm`
        padding: ${rm(20)};
        gap: ${rm(14)};
    `}
`

const StyledInfoRow = styled.div`
    display: flex;
    gap: ${rm(16)};
    align-items: flex-start;

    ${media.xsm`
        flex-direction: column;
        gap: ${rm(8)};
    `}
`

const StyledInfoLabel = styled.div`
    ${fontGeist(600)};
    font-size: ${rm(16)};
    color: #111111;
    display: flex;
    align-items: center;
    gap: ${rm(8)};
    min-width: ${rm(160)};

    ${media.xsm`
        font-size: ${rm(14)};
        min-width: auto;
    `}

    svg {
        width: ${rm(20)};
        height: ${rm(20)};
        color: #111111;
        flex-shrink: 0;

        ${media.xsm`
            width: ${rm(18)};
            height: ${rm(18)};
        `}
    }
`

const StyledNoteBox = styled.div`
    padding: ${rm(20)} ${rm(24)};
    background-color: #FFF8E6;
    border-left: 4px solid #E6A800;
    border-radius: ${rm(8)};
    margin-top: ${rm(16)};

    ${media.xsm`
        padding: ${rm(16)} ${rm(20)};
    `}
`

const StyledNoteTitle = styled.span`
    ${fontGeist(600)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    display: block;
    margin-bottom: ${rm(8)};

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledNumberedItem = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.6;
    margin: 0 0 ${rm(16)} 0;

    ${media.xsm`
        font-size: ${rm(14)};
        margin-bottom: ${rm(12)};
    `}

    &:last-child {
        margin-bottom: 0;
    }

    strong {
        ${fontGeist(600)};
    }
`

const StyledInfoValue = styled.div`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.5;
    flex: 1;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledBonusBox = styled.div`
    display: flex;
    gap: ${rm(16)};
    padding: ${rm(24)};
    background-color: #E8F5E9;
    border-left: 4px solid #4CAF50;
    border-radius: ${rm(8)};
    align-items: flex-start;

    ${media.xsm`
        padding: ${rm(20)};
        gap: ${rm(12)};
    `}
`

const StyledBonusIcon = styled.div`
    width: ${rm(24)};
    height: ${rm(24)};
    color: #4CAF50;
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

const StyledBonusText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #2E7D32;
    line-height: 1.6;
    margin: 0;
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

const StyledFeaturesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(20)};
    margin-top: ${rm(8)};

    ${media.xsm`
        gap: ${rm(16)};
    `}
`

const StyledFeatureItem = styled.div`
    display: flex;
    gap: ${rm(16)};
    align-items: flex-start;
    padding: ${rm(20)};
    background-color: #F8F9FA;
    border-radius: ${rm(8)};
    border: 1px solid #E0E0E0;

    ${media.xsm`
        padding: ${rm(16)};
        gap: ${rm(12)};
    `}
`

const StyledFeatureIcon = styled.div`
    width: ${rm(40)};
    height: ${rm(40)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: ${rm(8)};
    flex-shrink: 0;
    color: #111111;

    ${media.xsm`
        width: ${rm(36)};
        height: ${rm(36)};
    `}

    svg {
        width: ${rm(20)};
        height: ${rm(20)};

        ${media.xsm`
            width: ${rm(18)};
            height: ${rm(18)};
        `}
    }
`

const StyledFeatureContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(4)};
    flex: 1;
`

const StyledFeatureTitle = styled.h4`
    ${fontGeist(600)};
    font-size: ${rm(16)};
    color: #111111;
    margin: 0;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledFeatureValue = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.5;
    margin: 0;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledDeliveryInfo = styled.div`
    display: flex;
    gap: ${rm(16)};
    padding: ${rm(24)};
    background-color: #E3F2FD;
    border-left: 4px solid #2196F3;
    border-radius: ${rm(8)};
    align-items: flex-start;
    margin-top: ${rm(8)};

    ${media.xsm`
        padding: ${rm(20)};
        gap: ${rm(12)};
    `}
`

const StyledDeliveryIcon = styled.div`
    width: ${rm(24)};
    height: ${rm(24)};
    color: #2196F3;
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

const StyledDeliveryText = styled.p`
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

    strong {
        ${fontGeist(700)};
    }
`

