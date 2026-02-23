'use client'

import { rm, media } from "@/styles"
import { colors } from "@/styles/colors"
import { fontGeist } from "@/styles/fonts"
import { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { useLoadingStore } from "@/store/loadingStore"
import { animated, config, useSpring } from "@react-spring/web"
import { lerp } from "three/src/math/MathUtils.js"
import { useLoop } from "@/hooks/useLoop"
import Image from "next/image"

interface LoaderProps {
    setFullyLoaded: (value: boolean) => void
    progress: number
}

const StyledLoader = styled(animated.div)`
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${colors.black100};
    background-color: ${colors.white100};
    pointer-events: all;
    padding: ${rm(16)};
    gap: ${rm(25)};
`

const StyledProgressText = styled(animated.p)`
    font-size: ${rm(30)};
    ${fontGeist(400)};
    color: ${colors.black100};
    position: relative;
    z-index: 1;

    ${media.xsm`
        font-size: ${rm(22)};    
    `}
`

const StyledProgressBar = styled(animated.div)`
    width: ${rm(700)};
    height: ${rm(5)};
    background-color: rgba(0, 0, 0, .6);
    border-radius: ${rm(2)};
    position: relative;
    overflow: hidden;

    ${media.xsm`
        width: ${rm(336)};    
    `}

    .left{
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: rgba(0, 0, 0, 1.0);
        transform: translate(-100%, 0);
    }

    .right{
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background-color: rgba(0, 0, 0, 1.0);
        transform: translate(100%, 0);
    }
`

export const Loader = ({ setFullyLoaded, progress }: LoaderProps) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const progressRef = useRef(0)
    const setIsLoading = useLoadingStore(state => state.setIsLoading)
    const isLoadedRef = useRef(false)

    const barRef = useRef<HTMLDivElement | null>(null)
    const leftBarRef = useRef<HTMLDivElement | null>(null)
    const rightBarRef = useRef<HTMLDivElement | null>(null)
    const progressTextRef = useRef<HTMLParagraphElement | null>(null)

    const currentProgress = useRef<number>(0)
    const interpolatedProgress = useRef<number>(0)

    useEffect(() => {
        progressRef.current = progress
        currentProgress.current = progress
    }, [progress])

    useEffect(() => {
        isLoadedRef.current = isLoaded
    }, [isLoaded])

    useEffect(() => {
        if (isLoaded) {
            document.body.style.cursor = 'default'
            return
        }
        document.body.style.cursor = 'progress'
    }, [isLoaded])

    // Animation for loader disappearance
    const containerValues = useSpring({
        opacity: isLoaded ? 0 : 1,
        config: config.gentle,
        delay: isLoaded ? 400 : 0,
    })

    const barValues = useSpring({
        maxWidth: isLoaded ? 0 : 700,
        opacity: isLoaded ? 0 : 1,
        config: config.gentle
    })

    const textValues = useSpring({
        opacity: isLoaded ? 0 : 1,
        delay: isLoaded ? 300 : 0,
        config: config.gentle
    })

    // // Progress animation loop
    // useLoop(() => {
    //     if (isLoadedRef.current) return
    //     if (!progressTextRef.current || !leftBarRef.current || !rightBarRef.current) return
        
    //     interpolatedProgress.current = lerp(interpolatedProgress.current, currentProgress.current, 0.1)
    //     const progressValue = interpolatedProgress.current

    //     leftBarRef.current.style.transform = `translate(${-100 + progressValue}%, 0%)`
    //     rightBarRef.current.style.transform = `translate(${100 - progressValue}%, 0%)`
    //     if (progressTextRef.current) {
    //         progressTextRef.current.innerHTML = `${Math.round(progressValue)}%`
    //     }

    //     if (progressValue >= 99.99 && !isLoadedRef.current) {
    //         setIsLoaded(true)
    //         setTimeout(() => {
    //             setFullyLoaded(true)
    //             setIsLoading(false)
    //         }, 500)
    //     }
    // }, { framerate: 30 })

    useEffect(() => {
        setFullyLoaded(true)
        setIsLoading(false)
    }, [])

    return (
        <StyledLoader style={containerValues}>
            {/* <animated.div style={textValues}>
                <StyledProgressText ref={progressTextRef}>0%</StyledProgressText>
            </animated.div>
            <StyledProgressBar style={barValues} ref={barRef}>
                <div ref={leftBarRef} className="left"></div>
                <div ref={rightBarRef} className="right"></div>
            </StyledProgressBar> */}
            <animated.div style={textValues}>
                {/* <StyledProgressText>Рисуем дизайны</StyledProgressText> */}
                {/* <StyledProgressText>MPPShop</StyledProgressText> */}
                <Image src="/assets/logoSpring.svg" alt="MPPShop" width={600} height={160} />
            </animated.div>
        </StyledLoader>
    )
}