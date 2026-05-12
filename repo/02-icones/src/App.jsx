import './App.css'
import Iconify from './components/Iconify';
import Tabuada from './components/Tabuada';
import Render from './components/Render';

function App() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>02 - Ícones e Renderização 🚀</h1>
      </header>

      <main className="exercicios-grid">
        <Render />
        <Tabuada />
        <Iconify />
      </main>
    </div>
  )
}

export default App