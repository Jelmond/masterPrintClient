'use client'

import { animated, useSpring } from "@react-spring/web"
import { useAssetsLoader } from "@/layouts/AssetsLoaderLayout/AssetsLoaderLayout";
import { CSSProperties, ElementType, forwardRef, ReactNode, useEffect, useImperativeHandle, useMemo, useRef } from "react"
import { isMobileDisabled, springsConfig } from './config';
import { useWindowWidth } from "@/hooks/useWindowSize";

export type Tags = 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 
    'section' | 'article' | 'nav' | 'aside' | 'header' | 'footer' | 'main' | 
    'form' | 'input' | 'button' | 'a' | 'img' | 'ul' | 'ol' | 'li' | 
    'table' | 'tr' | 'td' | 'th' | 'thead' | 'tbody' | 'label' | 'select' | 'option' | 'textarea' |
    'canvas' | 'svg' | 'path' | 'circle' | 'rect' | 'polygon' | 'video' | 'audio' | 'source' |
    'iframe' | 'figure' | 'figcaption' | 'picture' | 'time' | 'address' | 'blockquote' | 'code' |
    'pre' | 'details' | 'summary' | 'dialog' | 'menu' | 'menuitem' | 'progress' | 'meter' |
    'fieldset' | 'legend' | 'datalist' | 'optgroup' | 'output' | 'template' | 'slot';

type SpringProps = {
    children?: React.ReactNode;
    enabled?: boolean;
    from?: Record<string, any>;
    to?: Record<string, any>;
    mode?: 'always' | 'once' | 'forward';
    style?: React.CSSProperties;
    config?: Record<string, any>;
    delayIn?: number;
    delayOut?: number;
    disableOnMobile?: boolean
    immediateOut?: boolean
} & React.HTMLAttributes<HTMLElement>;

export interface VarTextTagProps {
    tag?: keyof Tags;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}
const AnimatedVarTextTag = forwardRef<HTMLElement, VarTextTagProps>(
    ({ tag = 'span', children, className, style, ...props }, outerRef) => {
        const ref = useRef<HTMLElement | null>(null);
        useImperativeHandle(outerRef, () => ref.current as HTMLElement)
        // @ts-expect-error
        const Tag = animated[tag] as ElementType;

        return (
            <Tag ref={ref} className={className} style={style} {...props}>
                {children}
            </Tag>
        );
    }
);
AnimatedVarTextTag.displayName = 'AnimatedVarTextTag'


export const Spring = forwardRef<HTMLElement, SpringProps & { tag?: Tags }>(({
    tag: Tag = 'div',
    children,
    from = {},
    to = {},
    mode = 'always',
    style,
    config = {},
    delayIn = 0,
    delayOut = 0,
    enabled = true,
    disableOnMobile = false,
    immediateOut = false,
    ...props
}, ref) => {
    const innerRef = useRef<HTMLElement>(null);
    const { fullyLoaded } = useAssetsLoader();
    const isAnimated = useRef(false);
    const scrolledDown = useRef(false);
    const width = useWindowWidth();

    useImperativeHandle(ref, () => innerRef.current as HTMLElement);

    useEffect(() => {
        if (isMobileDisabled(springsConfig.disableOnMobile.spring || disableOnMobile)) {
            return;
        }
        if (mode === 'forward') {
            const handleScroll = () => {
                if (innerRef.current) {
                    const rect = innerRef.current.getBoundingClientRect();
                    if (rect.top > 0) {
                        scrolledDown.current = false;
                    } else {
                        scrolledDown.current = true;
                    }
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [mode, disableOnMobile, width]);

    const active = useMemo(() => {
        if (isMobileDisabled(springsConfig.disableOnMobile.spring || disableOnMobile)) {
            return false;
        }

        if (!enabled) {
            return false;
        }

        if (mode === 'once' && isAnimated.current) {
            return true;
        }

        if (mode === 'forward' && scrolledDown.current) {
            return true;
        }

        if (fullyLoaded) {
            isAnimated.current = true;
        }

        return fullyLoaded;
    }, [fullyLoaded, mode, enabled, disableOnMobile, width]);

    const [springs, api] = useSpring(() => ({
        ...from,
        config,
    }));

    useEffect(() => {
        if (isMobileDisabled(springsConfig.disableOnMobile.spring || disableOnMobile)) {
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
            tag={Tag as any}
            ref={innerRef}
            style={{ ...springs, ...style }}
            {...props}
        >
            {children}
        </AnimatedVarTextTag>
    );
});

Spring.displayName = 'Spring';