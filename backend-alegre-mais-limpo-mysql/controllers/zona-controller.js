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

exports.getZonas = async (req, res, next) => {
    try {
        let query = `
        SELECT idZona id, nome from zona;
        `;

        const result = await mysql.execute(query, []);
/*
        query = `SELECT nome FROM rua WHERE idZona = ?`;

        await result.forEach(async zona => {
            zona.ruas = [];

            let ruas = await mysql.execute(query, zona.id);
            console.log(typeof(ruas));
            ruas.forEach(rua => zona.ruas.push(rua));
            
        });
*/
        const response = {zonas: Object.keys(result).map((key) => result[key])};
        return res.status(200).send(response);
    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};

exports.getZonaById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const query = `
        SELECT idZona id, nome FROM zona WHERE idZona = ?;
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

        // ver se a zona existe
        var query = `
        SELECT idZona FROM zona WHERE idZona = ?
        `;

        var result = await mysql.execute(query, [ id ]);
        
        if(result.length == 0) {
            return res.status(409).send({message: "Não existe nenhuma zona com este id"});
        }

        const { idZona } = result[0];

        // ver se a zona não tem ruas ou se não está em uma escala
        query = `
        SELECT idRua FROM rua WHERE idZona = ? 
        UNION
        SELECT idZona FROM escala WHERE idZona = ?
        `;

        result = await mysql.execute(query, [ id, id ]);
        
        if(result.length > 0) {
            return res.status(409).send({message: "A zona não pode ser excluída pois contém ruas ou está em uma escala"});
        }

        // deletar zona
        query = `
        DELETE FROM zona
        WHERE idZona = ?`;

        await mysql.execute(query, [ idZona ]);

        return res.status(200).send({ message: 'Ok' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};

exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;

        const zonaData = Object.assign({}, { 
            nome: req.body.nome,
        });

        // ver se a zona existe
        var query = `
        SELECT idZona FROM zona WHERE idZona = ?
        `;

        var result = await mysql.execute(query, [ id ]);
        
        if(result.length == 0) {
            return res.status(409).send({message: "Não existe nenhuma zona com este id"});
        }

        query = `
        UPDATE zona
        SET 
        nome = ? 
        WHERE idZona = ?;
        `;

        zonaData['id'] = id;
        
        await mysql.execute(query, Object.values(zonaData));

        return res.status(200).send({ message: 'Atualizado com sucesso!' });

    } catch (error) {
        console.log(error.status);
        return res.status(500).send({ error: error });
    }
};