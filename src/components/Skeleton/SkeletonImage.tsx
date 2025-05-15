'use client'

import Image, { ImageProps } from "next/image"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { SkeletonLoader } from "./SkeletonLoader"
import { Handle } from "../Springs/Handle"

interface SkeletonImageProps extends ImageProps {
    wrapperClassName?: string
    delay?: number
}

export const SkeletonImage = ({
    wrapperClassName,
    delay = 300,
    ...props
}: SkeletonImageProps) => {
    const [loaded, setLoaded] = useState(false)
    const cachedSrc = useRef(props.src)
    useEffect(() => {
        if (cachedSrc.current !== props.src) {
            setLoaded(false)
            cachedSrc.current = props.src
        }
    }, [props.src])

    return (
        <StyledSkeletonImage
            className={wrapperClassName}
        >
            <Handle>{!loaded && <SkeletonLoader />}</Handle>
            <Image
                {...props}
                onLoad={() => {
                    setTimeout(() => {
                        setLoaded(true)
                    }, delay)
                }}
            />
        </StyledSkeletonImage>
    )
}

const StyledSkeletonImage = styled.span`
    position: relative;
    overflow: hidden;
`
