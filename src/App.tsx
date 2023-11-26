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

function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  function abrirModalTrans() {
    setIsVisibleModal(true)
  }

  function fecharModal() {
    setIsVisibleModal(false)
  }


  return (
    <>
      <TransportadoraProvider>
        <RotaProvider>
          <Header abrirModalTrans={abrirModalTrans} />
          <Carrousel />
          <GloblaStyle />
          <Outlet />
          <Line />
          <Footer />
        </RotaProvider>
        <ModalTransportadora
          modalVisible={isVisibleModal}
          fecharModal={fecharModal}
        />
      </TransportadoraProvider>
    </>
  )
}

export default App
