import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { IUsuarios } from "../interfaces/interfaces";


interface PropsVeiculoContext {
  usuarios: Array<IUsuarios>
  // createVeiculo: (veiculos: IVeiculos) => Promise<void>;
  // deleteVeiculo: (veiculos: IVeiculos) => Promise<void>
}
export const UsuarioContext = createContext(
  {} as PropsVeiculoContext
)


interface PropsusuarioProvider {
  children: ReactNode

}

export function UsuarioProvider({ children }: PropsusuarioProvider) {

  const [usuarios, setUsuarios] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3000/usuarios").then((res) => {
      const data = res.data
      setUsuarios(data)
    })
  }, [])


  // async function createVeiculo(data: IVeiculos) {
  //   const resposta = await axios.post('http://localhost:3000/veiculos', data)
  //   axios.get('http://localhost:3000/veiculos')
  //     .then((res) => {
  //       const data = res.data
  //       setUsuarios(data)
  //     })
  // }

  // async function deleteVeiculo(data: IVeiculos) {
  //   await axios.delete('http://localhost:3000/veiculos/' + data, {
  //     data: data
  //   })
  //   axios.get('http://localhost:3000/veiculos')
  //     .then((res) => {
  //       const data = res.data
  //       setUsuarios(data)
  //     })
  // }



  return (
    <UsuarioContext.Provider value={{
      usuarios,
      // createVeiculo,
      // deleteVeiculo,
    }}>
      {children}
    </UsuarioContext.Provider>
  )
}
