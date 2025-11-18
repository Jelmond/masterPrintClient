'use client'

import styled from "styled-components";
import { ProductsLayout } from "./components/ProductsLayout";
import { FiltersBar } from "./components/FiltersBar";
import { FilterModal } from "./components/FilterModal";
import { useState, useMemo, useEffect, useRef } from "react";
import { media, rm } from "@/styles";
import { useScroll } from "@/layouts/ScrollLayout/useScroll";
import { colors } from "@/styles/colors";

interface CatalogViewProps {
    data: any;
    products: any;
    tags: any
    tagsProductsData: any
    showCategories?: boolean
}

const StyledCatalogView = styled.div`
    min-height: 100vh;
    position: relative;
    padding-top: ${rm(80)};
    z-index: 1;

    ${media.xsm`
        padding-top: ${rm(60)};
    `}
`

export const  CatalogView = ({ data, products, tags, tagsProductsData, showCategories = true }: CatalogViewProps) => {
    // Filter state
    const [filters, setFilters] = useState({
        sales: '', // 'new', 'sale', 'popular'
        selectedTags: [] as string[],
        searchQuery: '',
        sortBy: '',
        cardSizes: [] as string[],
        tagSizes: [] as string[],
        quantities: [] as string[]
    })

    // Modal state
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
    
    // Track if this is the first render to avoid scrolling on initial load
    const isFirstRender = useRef(true)
    
    // Get Lenis instance for smooth scrolling
    const lenis = useScroll((state) => state.lenis)
    
    // Scroll to top button state
    const [showScrollTop, setShowScrollTop] = useState(false)

    // Flatten all products for filtering
    const allProducts = useMemo(() => {
        const flatProducts: any[] = []
        tagsProductsData.forEach((tagGroup: any) => {
            tagGroup.products.forEach((product: any) => {
                flatProducts.push({
                    ...product,
                    tag: tagGroup.title
                })
            })
        })
        return flatProducts
    }, [tagsProductsData])

    // Filter products based on current filters
    const filteredProducts = useMemo(() => {
        let filtered = allProducts

        console.log('filtered', filtered)

        // Search filter
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase()
            filtered = filtered.filter(product => 
                product.title?.toLowerCase().includes(query) ||
                product.description?.toLowerCase().includes(query) ||
                product.tag?.toLowerCase().includes(query)
            )
        }

        // Sales filter
        if (filters.sales) {
            switch (filters.sales) {
                case 'new':
                    filtered = filtered.filter(product => product.isNew)
                    break
                case 'sale':
                    filtered = filtered.filter(product => product.isOnSale || product.discount)
                    break
                case 'popular':
                    filtered = filtered.filter(product => product.isPopular)
                    break
            }
        }

        // Tags filter
        if (filters.selectedTags.length > 0) {
            filtered = filtered.filter(product => 
                filters.selectedTags.includes(product.tag)
            )
        }

        // Card sizes filter (using actual product.size)
        if (filters.cardSizes.length > 0) {
            filtered = filtered.filter(product => 
                filters.cardSizes.includes(product.size)
            )
        }

        // Material filter (using actual product.material)
        if (filters.tagSizes.length > 0) {
            filtered = filtered.filter(product => 
                filters.tagSizes.includes(product.material)
            )
        }

        // Quantities filter (using actual product.quantityInPack)
        if (filters.quantities.length > 0) {
            filtered = filtered.filter(product => 
                filters.quantities.includes(product.quantityInPack?.toString())
            )
        }

        // Sorting
        if (filters.sortBy) {
            filtered.sort((a, b) => {
                switch (filters.sortBy) {
                    case 'price-asc': {
                        const priceA = typeof a.price === 'string' ? parseFloat(a.price) || 0 : (a.price || 0)
                        const priceB = typeof b.price === 'string' ? parseFloat(b.price) || 0 : (b.price || 0)
                        return priceA - priceB
                    }
                    case 'price-desc': {
                        const priceA = typeof a.price === 'string' ? parseFloat(a.price) || 0 : (a.price || 0)
                        const priceB = typeof b.price === 'string' ? parseFloat(b.price) || 0 : (b.price || 0)
                        return priceB - priceA
                    }
                    case 'name-asc':
                        return (a.title || '').localeCompare(b.title || '', 'ru')
                    case 'name-desc':
                        return (b.title || '').localeCompare(a.title || '', 'ru')
                    case 'newest':
                        // Sort by stock (higher stock = newer) or by id as fallback
                        return (b.stock || 0) - (a.stock || 0) || (b.id || 0) - (a.id || 0)
                    default:
                        return 0
                }
            })
        }

        return filtered
    }, [allProducts, filters])

    // Get the original order of tags from tagsProductsData
    const originalTagOrder = useMemo(() => {
        return tagsProductsData.map((tagGroup: any) => tagGroup.title)
    }, [tagsProductsData])

    // Sort tags to match the order in tagsProductsData
    const sortedTags = useMemo(() => {
        const tagMap = new Map(tags.map((tag: any) => [tag.title, tag]))
        return originalTagOrder
            .map((title: string) => tagMap.get(title))
            .filter(Boolean) as any[]
    }, [tags, originalTagOrder])

    // Group filtered products by tag for display, maintaining original order
    const groupedFilteredProducts = useMemo(() => {
        const groups: { [key: string]: any[] } = {}
        
        // Initialize groups in original order
        originalTagOrder.forEach((title: string) => {
            groups[title] = []
        })
        
        // Add filtered products to their groups
        filteredProducts.forEach(product => {
            if (groups[product.tag]) {
                groups[product.tag].push(product)
            }
        })

        // Return groups in the original order, but only include groups with products
        return originalTagOrder
            .map((title: string) => ({
                title,
                products: groups[title] || []
            }))
            .filter((group: any) => group.products.length > 0)
    }, [filteredProducts, originalTagOrder])

    const handleFilterChange = (filterType: string, value: any) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }))
    }

    const handleTagToggle = (tagTitle: string) => {
        setFilters(prev => ({
            ...prev,
            selectedTags: prev.selectedTags.includes(tagTitle)
                ? prev.selectedTags.filter(tag => tag !== tagTitle)
                : [...prev.selectedTags, tagTitle]
        }))
    }

    const clearFilters = () => {
        setFilters({
            sales: '',
            selectedTags: [],
            searchQuery: '',
            sortBy: '',
            cardSizes: [],
            tagSizes: [],
            quantities: []
        })
    }

    const handleShowResults = () => {
        // This function can be used to close the filter card or perform additional actions
        console.log('Showing results with filters:', filters)
        setIsFilterModalOpen(false)
    }

    const handleOpenFilterModal = () => {
        setIsFilterModalOpen(true)
    }

    const handleCloseFilterModal = () => {
        setIsFilterModalOpen(false)
    }

    // Scroll to top when filters change
    useEffect(() => {
        // Skip scroll on first render
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        
        // Scroll to top when any filter changes using Lenis
        if (lenis) {
            lenis.scrollTo(0, { immediate: false, duration: 1.2 })
        } else {
            // Fallback to regular scroll if Lenis is not available
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }, [
        filters.sales, 
        JSON.stringify(filters.selectedTags), 
        filters.searchQuery, 
        filters.sortBy, 
        JSON.stringify(filters.cardSizes), 
        JSON.stringify(filters.tagSizes), 
        JSON.stringify(filters.quantities), 
        lenis
    ])

    // Show/hide scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
            setShowScrollTop(scrollY > 300) // Show button after scrolling 300px
        }

        // Use Lenis scroll event if available, otherwise use window scroll
        if (lenis) {
            lenis.on('scroll', handleScroll)
            return () => {
                lenis.off('scroll', handleScroll)
            }
        } else {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [lenis])

    const handleScrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: false, duration: 1.2 })
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    return (
        <StyledCatalogView>
            <StyledFiltersBarWrapper>
                <div className="relativeContainer">
                    <FiltersBar 
                        tags={sortedTags} 
                        filters={{
                            sales: filters.sales,
                            selectedTags: filters.selectedTags,
                            searchQuery: filters.searchQuery
                        }}
                        onFilterChange={handleFilterChange}
                        onTagToggle={handleTagToggle}
                        onClearFilters={clearFilters}
                        onOpenFilterModal={handleOpenFilterModal}
                        showCategories={showCategories}
                    />
                </div>
            </StyledFiltersBarWrapper>
            <ProductsLayout 
                title={data.title} 
                tagsProductsData={groupedFilteredProducts}
                hasActiveFilters={!!(filters.sales || filters.selectedTags.length > 0 || filters.searchQuery)}
                onOpenFilterModal={handleOpenFilterModal}
            />
            <FilterModal
                isOpen={isFilterModalOpen}
                onClose={handleCloseFilterModal}
                onFilterChange={handleFilterChange}
                onShowResults={handleShowResults}
                filters={{
                    sortBy: filters.sortBy,
                    cardSizes: filters.cardSizes,
                    tagSizes: filters.tagSizes,
                    quantities: filters.quantities
                }}
                products={allProducts}
            />
            <StyledScrollToTop $isVisible={showScrollTop} onClick={handleScrollToTop}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </StyledScrollToTop>
        </StyledCatalogView>
    )
}

const StyledFiltersBarWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    max-width: ${rm(202)};

    .relativeContainer {
        position: relative;
        height: 100%;
        width: 100%;
        padding-bottom: ${rm(80)};
    }
`

const StyledScrollToTop = styled.button<{ $isVisible: boolean }>`
    position: fixed;
    bottom: ${rm(30)};
    right: ${rm(30)};
    width: ${rm(50)};
    height: ${rm(50)};
    background: ${colors.black100};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    box-shadow: 0 ${rm(4)} ${rm(12)} rgba(0, 0, 0, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${colors.white100};
    opacity: ${props => props.$isVisible ? 1 : 0};
    transform: ${props => props.$isVisible ? `translateY(0) scale(1)` : `translateY(${rm(20)}) scale(0.8)`};
    pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};

    ${media.xsm`
        width: ${rm(45)};
        height: ${rm(45)};
        bottom: ${rm(20)};
        right: ${rm(20)};
    `}

    &:hover {
        background: #333;
        transform: ${props => props.$isVisible ? `translateY(${rm(-3)}) scale(1.05)` : 'translateY(0) scale(0.8)'};
        box-shadow: 0 ${rm(6)} ${rm(16)} rgba(0, 0, 0, 0.3);
    }

    &:active {
        transform: ${props => props.$isVisible ? `translateY(${rm(-1)}) scale(1.02)` : 'translateY(0) scale(0.8)'};
    }

    svg {
        width: ${rm(24)};
        height: ${rm(24)};
        transition: transform 0.3s ease;

        ${media.xsm`
            width: ${rm(20)};
            height: ${rm(20)};
        `}
    }

    &:hover svg {
        transform: translateY(${rm(-2)});
    }
`   