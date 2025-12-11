import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"



const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammed Iliyas Dokanwale| Software Engineer",
  description:
    "Portfolio of Mohammed Iliyas Dokanwale, Data Analyst skilled in SQL, Excel, Python, and Business Intelligence, specializing in data cleaning, analysis, forecasting, and dashboard development.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
