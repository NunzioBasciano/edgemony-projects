import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Card } from './components/Card/Card'
import { Button } from './components/Button/Button'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'



function App() {

  return (
    <>
      <Header
        logoUrl={'https://csite.nicepage.com/Images/logo-w.png'}
        logoClassName={'logo'}
        closeUrl={'https://csite.nicepage.com/Images/Site/icon-close.png'}
        closeClassName={'close'}
      />
      <div className="container-card">

        <Card
          title={'Communication strategy'}
          src={'https://images.placesonline.com/photos/london-eye_341905184_179957_1669893428.jpg?quality=80&w=700'}
          item1={'Verbal identity'}
          item2={'Tagline exploration'
          }
          item3={'Communication style guide'}
          className={'product-card'}
          buttonClassName={'fucsia'}
          buttonValue={'click me'}
        ></Card>
        <Card
          title={'Brand strategy'}
          src={'https://www.lunediacolazione.it/wp-content/uploads/2023/05/new-york-insolita-2.jpg'}
          item1={'Brand equity audit'}
          item2={'Audience analysis'}
          item3={'Competitive review'}
          className={'product-card'}
          buttonClassName={'fucsia'}
          buttonValue={'click me'}
        ></Card>
        <Card
          title={'Brand identity'}
          src={'https://www.grazia.it/content/uploads/2024/06/Gelati-Grazia-2024.png'}
          item1={'Visual positioning'}
          item2={'Visual identity system'}
          item3={'Icon & illustration guides'}
          className={'product-card'}
          buttonClassName={'fucsia'}
          buttonValue={'click me'}
        ></Card>

      </div >
      <Footer></Footer>
    </>
  )
}

export default App
