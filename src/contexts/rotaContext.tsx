/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { IRotas } from "../interfaces/interfaces";

interface PropsRotaContext {
  rotas: Array<IRotas>
  newRota: (rotas: IRotas) => Promise<void>;
  deleteRota: (rotas: IRotas) => Promise<void>
}

export const RotaContext = createContext(
  {} as PropsRotaContext
)

interface PropsrotaProvider {
  children: ReactNode
}

export function RotaProvider({ children }: PropsrotaProvider) {

  const [rotas, setRotas] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/rotas");
      const data = response.data;
      setRotas(data);
    };

    fetchData();
  }, []);


  async function newRota(data: IRotas) {
    const resposta = await axios.post('http://localhost:3000/rotas', data)
    axios.get('http://localhost:3000/rotas')
      .then((res) => {
        const data = res.data
        setRotas(data)
      })
  }

  async function deleteRota(data: IRotas) {
    await axios.delete('http://localhost:3000/rotas/' + data, {
      data: data
    })
    axios.get('http://localhost:3000/rotas')
      .then((res) => {
        const data = res.data
        setRotas(data)
      })
  }

  return (
    <RotaContext.Provider value={{
      rotas,
      newRota,
      deleteRota,
    }}>
      {children}
    </RotaContext.Provider>
  )
}
