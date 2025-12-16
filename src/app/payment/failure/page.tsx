'use client'

import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function PaymentFailurePage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const orderId = searchParams.get('orderId')
    const orderNumber = searchParams.get('orderNumber')
    
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <StyledPage>
            <StyledContainer>
                <StyledFailureCard>
                    <StyledFailureIcon>
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </StyledFailureIcon>
                    <StyledTitle>Ошибка оплаты</StyledTitle>
                    <StyledMessage>
                        К сожалению, не удалось обработать платеж.
                    </StyledMessage>
                    {orderNumber && (
                        <StyledOrderInfo>
                            <StyledOrderLabel>Номер заказа:</StyledOrderLabel>
                            <StyledOrderNumber>#{orderNumber}</StyledOrderNumber>
                        </StyledOrderInfo>
                    )}
                    {orderId && (
                        <StyledOrderInfo>
                            <StyledOrderLabel>ID заказа:</StyledOrderLabel>
                            <StyledOrderId>{orderId}</StyledOrderId>
                        </StyledOrderInfo>
                    )}
                    <StyledDescription>
                        Возможные причины:
                        <ul>
                            <li>Недостаточно средств на карте</li>
                            <li>Карта была отклонена банком</li>
                            <li>Истек срок действия карты</li>
                            <li>Техническая ошибка при обработке платежа</li>
                        </ul>
                        Пожалуйста, попробуйте еще раз или выберите другой способ оплаты.
                    </StyledDescription>
                    <StyledButtonGroup>
                        <StyledButton onClick={() => router.push('/order')}>
                            Попробовать снова
                        </StyledButton>
                        <StyledButton $primary onClick={() => router.push('/catalog')}>
                            Вернуться в каталог
                        </StyledButton>
                    </StyledButtonGroup>
                </StyledFailureCard>
            </StyledContainer>
        </StyledPage>
    )
}

const StyledPage = styled.div`
    min-height: 100vh;
    padding-top: ${rm(80)};
    background-color: #E6E8E6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${rm(80)};

    ${media.xsm`
        padding-top: ${rm(60)};
        padding-bottom: ${rm(60)};
        padding-left: ${rm(20)};
        padding-right: ${rm(20)};
    `}
`

const StyledContainer = styled.div`
    max-width: ${rm(600)};
    width: 100%;
`

const StyledFailureCard = styled.div`
    background-color: #FFFFFF;
    border-radius: ${rm(20)};
    padding: ${rm(60)} ${rm(40)};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;

    ${media.xsm`
        padding: ${rm(40)} ${rm(24)};
    `}
`

const StyledFailureIcon = styled.div`
    width: ${rm(80)};
    height: ${rm(80)};
    margin: 0 auto ${rm(24)};
    color: #ef4444;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.xsm`
        width: ${rm(64)};
        height: ${rm(64)};
        margin-bottom: ${rm(20)};
    `}
`

const StyledTitle = styled.h1`
    ${fontGeist(700)};
    font-size: ${rm(36)};
    color: ${colors.black100};
    margin: 0 0 ${rm(16)} 0;

    ${media.xsm`
        font-size: ${rm(28)};
        margin-bottom: ${rm(12)};
    `}
`

const StyledMessage = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #4b5563;
    margin: 0 0 ${rm(32)} 0;

    ${media.xsm`
        font-size: ${rm(16)};
        margin-bottom: ${rm(24)};
    `}
`

const StyledOrderInfo = styled.div`
    margin-bottom: ${rm(16)};
`

const StyledOrderLabel = styled.span`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #6b7280;
    margin-right: ${rm(8)};

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledOrderNumber = styled.span`
    ${fontGeist(600)};
    font-size: ${rm(20)};
    color: ${colors.black100};

    ${media.xsm`
        font-size: ${rm(18)};
    `}
`

const StyledOrderId = styled.span`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #6b7280;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledDescription = styled.div`
    ${fontGeist(400)};
    font-size: ${rm(16)};
    color: #6b7280;
    line-height: 1.6;
    margin: ${rm(32)} 0;
    text-align: left;

    ${media.xsm`
        font-size: ${rm(14)};
        margin: ${rm(24)} 0;
    `}

    ul {
        margin: ${rm(16)} 0 ${rm(16)} ${rm(24)};
        padding: 0;

        ${media.xsm`
            margin-left: ${rm(20)};
        `}

        li {
            margin-bottom: ${rm(8)};
        }
    }
`

const StyledButtonGroup = styled.div`
    display: flex;
    gap: ${rm(16)};
    justify-content: center;
    margin-top: ${rm(32)};

    ${media.xsm`
        flex-direction: column;
        gap: ${rm(12)};
        margin-top: ${rm(24)};
    `}
`

const StyledButton = styled.button<{ $primary?: boolean }>`
    padding: ${rm(14)} ${rm(32)};
    border-radius: ${rm(8)};
    font-size: ${rm(16)};
    ${fontGeist(500)};
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid ${props => props.$primary ? colors.black100 : 'transparent'};
    background-color: ${props => props.$primary ? colors.black100 : '#f3f4f6'};
    color: ${props => props.$primary ? '#FFFFFF' : colors.black100};

    ${media.xsm`
        padding: ${rm(12)} ${rm(24)};
        font-size: ${rm(14)};
    `}

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        background-color: ${props => props.$primary ? '#2C2C2C' : '#e5e7eb'};
    }

    &:active {
        transform: translateY(0);
    }
`

