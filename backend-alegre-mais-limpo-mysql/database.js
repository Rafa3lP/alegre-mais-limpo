const mysql = require('./mysql.js');
const bcrypt = require('bcrypt');

async function createAdmin() {
    try {
        console.info("Criando Usuario Administrador")
        const adminData = {
            nome: "admin",
            dataNascimento: "1998-09-25",
            cpf: "00000000000",
            usuario: "admin",
            senha: "12345678",
            bairro: "bairro top",
            logradouro: "rua top",
            cep: "29360000",
            numero: "21",
            complemento: "Complemento",
            cidade: "Castelo",
            uf: "ES"
        }

        var query = "SELECT * FROM usuario WHERE usuario = ?";
        var res = await mysql.execute(query, [ adminData.usuario ]);

        if(res.length > 0) {
            return "O usuario admin ja foi criado!";
        }

        const hash = bcrypt.hashSync(adminData.senha, 10);

        const cidadeData = Object.assign({}, { 
            nome: adminData.cidade, 
            uf: adminData.uf
        });
        const enderecoData = Object.assign({},{ 
            bairro: adminData.bairro, 
            logradouro: adminData.logradouro, 
            cep: adminData.cep, 
            numero: adminData.numero,
            complemento: adminData.complemento 
        });
        const userData = Object.assign({}, { 
            nome: adminData.nome, 
            dataNascimento: new Date(`${adminData.dataNascimento}`).toLocaleDateString('en-CA'), 
            cpf: adminData.cpf, 
            nivelDeAcesso: 1, 
            usuario: adminData.usuario, 
            senha: hash 
        });

        query = 'INSERT INTO cidade (nome, uf) VALUES (?, ?)';

        var result = await mysql.execute(query, Object.values(cidadeData));

        enderecoData['idCidade'] = result.insertId;

        query = 'INSERT INTO endereco (bairro, logradouro, cep, numero, complemento, idCidade) VALUES (?, ?, ?, ?, ?, ?)';

        result = await mysql.execute(query, Object.values(enderecoData));

        userData['idEndereco'] = result.insertId;
        
        query = 'INSERT INTO usuario (nome, dataNascimento, cpf, nivelDeAcesso, usuario, senha, idEndereco) VALUES (?, ?, ?, ?, ?, ?, ?)';
        
        result = await mysql.execute(query, Object.values(userData));

        console.log(`Login: ${adminData.usuario} senha: ${adminData.senha}`);
        return "Usuario Administrador criado com sucesso!!";

    } catch (error) {
        return error;
    }
}

createAdmin().then((res) => {
    console.log(res);
    process.exit(1);
});

