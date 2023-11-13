import React from "react"
import Menu from "../components/Cabecalho/Menu"
import Footer from "@/components/Rodape/Rodape"
import './global.css'


export const metadata = {
  title: 'Alô, Porto',
  description: 'Generated by create next app',
}


export default function RootLayout({children}) {
  return (
    <html>
      <body>
        <Menu/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
