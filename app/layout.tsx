import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Sannavet - Cuidamos la salud de tu mascota",
  description: "Cuidamos de la salud y bienestar de tus mascotas",
  icons: "/nuevasfotos/ISOTIPO SANNAVET_Mesa de trabajo 1.png", // Asegúrate de que esta ruta sea correcta
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Meta etiquetas, íconos, etc. */}
        <meta name="description" content="Cuidamos de la salud y bienestar de tus mascotas"/>
        <link rel="icon" href="/nuevasfotos/ISOTIPO SANNAVET_Mesa de trabajo 1.png"/> {/* Aquí se define el ícono */}
      </head>
      <body>
        <Header />
        {children} {/* Esto asegura que el contenido de la página se inserte aquí */}
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'
