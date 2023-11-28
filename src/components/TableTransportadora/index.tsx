/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
import { Container } from "./style"
import { useContext } from 'react';
import { TransportadoraContext } from '../../contexts/transportadoraContext';

interface PropsTableTransportadoras {
  abrirModalTrans: () => void;
}
// { }: ITransportadora,
export const TableTrans = (props: PropsTableTransportadoras) => {
  const { transportadoras, deletarTransportadora, editarTransportadora } = useContext(TransportadoraContext)
  console.log(props.abrirModalTrans)
  //const context = useContext(TransportadoraContext);
  return (
    <>
      <Container >
        <table className="table table-hover">
          <thead className="top-tabela">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">Endereço</th>
              <th scope="col">Telefone</th>
              <th scope="col">Email</th>
              <th scope="col">Sítio</th>
              <th style={{ textAlign: 'center' }} scope="col">Ação</th>
            </tr>
          </thead>
          <tbody className="mid-tabela">
            {transportadoras.map((transportadora) =>
              <tr key={transportadora.id}>
                <td> {transportadora.id} </td>
                <td> {transportadora.nome} </td>
                <td> {transportadora.endereco} </td>
                <td> {transportadora.telefone} </td>
                <td> {transportadora.email} </td>
                <td> {transportadora.sitio} </td>
                <td style={{ textAlign: 'center' }}> 
                  <button onClick={() => { deletarTransportadora(transportadora.id)}}
                    type="button" className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                 {/*} <button onClick={() => { editarTransportadora({ editar: true, transportadora: transportadora});}}
                    type="button" className="btn btn-outline-primary"><i className="bi bi-pencil"></i></button> */}
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </Container>

    </>
  )
}