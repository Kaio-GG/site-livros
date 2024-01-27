import './index.scss';
import Navegacao from '../../components/navegacao/navegacao.js';
import Ptcima from '../../components/ptcima/ptcima.js';
import { useEffect, useState } from 'react';
import {novoLivro, imagemLivro} from '../../api/livroApi.js'
import  storage  from 'local-storage';
import {toast} from 'react-toastify'

export default function Cadastrar(){
    const [info, setInfo] = useState({id: storage('usuario-logado').data.id ,nmLivro: '',nmAutor: '',isbn: '',editora:'',edicao: '',sinopse: '',data: '',idioma: '',disponivel: false ,qtd: '',preco: ''});
    const [mostra, setmostra] = useState(false);
    const [imgLivro, setImgLivro] = useState('')
    const [ idLivro, setIdLivro] =useState(0);
    
    async function colocarId(){
        
        await cadastrarLivro()
        setmostra(true)
    }
    async function cadastrarLivro(){
    try {
        if (!info.id || !info.idioma || !info.nmLivro || !info.nmAutor ||!info.editora ||!info.edicao ||!info.data || !info.sinopse || !info.qtd || !info.isbn || !info.preco || !imgLivro) 
            throw new Error('preencha todos os campos');
     
            let resp = await novoLivro(info);
            setIdLivro(resp.data[0]);
    
            setTimeout(() => {
                setmostra(false);
                toast.dark('Filme cadastrado');
            }, 3000);
        
    } catch(err) {
        setTimeout(() => {
            setmostra(false);
            toast.error('Algo deu errado');
        }, 3000);
    }
}

function mostarImagem(){
    const a  = URL.createObjectURL(imgLivro);
    return a;
}

async function cadastrarImagem(){
    if(idLivro !== 0 ){
        await imagemLivro(idLivro, imgLivro);
    }
}

useEffect(()=>{
    cadastrarImagem()
},[idLivro])




    return(
        <main className='pgcadastrar'>
        <Navegacao pg='cadastro' />
            {mostra === false ?
        <div className='fundo'>
            <Ptcima />
            <div className='form'>
            <div className='primeiro'>
                <div className='quadradinho'></div>
                <h3>Cadastrar Novo Livro</h3>
            </div>
            
            <div className='faixa-meio'>
                <div className='arquivo'>
                <input  id="fileInput" type='file' className='inputimage' onChange={e => setImgLivro(e.target.files[0])} />
                {!imgLivro ?
                <label for="fileInput"></label>
                :
                <img src={mostarImagem()} alt=''/>
                }
                </div>
                <div className='opt'>
                <div>
                    <p>Nome:</p>
                    <input
                    type='text'
                    value={info.nmLivro}
                    onChange={(e) => setInfo({ ...info, nmLivro: e.target.value })}
                    />
                </div>
                <div>
                    <p>Autor:</p>
                    <input
                    type='text'
                    value={info.nmAutor}
                    onChange={(e) => setInfo({ ...info, nmAutor: e.target.value })}
                    />
                </div>
                <div>
                    <p>Idioma:</p>
                    <select
                    
                    type='text'
                    value={info.idioma}
                    onChange={(e) => setInfo({ ...info, idioma: e.target.value })}
                    >
                    <option value='Portugues'>Portugues</option>
                    <option value='Ingles'>Ingles</option>
                    </select>
                </div>
                <div>
                    <p>ISBN:</p>
                    <input
                    type='text'
                    value={info.isbn}
                    onChange={(e) => setInfo({ ...info, isbn: e.target.value })}
                    />
                </div>
                <div>
                    <p>Qtd. Paginas:</p>
                    <input
                    type='number'
                    value={info.qtd}
                    onChange={(e) => setInfo({ ...info, qtd: Number(e.target.value) })}
                    />
                </div>
                <div>
                    <p>Preço:</p>
                    <input
                    type='number'
                    value={info.preco}
                    onChange={(e) => setInfo({ ...info, preco: Number(e.target.value) })}
                    />
                </div>
                </div>
                <div className='opt'>
                <div className='campos'>
                    <p>Editora:</p>
                    <input
                    type='text'
                    value={info.editora}
                    onChange={(e) => setInfo({ ...info, editora: e.target.value })}
                    />
                </div>
                <div className='campos'>
                    <p>Edição:</p>
                    <input
                    type='text'
                    value={info.edicao}
                    onChange={(e) => setInfo({ ...info, edicao: e.target.value })}
                    />
                </div>
                <div className='campos'>
                    <p>Publicação:</p>
                    <input
                    type='date'
                    value={info.data}
                    onChange={(e) => setInfo({ ...info, data: e.target.value })}
                    />
                </div>
                <div className='campos'>
                    <p>Sinopse:</p>
                    <textarea
                    value={info.sinopse}
                    onChange={(e) => setInfo({ ...info, sinopse: e.target.value })}
                    />
                </div>
                <div class="cl-toggle-switch">
                    <label class="cl-switch">
                    <input type="checkbox" value={info.disponivel} onChange={(e) => setInfo({...info, disponivel: Boolean(e.target.checked)})}  />
                    <span>Disponivel</span>
                    </label>
                </div>
            </div>
                </div>
                <button className='btn' onClick={colocarId}>Cadastrar</button>
            </div>
        </div>
:
<div className='pg2'>
        <div className='fundo' style={{filter: 'blur(5px)'}}>
            <Ptcima />
            
            <div className='form'>
            <div className='primeiro'>
                <div className='quadradinho'></div>
                <h3>Cadastrar Novo Livro</h3>
            </div>
        
            <div className='faixa-meio'>
                <div className='arquivo'>
                <input className= 'input input-alt' type='file' />
                </div>
                <div className='opt'>
                <div>
                    <p>Nome:</p>
                    <input className= 'input input-alt'
                    type='text'
                    value={info.nmLivro}
                    onChange={(e) => setInfo({ ...info, nmLivro: e.target.value })}
                    />
                </div>
                <div>
                    <p>Autor:</p>
                    <input className= 'input input-alt'
                    type='text'
                    value={info.nmAutor}
                    onChange={(e) => setInfo({ ...info, nmAutor: e.target.value })}
                    />
                </div>
                <div>
                    <p>Idioma:</p>
                    <select
                    type='text'
                    value={info.idioma}
                    onChange={(e) => setInfo({ ...info, idioma: e.target.value })}
                    >
                    <option value='Portugues'>Portugues</option>
                    <option value='Portugues'>Portugues</option>
                    </select>
                </div>
                <div>
                    <p>ISBN:</p>
                    <input className= 'input input-alt'
                    type='text'
                    value={info.isbn}
                    onChange={(e) => setInfo({ ...info, isbn: e.target.value })}
                    />
                </div>
                <div>
                    <p>Qtd. Paginas:</p>
                    <input className= 'input input-alt'
                    type='number'
                    value={info.qtd}
                    onChange={(e) => setInfo({ ...info, qtd: Number(e.target.value) })}
                    />
                </div>
                <div>
                    <p>Preço:</p>
                    <input className= 'input input-alt'
                    type='number'
                    value={info.preco}
                    onChange={(e) => setInfo({ ...info, preco: Number(e.target.value) })}
                    />
                </div>
                </div>
                <div className='opt'>
                <div className='campos'>
                    <p>Editora:</p>
                    <input className= 'input input-alt'
                    type='text'
                    value={info.editora}
                    onChange={(e) => setInfo({ ...info, editora: e.target.value })}
                    />
                </div>
                <div className='campos'>
                    <p>Edição:</p>
                    <input className= 'input input-alt'
                    type='text'
                    value={info.edicao}
                    onChange={(e) => setInfo({ ...info, edicao: e.target.value })}
                    />
                </div>
                <div className='campos'>
                    <p>Publicação:</p>
                    <input className= 'input input-alt'
                    type='date'
                    value={info.data}
                    onChange={(e) => setInfo({ ...info, data: e.target.value })}
                    />
                </div>
                <div className='campos'>
                    <p>Sinopse:</p>
                    <textarea
                    value={info.sinopse}
                    onChange={(e) => setInfo({ ...info, sinopse: e.target.value })}
                    />
                </div>
                <div class="cl-toggle-switch">
                    <label class="cl-switch">
                    <input className= 'input input-alt' type="checkbox" value={info.disponivel} onChange={(e) => setInfo({...info, disponivel: Boolean(e.target.checked)})}  />
                    <span>Disponivel</span>
                    </label>
                </div>
            </div>
                </div>
                <button className='btn' onClick={colocarId}>Cadastrar</button>
            </div>
        </div>
        
        
        <div className='borrado'>
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
                <div class="wheel"></div>
                <div class="hamster">
                    <div class="hamster__body">
                        <div class="hamster__head">
                            <div class="hamster__ear"></div>
                            <div class="hamster__eye"></div>
                            <div class="hamster__nose"></div>
                        </div>
                        <div class="hamster__limb hamster__limb--fr"></div>
                        <div class="hamster__limb hamster__limb--fl"></div>
                        <div class="hamster__limb hamster__limb--br"></div>
                        <div class="hamster__limb hamster__limb--bl"></div>
                        <div class="hamster__tail"></div>
                    </div>
                </div>
                <div class="spoke"></div>
            </div>
            <h4>Cadastrando livro...</h4>
        </div> 
        </div>
        }
            
        </main>
   ) 
            
}