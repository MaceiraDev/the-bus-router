//import { useState } from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { GloblaStyle } from "./style/global"
import { Footer } from "./components/Footer"
import { TransportadoraProvider } from "./contexts/transportadoraContext"

function App() {

  return (
    <>
      <TransportadoraProvider>
        <Header />
        <GloblaStyle />
        <Outlet />
        <Footer />
      </TransportadoraProvider>
    </>
  )
}

export default App
