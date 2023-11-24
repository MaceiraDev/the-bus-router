import { Container } from "./style"

interface ItableProps {
  id: number;
  nome: string;
  endereco: string;
  telefone: number;
  email: string;
  sitio: string;
}

export const Table = ({ id, nome, endereco, telefone, email, sitio }: ItableProps) => {
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
            </tr>
          </thead>
          <tbody className="mid-tabela">
            <tr>
              <td> {id} </td>
              <td> {nome} </td>
              <td> {endereco} </td>
              <td> {telefone} </td>
              <td> {email} </td>
              <td> {sitio} </td>
            </tr>

          </tbody>
        </table>
      </Container>

    </>
  )
}