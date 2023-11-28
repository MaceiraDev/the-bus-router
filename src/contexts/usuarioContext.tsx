/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { IUsuarios } from "../interfaces/interfaces";
import { Loading } from "../components/Loader";

interface PropsVeiculoContext {
  usuarios: Array<IUsuarios>
  createUsuario: (usuarios: IUsuarios) => Promise<void>;
  deleteUsuario: (usuarios: IUsuarios) => Promise<void>
}
export const UsuarioContext = createContext(
  {} as PropsVeiculoContext
)


interface PropsusuarioProvider {
  children: ReactNode

}

export function UsuarioProvider({ children }: PropsusuarioProvider) {

  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    axios.get("http://localhost:3000/usuarios").then((res) => {
      const data = res.data
      setUsuarios(data)
    })
  }, [])


  async function createUsuario(data: IUsuarios) {
    setLoading(true)
    const resposta = await axios.post('http://localhost:3000/usuarios', data)
    axios.get('http://localhost:3000/usuarios')
      .then((res) => {
        const data = res.data
        setUsuarios(data)
        setLoading(false)
      })
  }

  async function deleteUsuario(data: IUsuarios) {
    await axios.delete('http://localhost:3000/usuarios/' + data, {
      data: data
    })
    axios.get('http://localhost:3000/usuarios')
      .then((res) => {
        const data = res.data
        setUsuarios(data)
      })
  }



  return (
    <UsuarioContext.Provider value={{
      usuarios,
      createUsuario,
      deleteUsuario,
    }}>
      <Loading visible={loading} />
      {children}
    </UsuarioContext.Provider>
  )
}
