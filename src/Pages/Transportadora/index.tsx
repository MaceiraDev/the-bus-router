import { useContext } from 'react';
import { TransportadoraContext, TransportadoraProvider } from './../../contexts/transportadoraContext'
export const Transportadora = () => {

  const { transportadoras } = useContext(TransportadoraContext)
  const context = useContext(TransportadoraContext);

  console.log(transportadoras)

  return (
    <>
      <TransportadoraProvider>
        <h1>Transportadora aqui</h1>
      </TransportadoraProvider>
    </>
  )
}