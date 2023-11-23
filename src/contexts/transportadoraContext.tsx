import axios from "axios";
import { useEffect, ReactNode, createContext } from "react";


interface ITransportadora {
  id: number;
  nome: string;
  endereco: string;
  telefone: number;
  email: string;
  sitio: string;
}

interface PropsTransportadoraContext {
  transportadora:Array<ITransportadora>
}
export const TransportadoraContext = createContext(
  {} as PropsTransportadoraContext
)




interface PropstransportadoraProvider {
  children: ReactNode
}

export function transportadoraProvider({ children }: PropstransportadoraProvider) {

  useEffect(() => {
    console.log("caiu aq")
    var teste = axios.get("http://localhost:3000/transportadora").then((res) => {
      console.log(teste)
      console.log(res.data)
    })

  })

  return (
    <TransportadoraContext.Provider value={{
      transportadora,
    }}>
      {children}
    </TransportadoraContext.Provider>
  )
}
