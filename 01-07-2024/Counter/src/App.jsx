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
  const [count, setCount] = useState(0); // Lo useState è un hook che permette di aggiornare lo stato di una variabile. Lo 0 è il valore iniziale della variabile.
  // Gli hook sono funzioni che permettono di modificare lo stato di una variabile.

  function handleClick(e) {
    if (e.target.id === 'plus-button') { setCount(count + 1) }
    else if (e.target.id === 'sub-button') { setCount(count - 1) }
    else if (e.target.id === 'reset-button') { setCount(0) }
    else if (e.target.id === 'random-button') { setCount(randomNumber()) }
  }

  function isPair(number) {
    return number % 2 === 0;
  }

  function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  return (
    <div className="container-counter">
      <div className="container-up">
        <Button
          disabled={count === 0}
          onClick={handleClick}
          id={'sub-button'}
          value={'-'} />
        <Counter
          value={count}
          className={(isPair(count)) ? 'pair' : 'shots'} />
        <Button
          onClick={handleClick}
          id={'plus-button'}
          value={'+'}
        />
      </div>
      <div className="container-down">
        <Button
          onClick={handleClick}
          id={'reset-button'}
          value={'Reset'}
        />
        <Button
          onClick={handleClick}
          id={'random-button'}
          value={'Random'}
        />
      </div>
    </div>
  )
}

export default App
