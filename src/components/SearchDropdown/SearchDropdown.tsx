import { colors, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface SearchResult {
    id: number
    documentId: string
    title: string
    price: number
    oldPrice?: number
    images: Array<{
        url: string
        formats: {
            thumbnail: { url: string }
            small: { url: string }
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
        isNew?: boolean
        isOnSale?: boolean
        createdAt: string
        updatedAt: string
        publishedAt?: string
        locale?: string
        image?: Array<{
            id: number
            documentId: string
            name: string
            alternativeText?: string
            caption?: string
            width: number
            height: number
            formats: {
                thumbnail: {
                    name: string
                    hash: string
                    ext: string
                    mime: string
                    path?: string
                    width: number
                    height: number
                    size: number
                    sizeInBytes: number
                    url: string
                }
                small?: {
                    name: string
                    hash: string
                    ext: string
                    mime: string
                    path?: string
                    width: number
                    height: number
                    size: number
                    sizeInBytes: number
                    url: string
                }
                medium?: {
                    name: string
                    hash: string
                    ext: string
                    mime: string
                    path?: string
                    width: number
                    height: number
                    size: number
                    sizeInBytes: number
                    url: string
                }
                large?: {
                    name: string
                    hash: string
                    ext: string
                    mime: string
                    path?: string
                    width: number
                    height: number
                    size: number
                    sizeInBytes: number
                    url: string
                }
            }
            hash: string
            ext: string
            mime: string
            size: number
            url: string
            previewUrl?: string
            provider: string
            provider_metadata?: any
            folderPath: string
            createdAt: string
            updatedAt: string
            publishedAt: string
            locale?: string
        }>
        products: SearchResult[]
    }>
    products: SearchResult[]
    tags: Array<{
        id: number
        documentId: string
        title: string
        isNew?: boolean
        isOnSale?: boolean
        createdAt: string
        updatedAt: string
        publishedAt?: string
        locale?: string
        products: SearchResult[]
    }>
    searchTerm: string
    totalResults: {
        categories: number
        products: number
        tags: number
    }
}

interface SearchDropdownProps {
    isOpen: boolean
    onClose: () => void
    searchQuery: string
}

const StyledDropdown = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-radius: ${rm(16)};
    box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.15),
        0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.08);
    z-index: 1000;
    margin-top: ${rm(8)};
    max-height: ${rm(500)};
    overflow-y: auto;
    display: ${props => props.isOpen ? 'block' : 'none'};
    animation: ${props => props.isOpen ? 'slideDown' : 'slideUp'} 0.3s ease-out;

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`

const StyledSection = styled.div`
    padding: ${rm(20)} ${rm(24)};
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    
    &:last-child {
        border-bottom: none;
    }
`

const StyledSectionTitle = styled.h3`
    font-size: ${rm(16)};
    ${fontGeist(600)};
    color: #1a202c;
    margin: 0 0 ${rm(16)} 0;
    display: flex;
    align-items: center;
    gap: ${rm(8)};
`

const StyledCategoryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${rm(12)} ${rm(16)};
    border-radius: ${rm(8)};
    transition: all 0.2s ease;
    cursor: pointer;
    
    &:hover {
        background: rgba(102, 126, 234, 0.05);
    }
`

const StyledCategoryTitle = styled.span`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: #2d3748;
`

const StyledBreadcrumb = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(4)};
    font-size: ${rm(12)};
    color: #718096;
    ${fontGeist(400)};
`

const StyledBreadcrumbItem = styled.span`
    color: #a0aec0;
    
    &:last-child {
        color: #718096;
    }
`

const StyledProductItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    padding: ${rm(12)} ${rm(16)};
    border-radius: ${rm(8)};
    transition: all 0.2s ease;
    cursor: pointer;
    
    &:hover {
        background: rgba(102, 126, 234, 0.05);
    }
`

const StyledProductImage = styled.div`
    width: ${rm(40)};
    height: ${rm(40)};
    border-radius: ${rm(6)};
    overflow: hidden;
    flex-shrink: 0;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const StyledProductInfo = styled.div`
    flex: 1;
    min-width: 0;
