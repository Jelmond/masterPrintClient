'use client'

import styled from "styled-components";
import { ProductsLayout } from "./components/ProductsLayout";
import { FiltersBar } from "./components/FiltersBar";
import { FilterModal } from "./components/FilterModal";
import { useState, useMemo } from "react";
import { media, rm } from "@/styles";

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

    // Group filtered products by tag for display
    const groupedFilteredProducts = useMemo(() => {
        // If sorting is active, maintain the sort order when grouping
        const groups: { [key: string]: any[] } = {}
        const groupOrder: string[] = []
        
        filteredProducts.forEach(product => {
            if (!groups[product.tag]) {
                groups[product.tag] = []
                groupOrder.push(product.tag)
            }
            groups[product.tag].push(product)
        })

        // Return groups in the order they were encountered (which preserves sort order)
        return groupOrder.map((title) => ({
            title,
            products: groups[title]
        }))
    }, [filteredProducts])

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

    return (
        <StyledCatalogView>
            <FiltersBar 
                tags={tags} 
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
        </StyledCatalogView>
    )
}