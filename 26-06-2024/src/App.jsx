import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/layout.css'
import { Header } from './components/Header/Header.jsx'
import { Main } from './components/Main/Main.jsx'
import { Footer } from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )



}

export default App
