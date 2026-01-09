import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

type RevealOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function useScrollObserver<T extends HTMLElement = HTMLElement>({
  threshold = 0,
  rootMargin = '0px 0px -25% 0px',
  once = true,
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, visible }
}

/* ============================================================================
 * use in cards, listas, etc
 * ========================================================================== */

export function useRevealElement<T extends HTMLElement = HTMLElement>(
  className?: string,
  options?: RevealOptions
) {
  const { ref, visible } = useScrollObserver<T>(options)

  const revealClass = cn(
    'transition-all duration-700 ease-out will-change-transform',
    visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
    className
  )

  return { ref, revealClass }
}
