//Santa Claus is playing with his elves to entertain them during the Christmas Eve. The game consists of the elves writing numbers on pieces
//  of paper and place on the cap of Santa Claus. After all finished to put the numbers, Santa draws a number and that number is how many "Ho" he should say. 
// Your job is to help Santa Claus by making a problem that shows all the "Ho" that he should speak given the number drawn.

//Input 
// The input consists of a single integer N (0 < N ≤ 106) representing how many "Ho" will be spoken by Santa.
//Output 
// The output consists of all "Ho" that Santa should speak separated by a space. After the last "Ho" you must present an "!" ending the program.

import React, { useState } from 'react'

function PapaiNoel() {
    const [inputNum, setInputNum] = useState('')  //inputNum: Guarda o número que o usuário está digitando no campo de texto.
    const [frase, setFrase] = useState('')  //frase: Guarda o texto final com as risadas ("ho ho ho...")    

    function gerarFrase(){
        let n = Number(inputNum)
        let texto = ''
        for (let i = 1; i <= n; i++){
            texto += 'ho '
        }
        setFrase(texto)
    }

  return (
    <div>
        <h2>PapaiNoel</h2>
        
        numero de hoho: <input 
            type="text" 
            value={inputNum}
            onChange={(e) => setInputNum(e.target.value)}   //A cada tecla que você aperta, o onChange captura o pacote de informações (e), 
            // pega o valor exato do que está escrito (e.target.value) e salva instantaneamente no estado usando o setInputNum.
        />

        <button onClick={gerarFrase}>Gerar hoho</button>
        <p>
            {frase}
        </p>

    </div>
  )
}

export default PapaiNoel