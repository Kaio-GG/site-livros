import './index.scss';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import Navegacao from '../../components/navegacao/navegacao.js'; 
import Ptcima from '../../components/ptcima/ptcima.js';
import { imagemLivro, carregarPorId, update } from '../../api/livroApi.js';
import {useNavigate,  useParams } from 'react-router-dom';
import {toast} from 'react-toastify';


export default function Atualizar(){
    const [info, setInfo] = useState({id: storage('usuario-logado').data.id ,nmLivro: '',nmAutor: '',isbn: '',editora:'',edicao: '',sinopse: '',data: '',idioma: '',disponivel: false ,qtd: '',preco: ''});
    const [mostra, setmostra] = useState(false);
    const [imgLivro, setImgLivro] = useState('')
    
    const Navigate = useNavigate()
    const idLivro = useParams()


    async function carregar (){
        let r = await carregarPorId(Number(idLivro.id))
        setInfo({
             id: Number(idLivro.id),
             nmLivro: r.NM_LIVRO ,
             nmAutor: r.NM_AUTOR,
             isbn: r.DS_ISBN,
             editora: r.DS_EDITORA,
             edicao: r.DS_EDICAO,
             sinopse: r.DS_SINOPSE,
             data: String(r.DT_PUBLICACAO).substr(0,10),
             idioma: r.DS_IDIOMA,
             disponivel: r.BT_DISPONIVEL ,
             qtd: r.QTD_PAGINAS,
             preco: r.VL_PRECO
        })
        console.log(info.disponivel)
    }
    
    
    function mostarImagem(){
        const a  = URL.createObjectURL(imgLivro);
        return a;
    }

    async function atualizarLivro(){
        await update(info)
        console.log(info)
        toast.dark('🚀 Este livro foi atualizado')
    }


    useEffect(() => {
        carregar()
    },[])


    return(
        <main className='pgcadastrar'>
        <Navegacao/>
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
                        {info.disponivel === 1 ?
                            <input type="checkbox" value={info.disponivel} checked  onChange={(e) => setInfo({...info, disponivel: Boolean(e.target.checked)})}  />
                            :<input type="checkbox" value={info.disponivel}   onChange={(e) => setInfo({...info, disponivel: Boolean(e.target.checked)})}  />

                        }
                    <span>Disponivel</span>
                    </label>
                </div>
            </div>
                </div>
                <button className='btn' onClick={atualizarLivro} >Salvar</button>
            </div>
        </div>
        </main>
    )
}