const mysql = require('../mysql');
/*
{
    situacao: "0",
    placa: "518-GHHF",
    modelo: "fguyhb",
    ano: "2013",
    marca: "gjbjh",
    quilometragem: "jygyjgygygy"
}
*/
exports.create = async (req, res, next) => {
    try {

        const caminhaoData = Object.assign({}, { 
            situacao: req.body.situacao,
            placa: req.body.placa,
            modelo: req.body.modelo,
            ano: req.body.ano,
            marca: req.body.marca,
            quilometragem: req.body.quilometragem
        });

        const query = `INSERT INTO caminhaoColeta (situacao, placa, modelo, ano, marca, quilometragem) 
        VALUES (?, ?, ?, ?, ?, ?)`;

        await mysql.execute(query, Object.values(caminhaoData)) 
        
        const response = {
            message: "Caminhao criado com sucesso"
        }

        console.log(response);

        return res.status(201).send(response);

    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

exports.getCaminhoes = async (req, res, next) => {
    try {
        const query = `
        SELECT idCaminhaoColeta AS id, situacao, placa, modelo, ano, quilometragem, marca
        FROM caminhaoColeta;`;

        const result = await mysql.execute(query, []);

        const response = {caminhoes: Object.keys(result).map((key) => result[key])};
        return res.status(200).send(response);
    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};

exports.getCaminhaoById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const query = `
        SELECT idCaminhaoColeta AS id, situacao, placa, modelo, ano, quilometragem, marca
        FROM caminhaoColeta 
        WHERE idCaminhaoColeta = ?;`;

        const result = await mysql.execute(query, [ id ]);

        return res.status(200).send(result[0]);
    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};

exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        var query = `SELECT idCaminhaoColeta FROM caminhaoColeta 
        WHERE idCaminhaoColeta = ?
        `;

        var result = await mysql.execute(query, [ id ]);
        
        if(result.length == 0) {
            return res.status(409).send({message: "Não existe nenhum caminhao com este id"});
        }

        query = `
        SELECT COUNT(e.idCaminhaoColeta) num
        FROM escala AS e 
        INNER JOIN caminhaoColeta AS c ON c.idCaminhaoColeta = e.idCaminhaoColeta 
        WHERE c.idCaminhaoColeta = ?`;

        result = await mysql.execute(query, [ id ]);

        if(result[0].num > 0) {
            return res.status(409).send({message: "O caminhao não pode ser deletado pois está em uma escala"});
        }

        query = `
        DELETE FROM abastecimento
        WHERE idcaminhaoColeta = ?`;

        result = await mysql.execute(query, [ id ]);

        query = `
        DELETE FROM manutencao
        WHERE idcaminhaoColeta = ?`;

        result = await mysql.execute(query, [ id ]);

        query = `
        DELETE FROM caminhaoColeta
        WHERE idcaminhaoColeta = ?`;

        result = await mysql.execute(query, [ id ]);

        return res.status(200).send({ message: 'Ok' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};

exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;

        const caminhaoData = Object.assign({}, { 
            situacao: req.body.situacao,
            placa: req.body.placa,
            modelo: req.body.modelo,
            ano: req.body.ano,
            marca: req.body.marca,
            quilometragem: req.body.quilometragem
        });

        var query = `SELECT idCaminhaoColeta FROM caminhaoColeta 
        WHERE idCaminhaoColeta = ?
        `;

        var result = await mysql.execute(query, [ id ]);
        
        if(result.length == 0) {
            return res.status(409).send({message: "Não existe nenhum caminhao com este id"});
        }

        query = `
        UPDATE caminhaoColeta SET
        situacao = ?, 
        placa = ?, 
        modelo = ?, 
        ano = ?,
        marca = ?,
        quilometragem = ? 
        WHERE idCaminhaoColeta = ?`;

        caminhaoData['id'] = id;

        await mysql.execute(query, Object.values(caminhaoData));

        return res.status(200).send({ message: 'Atualizado com sucesso!' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};