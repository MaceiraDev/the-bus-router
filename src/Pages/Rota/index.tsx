import { useContext } from 'react';

import { RotaContext } from './../../contexts/rotaContext'
import { Table } from '../../components/Table-rota';
export const Rota = () => {

  const { rotas } = useContext(RotaContext)
  const contexto = useContext(RotaContext);

  return (
    <>
      <div className='container'>
        <h2>Rotas aqui</h2>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <table className="table table-hover">
              <thead className="top-tabela">
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Transportadora</th>
                  <th scope="col">descricao</th>
                  <th scope="col">local de Partida</th>
                  <th scope="col">destino</th>
                  <th scope="col">saida</th>
                  <th scope="col">chegada</th>
                </tr>
              </thead>
            </table>
            {rotas.map((rota) => {
              return (
                <Table id={rota.id} transportadora={rota.transportadora}
                  descricao={rota.descricao}
                  localPartida={rota.localPartida}
                  destino={rota.destino}
                  saida={rota.saida}
                  chegada={rota.chegada}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
