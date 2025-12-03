import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { memo } from "react"

const cards = [
    {
        icon: 'factory',
        title: 'Собственное Производство',
        description: 'Мы выпускаем нашу продукцию самостоятельно',
    },
    {
        icon: 'box',
        title: 'Скидки на Самовывоз',
        description: 'Скидка 3% при самовывозе с пункта выдачи в Гродно',
    },
    {
        icon: 'percentage',
        title: 'Удобные Цены',
        description: 'При заказах от 700р и 1500р скидки 5% и 20%, соответственно',
    },
    {
        icon: 'truck',
        title: 'Доставка Включена',
        description: 'Бесплатная доставка курьером при заказе от 400р',
    },
]

const FactoryIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 50V30H20V50H10Z" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 50V20H35V50H20Z" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M35 50V35H50V50H35Z" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 30L20 20L35 30" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M35 35L50 25" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 50H55" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 20V10" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 10H30" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 10V20" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const BoxIcon = () => (
    <svg width="108" height="92" viewBox="0 0 108 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M53.5959 88.8102V50.3045M53.5959 88.8102L2.90279 65.0579C2.57736 64.9055 2.41465 64.8292 2.32384 64.6864C2.23303 64.5436 2.23303 64.3639 2.23303 64.0045V26.2383M53.5959 88.8102L79.2774 76.7772L104.289 65.0579C104.615 64.9055 104.777 64.8292 104.868 64.6864C104.959 64.5436 104.959 64.3639 104.959 64.0045V26.2383M53.5959 50.3045L2.23303 26.2383M53.5959 50.3045L104.959 26.2383M2.23303 26.2383L53.1024 2.40351C53.3451 2.28979 53.4664 2.23293 53.5959 2.23293C53.7255 2.23293 53.8468 2.28979 54.0895 2.40351L104.959 26.2383" stroke="#1C1C1C" stroke-width="4.46588" stroke-linejoin="round"/>
        <path d="M77.0445 57.5244C77.0445 58.7577 78.0442 59.7574 79.2774 59.7574C80.5106 59.7574 81.5103 58.7577 81.5103 57.5244H79.2774H77.0445ZM78.6076 37.9577L79.555 35.9357L78.6076 37.9577ZM79.1866 38.3293L81.0709 37.1313L79.1866 38.3293ZM27.9145 14.2054L26.9671 16.2274L77.6602 39.9797L78.6076 37.9577L79.555 35.9357L28.8619 12.1835L27.9145 14.2054ZM79.2774 57.5244H81.5103V39.0112H79.2774H77.0445V57.5244H79.2774ZM78.6076 37.9577L77.6602 39.9797C77.7476 40.0206 77.7964 40.0436 77.8342 40.0623C77.8719 40.0809 77.8621 40.0775 77.831 40.0587C77.7976 40.0385 77.7147 39.986 77.6149 39.8967C77.5081 39.8011 77.3982 39.6782 77.3022 39.5273L79.1866 38.3293L81.0709 37.1313C80.775 36.6658 80.401 36.3936 80.1392 36.2356C79.9227 36.1048 79.6753 35.9921 79.555 35.9357L78.6076 37.9577ZM79.2774 39.0112H81.5103C81.5103 38.8783 81.5132 38.6065 81.4867 38.355C81.4546 38.0509 81.3669 37.5968 81.0709 37.1313L79.1866 38.3293L77.3022 39.5273C77.2063 39.3764 77.1416 39.2248 77.1004 39.0875C77.0619 38.9592 77.0495 38.8618 77.0454 38.8231C77.0416 38.7869 77.0427 38.7766 77.0435 38.8186C77.0444 38.8608 77.0445 38.9147 77.0445 39.0112H79.2774Z" fill="#1C1C1C"/>
    </svg>
)

const PercentageIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="8" stroke="#1C1C1C" strokeWidth="2"/>
        <circle cx="42" cy="42" r="8" stroke="#1C1C1C" strokeWidth="2"/>
        <path d="M48 12L12 48" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round"/>
    </svg>
)

