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

function App() {
  const [isVisibleModalT, setIsVisibleModalT] = useState(false)
  const [isVisibleModalR, setIsVisibleModalR] = useState(false)

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


  return (
    <>
      <TransportadoraProvider>
        <RotaProvider>
          <Header abrirModalTrans={abrirModalTrans} abrirModalRotas={abrirModalRotas} />
          <Carrousel />
          <GloblaStyle />
          <Outlet />
          <Line />
          <Footer />
          <ModalRota modalRVisibleR={isVisibleModalR} fecharModalR={fecharModalR} />
        </RotaProvider>
        <ModalTransportadora
          modalVisibleT={isVisibleModalT}
          fecharModalT={fecharModalT}
        />
      </TransportadoraProvider>
    </>
  )
}

export default App
