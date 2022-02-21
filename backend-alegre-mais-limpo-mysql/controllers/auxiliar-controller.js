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
    "servicoComunitario": 1,
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
            return res.status(409).send({message: "O nome de usuario já existe"});
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
            nivelDeAcesso: 2, 
            usuario: req.body.usuario, 
            senha: hash
        });

        const auxiliarData = Object.assign({}, {
            servicoComunitario: req.body.servicoComunitario,
        })

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
                    auxiliarData['idAuxiliar'] = result.insertId;
                    query = 'INSERT INTO auxiliar (servicoComunitario, idAuxiliar) VALUES (?, ?)';
                    
                    mysql.execute(query, Object.values(auxiliarData))
                    .then(result => {
                        const response = {
                            message: "Usuario auxiliar criado com sucesso",
                            createdUser: {
                                idAuxiliar: auxiliarData['idAuxiliar'],
                                nome: userData.nome,
                            }
                        }
    
                        console.log(response);
                        return res.status(201).send(response);

                    })

                })
            })
        })

    } catch (error) {
        return res.status(500).send({ error: error });
    }
};