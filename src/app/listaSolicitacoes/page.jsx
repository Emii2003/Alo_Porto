import "./listaSolicitacoes.css"

export default function ListaSolicitacoes() {

  
  return (
    <main>
    <div className="table_content">
      <div className='w-auto row d-flex flex-row justify-content-between flex-nowrap animate__backInUp animate__delay-2s'>
        <h5 className='col'>Bem vindo!</h5>
      </div>
      <div className='row table-responsive'>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Numero de Solicitação</th>
              <th scope="col">Solicitante</th>
              <th scope="col">Data e Horário da Solicitação</th>
              <th scope="col">Local de Coleta do Veículo</th>
              <th scope="col">Descrição do Problema</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#1001</th>
              <td>15/09/2023 16:30</td>
              <td>Caio Vitor</td>
              <td>Rua Principal, 123</td>
              <td>O veículo apresentou um pneu furado, tornando impossível a continuação da viagem. É necessária a troca do pneu ou o reboque do veículo para um local seguro.</td>
              <td className='table-success'>
                Entrega concluída!
              </td>
            </tr>
            <tr>
              <th scope="row">#1002</th>
              <td>20/09/2023 10:30</td>
              <td>Caio Vitor</td>
              <td>Avenida Secundária, 45</td>
              <td>O veículo teve a bateria descarregada, impedindo a partida do motor. Será necessário um serviço de assistência para recarregar a bateria ou fornecer um impulso.</td>
              <td className='d-flex gap-3'>
                <button type='button' className='btn btn-success'>aceitar</button>
                <button type='button' className='btn btn-danger'>recusar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </main>
  );
}