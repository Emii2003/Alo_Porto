import React from "react"
import Link from "next/link"
import "./Rodape.css"

export default function Footer(){
    return(
        <footer className="footer">
        <div className="footer-content">
          <nav className="footer-links">
            <ul>
              <li><Link href = '/sobre'>Sobre Nós</Link></li>
              <li><Link href = '/projeto'>Nosso Projeto</Link></li>
            </ul>
          </nav>
          <p className="footer-text">Realização - Thinking Five</p>
        </div>
      </footer>
    )
}