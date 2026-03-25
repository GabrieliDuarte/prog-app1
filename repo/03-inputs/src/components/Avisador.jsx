//### **0. O Grande Avisador (obrigatório)🔈**
//Crie um componente que apresenta inicialmente apenas um botão. Quando clicado esse botão faz aparecer a mensagem 
// "Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint 
// corrente da SA." Essa mensagem deve ser exibida usando renderização condicional.

import {useState} from 'react'

function Avisador() {
    const[mostrar, setMostrar] = useState(false)  //começa como false 

    function alternar(){
        setMostrar(!mostrar) //! (NÃO / NOT).
    }
    function inverter(){
        if(mostrar == true){
            setMostrar(false)
        }else{  
            setMostrar(true)
        }
    }
    return (
        <div>
            
            <button onClick={() => setMostrar(!mostrar)}>Mostrar</button>    
            <button onClick={alternar}>Mostrar2</button>
            <button onClick={inverter}>Mostrar3</button>
            {mostrar && <p>Aviso importante, sua vida está em risco...</p>}
            
        </div>
    )
}
//Arrow Function () =>).

export default Avisador
