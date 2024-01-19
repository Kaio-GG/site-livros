import './index.scss';
import {React} from 'react';
import Navegacao from '../../components/navegacao/navegacao.js';
import Ptcima from '../../components/ptcima/ptcima.js';

export default function Home(){
    return(
        <main className='pghome'>
            <Navegacao pg='home'/>
            <div className='fundo'>
                <Ptcima/>
                <img src='/assets/image/logofundo.svg' alt='' className='logofundo'/>
            </div>
        </main>
    )
}

