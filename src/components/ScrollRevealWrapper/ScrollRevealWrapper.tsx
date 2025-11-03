'use client'

import { useEffect, useRef } from 'react'
import { useScroll } from '@/layouts/ScrollLayout/useScroll'

type ScrollRevealWrapperProps = {
  children: React.ReactNode
}

export const ScrollRevealWrapper = ({ children }: ScrollRevealWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const translateYRef = useRef(0)
  const lenis = useScroll((state) => state.lenis)

  useEffect(() => {
    if (!lenis || !wrapperRef.current || !containerRef.current) return

    const wrapper = wrapperRef.current
    const container = containerRef.current
    const elTop = wrapper.offsetTop
    const viewportHeight = window.innerHeight

    const update = ({ scroll }: { scroll: number }) => {
      const distanceFromTop = scroll - elTop

      if (distanceFromTop >= 0 && distanceFromTop <= viewportHeight) {
        translateYRef.current = distanceFromTop
      } else if (distanceFromTop < 0) {
        translateYRef.current = 0
      } else {
        translateYRef.current = viewportHeight
      }

      container.style.transform = `translate3d(0, ${translateYRef.current}px, 0)`
    }

    lenis.on('scroll', update)
    update({ scroll: lenis.scroll })

    return () => {
      lenis.off('scroll', update)
    }
  }, [lenis])

  return (
    <>
      <div style={{ marginTop: '100vh' }} />
      <div
        ref={wrapperRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          marginTop: '-100vh',
          backgroundColor: 'white',
          zIndex: 1,
        }}
      >
        <div
          ref={containerRef}
          style={{
            height: '100vh',
            position: 'relative',
            willChange: 'transform',
          }}
        >
          {children}
        </div>
      </div>
    </>
  )
}
