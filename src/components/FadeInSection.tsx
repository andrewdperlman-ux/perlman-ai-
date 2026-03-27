'use client'

import { useEffect, useRef } from 'react'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FadeInSection({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('is-visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={clsx('fade-in-section', className)}>
      {children}
    </div>
  )
}
