import { useState } from 'react'
import './App.css'
import HomeFoodPark from './pages/HomeFoodPark';
import ChurrascariaGaucho from './pages/ChurrascariaGaucho';

function App() {
  const [telaAtiva, setTelaAtiva] = useState('home');

  return (
    <div className="cont-app">
      <header className="cont-header">
        <nav className="nav-menu">
          <button 
            className={`botoes-nav ${telaAtiva === 'home' ? 'ativo' : ''}`} 
            onClick={() => setTelaAtiva('home')}
          >
            Nossa História (Bio)
          </button>
          
          <button 
            className={`botoes-nav ${telaAtiva === 'cardapio' ? 'ativo' : ''}`} 
            onClick={() => setTelaAtiva('cardapio')}
          >
            Ver Cardápio
          </button>
        </nav>
      </header>
      
      <main className="cont-main">
        {telaAtiva === 'home' && <HomeFoodPark />}
        {telaAtiva === 'cardapio' && <ChurrascariaGaucho />}
      </main>
    </div>
  )
}

export default App