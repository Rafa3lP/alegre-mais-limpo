export default class Rua {
    constructor(
        id = '',
        nome = '',
        complemento ='',
        qtdLatasLixo = '',
        qtdCasas = '',
        zona = ''
    ){
        this.id = id;
        this.nome = nome;
        this.complemento = complemento;
        this.qtdLatasLixo = qtdLatasLixo;
        this.qtdCasas = qtdCasas;
        this.zona = zona;
    }
}