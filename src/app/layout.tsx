type Props = {
  content: React.ReactNode,
  sideMainInfos: React.ReactNode,
  children: React.ReactNode
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['greek'] })

export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'Dev Felipe',
}

export default function RootLayout( {content, sideMainInfos, children } : Props) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
