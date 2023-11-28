import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { ITransportadora } from "../interfaces/interfaces";
import { Loading } from "../components/Loader";

interface PropsTransportadoraContext {
  transportadoras: Array<ITransportadora>
  createTransportadora: (transportadoras: ITransportadora) => Promise<void>;
  deletarTransportadora: (transportadoras: ITransportadora) => Promise<void>;
  editarTransportadora: (transportadoras: ITransportadora) => Promise<void>;
}
export const TransportadoraContext = createContext(
  {} as PropsTransportadoraContext
)


interface PropstransportadoraProvider {
  children: ReactNode

}

export function TransportadoraProvider({ children }: PropstransportadoraProvider) {

  const [transportadoras, setTransportadoras] = useState([])
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

  async function editarTransportadora(data: ITransportadora) {
    await axios.put('http://localhost:3000/transportadoras/' + data, {
      data: data
    })
    axios.get('http://localhost:3000/transportadoras')
      .then((res) => {
        const data = res.data
        setTransportadoras(data)
      })
  }



  return (
    <TransportadoraContext.Provider value={{
      transportadoras,
      createTransportadora,
      deletarTransportadora,
      editarTransportadora,
    }}>
      <Loading visible={loading} />
      {children}
    </TransportadoraContext.Provider>
  )
}