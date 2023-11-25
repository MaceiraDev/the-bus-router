import { TableRota } from "../../components/Table-Rota"

export const Rota = () => {
  return (
    <>
      <div className='container'>
        <h2>Rotas aqui</h2>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <TableRota id={0} transportadora={0} descricao={""} localPartida={""} destino={""} saida={""} chegada={""} />
          </div>
        </div>
      </div>
    </>
  )
}
