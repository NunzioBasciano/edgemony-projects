import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/layout.css'
import { Keyboard } from './components/components/Keyboard/Keyboard'
import { Display } from './components/components/Display/Display'

function App() {



  return (
    <>
      <div className="container">
        <div className="container-calculator">
          <Display />
          <Keyboard />
          <div className="line"></div>
        </div>
      </div>

    </>
  )
}

export default App
