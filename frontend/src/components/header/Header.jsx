import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'auto'
    });
  }

  export function Header() {
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
            <li onClick={scrollToTop}><Link to="/">Página Inicial</Link></li>
            <li onClick={scrollToTop}><Link to="/servicos">Nossos Serviços</Link></li>
            <li onClick={scrollToTop}><Link to="/cases">Cases</Link></li>
            <li onClick={scrollToTop}><Link to="/">Seja um Parceiro</Link></li>
            <li onClick={scrollToTop}><Link to="/">Contato</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
