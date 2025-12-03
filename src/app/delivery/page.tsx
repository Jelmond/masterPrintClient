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
                    <StyledIntroText>
                        В нашем интернет-магазине (<strong>mppshop.by</strong>) доступны два надёжных способа доставки, чтобы каждый мог выбрать удобный вариант.
                    </StyledIntroText>

                    <StyledSection>
                        <StyledSectionHeader>
                            <StyledSectionNumber>1</StyledSectionNumber>
                            <StyledSectionTitle>Самовывоз (г. Гродно, ул. Титова, 24)</StyledSectionTitle>
                        </StyledSectionHeader>
                        
                        <StyledSectionContent>
                            <StyledText>
                                Забрать заказ можно в пункте выдачи по адресу: <strong>г. Гродно, ул. Титова, 24</strong>.
                            </StyledText>
                            
                            <StyledInfoBox>
                                <StyledInfoRow>
                                    <StyledInfoLabel>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                                        </svg>
                                        Адрес:
                                    </StyledInfoLabel>
                                    <StyledInfoValue>г. Гродно, ул. Титова, 24</StyledInfoValue>
                                </StyledInfoRow>
                                
                                <StyledInfoRow>
                                    <StyledInfoLabel>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 13H11V7H13V13ZM13 17H11V15H13V17Z" fill="currentColor"/>
                                        </svg>
                                        График работы:
                                    </StyledInfoLabel>
                                    <StyledInfoValue>понедельник–пятница, с 09:00 до 17:00, без обеда</StyledInfoValue>
                                </StyledInfoRow>
                            </StyledInfoBox>

                            <StyledBonusBox>
                                <StyledBonusIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledBonusIcon>
                                <StyledBonusText>
                                    При самовывозе действует <strong>скидка 3%</strong> на весь заказ — это наш бонус за оперативность и экономию на доставке.
                                </StyledBonusText>
                            </StyledBonusBox>
                        </StyledSectionContent>
                    </StyledSection>

                    <StyledSection>
                        <StyledSectionHeader>
                            <StyledSectionNumber>2</StyledSectionNumber>
                            <StyledSectionTitle>Доставка Door-to-Door от DPD</StyledSectionTitle>
                        </StyledSectionHeader>
                        
                        <StyledSectionContent>
                            <StyledText>
                                Мы работаем с курьерской службой <strong>DPD</strong>, которая доставляет заказы по всей Республики Беларуси.
                            </StyledText>
                            
                            <StyledFeaturesList>
                                <StyledFeatureItem>
                                    <StyledFeatureIcon>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </StyledFeatureIcon>
                                    <StyledFeatureContent>
                                        <StyledFeatureTitle>Стоимость доставки:</StyledFeatureTitle>
                                        <StyledFeatureValue>20,00 белорусских рублей</StyledFeatureValue>
                                    </StyledFeatureContent>
                                </StyledFeatureItem>

                                <StyledFeatureItem>
                                    <StyledFeatureIcon>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </StyledFeatureIcon>
                                    <StyledFeatureContent>
                                        <StyledFeatureTitle>Бесплатная доставка:</StyledFeatureTitle>
                                        <StyledFeatureValue>при заказе от 400,00 белорусских рублей</StyledFeatureValue>
                                    </StyledFeatureContent>
                                </StyledFeatureItem>

                                <StyledFeatureItem>
                                    <StyledFeatureIcon>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </StyledFeatureIcon>
                                    <StyledFeatureContent>
                                        <StyledFeatureTitle>Цена фиксированная:</StyledFeatureTitle>
                                        <StyledFeatureValue>для всех регионов</StyledFeatureValue>
                                    </StyledFeatureContent>
                                </StyledFeatureItem>

                                <StyledFeatureItem>
                                    <StyledFeatureIcon>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </StyledFeatureIcon>
                                    <StyledFeatureContent>
                                        <StyledFeatureTitle>Доставка осуществляется:</StyledFeatureTitle>
                                        <StyledFeatureValue>по всей Республике Беларусь</StyledFeatureValue>
                                    </StyledFeatureContent>
                                </StyledFeatureItem>
                            </StyledFeaturesList>

                            <StyledDeliveryInfo>
                                <StyledDeliveryIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledDeliveryIcon>
                                <StyledDeliveryText>
                                    <strong>DPD</strong> доставляет быстро и стабильно — в среднем <strong>2–3 рабочих дня</strong> в зависимости от города.
                                </StyledDeliveryText>
                            </StyledDeliveryInfo>
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

const StyledIntroText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(20)};
    color: #1C1C1C;
    line-height: 1.6;
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

    strong {
        ${fontGeist(600)};
    }
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

