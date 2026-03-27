import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-navy-950/50 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-semibold">Andrew Perlman</p>
          <p className="text-slate-500 text-sm mt-1">
            Media executive · Entrepreneur · Investor
          </p>
        </div>

        <nav className="flex gap-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/press" className="hover:text-white transition-colors">Press</Link>
          <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/adperlman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent-light transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:andrew@gridlocal.com"
            className="text-slate-500 hover:text-accent-light transition-colors"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-slate-600 text-xs text-center">
            © {year} Andrew Perlman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
