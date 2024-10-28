import React, { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz', 'Estudar react'
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegistrer(event) {
    event.preventDefault();
    if (input.trim() === '') return; // Não salva tarefa vazia
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
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
