import { AnimatedText } from "@/components/animated/AnimatedText/AnimatedText"
import { Icon } from "@/components/Icon/Icon"
import { colors, media } from "@/styles"
import { rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import Image from "next/image"
import styled from "styled-components"

const socials = [
    {
        url: "https://t.me/mpp_shop",
        icon: 'viber'
    },
    {
        url: "https://t.me/mpp_shop",
        icon: 'instagram'
    },
    {
        url: "https://t.me/mpp_shop",
        icon: 'telegram'
    },
]

export const About = () => {
    return (
        <StyledAbout>
            <StyledBackgroundImage src="/assets/images/aboutImage.png" alt="about" width={1920} height={1080} />
            <StyledLeft>
                <AnimatedText className="title">О нас</AnimatedText>
                <AnimatedText className="description">
                    MPP Shop — креативное направление при типографии «Мастерпинт-Пак». Мы не просто печатаем — мы сами придумываем, разрабатываем дизайн, производим и доставляем продукцию прямо в Ваши руки, без посредников.
                </AnimatedText>
                <p className="about">
                Наши товары представлены на популярных маркетплейсах: <span>OZON, Wildberries, OZ.by</span> и других. Всё — от идеи до упаковки — мы делаем сами, чтобы вы получали качественный продукт по честной цене.
                </p>
            </StyledLeft>
            <StyledRight>
                <p className="title">
                    Контакты
                </p>
                <p className="info">
                    +375 25 9240768
                </p>
                <p className="info">
                    mpp.shop@gmail.com
                </p>
                <div className="socials">
                    {socials.map((social, index) => (
                        <a href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                            <Icon label={social.icon} />
                        </a>
                    ))}
                </div>
            </StyledRight>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    padding: ${rm(130)} ${rm(180)};
    display: flex;
    gap: ${rm(80)};
    position: relative;
    background-color: #868686;
    width: 100%;

    ${media.md`
        padding: ${rm(130)} ${rm(25)} ${rm(130)} ${rm(25)};
    `}

    ${media.xsm`
        flex-direction: column;
        padding: ${rm(50)} ${rm(30)} ${rm(110)} ${rm(30)};
        gap: ${rm(40)};
    `}

    .title{
        margin-bottom: ${rm(20)};
        ${fontGeist(700)};
        font-size: ${rm(64)};
        color: ${colors.white100};

        ${media.xsm`
            font-size: ${rm(32)};
            margin-bottom: ${rm(10)};
        `}
    }

`

const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    width: ${rm(935)};

    ${media.xsm`
        width: 100%;
    `}

    .description{
        ${fontGeist(600)};
        font-size: ${rm(32)};
        color: ${colors.white100};
        margin-bottom: ${rm(30)};

        ${media.xsm`
            font-size: ${rm(16)};
            margin-bottom: ${rm(10)};
        `}
    }

    .about{
        ${fontGeist(400)};
        font-size: ${rm(24)};
        color: ${colors.white100};

        ${media.xsm`
            font-size: ${rm(13)};
        `}

        span{
            ${fontGeist(800)};
        }
    }
`

const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;

    .info{
        ${fontGeist(400)};
        font-size: ${rm(36)};
        color: ${colors.white100};

        ${media.xsm`
            font-size: ${rm(16)};
        `}
    }

    .socials{
        display: flex;
        gap: ${rm(25)};
        margin-top: ${rm(30)};

        ${media.xsm`
            margin-top: ${rm(10)};
            gap: ${rm(10)};
        `}

        svg{
            width: ${rm(40)};
            height: ${rm(40)};

            ${media.xsm`
                width: ${rm(24)};
                height: ${rm(24)};
            `}

            transition: opacity 0.3s ease, transform 0.3s ease;

            &:hover{
                opacity: 0.7;
                transform: scale(1.05);
            }
        }
    }
`

const StyledBackgroundImage = styled(Image)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    z-index: 0;
    user-select: none;
    pointer-events: none;
`