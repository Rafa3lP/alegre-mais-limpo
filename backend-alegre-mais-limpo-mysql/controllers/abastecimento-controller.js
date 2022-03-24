const mysql = require('../mysql');

exports.create = async (req, res, next) => {
    try {
        
        const abastecimentoData = Object.assign({}, {
            idCaminhaoColeta: req.body.idCaminhaoColeta,
            data: new Date(`${req.body.data}`).toLocaleDateString('en-CA'),
            quantidade: req.body.quantidade,
            valor: req.body.valor,
            quilometragem: req.body.quilometragem,
        });

        // procurar pelo ultimo abastecimento
        var query = `
        SELECT quantidade, quilometragem, MAX(data) AS data
        FROM abastecimento
        WHERE idCaminhaoColeta = ? AND data <= ? 
        GROUP BY quantidade, quilometragem;
        `;

        var result = await mysql.execute(query, [abastecimentoData.idCaminhaoColeta, abastecimentoData.data])

        if(result.length > 0) {
            if(result[0].quilometragem > abastecimentoData.quilometragem) {
                return res.status(409).send({message: "No ultimo abastecimento esse caminhão tinha uma quilometragem maior!"});
            }
            // calcular media de consumo
            abastecimentoData['mediaConsumo'] = (abastecimentoData.quilometragem - result[0].quilometragem) / result[0].quantidade;
        } else {
            abastecimentoData['mediaConsumo'] = '0';
        }
        
        query = `INSERT INTO abastecimento
        (idCaminhaoColeta, data, quantidade, valor, quilometragem, mediaConsumo)
        VALUES (?, ?, ?, ?, ?, ?)`;

        const response = await mysql.execute(query, Object.values(abastecimentoData));
        return res.status(201).send(response);

    } catch (erro) {
        return res.status(500).send({ error: error });
    }
}

exports.getAbastecimentos = async (req, res, next) => {
    try {

        const query = `
        SELECT a.idAbastecimento id, a.idCaminhaoColeta, c.placa, a.data, a.quantidade, a.valor, 
        a.quilometragem, a.mediaConsumo 
        FROM abastecimento a INNER JOIN caminhaoColeta c 
        ON a.idCaminhaoColeta = c.idCaminhaoColeta;
        `;

        const result = await mysql.execute(query, []);

        const response = { abastecimentos: Object.keys(result).map((key) => result[key]) };
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error });
    }
};

exports.getAbastecimentoById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const query = `
        SELECT a.idAbastecimento id, a.idCaminhaoColeta, c.placa, a.data, a.quantidade, a.valor, 
        a.quilometragem, a.mediaConsumo 
        FROM abastecimento a INNER JOIN caminhaoColeta c 
        ON a.idCaminhaoColeta = c.idCaminhaoColeta 
        WHERE a.idAbastecimento = ?;
        `;
        
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
        DELETE FROM abastecimento
        WHERE idAbastecimento = ?`;

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

        const abastecimentoData = Object.assign({}, {
            idCaminhaoColeta: req.body.idCaminhaoColeta,
            data: new Date(`${req.body.data}`).toLocaleDateString('en-CA'),
            quantidade: req.body.quantidade,
            valor: req.body.valor,
            quilometragem: req.body.quilometragem,
        });

        //verificar se existe o abastecimento
        var query = `SELECT idAbastecimento FROM abastecimento WHERE idAbastecimento = ?;`;
        
        var result = await mysql.execute(query, [ id ]);

        if(result.length == 0){
            return res.status(409).send({message: "Não existe nenhum abastecimento com esse id!"});
        }

        // verificar se o caminhão existe
        query = `SELECT idCaminhaoColeta FROM caminhaoColeta WHERE idCaminhaoColeta = ?;`;

        result = await mysql.execute(query, [ abastecimentoData.idCaminhaoColeta ]);

        if(result.length == 0){
            return res.status(409).send({message: "Caminhão inválido!"});
        }

        // procurar pelo ultimo abastecimento
        var query = `
        SELECT quantidade, quilometragem, MAX(data) AS data
        FROM abastecimento
        WHERE idCaminhaoColeta = ? AND data <= ? 
        GROUP BY quantidade, quilometragem;
        `;

        var result = await mysql.execute(query, [abastecimentoData.idCaminhaoColeta, abastecimentoData.data])

        if(result.length > 0) {
            if(result[0].quilometragem > abastecimentoData.quilometragem) {
                return res.status(409).send({message: "No ultimo abastecimento esse caminhão tinha uma quilometragem maior!"});
            }
            // calcular media de consumo
            abastecimentoData['mediaConsumo'] = (abastecimentoData.quilometragem - result[0].quilometragem) / result[0].quantidade;
        } else {
            abastecimentoData['mediaConsumo'] = '0';
        }

        abastecimentoData['id'] = id;

        query = `UPDATE abastecimento 
        SET 
        idCaminhaoColeta = ?,
        data = ?, 
        quantidade = ?,
        valor = ?, 
        quilometragem = ?, 
        mediaConsumo = ? 
        WHERE idAbastecimento = ?;
        `;

        await mysql.execute(query, Object.values(abastecimentoData));

        return res.status(200).send({ message: 'Atualizado com sucesso!' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};