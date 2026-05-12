import './CardProduto.css'

function CardProduto({ p }) {
  return (
    <div className="cont-card">
      <div className="imagem-produto">{p.imagem}</div>
      <h2>{p.nome}</h2>
      <p className="preco">R$ {p.preco.toFixed(2).replace('.', ',')}</p>
    </div>
  )
}

export default CardProduto