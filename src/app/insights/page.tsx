import FadeInSection from '@/components/FadeInSection'
import Link from 'next/link'

export const metadata = {
  title: 'Insights — Andrew Perlman',
  description: 'Thought leadership from Andrew Perlman on media, AI, and the creator economy.',
}

const themes = [
  {
    icon: '📡',
    title: 'Media M&A as Strategy',
    desc: 'Why acquisition is creative infrastructure — not just consolidation.',
  },
  {
    icon: '🤖',
    title: 'AI in Media Operations',
    desc: 'How AI is reshaping publishing, content workflows, and audience discovery.',
  },
  {
    icon: '📱',
    title: 'Creator Economy Architecture',
    desc: 'Building media brands that work like creator networks — without depending on a single voice.',
  },
  {
    icon: '▶️',
    title: 'YouTube as the New TV',
    desc: 'The shift from broadcast to creator-led video, and what it means for media companies.',
  },
]

export default function Insights() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-violet-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-blue-600/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeInSection>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Insights</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Thought Leadership
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
              Andrew&apos;s perspective on media, AI, the creator economy, and where digital publishing is headed.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Coming soon state */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <FadeInSection>
          <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-12 md:p-16 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
            </div>

            {/* Icon */}
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-8">
              <svg className="w-9 h-9 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative">
              Coming Soon
            </h2>
            <p className="text-slate-400 max-w-md mx-auto mb-8 relative leading-relaxed">
              Andrew is working on essays and perspectives on media strategy, AI&apos;s role in publishing, and the creator economy. Check back soon.
            </p>

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
              >
                Get notified
              </Link>
              <Link
                href="/press"
                className="px-7 py-3 border border-white/10 hover:border-white/25 text-slate-400 hover:text-white font-medium rounded-lg transition-all"
              >
                Read press coverage →
              </Link>
            </div>
          </div>
        </FadeInSection>

        {/* Topic previews */}
        <FadeInSection delay={200}>
          <p className="text-slate-600 text-sm uppercase tracking-widest text-center mt-16 mb-8">
            Topics to expect
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {themes.map((theme, i) => (
            <FadeInSection key={theme.title} delay={250 + i * 80}>
              <div className="flex gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] opacity-60">
                <span className="text-2xl">{theme.icon}</span>
                <div>
                  <h3 className="text-white/70 font-semibold text-sm mb-1">{theme.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{theme.desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </div>
  )
}
