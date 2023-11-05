import React from 'react';
import Image from 'next/image';
import "./login.css"

export default function LoginPage() {
  return (
        <div className="content_login">
          <div className="container">
            <div className="left">
              <div className="textbox">
                <h1>Bem vindo de volta!!</h1>
                <p>Caso não tenha um cadastro no</p>
                <p>nosso sistema, clique aqui!</p>
                <div className="button_sign_up">
                  <a href="#">Cadastrar</a>
                </div>
              </div>
            </div>
            <div className="right">
              <form action="#" method="post">
                <div className="title">
                  <h1>Acesse</h1>
                  <p>Insira seu CPF e senha para entrar</p>
                </div>
                <div className="content_form">
                  <label for="cpf">CPF:</label>
                  <input type="text" id="cpf" name="cpf" required />
                  <label for="senha">Senha:</label>
                  <input type="password" id="senha" name="senha" required />
                </div>
                <button type="submit">Entrar</button>
              </form>
            </div>
          </div>
        </div>
  );
}
