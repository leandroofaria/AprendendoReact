import React, { useState } from 'react';

function App() {
  
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz', 'Estudar react'
  ]);

  function handleRegistrer(event) {
    event.preventDefault();
    setTarefas([...tarefas, input]);
    setInput('');
  } 

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleRegistrer}>
        <label>Nome Da Tarefa:</label><br />
        <input 
          placeholder="Digite uma tarefa" 
          value={input} 
          onChange={(event) => setInput(event.target.value)} 
        /><br /><br />

        <button type="submit">Registrar</button>
      </form>

      <br />

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
