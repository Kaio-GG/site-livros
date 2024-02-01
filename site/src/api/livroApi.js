import api from "./conection.js";


export async function novoLivro(info){
    const r = await api.post('/cadastro/livro', {
        id: info.id,
        nmLivro: info.nmLivro,
        nmAutor: info.nmAutor,
        isbn: info.isbn,
        editora: info.editora,
        edicao: info.edicao,
        sinopse: info.sinopse,
        data: info.data,
        idioma: info.idioma,
        disponivel: info.disponivel,
        qtd:  info.qtd,
        preco: info.preco
    })

    return r 
}

export async function imagemLivro(id, img) {
    const formData = new FormData();
  
    formData.append('capa', img);
  
    try {
      const response = await api.put(`/update/${id}/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.status;
    } catch (error) {
      return -1; 
    }
  }
  


  export async function carregarTodos(){
    try {
        const resp = await api.get('/consultar/todos')
        return resp.data
    } catch (err) {
        console.log(err.message)
    }
  }

export async function carregarPorNomes(nome){
  try {
    const resp = await api.get(`/consultar/${nome}`);
    return resp.data
  } catch (err) {
      console.log(err.message)
  }
}

export async function deletar(id){
  try {
    console.log(id)
    const resp = await api.delete(`/deletar/${id}`);
    return resp.data
  } catch (err) {
    console.log(err.message)
  }
}

export async function update(info){
  try {
    const resp = await api.put('/atualizar', {
      nome: info.nmLivro , 
      autor :  info.nmAutor , 
      isbs :  info.isbn , 
      editora :  info.editora , 
      edicao :  info.edicao, 
      sinopse :  info.sinopse , 
      publi :  info.data , 
      idioma :  info.idioma , 
      disponivel : info.disponivel, 
      qtd : info.qtd, 
      preco : info.preco, 
      id: info.id
    })
    return resp.data
  } catch (err) {
    console.log(err.message)
  }
}

export async function carregarPorId(id){
  try {
    const resp = await api.get(`/consultar/info/${id}`)
    console.log(resp.data[0])
    return resp.data[0]
  } catch (err) {
    console.log(err.message)
  }
}


