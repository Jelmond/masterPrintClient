'use client'

import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import styled from "styled-components"
import { CartIcon } from "@/components/CartIcon"
import { PhoneIcon } from "@/components/PhoneIcon"
import { SearchDropdown } from "@/components/SearchDropdown/SearchDropdown"
import { ContactDropdown } from "@/components/ContactDropdown/ContactDropdown"
import { useState, useRef, useEffect } from "react"
import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"
import Image from "next/image"

export const Header = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)

    const navigationItems = [
        {
            text: 'Каталог',
            href: '/catalog'
        },
        {
            text: 'О нас',
            href: '/about'
        },
        {
            text: 'Контакты',
            href: '/contacts'
        },
    ]

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false)
            }
            if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
                setIsContactOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchQuery(value)
        setIsSearchOpen(value.length > 0)
    }

    const handleSearchFocus = () => {
        if (searchQuery.length > 0) {
            setIsSearchOpen(true)
        }
    }

    return (
        <StyledHeader>
            <StyledSearchWrapper ref={searchRef}>
            <StyledTopRow>
            <StyledLeftContainer>
                <StyledLogo href='/'>
                    {/* <svg width="155" height="40" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="155" height="40" fill="url(#pattern0_13_21)"/>
                        <defs>
                        <pattern id="pattern0_13_21" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_13_21" transform="scale(0.00219298 0.00847458)"/>
                        </pattern>
                        <image id="image0_13_21" width="456" height="118" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
                        </defs>
                    </svg> */}
                    <Image src="/assets/logoSpring.svg" alt="logo" width={155} height={40} />
                </StyledLogo>
                <StyledNavigationContainer>
                    {navigationItems.map((item, index) => (
                        <p key={index}>
                            <AnimLink href={item.href}>
                                {item.text}
                            </AnimLink>
                        </p>
                    ))}
                </StyledNavigationContainer>
            </StyledLeftContainer>
            <StyledRightContainer>
                <StyledSearchContainer>
                    <StyledSearchInput 
                        placeholder="Поиск товара" 
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onFocus={handleSearchFocus}
                    />
                    <StyledSearchIcon>
                        <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_809_1530)">
                            <path d="M18.9576 18.1083H18.0346L17.7074 17.7726C18.8524 16.3553 19.5418 14.5153 19.5418 12.5137C19.5418 8.05046 16.1418 4.43262 11.9473 4.43262C7.75278 4.43262 4.35278 8.05046 4.35278 12.5137C4.35278 16.9769 7.75278 20.5948 11.9473 20.5948C13.8284 20.5948 15.5576 19.8613 16.8896 18.6429L17.205 18.991V19.9732L23.0469 26.1769L24.7878 24.3245L18.9576 18.1083ZM11.9473 18.1083C9.03801 18.1083 6.68955 15.6094 6.68955 12.5137C6.68955 9.41802 9.03801 6.9191 11.9473 6.9191C14.8566 6.9191 17.205 9.41802 17.205 12.5137C17.205 15.6094 14.8566 18.1083 11.9473 18.1083Z" fill="#CBCBCB"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_809_1530">
                            <rect width="28.0412" height="29.8378" fill="white" transform="translate(0.847656 0.703125)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </StyledSearchIcon>
                    <SearchDropdown 
                        isOpen={isSearchOpen}
                        onClose={() => setIsSearchOpen(false)}
                        searchQuery={searchQuery}
                    />
                </StyledSearchContainer>
                <CartIcon />
                <StyledContactContainer ref={contactRef}>
                    <PhoneIcon onClick={() => setIsContactOpen(!isContactOpen)} />
                    <ContactDropdown 
                        isOpen={isContactOpen}
                        onClose={() => setIsContactOpen(false)}
                    />
                </StyledContactContainer>
                <StyledWorkingHours>
                    <StyledWorkingHoursText>Пн-Пт: 9:00 - 17:00</StyledWorkingHoursText>
                </StyledWorkingHours>
            </StyledRightContainer>
            </StyledTopRow>
            </StyledSearchWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${rm(11)} ${rm(192)} ${rm(11)} ${rm(170)};
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: ${colors.white100};

    ${media.lg`
        padding: ${rm(11)} ${rm(70)} ${rm(11)} ${rm(70)};
    `}

    ${media.md`
        padding: ${rm(11)} ${rm(25)} ${rm(11)} ${rm(25)};
    `}

    ${media.xsm`
        padding: ${rm(8)} ${rm(20)} ${rm(8)} ${rm(12)};
        flex-direction: column;
        align-items: stretch;
    `}
