import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import { SimpleButton } from "@/components/UI/Buttons/SimpleButton"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import { AnimatedText } from "@/components/animated/AnimatedText/AnimatedText"
import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"
import { useLoadingStore } from "@/store/loadingStore"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useWindowWidth } from "@react-hook/window-size"
import { heightLvh } from "@/styles/utils"

const cards = [
    {
        text: 'Мы всегда рады принять заказ или ответить на ваши вопросы',
        button: {
            text: 'Заказать по звонку',
            url: 'tel:+79292111818',
            isBlank: false
        }
    },
    {
        text: 'Карточки, Открытки, конверты, коробки. Все по лучшей цене',
        button: {
            text: 'Перейти в каталог',
            url: '/catalog',
            isBlank: false
        }
    },
    {
        text: 'Индивидуальный дизайн и многое другое',
        button: {
            text: 'На сайт типографии',
            url: '/catalog',
            isBlank: true
        }
    }
]

export const Welcome = () => {

    const width = useWindowWidth()
    const isLoaded = useLoadingStore(state => state.isLoading)

    // useEffect(() => {
    //     if (!isLoaded) {
    //         console.log("isLoaded")
    //     }
    // }, [isLoaded])

    return (
        <StyledWelcome>
            <StyledContent>
                <StyledBackgroundImage src="/assets/images/homeImage.png" alt="welcomeBackground" width={1920} height={1080} />
                <StyledRight>
                    <h1 className="title">Добро пожаловать в каталог Мастерпринт-Пак</h1>
                    <StyledDescription>
                        MPPK — каталог креативной печатной продукции. Открытки, подарочные упаковки и другие изделия, созданные от идеи до упаковки в нашей типографии
                    </StyledDescription>
                </StyledRight>
                <StyledCardsContainer>
                    {cards.map((card, index) => (
                        <>
                            <StyledCard key={index}>
                                <p className="text">{card.text}</p>
                                <a href={card.button.url} target={card.button.isBlank ? '_blank' : '_self'} aria-label={card.button.text}>{card.button.text}</a>
                            </StyledCard>
                            {index !== cards.length - 1 && <div className="divider" />}
                        </>
                    ))}
                </StyledCardsContainer>
            </StyledContent>
        </StyledWelcome>
    )
}

const StyledWelcome = styled.div`
    display: flex;
    background-color: ${colors.bgMain};
    width: 100%;
    ${heightLvh(100)};
    padding: ${rm(80)} ${rm(48)};

    // ${media.lg`
    //     padding-left: ${rm(70)};
    //     padding-top: ${rm(177)};
    //     padding-bottom: ${rm(90)};
    // `}

    // ${media.md`
    //     padding-left: ${rm(25)};
    //     padding-top: ${rm(100)};
    //     padding-bottom: ${rm(50)};
    // `}

    ${media.xsm`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-left: ${rm(0)};
        padding-top: ${rm(100)};
        padding-bottom: ${rm(50)};
    `}
`

const StyledContent = styled.div`
    position: relative;
    border-radius: ${rm(30)};
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    padding: ${rm(41)};
    padding-bottom: ${rm(0)};
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`

const StyledBackgroundImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    width: ${rm(1030)};
    position: relative;
    z-index: 1;
    align-items: flex-end;

    ${media.lg`
        width: ${rm(700)};
    `}

    ${media.md`
        width: ${rm(500)};
    `}

    ${media.xsm`
        width: ${rm(348)};   
        position: relative;
        z-index: 1;
    `}

    .title{
        ${fontGeist(700)};
        font-size: ${rm(96)};
        line-height: 130%;
        color: ${colors.white100};
        text-align: right;

        // ${media.lg`
        //     font-size: ${rm(64)};
        // `}

        ${media.md`
            font-size: ${rm(40)};
            line-height: 110%;
        `}

        ${media.xsm`
            font-size: ${rm(39)};
            line-height: 130%;
        `}
    }
`
const StyledDescription = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(30)};
    line-height: 110%;
    color: ${colors.white100};
    margin-top: ${rm(48)};
    margin-bottom: ${rm(140)};
    width: ${rm(846)};
    text-align: right;

    // ${media.xsm`
    //     font-size: ${rm(14)};
    //     margin-top: ${rm(15)};
    //     margin-bottom: ${rm(50)};
    //     width: ${rm(302)};
    // `}
`

const StyledCardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .divider{
        width: ${rm(4)};
        height: 100%;
        margin-bottom: ${rm(30)};
        background: #FFFFFF45;
        position: relative;
        border-radius: ${rm(2)};
    }
`

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(28)};
    padding: ${rm(21)} ${rm(43)};
    background-color: #CFCFCF7A;
    backdrop-filter: blur(8px);
    border-top-left-radius: ${rm(16)};
    border-top-right-radius: ${rm(16)};
    overflow: hidden;

    .text{
        ${fontGeist(400)};
        font-size: ${rm(24)};
        line-height: 110%;
        color: ${colors.white100};
        width: ${rm(425)};
        text-align: center;
    }

    a{
        padding: ${rm(7)} ${rm(20)};
        background: linear-gradient(0deg, rgba(41, 89, 139, 0.32), rgba(41, 89, 139, 0.32)),
        radial-gradient(50% 50% at 50% 50%, rgba(24, 22, 82, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
        backdrop-filter: blur(87px);
        border-radius: ${rm(14)};
        ${fontGeist(500)};
        font-size: ${rm(28)};
        line-height: 100%;
        color: ${colors.white100};
        text-align: center;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;

        &:hover{
            opacity: 0.7;
        }
    }
`