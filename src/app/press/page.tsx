import FadeInSection from '@/components/FadeInSection'

export const metadata = {
  title: 'Press — Andrew Perlman',
  description: 'Press coverage and media appearances featuring Andrew Perlman.',
}

const pressItems = [
  {
    publication: 'Net Influencer',
    title: "Andrew Perlman's Creator Economy Playbook: How Recurrent Ventures Turned M&A Into A Media Reinvention Engine",
    date: 'December 2025',
    url: 'https://www.netinfluencer.com/andrew-perlman-creator-economy-playbook-how-recurrent-ventures-turned-ma-into-a-media-reinvention-engine/',
    type: 'Feature',
    color: 'from-orange-600/20 to-orange-800/10',
    accentColor: 'text-orange-400',
    borderColor: 'border-orange-500/20',
  },
  {
    publication: 'Digiday',
    title: "How AI's hit to publisher traffic is quietly rewiring media M&A",
    date: 'December 2025',
    url: 'https://digiday.com/media/how-ais-hit-to-publisher-traffic-is-quietly-rewiring-media-ma/',
    type: 'Quote / Interview',
    color: 'from-blue-600/20 to-blue-800/10',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
  },
  {
    publication: 'Digiday',
    title: "Media Briefing: Publishers turn to vertical video to compete with creators and grow ad revenue in 2026",
    date: '2026',
    url: 'https://digiday.com/media/media-briefing-publishers-turn-to-vertical-video-to-compete-with-creators-and-grow-ad-revenue-in-2026/',
    type: 'Quote / Briefing',
    color: 'from-blue-600/20 to-blue-800/10',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
  },
  {
    publication: 'The Hill',
    title: 'ESPN / YouTube TV sports dispute coverage',
    date: '2025',
    url: 'https://thehill.com/homenews/media/5611735-espn-youtubetv-sports-dispute/',
    type: 'Expert Commentary',
    color: 'from-green-600/20 to-green-800/10',
    accentColor: 'text-green-400',
    borderColor: 'border-green-500/20',
  },
  {
    publication: 'Adweek',
    title: 'Dynamo Doubles Revenue Expectations With YouTube Strategy',
    date: 'November 2025',
    url: 'https://www.adweek.com/media/dynamo-doubles-revenue-expectations-youtube-strategy/',
    type: 'Feature',
    color: 'from-purple-600/20 to-purple-800/10',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
  },
  {
    publication: 'AdMonsters',
    title: 'Programmatic IO: The Secret Publisher Files',
    date: '2025',
    url: 'https://admonsters.com/programmatic-io-the-secret-publisher-files/',
    type: 'Panel',
    color: 'from-cyan-600/20 to-cyan-800/10',
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
  },
]

const speakingItems = [
  {
    event: 'Programmatic IO',
    role: 'Panelist',
    organizer: 'AdMonsters',
    date: '2025',
    icon: '🎙️',
  },
  {
    event: '1Billion Follow Summit Dubai',
    role: 'Creator Economy Panel',
    organizer: 'Dubai',
    date: 'January 2026',
    icon: '🌍',
  },
]

export default function Press() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Media</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Press & Appearances</h1>
            <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
              Coverage, interviews, and speaking engagements on media strategy, the creator economy, and the future of digital publishing.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Press items */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <FadeInSection>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
            Press Coverage
          </h2>
        </FadeInSection>

        <div className="space-y-4">
          {pressItems.map((item, i) => (
            <FadeInSection key={item.title} delay={i * 80}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 rounded-xl bg-gradient-to-r ${item.color} bg-white/[0.02] border ${item.borderColor} hover:bg-white/[0.04] card-hover`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Publication badge */}
                  <div className="flex-shrink-0">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border ${item.borderColor}`}>
                      <span className={`text-xs font-bold uppercase tracking-wide ${item.accentColor}`}>
                        {item.publication}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-base leading-snug group-hover:text-blue-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-slate-500">{item.date}</span>
                      <span className="text-slate-700">·</span>
                      <span className={`${item.accentColor} text-xs font-medium`}>{item.type}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 text-slate-600 group-hover:text-blue-400 transition-colors mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Speaking */}
      <section className="border-t border-white/5 bg-white/[0.01] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
              Speaking
            </h2>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {speakingItems.map((item, i) => (
              <FadeInSection key={item.event} delay={i * 100}>
                <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-blue-500/20 card-hover">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.event}</h3>
                      <p className="text-blue-400 text-sm font-medium mb-1">{item.role}</p>
                      <p className="text-slate-500 text-sm">{item.date}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={300}>
            <div className="mt-10 p-6 rounded-xl border border-dashed border-white/10 bg-white/[0.01] text-center">
              <p className="text-slate-500 text-sm mb-3">Interested in having Andrew speak at your event?</p>
              <a
                href="/contact"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Get in touch →
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
