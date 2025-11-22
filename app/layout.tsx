import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

export const metadata = {
  title: "Blog",
  description: "A blog built with Next.js and Contentful.",
  generator: "v0.app",
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

function Header() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-5 py-6">
        <h1 className="text-2xl font-bold">Blog</h1>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
