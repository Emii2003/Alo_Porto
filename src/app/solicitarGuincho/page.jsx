"use client"
import React, { useState } from "react";
import { BsFillCameraFill } from 'react-icons/bs';
import "./solicitarGuincho.css"

export default function Guincho() {
  const [formData, setFormData] = useState({
    imagem: null,
    placa: "",
    localizacao: "",
    estado: "capotado",
    ambiente: "pavimentadas",
    carregamento: "nao",
    peso: 0,
  });

  const [solicitacoes, setSolicitacoes] = useState([]);

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaSolicitacao = {
      ...formData,
      numero: solicitacoes.length + 1,
    };

    setSolicitacoes([...solicitacoes, novaSolicitacao]);

    // Limpar o formulário após o envio
    setFormData({
      imagem: null,
      placa: "",
      localizacao: "",
      estado: "capotado",
      ambiente: "pavimentadas",
      carregamento: "nao",
      peso: 0,
    });
  };

  return (
    <div>
      <div className="content_form_guincho">
        <div className="container">
          <div className="textbox">
            <h1>Solicite seu guincho</h1>
          </div>

          <form onSubmit={handleSubmit} className="form_guincho">

            <div className="upload-picture">
              <BsFillCameraFill size={70} className="icon_camera" />
              <div className="upload-button">
                <input
                  type="file"
                  id="imagem"
                  name="imagem"
                  accept="image/*"
                  multiple
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="placa">Placa</label>
              <input type="text" id="placa" name="placa" required onChange={handleInputChange} value={formData.placa} />
            </div>

            <div className="form-group">
              <label htmlFor="localizacao">Localização</label>
              <input type="text" id="localizacao" name="localizacao" required onChange={handleInputChange} value={formData.localizacao} />
            </div>

            <div className="form-group">
              <label>Qual o estado do veículo?</label>
              <select id="estado" name="estado" required onChange={handleInputChange} value={formData.estado}>
                <option value="capotado">Capotado</option>
                <option value="atolado">Atolado</option>
                <option value="batido">Batido</option>
                <option value="travado">Câmbio Travado</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tipo de Ambiente:</label>
              <select id="ambiente" name="ambiente" required onChange={handleInputChange} value={formData.ambiente}>
              <option value="pavimentadas">Estradas Pavimentadas</option>
                 <option value="terra">Estradas de Terra e Cascalho</option>
                 <option value="acidentados">Terrenos Acidentados</option>
                 <option value="urbanas">Áreas Urbanas</option>
                 <option value="construcao">Locais de Construção</option>
                 <option value="florestas">Florestas e áreas rurais</option>
                 <option value="minas">Minas e Pedreiras</option>
                 <option value="portos">Portos e Terminais</option>
                 <option value="aquaticas">Vias Aquáticas</option>
                 <option value="eventos">Áreas de Eventos Especiais</option>
              </select>
            </div>

            <div className="form-group">
              <label>O veículo possui carga?</label>
              <select id="carregamento" name="carregamento" required onChange={handleInputChange} value={formData.carregamento}>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>

            <div className="form-group">
              <label>Se sim, qual a carga (kg)?</label>
              <input type="number" id="peso" name="peso" required onChange={handleInputChange} value={formData.peso} />
            </div>

            <button type="submit" className="btn">
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Exibir a tabela de solicitações */}
      <div>
        <h2>Lista de Solicitações</h2>
        <table>
          <thead>
            <tr>
              <th>Número de Solicitação</th>
              <th>Placa</th>
              <th>Localização</th>
              <th>Estado do Veículo</th>
              <th>Ambiente</th>
              <th>Veículo com Carga</th>
              <th>Peso da Carga (kg)</th>
            </tr>
          </thead>
          <tbody>
            {solicitacoes.map((solicitacao) => (
              <tr key={solicitacao.numero}>
                <td>{solicitacao.numero}</td>
                <td>{solicitacao.placa}</td>
                <td>{solicitacao.localizacao}</td>
                <td>{solicitacao.estado}</td>
                <td>{solicitacao.ambiente}</td>
                <td>{solicitacao.carregamento}</td>
                <td>{solicitacao.peso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
