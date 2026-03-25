//### 1. Conversor de Temperatura **🔈🔉**
//Crie um componente que converta temperaturas entre Celsius, Fahrenheit e Kelvin. 
// O usuário deve poder inserir um valor e selecionar a unidade de entrada e saída.

//Sincronização de Estados (ou comportamento de Two-Way Data Binding).

import {useState} from 'react'

function Temperaturas() {
    const[c, setC] = useState('')
    const[f, setF] = useState('')
    function lerC(e){
        setC(e.target.value)
        setF(e.target.value * (9/5)+32)
    }
    function lerF(e){
        setF(e.target.value)
        setC((e.target.value - 32) * 5/9 )

    }
    return (
        <div>
            C 
            <input type="text"
                value={c}
                onChange={lerC}
            />
            F 
            <input type="text"
                value={f}
                onChange={lerF}
            />
        </div>
    )
}

export default Temperaturas
