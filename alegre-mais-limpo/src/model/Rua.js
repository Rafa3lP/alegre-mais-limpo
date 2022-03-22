export default class Rua {
    constructor(
        id = '',
        nomeRua = '',
        complemento ='',
        qtdLatasLixo = '',
        qtdCasas = '',
        nomeZona = ''
    ){
        this.id = id;
        this.nomeRua = nomeRua;
        this.complemento = complemento;
        this.qtdLatasLixo = qtdLatasLixo;
        this.qtdCasas = qtdCasas;
        this.nomeZona = nomeZona;
    }
}