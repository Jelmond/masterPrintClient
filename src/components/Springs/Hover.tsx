'use client'

import React from 'react'
import { animated, useSpring } from "@react-spring/web"
import { CSSProperties, ElementType, forwardRef, ReactNode, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
import { Tags } from './Spring';
import { isMobileDisabled, springsConfig } from './config';
import { useWindowWidth } from '@/hooks/useWindowSize';

type SpringProps = {
    children?: React.ReactNode;
    enabled?: boolean;
    from?: Record<string, any>;
    to?: Record<string, any>;
    style?: React.CSSProperties;
    config?: Record<string, any>;
    delayIn?: number;
    delayOut?: number;
    trigger?: React.RefObject<any>;
    disableOnMobile?: boolean;
    immediateOut?: boolean
} & React.HTMLAttributes<HTMLElement>;

export interface VarTextTagProps {
    tag?: Tags;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}
const AnimatedVarTextTag = forwardRef<HTMLElement, VarTextTagProps>(
    ({ tag = 'span', children, className, style, ...props }, outerRef) => {
        const ref = useRef<HTMLElement | null>(null);
        useImperativeHandle(outerRef, () => ref.current as HTMLElement)
        const Tag = animated[tag] as ElementType;

        return (
            <Tag ref={ref} className={className} style={style} {...props}>
                {children}
            </Tag>
        );
    }
);
AnimatedVarTextTag.displayName = 'AnimatedVarTextTag'

export const Hover = forwardRef<HTMLElement, SpringProps & { tag?: Tags }>(({
    tag: Tag = 'div',
    children,
    from = {},
    to = {},
    style,
    config = {},
    delayIn = 0,
    delayOut = 0,
    enabled = true,
    trigger,
    disableOnMobile = true,
    immediateOut = false,
    ...props
}, ref) => {
    const innerRef = useRef<HTMLElement>(null);
    const [hovered, setHovered] = useState(false);
    const width = useWindowWidth();

    useImperativeHandle(ref, () => innerRef.current as HTMLElement);

    useEffect(() => {
        if (isMobileDisabled(springsConfig.disableOnMobile.hover || disableOnMobile)) {
            return;
        }

        if (!trigger?.current) {
            return;
        }
        const handleMouseEnter = () => {
            setHovered(true);
        }
        const handleMouseLeave = () => {
            setHovered(false);
        }
        trigger.current.addEventListener('mouseenter', handleMouseEnter);
        trigger.current.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            trigger.current?.removeEventListener('mouseenter', handleMouseEnter);
            trigger.current?.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, [trigger, disableOnMobile, width]);

    const handleMouseEnter = () => {
        if (isMobileDisabled(springsConfig.disableOnMobile.hover || disableOnMobile)) {
            return;
        }
        if (trigger?.current) {
            return;
        }
        setHovered(true);
    }

    const handleMouseLeave = () => {
        if (isMobileDisabled(springsConfig.disableOnMobile.hover || disableOnMobile)) {
            return;
        }
        if (trigger?.current) {
            return;
        }
        setHovered(false);
    }

    const active = useMemo(() => {
        if (isMobileDisabled(springsConfig.disableOnMobile.hover || disableOnMobile)) {
            return false;
        }
        if (!enabled) {
            return false;
        }

        return hovered;
    }, [enabled, hovered, disableOnMobile, width]);

    const [springs, api] = useSpring(() => ({
        ...from,
        config,
    }));

    useEffect(() => {
        if (isMobileDisabled(springsConfig.disableOnMobile.hover || disableOnMobile)) {
            return;
        }
        if (active) {
            api.start({ ...to, config, delay: delayIn });
        } else {
            api.start({ ...from, config, delay: delayOut, immediate: immediateOut });
        }
    }, [active, api, to, from, config, delayIn, delayOut, immediateOut]);

    return (
        <AnimatedVarTextTag
            ref={innerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            tag={Tag}
            style={{ ...springs, ...style }}
            {...props}
        >
            {children}
        </AnimatedVarTextTag>
    );
});

Hover.displayName = 'Hover';