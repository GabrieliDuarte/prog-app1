import './Paginas.css'

function ChurrascariaGaucho() {
    return (
        <div className={'cont-produtos'} style={{ padding: '20px' }}>
            <h1>🥩 Churrascaria do Gaúcho</h1>
           
            <h2 style={{ marginTop: '15px' }}>📋 Cardápio</h2>
            <ul>
                <li>Costela no fogo de chão</li>
            </ul>

            <h2 style={{ marginTop: '15px' }}>🍻 Bebidas</h2>
            <ul>
                <li>Pepsi</li>
                <li>Polar</li>
            </ul>
        </div>
    )
}

export default ChurrascariaGaucho