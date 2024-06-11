import './App.css'
import ListaPropriedade from './ListaPropriedade'
// import Saudacoes from './Saudacoes'
// import Dado from './Dado'
// import Rolagem from './Rolagem'

const bd = [
  { id: 129031, nome: "Pousada Maria da Fé", avaliacao: 4.9, preco: 150 },
  { id: 129331, nome: "Casa da Montanha", avaliacao: 4.8, preco: 250 },
  { id: 129032, nome: "Vale dos Sonhos", avaliacao: 4.75, preco: 300 },
  { id: 129033, nome: "Pousada Ar Puro", avaliacao: 4.9, preco: 120 },
  { id: 129034, nome: "Hotel Vila Maria", avaliacao: 4.7, preco: 140 },
  { id: 129035, nome: "Café e Sono", avaliacao: 4.69, preco: 96 },
  ];

function App() {

  return (
    <>
      <ListaPropriedade dados={bd}/>
      {/* <Rolagem face1={20} face2={8}/>
      <Rolagem /> */}
      {/* <Saudacoes nome="Maria" idade={18}/> 
      <Saudacoes nome="João" idade="19"/> */}
    </>
  )
}


export default App
