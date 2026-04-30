import './Paginas.css'

function HomeFoodPark() {
    return (
        <div className={'cont-home'} style={{ padding: '20px' }}>
            <h1>🥩 Churrascaria do Gaúcho</h1>
            
            <h2 style={{ marginTop: '15px' }}>📖 Bio</h2>
            <p>Do Gildo Teixeira Fagundes Filho (carinhosamente chamado de Seu Gildāo pelos amigos e de “ô Gaúcho” pelos clientes).</p>
            <p>O filho do Gildo, Gildo Teixeira Fagundes Neto (mais conhecido pelo nome comercial: Fagundes Neto), enche a Kombi de polar no fim do ano e passa o verão veraneando nos ingleses e vendendo polar pra gaúcho saudosista. No fim do verão, enche a Kombi de pureza e volta pro RS.</p>

            <h2 style={{ marginTop: '20px' }}>📞 Contato</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li><strong>📱 Zap do Inverno (RS):</strong> (51) 99999-TCHE</li>
                <li><strong>🏖️ Zap do Verão (Ingleses):</strong> (48) 99999-KOMB</li>
                <li><strong>✉️ E-mail:</strong> fagundes.neto@kombidopolar.com.br</li>
                <li><strong>📍 Local:</strong> Shopping Center Invertido - Vaga da Kombi nº 04</li>
            </ul>

        </div>
    )
}

export default HomeFoodPark