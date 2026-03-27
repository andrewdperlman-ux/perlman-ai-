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
                  <img
                    src="/headshot.jpg"
                    alt="Andrew Perlman"
                    className="w-56 h-56 rounded-3xl object-cover object-top shadow-2xl shadow-blue-900/40"
                  />
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
                Andrew Perlman is a media executive, entrepreneur, and investor whose career spans entertainment licensing, intellectual property, public markets, digital media, and the creator economy. Each chapter has been defined by the same instinct: identify where technology is reshaping an industry, then build the infrastructure to capture that shift.
              </p>

              <h3 className="text-white font-semibold text-lg mt-10 mb-4 flex items-center gap-2">
                <span className="text-blue-400">01</span> Classic Media &amp; Digital Licensing
              </h3>

              <p>
                Andrew began his career at{' '}
                <a href="https://en.wikipedia.org/wiki/Classic_Media" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Classic Media
                </a>
                {' '}(now DreamWorks Classics), where he served as Head of Digital and built the company&apos;s digital licensing group from scratch. Classic Media controlled some of the most recognizable character brands in entertainment — Casper the Friendly Ghost, Lassie, The Lone Ranger, Rocky &amp; Bullwinkle, Rudolph the Red-Nosed Reindeer, Frosty the Snowman, VeggieTales, Where&apos;s Waldo, and George of the Jungle, among others.
              </p>

              <p>
                Andrew&apos;s work pioneering digital licensing for these iconic properties came at a critical inflection point — when entertainment companies were first grappling with how to monetize legacy IP in digital channels. The experience gave him a foundational understanding of brand value, content licensing, and the intersection of entertainment and technology. Classic Media was later acquired by DreamWorks Animation for $155 million.
              </p>

              <h3 className="text-white font-semibold text-lg mt-10 mb-4 flex items-center gap-2">
                <span className="text-blue-400">02</span> Vringo &amp; IP Innovation
              </h3>

              <p>
                Andrew served as President and then CEO of{' '}
                <a href="https://en.wikipedia.org/wiki/Vringo" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Vringo
                </a>
                , a publicly traded intellectual property company on the NYSE. Under his leadership, Vringo prosecuted one of the most closely watched patent cases of its era — a jury trial against Google over search advertising technology that resulted in a verdict finding Google had infringed Vringo&apos;s patents. The court imposed a running royalty on Google&apos;s AdWords system, later enhanced to 6.5% after finding Google&apos;s design-around replicated the infringing elements. Analysts estimated the judgment&apos;s value at over $1 billion.
              </p>

              <p>
                Simultaneously, Andrew led Vringo&apos;s global enforcement campaign against ZTE Corporation across twelve countries — including the United Kingdom, Germany, Australia, India, and China — over telecommunications infrastructure patents acquired from Nokia. The campaign resulted in courtroom victories, injunctions, and a $21.5 million settlement. The litigation drew international attention for its scale and complexity, including confrontations with Chinese regulators and courtroom sanctions against opposing counsel.
              </p>

              <p>
                The Vringo chapter gave Andrew a deep understanding of how intellectual property, technology platforms, and global markets intersect — and a firsthand education in building and defending value at the highest stakes.
              </p>

              <h3 className="text-white font-semibold text-lg mt-10 mb-4 flex items-center gap-2">
                <span className="text-blue-400">03</span> Recurrent Ventures &amp; The Creator Economy
              </h3>

              <p>
                In 2018, Andrew co-founded{' '}
                <a href="https://recurrentventures.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Recurrent Ventures
                </a>
                , a Miami-based digital media company built on a thesis that legacy media brands could be transformed into creator-driven businesses. Over seven years as CEO, he led Recurrent through 14 acquisitions — including The Drive, Donut Media, Popular Science, Outdoor Life, Dwell, and BobVila.com — assembling one of the most diverse portfolios in modern digital publishing.
              </p>

              <p>
                His strategy treats media M&amp;A not as consolidation, but as creative infrastructure for the creator economy. Rather than acquiring brands to harvest their SEO value or cut costs, Andrew builds each property as a platform for creator-led growth. He acquired The Drive from Time Inc. — one of YouTube&apos;s earliest high-production automotive channels — and later brought in Donut Media in 2021, a beloved automotive YouTube channel built around an ensemble &ldquo;cast&rdquo; model rather than a single personality.
              </p>

              <p>
                That insight — that media brands could scale without a single creator at the center — has become a thesis Andrew applies across the portfolio. He transformed Task &amp; Purpose from a web brand into a thriving YouTube channel, grew the Military Influencer Conference into a major experiential asset, and saw Donut Media events draw 800+ cars and 2,000+ attendees.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-6 my-8 text-slate-300 text-xl font-light italic">
                &ldquo;YouTube is now overtaking TV. Creator economy is everywhere, not just on your phone.&rdquo;
              </blockquote>

              <h3 className="text-white font-semibold text-lg mt-10 mb-4 flex items-center gap-2">
                <span className="text-blue-400">04</span> AI &amp; The Future of Media
              </h3>

              <p>
                At Recurrent, Andrew has been an early mover in applying AI to media operations — using it to catalog thousands of video clips for content remixing, enabling editorial teams to move faster and reach new formats without rebuilding from scratch.
              </p>

              <p>
                His current conviction: AI isn&apos;t replacing media — it&apos;s restructuring it. Publishers that understand how to combine AI infrastructure with creator network DNA, without betting on any single personality, will be the durable media businesses of the next decade.
              </p>

              <p>
                Andrew is now building{' '}
                <a href="https://gridlocal.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  GridLocal
                </a>
                {' '}— an AI-operated local media network that reimagines how communities get their news, combining editorial judgment with AI infrastructure at scale. It represents the convergence of everything he&apos;s built: the IP rigor of Vringo, the media M&amp;A playbook of Recurrent, and a belief that AI can make quality journalism economically viable at the local level.
              </p>

              <p>
                Andrew is a member of{' '}
                <a href="https://www.ypo.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  YPO (Young Presidents&apos; Organization)
                </a>
                , the global leadership community of chief executives. He is based in Miami, Florida.
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
                icon: '🎬',
                title: 'Classic Media / DreamWorks',
                desc: 'Head of Digital at Classic Media (now DreamWorks Classics). Built the digital licensing group for iconic brands including Casper, Lassie, Rocky & Bullwinkle, and VeggieTales. Company acquired for $155M.',
              },
              {
                icon: '⚖️',
                title: 'Vringo vs. Google',
                desc: 'Led patent litigation against Google as CEO of NYSE-listed Vringo. Jury found Google infringed; court imposed enhanced royalties on AdWords. Analysts valued the judgment at over $1 billion.',
              },
              {
                icon: '🌍',
                title: 'Global IP Enforcement',
                desc: 'Directed worldwide patent litigation against ZTE across 12 countries using Nokia-acquired telecom patents. Secured courtroom victories, injunctions, and a $21.5M settlement.',
              },
              {
                icon: '📺',
                title: '14 Media Acquisitions',
                desc: 'Built Recurrent Ventures through 14 acquisitions — The Drive, Donut Media, Popular Science, Outdoor Life, Dwell, BobVila.com — creating one of digital publishing\'s most diverse portfolios.',
              },
              {
                icon: '🚗',
                title: 'Creator Economy Pioneer',
                desc: 'Transformed legacy media brands into creator-driven businesses. Donut Media events drew 800+ cars and 2,000+ attendees. Task & Purpose became a thriving YouTube channel.',
              },
              {
                icon: '🤖',
                title: 'AI × Media',
                desc: 'Early mover in applying AI to media operations — cataloging thousands of video clips for content remixing and building new editorial workflows at scale.',
              },
              {
                icon: '📍',
                title: 'GridLocal',
                desc: 'Currently building GridLocal — an AI-operated local media network at the intersection of editorial judgment and AI infrastructure.',
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
