'use client'

import { media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { useEffect, useLayoutEffect } from "react"
import { FaqAccordionItem } from "@/components/FaqAccordion/FaqAccordion"

export default function AboutPage() {
    useLayoutEffect(() => {
        const id = window.location.hash.replace(/^#/, "")
        if (!id) return
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [])

    useEffect(() => {
        const scrollToHash = () => {
            const id = window.location.hash.replace(/^#/, "")
            if (!id) return
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        window.addEventListener("hashchange", scrollToHash)
        return () => window.removeEventListener("hashchange", scrollToHash)
    }, [])

    return (
        <StyledAboutPage>
            <StyledContainer>
                <StyledTitle>О Нас</StyledTitle>
                <StyledContent>
                    <StyledSection>
                        <StyledSectionTitle>ООО &quot;Мастерпринт-Пак&quot;</StyledSectionTitle>
                        <StyledText>
                            Мы — надежный поставщик упаковочных решений и полиграфической продукции. 
                            Наша компания специализируется на производстве и продаже качественной упаковки 
                            для различных отраслей промышленности.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Наша Миссия</StyledSectionTitle>
                        <StyledText>
                            Предоставлять нашим клиентам высококачественную упаковочную продукцию, 
                            которая не только защищает товары, но и способствует их успешному продвижению на рынке.
                        </StyledText>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Почему Выбирают Нас</StyledSectionTitle>
                        <StyledFeaturesList>
                            <StyledFeatureItem>
                                <StyledFeatureIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledFeatureIcon>
                                <div>
                                    <StyledFeatureTitle>Собственное Производство</StyledFeatureTitle>
                                    <StyledFeatureText>Полный контроль качества на всех этапах производства</StyledFeatureText>
                                </div>
                            </StyledFeatureItem>
                            <StyledFeatureItem>
                                <StyledFeatureIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledFeatureIcon>
                                <div>
                                    <StyledFeatureTitle>Широкий Ассортимент</StyledFeatureTitle>
                                    <StyledFeatureText>Большой выбор упаковочных решений для любых задач</StyledFeatureText>
                                </div>
                            </StyledFeatureItem>
                            <StyledFeatureItem>
                                <StyledFeatureIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledFeatureIcon>
                                <div>
                                    <StyledFeatureTitle>Выгодные Цены</StyledFeatureTitle>
                                    <StyledFeatureText>Конкурентные цены и гибкая система скидок</StyledFeatureText>
                                </div>
                            </StyledFeatureItem>
                            <StyledFeatureItem>
                                <StyledFeatureIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledFeatureIcon>
                                <div>
                                    <StyledFeatureTitle>Быстрая Доставка</StyledFeatureTitle>
                                    <StyledFeatureText>Оперативная доставка по всей Беларуси</StyledFeatureText>
                                </div>
                            </StyledFeatureItem>
                        </StyledFeaturesList>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionTitle>Реквизиты</StyledSectionTitle>
                        <StyledInfoList>
                            <StyledInfoItem>
                                <StyledInfoLabel>УНП:</StyledInfoLabel>
                                <StyledInfoValue>591511468</StyledInfoValue>
                            </StyledInfoItem>
                            <StyledInfoItem>
                                <StyledInfoLabel>Юридический адрес:</StyledInfoLabel>
                                <StyledInfoValue>231761, г. Скидель, ул. Промышленная, 6Б</StyledInfoValue>
                            </StyledInfoItem>
                            <StyledInfoItem>
                                <StyledInfoLabel>Свидетельство о государственной регистрации:</StyledInfoLabel>
                                <StyledInfoValue>Регистрирующий орган: Гродненский райисполком-дата решения о государственной регистрации 18.02.2014</StyledInfoValue>
                            </StyledInfoItem>
                        </StyledInfoList>
                    </StyledSection>

                    <StyledFaqSection id="faq" aria-labelledby="faq-heading">
                        <StyledFaqPageTitle id="faq-heading">FAQ — MPP Shop</StyledFaqPageTitle>
                        <StyledFaqList>
                            <FaqAccordionItem itemId="faq-1" question="1. Как работает MPP Shop?">
                                <StyledText>
                                    Вы выбираете готовый товар, оформляете заказ — мы отправляем со склада.
                                </StyledText>
                                <StyledText>
                                    Все позиции уже произведены, поэтому нет ожидания производства.
                                </StyledText>
                            </FaqAccordionItem>
                            <FaqAccordionItem itemId="faq-2" question="2. Когда отправят мой заказ?">
                                <StyledText>
                                    Отправка осуществляется в течение 1–2 рабочих дней после подтверждения заказа.
                                </StyledText>
                            </FaqAccordionItem>
                            <FaqAccordionItem itemId="faq-3" question="3. Какие есть способы доставки?">
                                <StyledText>
                                    <strong>Самовывоз:</strong>
                                    <br />
                                    г. Гродно, ул. Титова, 24
                                    <br />
                                    Пн–Пт: 09:00–17:00
                                    <br />
                                    Скидка 3% при самовывозе.
                                </StyledText>
                                <StyledText>
                                    <strong>Доставка по Беларуси:</strong>
                                </StyledText>
                                <StyledBulletList>
                                    <li>Белпочта (для физ. лиц)</li>
                                    <li>
                                        DPD (для юр. лиц и ИП, бесплатно от 200 BYN, срок 2–3 дня)
                                    </li>
                                </StyledBulletList>
                            </FaqAccordionItem>
                            <FaqAccordionItem itemId="faq-4" question="4. Какие есть способы оплаты?">
                                <StyledText>
                                    <strong>Физические лица:</strong>
                                </StyledText>
                                <StyledBulletList>
                                    <li>наличные при получении</li>
                                    <li>карта при получении</li>
                                    <li>онлайн-оплата</li>
                                    <li>ЕРИП</li>
                                </StyledBulletList>
                                <StyledText>
                                    <strong>Юридические лица и ИП:</strong>
                                </StyledText>
                                <StyledBulletList>
                                    <li>оплата по счёту (100% предоплата)</li>
                                    <li>ЕРИП</li>
                                </StyledBulletList>
                            </FaqAccordionItem>
                            <FaqAccordionItem itemId="faq-5" question="5. Как проходит оплата?">
                                <StyledText>
                                    После оформления заказа мы связываемся с вами для подтверждения. Оплату или
                                    получение необходимо выполнить в течение 2 банковских дней, иначе заказ
                                    аннулируется.
                                </StyledText>
                            </FaqAccordionItem>
                            <FaqAccordionItem itemId="faq-6" question="6. Какие скидки доступны?">
                                <StyledBulletList>
                                    <li>3% при самовывозе</li>
                                    <li>5% при заказе от 700 BYN</li>
                                    <li>20% при заказе от 1500 BYN</li>
                                </StyledBulletList>
                                <StyledText>
                                    Скидки могут суммироваться. Также доступны промокоды и акции.
                                </StyledText>
                            </FaqAccordionItem>
                            <FaqAccordionItem itemId="faq-7" question="7. Что важно учитывать при доставке?">
                                <StyledText>Необходимо указывать корректный адрес.</StyledText>
                                <StyledText>
                                    Если заказ не был получен по вине покупателя, он считается доставленным. В этом
                                    случае заказ можно забрать в пункте самовывоза.
                                </StyledText>
                            </FaqAccordionItem>
                            <FaqAccordionItem itemId="faq-8" question="8. Нужен индивидуальный заказ?">
                                <StyledText>Если вам требуется:</StyledText>
                                <StyledBulletList>
                                    <li>добавить логотип</li>
                                    <li>изменить дизайн</li>
                                    <li>сделать уникальный продукт под бренд</li>
                                    <li>нестандартные размеры или конструкция</li>
                                </StyledBulletList>
                                <StyledText>
                                    Мы передадим ваш запрос в основную типографию. Менеджеры рассчитают стоимость и
                                    предложат решение.
                                </StyledText>
                            </FaqAccordionItem>
                            <FaqAccordionItem itemId="faq-9" question="9. Чем MPP Shop отличается от типографии?">
                                <StyledText>
                                    <strong>MPP Shop</strong> — готовые товары, наличие на складе, быстрая отправка.
                                </StyledText>
                                <StyledText>
                                    <strong>Типография</strong> — индивидуальные решения, производство под заказ.
                                </StyledText>
                            </FaqAccordionItem>
                        </StyledFaqList>
                    </StyledFaqSection>
                </StyledContent>
            </StyledContainer>
        </StyledAboutPage>
    )
}

const StyledAboutPage = styled.div`
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
`

const StyledFeaturesList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${rm(30)};

    ${media.md`
        grid-template-columns: 1fr;
        gap: ${rm(24)};
    `}

    ${media.xsm`
        gap: ${rm(20)};
    `}
`

const StyledFeatureItem = styled.div`
    display: flex;
    gap: ${rm(20)};
    align-items: flex-start;

    ${media.xsm`
        gap: ${rm(16)};
    `}
`

const StyledFeatureIcon = styled.div`
    width: ${rm(48)};
    height: ${rm(48)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: ${rm(8)};
    flex-shrink: 0;
    color: #111111;

    ${media.xsm`
        width: ${rm(40)};
        height: ${rm(40)};
    `}

    svg {
        width: ${rm(24)};
        height: ${rm(24)};

        ${media.xsm`
            width: ${rm(20)};
            height: ${rm(20)};
        `}
    }
`

const StyledFeatureTitle = styled.h3`
    ${fontGeist(600)};
    font-size: ${rm(20)};
    color: #111111;
    margin: 0 0 ${rm(8)} 0;

    ${media.xsm`
        font-size: ${rm(18)};
        margin-bottom: ${rm(6)};
    `}
`

const StyledFeatureText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.5;
    margin: 0;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledInfoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(16)};
`

const StyledInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(8)};

    ${media.md`
        flex-direction: column;
    `}
`

const StyledInfoLabel = styled.span`
    ${fontGeist(600)};
    font-size: ${rm(16)};
    color: #111111;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledInfoValue = styled.span`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.5;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledFaqSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${rm(28)};
    scroll-margin-top: ${rm(100)};

    ${media.xsm`
        scroll-margin-top: ${rm(72)};
        gap: ${rm(22)};
    `}
`

const StyledFaqPageTitle = styled.h2`
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

const StyledFaqList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(14)};

    ${media.xsm`
        gap: ${rm(12)};
    `}
`

const StyledBulletList = styled.ul`
    margin: 0;
    padding-left: ${rm(22)};
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1c1c1c;
    line-height: 1.55;

    li {
        margin-bottom: ${rm(6)};
    }

    li:last-child {
        margin-bottom: 0;
    }

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
        padding-left: ${rm(18)};
    `}
`

