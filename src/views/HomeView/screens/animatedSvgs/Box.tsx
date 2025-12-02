'use client'

import { useSpring, animated, to } from "@react-spring/web"
import { useState } from "react"

export const BoxSvg = () => {
    const [isHovered, setIsHovered] = useState(false)

    // Animation for the lid - rotates around the back edge (approximately x=231, y=273)
    const lidSpring = useSpring({
        rotate: isHovered ? -7 : 0,
        y: isHovered ? -60 : 0,
        config: { tension: 300, friction: 20 }
    })

    return (
        <>
            <svg 
                width="457" 
                height="626" 
                viewBox="0 0 457 626" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ cursor: 'pointer' }}
            >
            <g>
            <path d="M434.61 233.518C434.61 232.042 433.432 230.803 431.876 230.641L197.264 206.254C195.445 206.065 193.856 207.407 193.856 209.131V266.411C193.856 267.772 194.862 268.949 196.273 269.239L430.884 317.471C432.799 317.865 434.61 316.491 434.61 314.644V233.518Z" fill="url(#boxGradient1)"/>
            </g>
            <g>
            <path d="M197.005 268.449C197.446 268.277 197.93 268.238 198.411 268.334L427.171 314.041C429.947 314.595 430.722 318.724 428.281 319.951L265.399 401.788C264.851 402.064 264.218 402.121 263.6 401.952L32.6908 338.762C29.915 338.003 29.4099 333.804 31.9739 332.804L197.005 268.449Z" fill="url(#boxGradient2)"/>
            </g>
            <path d="M262.166 291.305C262.166 290.109 262.947 289.035 264.132 288.605L429.479 228.55C431.491 227.819 433.655 229.218 433.655 231.25V316.507C433.655 317.573 433.033 318.552 432.037 319.057L266.69 402.705C264.644 403.74 262.166 402.343 262.166 400.155V291.305Z" fill="url(#boxGradient3)"/>
            <path d="M23.3213 240.526C23.3213 239.148 24.3534 237.961 25.7879 237.689L193.046 206.04C194.947 205.68 196.722 207.05 196.722 208.877V266.193C196.722 267.393 195.935 268.469 194.745 268.897L27.4866 328.976C25.4762 329.699 23.3213 328.3 23.3213 326.272V240.526Z" fill="url(#boxGradient4)"/>
            <g>
            <path d="M266.464 289.516C266.464 288.115 265.398 286.915 263.935 286.668L26.4566 246.552C24.5735 246.234 22.8433 247.598 22.8433 249.401V335.004C22.8433 336.277 23.726 337.4 25.0179 337.772L262.496 406.077C264.47 406.644 266.464 405.253 266.464 403.309V289.516Z" fill="url(#boxGradient5)"/>
            </g>
            {/* Lid - animated group */}
            <animated.g
                transform={to(
                    [lidSpring.rotate, lidSpring.y],
                    (rotate, y) => {
                        // Rotate around the back edge (approximately x=231, y=273)
                        const pivotX = 231
                        const pivotY = 273
                        return `translate(${pivotX}, ${pivotY}) translate(0, ${y}) rotate(${rotate}) translate(${-pivotX}, ${-pivotY})`
                    }
                )}
            >
                <g>
                <path d="M264.689 273.759C264.689 272.401 263.687 271.225 262.279 270.933L24.8015 221.601C22.8847 221.203 21.0689 222.578 21.0689 224.427V258.648C21.0689 259.957 22.0012 261.103 23.3426 261.443L260.821 321.617C262.772 322.111 264.689 320.726 264.689 318.822V273.759Z" fill="url(#boxGradient6)"/>
                </g>
                <g>
                <path d="M264.211 274.489C264.211 273.314 264.966 272.255 266.121 271.81L437.678 205.772C439.699 204.994 441.911 206.394 441.911 208.451V239.06C441.911 240.155 441.255 241.156 440.217 241.647L268.66 322.719C266.617 323.685 264.211 322.285 264.211 320.133V274.489Z" fill="url(#boxGradient7)"/>
                </g>
                <path d="M209.797 176.409C210.085 176.34 210.386 176.324 210.688 176.361L439.233 204.494C442.287 204.87 443.083 209.551 440.263 210.554L263.416 273.431C262.997 273.58 262.542 273.612 262.089 273.524L23.5813 226.977C20.4915 226.374 20.0241 221.578 22.9865 220.873L209.797 176.409Z" fill="url(#boxGradient8)"/>
            </animated.g>
            <defs>
            {/* Gentle muted green gradients for the box - soft and calm */}
            <linearGradient id="boxGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B8C5B8" />
                <stop offset="100%" stopColor="#9FAF9F" />
            </linearGradient>
            <linearGradient id="boxGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B9A8B" />
                <stop offset="100%" stopColor="#6B7A6B" />
            </linearGradient>
            <linearGradient id="boxGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4D0C4" />
                <stop offset="100%" stopColor="#B0BFB0" />
            </linearGradient>
            <linearGradient id="boxGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D1DAD1" />
                <stop offset="100%" stopColor="#B8C5B8" />
            </linearGradient>
            <linearGradient id="boxGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9FAF9F" />
                <stop offset="100%" stopColor="#7F8F7F" />
            </linearGradient>
            <linearGradient id="boxGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7F8F7F" />
                <stop offset="100%" stopColor="#6B7A6B" />
            </linearGradient>
            <linearGradient id="boxGradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4D0C4" />
                <stop offset="100%" stopColor="#B0BFB0" />
            </linearGradient>
            <linearGradient id="boxGradient8" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E6E8E6" />
                <stop offset="50%" stopColor="#DCDEDC" />
                <stop offset="100%" stopColor="#D1DAD1" />
            </linearGradient>
            <filter id="filter0_dddd_175_1422" x="7.85596" y="187.236" width="438.754" height="262.303" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-8" dy="5"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-32" dy="18"/>
            <feGaussianBlur stdDeviation="18.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1422" result="effect2_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-72" dy="41"/>
            <feGaussianBlur stdDeviation="24.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1422" result="effect3_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-127" dy="73"/>
            <feGaussianBlur stdDeviation="29.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1422" result="effect4_dropShadow_175_1422"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1422" result="shape"/>
            </filter>
            <filter id="filter1_dddd_175_1422" x="-116.696" y="254.282" width="569.441" height="370.765" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-5" dy="10"/>
            <feGaussianBlur stdDeviation="12"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-20" dy="38"/>
            <feGaussianBlur stdDeviation="21.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1422" result="effect2_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-44" dy="86"/>
            <feGaussianBlur stdDeviation="29"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1422" result="effect3_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-78" dy="154"/>
            <feGaussianBlur stdDeviation="34.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1422" result="effect4_dropShadow_175_1422"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1422" result="shape"/>
            </filter>
            <filter id="filter2_dddd_175_1422" x="-163.157" y="227.506" width="441.621" height="310.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-8" dy="5"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-32" dy="18"/>
            <feGaussianBlur stdDeviation="18.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1422" result="effect2_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-72" dy="41"/>
            <feGaussianBlur stdDeviation="24.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1422" result="effect3_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-127" dy="73"/>
            <feGaussianBlur stdDeviation="29.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1422" result="effect4_dropShadow_175_1422"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1422" result="shape"/>
            </filter>
            <filter id="filter3_dddd_175_1422" x="-164.931" y="202.532" width="441.621" height="251.186" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-8" dy="5"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-32" dy="18"/>
            <feGaussianBlur stdDeviation="18.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1422" result="effect2_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-72" dy="41"/>
            <feGaussianBlur stdDeviation="24.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1422" result="effect3_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-127" dy="73"/>
            <feGaussianBlur stdDeviation="29.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1422" result="effect4_dropShadow_175_1422"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1422" result="shape"/>
            </filter>
            <filter id="filter4_dddd_175_1422" x="74.2114" y="189.554" width="382.7" height="309.477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-8" dy="7"/>
            <feGaussianBlur stdDeviation="11.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-31" dy="28"/>
            <feGaussianBlur stdDeviation="20.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1422" result="effect2_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-70" dy="62"/>
            <feGaussianBlur stdDeviation="28"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1422" result="effect3_dropShadow_175_1422"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-124" dy="110"/>
            <feGaussianBlur stdDeviation="33"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1422" result="effect4_dropShadow_175_1422"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1422" result="shape"/>
            </filter>
            </defs>
            </svg>

        </>
    )
}