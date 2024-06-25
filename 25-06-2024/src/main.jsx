import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/* Questo file è il punto d'accesso di react. Stiamo dicendo di creare la nostra
app sull'elemento con id root */
const element = document.getElementById('root');
ReactDOM.createRoot(element).render(
  /* Componente (tag html con iniziale maiuscola) che scova bug */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);