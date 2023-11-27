//import { useState } from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { GloblaStyle } from "./style/global"
import { Footer } from "./components/Footer"
import { TransportadoraProvider } from "./contexts/transportadoraContext"
import { RotaProvider } from "./contexts/rotaContext"
import { Carrousel } from "./components/Carrousel"
import { ModalRota } from "./components/ModalRota"
import { UsuarioProvider } from "./contexts/usuarioContext"
import { VeiculoProvider } from "./contexts/veiculoContext"
import { Line } from "./components/LineRouteTheBus"
import { ModalTransportadora } from "./components/ModalTransportadora"
import { ModalUsuario } from "./components/ModalUsuario"
import { ModalVeiculo } from "./components/ModalVeiculo"

function App() {

  function fecharModal() {
      setIsVisibleModal(false)
  }
  function fecharModalR(): void {
    throw new Error("Function not implemented.")
  }

  return (
    <>
      <UsuarioProvider>
        <VeiculoProvider>
          <TransportadoraProvider>
            <RotaProvider>
              <Header abrirModalTrans={abrirModalTrans} abrirModalRotas={abrirModalRotas} abrirModalVeiculos={abrirModalVeiculos} abrirModalUsuarios={abrirModalUsuario} />
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
        <ModalUsuario modalVisibleU={isVisibleModalU} fecharModalU={fecharModalUsuario} />
      </UsuarioProvider>
    </>
  )
}

export default App
function setIsVisibleModal(arg0: boolean) {
  throw new Error("Function not implemented.")
}

