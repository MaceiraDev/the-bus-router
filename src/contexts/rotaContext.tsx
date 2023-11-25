import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { IRotas } from "../interfaces/interfaces";

interface PropsRotaContext {
  rotas: Array<IRotas>
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

  return (
    <RotaContext.Provider value={{
      rotas,
    }}>
      {children}
    </RotaContext.Provider>
  )
}
