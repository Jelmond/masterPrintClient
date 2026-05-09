'use client'

import styled from 'styled-components'
import { media, rm } from '@/styles'

/** Общая обёртка под SVG категории на главной и на странице каталога — без зависимости от Swiper */
export const StyledSlideImage = styled.div`
    position: relative;
    width: 100%;
    height: ${rm(500)};
    border-radius: 10px;
    overflow: hidden;

    ${media.lg`
        height: ${rm(400)};
    `}

    ${media.md`
        height: ${rm(300)};
    `}

    ${media.xsm`
        height: ${rm(200)};
    `}

    img, svg {
        width: 100%;
        height: 100% !important;
        object-fit: cover;
        position: absolute;

        transition: transform 0.3s ease;
    }
`
