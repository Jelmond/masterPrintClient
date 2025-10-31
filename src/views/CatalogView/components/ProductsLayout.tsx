import { ProductCard } from "@/components/products/ProductCard";
import { colors, media, rm } from "@/styles";
import { fontGeist } from "@/styles/fonts";
import styled from "styled-components";

interface ProductsLayoutProps {
    title: string
    tagsProductsData: any
    hasActiveFilters?: boolean
    onOpenFilterModal?: () => void
}

const StyledProductsLayout = styled.div`
    width: 100%;
    height: 100%;
    padding: ${rm(80)} ${rm(216)};
    padding-left: ${rm(250)};

    ${media.lg`
        padding: ${rm(60)} ${rm(120)};
        padding-left: ${rm(220)};
    `}

    ${media.md`
        padding: ${rm(50)} ${rm(60)};
        padding-left: ${rm(220)};
    `}

    ${media.xsm`
        padding: ${rm(30)} ${rm(20)};
        padding-left: ${rm(20)};
    `}
`

const StyledTitle = styled.p`
    font-size: ${rm(60)};
    ${fontGeist(400)};
    margin-bottom: ${rm(60)};
    color: ${colors.black100};
    text-transform: capitalize;
    margin-left: ${rm(20)};

    ${media.lg`
        font-size: ${rm(48)};
        margin-bottom: ${rm(40)};
    `}

    ${media.md`
        font-size: ${rm(40)};
        margin-bottom: ${rm(30)};
    `}

    ${media.xsm`
        font-size: ${rm(32)};
        margin-bottom: ${rm(20)};
        margin-left: 0;
    `}
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(160)};

    ${media.lg`
        gap: ${rm(120)};
    `}

    ${media.md`
        gap: ${rm(80)};
    `}

    ${media.xsm`
        gap: ${rm(50)};
    `}

    .section {

        .subTitle {
            font-size: ${rm(46)};
            ${fontGeist(400)};
            color: ${colors.black100};
            margin-bottom: ${rm(10)};
            text-transform: capitalize;

            ${media.lg`
                font-size: ${rm(36)};
            `}

            ${media.md`
                font-size: ${rm(30)};
            `}

            ${media.xsm`
                font-size: ${rm(24)};
                margin-bottom: ${rm(8)};
            `}
        }

        .products {
            display: flex;
            flex-wrap: wrap;
            gap: ${rm(54)};

            ${media.lg`
                gap: ${rm(40)};
            `}

            ${media.md`
                gap: ${rm(30)};
            `}

            ${media.xsm`
                gap: ${rm(20)};
                justify-content: center;
            `}
        }
    }

`

const StyledNoResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${rm(80)} ${rm(40)};
    text-align: center;

    ${media.xsm`
        padding: ${rm(40)} ${rm(20)};
    `}

    p {
        font-size: ${rm(24)};
        ${fontGeist(400)};
        color: #666;
        margin: 0;
        
        ${media.xsm`
            font-size: ${rm(18)};
        `}

        &:first-child {
            font-size: ${rm(28)};
            color: ${colors.black100};
            margin-bottom: ${rm(16)};

            ${media.xsm`
                font-size: ${rm(22)};
                margin-bottom: ${rm(12)};
            `}
        }
    }
`

const StyledMobileFilterButton = styled.button`
    display: none;
    align-items: center;
    justify-content: center;
    gap: ${rm(8)};
    padding: ${rm(10)} ${rm(16)};
    background: ${colors.white100};
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: ${rm(8)};
    cursor: pointer;
    margin-bottom: ${rm(20)};
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: ${colors.black100};
    transition: all 0.2s ease;
    width: fit-content;

    ${media.xsm`
        display: flex;
    `}

    &:hover {
        border-color: rgba(0, 0, 0, 0.2);
        background: #f8f9fa;
    }

    svg {
        width: ${rm(16)};
        height: ${rm(16)};
    }
`

export const ProductsLayout = ({ title, tagsProductsData, hasActiveFilters, onOpenFilterModal }: ProductsLayoutProps) => {   
    const hasProducts = tagsProductsData.length > 0 && tagsProductsData.some((item: any) => item.products.length > 0)
    
    return (
        <StyledProductsLayout>
            <StyledTitle>{title}</StyledTitle>
            {onOpenFilterModal && (
                <StyledMobileFilterButton onClick={onOpenFilterModal}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6h18M7 12h10M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Фильтры
                </StyledMobileFilterButton>
            )}
            <StyledContent>
                {!hasProducts && hasActiveFilters ? (
                    <StyledNoResults>
                        <p>По выбранным фильтрам товары не найдены</p>
                        <p>Попробуйте изменить параметры поиска</p>
                    </StyledNoResults>
                ) : (
                    tagsProductsData.map((item: any, index: number) => (
                        <div className="section" key={index}>
                            <p className="subTitle">{item.title}</p>
                            <div className="products">
                                {item.products.map((product: any) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </StyledContent>
        </StyledProductsLayout>
    )
}