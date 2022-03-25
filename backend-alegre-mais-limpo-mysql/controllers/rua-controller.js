const mysql = require('../mysql');

/*{
    nomeRua = '',
    complemento ='',
    qtdLatasLixo = '',
    qtdCasas = '',
    nomeZona = ''
}*/

exports.create = async (req, res, next) => {
    try {
        //verificando se a rua já está cadastrada
        var query = "SELECT * FROM rua WHERE nome = ?";
        var result = await mysql.execute(query, [req.body.nomeRua]);

        if (result.length > 0) {
            return res.status(409).send({ message: "Rua já cadastrada" });
        }

        //verificando se a zona está cadastrada
        var query = "SELECT idZona FROM zona WHERE nome = ?";
        var result = await mysql.execute(query, [req.body.nomeZona]);

        if (result.length == 0) {
            return res.status(409).send({ message: "Zona não cadastrada" });
        }

        const ruaData = Object.assign({}, {
            nomeRua: req.body.nomeRua,
            complemento: req.body.complemento,
            qtdLatasLixo: req.body.qtdLatasLixo,
            qtdCasas: req.body.qtdCasas,
            idZona: result.idZona
        });

        query = "INSERT INTO rua(nomeRua, complemento, qtdLatasLixo, qtdCasas, idZona) VALUES (?, ?, ?, ?, ?)";
        const response = await mysql.execute(query, Object.values(ruaData));

        return res.status(201).send(response);
    } catch (erro) {
        return res.status(500).send({ error: error });
    }
}

exports.getRuas = async (req, res, next) => {
    try {

        const query = `SELECT r.idRua id, r.nome, r.complemento, r.qtdLatasLixo, r.qtdCasas, z.nome zona 
        FROM rua r LEFT JOIN zona z ON r.idZona = z.idZona;`;

        const result = await mysql.execute(query, []);

        const response = { ruas: Object.keys(result).map((key) => result[key]) };
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error });
    }
};

exports.getRuaById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const query = `SELECT r.idRua id, r.nome, r.complemento, r.qtdLatasLixo, r.qtdCasas, z.nome zona
        FROM rua r LEFT JOIN zona z ON r.idZona = z.idZona
        WHERE r.idRua = ?;`;

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
        DELETE FROM rua
        WHERE idRua = ?`;

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

        //Objeto ruaDate sem o id
        const ruaData = Object.assign({}, {
            nome: req.body.nome,
            complemento: req.body.complemento,
            qtdLatasLixo: req.body.qtdLatasLixo,
            qtdCasas: req.body.qtdCasas
        });

        console.log(ruaData);

        //Objeto zonaData sem id
        const zonaData = Object.assign({}, {
            nome: req.body.zona
        });

        //query para selecionar o id da zona(nome da zona) que foi passado
        let query = `SELECT idZona FROM zona WHERE nome = ?;`;

        //executando a query
        const result = await mysql.execute(query, Object.values(zonaData));

        //verificando se retornou alguma zona
        //se não retornou uma zona a zona inserida não está cadastrada
        if(result.length == 0){
            return res.status(409).send({message: "Não existe uma zona com esse nome"});
        }

        //atribuindo o idZona que veio do banco de dados para a constante idZona
        const { idZona } = result[0];
        console.log(idZona);
        //adicionando o idZona e o id no objeto ruaData
        ruaData['idZona'] = idZona;
        ruaData['id'] = id;

        query = `UPDATE rua 
        SET
        nome = ?, 
        complemento = ?, 
        qtdLatasLixo = ?,
        qtdCasas = ?,
        idZona = ? 
        WHERE idRua = ?;
        `;

        await mysql.execute(query, Object.values(ruaData));

        return res.status(200).send({ message: 'Atualizado com sucesso!' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};