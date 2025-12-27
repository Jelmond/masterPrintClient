import { useCartStore } from "@/store/cartStore";
import { colors, rm, media } from "@/styles";
import { fontGeist } from "@/styles/fonts";
import Link from "next/link";
import styled from "styled-components";

interface InterestingProductProps {
    product: any;
}

export const InterestingProduct = ({ product }: InterestingProductProps) => {

    const addToCart = useCartStore(state => state.addToCart);

    const isOutOfStock = product.stock !== undefined && product.stock <= 0;

    // Check if product has discount
    // oldPrice can be either higher (normal case) or lower (if values are swapped)
    const oldPriceValue = product.oldPrice ? parseFloat(product.oldPrice) : null;
    const currentPriceValue = parseFloat(product.price) || 0;
    
    // Determine which is the actual old price and which is the new price
    let oldPrice: number | null = null;
    let currentPrice: number = currentPriceValue;
    let hasDiscount = false;
    
    if (oldPriceValue !== null) {
        if (oldPriceValue > currentPriceValue) {
            // Normal case: oldPrice > price (discount applied)
            oldPrice = oldPriceValue;
            currentPrice = currentPriceValue;
            hasDiscount = true;
        } else if (oldPriceValue < currentPriceValue) {
            // Swapped case: price is actually the old price, oldPrice is the new discounted price
            oldPrice = currentPriceValue;
            currentPrice = oldPriceValue;
            hasDiscount = true;
        }
    }

    const handleAddToCart = (product: any) => {
        // Prevent adding if stock is 0
        if (product.stock !== undefined && product.stock <= 0) {
            return;
        }
        
        addToCart({
            productId: product.id,
            documentId: product.documentId,
            title: product.title,
            price: currentPrice, // Use discounted price
            oldPrice: hasDiscount ? oldPrice : null, // Save old price if discount exists
            image: product.images[0]?.url,
            stock: product.stock
        });
    };
    
    const discountPercent = hasDiscount && oldPrice !== null
        ? Math.round(((oldPrice - currentPrice) / oldPrice) * 100)
        : 0;

    // Check if product has polishes
    const hasPolishes = product.polishes !== null && 
                       product.polishes !== undefined && 
                       Array.isArray(product.polishes) && 
                       product.polishes.length > 0;

    // Check if product is bestseller
    const isBestseller = product.isBestseller === true;
    

    return (
        <StyledInterestingProduct>
            {hasDiscount && (
                <StyledDiscountBadge>
                    <div className="oldPrice">{oldPrice?.toLocaleString('ru-RU')} руб.</div>
                    <div className="newPrice">{currentPrice.toLocaleString('ru-RU')} руб.</div>
                    <div className="discountPercent">-{discountPercent}%</div>
                </StyledDiscountBadge>
            )}
            <StyledImageContainer>
                {hasPolishes && (
                    <StyledPolishesBadge>
                        {product.polishes.map((polish: any, index: number) => (
                            <span key={polish.id || index} className="polishName">
                                {polish.name}
                            </span>
                        ))}
                    </StyledPolishesBadge>
                )}
                <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].url}`} alt={product.title} />
                {isBestseller && (
                    <StyledBestsellerBadge>
                        <span>Бестселлер</span>
                    </StyledBestsellerBadge>
                )}
            </StyledImageContainer>
            <StyledHiddenLink href={`/products/${product?.id}`} target="_blank"/>
            <StyledContent>
                <div className="title">{product.title}</div>
                <div className="infoBadges">
                    {product.articul && (
                        <span className="infoBadge">Арт. {product.articul}</span>
                    )}
                    {product.size && (
                        <span className="infoBadge">Размер: {product.size}</span>
                    )}
                </div>
                <div className="priceContainer">
                    <div className="priceWrapper">
                        {hasDiscount ? (
                            <>
                                <div className="oldPrice">{oldPrice?.toLocaleString('ru-RU')} руб.</div>
                                <div className="priceRow">
                                    <div className="price">{currentPrice.toLocaleString('ru-RU')} руб.</div>
                                    {product.quantityInPack && (
                                        <span className="quantityInPack">({product.quantityInPack}шт)</span>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="priceRow">
                                <div className="price">{currentPrice.toLocaleString('ru-RU')} руб.</div>
                                {product.quantityInPack && (
                                    <span className="quantityInPack">({product.quantityInPack}шт)</span>
                                )}
                            </div>
                        )}
                    </div>
                    <div 
                        className={`button ${isOutOfStock ? 'disabled' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            if (!isOutOfStock) {
                                handleAddToCart(product);
                            }
                        }}
                        style={{ 
                            opacity: isOutOfStock ? 0.5 : 1, 
                            cursor: isOutOfStock ? 'not-allowed' : 'pointer' 
                        }}
                    >
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="19.1667" y1="6" x2="19.1667" y2="32.3077" stroke="black"/>
                        <line x1="32.3077" y1="19.166" x2="6" y2="19.166" stroke="black"/>
                        </svg>
                    </div>
                </div>
            </StyledContent>
        </StyledInterestingProduct>
    )
};

