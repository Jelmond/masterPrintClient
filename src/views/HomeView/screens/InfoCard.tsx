import { Icon } from "@/components/Icon/Icon"
import { colors, media, rm } from "@/styles"
import { fontPoppins } from "@/styles/fonts"
import styled from "styled-components"
import { memo } from "react"
import Image from "next/image"

const cardsLeft = [
    {
        icon: 'delivery',
        title: 'Бесплатная доставка белпочтой',
        description: 'При оформлении заказа на сумму больше 100 руб.',
        iconPosition: 'right',
        hasBorder: true,
    },
    {
        icon: 'quality',
        title: 'Качественные материалы товаров',
        description: 'Мы тщательно следим за качеством ассортимента.',
        iconPosition: 'right',
        hasBorder: false,
    },
    {
        icon: 'contact',
        title: 'Остались вопросы? Свяжитесь с нами!',
        description: 'Команда в кротчайшие сроки ответит вам на все вопросы.',
        iconPosition: 'right',
        hasBorder: false,
    }
]

const cardsRight = [
    {
        icon: 'discount',
        title: 'Скидка 5%',
        description: 'При оформлении заказа на сумму больше 500 руб.',
        iconPosition: 'left',
        hasBorder: false,
    },
    {
        icon: 'fast',
        title: 'Высылка заказа в кротчайшие сроки',
        description: 'Наши сотрудники вышлют ваш заказ в течении двух дней.',
        iconPosition: 'left',
        hasBorder: false,
    },
]

const Card = memo(({ icon, title, description, iconPosition, hasBorder, $gridPosition }: typeof cardsLeft[0] & { $gridPosition: number }) => (
    <StyledCard className={icon} $hasBorder={hasBorder} $gridPosition={$gridPosition}>
        {iconPosition === 'left' && (
            <StyledIconContainer>
                <Icon label={icon} />
            </StyledIconContainer>
        )}
        <div className="content">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <div className="divider"></div>
        </div>
        {iconPosition === 'right' && (
            <StyledIconContainer>
                <Icon label={icon} />
            </StyledIconContainer>
        )}
    </StyledCard>
))

Card.displayName = 'Card'

export const InfoCard = memo(() => {
    return (
        <StyledInfoCard>
            <StyledContent>
                <StyledLeftContainer>
                    {cardsLeft.map((card, index) => (
                        <Card key={index} {...card} $gridPosition={index} />
                    ))}
                </StyledLeftContainer>
                <div className="dividerMain" />
                <StyledRightContainer>
                    {cardsRight.map((card, index) => (
                        <Card key={index} {...card} $gridPosition={index} />
                    ))}
                </StyledRightContainer>
                <Image className="backgroundImage" src="/assets/images/cardsImage.png" alt="background" width={1920} height={1080} />
            </StyledContent>
        </StyledInfoCard>
    )
})

InfoCard.displayName = 'InfoCard'

const StyledInfoCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: transform;
    padding: ${rm(160)} ${rm(48)};

    ${media.xsm`
        width: 100%;
    `}
`

const StyledContent = styled.div`
    padding: ${rm(100)} 0;
    border-radius: ${rm(30)};
    width: 100%;
    overflow: hidden;
    position: relative;
    gap: ${rm(20)};
    display: flex;
    align-items: center;
    justify-content: center;

    .dividerMain{
        width: ${rm(6)};
        height: 100%;
        min-height: ${rm(570)};
        background: #D2D2D2;
        position: relative;
        z-index: 1;
        border-radius: ${rm(6)};
    }

    .backgroundImage{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${media.md`
        grid-template-columns: 1fr;
        gap: ${rm(15)};
    `}
`

const StyledRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(100)};
    align-items: flex-start;
`

const StyledLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(60)};
    align-items: flex-end;
`

const StyledCard = styled.div<{ $hasBorder: boolean; $gridPosition: number }>`
    width: auto;
    background: #67676736;
    border-radius: ${rm(20)};
    backdrop-filter: blur(58px);
    padding: ${rm(20)} ${rm(20)};
    padding-bottom: ${rm(30)};
    display: flex;
    align-items: center;
    gap: ${rm(25)};
    position: relative;
    z-index: 1;
    
    .content{
        display: flex;
        flex-direction: column;
        gap: ${rm(8)};
        flex: 1;

        .title{
            font-size: ${rm(28)};
            color: ${colors.white100};
            ${fontPoppins(600)};

            ${media.md`
                font-size: ${rm(20)};
            `}

            ${media.xsm`
                font-size: ${rm(13)};
            `}
        }
        
        .description{
            font-size: ${rm(20)};
            color: ${colors.white100};
            ${fontPoppins(400)};

            ${media.xsm`
                font-size: ${rm(10)};
            `}
        }

        .divider{
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, 0.3);
            margin-top: ${rm(8)};
        }
    }
`

const StyledIconContainer = styled.div`
    width: ${rm(70)};
    height: ${rm(70)};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-shrink: 0;

    ${media.xsm`
        width: ${rm(45)};
        height: ${rm(45)};
    `}

    svg{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
`
