import api from "./conection.js"


export async function loginApi(email, senha){
    const r = await api.post('/usuario/login',{
        "email": email,
        "senha": senha
    })
  

    return r
}
