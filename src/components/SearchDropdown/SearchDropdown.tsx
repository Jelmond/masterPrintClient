import { colors, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { useState, useEffect, useRef } from "react"
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
    top: calc(100% + ${rm(12)});
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-radius: ${rm(16)};
    box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.12),
        0 8px 25px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.08);
    z-index: 1000;
    max-height: ${rm(520)};
    overflow-y: auto;
    overflow-x: hidden;
    display: ${props => props.isOpen ? 'block' : 'none'};
    animation: ${props => props.isOpen ? 'slideDown' : 'slideUp'} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    
    /* Prevent page scroll when scrolling dropdown */
    overscroll-behavior: contain;

    &::-webkit-scrollbar {
        width: ${rm(6)};
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.1);
        border-radius: ${rm(3)};
        
        &:hover {
            background: rgba(0, 0, 0, 0.15);
        }
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
        }
    }
`

const StyledSection = styled.div`
    padding: ${rm(20)} ${rm(24)};
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    
    &:last-child {
        border-bottom: none;
    }

    &:first-child {
        padding-top: ${rm(24)};
    }
`

const StyledSectionTitle = styled.h3`
    font-size: ${rm(13)};
    ${fontGeist(600)};
    color: #718096;
    margin: 0 0 ${rm(14)} 0;
    display: flex;
    align-items: center;
    gap: ${rm(8)};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    padding-bottom: ${rm(10)};

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${rm(30)};
        height: 2px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        border-radius: 1px;
    }
`

const StyledCategoryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${rm(10)} ${rm(14)};
    border-radius: ${rm(8)};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    border: 1px solid transparent;
    margin-bottom: ${rm(6)};
    
    &:hover {
        background: linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%);
        border-color: rgba(102, 126, 234, 0.2);
        transform: translateX(${rm(4)});
    }

    &:active {
        transform: translateX(${rm(2)});
    }
`

const StyledCategoryTitle = styled.span`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: ${colors.black100};
`

const StyledBreadcrumb = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(6)};
    font-size: ${rm(11)};
    color: #a0aec0;
    ${fontGeist(400)};
    
    &::before {
        content: '';
        width: ${rm(4)};
        height: ${rm(4)};
        border-radius: 50%;
        background: #cbd5e0;
    }
`

const StyledBreadcrumbItem = styled.span`
    color: #a0aec0;
`

const StyledProductItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    padding: ${rm(10)} ${rm(14)};
    border-radius: ${rm(10)};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    border: 1px solid transparent;
    margin-bottom: ${rm(6)};
    
    &:hover {
        background: linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%);
        border-color: rgba(102, 126, 234, 0.2);
        transform: translateX(${rm(4)});
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
    }

    &:active {
        transform: translateX(${rm(2)});
    }
`

const StyledProductImage = styled.div`
    width: ${rm(48)};
    height: ${rm(48)};
    border-radius: ${rm(8)};
    overflow: hidden;
    flex-shrink: 0;
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: ${colors.white100};
    transition: all 0.2s ease;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.2s ease;
    }

    ${StyledProductItem}:hover & {
        border-color: rgba(102, 126, 234, 0.3);
        box-shadow: 0 2px 6px rgba(102, 126, 234, 0.15);

        img {
            transform: scale(1.05);
        }
    }
`

const StyledProductInfo = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledProductTitle = styled.div`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: ${colors.black100};
    margin-bottom: ${rm(4)};
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const StyledProductPrice = styled.div`
    font-size: ${rm(13)};
    ${fontGeist(600)};
    color: #667eea;
    display: flex;
    align-items: center;
    gap: ${rm(6)};
`

const StyledTagItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${rm(10)} ${rm(14)};
    border-radius: ${rm(8)};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    border: 1px solid transparent;
    margin-bottom: ${rm(6)};
    
    &:hover {
        background: linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%);
        border-color: rgba(102, 126, 234, 0.2);
        transform: translateX(${rm(4)});
    }

    &:active {
        transform: translateX(${rm(2)});
    }
`

const StyledTagTitle = styled.span`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: ${colors.black100};
`

