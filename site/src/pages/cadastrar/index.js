import './index.scss';
import Navegacao from '../../components/navegacao/navegacao.js';
import Ptcima from '../../components/ptcima/ptcima.js';



export default function Cadastrar(){
    return(
    <main className='pgcadastrar'>
        <Navegacao pg='cadastro'/>
        <div className='fundo'>
                <Ptcima/>
                <div className='form'>
                    <div className='primeiro'>
                        <div className='quadradinho'></div>
                        <h3>Cadastrar Novo Livro</h3>
                    </div>
                    <div className='faixa-meio'>
                        <div className='arquivo'>
                                <input type='file' />
                        </div>
                        <div className='opt'>
                                <div>
                                    <p>Nome:</p>
                                    <input type='text'/>
                                </div>
                                <div>
                                    <p>Autor:</p>
                                    <input type='text'/>
                                </div>
                                <div>
                                    <p>Idioma:</p>
                                    <select type='text'>
                                        <option value='Portugues'>Portugues</option>
                                        <option value='Portugues'>Portugues</option>
                                    </select>
                                </div>
                                <div>
                                    <p>ISBN:</p>
                                    <input type='text'/>
                                </div>
                                <div>
                                    <p>Qtd. Paginas:</p>
                                    <input type='number'/>
                                </div>
                                <div>
                                    <p>preço:</p>
                                    <input type='number'/>
                                </div>
                        </div>
                        <div className='opt'>
                                <div className='campos'>
                                    <p>Editora:</p>
                                    <input type='text'/>
                               </div>
                               <div className='campos'>
                                    <p>Edição:</p>
                                    <input type='text'/>
                                </div>
                                <div className='campos'>
                                    <p>Publicação:</p>
                                    <input type='date'/>
                                </div><div className='campos'>
                                    <p>preço:</p>
                                    <input type='text'/>
                                </div><div className='campos'>
                                    <p>sinopse:</p>
                                    <textarea>

                                    </textarea>
                                </div>
                        </div>                        
                    </div>
                    <div className='btn'>
                            <button>Salvar</button>
                    </div>
                </div> 
        </div>
    </main>
    )
}