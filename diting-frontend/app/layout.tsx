import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Diting',
  description: 'Audio summary powered by Whisper and GPT-4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-sans min-h-screen flex flex-col'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
