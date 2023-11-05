import React from "react"
import Image from "next/image"
import "./home.css"

export default function Home(){
    return(
      <div>
          <div className="content_index">
              <div className="container_index">
                <div className="textBox">
                  <h1 id="um">Chamou?</h1>
                  <h1 id="dois">A porto chegou!</h1>
                </div>
                <div className="imgBox">
                  <Image src={"/Home/imagemMain.svg"} 
                  alt="Imagem de uma pessoa solicitando guincho no celular" 
                  width={650}
                  height={500}/>
                </div>
              </div>
          </div>

          <div className="content_projeto">
          <h1>Entenda o processo</h1>
            <div className="row_card">
                <div className="card">
                    <div className="ImageCard">
                        <Image src={"/AboutProject/ImgProjeto1.svg"} alt="Logo da Porto Seguro"
                        layout="fill" className="ImageCard"/>
                    </div>
                    <p>Nossa tarefa é facilitar o seu contato com a Porto Seguro, para isso, é preciso que insira seu CPF no login caso seja um assegurado, caso contrário, você terá a opção de solicitar um guincho avulso apenas enviando dados como seu CPF, nome e localização, é fácil e atende a urgência do pedido de guincho.</p>
                </div>
                <div className="card">
                    <div className="ImageCard">
                        <Image src={"/AboutProject/ImgProjeto2.svg"} alt="Logo da Porto Seguro"
                        layout="fill" className="ImageCard"/>
                    </div>
                    <p>Para nos solicitar, basta fazer login e já poderá acessar nossa plataforma, insira apenas a placa e a localização, terá a opção de enviar foto para automatizar ainda mais o processo. Iremos facilitar seu contato com o prestador de serviço, que analisará sua situação e poderá atender rapidamente.</p>
                </div>

                <div className="card">
                    <div className="ImageCard">
                        <Image src={"/AboutProject/ImgProjeto3.svg"} alt="Logo da Porto Seguro"
                        layout="fill" className="ImageCard"/>
                    </div>
                    <p>Este processo de solicitação economiza tempo de espera, não é necessário que faça atendimento direto com a Porto, garantimos qualidade e assertividade. Através do nosso sistema, é possível acompanhar sua solicitação de guincho em tempo real, podendo cancelar quando quiser. </p> 
                </div>
            </div>
        </div>

        <div className="content_about">
        <h1>Conheça nossa equipe:</h1>
        <div className="container">
            <div className="section_perfil">
            <Image src={"/AboutUs/foto_Jul.svg"} alt='Foto de perfil da Júlia'
            width={150} height={150}/>
            <span><p>Júlia Andrade</p></span>
            <p>Full Stack developer</p>
            <p className='light'>RM: 552332</p>
            </div>
 
            <div className="section_perfil">
            <Image src={"/AboutUs/foto_emi.svg"} alt='Foto de perfil da Emile'
            width={150} height={150}/>
            <span><p>Emile Maia</p></span>
            <p>Front End developer</p>
            <p className='light'>RM: 552235</p>
            </div>
 
            <div className="section_perfil">
            <Image src={"/AboutUs/foto_gui.svg"} alt='Foto de perfil do Guilherme'
            width={150} height={150}/>
            <span><p>Guilherme P.</p></span>
            <p>Chatbot developer</p>
            <p className='light'>RM: 552238</p>
            </div>
 
            <div className="section_perfil">
            <Image src={"/AboutUs/foto_caio.svg"} alt='Foto de perfil do Caio'
            width={150} height={150}/>
            <span><p>Caio Vitor </p></span>
            <p>Front end developer</p>
            <p className='light'>RM: 552392</p>
            </div>
 
            <div className="section_perfil">
            <Image src={"/AboutUs/foto_edu.svg"} alt='Foto de perfil do Carlos'
            width={150} height={150}/>
            <span><p>Carlos Eduardo</p></span>
            <p>Designer</p>
            <p className='light'>RM: 94787</p>
            </div>
 
        </div>
      </div>
        </div>
    )
}