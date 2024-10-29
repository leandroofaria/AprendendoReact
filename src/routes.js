import { BrowserRouter, Route, Routes as RoutesRD } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';
 
const Routes = () => {
return (
<BrowserRouter>
    {/* se eu quiser um componente fixo, coloco aqui */}
    <RoutesRD>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>

        {/* Rota dinâmica, muda de acordo com o id do produto */}
        <Route path="/produto/:id" element={<Produto/>}/> 

        <Route path="*" element={<Erro/>}/>
    </RoutesRD>
</BrowserRouter>
);
}
 
 
export default Routes;