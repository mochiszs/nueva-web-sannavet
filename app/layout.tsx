import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Sannavet - Cuidamos la salud de tu mascota",
  description: "Cuidamos de la salud y bienestar de tus mascotas",
  icons:"/nuevasfotos/ISOTIPO SANNAVET_Mesa de trabajo 1.png",
   
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'