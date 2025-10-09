'use client'

import { useCartStore } from '@/store/cartStore'
import { colors, rm } from '@/styles'
import { fontGeist } from '@/styles/fonts'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

export const CartIcon = () => {
    const totalItems = useCartStore(state => state.getTotalItems())
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <StyledCartIcon href="/cart">
            <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.45312 17.917H37.7031M5.45312 17.917L9.03646 35.8337H34.1198L37.7031 17.917M5.45312 17.917L16.2031 7.16699M37.7031 17.917L26.9531 7.16699" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {mounted && totalItems > 0 && (
                <StyledBadge>
                    {totalItems}
                </StyledBadge>
            )}
        </StyledCartIcon>
    )
}

const StyledCartIcon = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: ${rm(32)};
    height: ${rm(32)};
`

const StyledBadge = styled.div`
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${colors.black100};
    color: white;
    border-radius: 50%;
    min-width: ${rm(20)};
    height: ${rm(20)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${rm(4)};
    ${fontGeist(600)};
    font-size: ${rm(12)};
` 