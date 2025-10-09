import React from "react"
import { colors, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import Image from "next/image"

const cards = [
    {
        text: ['Wild', 'berr', 'ies'],
        image: '/assets/images/wildberries.png',
    },
    {
        text: 'Ozon',
        image: '/assets/images/ozon.png',
    },
]

export const Comfort = () => {
    return (
        <StyledComfort>
            <StyledInfoContainer>
                <p className="title">
                    Покупайте где вам удобнее
                </p>
                <p className="description">
                    Для вашего удобства продажа осуществляется и на маркетплейсах. При желании купить товар с меньшим количеством, переходите на наш профиль и вводите код товара.
                </p>
            </StyledInfoContainer>
            <StyledCards>
                {cards.map((card, index) => (
                    <StyledCardContainer key={index}>
                        <p className="text">
                            {Array.isArray(card.text) 
                                ? card.text.map((line, lineIndex) => (
                                    <React.Fragment key={lineIndex}>
                                        {line}
                                        {lineIndex < card.text.length - 1 && <br />}
                                    </React.Fragment>
                                ))
                                : card.text
                            }
                        </p>
                        <Image className="backgroundImage" src={card.image} alt="background" width={1920} height={1080} />
                    </StyledCardContainer>
                ))}
            </StyledCards>
        </StyledComfort>
    )
}

const StyledComfort = styled.div`
    padding: ${rm(140)} ${rm(90)};
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(45)};
    width: ${rm(615)};

    .title{
        ${fontGeist(400)};
        font-size: ${rm(96)};
        color: ${colors.black100};
        line-height: 130%;
    }

    .description{
        ${fontGeist(400)};
        font-size: ${rm(32)};
        color: ${colors.black100};
        line-height: 110%;
    }
`

const StyledCardContainer = styled.div`
    padding: ${rm(100)} ${rm(50)};
    position: relative;
    overflow: hidden;
    border-radius: ${rm(18)};
    background-color: #00000033;
    display: flex;
    justify-content: center;
    align-items: center;

    .backgroundImage{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text{
        ${fontGeist(500)};
        font-size: ${rm(96)};
        color: ${colors.white100};
        line-height: 130%;
        position: relative;
        z-index: 2;
        width: ${rm(320)};
    }
`

const StyledCards = styled.div`
    display: flex;
    gap: ${rm(96)};
`