import './index.scss';
import  { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../api/usuarioApi';
import storage  from 'local-storage';


export default function Index(){
    const [email ,setemail] = useState('');
    const [senha ,setsenha] = useState('');
    const [erro ,seterro] =useState('');
    const Navigate = useNavigate();


    async function login (){
        try {
            const r = await loginApi(email, senha)
            if(r.status === 202){
                throw new Error('senha ou email invalidos');
            }else {
                storage('usuario-logado', r)
                Navigate('/home')
            }
        } catch (err) {
            seterro(err.message)
        }
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
                        <input type='text' onChange={e => setemail(e.target.value)} />
                    </div>
                    <div className='orginpu'>
                        <h4>Senha:</h4>
                        <input type='password' onChange={e => setsenha(e.target.value)}/>
                    </div>
                </div>
                <button onClick={() => login()} >Entrar</button>
                <p>{erro}</p>         
            </div>
        </main>
    )
}