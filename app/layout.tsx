import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}



import './globals.css'