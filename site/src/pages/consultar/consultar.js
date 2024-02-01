import './index.scss';
import {React, useEffect, useState} from 'react'
import Navegacao from '../../components/navegacao/navegacao.js';
import Ptcima from '../../components/ptcima/ptcima.js';
import { carregarTodos, carregarPorNomes, deletar } from '../../api/livroApi.js'
import { arrumarData } from '../../service/index.js';
import { toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom';
import storage from 'local-storage';


export default function Consultar(){
///<img src='/assets/image/logofundo.svg' alt='' className='logofundo'/>
                
        const [nome , setnome] = useState('')       
        const [livro, setLivro] = useState([])
        const [iconArray, setIconArray] = useState(Array(livro.length).fill(false));


        const Navigate = useNavigate()



        async function deletarLivro(id){
                const resp = await deletar(id)
                toast.dark(resp)
                carregarLivros()
        }

        async function carregarLivros(){
                let resp = await carregarTodos();
                setLivro(resp) 
        }

        async function carregarLivrosNomes (){
                let resp = await carregarPorNomes(nome);
                console.log(resp)  
                setLivro([resp])       

        }
        const chamarEnter = (event) => {
                if (event.key === 'Enter') {
                  carregarLivrosNomes()
                }
              };
        const mostraPassarMouse = (index) => {
                const newArray = [...iconArray];
                for (let i = 0; i < newArray.length; i++) {
                        newArray[i] = false;
                }
                newArray[index] = true;
                setIconArray(newArray);
              };
            
        const mostarSairMouse = (index) => {
                const newArray = [...iconArray];
                newArray[index] = false;
                setIconArray(newArray);
              };

        function decidir(){
                
        }
        function colocarIdLivro(id){
                storage('usuario-logado', id)
                Navigate('/atualizar')
        }
        

        useEffect(() =>{
                carregarLivros()
        },[])

    return(
        <main className='pgconsultar' onKeyDown={chamarEnter}>
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
                        <tbody className='item'  key={index} onMouseEnter={() => mostraPassarMouse(index)} onMouseLeave={() => mostarSairMouse(index)} >
                        <tr>
                                <td className='idLinha'>{livro.id}</td>
                        </tr>
                        <tr>
                                <td className='nomeLinha'>{livro.nome}</td>
                        </tr>
                        <tr >      
                                <td className='autorLinha'>{livro.autor}</td>
                        </tr>
                        <tr >    
                                <td className='dataLinha'> {arrumarData(livro.Dt)}</td>
                        </tr>
                        <tr className='disonivelLinha'>   
                                <td className='disonivelLinha'>
                                {livro.disponivel === 1 ? 
                                <p>Sim</p>    
                                : <p>Não</p>
                                }
                        </td>
                        </tr>
                        <tr className='iconLinha'>
                                <td className='iconLinha'>
                                {iconArray[index] && (
                                        <>
                                        <img className='icon' src='/assets/image/edit.svg' alt='' onClick={() => Navigate(`/atualizar/${livro.id}`)} />
                                        <img className='icon' src='/assets/image/remove.svg' alt='' onClick={() => deletarLivro(livro.id)} />
                                        </>
                                )}
                                </td>
                        </tr>
                        </tbody>
                        ))}

                        
                        </table>
                
                
           </div>
        </main>
    )
}