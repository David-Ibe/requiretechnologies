import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Require Technologies Limited - Software Solutions in Nigeria',
  description: 'Transform your business with custom websites, mobile apps, and IT consulting in Nigeria. AI-driven solutions for modern businesses.',
  keywords: 'Nigeria software development, mobile app Lagos, IT consulting Nigeria, website development, AI solutions',
  authors: [{ name: 'Require Technologies Limited' }],
  openGraph: {
    title: 'Require Technologies Limited - Software Solutions in Nigeria',
    description: 'Transform your business with custom websites, mobile apps, and IT consulting in Nigeria.',
    type: 'website',
    locale: 'en_NG',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
