import { TableTrans } from '../../components/TableTransportadora';
import { Container } from './style';
export const Transportadora = () => {

  return (
    <>
      <Container>
        <div className='container'>
          <h2 className='title'>TRANSPORTADORAS</h2>
          <hr />
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <TableTrans id={0} nome={''} endereco={''} telefone={0} email={''} sitio={''} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}