//import { useState } from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { GloblaStyle } from "./style/global"
import { Footer } from "./components/Footer"
import { TransportadoraProvider } from "./contexts/transportadoraContext"
import { RotaProvider } from "./contexts/rotaContext"
import { Carrousel } from "./components/Carrousel"

function App() {

  return (
    <>
      <TransportadoraProvider>
        <RotaProvider>
          <Header />
          <Carrousel />
          <GloblaStyle />
          <Outlet />
          <Footer />
        </RotaProvider>
      </TransportadoraProvider>
    </>
  )
}

export default App
