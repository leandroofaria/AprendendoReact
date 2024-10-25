import MostrarAluno from './components/Aluno'

function App() {
  return(
    <div>
      <h1>Testando componentes</h1>
      <MostrarAluno aluno="Pedro" idade='18' genero='Masculino'/>
      <MostrarAluno aluno="Julia" idade='17' genero='Feminino'/>
    </div>
  )
}

export default App