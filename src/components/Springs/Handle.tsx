import { memo, useEffect, useRef, useState } from 'react'
import { useSpring, SpringConfig, config as _config } from '@react-spring/web'
import { AnimatedVarTextTag } from './Inview'
import { Tags } from './Spring'

interface SmoothRerenderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    from?: Record<string, any>
    to?: Record<string, any>
    delayIn?: number
    delayOut?: number
    config?: SpringConfig
    enabled?: boolean
    tag?: Tags
}

export const Handle = memo(({
    children,
    from = { opacity: 0 },
    to = { opacity: 1 },
    delayIn = 0,
    delayOut = 0,
    config = _config.gentle,
    enabled = true,
    tag = 'div',
    ...props
}: SmoothRerenderProps) => {
    const [cachedChildren, setCachedChildren] = useState<React.ReactNode>(children)
    const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const [rerender, setRerender] = useState(0)
    const isHidden = useRef(false)
    const childrenRef = useRef<React.ReactNode>(children)
    useEffect(() => {
        childrenRef.current = children
    }, [children])

    const [springs, api] = useSpring(() => ({
        ...to,
        config,
    }))

    useEffect(() => {
        if (!enabled) {
            api.start({
                ...from,
                config,
                onRest: () => {
                    setCachedChildren(childrenRef.current)
                    isHidden.current = true
                    setRerender(state => state + 1)
                }
            })
        }
    }, [enabled])

    useEffect(() => {
        if (!enabled) return
        // Don't animate if children haven't changed
        if (children === cachedChildren && !isHidden.current) return

        // Clear any pending animations
        if (isHidden.current) {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current)
            }
            animateIn()
            return
        }

        // Start fade out animation
        isHidden.current = false
        api.start({
            ...from,
            delay: delayOut,
            config,
            onRest: () => animateIn()
        })


        function animateIn() {
            setCachedChildren(childrenRef.current)
            isHidden.current = true
            // Start fade in animation
            animationTimeoutRef.current = setTimeout(() => {
                isHidden.current = false
                api.start({
                    ...to,
                    config,
                    onRest: () => setRerender(state => state + 1)
                })
            }, delayIn)
        }
    }, [children, enabled, rerender])

    // Cleanup timeouts
    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current)
            }
        }
    }, [])

    return (
        <AnimatedVarTextTag tag='div' style={{ ...springs }} {...props}>
            {cachedChildren}
        </AnimatedVarTextTag>
    )
})

Handle.displayName = 'Handle'