`

const StyledProductTitle = styled.div`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: #2d3748;
    margin-bottom: ${rm(4)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const StyledProductPrice = styled.div`
    font-size: ${rm(12)};
    ${fontGeist(400)};
    color: #667eea;
    font-weight: 600;
`

const StyledTagItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${rm(12)} ${rm(16)};
    border-radius: ${rm(8)};
    transition: all 0.2s ease;
    cursor: pointer;
    
    &:hover {
        background: rgba(102, 126, 234, 0.05);
    }
`

const StyledTagTitle = styled.span`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: #2d3748;
`

const StyledEmptyState = styled.div`
    padding: ${rm(40)} ${rm(24)};
    text-align: center;
    color: #718096;
    
    p {
        font-size: ${rm(14)};
        ${fontGeist(400)};
        margin: 0;
    }
`

const StyledLoadingState = styled.div`
    padding: ${rm(40)} ${rm(24)};
    text-align: center;
    color: #718096;
    
    p {
        font-size: ${rm(14)};
        ${fontGeist(400)};
        margin: 0;
    }
`

export const SearchDropdown = ({ isOpen, onClose, searchQuery }: SearchDropdownProps) => {
    const [searchData, setSearchData] = useState<SearchData | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!searchQuery.trim() || searchQuery.length < 2) {
            setSearchData(null)
            return
        }

        const searchProducts = async () => {
            setLoading(true)
            try {
                const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`)
                const data = await response.json()
                setSearchData(data.data)
            } catch (error) {
                console.error('Search error:', error)
                setSearchData(null)
            } finally {
                setLoading(false)
            }
        }

        const debounceTimer = setTimeout(searchProducts, 300)
        return () => clearTimeout(debounceTimer)
    }, [searchQuery])

    if (!isOpen) return null

    return (
        <StyledDropdown isOpen={isOpen}>
            {loading ? (
                <StyledLoadingState>
                    <p>Поиск...</p>
                </StyledLoadingState>
            ) : searchData ? (
                <>
                    {/* Categories Section */}
                    {searchData.categories.length > 0 && (
                        <StyledSection>
                            <StyledSectionTitle>
                                Категории ({searchData.totalResults.categories})
                            </StyledSectionTitle>
                            {searchData.categories.map((category) => (
                                <Link key={category.id} href={`/catalog/${category.id}`}>
                                    <StyledCategoryItem>
                                        <StyledCategoryTitle>{category.title}</StyledCategoryTitle>
                                        <StyledBreadcrumb>
                                            <StyledBreadcrumbItem>Каталог</StyledBreadcrumbItem>
                                        </StyledBreadcrumb>
                                    </StyledCategoryItem>
                                </Link>
                            ))}
                        </StyledSection>
                    )}

                    {/* Products from Categories */}
                    {searchData.categories.map((category) => 
                        category.products.length > 0 && (
                            <StyledSection key={`category-products-${category.id}`}>
                                <StyledSectionTitle>
                                    Товары в категории &quot;{category.title}&quot; ({category.products.length})
                                </StyledSectionTitle>
                                {category.products.map((product) => (
                                    <Link key={product.id} href={`/products/${product.id}`}>
                                        <StyledProductItem>
                                            <StyledProductImage>
                                                <Image
                                                    src={product.images[0]?.formats?.thumbnail?.url || product.images[0]?.url || '/placeholder.jpg'}
                                                    alt={product.title}
                                                    width={40}
                                                    height={40}
                                                />
                                            </StyledProductImage>
                                            <StyledProductInfo>
                                                <StyledProductTitle>{product.title}</StyledProductTitle>
                                                <StyledProductPrice>
                                                    {product.oldPrice ? (
                                                        <>
                                                            <span style={{ textDecoration: 'line-through', color: '#a0aec0', marginRight: rm(8) }}>
                                                                {product.oldPrice} ₽
                                                            </span>
                                                            {product.price} ₽
                                                        </>
                                                    ) : (
                                                        `${product.price} ₽`
                                                    )}
                                                </StyledProductPrice>
                                            </StyledProductInfo>
                                        </StyledProductItem>
                                    </Link>
                                ))}
                            </StyledSection>
                        )
                    )}

                    {/* Direct Products Section */}
                    {searchData.products.length > 0 && (
                        <StyledSection>
                            <StyledSectionTitle>
                                Товары ({searchData.totalResults.products})
                            </StyledSectionTitle>
                            {searchData.products.map((product) => (
                                <Link key={product.id} href={`/products/${product.id}`}>
                                    <StyledProductItem>
                                        <StyledProductImage>
                                            <Image
                                                src={product.images[0]?.formats?.thumbnail?.url || product.images[0]?.url || '/placeholder.jpg'}
                                                alt={product.title}
                                                width={40}
                                                height={40}
                                            />
                                        </StyledProductImage>
                                        <StyledProductInfo>
                                            <StyledProductTitle>{product.title}</StyledProductTitle>
                                            <StyledProductPrice>
                                                {product.oldPrice ? (
                                                    <>
                                                        <span style={{ textDecoration: 'line-through', color: '#a0aec0', marginRight: rm(8) }}>
                                                            {product.oldPrice} ₽
                                                        </span>
                                                        {product.price} ₽
                                                    </>
                                                ) : (
                                                    `${product.price} ₽`
                                                )}
                                            </StyledProductPrice>
                                        </StyledProductInfo>
                                    </StyledProductItem>
                                </Link>
                            ))}
                        </StyledSection>
                    )}

                    {/* Tags Section */}
                    {searchData.tags.length > 0 && (
                        <StyledSection>
                            <StyledSectionTitle>
                                Теги ({searchData.totalResults.tags})
                            </StyledSectionTitle>
                            {searchData.tags.map((tag) => (
                                <StyledTagItem key={tag.id}>
                                    <StyledTagTitle>{tag.title}</StyledTagTitle>
                                    <StyledBreadcrumb>
                                        <StyledBreadcrumbItem>Открытки и бирки</StyledBreadcrumbItem>
                                        {' > '}
                                        <StyledBreadcrumbItem>Каталог</StyledBreadcrumbItem>
                                    </StyledBreadcrumb>
                                </StyledTagItem>
                            ))}
                        </StyledSection>
                    )}

                    {/* No Results */}
                    {searchData.categories.length === 0 && 
                     searchData.products.length === 0 && 
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
        </StyledDropdown>
    )
}
