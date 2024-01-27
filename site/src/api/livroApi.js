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