const StyledInterestingProduct = styled.div`
    display: flex;
    flex-direction: column;
    width: ${rm(315)};
    overflow: visible;
    position: relative;

    ${media.lg`
        width: ${rm(280)};
    `}

    ${media.md`
        width: ${rm(250)};
    `}

    ${media.xsm`
        width: 100%;
        max-width: 100%;
    `}
`

const StyledImageContainer = styled.div`
    position: relative;
    width: 100%;

    img{
        border-radius: ${rm(5)};
        width: 100%;
        height: ${rm(470)};
        object-fit: cover;

        ${media.lg`
            height: ${rm(400)};
        `}

        ${media.md`
            height: ${rm(350)};
        `}

        ${media.xsm`
            height: ${rm(250)};
        `}
    }
`

const StyledContent = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: ${rm(10)};
        z-index: 2;

        .title{
            font-size: ${rm(18)};
            ${fontGeist(400)};
            color: ${colors.black100};
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.4;
            max-height: ${rm(50)};
            margin-bottom: ${rm(8)};

            ${media.md`
                font-size: ${rm(16)};
                max-height: ${rm(45)};
            `}

            ${media.xsm`
                font-size: ${rm(14)};
                max-height: ${rm(40)};
            `}
        }

        .infoBadges{
            display: flex;
            flex-wrap: wrap;
            gap: ${rm(6)};
            margin-bottom: ${rm(8)};
            align-items: center;

            .infoBadge{
                font-size: ${rm(11)};
                ${fontGeist(400)};
                color: #666;
                background: rgba(0, 0, 0, 0.03);
                padding: ${rm(4)} ${rm(8)};
                border-radius: ${rm(4)};
                border: 1px solid rgba(0, 0, 0, 0.06);

                ${media.xsm`
                    font-size: ${rm(10)};
                    padding: ${rm(3)} ${rm(6)};
                `}
            }
        }

        .priceContainer{
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            margin-top: ${rm(10)};

            .priceWrapper{
                display: flex;
                flex-direction: column;
                gap: ${rm(4)};

                .oldPrice{
                    font-size: ${rm(16)};
                    ${fontGeist(400)};
                    color: #999;
                    text-decoration: line-through;
                    line-height: 1;

                    ${media.md`
                        font-size: ${rm(14)};
                    `}

                    ${media.xsm`
                        font-size: ${rm(13)};
                    `}
                }

                .priceRow{
                    display: flex;
                    align-items: baseline;
                    gap: ${rm(6)};
                    flex-wrap: wrap;
                }

                .price{
                    font-size: ${rm(24)};
                    ${fontGeist(400)};
                    color: ${colors.black100};
                    line-height: 1;

                    ${media.md`
                        font-size: ${rm(20)};
                    `}

                    ${media.xsm`
                        font-size: ${rm(18)};
                    `}
                }

                .quantityInPack{
                    font-size: ${rm(14)};
                    ${fontGeist(400)};
                    color: #666;
                    line-height: 1;

                    ${media.md`
                        font-size: ${rm(13)};
                    `}

                    ${media.xsm`
                        font-size: ${rm(12)};
                    `}
                }
            }

            .button{
                width: ${rm(38)};
                height: ${rm(38)};
                cursor: pointer;
                
                transition: opacity .3s ease-in-out;

                ${media.xsm`
                    width: ${rm(32)};
                    height: ${rm(32)};
                `}

                &:hover:not(.disabled){
                    opacity: .7;
                }
                
                &.disabled{
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            }
        }
    }
`;

const StyledProductInfoBadge = styled.div`
    position: absolute;
    bottom: ${rm(10)};
    left: ${rm(10)};
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: ${rm(6)};
    background: linear-gradient(135deg, rgba(28, 28, 28, 0.9) 0%, rgba(44, 44, 44, 0.9) 100%);
    border-radius: ${rm(8)};
    padding: ${rm(8)} ${rm(12)};
    box-shadow: 0 ${rm(4)} ${rm(12)} rgba(0, 0, 0, 0.4), 
                0 ${rm(2)} ${rm(6)} rgba(0, 0, 0, 0.2);
    border: 1.5px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);

    ${media.xsm`
        bottom: ${rm(8)};
        left: ${rm(8)};
        padding: ${rm(6)} ${rm(10)};
        gap: ${rm(4)};
        border-radius: ${rm(6)};
    `}
`

const StyledInfoBadgeItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(6)};
    font-size: ${rm(11)};
    ${fontGeist(400)};
    white-space: nowrap;

    ${media.xsm`
        font-size: ${rm(10)};
        gap: ${rm(4)};
    `}

    .label {
        color: rgba(255, 255, 255, 0.7);
        ${fontGeist(500)};
    }

    .value {
        color: ${colors.white100};
        ${fontGeist(600)};
    }
`;


