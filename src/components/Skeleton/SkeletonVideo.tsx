import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useInView } from '@react-spring/web';
import styled from 'styled-components';
import { SkeletonLoader } from './SkeletonLoader';
import { Handle } from '../Springs/Handle';

interface Props {
    src: string
    width?: number | string
    height?: number | string
    className?: string
    poster: string,
    strategy?: 'load' | 'lazy'
    rootMargin?: string
    enableLoader?: boolean
    enableLoad?: boolean
    style?: any
}

const StyledPlayer = styled.span`
    position: relative;
    overflow: hidden;

    video {
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const SkeletonVideo = forwardRef(({ src: _src, width, strategy = 'load', height, className, poster: _poster, rootMargin = '1000px 1000px', enableLoader = true, enableLoad = true, ...props }: Props, outerRef: any) => {
    const videoRef = useRef<any>(null);
    const [loaded, load] = useState(false)
    const [src, setSrc] = useState('')
    const [poster, setPoster] = useState('')
    const [ref, inView] = useInView({ rootMargin })
    useImperativeHandle(outerRef, () => videoRef.current)

    useEffect(() => {
        setSrc('')
        load(false)
    }, [_src])

    useEffect(() => {
        setPoster('')
    }, [_poster])

    useEffect(() => {
        if (strategy === 'load') {
            setSrc(_src)
            setPoster(_poster)
            return
        }
        if (inView && strategy === 'lazy' && !poster && _poster) {
            setPoster(_poster)
        }
        if (inView && strategy === 'lazy' && !src && enableLoad) {
            setSrc(_src)
            setTimeout(() => { videoRef.current?.play() }, 10)
            return
        }
    }, [strategy, inView, enableLoad, _src, _poster])

    useEffect(() => {
        if (inView) {
            if (videoRef.current.paused) {
                videoRef.current?.play()
            }
        } else {
            if (!videoRef.current.paused) {
                videoRef.current.pause()
            }
        }
    }, [inView, src])

    return (
        <StyledPlayer ref={ref} className={className} style={{ width: width, height: height }} {...props}>
            <video onLoad={() => load(true)} onCanPlayThrough={() => load(true)} poster={poster} ref={videoRef} src={src} playsInline loop muted />
            <Handle>{!loaded && enableLoader ? <SkeletonLoader /> : null}</Handle>
        </StyledPlayer>
    );
});

SkeletonVideo.displayName = 'SkeletonVideo'

export default SkeletonVideo;