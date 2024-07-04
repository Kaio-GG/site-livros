import './index.scss';
import { useNavigate } from 'react-router-dom';




const Inicio = () =>{

    const navigate = useNavigate()

    return(
        <main className='pg-inicio'>
            <div className='fundo'>
                <div className='header'>
                    <button onClick={()=> navigate('/login')}>
                        LOGIN
                    </button>
                </div>
                <h1>BOOK STORE</h1>
            </div>
        </main>
    )
}


export default Inicio