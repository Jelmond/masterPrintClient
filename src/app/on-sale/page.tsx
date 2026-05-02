'use client'

import { useStrapi } from "@/hooks/useStrapi"
import { ProductCard } from "@/components/products/ProductCard"
import { media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled, { keyframes } from "styled-components"

interface Sale {
    name: string
    priority: number
}

interface SaleGroup {
    sale: Sale
    products: any[]
}

interface GroupedOnSaleResponse {
    data: SaleGroup[]
}

function toAnchorId(name: string): string {
    return name
        .toLowerCase()
        .replace(/[«»""'']/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-zа-яёa-z0-9\-]/gi, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
}

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
`

export default function OnSalePage() {
    const { data, loading, error } = useStrapi<GroupedOnSaleResponse>({
        path: '/api/sales/grouped/products',
    })

    return (
        <StyledPage>
            <StyledHeader>
                <StyledTitle>Акции</StyledTitle>
                <StyledSubtitle>Товары со скидкой — актуальные предложения прямо сейчас</StyledSubtitle>
            </StyledHeader>

            {loading && (
                <StyledLoadingWrap>
                    <StyledSpinner />
                </StyledLoadingWrap>
            )}

            {error && (
                <StyledError>Не удалось загрузить акции. Попробуйте позже.</StyledError>
            )}

            {!loading && !error && data?.data?.length === 0 && (
                <StyledEmpty>Сейчас акций нет. Загляните позже!</StyledEmpty>
            )}

            {!loading && !error && data?.data && data.data.length > 0 && (
                <StyledGroups>
                    {[...data.data]
                        .sort((a, b) => (a.sale.priority ?? 0) - (b.sale.priority ?? 0))
                        .map((group, i) => (
                            <StyledGroup key={i} id={toAnchorId(group.sale.name)}>
                                <StyledGroupHeader>
                                    <StyledSaleBadge>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        Акция
                                    </StyledSaleBadge>
                                    <StyledGroupTitle>{group.sale.name}</StyledGroupTitle>
                                </StyledGroupHeader>
                                <StyledProductGrid>
                                    {group.products.map((product: any) => (
                                        <ProductCard key={product.id ?? product.slug} product={product} />
                                    ))}
                                </StyledProductGrid>
                            </StyledGroup>
                        ))}
                </StyledGroups>
            )}
        </StyledPage>
    )
}

const StyledPage = styled.div`
    min-height: 100vh;
    padding-top: ${rm(80)};
    background-color: #E6E8E6;
    padding-bottom: ${rm(80)};

    ${media.xsm`
        padding-top: ${rm(60)};
        padding-bottom: ${rm(60)};
    `}
`

const StyledHeader = styled.div`
    max-width: ${rm(1400)};
    margin: 0 auto;
    padding: ${rm(60)} ${rm(125)} ${rm(40)};
    text-align: center;
    animation: ${fadeIn} 0.5s ease-out;

    ${media.lg`
        padding: ${rm(50)} ${rm(80)} ${rm(32)};
    `}

    ${media.md`
        padding: ${rm(40)} ${rm(40)} ${rm(28)};
    `}

    ${media.xsm`
        padding: ${rm(32)} ${rm(20)} ${rm(24)};
    `}
`

const StyledTitle = styled.h1`
    ${fontGeist(700)};
    font-size: ${rm(48)};
    color: #111111;
    margin: 0 0 ${rm(12)} 0;

    ${media.md`
        font-size: ${rm(36)};
    `}

    ${media.xsm`
        font-size: ${rm(28)};
    `}
`

const StyledSubtitle = styled.p`
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #555555;
    margin: 0;
    line-height: 1.6;

    ${media.xsm`
        font-size: ${rm(14)};
    `}
`

const StyledLoadingWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rm(80)} 0;
`

const StyledSpinner = styled.div`
    width: ${rm(48)};
    height: ${rm(48)};
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top-color: #1C1C1C;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`

const StyledError = styled.div`
    text-align: center;
    padding: ${rm(60)} ${rm(20)};
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #EF4444;
`

const StyledEmpty = styled.div`
    text-align: center;
    padding: ${rm(80)} ${rm(20)};
    ${fontGeist(400)};
    font-size: ${rm(18)};
    color: #555555;
`

const StyledGroups = styled.div`
    max-width: ${rm(1400)};
    margin: 0 auto;
    padding: 0 ${rm(125)} ${rm(60)};
    display: flex;
    flex-direction: column;
    gap: ${rm(72)};

    ${media.lg`
        padding: 0 ${rm(80)} ${rm(60)};
    `}

    ${media.md`
        padding: 0 ${rm(40)} ${rm(48)};
        gap: ${rm(56)};
    `}

    ${media.xsm`
        padding: 0 ${rm(20)} ${rm(40)};
        gap: ${rm(48)};
    `}
`

const StyledGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(32)};
    animation: ${fadeIn} 0.5s ease-out;
    scroll-margin-top: ${rm(100)};
`

const StyledGroupHeader = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(16)};
    padding-bottom: ${rm(20)};
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);
`

const StyledSaleBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: ${rm(6)};
    background: linear-gradient(135deg, #ff4757 0%, #ff6348 100%);
    color: #ffffff;
    ${fontGeist(600)};
    font-size: ${rm(13)};
    padding: ${rm(5)} ${rm(12)};
    border-radius: ${rm(20)};
    white-space: nowrap;
    flex-shrink: 0;

    svg {
        width: ${rm(14)};
        height: ${rm(14)};
        flex-shrink: 0;
    }
`

const StyledGroupTitle = styled.h2`
    ${fontGeist(700)};
    font-size: ${rm(28)};
    color: #111111;
    margin: 0;
    line-height: 1.3;

    ${media.md`
        font-size: ${rm(22)};
    `}

    ${media.xsm`
        font-size: ${rm(18)};
    `}
`

const StyledProductGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${rm(40)} ${rm(30)};

    ${media.md`
        gap: ${rm(30)} ${rm(20)};
    `}

    ${media.xsm`
        gap: ${rm(24)} 0;
        justify-content: center;
    `}
`
