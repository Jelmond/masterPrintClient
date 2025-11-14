'use client'

import { media, rm } from "@/styles"
import { colors } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"

const adress = {
    title: 'Наш Адрес',
    list: [
        'ООО "Мастерпринт-Пак"',
        'УПН 591511468',
        'Юридический адрес: 231761, г. Скидель, ул. Промышленная, 6Б',
        'Общество с ограниченной ответственностью "Мастерпринт-пак"',
        'регистрационный номер 591511468',
        'Регистрирующий орган: Гродненский райисполком-дата решения о государственной регистрации 18.02.2014,'
    ]
}

const contacts = {
    title: 'Контакты',
    list: [
        {
            label: 'Заведующий Складом',
            value: '+375447495465'
        },
        {
            label: 'Менеджер',
            value: '+375445842911'
        }
    ]
}

const workingHours = {
    title: 'Время работы',
    list: [
        'Пн-Пт: 9:00 - 17:00'
    ]
}

const market = {
    title: 'Магазин',
    list: [
        {
            label: 'Каталог',
            url: '/catalog'
        },
        {
            label: 'Бестселлеры',
            url: '/promotions'
        },
    ]
}

const info = {
    title: 'Информация',
    list: [
        {
            label: 'О Нас',
            url: '/about'
        },
        {
            label: 'Политика Возврата',
            url: '/return'
        },
        {
            label: 'Политика Приватности',
            url: '/privacy'
        },
    ]
}

export const Footer = () => {
    return (
        <StyledFooter>
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
                            <div className="item" key={index}>
                                <span className="label">{item.label}</span>
                                <a href={`tel:${item.value.replace(/\s/g, '')}`} className="value">
                                    {item.value}
                                </a>
                            </div>
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
                                <AnimLink href={item.url}>
                                    {item.label}
                                </AnimLink>
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
                                <AnimLink href={item.url}>{item.label}</AnimLink>
                            </div>
                        ))}
                    </div>
                </StyledSection>
                <StyledSection>
                    <div className="title">
                        {workingHours.title}
                    </div>
                    <div className="list">
                        {workingHours.list.map((item, index) => (
                            <div className="item" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </StyledSection>
            </StyledTop>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    width: 100%;
    background-color: #E6E8E6;
    position: relative;
    z-index: 1;
`

const StyledTop = styled.div`
    width: 100%;
    padding: ${rm(80)} ${rm(125)} ${rm(60)} ${rm(125)};
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${rm(40)};
    position: relative;
    z-index: 1;

    ${media.lg`
        padding: ${rm(60)} ${rm(80)};
        gap: ${rm(30)};
    `}

    ${media.md`
        padding: ${rm(50)} ${rm(40)};
        grid-template-columns: repeat(3, 1fr);
        gap: ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(40)} ${rm(20)};
        grid-template-columns: 1fr;
        gap: ${rm(30)};
    `}
`


const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(20)};

    .title{
        font-size: ${rm(34)};
        ${fontGeist(700)};
        color: #111111;
        margin-bottom: ${rm(4)};

        ${media.xsm`
            font-size: ${rm(18)};
        `}
    }

    .list{
        display: flex;
        flex-direction: column;
        gap: ${rm(12)};

        .item{
            font-size: ${rm(16)};
            ${fontGeist(400)};
            color: #1C1C1C;
            line-height: 1.5;

            ${media.xsm`
                font-size: ${rm(14)};
            `}

            .label {
                display: block;
                margin-bottom: ${rm(4)};
            }

            .value {
                display: inline-block;
                color: #1C1C1C;
                text-decoration: none;
                transition: all 0.3s ease;
                cursor: pointer;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #1C1C1C;
                    transition: width 0.3s ease;
                }

                &:hover {
                    color: #1C1C1C;
                    transform: translateX(4px);

                    &::after {
                        width: 100%;
                    }
                }

                &:active {
                    transform: translateX(2px);
                }
            }

            a{
                color: #1C1C1C;
                text-decoration: none;
                transition: all 0.3s ease;
                position: relative;
                display: inline-block;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #1C1C1C;
                    transition: width 0.3s ease;
                }

                &:hover{
                    color: #1C1C1C;
                    transform: translateX(4px);

                    &::after {
                        width: 100%;
                    }
                }

                &:active {
                    transform: translateX(2px);
                }
            }
        }
    }
`
