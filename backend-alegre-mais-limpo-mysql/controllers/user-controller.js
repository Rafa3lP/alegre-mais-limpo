require("dotenv/config");
const mysql = require('../mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/*
{
    "nome": "Rafael de Andrade Prenholato",
    "dataNascimento": "2000-12-25",
    "cpf": "14777617726",
    "nivelDeAcesso": "1",
    "usuario": "rafael.prenholato",
    "senha": "1234",
    "endereco": {
        "bairro": "bairro top",
        "logradouro": "rua top",
        "cep": "29360000",
        "numero": "21",
        "complemento": "Complemento teste",
        "cidade": {
            "nome": "Castelo",
            "uf": "ES"
        }
    }
}
*/ 


exports.create = async (req, res, next) => {
    try {
        var query = "SELECT * FROM usuario WHERE usuario = ?";
        var result = await mysql.execute(query, [ req.body.usuario ]);

        if(result.length > 0) {
            return res.status(409).send({message: "Usuario já cadastrado"});
        }

        const hash = await bcrypt.hashSync(req.body.senha, 10);

        const cidadeData = ({ nome, uf } = req.body.endereco.cidade);
        const enderecoData = Object.assign({},{ 
            bairro: req.body.endereco.bairro, 
            logradouro: req.body.endereco.logradouro, 
            cep: req.body.endereco.cep, 
            numero: req.body.endereco.numero,
            complemento: req.body.endereco.complemento 
        });
        const userData = Object.assign({}, { 
            nome: req.body.nome, 
            dataNascimento: req.body.dataNascimento, 
            cpf: req.body.cpf, 
            nivelDeAcesso: req.body.nivelDeAcesso, 
            usuario: req.body.usuario, 
            senha: hash 
        });

        query = 'INSERT INTO cidade (nome, uf) VALUES (?, ?)';

        //console.log(Object.values(cidadeData));

        mysql.execute(query, Object.values(cidadeData))
        .then(result => {
            enderecoData['idCidade'] = result.insertId;
            //console.log(Object.values(enderecoData));
            query = 'INSERT INTO endereco (bairro, logradouro, cep, numero, complemento, idCidade) VALUES (?, ?, ?, ?, ?, ?)';
            mysql.execute(query, Object.values(enderecoData))
            .then(result => {
                userData['idEndereco'] = result.insertId;
                query = 'INSERT INTO usuario (nome, dataNascimento, cpf, nivelDeAcesso, usuario, senha, idEndereco) VALUES (?, ?, ?, ?, ?, ?, ?)';
                console.log(Object.values(userData));
                mysql.execute(query, Object.values(userData))
                .then(result => {
                    const response = {
                        message: "Usuario criado com sucesso",
                        createdUser: {
                            idUsuario: result.insertId,
                            nome: userData.nome,
                        }
                    }

                    return res.status(201).send(response);

                })
            })
        })
/*
        query = 'INSERT INTO usuario (usuario, senha, admin) VALUES (?, ?, ?)';

        const results = await mysql.execute(query, [ req.body.usuario, hash, req.body.admin ]);

        const response = {
            message: "Usuario criado com sucesso",
            createdUser: {
                idUsuario: results.insertId,
                usuario: req.body.usuario,
                admin: req.body.admin
            }
        }

        return res.status(201).send(response);*/

        //return res.status(201).send({message: 'ok'});

    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

exports.login = async (req, res, next) => {

    try {
        const query = `SELECT idUsuario, usuario, senha, nivelDeAcesso FROM usuario WHERE usuario = ?`;
        var results = await mysql.execute(query, [req.body.usuario]);

        if (results.length < 1) {
            return res.status(406).send({ message: 'Este nome de usuário não existe' })
        }

        if (await bcrypt.compareSync(req.body.senha, results[0].senha)) {
            const token = jwt.sign({
                idUsuario: results[0].idUsuario,
                usuario: results[0].usuario
            },
            process.env.JWT_KEY,
            {
                expiresIn: "1h"
            });
            return res.status(200).send({
                idUsuario: results[0].idUsuario,
                usuario: results[0].usuario,
                nivelDeAcesso: results[0].nivelDeAcesso,
                token: token
            });
        }
        return res.status(401).send({ message: 'Senha incorreta' })

    } catch (error) {
        return res.status(500).send({ message: 'Algo deu errado ao fazer login' });
    }
};

exports.getUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const query = 'SELECT idUsuario, nome, nivelDeAcesso FROM usuario WHERE idUsuario = ?;';
        
        let idUsuario;

        if(req.query.token) {
            idUsuario = jwt.decode(req.query.token).idUsuario
        } else {
            idUsuario = req.query.id;
        }

        const result = await mysql.execute(query, [idUsuario]);

        if (result.length == 0) {
            return res.status(404).send({
                message: 'Usuario nao encontrado'
            })
        }
        const response = {...result[0]};
        return res.status(200).send(response);
    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};