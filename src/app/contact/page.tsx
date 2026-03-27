import FadeInSection from '@/components/FadeInSection'

export const metadata = {
  title: 'Contact — Andrew Perlman',
  description: 'Get in touch with Andrew Perlman.',
}

const contactOptions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'andrew@gridlocal.com',
    href: 'mailto:andrew@gridlocal.com',
    desc: 'For press, partnerships, or speaking inquiries.',
    color: 'from-blue-600/15 to-blue-800/5',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/adperlman',
    href: 'https://www.linkedin.com/in/adperlman',
    desc: 'Connect professionally on LinkedIn.',
    color: 'from-blue-700/15 to-blue-900/5',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-600/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    label: 'GridLocal',
    value: 'gridlocal.io',
    href: 'https://gridlocal.io',
    desc: 'Andrew\'s current project — AI-operated local media.',
    color: 'from-emerald-600/15 to-emerald-800/5',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
  },
]

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/6 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeInSection>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed">
              Reach out for press inquiries, speaking opportunities, partnerships, or to connect about media and AI.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="space-y-4">
          {contactOptions.map((option, i) => (
            <FadeInSection key={option.label} delay={i * 100}>
              <a
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group flex items-start gap-5 p-7 rounded-2xl bg-gradient-to-r ${option.color} border ${option.borderColor} hover:bg-white/[0.04] card-hover`}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.06] border ${option.borderColor} flex items-center justify-center ${option.accentColor}`}>
                  {option.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-semibold uppercase tracking-widest ${option.accentColor} mb-1`}>
                    {option.label}
                  </p>
                  <p className="text-white font-semibold text-lg mb-1 group-hover:text-blue-300 transition-colors">
                    {option.value}
                  </p>
                  <p className="text-slate-500 text-sm">{option.desc}</p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 text-slate-600 group-hover:text-blue-400 transition-colors self-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </FadeInSection>
          ))}
        </div>

        {/* Note */}
        <FadeInSection delay={400}>
          <div className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
            <p className="text-slate-500 text-sm leading-relaxed">
              Based in <span className="text-slate-400">Miami, FL</span>. Available for speaking engagements, media interviews, and strategic conversations at the intersection of media, AI, and the creator economy.
            </p>
          </div>
        </FadeInSection>
      </section>
    </div>
  )
}
