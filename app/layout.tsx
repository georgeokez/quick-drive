import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quick Drive',
  description: 'A lightweight, highly customizable online drive with a friendly user interface. Quick Drive provides a modern and efficient way to manage your files in the cloud',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
