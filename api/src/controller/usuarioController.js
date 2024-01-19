import { login } from "../repository/usuarioRepository.js";
import { Router } from "express";

const server = Router()



server.post('/usuario/login', async (req,resp) => {
    try{
        const {email, senha} = req.body;
        const resposta = await login(email,senha);
        if (resposta == null) {
            resp.status(202).send({
                erro: 'usuario inesistente'
            })
        }
        resp.send( resposta );
    }catch(err){
        resp.status(404).send({ erro:'senha ou usuario incorretos'})
    }
} )


export default server;