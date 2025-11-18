import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { useEffect } from "react"

interface FilterModalProps {
    isOpen: boolean
    onClose: () => void
    onFilterChange: (filterType: string, value: any) => void
    onShowResults: () => void
    filters: {
        sortBy: string
        cardSizes: string[]
        tagSizes: string[]
        quantities: string[]
        hasDiscount: boolean
        selectedPolishes: string[]
        isBestseller: boolean
    }
    products: any[]
}

const StyledModalOverlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    z-index: 1000;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    align-items: center;
    justify-content: flex-start;
    padding: ${rm(20)};
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    animation: ${props => props.isOpen ? 'fadeIn' : 'fadeOut'} 0.3s ease-in-out;

    ${media.xsm`
        padding: ${rm(15)};
        align-items: flex-end;
        justify-content: center;
    `}

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`

const StyledFilterCard = styled.div<{ isOpen: boolean }>`
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-radius: ${rm(20)};
    padding: ${rm(32)};
    box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.15),
        0 8px 25px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-width: ${rm(320)};
    max-width: ${rm(420)};
    max-height: 70vh;
    overflow-y: auto;
    position: relative;
    transform: translateY(${props => props.isOpen ? '0' : '-20px'});
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${props => props.isOpen ? 'slideIn' : 'slideOut'} 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    /* Custom scrollbar styling */
    &::-webkit-scrollbar {
        width: ${rm(8)};
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
        border-radius: ${rm(4)};
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(102, 126, 234, 0.3);
        border-radius: ${rm(4)};
        transition: background 0.2s ease;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: rgba(102, 126, 234, 0.5);
    }

    ${media.xsm`
        min-width: 100%;
        max-width: 100%;
        max-height: 85vh;
        border-radius: ${rm(20)} ${rm(20)} 0 0;
        padding: ${rm(24)} ${rm(20)};
    `}

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
        }
    }
`

const StyledCloseButton = styled.button`
    position: absolute;
    top: ${rm(20)};
    right: ${rm(20)};
    background: rgba(0, 0, 0, 0.05);
    border: none;
    font-size: ${rm(18)};
    cursor: pointer;
    color: #666;
    width: ${rm(32)};
    height: ${rm(32)};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    
    &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: #333;
        transform: scale(1.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
`

const StyledModalHeader = styled.div`
    margin-bottom: ${rm(28)};
    padding-bottom: ${rm(16)};
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    
    h2 {
        font-size: ${rm(22)};
        ${fontGeist(600)};
        color: ${colors.black100};
        margin: 0 0 ${rm(4)} 0;
    }
    
    p {
        font-size: ${rm(13)};
        ${fontGeist(400)};
        color: #718096;
        margin: 0;
    }
`

const StyledSection = styled.div`
    margin-bottom: ${rm(28)};
    
    &:last-child {
        margin-bottom: 0;
    }
`

const StyledSectionTitle = styled.h3`
    font-size: ${rm(16)};
    ${fontGeist(600)};
    color: #1a202c;
    margin: 0 0 ${rm(18)} 0;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -${rm(6)};
        left: 0;
        width: ${rm(30)};
        height: 2px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        border-radius: 1px;
    }
`

const StyledSortContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(16)};
    margin-bottom: ${rm(24)};
    padding: ${rm(16)};
    background: rgba(102, 126, 234, 0.05);
    border-radius: ${rm(12)};
    border: 1px solid rgba(102, 126, 234, 0.1);
`

const StyledSortLabel = styled.span`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: #4a5568;
    white-space: nowrap;
`

const StyledSelect = styled.select`
    flex: 1;
    padding: ${rm(12)} ${rm(16)};
    border: 1px solid #e2e8f0;
    border-radius: ${rm(8)};
    font-size: ${rm(14)};
    ${fontGeist(400)};
    background: white;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    &:hover {
        border-color: #cbd5e0;
    }
`

const StyledCheckboxGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(8)};
`

const StyledCheckboxItem = styled.label`
    display: flex;
    align-items: center;
    gap: ${rm(12)};
    cursor: pointer;
    font-size: ${rm(14)};
    ${fontGeist(400)};
    color: #4a5568;
    padding: ${rm(10)} ${rm(14)};
    border-radius: ${rm(10)};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    
    &:hover {
        background: linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%);
        border-color: rgba(102, 126, 234, 0.2);
        color: #2d3748;
        transform: translateX(${rm(4)});
        box-shadow: 0 2px 6px rgba(102, 126, 234, 0.1);
    }

    &:has(input:checked) {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        border-color: rgba(102, 126, 234, 0.3);
        color: #667eea;
        ${fontGeist(600)};
    }
