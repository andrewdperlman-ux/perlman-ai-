import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Andrew Perlman — Media × AI',
  description:
    'Andrew Perlman is a media executive, entrepreneur, and investor at the intersection of media, technology, and the creator economy. Co-founder & CEO of Recurrent Ventures.',
  metadataBase: new URL('https://perlman.ai'),
  openGraph: {
    title: 'Andrew Perlman — Media × AI',
    description:
      'Media executive, entrepreneur, and investor at the intersection of media, technology, and the creator economy.',
    url: 'https://perlman.ai',
    siteName: 'Andrew Perlman',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Perlman — Media × AI',
    description:
      'Media executive, entrepreneur, and investor at the intersection of media, technology, and the creator economy.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
