import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './components/Form/form.module.css'

import Form from './components/Form/Form'



function App() {

  return (
    <>
      <div className={styles.app}>
        <Form />
      </div>
    </>
  )
}

export default App
