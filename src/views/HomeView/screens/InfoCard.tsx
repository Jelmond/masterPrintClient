import { Icon } from "@/components/Icon/Icon"
import { colors, media, rm } from "@/styles"
import { fontPoppins } from "@/styles/fonts"
import styled from "styled-components"
import { memo } from "react"
import Image from "next/image"

const cardsLeft = [
    {
        icon: 'delivery',
        title: 'Бесплатная доставка курьером до двери',
        description: 'при заказе от 400 рублей.',
        iconPosition: 'right',
        hasBorder: true,
    },
    {
        icon: 'quality',
        title: 'Скидка 20%',
        description: 'при заказе от 1500 рублей.',
        iconPosition: 'right',
        hasBorder: false,
    },
    {
        icon: 'contact',
        title: 'Скидка 3% на самовывоз',
        description: 'со склада в Гродно.',
        iconPosition: 'right',
        hasBorder: false,
    }
]

const cardsRight = [
    {
        icon: 'discount',
        title: 'Скидка 5%',
        description: 'при заказе от 700 рублей.',
        iconPosition: 'left',
        hasBorder: false,
    },
    {
        icon: 'fast',
        title: 'Мы — производители',
        description: 'выпускаем нашу продукцию сами.',
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

    ${media.lg`
        padding: ${rm(120)} ${rm(40)};
    `}

    ${media.md`
        padding: ${rm(80)} ${rm(25)};
    `}

    ${media.xsm`
        padding: ${rm(40)} ${rm(20)};
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

    ${media.md`
        padding: ${rm(60)} 0;
        flex-direction: column;
        gap: ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(40)} 0;
        gap: ${rm(30)};
    `}

    .dividerMain{
        width: ${rm(6)};
        height: 100%;
        min-height: ${rm(570)};
        background: #D2D2D2;
        position: relative;
        z-index: 1;
        border-radius: ${rm(6)};

        ${media.md`
            display: none;
        `}
    }

    .backgroundImage{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const StyledRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(100)};
    align-items: flex-start;

    ${media.md`
        gap: ${rm(40)};
        align-items: flex-start;
    `}

    ${media.xsm`
        gap: ${rm(30)};
    `}
`

const StyledLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(60)};
    align-items: flex-end;

    ${media.md`
        gap: ${rm(40)};
        align-items: flex-start;
    `}

    ${media.xsm`
        gap: ${rm(30)};
    `}
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
    max-width: 100%;

    ${media.md`
        width: 100%;
        max-width: ${rm(500)};
    `}

    ${media.xsm`
        width: 100%;
        padding: ${rm(15)} ${rm(15)};
        padding-bottom: ${rm(20)};
        gap: ${rm(15)};
    `}
    
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
