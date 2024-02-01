

export function arrumarData(data){
    let dt = new Date(data)
    return dt.toLocaleDateString('pt-BR')
}