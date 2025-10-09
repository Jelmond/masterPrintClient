import { colors, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"

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
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${rm(120)} ${rm(20)} ${rm(20)} ${rm(20)};
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    animation: ${props => props.isOpen ? 'fadeIn' : 'fadeOut'} 0.3s ease-in-out;

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

const StyledFilterCard = styled.div`
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
    position: relative;
    transform: translateY(${props => props.isOpen ? '0' : '-20px'});
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${props => props.isOpen ? 'slideIn' : 'slideOut'} 0.3s cubic-bezier(0.4, 0, 0.2, 1);

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
    margin-bottom: ${rm(32)};
    padding-bottom: ${rm(20)};
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    
    h2 {
        font-size: ${rm(24)};
        ${fontGeist(700)};
        color: #1a202c;
        margin: 0 0 ${rm(8)} 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    p {
        font-size: ${rm(14)};
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
    padding: ${rm(8)} ${rm(12)};
    border-radius: ${rm(8)};
    transition: all 0.2s ease;
    
    &:hover {
        background: rgba(102, 126, 234, 0.05);
        color: #2d3748;
        transform: translateX(${rm(4)});
    }
`

const StyledCheckbox = styled.input`
    width: ${rm(18)};
    height: ${rm(18)};
    cursor: pointer;
    accent-color: #667eea;
    transform: scale(1.1);
    
    &:checked {
        accent-color: #667eea;
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
    transition: all 0.3s ease;
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
`

export const FilterModal = ({ isOpen, onClose, onFilterChange, onShowResults, filters, products }: FilterModalProps) => {
    // Extract unique values from products for dynamic filter options
    const availableSizes = Array.from(new Set(products.map(p => p.size).filter(Boolean))).sort()
    const availableMaterials = Array.from(new Set(products.map(p => p.material).filter(Boolean))).sort()
    const availableQuantities = Array.from(new Set(products.map(p => p.quantityInPack?.toString()).filter(Boolean))).sort((a, b) => parseInt(a) - parseInt(b))

    const handleCheckboxChange = (filterType: string, value: string, checked: boolean) => {
        const currentValues = filters[filterType as keyof typeof filters] as string[]
        const newValues = checked 
            ? [...currentValues, value]
            : currentValues.filter(item => item !== value)
        
        onFilterChange(filterType, newValues)
    }

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <StyledModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
            <StyledFilterCard>
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

                <StyledShowResultsButton onClick={onShowResults}>
                    Показать результаты
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </StyledShowResultsButton>
            </StyledFilterCard>
        </StyledModalOverlay>
    )
}
