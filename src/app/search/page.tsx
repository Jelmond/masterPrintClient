'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import styled from 'styled-components'
import { colors, media, rm } from '@/styles'
import { fontGeist } from '@/styles/fonts'
import Link from 'next/link'
import Image from 'next/image'
import { AnimLink } from '@/layouts/AnimatedRouterLayout/AnimatedRouterLayout'

interface SearchResult {
    id: number
    documentId: string
    slug?: string
    title: string
    price: number
    oldPrice?: number
    images: Array<{
        url: string
        formats?: {
            thumbnail?: { url: string }
            small?: { url: string }
            medium?: { url: string }
        }
    }>
    categories: Array<{
        id: number
        title: string
    }>
    tags: Array<{
        id: number
        title: string
    }>
}

interface SearchData {
    categories: Array<{
        id: number
        documentId: string
        title: string
        products: SearchResult[]
    }>
    products: SearchResult[]
    tags: Array<{
        id: number
        documentId: string
        title: string
        products: SearchResult[]
    }>
    searchTerm: string
    totalResults: {
        categories: number
        products: number
        tags: number
    }
}

export default function SearchPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const query = searchParams.get('q') || ''
    const [searchQuery, setSearchQuery] = useState(query)
    const [searchData, setSearchData] = useState<SearchData | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (query) {
            setSearchQuery(query)
            performSearch(query)
        }
    }, [query])

    useEffect(() => {
        console.log(searchData)
    }, [searchData])

    const performSearch = async (searchTerm: string) => {
        if (!searchTerm.trim()) {
            setSearchData(null)
            return
        }

        setLoading(true)
        try {
            const response = await fetch(`/api/search?query=${encodeURIComponent(searchTerm)}`)
            const data = await response.json()
            setSearchData(data.data)
        } catch (error) {
            console.error('Search error:', error)
            setSearchData(null)
        } finally {
            setLoading(false)
        }
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchQuery(value)
        if (value.trim().length > 0) {
            router.replace(`/search?q=${encodeURIComponent(value)}`, { scroll: false })
            performSearch(value)
        } else {
            router.replace('/search', { scroll: false })
            setSearchData(null)
        }
    }

    const handleClear = () => {
        setSearchQuery('')
        router.replace('/search', { scroll: false })
        setSearchData(null)
    }

    return (
        <StyledSearchPage>
            <StyledSearchContainer>
                <StyledSearchInputWrapper>
                    <StyledSearchInput
                        placeholder="Поиск товара"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        autoFocus
                    />
                    {searchQuery && (
                        <StyledClearButton onClick={handleClear}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledClearButton>
                    )}
                    <StyledSearchIcon>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </StyledSearchIcon>
                </StyledSearchInputWrapper>
            </StyledSearchContainer>

            <StyledContent>
                {loading ? (
                    <StyledLoadingState>
                        <p>Поиск товаров...</p>
                    </StyledLoadingState>
                ) : searchData ? (
                    <>
                        {/* Products from Categories */}
                        {searchData.categories.map((category) =>
                            category.products.length > 0 && (
                                <StyledSection key={`category-products-${category.id}`}>
                                    <StyledSectionTitle>
                                        Товары в категории &quot;{category.title}&quot; ({category.products.length})
                                    </StyledSectionTitle>
                                    <StyledProductsGrid>
                                        {category.products.map((product) => (
                                            <AnimLink key={product.id} href={`/products/${product.slug || product.id}`}>
                                                <StyledProductCard>
                                                    <StyledProductImage>
                                                        <Image
                                                            src={
                                                                product.images[0]?.formats?.medium?.url
                                                                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].formats.medium.url}`
                                                                    : product.images[0]?.url
                                                                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].url}`
                                                                    : '/placeholder.jpg'
                                                            }
                                                            alt={product.title}
                                                            fill
                                                            style={{ objectFit: 'cover' }}
                                                        />
                                                    </StyledProductImage>
                                                    <StyledProductInfo>
                                                        <StyledProductTitle>{product.title}</StyledProductTitle>
                                                        <StyledProductPrice>
                                                            {product.oldPrice ? (
                                                                <>
                                                                    <span className="oldPrice">{product.oldPrice} ₽</span>
                                                                    <span>{product.price} ₽</span>
                                                                </>
                                                            ) : (
                                                                <span>{product.price} ₽</span>
                                                            )}
                                                        </StyledProductPrice>
                                                    </StyledProductInfo>
                                                </StyledProductCard>
                                            </AnimLink>
                                        ))}
                                    </StyledProductsGrid>
                                </StyledSection>
                            )
                        )}

                        {/* Direct Products Section */}
                        {searchData.products.length > 0 && (
                            <StyledSection>
                                <StyledSectionTitle>
                                    Товары ({searchData.totalResults.products})
                                </StyledSectionTitle>
                                <StyledProductsGrid>
                                    {searchData.products.map((product) => (
                                        <AnimLink key={product.id} href={`/products/${product.slug || product.id}`}>
                                            <StyledProductCard>
                                                <StyledProductImage>
                                                    <Image
                                                        src={
                                                            product.images[0]?.formats?.medium?.url
                                                                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].formats.medium.url}`
                                                                : product.images[0]?.url
                                                                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].url}`
                                                                : '/placeholder.jpg'
                                                        }
                                                        alt={product.title}
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                </StyledProductImage>
                                                <StyledProductInfo>
                                                    <StyledProductTitle>{product.title}</StyledProductTitle>
                                                    <StyledProductPrice>
                                                        {product.oldPrice ? (
                                                            <>
                                                                <span className="oldPrice">{product.oldPrice} ₽</span>
                                                                <span>{product.price} ₽</span>
                                                            </>
                                                        ) : (
                                                            <span>{product.price} ₽</span>
                                                        )}
                                                    </StyledProductPrice>
                                                </StyledProductInfo>
                                            </StyledProductCard>
                                        </AnimLink>
                                    ))}
                                </StyledProductsGrid>
                            </StyledSection>
                        )}

                        {/* Tags Section */}
                        {searchData.tags.length > 0 && (
                            <StyledSection>
                                <StyledSectionTitle>
                                    Теги ({searchData.totalResults.tags})
                                </StyledSectionTitle>
                                <StyledTagsList>
                                    {searchData.tags.map((tag) => {
                                        const firstProduct = tag.products?.[0]
                                        const categoryId = firstProduct?.categories?.[0]?.id
                                        const href = categoryId ? `/catalog/${categoryId}` : '/catalog'
                                        return (
                                            <AnimLink key={tag.id} href={href}>
                                                <StyledTagItem>
                                                    <StyledTagTitle>{tag.title}</StyledTagTitle>
                                                </StyledTagItem>
                                            </AnimLink>
                                        )
                                    })}
                                </StyledTagsList>
                            </StyledSection>
                        )}

                        {/* No Results */}
                        {searchData.products.length === 0 &&
                            searchData.tags.length === 0 && (
                                <StyledEmptyState>
                                    <p>По запросу &quot;{searchQuery}&quot; ничего не найдено</p>
                                </StyledEmptyState>
                            )}
                    </>
                ) : (
                    <StyledEmptyState>
                        <p>Введите запрос для поиска</p>
                    </StyledEmptyState>
                )}
            </StyledContent>
        </StyledSearchPage>
    )
}

