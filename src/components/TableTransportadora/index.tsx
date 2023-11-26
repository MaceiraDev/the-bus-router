import { Container } from "./style"
import { useContext } from 'react';
import { TransportadoraContext } from '../../contexts/transportadoraContext';


export interface ITransportadora {
  id: number;
  nome: string;
  endereco: string;
  telefone: number;
  email: string;
  sitio: string;
}

export const TableTrans = ({ }: ITransportadora) => {
  const { transportadoras, deletarTransportadora } = useContext(TransportadoraContext)
  const context = useContext(TransportadoraContext);

  return (
    <>
      <Container>
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
                <td style={{ textAlign: 'center' }}> <button onClick={() => context.deletarTransportadora(transportadora.id)}
                  type="button" className="btn btn-outline-danger"><i className="bi bi-trash"></i></button> </td>
              </tr>
            )}

          </tbody>
        </table>
      </Container>

    </>
  )
}