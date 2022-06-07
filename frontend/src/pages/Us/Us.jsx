import './Us.css'
import logo from '../../images/logo.png'

export function Us() {
    return (
        <div>
            <main>
                <div id='us-brand'><h1>Sobre Nós</h1></div> {/* background-img */}

                <div id="us-content">
                    <img src={logo} alt="Logo" />
                    <p>A Multi Geotecnologia oferece uma eficiente estrutura de serviços e profissionais qualificados para a geração de mapas georreferenciados e obtenção de informações cadastrais, aliada ao desenvolvimento de sistemas de informações geográficas e sistemas gerenciais, incluindo consultoria, treinamento e suporte técnico, proporcionando aos clientes e usuários rapidez, precisão e estratégia nas decisões, garantindo melhores e mais bem sucedidos resultados.</p>
                </div>
            </main>
            <footer></footer>
        </div>
    )
}