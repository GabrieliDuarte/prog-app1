import { useState } from 'react'
import './App.css'
import HomeFoodPark from './pages/HomeFoodPark';
import ChurrascariaGaucho from './pages/ChurrascariaGaucho';

function App() {
  const [tela, setTela] = useState(<HomeFoodPark />)

  return (
    <div className="cont-app">
      <header className={'cont-header'}>
        <nav>
          <button className={'botoes-nav'} onClick={() => setTela(<HomeFoodPark />)}>
            Nossa História (Bio)
          </button>
          
          <button className={'botoes-nav'} onClick={() => setTela(<ChurrascariaGaucho />)}>
            Ver Cardápio
          </button>
        </nav>
      </header>
      
      <main className={'cont-main'}>
        {tela}
      </main>
    </div>
  )
}

export default App