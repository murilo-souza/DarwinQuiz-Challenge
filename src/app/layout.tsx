import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const font = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="bg-blur bg-darkNavy bg-cover bg-no-repeat h-screen">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </body>
    </html>
  )
}