const StyledEmptyState = styled.div`
    padding: ${rm(48)} ${rm(24)};
    text-align: center;
    
    p {
        font-size: ${rm(14)};
        ${fontGeist(400)};
        margin: 0;
        color: #718096;
        line-height: 1.6;
    }
`

const StyledLoadingState = styled.div`
    padding: ${rm(48)} ${rm(24)};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${rm(12)};
    
    p {
        font-size: ${rm(14)};
        ${fontGeist(400)};
        margin: 0;
        color: #718096;
    }

    &::before {
        content: '';
        width: ${rm(32)};
        height: ${rm(32)};
        border: 3px solid rgba(102, 126, 234, 0.1);
        border-top-color: #667eea;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`

export const SearchDropdown = ({ isOpen, onClose, searchQuery }: SearchDropdownProps) => {
    const [searchData, setSearchData] = useState<SearchData | null>(null)
    const [loading, setLoading] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

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

    // Prevent page scroll when scrolling dropdown
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const dropdown = dropdownRef.current
            
            const handleWheel = (e: WheelEvent) => {
                if (!dropdown) return

                // Check if the event target is within the dropdown
                const target = e.target as HTMLElement
                if (!dropdown.contains(target)) return

                const { scrollTop, scrollHeight, clientHeight } = dropdown
                const canScrollUp = scrollTop > 0
                const canScrollDown = scrollTop < scrollHeight - clientHeight

                // If we can't scroll in this direction, prevent default
                if ((!canScrollUp && e.deltaY < 0) || (!canScrollDown && e.deltaY > 0)) {
                    e.preventDefault()
                } else {
                    // Stop propagation to prevent page scroll
                    e.stopPropagation()
                }
            }

            dropdown.addEventListener('wheel', handleWheel, { passive: false, capture: true })
            
            return () => {
                if (dropdown) {
                    dropdown.removeEventListener('wheel', handleWheel, true)
                }
            }
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <StyledDropdown ref={dropdownRef} isOpen={isOpen}>
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
                                {category.products.map((product) => (
                                    <Link key={product.id} href={`/products/${product.id}`}>
                                        <StyledProductItem>
                                            <StyledProductImage>
                                                <img
                                                    src={product.images[0]?.formats?.thumbnail?.url 
                                                        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].formats.thumbnail.url}`
                                                        : product.images[0]?.url 
                                                        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].url}`
                                                        : '/placeholder.jpg'}
                                                    alt={product.title}
                                                />
                                            </StyledProductImage>
                                            <StyledProductInfo>
                                                <StyledProductTitle>{product.title}</StyledProductTitle>
                                                <StyledProductPrice>
                                                    {product.oldPrice ? (
                                                        <>
                                                            <span style={{ 
                                                                textDecoration: 'line-through', 
                                                                color: '#a0aec0',
                                                                fontSize: rm(11),
                                                                fontWeight: 400
                                                            }}>
                                                                {product.oldPrice} ₽
                                                            </span>
                                                            <span style={{ color: '#667eea' }}>
                                                                {product.price} ₽
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span>{product.price} ₽</span>
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
                                            <img
                                                src={product.images[0]?.formats?.thumbnail?.url 
                                                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].formats.thumbnail.url}`
                                                    : product.images[0]?.url 
                                                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].url}`
                                                    : '/placeholder.jpg'}
                                                alt={product.title}
                                            />
                                        </StyledProductImage>
                                        <StyledProductInfo>
                                            <StyledProductTitle>{product.title}</StyledProductTitle>
                                            <StyledProductPrice>
                                                {product.oldPrice ? (
                                                    <>
                                                        <span style={{ 
                                                            textDecoration: 'line-through', 
                                                            color: '#a0aec0',
                                                            fontSize: rm(11),
                                                            fontWeight: 400
                                                        }}>
                                                            {product.oldPrice} ₽
                                                        </span>
                                                        <span style={{ color: '#667eea' }}>
                                                            {product.price} ₽
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span>{product.price} ₽</span>
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
        </StyledDropdown>
    )
}