`

const StyledSearchWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 0;

    ${media.xsm`
        flex-direction: column;
        align-items: stretch;
        gap: ${rm(8)};
    `}
`

const StyledTopRow = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    min-width: 0;

    ${media.xsm`
        flex: 0 0 auto;
    `}
`

const StyledLeftContainer = styled.div`
    display: flex;
    gap: ${rm(20)};
    align-items: center;

    ${media.md`
        gap: ${rm(10)};
    `}

    ${media.xsm`
        gap: 0;
    `}
`

const StyledRightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(33)};

    ${media.md`
        gap: ${rm(10)};
    `}

    ${media.xsm`
        gap: ${rm(15)};
    `}
`

const StyledLogo = styled(AnimLink)`
    width: ${rm(205)};
    height: ${rm(60)};
    cursor: pointer;
    flex-shrink: 0;

    ${media.md`
        width: ${rm(150)};
        height: ${rm(28)};
    `}

    ${media.xsm`
        width: ${rm(120)};
        height: ${rm(22)};
    `}

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const StyledNavigationContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(40)};
    margin-left: ${rm(20)};

    ${media.md`
        gap: ${rm(20)};
        display: none;
    `}

    ${media.xsm`
        display: none;
    `}

    p{
        font-size: ${rm(18)};
        ${fontGeist(600)};
        color: #1C1C1C;
        line-height: 190%;
    }
`


const StyledSearchContainer = styled.div`
    position: relative;
    width: ${rm(340)};
    z-index: 1001;

    ${media.md`
        width: ${rm(280)};
    `}

    ${media.xsm`
        display: none !important;
    `}
`

const StyledSearchInput = styled.input<{ $mobile?: boolean }>`
    width: 100%;
    height: ${rm(46)};
    border-radius: 25px;
    padding: 0 ${rm(46)} 0 ${rm(20)};
    font-size: ${rm(16)};
    ${fontGeist(500)};
    border: 1px solid #D8DADC;

    &::placeholder {
        color: #808080;
        ${fontGeist(500)};
    }

    ${(p) => p.$mobile && `
        height: ${rm(38)};
        border-radius: ${rm(20)};
        padding: 0 ${rm(40)} 0 ${rm(16)};
        font-size: ${rm(14)};
        border: 1px solid #E8EAED;
        background-color: #FAFBFC;
        color: #1C1C1C;
        transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

        &::placeholder {
            color: #9CA3AF;
        }

        &:focus {
            outline: none;
            border-color: #1C1C1C;
            box-shadow: 0 0 0 2px rgba(28, 28, 28, 0.08);
            background-color: #FFFFFF;
        }
    `}
`

const StyledSearchIcon = styled.div<{ $mobile?: boolean }>`
    position: absolute;
    right: ${rm(10)};
    top: 50%;
    transform: translateY(-50%);
    height: ${rm(28)};
    width: ${rm(28)};
    display: flex;
    align-items: center;
    justify-content: center;

    ${(p) => p.$mobile && `
        right: ${rm(8)};
        height: ${rm(20)};
        width: ${rm(20)};
        svg { width: 20px; height: 20px; }
    `}
`

const StyledContactContainer = styled.div`
    position: relative;
`

const StyledWorkingHours = styled.div`
    display: flex;
    align-items: center;
    padding: ${rm(8)} ${rm(16)};
    background-color: #F5F5F5;
    border-radius: ${rm(8)};

    ${media.md`
        display: none;
    `}

    ${media.xsm`
        display: none;
    `}
`

const StyledWorkingHoursText = styled.span`
    font-size: ${rm(14)};
    ${fontGeist(500)};
    color: #1C1C1C;
    white-space: nowrap;
`