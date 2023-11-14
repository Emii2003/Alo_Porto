import React from "react"
import Link from "next/link"
import "./Rodape.css"
import { BsGithub } from "react-icons/bs"

export default function Footer(){
    return(
        <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">Realização - Thinking Five</p>
          <p>Copyright &copy; 2023</p>
          <Link href={"https://github.com/Emii2003/Alo_Porto"} className="rep_link"> 
            Repositório - 
            <BsGithub className="rep_icon"></BsGithub>
          </Link>
        </div>
      </footer>
    )
}