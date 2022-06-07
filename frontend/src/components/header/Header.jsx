import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import { Link, useLocation } from 'react-router-dom'

  export function Header() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0, 
        behavior: 'auto'
      });
    }

    const [status, setStatus] = useState('home')  
    const url = useLocation().pathname;
    
    const changeRoute = () => {
      scrollToTop()
    }

    useEffect(() => {
      if(url == '/servicos') {
        setStatus('servicos') 
      }
      else if(url == '/cases') {
        setStatus('cases')
      }
      else {
        setStatus('home')
      }
    },[url])

    return (
    <div className='header-box'>
      <header>
        <figure>
          <img src={logo} alt="Logo" />
          <figcaption><h1>Multi Geotecnologia</h1></figcaption>
        </figure>
        <nav>
          <input className="menu-hamburguer" type="checkbox" id="menu-checkbox" />
          <label className="menu-hamburguer" htmlFor="menu-checkbox">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul>
            <li className={status == 'home' ? 'active' : ''} onClick={changeRoute}><Link to="/">Página Inicial</Link></li>
            <li className={status == 'servicos' ? 'active' : ''} onClick={changeRoute}><Link to="/servicos">Nossos Serviços</Link></li>
            <li className={status == 'cases' ? 'active' : ''} onClick={changeRoute}><Link to="/cases">Cases</Link></li>
            <li onClick={changeRoute}><Link to="/">Seja um Parceiro</Link></li>
            <li onClick={changeRoute}><Link to="/">Contato</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
