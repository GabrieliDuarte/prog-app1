//Bondinho
//A turma do colégio vai fazer uma excursão na serra e todos os alunos e monitores vão tomar um bondinho para subir 
//até o pico de uma montanha. A cabine do bondinho pode levar 50 pessoas no máximo, contando alunos e monitores, durante uma viagem até o pico.
//
//Neste problema, dado como entrada o número de alunos A e o número de monitores M você deve escrever um programa
//  que diga se é possível ou não levar todos os alunos e monitores em apenas uma viagem!
//
//Entrada
//A primeira linha da entrada contém um inteiro A, representando a quantidade de alunos. A segunda linha da entrada contém um inteiro M
//representando o número de monitores.
//
//Saída
//Seu programa deve imprimir uma linha contendo o caractere S se é possível levar todos os alunos e monitores
//  em apenas uma viagem, ou o caractere N caso não seja possível.
//
//Restrições
//1≤A≤50
//1≤M≤50
import { useState } from 'react';

function Bondinho() {
    const [alunos, setAlunos] = useState('');
    const [monitores, setMonitores] = useState('');
    const [resultado, setResultado] = useState('');

    function verificarViagem() {
        const totalPessoas = Number(alunos) + Number(monitores);

        if (totalPessoas <= 50) {
            setResultado('Sim, é possível levar todos os alunos e monitores em apenas uma viagem');
        } else {
            setResultado('Não é possível levar todos os alunos e monitores em apenas uma viagem');
        }
    }

    return (
        <div>
            <h2>Bondinho da Excursão</h2>
            
            <label>Quantidade de Alunos (A): </label>
            <input 
                type="number" 
                value={alunos} 
                onChange={(e) => setAlunos(e.target.value)} 
            />
            <br />

            <label>Quantidade de Monitores (M): </label>
            <input 
                type="number" 
                value={monitores} 
                onChange={(e) => setMonitores(e.target.value)} 
            />
            <br />

            <button onClick={verificarViagem}>Verificar Lotação</button>

            {resultado && (
                <p>Resposta: <strong>{resultado}</strong></p>
            )}
        </div>
    );
}

export default Bondinho;