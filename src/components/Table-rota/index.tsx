import { Container } from "./style"

interface ItableProps {
  id: number;
  transportadora: string;
  descricao: string;
  localPartida: string;
  destino: string;
  saida: string;
  chegada: string;
}

export const Table = ({ id, transportadora, descricao, localPartida, destino, saida, chegada }: ItableProps) => {
  return (
    <>
      <Container>
        <table className="table table-hover">
          <tbody className="mid-tabela">
            <tr>
              <td> {id} </td>
              <td> {transportadora} </td>
              <td> {descricao} </td>
              <td> {localPartida} </td>
              <td> {destino} </td>
              <td> {saida} </td>
              <td> {chegada} </td>

            </tr>
          </tbody>
        </table>
      </Container>

    </>
  )
}