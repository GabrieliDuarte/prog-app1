import {useState} from 'react'

function Evento() {
    const[inputEvento, setInputEvento] = useState('')
    function handleInput(e){ //event
        //O que é esse e? Sempre que você clica em algo, digita uma letra ou arrasta o mouse, o navegador cria um
        //  "pacote de informações" sobre o que acabou de acontecer. Esse pacote diz qual tecla foi apertada, em qual 
        // coordenada da tela o mouse estava, quem foi clicado, etc.

        setInputEvento(e.target.value) 
        // 'e' é o evento, target é o "alvo" do evento, ou seja, a tag HTML onde a ação aconteceu, no caso daqui é o input
        //value: É o valor atual, o texto que está escrito dentro desse input.
        //setInputEvento salva esse texto na memória do componente.
        console.log(e);
    }

    return (
        <div>
            <h2>Demo de eventos</h2>
            <button onClick={(e) => console.log(e)}>Evento onClick</button>

            <input type="text"
                value={inputEvento}
                onChange={handleInput} //é um ouvinte de eventos
            />
        </div>
    )
    //Se você tem um botão e quer saber quando ele foi pressionado ➡️ Usa o onClick.
    //Se você tem um campo de texto e quer saber quando o conteúdo dele foi alterado ➡️ Usa o onChange.
}

export default Evento
