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

import { useState} from 'react'

function Tabuada() {
    const[resultado, setResultado] = useState('')
    function lerNumero(){
        let n = Number(prompt("Digite o número:")) //prompt: Abre aquela janelinha no navegador pedindo para o usuário digitar algo. 
        //O Number() converte esse "2" (texto, que recebe do prompt) para 2 (número de verdade) para podermos fazer contas matemáticas.

        let linhas = ''
        let linha

        for(let i=1; i<=10; i++){
            let mult = i*n
            linha = `${i}x${n}=${mult} || ` 
            linhas += linha
        }
        setResultado(linhas)
    }

    return (
        <div style={{backgroundColor:'yellow'}}>

            <h2>Tabuada</h2>
            <button onClick={lerNumero}>Informar número</button>
            {resultado && <p>Resultado: {resultado}</p>}
        </div>
        //&& SE a variável resultado tiver algum conteúdo (for verdadeira), ENTÃO mostre a tag <p>
    )
}

export default Tabuada
