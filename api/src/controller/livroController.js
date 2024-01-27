import { altererImg, cadastroLivro, carregarTela, carregarTodosLivros, consultarNome, deletarLivro, update } from "../repository/livroRepository.js";
import { Router } from "express";

import multer from 'multer'




const server = Router()
const upload = multer({dest:'storage/capasLivros'})

server.post('/cadastro/livro', async (req, resp) => {
    try {
        const info = req.body;
        const resposta = await cadastroLivro(info);

        
        if(!resposta)
            throw new Error('o cadastro nao foi concluido')


        resp.send(resposta)        
    } catch (err) {
        resp.status(401).send({
            erro : err.message
        })
    }
})

server.get('/consultar/todos', async (req,resp) => {
    try {
        const resposta =  await carregarTodosLivros();
        resp.send(resposta);
    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})



server.get('/consultar/info/:id', async (req,resp) =>{
    try {
        const info = req.params.id
        const resposta = await carregarTela(info)
        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            erro: err.message 
        })
    }
})


server.get('/consultar/:nome', async (req, resp) => {
    try {
        const info = req.params.nome;
        const resposta = await consultarNome(info); 
        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
} )

server.delete('/deletar/:id', async (req, resp) => {
    try {
        const info = req.params.id
        const resposta = deletarLivro(info);
        if (resposta != 1) throw new Error('O livro não deletado');
        
        resp.send('livro deletado').status(202)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.put('/update/:id/image', upload.single('capa') ,async (req, resp) =>{
    try {
        const idRoute = req.params.id;
        const image = req.file.path;
        const resposta = await altererImg(image,idRoute);
        if(resposta != 1)
            throw new Error('Imagem nao inserida');

        resp.sendStatus(204)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.put('/atualizar', async (req, resp) => {
    try {
        const info = req.body;
        const resposta = await update(info);
        let respostaFinal = info
        respostaFinal.affected = resposta[1]
        resp.send(respostaFinal);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server