import './Home.css'
import logo from '../../images/logo.png'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

export function Home() {
    return (
        <>
            <Header />

            <div className='space-complement'></div>

            <div id='brand'>
            
            </div>
            <div id="home">
            <main>

                <div id="services-container">
                    <section id="services-section"><h1>NOSSOS SERVIÇOS</h1></section>

                    <div id="paragrafos">
                        <div className='paragrafo'>
                            <h3>Coleta de dados</h3>

                            <p id="p-first">
                                Os coletores digitais tem como finalidade atualizar as
                                bases cadastrais e cartográficas, de forma
                                automatizada, segura e com alta produtividade.
                            </p>
                        </div>
                        <div className='paragrafo'>
                            <h3>Cadastros</h3>
                            <p id="p-second">
                                Utilizamos a gestão espacial do Cadastro Imobiliário,
                                Mobiliário e Logradouros em um ambiente comum de
                                Geoprocessamento de dados.
                            </p>
                        </div>
                        <div className='paragrafo'>
                            <h3>Plano Diretor</h3>
                            <p id="p-third">
                                Abrange toda a extensão territorial da Cidade, e
                                consiste na conversão e Geocodificação dos
                                zoneamentos e suas características definidas em
                                legislação vigente.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="about-us-container">
                    <div id="about-us">
                        <h1>SOBRE NÓS</h1>
                        <img src={logo} alt="Logo" />

                        <p>
                            A Multi Geotecnologia - Soluções em Geoprocessamento oferece uma eficiente estrutura de serviços
                            e profissionais qualificados para a geração de mapas georreferenciados
                            e obtenção de informações cadastrais, aliada ao desenvolvimento
                            de sistemas de informações geográficas e sistemas gerenciais,
                            incluindo consultoria, treinamento e suporte técnico,
                            proporcionando aos clientes e usuários rapidez, precisão e
                            estratégia nas decisões, garantindo melhores e mais bem sucedidos resultados.
                        </p>
                    </div>
                </div>

                <div id="contatos-container">
                    <div id="contatos-border">
                        <div id="contatos-text">
                            <h1>Quer fazer parte de uma equipe em crescimento constante?</h1>
                            <p>Seja um parceiro da Multi, ou solicite os nossos serviços!</p>
                        </div>
                        <div id="ancoras">
                            <a href="#">Parcerias</a>
                            <a href="#">Entrar em contato</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <Footer />
        </>
        
    )
}