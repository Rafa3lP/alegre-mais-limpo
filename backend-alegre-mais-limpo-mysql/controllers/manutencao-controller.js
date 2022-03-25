const mysql = require('../mysql');

exports.create = async (req, res, next) => {
    try {
        
        const ManutencaoData = Object.assign({}, {
            idCaminhaoColeta: req.body.idCaminhaoColeta,
            data: new Date(`${req.body.data}`).toLocaleDateString('en-CA'),
            quilometragem: req.body.quilometragem,
            descricao: req.body.descricao,
            valor: req.body.valor,
        });

        query = `INSERT INTO manutencao
        (idCaminhaoColeta, data, quilometragem, descricao, valor)
        VALUES (?, ?, ?, ?, ?)`;

        const response = await mysql.execute(query, Object.values(ManutencaoData));
        return res.status(201).send(response);

    } catch (erro) {
        return res.status(500).send({ error: error });
    }
}

exports.getManutencoes = async (req, res, next) => {
    try {

        const query = `SELECT m.idManutencao id, m.idCaminhaoColeta, c.placa, m.data, m.quilometragem,
        m.descricao, m.valor
        FROM manutencao m INNER JOIN caminhaoColeta c 
        ON m.idCaminhaoColeta = c.idCaminhaoColeta;`;

        const result = await mysql.execute(query, []);

        const response = { manutencoes: Object.keys(result).map((key) => result[key]) };
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error });
    }
};

exports.getManutencaoById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const query = `SELECT m.idManutencao id, m.idCaminhaoColeta, c.placa, m.data, m.quilometragem,
        m.descricao, m.valor
        FROM manutencao m INNER JOIN caminhaoColeta c 
        ON m.idCaminhaoColeta = c.idCaminhaoColeta 
        WHERE m.idManutencao = ?;`;
        
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

        query = `
        DELETE FROM manutencao
        WHERE idManutencao = ?`;

        await mysql.execute(query, [id]);

        return res.status(200).send({ message: 'Ok' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
}

exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;

        const manutencaoData = Object.assign({}, {
            idCaminhaoColeta: req.body.idCaminhaoColeta,
            data: new Date(`${req.body.data}`).toLocaleDateString('en-CA'),
            quilometragem: req.body.quilometragem,
            descricao: req.body.descricao,
            valor: req.body.valor,
        });

        //verificar se existe a manutencao
        var query = `SELECT idManutencao FROM manutencao WHERE idManutencao = ?;`;
        
        var result = await mysql.execute(query, [ id ]);

        if(result.length == 0){
            return res.status(409).send({message: "Não existe nenhuma manutenção com esse id!"});
        }

        // verificar se o caminhão existe
        query = `SELECT idCaminhaoColeta FROM caminhaoColeta WHERE idCaminhaoColeta = ?;`;

        result = await mysql.execute(query, [ manutencaoData.idCaminhaoColeta ]);

        if(result.length == 0){
            return res.status(409).send({message: "Caminhão inválido!"});
        }

        manutencaoData['id'] = id;

        query = `UPDATE manutencao 
        SET 
        idCaminhaoColeta = ?,
        data = ?, 
        quilometragem = ?, 
        descricao = ?,
        valor = ? 
        WHERE idManutencao = ?;
        `;

        await mysql.execute(query, Object.values(manutencaoData));

        return res.status(200).send({ message: 'Atualizado com sucesso!' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};