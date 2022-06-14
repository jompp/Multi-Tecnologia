import React, { useState } from 'react'
import { Brand } from '../../components/brand/Brand'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import './Contact.css'
import api from '../../services/api'
import { Loading } from '../../components/loading/Loading'

export function Contact() {
    const [user, setUser] = useState({
        userName: '',
        userPhone: '',
        userEmail: '',
        userMessage: ''
      })
    
    const [status, setStatus] = useState({type: '', message: ''}),
    [statusName, setStatusName] = useState({type: '', message: ''}), 
    [statusPhone, setStatusPhone] = useState({type: '', message: ''}),
    [statusEmail, setStatusEmail] = useState({type: '', message: ''}),
    [statusMessage, setStatusMessage] = useState({type: '', message: ''}),
    [sending, setSending] = useState(false)
    
    function validate(){
        let erro = false;
        if(!user.userName || user.userName.trim() == "") {
            setStatusName({type: 'error', message: 'Necessário preencher esse campo!'})
            erro = true
        }
        else if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(user.userName)) {
            setStatusName({ type: 'error', message: 'Preencha esse campo apenas com letras' })
            erro = true
        }
        else {
            setStatusName({ type: 'success' })
        }
        if (!user.userEmail) {
            setStatusEmail({ type: 'error', message: 'Necessário preencher esse campo!' })
            erro = true
        }
        else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.userEmail)) {
            setStatusEmail({ type: 'error', message: 'Preencha esse campo com um email válido' })
            erro = true
        }
        else {
            setStatusEmail({ type: 'success' })
        }
        if (!user.userPhone) {
            setStatusPhone({ type: 'error', message: 'Necessário preencher esse campo!' })
            erro = true
        }
        else if (!/^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(user.userPhone)) {
            setStatusPhone({ type: 'error', message: 'Preencha esse campo com número de celular ou telefone fixo válido' })
            erro = true
        }
        else {
            setStatusPhone({ type: 'success' })
        }
        if(!user.userMessage || user.userMessage.trim() == "") {
            setStatusMessage({type: 'error', message: 'Necessário preencher esse campo!'})
            erro = true
        }
        else {
            setStatusMessage({ type: 'success' })
        }
        return erro
    }

    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value })

    const sendForm = async e => {
        e.preventDefault()

        setStatus({type: '', message: ''})

        if(validate() == false) {
            setSending(true)

            const res = await api.post('/form-contato',
            {
                name: user.userName,
                phone: user.userPhone,
                email: user.userEmail,
                message: user.userMessage
            })
            console.log(res)
            setSending(false)   
            
            if(res.status == 200) {
                console.log(res)
                setStatus({
                    type: 'success',
                    message: "Messagem enviada com sucesso!"
                })
                setUser({
                    userName: '',
                    userPhone: '',
                    userEmail: '',
                    userMessage: ''
                })
            }
            else {
                setStatus({
                    type: 'error',
                    message: "Erro: Messagem não enviada com sucesso!"
                })
            }
        }
    }

    document.title = 'Entre em Contato - Multi Geotecnologia'

    return (
    <>
        <Header />
        <main>
            <Brand sectionTitle='Contato' />
            <div className='ctt-txt-box'>
                <h2>Entre em contato com a gente! Conheça a nossa empresa e contrate os nossos serviços.</h2>
            </div>
            <section className='form-box'>
                <h3>Nos envie uma messagem</h3>
                <form className='ctt-form' action="/form-contato" method="post">
                    <div className='input-err-box'>
                        <input className={statusName.type === 'error' ? 'invalid-input' : ''} type="text" name='userName' placeholder='Nome completo' onChange={valueInput} value={user.userName} required maxLength={40}/>
                        {statusName.type === 'error' ? <p className='input-err-msg'>{statusName.message}</p> : ''}
                    </div>
                    <div className='input-err-box'>
                        <input className={statusPhone.type === 'error' ? 'invalid-input' : ''} type="tel" name='userPhone' placeholder='Telefone' onChange={valueInput} value={user.userPhone} required maxLength={40}/>
                        {statusPhone.type === 'error' ? <p className='input-err-msg'>{statusPhone.message}</p> : ''}
                    </div>
                    <div className='input-err-box'>   
                        <input className={statusEmail.type === 'error' ? 'invalid-input' : ''} type="email" name='userEmail' placeholder='Email' onChange={valueInput} value={user.userEmail} required maxLength={50}/>
                        {statusEmail.type === 'error' ? <p className='input-err-msg'>{statusEmail.message}</p> : ''}
                    </div>
                    <div className='input-err-box'>
                        <textarea className={statusMessage.type === 'error' ? 'invalid-input' : ''} name="userMessage" placeholder='Deixe aqui sua messagem' onChange={valueInput} value={user.userMessage} required maxLength={294}></textarea>
                        {statusMessage.type === 'error' ? <p className='input-err-msg'>{statusMessage.message}</p> : ''}
                    </div>
                    <div className='msg-status-box'>
                        {status.type === 'error' && statusMessage.type === 'success' ? <p className='not-send-msg'>{status.message}</p> : ''}
                        {status.type === 'success' && statusMessage.type === 'success' ? <p className='send-msg'>{status.message}</p> : ''}
                    </div>
                    <button onClick={sendForm} className='submit-btn' type="submit">{sending ? <Loading /> : 'Enviar'}</button>
                </form>
            </section>
        </main>
        <Footer />
    </>
  )
}
