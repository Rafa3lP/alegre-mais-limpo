export default class Usuario {
    constructor(
        id = '',
        nome ='', 
        dataNascimento = new Date().toISOString(), 
        cpf = '', 
        usuario = '', 
        senha = '', 
        bairro = '', 
        logradouro = '',
        cep = '',
        numero = '', 
        complemento = '', 
        cidade = '', 
        uf = ''
        ) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.usuario = usuario;
        this.senha = senha;
        this.bairro = bairro;
        this.logradouro = logradouro;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    
    }

}