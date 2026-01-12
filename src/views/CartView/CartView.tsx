'use client'

import { colors, media } from "@/styles"
import { rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import Image from "next/image"
import { CatalogueButton } from "@/components/UI/Buttons/CatalogueButton"
import { CanBeInteresting } from "@/components/CanBeInteresting/CanBeInteresting"
import { useCartStore } from "@/store/cartStore"
import { useToastStore } from "@/store/toastStore"
import { useEffect, useState } from "react"

interface CartViewProps {
    similarProducts: any[]
}

export const CartView = ({ similarProducts }: CartViewProps) => {
    const items = useCartStore(state => state.items)
    const updateQuantity = useCartStore(state => state.updateQuantity)
    const removeFromCart = useCartStore(state => state.removeFromCart)
    const showToast = useToastStore(state => state.showToast)

    // To avoid hydration issues
    const [mounted, setMounted] = useState(false)
    const [isAfterWorkingHours, setIsAfterWorkingHours] = useState(false)
    
    useEffect(() => { 
        setMounted(true)
        // Check if current time is after 17:00
        const now = new Date()
        const currentHour = now.getHours()
        const currentDay = now.getDay() // 0 = Sunday, 6 = Saturday
        // Check if it's weekday (1-5) and after 17:00, or weekend
        if ((currentDay >= 1 && currentDay <= 5 && currentHour >= 17) || currentDay === 0 || currentDay === 6) {
            setIsAfterWorkingHours(true)
        }
    }, [])

    if (!mounted) return null

    const cartTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const isBelowMinimum = cartTotal < 50

    return (
        <>
            <StyledCart>
                <div style={{width: '100%'}}>
                    <StyledTitle>Корзина товаров</StyledTitle>
                    {items.length === 0 ? (
                        <StyledEmpty>
                            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_655_2792)">
                                <path d="M46.5 15.5003H41.3333C41.3333 9.79116 36.7092 5.16699 31 5.16699C25.2908 5.16699 20.6667 9.79116 20.6667 15.5003H15.5C12.6583 15.5003 10.3333 17.8253 10.3333 20.667V51.667C10.3333 54.5087 12.6583 56.8337 15.5 56.8337H46.5C49.3417 56.8337 51.6667 54.5087 51.6667 51.667V20.667C51.6667 17.8253 49.3417 15.5003 46.5 15.5003ZM31 10.3337C33.8417 10.3337 36.1667 12.6587 36.1667 15.5003H25.8333C25.8333 12.6587 28.1583 10.3337 31 10.3337ZM46.5 51.667H15.5V20.667H20.6667V25.8337C20.6667 27.2545 21.8292 28.417 23.25 28.417C24.6708 28.417 25.8333 27.2545 25.8333 25.8337V20.667H36.1667V25.8337C36.1667 27.2545 37.3292 28.417 38.75 28.417C40.1708 28.417 41.3333 27.2545 41.3333 25.8337V20.667H46.5V51.667Z" fill="#323232"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_655_2792">
                                <rect width="62" height="62" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>
                                В вашей корзине нет товаров. Здесь будут отображаться добавленные вами позиции.
                            </p>
                            </StyledEmpty>
                    ) : (
                        <StyledProducts>
                            {items.map(item => (
                                <StyledProduct key={item.productSlug}>
                                    <StyledImageBox>
                                        {item.image ? (
                                            <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image}`} alt={item.title} fill style={{objectFit:'cover'}} />
                                        ) : (
                                            <StyledImagePlaceholder />
                                        )}
                                    </StyledImageBox>
                                    <StyledInfo>
                                        <StyledProductTitle>{item.title}</StyledProductTitle>
                                        <StyledCategory>Открытки и конверты &lt; День Рождения</StyledCategory>
                                        <StyledPriceContainer>
                                            {item.oldPrice && item.oldPrice > item.price ? (
                                                <>
                                                    <StyledOldPrice>{item.oldPrice.toLocaleString('ru-RU')} руб.</StyledOldPrice>
                                                    <StyledPrice>{item.price.toLocaleString('ru-RU')} руб.</StyledPrice>
                                                </>
                                            ) : (
                                                <StyledPrice>{item.price.toLocaleString('ru-RU')} руб.</StyledPrice>
                                            )}
                                        </StyledPriceContainer>
                                    </StyledInfo>
                                    <StyledQuantityBox>
                                        <StyledQuantityButton 
                                            onClick={() => updateQuantity(item.productSlug, Math.max(1, item.quantity - 1))}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </StyledQuantityButton>
                                        <StyledQuantity>{item.quantity}</StyledQuantity>
                                        <StyledQuantityButton 
                                            onClick={() => {
                                                const newQuantity = item.quantity + 1
                                                // Check stock limit
                                                if (item.stock !== undefined && newQuantity > item.stock) {
                                                    showToast(`Доступно только ${item.stock} шт.`, 'error')
                                                    return
                                                }
                                                updateQuantity(item.productSlug, newQuantity)
                                            }}
                                            disabled={item.stock !== undefined && item.quantity >= item.stock}
                                        >
                                            +
                                        </StyledQuantityButton>
                                    </StyledQuantityBox>
                                    <StyledRemoveButton onClick={() => removeFromCart(item.productSlug)}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </StyledRemoveButton>
                                </StyledProduct>
                            ))}
                        </StyledProducts>
                    )}
                </div>
            </StyledCart>
            {items.length > 0 ? <StyledBottom>
                <CatalogueButton link="/catalog" color="grey" isArrowLeft>
                    <span>Продолжить покупки</span>
                </CatalogueButton>
                <div className="right">
                    <div className="total">
                        <p>
                            Общая сумма:
                        </p>
                        <span>
                            {cartTotal.toFixed(2)} руб.
                        </span>
                    </div>
                    {isAfterWorkingHours && items.length > 0 && (
                        <StyledAfterHoursWarning>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Менеджер обработает и отправит ваш заказ в ближайшее рабочее время (Пн-Пт: 9:00 - 17:00)
                        </StyledAfterHoursWarning>
                    )}
                    {isBelowMinimum && (
                        <StyledCartMinimumWarning>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Минимальная сумма заказа — 50 руб. Добавьте товары, чтобы продолжить.
                        </StyledCartMinimumWarning>
                    )}
                    <StyledOrderButtonWrapper 
                        onClick={(e) => {
                            if (isBelowMinimum) {
                                e.preventDefault()
                                e.stopPropagation()
                                showToast('Минимальная сумма заказа — 50 руб. Добавьте товары, чтобы продолжить.', 'error')
                            }
                        }}
                    >
                        <CatalogueButton 
                            link={!isBelowMinimum ? "/order" : "#"} 
                            color="black" 
                            isArrowLeft={false}
                        >
                            <span>Перейти к оформлению заказа</span>
                        </CatalogueButton>
                    </StyledOrderButtonWrapper>
                </div>
            </StyledBottom>
            :
            <StyledBottom>
                <CatalogueButton link="/catalog" color="grey" isArrowLeft>
                    <span>Перейти в каталог</span>
                </CatalogueButton>
            </StyledBottom>
            }
            <CanBeInteresting data={similarProducts} title="Может вам понравится" />
        </>
    )
}


const StyledCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${rm(110)} ${rm(125)} ${rm(125)} ${rm(125)};
    min-height: 60vh;
    justify-content: space-between;

    ${media.lg`
        padding: ${rm(90)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(70)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(60)} ${rm(20)};
    `}
`

const StyledTitle = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(36)};
    margin-bottom: ${rm(28)};
    color: ${colors.black100};
    margin-left: ${rm(40)};

    ${media.lg`
        font-size: ${rm(32)};
        margin-left: ${rm(30)};
    `}

    ${media.md`
        font-size: ${rm(28)};
        margin-left: ${rm(20)};
        margin-bottom: ${rm(24)};
    `}

    ${media.xsm`
        font-size: ${rm(24)};
        margin-left: 0;
        margin-bottom: ${rm(20)};
    `}
`

const StyledEmpty = styled.div`
    margin-top: ${rm(40)};
    display: flex;
    align-items: center;
    gap: ${rm(18)};

    ${media.md`
        flex-direction: column;
        text-align: center;
        gap: ${rm(16)};
    `}

    ${media.xsm`
        margin-top: ${rm(30)};
        gap: ${rm(12)};
    `}

    svg{
        width: ${rm(62)};
        height: ${rm(62)};

        ${media.xsm`
            width: ${rm(48)};
            height: ${rm(48)};
        `}
    }

    p{
        font-size: ${rm(24)};
        color: ${colors.black100};
        ${fontGeist(400)};
        width: ${rm(574)};

        ${media.md`
            width: 100%;
            font-size: ${rm(20)};
        `}

        ${media.xsm`
            font-size: ${rm(16)};
        `}
    }
`

const StyledProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(50)};
    width: 100%;

    ${media.md`
        gap: ${rm(30)};
    `}

    ${media.xsm`
        gap: ${rm(20)};
    `}
`

const StyledProduct = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(20)};
    width: 100%;
    padding: ${rm(20)};
    background: #ffffff;
    border-radius: ${rm(12)};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: ${rm(16)};

    ${media.md`
        padding: ${rm(15)};
        gap: ${rm(15)};
    `}

    ${media.xsm`
        padding: ${rm(12)};
        gap: ${rm(12)};
        flex-wrap: wrap;
        align-items: flex-start;
    `}
    
    &:last-child {
        margin-bottom: 0;
    }
`

const StyledImageBox = styled.div`
    width: ${rm(80)};
    height: ${rm(80)};
    background: #e0e0e0;
    border-radius: ${rm(8)};
    position: relative;
    flex-shrink: 0;
    overflow: hidden;

    ${media.xsm`
        width: ${rm(60)};
        height: ${rm(60)};
        order: 1;
    `}
`

const StyledImagePlaceholder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d3d3d3;
    border-radius: ${rm(5)};
    &::before {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        background: url('data:image/svg+xml;utf8,<svg fill=\'gray\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><rect width=\'100%\' height=\'100%\' fill=\'lightgray\'/><path d=\'M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM7 10l5 5 5-5\' stroke=\'gray\' stroke-width=\'2\' fill=\'none\'/></svg>') center/contain no-repeat;
    }
`

const StyledInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${rm(6)};
    min-width: 0;
    max-height: ${rm(100)};
    overflow: hidden;

    ${media.xsm`
        width: 100%;
        order: 3;
        max-height: ${rm(80)};
    `}
`

const StyledProductTitle = styled.div`
    font-size: ${rm(16)};
    color: ${colors.black100};
    ${fontGeist(400)};
    text-decoration: underline;
    text-decoration-color: #007bff;
    cursor: pointer;
    max-height: ${rm(60)};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.3;
    word-break: break-word;

    ${media.xsm`
        font-size: ${rm(14)};
        max-height: ${rm(50)};
        -webkit-line-clamp: 2;
    `}
    
    &:hover {
        color: #007bff;
    }
`

const StyledCategory = styled.div`
    font-size: ${rm(14)};
    color: #666;
    ${fontGeist(400)};
    max-height: ${rm(20)};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${media.xsm`
        font-size: ${rm(12)};
        max-height: ${rm(18)};
    `}
`

const StyledPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(2)};
    margin-top: ${rm(4)};
    flex-shrink: 0;
`

const StyledPrice = styled.div`
    font-size: ${rm(16)};
    color: ${colors.black100};
    ${fontGeist(500)};

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledOldPrice = styled.div`
    font-size: ${rm(14)};
    color: #a0aec0;
    ${fontGeist(400)};
    text-decoration: line-through;

    ${media.xsm`
        font-size: ${rm(12)};
    `}
`

const StyledQuantityBox = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    min-width: ${rm(100)};
    justify-content: center;

    ${media.xsm`
        min-width: ${rm(80)};
        gap: ${rm(8)};
        order: 2;
        margin-left: auto;
    `}
`

const StyledQuantityButton = styled.button`
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    font-size: ${rm(18)};
    font-weight: 500;
    color: ${colors.black100};
    cursor: pointer;
    width: ${rm(36)};
    height: ${rm(36)};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${rm(8)};
    transition: all 0.2s ease;
    user-select: none;

    ${media.xsm`
        width: ${rm(32)};
        height: ${rm(32)};
        font-size: ${rm(16)};
    `}

    &:hover:not(:disabled) {
        background: #e9ecef;
        border-color: #dee2e6;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: #f8f9fa;
    }
    
    &:hover {
        background-color: #e9ecef;
        border-color: #dee2e6;
        transform: translateY(-1px);
    }
    
    &:active {
        transform: translateY(0);
        background-color: #dee2e6;
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
`

const StyledQuantity = styled.div`
    font-size: ${rm(16)};
    font-weight: 500;
    min-width: ${rm(32)};
    text-align: center;
    ${fontGeist(400)};
    padding: ${rm(8)} ${rm(12)};
    background: #ffffff;
    border: 1px solid #e9ecef;
    border-radius: ${rm(6)};

    ${media.xsm`
        font-size: ${rm(14)};
        min-width: ${rm(28)};
        padding: ${rm(6)} ${rm(10)};
    `}
`

const StyledRemoveButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${rm(8)};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    transition: all 0.2s ease;
    border-radius: ${rm(6)};
    width: ${rm(36)};
    height: ${rm(36)};
    flex-shrink: 0;

    ${media.xsm`
        width: ${rm(32)};
        height: ${rm(32)};
        padding: ${rm(6)};
        order: 4;
        align-self: flex-start;
    `}

    svg {
        width: 100%;
        height: 100%;
    }

    &:hover {
        color: #dc3545;
        background: #fff5f5;
    }

    &:active {
        transform: scale(0.95);
    }
`


const StyledBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${rm(60)};

    ${media.lg`
        padding: ${rm(50)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(40)} ${rm(40)};
        flex-direction: column;
        gap: ${rm(30)};
        align-items: stretch;
    `}

    ${media.xsm`
        padding: ${rm(30)} ${rm(20)};
        gap: ${rm(20)};
    `}

    .right{
        display: flex;
        align-items: center;
        gap: ${rm(72)};
        flex-direction: column;

        ${media.md`
            width: 100%;
            gap: ${rm(20)};
        `}

        ${media.xsm`
            gap: ${rm(16)};
        `}

        .total{
            display: flex;
            align-items: flex-end;
            gap: ${rm(10)};

            ${media.xsm`
                flex-direction: column;
                align-items: flex-start;
                gap: ${rm(4)};
            `}

            p{
                font-size: ${rm(32)};
                color: ${colors.black100};
                ${fontGeist(400)};

                ${media.md`
                    font-size: ${rm(28)};
                `}

                ${media.xsm`
                    font-size: ${rm(20)};
                `}
            }

            span{
                font-size: ${rm(36)};
                color: ${colors.black100};
                ${fontGeist(400)};

                ${media.md`
                    font-size: ${rm(32)};
                `}

                ${media.xsm`
                    font-size: ${rm(24)};
                `}
            }
        }
    }
`

const StyledAfterHoursWarning = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    padding: ${rm(16)} ${rm(20)};
    background: #fff9e6;
    border: 2px solid #ffc107;
    border-radius: ${rm(8)};
    color: #856404;
    font-size: ${rm(16)};
    ${fontGeist(500)};
    width: 100%;

    ${media.xsm`
        padding: ${rm(12)} ${rm(16)};
        font-size: ${rm(14)};
        gap: ${rm(10)};
        flex-wrap: wrap;
    `}

    svg {
        width: ${rm(20)};
        height: ${rm(20)};
        flex-shrink: 0;

        ${media.xsm`
            width: ${rm(18)};
            height: ${rm(18)};
        `}
    }
`

const StyledCartMinimumWarning = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    padding: ${rm(16)} ${rm(20)};
    background: #fff5f5;
    border: 2px solid #ff6b6b;
    border-radius: ${rm(8)};
    color: #dc3545;
    font-size: ${rm(16)};
    ${fontGeist(500)};
    width: 100%;
    animation: pulse 2s ease-in-out infinite;

    ${media.xsm`
        padding: ${rm(12)} ${rm(16)};
        font-size: ${rm(14)};
        gap: ${rm(10)};
        flex-wrap: wrap;
    `}

    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.4);
        }
        50% {
            box-shadow: 0 0 0 4px rgba(255, 107, 107, 0);
        }
    }

    svg {
        width: ${rm(20)};
        height: ${rm(20)};
        flex-shrink: 0;

        ${media.xsm`
            width: ${rm(18)};
            height: ${rm(18)};
        `}
    }
`

const StyledOrderButtonWrapper = styled.div`
    width: 100%;
    cursor: ${props => props.onClick ? 'not-allowed' : 'pointer'};
    
    &:has([href="#"]) {
        opacity: 0.6;
        cursor: not-allowed;
    }
`