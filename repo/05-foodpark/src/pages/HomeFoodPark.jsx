import './Paginas.css'

function HomeFoodPark() {
    return (
        <div className="cont-home pagina-padrao">
            <h1>🥩 Churrascaria do Gaúcho</h1>
            
            <section className="sessao">
                <h2>📖 Bio</h2>
                <p>Do Gildo Teixeira Fagundes Filho (carinhosamente chamado de Seu Gildāo pelos amigos e de “ô Gaúcho” pelos clientes).</p>
                <p>O filho do Gildo, Gildo Teixeira Fagundes Neto (mais conhecido pelo nome comercial: Fagundes Neto), enche a Kombi de Polar no fim do ano e passa o verão veraneando nos Ingleses e vendendo Polar pra gaúcho saudosista. No fim do verão, enche a Kombi de Pureza e volta pro RS.</p>
            </section>

            <section className="sessao">
                <h2>📞 Contato</h2>
                <ul className="lista-contato">
                    <li><strong>📱 Zap do Inverno (RS):</strong> (51) 99999-TCHE</li>
                    <li><strong>🏖️ Zap do Verão (Ingleses):</strong> (48) 99999-KOMB</li>
                    <li><strong>✉️ E-mail:</strong> fagundes.neto@kombidopolar.com.br</li>
                    <li><strong>📍 Local:</strong> Shopping Center Invertido - Vaga da Kombi nº 04</li>
                </ul>
            </section>
        </div>
    )
}

export default HomeFoodPark