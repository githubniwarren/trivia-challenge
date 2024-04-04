import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Navbar from './ui/navbar'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Trivia Challenge',
  description: 'Trivia Challenge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
