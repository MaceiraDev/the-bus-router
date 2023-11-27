import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { IVeiculos } from "../interfaces/interfaces";


interface PropsVeiculoContext {
  veiculos: Array<IVeiculos>
  createVeiculo: (veiculos: IVeiculos) => Promise<void>;
  deleteVeiculo: (veiculos: IVeiculos) => Promise<void>
}
export const VeiculoContext = createContext(
  {} as PropsVeiculoContext
)


interface PropsveiculoProvider {
  children: ReactNode

}

export function VeiculoProvider({ children }: PropsveiculoProvider) {

  const [veiculos, setVeiculos] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3000/veiculos").then((res) => {
      const data = res.data
      setVeiculos(data)
    })
  }, [])


  async function createVeiculo(data: IVeiculos) {
    const resposta = await axios.post('http://localhost:3000/veiculos', data)
    axios.get('http://localhost:3000/veiculos')
      .then((res) => {
        const data = res.data
        setVeiculos(data)
      })
  }

  async function deleteVeiculo(data: IVeiculos) {
    await axios.delete('http://localhost:3000/veiculos/' + data, {
      data: data
    })
    axios.get('http://localhost:3000/veiculos')
      .then((res) => {
        const data = res.data
        setVeiculos(data)
      })
  }



  return (
    <VeiculoContext.Provider value={{
      veiculos,
      createVeiculo,
      deleteVeiculo,
    }}>
      {children}
    </VeiculoContext.Provider>
  )
}
