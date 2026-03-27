import Link from 'next/link'
import FadeInSection from '@/components/FadeInSection'

export default function Home() {
  return (
    <div className="animated-bg">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Media Executive · Entrepreneur · Investor
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6"
            style={{ animationDelay: '0.1s' }}
          >
            Andrew{' '}
            <span className="gradient-text">Perlman</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-400 font-light mb-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            At the intersection of{' '}
            <span className="text-white font-medium">media</span>
            {' '}and{' '}
            <span className="text-accent-light font-medium">AI</span>
          </p>

          {/* Brief intro */}
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Co-founder & CEO of Recurrent Ventures. Building the future of digital media through M&A, creator economy strategy, and AI-powered content infrastructure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/about"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
            >
              About Andrew
            </Link>
            <Link
              href="/press"
              className="px-8 py-3.5 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white font-medium rounded-lg transition-all hover:-translate-y-0.5"
            >
              Press & Media
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Highlights section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeInSection>
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-12 text-center">
            Career Highlights
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              number: '14',
              label: 'Acquisitions',
              desc: 'Led Recurrent Ventures through 14 strategic media acquisitions over 7 years, building one of digital publishing\'s most diverse portfolios.',
            },
            {
              number: '2018',
              label: 'Founded Recurrent',
              desc: 'Co-founded Recurrent Ventures in Miami with a thesis that great media brands could be built to run like creator networks.',
            },
            {
              number: 'AI-First',
              label: 'Content Infrastructure',
              desc: 'Using AI to catalog thousands of video clips for content remixing — pioneering how media companies adapt to the creator economy era.',
            },
          ].map((item, i) => (
            <FadeInSection key={item.label} delay={i * 100}>
              <div className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 card-hover cursor-default">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-4xl font-bold gradient-text mb-2">{item.number}</p>
                <p className="text-white font-semibold mb-3">{item.label}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="border-y border-white/5 bg-white/[0.02] py-20">
        <FadeInSection className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed">
            &ldquo;Great media brands could adopt the DNA of creator networks{' '}
            <span className="text-white font-medium">without relying on a single personality.</span>&rdquo;
          </blockquote>
          <p className="text-slate-500 mt-6 text-sm">— Andrew Perlman</p>
        </FadeInSection>
      </section>

      {/* Portfolio brands */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeInSection>
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 text-center">
            Portfolio
          </h2>
          <p className="text-slate-500 text-center mb-12 text-sm">Brands acquired & operated under Recurrent Ventures</p>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'The Drive', 'Donut Media', 'Popular Science', 'Outdoor Life',
              'Dwell', 'BobVila.com', 'Task & Purpose', 'Field & Stream',
            ].map((brand) => (
              <span
                key={brand}
                className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm font-medium hover:border-blue-500/40 hover:text-white transition-all cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* GridLocal CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <FadeInSection>
          <div className="relative rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-950/60 to-navy-900/60 p-10 md:p-16 text-center glow">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Currently Building</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">GridLocal</h3>
              <p className="text-slate-400 max-w-lg mx-auto mb-8">
                An AI-operated local media network reimagining how communities get their news — where every neighborhood has its own voice.
              </p>
              <a
                href="https://gridlocal.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
              >
                Visit gridlocal.io
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  )
}
