'use client'

import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"
import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

/**
 * Краткая выжимка из Положения О применении скидок на продукцию (ООО «Мастерпринт-Пак»).
 * Полный текст утверждённой редакции хранится у организации и публикуется на сайте.
 */
export default function PromotionsView() {
    return (
        <StyledPage>
            <StyledContainer>
                <StyledTitle>Скидки и акции</StyledTitle>

                <StyledIntro>
                    <StyledText>
                        Ниже приведены <strong>ключевые положения</strong> из документа{' '}
                        <strong>«О применении скидок на продукцию»</strong> ООО «Мастерпринт-Пак»
                        (г. Скидель, утверждено 01.03.2026 г.). Это не полный текст Положения, а
                        справочная информация для покупателей интернет-магазина{' '}
                        <strong>mppshop.by</strong>.
                    </StyledText>
                </StyledIntro>

                <StyledHighlightCards>
                    <StyledPromoCard>
                        <StyledIconWrap aria-hidden>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </StyledIconWrap>
                        <StyledCardTitle>Скидки на самовывоз</StyledCardTitle>
                        <StyledCardDesc>
                            Скидка 3% при самовывозе с пункта выдачи в Гродно.
                        </StyledCardDesc>
                    </StyledPromoCard>
                    <StyledPromoCard>
                        <StyledIconWrap aria-hidden>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.5 5.5L5.5 18.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <circle cx="8.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="15.5" cy="15.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </StyledIconWrap>
                        <StyledCardTitle>Удобные цены</StyledCardTitle>
                        <StyledCardDesc>
                            При заказах от 700 руб. и 1&nbsp;500 руб. скидки 5% и 20%, соответственно.
                        </StyledCardDesc>
                    </StyledPromoCard>
                </StyledHighlightCards>

                <StyledContent>
                    <StyledBlockTitle>Скидки, установленные Положением</StyledBlockTitle>
                    <StyledSection>
                        <StyledSubTitle>За объём приобретённой продукции</StyledSubTitle>
                        <StyledText>
                            Скидка с <strong>отпускной цены (с НДС)</strong> при сумме заказа:
                        </StyledText>
                        <StyledList>
                            <li>
                                свыше <strong>700,00 BYN</strong> — скидка <strong>5%</strong>;
                            </li>
                            <li>
                                свыше <strong>1&nbsp;500,00 BYN</strong> — скидка <strong>20%</strong>.
                            </li>
                        </StyledList>
                        <StyledSubTitle>Самовывоз</StyledSubTitle>
                        <StyledText>
                            При самовывозе продукции предоставляется скидка с отпускной цены{' '}
                            <strong>3%</strong>. Подробности о пункте выдачи — в разделе{' '}
                            <AnimLink href="/delivery">«Доставка»</AnimLink>.
                        </StyledText>
                    </StyledSection>

                    <StyledBlockTitle>Суммирование скидок, промокодов и акций</StyledBlockTitle>
                    <StyledSection>
                        <StyledList>
                            <li>
                                Скидки за <strong>объём</strong> и за <strong>самовывоз</strong> могут{' '}
                                <strong>суммироваться</strong>, если выполняются условия обоих пунктов
                                Положения одновременно.
                            </li>
                            <li>
                                <strong>Промокод</strong> может применяться к стоимости заказа, товара
                                и/или услуги по доставке. В одном заказе допускается использование{' '}
                                <strong>только одного</strong> промокода. Скидки по промокоду{' '}
                                <strong>суммируются</strong> с иными скидками, действующими на Сайте.
                            </li>
                            <li>
                                <strong>Акции</strong> (в том числе кратковременные): скидки по акции{' '}
                                <strong>суммируются</strong> со скидками по промокодам, другими
                                скидками и иными акциями, проводимыми на Сайте.
                            </li>
                        </StyledList>
                    </StyledSection>

                    <StyledBlockTitle>Изменение и отмена условий продавцом</StyledBlockTitle>
                    <StyledSection>
                        <StyledHighlight>
                            <StyledText>
                                ООО «Мастерпринт-Пак» вправе <strong>вносить изменения</strong> в
                                Положение, в перечень товаров, в отношении которых предоставляются
                                скидка, промокод или акция, а также <strong>изменять размер</strong>{' '}
                                скидки, промокода или акции <strong>в любое время</strong> без
                                предварительного уведомления Покупателя. Сведения об изменениях{' '}
                                <strong>публикуются на сайте</strong> интернет-магазина в день
                                вступления изменений в силу.
                            </StyledText>
                            <StyledText style={{ marginTop: rm(16) }}>
                                Продавец оставляет за собой право в любое время{' '}
                                <strong>приостановить, изменить или отменить</strong> Положение с
                                размещением информации на сайте; это <strong>не влечёт</strong> для
                                ООО «Мастерпринт-Пак» <strong>какой-либо ответственности</strong>.
                                При прекращении действия Положения на сайте публикуется сообщение о
                                прекращении действия скидок, промокодов и акций.
                            </StyledText>
                        </StyledHighlight>
                    </StyledSection>

                    <StyledBlockTitle>Кратковременные акции и актуальные предложения</StyledBlockTitle>
                    <StyledSection>
                        <StyledText>
                            ООО «Мастерпринт-Пак» вправе проводить <strong>различные акции</strong>,
                            в том числе ограниченные по сроку. Срок действия скидок, промокодов и
                            акций, а также иные условия их применения указываются в{' '}
                            <strong>информационных материалах</strong> (на сайте, в описаниях акций,
                            при необходимости — в SMS, e-mail, социальных сетях и др.).
                        </StyledText>
                        <StyledText>
                            Товары со сниженной ценой в рамках акций вы можете посмотреть в{' '}
                            <strong>каталоге</strong>: откройте нужную категорию и включите фильтр{' '}
                            <strong>«Акции»</strong>.
                        </StyledText>
                        <StyledCta>
                            <AnimLink href="/catalog">Перейти в каталог</AnimLink>
                        </StyledCta>
                    </StyledSection>

                    <StyledBlockTitle>Дополнительно</StyledBlockTitle>
                    <StyledSection>
                        <StyledList>
                            <li>
                                Положение <strong>не распространяется</strong> на продукцию по
                                индивидуальным заказам и на продукцию для дальнейшей переработки
                                заказчиком.
                            </li>
                            <li>
                                При возврате товара, приобретённого со скидкой, по промокоду или в
                                рамках акции, Покупателю возвращается сумма с учётом предоставленной
                                скидки (фактически уплаченная цена).
                            </li>
                        </StyledList>
                    </StyledSection>
                </StyledContent>
            </StyledContainer>
        </StyledPage>
    )
}

