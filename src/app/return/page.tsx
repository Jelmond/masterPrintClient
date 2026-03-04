'use client'

import { media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

export default function ReturnPage() {
    return (
        <StyledReturnPage>
            <StyledContainer>
                <StyledTitle>Возврат товара</StyledTitle>

                <StyledIntroText>
                    Порядок возврата товара физическими лицами согласно требований Закона Республики Беларусь «О защите прав потребителей»
                </StyledIntroText>

                <StyledContent>
                    <StyledSection>
                        <StyledSectionTitle>1.</StyledSectionTitle>
                        <StyledText>
                            Покупатель вправе в течение 14 (четырнадцати) дней с момента передачи ему Товара, в месте приобретения (пункт-выдачи), возвратить Товар надлежащего качества или обменять его на аналогичный товар произведя в случае разницы в цене необходимый перерасчет с Продавцом. (ст. 472 ГК, п. 1 ст. 28 Закона Республики Беларусь от 09.01.2002 № 90-З «О защите прав потребителей».
                        </StyledText>
                        <StyledText>
                            При отсутствии у Продавца необходимого для обмена Товара Покупатель вправе возвратить приобретенный товар Продавцу и получить уплаченную за него денежную сумму.
                        </StyledText>
                        <StyledText>
                            Требование покупателя об обмене либо возврате товара подлежит удовлетворению, если товар не был в употреблении, сохранены его потребительские свойства и имеются доказательства приобретения его у данного Продавца.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>2.</StyledSectionTitle>
                        <StyledText>
                            Покупатель не имеет права возвратить Товар надлежащего качества, согласно Перечню непродовольственных товаров надлежащего качества, не подлежащих обмену и возврату, утвержденному постановлением Совета Министров Республики Беларусь от 14.06.2002 № 778 «О мерах по реализации Закона Республики Беларусь «О защите прав потребителей»», (печатные издания – открытки без герметичной (вакуумной) упаковки).
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>3.</StyledSectionTitle>
                        <StyledText>
                            Покупатель, которому продан Товар ненадлежащего качества, если это не было оговорено Продавцом, вправе по своему выбору потребовать, в течение гарантийного срока (срока годности):
                        </StyledText>
                        <StyledList>
                            <li>замены недоброкачественного Товара, Товаром надлежащего качества (при наличии на складе);</li>
                            <li>соразмерного уменьшения покупной цены Товара;</li>
                            <li>незамедлительного безвозмездного устранения недостатков Товара;</li>
                            <li>расторгнуть настоящий договор и потребовать возврата уплаченной за Товар денежной суммы.</li>
                        </StyledList>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>4.</StyledSectionTitle>
                        <StyledText>
                            В случае отказа Покупателя от договора, согласно условиям пункта 1. и 3. настоящего раздела, и одновременного предъявления требования о возврате уплаченной за Товар денежной суммы, стоимость Товара подлежит возврату Покупателю в течение 5 (пять) рабочих дней, с момента получения Продавцом письменного заявления Покупателя в месте нахождения Продавца.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>5.</StyledSectionTitle>
                        <StyledText>
                            Возврат Товара на условиях пункта 1. и 3. настоящего раздела осуществляется силами и за счет Покупателя.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>6.</StyledSectionTitle>
                        <StyledText>
                            Возврат денежных средств осуществляется Продавцом тем способом, которым была произведена оплата Товара.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledText>
                            Порядок возврат товара юридическим лицам и индивидуальным предпринимателям указан в <a href="/public-contracts#contract-2">публичном договоре с юридическими лицами и индивидуальными предпринимателями</a>.
                        </StyledText>
                        <StyledText>
                            Порядок возврат товара лицам, осуществляющим самостоятельную профессиональную деятельность указан в <a href="/public-contracts#contract-1">публичном договоре с физическими лицами, осуществляющим самостоятельную профессиональную деятельность</a>.
                        </StyledText>
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
