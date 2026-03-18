//Escreva um programa que leia um número inteiro N. Este N representa o número de linhas de saída impressas pelo programa.
//Entrada
//O arquivo de entrada contém um número inteiro N.
//Saída
//Imprima a saída de acordo com o exemplo fornecido.
//Exemplo
//Entrada: 7
//saida:
//
//1 2 3 PUM
//5 6 7 PUM
//9 10 11 PUM
//13 14 15 PUM
//17 18 19 PUM
//21 22 23 PUM
//25 26 27 PUM
//
import React, { useState } from 'react' //rfce

function Pum() {
    const [resultado,setResultado] = useState([])
    const [inputN,setInputN] = useState('')
    function gerarpum(){
        let texto= ''
        let pums = 0
        let i = 1
        let elementos = []
        while(pums<inputN){
            if(i%4 != 0){
                texto += i + ''
            }
            else{
                texto += 'PUM'
                pums ++
                console.log(pums);
            }
            i ++
        }
        setResultado(texto)
    }

  return (
    <div>Pum


        <input type='text'
        
        />
    </div>
  )
}

export default Pum