const StyledSearchPage = styled.div`
    min-height: 100vh;
    padding-top: ${rm(100)};
    padding-bottom: ${rm(100)};

    ${media.xsm`
        padding-top: ${rm(80)};
        padding-bottom: ${rm(150)};
    `}
`

const StyledSearchContainer = styled.div`
    padding: ${rm(20)} ${rm(125)};

    ${media.lg`
        padding: ${rm(20)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(20)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(16)} ${rm(20)};
    `}
`

const StyledSearchInputWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: ${rm(600)};
    margin: 0 auto;
`

const StyledSearchInput = styled.input`
    width: 100%;
    height: ${rm(50)};
    border-radius: ${rm(25)};
    padding: 0 ${rm(50)} 0 ${rm(20)};
    font-size: ${rm(16)};
    ${fontGeist(500)};
    border: 1px solid #D8DADC;
    background-color: #FFFFFF;

    &::placeholder {
        color: #808080;
        ${fontGeist(500)};
    }

    &:focus {
        outline: none;
        border-color: #1C1C1C;
        box-shadow: 0 0 0 2px rgba(28, 28, 28, 0.08);
    }

    ${media.xsm`
        height: ${rm(44)};
        padding: 0 ${rm(45)} 0 ${rm(16)};
        font-size: ${rm(14)};
    `}
