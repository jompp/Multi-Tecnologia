import { Home } from './pages/Home/Home'
import { Us } from './pages/Us/Us'
import { OurServices } from './pages/OurServices/OurServices'

import './App.css'
import { useState } from 'react'

function App() {

  const [page, setPage] = useState("Home")

  return (
    <div>

      <header id="header">
        <button onClick={() => setPage("Home")}>Home</button>
        <button onClick={() => setPage("Nossos Serviços")}>Nossos Serviços</button>
      </header>

      <div id='brand'><h1>{page == "Home" ? "Multi Geotecnologia" : ''} {page == "Nossos Serviços" ? "Nossos Serviços" : ''}</h1></div>


      {page == "Home" ? <Home /> : null}
      {page == "Nossos Serviços" ? <OurServices /> : null}


      <footer></footer>
    </div>

  )
}

export default App
