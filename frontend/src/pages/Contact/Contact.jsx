import React from 'react'
import { Brand } from '../../components/brand/Brand'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { SubmitButton } from '../../components/SubmitButton/SubmitButton'
import './Contact.css'

export function Contact() {
    return (
        <>
            <Header />
            <Brand sectionTitle='Contato' />
            <div>
                <div className='ctt-txt-box'>
                    <h3>Entre em contato com a gente! Conheça a nossa empresa e contrate os nossos serviços.</h3>
                </div>
                <div className='form-box'>
                    <h2>Nos envie uma mensagem</h2>
                    <form className='ctt-form' action="/form-contato" method="post">
                        <input type="text" name='userName' placeholder='Nome completo' required maxLength={40} />
                        <input type="tel" name='userPhones' placeholder='Telefone' required maxLength={40} />
                        <input type="email" name='userEmail' placeholder='Email' required maxLength={50} />
                        <textarea name="userMessage" placeholder='Deixe aqui sua mensagem' required maxLength={294}></textarea>
                        <SubmitButton value="Enviar" />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
