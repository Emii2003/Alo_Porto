import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import './Menu.css'

export default function Menu() {
  return (
      <header>
        <div className="menu">
          <Image
            src={"/Logo/img_logo.png"}
            alt="Logo de caminhão"
            width={130}
            height={100}
          />
          <nav>
            <ul className="menu-login">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href='/listaSolicitacoes'>Exemplo de uma solicitação</Link>
              </li>
              <li>
                <Link href='/login' id='login'>Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}





