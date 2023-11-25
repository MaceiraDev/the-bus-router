import { useContext } from 'react';
import { RotaContext } from "../../contexts/rotaContext";
import { Container } from './style';

interface ItableProps {
  id: number;
  transportadora: number;
  descricao: string;
  localPartida: string;
  destino: string;
  saida: string;
  chegada: string;
}

export const TableRota = ({ }: ItableProps) => {

  const { rotas } = useContext(RotaContext)
  const context = useContext(RotaContext);

  return (
    <>
      <Container>
        <table className="table table-hover">
          <thead className="top-tabela">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Transportadora</th>
              <th scope="col">Descrição</th>
              <th scope="col">local de Partida</th>
              <th scope="col">Destino</th>
              <th scope="col">Saída</th>
              <th scope="col">Chegada</th>
            </tr>
          </thead>
          <tbody className="mid-tabela">
            {rotas.map((rota) =>
              <tr key={rota.id}>
                <td> {rota.id} </td>
                <td> {rota.transportadora} </td>
                <td> {rota.descricao} </td>
                <td> {rota.localPartida} </td>
                <td> {rota.descricao} </td>
                <td> {rota.saida} </td>
                <td> {rota.chegada} </td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>

    </>
  )
}