import './OurServices.css'
import logo from '../../images/logo.png'

export function OurServices() {
    return (
        <div>
            <main className='our-services-main'>

                <img id="logo-img" src={logo} alt="Logo" />

                <div id="content-container">
                    <h1>CADASTRO IMOBILIÁRIO, MOBILIÁRIO E LOGRADOUROS</h1>
                    <p>A gestão espacial do Cadastro Imobiliário, Mobiliário e Logradouros em um ambiente comum de Geoprocessamento de dados, disponibilizando informações técnicas, relatórios estatísticos, mapas temáticos e diversas funcionalidades que servirão de apoio ao gerenciamento do cadastro técnico, bem como o planejamento e gestão do solo municipal.</p>
                    <br />
                    <p>Com o Sistema, além de todas as funcionalidades disponíveis ao poder Executivo Municipal, também permite o acesso da população aos dados e informações do Município, disponibilizadas na Internet, no site da Prefeitura.</p>

                    <h1>SISTEMA DE COLETA DE DADOS</h1>
                    <p>Os coletores digitais tem como finalidade atualizar as bases cadastrais e cartográficas, de forma automatizada, segura e com alta produtividade.</p>
                    <br />
                    <p>São configurados de maneira que apresentem em tela para o cadastrador, todas as informações constantes do BCI (Boletim do Cadastro Imobiliário), BCE (Boletim do Cadastro Econômico), BCL (Boletim do Cadastro de Logradouros) ou outros existentes e utilizados pelo município.</p>
                    <br />
                    <p>A utilização do Sistema permitirá a geração automática dos arquivos a serem transportados para o banco de dados, inclusive a imagem frontal de cada unidade imobiliária ou mobiliária e seção de logradouro cadastrada, sem a necessidade de digitação de documentos.</p>
                    <br />
                    <p>Após análise e controle de qualidade, os dados coletados são disponibilizados no portal de internet criado especificamente para o acompanhamento integral do projeto por parte dos técnicos da municipalidade.</p>

                    <h1>PLANO DIRETOR (CONSULTAS E PLANEJAMENTO)</h1>
                    <p>A gestão espacial do Plano Diretor abrange toda a extensão territorial da Cidade, e consiste na conversão e Geocodificação dos zoneamentos e suas características definidas em legislação vigente.</p>
                    <br />
                    <p>O Sistema, além de disponibilizar informações técnicas, relatórios estatísticos e mapas temáticos, apresenta a Consulta Prévia de Viabilidade Eletrônica em ambiente internet, para todos os profissionais, e ao cidadão, maior interessado na transparência e eficiência dos serviços públicos, um serviço que dura em média 15 (quinze) dias, podendo ser feito em alguns minutos.</p>
                </div>

            </main>
        </div>

    )
}