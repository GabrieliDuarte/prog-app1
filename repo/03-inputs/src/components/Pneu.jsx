//Escreva um programa que, dada a pressão desejada inserida pelo motorista e a 
// pressão do pneu lida pela bomba, indique a diferença entre a pressão desejada e a pressão lida.
//Entrada A primeira linha da entrada contém um inteiro N que indica a pressão desejada pelo motorista 
// (1 ≤ N ≤ 40). A segunda linha contém um inteiro M que indica a pressão lida pela bomba (1 ≤ M ≤ 40).
//Saída Seu programa deve imprimir uma única linha, contendo a diferença 
// entre a pressão desejada e a pressão lida.

import React, { useState } from 'react';

function Pneu() {
  // Estados para guardar os valores digitados (N e M) e o resultado final
  const [pressaoDesejada, setPressaoDesejada] = useState('');
  const [pressaoLida, setPressaoLida] = useState('');
  const [diferenca, setDiferenca] = useState(null);

  function calcularDiferenca() {
    // Converte os valores dos inputs para número antes de fazer a conta
    const n = Number(pressaoDesejada);
    const m = Number(pressaoLida);
    
    // Calcula a diferença e salva no estado
    const resultado = n - m;
    setDiferenca(resultado);
  }

  return (
    <div>
      <h2>Calibrador de Pneu</h2>
      
      <div>
        <label>
          Pressão desejada (N):
          <input 
            type="number"  //cria aquelas setinhas de aumentar/diminuir no navegador
            value={pressaoDesejada} 
            onChange={(e) => setPressaoDesejada(e.target.value)}   //e.target.value capturado pelo React sempre chega como texto (string).
            placeholder="Ex: 30"
          />
        </label>
      </div>

      <div>
        <label>
          Pressão lida pela bomba (M):
          <input 
            type="number" 
            value={pressaoLida} 
            onChange={(e) => setPressaoLida(e.target.value)} 
            placeholder="Ex: 18"
          />
        </label>
      </div>

      <br />
      <button onClick={calcularDiferenca}>Calcular Diferença</button>

      {/* Só mostra o resultado na tela se a diferença já tiver sido calculada */}
      {diferenca !== null && (
        <p>A diferença entre a pressão desejada e a lida é: <strong>{diferenca}</strong></p>
      )}
    </div>
  );
}

export default Pneu;  