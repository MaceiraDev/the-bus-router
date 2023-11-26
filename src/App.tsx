//import { useState } from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { GloblaStyle } from "./style/global"
import { Footer } from "./components/Footer"
import { TransportadoraProvider } from "./contexts/transportadoraContext"
import { RotaProvider } from "./contexts/rotaContext"
import { Carrousel } from "./components/Carrousel"
import { ModalTransportadora } from "./components/ModalTransportadora"
import { useState } from "react"
import { Line } from "./components/LineRouteTheBus"
import { ModalRota } from "./components/ModalRota"
import { VeiculoProvider } from "./contexts/veiculoContext"
import { ModalVeiculo } from "./components/ModalVeiculo"

function App() {
  const [isVisibleModalT, setIsVisibleModalT] = useState(false)
  const [isVisibleModalR, setIsVisibleModalR] = useState(false)
  const [isVisibleModalV, setIsVisibleModalV] = useState(false)

  function abrirModalTrans() {
    setIsVisibleModalT(true)
  }

  function fecharModalT() {
    setIsVisibleModalT(false)
  }

  function abrirModalRotas() {
    setIsVisibleModalR(true)
  }
  function fecharModalR() {
    setIsVisibleModalR(false)
  }


  function abrirModalVeiculos() {
    setIsVisibleModalV(true)
  }
  function fecharModalVeiculos() {
    setIsVisibleModalV(false)
  }


  return (
    <>
      <VeiculoProvider>
        <TransportadoraProvider>
          <RotaProvider>
            <Header abrirModalTrans={abrirModalTrans} abrirModalRotas={abrirModalRotas} abrirModalVeiculos={abrirModalVeiculos} />
            <Carrousel />
            <GloblaStyle />
            <Outlet />
            <Line />
            <Footer />
            <ModalRota modalRVisibleR={isVisibleModalR} fecharModalR={fecharModalR} />
          </RotaProvider>
          <ModalTransportadora modalVisibleT={isVisibleModalT} fecharModalT={fecharModalT}
          />
        </TransportadoraProvider>
        <ModalVeiculo modalVisibleV={isVisibleModalV} fecharModalV={fecharModalVeiculos} />
      </VeiculoProvider>
    </>
  )
}

export default App
