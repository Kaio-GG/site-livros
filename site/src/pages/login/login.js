import './index.scss';
import  { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Index(){
    const [email ,setemail] = useState('');
    const [senha ,setsenha] = useState('');
    const Navigate = useNavigate();


    function login (){
        Navigate()
    }

    return(
        <main className='pglogin'>
            <div className='card'>
                <div className='orgimg'>
                    <img src='/assets/image/logo.svg' alt='' className='logo'/>
                    <h3>Seja Bem-vindo!</h3>
                </div>
                <div className='inputs'>
                    <div className='orginpu'>
                        <h4>E-mail:</h4>
                        <input type='text'/>
                    </div>
                    <div className='orginpu'>
                        <h4>Senha:</h4>
                        <input type='password'/>
                    </div>
                    <button onClick={() => login()} >Entrar</button>             
                </div>
            </div>
        </main>
    )
}