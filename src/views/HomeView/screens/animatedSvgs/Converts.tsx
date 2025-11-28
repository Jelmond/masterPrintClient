'use client'

import { useSpring, animated, to } from "@react-spring/web"
import { useState } from "react"

export const ConvertsSvg = () => {
    const [isHovered, setIsHovered] = useState(false)

    // Animation for first element - moves to the right and rotates
    const firstElementSpring = useSpring({
        x: isHovered ? 15 : 0,
        y: isHovered ? -10 : 0,
        rotate: isHovered ? -20 : 0,
        config: { tension: 300, friction: 20 }
    })

    // Animation for first element's flap (tongue) - opens slightly
    const firstFlapSpring = useSpring({
        rotate: isHovered ? 8 : 0,
        config: { tension: 300, friction: 20 }
    })

    // Animation for second element - moves to the left
    const secondElementSpring = useSpring({
        x: isHovered ? -15 : 0,
        y: isHovered ? 10 : 0,
        config: { tension: 300, friction: 20 }
    })

    return (
        <>
        <svg 
            width="491" 
            height="764" 
            viewBox="0 0 491 764" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: 'pointer' }}
        >
            {/* first one start */}
            <animated.g
                transform={to(
                    [firstElementSpring.x, firstElementSpring.y, firstElementSpring.rotate],
                    (x, y, rotate) => {
                        // Rotate around center of the element (approximately x=320, y=255)
                        const pivotX = 320
                        const pivotY = 255
                        return `translate(${pivotX}, ${pivotY}) translate(${x}, ${y}) rotate(${rotate}) translate(${-pivotX}, ${-pivotY})`
                    }
                )}
            >
                {/* Main body of the letter */}
                <path d="M212.066 141.813C209.676 135.638 211.629 128.657 216.872 124.636L316.428 48.2839C324.387 42.1803 336.053 45.472 339.681 54.845L428.367 283.94C430.932 290.567 428.482 298.049 422.498 301.861L318.927 367.842C310.916 372.946 300.172 369.409 296.738 360.537L212.066 141.813Z" fill="#BDBDBD"/>
                
                {/* Flap (tongue) - animated to open */}
                <animated.g
                    transform={to(
                        [firstFlapSpring.rotate],
                        (rotate) => {
                            // Rotate around the bottom edge of the flap (approximately y=149, x=214)
                            const pivotX = 214
                            const pivotY = 149
                            return `translate(${pivotX}, ${pivotY}) rotate(${rotate}) translate(${-pivotX}, ${-pivotY})`
                        }
                    )}
                >
                    <g>
                    <path d="M214.893 149.15C211.049 139.213 215.691 128.064 225.449 123.796L347.89 70.2569C358.211 65.7435 370.286 70.624 374.581 81.0449L455.626 277.696C459.546 287.206 455.594 298.086 446.489 302.85L323.312 367.307C312.693 372.864 299.53 367.906 295.201 356.718L214.893 149.15Z" fill="#8F8F8F"/>
                    </g>
                </animated.g>
            </animated.g>
            {/* first one end */}
            {/* second element - moves to the left */}
            <animated.g
                transform={to(
                    [secondElementSpring.x, secondElementSpring.y],
                    (x, y) => `translate(${x}, ${y})`
                )}
            >
                <g>
                <path d="M44.2663 189.26C43.1568 184.66 46.0507 180.044 50.7301 178.951L282.883 124.702C287.563 123.609 292.255 126.451 293.365 131.051L332.742 294.303C333.851 298.904 330.957 303.519 326.278 304.613L94.1249 358.861C89.4455 359.955 84.7527 357.112 83.6431 352.512L44.2663 189.26Z" fill="#DFDFDF"/>
                </g>
                <g>
                <path d="M62.8498 266.305C61.7403 261.705 64.6342 257.089 69.3136 255.996L301.467 201.747C306.146 200.653 310.839 203.496 311.948 208.096L332.742 294.303C333.851 298.903 330.957 303.519 326.278 304.612L94.125 358.861C89.4456 359.955 84.7528 357.112 83.6432 352.512L62.8498 266.305Z" fill="#DFDFDF"/>
                </g>
                <g>
                <path d="M220.248 235.361C218.407 234.161 217.1 232.318 216.59 230.205L198.047 153.325C196.937 148.725 199.831 144.11 204.51 143.016L282.883 124.702C287.562 123.609 292.255 126.451 293.365 131.051L331.772 290.284C333.594 297.839 325.066 303.69 318.485 299.4L220.248 235.361Z" fill="#E7E7E7"/>
                </g>
                <g>
                <path d="M157.986 253.206C159.072 251.324 159.393 249.109 158.886 247.005L139.585 166.987C138.476 162.387 133.783 159.544 129.103 160.637L50.7305 178.951C46.0511 180.045 43.1572 184.66 44.2667 189.26L83.5548 352.145C85.3801 359.712 95.6958 361.153 99.6006 354.386L157.986 253.206Z" fill="#F3F3F3"/>
                </g>
                <g>
                <path d="M48.8804 194.635C41.9873 190.808 43.452 180.652 51.1568 178.851L283.304 124.604C291.009 122.803 296.955 131.228 292.546 137.696L216.119 249.814L201.45 269.523C198.923 272.918 194.263 274.007 190.455 272.092L168.352 260.976L48.8804 194.635Z" fill="#EBEBEB"/>
                </g>
            </animated.g>
            <defs>
            <filter id="filter0_dddd_175_1397" x="-125.455" y="38.5723" width="615.59" height="725.023" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-13" dy="16"/>
            <feGaussianBlur stdDeviation="23"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-51" dy="65"/>
            <feGaussianBlur stdDeviation="41.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1397" result="effect2_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-116" dy="147"/>
            <feGaussianBlur stdDeviation="56"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1397" result="effect3_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-206" dy="261"/>
            <feGaussianBlur stdDeviation="66.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1397" result="effect4_dropShadow_175_1397"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1397" result="shape"/>
            </filter>
            <filter id="filter1_dddd_175_1397" x="-211.971" y="102.468" width="567.949" height="535.628" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-10" dy="11"/>
            <feGaussianBlur stdDeviation="16.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-40" dy="45"/>
            <feGaussianBlur stdDeviation="30"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1397" result="effect2_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-89" dy="102"/>
            <feGaussianBlur stdDeviation="41"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1397" result="effect3_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-159" dy="182"/>
            <feGaussianBlur stdDeviation="48.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1397" result="effect4_dropShadow_175_1397"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1397" result="shape"/>
            </filter>
            <filter id="filter2_dddd_175_1397" x="-130.387" y="-61.4873" width="488.366" height="438.583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-7" dy="-11"/>
            <feGaussianBlur stdDeviation="14.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-27" dy="-45"/>
            <feGaussianBlur stdDeviation="26"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1397" result="effect2_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-62" dy="-101"/>
            <feGaussianBlur stdDeviation="35.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1397" result="effect3_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-109" dy="-179"/>
            <feGaussianBlur stdDeviation="42"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1397" result="effect4_dropShadow_175_1397"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1397" result="shape"/>
            </filter>
            <filter id="filter3_dddd_175_1397" x="-27.1904" y="105.468" width="377.212" height="401.386" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-9" dy="8"/>
            <feGaussianBlur stdDeviation="13.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-37" dy="32"/>
            <feGaussianBlur stdDeviation="24.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1397" result="effect2_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-83" dy="72"/>
            <feGaussianBlur stdDeviation="33"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1397" result="effect3_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-147" dy="128"/>
            <feGaussianBlur stdDeviation="39"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1397" result="effect4_dropShadow_175_1397"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1397" result="shape"/>
            </filter>
            <filter id="filter4_dddd_175_1397" x="-110.97" y="146.403" width="280.091" height="328.325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-7" dy="4"/>
            <feGaussianBlur stdDeviation="8.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-26" dy="17"/>
            <feGaussianBlur stdDeviation="15.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1397" result="effect2_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-59" dy="37"/>
            <feGaussianBlur stdDeviation="21"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1397" result="effect3_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-105" dy="66"/>
            <feGaussianBlur stdDeviation="25"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1397" result="effect4_dropShadow_175_1397"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1397" result="shape"/>
            </filter>
            <filter id="filter5_dddd_175_1397" x="-211.545" y="102.356" width="528.595" height="449.675" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-10" dy="11"/>
            <feGaussianBlur stdDeviation="16.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-40" dy="45"/>
            <feGaussianBlur stdDeviation="30"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_175_1397" result="effect2_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-89" dy="102"/>
            <feGaussianBlur stdDeviation="41"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_175_1397" result="effect3_dropShadow_175_1397"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-159" dy="182"/>
            <feGaussianBlur stdDeviation="48.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
            <feBlend mode="normal" in2="effect3_dropShadow_175_1397" result="effect4_dropShadow_175_1397"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_175_1397" result="shape"/>
            </filter>
            </defs>
        </svg>
        </>
    )
}