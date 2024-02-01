import {con} from './connection.js';



export async function cadastroLivro(info){
    const comando = `
        insert into tb_livro(id_usuario, nm_livro, nm_autor, DS_ISBN, DS_EDITORA, DS_EDICAO, DS_SINOPSE, DT_PUBLICACAO, DS_IDIOMA, BT_DISPONIVEL, QTD_PAGINAS, VL_PRECO)
        values( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? )`
    const [linhas] = await con.query(comando,[ info.id, info.nmLivro, info.nmAutor, info.isbn, info.editora, info.edicao, info.sinopse, info.data, info.idioma, info.disponivel, info.qtd, info.preco ])
    return [linhas.insertId];
}

export async function altererImg(img, id){
    const comando = `
        UPDATE TB_LIVRO
        SET
        img_capa = ?
        where id_livro = ?`;
    const [linhas] = await con.query(comando,[img, id])
    return linhas.affectedRows
}



export async function carregarTela(id){
    const comando = `
        select * from tb_livro 
        where id_livro = ?   
    `
    const [linhas] = await con.query(comando,[id])
    return linhas
}



export async function consultarNome(nome){
    const comando = `
        select 
        id_livro id,
        nm_livro nome,
        nm_autor autor,
        DT_PUBLICACAO Dt,
        BT_DISPONIVEL disponivel
        from tb_livro 
        where nm_livro = ?
        `
    const [linhas] = await con.query(comando,[nome])
    return linhas[0]
}

export async function deletarLivro(id){
    const comando = `
        delete from tb_livro where id_livro = ?
    `
    const [linha] = await con.query(comando,[id]);
    console.log(linha.affectedRows)
    return linha.affectedRows
}


export async function update(info){
    const comando = `
        UPDATE tb_livro
        SET 
        nm_livro =      ?,
        nm_autor =      ?,
        DS_ISBN  =      ?, 
        DS_EDITORA =    ?,
        DS_EDICAO =     ?, 
        DS_SINOPSE =    ?, 
        DT_PUBLICACAO = ?, 
        DS_IDIOMA =     ?, 
        BT_DISPONIVEL = ?, 
        QTD_PAGINAS =   ?, 
        VL_PRECO=       ?
        WHERE id_livro = ?`
    const [linhas] = await con.query(comando,[info.nome, info.autor, info.isbs, info.editora, info.edicao, info.sinopse, info.publi, info.idioma, info.disponivel, info.qtd, info.preco, info.id ])
    const resposta = [info, linhas.affectedRows]
    return resposta
}


export async function carregarTodosLivros(){
    const comando = `        
        select 
        id_livro id,
        nm_livro nome,
        nm_autor autor,
        DT_PUBLICACAO Dt,
        BT_DISPONIVEL disponivel
        from tb_livro`
    const [linhas] = await con.query(comando)
    return linhas
}
