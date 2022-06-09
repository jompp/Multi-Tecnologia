import './App.css'
import { Home } from './pages/Home/Home'
import { OurServices } from './pages/OurServices/OurServices'
import { Cases } from './pages/Cases/Cases'
import { Contact } from './pages/Contact/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicos' element={<OurServices />} />
          <Route path='/cases' element={<Cases />} />
          <Route path='/parceria' element={<Home />} />
          <Route path='/contato' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
