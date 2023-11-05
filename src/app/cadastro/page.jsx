import React from "react"
import "./cadastro.css"

export default function Cadastro(){
    return(
        <div className="content_cadastro">
            <form>
                <h1>Cadastro</h1>

                <div className="form_group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form_group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required />
                </div>

                <div className="form_group">
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" required />
                </div>
        
                <div className="form_group">
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input type="date" id="dataNascimento" name="dataNascimento" required />
                </div>

                <input type="submit" value="Cadastrar" id="button"/>
            </form>
        </div>
    )
}