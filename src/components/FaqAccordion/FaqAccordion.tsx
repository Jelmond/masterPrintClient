'use client'

import { animated, useSpring } from '@react-spring/web'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { media, rm } from '@/styles'
import { fontGeist } from '@/styles/fonts'

type FaqAccordionItemProps = {
    /** Стабильный id для aria (например faq-1) */
    itemId: string
    question: string
    children: ReactNode
    defaultOpen?: boolean
}

export function FaqAccordionItem({
    itemId,
    question,
    children,
    defaultOpen = false,
}: FaqAccordionItemProps) {
    const triggerId = `${itemId}-trigger`
    const panelId = `${itemId}-panel`

    const [open, setOpen] = useState(defaultOpen)
    const innerRef = useRef<HTMLDivElement>(null)
    const [fullHeight, setFullHeight] = useState(0)

    useEffect(() => {
        const el = innerRef.current
        if (!el) return
        const measure = () => setFullHeight(el.scrollHeight)
        measure()
        const ro = new ResizeObserver(measure)
        ro.observe(el)
        return () => ro.disconnect()
    }, [children])

    const spring = useSpring({
        height: open && fullHeight > 0 ? fullHeight : 0,
        config: open
            ? { tension: 320, friction: 34 }
            : { tension: 380, friction: 38 },
    })

    return (
        <Root data-open={open}>
            <Trigger
                type="button"
                id={triggerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
            >
                <TriggerLabel>{question}</TriggerLabel>
                <ChevronWrap aria-hidden $open={open}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </ChevronWrap>
            </Trigger>
            <animated.div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!open}
                style={{
                    height: spring.height,
                    overflow: 'hidden',
                }}
            >
                <MeasureWrap ref={innerRef}>
                    <PanelBody>{children}</PanelBody>
                </MeasureWrap>
            </animated.div>
        </Root>
    )
}

const Root = styled.div`
    background: #ffffff;
    border-radius: ${rm(14)};
    border: 1px solid rgba(28, 28, 28, 0.08);
    box-shadow: 0 ${rm(2)} ${rm(12)} rgba(28, 28, 28, 0.06);
    overflow: hidden;
    transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease;

    &[data-open='true'] {
        border-color: rgba(28, 28, 28, 0.12);
        box-shadow: 0 ${rm(8)} ${rm(28)} rgba(28, 28, 28, 0.1);
    }

    &:hover {
        border-color: rgba(28, 28, 28, 0.11);
        box-shadow: 0 ${rm(6)} ${rm(22)} rgba(28, 28, 28, 0.08);
    }

    ${media.xsm`
        border-radius: ${rm(12)};
    `}
`

const Trigger = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${rm(16)};
    padding: ${rm(18)} ${rm(22)};
    margin: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;
    color: #111111;
    transition: background 0.25s ease;

    ${media.xsm`
        padding: ${rm(14)} ${rm(16)};
        gap: ${rm(12)};
    `}

    &:hover {
        background: rgba(28, 28, 28, 0.03);
    }

    &:focus-visible {
        outline: 2px solid #1c1c1c;
        outline-offset: -2px;
        border-radius: ${rm(12)};
        position: relative;
        z-index: 1;
    }
`

const TriggerLabel = styled.span`
    ${fontGeist(600)};
    font-size: ${rm(19)};
    line-height: 1.35;
    letter-spacing: -0.01em;

    ${media.md`
        font-size: ${rm(17)};
    `}

    ${media.xsm`
        font-size: ${rm(16)};
    `}
`

const ChevronWrap = styled.span<{ $open: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${rm(40)};
    height: ${rm(40)};
    border-radius: 50%;
    background: rgba(28, 28, 28, 0.05);
    color: #1c1c1c;
    transition: transform 0.4s cubic-bezier(0.34, 1.2, 0.64, 1), background 0.25s ease;
    transform: rotate(${(p) => (p.$open ? 180 : 0)}deg);

    ${Trigger}:hover & {
        background: rgba(28, 28, 28, 0.08);
    }

    ${media.xsm`
        width: ${rm(36)};
        height: ${rm(36)};
    `}
`

const MeasureWrap = styled.div`
    overflow: hidden;
`

const PanelBody = styled.div`
    padding: 0 ${rm(22)} ${rm(22)};
    display: flex;
    flex-direction: column;
    gap: ${rm(12)};

    ${media.xsm`
        padding: 0 ${rm(16)} ${rm(18)};
        gap: ${rm(10)};
    `}
`
