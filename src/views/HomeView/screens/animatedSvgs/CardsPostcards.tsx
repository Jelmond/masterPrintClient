'use client'

import { useSpring, animated, to } from "@react-spring/web"
import { useState } from "react"

export const CardsPostcardsSvg = () => {
    const [isHovered, setIsHovered] = useState(false)

    // Animation for the greeting card cover - opens downward instead of upward
    const cardCoverSpring = useSpring({
        rotate: isHovered ? 15 : 0,
        y: isHovered ? 20 : 0,
        config: { tension: 280, friction: 25 }
    })

    // Animation for the postcard - moves slightly to the right
    const postcardSpring = useSpring({
        x: isHovered ? 15 : 0,
        y: isHovered ? 10 : 0,
        rotate: isHovered ? -5 : 0,
        scale: isHovered ? 1.05 : 1,
        config: { tension: 300, friction: 20 }
    })

    // Animation for decorative elements inside the card
    const decorationSpring = useSpring({
        scale: isHovered ? 1.15 : 1,
        opacity: isHovered ? 1 : 0.7,
        config: { tension: 300, friction: 20 }
    })

    // Animation for postcard greeting text - appears on hover
    const postcardTextSpring = useSpring({
        opacity: isHovered ? 1 : 0,
        y: isHovered ? 0 : 10,
        config: { tension: 300, friction: 25 }
    })

    // Animation for small card - moves slightly
    const smallCardSpring = useSpring({
        x: isHovered ? -8 : 0,
        y: isHovered ? 8 : 0,
        rotate: isHovered ? -2 : 0,
        scale: isHovered ? 1.05 : 1,
        config: { tension: 300, friction: 20 }
    })

    // Animation for card base - slight lift
    const cardBaseSpring = useSpring({
        y: isHovered ? -5 : 0,
        scale: isHovered ? 1.02 : 1,
        config: { tension: 300, friction: 20 }
    })

    return (
        <svg 
            width="500" 
            height="600" 
            viewBox="0 0 500 600" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: 'pointer', overflow: 'visible', transform: 'translateY(-45px)' }}
        >
            {/* Small decorative card */}
            <animated.g
                transform={to(
                    [smallCardSpring.x, smallCardSpring.y, smallCardSpring.rotate, smallCardSpring.scale],
                    (x, y, rotate, scale) => {
                        const pivotX = 80
                        const pivotY = 420
                        return `translate(${pivotX}, ${pivotY}) scale(${scale}) translate(${x}, ${y}) rotate(${rotate}) translate(${-pivotX}, ${-pivotY})`
                    }
                )}
            >
                <rect x="50" y="380" width="60" height="80" rx="4" fill="url(#smallCardGradient)" stroke="#D4C4C9" strokeWidth="1.5" opacity="0.8"/>
                <line x1="60" y1="410" x2="100" y2="410" stroke="#C4A5B0" strokeWidth="0.8" opacity="0.4"/>
                <line x1="60" y1="425" x2="100" y2="425" stroke="#C4A5B0" strokeWidth="0.8" opacity="0.4"/>
            </animated.g>

            {/* Postcard - behind the greeting card */}
            <animated.g
                transform={to(
                    [postcardSpring.x, postcardSpring.y, postcardSpring.rotate, postcardSpring.scale],
                    (x, y, rotate, scale) => {
                        const pivotX = 360
                        const pivotY = 420
                        return `translate(${pivotX}, ${pivotY}) scale(${scale}) translate(${x}, ${y}) rotate(${rotate}) translate(${-pivotX}, ${-pivotY})`
                    }
                )}
            >
                {/* Postcard base */}
                <rect x="300" y="340" width="120" height="160" rx="6" fill="url(#postcardGradient1)" stroke="url(#postcardGradient2)" strokeWidth="2"/>
                
                {/* Address lines */}
                <line x1="310" y1="360" x2="410" y2="360" stroke="#C4A5B0" strokeWidth="1" strokeDasharray="2 2" opacity="0.4"/>
                
                {/* Stamp */}
                <rect x="385" y="350" width="30" height="30" rx="3" fill="url(#stampGradient)" stroke="#A88A95" strokeWidth="1.5"/>
                <circle cx="400" cy="365" r="6" fill="#FFFFFF"/>
                <text x="400" y="369" fontSize="8" fill="#A88A95" textAnchor="middle" fontWeight="bold">★</text>
                
                {/* Greeting text on postcard - appears on hover */}
                <animated.g
                    style={{
                        opacity: postcardTextSpring.opacity,
                        transform: to([postcardTextSpring.y], (y) => `translateY(${y})`)
                    }}
                >
                    <text x="360" y="385" fontSize="11" fill="#8B6F7A" textAnchor="middle" fontFamily="serif" fontWeight="500">Дорогой друг!</text>
                    <text x="360" y="405" fontSize="10" fill="#A88A95" textAnchor="middle" fontFamily="serif" fontStyle="italic">Желаю тебе</text>
                    <text x="360" y="425" fontSize="11" fill="#8B6F7A" textAnchor="middle" fontFamily="serif" fontWeight="500">счастья и радости!</text>
                    <text x="360" y="445" fontSize="9" fill="#B8A5AC" textAnchor="middle" fontFamily="serif">С любовью ❤️</text>
                </animated.g>
                
                {/* Decorative lines under text - also animated */}
                <animated.g
                    style={{
                        opacity: postcardTextSpring.opacity
                    }}
                >
                    <line x1="320" y1="395" x2="400" y2="395" stroke="#D4C4C9" strokeWidth="0.8" opacity="0.3"/>
                    <line x1="320" y1="455" x2="400" y2="455" stroke="#D4C4C9" strokeWidth="0.8" opacity="0.3"/>
                </animated.g>
            </animated.g>

            {/* Greeting Card Base (always visible) */}
            <animated.g
                transform={to(
                    [cardBaseSpring.y, cardBaseSpring.scale],
                    (y, scale) => {
                        const pivotX = 220
                        const pivotY = 390
                        return `translate(${pivotX}, ${pivotY}) scale(${scale}) translate(0, ${y}) translate(${-pivotX}, ${-pivotY})`
                    }
                )}
            >
                <rect x="120" y="250" width="200" height="280" rx="10" fill="url(#cardBaseGradient)" stroke="url(#cardBorderGradient)" strokeWidth="2"/>
                
                {/* Card Interior (visible when open) */}
                <animated.g
                    style={{
                        opacity: to([cardCoverSpring.rotate], (rotate) => Math.max(0, Math.min(1, Math.abs(rotate) / 15)))
                    }}
                >
                    {/* Decorative border inside */}
                    <rect x="130" y="260" width="180" height="260" rx="6" fill="none" stroke="url(#heartGradient)" strokeWidth="2" strokeDasharray="6 4" opacity="0.8"/>
                    
                    {/* Heart decoration */}
                    <animated.g
                        transform={to(
                            [decorationSpring.scale],
                            (scale) => {
                                const pivotX = 220
                                const pivotY = 320
                                return `translate(${pivotX}, ${pivotY}) scale(${scale}) translate(${-pivotX}, ${-pivotY})`
                            }
                        )}
                        style={{
                            opacity: decorationSpring.opacity
                        }}
                    >
                        <path d="M220 290 C220 275, 205 265, 220 250 C235 265, 220 275, 220 290 Z" fill="url(#heartGradient)" opacity="0.9"/>
                        <path d="M220 290 C220 275, 205 265, 220 250" fill="none" stroke="#A88A95" strokeWidth="2.5" strokeLinecap="round"/>
                    </animated.g>
                    
                    {/* Greeting text */}
                    <text x="220" y="360" fontSize="18" fill="#666" textAnchor="middle" fontFamily="serif" fontWeight="500">С Днём</text>
                    <text x="220" y="385" fontSize="18" fill="#666" textAnchor="middle" fontFamily="serif" fontWeight="500">Рождения!</text>
                    <text x="220" y="410" fontSize="14" fill="#999" textAnchor="middle" fontFamily="serif" fontStyle="italic">Happy Birthday!</text>
                    
                    {/* Decorative corner flourishes */}
                    <circle cx="140" cy="280" r="4" fill="url(#heartGradient)" opacity="0.8"/>
                    <circle cx="300" cy="280" r="4" fill="url(#heartGradient)" opacity="0.8"/>
                    <circle cx="140" cy="510" r="4" fill="url(#heartGradient)" opacity="0.8"/>
                    <circle cx="300" cy="510" r="4" fill="url(#heartGradient)" opacity="0.8"/>
                </animated.g>
            </animated.g>

            {/* Card Cover (opens downward on hover) */}
            <animated.g
                transform={to(
                    [cardCoverSpring.rotate, cardCoverSpring.y],
                    (rotate, y) => {
                        // Pivot point at the top of the card
                        const pivotX = 220
                        const pivotY = 250
                        return `translate(${pivotX}, ${pivotY}) translate(0, ${y}) rotate(${rotate}) translate(${-pivotX}, ${-pivotY})`
                    }
                )}
            >
                <rect x="120" y="250" width="200" height="280" rx="10" fill="url(#cardCoverGradient)" stroke="url(#cardBorderGradient)" strokeWidth="2"/>
                
                {/* Cover design */}
                <rect x="130" y="260" width="180" height="260" rx="6" fill="none" stroke="url(#heartGradient)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
                
                {/* Cover title/design */}
                <text x="220" y="380" fontSize="24" fill="url(#textGradient)" textAnchor="middle" fontFamily="serif" fontWeight="600" opacity="0.7">Открытка</text>
                <text x="220" y="410" fontSize="16" fill="url(#textGradient)" textAnchor="middle" fontFamily="serif" opacity="0.6">Greeting Card</text>
                
                {/* Decorative elements on cover */}
                <circle cx="150" cy="300" r="3" fill="url(#heartGradient)" opacity="0.6"/>
                <circle cx="290" cy="300" r="3" fill="url(#heartGradient)" opacity="0.6"/>
                <circle cx="150" cy="480" r="3" fill="url(#heartGradient)" opacity="0.6"/>
                <circle cx="290" cy="480" r="3" fill="url(#heartGradient)" opacity="0.6"/>
            </animated.g>

            {/* Decorative sparkles around the cards */}
            <animated.g
                transform={to(
                    [decorationSpring.scale],
                    (scale) => `scale(${scale})`
                )}
            >
                <circle cx="100" cy="200" r="2.5" fill="url(#sparkleGradient)" opacity={isHovered ? 0.9 : 0.4}>
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="250" cy="180" r="2" fill="url(#sparkleGradient)" opacity={isHovered ? 0.9 : 0.4}>
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="380" cy="220" r="2.5" fill="url(#sparkleGradient)" opacity={isHovered ? 0.9 : 0.4}>
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="320" cy="300" r="2" fill="url(#sparkleGradient)" opacity={isHovered ? 0.9 : 0.4}>
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite"/>
                </circle>
            </animated.g>
            
            {/* Soft dusty rose/pink gradients - muted and chill */}
            <defs>
                <linearGradient id="postcardGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5F0F2" />
                    <stop offset="100%" stopColor="#E8E0E3" />
                </linearGradient>
                <linearGradient id="postcardGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4C4C9" />
                    <stop offset="100%" stopColor="#B8A5AC" />
                </linearGradient>
                <linearGradient id="stampGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C4A5B0" />
                    <stop offset="100%" stopColor="#A88A95" />
                </linearGradient>
                <linearGradient id="smallCardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5F0F2" />
                    <stop offset="100%" stopColor="#E8E0E3" />
                </linearGradient>
                <linearGradient id="cardBaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#F5F0F2" />
                    <stop offset="100%" stopColor="#E8E0E3" />
                </linearGradient>
                <linearGradient id="cardCoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#F5F0F2" />
                    <stop offset="100%" stopColor="#E8E0E3" />
                </linearGradient>
                <linearGradient id="cardBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4C4C9" />
                    <stop offset="100%" stopColor="#B8A5AC" />
                </linearGradient>
                <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4C4C9" />
                    <stop offset="50%" stopColor="#C4A5B0" />
                    <stop offset="100%" stopColor="#B8A5AC" />
                </linearGradient>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A88A95" />
                    <stop offset="100%" stopColor="#8B6F7A" />
                </linearGradient>
                <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4C4C9" />
                    <stop offset="50%" stopColor="#C4A5B0" />
                    <stop offset="100%" stopColor="#B8A5AC" />
                </linearGradient>
            </defs>
        </svg>
    )
}
