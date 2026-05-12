    //Mano Juca tá estudando para um entrevista de emprego na [Harry Plotter](/317d393ff68e8036a073c563c31c6098?pvs=25) Serviços de Impressão!!
    //Mas é claro, ele está apavorado. Na condição dele eu também estaria. Nesse emprego ele deverá usar multiplicações durante o dia todo e o abobado é muito ruim em matemática!
    //Óbvio, vamos ajudar ele. Crie um programa para mostrar a tabuada de um número que ele digitar.
    //Ex: se o MJ digitar 2, mostrar
    //1x2=2
    //2x2=4
    //3x2=6
    //4x2=8
    //5x2=10
    //6x2=12
    //7x2=14
    //8x2=16
    //9x2=18
    //10x2=20
    //

   import { useState } from 'react'

function Tabuada() {
    const [numero, setNumero] = useState('');
    const [resultado, setResultado] = useState([]); 

    function gerarTabuada() {
        const n = Number(numero);    //O Number() converte esse "2" (texto, que recebe do prompt) para 2 (número de verdade) para podermos fazer contas matemáticas.
        if (!numero || isNaN(n)) return; // Se não tiver número, não faz nada

        let novasLinhas = [];
        for(let i = 1; i <= 10; i++) {
            novasLinhas.push(`${n} x ${i} = ${n * i}`); 
        }
        setResultado(novasLinhas);
    }

    return (
        <div className="card-exercicio">
            <h2>🧮 Tabuada do Mano Juca</h2>
            
            <div className="input-group">
                <input 
                    type="number" 
                    placeholder="Digite um número..."
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />
                <button onClick={gerarTabuada}>Calcular</button>
            </div>

            {/* Renderiza as linhas apenas se o resultado não estiver vazio */}
            {resultado.length > 0 && (
                <div className="resultado-tabuada">
                    {resultado.map((linha, index) => (
                        <p key={index}>{linha}</p>
                    ))}
                </div>
            )}
        </div>
    )
}
//&& SE a variável resultado tiver algum conteúdo (for verdadeira), ENTÃO mostre a tag <p>

export default Tabuada