import { Inter } from 'next/font/google'
import './globals.scss'
import React from 'react'
import ReactQueryProvider from '@/providers/reactQueryProvider'
import { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: 'black'
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  applicationName: 'Next.js',
  manifest: '/manifest.json',
  publisher: 'Next.js',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Next.js'
  },
  other: {
    MobileOptimized: '360'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  twitter: {
    images: ['/favicons/favicon.png']
  },
  openGraph: {
    images: [
      {
        url: '/favicons/favicon.png',
        width: 256,
        height: 256
      }
    ],
    locale: 'uk_UA',
    type: 'website'
  },
  icons: {
    icon: '/favicons/favicon.png',
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <body className={inter.className}><ReactQueryProvider>{children}</ReactQueryProvider></body>
    </html>
  )
}
