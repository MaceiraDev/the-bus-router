/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
import { Container } from "./style"
import { useContext } from 'react';
import { IUsuarios } from "../../interfaces/interfaces";
import { UsuarioContext } from "../../contexts/usuarioContext";



export const TableUsuario = ({ }: IUsuarios) => {
  const { usuarios, deleteUsuario } = useContext(UsuarioContext)
  const context = useContext(UsuarioContext);

  return (
    <>
      <Container>
        <table className="table table-hover">
          <thead className="top-tabela">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Endereço</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>
              <th scope="col">Login</th>
              <th style={{ textAlign: 'center' }} scope="col">Ação</th>
            </tr>
          </thead>
          <tbody className="mid-tabela">
            {usuarios.map((usuario) =>
              <tr key={usuario.id}>
                <td> {usuario.id} </td>
                <td> {usuario.nome} </td>
                <td> {usuario.cpf} </td>
                <td> {usuario.endereco} </td>
                <td> {usuario.email} </td>
                <td> {usuario.telefone} </td>
                <td> {usuario.login} </td>
                <td style={{ textAlign: 'center' }}> <button onClick={() => deleteUsuario(usuario.id)}
                  type="button" className="btn btn-outline-danger"><i className="bi bi-trash"></i></button> </td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>

    </>
  )
}