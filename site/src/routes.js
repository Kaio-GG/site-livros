import {BrowserRouter, Route , Routes} from 'react-router-dom';
import LoginPage from './pages/login/login.js';
import Home from './pages/home/home.js';
import Consultar from './pages/consultar/consultar.js';
import Cadastrar from './pages/cadastrar/cadastrar.js';
import Atualizar from './pages/atualizar/atualizar.js';
import Inicio from './pages/inicio/index.jsx';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastrar/>}/>
                <Route path='/consultar' element={<Consultar/>}/>
                <Route path='/atualizar/:id' element={<Atualizar/>}/>
            </Routes>
        </BrowserRouter>
    )
}