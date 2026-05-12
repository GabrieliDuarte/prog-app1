import { useState } from 'react'
import './App.css'


import Pneu from './components/Pneu';
import Evento from './components/Evento';
import Avisador from './components/Avisador';
import Teste from './components/Teste';
import LayoutForm from './components/LayoutForm';
import Temperaturas from './components/Temperaturas';
import PapaiNoel from './components/PapaiNoel';
import Pum from './components/Pum';
import Bondinho from './components/Bondinho';
import ResultadoEscolar from './components/Notas';
import Combustivel from './components/Combustível'; 

function App() {
  const [inputNome, setInputNome] = useState('');
  
  function cadastrar() {
    console.log("Cadastrando: " + inputNome);
  }

  return (
    <div className="dashboard-container">
      
      <header className="dashboard-header">
        <h1>Painel de Exercícios em React 🚀</h1>
        <div className="input-group">
          <label>Nome:</label>
          <input 
            type="text"
            placeholder="Digite seu nome..."
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)}
          />
          <button onClick={cadastrar}>Cadastrar</button>
        </div>
        {inputNome && <p style={{ marginTop: '10px', color: '#646cff', fontWeight: 'bold' }}>Bem-vindo(a), {inputNome}!</p>}
      </header>

      <main className="exercicios-grid">
        <div className="card-exercicio">
          <Combustivel />
        </div>
        
        <div className="card-exercicio">
          <ResultadoEscolar />
        </div>
        
        <div className="card-exercicio">
          <Bondinho />
        </div>
        
        <div className="card-exercicio">
          <Pum />
        </div>
        
        <div className="card-exercicio">
          <PapaiNoel />
        </div>
        
        <div className="card-exercicio">
          <Pneu />
        </div>
        
        <div className="card-exercicio">
          <Temperaturas />
        </div>
        
        <div className="card-exercicio">
          <LayoutForm />
        </div>
        
        <div className="card-exercicio">
          <Evento />
        </div>
        
        <div className="card-exercicio">
          <Avisador />
        </div>
        
        <div className="card-exercicio">
          <Teste />
        </div>
      </main>

    </div>
  )
}

export default App