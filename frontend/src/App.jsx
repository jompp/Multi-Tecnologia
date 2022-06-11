import './App.css'

import { Home } from '../public/pages/Home/Home'
import { OurServices } from '../public/pages/OurServices/OurServices'
import { Cases } from '../public/pages/Cases/Cases'
import { Contact } from '../public/pages/Contact/Contact'
import { Partnership } from '../public/pages/Partnership/Partnership'

import { BrowserRouter, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicos' element={<OurServices />} />
          <Route path='/cases' element={<Cases />} />
          <Route path='/parceria' element={<Partnership />} />
          <Route path='/contato' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