const StyledHiddenLink = styled.a`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`

const StyledDiscountBadge = styled.div`
    position: absolute;
    top: ${rm(10)};
    right: ${rm(10)};
    z-index: 10;
    background: linear-gradient(135deg, #ff4757 0%, #ff6348 50%, #ff7675 100%);
    border-radius: ${rm(8)};
    padding: ${rm(6)} ${rm(10)};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${rm(8)};
    box-shadow: 0 ${rm(4)} ${rm(12)} rgba(255, 71, 87, 0.4), 
                0 ${rm(2)} ${rm(6)} rgba(0, 0, 0, 0.15);
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    animation: pulse 2s ease-in-out infinite;

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            box-shadow: 0 ${rm(4)} ${rm(12)} rgba(255, 71, 87, 0.4), 
                        0 ${rm(2)} ${rm(6)} rgba(0, 0, 0, 0.15);
        }
        50% {
            transform: scale(1.02);
            box-shadow: 0 ${rm(6)} ${rm(16)} rgba(255, 71, 87, 0.5), 
                        0 ${rm(3)} ${rm(8)} rgba(0, 0, 0, 0.2);
        }
    }

    ${media.xsm`
        top: ${rm(8)};
        right: ${rm(8)};
        padding: ${rm(5)} ${rm(8)};
        gap: ${rm(6)};
        border-radius: ${rm(6)};
    `}

    .oldPrice {
        font-size: ${rm(11)};
        ${fontGeist(400)};
        color: rgba(255, 255, 255, 0.85);
        text-decoration: line-through;
        line-height: 1;
        opacity: 0.9;
        white-space: nowrap;

        ${media.xsm`
            font-size: ${rm(10)};
        `}
    }

    .newPrice {
        font-size: ${rm(14)};
        ${fontGeist(700)};
        color: ${colors.white100};
        line-height: 1;
        text-shadow: 0 ${rm(1)} ${rm(2)} rgba(0, 0, 0, 0.2);
        white-space: nowrap;

        ${media.xsm`
            font-size: ${rm(13)};
        `}
    }

    .discountPercent {
        font-size: ${rm(11)};
        ${fontGeist(700)};
        color: ${colors.white100};
        background: rgba(255, 255, 255, 0.25);
        padding: ${rm(2)} ${rm(6)};
        border-radius: ${rm(4)};
        line-height: 1;
        border: 1px solid rgba(255, 255, 255, 0.3);
        text-shadow: 0 ${rm(1)} ${rm(2)} rgba(0, 0, 0, 0.2);
        white-space: nowrap;

        ${media.xsm`
            font-size: ${rm(10)};
            padding: ${rm(2)} ${rm(5)};
            border-radius: ${rm(3)};
        `}
    }
`

const StyledPolishesBadge = styled.div`
    position: absolute;
    top: ${rm(50)};
    right: ${rm(10)};
    z-index: 10;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #9b59b6 100%);
    border-radius: ${rm(8)};
    padding: ${rm(6)} ${rm(10)};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${rm(6)};
    flex-wrap: wrap;
    max-width: ${rm(200)};
    box-shadow: 0 ${rm(4)} ${rm(12)} rgba(102, 126, 234, 0.4), 
                0 ${rm(2)} ${rm(6)} rgba(0, 0, 0, 0.15);
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);

    ${media.xsm`
        top: ${rm(45)};
        right: ${rm(8)};
        padding: ${rm(5)} ${rm(8)};
        gap: ${rm(4)};
        border-radius: ${rm(6)};
        max-width: ${rm(150)};
    `}

    .polishName {
        font-size: ${rm(11)};
        ${fontGeist(600)};
        color: ${colors.white100};
        line-height: 1;
        text-shadow: 0 ${rm(1)} ${rm(2)} rgba(0, 0, 0, 0.2);
        white-space: nowrap;

        ${media.xsm`
            font-size: ${rm(10)};
        `}
    }
`

const StyledBestsellerBadge = styled.div`
    position: absolute;
    bottom: ${rm(10)};
    right: ${rm(10)};
    z-index: 10;
    background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
    border-radius: ${rm(8)};
    padding: ${rm(6)} ${rm(12)};
    box-shadow: 0 ${rm(4)} ${rm(12)} rgba(217, 119, 6, 0.35), 
                0 ${rm(2)} ${rm(6)} rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);

    ${media.xsm`
        bottom: ${rm(8)};
        right: ${rm(8)};
        padding: ${rm(5)} ${rm(10)};
        border-radius: ${rm(6)};
    `}

    span {
        font-size: ${rm(12)};
        ${fontGeist(700)};
        color: ${colors.white100};
        line-height: 1;
        text-shadow: 0 ${rm(1)} ${rm(2)} rgba(0, 0, 0, 0.2);
        white-space: nowrap;

        ${media.xsm`
            font-size: ${rm(11)};
        `}
    }
`