`

const StyledClearButton = styled.button`
    position: absolute;
    right: ${rm(50)};
    top: 50%;
    transform: translateY(-50%);
    width: ${rm(24)};
    height: ${rm(24)};
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    transition: color 0.2s ease;

    &:hover {
        color: #1C1C1C;
    }

    ${media.xsm`
        right: ${rm(45)};
        width: ${rm(20)};
        height: ${rm(20)};
    `}
`

const StyledSearchIcon = styled.div`
    position: absolute;
    right: ${rm(12)};
    top: 50%;
    transform: translateY(-50%);
    width: ${rm(24)};
    height: ${rm(24)};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #CBCBCB;
    pointer-events: none;

    ${media.xsm`
        right: ${rm(10)};
        width: ${rm(20)};
        height: ${rm(20)};
    `}
`

const StyledContent = styled.div`
    padding: ${rm(40)} ${rm(125)};

    ${media.lg`
        padding: ${rm(30)} ${rm(80)};
    `}

    ${media.md`
        padding: ${rm(20)} ${rm(40)};
    `}

    ${media.xsm`
        padding: ${rm(20)} ${rm(20)};
    `}
`

const StyledSection = styled.div`
    margin-bottom: ${rm(40)};

    ${media.xsm`
        margin-bottom: ${rm(30)};
    `}
`

const StyledSectionTitle = styled.h2`
    font-size: ${rm(24)};
    ${fontGeist(600)};
    color: ${colors.black100};
    margin-bottom: ${rm(20)};

    ${media.xsm`
        font-size: ${rm(20)};
        margin-bottom: ${rm(16)};
    `}
`

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${rm(200)}, 1fr));
    gap: ${rm(20)};

    ${media.xsm`
        grid-template-columns: repeat(2, 1fr);
        gap: ${rm(12)};
    `}
`

const StyledProductCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: ${rm(8)};
    overflow: hidden;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-color: rgba(0, 0, 0, 0.12);
    }
`

const StyledProductImage = styled.div`
    position: relative;
    width: 100%;
    height: ${rm(200)};
    background: #F5F5F5;

    ${media.xsm`
        height: ${rm(150)};
    `}
`

const StyledProductInfo = styled.div`
    padding: ${rm(12)};
    display: flex;
    flex-direction: column;
    gap: ${rm(8)};
`

const StyledProductTitle = styled.div`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: ${colors.black100};
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const StyledProductPrice = styled.div`
    font-size: ${rm(16)};
    ${fontGeist(600)};
    color: #667eea;
    display: flex;
    align-items: center;
    gap: ${rm(8)};

    .oldPrice {
        text-decoration: line-through;
        color: #a0aec0;
        font-size: ${rm(13)};
        ${fontGeist(400)};
    }
`

const StyledTagsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${rm(12)};
`

const StyledTagItem = styled.div`
    padding: ${rm(10)} ${rm(16)};
    background: #F5F5F5;
    border-radius: ${rm(8)};
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
        background: #E8E8E8;
        transform: translateY(-1px);
    }
`

const StyledTagTitle = styled.span`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: ${colors.black100};
`

const StyledEmptyState = styled.div`
    padding: ${rm(80)} ${rm(20)};
    text-align: center;

    p {
        font-size: ${rm(16)};
        ${fontGeist(400)};
        color: #718096;
        margin: 0;
    }
`

const StyledLoadingState = styled.div`
    padding: ${rm(80)} ${rm(20)};
    text-align: center;

    p {
        font-size: ${rm(16)};
        ${fontGeist(400)};
        color: #718096;
        margin: 0;
    }
`
