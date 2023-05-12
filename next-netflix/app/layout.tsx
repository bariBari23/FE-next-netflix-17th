"use client"
import './styles/globals.css'
import { Inter } from 'next/font/google'
import { RecoilRoot } from 'recoil';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Netflix</title>
      </head>
      <RecoilRoot>
        <body>{children}</body>
      </RecoilRoot>
    </html>
  )
}