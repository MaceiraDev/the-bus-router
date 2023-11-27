import { Container } from "./style"
import { useContext } from 'react';
import { IVeiculos } from "../../interfaces/interfaces";
import { VeiculoContext } from "../../contexts/veiculoContext";


export const TableVeiculo = ({ }: IVeiculos) => {
  const { veiculos, deleteVeiculo } = useContext(VeiculoContext)

  const context = useContext(VeiculoContext);

  return (
    <>
      <Container>
        <table className="table table-hover">
          <thead className="top-tabela">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Rota</th>
              <th scope="col">Descrição</th>
              <th scope="col">Placa</th>
              <th style={{ textAlign: 'center' }} scope="col">Assentos</th>
              <th style={{ textAlign: 'center' }} scope="col">Ação</th>
            </tr>
          </thead>
          <tbody className="mid-tabela">
            {veiculos.map((veiculo) =>
              <tr key={veiculo.id}>
                <td> {veiculo.id} </td>
                <td> {veiculo.rota} </td>
                <td> {veiculo.descricao} </td>
                <td> {veiculo.placa} </td>
                <td style={{ textAlign: 'center' }} > {veiculo.assento} </td>
                <td style={{ textAlign: 'center' }}> <button onClick={() => deleteVeiculo(veiculo.id)}
                  type="button" className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </Container>

    </>
  )
}