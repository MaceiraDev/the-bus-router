import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { ITransportadora } from "../interfaces/interfaces";


interface PropsTransportadoraContext {
  transportadoras: Array<ITransportadora>
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
      const data = res.data.transportadora
      setTransportadoras(data)
    })
  }, [])


  return (
    <TransportadoraContext.Provider value={{
      transportadoras,
    }}>
      {children}
    </TransportadoraContext.Provider>
  )
}
