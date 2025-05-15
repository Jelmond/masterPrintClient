import { useInView } from "@react-spring/web"
import styled from "styled-components"

const StyledSkeletonLoader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-effect, rgba(255, 255, 255, 0.1));
    overflow: hidden;

    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 0));
        content: '';
    }

    &.-animate {
        &::after {
            animation: shimmer 1s infinite;
        }
    }

    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
`

interface SkeletonLoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SkeletonLoader = ({ className,...props }: SkeletonLoaderProps) => {
    const [ref, inView] = useInView()
    return <StyledSkeletonLoader ref={ref} className={`${className} ${inView ? '-animate' : ''}`} {...props}></StyledSkeletonLoader>
}
