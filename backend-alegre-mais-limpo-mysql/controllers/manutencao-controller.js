const mysql = require('../mysql');

exports.create = async (req, res, next) => {
    try {
        //verificando se o caminhão está cadastrado
        var query = 'SELECT idCaminhaoColeta  FROM caminhaoColeta WHERE placa = ?';
        var result = await mysql.execute(query, [req.body.placa]);

        if (result.length == 0) {
            return res.status(409).send({ message: "Caminhão não cadastrada" });
        }

        const ManutencaoData = Object.assign({}, {
            idCaminhoColeta: result.idCaminhoColeta,
            data: req.body.data,
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

exports.getCaminhoes = async (req, res, next) => {
    try {

        const query = `SELECT m.idManutencao, id, c.placa, m.data, m.quilometragem,
        m.descricao, m.valor
        FROM manutencao m INNER JOIN caminhoColeta c 
        ON m.idCaminhoColeta = c.idCaminhoColeta;`;

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

        const query = `SELECT m.idManutencao, id, c.placa, m.data, m.quilometragem,
        m.descricao, m.valor
        FROM manutencao m INNER JOIN caminhoColeta c 
        ON m.idCaminhoColeta = c.idCaminhoColeta
        WHERE m.idManutencao = ?;`;

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
        DELETE FROM manutencao
        WHERE id = ?`;

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

        //Objeto manutencaoData sem o id
        const manutencaoData = Object.assign({}, {
            data: req.body.data,
            quilometragem: req.body.quilometragem,
            descricao: req.body.descricao,
            valor: req.body.valor
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
            return res.status(409).send({message: "Não existe uma caminha com essa placa"});
        }

        //atribuindo o idCaminhaoColeta que vei do banco de dados para a constante idCaminhaoColeta
        const {idCaminhoColeta} = result[0];

        //adicionando o idCaminhaoColeta e o id no objeto abastecimentoDate
        manutencaoData['idCaminhoColeta'] = idCaminhoColeta;
        manutencaoData['id'] = id;

        query = `UPDATE manutencao
        SET
        data = ?, 
        quilometragem = ?, 
        descricao = ?,
        valor = ?,
        idCaminhaColeta = ?
        WHERE idManuntencao = ?;
        `;

        await mysql.execute(query, Object.values(manutencaoData));

        return res.status(200).send({ message: 'Atualizado com sucesso!' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};