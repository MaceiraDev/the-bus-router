import { TableRota } from "../../components/Table-Rota"
import { Container } from "./style"

export const Rota = () => {
  return (
    <>
      <Container>
        <div className='container'>
          <h2>Rotas</h2>
          <hr />
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <TableRota id={0} transportadora={0} descricao={""} localPartida={""} destino={""} saida={""} chegada={""} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
