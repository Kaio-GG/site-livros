import './index.scss';
import {React, useEffect, useState} from 'react'
import Navegacao from '../../components/navegacao/navegacao.js';
import Ptcima from '../../components/ptcima/ptcima.js';
import { carregarTodos } from '../../api/livroApi.js';


export default function Consultar(){
///<img src='/assets/image/logofundo.svg' alt='' className='logofundo'/>
                        
        const [item , setitem] = useState({})
        const [nome , setnome] = useState('')       
        const [livro, setLivro] = useState([])

        async function carregarLivros(){
             let resp = await carregarTodos();
             setLivro(resp) 
             console.log(resp);
        }

                

        useEffect(() =>{
                carregarLivros()
        },[])

    return(
        <main className='pgconsultar'>
            <Navegacao pg='consultar'/>
            <div className='fundo'>
                <Ptcima/>

                <div className='pesquisa'>
                    <input type='text' placeholder='pesquise o livro pelo nome' value={nome} onChange={e => setnome(e.target.value)}/>
                    <img src='/assets/image/icon-buscar.svg' alt=''/>
                </div>
                
                <table className='listar'>
                        <thead className='cabe'>
                            <tr >  
                                    <th>IDENTIFICAÇÃO</th>
                            </tr>
                            <tr>
                                    <th>LIVRO</th>
                            </tr>
                            <tr>
                                    <th>AUTOR</th>
                            </tr>
                            <tr>        
                                    <th>LANÇAMENTOS</th>
                            </tr>
                            <tr>
                                    <th>DISPONIVEL</th>
                            </tr>
                        </thead>
                        
                        {livro.map((livro, index) => (
                        <tbody className='item'  key={index}>
                        <tr>
                        <td>{livro.id}</td>
                        </tr>
                        <tr>
                        <td>{livro.nome}</td>
                        </tr>
                        <tr>      
                        <td>{livro.autor}</td>
                        </tr>
                        <tr>    
                        <td>{livro.dt}</td>
                        </tr>
                        <tr>   
                        <td>
                                {livro.disponivel === 1 ? 
                                <p>Sim</p>    
                                : <p>Não</p>
                                }
                        </td>
                        </tr>
                        </tbody>
                        ))}

                        
                        </table>
                
                
           </div>
        </main>
    )
}