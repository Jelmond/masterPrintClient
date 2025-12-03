'use client'

import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function OrderSuccessPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const orderNumber = searchParams.get('orderNumber')
    const paymentType = searchParams.get('paymentType')
    
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    if (!orderNumber || !paymentType) {
        return (
            <StyledPage>
                <StyledContainer>
                    <StyledError>
                        <StyledErrorIcon>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledErrorIcon>
                        <StyledErrorTitle>Ошибка</StyledErrorTitle>
                        <StyledErrorText>Не удалось загрузить информацию о заказе</StyledErrorText>
                        <StyledBackButton onClick={() => router.push('/catalog')}>
                            Вернуться в каталог
                        </StyledBackButton>
                    </StyledError>
                </StyledContainer>
            </StyledPage>
        )
    }

    const isCashCard = paymentType === 'cash-card'
    const isEripBank = paymentType === 'erip-bank'
    const isAlphabank = paymentType === 'alphabank'

    return (
        <StyledPage>
            <StyledContainer>
                <StyledSuccessIcon>
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#4CAF50"/>
                    </svg>
                </StyledSuccessIcon>

                <StyledTitle>
                    {isAlphabank ? 'Оплата прошла успешно' : 'Спасибо за ваш заказ!'}
                </StyledTitle>

                {isEripBank && (
                    <>
                        <StyledMessage>
                            Ваш запрос успешно принят в обработку.
                        </StyledMessage>
                        <StyledMessage>
                            В ближайшее время на указанную вами электронную почту будет отправлено письмо с подробной информацией по оплате через <strong>ЕРИП</strong> или <strong>расчётный счёт</strong> — в соответствии с выбранным способом. Пожалуйста, проверьте папку «Входящие» и «Спам».
                        </StyledMessage>
                    </>
                )}

                {isCashCard && (
                    <>
                        <StyledMessage>
                            Ваш заказ успешно принят и ожидает оплаты при получении.
                        </StyledMessage>
                        <StyledMessage>
                            Оплата производится <strong>наличными</strong> или <strong>банковской картой</strong> непосредственно в пункте выдачи при получении товара.
                        </StyledMessage>
                    </>
                )}

                {isAlphabank && (
                    <>
                        <StyledMessage>
                            Оплата успешно выполнена! Ваш заказ подтверждён и передан в обработку.
                        </StyledMessage>
                        <StyledMessage>
                            Все детали заказа и чек об оплате отправлены на указанную вами электронную почту. Пожалуйста, проверьте папку «Входящие» и, при необходимости, «Спам».
                        </StyledMessage>
                    </>
                )}

                <StyledOrderInfo>
                    <StyledOrderNumber>
                        <StyledOrderLabel>Номер заказа:</StyledOrderLabel>
                        <StyledOrderValue>{orderNumber}</StyledOrderValue>
                    </StyledOrderNumber>
                </StyledOrderInfo>

                <StyledContactSection>
                    <StyledContactTitle>
                        {isCashCard ? 'Адрес и контактная информация пункта выдачи' : 'Контактная информация'}
                    </StyledContactTitle>
                    
                    <StyledContactItem>
                        <StyledContactIcon>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledContactIcon>
                        <StyledContactContent>
                            <StyledContactLabel>Пункт выдачи (г. Гродно, ул. Титова 24)</StyledContactLabel>
                            <StyledContactValue>тел.: +375 44 749-54-65</StyledContactValue>
                            <StyledContactValue>Время работы: Пн–Пт, с 9:00 до 17:00</StyledContactValue>
                        </StyledContactContent>
                    </StyledContactItem>

                    <StyledContactItem>
                        <StyledContactIcon>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2131 21.3522 21.4016C21.1472 21.5901 20.9053 21.7339 20.6399 21.8242C20.3745 21.9145 20.0912 21.9492 19.81 21.926C16.7425 21.5857 13.787 20.5341 11.19 18.856C8.77382 17.3146 6.72533 15.2661 5.184 12.85C3.49997 10.2412 2.44826 7.27099 2.114 4.19C2.09077 3.90947 2.12477 3.62688 2.21395 3.36191C2.30313 3.09694 2.44534 2.85526 2.632 2.65C2.81866 2.44474 3.04593 2.28035 3.299 2.17C3.55207 2.05965 3.82524 2.00159 4.102 2H7.102C7.59665 1.99522 8.08112 2.16708 8.471 2.488C8.86088 2.80892 9.13143 3.25945 9.232 3.76L10.212 8.11C10.3058 8.60158 10.2822 9.10892 10.1432 9.58963C10.0042 10.0703 9.75473 10.5113 9.417 10.87L7.622 12.665C9.19704 15.4065 11.5535 17.763 14.295 18.338L16.09 16.543C16.4487 16.2053 16.8897 15.9558 17.3704 15.8168C17.8511 15.6778 18.3584 15.6542 18.85 15.748L23.24 16.728C23.7405 16.8286 24.1911 17.0991 24.512 17.489C24.8329 17.8789 25.0048 18.3634 25 18.858V21.858H25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledContactIcon>
                        <StyledContactContent>
                            <StyledContactLabel>Менеджер по работе с клиентами</StyledContactLabel>
                            <StyledContactValue>тел.: +375 44 584-29-11</StyledContactValue>
                            <StyledContactValue>Время для консультаций: Пн–Пт, с 9:00 до 17:00</StyledContactValue>
                        </StyledContactContent>
                    </StyledContactItem>
                </StyledContactSection>

                {isAlphabank && (
                    <StyledThankYouMessage>
                        Спасибо, что выбрали нас!
                    </StyledThankYouMessage>
                )}

                <StyledActions>
                    <StyledActionButton onClick={() => router.push('/catalog')}>
                        Продолжить покупки
                    </StyledActionButton>
                    <StyledActionButton secondary onClick={() => router.push('/cart')}>
                        Вернуться в корзину
                    </StyledActionButton>
                </StyledActions>
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
    max-width: ${rm(800)};
    margin: 0 auto;
    padding: ${rm(60)} ${rm(125)};
    background-color: #FFFFFF;
    border-radius: ${rm(16)};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    ${media.lg`
        padding: ${rm(50)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(40)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(30)} ${rm(20)};
        border-radius: ${rm(12)};
    `}
`

const StyledSuccessIcon = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: ${rm(24)};
`

const StyledTitle = styled.h1`
    ${fontGeist(700)};
    font-size: ${rm(36)};
    color: #111111;
    margin: 0 0 ${rm(24)} 0;
    text-align: center;

    ${media.md`
        font-size: ${rm(32)};
        margin-bottom: ${rm(20)};
    `}

    ${media.xsm`
        font-size: ${rm(28)};
        margin-bottom: ${rm(16)};
    `}
`

const StyledMessage = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    line-height: 1.7;
    margin: 0 0 ${rm(16)} 0;
    text-align: center;

    ${media.md`
        font-size: ${rm(16)};
    `}

    ${media.xsm`
        font-size: ${rm(14)};
    `}

    strong {
        ${fontGeist(600)};
    }

    &:last-child {
        margin-bottom: 0;
    }
`

const StyledOrderInfo = styled.div`
    margin: ${rm(40)} 0;
    padding: ${rm(24)};
    background-color: #F8F9FA;
    border-radius: ${rm(12)};
    border: 2px solid #E0E0E0;

    ${media.xsm`
        padding: ${rm(20)};
        margin: ${rm(30)} 0;
    `}
`

const StyledOrderNumber = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(8)};
    align-items: center;
`

const StyledOrderLabel = styled.span`
    ${fontGeist(600)};
    font-size: ${rm(16)};
    color: #666;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledOrderValue = styled.span`
    ${fontGeist(700)};
    font-size: ${rm(28)};
    color: #111111;

    ${media.xsm`
        font-size: ${rm(24)};
    `}
`

const StyledContactSection = styled.div`
    margin: ${rm(40)} 0;
    padding: ${rm(32)};
    background-color: #F8F9FA;
    border-radius: ${rm(12)};

    ${media.xsm`
        padding: ${rm(24)};
        margin: ${rm(30)} 0;
    `}
`

const StyledContactTitle = styled.h2`
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

const StyledContactItem = styled.div`
    display: flex;
    gap: ${rm(16)};
    margin-bottom: ${rm(24)};
    align-items: flex-start;

    ${media.xsm`
        gap: ${rm(12)};
        margin-bottom: ${rm(20)};
    `}

    &:last-child {
        margin-bottom: 0;
    }
`

const StyledContactIcon = styled.div`
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

const StyledContactContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(4)};
    flex: 1;
`

const StyledContactLabel = styled.span`
    ${fontGeist(600)};
    font-size: ${rm(16)};
    color: #111111;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledContactValue = styled.span`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #1C1C1C;
    line-height: 1.5;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledActions = styled.div`
    display: flex;
    gap: ${rm(16)};
    justify-content: center;
    margin-top: ${rm(40)};

    ${media.xsm`
        flex-direction: column;
        gap: ${rm(12)};
        margin-top: ${rm(30)};
    `}
`

const StyledActionButton = styled.button<{ secondary?: boolean }>`
    ${fontGeist(500)};
    font-size: ${rm(16)};
    padding: ${rm(16)} ${rm(32)};
    border-radius: ${rm(8)};
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: ${rm(200)};

    ${media.xsm`
        width: 100%;
        padding: ${rm(14)} ${rm(24)};
        font-size: ${rm(14)};
    `}

    ${props => props.secondary ? `
        background-color: #E9ECEF;
        color: #111111;
        
        &:hover {
            background-color: #DEE2E6;
        }
    ` : `
        background-color: #111111;
        color: #FFFFFF;
        
        &:hover {
            background-color: #333333;
        }
    `}
`

const StyledError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${rm(24)};
    padding: ${rm(40)};
    text-align: center;
`

const StyledErrorIcon = styled.div`
    width: ${rm(80)};
    height: ${rm(80)};
    color: #dc3545;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledErrorTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(28)};
    color: #dc3545;
    margin: 0;
`

const StyledErrorText = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #1C1C1C;
    margin: 0;
`

const StyledBackButton = styled.button`
    ${fontGeist(500)};
    font-size: ${rm(16)};
    padding: ${rm(16)} ${rm(32)};
    background-color: #111111;
    color: #FFFFFF;
    border-radius: ${rm(8)};
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
    
    &:hover {
        background-color: #333333;
    }
`

const StyledThankYouMessage = styled.p`
    ${fontGeist(600)};
    font-size: ${rm(24)};
    color: #111111;
    text-align: center;
    margin: ${rm(40)} 0 0 0;

    ${media.md`
        font-size: ${rm(22)};
        margin-top: ${rm(35)};
    `}

    ${media.xsm`
        font-size: ${rm(20)};
        margin-top: ${rm(30)};
    `}
`

