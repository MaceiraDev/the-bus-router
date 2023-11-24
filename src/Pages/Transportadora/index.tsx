import { useContext } from 'react';

import { TransportadoraContext } from './../../contexts/transportadoraContext'
import { Table } from '../../components/Table';
export const Transportadora = () => {

  const { transportadoras } = useContext(TransportadoraContext)
  const context = useContext(TransportadoraContext);

  return (
    <>
      <div className='container'>
        <h2>Transportadora aqui</h2>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            {transportadoras.map((transportadora) => {
              return (
                <Table id={transportadora.id} nome={transportadora.nome}
                  endereco={transportadora.endereco}
                  telefone={transportadora.telefone}
                  email={transportadora.email}
                  sitio={transportadora.sitio}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}