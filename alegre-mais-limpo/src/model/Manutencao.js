export default class Manutencao{
    constructor(
        id = '',
        placa = '',
        data =  new Date().toISOString,
        quilometragem = '',
        descricao = '',
        valor = ''
    ){
        this.id = id,
        this.placa = placa,
        this.data =  data,
        this.quilometragem = quilometragem,
        this.descricao = descricao,
        this.valor = valor
    }
}