`

const StyledCheckbox = styled.input`
    width: ${rm(18)};
    height: ${rm(18)};
    cursor: pointer;
    accent-color: #667eea;
    transform: scale(1.15);
    transition: all 0.2s ease;
    
    &:checked {
        accent-color: #667eea;
        transform: scale(1.2);
    }

    &:hover {
        transform: scale(1.25);
    }
`

const StyledClearAllButton = styled.button`
    width: 100%;
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
    border: none;
    border-radius: ${rm(12)};
    padding: ${rm(12)} ${rm(20)};
    font-size: ${rm(14)};
    color: white;
    ${fontGeist(600)};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rm(8)};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.2);
    margin-bottom: ${rm(12)};

    svg {
        transition: transform 0.2s ease;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
        background: linear-gradient(135deg, #ff5252 0%, #e53935 100%);

        svg {
            transform: rotate(90deg);
        }
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(255, 107, 107, 0.2);
    }
`

const StyledShowResultsButton = styled.button`
    width: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: ${rm(12)};
    padding: ${rm(16)} ${rm(20)};
    font-size: ${rm(15)};
    color: white;
    ${fontGeist(600)};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rm(10)};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`

export const FilterModal = ({ isOpen, onClose, onFilterChange, onShowResults, filters, products }: FilterModalProps) => {
    // Extract unique values from products for dynamic filter options
    const availableSizes = Array.from(new Set(products.map(p => p.size).filter(Boolean))).sort()
    const availableMaterials = Array.from(new Set(products.map(p => p.material).filter(Boolean))).sort()
    const availableQuantities = Array.from(new Set(products.map(p => p.quantityInPack?.toString()).filter(Boolean))).sort((a, b) => parseInt(a) - parseInt(b))
    
    // Extract unique polishes from products
    const allPolishes = products
        .filter(p => p.polishes !== null && p.polishes !== undefined && Array.isArray(p.polishes) && p.polishes.length > 0)
        .flatMap(p => p.polishes)
    const availablePolishes = Array.from(
        new Map(allPolishes.map((polish: any) => [polish.name, polish]))
            .values()
    )
        .map((polish: any) => polish.name)
        .sort()

    // Calculate active filters count
    const activeFiltersCount = [
        filters.sortBy ? 1 : 0,
        filters.cardSizes.length,
        filters.tagSizes.length,
        filters.quantities.length,
        filters.hasDiscount ? 1 : 0,
        filters.selectedPolishes.length,
        filters.isBestseller ? 1 : 0
    ].reduce((sum, count) => sum + count, 0)

    const handleCheckboxChange = (filterType: string, value: string, checked: boolean) => {
        const currentValues = filters[filterType as keyof typeof filters] as string[]
        const newValues = checked 
            ? [...currentValues, value]
            : currentValues.filter(item => item !== value)
        
        onFilterChange(filterType, newValues)
    }

    const handleClearAllFilters = () => {
        onFilterChange('sortBy', '')
        onFilterChange('cardSizes', [])
        onFilterChange('tagSizes', [])
        onFilterChange('quantities', [])
        onFilterChange('hasDiscount', false)
        onFilterChange('selectedPolishes', [])
        onFilterChange('isBestseller', false)
    }

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const handleCardWheel = (e: React.WheelEvent) => {
        e.stopPropagation()
    }

    const handleCardTouchStart = (e: React.TouchEvent) => {
        e.stopPropagation()
    }

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            const originalStyle = window.getComputedStyle(document.body).overflow
            document.body.style.overflow = 'hidden'
            return () => {
                document.body.style.overflow = originalStyle
            }
        }
    }, [isOpen])

    return (
        <StyledModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
            <StyledFilterCard 
                isOpen={isOpen}
                onWheel={handleCardWheel}
                onTouchStart={handleCardTouchStart}
                onClick={(e) => e.stopPropagation()}
            >
                <StyledCloseButton onClick={onClose}>
                    ×
                </StyledCloseButton>
                
                <StyledModalHeader>
                    <h2>Фильтры и сортировка</h2>
                    <p>Настройте параметры поиска товаров</p>
                </StyledModalHeader>
                
                <StyledSection>
                    <StyledSortContainer>
                        <StyledSortLabel>Сортировать по:</StyledSortLabel>
                        <StyledSelect 
                            value={filters.sortBy}
                            onChange={(e) => onFilterChange('sortBy', e.target.value)}
                        >
                            <option value="">Выберите сортировку</option>
                            <option value="price-asc">Цена (по возрастанию)</option>
                            <option value="price-desc">Цена (по убыванию)</option>
                            <option value="name-asc">Название (А-Я)</option>
                            <option value="name-desc">Название (Я-А)</option>
                            <option value="newest">Сначала новые</option>
                        </StyledSelect>
                    </StyledSortContainer>
                </StyledSection>

                <StyledSection>
                    <StyledSectionTitle>Размер карточек</StyledSectionTitle>
                    <StyledCheckboxGroup>
                        {availableSizes.length > 0 ? availableSizes.map((size) => (
                            <StyledCheckboxItem key={size}>
                                <StyledCheckbox
                                    type="checkbox"
                                    checked={filters.cardSizes.includes(size)}
                                    onChange={(e) => handleCheckboxChange('cardSizes', size, e.target.checked)}
                                />
                                {size}
                            </StyledCheckboxItem>
                        )) : (
                            <p style={{ color: '#666', fontSize: rm(14) }}>Нет доступных размеров</p>
                        )}
                    </StyledCheckboxGroup>
                </StyledSection>

                <StyledSection>
                    <StyledSectionTitle>Материал</StyledSectionTitle>
                    <StyledCheckboxGroup>
                        {availableMaterials.length > 0 ? availableMaterials.map((material) => (
                            <StyledCheckboxItem key={material}>
                                <StyledCheckbox
                                    type="checkbox"
                                    checked={filters.tagSizes.includes(material)}
                                    onChange={(e) => handleCheckboxChange('tagSizes', material, e.target.checked)}
                                />
                                {material}
                            </StyledCheckboxItem>
                        )) : (
                            <p style={{ color: '#666', fontSize: rm(14) }}>Нет доступных материалов</p>
                        )}
                    </StyledCheckboxGroup>
                </StyledSection>

                <StyledSection>
                    <StyledSectionTitle>Количество штук в наборе</StyledSectionTitle>
                    <StyledCheckboxGroup>
                        {availableQuantities.length > 0 ? availableQuantities.map((quantity) => (
                            <StyledCheckboxItem key={quantity}>
                                <StyledCheckbox
                                    type="checkbox"
                                    checked={filters.quantities.includes(quantity)}
                                    onChange={(e) => handleCheckboxChange('quantities', quantity, e.target.checked)}
                                />
                                {quantity}шт
                            </StyledCheckboxItem>
                        )) : (
                            <p style={{ color: '#666', fontSize: rm(14) }}>Нет доступных количеств</p>
                        )}
                    </StyledCheckboxGroup>
                </StyledSection>

                <StyledSection>
                    <StyledSectionTitle>Особые предложения</StyledSectionTitle>
                    <StyledCheckboxGroup>
                        <StyledCheckboxItem>
                            <StyledCheckbox
                                type="checkbox"
                                checked={filters.hasDiscount}
                                onChange={(e) => onFilterChange('hasDiscount', e.target.checked)}
                            />
                            Только со скидкой
                        </StyledCheckboxItem>
                        <StyledCheckboxItem>
                            <StyledCheckbox
                                type="checkbox"
                                checked={filters.isBestseller}
                                onChange={(e) => onFilterChange('isBestseller', e.target.checked)}
                            />
                            Бестселлеры
                        </StyledCheckboxItem>
                    </StyledCheckboxGroup>
                </StyledSection>

                <StyledSection>
                    <StyledSectionTitle>Лак</StyledSectionTitle>
                    <StyledCheckboxGroup>
                        {availablePolishes.length > 0 ? availablePolishes.map((polishName) => (
                            <StyledCheckboxItem key={polishName}>
                                <StyledCheckbox
                                    type="checkbox"
                                    checked={filters.selectedPolishes.includes(polishName)}
                                    onChange={(e) => handleCheckboxChange('selectedPolishes', polishName, e.target.checked)}
                                />
                                {polishName}
                            </StyledCheckboxItem>
                        )) : (
                            <p style={{ color: '#666', fontSize: rm(14) }}>Нет доступных лаков</p>
                        )}
                    </StyledCheckboxGroup>
                </StyledSection>

                {activeFiltersCount > 0 && (
                    <StyledClearAllButton onClick={handleClearAllFilters}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Очистить все фильтры
                    </StyledClearAllButton>
                )}
                <StyledShowResultsButton onClick={onShowResults}>
                    Показать результаты {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </StyledShowResultsButton>
            </StyledFilterCard>
        </StyledModalOverlay>
    )
}
