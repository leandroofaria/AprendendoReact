import { useState } from 'react'

import MostrarAluno from './components/Aluno'

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador')

  function MudarNome(nome){
    setAluno(nome)
  }
  
  return(
    <div>
      <h1>Aprendendo useState</h1>
      <h3>Olá {aluno}</h3>
      <button onClick={ () => MudarNome('Leandro') }>
        Mudar Nome: 
      </button>
    </div>
  )
}

export default App