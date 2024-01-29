import './index.scss';
import {React, useEffect, useState} from 'react'
import Navegacao from '../../components/navegacao/navegacao.js';
import Ptcima from '../../components/ptcima/ptcima.js';
import { carregarTodos, carregarPorNomes } from '../../api/livroApi.js';


export default function Consultar(){
///<img src='/assets/image/logofundo.svg' alt='' className='logofundo'/>
                        

        const [nome , setnome] = useState('')       
        const [livro, setLivro] = useState([])

        async function carregarLivros(){
                let resp = await carregarTodos();
                setLivro(resp) 
        }

        async function carregarLivrosNomes (){
                let resp = await carregarPorNomes(nome);
                console.log(resp)  
                setLivro([resp])       

        }
        const handleEnterPress = (event) => {
                if (event.key === 'Enter') {
                  carregarLivrosNomes()
                  console.log('Tecla Enter pressionada!');
                }
              };



        useEffect(() =>{
                carregarLivros()
        },[])

    return(
        <main className='pgconsultar' onKeyDown={handleEnterPress}>
            <Navegacao pg='consultar'/>
            <div className='fundo'>
                <Ptcima/>

                <div className='pesquisa'>
                    <input type='text' placeholder='Pesquise o livro pelo nome' value={nome} onChange={e => setnome(e.target.value)}/>
                    <div className='img'>
                        <img src='/assets/image/icon-buscar.svg' alt='' onClick={carregarLivrosNomes} /> 
                    </div>
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
                        <td> { String(livro.Dt).substr(0,10).replace('-','/').replace('-','/')}</td>
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