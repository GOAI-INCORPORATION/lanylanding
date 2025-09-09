import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  fallback: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
  ]
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  fallback: ['monaco', 'monospace']
})

export const dynamic = 'force-static'
export const revalidate = 30

export const metadata: Metadata = {
  title: 'Lany AI',
  description: 'Your AI Team, All in One Place.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`min-h-svh max-w-[100vw] bg-surface-primary text-text-primary dark:bg-[--dark-surface-primary] dark:text-[--dark-text-primary] ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <Header />
        <main className='min-h-[calc(100svh-var(--header-height))]'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
