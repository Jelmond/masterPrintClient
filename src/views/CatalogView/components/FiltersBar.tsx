'use client'

import { rm } from "@/styles"
import { colors } from "@/styles/colors"
import { animated, useSpring } from "@react-spring/web"
import styled from "styled-components"
import { FiltersSettings } from "./FiltersSettings"
import { fontGeist } from "@/styles/fonts"
import { useState } from "react"

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
}


export const FiltersBar = ({ tags, filters, onFilterChange, onTagToggle, onClearFilters, onOpenFilterModal }: FiltersBarProps) => {

    const [isShown, setIsShown] = useState(true)

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
                    <FiltersSettings 
                        onClick={onOpenFilterModal}
                    />
                    <StyledSalesFilter>
                        <p 
                            className={`text ${filters.sales === 'new' ? 'active' : ''}`}
                            onClick={() => onFilterChange('sales', filters.sales === 'new' ? '' : 'new')}
                        >
                            Новинки
                        </p>
                        <p 
                            className={`text ${filters.sales === 'sale' ? 'active' : ''}`}
                            onClick={() => onFilterChange('sales', filters.sales === 'sale' ? '' : 'sale')}
                        >
                            Акции
                        </p>
                        <p 
                            className={`text ${filters.sales === 'popular' ? 'active' : ''}`}
                            onClick={() => onFilterChange('sales', filters.sales === 'popular' ? '' : 'popular')}
                        >
                            Популярные
                        </p>
                    </StyledSalesFilter>
                    <StyledTagsFilter>
                        {tags.slice(0, 9).map((tag: any, index: number) => (
                            <p 
                                className={`tag ${filters.selectedTags.includes(tag.title) ? 'active' : ''}`}
                                key={index}
                                onClick={() => onTagToggle(tag.title)}
                            >
                                {tag.title}
                            </p>
                        ))} 
                    </StyledTagsFilter>
                    {tags.length > 9 && <StyledMoreButton>Показать ещё</StyledMoreButton>}
                    {(filters.sales || filters.selectedTags.length > 0) && (
                        <StyledClearButton onClick={onClearFilters}>
                            Очистить фильтры
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
`

const StyledSquishContainer = styled(animated.div)`
    position: relative; 
    overflow: hidden;
    height: 80vh;
`

const StyledFiltersBarWrapper = styled(animated.div)`
    background-color: ${colors.white100};
    position: fixed;
    top: ${rm(80)};
    left: 0;
    z-index: 100;
    border-top-right-radius: ${rm(20)};
    border-bottom-right-radius: ${rm(20)};
    box-shadow: -16px 15px 49px 0px #0000001A,
                -64px 62px 89px 0px #00000017,
                -145px 139px 120px 0px #0000000D,
                -258px 246px 143px 0px #00000003,
                -403px 385px 156px 0px #00000000;

`

const StyledSalesFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(20)};
    margin-bottom: ${rm(20)};

    .text{
        font-size: ${rm(20)};
        ${fontGeist(500)};
        color: ${colors.black100};
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: ${rm(8)} ${rm(12)};
        border-radius: ${rm(6)};
        border: 1px solid transparent;

        &:hover{
            transform: translateX(${rm(10)});
            background-color: #f8f9fa;
        }

        &.active {
            background-color: #007bff;
            color: white;
            border-color: #007bff;
        }
    }
`

const StyledTagsFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rm(20)};

    .tag{
        font-size: ${rm(16)};
        ${fontGeist(400)};
        color: ${colors.black100};
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: ${rm(6)} ${rm(10)};
        border-radius: ${rm(4)};
        border: 1px solid transparent;

        &:hover{
            transform: translateX(${rm(10)});
            background-color: #f8f9fa;
        }

        &.active {
            background-color: #28a745;
            color: white;
            border-color: #28a745;
        }
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

const StyledMoreButton = styled.p`
    font-size: ${rm(20)};
    ${fontGeist(500)};
    color: ${colors.black100};
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    margin-top: ${rm(30)};

    &:hover{
        opacity: 0.5;
    }
`

const StyledClearButton = styled.button`
    background: #dc3545;
    border: none;
    border-radius: ${rm(6)};
    padding: ${rm(10)} ${rm(16)};
    font-size: ${rm(14)};
    color: white;
    ${fontGeist(500)};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: ${rm(20)};
    width: 100%;

    &:hover {
        background: #c82333;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`