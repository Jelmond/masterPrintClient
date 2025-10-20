'use client'

import { media, rm } from "@/styles"

import { colors } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

const adress = {
    title: 'Наш адрес',
    list: ['ООО  «Мастерпринт-Пак»', 'УНП 591511468', 'Интернет-магазин включен в Торговый реестр Республики Беларусь 01.01.2001 за №111111', `Юридический  адрес: 231761,  г. Скидель, ул. Промышленная, 6Б   Свидетельство о государственной регистрации №100160363, выдано Минским горисполкомом 26.10.2015 г.`]
}

const contacts = {
    title: 'Контакты',
    list: ['+375 25 9240768', 'inst: MPPShop', 'mpp.shop@gmail.com']
}

const market = {
    title: 'Магазин',
    list: [
        {
            label: 'Каталог',
            url: '/catalog'
        },
        {
            label: 'Новое',
            url: '/new'
        },
        {
            label: 'Популярное',
            url: '/popular'
        },
        {
            label: 'Акции',
            url: '/promotions'
        },
    ]
}

const help = {
    title: 'Помощь',
    list: [
        {
            label: 'Оплата и доставка',
            url: '/delivery'
        },
        {
            label: 'Заказы',
            url: '/payment'
        },
        {
            label: 'Аккаунт',
            url: '/popular'
        },
    ]
}

const info = {
    title: 'Информация',
    list: [
        {
            label: 'О нас',
            url: '/about'
        },
        {
            label: 'Адрес',
            url: '/address'
        },
        {
            label: 'Политика возврата',
            url: '/return'
        },
        {
            label: 'Политика приватности',
            url: '/privacy'
        },
    ]
}


export const Footer = () => {
    return (
        <StyledFooter>
            {/* <StyledBackgroundImage src="/assets/images/footerImage.png" alt="footer" width={1920} height={1080} /> */}
            <StyledBackground />
            <StyledTop>
                <StyledSection>
                    <div className="title">
                        {adress.title}
                    </div>
                    <div className="list">
                        {adress.list.map((item, index) => (
                            <div className="item" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </StyledSection>
                <StyledSection>
                    <div className="title">
                        {contacts.title}
                    </div>
                    <div className="list">
                        {contacts.list.map((item, index) => (
                            <div className="item" key={index}>{item}</div>
                        ))}
                    </div>
                </StyledSection>
                <StyledSection>
                    <div className="title">
                        {market.title}
                    </div>
                    <div className="list">
                        {market.list.map((item, index) => (
                            <div className="item" key={index}>
                                <Link href={item.url}>
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </StyledSection>
                <StyledSection>
                    <div className="title">
                        {help.title}
                    </div>
                    <div className="list">
                        {help.list.map((item, index) => (
                            <div className="item" key={index}>
                                <Link href={item.url}>
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </StyledSection>
                <StyledSection>
                    <div className="title">
                        {info.title}
                    </div>
                    <div className="list">
                        {info.list.map((item, index) => (
                            <div className="item" key={index}>
                                <Link href={item.url}>{item.label}</Link>
                            </div>
                        ))}
                    </div>
                </StyledSection>
            </StyledTop>
            <StyledBottom>
                <div className="text">
                    © MPP Shop
                </div>
                <div className="image">
                    <Image src='/assets/images/alphabank.png' alt="image" width={198} height={198}/>
                </div>
            </StyledBottom>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    width: 100%;
    background-color: ${colors.white100};
    position: relative;
`

const StyledTop = styled.div`
    width: 100%;
    padding: ${rm(124)} ${rm(180)} ${rm(70)} ${rm(180)};
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;

    ${media.md`
        padding: ${rm(124)} ${rm(25)} ${rm(70)} ${rm(25)};
        flex-wrap: wrap;
        column-gap: ${rm(70)};
        row-gap: ${rm(40)};
    `}
`

const StyledBottom = styled.div`
    width: 100%;
    padding: ${rm(0)} ${rm(66)} ${rm(100)} ${rm(66)};
    display: flex;
    position: relative;
    align-items: center;
    position: relative;
    z-index: 1;

    ${media.xsm`
        padding: ${rm(0)} ${rm(25)} ${rm(25)} ${rm(25)};
        flex-direction: column;
        align-items: flex-start;
        gap: ${rm(10)};
    `}


    .text{
        font-size: ${rm(16)};
        ${fontGeist(400)};
        color: ${colors.black100};
        margin-right: ${rm(148)};

        ${media.lg`
            margin-right: ${rm(100)};
        `}

        ${media.md`
            margin-right: ${rm(50)};
        `}
    }

    .image{
        width: ${rm(1300)};
        height: ${rm(90)};

        ${media.lg`
            width: ${rm(1000)};
            height: ${rm(60)};
        `}

        ${media.md`
            width: ${rm(700)};
            height: ${rm(50)};
        `}

        ${media.xsm`
            width: 100%;
            height: ${rm(40)};
        `}

        img{
            width: 100%;
            height: 100%;
        }
    }

`

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(15)};
    max-width: ${rm(370)};

    .title{
        font-size: ${rm(24)};
        ${fontGeist(500)};
        color: ${colors.black100};
    }

    .list{
        display: flex;
        flex-direction: column;
        gap: ${rm(10)};

        .item{
            font-size: ${rm(16)};
            ${fontGeist(400)};
            color: ${colors.black100};

            a{
                transition: opacity 0.3s ease, transform 0.3s ease;

                &:hover{
                    opacity: 0.7;
                    transform: translateX(5px);
                }
            }
        }
    }
`

const StyledBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
`