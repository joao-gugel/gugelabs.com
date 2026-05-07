import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-display"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gugelabs.com'),
  title: 'Gugelabs | Software e aplicativos móveis',
  description:
    'Estúdio brasileiro de software e produtos digitais com foco em apps para saúde, rotina, bem-estar e utilidade diária.',
  applicationName: 'Gugelabs',
  keywords: [
    'software company',
    'mobile apps',
    'wellness',
    'AI',
    'productivity',
    'Brazil',
    'iOS',
    'Android',
    'web products',
  ],
  authors: [{ name: 'Gugelabs' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Gugelabs | Software e aplicativos móveis',
    description:
      'Presença institucional oficial da Gugelabs, com informações sobre atuação, plataformas e contato corporativo.',
    url: 'https://gugelabs.com',
    siteName: 'Gugelabs',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark scroll-smooth bg-background"
    >
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
