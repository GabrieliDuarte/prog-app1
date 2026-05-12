import './App.css'
import CardProduto from './assets/CardProduto'

function App() {
  const produtos = [
    { id: 0, nome: 'Ketchup', preco: 3.33, imagem: '🥫' }, 
    { id: 1, nome: 'Maionese', preco: 6.54, imagem: '🍶' },
    { id: 2, nome: 'Mostarda', preco: 2.22, imagem: '🍯' }
  ]

  return (
    <div className="app-container">
      <h1>Nossos Produtos</h1>
      <div className="listaCards">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} p={produto} />
        ))}
      </div>
    </div>
  )
}

export default App