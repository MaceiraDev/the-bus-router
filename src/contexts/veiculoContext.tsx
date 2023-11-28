/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { IVeiculos } from "../interfaces/interfaces";
import { Loading } from "../components/Loader";


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
  const [loading, setLoading] = useState<boolean>(false)



  useEffect(() => {
    axios.get("http://localhost:3000/veiculos").then((res) => {
      const data = res.data
      setVeiculos(data)
    })
  }, [])


  async function createVeiculo(data: IVeiculos) {
    setLoading(true)
    const resposta = await axios.post('http://localhost:3000/veiculos', data)
    axios.get('http://localhost:3000/veiculos')
      .then((res) => {
        const data = res.data
        setVeiculos(data)
        setLoading(false)
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
      <Loading visible={loading} />
      {children} 
    </VeiculoContext.Provider>
  )
}
