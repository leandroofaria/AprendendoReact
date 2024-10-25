// Componente MostrarAluno
function MostrarAluno({ aluno, idade, genero }) {
    return (
        <span>
          Nome: {aluno} <br/> 
          Idade: {idade} anos<br/> 
          Gênero: {genero} <br/>
          <br/>
        </span>
    );
}

export default MostrarAluno;
