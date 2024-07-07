import React, { useState } from 'react';
import './styles/App.css'
import Form from './components/Form/Form';
import ResultComponent from './components/ResultComponent/ResultComponent';


function App() {

  const inputDefault = {
    mortgage_amount: '',
    mortgage_term: '',
    interest_rate: '',
    mortgage_type: ''
  }

  const [input, setInput] = useState(inputDefault);
  const [totalRate, setTotalRates] = useState(null);
  const [totalMortgage, setTotalMortgage] = useState(null);
  const [totalMortgageInterest, setTotalMortgageInterest] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function getInterest(interestRate, mortgage_amount) {
    return parseFloat(mortgage_amount * interestRate / 100);
  }

  function getTotal(mortgage_amount, interest) {
    return parseFloat(mortgage_amount) + parseFloat(interest);
  }

  function getRates(total, mortgage_term) {
    return parseFloat(total / mortgage_term / 12);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (input.mortgage_amount !== '' && input.mortgage_term !== '' && input.interest_rate !== '' && input.mortgage_type !== '') {
      const interest = getInterest(input.interest_rate, input.mortgage_amount);
      const total = getTotal(input.mortgage_amount, interest);
      const rate = getRates(total, input.mortgage_term);
      setTotalMortgage(total);
      setTotalMortgageInterest(interest);

      if (input.mortgage_type === 'repayment') {
        setTotalRates(rate);
      } else {
        setTotalRates(null);
      }
      setIsSubmitted(true);
    } else {
      alert('Please fill in all fields');
    }
  }

  return (
    <>
      <div className='app'>
        <Form input={input} setInput={setInput} handleSubmit={handleSubmit} />
        <ResultComponent input={input} totalRate={totalRate} totalMortgage={totalMortgage} totalMortgageInterest={totalMortgageInterest} isSubmitted={isSubmitted} />
      </div>
    </>
  )
}

export default App
