import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'

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
                  <li><a>Página Incial</a></li>
                  <li><a>Nossos Serviços</a></li>
                  <li><a>Cases</a></li>
                  <li><a>Seja um Parceiro</a></li>
                  <li><a>Contato</a></li>
              </ul>
          </nav>
      </header>
    </div>
  )
}
