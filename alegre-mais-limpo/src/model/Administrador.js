import Usuario from "./Usuario";

export default class Administrador extends Usuario{
    constructor(
    id = '',
    nome ='', 
    dataNascimento = '', 
    cpf = '', 
    usuario = '', 
    senha = '', 
    bairro = '', 
    logradouro = '',
    cep = '',
    numero = '', 
    complemento = '', 
    cidade = '', 
    uf = '') {
        super(
            id, 
            nome, 
            dataNascimento, 
            cpf, 
            usuario, 
            senha, 
            bairro, 
            logradouro, 
            cep, 
            numero, 
            complemento, 
            cidade, 
            uf)
    }
}