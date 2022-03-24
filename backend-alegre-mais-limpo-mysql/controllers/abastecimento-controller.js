const mysql = require('../mysql');

exports.create = async (req, res, next) => {
    try {
        //verificando se o caminhão está cadastrado
        var query = 'SELECT idCaminhaoColeta  FROM caminhaoColeta WHERE placa = ?';
        var result = await mysql.execute(query, [req.body.placa]);

        if (result.length == 0) {
            return res.status(409).send({ message: "Caminhão não cadastrada" });
        }

        const abstecimentoData = Object.assign({},{
            idCaminhoColeta: result.idCaminhoColeta,
            data: req.body.data,
            quantidade: req.body.quantidade,
            valor: req.body.valor,
            quilometragem: req.body.quilometragem,
            mediaConsumo: req.body.mediaConsumo
        });

        query = `INSERT INTO abstecimento
        (idCaminhaoColeta, data, quantidade, valor, quilometragem, mediaConsumo)
        VALUES (?, ?, ?, ?, ?, ?)`;

        const response = await mysql.execute(query, Object.values(abstecimentoData));
        return res.status(201).send(response);

    } catch (erro) {
        return res.status(500).send({ error: error });
    }
}

exports.getAbastecimentos = async (req, res, next) => {
    try {

        const query = `SELECT a.idAbastecimento id, c.placa, a.data, a.quantidade, 
        a.valor, a.quilometragem, a.mediaConsumo
        FROM abastecimento a INNER JOIN caminhoColeta c 
        ON a.idCaminhoColeta = c.idCaminhoColeta;`;

        const result = await mysql.execute(query, []);

        const response = { rua: Object.keys(result).map((key) => result[key]) };
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error });
    }
};

exports.getAbastecimentoById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const query = `SELECT a.idAbastecimento id, c.placa, a.data, a.quantidade, 
        a.valor, a.quilometragem, a.mediaConsumo
        FROM abastecimento a INNER JOIN caminhoColeta c 
        ON a.idCaminhoColeta = c.idCaminhoColeta
        WHERE a.idAbastecimento = ?;`;

        const result = await mysql.execute(query, [id]);

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

        //Objeto abastecimentoDate sem o id
        const abastecimentoData = Object.assign({}, {
            data: req.body.data,
            quantidade: req.body.quantidade,
            valor: req.body.valor,
            quilometragem: req.body.quilometragem,
            mediaConsumo: req.body.mediaConsumo
        });

        //Objeto caminhaoColetaData sem id
        const caminhaoColetaData = Object.assign({}, {
            placa: req.body.placa
        });

        //query para selecionar o id da zona(nome da zona) que foi passado
        const query = `SELECT idCaminhaoColeta FROM caminhoColeta WHERE placa = ?;`;

        //executando a query
        const result = await mysql.execute(query, Object.values(caminhaoColetaData));

        //verificando se retornou alguma zona
        //se não retornou uma zona a zona inserida não está cadastrada
        if(result.length == 0){
            return res.status(409).send({message: "Não existe uma caminhao com essa placa"});
        }

        //atribuindo o idCaminhaoColeta que vei do banco de dados para a constante idCaminhaoColeta
        const {idCaminhoColeta} = result[0];

        //adicionando o idCaminhaoColeta e o id no objeto abastecimentoDate
        abastecimentoData['idCaminhoColeta'] = idCaminhoColeta;
        abastecimentoData['id'] = id;

        query = `UPDATE abastecimento
        SET
        data = ?, 
        quatidade = ?, 
        valor = ?,
        quilometragem = ?,
        mediaConsumo = ?,
        idCaminhaColeta = ?
        WHERE idAbastecimento = ?;
        `;

        await mysql.execute(query, Object.values(abastecimentoData));

        return res.status(200).send({ message: 'Atualizado com sucesso!' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};