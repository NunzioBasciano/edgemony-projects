import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/Button/Button.jsx'
/* import { Counter } from './components/Counter/Counter.jsx' */
import './App.css'
import './styles/reset.css'
import Counter from './components/Counter/Counter.jsx'

function App() {
  /* Il fotografo che permette di aggiornare le porzioni della pagina */
  const [Count, setCount] = useState(0); // Lo useState è un hook che permette di aggiornare lo stato di una variabile. Lo 0 è il valore iniziale della variabile.
  // Gli hook sono funzioni che permettono di modificare lo stato di una variabile.

  function handleClick(e) {
    (e.target.id === 'plus-button') ? setCount(Count + 1) : setCount(Count - 1);
  }

  function isPair(number) {
    return number % 2 === 0;
  }

  return (
    <div className="container-counter">
      <Button
        disabled={Count === 0}
        onClick={handleClick}
        id={'sub-button'}
        value={'-'} />
      <Counter
        value={Count}
        className={(isPair(Count)) ? 'pair' : 'shots'} />
      <Button
        onClick={handleClick}
        id={'plus-button'}
        value={'+'}
      />
    </div>
  )
}

export default App
