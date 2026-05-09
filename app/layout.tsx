import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SiteNav from '@/components/site-nav'
import FloatingAGIcon from '@/components/floating-ag-icon'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AG — Angry Genius | Study Like a Master',
  description: 'AI-powered study system with exam prediction, adaptive learning, and your personal Angry Professor tutor.',
  keywords: ['study', 'AI tutor', 'exam prep', 'flashcards', 'quiz generator'],
  authors: [{ name: 'AG Team' }],
  openGraph: {
    title: 'AG — Angry Genius',
    description: 'Study with AI. Learn from your mistakes. Ace your exams.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white flex flex-col">
          <SiteNav />
          <main className="flex-1 relative">
            {children}
          </main>
          <FloatingAGIcon />
        </div>
      </body>
    </html>
  )
}
