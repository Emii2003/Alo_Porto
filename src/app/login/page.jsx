"use client";
import Link from "next/link";
import "./login.css"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginUsers() {
  //Mensage de STATUS!
  const [msg, setMsg] = useState("");

  //Redirecionamento:
  const navigate = useRouter();
 
  const [usuario, setUsuario] = useState({
    info: "login",
    cpf: "",
    senha: "",
  });

  //Preenchimento dos Campos!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  //Envio das informações
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/base/base-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        }
      );

      if (response.ok) {
        
        const result = await response.json();
          console.log("validado com sucesso");
        if (result.status) {
            
                     //Gerando o TOKEN de acesso!
          const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

          //Armazenando o TOKEN no SessionStorage!
          sessionStorage.setItem("token-user", token);

          //Armazenando o objeto USUÁRIO no SessionStorage!
          sessionStorage.setItem("user-info", JSON.stringify(result.user));

            setMsg("Logado");
            setTimeout(()=>{
                setMsg("");
                //Redirecionando para a página HOME!
                window.location.href = "/solicitarGuincho";
            },5000);

        }else{
            
            setMsg("Login ou Senha incorretos!");
            setTimeout(()=>{
                setMsg("");
            },5000);

        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content_login">
  <h2 className={msg == "Login efetuado com Sucesso!!" ? "msg-success-login":"msg-error-login"}>{msg}</h2>
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
          <form onSubmit={handleSubmit}>
            <div className="title">
              <h1>Acesse</h1>
              <p>Insira seu CPF e senha para entrar</p>
            </div>
            <div className="content_form">
              <label for="cpf">CPF:</label>
              <input type="text"
                  name="cpf"
                  id="idCpf"
                  value={usuario.cpf}
                  onChange={handleChange} 
                  required/>

              <label for="senha">Senha:</label>
              <input type="password"
                  name="senha"
                  id="idSenha"
                  value={usuario.senha}
                  onChange={handleChange} required />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </div>
);
}