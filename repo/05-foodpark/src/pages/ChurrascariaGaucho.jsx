import './Paginas.css'

function ChurrascariaGaucho() {
    return (
        <div className="cont-produtos pagina-padrao">
            <h1>🥩 Churrascaria do Gaúcho</h1>
            
            <section className="sessao">
                <h2>📋 Cardápio</h2>
                <ul className="lista-itens">
                    <li>Costela no fogo de chão</li>
                </ul>
            </section>

            <section className="sessao">
                <h2>🍻 Bebidas</h2>
                <ul className="lista-itens">
                    <li>Pepsi</li>
                    <li>Polar (Bem gelada!)</li>
                </ul>
            </section>
        </div>
    )
}

export default ChurrascariaGaucho