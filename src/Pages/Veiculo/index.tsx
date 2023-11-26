import { TableVeiculo } from "../../components/TableVeiculo"
import { Container } from "./style"

export const Veiculo = () => {

  return (
    <>
      <Container>
        <div className='container'>
          <h2 className='title'>VEÍCULOS</h2>
          <hr />
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <TableVeiculo descricao={""} placa={""} assento={""} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}