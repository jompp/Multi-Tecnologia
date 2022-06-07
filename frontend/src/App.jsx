import { Header } from './components/header/Header'
import { Home } from './pages/Home/Home'
import { OurServices } from './pages/OurServices/OurServices'
import { Cases } from './pages/Cases/Cases'

import './App.css'
import { useState } from 'react'
import { Footer } from './components/footer/Footer'

function App() {

  const [page, setPage] = useState("Home")

  return (
    <div>

      <Header changePage={setPage} />

      <div className='space-complement'></div>

      <div id='brand'>
        <h1>{page == "Home" ? "Multi Geotecnologia" : ''} {page == "Nossos Serviços" ? "Nossos Serviços" : ''} {page == "Cases" ? "Cases" : ''}</h1>
      </div>

      {page == "Home" ? <Home /> : null}
      {page == "Nossos Serviços" ? <OurServices /> : null}
      {page == "Cases" ? <Cases /> : null}

      <Footer />
    </div>

  )
}

export default App
