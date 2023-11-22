//import { useState } from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { GloblaStyle } from "./style/global"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <GloblaStyle />
      <Outlet />
      <h1>Teste</h1>
      <Footer />
    </>
  )
}

export default App
