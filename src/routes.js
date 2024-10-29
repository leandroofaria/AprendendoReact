import { BrowserRouter, Route, Routes as RoutesRD } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
 
const Routes = () => {
return (
<BrowserRouter>
    <RoutesRD>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
    </RoutesRD>
</BrowserRouter>
);
}
 
 
export default Routes;