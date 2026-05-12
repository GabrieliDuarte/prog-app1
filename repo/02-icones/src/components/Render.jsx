import { useState } from 'react'

function Render() {
    const [idade, setIdade] = useState(22)

    return (
        <div className="card-exercicio">
            <h2>🔞 Validador de Idade</h2>
            
            <div className="input-group">
                <label>Sua idade:</label>
                <input 
                    type="number" 
                    value={idade} 
                    onChange={(e) => setIdade(Number(e.target.value))} 
                />
            </div>

            <div className="resultado-destaque">
                {idade >= 18 ? <p>🍻 Maior de idade</p> : <p>🧃 Menor de idade</p>}
            </div>
        </div>
    )
}

export default Render