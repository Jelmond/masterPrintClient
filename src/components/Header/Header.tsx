'use client'

import { colors, media, rm } from "@/styles"
import { fontGeist } from "@/styles/fonts"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { CartIcon } from "@/components/CartIcon"
import { PhoneIcon } from "@/components/PhoneIcon"
import { SearchDropdown } from "@/components/SearchDropdown/SearchDropdown"
import { ContactDropdown } from "@/components/ContactDropdown/ContactDropdown"
import { useState, useRef, useEffect } from "react"
import { AnimLink } from "@/layouts/AnimatedRouterLayout/AnimatedRouterLayout"

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
            text: 'Актуальное',
            href: '/actual'
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
            <StyledLeftContainer>
                <StyledLogo href='/'>
                    <Image src='/assets/images/logo.png' width={236} height={42} alt="logo"/>
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
                <StyledSearchContainer ref={searchRef}>
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
            </StyledRightContainer>
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
        padding: ${rm(8)} ${rm(20)} ${rm(8)} ${rm(20)};
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
    width: ${rm(236)};
    height: ${rm(42)};
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
    }
`

const StyledNavigationContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${rm(55)};

    ${media.md`
        gap: ${rm(20)};
        display: none;
    `}

    ${media.xsm`
        display: none;
    `}

    p{
        font-size: ${rm(26)};
        ${fontGeist(500)};
        color: ${colors.black100};
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
        display: none;
    `}
`

const StyledSearchInput = styled.input`
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
`

const StyledSearchIcon = styled.div`
    position: absolute;
    right: ${rm(10)};
    top: 50%;
    transform: translateY(-50%);
    height: ${rm(28)};
    width: ${rm(28)};
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledContactContainer = styled.div`
    position: relative;
`