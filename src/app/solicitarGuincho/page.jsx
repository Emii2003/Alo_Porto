import Image from "next/image";
import "./solicitarGuincho.css"
import { BsFillCameraFill } from 'react-icons/bs';

export default function Guincho() {
    return (
      <div>
        <div className="content_form_guincho">
          <div className="container">
            <div className="textbox">
              <h1>Solicite seu guincho</h1>
            </div>
  
            <form action="#" method="post" className="form_guincho">
  
            <div className="upload-picture">
            <BsFillCameraFill  size = {70} className="icon_camera"></BsFillCameraFill>
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
                <label htmlFor="peso">Placa</label>
                <input type="text" id="placa" name="placa" required />
              </div>
  
              <div className="form-group">
                <label htmlFor="comprimento">Localização</label>
                <input type="text" id="localizacao" name="localizacao" required />
              </div>

              <div className="form-group">
             <label>Qual o estado do veículo?</label>
            <select id="estado" name="estado" required>
               <option value="capotado">Capotado</option>
               <option value="atolado">Atolado</option>
               <option value="batido">Batido</option>
               <option value="travado">Câmbio Travado</option>
               <option value="outro">Outro</option>
             </select>
           </div>

           <div className="form-group">
               <label>Tipo de Ambiente:</label>
               <select id="ambiente" name="ambiente" required>
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
                <select id="carregamento" name="carregamento" required>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              </div>

              <div className="form-group">
                 <label>Se sim, qual a carga (kg)?</label>
                 <input type="number" id="peso" name="peso" required />
               </div>
  
              <button type="submit" className="btn">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>  
    );
  }
  