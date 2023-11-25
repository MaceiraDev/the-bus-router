import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { ITransportadora } from "../interfaces/interfaces";


interface PropsTransportadoraContext {
  transportadoras: Array<ITransportadora>
  createTransportadora: (transportadoras: ITransportadora) => Promise<void>;
}
export const TransportadoraContext = createContext(
  {} as PropsTransportadoraContext
)


interface PropstransportadoraProvider {
  children: ReactNode

}

export function TransportadoraProvider({ children }: PropstransportadoraProvider) {

  const [transportadoras, setTransportadoras] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3000/transportadoras").then((res) => {
      const data = res.data
      setTransportadoras(data)
    })
  }, [])


  async function createTransportadora(data: ITransportadora) {
    const resposta = await axios.post('http://localhost:3000/transportadoras', data)
    axios.get('http://localhost:3000/transportadoras')//5min
      .then((res) => {
        const data = res.data
        setTransportadoras(data)
      })
  }

  return (
    <TransportadoraContext.Provider value={{
      transportadoras,
      createTransportadora,
    }}>
      {children}
    </TransportadoraContext.Provider>
  )
}
