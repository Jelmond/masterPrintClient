'use client'

import { useSpring, animated, to } from '@react-spring/web'
import { useState } from 'react'

/**
 * Оберточная бумага: один лист с типичным диагональным узором.
 * Hover — лист чуть приподнимается (как будто берёшь со стола).
 * В Strapi: icon = `wrapping`
 */
export const WrappingPaperSvg = () => {
    const [isHovered, setIsHovered] = useState(false)

    const sheet = useSpring({
        y: isHovered ? -18 : 0,
        rotate: isHovered ? -5 : 0,
        scale: isHovered ? 1.05 : 1,
        config: { tension: 260, friction: 22 },
    })

    return (
        <svg
            width="200"
            height="280"
            viewBox="0 0 200 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: 'pointer', transform: 'translateY(-10px)' }}
        >
            <defs>
                <linearGradient id="wpSheetFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FAF6F1" />
                    <stop offset="100%" stopColor="#E8DFD4" />
                </linearGradient>
                <linearGradient id="wpStripe" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4B896" />
                    <stop offset="100%" stopColor="#B8956E" />
                </linearGradient>
                <filter id="wpDrop" x="-25%" y="-25%" width="150%" height="150%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.14" />
                </filter>
                <clipPath id="wpSheetClip">
                    <rect x="32" y="72" width="136" height="188" rx="14" />
                </clipPath>
            </defs>

            {/* Тень под листом (статичная, «стол») */}
            <rect
                x="40"
                y="248"
                width="120"
                height="14"
                rx="7"
                fill="#000"
                opacity="0.06"
            />

            <animated.g
                transform={to(
                    [sheet.y, sheet.rotate, sheet.scale],
                    (y, rotate, scale) =>
                        `translate(100, 166) translate(0, ${y}) rotate(${rotate}) scale(${scale}) translate(-100, -166)`
                )}
            >
                {/* Основа листа */}
                <rect
                    x="32"
                    y="72"
                    width="136"
                    height="188"
                    rx="14"
                    fill="url(#wpSheetFill)"
                    filter="url(#wpDrop)"
                />
                {/* Диагональные полосы — только внутри листа */}
                <g clipPath="url(#wpSheetClip)">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <line
                            key={i}
                            x1={-30 + i * 26}
                            y1="55"
                            x2={90 + i * 26}
                            y2="285"
                            stroke="url(#wpStripe)"
                            strokeWidth="9"
                            strokeLinecap="round"
                            opacity={0.28}
                        />
                    ))}
                </g>
                {/* Лёгкая блик-полоска сверху */}
                <path
                    d="M44 88 H156"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.55"
                />
            </animated.g>
        </svg>
    )
}
