require("dotenv/config");
const mysql = require('../mysql');
const bcrypt = require('bcrypt');

/*
{
    "nome": "Rafael de Andrade Prenholato",
    "dataNascimento": "2000-12-25",
    "cpf": "14777617726",
    "usuario": "rafael.prenholato",
    "senha": "1234",
    "bairro": "bairro top",
    "logradouro": "rua top",
    "cep": "29360000",
    "numero": "21",
    "complemento": "Complemento teste",
    "cidade": "Castelo",
    "uf": "ES"
}
*/ 

exports.create = async (req, res, next) => {
    try {
        var query = "SELECT * FROM usuario WHERE usuario = ?";
        var result = await mysql.execute(query, [ req.body.usuario ]);

        if(result.length > 0) {
            return res.status(409).send({message: "O nome de usuario já existe"});
        }

        const hash = await bcrypt.hashSync(req.body.senha, 10);

        const cidadeData = Object.assign({}, { 
            nome: req.body.cidade, 
            uf: req.bory.uf
        });
        const enderecoData = Object.assign({},{ 
            bairro: req.body.bairro, 
            logradouro: req.body.logradouro, 
            cep: req.body.cep, 
            numero: req.body.numero,
            complemento: req.body.complemento 
        });
        const userData = Object.assign({}, { 
            nome: req.body.nome, 
            dataNascimento: req.body.dataNascimento, 
            cpf: req.body.cpf, 
            nivelDeAcesso: 1, 
            usuario: req.body.usuario, 
            senha: hash 
        });

        query = 'INSERT INTO cidade (nome, uf) VALUES (?, ?)';

        mysql.execute(query, Object.values(cidadeData))
        .then(result => {
            enderecoData['idCidade'] = result.insertId;
            //console.log(Object.values(enderecoData));
            query = 'INSERT INTO endereco (bairro, logradouro, cep, numero, complemento, idCidade) VALUES (?, ?, ?, ?, ?, ?)';
            mysql.execute(query, Object.values(enderecoData))
            .then(result => {
                userData['idEndereco'] = result.insertId;
                query = 'INSERT INTO usuario (nome, dataNascimento, cpf, nivelDeAcesso, usuario, senha, idEndereco) VALUES (?, ?, ?, ?, ?, ?, ?)';
                mysql.execute(query, Object.values(userData))
                .then(result => {
                    const response = {
                        message: "Usuario admin criado com sucesso",
                        createdUser: {
                            idUsuario: result.insertId,
                            nome: userData.nome,
                        }
                    }

                    console.log(response);
                    return res.status(201).send(response);

                }, error => {
                    res.status(500).send({ error: error.sqlMessage });
                })
            })
        })

    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

exports.getAdministradores = async (req, res, next) => {
    try {
        const query = `
        SELECT u.idUsuario, u.nome, u.dataNascimento, u.cpf, u.usuario, 
        e.bairro, e.logradouro, e.cep, e.numero, e.complemento, c.nome cidade, c.uf
        FROM usuario AS u 
        INNER JOIN endereco AS e ON u.idEndereco = e.idEndereco
        INNER JOIN cidade AS c ON c.idCidade = e.idCidade
        WHERE nivelDeAcesso = 1;`;

        const result = await mysql.execute(query, []);

        const response = {administradores: Object.keys(result).map((key) => result[key])};
        return res.status(200).send(response);
    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};

exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params;

        var query = `SELECT u.idUsuario, u.idEndereco, e.idCidade 
        FROM usuario AS u
        INNER JOIN endereco AS e ON u.idEndereco = e.idEndereco 
        WHERE u.idUsuario = ?
        `;

        var result = await mysql.execute(query, [ id ]);
        
        if(result.length == 0) {
            return res.status(409).send({message: "Não existe nenhum usuario com este id"});
        }

        query = `
        DELETE FROM usuario
        WHERE idUsuario = ?`;

        await mysql.execute(query, [result[0].idUsuario]);

        query = `
        DELETE FROM endereco
        WHERE idEndereco = ?`;

        await mysql.execute(query, [result[0].idEndereco]);

        query = `
        DELETE FROM cidade
        WHERE idCidade = ?`;

        await mysql.execute(query, [result[0].idCidade]);

        return res.status(200).send({ message: 'Ok' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};