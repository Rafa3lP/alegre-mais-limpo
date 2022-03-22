const mysql = require('../mysql');
const bcrypt = require('bcrypt');

exports.create = async (req, res, next) => {
    
    try {
        const query = 'INSERT INTO zona (nome) VALUES (?)';
        const result = await mysql.execute(query, [
            req.body.nome
        ]);

        const response = {
            message: 'Zona criada com sucesso',
            createdZona: {
                idZona: result.insertId,
                nome: req.body.nome
            }
        }
        return res.status(201).send(response);

    } catch (error) {
        return res.status(500).send({ error: error });
    }
};