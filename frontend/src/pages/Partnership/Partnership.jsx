import { Brand } from '../../components/brand/Brand'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { SubmitButton } from '../../components/SubmitButton/SubmitButton'
import './Partnership.css'

export function Partnership() {
    return (
        <div>
            <Header />
            <Brand sectionTitle="Seja um Parceiro" />
            <div className='pts-txt-box'>
                <h3>Seja um parceiro da Multi Geotecnologia! Junte-se a uma empresa que não para de crescer.</h3>
            </div>

            <div className="pts-form-box">
                <form className='pts-form' action="/form-parceria" method='post'>
                    <div className='fields'>
                        <div className='company-field'>
                            <h3>Dados da Empresa</h3>
                            <input type="text" name='companyName' placeholder='Nome da Empresa' required maxLength={40} />
                            <input type="text" name='companyAdress' placeholder='Endereço físico' required maxLength={40} />
                            <input type="tel" name='companyPhones' placeholder='Telefone Comercial' required maxLength={40} />
                            <input type="email" name='companyEmail' placeholder='Email' required maxLength={50} />
                        </div>


                        <div className='person-field'>
                            <h3>Dados do Responsável</h3>
                            <input type="text" name='userName' placeholder='Nome completo' required maxLength={40} />
                            <input type="tel" name='userPhones' placeholder='Telefone' required maxLength={40} />
                            <input type="email" name='userEmail' placeholder='Email' required maxLength={50} />
                            <input type="number" name='userAge' placeholder='Idade' required maxLength={50} />
                        </div>
                    </div>

                    <textarea name="userMessage" placeholder='mensagem' required maxLength={294}></textarea>

                    <SubmitButton value="Enviar" />
                </form>
            </div>

            <Footer />
        </div>
    )
}