import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')

  const [user, setUser] = useState({
    nome: 'Não registrado',
    idade: 'Não registrado',
    email: 'Não registrado'
  });

  function handleRegistrer(event) {
    event.preventDefault()
    alert('Usuário registrado com sucesso!')
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegistrer}>
        <label>Nome:</label><br />
        <input placeholder="Digite seu nome" value={nome} onChange={ (event) => setNome(event.target.value) }/><br /><br />

        <label>Email:</label><br />
        <input placeholder="Digite seu email" value={email} onChange={ (event) => setEmail(event.target.value) }/><br /><br />

        <label>Idade:</label><br />
        <input placeholder="Digite sua idade" value={idade} onChange={ (event) => setIdade(event.target.value) }/><br /><br />

        <button type="submit">Registrar</button>
      </form>

      <br />

      <div>
        <span>Bem vindo: {user.nome} <br /> Idade: {user.idade} <br /> Email: {user.email}</span>
      </div>
    </div>
  );
}

export default App;
