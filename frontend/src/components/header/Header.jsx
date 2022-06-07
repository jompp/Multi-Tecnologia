import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'

export function Header({ changePage }) {


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
            <li onClick={() => changePage("Home")}>Página Incial</li>
            <li onClick={() => changePage("Nossos Serviços")}>Nossos Serviços</li>
            <li onClick={() => changePage("Cases")}>Cases</li>
            <li>Seja um Parceiro</li>
            <li id='lastOneHeader'>Contato</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
