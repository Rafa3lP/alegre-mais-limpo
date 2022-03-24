export default class Manutencao{
    constructor(
        id = '',
        idCaminhaoColeta = '',
        placa = '',
        data =  new Date().toISOString(),
        quilometragem = '',
        descricao = '',
        valor = '0'
    ){
        this.id = id;
        this.idCaminhaoColeta = idCaminhaoColeta;
        this.placa = placa;
        this.data =  data;
        this.quilometragem = quilometragem;
        this.descricao = descricao;
        this.valor = valor;
    }
}