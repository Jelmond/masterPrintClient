'use client'

import { colors } from "@/styles"
import { rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import Image from "next/image"
import { CatalogueButton } from "@/components/UI/Buttons/CatalogueButton"
import { CanBeInteresting } from "@/components/CanBeInteresting/CanBeInteresting"
import { useCartStore } from "@/store/cartStore"
import { useEffect, useState } from "react"

interface CartViewProps {
    similarProducts: any[]
}

export const CartView = ({ similarProducts }: CartViewProps) => {
    const items = useCartStore(state => state.items)
    const updateQuantity = useCartStore(state => state.updateQuantity)
    const removeFromCart = useCartStore(state => state.removeFromCart)

    // To avoid hydration issues
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, [])

    if (!mounted) return null


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
                                <StyledProduct key={item.productId}>
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
                                        <StyledPrice>{item.price} руб.</StyledPrice>
                                    </StyledInfo>
                                    <StyledQuantityBox>
                                        <StyledQuantityButton onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}>
                                            -
                                        </StyledQuantityButton>
                                        <StyledQuantity>{item.quantity}</StyledQuantity>
                                        <StyledQuantityButton onClick={() => updateQuantity(item.productId, item.quantity + 1)}>
                                            +
                                        </StyledQuantityButton>
                                    </StyledQuantityBox>
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
                            {items.reduce((acc, item) => acc + item.price * item.quantity, 0)} руб.
                        </span>
                    </div>
                    <CatalogueButton link="/order" color="black" isArrowLeft={false}>
                        <span>Перейти к оплате</span>
                    </CatalogueButton>
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
`

const StyledTitle = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(36)};
    margin-bottom: ${rm(28)};
    color: ${colors.black100};
    margin-left: ${rm(40)};
`

const StyledEmpty = styled.div`
    margin-top: ${rm(40)};
    display: flex;
    align-items: center;
    gap: ${rm(18)};

    svg{
        width: ${rm(62)};
        height: ${rm(62)};
    }

    p{
        font-size: ${rm(24)};
        color: ${colors.black100};
        ${fontGeist(400)};
        width: ${rm(574)};
    }
`

const StyledProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(50)};
    width: 100%;
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
`

const StyledProductTitle = styled.div`
    font-size: ${rm(16)};
    color: ${colors.black100};
    ${fontGeist(400)};
    text-decoration: underline;
    text-decoration-color: #007bff;
    cursor: pointer;
    
    &:hover {
        color: #007bff;
    }
`

const StyledCategory = styled.div`
    font-size: ${rm(14)};
    color: #666;
    ${fontGeist(400)};
`

const StyledPrice = styled.div`
    font-size: ${rm(16)};
    color: ${colors.black100};
    ${fontGeist(500)};
    margin-top: ${rm(4)};
`

const StyledQuantityBox = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    min-width: ${rm(100)};
    justify-content: center;
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
`


const StyledBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${rm(60)};

    .right{
        display: flex;
        align-items: center;
        gap: ${rm(72)};

        .total{
            display: flex;
            align-items: flex-end;
            gap: ${rm(10)};

            p{
                font-size: ${rm(32)};
                color: ${colors.black100};
                ${fontGeist(400)};
            }

            span{
                font-size: ${rm(36)};
                color: ${colors.black100};
                ${fontGeist(400)};
            }
        }
    }
`