const StyledPage = styled.div`
    min-height: 100vh;
    padding-top: ${rm(80)};
    background-color: #e6e8e6;
    padding-bottom: ${rm(80)};

    ${media.xsm`
        padding-top: ${rm(60)};
        padding-bottom: ${rm(60)};
    `}
`

const StyledContainer = styled.div`
    max-width: ${rm(900)};
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
    margin: 0 0 ${rm(28)} 0;
    text-align: center;

    ${media.md`
        font-size: ${rm(36)};
    `}

    ${media.xsm`
        font-size: ${rm(28)};
        margin-bottom: ${rm(20)};
    `}
`

const StyledIntro = styled.div`
    margin-bottom: ${rm(40)};
    padding: ${rm(24)} ${rm(28)};
    background: ${colors.white100};
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.xsm`
        padding: ${rm(18)} ${rm(16)};
        margin-bottom: ${rm(28)};
    `}
`

const StyledHighlightCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${rm(24)};
    margin-bottom: ${rm(40)};
    max-width: ${rm(720)};
    margin-left: auto;
    margin-right: auto;

    ${media.xsm`
        grid-template-columns: 1fr;
        gap: ${rm(16)};
        margin-bottom: ${rm(28)};
    `}
`

const StyledPromoCard = styled.div`
    text-align: center;
    background: ${colors.white100};
    border-radius: ${rm(14)};
    padding: ${rm(28)} ${rm(22)} ${rm(32)};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);

    ${media.xsm`
        padding: ${rm(22)} ${rm(18)} ${rm(26)};
    `}
`

const StyledIconWrap = styled.div`
    width: ${rm(72)};
    height: ${rm(72)};
    margin: 0 auto ${rm(18)};
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eceeec;
    border-radius: ${rm(12)};
    color: #1c1c1c;

    ${media.xsm`
        width: ${rm(64)};
        height: ${rm(64)};
        margin-bottom: ${rm(14)};
    `}
`

const StyledCardTitle = styled.h3`
    margin: 0 0 ${rm(12)} 0;
    ${fontGeist(700)};
    font-size: ${rm(18)};
    color: #111111;
    line-height: 1.3;

    ${media.xsm`
        font-size: ${rm(16)};
        margin-bottom: ${rm(10)};
    `}
`

const StyledCardDesc = styled.p`
    margin: 0;
    ${fontGeist(400)};
    font-size: ${rm(15)};
    color: #4a4a4a;
    line-height: 1.55;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(36)};

    ${media.xsm`
        gap: ${rm(28)};
    `}
`

const StyledBlockTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(24)};
    color: #111111;
    margin: 0;
    padding-bottom: ${rm(10)};
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);

    ${media.xsm`
        font-size: ${rm(20)};
    `}
`

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${rm(16)};
    background-color: ${colors.white100};
    padding: ${rm(32)};
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.xsm`
        padding: ${rm(22)} ${rm(18)};
    `}
`

const StyledSubTitle = styled.h3`
    ${fontGeist(600)};
    font-size: ${rm(18)};
    color: #1c1c1c;
    margin: ${rm(8)} 0 0 0;

    ${media.xsm`
        font-size: ${rm(16)};
    `}
`

const StyledText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(17)};
    color: #1c1c1c;
    line-height: 1.65;
    margin: 0;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}

    strong {
        ${fontGeist(600)};
        color: #111;
    }

    a {
        color: #1c1c1c;
        text-decoration: underline;
        text-underline-offset: 3px;
    }
`

const StyledList = styled.ul`
    margin: 0;
    padding-left: ${rm(22)};
    ${fontGeist(400)};
    font-size: ${rm(17)};
    color: #1c1c1c;
    line-height: 1.65;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        padding-left: ${rm(18)};
    `}

    li {
        margin-bottom: ${rm(10)};
    }

    strong {
        ${fontGeist(600)};
    }
`

const StyledHighlight = styled.div`
    border-left: 4px solid #1c1c1c;
    padding-left: ${rm(20)};
    margin: 0;

    ${media.xsm`
        padding-left: ${rm(14)};
    `}
`

const StyledCta = styled.div`
    margin-top: ${rm(8)};

    a {
        display: inline-block;
        ${fontGeist(600)};
        font-size: ${rm(16)};
        color: ${colors.white100};
        background: #1c1c1c;
        padding: ${rm(12)} ${rm(24)};
        border-radius: ${rm(8)};
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.88;
        }
    }
`
