import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Laporan Observasi: Pembelajaran Bahasa Inggris - Teks Prosedur',
  description: 'Presentasi interaktif tentang pembelajaran bahasa Inggris dengan fokus pada teks prosedur',
  keywords: 'bahasa inggris, teks prosedur, pembelajaran, observasi, pendidikan',
  authors: [{ name: 'Tim Observasi Pendidikan' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
