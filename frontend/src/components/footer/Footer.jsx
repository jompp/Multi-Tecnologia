import React from 'react'
import './Footer.css'
import logo from '../../images/logo.png'
import facebook from '../../images/socials/facebook.svg'
import twitter from '../../images/socials/twitter.svg'
import instagram from '../../images/socials/instagram.svg'
import linkedin from '../../images/socials/linkedin.svg'

export function Footer() {
  return (
    <footer>
        <div className='footer-box'>
            <div className='footer-contact-us-box'>
                <img src={logo} alt="Logo" />
                <button className='footer-btn' onClick={() => window.location.href='/'}>Fale conosco</button>
            </div>
            <div className='socials-box'>
                <p>Siga-nos nas redes</p>
                <a href=""><img src={facebook} alt="Ícone do Facebook" /></a>
                <a href=""><img src={instagram} alt="Ícone do Instagram" /></a>
                <a href=""><img src={linkedin} alt="ícone do LinkedIn" /></a>
            </div>
        </div>
    </footer>
  )
}
