import React, { useState } from 'react';
import './App.css'
import Form from './components/Form/Form';
import ResultComponent from './components/ResultComponent/ResultComponent';

// Funzione principale del componente App
function App() {

  // Stato iniziale per i campi di input del form
  const inputDefault = {
    mortgage_amount: '',
    mortgage_term: '',
    interest_rate: '',
    mortgage_type: ''
  }

  // Stati per gestire gli input e i risultati
  const [input, setInput] = useState(inputDefault);
  const [totalRate, setTotalRates] = useState(null);
  const [totalMortgage, setTotalMortgage] = useState(null);
  const [totalMortgageInterest, setTotalMortgageInterest] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function   // Funzione per calcolare l'interesse
    getInterest(interestRate, mortgage_amount) {
    return parseFloat(mortgage_amount * interestRate / 100);
  }

  // Funzione per calcolare il totale del mutuo
  function getTotal(mortgage_amount, interest) {
    return parseFloat(mortgage_amount) + parseFloat(interest);
  }

  // Funzione per calcolare la rata mensile
  function getRates(total, mortgage_term) {
    return parseFloat(total / mortgage_term / 12);
  };

  // Funzione gestita quando si invia il form
  function handleSubmit(e) {
    e.preventDefault();

    // Controllo se tutti i campi del form sono completi
    if (input.mortgage_amount !== '' && input.mortgage_term !== '' && input.interest_rate !== '' && input.mortgage_type !== '') {

      // Calcolo degli interessi, del totale e della rata
      const interest = getInterest(input.interest_rate, input.mortgage_amount);
      const total = getTotal(input.mortgage_amount, interest);
      const rate = getRates(total, input.mortgage_term);

      // Imposta i risultati
      setTotalMortgage(total);
      setTotalMortgageInterest(interest);

      // Imposta la rata solo se il tipo di mutuo è "repayment"
      if (input.mortgage_type === 'repayment') {
        setTotalRates(rate);
        // altrimenti imposta null sulla rata 
      } else {
        setTotalRates(null);
      }
      // Imposta lo stato isSubmitted a true
      setIsSubmitted(true);
    } else {
      // Mostra un avviso se mancano campi da compilare
      alert('Please fill in all fields');
    }
  }

  return (
    <>
      <div className='app'>
        <Form
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
        <ResultComponent
          input={input}
          totalRate={totalRate}
          totalMortgage={totalMortgage}
          totalMortgageInterest={totalMortgageInterest}
          isSubmitted={isSubmitted}
        />
      </div>
    </>
  )
}

export default App
