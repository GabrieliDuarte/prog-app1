import React, { useState } from 'react'

function PapaiNoel() {
    const [inputNum, setInputNum] = useState('')
    const [frase, setFrase] = useState('')

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
            onChange={(e) => setInputNum(e.target.value)} 
        />

        <button onClick={gerarFrase}>Gerar hoho</button>
        <p>
            {frase}
        </p>

    </div>
  )
}

export default PapaiNoel