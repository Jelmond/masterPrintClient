'use client'

import { useCartStore } from '@/store/cartStore'
import { colors, media, rm } from '@/styles'
import { fontGeist } from '@/styles/fonts'
import { AnimLink } from '@/layouts/AnimatedRouterLayout/AnimatedRouterLayout'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface NavItem {
    label: string
    href: string
    icon: React.ReactNode
}

export const MobileBottomNav = () => {
    const pathname = usePathname()
    const totalItems = useCartStore(state => state.getTotalItems())
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const navItems: NavItem[] = [
        {
            label: 'Главная',
            href: '/',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            label: 'Поиск',
            href: '/search',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            label: 'Каталог',
            href: '/catalog',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 6C2.89543 6 2 6.89543 2 8V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6M4 6L4 4C4 2.89543 4.89543 2 6 2H8C9.10457 2 10 2.89543 10 4V6M20 6V4C20 2.89543 19.1046 2 18 2H16C14.8954 2 14 2.89543 14 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            label: 'Корзина',
            href: '/cart',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 17.9 19 19 19H21M9 19.5C9 20.3 9.7 21 10.5 21C11.3 21 12 20.3 12 19.5C12 18.7 11.3 18 10.5 18C9.7 18 9 18.7 9 19.5ZM19.5 19.5C19.5 20.3 20.2 21 21 21C21.8 21 22.5 20.3 22.5 19.5C22.5 18.7 21.8 18 21 18C20.2 18 19.5 18.7 19.5 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
    ]

    const isActive = (href: string, label: string) => {
        if (href === '/') {
            return pathname === '/'
        }
        // Для "Поиск" проверяем, что это страница /search
        if (label === 'Поиск') {
            return pathname.startsWith('/search')
        }
        // Для "Каталог" проверяем, что это /catalog
        if (label === 'Каталог') {
            return pathname.startsWith('/catalog')
        }
        // Для остальных (например, Корзина) проверяем точное совпадение пути
        return pathname === href || pathname.startsWith(href + '/')
    }

    if (!mounted) return null

    return (
        <StyledBottomNav>
            {navItems.map((item) => (
                <StyledNavItem key={item.href}>
                    <AnimLink href={item.href}>
                        <StyledIconWrapper $isActive={isActive(item.href, item.label)}>
                            {item.label === 'Корзина' && mounted && totalItems > 0 && (
                                <StyledBadge>
                                    {totalItems > 99 ? '99+' : totalItems}
                                </StyledBadge>
                            )}
                            {item.icon}
                        </StyledIconWrapper>
                        <StyledLabel $isActive={isActive(item.href, item.label)}>
                            {item.label}
                        </StyledLabel>
                    </AnimLink>
                </StyledNavItem>
            ))}
        </StyledBottomNav>
    )
}

const StyledBottomNav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    background: #FFFFFF;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: ${rm(8)} 0 ${rm(8)} 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);

    ${media.xsm`
        display: flex;
        align-items: center;
        justify-content: space-around;
    `}
`

const StyledNavItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${rm(4)};

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: ${rm(4)};
        text-decoration: none;
        width: 100%;
        padding: ${rm(4)} 0;
    }
`

const StyledIconWrapper = styled.div<{ $isActive: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${rm(24)};
    height: ${rm(24)};
    color: ${props => props.$isActive ? colors.black100 : '#666666'};
    transition: color 0.2s ease;

    svg {
        width: 100%;
        height: 100%;
        stroke: currentColor;
    }
`

const StyledLabel = styled.span<{ $isActive: boolean }>`
    font-size: ${rm(11)};
    ${fontGeist(500)};
    color: ${props => props.$isActive ? colors.black100 : '#666666'};
    transition: color 0.2s ease;
    text-align: center;
    line-height: 1.2;
`

const StyledBadge = styled.div`
    position: absolute;
    top: ${rm(-6)};
    right: ${rm(-6)};
    background: #007AFF;
    color: white;
    border-radius: ${rm(10)};
    min-width: ${rm(18)};
    height: ${rm(18)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${rm(4)};
    ${fontGeist(600)};
    font-size: ${rm(10)};
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
