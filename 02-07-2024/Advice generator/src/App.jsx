import { useState } from 'react'
import './App.css'
import Card from './components/card/Card.jsx'
import adviceArray from './components/data/advices.jsx'

function App() {

  const [message, setMessage] = useState(1);

  function handleClick(e) {
    if (e.target.id) {
      setMessage(randomNumber())
    }
  }

  function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const currentAdvice = adviceArray.find(advice => advice.id === message);
  const title = currentAdvice.id;
  const description = currentAdvice.advice;

  return (

    <Card
      title={title}
      description={description}
      onClick={handleClick}
    />
  )
}

export default App
