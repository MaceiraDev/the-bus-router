import { TableUsuario } from "../../components/TableUsuario"
import { Container } from "./style"

export const Usuario = () => {

  return (
    <>
      <Container>
        <div className='container'>
          <h2 className='title'>USUÁRIOS</h2>
          <hr />
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <TableUsuario nome={""} cpf={""} endereco={""} email={""} telefone={""} login={""} senha={""} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}