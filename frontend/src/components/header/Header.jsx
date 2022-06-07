import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'

export default function Header() {
  return (
    <header>
        <figure>
            <img src={logo} alt="Logo" />
            <figcaption><h1>Multi Geotecnologia - Soluções em Geoprocessamento</h1></figcaption>
        </figure>
        <nav>
            <input className="menu-hamburguer" type="checkbox" id="menu-checkbox" />
            <label className="menu-hamburguer" htmlFor="menu-checkbox">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <ul>
                <li>Página Incial</li>
                <li>Nossos Serviços</li>
                <li>Cases</li>
                <li>Seja um Parceiro</li>
                <li id='lastOneHeader'>Contato</li>
            </ul>
        </nav>
    </header>
  )
}
