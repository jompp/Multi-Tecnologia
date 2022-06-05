import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'

export default function Header() {
  return (
    <header>
        <figure>
            <img src={logo} alt="Logo" />
            <figcaption>Multi Geotecnologia - Soluções em Geoprocessamento</figcaption>
        </figure>
        <nav>
            <ul>
                <li>Página Incial</li>
                <li>Nossos Serviços</li>
                <li>Seja um Parceiro</li>
                <li id='lastOneHeader'>Contato</li>
            </ul>
        </nav>
    </header>
  )
}
