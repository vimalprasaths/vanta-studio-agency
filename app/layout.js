import { Bebas_Neue, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'VANTA Studio — Design That Moves',
  description:
    'VANTA is a forward-thinking design agency crafting bold digital experiences — UI/UX, branding, web development, and beyond.',
  keywords: ['design agency', 'UI/UX', 'branding', 'web development', 'digital marketing'],
  openGraph: {
    title: 'VANTA Studio — Design That Moves',
    description: 'Bold digital experiences for ambitious brands.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable} font-body bg-ink text-paper antialiased`}>
        {children}
      </body>
    </html>
  )
}
