import {Link} from 'react-router-dom'

export default function Erro() {
    return (
      <div>
        <h1>Erro! Parece que essa página não existe.</h1>
        <span>Você pode estar procurando:</span>
        <Link to="/">Home</Link> <br/>
        <Link to="/sobre">Sobre nós</Link>
      </div>
    )
  }