import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/navbar'
import { Toaster } from 'sonner'

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
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
