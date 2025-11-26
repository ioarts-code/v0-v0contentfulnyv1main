import type React from "react"
import "./globals.css"

import { Header } from "@/components/header"

import { Geist, Geist_Mono, Sedgwick_Ave_Display, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const sedgwickAveDisplay = Sedgwick_Ave_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",
})

export const metadata = {
  title: "Blog",
  description: "A blog built with Next.js and Contentful.",
  generator: "v0.app",
}

function Footer() {
  return (
    <footer className="border-t border-border mt-auto bg-white">
      <div className="container mx-auto px-5 py-8">
        <p className="text-sm text-muted-foreground text-center">Built with Next.js and Contentful</p>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rlu5ntk.css" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${sedgwickAveDisplay.variable} font-sans flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
