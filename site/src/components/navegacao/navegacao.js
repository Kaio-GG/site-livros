import  { useNavigate }  from 'react-router-dom';
import './index.scss';

export default function Navegacao(props){
    
    const navigate = useNavigate()


    function home(){
        navigate('/home')
    }
    
    function cadastro(){
        navigate('/cadastro')
    }

    function consultar(){
         navigate('/consultar')
    }
    

    return(
        <main className='cmpnavegacao'>
            <div className='heder'>
                <img src='/assets/image/logo.svg' alt='' className='logo'/>
                <h3>BookingMonk</h3>
            </div>
            <div className='opcoes'>
                {props.pg === 'home'
                    ?<div className='opcao-marcada' onClick={home}>
                         <img src='/assets/image/logohome.svg' alt='' className='iconeshome'  />    
                    </div>
                    :<div className='opcao' onClick={home}>
                        <img src='/assets/image/logohome.svg' alt='' className='iconeshome'  />    
                    </div>}
                {props.pg ==='cadastro'
                    ?<div className='opcao-marcada'onClick={cadastro}>
                        <img src='/assets/image/logocadastro.svg' alt='' className='icones' />    
                    </div>
                    :<div className='opcao'onClick={cadastro}>
                        <img src='/assets/image/logocadastro.svg' alt='' className='icones' />    
                    </div>}
                
                {props.pg === 'consultar'
                    ?<div className='opcao-marcada' onClick={consultar}>
                        <img src='/assets/image/logoconsultar.svg' alt='' className='icones' />    
                    </div>
                    :<div className='opcao' onClick={consultar}>
                        <img src='/assets/image/logoconsultar.svg' alt='' className='icones' />    
                    </div>
                }
                
            </div>
            <div>
                <img src='/assets/image/logosair.svg' alt='' className='iconesair' />
            </div>
        </main>
    )
}






