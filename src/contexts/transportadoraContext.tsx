/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { ITransportadora } from "../interfaces/interfaces";
import { Loading } from "../components/Loader";


interface DataEditarTransportadora {
  editar: boolean;
  transportadora: ITransportadora | null;
}

interface PropsTransportadoraContext {
  transportadoras: Array<ITransportadora>
  createTransportadora: (transportadoras: ITransportadora) => Promise<void>;
  updateTransportadora: (transportadoras: ITransportadora) => Promise<void>;
  deletarTransportadora: (transportadoras: ITransportadora) => Promise<void>;
  editarTransportadora: (transportadoras: DataEditarTransportadora) => void;
  editarTrans: DataEditarTransportadora;
}
export const TransportadoraContext = createContext(
  {} as PropsTransportadoraContext
)


interface PropstransportadoraProvider {
  children: ReactNode

}

export function TransportadoraProvider({ children }: PropstransportadoraProvider) {

  const [transportadoras, setTransportadoras] = useState([])
  const [editarTrans, setEditarTrans] = useState<DataEditarTransportadora>({editar: false, transportadora: null})
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    axios.get("http://localhost:3000/transportadoras").then((res) => {
      const data = res.data
      setTransportadoras(data)
    })
  }, [])


  async function createTransportadora(data: ITransportadora) {
    setLoading(true)
    const resposta = await axios.post('http://localhost:3000/transportadoras', data)
    axios.get('http://localhost:3000/transportadoras')
      .then((res) => {
        const data = res.data
        setTransportadoras(data)
        setLoading(false)
      })
  }

  async function deletarTransportadora(data: ITransportadora) {
    await axios.delete('http://localhost:3000/transportadoras/' + data, {
      data: data
    })
    axios.get('http://localhost:3000/transportadoras')
      .then((res) => {
        const data = res.data
        setTransportadoras(data)
      })
  }

  async function updateTransportadora(data: ITransportadora) {
    await axios.put('http://localhost:3000/transportadoras/' + data, {
      data: data
    })
    console.log("async function updateTransportadora")
    axios.get('http://localhost:3000/transportadoras')
      .then((res) => {
        const data = res.data.transportadoras
        setTransportadoras(data)
      })
  }

  function editarTransportadora(data: DataEditarTransportadora) {
    console.log("Função editarTransportadora")
    setEditarTrans(data)
  }



  return (
    <TransportadoraContext.Provider value={{
      transportadoras,
      createTransportadora,
      editarTrans,
      deletarTransportadora,
      editarTransportadora,
      updateTransportadora,
    }}>
      <Loading visible={loading} />
      {children}
    </TransportadoraContext.Provider>
  )
}