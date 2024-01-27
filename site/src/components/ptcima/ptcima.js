import './index.scss';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';


export default function Ptcima (){
    const [nome, setnome] = useState('');
    const [letra,  setLetra] = useState('')
    const Navigate = useNavigate();
    
    
    
    
    function colocarNome (){
        const storageNome = String(storage('usuario-logado').data.nome);
        setnome(storageNome)
        setLetra(storageNome.substring(0,1))
    }
   
   
    useEffect(() => {
        if (!storage('usuario-logado')) {
            Navigate('/')
        }
        colocarNome()
   },[])
    
   return(
        <div className='ptcima'>
                    <p>Seja Bem-vindo,{nome}</p>
                    <div>{letra}</div>
        </div>
    )
}