const TruckIcon = () => (
    <svg width="125" height="87" viewBox="0 0 125 87" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.0575 86.638C31.7747 86.638 28.1231 85.1322 25.1029 82.1205C22.0826 79.1088 20.5766 75.4576 20.5849 71.1669H6.78322L8.13244 64.9785H22.1693C23.2874 62.2267 25.0926 59.9906 27.5847 58.2703C30.0768 56.554 32.9011 55.6959 36.0575 55.6959C39.214 55.6959 42.0403 56.554 44.5366 58.2703C47.0246 59.9906 48.8277 62.2267 49.9458 64.9785H78.527L92.1182 6.18843H24.3478L24.4902 5.58196C24.7914 3.96472 25.5753 2.63008 26.842 1.57805C28.1087 0.526017 29.6023 0 31.3229 0H99.8545L94.8414 21.6595H107.708L124.493 44.0369L119.133 71.1669H111.991C111.991 75.4535 110.485 79.1046 107.473 82.1205C104.461 85.1363 100.81 86.6421 96.5186 86.638C92.2275 86.6339 88.578 85.128 85.5701 82.1205C82.5622 79.1129 81.0562 75.4617 81.0521 71.1669H51.5302C51.5302 75.4535 50.0242 79.1046 47.0122 82.1205C44.0002 85.1363 40.3486 86.6421 36.0575 86.638ZM87.9653 51.0545H116.751L117.846 45.5468L104.614 27.8479H93.3622L87.9653 51.0545ZM90.6142 12.3892L92.1182 6.18843L78.527 64.9785L80.0309 58.7777L84.9327 37.143L90.6142 12.3892ZM0 49.4951L1.54727 43.3066H29.2743L27.727 49.4951H0ZM12.3781 27.8603L13.9254 21.6719H47.8415L46.2943 27.8603H12.3781ZM36.0575 80.4496C38.6033 80.4496 40.7881 79.5399 42.6118 77.7205C44.4314 75.897 45.3412 73.7124 45.3412 71.1669C45.3412 68.6214 44.4314 66.4369 42.6118 64.6134C40.7922 62.7899 38.6074 61.8802 36.0575 61.8843C33.5076 61.8884 31.3229 62.7981 29.5033 64.6134C27.6837 66.4369 26.7739 68.6214 26.7739 71.1669C26.7739 73.7124 27.6837 75.897 29.5033 77.7205C31.327 79.5399 33.5118 80.4496 36.0575 80.4496ZM96.5248 80.4496C99.0706 80.4496 101.253 79.5399 103.073 77.7205C104.892 75.897 105.802 73.7124 105.802 71.1669C105.802 68.6214 104.892 66.4369 103.073 64.6134C101.253 62.7899 99.0685 61.8802 96.5186 61.8843C93.9687 61.8884 91.786 62.7981 89.9706 64.6134C88.1469 66.4369 87.235 68.6214 87.235 71.1669C87.235 73.7124 88.1448 75.897 89.9644 77.7205C91.7881 79.5399 93.9749 80.4496 96.5248 80.4496Z" fill="#1C1C1C"/>
    </svg>
)

const Card = memo(({ icon, title, description }: typeof cards[0]) => {
    const renderIcon = () => {
        switch (icon) {
            case 'factory':
                return <FactoryIcon />
            case 'box':
                return <BoxIcon />
            case 'percentage':
                return <PercentageIcon />
            case 'truck':
                return <TruckIcon />
            default:
                return null
        }
    }

    return (
        <StyledCard>
            <StyledIconContainer>
                {renderIcon()}
            </StyledIconContainer>
        <div className="content">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
        </div>
    </StyledCard>
    )
})

Card.displayName = 'Card'

export const InfoCard = memo(() => {
    return (
        <StyledInfoCard>
            <StyledContentContainer>
                <StyledTitle>Почему Выбирают Нас</StyledTitle>
            <StyledContent>
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
            </StyledContent>
            </StyledContentContainer>
        </StyledInfoCard>
    )
})

InfoCard.displayName = 'InfoCard'

const StyledInfoCard = styled.div`
    padding: ${rm(144)} ${rm(65)};
    width: 100%;

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

const StyledContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${rm(80)} ${rm(95)};
    background-color: rgba(28, 28, 28, 0.1);
    border-radius: ${rm(8)};
    overflow: hidden;
    gap: ${rm(80)};

    ${media.lg`
        padding: ${rm(60)} ${rm(60)};
        gap: ${rm(60)};
    `}

    ${media.md`
        padding: ${rm(50)} ${rm(40)};
        gap: ${rm(50)};
    `}

    ${media.xsm`
        padding: ${rm(40)} ${rm(20)};
        gap: ${rm(40)};
    `}
`

const StyledTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(36)};
    color: #1C1C1C;
    margin: 0 0 ${rm(50)} 0;
    text-align: center;

    ${media.lg`
        font-size: ${rm(32)};
        margin-bottom: ${rm(40)};
    `}

    ${media.md`
        font-size: ${rm(28)};
        margin-bottom: ${rm(35)};
    `}

    ${media.xsm`
        font-size: ${rm(24)};
        margin-bottom: ${rm(30)};
    `}
`

const StyledContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${rm(30)};

    ${media.lg`
        grid-template-columns: repeat(2, 1fr);
        gap: ${rm(30)};
        padding: ${rm(40)} ${rm(30)};
    `}

    ${media.md`
        grid-template-columns: repeat(2, 1fr);
        gap: ${rm(25)};
        padding: ${rm(35)} ${rm(25)};
    `}

    ${media.xsm`
        grid-template-columns: 1fr;
        gap: ${rm(20)};
        padding: ${rm(30)} ${rm(20)};
    `}
`

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${rm(20)};

    ${media.xsm`
        gap: ${rm(16)};
    `}
    
    .content{
        display: flex;
        flex-direction: column;
        gap: ${rm(12)};

        .title{
            font-size: ${rm(20)};
            color: #1C1C1C;
            ${fontGeist(700)};
            margin: 0;

            ${media.lg`
                font-size: ${rm(18)};
            `}

            ${media.md`
                font-size: ${rm(16)};
            `}

            ${media.xsm`
                font-size: ${rm(14)};
            `}
        }
        
        .description{
            font-size: ${rm(14)};
            color: #1C1C1C;
            ${fontGeist(400)};
            margin: 0;
            line-height: 140%;
            max-width: ${rm(250)};

            ${media.lg`
                font-size: ${rm(14)};
            `}

            ${media.md`
                font-size: ${rm(13)};
            `}

            ${media.xsm`
                font-size: ${rm(12)};
            `}
        }
    }
`

const StyledIconContainer = styled.div`
    width: ${rm(150)};
    height: ${rm(150)};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    ${media.lg`
        width: ${rm(70)};
        height: ${rm(70)};
    `}

    ${media.md`
        width: ${rm(60)};
        height: ${rm(60)};
    `}

    ${media.xsm`
        width: ${rm(50)};
        height: ${rm(50)};
    `}

    svg{
        width: 100%;
        height: 100% !important;
    }
`
