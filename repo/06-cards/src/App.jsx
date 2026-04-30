import './App.css'
import CardProduto from './assets/CardProduto'
function App() {
  const produtos = [
    {id: 0, nome: 'Ketchup', preco: 333, imagem: '👠'},
    {id: 1, nome: 'Maionese', preco: 654, imagem: '🚴'},
    {id: 2, nome: 'Mostarda', preco: 22, imagem: '🦕'}
  ]
  return (
    <div>
      <h1>CARDS</h1>
      <div className='listaCards'>
      {
        produtos.map((produto) => (
          <CardProduto p={produto} />
        ))
      }
      </div>
    </div>
  )
}

export default App