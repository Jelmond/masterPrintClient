'use client'

import { useSpring, animated, to } from "@react-spring/web"
import { useState } from "react"

export const CardsSvg = () => {
    const [isHovered, setIsHovered] = useState(false)

    // Animation for the front (white) tag
    const frontTagSpring = useSpring({
        x: isHovered ? -8 : 0,
        y: isHovered ? -12 : 0,
        rotate: isHovered ? -5 : 0,
        config: { tension: 300, friction: 20 }
    })

    // Animation for the middle (light grey) tag
    const middleTagSpring = useSpring({
        x: isHovered ? 4 : 0,
        y: isHovered ? -6 : 0,
        rotate: isHovered ? -2 : 0,
        config: { tension: 300, friction: 20 }
    })

    // Animation for the back (medium grey) tag
    const backTagSpring = useSpring({
        x: isHovered ? 12 : 0,
        y: isHovered ? 8 : 0,
        rotate: isHovered ? 4 : 0,
        config: { tension: 300, friction: 20 }
    })

    // Animation for the loop - only scale, position follows front tag
    const loopSpring = useSpring({
        scale: isHovered ? 1.1 : 1,
        config: { tension: 300, friction: 20 }
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
            style={{ cursor: 'pointer' }}
        >
            {/* Back tag (medium grey) */}
            <animated.g
                transform={to(
                    [backTagSpring.x, backTagSpring.y, backTagSpring.rotate],
                    (x, y, rotate) => `translate(100, 160) translate(${x}, ${y}) rotate(${rotate}) translate(-100, -160)`
                )}
            >
                <rect
                    x="60"
                    y="100"
                    width="80"
                    height="120"
                    rx="8"
                    fill="#9E9E9E"
                    filter="url(#shadow)"
                />
            </animated.g>

            {/* Middle tag (light grey) */}
            <animated.g
                transform={to(
                    [middleTagSpring.x, middleTagSpring.y, middleTagSpring.rotate],
                    (x, y, rotate) => `translate(92.5, 152.5) translate(${x}, ${y}) rotate(${rotate}) translate(-92.5, -152.5)`
                )}
            >
                <rect
                    x="55"
                    y="95"
                    width="75"
                    height="115"
                    rx="8"
                    fill="#D3D3D3"
                    filter="url(#shadow)"
                />
            </animated.g>

            {/* Front tag (white) */}
            <animated.g
                transform={to(
                    [frontTagSpring.x, frontTagSpring.y, frontTagSpring.rotate],
                    (x, y, rotate) => `translate(85, 145) translate(${x}, ${y}) rotate(${rotate}) translate(-85, -145)`
                )}
            >
                {/* Loop right part - behind the tag (right side of loop) */}
                <animated.g
                    transform={to(
                        [loopSpring.scale],
                        (scale) => `translate(85, 105) scale(${scale}) translate(-85, -105)`
                    )}
                >
                    <path
                        d="M 85 30 
                           Q 115 50, 85 105"
                        stroke="url(#loopGradient)"
                        strokeWidth="3.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#shadow)"
                    />
                </animated.g>
                
                <rect
                    x="50"
                    y="90"
                    width="70"
                    height="110"
                    rx="8"
                    fill="#FFFFFF"
                    filter="url(#shadow)"
                />
                {/* Eyelet hole */}
                <circle
                    cx="85"
                    cy="105"
                    r="3"
                    fill="#9E9E9E"
                />
                
                {/* Loop left part - in front of the tag (left side of loop) */}
                <animated.g
                    transform={to(
                        [loopSpring.scale],
                        (scale) => `translate(85, 105) scale(${scale}) translate(-85, -105)`
                    )}
                >
                    <path
                        d="M 85 105 
                           Q 55 50, 85 30"
                        stroke="url(#loopGradient)"
                        strokeWidth="3.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#shadow)"
                    />
                </animated.g>
            </animated.g>

            {/* Shadow filter and gradients */}
            <defs>
                <linearGradient id="loopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D0D0D0" />
                    <stop offset="50%" stopColor="#B8B8B8" />
                    <stop offset="100%" stopColor="#A0A0A0" />
                </linearGradient>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                    <feOffset dx="1" dy="2" result="offsetblur" />
                    <feColorMatrix
                        in="offsetblur"
                        type="matrix"
                        values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.3 0"
                    />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    )
}