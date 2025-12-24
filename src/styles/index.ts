'use client'

import { createGlobalStyle } from "styled-components"
import { printVars } from "./utils"
import { _colors, colors } from "./colors"
import { fontOnest } from "./fonts"

import { initSmartCSSGrid } from "@/styles/grid/grid"

const {
    SmartCSSGrid,
    media,
    rm,
    em
} = initSmartCSSGrid({
    fontBase: 16,
    scaleUpCoeff: 0.6666,
    grid: {
        xlg: 1920,
        lg: 1440,
        md: 1024,
        xsm: 576,
    },
    related: {
        xsm: 390
    }
})

// Global css
const GlobalStyles = createGlobalStyle`
    // Variables 
    :root {
        ${printVars(_colors, 'color')}
    }

    // Normalize
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        text-decoration: none;
        color: inherit;
    }

    img {
        user-select: none;
    }

    span, a {
        display: inline-block;
    }

    button {
        background: none;
    }

    html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f5f7fa;
        color: ${colors.black100};
        ${fontOnest(400)}
    }

    html, body {
        -webkit-overflow-scrolling: touch;
        position: relative;
        overscroll-behavior-y: none;
    }
    body::-webkit-scrollbar { width: 0; }

    #__next {
        height: 100%;
    }

    body {
        display: flex;
        flex-direction: column;
    }


    /* Lenis */

    html.lenis, html.lenis body {
        height: auto;
    }

    .lenis.lenis-smooth {
        scroll-behavior: auto !important;
    }

    .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
    }

    .lenis.lenis-stopped {
        overflow: hidden;
    }

    .lenis.lenis-smooth iframe {
        pointer-events: none;
    }

    /* Cookie */
    .cookieContainer {
        position: fixed;
        right: ${rm(24)} !important;
        bottom: ${rm(24)} !important;
        max-width: ${rm(480)};
        width: 100%;
        z-index: 10002;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-radius: ${rm(20)};
        padding: ${rm(28)} ${rm(32)};
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: ${rm(20)};
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.15),
            0 8px 24px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.5) inset;
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        
        &.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
        }
        
        ${media.lg`
            right: ${rm(20)} !important;
            bottom: ${rm(20)} !important;
            max-width: ${rm(420)};
        `}
        
        ${media.xsm`
            gap: ${rm(16)};
            padding: ${rm(24)} ${rm(20)};
            right: ${rm(16)} !important;
            bottom: ${rm(16)} !important;
            border-radius: ${rm(16)};
        `}

        > div {
            width: 100%;
        }

        ${media.xsm`
            max-width: calc(100% - ${rm(32)});
        `}

        h5 {
            font-size: ${rm(28)};
            margin-bottom: ${rm(12)};
            color: #1C1C1C;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.02em;
            ${media.xsm`
                margin-bottom: ${rm(10)};
                font-size: ${rm(22)};
            `}
        }

        p {
            font-size: ${rm(15)};
            color: #4B5563;
            line-height: 1.6;
            margin: 0;

            * {
                display: inline;
            }

            a {
                position: relative;
                margin-left: ${rm(4)};
                cursor: pointer;
                color: #1C1C1C;
                font-weight: 500;
                text-decoration: none;
                transition: color 0.2s ease;
                
                &:hover {
                    color: #1C1C1C;
                }
                
                &::before {
                    position: absolute;
                    content: '';
                    left: 0;
                    top: calc(100% - ${rm(1)});
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, #1C1C1C 0%, rgba(28, 28, 28, 0.3) 100%);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                &:hover::before {
                    transform: scaleX(1);
                }
            }
        }
    }

    .cookieButton {
        cursor: pointer;
        padding: ${rm(14)} ${rm(32)};
        background: linear-gradient(135deg, #1C1C1C 0%, #2C2C2C 100%);
        color: #FFFFFF;
        border-radius: ${rm(10)};
        width: 100%;
        font-size: ${rm(16)};
        font-weight: 600;
        border: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(28, 28, 28, 0.2);
        position: relative;
        overflow: hidden;
        margin-top: ${rm(4)};
        
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.2),
                transparent
            );
            transition: left 0.5s;
        }
        
        &:hover {
            background: linear-gradient(135deg, #2C2C2C 0%, #1C1C1C 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(28, 28, 28, 0.3);
            
            &::before {
                left: 100%;
            }
        }
        
        &:active {
            transform: translateY(0);
            box-shadow: 0 4px 12px rgba(28, 28, 28, 0.2);
        }
        
        ${media.xsm`
            padding: ${rm(12)} ${rm(24)};
            font-size: ${rm(14)};
            border-radius: ${rm(8)};
        `}
    }
`

// Exports
export default GlobalStyles
export { colors } from './colors'
export { fonts } from './fonts'
export { SmartCSSGrid, media, rm, em }