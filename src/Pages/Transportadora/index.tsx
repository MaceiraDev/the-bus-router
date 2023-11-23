import { useContext } from 'react';
import { TransportadoraContext } from './../../contexts/transportadoraContext'

export const Transportadora = () => {
  const context = useContext(TransportadoraContext);
  console.log("ss")
  return (
    <>
      <h1>Transportadora aqui</h1>
    </>
  )
}