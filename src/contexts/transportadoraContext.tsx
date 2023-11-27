/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, ReactNode, createContext, useState } from "react";
import { ITransportadora } from "../interfaces/interfaces";



interface Transportadoras {
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  sitio: string;
}

interface TransportadorasWithID {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  sitio: string;
}

interface DataEditarTransportadora {
  editar: boolean;
  transportadora: TransportadorasWithID | null;
}

interface PropsTransportadoraContext {
  transportadoras: Array<ITransportadora>
  createTransportadora: (transportadoras: ITransportadora) => Promise<void>;
  updateTransportadora: (transportadoras: TransportadorasWithID) => Promise<void>     //
  funEditarTransportadora: (transportadoras: DataEditarTransportadora) => void; //
  funSetTransportadoraDefault: () => void; //
  editarTransportadora: DataEditarTransportadora; //
  deletarTransportadora: (transportadoras: ITransportadora) => Promise<void>
}
export const TransportadoraContext = createContext(
  {} as PropsTransportadoraContext
)


interface PropstransportadoraProvider {
  children: ReactNode

}

export function TransportadoraProvider({ children }: PropstransportadoraProvider) {

  const [transportadoras, setTransportadoras] = useState([])
  const [editarTransportadora, setEditarTransportadoras] = useState<DataEditarTransportadora>({editar: false, transportadora: null}) //



  useEffect(() => {
    axios.get("http://localhost:3000/transportadoras").then((res) => {
      const data = res.data
      console.log(res.data)
      setTransportadoras(data)
    })
  }, [])


  async function createTransportadora(data: ITransportadora) {
    const resposta = await axios.post('http://localhost:3000/transportadoras', data)
    axios.get('http://localhost:3000/transportadoras')
      .then((res) => {
        const data = res.data
        setTransportadoras(data)
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

  async function updateTransportadora(data: TransportadorasWithID) {  //
    await axios.put('http://localhost:3000/transportadoras/' + data)  //
    axios.get('http://localhost:3000/transportadoras/') //
    .then((res) => { //
        setTransportadoras(res.data.transportadoras) //
    }) //
  } //

  function funSetTransportadoraDefault() {  //
    setEditarTransportadoras({editar: false, transportadora: null}) //
  } //

  function funEditarTransportadora(data: DataEditarTransportadora) {  //
      setEditarTransportadoras(data)  //
  } //

  return (
    <TransportadoraContext.Provider value={{
      transportadoras,
      createTransportadora,
      editarTransportadora,
      funEditarTransportadora,
      funSetTransportadoraDefault,
      updateTransportadora,
      deletarTransportadora,
    }}>
      {children}
    </TransportadoraContext.Provider>
  )
}
