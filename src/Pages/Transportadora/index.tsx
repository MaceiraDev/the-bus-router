import { TableTrans } from '../../components/Table-Transportadora';
export const Transportadora = () => {

  return (
    <>
      <div className='container'>
        <h2>Transportadora aqui</h2>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <TableTrans id={0} nome={''} endereco={''} telefone={0} email={''} sitio={''} />
          </div>
        </div>
      </div>
    </>
  )
}