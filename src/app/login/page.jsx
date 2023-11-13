"use client";
import Link from "next/link";
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
          console.log("VALIDADO!!!!");
        if (result.status) {
            
                     //Gerando o TOKEN de acesso!
          const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

          //Armazenando o TOKEN no SessionStorage!
          sessionStorage.setItem("token-user", token);

          //Armazenando o objeto USUÁRIO no SessionStorage!
          sessionStorage.setItem("user-info", JSON.stringify(result.user));

            setMsg("Login efetuado com Sucesso!!");
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
    <div>
      <h1>IDENTIFICAÇÃO DOS USUÁRIOS</h1>

        <h2 className={msg == "Login efetuado com Sucesso!!" ? "msg-success-login":"msg-error-login"}>{msg}</h2>

      <div className="form-login">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>LOGIN</legend>
            <div>
              <label htmlFor="idCpf">CPF:</label>
              <input
                type="text"
                name="cpf"
                id="idCpf"
                placeholder="Digite seu cpf."
                value={usuario.cpf}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua senha."
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>LOGIN</button>
            </div>
            <div className="p-5 m-auto w-2/4">
              <p>Se você não é cadastrado em nosso sistema, <Link href="/login/cad" className="text-amber-500 hover:text-amber-200">CLIQUE AQUI</Link> para se registrar.</p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

// export default function LoginPage() {
//   return (
//         <div className="content_login">
//           <div className="container">
//             <div className="left">
//               <div className="textbox">
//                 <h1>Bem vindo de volta!!</h1>
//                 <p>Caso não tenha um cadastro no</p>
//                 <p>nosso sistema, clique aqui!</p>
//                 <div className="button_sign_up">
//                   <a href="#">Cadastrar</a>
//                 </div>
//               </div>
//             </div>
//             <div className="right">
//               <form action="#" method="post">
//                 <div className="title">
//                   <h1>Acesse</h1>
//                   <p>Insira seu CPF e senha para entrar</p>
//                 </div>
//                 <div className="content_form">
//                   <label for="cpf">CPF:</label>
//                   <input type="text" id="cpf" name="cpf" required />
//                   <label for="senha">Senha:</label>
//                   <input type="password" id="senha" name="senha" required />
//                 </div>
//                 <button type="submit">Entrar</button>
//               </form>
//             </div>
//           </div>
//         </div>
//   );
// }