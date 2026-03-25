//Aprovado ou Reprovado
//No Colégio Neps Academy (CNA) um aluno é aprovado por média se ele obtiver uma média final maior ou igual a 7, caso o aluno tenha uma média menor que 7 mas maior ou igual a 4 ele está de recuperação, caso ele tenha uma média menor que 4 o aluno está reprovado.
//
//A média é calculada com a nota das duas provas aplicadas no semestre e corresponde simplesmente a média aritimética das duas notas.
//
//Baseado nas duas notas do aluno, indique o resultado final do aluno: "Aprovado", "Reprovado" ou "Recuperacao".
//
//Entrada
//A entrada consiste de apenas uma linha com as notas e que correspondem as duas notas que o aluno conquistou esse semestre.
//Saída
//A saída do seu programa deve ser apenas uma linha. Caso o aluno tenha sido aprovado informe "Aprovado", caso o aluno tenha sido reprovado informe "Reprovado" e caso ele esteja de recuperação informe "Recuperacao".
//
//Exemplos de Entrada	Exemplos de Saída
//4.3 5
//Recuperacao
//10 9.8
//Aprovado
//

import React, { useState } from 'react';

function ResultadoEscolar() {
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [resultado, setResultado] = useState('');

    function calcularMedia() {
        const media = (Number(nota1) + Number(nota2)) / 2;

        if (media >= 7) {
            setResultado('Aprovado');
        } else if (media >= 4) {
            setResultado('Recuperacao');
        } else {
            setResultado('Reprovado');
        }
    }

    return (
        <div>
            <h2>Sistema CNA</h2>
            
            Nota 1: 
            <input 
                type="number" 
                value={nota1} 
                onChange={(e) => {
                    //  Só salva na memória SE o valor for menor ou igual a 10
                    if (e.target.value <= 10) setNota1(e.target.value);
                }} 
            />
            <br /><br />

            Nota 2: 
            <input 
                type="number" 
                value={nota2} 
                onChange={(e) => {
                    if (e.target.value <= 10) setNota2(e.target.value);
                }} 
            />
            <br /><br />

            <button onClick={calcularMedia}>Calcular</button>

            <p><strong>{resultado}</strong></p> 
        </div>
    ); //Strong para ficar em negrito
}

export default ResultadoEscolar;