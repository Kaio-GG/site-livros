import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import usuarioController from './controller/usuarioController.js'
import livroController from './controller/livroController.js';


const server = express();
server.use(cors())
server.use(express.json())

server.use('/storage/capasLivros', express.static('storage/capasLivros'))

server.use(usuarioController);
server.use(livroController)


server.listen(process.env.PORT, 
        () => console.log(`API online na porta ${process.env.PORT}`))
        