"use client"
import { useState } from "react"
import "./cadastro.css"

export default function CadastroPage(){
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
        cpf: '',
    })

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }
    return(
        <div className="content_cadastro">
            <form>
                <h1>Cadastro</h1>

                <div className="form_group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required value = {formData.email}
                    onChange = {(e) => {handleFormEdit(e, 'name')}}/>
                </div>

                <div className="form_group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required value = {formData.senha}/>
                </div>

                <div className="form_group">
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" required value = {formData.cpf}/>
                </div>
        
                {/* <div className="form_group">
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input type="date" id="dataNascimento" name="dataNascimento" required />
                </div> */}

                <input type="submit" value="Cadastrar" id="button"/>
            </form>
        </div>
    )
}