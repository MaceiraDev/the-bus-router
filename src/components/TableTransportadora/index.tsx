/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
import { Container } from "./style"
import { useContext, useState } from 'react';
import { TransportadoraContext } from '../../contexts/transportadoraContext';

<<<<<<< HEAD

export interface ITransportadora {
  id: number;
  nome: string;
  endereco: string;
  telefone: number;
  email: string;
  sitio: string;
}


interface PropsTableTransportadoras {
  abrirModalTrans: () => void;
}

export const TableTrans = ({ }: ITransportadora, props: PropsTableTransportadoras) => {
  const { transportadoras, deletarTransportadora, funEditarTransportadora } = useContext(TransportadoraContext)
=======
interface PropsTableTransportadoras {
  abrirModalTrans: () => void;
}
// { }: ITransportadora,
export const TableTrans = (props: PropsTableTransportadoras) => {
  const { transportadoras, deletarTransportadora, editarTransportadora } = useContext(TransportadoraContext)
  console.log(props.abrirModalTrans)
>>>>>>> a361f10cf7ed7ae4b5cd9e4a26810bb39415954c
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
            {transportadoras.map((transportadora, index) =>
              <tr key={index}>
                <td> {transportadora.id} </td>
                <td> {transportadora.nome} </td>
                <td> {transportadora.endereco} </td>
                <td> {transportadora.telefone} </td>
                <td> {transportadora.email} </td>
                <td> {transportadora.sitio} </td>
<<<<<<< HEAD
                <td style={{ textAlign: 'center' }}>
                  <button onClick={() => deletarTransportadora(transportadora.id)}
                    type="button" className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                  <button onClick={() => {
                    funEditarTransportadora({ editar: true, transportadora: transportadora })
                    props.abrirModalTrans();
                  }}
                    type="button" className="btn btn-outline-primary"><i className="bi bi-pencil"></i></button>
=======
                <td style={{ textAlign: 'center' }}> 
                  <button onClick={() => { deletarTransportadora(transportadora.id)}}
                    type="button" className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                 {/*} <button onClick={() => { editarTransportadora({ editar: true, transportadora: transportadora});}}
                    type="button" className="btn btn-outline-primary"><i className="bi bi-pencil"></i></button> */}
>>>>>>> a361f10cf7ed7ae4b5cd9e4a26810bb39415954c
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </Container>

    </>
  )
}