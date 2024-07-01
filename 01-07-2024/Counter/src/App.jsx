import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/Button/Button.jsx'
/* import { Counter } from './components/Counter/Counter.jsx' */
import './App.css'
import Counter from './components/Counter/Counter.jsx'

function App() {
  /* Il fotografo che permette di aggiornare le porzioni della pagina */
  const [Count, setCount] = useState(0); // Lo useState è un hook che permette di aggiornare lo stato di una variabile. Lo 0 è il valore iniziale della variabile.
  // Gli hook sono funzioni che permettono di modificare lo stato di una variabile.


  function handleClick(e) {
    (e.target.id === 'plus-button') ? setCount(Count + 1) : setCount(Count - 1);
  }

  return (
    <>
      <Button
        onClick={handleClick}
        id={'plus-button'}
        value={'+'}
      />
      <Counter
        value={Count} />

      <Button
        onClick={handleClick}
        id={'sub-button'}
        value={'-'} />
    </>
  )
}

export default App
