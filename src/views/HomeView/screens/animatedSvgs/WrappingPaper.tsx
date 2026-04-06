'use client'

import { useSpring, animated, to } from '@react-spring/web'
import { useState } from 'react'

/**
 * Wrapping paper: a single sheet with diagonal repeating "MPP Shop" brand pattern,
 * wavy top/bottom edges giving a natural paper curl feel.
 * Hover — sheet gently lifts and straightens.
 * In Strapi: icon = `wrapping`
 */
export const WrappingPaperSvg = () => {
    const [isHovered, setIsHovered] = useState(false)

    const spring = useSpring({
        y: isHovered ? -14 : 0,
        rotate: isHovered ? 1 : -4,
        scale: isHovered ? 1.03 : 1,
        config: { tension: 240, friction: 24 },
    })

    return (
        <svg
            width="400"
            height="520"
            viewBox="0 0 400 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: 'pointer', overflow: 'visible' }}
        >
            <defs>
                {/* Warm kraft-paper gradient */}
                <linearGradient id="wpSheet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F4EAD8" />
                    <stop offset="55%" stopColor="#EDE0CB" />
                    <stop offset="100%" stopColor="#E2D0B5" />
                </linearGradient>

                {/* Tiling diagonal "MPP Shop" brand text */}
                <pattern
                    id="mppText"
                    x="0"
                    y="0"
                    width="130"
                    height="65"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(-38 200 260)"
                >
                    <text
                        x="8"
                        y="44"
                        fill="#A8865A"
                        fillOpacity="0.45"
                        fontSize="13.5"
                        fontFamily="Georgia, 'Times New Roman', serif"
                        fontWeight="bold"
                        letterSpacing="3.5"
                    >
                        MPP Shop
                    </text>
                </pattern>

                {/* Clip to keep pattern inside the sheet shape */}
                <clipPath id="wpClip">
                    <path d="
                        M 62 58
                        C 130 44, 220 72, 305 50
                        C 335 43, 348 54, 346 62
                        L 338 458
                        C 300 468, 240 450, 180 462
                        C 130 472, 82 458, 62 450
                        Z
                    " />
                </clipPath>

                <filter id="wpShadow" x="-15%" y="-10%" width="130%" height="130%">
                    <feDropShadow dx="2" dy="8" stdDeviation="12" floodOpacity="0.11" />
                </filter>
            </defs>

            {/* Soft ground shadow */}
            <ellipse cx="200" cy="500" rx="130" ry="11" fill="#000" opacity="0.05" />

            <animated.g
                transform={to(
                    [spring.y, spring.rotate, spring.scale],
                    (y, rotate, scale) =>
                        `translate(200,260) translate(0,${y}) rotate(${rotate}) scale(${scale}) translate(-200,-260)`
                )}
            >
                {/* Paper base */}
                <path
                    d="
                        M 62 58
                        C 130 44, 220 72, 305 50
                        C 335 43, 348 54, 346 62
                        L 338 458
                        C 300 468, 240 450, 180 462
                        C 130 472, 82 458, 62 450
                        Z
                    "
                    fill="url(#wpSheet)"
                    filter="url(#wpShadow)"
                />

                {/* Diagonal "MPP Shop" pattern */}
                <path
                    d="
                        M 62 58
                        C 130 44, 220 72, 305 50
                        C 335 43, 348 54, 346 62
                        L 338 458
                        C 300 468, 240 450, 180 462
                        C 130 472, 82 458, 62 450
                        Z
                    "
                    fill="url(#mppText)"
                    clipPath="url(#wpClip)"
                />

                {/* Thin decorative inset border */}
                <path
                    d="
                        M 80 76
                        C 142 63, 225 88, 303 68
                        C 328 62, 330 70, 328 78
                        L 322 440
                        C 294 450, 238 433, 180 444
                        C 135 453, 94 440, 80 432
                        Z
                    "
                    fill="none"
                    stroke="#A8865A"
                    strokeWidth="1"
                    strokeOpacity="0.22"
                />

                {/* Top edge highlight (paper sheen) */}
                <path
                    d="M 68 62 C 140 48, 220 74, 305 53"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeOpacity="0.55"
                    fill="none"
                />

                {/* Bottom edge curl shadow */}
                <path
                    d="M 68 452 C 125 464, 200 456, 270 462 C 305 465, 330 460, 338 456"
                    stroke="#A8865A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeOpacity="0.28"
                    fill="none"
                />
            </animated.g>
        </svg>
    )
}
