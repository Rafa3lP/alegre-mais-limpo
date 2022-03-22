export default class Caminhao {
    constructor(id = '', 
    situacao = '0', 
    placa = '', 
    modelo = '', 
    ano = '', 
    marca = '', 
    quilometragem = '') {
        this.id = id;
        this.situacao = situacao;
        this.placa = placa;
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
        this.quilometragem = quilometragem;
    }
}