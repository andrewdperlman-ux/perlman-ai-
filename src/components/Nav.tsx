'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/press', label: 'Press' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-white font-semibold text-lg tracking-tight hover:text-accent-light transition-colors"
        >
          Andrew Perlman
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'text-accent-light'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span
              className={clsx(
                'block h-0.5 bg-current transition-all origin-center',
                open && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={clsx(
                'block h-0.5 bg-current transition-all',
                open && 'opacity-0'
              )}
            />
            <span
              className={clsx(
                'block h-0.5 bg-current transition-all origin-center',
                open && '-rotate-45 -translate-y-2'
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-navy-950/95 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  'text-sm font-medium transition-colors py-1',
                  pathname === link.href
                    ? 'text-accent-light'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
