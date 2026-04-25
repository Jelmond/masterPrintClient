'use client'

import { media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"

export default function FormSuccessPage() {
    return (
        <StyledPage>
            <StyledCard>
                <StyledIconWrap>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </StyledIconWrap>
                <StyledTitle>Заявка отправлена!</StyledTitle>
                <StyledText>
                    Спасибо за обращение. Наш менеджер свяжется с вами в ближайшее рабочее время.
                </StyledText>
                <StyledText $small>Пн–Пт: 9:00 – 17:00</StyledText>
                <StyledActions>
                    <StyledPrimaryLink href="/">На главную</StyledPrimaryLink>
                    <StyledSecondaryLink href="/catalog">Перейти в каталог</StyledSecondaryLink>
                </StyledActions>
            </StyledCard>
        </StyledPage>
    )
}

const StyledPage = styled.div`
    min-height: 100vh;
    background-color: #E6E8E6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${rm(40)} ${rm(20)};
`

const StyledCard = styled.div`
    background: #FFFFFF;
    border-radius: ${rm(20)};
    padding: ${rm(60)} ${rm(56)};
    max-width: ${rm(560)};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);

    ${media.xsm`
        padding: ${rm(40)} ${rm(28)};
    `}
`

const StyledIconWrap = styled.div`
    width: ${rm(88)};
    height: ${rm(88)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F0FAF4;
    border-radius: 50%;
    color: #1C9C56;
    margin-bottom: ${rm(28)};

    svg {
        width: ${rm(48)};
        height: ${rm(48)};
    }

    ${media.xsm`
        width: ${rm(72)};
        height: ${rm(72)};
        margin-bottom: ${rm(20)};
    `}
`

const StyledTitle = styled.h1`
    ${fontGeist(700)};
    font-size: ${rm(36)};
    color: #111111;
    margin: 0 0 ${rm(16)} 0;

    ${media.xsm`
        font-size: ${rm(28)};
    `}
`

const StyledText = styled.p<{ $small?: boolean }>`
    ${fontGeist(400)};
    font-size: ${props => props.$small ? rm(14) : rm(18)};
    color: ${props => props.$small ? '#888888' : '#1C1C1C'};
    line-height: 1.6;
    margin: 0 0 ${props => props.$small ? rm(32) : rm(8)} 0;

    ${media.xsm`
        font-size: ${(props: any) => props.$small ? rm(12) : rm(15)};
    `}
`

const StyledActions = styled.div`
    display: flex;
    gap: ${rm(16)};
    flex-wrap: wrap;
    justify-content: center;

    ${media.xsm`
        flex-direction: column;
        width: 100%;
        gap: ${rm(12)};
    `}
`

const StyledPrimaryLink = styled(AnimLink)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${rm(14)} ${rm(32)};
    background-color: #1C1C1C;
    color: #FFFFFF;
    border-radius: ${rm(8)};
    font-size: ${rm(16)};
    ${fontGeist(600)};
    text-decoration: none;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        background-color: #2C2C2C;
        transform: translateY(-1px);
    }

    ${media.xsm`
        width: 100%;
        font-size: ${rm(15)};
    `}
`

const StyledSecondaryLink = styled(AnimLink)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${rm(14)} ${rm(32)};
    background-color: transparent;
    color: #1C1C1C;
    border: 1.5px solid #1C1C1C;
    border-radius: ${rm(8)};
    font-size: ${rm(16)};
    ${fontGeist(600)};
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
        background-color: #1C1C1C;
        color: #FFFFFF;
    }

    ${media.xsm`
        width: 100%;
        font-size: ${rm(15)};
    `}
`
