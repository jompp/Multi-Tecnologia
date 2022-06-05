import './Home.css'

export function Home() {
    return (
        <div id="home">
            <header id="header"></header>

            <main>
                <div id='brand'><h1>MULTI GEOTECNOLOGIA</h1></div> {/* background-img */}

                <div id="services-container">
                    <header id="services-header"><h1>NOSSOS SERVIÇOS</h1></header>

                    <div id="paragrafos">
                        <div className='paragrafo'>
                            <h3>Coleta de dados</h3>

                            <p id="p-first">
                                Os coletores digitais tem como finalidade atualizar as <br />
                                bases cadastrais e cartográficas, de forma <br />
                                automatizada, segura e com alta produtividade.
                            </p>
                        </div>
                        <div className='paragrafo'>
                            <h3>Cadastros</h3>
                            <p id="p-second">
                                Utilizamos a gestão espacial do Cadastro Imobiliário, <br />
                                Mobiliário e Logradouros em um ambiente comum de <br />
                                Geoprocessamento de dados.
                            </p>
                        </div>
                        <div className='paragrafo'>
                            <h3>Plano Diretor</h3>
                            <p id="p-third">
                                Abrange toda a extensão territorial da Cidade, e <br />
                                consiste na conversão e Geocodificação dos <br />
                                zoneamentos e suas características definidas em <br />
                                legislação vigente.
                            </p>
                        </div>
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


            <footer></footer>
        </div>
    )
}