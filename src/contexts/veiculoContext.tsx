import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { IVeiculos } from "../interfaces/interfaces";


interface PropsVeiculoContext {
  veiculos: Array<IVeiculos>
  //createTransportadora: (transportadoras: ITransportadora) => Promise<void>;
  //deletarTransportadora: (transportadoras: ITransportadora) => Promise<void>
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


  // async function createTransportadora(data: ITransportadora) {
  //   const resposta = await axios.post('http://localhost:3000/transportadoras', data)
  //   axios.get('http://localhost:3000/transportadoras')
  //     .then((res) => {
  //       const data = res.data
  //       setTransportadoras(data)
  //     })
  // }

  // async function deletarTransportadora(data: ITransportadora) {
  //   await axios.delete('http://localhost:3000/transportadoras/' + data, {
  //     data: data
  //   })
  //   axios.get('http://localhost:3000/transportadoras')
  //     .then((res) => {
  //       const data = res.data
  //       setTransportadoras(data)
  //     })
  // }



  return (
    <VeiculoContext.Provider value={{
      veiculos,
      //createTransportadora,
      //deletarTransportadora,
    }}>
      {children}
    </VeiculoContext.Provider>
  )
}
