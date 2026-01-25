'use client'

import { media, rm } from "@/styles"
import { colors } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"
import Image from "next/image"
import { useWindowWidth } from "@react-hook/window-size"

const adress = {
    title: 'Наш Адрес',
    list: [
        'Адрес пункта выдачи: г.Гродно, ул.Титова, 24',
        'ООО "Мастерпринт-Пак"',
        'УНП 591511468',
        'Юридический адрес: Республика Беларусь, 231761, г. Скидель, <br/> ул. Промышленная, 6Б',
        'Общество с ограниченной ответственностью "Мастерпринт-Пак"',
        'регистрационный номер 591511468',
        'регистрационный номер в торговом реестре Республики Беларусь: 761957',
        'Регистрирующий орган: Гродненский райисполком-дата решения о государственной регистрации 18.02.2014'
    ]
}

const contacts = {
    title: 'Контакты',
    list: [
        {
            label: 'Пункт выдачи',
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
    sections: [
        {
            subtitle: 'Обработка заказов менеджером:',
            items: [
                'Пн-Пт: 9:00 - 17:00',
            ]
        },
        {
            subtitle: 'Прием заказов:',
            items: [
                'Круглосуточно',
            ]
        }
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
            url: '/bestsellers'
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
            label: 'Оформление заказа',
            url: '/order-instructions'
        },
        {
            label: 'Способы оплаты',
            url: '/payment'
        },
        {
            label: 'Доставка',
            url: '/delivery'
        },
        {
            label: 'Обращения покупателей',
            url: '/requests'
        }
    ]
}

export const Footer = () => {

    const width = useWindowWidth();

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
                                {item === 'Адрес пункта выдачи : Титова 24' ? (
                                    <strong>{item}</strong>
                                ) : (
                                    <span dangerouslySetInnerHTML={{ __html: item }} />
                                )}
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
                        {workingHours.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="working-hours-section">
                                <div className="subtitle">{section.subtitle}</div>
                                {section.items.map((item, itemIndex) => (
                                    <div className="item" key={itemIndex}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </StyledSection>
            </StyledTop>
            <StyledBottom>
                <StyledPriceNote>
                    * цены в каталоге указаны с НДС
                </StyledPriceNote>
                <StyledBottomLogos>
                    <Image src={width > 1024 ? "/al.png" : "/alphaMobile.png"} alt="wildberries" fill/>
                </StyledBottomLogos>
            </StyledBottom>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    width: 100%;
    background-color: #F5F7F5;
    position: relative;
    z-index: 1;
`

const StyledBottom = styled.div`
    width: 100%;
    padding: 0 ${rm(125)} ${rm(30)} ${rm(125)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${rm(20)};

    ${media.lg`
        padding: 0 ${rm(80)} ${rm(30)} ${rm(80)};
    `}

    ${media.md`
        padding: 0 ${rm(40)} ${rm(30)} ${rm(40)};
        flex-direction: column;
        align-items: flex-start;
    `}

    ${media.xsm`
        padding: 0 ${rm(20)} ${rm(24)} ${rm(20)};
        flex-direction: column;
        align-items: flex-start;
    `}
`

const StyledPriceNote = styled.div`
    font-size: ${rm(14)};
    ${fontGeist(400)};
    color: #666666;

    ${media.xsm`
        font-size: ${rm(12)};
    `}
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
        grid-template-columns: repeat(2, 1fr);
        gap: ${rm(30)};
    `}
`


const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(20)};

    ${media.xsm`
        &:first-child {
            grid-column: 1 / -1;
        }
    `}

    .workingHours{
        font-weight: 700 !important;
    }

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

        .working-hours-section {
            display: flex;
            flex-direction: column;
            gap: ${rm(8)};
            margin-bottom: ${rm(16)};

            &:last-child {
                margin-bottom: 0;
            }

            .subtitle {
                font-size: ${rm(16)};
                ${fontGeist(600)};
                color: #111111;
                margin-bottom: ${rm(4)};

                ${media.xsm`
                    font-size: ${rm(14)};
                `}
            }
        }

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


const StyledBottomLogos = styled.div`
    margin-top: ${rm(20)};
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    

    img{
        width: 100%;
        height: auto;
        object-fit: none;
        position: relative !important;
    }
`