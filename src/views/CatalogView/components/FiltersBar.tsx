'use client'

import { media, rm } from "@/styles"
import { colors } from "@/styles/colors"
import { animated, useSpring } from "@react-spring/web"
import styled from "styled-components"
import { FiltersSettings } from "./FiltersSettings"
import { fontGeist } from "@/styles/fonts"
import { useState, useMemo } from "react"

interface FiltersBarProps {
    tags: any[]
    filters: {
        sales: string
        selectedTags: string[]
        searchQuery: string
    }
    onFilterChange: (filterType: string, value: any) => void
    onTagToggle: (tagTitle: string) => void
    onClearFilters: () => void
    onOpenFilterModal: () => void
    showCategories?: boolean
}


export const FiltersBar = ({ tags, filters, onFilterChange, onTagToggle, onClearFilters, onOpenFilterModal, showCategories = true }: FiltersBarProps) => {

    const [isShown, setIsShown] = useState(true)
    const [showAllTags, setShowAllTags] = useState(false)

    const visibleTags = useMemo(() => {
        return showAllTags ? tags : tags.slice(0, 9)
    }, [tags, showAllTags])

    const activeFiltersCount = useMemo(() => {
        let count = 0
        if (filters.sales) count++
        if (filters.selectedTags.length > 0) count += filters.selectedTags.length
        return count
    }, [filters])

    const appearSpring = useSpring({
        width: isShown ? `${rm(202)}` : `${rm(0)}`,
        x: isShown ? `${rm(0)}` : `${rm(-50)}`,
        config: {
            duration: 300
        }
    })

    const squishSpring = useSpring({
        width: isShown ? `${rm(202)}` : `${rm(50)}`,
        config: {
            duration: 300
        }
    })

    const lessButtonSpring = useSpring({
        transform: isShown ? `rotate(180deg)` : `rotate(0deg)`,
        config: {
            duration: 100
        }
    })

    return (
        <StyledFiltersBarWrapper>
            <StyledSquishContainer style={squishSpring}>
                <StyledFiltersBar style={appearSpring}>
                    <StyledHeaderSection>
                        <FiltersSettings 
                            onClick={onOpenFilterModal}
                        />
                        {activeFiltersCount > 0 && (
                            <StyledActiveFiltersBadge>
                                {activeFiltersCount}
                            </StyledActiveFiltersBadge>
                        )}
                    </StyledHeaderSection>

                    {showCategories && (
                        <>
                            <StyledSectionTitle>Теги</StyledSectionTitle>
                            <StyledSalesFilter>
                                <StyledFilterButton 
                                    className={filters.sales === 'new' ? 'active' : ''}
                                    onClick={() => onFilterChange('sales', filters.sales === 'new' ? '' : 'new')}
                                >
                                    <span>Новинки</span>
                                    {filters.sales === 'new' && (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
                                </StyledFilterButton>
                                <StyledFilterButton 
                                    className={filters.sales === 'sale' ? 'active' : ''}
                                    onClick={() => onFilterChange('sales', filters.sales === 'sale' ? '' : 'sale')}
                                >
                                    <span>Акции</span>
                                    {filters.sales === 'sale' && (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
                                </StyledFilterButton>
                                <StyledFilterButton 
                                    className={filters.sales === 'popular' ? 'active' : ''}
                                    onClick={() => onFilterChange('sales', filters.sales === 'popular' ? '' : 'popular')}
                                >
                                    <span>Популярные</span>
                                    {filters.sales === 'popular' && (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
                                </StyledFilterButton>
                            </StyledSalesFilter>
                        </>
                    )}

                    <StyledSectionTitle>Категории</StyledSectionTitle>
                    <StyledTagsFilter>
                        {visibleTags.map((tag: any, index: number) => (
                            <StyledTagButton
                                key={index}
                                className={filters.selectedTags.includes(tag.title) ? 'active' : ''}
                                onClick={() => onTagToggle(tag.title)}
                            >
                                <span>{tag.title}</span>
                                <StyledCheckmarkIcon className={filters.selectedTags.includes(tag.title) ? 'active' : ''}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </StyledCheckmarkIcon>
                            </StyledTagButton>
                        ))} 
                    </StyledTagsFilter>
                    
                    {tags.length > 9 && (
                        <StyledMoreButton onClick={() => setShowAllTags(!showAllTags)}>
                            {showAllTags ? 'Скрыть' : `Показать ещё (${tags.length - 9})`}
                            <svg 
                                width="12" 
                                height="12" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transform: showAllTags ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                            >
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </StyledMoreButton>
                    )}
                    
                    {activeFiltersCount > 0 && (
                        <StyledClearButton onClick={onClearFilters}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            Очистить фильтры ({activeFiltersCount})
                        </StyledClearButton>
                    )}
                </StyledFiltersBar>
                <StyledLessButton onClick={() => setIsShown(!isShown)}>
                    <animated.svg style={lessButtonSpring} width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 18.03L1.77 19.8L11.67 9.9L1.77 0L0 1.77L8.13 9.9L0 18.03Z" fill="#323232"/>
                    </animated.svg>
                </StyledLessButton>
            </StyledSquishContainer>
        </StyledFiltersBarWrapper>
    )
}


const StyledFiltersBar = styled(animated.div)`
    padding: ${rm(13)};
    padding-right: ${rm(25)};
    position: relative;
    overflow: hidden;
    width: 100%;
    background-color: ${colors.white100};
    height: 100%;
    border-top-right-radius: ${rm(20)};
    border-bottom-right-radius: ${rm(20)};
`

const StyledSquishContainer = styled(animated.div)`
    position: relative; 
    overflow: hidden;
    height: 80vh;
`

const StyledFiltersBarWrapper = styled(animated.div)`
    position: sticky;
    top: ${rm(80)};
    left: 0;
    z-index: 100;
    border-top-right-radius: ${rm(20)};
    border-bottom-right-radius: ${rm(20)};

    ${media.xsm`
        display: none;
    `}
`

const StyledHeaderSection = styled.div`
    position: relative;
    margin-bottom: ${rm(20)};
`

const StyledActiveFiltersBadge = styled.div`
    position: absolute;
    top: ${rm(-6)};
    right: ${rm(25)};
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
    color: white;
    border-radius: 50%;
    width: ${rm(24)};
    height: ${rm(24)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${rm(12)};
    ${fontGeist(600)};
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
    animation: pulse 2s ease-in-out infinite;

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
`

const StyledSectionTitle = styled.h3`
    font-size: ${rm(14)};
    ${fontGeist(600)};
    color: #718096;
    margin: ${rm(20)} 0 ${rm(12)} 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -${rm(4)};
        width: ${rm(30)};
        height: 2px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        border-radius: 1px;
    }
`

const StyledSalesFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(10)};
    margin-bottom: ${rm(20)};
`

const StyledFilterButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${rm(8)};
    font-size: ${rm(16)};
    ${fontGeist(500)};
    color: ${colors.black100};
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: ${rm(10)} ${rm(14)};
    border-radius: ${rm(10)};
    border: 2px solid transparent;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    text-align: left;

    span {
        flex: 1;
    }

    svg {
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.2s ease;
    }

    &:hover {
        transform: translateX(${rm(6)});
        background: linear-gradient(135deg, #f0f4ff 0%, #e8f0ff 100%);
        border-color: rgba(102, 126, 234, 0.2);
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
    }

    &.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-color: #667eea;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);

        svg {
            opacity: 1;
            transform: scale(1);
        }

        &:hover {
            transform: translateX(${rm(4)});
            box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
    }
`

const StyledTagsFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(8)};
    margin-bottom: ${rm(16)};
`

const StyledTagButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${rm(8)};
    font-size: ${rm(14)};
    ${fontGeist(400)};
    color: ${colors.black100};
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease, border-width 0.2s ease;
    padding: ${rm(6)} ${rm(10)};
    border-radius: ${rm(6)};
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: ${colors.white100};
    text-align: left;
    width: 100%;
    min-height: ${rm(32)};

    span {
        flex: 1;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &:hover {
        border-color: rgba(0, 0, 0, 0.2);
        background: #f8f9fa;
    }

    &.active {
        background: ${colors.white100};
        color: ${colors.black100};
        border-color: ${colors.black100};
        border-width: 1.5px;
        ${fontGeist(500)};

        &:hover {
            background: #f8f9fa;
        }
    }
`

const StyledCheckmarkIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${rm(14)};
    height: ${rm(14)};
    flex-shrink: 0;
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease;
    
    svg {
        width: 100%;
        height: 100%;
        color: ${colors.black100};
    }

    &.active {
        opacity: 1;
        transform: scale(1);
    }
`

const StyledLessButton = styled.div`
    position: absolute;
    top: ${rm(26)};
    right: ${rm(27)};
    width: ${rm(12)};
    height: ${rm(20)};
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    svg{
        width: 100%;
        height: 100%;
    }

    &:hover{
        opacity: 0.5;
    }
`

const StyledMoreButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${rm(8)};
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: #667eea;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: ${rm(10)} ${rm(12)};
    border-radius: ${rm(8)};
    border: 2px solid rgba(102, 126, 234, 0.2);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    margin-top: ${rm(12)};
    width: 100%;

    svg {
        color: #667eea;
        transition: transform 0.3s ease;
    }

    &:hover {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        border-color: rgba(102, 126, 234, 0.4);
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);
    }

    &:active {
        transform: translateY(0);
    }
`

const StyledClearButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${rm(8)};
    background: ${colors.white100};
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: ${rm(6)};
    padding: ${rm(8)} ${rm(12)};
    font-size: ${rm(13)};
    color: ${colors.black100};
    ${fontGeist(500)};
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: ${rm(20)};
    width: 100%;

    svg {
        width: ${rm(14)};
        height: ${rm(14)};
        transition: transform 0.2s ease;
    }

    &:hover {
        border-color: rgba(0, 0, 0, 0.25);
        background: #f8f9fa;
    }

    &:active {
        background: #f0f0f0;
    }
`