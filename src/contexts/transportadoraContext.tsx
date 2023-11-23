import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";


interface ITransportadora {
  id: number;
  nome: string;
  endereco: string;
  telefone: number;
  email: string;
  sitio: string;
}

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
    console.log("caiu aq")
    axios.get("http://localhost:3000/transportadoras").then((res) => {
      console.log(res.data)
      setTransportadoras(res.data.transportadoras)

    })

  })

  return (
    <TransportadoraContext.Provider value={{
      transportadoras,
    }}>
      {children}
    </TransportadoraContext.Provider>
  )
}
