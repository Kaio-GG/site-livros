import './index.scss';
import {React, useState} from 'react'
import Navegacao from '../../components/navegacao/navegacao.js';
import Ptcima from '../../components/ptcima/ptcima.js';



export default function Consultar(){
///<img src='/assets/image/logofundo.svg' alt='' className='logofundo'/>
                
    const [item , setitem] = useState({})
    const [nome , setnome] = useState('')



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
                        <tbody className='item'>
                            <tr>
                                    <td>#01</td>
                            </tr>
                            <tr>
                                    <td>harry potter</td>
                            </tr>
                            <tr>      
                                    <td>Erick somos</td>
                            </tr>
                            <tr>    
                                    <td>20/50/3</td>
                            </tr>
                            <tr>   
                                    <td>sim</td>
                            </tr>  
                        </tbody>
                    </table>
                
                
           </div>
        </main>
    )
}