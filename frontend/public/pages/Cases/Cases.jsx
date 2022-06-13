import './Cases.css'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Brand } from '../../components/brand/Brand'

export function Cases() {
    document.title = 'Cases - Multi Geotecnologia'
    return (
    <>
        <Header />
        <Brand sectionTitle='Cases'/>
        <div className="cases-main">
            
            <table className="cases-table">
                <tr>
                    <th>MUNICÍPIO</th>
                    <th>GEOPROCESSAMENTO ONLINE</th>
                    <th>UNIDADE</th>
                    <th>QUANTIDADE</th>
                    <th>ATIVIDADES EXECUTADAS</th>
                    <th>SITUAÇÃO</th>
                </tr>
                <tr>
                    <td>Balneario Camboriú</td>
                    <td>Balneario Camboriú</td>
                    <td>Unidades Imobiliárias</td>
                    <td>101.350</td>
                    <td>Aerolevantamento, Cartografia, Levantamento Cadastral e Geoprocessamento aplicado ao Cadastro Técnico</td>
                    <td className='status'>Finalizado</td>
                </tr>
                <tr>
                    <td>Biguaçu</td>
                    <td>Biguaçu</td>
                    <td>Unidades Imobiliárias</td>
                    <td>24.000</td>
                    <td>Aerolevantamento, Cartografia, Levantamento Cadastral e Geoprocessamento aplicado ao Cadastro Técnico</td>
                    <td className='status'>Finalizado</td>
                </tr>
                <tr>
                    <td>Canoinhas</td>
                    <td>Canoinhas</td>
                    <td>Unidades Imobiliárias</td>
                    <td>28.000</td>
                    <td>Aerolevantamento, Cartografia, Levantamento Cadastral e Geoprocessamento aplicado ao Cadastro Técnico</td>
                    <td className='status'>Finalizado</td>
                </tr>
                <tr>
                    <td>Garopaba</td>
                    <td>Garopaba</td>
                    <td>Unidades Imobiliárias	</td>
                    <td>6.750</td>
                    <td>Levantamento Cadastral</td>
                    <td className='status'>Finalizado</td>
                </tr>
                <tr>
                    <td>Ilhota</td>
                    <td>Ilhota</td>
                    <td>Unidades Imobiliárias</td>
                    <td>5.350</td>
                    <td>Cartografia, Levantamento Cadastral e Geoprocessamento aplicado ao Cadastro Técnico</td>
                    <td className='status'>Finalizado</td>
                </tr>
                <tr>
                    <td>Joaçaba</td>
                    <td>Joaçaba</td>
                    <td>Unidades Imobiliárias</td>
                    <td>21.244</td>
                    <td>Aerolevantamento, Cartografia, Levantamento Cadastral e Geoprocessamento aplicado ao Cadastro Técnico</td>
                    <td className='status'>Finalizado</td>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
            </table>
        </div>
        <Footer />
     </>
        
    )
}