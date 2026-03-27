import FadeInSection from '@/components/FadeInSection'

export const metadata = {
  title: 'About — Andrew Perlman',
  description: 'Andrew Perlman is a media executive, entrepreneur, and investor at the intersection of media, technology, and the creator economy.',
}

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Avatar */}
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <FadeInSection>
                <div className="relative">
                  {/* Gradient avatar */}
                  <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-700 to-violet-800 flex items-center justify-center shadow-2xl shadow-blue-900/40">
                    <span className="text-7xl font-bold text-white/90 select-none">AP</span>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-2 rounded-3xl border border-blue-500/20" />
                  <div className="absolute -inset-4 rounded-3xl border border-blue-500/10" />
                </div>
              </FadeInSection>
            </div>

            {/* Intro */}
            <div className="md:col-span-3">
              <FadeInSection>
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">About</p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Media executive.<br />
                  <span className="gradient-text">Entrepreneur.</span><br />
                  Investor.
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Andrew Perlman operates at the intersection of media, technology, and the creator economy — building companies that treat M&A as creative infrastructure, not just consolidation.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Miami, FL', 'Digital Media', 'Creator Economy', 'M&A', 'AI'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <FadeInSection>
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p className="text-xl text-slate-300 font-light">
                Andrew Perlman is the co-founder and CEO of{' '}
                <a href="https://recurrentventures.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Recurrent Ventures
                </a>
                , a Miami-based digital media company he helped launch in 2018.
              </p>

              <p>
                Over seven years, Andrew led Recurrent through 14 acquisitions — including The Drive, Donut Media, Popular Science, Outdoor Life, Dwell, and BobVila.com — assembling one of the most diverse portfolios in modern digital publishing. His strategy treats media M&A not as consolidation, but as creative infrastructure for the creator economy.
              </p>

              <p>
                The approach is distinct: rather than acquiring brands to harvest their SEO value or cut costs, Andrew builds each property as a platform for creator-led growth. He acquired The Drive from Time Inc. — one of YouTube&apos;s earliest high-production automotive channels — and later brought in Donut Media in 2021, a beloved automotive YouTube channel built around an ensemble &ldquo;cast&rdquo; model rather than a single personality.
              </p>

              <p>
                That insight — that media brands could scale without a single creator at the center — has become a thesis Andrew applies across the portfolio. He transformed Task & Purpose from a web brand into a thriving YouTube channel, grew the Military Influencer Conference into a major experiential asset, and saw Donut Media events draw 800+ cars and 2,000+ attendees.
              </p>

              <p>
                On the technology side, Andrew has been an early mover in applying AI to media operations: using it to catalog thousands of video clips for content remixing, enabling editorial teams to move faster and reach new formats without rebuilding from scratch.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-6 my-8 text-slate-300 text-xl font-light italic">
                &ldquo;YouTube is now overtaking TV. Creator economy is everywhere.&rdquo;
              </blockquote>

              <p>
                Andrew&apos;s current conviction: the creator economy isn&apos;t just a trend — it&apos;s the new architecture of media. Publishers that understand how to adopt creator network DNA, without betting on any single personality, will be the durable media businesses of the next decade.
              </p>

              <p>
                In addition to his work at Recurrent, Andrew is building{' '}
                <a href="https://gridlocal.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  GridLocal
                </a>
                {' '}(gridlocal.io) — an AI-operated local media network that reimagines how communities get their news, combining editorial judgment with AI infrastructure at scale.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Key highlights */}
      <section className="border-t border-white/5 bg-white/[0.01] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-12 text-center">
              Key Highlights
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: '📺',
                title: 'The Drive Acquisition',
                desc: 'Acquired The Drive from Time Inc. — one of YouTube\'s earliest high-production automotive channels.',
              },
              {
                icon: '🚗',
                title: 'Donut Media',
                desc: 'Acquired Donut Media in 2021. Beloved automotive YouTube channel with ensemble "cast" model. Live events drew 800+ cars and 2,000+ attendees.',
              },
              {
                icon: '⚔️',
                title: 'Task & Purpose',
                desc: 'Transformed Task & Purpose from a web brand into a thriving YouTube channel serving the military community.',
              },
              {
                icon: '🎤',
                title: 'Military Influencer Conference',
                desc: 'Grew the Military Influencer Conference into a major experiential asset connecting brands with military creators.',
              },
              {
                icon: '🤖',
                title: 'AI Content Infrastructure',
                desc: 'Using AI to catalog thousands of video clips for content remixing — pioneering new workflows for media companies.',
              },
              {
                icon: '📍',
                title: 'GridLocal',
                desc: 'Currently building GridLocal — an AI-operated local media network bringing high-quality journalism to every neighborhood.',
              },
            ].map((item, i) => (
              <FadeInSection key={item.title} delay={i * 80}>
                <div className="flex gap-4 p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/20 card-hover">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
