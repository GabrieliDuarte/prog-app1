import { useState } from 'react'
import { FaHorse, FaCar, FaDragon, FaPlane, FaGraduationCap, FaMusic, FaBolt, FaReceipt, FaTasks } from "react-icons/fa";

import './App.css'

function App() {
  const [cavalos, setCavalos] = useState([
    { id: 11, nome: "Trovão", raca: "Mangalarga Marchador", idade: 5, pelagem: "Tordilho", imagem: "https://images.pexels.com/photos/36948678/pexels-photo-36948678.jpeg" },
    { id: 12, nome: "Pérola", raca: "Quarto de Milha", idade: 4, pelagem: "Alazã", imagem: "https://images.pexels.com/photos/16375778/pexels-photo-16375778.jpeg" },
    { id: 13, nome: "Espírito", raca: "Mustang", idade: 7, pelagem: "Baio", imagem: "https://images.pexels.com/photos/27924587/pexels-photo-27924587.jpeg" },
    { id: 14, nome: "Apolo", raca: "Puro Sangue Inglês", idade: 6, pelagem: "Castanho", imagem: "https://images.pexels.com/photos/34351620/pexels-photo-34351620.jpeg" },
    { id: 15, nome: "Luna", raca: "Appaloosa", idade: 3, pelagem: "Sardenta", imagem: "https://images.pexels.com/photos/5424234/pexels-photo-5424234.jpeg" },
    { id: 16, nome: "Barão", raca: "Crioulo", idade: 10, pelagem: "Zaino", imagem: "https://images.pexels.com/photos/32020066/pexels-photo-32020066.jpeg" },
    { id: 17, nome: "Zéfiro", raca: "Lusitano", idade: 8, pelagem: "Branco", imagem: "https://images.pexels.com/photos/12979472/pexels-photo-12979472.jpeg" },
    { id: 18, nome: "Fagulha", raca: "Árabe", idade: 5, pelagem: "Preto", imagem: "https://images.pexels.com/photos/37196918/pexels-photo-37196918.jpeg" },
    { id: 19, nome: "Diamante", raca: "Andaluz", idade: 9, pelagem: "Cinza", imagem: "https://images.pexels.com/photos/12074232/pexels-photo-12074232.jpeg" },
    { id: 20, nome: "Cigana", raca: "Campolina", idade: 4, pelagem: "Pampa", imagem: "https://images.pexels.com/photos/34327310/pexels-photo-34327310.jpeg" }
  ])

  const [carros, setCarros] = useState([
    { id: 1, modelo: "Fusca 1300", marca: "Volkswagen", ano: 1974, cor: "Azul Pastel", quilometragem: 45000, imagem: "https://images.pexels.com/photos/36446114/pexels-photo-36446114.jpeg" },
    { id: 2, modelo: "Mustang Fastback", marca: "Ford", ano: 1967, cor: "Preto", quilometragem: 12000, imagem: "https://images.pexels.com/photos/33419680/pexels-photo-33419680.jpeg" },
    { id: 3, modelo: "Opala Diplomata", marca: "Chevrolet", ano: 1988, cor: "Cinza Metálico", quilometragem: 82000, imagem: "https://images.pexels.com/photos/24536462/pexels-photo-24536462.jpeg" },
    { id: 4, modelo: "DeLorean DMC-12", marca: "DeLorean", ano: 1981, cor: "Aço Escovado", quilometragem: 5000, imagem: "https://images.pexels.com/photos/13718631/pexels-photo-13718631.jpeg" },
    { id: 5, modelo: "F-40", marca: "Ferrari", ano: 1987, cor: "Vermelho Corsa", quilometragem: 250, imagem: "https://images.pexels.com/photos/27486991/pexels-photo-27486991.jpeg" },
    { id: 6, modelo: "Maverick GT", marca: "Ford", ano: 1975, cor: "Laranja", quilometragem: 67000, imagem: "https://images.pexels.com/photos/7399511/pexels-photo-7399511.jpeg" },
    { id: 7, modelo: "911 Carrera", marca: "Porsche", ano: 1993, cor: "Branco", quilometragem: 31000, imagem: "https://images.pexels.com/photos/9805739/pexels-photo-9805739.jpeg" },
    { id: 8, modelo: "Kombi Corujinha", marca: "Volkswagen", ano: 1962, cor: "Saia e Blusa (Vermelho/Branco)", quilometragem: 95000, imagem: "https://images.pexels.com/photos/11605399/pexels-photo-11605399.jpeg" },
    { id: 9, modelo: "Charger RT", marca: "Dodge", ano: 1971, cor: "Amarelo", quilometragem: 54000, imagem: "https://images.pexels.com/photos/16041084/pexels-photo-16041084.jpeg" },
    { id: 10, modelo: "Shelby Cobra", marca: "AC Cars", ano: 1965, cor: "Azul com Faixas Brancas", quilometragem: 1800, imagem: "https://images.pexels.com/photos/12565917/pexels-photo-12565917.jpeg" }
  ])

  const [dino, setDinos] = useState([
    { id: 101, nome: 'Tyrannosaurus rex', família: 'Tyrannosauridae', peso: '8 toneladas', altura: '4 metros', comprimento: '12 metros', períodoHistórico: 'Cretáceo Superior', imagem: "https://images.pexels.com/photos/33722875/pexels-photo-33722875.jpeg" },
    { id: 102, nome: 'Stegosaurus', família: 'Stegosauridae', peso: '5 toneladas', altura: '2.5 metros', comprimento: '9 metros', períodoHistórico: 'Jurássico Superior', imagem: "https://images.pexels.com/photos/34522422/pexels-photo-34522422.jpeg" },
    { id: 103, nome: 'Triceratops', família: 'Ceratopsidae', peso: '6 toneladas', altura: '3 metros', comprimento: '9 metros', períodoHistórico: 'Cretáceo Superior', imagem: "https://images.pexels.com/photos/11929283/pexels-photo-11929283.jpeg" },
    { id: 104, nome: 'Velociraptor', família: 'Dromaeosauridae', peso: '150 kg', altura: '1.8 metros', comprimento: '2 metros', períodoHistórico: 'Cretáceo Superior', imagem: "https://images.pexels.com/photos/10975967/pexels-photo-10975967.jpeg" }
  ])

  const [pokemonhos, setPokemonhos] = useState([
    { id: 200, nome: "Misdreavus", tipo: "Fantasma", habilidade: "Levitar", imagem: "https://img.pokemondb.net/sprites/home/normal/misdreavus.png" },
    { id: 201, nome: "Unown", tipo: "Psíquico", habilidade: "Levitar", imagem: "https://img.pokemondb.net/sprites/home/normal/unown.png" },
    { id: 202, nome: "Wobbuffet", tipo: "Psíquico", habilidade: "Shadow tag", imagem: "https://img.pokemondb.net/sprites/home/normal/wobbuffet.png" },
    { id: 203, nome: "Girafarig", tipo: "Psíquico,Normal", habilidade: "Inner Focus", imagem: "https://img.pokemondb.net/sprites/home/normal/girafarig.png" },
    { id: 204, nome: "Pineco", tipo: "Bug", habilidade: "Robusto", imagem: "https://img.pokemondb.net/sprites/home/normal/pineco.png" },
    { id: 205, nome: "Forretress", tipo: "Bug,Aço", habilidade: "Robusto", imagem: "https://img.pokemondb.net/sprites/home/normal/forretress.png" },
    { id: 206, nome: "Dunsparce", tipo: "Normal", habilidade: "Run Away", imagem: "https://img.pokemondb.net/sprites/home/normal/dunsparce.png" },
    { id: 207, nome: "Gligar", tipo: "Ground,Flying", habilidade: "Saind veil", imagem: "https://img.pokemondb.net/sprites/home/normal/gligar.png" },
    { id: 208, nome: "Steelix", tipo: "Ground,Steel", habilidade: "Sturdy", imagem: "https://img.pokemondb.net/sprites/home/normal/steelix.png" },
    { id: 209, nome: "Snubbull", tipo: "Fada", habilidade: "Run Away", imagem: "https://img.pokemondb.net/sprites/home/normal/snubbull.png" }
  ])

  const [viagens, setViagens] = useState([
    { id: 300, origem: "São Paulo", destino: "Tóquio", tempo: "24h", model: "Boeing 777", custo: 6500.00 },
    { id: 301, origem: "Rio de Janeiro", destino: "Paris", tempo: "11h", model: "Airbus A350", custo: 4200.00 },
    { id: 302, origem: "Curitiba", destino: "Buenos Aires", tempo: "2h", model: "Embraer 195", custo: 1200.00 },
    { id: 303, origem: "Salvador", destino: "Lisboa", tempo: "9h", model: "Airbus A330neo", custo: 3800.00 },
    { id: 304, origem: "Belo Horizonte", destino: "Nova York", tempo: "10h", model: "Boeing 787", custo: 4900.00 }
  ])

  const [notas, setNotas] = useState([
    { id: 400, materia: "Cálculo I", nota: 4.5, desculpa: "O professor usou letras onde deveriam estar números." },
    { id: 401, materia: "História", nota: 9.0, desculpa: null },
    { id: 402, materia: "Física", nota: 3.0, desculpa: "A gravidade não colaborou no dia da prova prática." },
    { id: 403, materia: "Literatura", nota: 8.5, desculpa: null },
    { id: 404, materia: "Química", nota: 5.5, desculpa: "Inalei muito hélio e esqueci a tabela periódica." }
  ])

  const [kpops, setKpops] = useState([
    { id: 500, nome: "BTS", integrantes: 7, empresa: "Big Hit (HYBE)", anoDebut: 2013, fandom: "ARMY" },
    { id: 501, nome: "Blackpink", integrantes: 4, empresa: "YG Entertainment", anoDebut: 2016, fandom: "BLINK" },
    { id: 502, nome: "Twice", integrantes: 9, empresa: "JYP Entertainment", anoDebut: 2015, fandom: "ONCE" },
    { id: 503, nome: "Stray Kids", integrantes: 8, empresa: "JYP Entertainment", anoDebut: 2018, fandom: "STAY" },
    { id: 504, nome: "NewJeans", integrantes: 5, empresa: "ADOR (HYBE)", anoDebut: 2022, fandom: "Bunnies" },
    { id: 505, nome: "EXO", integrantes: 9, empresa: "SM Entertainment", anoDebut: 2012, fandom: "EXO-L" },
    { id: 506, nome: "Red Velvet", integrantes: 5, empresa: "SM Entertainment", anoDebut: 2014, fandom: "ReVeluv" },
    { id: 507, nome: "Seventeen", integrantes: 13, empresa: "Pledis (HYBE)", anoDebut: 2015, fandom: "Carat" },
    { id: 508, nome: "IVE", integrantes: 6, empresa: "Starship Entertainment", anoDebut: 2021, fandom: "DIVE" },
    { id: 509, nome: "ATEEZ", integrantes: 8, empresa: "KQ Entertainment", anoDebut: 2018, fandom: "ATINY" }
  ])

  // listinha estilo NF
  const [compras, setCompras] = useState([
    { id: 600, nome: "Mouse Gamer RGB", preco: 15.50, quantidade: 2, valorTotal: 31.00 },
    { id: 601, nome: "Café Espresso (Cápsula)", preco: 8.90, quantidade: 5, valorTotal: 44.50 },
    { id: 602, nome: "Teclado Mecânico", preco: 120.00, quantidade: 1, valorTotal: 120.00 },
    { id: 603, nome: "Camiseta Tech", preco: 45.00, quantidade: 3, valorTotal: 135.00 },
    { id: 604, nome: "Caneta Gel Preta", preco: 2.50, quantidade: 10, valorTotal: 25.00 },
    { id: 605, nome: "Suporte para Notebook", preco: 19.99, quantidade: 2, valorTotal: 39.98 },
    { id: 606, nome: "Monitor 24 Pol", preco: 350.00, quantidade: 1, valorTotal: 350.00 },
    { id: 607, nome: "Cabo HDMI 2m", preco: 12.00, quantidade: 4, valorTotal: 48.00 },
    { id: 608, nome: "Bloco de Notas", preco: 7.25, quantidade: 6, valorTotal: 43.50 },
    { id: 609, nome: "Headset com Microfone", preco: 89.90, quantidade: 2, valorTotal: 179.80 },
    { id: 610, nome: "Pilha Alcalina AAA", preco: 5.00, quantidade: 8, valorTotal: 40.00 },
    { id: 611, nome: "Mousepad Speed", preco: 27.30, quantidade: 3, valorTotal: 81.90 },
    { id: 612, nome: "Webcam Full HD", preco: 150.00, quantidade: 2, valorTotal: 300.00 }
  ]);

  // cada tarefa ser uma linha
  const [tarefas, setTarefas] = useState([
    { id: 700, titulo: "Configurar ambiente", responsavel: "Ana Silva", concluido: true },
    { id: 701, titulo: "Modelagem do banco", responsavel: "Bruno Costa", concluido: false },
    { id: 702, titulo: "Desenvolver API login", responsavel: "Carla Souza", concluido: false },
    { id: 703, titulo: "Revisão de código", responsavel: "Daniel Oliveira", concluido: false },
    { id: 704, titulo: "Ajustar CSS global", responsavel: "Fernanda Lima", concluido: true },
    { id: 705, titulo: "Testes unitários", responsavel: "Gabriel Santos", concluido: false },
    { id: 706, titulo: "Deploy em staging", responsavel: "Ana Silva", concluido: true },
    { id: 707, titulo: "Documentar endpoints", responsavel: "Helena Matos", concluido: false },
    { id: 708, titulo: "Reunião de sprint", responsavel: "Igor Rocha", concluido: true },
    { id: 709, titulo: "Otimizar imagens", responsavel: "Juliana Mendes", concluido: false },
    { id: 710, titulo: "Refatorar hooks", responsavel: "Kevin Silva", concluido: true },
    { id: 711, titulo: "Corrigir bug de scroll", responsavel: "Larissa Faria", concluido: false },
    { id: 712, titulo: "Atualizar dependências", responsavel: "Marcos Paulo", concluido: true }
  ])

  //  somar o valor da Nota Fiscal
  const totalNota = compras.reduce((acc, item) => acc + item.valorTotal, 0); //.reduce  percorre um array e reduz a um único valor final

  return (
    <div className="container">
      <h1>CARDS</h1>

      {/* SEÇÃO: CAVALOS */}
      <section>
        <h2><FaHorse /> Cavalos</h2>
        <div className="grid">
          {cavalos.map((cavalo) => (
            // O método .map() funciona como uma linha de montagem.
            // Ele olha para o seu array cavalos e diz: "Para cada cavalo que existir nessa lista,
            // eu vou construir e retornar o bloco de HTML que está aqui dentro".
            // É como se fosse o CPF do card. Ajuda o React a saber exatamente qual card atualizar ou deletar no futuro sem se perder.
            <div key={cavalo.id} className="card">
              {/* imagem do cavalo */}
              <img src={cavalo.imagem} alt={cavalo.nome} className="img-card" />

              <h3>{cavalo.nome}</h3>
              <p><strong>Raça:</strong> {cavalo.raca}</p>
              <p><strong>Idade:</strong> {cavalo.idade} anos</p>
              <p><strong>Pelagem:</strong> {cavalo.pelagem}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO: CARROS */}
      <section>
        <h2><FaCar /> Carros Antigos</h2>
        <div className="grid">
          {carros.map((carro) => (
            <div key={carro.id} className="card">
              <img src={carro.imagem} alt={carro.nome} className='img-card' />
              <h3>{carro.modelo}</h3>
              <p><strong>Marca:</strong> {carro.marca}</p>
              <p><strong>Ano:</strong> {carro.ano}</p>
              <p><strong>Cor:</strong> {carro.cor}</p>
              <p><strong>KM:</strong> {carro.quilometragem.toLocaleString()} km</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO: DINOSSAUROS */}
      <section>
        <h2><FaDragon /> Dinossauros</h2>
        <div className="grid">
          {dino.map((d) => (
            <div key={d.id} className="card">
              <img src={d.imagem} alt={d.nome} className='img-card' />
              <h3>{d.nome}</h3>
              <p><strong>Família:</strong> {d.família}</p>
              <p><strong>Período:</strong> {d.períodoHistórico}</p>
              <p><strong>Porte:</strong> {d.altura} alt / {d.comprimento} comp</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO: POKEMONS */}
      <section>
        <h2><FaBolt /> Pokémon</h2>
        <div className="grid">
          {pokemonhos.map((poke) => (
            <div key={poke.id} className="card poke-card">
              <img src={poke.imagem} alt={poke.nome} />
              <h3>{poke.nome}</h3>
              <p><strong>Tipo:</strong> {poke.tipo}</p>
              <p><strong>Habilidade:</strong> {poke.habilidade}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO: VIAGENS */}
      <section>
        <h2><FaPlane /> Viagens</h2>
        <div className="grid">
          {viagens.map((v) => (
            <div key={v.id} className="card">
              <h3>{v.origem} ✈️ {v.destino}</h3>
              <p><strong>Duração:</strong> {v.tempo}</p>
              <p><strong>Aeronave:</strong> {v.model}</p>
              <p className="price">R$ {v.custo.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO: NOTAS */}
      <section>
        <h2><FaGraduationCap /> Boletim</h2>
        <div className="grid">
          {notas.map((n) => (
            // "Se a nota for menor que 6, adicione a classe 'bad-grade' (borda vermelha). Se não, adicione 'good-grade' (borda verde)".
            <div key={n.id} className={`card ${n.nota < 6 ? 'bad-grade' : 'good-grade'}`}>
              <h3>{n.materia}</h3>
              <p className="nota-valor">Nota: {n.nota}</p>
              {n.desculpa && <p className="desculpa"><em>"{n.desculpa}"</em></p>}
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO: KPOP */}
      <section>
        <h2><FaMusic /> K-Pop</h2>
        <div className="grid">
          {kpops.map((group) => (
            <div key={group.id} className="card">
              <h3>{group.nome}</h3>
              <p><strong>Fandom:</strong> {group.fandom}</p>
              <p><strong>Empresa:</strong> {group.empresa}</p>
              <p><strong>Membros:</strong> {group.integrantes}</p>
            </div>
          ))}
        </div>
      </section>

      {/*NOTA FISCAL */}
      <section className="secao-nf">
        <h2><FaReceipt /> Nota Fiscal de Compras</h2>
        <div className="nota-fiscal">
          <div className="nf-header">
            <p><strong>LOJA YG</strong></p>
            <p>Rua Ola mundo- SC</p>
            <p>CNPJ: 00.000.000/0001-00</p>
            <hr className="dashed" />
          </div>
          
          <table className="tabela-nf">
            <thead>
              <tr>
                <th>ITEM</th>   {/*<tr> (linhas de tabela). */}
                <th>QTD</th>
                <th>UNIT</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {compras.map((item) => (
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.quantidade}</td>
                  <td>{item.preco.toFixed(2)}</td>
                  <td className="valor-final">{item.valorTotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="nf-footer">
            <hr className="dashed" />
            <div className="total-container">
              <span>TOTAL R$</span>  {/*grupar elementos em linha  */}
              <span className="valor-total-nota">{totalNota.toFixed(2)}</span>
            </div>
            <p className="agradecimento">VOLTE SEMPRE!</p>
          </div>
        </div>
      </section>

      {/* LISTA DE TAREFAS */}
      <section>
        <h2><FaTasks /> Lista de Tarefas</h2>
        <div className="lista-tarefas">
          {tarefas.map((tarefa) => (
            <div key={tarefa.id} className={`linha-tarefa ${tarefa.concluido ? 'tarefa-concluida' : ''}`}>
              <input type="checkbox" checked={tarefa.concluido} readOnly />  {/*Se tarefa.concluido for true, ele já aparece marcado. */}
              <div className="conteudo-tarefa">
                <strong>{tarefa.titulo}</strong>
                <span className="responsavel-tarefa">Resp: {tarefa.responsavel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default App