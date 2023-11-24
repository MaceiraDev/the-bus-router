//import { useState } from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { GloblaStyle } from "./style/global"
import { Footer } from "./components/Footer"
import { TransportadoraProvider } from "./contexts/transportadoraContext"
import { RotaProvider } from "./contexts/rotaContext"

function App() {

  return (
    <>
      <TransportadoraProvider>
      <RotaProvider>
        <Header />
        <GloblaStyle />
        <Outlet />
        <Footer />
        </RotaProvider>
      </TransportadoraProvider>
    </>
  )
}

export default App
