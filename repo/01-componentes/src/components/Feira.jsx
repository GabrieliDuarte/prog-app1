import { useState } from 'react'

function Feira() {
    const[saida, setSaida] = useState('')

    // let saida = 'erro muito louco'
    function calcularMacas(){
        let preco
        let qtd = Number(prompt("Quantas maças?"))
        if(qtd < 12){
            preco = 0.3
        }else{
            preco = 0.25
        }

        let valor = qtd * preco

        // alert("Valor: R$" + valor.toFixed(2))  //no React, se você tentar mudar o que aparece na tela alterando a variável diretamente, a tela não atualiza.
        // saida = 'muitas maçãs, muitas mesmo'

        setSaida('R$' + valor.toFixed(2)) //Pq usar set saida?Para avisar ao React que o "estado" (a memória) mudou, forçando ele a atualizar a interface (a tela)
        //  com o novo valor.
        //toFixed(2) obriga o número a ter exatamente duas casas decimais
    }
    return (
        <div>
            <h2>Feira da maçãs</h2>
            <p>
                Resultado: {saida}
            </p>    5 
            <button onClick={calcularMacas}>Maçãs</button>
        </div>
    )
}

export default Feira
